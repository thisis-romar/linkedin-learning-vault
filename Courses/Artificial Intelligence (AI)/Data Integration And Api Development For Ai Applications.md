---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-integration-and-api-development-for-ai-applications
url: "https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications"
level: Intermediate
updated: 5/28/2025
learners: 4435
skills:
  - AI Software Development
  - Artificial Intelligence (AI)
  - Application Programming Interfaces (API)
  - Data Integration
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQF3eB2Kr1sDGQ/learning-public-crop_675_1200/B4EZb0wdpRHcAY-/0/1747863067825?e=2147483647&amp;v=beta&amp;t=flbMfv7yDJSkC4vIZA-8jL3yT4zmGCIHgKKwow91l7s"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Working with Data- Engineering, Integration, and MLOps for AI]]'
next_courses:
  - '[[Data Versioning, Lineage, and Quality Monitoring for AI]]'
path_nav: '[{"path":"Working with Data- Engineering, Integration, and MLOps for AI","position":1,"total":5,"prev":null,"next":"Data Versioning, Lineage, and Quality Monitoring for AI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/application-programming-interfaces-api
  - skill/data-integration
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Data%20Integration%20And%20Api%20Development%20For%20Ai%20Applications.md)

![Data Integration And Api Development For Ai Applications](https://media.licdn.com/dms/image/v2/D4E0DAQF3eB2Kr1sDGQ/learning-public-crop_675_1200/B4EZb0wdpRHcAY-/0/1747863067825?e=2147483647&amp;v=beta&amp;t=flbMfv7yDJSkC4vIZA-8jL3yT4zmGCIHgKKwow91l7s)

# Data Integration And Api Development For Ai Applications

> This course outlines the skills you need to successfully connect diverse data sources and build APIs that enable seamless interaction between AI models and applications. Join instructor Janani Ravi as she covers essential techniques for efficient data integration and API design, and shows you how to ensure robust communication in AI-driven systems. This course is an ideal fit for anyone working wi

> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications) | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Approaches to Data Integration]]** (7 videos)
- **[[#2. Integrate Data into a Unified Analytics Platform]]** (3 videos)
- **[[#3. API Development for AI Applications]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The need for data integration and APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=1)** Hi, and welcome to this course on Data Integration and API Development for AI Applications.
>
> **[0:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=7)** We know that AI applications are heavily dependent on good-quality data to train their models.
>
> **[0:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=13)** So let's first understand the need for data integration and APIs in AI systems.
>
> **[0:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=19)** The first is, of course, accurate model training and performance.
>
> **[0:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=24)** If you've reliably integrated your data from the right sources, this ensures that AI models learn from consistent, accurate, and representative information.
>
> **[0:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=33)** This is fundamental for achieving high prediction accuracy, reducing bias, and enabling the model to generalize well to new, unseen data.
>
> **[0:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=41)** Good-quality data with reliable integration gives you deeper and more trustworthy insights.
>
> **[0:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=46)** Integrating data from various sources provides a more holistic and comprehensive view of the information.
>
> **[0:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=52)** This leads to richer insights and more informed decision-making based on AI analysis.
>
> **[0:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=57)** When the underlying data is reliable and well integrated, the resulting AI-driven insights are more trustworthy and can be confidently used.
>
> **[1:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=65)** Many AI systems don't rely on data from a single source.
>
> **[1:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=70)** They combine information from disparate systems and data types to solve complex problems.
>
> **[1:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=76)** Reliable data integration provides the necessary foundation to bring this diverse data together.
>
> **[1:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=82)** You need data integration to train your models with the right data, and you need the right kind of APIs to expose your models to the world.
>
> **[1:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=89)** This means you need data pipelines to get the data into your system, and ingesting data from disparate sources may require the use of APIs to access the data.
>
> **[1:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=102)** All of this makes your AI system automated and scalable.
>
> **[1:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=106)** Data pipelines automate the process of extracting, transforming, and loading data from various sources into a centralized location accessible to AI models.
>
> **[1:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=114)** This ensures a continuous and scalable flow of clean and prepared data.
>
> **[1:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=119)** APIs often act as bridges, enabling AI systems to connect with and retrieve data from a wide range of internal and external applications, databases, and services.
>
> **[2:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=129)** This is what allows AI to leverage diverse data sets, including real-time streams and specialized data sources.
>
> **[2:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=136)** Data pipelines facilitate the deployment of AI models by providing a streamlined way to feed them with the necessary data for making predictions or taking actions in real time.
>
> **[2:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-and-apis?u=76281980&t=146)** APIs enable other applications and systems to interact with deployed AI models, sending data for inference and receiving predictions, making AI functionality accessible and integrable into broader workflows and user experiences.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), new, (1), require (1)
> **Env Vars:** api (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/prerequisites?u=76281980&t=1)** Before we get into the content of this course, here are some of the prerequisites that you need to have to make the most of your learning.
>
> **[0:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/prerequisites?u=76281980&t=7)** This course assumes that you have a basic familiarity with machine learning and artificial intelligence solutions.
>
> **[0:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/prerequisites?u=76281980&t=14)** Maybe you've built and trained machine learning and AI models, and you have a fundamental understanding of the AI workflow.
>
> **[0:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/prerequisites?u=76281980&t=21)** This course also assumes that you have a basic understanding of data integration.
>
> **[0:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/prerequisites?u=76281980&t=25)** You understand the fact that data is retrieved from diverse sources and ingested into a unified platform that is typically used for analysis.
>
> **[0:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/prerequisites?u=76281980&t=34)** And finally, it would help if you had some hands-on experience with data pipeline services, especially for the hands-on portion of this course.
>
> **[0:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/prerequisites?u=76281980&t=40)** The demo in this course will involve the use of Microsoft Fabric, Microsoft's unified data analytics platform, to ingest data from diverse sources so that it's ready for analysis within Fabric.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Prerequisites:** you need to have (1)

#### The need for data integration in AI
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=1)** Let's now understand what exactly data integration is all about and its importance.
>
> **[0:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=6)** Data integration refers to the process of combining data from multiple disparate sources into a unified view.
>
> **[0:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=14)** Essentially, the idea is that you get a single consistent dataset for analysis and decision-making.
>
> **[0:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=20)** Data in the real world is never available in a single place.
>
> **[0:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=24)** Organizations might have data internally, but it might reside with different teams involving different systems.
>
> **[0:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=30)** Organizations may also make use of external data from third parties.
>
> **[0:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=34)** This means data integration involves pulling data from various locations like databases, applications, files, and cloud services.
>
> **[0:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=42)** And this data may have different formats and structures.
>
> **[0:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=45)** The goal of data integration is to transform and consolidate this diverse data into a single coherent dataset, making it easier to understand and analyze this data.
>
> **[0:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=56)** Integration is often not just about pulling data together, but it also includes data cleaning and transformation processes.
>
> **[1:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=65)** This is to ensure data quality and uniformity across the integrated dataset.
>
> **[1:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=70)** What are some of the benefits of integrating data to a unified source?
>
> **[1:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=74)** The first is improved business intelligence.
>
> **[1:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=77)** When you consolidate data from various sources, organizations are able to get a comprehensive view of their operations, and this leads to more accurate and insightful analysis, better reporting, informed decision-making.
>
> **[1:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=91)** Data integration also enhances operation efficiency.
>
> **[1:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=95)** This streamlines processes by reducing manual data entry and minimizing redundancies in your data.
>
> **[1:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=101)** This, of course, means increased productivity and increased cost savings.
>
> **[1:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=106)** AI models are only as good as the data that you use to train them.
>
> **[1:49](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=109)** Integration processes often involve data cleaning and transformation.
>
> **[1:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=114)** This helps eliminate errors and inconsistencies in the data.
>
> **[1:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=117)** Your data will be reliable and trustworthy, and thus lead to better models.
>
> **[2:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=123)** Let's say you're working with customer data, and you collect customer data from various sources, data that you have available internally, and also data from external systems.
>
> **[2:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=133)** This way, organizations can get a 360-degree view of their customers, and this is what enables personalized marketing, improved customer service, and better customer satisfaction.
>
> **[2:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=144)** Data integration is all about bringing data together.
>
> **[2:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=148)** Data comes from diverse sources.
>
> **[2:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=150)** They may be databases within the organization or maybe externally to the organization.
>
> **[2:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=154)** Same with files, external data is usually accessed via web APIs.
>
> **[2:39](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=159)** You bring all of these sources together and store them in a unified analytics platform, and you present a unified view for the purposes of analysis and decision making.
>
> **[2:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=172)** Now why is it so important to integrate data to a unified view, especially from the point of view of AI applications?
>
> **[2:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=179)** Well, let's say your data were not integrated and it were fragmented.
>
> **[3:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=183)** There are many issues with fragmented data.
>
> **[3:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=186)** Fragmented data is often referred to as siloed data, and the different systems that store data are referred to as data silos.
>
> **[3:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=194)** Data silos are isolated data systems.
>
> **[3:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=197)** They prevent a unified view of information, and this leads to inconsistencies and hinders collaboration between departments.
>
> **[3:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=205)** If you're talking customer information, let's say each department has only one part of the information for a customer.
>
> **[3:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=211)** One department knows what orders a customer has made.
>
> **[3:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=214)** Another department stores the recommended products to a customer.
>
> **[3:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=217)** A third department stores the personal details of a customer.
>
> **[3:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=221)** If data was siloed in this manner, this means businesses do not have a comprehensive data picture, and they make decisions based on incomplete or inaccurate information.
>
> **[3:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=232)** This increases the risk of mistakes.
>
> **[3:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=235)** If you do not have the data in an integrated environment, you might need to resort to manual data transfer and reconciliation.
>
> **[4:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=242)** This can be time-consuming and error-prone.
>
> **[4:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=245)** It'll slow down your processes and increase operational costs.
>
> **[4:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=249)** If you do not have automated pipelines for data ingestion and transfer, this increases the risk of errors when you manually move data between systems.
>
> **[4:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=258)** Why is it important that you have good data integration systems for AI applications?
>
> **[4:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=264)** Well, you need comprehensive training data.
>
> **[4:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=266)** AI models require large and diverse data sets to learn effectively.
>
> **[4:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=271)** Data integration consolidates information from various sources, ensuring that AI receives a complete and representative training set.
>
> **[4:39](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=279)** Many AI applications, such as fraud detection, personalized recommendations, need to operate in real time.
>
> **[4:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=286)** Data integration facilitates this continuous flow of data from diverse sources, allowing AI to make timely and accurate predictions.
>
> **[4:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=294)** AI models are often referred to as garbage in, garbage out because of how sensitive they are to data quality.
>
> **[5:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=300)** Integrated data undergoes cleaning, transformation, and other processes, ensuring that the information used by AI is accurate, consistent, and reliable.
>
> **[5:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=310)** Your data pipelines can go beyond transforming data.
>
> **[5:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=313)** Feature engineering, which is essential for AI performance, involves creating meaningful input features from raw data.
>
> **[5:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=321)** And data integration enables the combination of relevant attributes from multiple sources.
>
> **[5:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=327)** This, of course, improves the ability of your AI system to identify patterns.
>
> **[5:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=331)** Data used to train AI systems encounters some or all of these quality issues.
>
> **[5:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=337)** Data collection and storage issues often lead to silos, fragmentations, and format inconsistencies.
>
> **[5:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=342)** If there are different teams collecting this data, they may not store them in the same place or in the same format.
>
> **[5:49](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=349)** Data may be inaccurate or incomplete, and these are fundamental data quality issues, or you have no idea where the data came from, unknown data lineage.
>
> **[6:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=360)** That's a quality issue, too.
>
> **[6:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=362)** Organizations may not be mindful of their data.
>
> **[6:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=364)** They may not have a data and AI governance framework, and this could end up exposing their data to misuse and their business to liabilities.
>
> **[6:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=372)** And finally...and another problem, organizations are often understaffed.
>
> **[6:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=377)** If they have resource constraints, such as understaffed and overworked IT departments, as well as budgetary limits, they may not put in all of the safety guardrails that they need to.
>
> **[6:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=388)** If your AI system is trained on poor-quality data, that can lead to a host of issues.
>
> **[6:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=393)** AI models learn from the data they're fed.
>
> **[6:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=396)** If that data reflects existing societal biases, the AI will perpetuate and even amplify those biases.
>
> **[6:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=403)** This can lead to discriminatory outcomes in areas like loan applications, hiring processes, and criminal justice.
>
> **[6:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=410)** AI models rely on accurate data to make correct predictions.
>
> **[6:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=414)** If the data is inaccurate or incomplete, the AI's predictions will be flawed, leading to errors that can have serious consequences, especially in critical applications like healthcare or autonomous driving.
>
> **[7:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=426)** Poor-quality data can hinder an AI model's ability to learn and generalize.
>
> **[7:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=431)** This can result in models that perform poorly in real-world scenarios, even if they do well on training data.
>
> **[7:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=437)** And finally, cleaning and correcting poor-quality data is time-consuming and expensive.
>
> **[7:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=442)** It's far better to get it right in the first shot.
>
> **[7:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/the-need-for-data-integration-in-ai?u=76281980&t=445)** Correcting data can significantly increase the cost of developing and deploying AI systems.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), require (1), from, (1), finally. (1)
> **CLI Commands:** make (4)
> **Analogies:** such as (2), picture (1)
> **Definitions:** refers to (1)
> **Best Practices:** recommended (1)

#### Data silos
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=1)** Organizations have known the importance of collecting and storing data for decades now.
>
> **[0:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=6)** The unfortunate fact is, not all data is present in the same place and in the same format.
>
> **[0:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=12)** The data that has been collected is often siloed.
>
> **[0:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=15)** This is often the first barrier to overcome for any organization.
>
> **[0:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=19)** A silo is essentially an isolated collection of data that is held by, say, one department or one system within the company and is inaccessible or difficult to access by other parts of the organization.
>
> **[0:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=32)** This can be because the data is in a different format, it's in a system that's not accessible easily, or maybe other teams don't know this data exists.
>
> **[0:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=40)** Here is how data silos may be created.
>
> **[0:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=44)** You have different origins of data.
>
> **[0:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=46)** Maybe the data is from a database or from file systems or from web APIs.
>
> **[0:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=50)** Data is collected from these diverse sources, and these different bits of data are placed in different isolated repositories of data.
>
> **[0:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=59)** Each data silo here represents maybe a separate department, a system, or a separate application that holds its own data without sharing it effectively with others.
>
> **[1:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=68)** This data is likely being used, but they're used individually rather than together.
>
> **[1:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=74)** Analytics systems are built on these isolated repositories, and they have no view of the other data that exists in the Org.
>
> **[1:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=82)** Data silos are often the result of how organizations work.
>
> **[1:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=87)** Organizational structure might have different departments that operate independently using their own systems and processes.
>
> **[1:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=93)** This leads to data isolation.
>
> **[1:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=95)** Each department or team might use their own tools and technologies to work with data.
>
> **[1:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=100)** Different software applications and databases may not be compatible, making data sharing difficult.
>
> **[1:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=106)** Now the company culture might be such that there is no emphasis on data sharing on collaboration, and this can contribute to the formation of silos.
>
> **[1:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=115)** Organizations often grow via mergers and acquisitions.
>
> **[1:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=119)** When companies combine, oftentimes, they have very different data systems that are not easily made to work together.
>
> **[2:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=127)** How do you know whether silos exist in your organization?
>
> **[2:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=130)** Now if you have different departments that produce reports with varying or contradictory data for the same metrics, it's a strong indication of the presence of silos.
>
> **[2:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=139)** This suggests that each department is working with its own isolated dataset, leading to discrepancies.
>
> **[2:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=145)** Let's say the higher-ups in your company ask for customer data, and if your customer service sales and marketing teams have fragmented views of customer interactions, it indicates silos.
>
> **[2:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=155)** For example, if sales doesn't know about support tickets and marketing doesn't know about sales interactions, that's a silo.
>
> **[2:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=162)** If you find that your employees spend a significant amount of time manually transferring and reconciling data between systems, that's a clear sign that something is off.
>
> **[2:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=172)** This suggests that systems are not integrated, forcing manual workarounds.
>
> **[2:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=176)** If you find that your departments are not together well, if they struggle to share data and insights, leading to poor collaboration and decision-making, data silos are likely the culprit.
>
> **[3:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=187)** This can manifest as departments not having access to other departments' data and maybe missing out on crucial information that would improve the overall business.
>
> **[3:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=195)** Data silos can have a significant impact on your business.
>
> **[3:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=199)** When data is fragmented, this means managers do not have a complete picture of the business, and decisions are made on incomplete or inaccurate information.
>
> **[3:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=207)** Data silos waste everyone's time and money.
>
> **[3:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=210)** They create redundancies and inefficiencies.
>
> **[3:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=213)** Employees waste time manually transferring data from one system to another and reconciling data.
>
> **[3:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=218)** This, of course, slows down anything that you're working on.
>
> **[3:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=222)** Let's say it's fragmented customer data, that's going to be a poor experience for the customers of your product.
>
> **[3:48](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=228)** This means customer service might be inconsistent, marketing campaigns might be irrelevant, and in the long run, your customers are not going to be as loyal.
>
> **[3:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=237)** Innovation is going to be difficult because silos stifle collaboration and data sharing.
>
> **[4:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=243)** It limits everyone's ability to identify trends, patterns, and opportunities for growth.
>
> **[4:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=249)** And here, we are not even counting the cost of fixing bugs and issues that arise because you're working with incomplete data.
>
> **[4:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=257)** Plus, with silos, you're likely maintaining multiple disparate systems, which increase your IT complexity and costs.
>
> **[4:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=265)** It's pretty clear now that data silos are a bad thing.
>
> **[4:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=268)** Silos prevent organizations from getting a comprehensive understanding of their operations, customers, and market.
>
> **[4:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=275)** You might have duplicate data, you might have different variations of the same data, and this leads to inaccuracies and unreliable insights.
>
> **[4:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=284)** If your teams resort to manual data transfer and reconciliation, well, that's time-consuming, and of course, very, very error-prone.
>
> **[4:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=292)** If you're making decisions based on incomplete or fragmented data, that can result in expensive mistakes.
>
> **[4:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/data-silos?u=76281980&t=298)** And overall, your organization will be poor performing because there's less collaboration, and this hinders innovation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1), picture (1)


### 1. Approaches to Data Integration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Phases of data integration: Data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=1)** Data integration is not a single operation.
>
> **[0:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=3)** It consists of several phases.
>
> **[0:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=5)** And in this video, we'll discuss these phases.
>
> **[0:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=8)** The first phase is to identify all of the data sources.
>
> **[0:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=12)** Data sources are the origins of data, and this can include databases, applications, cloud services, and more.
>
> **[0:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=19)** Efficient integration requires handling a diverse array of data sources.
>
> **[0:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=24)** Once we know what data we have to access, the next step is data ingestion.
>
> **[0:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=28)** This is the process of extracting data from various sources and preparing it for integration.
>
> **[0:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=34)** Data ingestion methods vary from batch processing to real-time processing.
>
> **[0:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=38)** Next, we have data mapping.
>
> **[0:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=40)** This is what we need to combine data from different systems.
>
> **[0:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=43)** It's crucial to map data elements to a common framework.
>
> **[0:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=47)** This ensures consistency and accuracy in the integrated data.
>
> **[0:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=51)** Now the way your source data is structured may not map what you need in the target system.
>
> **[0:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=56)** Data must often be transformed to match the target system schema, and this step includes data cleaning, where inconsistencies and errors are corrected.
>
> **[1:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=65)** And finally, we have data loading.
>
> **[1:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=67)** Transformed data is loaded into the target system, such as a data warehouse or a data lake, and these systems are usually part of a unified data analytics platform.
>
> **[1:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=77)** This is where it'll be accessed for analysis.
>
> **[1:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=79)** Let's discuss each of these in a little more detail, starting with the data sources.
>
> **[1:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=85)** Data integration begins at this phase, begins with identifying the source systems that generate or store data.
>
> **[1:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=94)** Now the data can be internal to the organization or externally provided by third party or the government.
>
> **[1:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=100)** The sources can include SQL databases, NoSQL systems, flat files like CSVs, APIs, and even cloud storage solutions. Every source is not the same.
>
> **[1:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=110)** Every source may have different data formats, access protocols, and update frequencies.
>
> **[1:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=116)** You need to understand the characteristics of every individual source to plan effective integration.
>
> **[2:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=122)** You'll use this information to identify the kind of data pipelines to build and their refresh frequencies.
>
> **[2:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=128)** Every source may have different data formats.
>
> **[2:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=131)** Some data sources may be structured like relational databases.
>
> **[2:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=135)** Others might be semi-structured, like JSON data that you get from APIs.
>
> **[2:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=140)** Or the data sources might be unstructured, like logs or documents.
>
> **[2:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=144)** Your data integration setup must accommodate all of these types.
>
> **[2:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=148)** Dealing with different types of data is an essential part of integration.
>
> **[2:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=153)** Structured data tends to be highly organized with a predefined format or schema.
>
> **[2:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=158)** Such data is easily searchable and analyzable.
>
> **[2:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=161)** Data in relational databases and spreadsheets are examples.
>
> **[2:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=164)** Semi-structured data is data that doesn't fit neatly into a relational database but has some organizational properties, like, say, tags or metadata that separate the semantic elements.
>
> **[2:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=175)** Semi-structured data is easier to analyze than unstructured data.
>
> **[2:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=179)** Examples include JSON and XML data.
>
> **[3:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=182)** And finally, we have unstructured data, and a vast majority of the data in the real world tends to be unstructured.
>
> **[3:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=189)** This is data that does not have a predefined format or organization.
>
> **[3:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=193)** It's often challenging to analyze using traditional methods.
>
> **[3:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=196)** Examples include text documents, images, audio, and video.
>
> **[3:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=200)** How you access the different data sources may also be different, for example, the access method and protocol used.
>
> **[3:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=207)** Sources may expose data via different protocols.
>
> **[3:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=210)** Maybe JDBC or ODBC for databases, REST or SOAP APIs.
>
> **[3:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=215)** File system access might involve reading CSV or XML files.
>
> **[3:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=218)** Event data might involve reading message queues.
>
> **[3:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=221)** Authentication and access mechanisms, such as OAuth or API keys, may also differ.
>
> **[3:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=226)** The data types might have very different schemas.
>
> **[3:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=230)** The fields might be different.
>
> **[3:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=231)** Naming conventions might be different.
>
> **[3:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=233)** The table structures and the way the data is split up might be different.
>
> **[3:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=238)** Some sources might be strongly typed, such as SQL sources.
>
> **[4:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=241)** Other sources with more flexible schema might require NoSQL access or API access.
>
> **[4:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=247)** Data from different sources may update at different frequencies.
>
> **[4:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=251)** For example, if you're looking at event data, that might be real time, so that might be a Kafka or a Change Data Capture-enabled database.
>
> **[4:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=259)** Other sources may only allow you to run batch processes.
>
> **[4:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=263)** And the frequency at which you can run these batch jobs may differ.
>
> **[4:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=266)** Maybe you can run them once a week, maybe you can run them just once a month.
>
> **[4:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=270)** Each source is likely to have a different volume and velocity of data.
>
> **[4:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=276)** High-volume transaction systems may generate millions of rows per day.
>
> **[4:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=280)** This means whatever pipeline you're using to ingest data should be able to handle this.
>
> **[4:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=285)** Or there may be other systems where the data changes very, very infrequently, but that data might be more critical.
>
> **[4:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=293)** Your pipeline needs to support this as well.
>
> **[4:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=296)** Not all sources will have the same quality.
>
> **[4:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=299)** Some sources might enforce very strict validation rules, which means you get high-quality data.
>
> **[5:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=305)** But others may be more inconsistent, maybe there are missing values, outliers, duplicates.
>
> **[5:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-sources?u=76281980&t=310)** So you need to figure out how each source behaves and deal with them accordingly.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), json (2), xml (2), api (2), jdbc (1)
> **Code Keywords:** finally, (2), let (1), require (1), this. (1)
> **Analogies:** such as (3), for example (2)
> **Definitions:** is an  (1)
> **Prerequisites:** setup (1)

#### Phases of data integration: Data ingestion
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=1)** Once you've identified sources, let's talk about how you can use data ingestion to get them into a unified system.
>
> **[0:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=7)** Data ingestion is the process of collecting data from various sources and moving that data into a central system.
>
> **[0:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=14)** Now this can happen in real-time mode, that is, streaming data, or at scheduled intervals for batch data.
>
> **[0:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=21)** Of course, how you choose to ingest data depends on the type of data source that you're working on.
>
> **[0:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=26)** There are system requirements and your latency needs.
>
> **[0:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=30)** You have to make sure that your ingestion systems are robust and your data delivery is reliable and automated.
>
> **[0:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=38)** For data ingestion, you have to typically deal with two broad categories of data.
>
> **[0:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=43)** Streaming data is data that is generated continuously and processed in near real time, for example, sensor readings from IoT devices or financial transactions that are analyzed as they happen.
>
> **[0:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=54)** Batch data, on the other hand, is collected over a period of time and processed in chunks or batches.
>
> **[1:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=61)** Payroll processing or analyzing website logs once a day or once a week; well, that's an example of batch processing.
>
> **[1:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=68)** Here are some capabilities that your data ingestion layer should have.
>
> **[1:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=73)** You should be able to handle both batch and real-time ingestion depending on what kind of source you're working with.
>
> **[1:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=79)** You should have some flexibility in selecting the mode in which you ingest data so you can adapt to different latency and volume requirements.
>
> **[1:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=87)** The ingestion layer needs to be robust.
>
> **[1:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=89)** You'd need to ensure that failures, timeouts, or dropped connections are handled gracefully.
>
> **[1:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=96)** In addition, make sure you have automatic retry logic configured, checkpointing setup, and error logging.
>
> **[1:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=102)** This is needed for continuity and reliability.
>
> **[1:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=106)** Your ingestion pipeline should be set up to validate the data that you're reading in and perform quality checks as needed.
>
> **[1:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=112)** You should be able to detect, say, missing values, type mismatches, or records that are corrupt.
>
> **[1:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=118)** What you do with this corrupt data, that's based on your business need.
>
> **[2:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=122)** So you might want to reject the bad records or maybe send them for further analysis to a separate queue.
>
> **[2:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=128)** All of these are possible choices.
>
> **[2:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=131)** Now once you ingest data, you still need to be able to trace back where the data came from, so make sure your pipeline captures source metadata, such as timestamp, source systems, batch ID, or any versioning information.
>
> **[2:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=145)** If you ever need to audit your data for compliance or regulatory reasons, this is going to help you.
>
> **[2:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=150)** Also, make sure that your data ingestion layer is horizontally scalable.
>
> **[2:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=155)** You might be ingesting a low volume of data today, but this can grow over time.
>
> **[2:39](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=159)** Make sure you set up parallel processes for ingesting data so that it's not sequential.
>
> **[2:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-ingestion?u=76281980&t=165)** Think of the capacity of your destination systems and maybe implement rate limits or resource throttling.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Prerequisites:** set up (2), make sure you have (1), setup (1)
> **Code Keywords:** let (1), from, (1)
> **Analogies:** for example (1), such as (1)

#### Phases of data integration: Data mapping, transformation, and loading
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=1)** Once you've ingested the data from disparate sources, the next step is to map your data to the target schema.
>
> **[0:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=8)** Data mapping defines how fields from different sources correspond to those in the target schema.
>
> **[0:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=13)** This is about aligning data elements like column names, data types, and units to what you want it to be finally.
>
> **[0:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=22)** This step is crucial when you integrate data from systems that use different terminologies or structures for similar concepts.
>
> **[0:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=30)** Mapping ensures consistency in naming, interpretation, and usage of data.
>
> **[0:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=35)** When you're ingesting data, you are likely using a special tool or technology, and these tools, especially the modern tools, often have a data mapping phase.
>
> **[0:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=45)** They allow rule-based or visual mapping, which makes it easier for you to manage changes over time and to enforce standards.
>
> **[0:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=52)** Mapping, of course, is needed for data that has a schema, whether it's structured or semi-structured.
>
> **[0:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=58)** For example, your source data might have no column names, but you might want meaningful column names in the destination.
>
> **[1:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=66)** This is part of field mapping.
>
> **[1:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=68)** Once you've mapped your fields from the source system to the target system, the next step is data transformation.
>
> **[1:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=75)** Transformation is about reshaping your data to meet the needs of the destination system or meet the needs of any downstream analysis that you perform.
>
> **[1:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=84)** Transformation can include many, many different kinds of operations: filtering, merging two data streams together, formatting, aggregating the data, changing the data types.
>
> **[1:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=95)** Common transformations include cleaning up inconsistent data, removing duplicates, standardizing formats, such as dates or currencies, to make sure they're all uniform, or maybe you enrich your records with additional information, you add a new calculated column, you compute measures on your data.
>
> **[1:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=113)** Transformations are a fairly complex operation, and they play a very, very important role in improving the quality of your data and making sure that the raw data that you've ingested from diverse sources is now useful for analytics, reporting, and AI.
>
> **[2:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=129)** Here are some common transformation operations that you might perform.
>
> **[2:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=133)** Data cleaning involves removing or correcting invalid, incomplete, or duplicate records.
>
> **[2:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=139)** You might standardize null values, fixed typos, make sure casing is consistent, or formatting is consistent for, say, phone numbers or dates.
>
> **[2:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=148)** You might also perform data type conversion.
>
> **[2:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=150)** You might convert fields from one type to another, such as you may have fields that are in the string format but should actually be integers, or you have a date field, the string format, but it should be of type timestamp or date.
>
> **[2:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=163)** This is what ensures compatibility with the target schema or processing logic.
>
> **[2:48](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=168)** You might want to pre-compute aggregations on your data.
>
> **[2:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=171)** We may summarize data by grouping by certain fields, calculating sums, averages, min, max, counts.
>
> **[2:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=178)** This is very common if you're preparing data for dashboard analysis.
>
> **[3:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=183)** With AI systems, you may want to work with unaggregated raw data.
>
> **[3:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=188)** And finally, data enrichment.
>
> **[3:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=190)** And feature engineering is a part of this.
>
> **[3:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=192)** You might bring together data from multiple sources by adding new fields to your data.
>
> **[3:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=197)** Sources can be internal or external.
>
> **[3:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=200)** You might add region information based on postal code or product category based on your SKU information.
>
> **[3:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=207)** You might use a combination of latitude and longitude and generate a PIN code or a zip code using those features.
>
> **[3:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=214)** You might combine features to get a more meaningful feature, all part of data enrichment.
>
> **[3:39](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=219)** Once you're satisfied with the data itself, that's when it's time for data loading, getting the data into the target system.
>
> **[3:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=227)** This is often the final step in data integration when transformed data is written to a target system.
>
> **[3:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=234)** Now this can be a data warehouse, a data lake, or maybe some kind of analytics tool.
>
> **[3:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=239)** When you're building AI systems, such data will typically be in a data lake or a data warehouse, part of a unified analytics platform that supports predictive and large language models.
>
> **[4:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=250)** It's not necessary that all of your data is written in one go.
>
> **[4:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=254)** Data loading can be done incrementally in small batches or completely if the full data is available.
>
> **[4:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=260)** You might have a complete load initially, and then when you have changes or updates to your data, you might load incrementally.
>
> **[4:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=268)** Here's what an end-to-end data integration system looks like.
>
> **[4:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=273)** We have the source systems.
>
> **[4:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=274)** This, remember, is the origin of our data, and this can be from a variety of sources.
>
> **[4:39](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=279)** We use different ingestion tools to get this data into our target system.
>
> **[4:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=283)** These ingestion tools should be able to work with both batch and streaming data.
>
> **[4:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=287)** And then we have the mapping and transformation layer.
>
> **[4:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=290)** This is where data is standardized, so it fits the target schema in the system where we are going to finally store the data, that is, our target system.
>
> **[4:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=299)** Once the data is available in the target system, it's available within our organization.
>
> **[5:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=305)** The data is typically stored in a data warehouse, data lake, or made available to business intelligence tools.
>
> **[5:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=311)** It's important that this entire data integration system is automated, so you are not dealing with manual reconciliation and manual copying of data.
>
> **[5:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/phases-of-data-integration-data-mapping-transformation-and-loading?u=76281980&t=321)** That, of course, is highly error-prone.

> [!info]- Semantic Content
>
> **Code Keywords:** finally. (1), for, (1), finally, (1), this. (1), this, (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (2)
> **Env Vars:** sku (1), pin (1)
> **Definitions:** is a  (1)

#### Methods of data integration
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=0)** There are a variety of different techniques that you can use for data integration, and that's what we'll discuss in this movie.
>
> **[0:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=7)** The first and most common technique that you might have heard of is Extract, Transform, Load, or ETL.
>
> **[0:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=13)** This is a traditional data integration process where data is extracted from source systems, transformed, that is, cleaned, standardized, enriched, and loaded into a target data warehouse or data lake.
>
> **[0:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=25)** In AI systems, ETL prepares structured and clean data for model training and analysis.
>
> **[0:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=32)** Another method is ELT or Extract, Load, Transform.
>
> **[0:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=37)** This is a more modern approach, especially prevalent with cloud data warehouses.
>
> **[0:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=43)** This is where data is extracted from sources, loaded directly into the target system, often in its raw format, and then transformed within the data warehouse or the data lake as needed for AI ML workloads.
>
> **[0:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=56)** This leverages the processing power of the target system and offers flexibility for diverse data types. ETL and ELT are for batch systems.
>
> **[1:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=65)** For streaming data integration, this involves the use of continuous ingestion, processing, and delivery of data in real time or near real time as the data is generated.
>
> **[1:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=77)** In AI applications, this enables the development of real-time applications like fraud detection, anomaly detection, and personalized recommendations by providing a constant flow of up-to-date information for model inference and continuous learning.
>
> **[1:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=92)** And then we have Change Data Capture.
>
> **[1:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=94)** This is a technique for tracking and capturing only the changes made to the data and source systems, like databases, and replicating those changes to the target system in near real time.
>
> **[1:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=104)** In AI integration, Change Data Capture ensures that data used for training or real-time predictions is always up to date with the latest transactions and modifications in the operational system without needing full data refreshes.
>
> **[1:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=119)** Data integration for AI systems often needs specialized techniques because AI workflows themselves depend on diverse data sets.
>
> **[2:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=128)** They use structured data, semi-structured data, and real-time data for both training as well as inference.
>
> **[2:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=134)** Traditional batch pipelines are often too slow or rigid for modern AI.
>
> **[2:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=138)** Your integration methods must need support, rapid updates, and handle large data volumes.
>
> **[2:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=145)** Now it's important that you have good integration set up and automated.
>
> **[2:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/methods-of-data-integration?u=76281980&t=150)** This is what ensures that models are trained on the freshest, cleanest, and most complete data possible.

> [!info]- Semantic Content
>
> **Env Vars:** etl (3), elt (2)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (1)

#### ETL and ELT
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=1)** Let's talk about each of these methods in more detail, starting with Extract, Transform, Load, or ETL.
>
> **[0:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=8)** ETL goes back several years, maybe even decades.
>
> **[0:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=11)** This is a traditional integration pattern used in many enterprise systems.
>
> **[0:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=17)** Data is first extracted from the source, cleaned and shaped, that is, transformed, and then loaded into the target system.
>
> **[0:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=24)** Data in the target system is never raw data.
>
> **[0:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=27)** Instead, that is processed data in the final format for analysis.
>
> **[0:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=32)** Now ETL is well-suited for structured, repeatable batch processes where data formats are well understood.
>
> **[0:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=40)** Here is a visual representation of how ETL pipelines work.
>
> **[0:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=44)** We have data from the original sources, and they can be a diverse set of sources: RDBMSs, tabular data, Excel, simple XML, anything.
>
> **[0:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=53)** Extraction involves connecting to these diverse variety of sources in order to extract the data or access the data in these sources.
>
> **[1:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=61)** And then we have the Transform step.
>
> **[1:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=63)** Notice that the Transform step comes before the data reaches its final destination.
>
> **[1:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=68)** This is where you'll get the data into the final format.
>
> **[1:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=71)** And once data is in the final format, that's when it's loaded into the data warehouse or the data lake, that is, the target system that receives your incoming data.
>
> **[1:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=81)** Once data is available in the target system, it's available for analysis.
>
> **[1:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=85)** So you can make use of business intelligence tools, reporting, or build predictive models using this data.
>
> **[1:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=92)** ETL is the traditional method to get data into a target system.
>
> **[1:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=97)** ELT is the more modern method.
>
> **[1:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=100)** ELT flips the order of operations.
>
> **[1:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=102)** You perform the extraction from multiple sources as before, but after extraction, you immediately load the data, that is, the raw data, into the destination.
>
> **[1:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=111)** And once the data is in the destination, that's when it's processed or transformed.
>
> **[1:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=116)** Now an important reason that this approach is used in modern systems is because it takes advantage of modern cloud data warehouses that are incredibly powerful and support extensive transformations.
>
> **[2:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=129)** So data warehouses like Snowflake or BigQuery can handle transformations at scale.
>
> **[2:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=134)** ELT is also important from the point of view of AI systems, where raw data is needed for experimentation, model versioning, and reprocessing.
>
> **[2:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=144)** AI systems don't just work with processed data.
>
> **[2:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=148)** Instead, they work with raw data.
>
> **[2:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=151)** The processing is done as needed in the target system.
>
> **[2:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=155)** Here is what an ELT pipeline looks like.
>
> **[2:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=158)** Once again, data is accessed from a wide variety of sources.
>
> **[2:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=161)** These sources can be structured, semi-structured, or unstructured data.
>
> **[2:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=166)** You connect to these sources and extract the data as needed.
>
> **[2:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=170)** The data is directly loaded into the target system.
>
> **[2:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=174)** The target system is quite likely to be a unified analytics platform that has both warehouses and data lakes.
>
> **[3:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=181)** The data warehouses will hold your structured data, and your data lakes are likely to hold your semi-structured and unstructured data.
>
> **[3:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=189)** Once the data is available in the target system, that's when it's transformed and reshaped to be in the final form.
>
> **[3:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=196)** ELT pipelines are only possible if the target system has the capability to perform transformations at scale.
>
> **[3:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=203)** Let's just compare and contrast ETL and ELT systems.
>
> **[3:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=207)** With ETL, the transformation is performed on an intermediate server, so it's not the final destination that performs transformation.
>
> **[3:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=215)** The final destination just receives the data.
>
> **[3:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=218)** With ELT, you do not need an intermediate server because the target system is capable of performing transformations.
>
> **[3:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=225)** Data is available in the final system much more quickly with ELT.
>
> **[3:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=230)** Now ETL is suitable for traditional warehouses, which have limited computing power.
>
> **[3:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=235)** Back in the day, warehouses simply stored data and allowed you to query data, and they did not have the compute power necessary for reshaping your data.
>
> **[4:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=244)** Things are different with modern warehouses.
>
> **[4:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=246)** Modern warehouses have the ability to harness a huge amount of compute power for transformations at scale.
>
> **[4:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=254)** They can perform parallel processing of data, and they can scale up and scale down to meet different volumes of data.
>
> **[4:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=262)** With ETL, the performance of your data pipeline is limited by the compute power that is accessible to the intermediate server.
>
> **[4:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=271)** With ELT, they tend to be highly scalable and performant because modern databases have access to that compute power that we spoke of earlier.
>
> **[4:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=278)** This overall makes ETL less flexible for future changes to your pipeline.
>
> **[4:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-and-elt?u=76281980&t=284)** If you want to change the transformation you perform or you want to combine data in a different way, with ELT, it tends to be more flexible because raw data is available in the target system, and you can update your transformations as needed.

> [!info]- Semantic Content
>
> **Env Vars:** etl (10), elt (10), xml (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)

#### Streaming integration and change data capture
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=1)** We are still on methods of data integration.
>
> **[0:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=3)** Let's talk about streaming data integration.
>
> **[0:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=6)** Streaming integration is all about moving data in real time or near real time, continuously processing events as they occur.
>
> **[0:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=15)** With streaming data, not all the data is available upfront, so you don't have the source data stored somewhere in some kind of file system or database.
>
> **[0:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=23)** Data is constantly available because the events occur in real time.
>
> **[0:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=28)** This is crucial for AI use cases that rely on live inputs, like fraud detection, personalization, and IoT analytics.
>
> **[0:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=36)** There are specialized frameworks that deal with streaming data ingestion and processing.
>
> **[0:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=41)** This method uses frameworks like Apache Kafka, Apache Flink, or Spark Structured Streaming to handle high-throughput and low-latency pipelines.
>
> **[0:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=52)** And then we have Change Data Capture, which is all about only moving the deltas or changes to the target systemas needed.
>
> **[1:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=61)** CDC has special mechanisms to detect and capture changes in source databases.
>
> **[1:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=66)** These changes can be in the form of INSERTs, UPDATEs, or DELETEs.
>
> **[1:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=70)** With Change Data Capture, you detect these changes without reloading entire data sets.
>
> **[1:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=75)** An advantage of this is that it provides a near real-time feed of changes, making it ideal for syncing systems or retraining models on incremental data.
>
> **[1:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=87)** Change Data Capture or CDC is very, very efficient and it reduces the load on source systems, efficient because it reduces the input/output operations that you perform on the source data as well as the target data.
>
> **[1:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/streaming-integration-and-change-data-capture?u=76281980&t=100)** Refreshing using the complete dataset can be very, very resource-intensive or compute-intensive, whereas just the changes, well, they're likely to be much smaller than the data as a whole.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2)
> **Env Vars:** cdc (2)
> **Code Keywords:** let (1)

#### Best practices and challenges in data integration
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=1)** Let's discuss some data integration best practices.
>
> **[0:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=3)** Make sure your integration process is modular and scalable so that it can grow with data volume and complexity.
>
> **[0:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=10)** You may need to start small but plan for future needs.
>
> **[0:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=14)** Don't leave your validation and constraint checking for later on in the pipeline.
>
> **[0:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=18)** Validate and clean data early to catch issues before they propagate to downstream systems.
>
> **[0:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=25)** High-quality inputs reduce errors downstream in AI models.
>
> **[0:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=29)** Make sure you always know where data comes from and how it got to the target system.
>
> **[0:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=35)** Maintain clear data lineage and metadata tracking.
>
> **[0:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=38)** Knowing where data came from and how it was transformed is key for debugging, compliance, and auditability.
>
> **[0:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=45)** Another thing to make sure, automate your pipelines fully.
>
> **[0:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=50)** Use automation and orchestration tools to schedule, monitor, and manage pipelines.
>
> **[0:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=55)** Manual processes don't scale and are prone to failure.
>
> **[0:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=59)** Keep certain things in mind.
>
> **[1:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=60)** Nothing is permanent except change.
>
> **[1:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=63)** Don't assume source systems will always be stable.
>
> **[1:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=66)** There may be schema drift, format changes, and new data types.
>
> **[1:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=71)** Design your pipelines to be able to adapt to these changes.
>
> **[1:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=75)** Make sure you avoid hard-coding logic or business rules inside transformation scripts.
>
> **[1:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=82)** Instead, use configuration-driven or metadata-driven approaches where possible.
>
> **[1:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=86)** These are far easier to update.
>
> **[1:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=89)** Make sure you monitor your pipelines and add alerts as needed.
>
> **[1:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=93)** With undetected failures, you won't even know when your AI models go wrong.
>
> **[1:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=98)** Make sure you never integrate sensitive data without considering its implications, security, and privacy requirements.
>
> **[1:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=106)** Think about encryption, masking, and access controls.
>
> **[1:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=111)** Engineers will often have to deal with several challenges, technical challenges, when they work with multiple sources.
>
> **[1:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=117)** You may have schema mismatches.
>
> **[1:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=119)** Schema mismatches across systems can break mappings or transformations if they're not handled proactively and early.
>
> **[2:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=127)** Type inconsistencies or missing fields are quite normal.
>
> **[2:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=130)** In a production system, you're likely integrating different kinds of sources.
>
> **[2:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=134)** Some may be batch sources, others may be real-time or streaming sources.
>
> **[2:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=138)** Make sure you orchestrate them carefully to avoid duplication or latency issues.
>
> **[2:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=143)** Make sure your data is consistent across sources, especially when each source is refreshed and operated independently.
>
> **[2:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=152)** If you're integrating with external APIs, you may encounter a different set of problems.
>
> **[2:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=157)** Different APIs may have different trade limits, different timeouts, or the external system might encounter outages.
>
> **[2:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=165)** Make sure that you add a retry logic and fallbacks as needed.
>
> **[2:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=170)** Data integration challenges are not always technical.
>
> **[2:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=172)** They may be organizational as well. For example, who owns this data?
>
> **[2:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=177)** If data ownership is unclear, this may lead to disputes or delays in getting access to data.
>
> **[3:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=184)** If the data that you're reading from is not well documented, this makes mapping and transformation harder because you don't know what you are going to be dealing with.
>
> **[3:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=193)** This is especially true in legacy environments.
>
> **[3:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=197)** Different departments may have their own standards for data.
>
> **[3:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=200)** This can cause inconsistent naming conventions, formats, or units, and this increases the overhead of the data transformation process.
>
> **[3:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=209)** Another common challenge you might encounter is that engineering data science and domain experts may have limited collaboration.
>
> **[3:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/best-practices-and-challenges-in-data-integration?u=76281980&t=218)** In order to create meaningful and usable datasets, these teams need to work together in a cohesive manner.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)


### 2. Integrate Data into a Unified Analytics Platform

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Uploading data to Azure Blob storage
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=1)** In this demo, we'll see how you can ingest data into Microsoft Fabric from an external source using shortcuts.
>
> **[0:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=7)** Microsoft Fabric is a unified data platform that brings together data engineering, data science, real-time analytics, and business intelligence on a single software-as-a-service platform.
>
> **[0:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=19)** On Fabric, you can build and train ML models, build dashboards, or run simple queries on your data.
>
> **[0:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=24)** In this demo, we'll access data stored in an Azure blob storage container from Microsoft Fabric.
>
> **[0:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=30)** I'm logged in here to my Azure portal, and I'm going to create a storage account and a blob storage container that will hold my data.
>
> **[0:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=37)** Head over to Storage Accounts and click on Create.
>
> **[0:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=41)** A storage account on Azure is a unique namespace to store and manage data objects.
>
> **[0:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=46)** I'm going to create the storage account in a new resource group called ll-storage-rg.
>
> **[0:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=51)** Go ahead and hit Okay. This will create the resource group.
>
> **[0:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=55)** My storage account is going to be called loonyfabricstorage.
>
> **[0:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=58)** It'll be in the East US region.
>
> **[1:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=61)** You can leave the other values here to their defaults.
>
> **[1:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=64)** Click on Next.
>
> **[1:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=66)** And here on the second screen, you need to make sure that you enable hierarchical namespace for your storage account.
>
> **[1:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=73)** This will set up a directory and file structure within our storage account, and we need this enabled in order to be able to access data from Fabric using shortcuts.
>
> **[1:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=83)** Go ahead and create the storage account.
>
> **[1:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=87)** Once the storage account has been successfully created, we'll create a container within that storage account.
>
> **[1:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=93)** Go to the storage account and on the left, under Data Storage, you'll find an option for Containers.
>
> **[1:39](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=99)** A container is just a logical grouping within a storage account used to organize and store blobs, that is, binary large objects.
>
> **[1:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=107)** And these large objects can be images, videos, or documents.
>
> **[1:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=111)** I've called this container loony-fabric-container.
>
> **[1:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=115)** Click through to the container once it's created.
>
> **[1:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=118)** And it's within this container that I'm going to upload the data that I'd like to access from Microsoft Fabric.
>
> **[2:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=124)** Click on Upload, and let me drag the file and drop it in here.
>
> **[2:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=128)** This is the AdidasSalesDataset.
>
> **[2:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=130)** This is just some sample data that I'd like to ingest and access from Microsoft Fabric.
>
> **[2:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=135)** Once the data is available in my storage account, let me get the credentials in order for Microsoft Fabric to be able to access this data.
>
> **[2:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=143)** Head back to the storage account.
>
> **[2:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=146)** Here on the left, under Security and Networking, you'll find an option for SAS or shared access signature.
>
> **[2:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=154)** This is a secure way to grant limited access to Azure Storage Resources without sharing additional details like the storage account key.
>
> **[2:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=162)** When Microsoft Fabric accesses the data in our blob storage container, it'll make use of the permissions that this shared access signature provides.
>
> **[2:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=171)** Here, under Allowed Services, you can specify what the shared access signature gives the client access to.
>
> **[2:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=178)** I'm only going to have Blob checked.
>
> **[3:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=181)** They only have access to the blobs in my container.
>
> **[3:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=184)** Allowed resource type, I'm going to set it to all three.
>
> **[3:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=186)** They'll have access to the service, to the container, and to the object.
>
> **[3:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=190)** I'm going to leave the remaining settings as is.
>
> **[3:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=193)** The shared access signature that I create will allow Microsoft Fabric access to the data that I have in my blob storage container for 24 hours by default.
>
> **[3:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=202)** Copy over the SAS token.
>
> **[3:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/uploading-data-to-azure-blob-storage?u=76281980&t=204)** We'll be using it later on when we connect from Fabric.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** let (2), type, (1), default. (1)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** sas (2)
> **Definitions:** is a  (2)
> **Tools:** azure portal (1)
> **Prerequisites:** set up (1)

#### Ingesting data into Microsoft Fabric using shortcuts
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=1)** Here, I am logged in with a trial account on Microsoft Fabric.
>
> **[0:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=4)** Microsoft Fabric is available at app.fabric.[microsoft.com](https://microsoft.com).
>
> **[0:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=9)** And if you have a Microsoft account with an organization, you can use that to log in and set up a trial account.
>
> **[0:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=16)** All your operations within Microsoft Fabric are performed within a workspace.
>
> **[0:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=20)** Workspaces are a way to collaborate with the rest of your team on a project.
>
> **[0:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=24)** I'm going to create a new workspace for this particular demo called LoonyWS.
>
> **[0:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=29)** You can, of course, name your workspace anything you want to.
>
> **[0:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=33)** Once the workspace has been created, I'm going to create a new lakehouse within this workspace.
>
> **[0:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=38)** Click on New Item and find the option for Lakehouse.
>
> **[0:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=43)** A lakehouse is a modern data architecture that combines the scalable storage of a data lake with the structured data management and performance features of a data warehouse, and this enables unified analytics on all data types.
>
> **[0:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=56)** I'm going to create a new lakehouse called LoonyLakehouse.
>
> **[1:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=61)** And it's within this lakehouse that I'll create a shortcut to access the data that I have on my Azure account.
>
> **[1:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=67)** Structured data in lakehouses are stored in tables, whereas unstructured data is stored in files.
>
> **[1:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=72)** I'm going to click on the three dots next to Files and create a new shortcut.
>
> **[1:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=76)** This is the shortcut that will allow me to access my data within Azure Blob Storage.
>
> **[1:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=81)** Shortcuts in lakehouses are a quick way to access and ingest data from external services.
>
> **[1:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=87)** Here, I create a shortcut to Azure Data Lake Storage Gen2.
>
> **[1:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=92)** This is what will allow us to connect to Azure Blob Storage.
>
> **[1:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=95)** Now I need to create a new connection for this, and I specify the URL of my blob storage account.
>
> **[1:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=102)** This is simply https://, the name of your storage account, that is, loonyfabricsorage, in my case, and then dot dfs dot core dot windows dot net.
>
> **[1:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=115)** Make sure you select the option to create a new connection.
>
> **[1:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=119)** Give the connection a name that is meaningful to you.
>
> **[2:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=121)** I've called this ADLSShortcutConnection.
>
> **[2:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=125)** And let's specify the authentication kind as shared access signature.
>
> **[2:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=129)** I'll specify the SAS token that I had copied over in the previous movie here in order to get access to the Azure Blob Storage container.
>
> **[2:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=138)** Click on Next.
>
> **[2:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=139)** Our SAS token has the right permissions, so you should see the loony-fabric-container within our storage account.
>
> **[2:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=146)** Select it and click on Next.
>
> **[2:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=148)** This is what we'd like to access.
>
> **[2:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=150)** Go ahead and click on Create, and this will create a shortcut to our container on the Azure portal.
>
> **[2:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=157)** If you select this container, you should see that the AdidasSalesDataset is now accessible within the Fabric unified analytics platform.
>
> **[2:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=166)** This data is now available in Fabric, but it's still stored in the Azure Blob Storage container.
>
> **[2:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=173)** If you'd like to ingest this data into Fabric, you can click on the three dots and load the contents of the CSV file into a table in our data lakehouse.
>
> **[3:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=182)** Select Load to Tables, New Tables.
>
> **[3:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=185)** You can accept the default name of the table, AdidasSalesDataset.
>
> **[3:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=189)** We'll use the head of our column names, and the separator is the comma.
>
> **[3:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=193)** Go ahead and hit Load.
>
> **[3:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=195)** Once loading is complete, you'll find the AdidasSalesDataset under Tables off to the left, and you can now access and query this data as you please.
>
> **[3:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=205)** We've successfully ingested data from an external source into our unified data platform via shortcuts.
>
> **[3:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=211)** Let me show you how you can query this data.
>
> **[3:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=213)** If you click on the Lakehouse option here, select the SQL analytics endpoint.
>
> **[3:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=218)** This will allow us to run SQL queries on our data.
>
> **[3:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=222)** On the left, you'll be able to see our table, the AdidasSalesDataset, and all of the columns in that table. This is the table that I'd like to query.
>
> **[3:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=231)** Let's run a quick query on this. You can simply select the table, select New SQL Query, and let's run the top 100 query that will retrieve the top 100 rows in our table.
>
> **[4:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=243)** Notice the query here, and the query has run automatically, and you can see the results here at the bottom.
>
> **[4:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/ingesting-data-into-microsoft-fabric-using-shortcuts?u=76281980&t=250)** Modern data platforms thus give you several options to easily ingest data for analysis and machine learning.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), select the (3)
> **Code Keywords:** let (4), this, (1), case, (1), this. (1)
> **Env Vars:** sql (3), sas (2), url (1), csv (1)
> **CLI Commands:** find (2), make (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### ETL with Fabric dataflows
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=0)** In this demo, we'll continue working within the LoonyLakehouse that we had created in our Microsoft Fabric Workspace.
>
> **[0:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=6)** This time, when we ingest data, we'll do so using a simple ETL pipeline.
>
> **[0:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=12)** Fabric includes a feature called Dataflow, which is a low-code ETL Extract, Transform, low tool that lets users ingest clean and transformed data using Power Query.
>
> **[0:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=23)** I'll create a new Dataflow and we'll use this to read our Adidas sales data from our Azure Blob Storage, transform it, and then store it within our LoonyLakehouse.
>
> **[0:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=34)** I'm going to call this Dataflow IngestDataFromADLS.
>
> **[0:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=38)** Go ahead and hit Create.
>
> **[0:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=40)** This opens up Microsoft's Power Query Editor.
>
> **[0:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=43)** Power Query is a data transformation and preparation tool that lets users connect to various data sources, clean, reshape, and combine data using a visual step-by-step interface.
>
> **[0:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=55)** You don't need to write any code.
>
> **[0:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=57)** Click on Get Data From Another Source, and we'll connect to our Azure Blob Storage account.
>
> **[1:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=62)** Search for Azure here, and the option that we want to choose is Azure Blobs.
>
> **[1:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=68)** Here, you need to specify your account name, and you can simply type in the name of your storage account.
>
> **[1:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=74)** In my case, it's loonyfabricstorage.
>
> **[1:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=76)** Make sure you're creating a new connection.
>
> **[1:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=78)** You don't need to specify a data gateway because data gateways are used when you want to connect to on-premises data.
>
> **[1:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=86)** The authentication kind should be shared access signature, and we'll use the same SAS token that we had copied over earlier.
>
> **[1:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=94)** Go ahead and click on Next.
>
> **[1:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=97)** Here on the left, you should find the containers within your storage account listed.
>
> **[1:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=102)** If you select loony-fabric-container, you can see our AdidasSalesDataset.
>
> **[1:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=106)** Now I found something glitchy this time around when I worked with Fabric.
>
> **[1:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=110)** In order to process this data, I had to hit back after selecting loony-fabric-container.
>
> **[1:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=115)** And in the account name or URL, I had to paste in loony-fabric-container at the very end.
>
> **[2:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=121)** This is what tells Azure that I want to access the data in loony-fabric-container.
>
> **[2:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=126)** Now when you see the AdidasSalesDataset, at the bottom, you'll find the Combine button.
>
> **[2:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=132)** This Combine button will allow you to access and expand the contents of the CSV file so that you can work with it within Power Query.
>
> **[2:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=141)** I'll now go ahead and create and connect to this source file.
>
> **[2:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=146)** Now what you see here is our Power Query Editor with our data loaded.
>
> **[2:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=151)** On the left, you can see the query that we are currently working on.
>
> **[2:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=155)** On the right, the Applied Steps section gives you the individual steps of the transformations that have been applied on your data.
>
> **[2:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=163)** We've connected to the source so far, expanded and combined files together, and accessed the files.
>
> **[2:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=170)** Dataflow performed a number of operations automatically.
>
> **[2:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=173)** Those are included there as well.
>
> **[2:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=175)** Now the first thing I'm going to do here is get rid of this SourceName column.
>
> **[2:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=178)** I select the column, right-click, and I say Remove Columns.
>
> **[3:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=183)** When you perform this transformation, notice that a new step is added to the Applied Steps section, Remove Column.
>
> **[3:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=190)** Next, I'm going to select the InvoiceDate column and extract only the Year field.
>
> **[3:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=196)** For this, I need to head over to Transform.
>
> **[3:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=199)** Here, you'll find a little icon that allows us to work with dates.
>
> **[3:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=203)** Click on the icon.
>
> **[3:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=204)** This will bring up a menu and select Year.
>
> **[3:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=207)** This will extract the year from the InvoiceDate Date field.
>
> **[3:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=211)** You can see we've added a new transformation to our data.
>
> **[3:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=215)** The InvoiceDate only has the Year field. We've extracted the year.
>
> **[3:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=220)** That column needs to be renamed.
>
> **[3:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=222)** Instead of InvoiceDate, I'm going to call it InvoiceYear.
>
> **[3:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=226)** Click on Rename and specify the new name.
>
> **[3:49](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=229)** Since we created this Dataflow within our lakehouse, if you look at the data destination on the bottom right, you can see that the data is going to be stored at the lakehouse.
>
> **[3:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=238)** We've already connected to the target system.
>
> **[4:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=241)** Go ahead and hit Publish.
>
> **[4:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=243)** And as soon as you publish the Dataflow, it'll start running.
>
> **[4:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=246)** The Dataflow is our ETL pipeline.
>
> **[4:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=249)** You might have to wait for a few seconds for the ETL pipeline to run through, and once it does, the data will be available in your lakehouse.
>
> **[4:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=257)** So let's click through to LoonyLakehouse.
>
> **[4:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=260)** And under Tables, you should now find our new table.
>
> **[4:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=263)** I'll go ahead and hit Refresh here, and there is our table with the default name of query.
>
> **[4:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=270)** Select this, and you should find the contents of the AdidasSalesDataset along with our changes.
>
> **[4:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=276)** Notice the InvoiceYear column.
>
> **[4:39](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=279)** Also, notice that the SourceName column is not present in this data.
>
> **[4:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=283)** We've successfully extracted data from the Azure Blob Storage Source, transformed it, and stored it within Fabric.
>
> **[4:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=290)** Let's query this data in Fabric to verify that everything is as expected.
>
> **[4:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=295)** Select the SQL analytics endpoint.
>
> **[4:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=297)** And here, let's find the table named Query.
>
> **[5:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=300)** Remember, that was the default name given to our table.
>
> **[5:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=303)** That's something we can rename when we are in the Dataflow.
>
> **[5:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=306)** Let's open up the SQL Query editor here, New SQL Query.
>
> **[5:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=311)** Select top 100.
>
> **[5:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=313)** The query will run through automatically and give you the results.
>
> **[5:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/etl-with-fabric-dataflows?u=76281980&t=316)** We've successfully run a simple ETL operation to extract data from Azure Blob Storage, transformed the data using Power Query within Dataflow, and stored the result in a lakehouse within Microsoft Fabric.

> [!info]- Semantic Content
>
> **Env Vars:** etl (5), sql (3), sas (1), url (1), csv (1)
> **Code Keywords:** let (4), this, (2), continue (1), interface (1), case, (1)
> **UI Navigation:** click on (4), select the (3), right-click (1)
> **CLI Commands:** find (6), make (1)
> **Definitions:** is a  (2)


### 3. API Development for AI Applications

> [[#Table of Contents|↑ Back to Table of Contents]]

#### APIs to work with data and AI
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=1)** Now that we've discussed data integration, let's turn our attention to the APIs that you'll use to work with data and AI systems.
>
> **[0:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=9)** An API is an acronym for Application Programming Interface, which is a defined interface that allows software components to communicate.
>
> **[0:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=18)** APIs expose specific functionality or data in a structured and secure way.
>
> **[0:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=23)** Working with APIs form an integral part of developing AI systems.
>
> **[0:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=28)** If you're building an AI applications, they must integrate or interact with data sources, models, and systems.
>
> **[0:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=35)** All of this rely on APIs.
>
> **[0:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=37)** One way to think about this, APIs serve as the glue between AI models and the outside world, whether you're sending data for inference, receiving predictions, or triggering the retraining of your model.
>
> **[0:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=50)** APIs help scale and operationalize AI systems by standardizing access to models and data.
>
> **[0:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=57)** APIs are important for a variety of different reasons.
>
> **[1:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=60)** APIs enable different systems, applications, and services to seamlessly integrate and work together.
>
> **[1:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=67)** They foster collaboration and encourage the creation of more sophisticated and interconnected solutions.
>
> **[1:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=73)** When you expose well-defined interfaces, this allows developers to build modular and scalable applications that can easily incorporate new features, services, or data sources as needed without disrupting existing functionality.
>
> **[1:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=88)** When businesses provide access to their core functionalities and data through APIs, they can foster innovation and create thriving third-party ecosystems with partners, developers, and value-added services.
>
> **[1:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=102)** APIs allow applications to leverage external services, data sources, and functionalities that are provided by other companies or organizations, and this is what allows for the creation of richer and more powerful solutions without reinventing the wheel.
>
> **[1:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=119)** Your AI application is finally going to be used by a mobile customer or a web customer.
>
> **[2:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=124)** APIs are essential for enabling communication and data exchange between mobile applications, cloud services, and on-premise systems.
>
> **[2:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=132)** And this is what supports the growing demand for ubiquitous and real-time access to AI solutions and services.
>
> **[2:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=139)** Let's discuss the characteristics and features of good APIs, whether it's an API that you are exposing or you are consuming.
>
> **[2:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=146)** The first is security and authentication.
>
> **[2:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=149)** This should be a top priority when developing an API because APIs serve as a gateway to sensitive data and critical systems.
>
> **[2:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=157)** Authentication mechanisms should ensure that only authorized parties can access and interact with the API.
>
> **[2:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=164)** Any application is likely to have few users when it first starts off, but as applications and user bases grow, an API must be able to handle increasing loads and traffic without compromising performance or availability.
>
> **[2:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=177)** Design your API with scalability in mind.
>
> **[3:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=180)** Leverage techniques like caching, load balancing, and horizontal scaling to distribute the workload across multiple servers.
>
> **[3:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=187)** APIs should be easy to work with.
>
> **[3:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=189)** A well-designed API should have a consistent and intuitive interface that follows established design principles and industry best practices.
>
> **[3:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=197)** This includes using descriptive and meaningful resource names adhering to standard HTTP methods, such as GET, POST, PUT, DELETE for their intended purposes, and providing clear and concise error messages.
>
> **[3:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=209)** Make sure your APIs are well-documented.
>
> **[3:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=212)** Documentation should provide detailed information about the API's endpoints, request and response formats, authentication mechanism, error handling, and any specific requirements or constraints.
>
> **[3:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=224)** APIs will definitely change over time as new features or improvements are introduced.
>
> **[3:49](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=229)** Make sure you maintain backward compatibility to ensure that existing clients are not impacted by changes.
>
> **[3:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=235)** Make sure you implement versioning strategies, such as versioning the API endpoints or using content negotiation to allow clients to continue using older versions while adopting new versions at their own pace.
>
> **[4:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=248)** Here are some use cases of APIs in AI systems.
>
> **[4:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=252)** APIs provide a way to leverage the power of prebuilt AI models for various tasks without needing to develop them from scratch.
>
> **[4:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=260)** For example, applications can use APIs offered by companies like OpenAI, Google Cloud, or Azure AI services for natural language processing, computer vision, and speech recognition.
>
> **[4:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=272)** This reduces your development time and complexity.
>
> **[4:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=275)** For example, a customer service application might use a sentiment analysis API to automatically detect if a customer's message is positive, negative, or neutral.
>
> **[4:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=284)** Once a custom AI model is trained, APIs are often used to deploy it as a service that other applications can query for predictions or inferences.
>
> **[4:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=293)** This allows the AI models' capabilities to be easily integrated into various workflows and user interfaces.
>
> **[5:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=300)** Maybe you have a fraud detection model that's serving predictions behind an API.
>
> **[5:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=305)** An e-commerce platform can then send transaction details to this API in real time and receive a prediction on whether the transaction is likely fraudulent.
>
> **[5:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=313)** AI applications often need to interact with existing business systems like your CRM systems or ERP systems, and maybe with a variety of data sources.
>
> **[5:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=323)** APIs act as bridges, allowing you to integrate AI functionality into these systems.
>
> **[5:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=329)** For example, a marketing automation platform could use an AI API to analyze customer behavior data obtained through its existing APIs and then use the insights to personalize email campaigns or segment audiences.
>
> **[5:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=343)** Developers can use AI APIs to easily add intelligent features to their applications, enhancing user experience and providing new functionalities.
>
> **[5:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=353)** This can be chatbots, virtual assistants or personalized recommendations, and intelligent search.
>
> **[5:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/apis-to-work-with-data-and-ai?u=76281980&t=358)** An e-learning platform could integrate a question-answering AI API to provide students with instant answers to their queries based on course materials.

> [!info]- Semantic Content
>
> **Env Vars:** api (14), http (1), post (1), put (1), delete (1)
> **Code Keywords:** interface (3), let (2), this, (1), delete (1), continue (1)
> **Analogies:** for example (3), such as (2)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is a  (1)
> **API Endpoints:** delete
 (1)

#### API types, benefits, and best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=1)** In this movie, we'll discuss API types, benefits, and best practices.
>
> **[0:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=5)** Let's start with API types.
>
> **[0:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=7)** Now APIs can be open APIs or public APIs that are accessible to external developers or users and are often published with public documentation.
>
> **[0:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=17)** In AI, these are used for exposing general-purpose models such as OpenAI's APIs or Hugging Face endpoints.
>
> **[0:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=25)** And then we have internal APIs that are meant for use within an organization and are not available to external developers.
>
> **[0:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=33)** These connect internal services like model-serving endpoints, feature stores, or data pipelines.
>
> **[0:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=38)** They prioritize performance, consistency, and are tightly coupled with internal infrastructure.
>
> **[0:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=44)** And then we have partner APIs, which are shared with selected external collaborators under controlled access.
>
> **[0:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=51)** In AI, they're useful when sharing predictions or data between business partners without exposing the full platform.
>
> **[0:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=58)** Let's dig a little deeper into each of these, starting with open APIs.
>
> **[1:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=62)** These are public APIs and are accessible to external developers, and the whole idea is, they provide access to a particular service or data to anybody who wants to access it.
>
> **[1:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=74)** Companies often make their data or models available via open APIs to monetize them.
>
> **[1:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=80)** In AI applications, open APIs enable the integration of external AI services, such as machine learning models or natural language processing tools, into diverse platforms.
>
> **[1:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=91)** Let's say your organization has built a great image generation system, make it available via an open API, so others have access to it, and you can monetize along the way.
>
> **[1:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=101)** Now while open APIs promote innovation and collaboration, it's important that they implement robust security measures to protect against unauthorized access.
>
> **[1:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=111)** And then, of course, we have internal APIs.
>
> **[1:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=114)** Now internal APIs are not publicly exposed.
>
> **[1:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=117)** They're designed for use within an organization, and they enable communication and data sharing between internal systems and teams.
>
> **[2:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=124)** An internal API is what you're likely to use when you are integrating your organization's AI models with existing internal applications or even external applications.
>
> **[2:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=135)** You may have a data science and machine learning team responsible for building AI systems.
>
> **[2:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=139)** And then you may have different products that integrate these AI systems via internal APIs.
>
> **[2:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=145)** It's important that these have proper documentation and a robust data governance framework, essential to maintain consistency and usability across various internal projects.
>
> **[2:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=155)** And then finally, the third kind of API, somewhere in between open APIs and internal APIs, partner APIs.
>
> **[2:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=162)** Partner APIs are shared with specific external customers and not everyone in the world.
>
> **[2:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=167)** They allow controlled access to certain functionalities or data.
>
> **[2:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=171)** These are useful in AI collaborations where partner APIs allow organizations to securely share AI capabilities or datasets with trusted partners, fostering joint innovation.
>
> **[3:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=185)** These require that there are clear agreements and security protocols set up between the partners, vital to manage access rights and to protect sensitive information.
>
> **[3:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=195)** APIs are useful because they provide access to prebuilt AI models and functionalities, eliminating the need for developers to build complex AI algorithms from scratch.
>
> **[3:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=205)** For example, if you're using a natural language processing API for sentiment analysis, that's going to be much faster than training and deploying your own model and likely better tool.
>
> **[3:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=216)** The API developers may have access to data that you don't.
>
> **[3:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=220)** AI models, especially deep learning models, can be very computationally expensive to run.
>
> **[3:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=225)** When you use API-based AI services, applications can offload the processing to powerful cloud infrastructure managed by the API provider.
>
> **[3:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=234)** This ensures scalability and avoids the need for individual applications to invest in and maintain expensive hardware and infrastructure.
>
> **[4:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=243)** APIs offer standardized interfaces using common protocols like REST and common data formats like JSON, and this allows the integration of AI capabilities into a wide range of existing applications, systems, and data sources.
>
> **[4:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=258)** If you have a specialized AI company, they act as API providers, and using their APIs is beneficial to you because those API providers often invest heavily in developing and refining their AI models.
>
> **[4:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=271)** They have access to state-of-the-art technology that you may not have.
>
> **[4:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=275)** By leveraging these APIs, your application can benefit from continuous improvements and updates to the underlying AI algorithms without you having to change your own code.
>
> **[4:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=285)** Now what are some best practices when you set up APIs?
>
> **[4:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=290)** Make sure that you're using a standard protocol and format.
>
> **[4:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=294)** If you use REST, gRPC, or GraphQL, this gives wide compatibility across platforms and tools.
>
> **[5:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=301)** Use standard data formats like JSON or Protobuf to make your data exchange efficient and predictable.
>
> **[5:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=309)** Make sure you implement strong authentication and authorization to prevent misuse and unauthorized access to APIs.
>
> **[5:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=317)** Encrypt traffic using TLS and sanitize input to guard against injection attacks.
>
> **[5:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=322)** Also, regularly audit your API usage and rotate any secrets or tokens to maintain security.
>
> **[5:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=329)** Make sure you have a robust API monitoring setup, monitor usage, response times, and error rates to ensure performance and stability.
>
> **[5:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=338)** Make sure you log inputs and responses, even if you have to anonymize them.
>
> **[5:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=342)** Make sure you use versioning in the form of URL versioning or headers to manage API changes without breaking existing clients.
>
> **[5:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=351)** If you're deprecating APIs, communicate that well ahead of time and make sure you give enough support for migration.
>
> **[5:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=358)** Also, make sure you have older versions of the APIs around till all clients are migrated.
>
> **[6:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=364)** Make sure your documentation is easy to use and self-contained.
>
> **[6:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-types-benefits-and-best-practices?u=76281980&t=369)** Clear example-driven documentation that shows how to authenticate, send requests, and interpret responses will greatly mitigate the operational burden that you have of maintaining these APIs.

> [!info]- Semantic Content
>
> **Env Vars:** api (14), rest (2), json (2), tls (1), url (1)
> **CLI Commands:** make (11)
> **Code Keywords:** let (3), public (3), finally, (1), require (1), self (1)
> **Prerequisites:** set up (2), make sure you have (2), setup (1)
> **Analogies:** such as (2), for example (1)
> **Code Identifiers:** grpc (1)

#### Designing APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=1)** So what do you look out for when you design APIs for your AI system?
>
> **[0:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=5)** Some things to keep in mind.
>
> **[0:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=7)** Make sure that your APIs can handle requests swiftly, efficiently, and accurately.
>
> **[0:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=14)** Now in AI applications, how efficient and responsive your API is impacts the efficiency and responsiveness of your AI services.
>
> **[0:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=23)** Here are some attributes of well-defined APIs.
>
> **[0:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=27)** You should have consistency in your naming conventions and response formats.
>
> **[0:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=32)** This will help developers predict and understand your API behavior and reduce integration time.
>
> **[0:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=38)** Make sure your APIs are reliable under varying loads, especially if they're used in AI applications that may experience spikes in usage.
>
> **[0:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=47)** This requires robust infrastructure and failover mechanisms.
>
> **[0:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=51)** Make sure you implement strong security measures such as authentication and encryption.
>
> **[0:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=56)** This will protect sensitive AI models and data from unauthorized access.
>
> **[1:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=61)** Ensure your APIs are scalable.
>
> **[1:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=63)** This is what allows the API to handle increasing amounts of data and requests, and will accommodate the growth of AI applications without degrading performance.
>
> **[1:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=72)** And finally, make sure you document your API well.
>
> **[1:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=76)** Provide clear guidelines and examples on how the API can be used.
>
> **[1:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=81)** So what does consistency in APIs involve?
>
> **[1:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=85)** Make sure you define clear rules for naming endpoints, that is, your URLs, your request parameters, request and response body fields, and data types.
>
> **[1:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=94)** Use consistent casing, either camel case or snake case.
>
> **[1:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=98)** You should have consistent pluralization and verb choices.
>
> **[1:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=103)** When you decide the data format for your APIs, make sure you favor widely adopted formats like JSON for request and response bodies, design consistent structures for error responses, pagination, and metadata.
>
> **[1:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=117)** Avoid custom or overly complex formats unless they're absolutely necessary.
>
> **[2:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=122)** Implement API versioning, for example, /b/one, /users for version one of the user's API.
>
> **[2:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=129)** This is what will allow for changes and improvements without breaking existing integrations.
>
> **[2:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=134)** This will give your customers a stable contract that they can use.
>
> **[2:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=138)** And provide clear examples in your documentation.
>
> **[2:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=142)** The example should be well formatted of request and response payloads, and make sure you clearly define the expected structure and data types.
>
> **[2:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=151)** What does it mean for your APIs to be reliable?
>
> **[2:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=155)** Make sure you implement rate limiting and throttling to protect your API from abuse and ensure fair usage.
>
> **[2:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=162)** Implement mechanisms to limit the number of requests a client can make within a specific time window.
>
> **[2:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=167)** For critical operations that involve changing or updating data, make sure that the requests are idempotent.
>
> **[2:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=176)** If you make the same request multiple times, this has the same effect as making it once.
>
> **[3:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=181)** This will help with handling network issues and any retries from your clients.
>
> **[3:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=185)** Make sure your error messages are informative so that people can actually use them for feedback and be able to fix their requests.
>
> **[3:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=193)** Make sure you use the appropriate HTTP status codes.
>
> **[3:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=196)** Clients should be able to understand the cause of errors and potentially retry field requests intelligently.
>
> **[3:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=202)** Don't host your APIs on a single server if you're expecting traffic to grow.
>
> **[3:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=207)** Distribute incoming traffic across multiple instances of your API to prevent overload on a single server.
>
> **[3:34](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=214)** Implement auto-scaling to automatically adjust the number of instances based on demand.
>
> **[3:39](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=219)** Don't forget about API security to ensure only the right people have access to your APIs.
>
> **[3:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=225)** Implement industry-standard authentication mechanisms like OAuth 2.0 or JWT, that stands for JSON Web Tokens to verify the identity of clients.
>
> **[3:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=236)** Authentication is to verify the identity.
>
> **[3:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=238)** Authorization is to control what resources and actions authenticated clients are allowed to access.
>
> **[4:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=244)** If your APIs might expose sensitive data, make sure you use HTTPS to encrypt communication between clients and the API.
>
> **[4:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=252)** For sensitive data stored by the API, make sure the data itself is encrypted. Protect your API against attacks.
>
> **[4:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=260)** Thoroughly validate all incoming data to prevent common security vulnerabilities like SQL injection, cross-site scripting, and command injection.
>
> **[4:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=269)** Also, sanitize user-provided input before processing or storing it.
>
> **[4:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=273)** Make sure your APIs are scalable.
>
> **[4:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=277)** One way to ensure this is that you avoid storing client-specific session information on the API server.
>
> **[4:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=283)** Stateless APIs are easier to scale horizontally as any instance can handle any request.
>
> **[4:48](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=288)** Use tokens or other mechanisms to manage client state.
>
> **[4:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=292)** APIs likely need to perform read and write operations.
>
> **[4:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=295)** Make sure your database key masks are efficient and optimized to minimize latency and resource consumption.
>
> **[5:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=302)** Make use of caching mechanisms with technology such as Redis or Memcached to reduce database load for frequently accessed data.
>
> **[5:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=311)** For long-running tasks, consider using asynchronous processing with techniques like message queues with say, RabbitMQ or Kafka.
>
> **[5:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=320)** This prevents blocking the API and improves the responsiveness of your processes.
>
> **[5:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=325)** If you're exposing a complex AI application behind an API, don't consider one monolithic API.
>
> **[5:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=332)** Break down the API into smaller independent microservices, and this can improve scalability, fault isolation, and maintainability. And then, of course, documentation.
>
> **[5:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=343)** Don't reinvent the wheel as far as documentation is concerned.
>
> **[5:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=346)** Use standard documentation tools like Swagger or OpenAPI to automatically generate interactive API documentation based on your definition.
>
> **[5:56](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=356)** This makes it easy for developers to explore and test endpoints.
>
> **[6:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=360)** For each endpoint, parameter, request/response field, and error code, provide clear and understandable descriptions of its purpose, format, and expected behavior.
>
> **[6:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=371)** Make sure you have plenty of code examples and in multiple languages.
>
> **[6:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=375)** Offer code snippets in popular programming languages such as Python, JavaScript, or Java to demonstrate how you work with the API.
>
> **[6:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=383)** And make sure your documentation is up to date.
>
> **[6:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/designing-apis?u=76281980&t=386)** If your API changes, make sure your documentation is updated as well.

> [!info]- Semantic Content
>
> **Env Vars:** api (21), json (2), http (1), jwt (1), https (1)
> **CLI Commands:** make (21), python (1)
> **Analogies:** such as (3), for example (1)
> **Code Keywords:** finally, (1), case. (1)
> **Versions:** 2.0 (1)
> **Definitions:** stands for (1)
> **Best Practices:** don't forget (1)
> **Warnings:** keep in mind (1)

#### Steps in API design
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=1)** Let's talk about the steps involved in designing a good and well-functioning API.
>
> **[0:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=6)** Now designing an API involves a series of deliberate steps to ensure that it meets the functional and non-functional requirements of AI applications.
>
> **[0:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=15)** If your API is well-defined, well, that lays the foundation of integrating AI capabilities into your different products.
>
> **[0:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=24)** There are three steps to designing an API.
>
> **[0:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=27)** The first, clearly identify the specific needs of the AI application and determine the scope and functionality of the API that you're about to expose.
>
> **[0:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=37)** Next, structure your API endpoints to reflect resource hierarchies to make your API intuitive and align with RESTful principles if you're designing a REST API.
>
> **[0:48](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=48)** And then, of course, you need to choose the right authentication mechanism, whether it's OAuth 2.0 or tokens, to provide secure access control to the API.
>
> **[0:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=58)** Let's start with discussing the API's purpose and its requirements.
>
> **[1:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=63)** A well-designed API is one that meets the user's requirements.
>
> **[1:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=68)** What AI services do you want to provide? Is it just prediction?
>
> **[1:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=71)** Is it some access to other data?
>
> **[1:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=74)** This is what will determine the scope and functionality of the API that you expose.
>
> **[1:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=78)** What will be the data that users provide, and in what format?
>
> **[1:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=82)** What will be the expected output?
>
> **[1:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=85)** And can your API handle the necessary data transformations and processing required to generate the expected output?
>
> **[1:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=93)** Make sure you set up the performance and security requirements upfront because this is what will guide the selection of the technology and architecture that you use for your API.
>
> **[1:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=104)** Next, we have endpoints and methods.
>
> **[1:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=107)** Now whatever data or models you're looking to expose, they'll have a certain hierarchy.
>
> **[1:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=112)** Make sure your endpoints reflect that hierarchy because that is what will make them intuitive to work with.
>
> **[1:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=119)** You also need to select the right HTTP methods to interact with your APIs, whether it's GET to retrieve data, POST to create data, PUT to update data, and DELETE to remove data.
>
> **[2:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=131)** The easier your API is to work with, the better the developer experience and lower or easier the learning curve.
>
> **[2:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=139)** And then, of course, we have to think of API security upfront.
>
> **[2:23](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=143)** Choose the right authentication mechanisms, whether it's OAuth or tokens, to ensure that only the right parties can access your API.
>
> **[2:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=153)** Make sure you define access control policies for different user roles, whether they're administrators, developers, readers, writers, et cetera.
>
> **[2:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=162)** Only authorized users should be able to perform specific actions.
>
> **[2:47](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=167)** If your API exposes sensitive AI models and data, your secure practices should include encrypting the data, tokenization as needed; all of this mitigates the risk of data breaches.
>
> **[3:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=180)** Now there are two aspects to security.
>
> **[3:03](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=183)** One is authentication, which involves verifying the identity of a user or application trying to access a system.
>
> **[3:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=189)** This involves answering the question, "Who are you?"
>
> **[3:12](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=192)** After authentication comes authorization.
>
> **[3:15](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=195)** This is where you determine what actions or resources an authenticated user or application is permitted to perform.
>
> **[3:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=202)** What are you allowed to do?
>
> **[3:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=204)** This is the question that authorization seeks to answer.
>
> **[3:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=208)** Let's see what each of these involves.
>
> **[3:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=210)** Authentication involves providing credentials.
>
> **[3:33](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=213)** This is the fundamental step where the user or application presents identifying information.
>
> **[3:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=218)** This could be username and password, API keys, email addresses.
>
> **[3:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=224)** The API system will then validate the provided credentials against its stored records.
>
> **[3:49](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=229)** This might involve checking if a username exists and if the associated password matches.
>
> **[3:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=234)** This could involve validating the signature of a token or confirming the validity of an API key.
>
> **[4:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=240)** Once the client has been verified, the system often establishes a session or issues a security token.
>
> **[4:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=248)** This token acts as a temporary credential, allowing the authenticated entity to access protected resources for a certain period without re-authenticating for every request.
>
> **[4:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=258)** You can choose to add an additional layer of security, that is, multifactor authentication.
>
> **[4:24](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=264)** So authentication can involve the user providing two distinct verification factors, a password, and some code.
>
> **[4:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=271)** Now authorization involves the system defining various roles, such as administrator, editor, and viewer, and then associating specific permissions with each role.
>
> **[4:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=282)** These permissions might involve read, write, and delete access to a resource.
>
> **[4:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=286)** This is what sets up granular control over what actions users or applications in different roles can perform.
>
> **[4:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=294)** When an authenticated user or application attempts to access a resource or perform an action, the system will evaluate its assigned role and permissions against the defined access policies.
>
> **[5:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=305)** This is what then determines whether the request should be granted or denied.
>
> **[5:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=310)** Authorization can also take into account additional context, such as what time of the day it is or the user's location or the resource that's being accessed.
>
> **[5:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=319)** You can use Access Control Lists, ACLs, or Role-based Access Control, RBAC.
>
> **[5:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=326)** These are common mechanisms for managing authorization.
>
> **[5:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/steps-in-api-design?u=76281980&t=330)** ACLs directly associate permissions with users or groups for specific resources, while RBAC, or Role-based Access Control, assigns permissions to roles and then assigns users to those roles, which simplifies the management for larger systems.

> [!info]- Semantic Content
>
> **Env Vars:** api (21), rbac (2), rest (1), http (1), post (1)
> **Code Keywords:** let (3), delete (2), protected (1)
> **CLI Commands:** make (5)
> **API Endpoints:** get  (1), post  (1), put  (1), delete  (1)
> **Analogies:** such as (2)
> **Prerequisites:** required to (1), set up (1)
> **Versions:** 2.0 (1)
> **UI Navigation:** select the (1)

#### API gateways
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=0)** Once you design and host APIs, a best practice would be to use an API gateway.
>
> **[0:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=7)** API gateways act as intermediaries that manage and route client requests to the appropriate backend services.
>
> **[0:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=14)** They help enforce security, monitor traffic, and simplify API management in production environments.
>
> **[0:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=21)** API gateways sit between clients and backend services that are exposed via APIs.
>
> **[0:26](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=26)** They're responsible for handling incoming requests and routing them appropriately.
>
> **[0:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=31)** They act as the bridge between clients and backend services.
>
> **[0:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=36)** API gateways provide centralized enforcement of authentication, rate limiting, and request validation.
>
> **[0:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=43)** Gateway simplifies service discovery and can implement transformation or caching for performance.
>
> **[0:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=50)** API gateways can belong to one of two broad categories.
>
> **[0:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=54)** There are cloud-specific API gateways and general-purpose API gateways.
>
> **[1:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=60)** Cloud-specific API gateways, such as those that are configurable on AWS, Azure, or Google Cloud, provide tight integration with cloud services.
>
> **[1:07](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=67)** They have native support for cloud security.
>
> **[1:10](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=70)** They're optimized for scalability and performance in the cloud, and they often provide simplified management and monitoring capabilities.
>
> **[1:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=77)** And they often tend to be cost-effective because they're priced based on usage.
>
> **[1:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=82)** General-purpose API gateways can be deployed on-premises, in the cloud, or in a hybrid environment and can work with multiple cloud providers.
>
> **[1:31](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=91)** They often tend to offer more customization options, allowing for fine-grain control over API management, and they support multiple protocols and advanced security features and often tend to be vendor agnostic.
>
> **[1:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=104)** General-purpose API gateways can work with multiple cloud providers and on-premises environments, reducing vendor lock-in.
>
> **[1:51](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=111)** Examples include Kong, Nginx Plus, and Tyk.
>
> **[1:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=114)** So what do API gateways help with?
>
> **[1:57](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=117)** They help with routing.
>
> **[1:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=118)** They direct incoming API requests to the appropriate backend service or microservice that can handle that request.
>
> **[2:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=126)** Next is aggregation.
>
> **[2:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=128)** This can involve combining requests, responses, or data to improve the performance and efficiency of your APIs.
>
> **[2:16](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=136)** And then we have traffic management.
>
> **[2:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=138)** They allow controlling and optimizing API traffic, including rate limiting, quota management, load balancing, content compression, caching, and much, much more.
>
> **[2:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=148)** Let's dig a little deeper into routing first.
>
> **[2:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=152)** Now AP gateways allow different kinds of routing.
>
> **[2:35](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=155)** For example, you may have path-based routing where you route requests based on the URL path or endpoint.
>
> **[2:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=162)** For example, request to /API/b/one/users might be routed to a user service, whereas /API/b/one/orders is routed to an order service.
>
> **[2:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=175)** In host-based routing, requests are routed based on the hostname and the request URL.
>
> **[3:00](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=180)** For example, request to api.[example.com](https://example.com) could be routed to one service while admin.[example.com](https://example.com) could be routed to another.
>
> **[3:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=188)** Routing also includes load balancing.
>
> **[3:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=191)** This is where you distribute incoming requests across multiple service instances based on different strategies.
>
> **[3:18](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=198)** Round-robin routes requests sequentially across instances, Weighted routing distributes based on predefined weights, and Least Connections sends traffic to the instance with the fewest active connections.
>
> **[3:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=210)** With geolocation-based routing, requests can be routed based on the geographic location of the client.
>
> **[3:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=216)** For example, a request from Europe might be routed to a European data center while one from the US is routed to a US-based data center.
>
> **[3:43](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=223)** And with Weighted routing, this routes a specific percentage of the traffic to different service versions or instances, often used for canary deployments.
>
> **[3:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=233)** For example, 10% of the traffic might be routed to a new version of a service, while 90% continues to go to the stable older version.
>
> **[4:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=241)** Gateways also help with aggregation, and there are different types of aggregation.
>
> **[4:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=246)** For example, request aggregation involves combining multiple client requests into a single request sent to the backend service. This reduces the number of API calls, improves efficiency and performance of your APIs.
>
> **[4:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=259)** An API gateway may aggregate multiple individual requests for user details, order history, and payment information into a single request to the backend service.
>
> **[4:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=268)** There's also a response aggregation, which involves combining responses from multiple backend services into a single response before sending it back to the client.
>
> **[4:38](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=278)** Data aggregation involves combining data from multiple sources, such as databases, APIs, or external services, into a unified response.
>
> **[4:48](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=288)** This is often used when data needs to be fetched from various origins and presented together.
>
> **[4:53](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=293)** You might have an API that provides a single user profile by aggregating data from a database, a preferences service, and a social media API.
>
> **[5:02](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=302)** API composition combines multiple APIs to create a new API that provides a unified interface for clients, useful for presenting a cohesive API surface to clients while encapsulating the complexity of multiple underlying services.
>
> **[5:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=317)** For example, you may have a weather API, a location service, and a calendar API, all combined together to provide a daily itinerary.
>
> **[5:27](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=327)** Micro gateway aggregation aggregates requests and responses across multiple microservices or micro gateways, often within a larger microservices architecture, useful for managing dependencies and consolidating service outputs.
>
> **[5:42](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=342)** An example here would be aggregating responses from several microservices that manage the user authentication, authorization, and session management into a single API response.
>
> **[5:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=352)** Protocol aggregation involves aggregating requests and responses across multiple communication protocols, such as HTTP, gRPC, WebSocket, or even legacy protocols.
>
> **[6:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=364)** Useful when integrating services that use different protocols.
>
> **[6:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=368)** Content aggregation involves aggregating various content types, such as JSON, XML, and multimedia types, from different sources into a single cohesive response.
>
> **[6:19](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=379)** And this brings us to the third main function of an API gateway, traffic Management.
>
> **[6:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=385)** This involves load balancing, where you distribute incoming API traffic across multiple servers to ensure that no single server is overwhelmed and to improve the availability and responsiveness of your APIs.
>
> **[6:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=397)** Then there is rate limiting, which restricts the number of API requests a client can make in a given time period.
>
> **[6:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=404)** This prevents the abuse of your API and ensures fair resource usage.
>
> **[6:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=410)** Throttling gradually slows down the rate of requests when usage exceeds defined thresholds rather than blocking the request outright.
>
> **[6:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=419)** Traffic shaping controls the fluent priority of API traffic to optimize performance.
>
> **[7:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=424)** These are often based on predefined policies or user profiles.
>
> **[7:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=428)** And finally, we have circuit breaking.
>
> **[7:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/api-gateways?u=76281980&t=431)** This is where the gateway temporarily blocks API calls to a failing service to prevent system-wide crashes and to allow for the recovery of that service.

> [!info]- Semantic Content
>
> **Env Vars:** api (33), url (2), aws (1), http (1), json (1)
> **Analogies:** for example (7), such as (4)
> **Code Keywords:** let (1), interface (1), function (1), finally, (1)
> **CLI Commands:** aws (1), nginx (1), make (1)
> **URLs:** [example.com](https://example.com) (2)
> **Code Identifiers:** grpc (1)
> **UI Navigation:** go to (1)
> **Best Practices:** best practice (1)

#### Capabilities and benefits of API gateways
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=1)** In this video, we'll discuss the capabilities and benefits of API gateways.
>
> **[0:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=6)** API gateways act as a single entry point for all client requests and routes them to the appropriate backend services based on request path, headers, or other criteria.
>
> **[0:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=17)** This makes the client interactions with the microservices architecture very simple.
>
> **[0:22](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=22)** Since it's a central point of entry, the gateway often handles the initial authentication of clients.
>
> **[0:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=28)** That is, the gateway will verify the identity of clients and also handle the authorization, that is, determining what resources they're allowed to access.
>
> **[0:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=37)** Only then will the gateway forward requests to backend services.
>
> **[0:41](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=41)** This means that each service does not need to implement its own security mechanisms.
>
> **[0:46](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=46)** Gateways provide rate limiting and throttling.
>
> **[0:49](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=49)** This is what protects backend services from being overwhelmed by an excessive number of requests.
>
> **[0:55](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=55)** The gateway can enforce rate limits, that is, restricting the number of requests within a time window, and throttling, that is, slowing down requests when limits are reached.
>
> **[1:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=64)** Gateways also often perform request as well as response transformation.
>
> **[1:09](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=69)** The gateway can modify requests before forwarding them to a backend service.
>
> **[1:13](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=73)** Maybe it can add headers or transform data formats, and it can transform responses from backend services before returning them to clients.
>
> **[1:21](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=81)** It can aggregate data, change response formats, anything.
>
> **[1:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=85)** Your clients are thus decoupled from the specific implementation details of backend services.
>
> **[1:30](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=90)** API gateways often provide centralized monitoring and logging of all API traffic, including request details, response times, and error rates.
>
> **[1:40](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=100)** Gateways can also improve API performance by implementing caching.
>
> **[1:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=104)** The gateway can store frequently accessed responses and serve them directly to clients, reducing the load on backend services and improving response times.
>
> **[1:54](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=114)** Here is what request and response flow looks like when you use an API gateway.
>
> **[1:59](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=119)** Client Applications here are internal or external consumers that send HTTP requests to interact with the AI services.
>
> **[2:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=128)** These can be web apps, mobile apps, or third-party clients. The API Gateway is the central point of entry for all requests.
>
> **[2:17](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=137)** This is where you'll set up authentication, authorization, rate limiting, routing, traffic management, and logging and monitoring.
>
> **[2:25](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=145)** Your backend services are where you've hosted your AI model.
>
> **[2:29](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=149)** These handle actual inference logic or data retrieval.
>
> **[2:32](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=152)** They process the requests and return predictions or results.
>
> **[2:37](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=157)** You may have multiple instances of backend services running, and traffic management is used to route to the right service.
>
> **[2:45](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=165)** Or you may have different backends for different services, such as your database, feature store, or logging service.
>
> **[2:52](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=172)** As you can see, making your implementation available behind an API gateway has several benefits.
>
> **[2:58](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=178)** This simplifies the integration of AI services with multiple front-end and client applications.
>
> **[3:05](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=185)** Gateways allow for fine-grained access control and easier rollout of new model versions.
>
> **[3:11](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/capabilities-and-benefits-of-api-gateways?u=76281980&t=191)** Gateways enable traffic monitoring, usage analytics, and alerts to detect performance or reliability issues.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), http (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Summary and further study
> [LinkedIn Learning](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=1)** And this brings us to the end of this course on Data Integration and API Development for AI Applications. Here's a quick look at what we covered.
>
> **[0:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=8)** We first discussed phases in data integration, that is, the data integration workflow.
>
> **[0:14](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=14)** This involved getting data from sources and transforming and storing the data in the target system.
>
> **[0:20](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=20)** We then discussed different methods of data integration, such as ELT and ETL pipelines, and working with streaming data.
>
> **[0:28](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=28)** And in all of these techniques, we set the context of how integrating data is crucial for AI applications.
>
> **[0:36](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=36)** We performed some hands-on demos where we saw how we can ingest data into Microsoft Fabric, a unified data analytics platform.
>
> **[0:44](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=44)** And then finally, we moved on to discussing APIs for data integrations and AI applications.
>
> **[0:50](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=50)** If you're interested in studying further, here are some other data-related topics that might interest you: [[Data Versioning, Lineage, and Quality Monitoring for AI]], and [[Secure Data Management for AI Implementation]].
>
> **[1:04](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=64)** Well, that's it from me here today.
>
> **[1:06](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=66)** I hope you enjoyed this course.
>
> **[1:08](https://www.linkedin.com/learning/data-integration-and-api-development-for-ai-applications/summary-and-further-study?u=76281980&t=68)** Thank you for listening.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), elt (1), etl (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** we covered (1)
> **Analogies:** such as (1)


## Resources

- Exercise files available

## Skills Covered

- AI Software Development
- Artificial Intelligence (AI)
- Application Programming Interfaces (API)
- Data Integration

## Path Context

### In [[Working with Data- Engineering, Integration, and MLOps for AI]]
**1 of 5** | [[Data Versioning, Lineage, and Quality Monitoring for AI]] →

## Appears In

- [[Working with Data- Engineering, Integration, and MLOps for AI]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development
- [[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)