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
created: 2026-05-03
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
  - [Transformational change for your data organization](#transformational-change-for-your-data-organization)
  - [Introduction to DataOps and the benefits of using AI tools to enhance operations](#introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations)
- [**1. Data Cataloging and Classification with AI**](#1-data-cataloging-and-classification-with-ai) (4 videos)
  - [Identify and prioritize your organization's data](#identify-and-prioritize-your-organizations-data)
  - [How AI can be used to discover, catalog, and understand your data sources?](#how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources)
  - [Automate data cataloging and classification using Collibra Data Intelligence Platform](#automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform)
  - [Risks and controls for consideration](#risks-and-controls-for-consideration)
- [**2. Data Quality Monitoring and Metadata CI/CD with AI**](#2-data-quality-monitoring-and-metadata-cicd-with-ai) (7 videos)
  - [Introduction to data quality monitoring and traditional methods](#introduction-to-data-quality-monitoring-and-traditional-methods)
  - [Enhance the quality of streaming data pipelines using AI and stream monitoring tools](#enhance-the-quality-of-streaming-data-pipelines-using-ai-and-stream-monitoring-tools)
  - [Enhance the quality of batch processing pipelines using AI](#enhance-the-quality-of-batch-processing-pipelines-using-ai)
  - [Demonstration of AWS Glue data quality](#demonstration-of-aws-glue-data-quality)
  - [Enhance the quality of structured and unstructured data using AI](#enhance-the-quality-of-structured-and-unstructured-data-using-ai)
  - [Demonstration of automating data quality monitoring using Collibra Data Intelligence Platform](#demonstration-of-automating-data-quality-monitoring-using-collibra-data-intelligence-platform)
  - [What to know before implementing AI for data quality automation](#what-to-know-before-implementing-ai-for-data-quality-automation)
- [**3. Data Analytics and Decision-Making Using AI**](#3-data-analytics-and-decision-making-using-ai) (7 videos)
  - [The power of data analytics, business intelligence tools, and AI](#the-power-of-data-analytics-business-intelligence-tools-and-ai)
  - [Demonstration of pattern recognition and predictive analytics using Power BI](#demonstration-of-pattern-recognition-and-predictive-analytics-using-power-bi)
  - [Demonstration of automating anomaly detection and root cause suggestion using Power BI](#demonstration-of-automating-anomaly-detection-and-root-cause-suggestion-using-power-bi)
  - [Demonstration of automating sentiment analysis with Power BI](#demonstration-of-automating-sentiment-analysis-with-power-bi)
  - [Forecasting time-series data using Power BI](#forecasting-time-series-data-using-power-bi)
  - [Talk to your data using AI](#talk-to-your-data-using-ai)
  - [Risks of using AI for data analytics and mitigating controls](#risks-of-using-ai-for-data-analytics-and-mitigating-controls)
- [**Conclusion**](#conclusion) (1 videos)
  - [Extending AI in your data operations](#extending-ai-in-your-data-operations)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Transformational change for your data organization](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/transformational-change-for-your-data-organization?u=76281980&t=0)** - Imagine being able to accomplish in minutes what once took days or even weeks. Picture a world where your data teams operate with unprecedented efficiency, where costly errors are predicted and prevented before they occur, and where your organization stays ahead of the curve. Hi, I'm Priya Mohan. I work with a number of Fortune 500 clients to help them adopt AI optimized operations practices. You may also know me on [[LinkedIn]] as I am a top community voice for machine learning. In this course, you'll gain an in-depth understanding of the complex operations carried out by teams within data organizations. But more importantly, you'll discover how AI [[SaaS]] tools and automation can dramatically reduce time, cost, and effort compared to traditional methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[SaaS]] (1)
> **Analogies:** imagine (1), picture (1)
> **Speakers:** - imagine (1)

#### [Introduction to DataOps and the benefits of using AI tools to enhance operations](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=0)** - [Instructor] So what exactly is DataOps? DataOps is like having a well-oiled machine for handling all your company's data needs. Imagine you're running a busy kitchen in a restaurant that has data as the ingredients, and insights are the dishes served. DataOps would be the system that ensures ingredients, or in our case, data, are always fresh and available. Chefs, who are the data teams, work together smoothly, and customers, who are the data users, get their insights quickly, and exactly is ordered. It's about making sure everyone in the organization knows what they're doing, has the right tools in a centralized location that's easy to find and can work together efficiently to provide insights consistently and quickly. Just like how a good restaurant constantly improves its menu and services based on customer feedback, DataOps encourages continuous improvement in how a company handles, labels, and enriches its data. It's about making data work for the business in the most efficient way possible from start to finish. Gartner, a leading research and advisory company, defines DataOps as a collaborative [[Data Management]] practice focused on improving the communication, integration, and automation of data flows between data managers and data consumers across an organization. Similarly, another definition from O'Reilly's book called "Getting DataOps Right" describes it as the automated, process-oriented methodology
>
> **[1:37](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=97)** for making clean, reliable data available to teams throughout your company. Both these definitions highlight key aspect of DataOps, which include collaboration, automation, and the goal of making data more accessible and useful across an organization. Now, you might be wondering, why do we need DataOps? What challenges does it address? First and foremost, DataOps tackles the issue of miscommunication between teams. In many organizations, data teams are dispersed and often have conflicting priorities. This lack of collaboration can significantly hamper projects and lead to inefficiencies. DataOps promotes a culture of collaboration and shared responsibility, breaking down silos between different teams involved in the data cycle. Secondly, DataOps addresses issues in data access. In today's complex data environment, accessing data from multiple sources can be challenging due to varying agreements, permissions, and formats. This often leads to delays and errors. And that's where DataOps comes in. It helps implement practices and tools to streamline data access, ensuring that the right data is available to the right people at the right time. Another challenge that DataOps addresses is technical debt. Over time, organizations accumulate technical debt due to quick fixes, outdated systems, or neglected improvements, or people simply don't have time to work on fixing data that's been still. This debt can slow down deployment and increase the risk of failures. DataOps encourages continuous improvement in automation, helping to reduce and manage technical debt efficiently.
>
> **[3:14](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-dataops-and-the-benefits-of-using-ai-tools-to-enhance-operations?u=76281980&t=194)** Lastly, DataOps overcomes the challenge of inflexible [[Data Architecture]]. A poor designed architecture can become a bottleneck, preventing the system from scaling and adapting to new requirements. DataOps promotes flexibility, scalable architecture that can evolve with the organization's needs. It's important to note that DataOps isn't just about technology. It represents a cultural shift in how organizations approach data management. It borrows concepts from [[Agile Development|Agile]] methodology, and [[DevOps]]' applying them to the world of data and analytics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Management]] (2), [[Data Architecture]] (1), [[Agile Development|Agile]] (1), [[DevOps]] (1)
> **Analogies:** imagine (1), just like (1)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 1. Data Cataloging and Classification with AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Identify and prioritize your organization's data](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=0)** - [Instructor] Whether you're a small startup or a large organization, making sure that you have a good understanding of the internal data sources and external data sources of your organization before you identify an [[AI Strategy]] for optimizing your data organization's efficiency. Some of the internal data sources include sales data like, for example, sales transaction, customer contracts, lead conversion rates, et cetera, [[Financial Data]] such as billing, revenue, cost, profitability. Next is marketing data, and then we have customer service data such as tickets, case resolutions, and then we have HR data such as employee records, performance review, payroll. In addition to that, if your company produces a product, you may also have production data such as inventory, supply chain, manufacturing metrics, et cetera. Majority of companies have technical data such as application logs, infrastructure monitoring and networking activities. Now that we've explored some internal data that come from within the company, let's explore some external data sources. Some of the external data sources may include open data, such as data published by government entities for public use. Next, commercial data, which is third-party data purchased from vendors such as demographics, credit reports, et cetera. And then we have social media data such as brand mentions, customer feedback, influencer engagement on public social platforms. Then we have web data, which is web traffic, competitive analysis, SEO metrics, et cetera, which were obtained via [[Web Analytics]] tools.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=95)** You may also have survey data such as customer or employee [[Market Research]] data, which was conducted by third party agencies. Other external data sources may include user-generated data such as reviews, complaints, or other feedback shared by online customers. And then we may have [[IoT]] or sensor data. If your company produces a product that uses IoT technology, then there may be data from instruments, devices, or assets that are externally monitored. Once you identify the internal data sources and external data sources, the next most important step after identifying your organization's internal and external data sources is to make sure that you identify your data organization's key metrics and your organization's key metrics to ensure that both of them align. Your metrics may include financial metrics such as ROI and data initiatives, such as return on investments from data-related projects or initiatives. Another financial metric is cost of [[Data Quality]], the cost associated with maintaining and improving data quality, which indicates the efficiency in resource utilization. You also have data quality score, which is a comprehensive rating, reflective of data accuracy, consistency, timeliness and completeness of the data. Next is rate of data incidents, the number of data breaches, losses, inaccuracy incidents indicating the [[Data Security]] and accuracy. And then we also have data accessibility and availability. Data availability percentage is the rate at which critical data assets are available for use,
>
> **[3:09](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/identify-and-prioritze-your-organiztion-s-data?u=76281980&t=189)** ensuring accessibility when needed. And system uptime is when the proportion of time data sources or systems are operational indicating the reliability and accessibility of those data. Lastly, we also have operational efficiency. The efficiency gained through optimized data processes, reducing manual effort and operational cost. To sum it up, some of the metrics that your data organization or your organization has can be related to financial metrics, metrics related to time consumption and/or metrics related to brand development or reputational growth. So, in summary, we can have three different metrics, efficiency metrics, enablement metrics and enforcement metrics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (3), [[IoT]] (2), [[AI Strategy]] (1), [[Financial Data]] (1), [[Web Analytics]] (1)
> **Analogies:** such as (12), for example (1)
> **Env Vars:** seo (1), roi (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How AI can be used to discover, catalog, and understand your data sources?](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=0)** - [Instructor] Now let's explore how AI catalogs and understands the data within your organization. Let's explore five ways in which AI can drastically improve how your organization handles its data. AI tools can now scan and catalog existing data repositories, [[Databases]], and file systems within your organization. [[Algorithms]] are used to identify patterns in structures and data, making it easier to locate and categorize datasets, and here's how it works. The process begins with scanning, where AI tools crawl through data sources. As they do this, algorithms detect structures and formats within the data. The AI then categorizes this data into groups and creates indexes for retrieval. The benefits of this approach are notable. It improves data accessibility, allowing users to find data more easily. It helps reduce redundancy by identifying duplicate datasets. This automation saves time, streamlining a process that was manual and time-consuming. It also enhances [[Data Governance]] by providing oversight of an organization's data assets. Similarly, AI algorithms analyze [[Metadata]] associated with datasets to understand their characteristics, such as data types, formats, and relationships. This analysis helps in creating an inventory of data sources, providing a picture of an organization's data landscape. There are several aspects to AI driven meta-analysis. It begins with extraction,
>
> **[1:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=94)** where AI tools pool metadata from sources. AI then identifies common attributes across datasets. It maps relationships, discovering connections between data sources. Finally, it evaluates the completeness and accuracy of the metadata. The benefits are significant in that it provides understanding of the content and structure of the datasets, which is crucial for [[Data Management]]. This helps users determine the suitability of a dataset for specific analysis or application, improves [[Data Lineage]] tracking, and enhances the [[Data Quality]] management. [[Text Mining]] and [[Natural Language Processing (NLP)|natural language processing]] are also increasingly being used for data management nowadays. NLP techniques can be used to analyze textual content, including documentation, reports, and descriptions to identify mentions of data sources, their purposes, and interconnections. Sentiment analysis helps in understanding the context of data mentions. It enables tagging, applying labels to documents and datasets. This helps your organization to gain insights from [[Unstructured Data]], and it also improves the searchability of both structured and unstructured data. AI can establish and track data lineage showing how data flows through an organization's systems. This process is nothing but identifying where the data originated, how it changed, and where it ended up. Here's how AI contributes to data lineage tracking. First, AI tools can systems
>
> **[3:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=188)** to identify data sources and destinations. Then they analyze the data transformations at each step of the process. Then they create a map of data flow across the organization. Finally, they maintain this map in real time as data moves and changes. This offers the clear understanding of data dependencies, which is crucial for managing complex data ecosystems. This helps us to do impact analysis, help organizations predict how changes in one part of the system may affect others. And it also supports compliance tracking, making it easy to meet regulatory requirements about data handling and [[Privacy]]. Now let's explore how AI uses pattern recognition. Machine learning algorithms can recognize patterns within data and identify potential data sources based on similarities, common structures, or specific characteristics. Here's how pattern recognition works in data management. Algorithms analyze datasets to identify recurring patterns. Then they categorize the data based on these patterns and detect anomalies or outliers that don't fit established patterns. They can also predict future patterns based on historical data. This enables organizations to discover insights from large and complex datasets that might be difficult for humans to process. Pattern recognition can be used for various tasks. For example, it can help in fraud detection by identifying unusual transaction patterns. It's useful in [[Predictive Modeling]], allowing organizations to forecast future trends
>
> **[4:42](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/how-ai-can-be-used-to-discover-catalog-and-understand-your-data-sources?u=76281980&t=282)** based on historical data patterns. It can also identify relationships between variables, uncovering connections that might not be immediately apparent. By leveraging pattern recognition, organizations can make more informed decisions, improving their processes and gain a more competitive edge in their industry. Now let's take a look at an example tool called Collibra Data Intelligence Platform that uses AI to enhance the data cataloging process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Metadata]] (3), [[Data Management]] (3), [[Data Lineage]] (3), [[Unstructured Data]] (2)
> **Analogies:** such as (1), picture (1), for example (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### [Automate data cataloging and classification using Collibra Data Intelligence Platform](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=0)** - [Instructor] Now, let's put this into action and see how AI can be used for data cataloging and [[Data Classification]]. We're going to explore a tool called Collibra Data Intelligence Platform. Imagine you work for a large organization and your manager is asking you to build a report on employee promotions and sales distribution. Your organization has a variety of datasets that you can choose from. You've been tasked with identifying the right dataset that contains the relevant information requested by your manager. Let's take a look at how AI simplifies this process and makes it efficient. In the search bar, type promotion. You see that this pulled several different datasets for us. It pulled columns, it pulled [[Tableau]] workbooks, and it pulled tables. We see over here that this table over here contains a comment that says about employee promotions, which seems very relevant to what we're looking for. Let's now check to see which of these are certified. A certified dataset is nothing but a dataset that has been reviewed and considered to hold reliable and trusted data. We see over here that this table is the only dataset that has been certified. Now, let's click on it to explore. We see over here that AI has auto-generated some of the data catalogs for us. Let's take a look. This table has 17 columns and here are the data types. And at the bottom over here,
>
> **[1:32](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=92)** we see that it automatically cataloged the list of data points available in this dataset. It also has a tab for the list of data responsibilities, such as custodians, owners, and SMEs. If we look at the Columns tab, we see that it automatically classified the data for us further, where employee ID has been classified as UUID, and then we see that security number has been classified as SSN and so on. Now that we're confident this is the right data, it's time for us to request access. And that's pretty much it. Traditionally, this cataloging and classification was done manually, was time-consuming, and required quite a bit of effort. With the power of AI, we were able to simplify the cataloging and classification process, and were able to do this within minutes. Now that we found the data that we need, let's try to understand the contextual information behind the dataset to further validate that we truly found the dataset that's most relevant to our use case. As we see over here, this check mark denotes that it's been verified. Now, let's click on the Technical Lineage tab. We see here that the tool has automatically created a schema diagram showing the transformation that the data underwent, from source to destination. Further, you can even inspect the [[SQL]] query
>
> **[3:06](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/automate-data-cataloging-and-classification-using-collibra-data-intelligence-platform?u=76281980&t=186)** used at a table and column level, which was auto-generated by AI as well. Now, let's explore the data further by clicking on one of the columns. So we see here this is a salary distribution chart, which was automatically, once again, created by the tool, and it includes data salary distribution across different employee levels. Now, let's click on the Diagram tab and we see that the diagram view over here shows us where the data originated, what it represents, and who uses the data. The tool not only provides us the context of the data, but also the data usage within the organization. So, to summarize this demo, we saw how AI can be used for data cataloging, data classification, and auto-creation of schema diagrams, and we saw how it provides an end-to-end view of who produces the data and who uses the data within your organization. I would like for you to take a moment to think about how AI can be used within your organization to optimize the processes and perform these tasks within few minutes using the power of AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Classification]] (2), [[Tableau]] (1), [[SQL]] (1)
> **Env Vars:** uuid (1), ssn (1), sql (1)
> **UI Navigation:** click on (3)
> **Analogies:** imagine (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Risks and controls for consideration](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=0)** - [Instructor] Isn't it absolutely fascinating and exciting that we have these AI tools at our fingertips and it can save us time and effort that previously was impossible? But before we dive into implementing these AI tools, let's explore some of the risks and challenges we face while implementing these AI tools. There is a known risk of AI models misinterpreting or misclassifying data, which can lead to some serious inaccuracies. To combat this, we need to implement robust [[Data Quality]] checks and validation processes. It's also very important to maintain human oversight. Think of it as belt and suspenders approach. We're using both automated systems and human expertise to ensure our data stays accurate. Before you implement an AI tool to perform auto-cataloging and auto-classification, please ensure that your team performs adequate testing with representative data to make sure that the cataloging and the classification is in line with the expectations of your organization. Make sure to check for data quality issues and [[Data Integrity]] issues. Do this testing before you implement the data and even after you implement the data, do periodic assessments to make sure that the AI tool is performing as intended. Next, we have integration challenges. Fitting AI tools into existing systems can be like solving a complex puzzle.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=95)** The solution? Do your due diligence. Assess how compatible these AI tools are with your current setup before you dive in. A well thought out integration plan can save you a lot of headaches down the road. Let's say your organization does not want to use a [[SaaS]] AI tool that's out in the market today and would like to produce or create its own AI tool. In that case, please ensure that your organization trains the model on a diverse set of data. If we don't provide our AI with diverse representative datasets, we're setting ourselves up for failure. The fix is pretty straightforward. Use varied data for training and keep updating your model. It's an ongoing process. Your AI needs to keep learning to stay relevant in our ever-changing data landscape. Lastly, we have the challenge of [[Unstructured Data]]. AI can sometimes struggle with interpreting data and images accurately. To address this, we need to invest in specialized models and [[Algorithms]] designed specifically for handling unstructured data. It's like giving your AI the right tools for the job. By implementing these solutions, we can significantly reduce risks and maximize the benefits of AI in data cataloging. Remember, AI is a powerful tool, but it needs the right approach to truly shine in our data ecosystem. Last but not least, please ensure that there are adequate security controls in place so that the privileged access to these AI tools and any related settings that can be altered
>
> **[3:10](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-and-controls-for-consideration?u=76281980&t=190)** are only within the hands of the right people. Please ensure that there are security controls in place to make sure that the right folks have access to the right privileges and that these privileges and activities are monitored periodically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (2), [[Unstructured Data]] (2), [[Data Integrity]] (1), [[SaaS]] (1), [[Algorithms]] (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Analogies:** think of it as (1), it's like (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 2. Data Quality Monitoring and Metadata CI/CD with AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to data quality monitoring and traditional methods](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=0)** - [Instructor] Now let's explore how [[Data Quality]] checks can be automated using AI. Data quality checks are performed to ensure that data within an organization meet standards for accuracy, completeness, consistency, and validity. Some of the common data quality issues out there are incomplete data where we have missing values or incomplete records. We can also have inaccurate data, such as incorrect or outdated information, inconsistent data, such as contradictions or discrepancies between different data sources, or duplicate data, where we see the presence of identical records in the same dataset. Imagine if you were to go back a few years, data quality checks were performed manually, and were inefficient because of the time-consuming nature of the process, and the limitation of human capacity to handle large volumes of data. Let me paint a picture for you. In those days, data analysts would spend hours, sometimes even days, pouring over spreadsheets and database entries. They'd manually scan for inconsistencies, missing values, and inaccuracies. It was like looking for a needle in a haystack, but the haystack was made of numbers and text. Companies would set up rules for [[Data Validation]]. For example, they might specify that all phone numbers must have 10 digits, then the teams would run these rules against their [[Databases]], often as overnight batch processes. The next morning, they'd come back to find lists of flagged entries that didn't meet the criteria, and from there, it was just a matter of human intervention.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/introduction-to-data-quality-monitoring-and-traditional-methods?u=76281980&t=95)** Analysts then go and investigate each flagged entry, determine the cost of the issue, and make corrections manually. This process was not only time-consuming, but also prone to human error. Data reconciliation was another challenge. When data existed in multiple systems, teams had to manually compare and align these datasets. This process was tedious, and often resulted in temporary fixes, rather than addressing the true root cause. While these methods were the best available at the time, they struggled to keep pace with the growing volume and complexity of the data. As datasets grew from megabytes to gigabytes and beyond, these manual processes became increasingly impractical. The inefficiency led to a growing need for a more automated, intelligent solution, paving the way for AI-driven data quality management tools that we see today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (5), [[Data Validation]] (1), [[Databases]] (1)
> **Analogies:** such as (2), imagine (1), picture (1), for example (1)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Enhance the quality of streaming data pipelines using AI and stream monitoring tools](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=0)** - [Instructor] Let's explore how quality monitoring for various data types, such as streaming data, batch data, structured, unstructured and semi-structured data can be automated using AI. Streaming data is a continuous flow of [[Real-Time]] information from various sources requiring immediate processing and analysis. Some examples of streaming data are [[IoT]] sensor data, financial transaction logs, social media feeds, and health monitoring device data. For streaming data, real-time processing is absolutely crucial. AI models can be trained to validate incoming data on the fly. These models can check for schema compliance, data type consistency, and adherence to business rules. So for example, an AI system could instantly flag anomalies and sensor data from IoT devices ensuring only quality data moves downstream. Machine learning [[Algorithms]] can learn patterns in your data stream and automatically apply cleansing rules. These could include deduplication of records, standardization of formats like date formats, or address formats and imputation of missing values based on historical patterns. AI powered monitoring system can track [[Data Quality]] metrics in real time. They can learn normal patterns and alert when deviations occur. This proactive approach allows for immediate intervention when data quality issues arise. Integrate the AI tool of choice with streaming data platform like [[Apache Kafka]] or Amazon Kinesis to ingest and process real-time data. Use of anomaly detection algorithms
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-streaming-data-pipeline-using-ai-and-stream-monitoring-tools?u=76281980&t=95)** such as isolation forest, autoencoders, to analyze streaming data and identify deviations from expected patterns. AI can also be used to establish dynamic thresholds for sending real-time alerts. When anomalies are data quality issues are detected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (4), [[Data Quality]] (3), [[IoT]] (2), [[Algorithms]] (2), [[Apache Kafka]] (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** apache (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Enhance the quality of batch processing pipelines using AI](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=0)** - [Instructor] While [[Batch Processing]] doesn't have the same [[Real-Time]] constraints as streaming, AI can still significantly enhance and automate [[Data Quality]] processes. AI can analyze large batches of data to automatically generate data profiles. These profiles can identify data distributions, patterns, and potentially, quality issues without manual intervention. By analyzing historical data and data correction patterns, AI can suggest and even implement data quality rules. This reduces a need for manual rule creation and maintenance. Once you identify the data quality tool of your choice, consider integrating it with orchestration tools like [[Apache Airflow]] or [[Kubernetes]] for automating remediation workflows. In addition to the AI features, you can execute predefined scripts or actions to correct issues, such as filling missing values, updating records, or triggering data quality checks. Machine learning models can predict potential data quality issuers before they occur, using historical data to understand normal data patterns. For example, they may forecast when a particular data source is likely to produce errors based on the historical patterns. In addition, you can deploy models for real-time scoring to predict anomalies as new data streams in. AI is also used to incorporate a feedback loop to continuously update models with new data and adapt to evolving patterns. Let's put this into action and discuss how AWS Glue evaluates data quality rules. AWS Glue is a tool that's provided
>
> **[1:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-batch-processing-pipeline-using-ai?u=76281980&t=94)** as part of the AWS suite of [[Microsoft Products|products]]. If your organization is already using AWS, then this is a great choice. AWS Glue collects data [[Statistics]] when assessing data quality rules. For instance, it might count unique values in a data set and compare this to expected values. The data quality rule engine then evaluates these statistics against defined thresholds to check if quality requirements are met. Over time, these statistics enable anomaly detection in your ETL pipeline. AWS Glue's machine learning algorithm can learn from historical data and identify hidden patterns, which are reports as observations. Observations are AI-generated insights that come with suggested data quality rules. You can add these to your rule set to monitor newly discovered patterns. For best results, run your jobs on a consistent schedule, like hourly or daily. Irregular job runs may lead to less accurate insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (9), [[Statistics]] (3), [[Real-Time]] (2), [[Batch Processing]] (1), [[Apache Airflow]] (1)
> **CLI Commands:** aws (6), apache (1)
> **Env Vars:** aws (6), etl (1)
> **Analogies:** such as (1), for example (1), for instance (1), compare this to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Demonstration of AWS Glue data quality](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=0)** - [Narrator] Now let's check out a demo of the AWS Glue [[Data Quality]] Tool. If you would like to revisit how this tool works in the background and uses machine learning, you can check out the previous lesson. Now let's get started. To enable anomaly detection, you can open AWS Glue Studio job and toggle to enable anomaly detection. Turning this enables anomaly detection on your data by analyzing your data over time and providing [[Statistics]] about your data and observations that you can act on. To enable anomaly detection in AWS Glue Studio, choose the data quality node in your job, then choose the anomaly detection tab. Toggle to enable anomaly detection. Now it's time to define the data to monitor for anomalies by choosing the ad analyzer. There are two views you can populate, statistics and data. Statistics are information about your data's shape and other properties. You can choose one or more statistics at a time or choose all statistics. Statistics include completeness, uniqueness, mean, sum, standard deviation, and so on. Data is the columns in your data set. You can choose all columns or individual columns. Choose Add anomaly detection scope to save your changes. Next, as discussed in our previous lesson, analyzers detect anomalies in your data generating observations and recommendations to help build rules. View these rules in the data quality tab. Observations are specific to each job run with the current data quality node and job run displayed at the top of the observation section.
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-aws-glue-data-quality?u=76281980&t=95)** To view observations for a different note or job, simply select it from the available options. In the screenshot over here, we see four different sections. First is the observation section, which provides insights for specific job run configured by the rule sets and analyzers that you specified. Next is the related metrics. When observations are generated, the related metric column shows the rule and the actual and expected values, as well as lower and upper limits. Rule recommendations. AWS Glue then also recommends rules to address this. Each rule that is recommended can be copied by clicking the copy icon. You can copy all recommendation rule by clicking the copy icon next to each rule, and then clicking Apply copied rules. And then we have monitored data. The observed data column provides the column or row that was monitored and triggered the observation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (6), [[Data Quality]] (4)
> **CLI Commands:** aws (4), node (2)
> **Env Vars:** aws (4)
> **UI Navigation:** toggle (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)

#### [Enhance the quality of structured and unstructured data using AI](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=0)** - [Narrator] Now let's see how AI can be used to enhance the quality of structured and [[Unstructured Data]]. [[Natural Language Processing (NLP)|Natural language processing]], otherwise known as NLP, can extract entities, categorize data, identify sentiment, enhance the quality and usability of textual data. [[Computer Vision]] [[Algorithms]] can analyze and categorize images, ensuring that they meet quality standards before entering your data pipeline. AI can help parse and standardize semi-structured data like [[JSON]] or XML. Machine learning models can learn the structure of your semi-structured data and flag inconsistencies or structure errors. They can also assist in schema mapping, like making it easier to integrate diverse data sources. There are some overarching AI techniques and features, which can significantly enhance [[Data Quality]]. AI powered [[Knowledge Graphs]] can map relationships between data elements, providing context that enhance data quality checks. They can help identify inconsistencies across different data sources and suggest corrections. [[Large Language Models (LLM)|Large language models]], otherwise known as LLMs, can be fine tuned to understand your specific data domain. They can generate complex data quality rules based on natural language descriptions, assist in data cleansing by suggesting corrections for inconsistent or incorrect data. They can also help in [[Data Integration]] by understanding and mapping different data schemas. Advanced anomaly detection algorithms can work across various data types and processing paradigms to identify outliers
>
> **[1:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/enhance-quality-of-structured-and-unstructured-data-using-ai?u=76281980&t=93)** and potential data quality issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (4), [[Algorithms]] (2), [[Unstructured Data]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Computer Vision]] (1)
> **Env Vars:** nlp (1), json (1), xml (1)
> **Definitions:** known as (2)
> **Speakers:** - [narrator] (1)

#### [Demonstration of automating data quality monitoring using Collibra Data Intelligence Platform](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=0)** - [Instructor] Now let's see a demo of how AI can be used for [[Data Quality]] monitoring. Collibra Data Quality Tool leverages Spark-based parallel processing to efficiently analyze extensive datasets, offering both horizontal and vertical scaling capabilities. This enables comprehensive scanning of large scale [[Databases]] and diverse file systems. They've got you covered with over 30 built in connectors, but here's the cool part. If you've got a unique data source, no worries. You can bring your own connector. Plus, they've got this neat feature called push down processing, which basically means you can run data quality checks right where your data lives. Next, let's start the data quality job. There are several rules or features to keep your data in great shape. First off, it'll keep an eye on how many rows you've got and how long your jobs are taking. That's the availability check. Then it'll look at how unique your data is to ensure we don't have too many duplicates hanging around, which is the uniqueness piece. It also checks for completeness to ensure there are no null values or empty fields hiding in our columns. There are several rules or features available to keep your data in great shape. First off, it'll keep an eye on how many rows you've got and how long your jobs are taking. That's our availability check. Then it'll look at how unique your data set is to ensure we don't have too many duplicates hanging around, which is the uniqueness piece. It also checks for completeness to ensure
>
> **[1:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=93)** that there are no null values or empty fields hiding in our columns. For conformity, it'll make sure that your values aren't too high, too low, or way off the average. Lastly, there's advanced rules such as checks on schema changes. It'll let you know if data types suddenly switch up or if columns are added or drop when you're not looking. Now, let's run the job. The data profile table provides comprehensive insights into column level data quality metrics, automatically compiling various [[Statistics]] from the DQ job we just ran. These insights help distinguish between relative metrics for numeric and non-numeric data, covering aspects like data type, quality percentages, uniqueness and null values or empty values. For a deeper dive into column level insights, you can simply click on any row in the profile page to expand it and view additional information. The B stands for baseline and R stands for run or the current data, and percentage to compare historical and current data quality metrics for each column. This comparison allows users to quickly identify changes and trends in various aspects of data quality. Next, we have histogram on the Histogram tab over here. This histogram tab visually displays value distributions for dataset columns, allowing users to quickly grasp distinct value counts and frequencies by hovering over histogram bars.
>
> **[3:07](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=187)** Next, let's go to the Correlation tab. The Correlation tab displays a matrix of correlation coefficients between dataset columns, revealing hidden relationships and their strengths. Now that we've scanned and understood the data, now it's time for us to review the anomalies automatically identified by AI for us. Over here in the data quality dashboard, we see that the data quality score has reduced to 54. Let's dig deep to see why. The behavior tab highlights data changes such as changes in unique value counts. Today, only one [[Microsoft Office|office]] location has been detected in the data when typically it's about 15. This impacts the quality score and shows signs that something is abnormal. Now let's click on View AR. This section provides a detailed overview of automated quality checks, including rule types, passing conditions, and current statuses. The system's pretty smart. It figures out and tweaks boundaries between values on its own as it crunches more data. This means you don't have to keep manually changing the rules every time the data changes. This saves you a ton of work in the long run. These boundaries between the values are auto-determined and auto-adapted as more data is analyzed. Now let's explore the Outlier tab. The Outlier tab contains detailed Outlier detection information, including affected columns, values, and counts. A confidence score system
>
> **[4:40](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=280)** to indicate the likelihood of a value being an outlier. It also contains status management option to validate, invalidate, or resolve findings, allowing for system training. Now let's check out the Dupes tab. The Dupes tab contains information on duplicate values in columns, including exact and fuzzy match. We see here that we have, we see that this value appears in the data twice. Additionally, changes in column structures and patterns schemas are automatically caught before they impact the business. To summarize, in this demo, we explored how AI can automate data quality management. We saw how AI powered systems can efficiently analyze large scale data, enabling comprehensive data quality checks across diverse data sources from 30 different locations. We saw how it can automate anomaly detection to identify unexpected changes in data patterns, such as shifts in unique value counts, and presence of outliers, all without requiring any manual rule creation. We saw how machine learning [[Algorithms]] can provide detailed insights or reports through automated generation of data profiles, histograms, and correlation matrices offering a comprehensive view of data quality without any manual analysis. We also saw how AI can provide intelligent outlier detection with confidence scoring, helping us prioritize which anomalies need immediate attention. AI powered systems can continuously learn from data patterns and user feedback, progressively improving their ability
>
> **[6:17](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-data-quality-monitoring-using-collibra-data-intelligence-platform?u=76281980&t=377)** to detect and classify data quality issues over time, reducing our manual efforts and increasing our efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (13), [[Databases]] (1), [[Statistics]] (1), [[Microsoft Office|Office]] (1), [[Algorithms]] (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** stands for (2), basically means (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [What to know before implementing AI for data quality automation](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=0)** - [Instructor] Now that you understand how AI can be used to automate [[Data Quality]] monitoring, before you start implementing AI, let's take a look at a few risks and some best practices for implementing AI driven data quality automation. Some of the common risks associated with implementing AI as part of this process is misidentification of critical data quality issues, implementation of misaligned or ineffective [[AI Solutions]], biased or inaccurate AI model performance, stakeholder resistance, degradation of AI model effectiveness over time. To combat these risks, here are some of the best practices for implementing AI. Start with the data quality assessment within your organization to identify your biggest pain points. Does your organization struggle with data quality as a result of data being siloed and not in a central location? Or does your data come from sources that are generally not reliable? Choose AI tools that align with your specific needs. Many cloud providers and [[Data Management]] platforms now offer AI enhanced data quality features, such as the AWS Glue Data Quality tool that we looked at. If you are building your AI data quality monitoring tool from scratch, ensure that you have a good training data set for your AI model. The quality of your AI is only as good as the data it learns from. Implemented in phases, regardless of whether you decide to build an AI tool or use a [[SaaS]] tool, start with a pilot project
>
> **[1:33](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/what-to-know-before-implementing-ai-for-data-quality-automation?u=76281980&t=93)** to demonstrate the value to your key stakeholders. Continuously monitor and refine your AI models to ensure that they adapt to changing data patterns. Remember, while AI can greatly enhance and automate data quality processes, it is not a magic solution. Human oversight and domain expertise remain crucial in ensuring that your AI driven data quality process aligns with business needs and regulatory requirements. So to summarize, by leveraging these AI driven approaches, you can significantly improve the efficiency and effectiveness of your data quality management, leading to more reliable data for analytics decision making and AI, ML initiatives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (11), [[AI Solutions]] (1), [[Data Management]] (1), [[SaaS]] (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Data Analytics and Decision-Making Using AI

[↑ Back to Table of Contents](#table-of-contents)

#### [The power of data analytics, business intelligence tools, and AI](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=0)** - [Instructor] Now that we've learned about tools that can identify data catalog and classify the data, and we saw how to use AI to perform [[Data Quality]] monitoring, it's finally time to put that data into use, like making diamonds out of coal. Data analytics is the process of examining data to uncover patterns and draw conclusions. It's like detective work. Analysts piece together information to solve business problems. A retail company might analyze sales data to determine popular [[Microsoft Products|products]] in different seasons. [[Business Intelligence (BI)|Business intelligence]] tools, also known as BI tools, collect, process and visualize data from various sources. They're like the Swiss Army knives of the data world. These tools transform numbers into charts, [[Dashboards]], and reports. Now let's talk about AI's role in enhancing data analytics. AI processes data at high speeds recognizes patterns and predicts trends. Here's an example. Imagine you're running an [[E-Commerce]] platform. Traditional analytics might show which products are selling. BI tools could display sales trends. AI-enhanced analytics can predict future popular products, suggest customer recommendations, and detect potential fraud in real time. As you can see with AI, we can not only see the data and understand the data visually with the BI tools, AI brings several capabilities to data analytics, such as automated [[Data Preparation]], pattern recognition, predictive analysis,
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/the-power-of-data-analytics-business-intelligence-tools-and-ai?u=76281980&t=95)** [[Natural Language Processing (NLP)|natural language processing]], automated insights and personalized dashboards. We see these capabilities and actions through various BI tools. [[Microsoft Power BI]] offers insights that highlight trends in your data. [[Tableau]]'s Ask Data feature allows you to query data using natural language. We have other BI tools that also have similar AI capabilities, like IBM Cognos Analytics, Qlik Sense, Looker, SAP Analytics Cloud, et cetera. The combination of data analytics BI tools and AI is changing businesses across industries. Healthcare organizations predict patient outcomes. Financial institutions detect fraudulent transaction, manufacturers optimize supply chains and predict equipment failures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Dashboards]] (2), [[Data Quality]] (1), [[Business Intelligence (BI)|Business intelligence]] (1), [[E-Commerce]] (1)
> **Analogies:** it's like (1), imagine (1), such as (1)
> **Env Vars:** ibm (1), sap (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Demonstration of pattern recognition and predictive analytics using Power BI](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=0)** - [Instructor] AI excels at identifying complex patterns and trends and data that might be missed by human analyst. AI models can forecast future trends and outcomes based on historical data. The Key Influencers Visual is an AI powered tool that identifies and ranks factors driving [[Business Metrics]]. It uses pattern recognition and predictive analysis to reveal trends in forecast outcomes. This tool simplifies complex data analysis and enables data-driven decisions by providing clear insights on the most impactful factors affecting specific metrics. It helps businesses focus efforts where they'll have the greatest effect. Now, let's take a look at this tool in action. Using the same sample report that we used for the last demo, click on the plus sign to add a new page. Go to the Visualization section and click on the Key influencers icon. Now, it's time to add data fields. Let's expand on Sales and Item. So click on Buyer, Category. So as you see over here, let's maximize this a little bit. Over here, the Key Influencers tab provides us insight into what influences a buyer. So for example, Galvin Barrett is likely to buy from the category of [[Microsoft Products|products]] labeled as women,
>
> **[1:34](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=94)** and Galvin is also likely to buy when there is a promo going on. The likelihood of Galvin buying a product, if it's marked as promo, is 4.34. Let's take a look at a similar example. The likelihood of Shelly Thomas buying a product increases by 28.45 when the product is categorized as promo, and Shelly is also likely to buy from other categories such as Mens, BASICS and JUNIORS. This visual helps you understand what motivates or what incentivizes your customers. Let's take a look at another example. If you go back to the Learn option within your [[Microsoft Power BI|Power BI]] dashboard, you'll see that there's another sample report called [[Artificial Intelligence (AI)|Artificial Intelligence]] Sample. Click on this. And you'll see that the first page that shows up is Key influencers. This is another example of key influencers being used on another dataset. As you see over here, on average, when the discount increases, the likelihood of status being, one, increases, or in other words, there's a higher chance of revenue increase, and this is backed up by data. If discount goes up by 0.2%, the likelihood of revenue increase is 2.76 times. And revenue also goes up when the sales owner is Molly Clark, or if the product is tablet. As you see over here, the Key influencers option provides clear insights
>
> **[3:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-of-pattern-recognition-and-predictive-analytics-using-powerbi?u=76281980&t=188)** on the most impactful factors affecting the specific metrics that your team cares about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Metrics]] (1), [[Microsoft Products|Products]] (1), [[Microsoft Power BI|Power bi]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **UI Navigation:** click on (4), go to (1)
> **Versions:** 4.34 (1), 28.45 (1), 0.2 (1), 2.76 (1)
> **Definitions:** is an  (1), is a  (1), in other words (1)
> **Env Vars:** basics (1), juniors (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Demonstration of automating anomaly detection and root cause suggestion using Power BI](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=0)** - [Tutor] [[Microsoft Power BI|Power BI]]'s anomaly detection feature, eases AI to automatically identify unusual patterns or outliers in data, helping analysts quickly spot and investigate unexpected trends or data points, without manual intervention. It provides multidimensional AI visualization, helping us to drill down, to obtain in-depth breakdown of the data, based on your criteria and can be used for root cause analysis. Now, let's take a look at this in action. In the [[Artificial Intelligence (AI)|artificial intelligence]] sample report, go to the Anomaly Detection tab. We see over here that the anomaly detection option has been enabled and if we click on this graph at the point where it has detected the anomaly, we see that AI provides a clear understanding of what the anomaly is. The revenue one was unexpectedly low on 28th, although the revenue itself was pretty high in the graph, we see that the expected minimum value for the revenue on April 28th was 105K, and the expected max value was one 13K. However, the actual revenue one was 103 or close to 104K, which is low. AI also provides possible explanation for why the anomaly occurred. It states that the revenue one for factor three was unusually low, which may have lowered the revenue one total. And let's see what revenue one for three means. And we see over here that campaigns
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-anomaly-detection-and-root-cause-suggestion-using-powerbi?u=76281980&t=95)** with factor number three may have contributed to the anomaly that was detected. So consumer trade shows, market trends [[Newsletters]], new product release emails did not work as expected. As you see with the click a few buttons, we were able to identify anomalies and also get possible explanation for why these anomalies may have occurred and drill down to the factors that led to the anomaly. In this case, we had campaigns that did not work as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Newsletters]] (1)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - [tutor] (1)

#### [Demonstration of automating sentiment analysis with Power BI](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=0)** - [Instructor] Now imagine you're a business trying to understand how your customers feel about your [[Microsoft Products|products]]. You have thousands of reviews, but how do you quickly gauge the overall sentiment? This is where our score sentiment function comes into play. PowerBI's AI analyzes text and assigns a sentiment score between zero and one. Think of it as a mood thermometer. Zero is like ice cold or very negative, where one is boiling hot or very positive. Anything in the middle, well that's lukewarm or neutral. What's particularly interesting is how this function works. It's not just looking for obviously positive or negative words. No, it's much more sophisticated. It uses a combination of techniques, including text processing, part of speech analysis, and even [[Microsoft Word|word]] associations. It's like having a linguist, a psychologist, and a statistician all working together to understand the nuances of language. Here's the key point to remember. This function works best with shorter text, ideally one or two sentences. Why? Well, just as it's easier to gauge someone's mood in a brief conversation than in a long monologue, AI finds it easier to determine sentiment in concise statements. Another fascinating aspect is the objectivity assessment. Before diving into sentiment analysis, the function first determines if the text is objective or subjective. If it's mostly objective, it stops right there and assigns a neutral score of 0.50. It's only when it detects subjectivity that it proceeds to the more nuanced sentiment analysis.
>
> **[1:36](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/demonstration-to-automate-sentiment-analysis-with-powerbi?u=76281980&t=96)** Currently, this tool supports English, German, Spanish, and French with more languages on the horizon. It's a powerful asset for businesses looking to understand customer sentiment and review social media posts or forum discussions. Remember, in the age of [[Big Data]], tools like this are invaluable. They allow us to quickly and accurately gauge public opinion on a massive scale. Something like this was simply impossible just a few decades ago. Now, it is possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Microsoft Word|Word]] (1), [[Big Data]] (1)
> **Analogies:** imagine (1), think of it as (1), it's like (1)
> **Versions:** 0.50 (1)
> **Speakers:** - [instructor] (1)

#### [Forecasting time-series data using Power BI](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=0)** - [Instructor] One of [[Microsoft Power BI|Power BI]]'s most powerful features is [[Forecasting]]. This tool is a game changer for anyone working with time-series data. First, it's important to note that this feature is currently available only for line chart visuals. So if you're working with time-based data, make sure you're using a line chart to take advantage of this capability. Now, what makes this feature truly useful is customizability. You have control over key parameters like forecast length and confidence intervals. The forecast length determines how far into future you want to predict, while the confidence interval allows you to adjust the range of your prediction based on how certain you want to be. Another great aspect about this tool is its flexibility. You can experiment with different settings to see how this affects your forecast. This tool allows you to fine tune your predictions based on specific data model and business needs. Visually, it's quite intuitive. So the forecasting feature extends your existing line chart, adding a section that represents your predictive future value. The real power of this tool is in its ability to enable [[Data-driven Decision Making]]. As an analyst, you can now provide stakeholders with visualized predictions of future trends all within your Power BI reports. This can be invaluable for strategic planning and resource allocation. Remember, while this tool is powerful, it's based on historical patterns. Always combine these forecast with your industry knowledge and other relevant factors when making important decisions. Now let's see a demo.
>
> **[1:32](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/forecasting-time-series-data-using-powerbi?u=76281980&t=92)** Go over the visualization tab and click on forecast. When we expand the graph, you see that we have data for 2014, and it has predicted data for 2015, and it's that easy to forecast data. Now think about how this can be used within your organization, whether that is to predict sales, whether that is to predict churn, whether that is to predict when employees are likely to take PTO, or what time of the year your sales is likely to increase and decrease. All of this can now be done with a click of a few buttons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[Forecasting]] (2), [[Data-driven Decision Making]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** pto (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Talk to your data using AI](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/talk-to-your-data-using-ai?u=76281980&t=0)** - [Instructor] The next feature that we're going to explore is natural language query. Natural language query is nothing but asking your data and getting visual insights within minutes. You can ask these questions in plain simple English, and here's how we can do it. In your browser, type app.[powerbi.com](https://powerbi.com), and it'll take you to your [[Microsoft Power BI|Power BI]] dashboard. And over here on the left side, there's an option called Learn. Click on that and scroll to the Retail Analysis sample. Now, click on the Edit symbol over here. Let's create a new page. Under the Visualization section, you see that there are multiple options that you can choose from. Click on the option that says Q&A, and if you expand it, you'll see that it provides a Q&A chatbot. And you can see here that it opens a Q&A chatbot, which can be used to ask any questions related to your data. Now, let's ask, "What is the average unit price per category?" As you see here, it auto-populates the average prices for each category. For groceries, the average price was 1.47. For shoes, the average price was 13.84. It's that simple to be able to talk to your data using AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1)
> **UI Navigation:** click on (3)
> **Versions:** 1.47 (1), 13.84 (1)
> **URLs:** [powerbi.com](https://powerbi.com) (1)
> **Speakers:** - [instructor] (1)

#### [Risks of using AI for data analytics and mitigating controls](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=0)** - [Instructor] Before implementing AI for data analytics, it's important for you to understand the potential risks associated. Let's also discuss some of the top controls and solutions to mitigate these risks. As AI continues to enhance data analytics process, it's crucial to understand both sides of the coin, especially potential pitfalls and how to address them effectively. First and foremost, we must address [[Data Privacy]] and security concerns. Remember, these [[SaaS]] tools are processing potentially sensitive business data. To mitigate this risk, we need to implement a multi-layered approach. Start with strong data encryption, both in transit and at [[Representational State Transfer (REST)|rest]]. This is your first line of defense against unauthorized access. Next, take advantage of features like [[Microsoft Power BI|Power BI]]'s low level security. This ensures that users only see the data they're supposed to see. It's a powerful tool for maintaining data confidentiality within your organization. Don't forget the importance of regular audits. You should be reviewing access logs and user permissions frequently, implement user access reviews quarterly if possible. This will help you spot any unusual activity or inappropriate access. Lastly, ensure that your data handling practices align with the relevant regulations like GDPR, HIPPA, or any other regulations that may be applicable to your organization. Compliance isn't just about avoiding fines. It's about protecting your data and maintaining trust. Moving on to model accuracy and bias, pre-built AI models are super convenient, but they may not always align perfectly
>
> **[1:35](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=95)** with your specific business context. Your first line of defense here is validation. Always crosscheck AI generated insights against your domain expertise. Does the output make sense given what you know about the industry? Regular testing is crucial. Set up processes to consistently check the model's output for accuracy and bias. This is especially important if you're using these insights for critical business decisions. Many tools, including Power BI, allow you to customize certain aspects of their AI features. Take advantage of this. Fine tune the models to better fit your specific needs and data characteristics. Consider using multiple models or use tools to cross validate results. If different models are giving you similar insights, that increases your confidence in the results. This is one of the most common risks associated with using AI. Now let's talk about a more subtle risk, overreliance on automated insights. It's easy to become overly dependent on these AI generated insights, potentially overlooking important nuances that require human judgment. To counter this, you need to foster a culture of critical thinking within your organization. Train your teams to use AI generated insights as a starting point for analysis, not the final [[Microsoft Word|word]]. Encourage them to question the results, to dig deeper. Emphasize the importance of combining these insights with industry knowledge and experience. A machine learning model might spot a correlation, but it takes human expertise to understand if that correlation is meaningful
>
> **[3:08](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=188)** or actionable in your specific business context. Also, remember correlation is not always causation, so take this data analysis and make sure that it fits the business context. Integration is often another significant hurdle when implementing new tools. SaaS AI tools need to work seamlessly with your existing systems to be truly, truly effective. Start by carefully planning your [[Data Architecture]]. Understand how data will flow between systems and when potential bottlenecks may occur. Take advantage of the extensive connectivity options that tools like Power BI or other BI tools of your choice offer. These can help you create more seamless data ecosystem. Implement proper [[Data Governance]] practices. This ensures that data remains consistent and reliable across all your systems. Regular testing of your [[Data Pipelines]] is crucial. You need to ensure that the data feeding into your AI tools is accurate and up to date at all times. The black box nature of AI can be a significant issue, especially when you need to explain decisions to stakeholders. To increase transparency, leverage explainable AI features. Many modern tools, including Power BI, offer features that can break down which factors influenced a particular prediction or insight. Document the logic behind your AI driven dashboard and reports. This documentation is invaluable for both current use and future audits. Educate your stakeholders on the basics of how the AI models work. You don't need to turn them into data scientists, but a basic understanding can go a long way
>
> **[4:43](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/risks-of-using-ai-for-data-analytics-and-mitigating-controls?u=76281980&t=283)** in [[Building Trust]] in the system. Last but not least, let's discuss compliance. Using AI or data analytics can raise complex compliance issues, especially when dealing with personal data or in heavily regulated industries. Stay informed about relevant regulations in your industry and region of operation. Regulatory landscapes are constantly evolving, particularly around AI and data use. Use the compliance features built into your tools. For example, the [[Artificial Intelligence (AI)|Artificial Intelligence]] Act is a European Union regulation concerning artificial intelligence. For example, if you're in the European Union, the EU AI Act may be applicable to you. Implement regular compliance audits. These should cover not just your data, but also how it's being used and analyzed. For particular sensitive data, consider advanced options like Power BI's Bring Your Own Key encryption. This gives you an extra layer of control over your data. While these controls may seem extensive, they're essential for responsibly leveraging the power of SaaS AI tools in data analytics. Remember, the goal is not to hinder the use of these powerful tools, but to ensure that they're used effectively, ethically, and securely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (5), [[SaaS]] (3), [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[Data Privacy]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** gdpr (1), hippa (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Extending AI in your data operations](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-ai-to-improve-ops-for-your-data-organization/extending-ai-in-your-data-operations?u=76281980&t=0)** - Congratulations on completing this comprehensive course on AI powered data ops. Let's reflect on the valuable skills and knowledge you've required. As you conclude this course, you are equipped with practical hands-on experience in using powerful AI driven data tools. You are now positioned to drive efficiency, uncover deeper insights, and make more informed decisions within your organization. I encourage you to apply these skills in your organization, start small, experiment, and gradually expand your use of AI in your data organization. Share your knowledge with your colleagues, and be a positive influence within your team. The future of data operations involves intelligent automation and data-driven insights. You are now prepared to contribute significantly to this future. Thank you for your participation in this course. I'm confident you'll use these tools to drive innovation and success in your organization. Remember, this is just the beginning. Continue learning, stay curious, and keep exploring the expanding possibilities of AI and data operations.

> [!info]- Semantic Content
>
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