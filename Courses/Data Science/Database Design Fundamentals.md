---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: database-design-fundamentals
url: "https://www.linkedin.com/learning/database-design-fundamentals"
level: Intermediate
updated: 12/2/2025
learners: 5834
skills:
  - Database Design
  - Data Science
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQG3YG1PnztMgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726865430823?e=2147483647&amp;v=beta&amp;t=Fsg45aB4K7tM992N75wEaavYd9SOO5CbFxK4QUVN5lU"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Storage]]'
next_courses:
  - '[[Relational Databases Essential Training]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Storage","position":1,"total":6,"prev":null,"next":"Relational Databases Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/database-design
  - skill/data-science
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Database%20Design%20Fundamentals.md)

![Database Design Fundamentals](https://media.licdn.com/dms/image/v2/D4E0DAQG3YG1PnztMgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726865430823?e=2147483647&amp;v=beta&amp;t=Fsg45aB4K7tM992N75wEaavYd9SOO5CbFxK4QUVN5lU)

# Database Design Fundamentals

> Understanding how to design databases effectively can be a game-changer—both for your current work and for your future career. In this course, get an overview of why database design is essential. Instructor Melody Zacharias covers the different types of designs—OLAP and OLTP—then expands on and explains why OLTP is the focus of the course. Melody then details the different normal forms and why the

> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals) | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [AI-ready data: Learning database design for success](#ai-ready-data-learning-database-design-for-success)
  - [What you should know](#what-you-should-know)
- [**1. Database Design Basics**](#1-database-design-basics) (4 videos)
  - [Types of relational databases](#types-of-relational-databases)
  - [Database schemas](#database-schemas)
  - [Entity relationship diagrams](#entity-relationship-diagrams)
  - [Relational database design basics](#relational-database-design-basics)
- [**2. Data Relationships and Collations**](#2-data-relationships-and-collations) (3 videos)
  - [Determining primary keys](#determining-primary-keys)
  - [Different data relationships](#different-data-relationships)
  - [Collation and character sets](#collation-and-character-sets)
- [**3. Data Normalization**](#3-data-normalization) (4 videos)
  - [First normal form](#first-normal-form)
  - [Second normal form](#second-normal-form)
  - [Third normal form](#third-normal-form)
  - [Normalization from BCNF to 6NF](#normalization-from-bcnf-to-6nf)
- [**4. Understanding the Physical Relational Design**](#4-understanding-the-physical-relational-design) (8 videos)
  - [Data types that are key to relational databases](#data-types-that-are-key-to-relational-databases)
  - [How rows and columns impact database design](#how-rows-and-columns-impact-database-design)
  - [Types of relationships](#types-of-relationships)
  - [Defining primary keys](#defining-primary-keys)
  - [Automatically increment a field](#automatically-increment-a-field)
  - [The importance of foreign keys](#the-importance-of-foreign-keys)
  - [What is a null?](#what-is-a-null)
  - [Naming convention importance in relational databases](#naming-convention-importance-in-relational-databases)
- [**5. How Developments in AI Affect Database Design**](#5-how-developments-in-ai-affect-database-design) (3 videos)
  - [Architectural overview for AI](#architectural-overview-for-ai)
  - [Designing for AI](#designing-for-ai)
  - [Considerations for AI: Unstructured data and analytics](#considerations-for-ai-unstructured-data-and-analytics)
- [**6. Final Project**](#6-final-project) (2 videos)
  - [Final project setup: Design your own database](#final-project-setup-design-your-own-database)
  - [Final project walkthrough: Design your own database](#final-project-walkthrough-design-your-own-database)
- [**Conclusion**](#conclusion) (1 videos)
  - [Empower your world: Innovate, act, transform](#empower-your-world-innovate-act-transform)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [AI-ready data: Learning database design for success](https://www.linkedin.com/learning/database-design-fundamentals/ai-ready-data-learning-database-design-for-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/ai-ready-data-learning-database-design-for-success?u=76281980&t=0)** - [Melody] Have you ever wondered how [[Databases]] are designed behind the scenes? Whether you're starting a new project or looking to add to an existing system, it can be daunting to know where to begin. Or maybe you're interested in AI and you've heard that [[Data Preparation]], cleaning, integration, and organization takes up to 80% of the time in an AI project. This crucial step is deeply rooted in solid relational [[Database Design]]. My name is Melody Zacharias, and with over 20 years of experience teaching students about data, I'm here to guide you from zero to hero in relational database design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (2), [[Databases]] (1), [[Data Preparation]] (1)
> **Speakers:** - [melody] (1)

#### [What you should know](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a beginner course in fundamental [[Database Design]]. It is designed to get you started in understanding what you need to know to start designing [[Relational Databases]]. We will not be covering what you need to know for designing [[Data Lakes]] and [[Big Data]], but it is certainly an excellent and simple foundation to support that type of learning. This is a great course if you have an interest in changing careers into any data-related field. This is a solid foundational course that gives you the basics. Additionally, if you have a raft of spreadsheets at work that are overwhelming you and you think that if you could just find a better way to organize that data, you could get better insights out of it, then this is the next step for you. There are many exciting paths that can lead to the world of database design. Sometimes, it can be to just fill in the gaps after being what is called an accidental DBA or database administrator for a few years. You will find a spreadsheet application useful to follow along with the exercises in the course. I will be using [[Microsoft Excel|Excel]], but any of these will work, and we'll end the course with a final project, where you will put your learning into practice and design your very own database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (2), [[Relational Databases]] (1), [[Data Lakes]] (1), [[Big Data]] (1), [[Microsoft Excel|Excel]] (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** find (2)
> **Env Vars:** dba (1)
> **Speakers:** - [instructor] (1)


### 1. Database Design Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of relational databases](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=0)** - [Instructor] For example, did you know that [[Microsoft Excel|Excel]] spreadsheets can be a table in a database? Many people start their [[Database Design]] careers because they have an issue at work that gets them overwhelmed with too many Excel spreadsheets. It's a problem that needs to be solved, and [[Databases]] are a logical, easy solution. When solving a problem, the best way to resolve it is to start with the problem. The common issues from Excel type data problems can be solved with a few standard types of relational database styles. They are online transactional processing, OLTP; online analytical processing, OLAP; and hybrid transactional analytical processing, HTAP. Each of these are typically used for different use cases. Online transactional processing is used for the parts of business systems that have high levels of operational data. This is typically the transactional part of OLTP, as the name signifies. This design is particularly efficient at transactional processing. Consider a payment processing company, like Visa, on a Black Friday and how many trillion transactions they do every second. Those transactions are not just writing transactions to the database, but reading transactions, as well, constantly checking balances, verifying PIN codes, and doing fraud checking.
>
> **[1:35](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=95)** Reporting from OLTP databases are typical row and column type reports with standard column and pie charts. Online analytical processing is a different type of processing. This type of data is typically considered analytical data accumulated for analysis purposes. It is often time-related and is often manipulated in multiple ways before it lands in its final resting form. This is referred to as extract, transform, and load, ETL; or sometimes extract, load, and transform, ELT. Many newer systems and the former can be far easier for end users to understand, faster to process and query with less rerunning due to errors. OLAP systems are very popular with analytical processing of [[Big Data]], [[Dashboards]], large data, for machine learning pre-processing, data analysis, AI, and much more. HTAP systems are hybrid transactional analytical systems and were designed to bring the best of both systems and allow for quick processing by enabling in-memory technologies to increase the processing speeds of high-volume of OLTP transactions, To improve OLAP processing,
>
> **[3:09](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=189)** column store features are often added to allow for [[Forecasting]] and simulations to be more scalable. In this course, we will focus on OLTP systems, not only as it makes for good foundation of design, but because relational systems still make up the majority of business use cases today. This course's design basics serve as a good foundation for all of these different types of databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Databases]] (3), [[Database Design]] (1), [[Big Data]] (1), [[Dashboards]] (1)
> **Env Vars:** oltp (5), olap (3), htap (2), pin (1), etl (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Database schemas](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=0)** - [Instructor] A schema is a simple yet powerful model used by organizations of all types and sizes for a broad variety of information needs. [[Relational Databases]] are used to track inventories, process [[E-Commerce]] transactions, and manage huge amounts of mission-critical customer information. There are two common database schema designs: star and [[Snowflake]]. As their name suggests, their designs often look like visual representations of a star and a snowflake. A star schema is a simple schema design in which a single fact table is connected to one or more dimension tables. The star and snowflake schemas are used in OLAP designs, and are not a part of this course, but are noted due to how easy it is to confuse the names in this section. When we are talking about relational databases, we refer to a schema as the ability to manage groups of information in a database into a schema. For relational databases, the schema is far simpler. It is a hierarchical or top-down in nature. Designing a schema is an important skill when designing [[Databases]]. It is a critical functional part of defining the scope, and is often done after consultation with business owners and subject matter experts. Schemas are primarily used to define business needs
>
> **[1:36](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=96)** and align data to those needs. A full business analysis of not just the data, but of how the data is and will be used, should be conducted before any designing is done. This helps with understanding and will guide the decision process in the design. Not all those decisions are covered in this course. Depending on the business decisions made, it may be determined that it is important that the [[Human Resources (HR)|human resources]] person, production, purchasing, and sales data need to be separated for business data reasons, as is the case seen here. This can be done, for example, in this case, by department. However, in large organizations, this is sometimes done by business division.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (3), [[Snowflake]] (3), [[E-Commerce]] (1), [[Databases]] (1), [[Human Resources (HR)|Human resources]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** olap (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Entity relationship diagrams](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=0)** - [Instructor] In the last video, we looked at how to separate data into sections called schemas, groups of data that have like characteristics. You were able to do this easily because you knew your data well. You are what the industry calls a subject matter expert. These are people who are relied upon for their knowledge and expertise in an area, because they have tribal knowledge that is typically not documented and is simply acquired by years of experience at a company or in an industry or position. This type of knowledge helps determine the critical next steps for knowing your data and the relationships between the data. Either as the subject matter expert or as the technical expert, in conjunction with the subject matter expert or experts, the next steps is to collect all the relevant data that is related to the project. That includes reports, data fields you may be currently using, documents, [[Forms]], and even manual processes that feed into what you are currently doing or will need to feed into, or augment with what you will need to accomplish. Be very specific with this information in your understanding of it. The easiest way to do this is make it into a game like when I was a kid, because I love data and discovering things. When you come across each piece of collateral, when you pick it up, ask it the following questions, who are you?
>
> **[1:34](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=94)** What do you do? Where do you come from? When are you used? Are you important? If so, why? With these questions, you'll be on your way to being a data whisperer in no time. Reviewing the data and the individual pieces of collateral is a critical time for the stakeholders to come together and finalize specific data requirements and types of information that need to be stored. It is an opportunity to discuss security, [[Privacy]], and regulation requirements for the data, understand any [[Data Processing]] and reporting needs to ensure the data can integrate with other systems, [[Hardware]], networks, and your team is up-to-date on any outstanding requests or requirements. Once the data has been reviewed, it is time to evaluate any changes to what was missed. In transformation, there is chaos and that can cause cracks in the foundation. This step is added to reevaluate, stop, think, check without bias. Take some time to review these and possibly more questions. Any that you and your team may feel are needed to evaluate and may have slipped through the narrow cracks. Some of the important questions to ask can be what forms
>
> **[3:12](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=192)** or processes and inputs will go into the database? What additional data are you wanting and do not have now? How is the data being used now? How will that change, if at all, going forward? What additional data do you want? Where is it and where does it come from? Once the review is done, a logical design of how the data entities relate to each other and the entity relationship they have with other business [[Data Structures]] at a high level, can be drawn. This is a logical design referred to as an ERD or Entity Relationship Diagram. An ERD helps identify business processes and elements and can help define the physical design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[Privacy]] (1), [[Data Processing]] (1), [[Hardware]] (1), [[Data Structures]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** erd (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Relational database design basics](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=0)** - [Instructor] The key differences between logical and physical database models is that logical data models define the data elements in their relationships. Focusing on the business requirements, and how the data should be structured. They provide an abstract, high level view of the data without regard for how they will be physically implemented. Logical data models use entity relationship diagrams to represent entities, attributes, and relationships to show the data is related. In contrast, physical data models define the actual implementation details of the database, such as the specific tables, columns, data types, and storage structures. Physical data models are often tailored to the specific [[Database Management]] system or management system type, and focusing on optimizing performance and storage for that system. The logical model or entity relationship diagram is done first by the business analysts and data architects to fully understand the business flow, requirements, inputs, outflows, and the data. The physical data model is derived from the logical model by the database and the data architect and administrators, and implemented into the specific database management system. The key benefits of the logical data models
>
> **[1:36](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=96)** are that they help identify and improve business processes, enable better description of data elements, minimize the risk of implementing bad models, and support data reuse and sharing. The benefits of physical data models is that it provides a visual representation of the database structure, is used to translate the logical model into the database schema, can be used to optimize performance through indexing, normalization, and [[Storage Management]]. And is a guide to use for ongoing database maintenance and updates. Together, the logical and physical models work to fully understand business and the data. Data without business meaning is just raw facts. When combined with business meaning, we get information, and when joined collectively into reports with other information, we create knowledge. And that can be used to make decisions. Discovery is critical to [[Database Design]]. And depending on the role of the person making the discovery, this may require one or many people. Depending on the size of the company, if you have a logical database to work from, you need less people. If you do not, you need to include business people, as well as ensure no business rules are broken in the design.
>
> **[3:07](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=187)** And ideally, you can improve some business functions in the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Management]] (2), [[Storage Management]] (1), [[Database Design]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Data Relationships and Collations

[↑ Back to Table of Contents](#table-of-contents)

#### [Determining primary keys](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=0)** - [Instructor] A primary key is a unique identifier of related data. It is used to uniquely identify a row in the table. The key aspect of a primary key are that they are uniquely identifiable. Each instance of an identity can be uniquely identified. They are not, and it is important that they do not, contain nulls. Primary keys must always contain a value. This means that they are not empty entries at any time. They also must be stable. They also cannot be a value that changes. Stability is very important. Instability makes it difficult to maintain referential integrity. In the long run it can cause performance issues. Composite keys are keys that are combinations of multiple entities. Avoid composite keys when possible. It would be like combining your house number and your street name to make an ideal address because it makes it unique to your street, but not necessarily unique to an entire table. Simple common data types are ideal. Consider the performance and storage implications of the chosen data type. Consider surrogate keys. These are keys that are independent of the data and can be easily made into auto incrementing keys. They are discussed in another independent video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Different data relationships](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=0)** - [Instructor] Relationships in data are defined by how the data is related to each other. The basics of a one-to-one relationship is that one piece of data is related to one and only one other piece of data in another table. For example, each employee only has one passport. This data is sensitive. You may keep it in a separate file to keep security tight. The data does not change often and is not accessed often. The more common type of relationship is the one-to-many, where there are multiple matching rows in the table for each single in the primary table. An example of this is each customer has multiple orders. The many-to-many relationship is where each side of the relationship can have multiple rows of data. Each of the tables has multiple pieces of related data. When data like this is encountered by an architect in a designing situation, this is when you would often normalize to reduce the complexity of the data. By reducing the complexity to remove the overlapping data and connecting the data with foreign keys, we ensure that it is associated as needed by completely removing any duplication and complexity.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Collation and character sets](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=0)** - [Instructor] We have discussed many of the different aspects of data. Essentially the pieces of the data that make up [[Databases]]. These are all foundational pieces, very important and critical to the design. I'm going to discuss one more item that is important to consider when you complete your architecture and move from the design to the build phase, just like when building a house. As when building a house, this is very foundational and difficult to change after the fact, and is specific to set and setting. Like a foundation of mud and straw is fine for a dry, hot climate, but not for a wet and cold one, different collations and character sets are appropriate for different situations. Collation defines how characters are compared to each other and sorted. It is critical to sorting and searching. It affects case and accent sensitivity. When comparing items, it is critical to know if an uppercase A will or will not match with a lowercase A. When your data contains accents, it is important to know if the letters with and without the accents will match. The collation you choose has specific rules for the ordering of these characters. These are the more common and basic collations, the first being the case-insensitive,
>
> **[1:35](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=95)** allowing items to match regardless of case. This is a common use when importing legacy data, for example, as it is a very forgiving collation. Character sets, or sometimes referred to char sets, are how the data is stored in the database. Each character is assigned a unique binary code. The most common are listed here, with UTF-8 and ASCII being used most often. UTF-8, a variable-width character encoding for Unicode, capable of encoding over 1 million valid character code points in Unicode using one to four 8-bit bytes, is chosen for its universal usability in character set and compatibility. Whereas ASCII represents English characters using 7-bit binary numbers. It's limited to 128 characters, but is often chosen for its compactness. These choices have consequences. As characters take up space, character sets affect the amount of storage. UTF-8 uses one to four bytes per character, whereas UTF-16 uses two to four bytes. The amount of storage is less important to a logical design,
>
> **[3:13](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=193)** but immensely important to physical design. When data retrieval in comparison will matter, pay attention to the collation and how data is sorted, and be sure to choose the right character set for your data. For international applications, UTF-8 is a good choice due to its wide character support. Keep in mind that certain collations can be slower than others due to the complexity of the comparison rules. For example, utf8_unicode_ci versus utf8_general_ci. There are always choices of give and take. Choose the right character set for your data. Doing this wrong will lead to incorrect results. Select an appropriate collation based on your sorting and comparison needs. For example, use utf8_general_ci for case-insensitive applications and utf8_bin for case-sensitive ones. Be consistent with character sets and collations across your data set to avoid conversion issues. Test performance impacts when dealing with large data sets and complex collations. Understanding and properly configuring character sets
>
> **[4:47](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=287)** and collations is crucial for maintaining [[Data Integrity]], performance, and correct query results in a database system. In the age of AI, many of the challenges of AI come back to the data. Storage of data in a public cloud can be very expensive. Moving it on and off premises is expensive. Moving it through pipelines and through to the GPUs consistently and quickly can be challenging. This is why the choice of the character set and collation is just as important as it ever was. We are moving to an age of AI and [[Unstructured Data]], but that does not mean we should be sloppy in our design and attention to detail of data. This is standard default for the entire database, if not overwritten specifically by another command, which is both cumbersome and awkward. Making sure the default is correct for the majority of use cases is critical to [[Database Design]]. It is a matter of making choices that suit the solution optimally with the most latitude for future growth and adaptability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Data Integrity]] (1), [[Unstructured Data]] (1), [[Database Design]] (1)
> **Env Vars:** utf (5), ascii (2)
> **Definitions:** is a  (4)
> **Analogies:** for example (3), just like (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Data Normalization

[↑ Back to Table of Contents](#table-of-contents)

#### [First normal form](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=0)** - [Presenter] In the last chapter, we looked at data relationships. Now we are going to use those relationships to build out our [[Data Architecture]]. When data is given to an architect, it is similar to the raw materials that any builder or artist has to work with. They don't look anything like the final product will. The first step in wrangling data is investigating the raw product from the users, collecting the reports, documents, and data from all sources, and cross-referencing them to see what data is available and needed. On occasion, you have data already given to you, but you do not know how clean, accurate, or valid it is. All data, regardless of the source, needs to be evaluated and reviewed together for accuracy, duplication, and completeness. Finding your data in all that information is no easy task. Begin by making a list and cross-referencing it is the easiest way to narrow down the fields that are needed. It is the easiest way to get to a single D-duplicated list of fields. Keep note of all the different names and locations that the same file is located in to make later data cleansing easier. Find fields by using the [[Forms]]
>
> **[1:33](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=93)** and data you are given by the business and that you find in your research. For example, here in this order form, you will find the customer name, email, phone number, and address to get you started. Be sure to write down all the fields and where they came from, so you can find out more about the data later if you need to. It's not uncommon for a field on a report to say something like status, but not have any frame of context. At the time the report was written, it was obvious, but it may not be obvious now. The field use may have changed or it may no longer be in use at all. Once you have determined the fields you need, it is time to place them into unique groupings and apply the normalization rules for optimal performance. For first normal form, you want to start by eliminating repeating groups and create individual tables, and then identify the individual sets of related data and create a primary key for it. A good example of this is the customer data. Start with customer name, email, phone, and address. These fields collectively create the related data of the customer, individually, starting with the customer name. It is typical that on forms like the one we looked at, for it to not be in atomic form or single value form, we need
>
> **[3:08](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=188)** to split it apart into first name and last name when we architect it to reach the atomic form. The email address and phone number are not multi-entry fields, so we're sufficient as they are. Address, however, is another field that is typically found in a non-atomic state. We need to split this one up as well to convert it to an atomic state. The most common way to do this is with the address, city, state, province, and zip code, postal code fields. We have covered a lot of ground. Let's review the rules. We have eliminated the repeating groups for the customer table, created the tables for customer data, and now we need a primary key, so we add a customer ID to uniquely identify the row.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[Data Architecture]] (1)
> **CLI Commands:** find (4), make (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Second normal form](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=0)** - [Narrator] In the last video, we looked at first normal form. Now we're going to build on that in second normal form. Let's start with the rules. The important factors for second normal form are to separate the values that apply to multiple records. On the left, you see, we have customer data that still has the order data included in it. Order data is not directly related to the customer. It needs to be separated, so we create two separate lists that contain the data. One for customer data to wrangle all the data related only to customers and separate out into a separate list the order data. When we put that data into its own table, we need to ensure it has a primary key, so we create an order ID to ensure it is unique and unchanging. Review each data item that goes into the order list. Look at each item and say, does this relate to the order ID? Each item needs to relate to the order primary key, or it needs to go into a different list. If it does not relate to the primary key, remove it. When you are confident, you have only fields related to the primary key, then you are ready to include related fields. We start with a customer ID. This is the primary key of the customer table,
>
> **[1:35](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=95)** and it is a foreign key in the order table, and that's second normal form. Let's review our rule. Data of different types, such as customers and orders need to be separated, however, they still need to be connected. This is done with foreign key. The keys allow the data to stay connected without being duplicated.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Third normal form](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=0)** - [Instructor] Next, let's look at the third normal form, which is most commonly used in business. Let's start with the rules. The most important factor for third normal form is to eliminate fields that do not depend on the primary key. Where the third normal form is different from the second can feel nuanced. The difference is between related and connected. What does this mean? If we look specifically at the order data here, what I have done is separated out the order item data and created an additional list. This list separates out order item data because the order item data is related to the order, making it second normal form. However, it is not directly connected to the order, in that it can be broken down into a lower format. It can be broken down into smaller parts. Third normal form requires that every non-key attribute is directly dependent on the primary key and nothing else. This means eliminating fields that do not depend on the primary key. In this case, it translates in this example into an order item table to factor out the multiple items that are not directly dependent on the order. With an order item ID,
>
> **[1:35](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=95)** that leaves order ID and quantity to relate back to the order. To stay in third normal form, you would keep the customer table as is, with city, state or province, and zip code or postal code. The city and the customer table is already dependent on the customer. So to reach what is called Boyce-Codd normal form, which we'll cover more in the next video, we remove the fields that are related to the address that are not related to the customer directly. This gives us the additional city and state tables, an additional table that will combine the tables with keys. This is rarely done in business, as this type of data is combined so often that the repetitiveness of combining it would slow systems down. It is far more performant to just leave the data in third normal form. This diagram shows us a typical implementation of the [[Databases]] we just looked at. It is in complete third normal state, as city, state, and zip code are still in the customer table. This is a common design in modern databases for the sake of query speed and data access. It is important to know the rules of the normal [[Forms]] and also the reasons when and why they are followed. This is the typical rule learned when designing databases.
>
> **[3:13](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=193)** The third normal form will almost always be the most desirable state, just like it is most desirable to cross the road at a crosswalk. However, just like if you were in the middle of a highway in the middle of nowhere and there is no traffic and no crosswalk, then you just cross the road. Sometimes you do not use the highest normal form, and that is okay. Judgment calls based on the size of the data and how often you are joining the data are often the contributing factors in making the determination. Once again, we have covered a lot. Let's review. The important factor for third normal form is to eliminate fields that do not depend on the primary key. The distinction between the second and third normal forms can be subtle, involving the nuances between being related and being connected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Forms]] (2)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** just like (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Normalization from BCNF to 6NF](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=0)** - [Instructor] The majority of the time [[Databases]] are not normalized beyond third normal form. So why are there other [[Forms]] of normalization and what is the point? Boyce-Codd normal form is a table in third normal form that has anomalies due to composite keys. It is an extension of the third normal form and is applied to avoid certain types of redundancies not handled by the third normal form. An example of this, suppose we have a table with a composite key where some non-prime attributes are dependent on a part of the composite key. Boyce-Codd normal form would require restructuring to eliminate such partial dependencies. The fourth normal form is a table in Boyce-Codd normal form that has no multivalued dependencies other than a candidate key. You would apply fourth normal form when you encounter tables with multivalued dependencies, such as where one attribute depends on another set of attributes, but independently of other attributes. Applying fourth normal form would remove redundancies caused by these multivalued dependencies. Yes, this is a little confusing. Here's an example. If a table records student enrollment in courses and participation in extracurricular activities independently, you'd use fourth normal form
>
> **[1:36](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=96)** to separate these two into different tables. A table is in fifth normal form if it is in fourth normal form and cannot be decomposed into smaller tables without losing information or introducing redundancy. Fifth normal form is often used in complex scenarios where data is highly interrelated and you want to eliminate redundancy arising from joining dependencies. In a database tracking employees, projects, and skills where each employee can have multiple skills for different projects. Fifth normal form helps ensure that splitting this information across tables does not introduce redundancy or require complex joins. Sixth normal form deals with temporal databases where you want to separate time dependent data to allow for effective temporal querying. Sixth normal form is primarily used in specialized cases like [[Data Warehousing]] or systems that were require detailed historical tracking. A table tracking employee salaries over time might benefit from sixth normal form by splitting the temporal aspects into separate tables for better query performance. Key considerations for using higher normal forms include careful monitoring
>
> **[3:10](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=190)** of [[Data Integrity]] to reduce redundancy and ensure that the data maintains its integrity without unnecessary duplication. Higher normalization can lead to more complex queries with multiple joins potentially impacting performance. You need to balance normalization with performance considerations, especially for heavy read systems, apply higher normal forms based on the specific [[Data Structures]] and relationships within your database. For example, Boyce-Codd normal form might be sufficient for most [[Relational Databases]] while fifth normal form and sixth normal form are more specialized. In practice, many databases remain in third normal form or Boyce-Codd normal form, as these are often sufficient for most applications. However, understanding higher normal forms gives you the tools to handle complex data structures and relationships as needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (4), [[Databases]] (3), [[Data Warehousing]] (1), [[Data Integrity]] (1), [[Relational Databases]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)


### 4. Understanding the Physical Relational Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Data types that are key to relational databases](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=0)** - [Presenter] I cannot mention enough how important it is knowing and understanding your data. It is likely, in the era of AI, the most important skill any professional in the wider field will have as an an advantage over any other human or AI as our workforce changes. Take a look at this image. It looks like a 3. Now, is it a 3 or a 3.0? Now it looks a little different. There is a gap at the top. Is it a 3? Would you wonder if it is a 3.0? Now we have some color. Do we consider the color is relevant? This rendition of the data has the 3 on a blue background, and there is no top to the 3. Note now, I am calling it a rendition of the data. I am no longer at all confident it is a 3. This, without any other context, appears far more like an image than a numeric piece of data. I have mentioned how important data types are to the [[Data Integrity]] and optimization of [[Database Management]] and the performance of physical [[Databases]]. There are specific character types, such as CHAR, VARCHAR, and TEXT, for different databases, but these are general data types that are common to [[Relational Databases]] as a whole. Fixed-length strings are efficient for storage,
>
> **[1:34](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=94)** but can waste space if values vary significantly in length. Variable-length strings are more flexible and space-efficient for varying lengths. These strings are implemented in physical databases with CHAR, VARCHAR, and TEXT data types. It's important to choose correctly between integer, float, double, or decimal when implementing a physical database. The data integrity and the data that is critical to your business should always be kept in the front of your mind beyond just the rules. For example, if there are numerical fields that are needed to two decimal places, consider if those fields will be used in calculations. You may want to keep more decimal places so that when displayed, they can be rounded when displayed to two decimal places without having the data compromised by a rounding error. Binary data can be fixed, variable, or BLOB, which is a large binary object type. BLOB data types are not common any longer as they are not very performant in relational databases. They're most often seen in unstructured databases that would now more typically be stored in an attached S3 store. However, there are many historical databases that still have them.
>
> **[3:08](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=188)** An example use case would be real estate photos. The photos would typically be stored in a BLOB. However, they are more often now stored in attached S3 unstructured storage, so that the photos in this case can be stored in their larger size and resolution without concern for space or loss of resolution. Date and time data types enforce valid date and time values. For example, they prevent the entry of invalid dates like February 30th. Date and time fields are stored in a more efficient format than character or number fields. This reduces the storage space required and improves performance, especially with large datasets. Databases offer a wide range of built-in functions that can be used with date and time fields, such as date arithmetic, adding or subtracting days, months, or extracting parts of the date, the year, the month, the day, and formatting dates for display. These data types often include support for time zones and cultural differences in date and time formatting, which would be challenging to handle manually using character or number fields. Date and time fields can automatically adapt to different international formats,
>
> **[4:43](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=283)** ensuring that data is presented correctly based on the user's locale. Data is commonly moved around and different relational database management systems may have variations in data type support. Ensure compatibility if you plan to migrate or integrate with other systems. Adhering to [[SQL]] standards for data types to enhance portability across different RDBMSs can be a good way to future-proof your system. A database architect must carefully choose data types based on storage requirements, performance needs, data integrity, compatibility, [[Scalability]], and specific application requirements. Understanding the implications of each helps in designing efficient and robust databases, but ultimately understanding your data and how it will be used is what will ensure you make the correct decisions. The specific types of data characters you choose for each data type will be chosen specifically when you choose your physical implementation. Each version of SQL, the language of many relational databases, can have slightly different implementation options based on which provider you choose. For example, Oracle uses PL/SQL, a different version of SQL, than [[Microsoft SQL Server]], which uses T-SQL, yet they both adhere to the same ANSI SQL standards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (7), [[SQL]] (6), [[Data Integrity]] (3), [[Relational Databases]] (3), [[Database Management]] (2)
> **Env Vars:** sql (7), blob (3), char (2), varchar (2), text (2)
> **Analogies:** for example (3), such as (2)
> **Definitions:** is a  (4)
> **SQL:** varchar (2)
> **Versions:** 3.0 (2)
> **CLI Commands:** make (1)
> **Speakers:** - [presenter] (1)

#### [How rows and columns impact database design](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=0)** - [Instructor] When designing a database, there are several different types of structures you can use depending on your data and how you intend to use it. The most common design is the relational database, which organizes data into tables primarily by row, which we have been discussing. However, other designs like columnar [[Databases]] are also important. A columnar database, also known as a column-oriented database, stores data by columns rather than by rows. It is optimized for running analytical queries on large datasets. Columnar databases [[Microsoft Excel|excel]] at performing operations like aggregations, filtering, and summarizing data across records, making them faster, more efficient for these tasks. These databases are often used in [[Data Warehousing]] environments where the primary use case is reading and analyzing data rather than frequent updates or transactions. If you're dealing with large volumes of data that need to be processed in bulk, such as log analytics or time series data, columnar databases can be very efficient. An example of this is stock trading. Traders often need to calculate running averages, moving sums, or other aggregations on massive streams of data. Dimensional databases are designed around a data model
>
> **[1:34](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=94)** that uses facts and dimensions. Facts represent measurable events, like sales, and dimensions represent the context for those facts, like time, location, or product. The dimensional databases are ideal for OLAP systems, which are used for complex queries and reporting. They allow users to perform multidimensional analysis, such as slicing and dicing data, drilling down into details, and rolling up summaries. Dimensional databases are best for complex queries, and multidimensional analysis, often used in [[Business Intelligence (BI)|business intelligence]] and data warehousing environments. An example of this is where the treasury department of a bank is responsible for managing the bank's liquidity, ensuring it has enough liquid assets to meet its obligations while optimizing the return on excess cash. To do this, they need to analyze various factors, such as cashflow forecasts, interest rates, currency exposure, and performance of different asset classes. The treasury team needs to analyze data across multiple dimensions, such as time, daily, monthly, yearly, product types, bonds, loans, deposits, geographic regions, and currencies. A dimensional database allows them to slice and dice
>
> **[3:10](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=190)** this data to understand the impact of different factors on liquidity. Business intelligence databases are often used in BI environments, where the goal is to analyze data from different perspectives to support [[Decision-Making]]. Like columnar databases, these data warehouses are dimensional databases that are common in data warehousing. However, they focus on how data is modeled to support flexible querying. Examples you may be familiar with by name would be [[Snowflake]] or [[Microsoft SQL Server]] Analysis Services. These support star schema and snowflake schemas, which are common dimensional database designs that we talked about earlier. Each type of [[Database Design]] has its strengths. So the choice depends on the specific use case, whether you prioritize data retrieval speed, the complexity of queries, or the volume and type of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (10), [[Data Warehousing]] (3), [[Business Intelligence (BI)|Business intelligence]] (2), [[Snowflake]] (2), [[Microsoft Excel|Excel]] (1)
> **Analogies:** such as (4)
> **Env Vars:** olap (1), sql (1)
> **Cross-References:** we talked about (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Types of relationships](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980&t=0)** - [Instructor] Relationships in [[Databases]] describe how the data is related between the tables. Tables can have two different types of relationships; either one-to-one, a record in one table is related to a single record in another table, for example, a person and their passport, or one to many, a record in one table can be related to multiple records in another table, for example, a customer can place many orders. In [[Database Design]] and entity relationship diagrams, or ERDs, the one side of the relationship is depicted with a straight line or a single bar. The many side is depicted with a crow's foot symbol, which looks like a branching set of three lines. Relationships are crucial in database design and understanding, because they ensure [[Data Integrity]], reduce redundancy, and facilitate efficient retrieval of data. Through the relationships, the rules of primary and foreign key constraints and consistency are enforced.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (2), [[Databases]] (1), [[Data Integrity]] (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Defining primary keys](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=0)** - [Instructor] The most common and easiest way to ensure unique rows in a table is a unique identifier. This is often but not always the primary key. The first normal form specified that the data has to be unique in each row. A primary key is a unique identifier for each row in a table that can ensure no duplicates and cannot contain a null value, a null value being the absence of a value. The options for a primary key are to find one that already exists in the data you have, or to create a net new column. The balance comes in trying to determine if the added column and data it adds justifies the need. Characteristics to look for in a natural primary key are pieces of data that would create a natural key. They are values that have the key traits of primary keys just discussed. They can be single value or a combination of data pieces that can create a composite key. If a natural or composite key cannot be found due to the nature of the data itself, it changes, or it is personal, identifiable, in any way, or just does not fit the definition of a primary key, then a surrogate key is the ideal option.
>
> **[1:36](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=96)** Most often, a surrogate key is the best option, with the cost of storage and compute being relatively low in comparison to the complexity of [[Data Privacy]] and other challenges that come with natural keys. If you were choosing a natural key, composite, or surrogate key, the important thing to remember is to ensure uniqueness. Make sure the key is never null. And when at all possible, keep it simple, efficient, and consistent. What does simple, efficient, and consistent mean, and why would that be important? It all relates to performance. Modern [[Relational Databases]] create indexes on primary keys. This index allows the database to skip full-table scans and use more efficient index searching methods, significantly speeding up query performance for select statements that involve primary key columns. For performance, we normalize to ensure the data we need is in the right places. If we put a surrogate key on it, the data will be indexed with a numeric key that we will not outgrow. This is particularly important for high-volume transactional environments with read and write transactions that are critical. While primary keys improve query performance, they can also introduce some overhead during insert and update operations. Maintaining the index associated with a primary key
>
> **[3:11](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=191)** requires additional resources, which can slow down these operations slightly, especially if the primary key is not used in queries. Using the primary key in queries is key to fast data retrieval.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Privacy]] (1), [[Relational Databases]] (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Automatically increment a field](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=0)** - [Instructor] Auto incrementing keys provide a unique identifier for each row in a table, which is crucial for maintaining [[Data Integrity]] and establishing relationships between tables. This unique identifier is automatically generated, reducing the risk of human error in key assignment. This is often the best option for the primary key, but is not always the primary key. The benefit of performance efficiency is that numeric keys, such as those generated by auto increment, are generally more efficient for database operations compared to string based keys. This is because numeric comparisons are faster than string comparisons leading to improved query performance. Using an integer for primary key rather than a longer string or composite key saves space in the database. This can be significant when dealing with large data sets. Assuming the data does not already exist in the table, giving space efficiency savings. Auto-incrementing primary keys simplifies the process of adding new rows to a table simplifying [[Data Management]]. Users do not need to manually manage the primary key values, which reduces the complexity and potential for errors. These keys are independent of the actual data in the table, meaning the changes to the data do not affect the primary key.
>
> **[1:34](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=94)** This stability is beneficial for maintaining consistent references across the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (1), [[Data Management]] (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [The importance of foreign keys](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=0)** - [Instructor] A foreign key in a relational database is like a link or a bridge between two tables. Here you have two tables in a database, one table called "Customer", and the other called "Order". The Customer table could have a column for customer ID, which uniquely identifies each customer. The Order table might have its own columns like order ID and date, and it also has a column called customer ID. The customer ID in the orders table is a foreign key. It points to the customer ID in the customers table. This connection allows you to link an order to the customer who made it. In simple terms, a foreign key is a way to connect related data across different tables, ensuring that the relationships between the data are accurate. In a relational database, this is an entity that establishes a link between data and two tables. It is used to maintain referential integrity within the database by ensuring that the value in the foreign key column corresponds to an existing value in the primary key column of another table. This relationship is often described as a parent-child relationship where the table containing the primary key is the parent and the table with the foreign key is the child.
>
> **[1:36](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=96)** Foreign keys enforce referential integrity by ensuring that a foreign key value must match an existing primary key value in the reference table. This constraint ensures that any changes to the data in the primary key table do not invalidate the foreign key references. By linking tables, foreign keys help streamline data sets and promote efficiency in data retrieval and management. They allow for efficient querying and sorting of data across related tables without duplicating data. They're often included in indexes to speed up data access.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [What is a null?](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=0)** - [Instructor] In [[Database Design]], a NULL represents the absence of a value in a particular field or column. Imagine you're filling out a form and there's a question you don't have an answer to, so you leave it blank. In a database, that blank space is represented by a NULL. It's different from a zero, an empty string or any other value. NULL specifically means "no value." For example, if you're tracking someone's age, a value of zero means the person is a newborn, while NULL means their age is unknown. Special behavior in queries happen when you have a NULL. When you run searches or calculations in a database, NULL values are treated differently. For example, if you try to add numbers together and one of them is a NULL, the result will be a NULL value because the database can't calculate with a missing value. When designing a database, it's important to keep [[Data Integrity]] in mind at all times. It is easy to make a decision that you will make every field in your database mandatory so that you will never have NULL fields. That way, you never have to deal with them in calculations later. This all-or-nothing thinking is rarely the answer. If you force users to enter data in a field that is mandatory to continue on, they're easily tempted to enter bad data
>
> **[1:35](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=95)** or false data to just move on. This is how bad data is created, and leads to a cycle of garbage in, garbage out. Often the best answer is to design for the best outcome that creates the cleanest, most correct data you can get.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (1), [[Data Integrity]] (1)
> **Env Vars:** null (9)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Naming convention importance in relational databases](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=0)** - [Instructor] Standard naming conventions for [[Relational Databases]] help maintain consistency, clarity, and ease of understanding across the database. To make the readability easier, avoid abbreviations unless they are well-known and unambiguous, industry or company specific. Whatever conventions you choose, apply them consistently throughout the database. If a convention has been started already, do not change it. Consistency is more important than conforming to any particular standard. It will just cause confusion. Avoid using [[SQL]] reserved words as names, things like select or where. Table names use singular nouns or plural nouns. The key is consistency, such as customer and order or customers and orders. Do not mix them. Do not have customer, but use orders or vice versa. The case is also important. Use either lowercase, Pascal, or camel case, but be consistent. Avoid spaces, but the use of an underscore is fine. Descriptive words are encouraged and preferred over abbreviations. Column names should be descriptive, but concise. Avoid unnecessary prefixes like TBL underscore
>
> **[1:39](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=99)** or COL underscore unless there is a specific reason. Use lowercase or Pascal following the convention used for table names. For primary keys, use ID or table name underscore ID. For example, customer underscore ID to indicate a primary key. Name the foreign keys with related table name underscore ID. For consistency, ensure you use the same naming as the primary key naming convention. These conventions help make the database structure more intuitive and maintainable, especially in collaborative environments. They make updates easier and long-term maintenance easier. Any integrations with other data will also be easier to bring in or export as well as prepare for any future changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[SQL]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (1), tbl (1), col (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)


### 5. How Developments in AI Affect Database Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Architectural overview for AI](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=0)** - [Instructor] Architecting for an AI environment is as important as a relational environment. This field is far newer, and many enterprises are just starting their journey. They do not have standardized best practices on how things should be done. When relational models touch AI, enterprises usually follow the relational standards their corporations have set. When designing a relational database, especially for use in an AI environment, leveraging the right tools can significantly enhance the efficiency and quality of the design process. Consider using professional tools for designing entire systems. Some common tools for entity relationship diagrams are, [[MySQL]] Workbench offers comprehensive tools for [[Database Design]], [[SQL]] development and [[Database Administration]]. [[Microsoft]] Visio is popular for creating ER diagrams and other visual representations of [[Data Structures]]. Lucidchart is a cloud-based tool that supports collaborative database [[Diagramming]] and design. ER/Studio is a tool for [[Data Modeling]], especially in large, complex environments. And dbForge Studio provides ER diagram capabilities along with SQL coding, [[Database Management]] and administration tools. [[Metadata]] Management is a key architectural tool for AI,
>
> **[1:35](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=95)** enabling the effective use of a data catalog to manage integrated data. It helps track [[Data Lineage]], ensure [[Data Governance]], and provide context for AI models, which are crucial for explainability and compliance. The current trend in AI maturity is that governments are looking at governance and compliance of AI on top of the data and governance that is currently in place on data and security. Having a centralized location for this tracking is prudent. Security and compliance is an important part of the design, especially in large AI systems. Techniques like data masking, encryption and access control, are integrated into the database design to ensure that data is both accessible and secure. This has to be balanced with other options for security. There are counter options to balance the full performance loss. As a whole, [[Data Integration]] is a foundational element in database design for scalable AI. It ensures that AI models have access to high-quality, diverse data at scale, while also maintaining performance, security and compliance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (3), [[SQL]] (2), [[MySQL]] (1), [[Database Administration]] (1), [[Microsoft]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** sql (2)
> **CLI Commands:** mysql (1)
> **Code Identifiers:** dbforge (1)
> **Speakers:** - [instructor] (1)

#### [Designing for AI](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=0)** - [Instructor] [[Data Integration]] is crucial in designing [[Databases]] for scalable AI performance. It involves combining data from different sources into a unified view, essential for training AI models. Unified data access is what will ensure that you have future-proofed your design. You can not predict the future, but you can design for it in a flexible fashion. This means a design of data integration that allows for the creation of a centralized repository where data from various sources, like transactional databases, logs, third-party APIs, and more, can be stored and accessed efficiently. This unified access is critical for AI models that need consistent, clean, and comprehensive datasets. Choosing the right tools for [[Real-Time]] [[Data Processing]] is streaming data integration that requires real-time data, like those in [[Predictive Analytics]] or autonomous systems. Data integration must support streaming data. Tools like [[Apache Kafka]] or Amazon Kinesis can be used to integrate and process real-time data, feeding it directly into AI pipelines. The right tool for the right data is key to designing data stores for AI. There are different data stores, each making a marked difference
>
> **[1:32](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=92)** in the [[Scalability]] and performance. Be sure to choose the right database for the right type of data. Distributed databases are used to handle large-scale data integration for AI. Distributed databases, like Apache Cassandra, [[MongoDB]], [[Google]] Bigtable, or [[Microsoft Azure|Azure]] Cosmos DB, are often used. These databases are designed to scale horizontally, allowing them to manage massive datasets without sacrificing performance. For columnar and dimensional data models for AI workloads, choosing the right database model is key. For instance, columnar databases, like Apache HBase, can be more efficient for read-heavy AI tasks, while dimensional models, the Star and [[Snowflake]] schema, are better suited for analytical queries. For data partitioning and sharding to deal with scalability in databases, what is often needed is to partition or shard data across multiple nodes. Proper integration ensures that these partitions are handled correctly, enabling efficient data retrieval and processing. Considerations for adding tables to an existing database, like schema consistency, ensure new tables align with the existing schema and naming conventions to maintain consistency. The impact on existing workflows, such as considering how to add new tables,
>
> **[3:08](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=188)** might affect an existing ETL process, such as queries and applications, allow you to plan for updating or refactoring where necessary, ensuring that testing and validation is done before fully integrating with new tables and testing their performance and compatibility with existing database operations and AI workflows. By considering these factors, you can design a relational database that not only supports current AI needs, but is also flexible and scalable enough to accommodate future developments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (7), [[Data Integration]] (5), [[Real-Time]] (3), [[Scalability]] (2), [[Data Processing]] (1)
> **CLI Commands:** apache (3)
> **Analogies:** such as (2), for instance (1)
> **Env Vars:** etl (1)
> **Speakers:** - [instructor] (1)

#### [Considerations for AI: Unstructured data and analytics](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=0)** - [Instructor] [[Data Quality]] is one of the most important considerations to keep in mind at all times when working in data. Ensure mechanisms are in place to clean and pre-process data before it's ingested into the database. High quality, consistent data is crucial for effective AI model training. Implement caching mechanisms to reduce the load on the database during intensive AI processing tasks, especially for read heavy operations whenever possible. This is a performance consideration that will support consistent throughput to the GPUs. Implement data versioning strategies to track changes to data sets over time, which is crucial for reproducibility in AI experiments. Get to know your data. Almost every aspect of architecting, designing, and [[Performance Tuning]] data is easier if you know every aspect of your data. This means how it is used, how it is stored, the quantitative, as well as the qualitative aspects of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1), [[Performance Tuning]] (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 6. Final Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Final project setup: Design your own database](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=0)** - [Instructor] Welcome to our [[Database Design]] Fundamentals Final Project. I'm going to walk you through the setup of the project so you're set up for success. This project is designed to allow you to use a sample report to determine the typical design of a logical database based on data given from a user. This is a common way data is gathered from users along with interviews and discussions. This is the workbook for the final project. We have left in much of the information from chapter three for reference so that you have a starting point to work from. The challenge will start in tab Salesperson and Product where you will choose your fields. In the next few tabs, going through each of the normal [[Forms]], I've left spaces for you to choose where to place information. Just to give you a few hints. And always remember to refer back to the rules at the top of each page. Ending with the exercise diagram at the end. This has been pre-populated with the work that we've done so far and you will add on to it with the work that you will do with Salesperson and Product. If you're having challenges, refer back to the sections of the course that cover that topic.
>
> **[1:33](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=93)** Join me in the next video to see how I design this database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (1), [[Forms]] (1)
> **Cross-References:** in the next (2)
> **Prerequisites:** setup (1), set up (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Final project walkthrough: Design your own database](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=0)** (soft upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=6)** - [Instructor] I hope you enjoyed working through the final project and designing your own database. Now, let's go through how I would approach this. The first steps are to review the product and salesperson. The salesperson only briefly noted in this form is a tricky concept. This is the one where the discovery process with a user and subject matter expert is very important. There is only a single field on the form, and it appears to be only a name field or maybe even a salesperson number field. It's up to the architecture designer to extrapolate that additional information that will be required and add in a few fields like name, email, phone number, and address that relate to the salesperson. The product characteristics are a bit easier to determine as they are listed on the order form in the details. Things such as size, price, quantity, variety, and status.
>
> **[1:18](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=78)** Using the rules of the first normal form for the salesperson, we eliminate the repeating groups and create separate tables for both the salesperson and the product data. Then identify and create a primary key. This looks much like we did with the customer, where the sales person's name needs to be separated into first and last names to give it a single value for the field to create the atomic requirement. We make the assumption again that we are only saving single values of emails and phone numbers. If there are business requirements for multiples, then other considerations may need to be made. Let's move on to the second normal form. These records are all directly related to the primary key, so they can stay in their tables. Both tables now satisfy the rule of second normal form. The final stage is the third normal form. Eliminate any field that does not depend on the primary key where it makes sense and is appropriate. These records for both tables relate to the primary key, so it can stay in this format to satisfy third normal form.
>
> **[2:51](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=171)** And then, here is our diagram. A final visual of the full outline of the [[Database Design]]. Starting with the customer table, we designed it with a customer ID as an independent key. Customers can have one or more orders that are connected to a single sales person. Each order can have many items, and each product that exists can be associated with many orders. Each salesperson can create many orders, each order can have many items, and each product can be in many order items. And that's it. Congratulations on completing this project. Hope you had fun with it and now have a better understanding of the fundamentals of database design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Empower your world: Innovate, act, transform](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=0)** - [Melody] Congratulations! You designed a full database. That's an accomplishment. Great work. When I did that in college, we were in a room of about 30 students. We had finished an entire exercise of turning data into the third normal form and then an ERD diagram. When the professor asked us if we had liked the exercise, it was a clear 30/70 split. 30% liked it, and 70 did not. The 30% of us that did went on to be data professionals or programmers, and the others changed to other professions. If this course spoke to you, then data may be something you want to explore more of. The data community is a vibrant community of thousands of professionals worldwide and one of the most welcoming professional communities I have ever heard of and certainly experienced. Feel free to reach out to me and connect on [[LinkedIn]], but also connect locally with your local user group if there is one. User groups can be found at aka.ms/datacommunity. I look forward to hearing about your [[Database Design]] successes and new roles in data on LinkedIn. Until next time, empower your world, innovate, act, and transform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Database Design]] (1)
> **Env Vars:** erd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [melody] (1)


## Resources

- Exercise files available

## Skills Covered

- Database Design
- Data Science

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Storage]]
**1 of 6** | [[Relational Databases Essential Training]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Storage]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — Database Design
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — Database Design
- [[Advanced SQL for Data Science- Time Series]] — Data Science
- [[Lessons from Data Scientists]] — Data Science
- [[Big Data in the Age of AI]] — Data Science

---

[↑ Back to top](#)