---
type: course
cssclasses:
  - lle-course
slug: using-ai-to-improve-ops-for-your-data-organization
url: "https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization"
duration_minutes: 61
duration: 1h 1m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEQIaqAbqxJ2Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1723231235728?e=2147483647&amp;v=beta&amp;t=Jxs35piAxwTcjk7C1Fb3H7HrvPILqDcVrJ1Rw8llUhQ"
linkedin_topic: Database Management
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]'
  - '[[Explore AI for Data Engineering]]'
prev_courses:
  - '[[AI Fundamentals for Data Professionals]]'
  - '[[Data-Centric AI- Best Practices, Responsible AI, and More]]'
next_courses:
  - '[[The 80-20 Rule of Data Science]]'
  - '[[Generative AI for Data Engineering- ChatGPT Power Tips]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Strategy and Planning","position":5,"total":10,"prev":"AI Fundamentals for Data Professionals","next":"The 80-20 Rule of Data Science"},{"path":"Explore AI for Data Engineering","position":3,"total":8,"prev":"Data-Centric AI- Best Practices, Responsible AI, and More","next":"Generative AI for Data Engineering- ChatGPT Power Tips"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/artificial-intelligence
  - topic/software-development
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Using%20AI%20to%20Improve%20Ops%20for%20Your%20Data%20Organization.md)

![Using AI to Improve Ops for Your Data Organization](https://media.licdn.com/dms/image/v2/D560DAQEQIaqAbqxJ2Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1723231235728?e=2147483647&amp;v=beta&amp;t=Jxs35piAxwTcjk7C1Fb3H7HrvPILqDcVrJ1Rw8llUhQ)

# Using AI to Improve Ops for Your Data Organization

> Amid the ever-evolving data landscape, organizations strive for operational efficiency and peak performance. However, managing intricate data ecosystems can present challenges in maintaining uptime, resolving issues promptly, and optimizing processes. Enter artificial intelligence—a game-changing solution poised to reshape data management practices and set new benchmarks. In this course, Priya Moh

> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization) | 1h 1m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Transformational change for your data organization
  - Introduction to DataOps and the benefits of using AI tools to enhance operations
- [**1. Data Cataloging and Classification with AI**](#1-data-cataloging-and-classification-with-ai) (4 videos)
  - Identify and prioritize your organization's data
  - How AI can be used to discover, catalog, and understand your data sources?
  - Automate data cataloging and classification using Collibra Data Intelligence Platform
  - Risks and controls for consideration
- [**2. Data Quality Monitoring and Metadata CI/CD with AI**](#2-data-quality-monitoring-and-metadata-cicd-with-ai) (7 videos)
  - Introduction to data quality monitoring and traditional methods
  - Enhance the quality of streaming data pipelines using AI and stream monitoring tools
  - Enhance the quality of batch processing pipelines using AI
  - Demonstration of AWS Glue data quality
  - Enhance the quality of structured and unstructured data using AI
  - Demonstration of automating data quality monitoring using Collibra Data Intelligence Platform
  - What to know before implementing AI for data quality automation
- [**3. Data Analytics and Decision-Making Using AI**](#3-data-analytics-and-decision-making-using-ai) (7 videos)
  - The power of data analytics, business intelligence tools, and AI
  - Demonstration of pattern recognition and predictive analytics using Power BI
  - Demonstration of automating anomaly detection and root cause suggestion using Power BI
  - Demonstration of automating sentiment analysis with Power BI
  - Forecasting time-series data using Power BI
  - Talk to your data using AI
  - Risks of using AI for data analytics and mitigating controls
- [**Conclusion**](#conclusion) (1 videos)
  - Extending AI in your data operations

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Transformational change for your data organization
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980&t=0)** - Imagine being able to accomplish in minutes what once took days or even weeks.
>
> **[0:07](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980&t=7)** Picture a world where your data teams operate with unprecedented efficiency, where costly errors are predicted and prevented before they occur, and where your organization stays ahead of the curve.
>
> **[0:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980&t=20)** Hi, I'm Priya Mohan.
>
> **[0:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980&t=22)** I work with a number of Fortune 500 clients to help them adopt AI optimized operations practices.
>
> **[0:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980&t=29)** You may also know me on LinkedIn as I am a top community voice for machine learning.
>
> **[0:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980&t=34)** In this course, you'll gain an in-depth understanding of the complex operations carried out by teams within data organizations.
>
> **[0:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980&t=42)** But more importantly, you'll discover how AI SaaS tools and automation can dramatically reduce time, cost, and effort compared to traditional methods.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1), picture (1)
> **Speakers:** - imagine (1)

#### Introduction to DataOps and the benefits of using AI tools to enhance operations
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=0)** - [Instructor] So what exactly is DataOps?
>
> **[0:03](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=3)** DataOps is like having a well-oiled machine for handling all your company's data needs.
>
> **[0:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=8)** Imagine you're running a busy kitchen in a restaurant that has data as the ingredients, and insights are the dishes served.
>
> **[0:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=16)** DataOps would be the system that ensures ingredients, or in our case, data, are always fresh and available.
>
> **[0:23](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=23)** Chefs, who are the data teams, work together smoothly, and customers, who are the data users, get their insights quickly, and exactly is ordered.
>
> **[0:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=33)** It's about making sure everyone in the organization knows what they're doing, has the right tools in a centralized location that's easy to find and can work together efficiently to provide insights consistently and quickly.
>
> **[0:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=48)** Just like how a good restaurant constantly improves its menu and services based on customer feedback, DataOps encourages continuous improvement in how a company handles, labels, and enriches its data.
>
> **[1:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=62)** It's about making data work for the business in the most efficient way possible from start to finish.
>
> **[1:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=70)** Gartner, a leading research and advisory company, defines DataOps as a collaborative data management practice focused on improving the communication, integration, and automation of data flows between data managers and data consumers across an organization.
>
> **[1:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=87)** Similarly, another definition from O'Reilly's book called "Getting DataOps Right" describes it as the automated, process-oriented methodology for making clean, reliable data available to teams throughout your company.
>
> **[1:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=102)** Both these definitions highlight key aspect of DataOps, which include collaboration, automation, and the goal of making data more accessible and useful across an organization.
>
> **[1:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=113)** Now, you might be wondering, why do we need DataOps?
>
> **[1:56](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=116)** What challenges does it address?
>
> **[1:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=118)** First and foremost, DataOps tackles the issue of miscommunication between teams.
>
> **[2:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=124)** In many organizations, data teams are dispersed and often have conflicting priorities.
>
> **[2:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=129)** This lack of collaboration can significantly hamper projects and lead to inefficiencies.
>
> **[2:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=135)** DataOps promotes a culture of collaboration and shared responsibility, breaking down silos between different teams involved in the data cycle.
>
> **[2:23](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=143)** Secondly, DataOps addresses issues in data access.
>
> **[2:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=146)** In today's complex data environment, accessing data from multiple sources can be challenging due to varying agreements, permissions, and formats.
>
> **[2:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=153)** This often leads to delays and errors.
>
> **[2:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=156)** And that's where DataOps comes in.
>
> **[2:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=158)** It helps implement practices and tools to streamline data access, ensuring that the right data is available to the right people at the right time.
>
> **[2:46](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=166)** Another challenge that DataOps addresses is technical debt.
>
> **[2:49](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=169)** Over time, organizations accumulate technical debt due to quick fixes, outdated systems, or neglected improvements, or people simply don't have time to work on fixing data that's been still.
>
> **[3:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=182)** This debt can slow down deployment and increase the risk of failures.
>
> **[3:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=186)** DataOps encourages continuous improvement in automation, helping to reduce and manage technical debt efficiently.
>
> **[3:14](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=194)** Lastly, DataOps overcomes the challenge of inflexible data architecture.
>
> **[3:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=198)** A poor designed architecture can become a bottleneck, preventing the system from scaling and adapting to new requirements.
>
> **[3:25](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=205)** DataOps promotes flexibility, scalable architecture that can evolve with the organization's needs.
>
> **[3:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=210)** It's important to note that DataOps isn't just about technology.
>
> **[3:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=215)** It represents a cultural shift in how organizations approach data management.
>
> **[3:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=221)** It borrows concepts from Agile methodology, and DevOps' applying them to the world of data and analytics.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1), just like (1)
> **CLI Commands:** find (1)
> **Code Keywords:** case, (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 1. Data Cataloging and Classification with AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Identify and prioritize your organization's data
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=0)** - [Instructor] Whether you're a small startup or a large organization, making sure that you have a good understanding of the internal data sources and external data sources of your organization before you identify an AI strategy for optimizing your data organization's efficiency.
>
> **[0:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=18)** Some of the internal data sources include sales data like, for example, sales transaction, customer contracts, lead conversion rates, et cetera, financial data such as billing, revenue, cost, profitability.
>
> **[0:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=31)** Next is marketing data, and then we have customer service data such as tickets, case resolutions, and then we have HR data such as employee records, performance review, payroll.
>
> **[0:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=43)** In addition to that, if your company produces a product, you may also have production data such as inventory, supply chain, manufacturing metrics, et cetera.
>
> **[0:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=52)** Majority of companies have technical data such as application logs, infrastructure monitoring and networking activities.
>
> **[0:59](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=59)** Now that we've explored some internal data that come from within the company, let's explore some external data sources.
>
> **[1:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=65)** Some of the external data sources may include open data, such as data published by government entities for public use.
>
> **[1:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=72)** Next, commercial data, which is third-party data purchased from vendors such as demographics, credit reports, et cetera.
>
> **[1:19](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=79)** And then we have social media data such as brand mentions, customer feedback, influencer engagement on public social platforms.
>
> **[1:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=87)** Then we have web data, which is web traffic, competitive analysis, SEO metrics, et cetera, which were obtained via web analytics tools.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=95)** You may also have survey data such as customer or employee market research data, which was conducted by third party agencies.
>
> **[1:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=103)** Other external data sources may include user-generated data such as reviews, complaints, or other feedback shared by online customers.
>
> **[1:50](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=110)** And then we may have IoT or sensor data.
>
> **[1:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=112)** If your company produces a product that uses IoT technology, then there may be data from instruments, devices, or assets that are externally monitored.
>
> **[2:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=122)** Once you identify the internal data sources and external data sources, the next most important step after identifying your organization's internal and external data sources is to make sure that you identify your data organization's key metrics and your organization's key metrics to ensure that both of them align.
>
> **[2:23](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=143)** Your metrics may include financial metrics such as ROI and data initiatives, such as return on investments from data-related projects or initiatives.
>
> **[2:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=151)** Another financial metric is cost of data quality, the cost associated with maintaining and improving data quality, which indicates the efficiency in resource utilization.
>
> **[2:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=161)** You also have data quality score, which is a comprehensive rating, reflective of data accuracy, consistency, timeliness and completeness of the data.
>
> **[2:51](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=171)** Next is rate of data incidents, the number of data breaches, losses, inaccuracy incidents indicating the data security and accuracy.
>
> **[3:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=180)** And then we also have data accessibility and availability.
>
> **[3:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=184)** Data availability percentage is the rate at which critical data assets are available for use, ensuring accessibility when needed.
>
> **[3:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=191)** And system uptime is when the proportion of time data sources or systems are operational indicating the reliability and accessibility of those data.
>
> **[3:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=201)** Lastly, we also have operational efficiency.
>
> **[3:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=204)** The efficiency gained through optimized data processes, reducing manual effort and operational cost.
>
> **[3:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=210)** To sum it up, some of the metrics that your data organization or your organization has can be related to financial metrics, metrics related to time consumption and/or metrics related to brand development or reputational growth.
>
> **[3:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=228)** So, in summary, we can have three different metrics, efficiency metrics, enablement metrics and enforcement metrics.

> [!info]- Semantic Content
>
> **Analogies:** such as (12), for example (1)
> **Code Keywords:** public (2), let (1)
> **Env Vars:** seo (1), roi (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How AI can be used to discover, catalog, and understand your data sources?
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=0)** - [Instructor] Now let's explore how AI catalogs and understands the data within your organization.
>
> **[0:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=6)** Let's explore five ways in which AI can drastically improve how your organization handles its data.
>
> **[0:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=13)** AI tools can now scan and catalog existing data repositories, databases, and file systems within your organization.
>
> **[0:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=21)** Algorithms are used to identify patterns in structures and data, making it easier to locate and categorize datasets, and here's how it works.
>
> **[0:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=30)** The process begins with scanning, where AI tools crawl through data sources.
>
> **[0:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=36)** As they do this, algorithms detect structures and formats within the data.
>
> **[0:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=41)** The AI then categorizes this data into groups and creates indexes for retrieval.
>
> **[0:47](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=47)** The benefits of this approach are notable.
>
> **[0:50](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=50)** It improves data accessibility, allowing users to find data more easily.
>
> **[0:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=55)** It helps reduce redundancy by identifying duplicate datasets.
>
> **[0:59](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=59)** This automation saves time, streamlining a process that was manual and time-consuming.
>
> **[1:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=65)** It also enhances data governance by providing oversight of an organization's data assets.
>
> **[1:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=72)** Similarly, AI algorithms analyze metadata associated with datasets to understand their characteristics, such as data types, formats, and relationships.
>
> **[1:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=82)** This analysis helps in creating an inventory of data sources, providing a picture of an organization's data landscape.
>
> **[1:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=90)** There are several aspects to AI driven meta-analysis.
>
> **[1:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=93)** It begins with extraction, where AI tools pool metadata from sources.
>
> **[1:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=98)** AI then identifies common attributes across datasets.
>
> **[1:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=101)** It maps relationships, discovering connections between data sources.
>
> **[1:46](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=106)** Finally, it evaluates the completeness and accuracy of the metadata.
>
> **[1:49](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=109)** The benefits are significant in that it provides understanding of the content and structure of the datasets, which is crucial for data management.
>
> **[1:59](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=119)** This helps users determine the suitability of a dataset for specific analysis or application, improves data lineage tracking, and enhances the data quality management.
>
> **[2:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=131)** Text mining and natural language processing are also increasingly being used for data management nowadays.
>
> **[2:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=136)** NLP techniques can be used to analyze textual content, including documentation, reports, and descriptions to identify mentions of data sources, their purposes, and interconnections.
>
> **[2:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=149)** Sentiment analysis helps in understanding the context of data mentions.
>
> **[2:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=153)** It enables tagging, applying labels to documents and datasets.
>
> **[2:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=158)** This helps your organization to gain insights from unstructured data, and it also improves the searchability of both structured and unstructured data.
>
> **[2:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=168)** AI can establish and track data lineage showing how data flows through an organization's systems.
>
> **[2:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=175)** This process is nothing but identifying where the data originated, how it changed, and where it ended up.
>
> **[3:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=182)** Here's how AI contributes to data lineage tracking.
>
> **[3:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=186)** First, AI tools can systems to identify data sources and destinations.
>
> **[3:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=190)** Then they analyze the data transformations at each step of the process.
>
> **[3:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=195)** Then they create a map of data flow across the organization.
>
> **[3:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=200)** Finally, they maintain this map in real time as data moves and changes.
>
> **[3:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=204)** This offers the clear understanding of data dependencies, which is crucial for managing complex data ecosystems.
>
> **[3:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=211)** This helps us to do impact analysis, help organizations predict how changes in one part of the system may affect others.
>
> **[3:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=220)** And it also supports compliance tracking, making it easy to meet regulatory requirements about data handling and privacy.
>
> **[3:47](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=227)** Now let's explore how AI uses pattern recognition.
>
> **[3:51](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=231)** Machine learning algorithms can recognize patterns within data and identify potential data sources based on similarities, common structures, or specific characteristics.
>
> **[4:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=242)** Here's how pattern recognition works in data management.
>
> **[4:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=246)** Algorithms analyze datasets to identify recurring patterns.
>
> **[4:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=250)** Then they categorize the data based on these patterns and detect anomalies or outliers that don't fit established patterns.
>
> **[4:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=258)** They can also predict future patterns based on historical data.
>
> **[4:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=262)** This enables organizations to discover insights from large and complex datasets that might be difficult for humans to process.
>
> **[4:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=270)** Pattern recognition can be used for various tasks.
>
> **[4:32](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=272)** For example, it can help in fraud detection by identifying unusual transaction patterns.
>
> **[4:37](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=277)** It's useful in predictive modeling, allowing organizations to forecast future trends based on historical data patterns.
>
> **[4:45](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=285)** It can also identify relationships between variables, uncovering connections that might not be immediately apparent.
>
> **[4:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=292)** By leveraging pattern recognition, organizations can make more informed decisions, improving their processes and gain a more competitive edge in their industry.
>
> **[5:03](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=303)** Now let's take a look at an example tool called Collibra Data Intelligence Platform that uses AI to enhance the data cataloging process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (2), this, (1)
> **Analogies:** such as (1), picture (1), for example (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### Automate data cataloging and classification using Collibra Data Intelligence Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=0)** - [Instructor] Now, let's put this into action and see how AI can be used for data cataloging and data classification.
>
> **[0:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=8)** We're going to explore a tool called Collibra Data Intelligence Platform.
>
> **[0:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=13)** Imagine you work for a large organization and your manager is asking you to build a report on employee promotions and sales distribution.
>
> **[0:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=21)** Your organization has a variety of datasets that you can choose from.
>
> **[0:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=26)** You've been tasked with identifying the right dataset that contains the relevant information requested by your manager.
>
> **[0:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=35)** Let's take a look at how AI simplifies this process and makes it efficient.
>
> **[0:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=41)** In the search bar, type promotion.
>
> **[0:45](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=45)** You see that this pulled several different datasets for us.
>
> **[0:49](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=49)** It pulled columns, it pulled Tableau workbooks, and it pulled tables.
>
> **[0:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=53)** We see over here that this table over here contains a comment that says about employee promotions, which seems very relevant to what we're looking for.
>
> **[1:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=62)** Let's now check to see which of these are certified.
>
> **[1:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=66)** A certified dataset is nothing but a dataset that has been reviewed and considered to hold reliable and trusted data.
>
> **[1:14](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=74)** We see over here that this table is the only dataset that has been certified.
>
> **[1:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=78)** Now, let's click on it to explore.
>
> **[1:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=80)** We see over here that AI has auto-generated some of the data catalogs for us.
>
> **[1:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=86)** Let's take a look.
>
> **[1:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=87)** This table has 17 columns and here are the data types.
>
> **[1:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=91)** And at the bottom over here, we see that it automatically cataloged the list of data points available in this dataset.
>
> **[1:39](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=99)** It also has a tab for the list of data responsibilities, such as custodians, owners, and SMEs.
>
> **[1:47](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=107)** If we look at the Columns tab, we see that it automatically classified the data for us further, where employee ID has been classified as UUID, and then we see that security number has been classified as SSN and so on.
>
> **[2:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=125)** Now that we're confident this is the right data, it's time for us to request access.
>
> **[2:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=130)** And that's pretty much it.
>
> **[2:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=132)** Traditionally, this cataloging and classification was done manually, was time-consuming, and required quite a bit of effort.
>
> **[2:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=141)** With the power of AI, we were able to simplify the cataloging and classification process, and were able to do this within minutes.
>
> **[2:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=151)** Now that we found the data that we need, let's try to understand the contextual information behind the dataset to further validate that we truly found the dataset that's most relevant to our use case.
>
> **[2:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=164)** As we see over here, this check mark denotes that it's been verified.
>
> **[2:50](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=170)** Now, let's click on the Technical Lineage tab.
>
> **[2:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=173)** We see here that the tool has automatically created a schema diagram showing the transformation that the data underwent, from source to destination.
>
> **[3:03](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=183)** Further, you can even inspect the SQL query used at a table and column level, which was auto-generated by AI as well.
>
> **[3:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=192)** Now, let's explore the data further by clicking on one of the columns.
>
> **[3:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=196)** So we see here this is a salary distribution chart, which was automatically, once again, created by the tool, and it includes data salary distribution across different employee levels.
>
> **[3:28](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=208)** Now, let's click on the Diagram tab and we see that the diagram view over here shows us where the data originated, what it represents, and who uses the data.
>
> **[3:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=221)** The tool not only provides us the context of the data, but also the data usage within the organization.
>
> **[3:51](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=231)** So, to summarize this demo, we saw how AI can be used for data cataloging, data classification, and auto-creation of schema diagrams, and we saw how it provides an end-to-end view of who produces the data and who uses the data within your organization.
>
> **[4:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=250)** I would like for you to take a moment to think about how AI can be used within your organization to optimize the processes and perform these tasks within few minutes using the power of AI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), from. (1), for. (1), case. (1)
> **Env Vars:** uuid (1), ssn (1), sql (1)
> **UI Navigation:** click on (3)
> **Analogies:** imagine (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Risks and controls for consideration
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=0)** - [Instructor] Isn't it absolutely fascinating and exciting that we have these AI tools at our fingertips and it can save us time and effort that previously was impossible?
>
> **[0:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=13)** But before we dive into implementing these AI tools, let's explore some of the risks and challenges we face while implementing these AI tools.
>
> **[0:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=24)** There is a known risk of AI models misinterpreting or misclassifying data, which can lead to some serious inaccuracies.
>
> **[0:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=31)** To combat this, we need to implement robust data quality checks and validation processes.
>
> **[0:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=38)** It's also very important to maintain human oversight.
>
> **[0:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=41)** Think of it as belt and suspenders approach.
>
> **[0:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=44)** We're using both automated systems and human expertise to ensure our data stays accurate.
>
> **[0:50](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=50)** Before you implement an AI tool to perform auto-cataloging and auto-classification, please ensure that your team performs adequate testing with representative data to make sure that the cataloging and the classification is in line with the expectations of your organization.
>
> **[1:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=69)** Make sure to check for data quality issues and data integrity issues.
>
> **[1:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=75)** Do this testing before you implement the data and even after you implement the data, do periodic assessments to make sure that the AI tool is performing as intended.
>
> **[1:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=87)** Next, we have integration challenges.
>
> **[1:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=90)** Fitting AI tools into existing systems can be like solving a complex puzzle.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=95)** The solution? Do your due diligence.
>
> **[1:37](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=97)** Assess how compatible these AI tools are with your current setup before you dive in.
>
> **[1:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=103)** A well thought out integration plan can save you a lot of headaches down the road.
>
> **[1:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=108)** Let's say your organization does not want to use a SaaS AI tool that's out in the market today and would like to produce or create its own AI tool.
>
> **[1:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=118)** In that case, please ensure that your organization trains the model on a diverse set of data.
>
> **[2:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=126)** If we don't provide our AI with diverse representative datasets, we're setting ourselves up for failure.
>
> **[2:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=133)** The fix is pretty straightforward.
>
> **[2:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=135)** Use varied data for training and keep updating your model.
>
> **[2:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=138)** It's an ongoing process.
>
> **[2:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=140)** Your AI needs to keep learning to stay relevant in our ever-changing data landscape.
>
> **[2:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=146)** Lastly, we have the challenge of unstructured data.
>
> **[2:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=150)** AI can sometimes struggle with interpreting data and images accurately.
>
> **[2:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=154)** To address this, we need to invest in specialized models and algorithms designed specifically for handling unstructured data.
>
> **[2:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=161)** It's like giving your AI the right tools for the job.
>
> **[2:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=164)** By implementing these solutions, we can significantly reduce risks and maximize the benefits of AI in data cataloging.
>
> **[2:51](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=171)** Remember, AI is a powerful tool, but it needs the right approach to truly shine in our data ecosystem.
>
> **[2:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=178)** Last but not least, please ensure that there are adequate security controls in place so that the privileged access to these AI tools and any related settings that can be altered are only within the hands of the right people.
>
> **[3:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=193)** Please ensure that there are security controls in place to make sure that the right folks have access to the right privileges and that these privileges and activities are monitored periodically.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2), case, (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Analogies:** think of it as (1), it's like (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 2. Data Quality Monitoring and Metadata CI/CD with AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to data quality monitoring and traditional methods
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=0)** - [Instructor] Now let's explore how data quality checks can be automated using AI.
>
> **[0:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=5)** Data quality checks are performed to ensure that data within an organization meet standards for accuracy, completeness, consistency, and validity.
>
> **[0:14](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=14)** Some of the common data quality issues out there are incomplete data where we have missing values or incomplete records.
>
> **[0:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=21)** We can also have inaccurate data, such as incorrect or outdated information, inconsistent data, such as contradictions or discrepancies between different data sources, or duplicate data, where we see the presence of identical records in the same dataset.
>
> **[0:39](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=39)** Imagine if you were to go back a few years, data quality checks were performed manually, and were inefficient because of the time-consuming nature of the process, and the limitation of human capacity to handle large volumes of data.
>
> **[0:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=52)** Let me paint a picture for you.
>
> **[0:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=53)** In those days, data analysts would spend hours, sometimes even days, pouring over spreadsheets and database entries.
>
> **[1:01](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=61)** They'd manually scan for inconsistencies, missing values, and inaccuracies.
>
> **[1:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=66)** It was like looking for a needle in a haystack, but the haystack was made of numbers and text.
>
> **[1:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=72)** Companies would set up rules for data validation.
>
> **[1:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=76)** For example, they might specify that all phone numbers must have 10 digits, then the teams would run these rules against their databases, often as overnight batch processes.
>
> **[1:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=87)** The next morning, they'd come back to find lists of flagged entries that didn't meet the criteria, and from there, it was just a matter of human intervention.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=95)** Analysts then go and investigate each flagged entry, determine the cost of the issue, and make corrections manually.
>
> **[1:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=102)** This process was not only time-consuming, but also prone to human error.
>
> **[1:47](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=107)** Data reconciliation was another challenge.
>
> **[1:49](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=109)** When data existed in multiple systems, teams had to manually compare and align these datasets.
>
> **[1:56](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=116)** This process was tedious, and often resulted in temporary fixes, rather than addressing the true root cause.
>
> **[2:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=122)** While these methods were the best available at the time, they struggled to keep pace with the growing volume and complexity of the data.
>
> **[2:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=129)** As datasets grew from megabytes to gigabytes and beyond, these manual processes became increasingly impractical.
>
> **[2:17](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=137)** The inefficiency led to a growing need for a more automated, intelligent solution, paving the way for AI-driven data quality management tools that we see today.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), imagine (1), picture (1), for example (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Enhance the quality of streaming data pipelines using AI and stream monitoring tools
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=0)** - [Instructor] Let's explore how quality monitoring for various data types, such as streaming data, batch data, structured, unstructured and semi-structured data can be automated using AI.
>
> **[0:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=11)** Streaming data is a continuous flow of real-time information from various sources requiring immediate processing and analysis.
>
> **[0:19](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=19)** Some examples of streaming data are IoT sensor data, financial transaction logs, social media feeds, and health monitoring device data.
>
> **[0:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=29)** For streaming data, real-time processing is absolutely crucial.
>
> **[0:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=34)** AI models can be trained to validate incoming data on the fly.
>
> **[0:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=38)** These models can check for schema compliance, data type consistency, and adherence to business rules.
>
> **[0:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=44)** So for example, an AI system could instantly flag anomalies and sensor data from IoT devices ensuring only quality data moves downstream.
>
> **[0:54](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=54)** Machine learning algorithms can learn patterns in your data stream and automatically apply cleansing rules.
>
> **[1:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=60)** These could include deduplication of records, standardization of formats like date formats, or address formats and imputation of missing values based on historical patterns.
>
> **[1:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=71)** AI powered monitoring system can track data quality metrics in real time.
>
> **[1:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=75)** They can learn normal patterns and alert when deviations occur.
>
> **[1:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=78)** This proactive approach allows for immediate intervention when data quality issues arise.
>
> **[1:25](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=85)** Integrate the AI tool of choice with streaming data platform like Apache Kafka or Amazon Kinesis to ingest and process real-time data.
>
> **[1:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=93)** Use of anomaly detection algorithms such as isolation forest, autoencoders, to analyze streaming data and identify deviations from expected patterns.
>
> **[1:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=103)** AI can also be used to establish dynamic thresholds for sending real-time alerts.
>
> **[1:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=108)** When anomalies are data quality issues are detected.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** apache (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Enhance the quality of batch processing pipelines using AI
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=0)** - [Instructor] While batch processing doesn't have the same real-time constraints as streaming, AI can still significantly enhance and automate data quality processes.
>
> **[0:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=9)** AI can analyze large batches of data to automatically generate data profiles.
>
> **[0:14](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=14)** These profiles can identify data distributions, patterns, and potentially, quality issues without manual intervention.
>
> **[0:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=22)** By analyzing historical data and data correction patterns, AI can suggest and even implement data quality rules.
>
> **[0:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=29)** This reduces a need for manual rule creation and maintenance.
>
> **[0:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=33)** Once you identify the data quality tool of your choice, consider integrating it with orchestration tools like Apache Airflow or Kubernetes for automating remediation workflows.
>
> **[0:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=43)** In addition to the AI features, you can execute predefined scripts or actions to correct issues, such as filling missing values, updating records, or triggering data quality checks.
>
> **[0:54](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=54)** Machine learning models can predict potential data quality issuers before they occur, using historical data to understand normal data patterns.
>
> **[1:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=62)** For example, they may forecast when a particular data source is likely to produce errors based on the historical patterns.
>
> **[1:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=70)** In addition, you can deploy models for real-time scoring to predict anomalies as new data streams in.
>
> **[1:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=76)** AI is also used to incorporate a feedback loop to continuously update models with new data and adapt to evolving patterns.
>
> **[1:25](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=85)** Let's put this into action and discuss how AWS Glue evaluates data quality rules.
>
> **[1:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=91)** AWS Glue is a tool that's provided as part of the AWS suite of products.
>
> **[1:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=96)** If your organization is already using AWS, then this is a great choice.
>
> **[1:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=101)** AWS Glue collects data statistics when assessing data quality rules.
>
> **[1:46](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=106)** For instance, it might count unique values in a data set and compare this to expected values.
>
> **[1:51](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=111)** The data quality rule engine then evaluates these statistics against defined thresholds to check if quality requirements are met.
>
> **[1:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=118)** Over time, these statistics enable anomaly detection in your ETL pipeline.
>
> **[2:03](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=123)** AWS Glue's machine learning algorithm can learn from historical data and identify hidden patterns, which are reports as observations.
>
> **[2:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=133)** Observations are AI-generated insights that come with suggested data quality rules.
>
> **[2:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=138)** You can add these to your rule set to monitor newly discovered patterns.
>
> **[2:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=142)** For best results, run your jobs on a consistent schedule, like hourly or daily.
>
> **[2:28](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=148)** Irregular job runs may lead to less accurate insights.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (6), apache (1)
> **Env Vars:** aws (6), etl (1)
> **Analogies:** such as (1), for example (1), for instance (1), compare this to (1)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Demonstration of AWS Glue data quality
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=0)** - [Narrator] Now let's check out a demo of the AWS Glue Data Quality Tool.
>
> **[0:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=4)** If you would like to revisit how this tool works in the background and uses machine learning, you can check out the previous lesson.
>
> **[0:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=12)** Now let's get started.
>
> **[0:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=13)** To enable anomaly detection, you can open AWS Glue Studio job and toggle to enable anomaly detection.
>
> **[0:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=21)** Turning this enables anomaly detection on your data by analyzing your data over time and providing statistics about your data and observations that you can act on.
>
> **[0:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=31)** To enable anomaly detection in AWS Glue Studio, choose the data quality node in your job, then choose the anomaly detection tab.
>
> **[0:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=38)** Toggle to enable anomaly detection.
>
> **[0:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=43)** Now it's time to define the data to monitor for anomalies by choosing the ad analyzer.
>
> **[0:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=48)** There are two views you can populate, statistics and data.
>
> **[0:51](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=51)** Statistics are information about your data's shape and other properties.
>
> **[0:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=55)** You can choose one or more statistics at a time or choose all statistics.
>
> **[1:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=60)** Statistics include completeness, uniqueness, mean, sum, standard deviation, and so on.
>
> **[1:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=66)** Data is the columns in your data set.
>
> **[1:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=68)** You can choose all columns or individual columns.
>
> **[1:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=70)** Choose Add anomaly detection scope to save your changes.
>
> **[1:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=75)** Next, as discussed in our previous lesson, analyzers detect anomalies in your data generating observations and recommendations to help build rules.
>
> **[1:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=84)** View these rules in the data quality tab.
>
> **[1:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=87)** Observations are specific to each job run with the current data quality node and job run displayed at the top of the observation section.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=95)** To view observations for a different note or job, simply select it from the available options.
>
> **[1:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=100)** In the screenshot over here, we see four different sections.
>
> **[1:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=103)** First is the observation section, which provides insights for specific job run configured by the rule sets and analyzers that you specified.
>
> **[1:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=112)** Next is the related metrics.
>
> **[1:54](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=114)** When observations are generated, the related metric column shows the rule and the actual and expected values, as well as lower and upper limits.
>
> **[2:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=122)** Rule recommendations.
>
> **[2:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=124)** AWS Glue then also recommends rules to address this.
>
> **[2:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=126)** Each rule that is recommended can be copied by clicking the copy icon.
>
> **[2:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=131)** You can copy all recommendation rule by clicking the copy icon next to each rule, and then clicking Apply copied rules.
>
> **[2:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=138)** And then we have monitored data.
>
> **[2:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=140)** The observed data column provides the column or row that was monitored and triggered the observation.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (4), node (2)
> **Env Vars:** aws (4)
> **Code Keywords:** let (2), this. (1)
> **UI Navigation:** toggle (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)

#### Enhance the quality of structured and unstructured data using AI
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=0)** - [Narrator] Now let's see how AI can be used to enhance the quality of structured and unstructured data.
>
> **[0:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=6)** Natural language processing, otherwise known as NLP, can extract entities, categorize data, identify sentiment, enhance the quality and usability of textual data.
>
> **[0:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=16)** Computer vision algorithms can analyze and categorize images, ensuring that they meet quality standards before entering your data pipeline.
>
> **[0:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=24)** AI can help parse and standardize semi-structured data like JSON or XML.
>
> **[0:28](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=28)** Machine learning models can learn the structure of your semi-structured data and flag inconsistencies or structure errors.
>
> **[0:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=35)** They can also assist in schema mapping, like making it easier to integrate diverse data sources.
>
> **[0:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=42)** There are some overarching AI techniques and features, which can significantly enhance data quality.
>
> **[0:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=48)** AI powered knowledge graphs can map relationships between data elements, providing context that enhance data quality checks.
>
> **[0:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=55)** They can help identify inconsistencies across different data sources and suggest corrections.
>
> **[1:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=62)** Large language models, otherwise known as LLMs, can be fine tuned to understand your specific data domain.
>
> **[1:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=69)** They can generate complex data quality rules based on natural language descriptions, assist in data cleansing by suggesting corrections for inconsistent or incorrect data.
>
> **[1:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=80)** They can also help in data integration by understanding and mapping different data schemas.
>
> **[1:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=86)** Advanced anomaly detection algorithms can work across various data types and processing paradigms to identify outliers and potential data quality issues.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (1), json (1), xml (1)
> **Definitions:** known as (2)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Demonstration of automating data quality monitoring using Collibra Data Intelligence Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=0)** - [Instructor] Now let's see a demo of how AI can be used for data quality monitoring.
>
> **[0:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=5)** Collibra Data Quality Tool leverages Spark-based parallel processing to efficiently analyze extensive datasets, offering both horizontal and vertical scaling capabilities.
>
> **[0:17](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=17)** This enables comprehensive scanning of large scale databases and diverse file systems.
>
> **[0:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=22)** They've got you covered with over 30 built in connectors, but here's the cool part.
>
> **[0:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=27)** If you've got a unique data source, no worries.
>
> **[0:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=30)** You can bring your own connector.
>
> **[0:32](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=32)** Plus, they've got this neat feature called push down processing, which basically means you can run data quality checks right where your data lives.
>
> **[0:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=42)** Next, let's start the data quality job.
>
> **[0:45](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=45)** There are several rules or features to keep your data in great shape.
>
> **[0:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=48)** First off, it'll keep an eye on how many rows you've got and how long your jobs are taking.
>
> **[0:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=53)** That's the availability check.
>
> **[0:56](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=56)** Then it'll look at how unique your data is to ensure we don't have too many duplicates hanging around, which is the uniqueness piece.
>
> **[1:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=65)** It also checks for completeness to ensure there are no null values or empty fields hiding in our columns.
>
> **[1:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=71)** There are several rules or features available to keep your data in great shape.
>
> **[1:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=75)** First off, it'll keep an eye on how many rows you've got and how long your jobs are taking.
>
> **[1:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=81)** That's our availability check.
>
> **[1:23](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=83)** Then it'll look at how unique your data set is to ensure we don't have too many duplicates hanging around, which is the uniqueness piece.
>
> **[1:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=91)** It also checks for completeness to ensure that there are no null values or empty fields hiding in our columns.
>
> **[1:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=98)** For conformity, it'll make sure that your values aren't too high, too low, or way off the average.
>
> **[1:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=104)** Lastly, there's advanced rules such as checks on schema changes.
>
> **[1:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=108)** It'll let you know if data types suddenly switch up or if columns are added or drop when you're not looking.
>
> **[1:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=115)** Now, let's run the job.
>
> **[1:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=118)** The data profile table provides comprehensive insights into column level data quality metrics, automatically compiling various statistics from the DQ job we just ran.
>
> **[2:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=129)** These insights help distinguish between relative metrics for numeric and non-numeric data, covering aspects like data type, quality percentages, uniqueness and null values or empty values.
>
> **[2:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=146)** For a deeper dive into column level insights, you can simply click on any row in the profile page to expand it and view additional information.
>
> **[2:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=154)** The B stands for baseline and R stands for run or the current data, and percentage to compare historical and current data quality metrics for each column.
>
> **[2:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=164)** This comparison allows users to quickly identify changes and trends in various aspects of data quality.
>
> **[2:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=172)** Next, we have histogram on the Histogram tab over here.
>
> **[2:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=175)** This histogram tab visually displays value distributions for dataset columns, allowing users to quickly grasp distinct value counts and frequencies by hovering over histogram bars.
>
> **[3:07](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=187)** Next, let's go to the Correlation tab.
>
> **[3:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=189)** The Correlation tab displays a matrix of correlation coefficients between dataset columns, revealing hidden relationships and their strengths.
>
> **[3:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=198)** Now that we've scanned and understood the data, now it's time for us to review the anomalies automatically identified by AI for us.
>
> **[3:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=206)** Over here in the data quality dashboard, we see that the data quality score has reduced to 54.
>
> **[3:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=213)** Let's dig deep to see why.
>
> **[3:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=216)** The behavior tab highlights data changes such as changes in unique value counts.
>
> **[3:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=220)** Today, only one office location has been detected in the data when typically it's about 15.
>
> **[3:46](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=226)** This impacts the quality score and shows signs that something is abnormal.
>
> **[3:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=232)** Now let's click on View AR.
>
> **[3:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=235)** This section provides a detailed overview of automated quality checks, including rule types, passing conditions, and current statuses.
>
> **[4:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=245)** The system's pretty smart.
>
> **[4:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=246)** It figures out and tweaks boundaries between values on its own as it crunches more data.
>
> **[4:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=252)** This means you don't have to keep manually changing the rules every time the data changes.
>
> **[4:17](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=257)** This saves you a ton of work in the long run.
>
> **[4:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=260)** These boundaries between the values are auto-determined and auto-adapted as more data is analyzed.
>
> **[4:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=266)** Now let's explore the Outlier tab.
>
> **[4:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=269)** The Outlier tab contains detailed Outlier detection information, including affected columns, values, and counts.
>
> **[4:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=278)** A confidence score system to indicate the likelihood of a value being an outlier.
>
> **[4:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=284)** It also contains status management option to validate, invalidate, or resolve findings, allowing for system training.
>
> **[4:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=292)** Now let's check out the Dupes tab.
>
> **[4:54](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=294)** The Dupes tab contains information on duplicate values in columns, including exact and fuzzy match.
>
> **[4:59](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=299)** We see here that we have, we see that this value appears in the data twice.
>
> **[5:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=305)** Additionally, changes in column structures and patterns schemas are automatically caught before they impact the business.
>
> **[5:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=311)** To summarize, in this demo, we explored how AI can automate data quality management.
>
> **[5:17](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=317)** We saw how AI powered systems can efficiently analyze large scale data, enabling comprehensive data quality checks across diverse data sources from 30 different locations.
>
> **[5:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=327)** We saw how it can automate anomaly detection to identify unexpected changes in data patterns, such as shifts in unique value counts, and presence of outliers, all without requiring any manual rule creation.
>
> **[5:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=341)** We saw how machine learning algorithms can provide detailed insights or reports through automated generation of data profiles, histograms, and correlation matrices offering a comprehensive view of data quality without any manual analysis.
>
> **[5:59](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=359)** We also saw how AI can provide intelligent outlier detection with confidence scoring, helping us prioritize which anomalies need immediate attention.
>
> **[6:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=370)** AI powered systems can continuously learn from data patterns and user feedback, progressively improving their ability to detect and classify data quality issues over time, reducing our manual efforts and increasing our efficiency.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), switch (1), type, (1), match. (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** stands for (2), basically means (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### What to know before implementing AI for data quality automation
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=0)** - [Instructor] Now that you understand how AI can be used to automate data quality monitoring, before you start implementing AI, let's take a look at a few risks and some best practices for implementing AI driven data quality automation.
>
> **[0:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=15)** Some of the common risks associated with implementing AI as part of this process is misidentification of critical data quality issues, implementation of misaligned or ineffective AI solutions, biased or inaccurate AI model performance, stakeholder resistance, degradation of AI model effectiveness over time.
>
> **[0:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=35)** To combat these risks, here are some of the best practices for implementing AI.
>
> **[0:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=41)** Start with the data quality assessment within your organization to identify your biggest pain points.
>
> **[0:46](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=46)** Does your organization struggle with data quality as a result of data being siloed and not in a central location?
>
> **[0:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=53)** Or does your data come from sources that are generally not reliable?
>
> **[0:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=58)** Choose AI tools that align with your specific needs.
>
> **[1:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=62)** Many cloud providers and data management platforms now offer AI enhanced data quality features, such as the AWS Glue Data Quality tool that we looked at.
>
> **[1:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=72)** If you are building your AI data quality monitoring tool from scratch, ensure that you have a good training data set for your AI model.
>
> **[1:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=80)** The quality of your AI is only as good as the data it learns from.
>
> **[1:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=84)** Implemented in phases, regardless of whether you decide to build an AI tool or use a SaaS tool, start with a pilot project to demonstrate the value to your key stakeholders.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=95)** Continuously monitor and refine your AI models to ensure that they adapt to changing data patterns.
>
> **[1:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=101)** Remember, while AI can greatly enhance and automate data quality processes, it is not a magic solution.
>
> **[1:47](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=107)** Human oversight and domain expertise remain crucial in ensuring that your AI driven data quality process aligns with business needs and regulatory requirements.
>
> **[1:57](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=117)** So to summarize, by leveraging these AI driven approaches, you can significantly improve the efficiency and effectiveness of your data quality management, leading to more reliable data for analytics decision making and AI, ML initiatives.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), from. (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Data Analytics and Decision-Making Using AI

> [↑ Back to Table of Contents](#table-of-contents)

#### The power of data analytics, business intelligence tools, and AI
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=0)** - [Instructor] Now that we've learned about tools that can identify data catalog and classify the data, and we saw how to use AI to perform data quality monitoring, it's finally time to put that data into use, like making diamonds out of coal.
>
> **[0:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=16)** Data analytics is the process of examining data to uncover patterns and draw conclusions.
>
> **[0:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=22)** It's like detective work.
>
> **[0:23](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=23)** Analysts piece together information to solve business problems.
>
> **[0:28](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=28)** A retail company might analyze sales data to determine popular products in different seasons.
>
> **[0:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=34)** Business intelligence tools, also known as BI tools, collect, process and visualize data from various sources.
>
> **[0:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=42)** They're like the Swiss Army knives of the data world.
>
> **[0:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=44)** These tools transform numbers into charts, dashboards, and reports.
>
> **[0:49](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=49)** Now let's talk about AI's role in enhancing data analytics.
>
> **[0:54](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=54)** AI processes data at high speeds recognizes patterns and predicts trends.
>
> **[1:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=60)** Here's an example.
>
> **[1:01](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=61)** Imagine you're running an e-commerce platform.
>
> **[1:03](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=63)** Traditional analytics might show which products are selling.
>
> **[1:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=66)** BI tools could display sales trends.
>
> **[1:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=69)** AI-enhanced analytics can predict future popular products, suggest customer recommendations, and detect potential fraud in real time.
>
> **[1:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=78)** As you can see with AI, we can not only see the data and understand the data visually with the BI tools, AI brings several capabilities to data analytics, such as automated data preparation, pattern recognition, predictive analysis, natural language processing, automated insights and personalized dashboards.
>
> **[1:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=100)** We see these capabilities and actions through various BI tools.
>
> **[1:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=104)** Microsoft Power BI offers insights that highlight trends in your data.
>
> **[1:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=108)** Tableau's Ask Data feature allows you to query data using natural language.
>
> **[1:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=113)** We have other BI tools that also have similar AI capabilities, like IBM Cognos Analytics, Qlik Sense, Looker, SAP Analytics Cloud, et cetera.
>
> **[2:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=125)** The combination of data analytics BI tools and AI is changing businesses across industries.
>
> **[2:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=130)** Healthcare organizations predict patient outcomes.
>
> **[2:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=133)** Financial institutions detect fraudulent transaction, manufacturers optimize supply chains and predict equipment failures.

> [!info]- Semantic Content
>
> **Analogies:** it's like (1), imagine (1), such as (1)
> **Env Vars:** ibm (1), sap (1)
> **Code Keywords:** let (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Demonstration of pattern recognition and predictive analytics using Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=0)** - [Instructor] AI excels at identifying complex patterns and trends and data that might be missed by human analyst.
>
> **[0:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=6)** AI models can forecast future trends and outcomes based on historical data.
>
> **[0:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=11)** The Key Influencers Visual is an AI powered tool that identifies and ranks factors driving business metrics.
>
> **[0:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=18)** It uses pattern recognition and predictive analysis to reveal trends in forecast outcomes.
>
> **[0:25](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=25)** This tool simplifies complex data analysis and enables data-driven decisions by providing clear insights on the most impactful factors affecting specific metrics.
>
> **[0:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=36)** It helps businesses focus efforts where they'll have the greatest effect.
>
> **[0:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=42)** Now, let's take a look at this tool in action.
>
> **[0:46](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=46)** Using the same sample report that we used for the last demo, click on the plus sign to add a new page.
>
> **[0:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=53)** Go to the Visualization section and click on the Key influencers icon.
>
> **[1:01](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=61)** Now, it's time to add data fields.
>
> **[1:03](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=63)** Let's expand on Sales and Item.
>
> **[1:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=68)** So click on Buyer, Category.
>
> **[1:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=73)** So as you see over here, let's maximize this a little bit.
>
> **[1:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=82)** Over here, the Key Influencers tab provides us insight into what influences a buyer.
>
> **[1:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=87)** So for example, Galvin Barrett is likely to buy from the category of products labeled as women, and Galvin is also likely to buy when there is a promo going on.
>
> **[1:39](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=99)** The likelihood of Galvin buying a product, if it's marked as promo, is 4.34.
>
> **[1:45](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=105)** Let's take a look at a similar example.
>
> **[1:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=108)** The likelihood of Shelly Thomas buying a product increases by 28.45 when the product is categorized as promo, and Shelly is also likely to buy from other categories such as Mens, BASICS and JUNIORS.
>
> **[2:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=126)** This visual helps you understand what motivates or what incentivizes your customers.
>
> **[2:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=133)** Let's take a look at another example.
>
> **[2:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=136)** If you go back to the Learn option within your Power BI dashboard, you'll see that there's another sample report called Artificial Intelligence Sample.
>
> **[2:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=144)** Click on this.
>
> **[2:25](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=145)** And you'll see that the first page that shows up is Key influencers.
>
> **[2:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=149)** This is another example of key influencers being used on another dataset.
>
> **[2:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=154)** As you see over here, on average, when the discount increases, the likelihood of status being, one, increases, or in other words, there's a higher chance of revenue increase, and this is backed up by data.
>
> **[2:47](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=167)** If discount goes up by 0.2%, the likelihood of revenue increase is 2.76 times.
>
> **[2:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=175)** And revenue also goes up when the sales owner is Molly Clark, or if the product is tablet.
>
> **[3:03](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=183)** As you see over here, the Key influencers option provides clear insights on the most impactful factors affecting the specific metrics that your team cares about.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (1)
> **UI Navigation:** click on (4), go to (1)
> **Versions:** 4.34 (1), 28.45 (1), 0.2 (1), 2.76 (1)
> **Definitions:** is an  (1), is a  (1), in other words (1)
> **Env Vars:** basics (1), juniors (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Demonstration of automating anomaly detection and root cause suggestion using Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=0)** - [Tutor] Power BI's anomaly detection feature, eases AI to automatically identify unusual patterns or outliers in data, helping analysts quickly spot and investigate unexpected trends or data points, without manual intervention.
>
> **[0:14](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=14)** It provides multidimensional AI visualization, helping us to drill down, to obtain in-depth breakdown of the data, based on your criteria and can be used for root cause analysis.
>
> **[0:28](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=28)** Now, let's take a look at this in action.
>
> **[0:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=31)** In the artificial intelligence sample report, go to the Anomaly Detection tab.
>
> **[0:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=36)** We see over here that the anomaly detection option has been enabled and if we click on this graph at the point where it has detected the anomaly, we see that AI provides a clear understanding of what the anomaly is.
>
> **[0:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=52)** The revenue one was unexpectedly low on 28th, although the revenue itself was pretty high in the graph, we see that the expected minimum value for the revenue on April 28th was 105K, and the expected max value was one 13K.
>
> **[1:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=70)** However, the actual revenue one was 103 or close to 104K, which is low.
>
> **[1:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=78)** AI also provides possible explanation for why the anomaly occurred.
>
> **[1:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=82)** It states that the revenue one for factor three was unusually low, which may have lowered the revenue one total.
>
> **[1:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=89)** And let's see what revenue one for three means.
>
> **[1:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=93)** And we see over here that campaigns with factor number three may have contributed to the anomaly that was detected.
>
> **[1:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=102)** So consumer trade shows, market trends newsletters, new product release emails did not work as expected.
>
> **[1:50](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=110)** As you see with the click a few buttons, we were able to identify anomalies and also get possible explanation for why these anomalies may have occurred and drill down to the factors that led to the anomaly.
>
> **[2:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=122)** In this case, we had campaigns that did not work as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - [tutor] (1)

#### Demonstration of automating sentiment analysis with Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=0)** - [Instructor] Now imagine you're a business trying to understand how your customers feel about your products.
>
> **[0:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=5)** You have thousands of reviews, but how do you quickly gauge the overall sentiment?
>
> **[0:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=11)** This is where our score sentiment function comes into play.
>
> **[0:14](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=14)** PowerBI's AI analyzes text and assigns a sentiment score between zero and one.
>
> **[0:20](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=20)** Think of it as a mood thermometer.
>
> **[0:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=22)** Zero is like ice cold or very negative, where one is boiling hot or very positive.
>
> **[0:28](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=28)** Anything in the middle, well that's lukewarm or neutral.
>
> **[0:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=31)** What's particularly interesting is how this function works.
>
> **[0:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=34)** It's not just looking for obviously positive or negative words.
>
> **[0:39](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=39)** No, it's much more sophisticated.
>
> **[0:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=41)** It uses a combination of techniques, including text processing, part of speech analysis, and even word associations.
>
> **[0:49](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=49)** It's like having a linguist, a psychologist, and a statistician all working together to understand the nuances of language.
>
> **[0:56](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=56)** Here's the key point to remember.
>
> **[0:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=58)** This function works best with shorter text, ideally one or two sentences.
>
> **[1:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=62)** Why? Well, just as it's easier to gauge someone's mood in a brief conversation than in a long monologue, AI finds it easier to determine sentiment in concise statements.
>
> **[1:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=73)** Another fascinating aspect is the objectivity assessment.
>
> **[1:17](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=77)** Before diving into sentiment analysis, the function first determines if the text is objective or subjective.
>
> **[1:23](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=83)** If it's mostly objective, it stops right there and assigns a neutral score of 0.50.
>
> **[1:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=90)** It's only when it detects subjectivity that it proceeds to the more nuanced sentiment analysis.
>
> **[1:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=96)** Currently, this tool supports English, German, Spanish, and French with more languages on the horizon.
>
> **[1:41](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=101)** It's a powerful asset for businesses looking to understand customer sentiment and review social media posts or forum discussions.
>
> **[1:49](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=109)** Remember, in the age of big data, tools like this are invaluable.
>
> **[1:54](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=114)** They allow us to quickly and accurately gauge public opinion on a massive scale.
>
> **[1:59](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=119)** Something like this was simply impossible just a few decades ago.
>
> **[2:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=124)** Now, it is possible.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), public (1)
> **Analogies:** imagine (1), think of it as (1), it's like (1)
> **Versions:** 0.50 (1)
> **Speakers:** - [instructor] (1)

#### Forecasting time-series data using Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=0)** - [Instructor] One of Power BI's most powerful features is forecasting.
>
> **[0:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=4)** This tool is a game changer for anyone working with time-series data.
>
> **[0:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=9)** First, it's important to note that this feature is currently available only for line chart visuals.
>
> **[0:14](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=14)** So if you're working with time-based data, make sure you're using a line chart to take advantage of this capability.
>
> **[0:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=21)** Now, what makes this feature truly useful is customizability.
>
> **[0:25](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=25)** You have control over key parameters like forecast length and confidence intervals.
>
> **[0:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=29)** The forecast length determines how far into future you want to predict, while the confidence interval allows you to adjust the range of your prediction based on how certain you want to be.
>
> **[0:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=40)** Another great aspect about this tool is its flexibility.
>
> **[0:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=43)** You can experiment with different settings to see how this affects your forecast.
>
> **[0:47](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=47)** This tool allows you to fine tune your predictions based on specific data model and business needs.
>
> **[0:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=52)** Visually, it's quite intuitive.
>
> **[0:54](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=54)** So the forecasting feature extends your existing line chart, adding a section that represents your predictive future value.
>
> **[1:01](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=61)** The real power of this tool is in its ability to enable data-driven decision making.
>
> **[1:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=65)** As an analyst, you can now provide stakeholders with visualized predictions of future trends all within your Power BI reports.
>
> **[1:13](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=73)** This can be invaluable for strategic planning and resource allocation.
>
> **[1:17](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=77)** Remember, while this tool is powerful, it's based on historical patterns.
>
> **[1:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=81)** Always combine these forecast with your industry knowledge and other relevant factors when making important decisions.
>
> **[1:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=90)** Now let's see a demo.
>
> **[1:32](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=92)** Go over the visualization tab and click on forecast.
>
> **[1:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=96)** When we expand the graph, you see that we have data for 2014, and it has predicted data for 2015, and it's that easy to forecast data.
>
> **[1:46](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=106)** Now think about how this can be used within your organization, whether that is to predict sales, whether that is to predict churn, whether that is to predict when employees are likely to take PTO, or what time of the year your sales is likely to increase and decrease.
>
> **[2:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=124)** All of this can now be done with a click of a few buttons.

> [!info]- Semantic Content
>
> **Code Keywords:** extends (1), let (1)
> **CLI Commands:** make (1)
> **Env Vars:** pto (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Talk to your data using AI
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=0)** - [Instructor] The next feature that we're going to explore is natural language query.
>
> **[0:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=4)** Natural language query is nothing but asking your data and getting visual insights within minutes.
>
> **[0:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=8)** You can ask these questions in plain simple English, and here's how we can do it.
>
> **[0:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=15)** In your browser, type app.[powerbi.com](https://powerbi.com), and it'll take you to your Power BI dashboard.
>
> **[0:23](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=23)** And over here on the left side, there's an option called Learn.
>
> **[0:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=26)** Click on that and scroll to the Retail Analysis sample.
>
> **[0:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=34)** Now, click on the Edit symbol over here.
>
> **[0:37](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=37)** Let's create a new page.
>
> **[0:39](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=39)** Under the Visualization section, you see that there are multiple options that you can choose from.
>
> **[0:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=44)** Click on the option that says Q&A, and if you expand it, you'll see that it provides a Q&A chatbot.
>
> **[0:52](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=52)** And you can see here that it opens a Q&A chatbot, which can be used to ask any questions related to your data.
>
> **[0:59](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=59)** Now, let's ask, "What is the average unit price per category?"
>
> **[1:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=64)** As you see here, it auto-populates the average prices for each category.
>
> **[1:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=70)** For groceries, the average price was 1.47.
>
> **[1:15](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=75)** For shoes, the average price was 13.84.
>
> **[1:19](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=79)** It's that simple to be able to talk to your data using AI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from. (1)
> **UI Navigation:** click on (3)
> **Versions:** 1.47 (1), 13.84 (1)
> **URLs:** [powerbi.com](https://powerbi.com) (1)
> **Speakers:** - [instructor] (1)

#### Risks of using AI for data analytics and mitigating controls
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=0)** - [Instructor] Before implementing AI for data analytics, it's important for you to understand the potential risks associated.
>
> **[0:07](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=7)** Let's also discuss some of the top controls and solutions to mitigate these risks.
>
> **[0:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=11)** As AI continues to enhance data analytics process, it's crucial to understand both sides of the coin, especially potential pitfalls and how to address them effectively.
>
> **[0:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=22)** First and foremost, we must address data privacy and security concerns.
>
> **[0:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=27)** Remember, these SaaS tools are processing potentially sensitive business data.
>
> **[0:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=31)** To mitigate this risk, we need to implement a multi-layered approach.
>
> **[0:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=34)** Start with strong data encryption, both in transit and at rest.
>
> **[0:39](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=39)** This is your first line of defense against unauthorized access.
>
> **[0:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=43)** Next, take advantage of features like Power BI's low level security.
>
> **[0:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=48)** This ensures that users only see the data they're supposed to see.
>
> **[0:53](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=53)** It's a powerful tool for maintaining data confidentiality within your organization.
>
> **[0:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=58)** Don't forget the importance of regular audits.
>
> **[1:01](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=61)** You should be reviewing access logs and user permissions frequently, implement user access reviews quarterly if possible.
>
> **[1:07](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=67)** This will help you spot any unusual activity or inappropriate access.
>
> **[1:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=71)** Lastly, ensure that your data handling practices align with the relevant regulations like GDPR, HIPPA, or any other regulations that may be applicable to your organization.
>
> **[1:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=82)** Compliance isn't just about avoiding fines.
>
> **[1:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=84)** It's about protecting your data and maintaining trust.
>
> **[1:27](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=87)** Moving on to model accuracy and bias, pre-built AI models are super convenient, but they may not always align perfectly with your specific business context.
>
> **[1:37](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=97)** Your first line of defense here is validation.
>
> **[1:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=100)** Always crosscheck AI generated insights against your domain expertise.
>
> **[1:45](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=105)** Does the output make sense given what you know about the industry?
>
> **[1:49](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=109)** Regular testing is crucial.
>
> **[1:50](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=110)** Set up processes to consistently check the model's output for accuracy and bias.
>
> **[1:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=115)** This is especially important if you're using these insights for critical business decisions.
>
> **[2:01](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=121)** Many tools, including Power BI, allow you to customize certain aspects of their AI features.
>
> **[2:07](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=127)** Take advantage of this.
>
> **[2:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=128)** Fine tune the models to better fit your specific needs and data characteristics.
>
> **[2:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=132)** Consider using multiple models or use tools to cross validate results.
>
> **[2:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=136)** If different models are giving you similar insights, that increases your confidence in the results.
>
> **[2:22](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=142)** This is one of the most common risks associated with using AI.
>
> **[2:26](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=146)** Now let's talk about a more subtle risk, overreliance on automated insights.
>
> **[2:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=151)** It's easy to become overly dependent on these AI generated insights, potentially overlooking important nuances that require human judgment.
>
> **[2:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=160)** To counter this, you need to foster a culture of critical thinking within your organization.
>
> **[2:45](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=165)** Train your teams to use AI generated insights as a starting point for analysis, not the final word.
>
> **[2:51](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=171)** Encourage them to question the results, to dig deeper.
>
> **[2:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=175)** Emphasize the importance of combining these insights with industry knowledge and experience.
>
> **[3:01](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=181)** A machine learning model might spot a correlation, but it takes human expertise to understand if that correlation is meaningful or actionable in your specific business context.
>
> **[3:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=192)** Also, remember correlation is not always causation, so take this data analysis and make sure that it fits the business context.
>
> **[3:21](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=201)** Integration is often another significant hurdle when implementing new tools.
>
> **[3:25](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=205)** SaaS AI tools need to work seamlessly with your existing systems to be truly, truly effective.
>
> **[3:30](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=210)** Start by carefully planning your data architecture.
>
> **[3:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=213)** Understand how data will flow between systems and when potential bottlenecks may occur.
>
> **[3:39](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=219)** Take advantage of the extensive connectivity options that tools like Power BI or other BI tools of your choice offer.
>
> **[3:45](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=225)** These can help you create more seamless data ecosystem.
>
> **[3:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=228)** Implement proper data governance practices.
>
> **[3:50](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=230)** This ensures that data remains consistent and reliable across all your systems.
>
> **[3:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=235)** Regular testing of your data pipelines is crucial.
>
> **[3:59](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=239)** You need to ensure that the data feeding into your AI tools is accurate and up to date at all times.
>
> **[4:05](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=245)** The black box nature of AI can be a significant issue, especially when you need to explain decisions to stakeholders.
>
> **[4:12](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=252)** To increase transparency, leverage explainable AI features.
>
> **[4:16](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=256)** Many modern tools, including Power BI, offer features that can break down which factors influenced a particular prediction or insight.
>
> **[4:24](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=264)** Document the logic behind your AI driven dashboard and reports.
>
> **[4:28](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=268)** This documentation is invaluable for both current use and future audits.
>
> **[4:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=273)** Educate your stakeholders on the basics of how the AI models work.
>
> **[4:38](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=278)** You don't need to turn them into data scientists, but a basic understanding can go a long way in building trust in the system.
>
> **[4:45](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=285)** Last but not least, let's discuss compliance.
>
> **[4:47](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=287)** Using AI or data analytics can raise complex compliance issues, especially when dealing with personal data or in heavily regulated industries.
>
> **[4:57](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=297)** Stay informed about relevant regulations in your industry and region of operation.
>
> **[5:02](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=302)** Regulatory landscapes are constantly evolving, particularly around AI and data use.
>
> **[5:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=308)** Use the compliance features built into your tools.
>
> **[5:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=311)** For example, the Artificial Intelligence Act is a European Union regulation concerning artificial intelligence.
>
> **[5:18](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=318)** For example, if you're in the European Union, the EU AI Act may be applicable to you.
>
> **[5:23](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=323)** Implement regular compliance audits.
>
> **[5:25](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=325)** These should cover not just your data, but also how it's being used and analyzed.
>
> **[5:31](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=331)** For particular sensitive data, consider advanced options like Power BI's Bring Your Own Key encryption.
>
> **[5:37](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=337)** This gives you an extra layer of control over your data.
>
> **[5:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=340)** While these controls may seem extensive, they're essential for responsibly leveraging the power of SaaS AI tools in data analytics.
>
> **[5:48](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=348)** Remember, the goal is not to hinder the use of these powerful tools, but to ensure that they're used effectively, ethically, and securely.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), super (1), this. (1), require (1), this, (1)
> **CLI Commands:** make (2)
> **Env Vars:** gdpr (1), hippa (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Extending AI in your data operations
> [LinkedIn Learning](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=0)** - Congratulations on completing this comprehensive course on AI powered data ops.
>
> **[0:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=6)** Let's reflect on the valuable skills and knowledge you've required.
>
> **[0:11](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=11)** As you conclude this course, you are equipped with practical hands-on experience in using powerful AI driven data tools.
>
> **[0:19](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=19)** You are now positioned to drive efficiency, uncover deeper insights, and make more informed decisions within your organization.
>
> **[0:29](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=29)** I encourage you to apply these skills in your organization, start small, experiment, and gradually expand your use of AI in your data organization.
>
> **[0:39](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=39)** Share your knowledge with your colleagues, and be a positive influence within your team.
>
> **[0:44](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=44)** The future of data operations involves intelligent automation and data-driven insights.
>
> **[0:50](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=50)** You are now prepared to contribute significantly to this future.
>
> **[0:55](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=55)** Thank you for your participation in this course.
>
> **[0:58](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=58)** I'm confident you'll use these tools to drive innovation and success in your organization.
>
> **[1:04](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=64)** Remember, this is just the beginning.
>
> **[1:07](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=67)** Continue learning, stay curious, and keep exploring the expanding possibilities of AI and data operations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), continue (1)
> **CLI Commands:** make (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Priya Mohan]]

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]
← [[AI Fundamentals for Data Professionals]] | **5 of 10** | [[The 80-20 Rule of Data Science]] →

### In [[Explore AI for Data Engineering]]
← [[Data-Centric AI- Best Practices, Responsible AI, and More]] | **3 of 8** | [[Generative AI for Data Engineering- ChatGPT Power Tips]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]
- [[Explore AI for Data Engineering]]

---

[↑ Back to top](#)