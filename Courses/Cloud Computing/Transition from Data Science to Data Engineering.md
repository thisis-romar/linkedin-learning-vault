---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: transition-from-data-science-to-data-engineering
url: "https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering"
duration_minutes: 47
duration: 47m
level: Intermediate
updated: 2/23/2024
learners: 47802
skills:
  - Data Engineering
  - Career Transitioning
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEgJDzU_8BhSQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708559741409?e=2147483647&amp;v=beta&amp;t=albVXnbK87NglHYYNzfOwWPH72KSUjdEt-h59DVNCYg"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Explore a Career in Data Engineering]]'
prev_courses:
  - '[[Apache Kafka Essential Training- Getting Started]]'
path_nav: '[{"path":"Explore a Career in Data Engineering","position":7,"total":7,"prev":"Apache Kafka Essential Training- Getting Started","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-engineering
  - skill/career-transitioning
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Transition%20from%20Data%20Science%20to%20Data%20Engineering.md)

![Transition from Data Science to Data Engineering](https://media.licdn.com/dms/image/v2/D560DAQEgJDzU_8BhSQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708559741409?e=2147483647&amp;v=beta&amp;t=albVXnbK87NglHYYNzfOwWPH72KSUjdEt-h59DVNCYg)

# Transition from Data Science to Data Engineering

> You need to know how to transform your data if you really want to mine it for insights. In this course, instructor Pooja Jain shows you how to take your skills to the next level as a data scientist and become a data engineer.Explore the fundamentals of data engineering and the projected employment prospects of the role. Get a comprehensive overview of the data repository, including the pros, cons,

> [LinkedIn Learning](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering) | 47m | Intermediate | 48K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Becoming a data engineer](#becoming-a-data-engineer)
- [**1. Fundamentals of Data Engineering**](#1-fundamentals-of-data-engineering) (4 videos)
  - [From data scientist to data engineer](#from-data-scientist-to-data-engineer)
  - [How data science differs from data engineering](#how-data-science-differs-from-data-engineering)
  - [Using data to problem-solve](#using-data-to-problem-solve)
  - [Role of a data engineer](#role-of-a-data-engineer)
- [**2. Understanding the Data Repository**](#2-understanding-the-data-repository) (4 videos)
  - [Introduction to data warehouse](#introduction-to-data-warehouse)
  - [Benefits and different aspects of data warehouse](#benefits-and-different-aspects-of-data-warehouse)
  - [Introduction to data lake](#introduction-to-data-lake)
  - [Benefits and different aspects of data lake](#benefits-and-different-aspects-of-data-lake)
- [**3. Data Processing, Security, and Compliance**](#3-data-processing-security-and-compliance) (3 videos)
  - [Data pipelines and the ETL process](#data-pipelines-and-the-etl-process)
  - [Different types of pipelines](#different-types-of-pipelines)
  - [Importance of data security and measures to be taken](#importance-of-data-security-and-measures-to-be-taken)
- [**4. Cloud Computing for Data Engineers**](#4-cloud-computing-for-data-engineers) (2 videos)
  - [Introduction to cloud computing](#introduction-to-cloud-computing)
  - [Various cloud platforms to explore](#various-cloud-platforms-to-explore)
- [**5. Do Not Underestimate Data Quality and Data Governance**](#5-do-not-underestimate-data-quality-and-data-governance) (2 videos)
  - [Why is data quality important?](#why-is-data-quality-important)
  - [Why is data governance important?](#why-is-data-governance-important)
- [**Conclusion**](#conclusion) (1 videos)
  - [Shift from data scientist to data engineer](#shift-from-data-scientist-to-data-engineer)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Becoming a data engineer](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/becoming-a-data-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/becoming-a-data-engineer?u=76281980&t=0)** - [Pooja] Data is the new goal in today's digital world. It comes with a rising demand for data professionals who analyze massive amounts of data and make that data accessible. And that is exactly what data engineers do. I deal with various categories of data and how it's processed before it reaches data professionals such as data analysts, AI-ML engineers, or data scientists. If you are someone who is interested in understanding dirty data and the behind the scenes approach to diversify it across various end users, then this course is for you. We'll talk about day-to-day data engineers lifestyles, tools and technologies, problems we solve, and even a lot more. So let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [pooja] (1)


### 1. Fundamentals of Data Engineering

[↑ Back to Table of Contents](#table-of-contents)

#### [From data scientist to data engineer](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/from-data-scientist-to-data-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/from-data-scientist-to-data-engineer?u=76281980&t=0)** - [Instructor] You can never know everything about data, but as a data scientist, you've got a good baseline. You can transform raw data into valuable insights. You likely have a deep understanding of statistical models, machine learning [[Algorithms]], and data visualization techniques. You can wield your analytical skills to unravel patterns and extract meaning from complex data sets, guiding organizations towards data-driven [[Decision-Making]]. These fundamentals will help you transition smoothly to a data engineer, where you'll focus on constructing robust pipelines and systems that enable efficient [[Data Processing]], storage, retrieval, and [[Scalability]]. The transition from data scientist to an engineer is not merely a change in title, it's a transformative journey. It requires embracing new tools, technologies, and methodologies. It involves mastering programming languages such as [[Python (Programming Language)|Python]] or [[Scala]], and becoming proficient in [[Data Storage]] and processing frameworks like Apache [[Hadoop]] or Spark. This transition also requires a shift in mindset. As an engineer, you need to embrace a holistic approach to data, focusing not only on the analysis and modeling, but also on the data's entire life cycle. You'll collaborate closely with data scientists leveraging their insight to design and build robust [[Data Pipelines]] that support advanced analytics and machine learning. Expect continuous learning and growth
>
> **[1:34](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/from-data-scientist-to-data-engineer?u=76281980&t=94)** as you marry your analytical acumen with technical excellence, elevating the field of [[Data Engineering]] to new heights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Decision-Making]] (1), [[Data Processing]] (1), [[Scalability]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), apache (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [How data science differs from data engineering](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/how-data-science-differs-from-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/how-data-science-differs-from-data-engineering?u=76281980&t=0)** - [Presenter] Let's now get a bit more granular and explore the fundamental differences between these two disciplines and highlight their unique roles in the world of data. Here's a summary of diverse distinctions covered by two most demanding data professionals. One, objective and focus. [[Data Science]] primarily focuses on extracting insights and knowledge from data to drive [[Decision-Making]] and solve complex problems. It involves applying statistical and machine learning techniques to analyze data and generate predictive models. On the other hand, [[Data Engineering]] is concerned with the development and maintenance of infrastructure and system necessary for efficient storage, processing, and integration. Data engineers build pipelines and frameworks to ensure the reliable flow of data from various sources to data scientists and other stakeholders. The next is skillsets and expertise. Data scientists pose strong analytical and statistical skills. They are proficient in programming languages such as [[Python (Programming Language)|Python]] or R, and are well-versed in machine learning [[Algorithms]] and statistical techniques. They have a deep understanding of data visualization and [[Storytelling]] to effectively communicate their findings. In contrast, data engineers have expertise in software engineering and [[System Architecture]]. We are skilled in programming languages like [[Java]] or [[Scala]] and have knowledge of distributed computing frameworks
>
> **[1:33](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/how-data-science-differs-from-data-engineering?u=76281980&t=93)** like [[Hadoop]] or Spark. We understand [[Database Systems]] and [[Data Modeling]], enabling them to design and implement scalable [[Data Pipelines]]. Data scientists primarily focus on manipulating, analyzing, and extracting insights from data. They work with structured and [[Unstructured Data]], perform [[Feature Engineering]], and develop models for prediction and inference. Data engineers, on the other hand, concentrate on building and maintaining the infrastructure required to support the data science pipeline. We handle [[Data Ingestion]], [[Data Integration]], [[Data Transformation]], and [[Data Storage]], ensuring data scientists have access to clean, reliable, and well-organized data. Iterative versus product-oriented. Data science projects are often iterative and exploratory in nature. Data scientists experiment with different models, algorithms, and techniques to find the best approach for solving a problem. They focus on model accuracy and performance. In contrast, data engineering is product-oriented, aiming to build scalable and robust data pipelines that can handle large volumes of data in real time. Data engineers try for efficiency, reliability, and maintaining their systems. Data scientists and data engineers work closely together in data-driven organizations. Data engineers provide infrastructure and tools that enables data scientists to access
>
> **[3:06](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/how-data-science-differs-from-data-engineering?u=76281980&t=186)** and manipulate the data they need. Collaboration and effective communication between these two rules are crucial for successful data projects. Understanding the distinctions between data science and data engineering is essential for organizations to leverage the full potential of their data. By recognizing the unique roles and skills of data scientists and data engineers, organizations can build effective and collaborative teams that drive data driven innovation and decision-making.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (4), [[Data Engineering]] (3), [[Decision-Making]] (2), [[Algorithms]] (2), [[Data Pipelines]] (2)
> **CLI Commands:** python (1), find (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [presenter] (1)

#### [Using data to problem-solve](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/using-data-to-problem-solve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/using-data-to-problem-solve?u=76281980&t=0)** - [Instructor] Focus on problem solving, an essential skill for data engineers, because we are responsible for collecting, cleaning, storing, and processing large amounts of data. Data could be available from a variety of sources in multiple formats and with a wide range of quality issues. Data engineers must emphasize identifying and solving problems with this data in order to make it useful for [[Business Intelligence (BI)|business intelligence]] and machine learning applications. There are a few important aspects of problem solving that data engineers heavily rely on once we collect the data. We first clean the data, so we have a clear picture of the business outcomes we would like to achieve. Data engineers need to identify errors and inconsistencies, then remove them. This can be a challenging task as data can be dirty for a variety of reasons, such as human error, machine error, or a lot of formatting issues. Next, we integrate data from a variety of sources. This can be complex as different sources may use different formats, schemas, and naming conventions. Converting them into an identical format is important before we process or transform ahead. Another aspect of data engineer is to design and implement data models that are efficient and scalable data models. Data models are used to store and organize data in a way that makes it easy to access and analyze. [[Data Processing]] is another vital aspect of problem solving
>
> **[1:37](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/using-data-to-problem-solve?u=76281980&t=97)** for data engineers. It emphasizes processing data in a timely and efficient manner. This can be a challenging task as data can be very large and complex. And finally, you want to think about security. Gathering data from unauthorized sources or accessing tampered data can be unethical and risky. This is a critical task as data is a valuable asset for businesses. We must ensure [[Data Integrity]] and use appropriate methods to keep it secure. In addition to these specific tasks, data engineers must think critically and creatively to solve problems. It's necessary to identify the root cause of problems and develop solutions that are effective and efficient. Overall, problem solving is an essential skill for us as it helps us to clean, collect, store, process, and secure data in a way that is useful for businesses. Here are some additional tips for data engineers who want to improve their problem solving skills. Practice regularly, the more you practice problem solving, the better you will become at it. Break down the problems into smaller steps. Brainstorm possible solutions, don't be afraid to think outside the box. Don't give up, sometimes it takes a lot of trial and error to find a solution. Be open to feedback, ask for help from colleagues or mentors when you get stuck.
>
> **[3:11](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/using-data-to-problem-solve?u=76281980&t=191)** As we come to the end of the problem solving practices, what's your favorite troubleshooting tip? Add a comment to the course Q&A, so we can learn from each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Intelligence (BI)|Business intelligence]] (1), [[Data Processing]] (1), [[Data Integrity]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** picture (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Role of a data engineer](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/role-of-a-data-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/role-of-a-data-engineer?u=76281980&t=0)** - [Narrator] Each day as a data engineer is unique, but there are some common tasks you can anticipate. The first is [[Data Ingestion]]. This involves gathering data from various sources, such as [[Databases]], APIs, and streaming platforms. This synthesizes and discussing the challenges of data ingestion, such as [[Data Quality]], reliability, and [[Scalability]]. Also, it helps to explore different techniques and tools for efficiently capturing data. Another daily activity might be [[Data Integration]]. This is combining data from disparate sources into a unified format. We must examine different approaches to data integration, including [[Batch Processing]] and realtime streaming, and discuss tools and technologies such as [[Apache Spark]] or Kafka that can facilitate seamless data integration. [[Data Transformation]] plays a crucial role in [[Data Engineering]]. We explore techniques for cleaning, filtering, aggregating, and enriching data to make it usable for downstream analysis. We discuss popular data transformation frameworks, such as Apache Spark and delve into [[Data Wrangling]] techniques to ensure data quality and consistency of the transformed data. We also focus on [[Data Modeling]]. It's essential for organizing and structuring data in a way that supports efficient querying and analysis. We explore different data modeling techniques, including rational and dimensional modeling
>
> **[1:34](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/role-of-a-data-engineer?u=76281980&t=94)** and discuss the use of schema [[Design Patterns]] for optimizing [[Data Storage]] and retrieval. Data storage is another key aspect of our role. We delve into the various storage options available for data engineering. We discuss traditional [[Relational Databases]] as well as newer technologies like [[NoSQL]] databases and [[Data Lakes]]. We explored the trade-offs and considerations involved in choosing the appropriate storage solution, based on the specific requirements of the data engineering pipeline. Let's also talk about data orchestration. This involves managing and scheduling the execution of data workflows and pipelines. We explore tools like [[Apache Airflow]] that enable the automation and monitoring of data workflows, ensuring timely and reliable [[Data Processing]]. And finally, we consider data quality and governance. These data quality and governance are critical aspects of data engineering. We discuss techniques for assessing and improving data quality, including data profiling, cleansing, and validation. We also touch upon [[Data Governance]] practices to ensure compliance, security, and [[Privacy]] of data. Throughout the course of activities, we emphasize the importance of scalability, reliability, and performance in data engineering. We explore cloud-based solutions, containerization and distributed computing frameworks to handle large scale data processing requirements.
>
> **[3:10](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/role-of-a-data-engineer?u=76281980&t=190)** By delving into these different aspects of data engineering, you'll be able to create and oversee strong [[Data Pipelines]] and systems, whether you are a beginner or an experienced data professional. These factors give a comprehensive understanding of key elements in data engineering.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (7), [[Data Quality]] (5), [[Data Integration]] (3), [[Data Ingestion]] (2), [[Databases]] (2)
> **CLI Commands:** apache (3), make (1)
> **Analogies:** such as (4)
> **Speakers:** - [narrator] (1)


### 2. Understanding the Data Repository

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to data warehouse](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-data-warehouse?u=76281980&t=0)** - [Presenter] Collecting data is easy, but storing all at a single place isn't the first priority. As discussed previously, storage plays a crucial factor in the [[Data Engineering]] domain. Data warehouse is one such important element to consider for data engineers. Before we delve into the intricacies of [[Data Warehousing]], let's start with the basics. So what exactly is a data warehouse? Understand this simply. A data warehouse is a central repository of integrated data from multiple sources, organized and optimized for reporting and analysis. It provides a unified view of an organization's data, allowing users to make informed decisions based on accurate and reliable information. Now, let's talk about the essential components of a data warehouse. First, we have the data sources where the data originates from various operational systems, such as traditional [[Databases]], CRM systems, or external sources. These sources provide the raw data that will be transformed and loaded into the data warehouse. Next, we have the ETL process, which stands for extract, transform, and load. This process involves extracting the data from sources, transforming it into a consistent format, and loading it into the data warehouse. This process ensures that the data is clean, integrated, and ready for data analysis.
>
> **[1:34](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-data-warehouse?u=76281980&t=94)** [[Data Modeling]] is another essential aspect of data warehousing. It involves designing the structure of the data warehouse, including defining dimensions, hierarchies, and measures. A well-designed data model allows efficient data querying and analysis. Talking about benefits of data warehousing by centralizing data from various sources, a data warehouse provides a single, unified view of the organization's data. This enables better [[Decision-Making]], improved [[Data Quality]], and enhanced reporting and analytics capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Warehousing]] (3), [[Data Engineering]] (1), [[Databases]] (1), [[Data Modeling]] (1), [[Decision-Making]] (1)
> **Definitions:** is a  (2), stands for (1)
> **Env Vars:** crm (1), etl (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### [Benefits and different aspects of data warehouse](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/benefits-and-different-aspects-of-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/benefits-and-different-aspects-of-data-warehouse?u=76281980&t=0)** - [Instructor] Discussing the benefits of data warehouse in more detail. One primary advantage is the ability to centralize data from various sources. By consolidating data into a single repository, organizations can gain a unified view of their data, enabling better [[Decision-Making]] and strategic insights. [[Data Warehousing]] also improves [[Data Quality]]. As data is extracted, transformed, and loaded into the warehouse, it undergoes a cleaning process. This ensures that inconsistencies, errors, and duplicates are eliminated or corrected, leading to more accurate and reliable data for analysis. Another significant benefit is the ability to generate insightful reports and perform in-depth analytics. Data warehouses are designed with optimized structures and schemas, enabling faster query performances and efficient data retrieval. This empowers organizations to derive valuable insights from the data and make informed decisions. Now let's talk about the different aspects of data warehousing. The first aspect that we will cover is [[Data Integration]]. Data warehousing involves gathering data from diverse sources, such as operational systems, external feeds, and a lot more. Through the EDL process this data is integrated and standardized, ensuring consistency and capability within the warehouse. [[Data Modeling]] plays a crucial role in data warehousing.
>
> **[1:37](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/benefits-and-different-aspects-of-data-warehouse?u=76281980&t=97)** It involves designing the structure of the warehouse, including defining dimensions, hierarchies, and measures. A well-designed data model utilizes three techniques, entity relationship diagrams, unified modeling language class diagram, and data dictionary prominently referred as a data catalog. These techniques are used for efficient querying, analysis, and reporting, making it easier for data engineers to extract meaningful information from the warehouse. [[Data Governance]] is a critical aspect of data warehousing. It involves establishing policies, procedures, and controls to ensure data quality, [[Privacy]], and compliance. By implementing robust data governance practices, organizations can maintain the integrity and security of their data assets. As data engineers, understanding these concepts is vital to harness the full potential of data warehouse and drive strategic insights. I encourage you to reflect on how you can apply these concepts to your own work. What are some ways that you can improve the data governance practices in your organizations?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Warehousing]] (5), [[Data Governance]] (3), [[Data Quality]] (2), [[Decision-Making]] (1), [[Data Integration]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** edl (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to data lake](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-data-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-data-lake?u=76281980&t=1)** - [Narrator] Data lake is another [[Data Storage]] option for data engineers. So what exactly is a data lake? Think of it as a massive reservoir capable of storing vast amounts of raw and unprocessed data, structured, semi-structured and unstructured, all in its purest form. It's a central repository that allows organizations to collect, store, and analyze data from various sources without the need for upfront schema or [[Data Transformation]]. With [[Data Lakes]], we can capture data from diverse sources, like [[Databases]], social platforms, [[IoT]] devices, and more. This flexibility enables organizations to capture data in its raw state, preserving its original structure and fidelity. The beauty of data lakes lies in their ability to accommodate both structured and [[Unstructured Data]], providing a unified platform for analysis. This allows data scientists, analysts, and other stakeholders to explore and extract insights from various data types within a single environment. Now let's talk about the architecture of data lake. Typically, data lakes are built on scalable cloud platforms, such as Amazon S3, [[Microsoft Azure|Azure]] Data Lake Storage, or [[Google Cloud Platform (GCP)|Google Cloud]] storage. These provide the necessary infrastructure and [[Scalability]] to handle massive amounts of data. Within the data lake, data is organized into containers called data zones
>
> **[1:34](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-data-lake?u=76281980&t=94)** or folders, which helps maintain [[Data Governance]] and accessibility. The segregation provides efficient [[Data Management]] and ensures [[Data Security]] and [[Privacy]]. As we progress through this course, we will explore various data lake technologies and tools including Apache [[Hadoop]], [[Apache Spark]], and Cloud-based services like Amazon Simple Storage Service, Azure Data Lake Storage, and Google Cloud storage. These tools empower you to process, transform, and analyze data within the data lake environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Lakes]] (3), [[Microsoft Azure|Azure]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Data Storage]] (1), [[Data Transformation]] (1)
> **CLI Commands:** apache (2)
> **Analogies:** think of it as (1), such as (1)
> **Env Vars:** iot (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Benefits and different aspects of data lake](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/benefits-and-different-aspects-of-data-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/benefits-and-different-aspects-of-data-lake?u=76281980&t=0)** - [Instructor] With cloud-based data lake platforms, organizations can easily scale their storage and processing capabilities as data volumes grow. The [[Scalability]] ensures that [[Data Lakes]] can handle the ever increasing data demands of modern businesses. Data lakes also promote data democratization, enabling different teams and stakeholders within an organization to access and utilize the data lake for their specific needs. This empowers cross-functional collaboration and opens up opportunities for innovation and data-driven [[Decision-Making]] across the entire organization. Now let's delve into the key aspects of data lakes that contribute to efficient [[Data Management]]. One crucial aspect is [[Data Governance]]. Establishing proper data governance policies and frameworks ensures [[Data Quality]], [[Privacy]], and security within the data lake environment. Data lakes also employ [[Metadata]] management techniques to provide a comprehensive understanding of the data stored within. Metadata catalogs or repositories help users discover, understand, and utilize the available datasets effectively. Additionally, data lakes support data architectures that allow for data segregation within organizations into different zones or folders. The segregation helps with data management, access control, and enforcing data retention policies. Data lakes offer numerous benefits
>
> **[1:34](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/benefits-and-different-aspects-of-data-lake?u=76281980&t=94)** and the aspects that contribute to the efficient data management. By leveraging the flexibility, scalability, and democratization opportunities they provide, organizations can unlock the true potential of their data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Lakes]] (6), [[Data Management]] (3), [[Scalability]] (2), [[Data Governance]] (2), [[Metadata]] (2)
> **Speakers:** - [instructor] (1)


### 3. Data Processing, Security, and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### [Data pipelines and the ETL process](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/data-pipelines-and-the-etl-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/data-pipelines-and-the-etl-process?u=76281980&t=0)** - [Narrator] Imagine you are a busy librarian and every day you receive a ton of new books, magazines, and journals. These materials are all valuable, but they're unorganized and scattered throughout the library. It's like having a vast storehouse of knowledge, but no way to find what you need. That's where data engineers like us come in. We're the information architects who transform this raw data into a well organized and easily accessible library. That's how data pipeline and ETL process both plays an important role in the field of [[Data Engineering]]. While they are interrelated, they serve different purposes in the data workflow. Let's explore each of them in more detail. A data pipeline is a set of processes and tools that enable the automated flow of data from various sources to its destination. It involves extracting data from different systems, transforming it into a suitable format, and loading it into a target system or a data warehouse. [[Data Pipelines]] are designed to handle large volumes of data efficiently and reliably. Key characteristics of a data pipeline include data extraction. Data is extracted from variety of sources, such as [[Databases]], APIs, files, or streaming platforms. [[Data Transformation]], the extracted data is transformed and cleaned to ensure consistency, quality, and compatibility with the target system. Data loading, the transformed data
>
> **[1:35](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/data-pipelines-and-the-etl-process?u=76281980&t=95)** is loaded into a target system or a data warehouse for storage and analysis. Automated workflow, data pipelines are typically automated to ensure regular and timely data updates. [[Scalability]]. The data pipelines should be scalable to handle increasing data volumes and accommodate future growth. Data pipelines are crucial for organizations that deal with large volumes of data and require a streamlined process for [[Data Ingestion]], transformation, and loading. Now, ETL stands for extract, transform, and load, which is a specific type of data pipeline used for [[Data Integration]] and consolidation. The ETL process involves extracting data from multiple sources, transforming it to meet specific business requirements, and loading it into the target systems or data warehouse. Key steps involved in the ETL process are extract, data is extracted from a variety of sources, such as databases, files, or APIs. The extracted data is then transformed by applying various operations like filtering, aggregating, joining, or cleaning to ensure [[Data Quality]] and consistency. The transformed data is loaded into a target system or a data warehouse for storage and analysis. The ETL process is commonly used in [[Data Warehousing]] and [[Business Intelligence (BI)|business intelligence]] applications where data from different sources needs to be consolidated
>
> **[3:11](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/data-pipelines-and-the-etl-process?u=76281980&t=191)** and made available for reporting and analysis. While both data pipelines and ETL processes involve the movement and transformation of data, there are some key differences between them. Scope, data pipelines have a broader scope and can handle variety of data integration scenarios beyond just ETL. They can handle [[Real-Time]] streaming data, [[Batch Processing]], and more. ETL processes, on the other hand, are specifically focused on data integration and consolidation. Next is data transformation. Data pipelines can perform various transformations including data enrichment, validation, and normalization. ETL processes primarily focused on data transformation to meet specific business requirements. Data sources. Data pipelines can extract data from a wide range of sources, including databases, APIs, files, and streaming platforms. ETL processes typically deal with structured data from databases and files. Automation. Both data pipelines and ETL processes can be automated, but data pipelines often involve more complex workflows and scheduling due to their broader scope. Data pipelines provide a more comprehensive solution for data integration, while ETL processes are specifically designed for data consolidation and transformation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Pipelines]] (11), [[Databases]] (4), [[Data Integration]] (4), [[Data Transformation]] (3), [[Data Engineering]] (1)
> **Env Vars:** etl (12)
> **Analogies:** such as (2), imagine (1), it's like (1)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Different types of pipelines](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/different-types-of-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/different-types-of-pipelines?u=76281980&t=0)** - [Instructor] [[Data Engineering]] involves the creation and management of pipelines to efficiently process and transform data. Let's go through the different types of pipelines commonly used in data engineer. ETL or ELT pipelines. As discussed previously, we are aware of the ETL pipelines that are used to extract data from various sources, transform it into the desired format, and then load it into the target systems or data warehouse. Whereas, ELT primarily loads the data before transforming it. Meaning, extraction involves retrieving data from [[Databases]], files, APIs, or other sources. Transformation includes cleaning, filtering, aggregating, and enriching the data to make it suitable for analysis. Loading involves storing the transformed data into a target system or a data warehouse for further processing. Few of the industry-wide used tools includes Informatica, Talend, Fivetran, Stitch, and more. Streaming pipelines. It is another such process used to build realtime [[Data Pipelines]]. They're used for applications that require continuous [[Data Processing]], such as realtime analytics, fraud detection, and monitoring systems. Streaming pipelines often use technologies such as [[Apache Kafka]], Apache Flink, or [[Apache Spark]] Streaming to handle volumes of data, and ensure low latency processing. Similarly, we deal with batch pipelines.
>
> **[1:34](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/different-types-of-pipelines?u=76281980&t=94)** This processes data in large volumes at scheduled intervals. They are suitable for scenarios where near [[Real-Time]] processing is not required. They can often directly connect to data sources and data sinks, eliminating the need for an intermediate layer. Batch pipelines are commonly used for [[Data Warehousing]], integration, and periodic reporting. Technologies like Apache [[Hadoop]], Apache Spark, or [[Apache Airflow]] are used for building and managing data pipelines. Data replication pipeline is another widely used pipeline approach to copy data from one system to another, ensuring data consistency across multiple systems. They're commonly used for data synchronization, between databases, data backup, or disaster recovery in the modern [[Data Architecture]]. Technologies like Apache Kafka, Apache NiFi, or database specific replication tools are often used for data replication. Due to high volume, velocity, and variety of data application, the data will continue to increase. Pipelines aren't just to transfer the data, but also to model them. We as data engineers play a major role to ensure machine learning pipeline is involved in the process of training, evaluating, and deploying machine learning models. They include data pre-processing, [[Feature Engineering]], model training, model evaluation, and model deployment and monitoring stages. Machine learning frameworks like [[TensorFlow]],
>
> **[3:10](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/different-types-of-pipelines?u=76281980&t=190)** Scikit-learn, or [[PyTorch]], are often used to build and deploy machine learning pipelines. The last but not the least, [[Data Governance]] pipeline precisely focuses on ensuring [[Data Quality]], compliance, and security. They involve data profiling, data cleansing, [[Data Validation]], and [[Metadata]] management processes. Data governance pipelines help maintain [[Data Integrity]], enforce data policies, and ensure [[Regulatory Compliance]]. Ensuring the trustworthiness and value of data throughout its life cycle is crucial for data engineers to uphold the data governance practices, contributing to the overall success of data-driven organizations. Understanding different types of pipelines in data engineering is crucial for data engineers, to design and implement efficient and scalable data processing solutions. Each type of pipeline has its own characteristics, and requirements, and choosing the right pipeline for a specific use case is essential for successful data engineering projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (3), [[Data Governance]] (3), [[Databases]] (2), [[Data Pipelines]] (2), [[Data Processing]] (2)
> **CLI Commands:** apache (8), make (1)
> **Env Vars:** etl (2), elt (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Importance of data security and measures to be taken](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/importance-of-data-security-and-measures-to-be-taken?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/importance-of-data-security-and-measures-to-be-taken?u=76281980&t=0)** - [Instructor] The era of [[Digital Transformation]] has become the lifeblood of businesses across the industries when data is flowing as a fuel to it. As we talk about [[Data Engineering]] core responsibilities, organizations leverage the power of data to drive [[Decision-Making]] and gain a competitive edge. The importance of [[Data Security]] cannot be overstated. And data engineers are responsible for building and maintaining the infrastructure that stores and transports data. Data security plays a wider role in ensuring that organizations can effectively manage and analyze massive volumes of data. However, with great power comes great responsibility. Specifically, when it comes to safeguarding valuable data assets. Cyber threats, such as hacking, data breaches, and ransomware attacks, pose significant risks to organizations and can result in severe financial and reputational damage. That's why data security should be a top priority for data engineers. Here are some essential measures that we as data engineers should take to ensure the robust data security. Implementing strong access controls. Utilize role-based access control mechanisms to restrict data access based on user roles and responsibilities. Enforce strong password policies and multifactor authentication
>
> **[1:34](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/importance-of-data-security-and-measures-to-be-taken?u=76281980&t=94)** to prevent unauthorized access. Encrypt data at [[Representational State Transfer (REST)|rest]] and in transit. Employ encryption techniques to protect data, both when it is stored and when it is transmitted over networks. Use industry-standard encryption [[Algorithms]] and protocols to ensure data confidentiality. Regularly back up data. Establish a backup strategy to create copies of data, ensuring it can be restored in case of data loss or system failure. Test the backup and recovery processes periodically to verify their effectiveness. Implementing data masking and anonymization techniques. Anonymize or mask sensitive data to minimize the risk of unauthorized access. Replace personally identifiable information with fictional or interpreted values, while retaining [[Data Integrity]] for analysis purposes. Conduct security audits and [[Penetration Testing]]. Regularly assist your systems and networks through security audits and penetrate testing to identify vulnerabilities. Address any weaknesses promptly and continuously improve your security posture. With cyber attacks on the rise, data security is a top priority. Data engineers have an outsized responsibility in designing, building, and monitoring
>
> **[3:07](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/importance-of-data-security-and-measures-to-be-taken?u=76281980&t=187)** the robust data infrastructure that both enables analytics and keeps sensitive data safe. Adopting these security measures is essential for any data engineer, especially those transitioning from [[Data Science]] roles. By implementing these measures and staying vigilant, data engineers can play a crucial role in protecting sensitive data, maintaining [[Regulatory Compliance]], and safeguarding the trust of customers and stakeholders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Security]] (5), [[Digital Transformation]] (1), [[Data Engineering]] (1), [[Decision-Making]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud Computing for Data Engineers

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to cloud computing](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-cloud-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-cloud-computing?u=76281980&t=0)** - [Instructor] As data scientists transition into [[Data Engineering]] roles, leveraging [[Cloud Computing]] becomes critical. Cloud computing provides on-demand accesses to computing resources via internet. Traditionally, data engineering involved with the management of on-premise infrastructure, which often posed limitations in terms of [[Scalability]] and adaptability to involve business needs. Cloud computing, on the other hand, offers a paradigm shift by providing on-demand access to a vast array of computing resources, storage, and services through the internet. Here are some key benefits of cloud computing for data engineering. First key benefit is scalability and elasticity. Cloud computing allows data engineers to quickly scale up or scale down their resources based on fluctuating [[Data Processing]] needs. With elastic computing capabilities, organizations can handle peak workloads efficiently, optimizing resource allocation and reducing costs. Cloud efficiency is another important factor to consider, as cloud computing eliminates the need for substantial upfront investments in [[Hardware]] and infrastructure. Pay-as-you-go pricing models enable organizations to pay only for the resources they consume, resulting in cost savings. It also provides flexibility and agility. Cloud platforms provide a wide range of services and tools to support various data engineering tasks, such as [[Data Ingestion]], storage processing, and analytics.
>
> **[1:36](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-cloud-computing?u=76281980&t=96)** Data engineers can easily experiment with different technologies, frameworks, and data processing techniques without the constraint of on-premise infrastructure. [[Data Security]] and compliance are the premium perks offered by cloud. Various cloud service providers invest heavily in robust security measures, ensuring data protection and [[Regulatory Compliance]]. Data encryption, access controls, and regular security audits contribute to maintaining [[Data Integrity]] and confidentiality. Data engineers focus on [[IaaS|Infrastructure as a Service]] and [[PaaS|Platform as a Service]] to create [[Data Pipelines]], analytic systems, and ML infrastructure. The three main cloud service models are Infrastructure as a Service, [[IaaS]], basic building blocks, like compute, storage, and networking. Examples, AWS, [[Amazon EC2|EC2]], S3, VPC, et cetera. Another is Platform as a Service, [[PaaS]], managed services for deploying apps and [[Databases]]. Example, AWS Elastic Beanstalk, RDS, et cetera. Next is [[SaaS|Software as a Service]], [[SaaS]], ready-to-use cloud applications. For example, Dropbox, [[Slack]], [[Microsoft Office|Office]] 365. Cloud computing has revolutionized data engineering by providing scalable, cost-effective, and secure infrastructure. By harnessing the power of cloud,
>
> **[3:09](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/introduction-to-cloud-computing?u=76281980&t=189)** data, engineers can focus on extracting actionable insights from vast amounts of data, driving innovation and accelerating business growth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (7), [[Data Engineering]] (5), [[Scalability]] (2), [[Data Processing]] (2), [[IaaS|Infrastructure as a service]] (2)
> **Env Vars:** aws (2), ec2 (1), vpc (1), rds (1)
> **CLI Commands:** aws (2)
> **Analogies:** such as (1), for example (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### [Various cloud platforms to explore](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/various-cloud-platforms-to-explore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/various-cloud-platforms-to-explore?u=76281980&t=0)** - [Instructor] Three major cloud providers dominate the market: [[Amazon Web Services (AWS)|Amazon Web Services]], [[Microsoft Azure]], and [[Google Cloud Platform (GCP)|Google Cloud Platform]]. Data engineers should have working knowledge of either one of them. Let's begin to explore first cloud provider, that is Amazon Web Services. It provides a comprehensive suite of [[Cloud Services]] including storage, compute, analytics, and machine learning. The largest and most mature public cloud provider. AWS offers over 200 cloud services including compute, storage, networking, [[Databases]], analytics, machine learning, and a lot more. Popular offerings include [[Amazon EC2|EC2]], S3, Lambda, Redshift, EMR, and SageMaker. Next is the Microsoft Azure cloud service provider. It offers a broad range of services including [[Data Storage]], machine learning, and analytics tools. [[Microsoft Azure|Azure]] is rapidly growing in popularity. It provides [[IaaS]], [[PaaS]], and [[SaaS]] [[Hybrid Cloud]] capabilities. Key Azure services includes [[Virtual Machines]], Cosmos DB, HDInsight, databricks, and Machine Learning Studio. Last cloud provider we will talk about is GCP. It provides services for scalable [[Data Warehousing]], storage, and [[Data Processing]] machine learning services such as AI Platform and AutoML, facilitate advanced data analysis and modeling. GCP includes computing [[Big Data]], storage, networking,
>
> **[1:35](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/various-cloud-platforms-to-explore?u=76281980&t=95)** and ML services. It offers powerful tools like Compute Engine, BigQuery, [[Cloud Storage]], DataProc, [[TensorFlow]], and a lot more. Working knowledge of these cloud service providers allows data engineers to harness the power of scalable infrastructure, advanced analytics, and machine learning capabilities. These major players all offer excellent documentation, free tiers of training services, and certification programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (2), [[Microsoft Azure]] (2), [[Cloud Services]] (2), [[Microsoft Azure|Azure]] (2), [[Google Cloud Platform (GCP)|Google cloud platform]] (1)
> **Env Vars:** gcp (2), aws (1), ec2 (1), emr (1)
> **CLI Commands:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 5. Do Not Underestimate Data Quality and Data Governance

[↑ Back to Table of Contents](#table-of-contents)

#### [Why is data quality important?](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/why-is-data-quality-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/why-is-data-quality-important?u=76281980&t=0)** - [Narrator] As data scientists transition to [[Data Engineering]] roles, understanding the importance of [[Data Quality]] becomes paramount. Let's delve into why data quality serves as a crucial element in the field of data engineering. Data quality plays a vital role in ensuring reliability, integrity, and usefulness of data for data engineers. Here are the main reasons. Accurate analysis and insights. High quality data provides a solid foundation for accurate analysis enabling data engineers to derive meaningful insights. Clean and reliable data ensures that the analysis and models built by data engineers produce accurate and reliable results. Reliable decision making. Data engineers rely on quality data to make informed decisions and drive business strategies. Decision makers at all levels of an organization rely on data engineers to provide reliable and trustworthy data for critical decision making processes. Efficient [[Data Processing]]. Data engineers spend a significant amount of time processing and transforming data before it can be used for analysis and modeling. High quality data reduces the time and effort required for [[Data Cleaning]], transformation, validation, enabling data engineers to focus more on strategic tasks. Enhanced [[Data Integration]]. Data engineers often work with multiple data sources and systems, requiring seamless integration
>
> **[1:35](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/why-is-data-quality-important?u=76281980&t=95)** of various data sets. Data quality ensures that the data from different sources can be integrated accurately, enabling a holistic view of organization's data landscape. Improve [[Data Governance]] and compliance. Quality data is essential for maintaining data governance practices and ensuring compliance with regulations and policies. Data engineers play a crucial role in implementing data quality controls and processes that align with regulatory compliances. Data quality is the backbone of data engineering, enabling accurate analysis, reliable decision making, and effective data governance. In data engineering roles, upholding data quality spans activities like error handling, testing, monitoring, documentation, and [[Metadata]]. Robust [[Data Validation]], integration, testing, and auditing must be baked into [[Data Pipelines]] and architectures. High quality data serves as the foundation for reliable and accurate analysis, decision making, and insights. By prioritizing data quality, data engineers can unlock the full potential of data and drive meaningful business outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (8), [[Data Engineering]] (4), [[Data Governance]] (3), [[Data Processing]] (1), [[Data Cleaning]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Why is data governance important?](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/why-is-data-governance-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/why-is-data-governance-important?u=76281980&t=0)** - [Narrator] As data scientists take on the [[Data Engineering]] responsibilities, implementing strong [[Data Governance]] becomes a key priority. Data governance establishes the processes and policies for managing data as an enterprise asset, ensuring that data is protected and utilize effectively to drive business value. Data governance serves as a set of practices and processes that ensure the proper management, protection, and utilization of data assets. Here's why data governance is so important for data engineers. [[Data Integrity]] and quality is the core heart for data governance practices. Data governance establishes the standards and processes to maintain data integrity and ensure high quality data across the organizations. Data engineers play a key role in implementing [[Data Quality]] controls and validation procedures, ensuring that the data is accurate, complete, and reliable. Another important factor is compliance with regulations and policies. Data governance ensures that the data practices align with the regulatory requirements, industry standards, and internal policies. Data engineers are responsible for implementing data governance frameworks that protect sensitive data and ensure compliance with regulations like GDPR, HIPAA, and CCP. [[Data Security]] and [[Privacy]] to establish measures to protect data from unauthorized accesses,
>
> **[1:34](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/why-is-data-governance-important?u=76281980&t=94)** breaches, and misuse. Data engineers implement security controls and encryption protocols to safeguard the data throughout its lifecycle, ensuring [[Data Privacy]] and mitigating potential risks. Effective [[Data Management]] and utilization provides guidelines for data management, including [[Data Collection]], storage access, and retention. Data engineers leverage data governance frameworks to ensure data is organized, well documented, and easily accessible for analysis and decision making. Collaboration and [[Data Sharing]] across teams and departments fosters a trustworthy data-driven culture making solutions more innovative and optimized. Data engineers facilitate data sharing initiatives by implementing secure [[Data Pipelines]], data cataloging, and [[Metadata]] management policies. Data governance [[Forms]] the foundation for effective data management, protection, and utilization. By prioritizing data governance, data engineers can ensure data excellence and drive meaningful business outcomes. As data engineers working closely with the data governance groups, it's imperative to build managed data platforms. Governance may impose controls on data accesses, infrastructure, security, and pipelines that engineers must integrate into systems. These governance best practices makes data trustworthy and usable across the businesses.
>
> **[3:09](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/why-is-data-governance-important?u=76281980&t=189)** What's the data governance practice according to you? Share in comments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (13), [[Data Management]] (3), [[Data Integrity]] (2), [[Data Sharing]] (2), [[Data Engineering]] (1)
> **Env Vars:** gdpr (1), hipaa (1), ccp (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Shift from data scientist to data engineer](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/shift-from-data-scientist-to-data-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/transition-from-data-science-to-data-engineering/shift-from-data-scientist-to-data-engineer?u=76281980&t=0)** - [Pooja] Mission accomplished, data heroes. We have navigated the fascinating landscapes of [[Data Science]] and [[Data Engineering]], equipped you with powerful tools, and ignited your passion for building insights from the raw power of data. In summary, you have learned about the fundamentals of data engineering including [[Data Ingestion]], transformation, storage, and processing. You have explored various tools and technologies such as Apache [[Hadoop]], Spark, and Cloud platforms like AWS, [[Microsoft Azure|Azure]], [[Google Cloud Platform (GCP)|Google Cloud]]. Additionally, you have discovered the best practices for designing scalable and efficient [[Data Pipelines]]. Next steps. Practice, practice, practice,. Experiment with new tools, build personal projects, and keep learning. Join the data community. Network, share your knowledge, and learn from others. Remember, the first step is to apply what you have learned. Start by identifying a data engineering project or problem you want to solve, and deep dive into it. Practice and get hands-on experience that will solidify your skills and help you growth as a data engineer. I wish you best of luck for your future endeavor. Embrace the exciting world of data engineering and keep pushing the boundaries of what's possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (4), [[Data Science]] (1), [[Data Ingestion]] (1), [[Hadoop]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** apache (1), aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [pooja] (1)


## Instructor

- [[Pooja Jain]]

## Skills Covered

- Data Engineering
- Career Transitioning

## Path Context

### In [[Explore a Career in Data Engineering]]
← [[Apache Kafka Essential Training- Getting Started]] | **7 of 7**

## Appears In

- [[Explore a Career in Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering
- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — Data Engineering
- [[Data Engineering- dbt for SQL]] — Data Engineering

---

[↑ Back to top](#)