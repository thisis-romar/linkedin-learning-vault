---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud
url: "https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud"
duration_minutes: 54
duration: 54m
level: Beginner
updated: 3/25/2025
learners: 3954
skills:
  - Data Transformation
  - Google Cloud Platform (GCP)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHnsbvLOIsOEg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726251162723?e=2147483647&amp;v=beta&amp;t=fJSl0-2k8-JmDlHlrczTLIf1ChXA4NSeR0Kb_rkn4zs"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Prepare for the Google Cloud Digital Leader Certification]]'
prev_courses:
  - '[[Google Cloud Digital Leader Cert Prep 1 Digital Transformation With Google Cloud]]'
next_courses:
  - '[[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]]'
path_nav: '[{"path":"Prepare for the Google Cloud Digital Leader Certification","position":2,"total":6,"prev":"Google Cloud Digital Leader Cert Prep 1 Digital Transformation With Google Cloud","next":"Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/data-transformation
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%202%20Exploring%20Data%20Transformation%20with%20Google%20Cloud.md)

![Google Cloud Digital Leader Cert Prep: 2 Exploring Data Transformation with Google Cloud](https://media.licdn.com/dms/image/v2/D4E0DAQHnsbvLOIsOEg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726251162723?e=2147483647&amp;v=beta&amp;t=fJSl0-2k8-JmDlHlrczTLIf1ChXA4NSeR0Kb_rkn4zs)

# Google Cloud Digital Leader Cert Prep: 2 Exploring Data Transformation with Google Cloud

> The Google Cloud Digital Leader certification is for anyone who wishes to demonstrate their knowledge of cloud computing basics and how Google Cloud products and services can be used to achieve an organization’s goals. In this second course in a series covering the topics tested in the Cloud Digital Leader exam, learn how data can now be consumed, analyzed, and used at speed and scale never before

> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud) | 54m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Course introduction](#course-introduction)
- [**1. The Value of Data**](#1-the-value-of-data) (7 videos)
  - [Introduction](#introduction)
  - [How data creates value](#how-data-creates-value)
  - [Unlocking business value from data](#unlocking-business-value-from-data)
  - [Data management concepts](#data-management-concepts)
  - [The role of data in digital transformation](#the-role-of-data-in-digital-transformation)
  - [The data value chain](#the-data-value-chain)
  - [Data governance](#data-governance)
- [**2. Google Cloud Data Management Solutions**](#2-google-cloud-data-management-solutions) (6 videos)
  - [Introduction](#introduction)
  - [Unstructured data storage](#unstructured-data-storage)
  - [Structured data storage](#structured-data-storage)
  - [Semi-structured data storage](#semi-structured-data-storage)
  - [Choosing the right storage product](#choosing-the-right-storage-product)
  - [Database migration and modernization](#database-migration-and-modernization)
- [**3. Making Data Useful and Accessible**](#3-making-data-useful-and-accessible) (4 videos)
  - [Introduction](#introduction)
  - [Business intelligence and insights using Looker](#business-intelligence-and-insights-using-looker)
  - [Streaming analytics](#streaming-analytics)
  - [Pub/Sub and Dataflow](#pubsub-and-dataflow)
- [**Conclusion**](#conclusion) (1 videos)
  - [Course summary](#course-summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/course-introduction?u=76281980&t=0)** - [Instructor] Business data is not a new term, because organizations have long applied information about performance and operations to make decisions. With traditional methods though, data analysis can take days or months and is often incomplete. In addition, specialized teams are often required to produce complex reports. With cloud technology, this doesn't need to be the case. Data can now be consumed, analyzed, and used at speed and scale never before possible. In fact, organizations can now benefit from cloud technology to ingest data in real time to train machine learning models and to act in ways that benefit their business. You no longer need to be a data scientist or technical expert to perform data analysis. With that in mind, this course, "Exploring [[Data Transformation]] with [[Google Cloud Platform (GCP)|Google Cloud]]", is designed to help you understand the value of data and how it affects customer experiences, learn about the different Google Cloud [[Data Management]] solutions that are available, and explore the ways that Google Cloud [[Microsoft Products|products]] have made data more useful and accessible to a workforce. Throughout the course, you'll be presented with graded knowledge assessments. You must pass these assessments to receive course credit. Okay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (3), [[Data Transformation]] (1), [[Data Management]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 1. The Value of Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/introduction?u=76281980&t=0)** - [Instructor] The [[Microsoft Word|word]] data is used a lot in today's business world. There's a good reason for that because capturing, managing, and using data is central to redefining customer experiences and creating new value in almost every industry. In this section of the course, you'll explore how data generates business insights and drives [[Decision-Making]], basic [[Data Management]] concepts like [[Databases]], data warehouses, and [[Data Lakes]]. How organizations can create value by using their current data, collecting new data and sourcing data externally. How the cloud unlocks business value from all types of data, including structured data and previously untapped [[Unstructured Data]]. The data value chain from the initial creation of data through data activation and the importance that [[Data Governance]] plays in a successful data journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Decision-Making]] (1), [[Data Management]] (1), [[Databases]] (1), [[Data Lakes]] (1)
> **Speakers:** - [instructor] (1)

#### [How data creates value](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/how-data-creates-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/how-data-creates-value?u=76281980&t=0)** - [Instructor] Data is an essential ingredient for driving innovation and differentiation, and is the key to unlocking value from [[Artificial Intelligence (AI)|artificial intelligence]]. Data powers AI-driven business insights, helps companies make better [[Real-Time]] decisions, and is the basis for how companies build and run their applications. We're generating more data every day, and the complexity and speed of data arrival are changing the business environment. However, the most valuable insights no longer come just from sales, inventory, and personnel data. They are often hidden across [[Unstructured Data]] points from a myriad of sources and systems. Extracting those insights requires the right blend of tools, skills, and strategy. Some data is easy to capture, like [[Financial Data]], because it can be found in [[Databases]] and spreadsheets, but other data might not be as easy. For example, how your customers engage with you across social media platforms. And after you capture data, how do you store it so that you can gain insights from it? With machine learning, or ML, and artificial intelligence, or AI, organizations can generate insights from data, both past and present, and also perceive, predict, recommend, and categorize data in new ways. For example, ML lets online retailers use smart analytics tools to ingest real-time customer behavior data while they serve as the best suggestions for particular users. So with every click that the user makes, their website experience becomes increasingly personalized.
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/how-data-creates-value?u=76281980&t=95)** However, some organizations struggle to remove the barriers that sit between them and their data. According to a report by Accenture titled "Closing the Data Value Gap," 68% of organizations say that they are still unable to realize tangible and measurable value from data. Organizations that want to adapt must determine how to close the gap and support value generation. An intelligent data cloud is the key to unlocking more business value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[Real-Time]] (2), [[Unstructured Data]] (1), [[Financial Data]] (1), [[Databases]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Unlocking business value from data](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/unlocking-business-value-from-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/unlocking-business-value-from-data?u=76281980&t=0)** - [Narrator] Unlocking the value of data is central to [[Digital Transformation]]. To generate insights, you might need to combine different types of data. However, not all data is created and organized the same way. Data can be categorized into three main types. Structured, semi-structured, and unstructured. Structured data is highly organized and well-defined. It's typically stored in a table with relationships between the different rows and columns, like in a spreadsheet or database. Because structured data is organized this way, it's easy to analyze. For example, it's common for organizations to use structured data and Customer Relationship Management tools or CRMs, as they follow customer behavior patterns and trends. Semi-structured data falls somewhere in between structured and [[Unstructured Data]]. It's organized into a hierarchy, but without full differentiation or any particular ordering. Examples include emails, [[HTML]], [[JSON]], and XML files. Although this data type doesn't have a formal structure, it contains tags or other markers that make it easier to analyze than unstructured data. Unstructured data is information that either doesn't have a predefined data model or isn't organized in a predefined manner. Categories include text, which is the most common, and is often generated and collected from sources like documents, presentations, or even social media posts. Data files like images, audio files and videos,
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/unlocking-business-value-from-data?u=76281980&t=95)** and infrastructure activity and performance data. Like log files from servers, networks, and applications or output data from [[Internet of Things (IoT)|Internet of Things]], [[IoT]] sensors. Organizations can use unstructured data in many ways. For example, a marketing team might analyze social media posts to identify sentiment toward a brand. Or customer service teams might train automated chatbots to augment support staff by analyzing language in customer communications, and providing interactive responses. But in general, unstructured data has historically been difficult to analyze. According to the Harvard Business Review, on average, less than 1% of an organization's unstructured data is analyzed or used at all. Until recently, tools to tap the potential of unstructured data were either unavailable or prohibitively expensive and complex. What makes this statistic even more concerning is that according to Gartner research, unstructured data represents 80 to 90% of all new enterprise data. This reveals a staggering gap between the data being generated and the value that it's providing. But cloud technology has changed that. With the right cloud tools, businesses can extract value from unstructured data by using machine learning to discover trends, or even use [[Application Programming Interfaces (API)|application programming interfaces]] or APIs to extract structure from the data. An example of an API is [[Google Cloud Platform (GCP)|Google Cloud]]'s Vision API, which uses machine learning to detect [[Microsoft Products|products]] within a picture,
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/unlocking-business-value-from-data?u=76281980&t=187)** and can then even label the picture to describe its contents. Understanding the different types of data available can help organizations define what's possible with the data solutions they have. One of the transformative powers of the cloud is how it can unlock value from structured and the previously untapped unstructured data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (10), [[Digital Transformation]] (1), [[HTML]] (1), [[JSON]] (1), [[Internet of Things (IoT)|Internet of things]] (1)
> **Env Vars:** api (2), html (1), json (1), xml (1)
> **Analogies:** for example (2), picture (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Data management concepts](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-management-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-management-concepts?u=76281980&t=0)** - [Presenter] Organizations need a modern approach to enterprise data to manage the vast volumes that are produced. The list of options often includes [[Databases]], data warehouses, and [[Data Lakes]]. Let's explore each of these options starting with databases. A database is an organized collection of data stored in tables and accessed electronically from a computer system. Let's examine two types of databases, relational and non-relational. A relational database stores and provides access to data points that are related to one another. This means storing information in tables, rows, and columns that have a clearly defined schema that represents the structure or logical configuration of the database. A relational database can establish links or relationships between information by joining tables and structured query language or [[SQL]] can be used to query and manipulate data. [[Relational Databases]] are highly consistent, reliable, and best suited for dealing with large amounts of structured data. They're designed for business [[Data Processing]] and storing the online transactional data, needed to support the daily operations of a company. A non-relational database, sometimes known as a [[NoSQL]] database, is less structured in format and doesn't use a tabular format of rows and columns like relational databases. Instead, non-relational databases follow a flexible data model, which makes them ideal for storing data that changes its organization frequently or for applications that handle diverse types of data.
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-management-concepts?u=76281980&t=95)** This includes when large quantities of complex and diverse data need to be organized, or when the data regularly evolves to meet new business requirements. Choosing the right database depends on the use case. [[Google Cloud Platform (GCP)|Google Cloud]] relational database [[Microsoft Products|products]] include Cloud SQL and Cloud Spanner, while Bigtable is a non-relational database product. Look at these products in more detail later. Let's explore another [[Data Management]] concept, the data warehouse. Like a database, a data warehouse is a place to store data. However, while a database is designed to capture data for storage, retrieval and use, a data warehouse is designed to analyze data. A data warehouse is an enterprise system used for the analysis and reporting of structured and semi-structured data for multiple sources. Think of the data warehouse as the central hub for all business data. Business data might include point of sale transactions, marketing automation, or even customer relationship management data. Suited for both ad hoc analysis and custom reporting, a data warehouse can help analyze sales and identify trends because it can store both current and historical data in one place. This capability can provide a long range view of data over time, which makes a data warehouse a primary component of [[Business Intelligence (BI)|business intelligence]]. BigQuery is Google Cloud's data warehouse offering. We'll explore BigQuery in more detail later. Although data warehouses handled structured
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-management-concepts?u=76281980&t=188)** and semi-structured data, they're not typically the answer for how to handle large amounts of available [[Unstructured Data]] like images, videos, and documents. Unstructured data, which doesn't conform to a well-defined schema is often disregarded in traditional analytics. A data lake is a repository designed to ingest, store, explore, process, and analyze any type or volume of raw data regardless of the source, like operational systems, web sources, social media, or [[Internet of Things (IoT)|Internet of Things]], or [[IoT]]. It can store different types of data in its original format, ignoring size limits, and without much pre-processing or adding structure. Having this unprocessed raw data available for analysis prevents unintentionally contaminating the data or adding bias. It also means that raw data can be enriched by merging it with other data at the same time. This differs from a data warehouse that contains structured data that has been cleaned and processed, ready for the strategic analysis based on predefined business needs. Data lakes often consist of many different products depending on the nature of the data that is ingested. For example, the best Google Cloud products for storing structured data are Cloud SQL, Cloud Spanner, or BigQuery. For semi-structured data, the options include datastore and Bigtable. And for storing unstructured data, [[Cloud Storage]] is an option. Data warehouses and data lakes should be considered
>
> **[4:42](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-management-concepts?u=76281980&t=282)** complimentary instead of competing tools. Although both store data in some capacity, each is optimized for different uses. Traditional data warehouse users are business intelligence analysts who are closer to the business and focus on driving insights from data. These users traditionally use the data to answer questions. Data lake users and also analysts, include data engineers and data scientists. They're closer to the raw data with the tools and capabilities to explore, mine, and experiment with the data. These users find answers in the data, but they also find questions. As enterprises are increasingly focused on [[Data-driven Decision Making]], data warehouses and data lakes play a critical role in an organization's [[Data Transformation]] journey. Democratization of data lets users gain a deeper understanding of business situations because they have more context than ever before. Today, organizations need a 360-degree [[Real-Time]] view of their businesses to gain a competitive edge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Lakes]] (4), [[Microsoft Products|Products]] (4), [[Databases]] (3), [[SQL]] (3), [[Relational Databases]] (3)
> **Definitions:** is an  (3), is a  (3), known as (1), means that (1)
> **Env Vars:** sql (3), iot (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [The role of data in digital transformation](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/the-role-of-data-in-digital-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/the-role-of-data-in-digital-transformation?u=76281980&t=0)** - [Instructor] Organizations have access to data like never before. This includes both internal information, called first-party data, and external information, which is usually data about customers and industry, often called second- or third-party data. As organizations have digitized their operations, many types of business data have become available, including information about their customers. First-party data is the proprietary customer data sets that a business collects from customer or audience transactions and interactions. These data sets might include information about digital interactions, like the length of time a user spends at a webpage. Second-party data often describes first-party data from another organization, such as a partner or other business in their supply chain, that can be easily deployed to augment a company's internal data sets. The organization does not directly own this data, but it's relevant to their business. Finally, there's third-party data, which are data sets collected and managed by organizations that don't directly interact with an organization's customers or business. These data sets might come from government, nonprofit, or academic sources like weather or public demographic data, or from industry-specific sources like analyst reports or industry benchmarking. Third-party data is often shared or purchased on data marketplaces or exchanges such as the [[Google Cloud Platform (GCP)|Google Cloud]] marketplace. Using external data can greatly increase the value of data
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/the-role-of-data-in-digital-transformation?u=76281980&t=95)** by providing new context and insights. Let's explore an example of how an airline transformed their business through data. Budget airlines don't provide food as part of their service. Instead, they charge customers for meals if they want them. The solution might seem cost effective, but it can be difficult to estimate the number of meals required on board. If the airline overestimates the number of meals needed, they risk wasting food and losing revenue. But if they underestimate, they risk selling out of food, providing poor customer service, and losing potential revenue. One budget airline in Asia reimagined how they could solve this problem by using data. They began by identifying factors to help estimate stock, such as the size of the plane and the number of passengers. But they soon discovered that estimates based on these factors were inaccurate. This meant having to think about their data differently by analyzing information such as destination, time of flight, and flight connections before and after each journey. Using this information, they uncovered actionable insights. For example, they learned that flights to and from India required 73% more vegetarian meals. With these new insights, the airline was able to predict the number of meals required more accurately, which in turn provided a more positive customer experience and improved the profitability of their food service. This is just one example of how cloud technology can unlock new value by reimagining data. No matter where you are in your company,
>
> **[3:10](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/the-role-of-data-in-digital-transformation?u=76281980&t=190)** you too can use data to solve challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Analogies:** such as (4), for example (1)
> **Speakers:** - [instructor] (1)

#### [The data value chain](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/the-data-value-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/the-data-value-chain?u=76281980&t=0)** - [Narrator] When you think about [[Data Processing]], it's important to place it within the broader context of the data value chain. Imagine data traveling along an assembly line, like a car in a factory. The assembly line progressively adds parts and value to an object that moves along it. Raw data at the beginning of the line is eventually transformed into actions that humans or machines take. Let's examine the steps in this data value chain. Data genesis is the initial creation of a unit of data. This could be a click on a website, the swipe of a card, a sensor recording from an [[IoT]] device, or countless other examples. It's the raw material that will eventually be turned into an insight ready for action. [[Data Collection]] brings that initial unit of data to the assembly line through ingestion. The basic function of ingestion is to extract data from the system in which it's hosted and bring it to a new system. It can have dramatically different requirements based on the volume, velocity, and variety of the raw data that's required for a given analysis and how fast the data needs to be analyzed. Data processing is where the collected raw data is transformed into a form that's ready to derive insights from. The data will likely need to be adjusted, for example, by merging different data sets together. It can be a single stage operation or it can be a complex tree of cascading procedures. In our manufacturing process analogy, this phase is where raw materials take the shape
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/the-data-value-chain?u=76281980&t=92)** of the pre-assembly parts of a manufactured product. [[Data Storage]] is where the data lands, can be found and is ready for analysis and action. As with real world manufacturing, where storage options vary, depending on the type of product that is processed, different types of data can be stored in different ways. For example, no [[SQL]] is available for fast reads and writes, [[Data Warehousing]] for fast access to analysis and object storage for [[Unstructured Data]]. There are also customized options of these standard stores. Data analysis provides direction for business oriented action. To continue with our manufacturing line analogy, in this stage, inputs from the data processing stage are assembled into a final product. And finally, the last step in the data value chain is data activation. When an analysis is produced, it needs to be pushed to the relevant business procedures and decision makers, so that action can be taken and the value chain completed. The most common points of activation are applications that make automated decisions and [[Business Intelligence (BI)|business intelligence]] [[Dashboards]] that guide humans toward better, more informed decisions. In our manufacturing line example, this is a step where a fully produced product is put to its intended use. There's no one way to assemble a data value chain, as there's no one way to create a real world manufacturing line. Similarly, as technologies progress,
>
> **[3:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/the-data-value-chain?u=76281980&t=186)** new inputs become available, your workforce evolves, or the desired output changes. The optimal value chain will also change. However, at its core, the value chain principles hold. We want to use raw data to perform actions that benefit the business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (3), [[IoT]] (1), [[Data Collection]] (1), [[Data Storage]] (1), [[SQL]] (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Data governance](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-governance?u=76281980&t=0)** - [Instructor] In the last decade, the amount of data produced has increased exponentially, and the cloud has made it easier to collect, store, and analyze it at a lower cost. Organizations are now challenged to democratize and embed data in every decision while they also ensure that it's secure and protected from unauthorized use. An effective [[Data Governance]] program can help implement data directives to achieve this. But what exactly is data governance? Data governance means setting internal standards, data policies, that apply to how data is gathered, stored, processed, and disposed of. It governs who can access certain data and what data is under governance. It also involves complying with external standards set by industry associations, government agencies, and other stakeholders. Data governance focuses on making the data available to all stakeholders across the full lifecycle of the data in a form that they can readily access and use in a manner that generates the desired business outcomes through insights and analysis and, if relevant, in a way that conforms to regulatory standards and compliance needs. Data governance brings several benefits. It makes data more valuable. Data governance implements processes to ensure high-quality data and provides a platform that makes it easier to share data securely with stakeholders across the organization. It helps users make better, more timely decisions.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-governance?u=76281980&t=94)** Through data governance, users throughout an organization get the data they need to reach and service customers, design and improve [[Microsoft Products|products]] and services, and seize opportunities for new revenues. By democratizing data, organizations can embed data in all decision making. It improves cost controls. Data helps organizations manage resources and operate more efficiently. Because they can eliminate data duplication caused by information silos, they don't overbuy and have to maintain expensive [[Hardware]]. It enhances [[Regulatory Compliance]]. An increasingly complex regulatory climate has made it more important for organizations to establish rigorous data governance practices. They avoid risks associated with noncompliance and proactively anticipate new regulations. It helps earn greater trust from customers and suppliers. By being in auditable compliance with both internal and external data policies, organizations gain the trust of customers and partners. It helps manage risk. With robust data governance, organizations can reduce concerns about exposure of sensitive data to individuals or systems who lack proper authorization, security breaches from malicious outsiders or even insiders who access data they don't have the right to see. It allows more personnel access to more data. Strong data governance provides confidence that the right personnel get access to the right data and that this democratization of data
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/data-governance?u=76281980&t=187)** does not negatively impact the organization. It's possible that organizations without an effective data governance program will suffer from compliance violations. This can lead to fines, poor [[Data Quality]], which generates lower quality insights that impact business decisions, challenges in finding data, which results in delayed analysis and missed business opportunities, and poorly trained data models for AI, which reduces the model accuracy and benefits of using AI. Every organization needs data governance. As businesses throughout all industries progress on their [[Digital Transformation]] journeys, data has quickly become the most valuable asset they possess.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (12), [[Microsoft Products|Products]] (1), [[Hardware]] (1), [[Regulatory Compliance]] (1), [[Data Quality]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### 2. Google Cloud Data Management Solutions

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/introduction-23228171?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/introduction-23228171?u=76281980&t=0)** - [Narrator] Data plays such an integral role in organization's operations. For this reason, it's crucial to have an effective way of storing and managing it. [[Google Cloud Platform (GCP)|Google Cloud]] offers a wide range of [[Data Management]] [[Microsoft Products|products]] and solutions, each applicable to different business use cases. In this section of the course, you'll explore Google Cloud data management options and the differences between them, the different storage classes available with [[Cloud Storage]], how to choose the right storage product to meet the needs of your organization, and ways an organization can migrate and/or modernize their current database in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Data Management]] (2), [[Microsoft Products|Products]] (1), [[Cloud Storage]] (1)
> **Speakers:** - [narrator] (1)

#### [Unstructured data storage](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/unstructured-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/unstructured-data-storage?u=76281980&t=0)** - [Instructor] Every application needs to store data, like media to be streamed or even sensor data from devices and different applications and workloads require different storage solutions. [[Google Cloud Platform (GCP)|Google Cloud]] offers several core storage [[Microsoft Products|products]]. This list includes [[Cloud Storage]], cloud [[SQL]], cloud Spanner, BigQuery, Firestore, and Cloud Bigtable. Depending on your use case, you might use one or several of these services to do the job. Let's begin with cloud storage, which is a service that offers developers and IT organizations durable and highly available object storage. But what is object storage? Object storage is a computer [[Data Storage]] architecture that manages data as objects instead of as file storage, which is a file and folder hierarchy or as block storage, which is chunks of a disc. These objects are stored in a packaged format that contains the binary form of the actual data and relevant associated [[Metadata]], such as creation date, author, resource type, and permissions, and a globally unique identifier. These unique keys are in the form of URLs, which means object storage interacts well with web technologies. Data commonly stored as objects include video, pictures and audio recordings. This type of data is referred to as unstructured, which means that it doesn't have a predefined data model
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/unstructured-data-storage?u=76281980&t=95)** or isn't organized in a predefined manner, as you might find in a structured database format. Cloud storage lets customers store any amount of data and retrieve it as often as needed. It's a fully managed, scalable service that has a wide variety of uses, such as serving website content, storing data for archival and disaster recovery, and distributing large data objects to end users through direct download. There are four primary storage classes in cloud storage. The first is standard storage. Standard storage is considered best for frequently accessed or hot data. It's also great for data that's stored for only brief periods of time. The second storage class is nearline storage. This option is best for storing infrequently accessed data like reading or modifying data on average once a month or less. Examples might include data backups, long tail multimedia content, or data archiving. The third storage class is coldline storage. This is also a low cost option for storing infrequently accessed data. However, as compared to nearline storage, cold line storage is meant for reading or modifying data at most once every 90 days. And the fourth storage class is archive storage. This is the lowest cost option, used ideally for data archiving, online backup, and disaster recovery. It's the best choice for data that you plan
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/unstructured-data-storage?u=76281980&t=187)** to access less than once a year because it has higher costs for data access and operations, and a 365 day minimum storage duration. Although each of these four classes have differences, it's worth noting there are several characteristics that apply across all of these storage classes, which include unlimited storage with no minimum object size requirement, worldwide accessibility and locations, low latency and high durability, a uniform experience which extends to security tools and APIs and geo redundancy if data is stored in a multi-region or dual region. This means placing physical servers in geographically diverse data centers to protect against catastrophic events and natural disasters and load balancing traffic for optimal performance. Cloud storage also provides a feature called autoclass, which automatically transitions objects to appropriate storage classes based on each object's access pattern. The feature moves data that's not accessed to colder storage classes to reduce storage cost and moves data that is access to standard storage to optimize future accesses. Autoclass simplifies and automates cost saving for your cloud storage data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (6), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Microsoft Products|Products]] (1), [[SQL]] (1), [[Data Storage]] (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Structured data storage](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/structured-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/structured-data-storage?u=76281980&t=0)** - [Narrator] In the previous lesson, you saw how [[Cloud Storage]] is used to store [[Unstructured Data]]. Now let's explore some [[Google Cloud Platform (GCP)|Google Cloud]] [[Data Storage]] [[Microsoft Products|products]] that are suited for storing structured data. Structured data consists of numbers and values that are organized in a predefined format that's easily searchable in a relational database. Earlier in the course, we mentioned that a relational database stores information in tables, rows, and columns that have a clearly defined schema that represents the structure or logical configuration of the database. Cloud [[SQL]] offers fully managed [[Relational Databases]], including [[MySQL]], [[PostgreSQL]], and [[Microsoft SQL Server|SQL Server]] as a service. It's designed to transfer mundane but necessary and often time consuming tasks to [[Google]] like applying patches and updates, managing backups, and configuring replications so you can focus on building great applications trusted by thousands of the largest enterprises around the world. Organizations that use Cloud SQL obtain various benefits. It doesn't require any software installation or maintenance. It supports managed backups, so backed up data is securely stored and accessible if a restore is required. It encrypts customer data when on Google's internal networks and when stored in database tables, temporary files and backups. And it includes a network firewall which controls network access to each database instance.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/structured-data-storage?u=76281980&t=94)** Cloud Spanner is a fully managed, mission critical relational database service that scales horizontally to handle unexpected business spikes. Battle tested by Google's own mission critical applications and services, Spanner is a service that powers Google's multi-billion dollar business. Cloud Spanner is especially suited for applications that require a SQL relational [[Database Management]] system with joins and secondary indexes. Built-in high availability, which provides data redundancy to reduce downtime when a zone or instance becomes unavailable, the goal is to prevent a single point of failure. Strong global consistency, which ensures that all locations where data is stored are updated to the most recent data version quickly. And high numbers of input and output operations per second, tens of thousands of reads and writes per second or more. Both Cloud SQL and Cloud Spanner are fully managed database services, but how do they differ? Cloud SQL is a fully managed relational database service for MySQL, PostgreSQL and SQL Server with greater than 99.95% availability. Database migration Service, DMS, makes it easy to migrate your production [[Databases]] to Cloud SQL with minimal downtime. And then there's Cloud Spanner, which is a fully managed database with unlimited scale, strong consistency, and up to 99.999% availability with zero downtime for planned maintenance and schema changes.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/structured-data-storage?u=76281980&t=191)** This globally distributed ACID compliant Cloud database automatically handles replicas, sharding, and transaction processing so you can quickly scale to meet any usage pattern and ensure success of products. When considering which option is best for your business, consider this. If you've outgrown any relational database, are sharding your databases for throughput high performance, need transactional consistency, global data and strong consistency, or just want to consolidate your database, consider using Cloud Spanner. If you don't need horizontal scaling or a globally available system, Cloud SQL is a cost-effective solution. The final structured data storage solution that we'll explore is BigQuery. BigQuery is a fully managed data warehouse. As we've already learned, a data warehouse is a large store that contains petabytes of data gathered from a wide range of sources within an organization and is used to guide management decisions. Because it's fully managed, BigQuery takes care of the underlying infrastructure so users can focus on using SQL queries to answer business questions without having to worry about deployment, [[Scalability]], and security. BigQuery provides two services in one, storage and analytics. It's a place to store petabytes of data. For reference, one petabyte is equivalent to 11,000 movies at 4K quality. BigQuery is also a place to analyze data
>
> **[4:45](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/structured-data-storage?u=76281980&t=285)** with built-in features like machine learning, geospatial analysis, and [[Business Intelligence (BI)|business intelligence]]. Data in BigQuery is encrypted at [[Representational State Transfer (REST)|rest]] by default without any action required from a user. Encryption at rest is encryption used to protect data that's stored on a disc, including solid-state drives or backup media. BigQuery provides seamless integration with the existing partner ecosystem. Businesses can tap into our ecosystem of system integrators and [[Data Integration]] partners to help enhance analytics and reporting. These integrations mean that BigQuery lets organizations make the most of existing investments in business intelligence, [[Data Ingestion]], and data integration tools. Industry research shows that 90% of organizations have a multicloud strategy, which adds complexity to data integration, orchestration, and governance. BigQuery works in a multicloud environment, which lets data teams eradicate data silos by using BigQuery to securely and cost effectively analyze data across multiple Cloud providers. BigQuery also has built-in machine learning features so that ML models can be written directly in BigQuery by using SQL. And if other professional tools such as [[Vertex]] AI from Google Cloud are used to train ML models, data sets can be exported from BigQuery directly into Vertex AI for a seamless integration across the data-to-AI lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Google]] (4), [[Data Integration]] (3), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Data Storage]] (2)
> **Env Vars:** sql (11), dms (1), acid (1)
> **Definitions:** is a  (7)
> **CLI Commands:** mysql (2), make (1)
> **Versions:** 99.95 (1), 99.999 (1)
> **Cross-References:** earlier in (1), we mentioned (1)
> **Speakers:** - [narrator] (1)

#### [Semi-structured data storage](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/structured-data-storage-25338217?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/structured-data-storage-25338217?u=76281980&t=0)** - [Instructor] Semi-structured data contains elements of both structured and [[Unstructured Data]]. It does have some defining or consistent characteristics, but generally doesn't follow a structure as rigid as a relational database. Semi-structured data is easier to organize because it usually contains some organizational properties, such as tags or [[Metadata]]. An example of semi-structured data is an email message. While the actual content of the email is unstructured, it does contain structured data, such as the name and email address of the sender and recipient, the time sent, and so on. [[Google Cloud Platform (GCP)|Google Cloud]] offers two semi-structured [[Data Storage]] [[Microsoft Products|products]], Firestore, and Bigtable. Firestore is a flexible, horizontally scalable, [[NoSQL]] cloud database for storing and syncing data in real time. Firestore can be directly accessed by mobile and web applications. Firestore performs data storage in the form of documents with the documents being stored in collections. Documents support a wide variety of data types, such as nested objects, numbers, and strings. One of Firestore's main features is automatic scaling. It's been designed to scale automatically, depending on user demand, but retains the same level of performance irrespective of database size. Firestore also provides offline usage through a comprehensive database on users' devices. Offline data access ensures
>
> **[1:31](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/structured-data-storage-25338217?u=76281980&t=91)** that applications run without interruption, even if the user gets disconnected from the internet. And then there's Bigtable, [[Google]]'s no NoSQL, [[Big Data]] database service. It's the same database that powers many core Google services, including search, analytics, maps, and Gmail. Bigtable is designed to handle large workloads at consistent low latency, which means Bigtable responds to requests quickly, and high throughput, which means it can send and receive large amounts of data. For this reason, it's a great choice for both operational and analytical applications, including [[Internet of Things (IoT)|internet of things]], user analytics, and [[Financial Data]] analysis. When deciding on a storage option, you might choose Bigtable, if you're working with more than one terabyte of semi-structured or structured data, data is fast with high throughput or it's rapidly changing, you're working with NoSQL data, data is a time series or has natural ordering, you're working with big data and running batch or [[Real-Time]] processing on the data, or you're running machine learning [[Algorithms]] on the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[Data Storage]] (2), [[Google]] (2), [[Big Data]] (2), [[Unstructured Data]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)

#### [Choosing the right storage product](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/choosing-the-right-storage-product?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/choosing-the-right-storage-product?u=76281980&t=0)** - [Narrator] So you've learned about the different storage options that [[Google Cloud Platform (GCP)|Google Cloud]] offers, but in what scenarios should you use each one? Ultimately, it's a combination of the data type that needs to be stored and the business need. If data is unstructured, then [[Cloud Storage]] is the most appropriate option. You have to decide a storage class, standard, nearline, coldline, or archive or whether to let the auto class feature decide that for you. If data is structured or semi-structured, choosing a storage product will depend on whether workloads are transactional or analytical. Transactional workloads stem from online transaction processing, or OLTP systems, which are used when fast data inserts and updates are required to build row based records. An example of this is point of sale transaction records. Then there are analytical workloads which stem from online analytical processing, or OLAP systems, which are used when entire data sets need to be read. They often require complex queries, for example, aggregations. An example here would be analyzing sales history to see trends and aggregated views. After you determine if the workloads are transactional or analytical, you must determine whether the data will be accessed by using [[SQL]]. So if your data is transactional and you need to access it by using SQL, then Cloud SQL and Cloud Spanner are two options. Cloud SQL works best for local to regional [[Scalability]]
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/choosing-the-right-storage-product?u=76281980&t=95)** and Cloud Spanner is best to scale a database globally. If the transactional data will be accessed without SQL, Firestore might be the best option. The Firestore is a transactional [[NoSQL]] document-oriented database. If you have analytical workloads that require SQL commands, BigQuery might be the best option. BigQuery, [[Google]]'s data warehouse solution, lets you analyze petabyte scale data sets. Alternatively, Cloud Bigtable provides a scalable NoSQL solution for analytical workloads. It's best for [[Real-Time]], high throughput applications that require only millisecond latency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[NoSQL]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Cloud Storage]] (1), [[Scalability]] (1)
> **Env Vars:** sql (6), oltp (1), olap (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [narrator] (1)

#### [Database migration and modernization](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/database-migration-and-modernization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/database-migration-and-modernization?u=76281980&t=0)** - [Instructor] Running modern applications on legacy, on-premises [[Databases]] requires overcoming expensive, time-consuming challenges around latency, throughput, availability, and scaling. With database modernization, organizations can move data from traditional databases to fully managed or modern databases with relative ease. There are different ways that an organization can migrate or modernize their current database in the cloud. The most straightforward method is a lift and shift platform migration. This is where databases are migrated from on-premises and private cloud environments to the same type of database hosted by a public cloud provider such as [[Google Cloud Platform (GCP)|Google Cloud]]. Although this solution makes the database more difficult to modernize, it does bring with it the benefits of minimal upheaval and having data and infrastructure managed by the cloud provider. Alternatively, a managed database migration allows the migration of databases from [[Microsoft SQL Server|SQL Server]], [[MySQL]], [[PostgreSQL]], and others to a fully managed Google Cloud database. Although this migration requires careful planning and might cause slight upheaval, a fully managed solution lets you focus on higher priority work that really adds value to your organization. Google Cloud's Database Migration Service, DMS, can easily migrate your databases to Google Cloud or Datastream can be used to synchronize data across databases, storage systems, and applications. Let's look at a real-life use case. With 18 fulfillment centers, 38 delivery centers,
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/database-migration-and-modernization?u=76281980&t=96)** and a catalog of more than 22 million items, the online retailer Wayfair needed a way to quickly move from their on-premises data centers, which ran on SQL Server, to Google Cloud. This had to be achieved without inconveniencing their team of over 3,000 engineers, their tens of millions of customers, or their 16,000 supplier partners. So the goal was to lift and shift their workloads as quickly as possible with minimal changes, and then use cloud databases to modernize those workloads. Wayfair chose Google Cloud because of the clear path for shifting workloads to the cloud by using Cloud [[SQL]] for SQL Server. Google Cloud provided the flexibility to be deliberate about which engine and product to run Wayfair systems on going forward. They liked how they could run SQL Server on [[Virtual Machines]], VMs, for example, but could also benefit from database offerings like Cloud SQL and Cloud Spanner. Now that migration is complete, they also use [[Google]] [[Kubernetes]] Engine, GKE, and compute engine VMs to host the services built by the Google Cloud team. They also use Pub/Sub and Dataflow for sending operational data to their analytical store in BigQuery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (8), [[Google Cloud Platform (GCP)|Google cloud]] (8), [[Microsoft SQL Server|Sql server]] (4), [[SQL]] (2), [[MySQL]] (1)
> **Env Vars:** sql (6), dms (1), gke (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** mysql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Making Data Useful and Accessible

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/introduction-23228173?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/introduction-23228173?u=76281980&t=0)** - [Instructor] It's not always easy for organizations to make smart business decisions based on the data they've collected or produced, and too often there can be blockers in place that make analyzing it difficult for part or all of a workforce. With [[Google Cloud Platform (GCP)|Google Cloud]], that doesn't need to be the case. In the final section of this course, you'll explore how Looker makes it easy for a workforce to access the data they need when they need it. How streaming analytics in real time can make data more useful. And two Google Cloud [[Microsoft Products|products]] that modernize [[Data Pipelines]], Pub/Sub and Dataflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Microsoft Products|Products]] (1), [[Data Pipelines]] (1)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)

#### [Business intelligence and insights using Looker](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/business-intelligence-and-insights-using-looker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/business-intelligence-and-insights-using-looker?u=76281980&t=0)** - [Instructor] When data is in a database, a fair amount of effort and expertise might still be required to uncover insights. This goal can be achieved by using a [[Business Intelligence (BI)|business intelligence]] solution. However, the challenge that organizations often face is identifying the right business intelligence solution. Some solutions are too complex and not accessible by those outside the [[Data Engineering]] or data analysis teams. This means other teams have to put in requests and wait for answers, which defeats the purpose of gaining [[Real-Time]] insights. Other solutions let everyone in the business perform their own data analysis, but they can only perform their analysis with a selection of the available data. This means that only a few people, or possibly no one, has a full view of the organization's business data. Looker is a [[Google Cloud Platform (GCP)|Google Cloud]] business intelligence platform designed to help individuals and teams analyze, visualize, and share data. This includes creating interactive [[Dashboards]] and reports that are easy to understand and share. By having a reliable authority for business data, anyone on a team can explore it, ask and answer their own questions, and create visualizations. This approach empowers organizations to not just uncover insights, but also act on them. Looker supports BigQuery along with more than 60 different [[SQL]] [[Databases]]. Together, BigQuery and Looker provide rich, interactive dashboards and reports without compromising performance, scale, security, or data freshness.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/business-intelligence-and-insights-using-looker?u=76281980&t=92)** Looker is also 100% web-based, which makes it easy to integrate into existing workflows and share with multiple teams at an organization. So how can Looker be used? Let's explore an example. Diamond Resorts, a global leader in hospitality, offers destinations, events, and experiences to help people recharge, connect, and enjoy. They had previously used a mixture of complex [[Microsoft Excel|Excel]] workbooks and legacy BI tools to track important metrics. Each business unit operated and ran their own siloed data initiatives. As a result, there were no common view of business or single authority for common metrics, redundant data engineering efforts because work was never shared or used across the organization, and inconsistent project prioritization because decisions were driven primarily on intuition as opposed to actual data. Also, infrastructure did not meet business requirements with executive reporting efforts that took months to complete, data that was duplicative across multiple business units without proper governance, multiple reporting tools and data warehouses throughout the business, an infrastructure that didn't support advanced analytics aspirations. Diamond Resorts wanted to create a single, common, cloud-based architecture that was fully managed, establishing [[Data Governance]] and enabling the business to be more data-driven while they set the foundation for advanced analytics efforts. They migrated to the cloud and began using Looker to help improve business agility.
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/business-intelligence-and-insights-using-looker?u=76281980&t=187)** This decision let them gain access to real-time insights in less than three months. It helped them to navigate COVID changes with important operational metrics such as daily booking and cancellations, while it also provided a 360-degree customer view. And in addition to this, manual reporting for the yield management team was decreased by hours each day. The chief information officer said, "Projects that we anticipated coming in future years were suddenly ready to be tackled within weeks." This is just one example of how an effective business intelligence solution can let businesses transform to better serve their customers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Intelligence (BI)|Business intelligence]] (4), [[Data Engineering]] (2), [[Real-Time]] (2), [[Dashboards]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Env Vars:** sql (1), covid (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Streaming analytics](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/streaming-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/streaming-analytics?u=76281980&t=0)** - [Presenter] Data traditionally is moved in batches. [[Batch Processing]] often processes large volumes of data at the same time with long periods of latency. An example is payroll and billing systems that have to be processed on either a weekly or monthly basis. Although this approach can be efficient to handle large volumes of data, it doesn't work with time-sensitive data that's meant to be streamed because that data can be stale by the time it's processed. Streaming analytics is the processing and analyzing of data records continuously instead of in batches. Generally, streaming analytics is useful for all types of data sources that send data in small sizes, often in kilobytes, in a continuous flow as the data is generated. This results in the analysis and reporting of events as they happen. Sources of streaming data include equipment sensors, click streams, social media feeds, stock market quotes, app activity, and more. Companies use streaming analytics to analyze data in real time and provide insights into a wide range of activities, such as metering, server activity, geolocation of devices, or website clicks. Use cases include [[E-Commerce]]. User click streams can be analyzed to optimize the shopping experience with [[Real-Time]] pricing, promotions, and inventory management. Financial services. Account activity can be analyzed to detect abnormal behavior in the data stream and generate a security alert.
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/streaming-analytics?u=76281980&t=93)** Investment services. Market changes can be tracked in settings adjusted to customer portfolios based on configured constraints, such as selling when a certain stock value is reached. News media. User click records can be streamed from various news source platforms, and the data can be enriched with demographic information to better serve articles that are relevant to the targeted audience. Utilities. Throughput across a power grid can be monitored and alerts generated or workflows initiated when established thresholds are reached. [[Google Cloud Platform (GCP)|Google Cloud]] offers two mainstreaming analytics [[Microsoft Products|products]] to ingest, process, and analyze event streams in real time, which makes data more useful and accessible from the instant it's generated. Pub/Sub ingests hundreds of millions of events per second, but data flow unifies streaming and batch data analysis and builds cohesive [[Data Pipelines]]. A data pipeline represents a series of actions or stages that ingest raw data from different sources and then move that data to a destination for storage and analysis. You'll explore these products in more detail in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Batch Processing]] (1), [[E-Commerce]] (1), [[Real-Time]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)

#### [Pub/Sub and Dataflow](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/pub-sub-and-dataflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/pub-sub-and-dataflow?u=76281980&t=0)** - [Instructor] One of the early stages in a data pipeline is [[Data Ingestion]], which is where large amounts of streaming data are received. Data, however, might not always come from a single structured database. Instead, the data might stream from a thousand or even a million different events that are all happening asynchronously. A common example of this data is from [[IoT]], or [[Internet of Things (IoT)|Internet of Things]], applications. These can include sensors on taxis that send out location data every 30 seconds, or temperature sensors around a data center to help optimize heating and cooling. Pub/Sub is a distributed messaging service that can receive messages from various device streams, such as gaming events, IoT devices, and application streams. The name is short for Publisher/Subscriber, or Publish Messages to Subscribers. After messages have been captured from the streaming input sources, you need a way to pipe that data into a data warehouse for analysis. This is where Dataflow comes in. Dataflow creates a pipeline to process both streaming data and batch data. Process, in this case, refers to the steps to extract, transform, and load data, sometimes referred to as ETL. A popular solution for pipeline design is Apache Beam. It's an open source, unified programming model to define and execute [[Data Processing]] pipelines, including ETL, batch, and stream processing. Dataflow handles much of the complexity for infrastructure setup and maintenance, and is built on [[Google]]'s infrastructure.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/pub-sub-and-dataflow?u=76281980&t=94)** This product allows for reliable auto scaling to meet data pipeline demands. Dataflow is serverless and fully managed. [[Serverless Computing]] means that software developers can build and run applications without having to provision or manage the backend infrastructure. For example, [[Google Cloud Platform (GCP)|Google Cloud]] manages infrastructure tasks on behalf of the users, like resource provisioning, [[Performance Tuning]], and ensuring pipeline reliability. And a fully managed environment is one where software can be deployed, monitored, and managed without needing an operations team. You can create this environment by using automation tools and technologies. Using a serverless and fully managed solution like Dataflow means that you can spend more time analyzing the insights from your data sets, and less time provisioning resources to ensure your pipeline will successfully complete its next cycles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (2), [[Data Ingestion]] (1), [[Internet of Things (IoT)|Internet of things]] (1), [[Data Processing]] (1), [[Google]] (1)
> **Definitions:** means that (2), is a  (1), short for (1), refers to (1)
> **Env Vars:** etl (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** apache (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course summary](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/course-summary?u=76281980&t=0)** - [Instructor] This brings us to the end of the "Exploring [[Data Transformation]] with [[Google Cloud Platform (GCP)|Google Cloud]]" course. Let's do a quick recap. In the first section of the course, "The Value of Data," you learned how data generates business insights and drives decision making, basic [[Data Management]] concepts like [[Databases]], data warehouses, and [[Data Lakes]], how organizations can create value by using their current data, collecting new data, and sourcing data externally, how the cloud unlocks business value from all types of data, including structured data and previously untapped, [[Unstructured Data]], about the data value chain from the initial creation of data to data activation, and the importance that [[Data Governance]] plays in a successful data journey. In the second section of the course, "Google Cloud Data Management Solutions," you learned about Google Cloud data management options and the differences between them, about the different storage classes available with [[Cloud Storage]], how to choose the right storage product to meet the needs of your organization, and ways an organization can migrate and/or modernize their current database in the cloud. Finally, in the third section of the course, "Making Data Useful and Accessible," you learned how Looker makes it easy for a workforce to access the data they need when they need it, how streaming analytics in real time can make data more useful, and about two Google Cloud [[Microsoft Products|products]]
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-2-exploring-data-transformation-with-google-cloud/course-summary?u=76281980&t=92)** that modernize [[Data Pipelines]], Pub/Sub, and Dataflow. Now that you've had a comprehensive introduction to data transformation, move on to the next course in the series, "Innovating with Google Cloud [[Artificial Intelligence (AI)|Artificial Intelligence]]," where you'll learn about the fundamentals of artificial intelligence and machine learning, selecting Google Cloud [[AI Solutions]], and building and using Google Cloud AI solutions. We'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (7), [[Data Management]] (3), [[Data Transformation]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[AI Solutions]] (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Google Cloud]]

## Skills Covered

- Data Transformation
- Google Cloud Platform (GCP)

## Path Context

### In [[Prepare for the Google Cloud Digital Leader Certification]]
← [[Google Cloud Digital Leader Cert Prep 1 Digital Transformation With Google Cloud]] | **2 of 6** | [[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]] →

## Appears In

- [[Prepare for the Google Cloud Digital Leader Certification]]

## Related Courses

_Courses sharing skills:_

- [[Leveraging Google Cloud Developer and DevOps Tools]] — Google Cloud Platform (GCP)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Google Cloud Platform (GCP)
- [[Google Cloud Data and Storage Foundations]] — Google Cloud Platform (GCP)
- [[Google Cloud Security for Beginners- Tools and Services]] — Google Cloud Platform (GCP)
- [[Google Cloud Foundations]] — Google Cloud Platform (GCP)

---

[↑ Back to top](#)