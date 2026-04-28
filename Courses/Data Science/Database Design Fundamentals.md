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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Database%20Design%20Fundamentals.md)

![Database Design Fundamentals](https://media.licdn.com/dms/image/v2/D4E0DAQG3YG1PnztMgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726865430823?e=2147483647&amp;v=beta&amp;t=Fsg45aB4K7tM992N75wEaavYd9SOO5CbFxK4QUVN5lU)

# Database Design Fundamentals

> Understanding how to design databases effectively can be a game-changer—both for your current work and for your future career. In this course, get an overview of why database design is essential. Instructor Melody Zacharias covers the different types of designs—OLAP and OLTP—then expands on and explains why OLTP is the focus of the course. Melody then details the different normal forms and why the

> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals) | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Database Design Basics** (4 videos)
- **3. 2. Data Relationships and Collations** (3 videos)
- **4. 3. Data Normalization** (4 videos)
- **5. 4. Understanding the Physical Relational Design** (8 videos)
- **6. 5. How Developments in AI Affect Database Design** (3 videos)
- **7. 6. Final Project** (2 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### AI-ready data: Learning database design for success
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/ai-ready-data-learning-database-design-for-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/ai-ready-data-learning-database-design-for-success?u=76281980&t=0)** - [Melody] Have you ever wondered how databases are designed behind the scenes?
>
> **[0:04](https://www.linkedin.com/learning/database-design-fundamentals/ai-ready-data-learning-database-design-for-success?u=76281980&t=4)** Whether you're starting a new project or looking to add to an existing system, it can be daunting to know where to begin.
>
> **[0:12](https://www.linkedin.com/learning/database-design-fundamentals/ai-ready-data-learning-database-design-for-success?u=76281980&t=12)** Or maybe you're interested in AI and you've heard that data preparation, cleaning, integration, and organization takes up to 80% of the time in an AI project.
>
> **[0:25](https://www.linkedin.com/learning/database-design-fundamentals/ai-ready-data-learning-database-design-for-success?u=76281980&t=25)** This crucial step is deeply rooted in solid relational database design.
>
> **[0:32](https://www.linkedin.com/learning/database-design-fundamentals/ai-ready-data-learning-database-design-for-success?u=76281980&t=32)** My name is Melody Zacharias, and with over 20 years of experience teaching students about data, I'm here to guide you from zero to hero in relational database design.

> [!info]- Semantic Content
>
> **Speakers:** - [melody] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a beginner course in fundamental database design.
>
> **[0:04](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=4)** It is designed to get you started in understanding what you need to know to start designing relational databases.
>
> **[0:12](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=12)** We will not be covering what you need to know for designing data lakes and big data, but it is certainly an excellent and simple foundation to support that type of learning.
>
> **[0:25](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=25)** This is a great course if you have an interest in changing careers into any data-related field.
>
> **[0:32](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=32)** This is a solid foundational course that gives you the basics.
>
> **[0:37](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=37)** Additionally, if you have a raft of spreadsheets at work that are overwhelming you and you think that if you could just find a better way to organize that data, you could get better insights out of it, then this is the next step for you.
>
> **[0:53](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=53)** There are many exciting paths that can lead to the world of database design.
>
> **[0:59](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=59)** Sometimes, it can be to just fill in the gaps after being what is called an accidental DBA or database administrator for a few years.
>
> **[1:10](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=70)** You will find a spreadsheet application useful to follow along with the exercises in the course.
>
> **[1:16](https://www.linkedin.com/learning/database-design-fundamentals/what-you-should-know?u=76281980&t=76)** I will be using Excel, but any of these will work, and we'll end the course with a final project, where you will put your learning into practice and design your very own database.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** find (2)
> **Env Vars:** dba (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Database Design Basics

#### Types of relational databases
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=0)** - [Instructor] For example, did you know that Excel spreadsheets can be a table in a database?
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=6)** Many people start their database design careers because they have an issue at work that gets them overwhelmed with too many Excel spreadsheets.
>
> **[0:15](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=15)** It's a problem that needs to be solved, and databases are a logical, easy solution.
>
> **[0:22](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=22)** When solving a problem, the best way to resolve it is to start with the problem.
>
> **[0:27](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=27)** The common issues from Excel type data problems can be solved with a few standard types of relational database styles.
>
> **[0:36](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=36)** They are online transactional processing, OLTP; online analytical processing, OLAP; and hybrid transactional analytical processing, HTAP.
>
> **[0:51](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=51)** Each of these are typically used for different use cases.
>
> **[0:54](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=54)** Online transactional processing is used for the parts of business systems that have high levels of operational data.
>
> **[1:02](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=62)** This is typically the transactional part of OLTP, as the name signifies.
>
> **[1:07](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=67)** This design is particularly efficient at transactional processing.
>
> **[1:13](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=73)** Consider a payment processing company, like Visa, on a Black Friday and how many trillion transactions they do every second.
>
> **[1:22](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=82)** Those transactions are not just writing transactions to the database, but reading transactions, as well, constantly checking balances, verifying PIN codes, and doing fraud checking.
>
> **[1:35](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=95)** Reporting from OLTP databases are typical row and column type reports with standard column and pie charts.
>
> **[1:46](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=106)** Online analytical processing is a different type of processing.
>
> **[1:50](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=110)** This type of data is typically considered analytical data accumulated for analysis purposes.
>
> **[1:57](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=117)** It is often time-related and is often manipulated in multiple ways before it lands in its final resting form.
>
> **[2:05](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=125)** This is referred to as extract, transform, and load, ETL; or sometimes extract, load, and transform, ELT.
>
> **[2:18](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=138)** Many newer systems and the former can be far easier for end users to understand, faster to process and query with less rerunning due to errors.
>
> **[2:30](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=150)** OLAP systems are very popular with analytical processing of big data, dashboards, large data, for machine learning pre-processing, data analysis, AI, and much more.
>
> **[2:46](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=166)** HTAP systems are hybrid transactional analytical systems and were designed to bring the best of both systems and allow for quick processing by enabling in-memory technologies to increase the processing speeds of high-volume of OLTP transactions, To improve OLAP processing, column store features are often added to allow for forecasting and simulations to be more scalable.
>
> **[3:17](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=197)** In this course, we will focus on OLTP systems, not only as it makes for good foundation of design, but because relational systems still make up the majority of business use cases today.
>
> **[3:30](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relational-databases?u=76281980&t=210)** This course's design basics serve as a good foundation for all of these different types of databases.

> [!info]- Semantic Content
>
> **Env Vars:** oltp (5), olap (3), htap (2), pin (1), etl (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Database schemas
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=0)** - [Instructor] A schema is a simple yet powerful model used by organizations of all types and sizes for a broad variety of information needs.
>
> **[0:10](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=10)** Relational databases are used to track inventories, process e-commerce transactions, and manage huge amounts of mission-critical customer information.
>
> **[0:21](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=21)** There are two common database schema designs: star and snowflake.
>
> **[0:26](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=26)** As their name suggests, their designs often look like visual representations of a star and a snowflake.
>
> **[0:34](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=34)** A star schema is a simple schema design in which a single fact table is connected to one or more dimension tables.
>
> **[0:43](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=43)** The star and snowflake schemas are used in OLAP designs, and are not a part of this course, but are noted due to how easy it is to confuse the names in this section.
>
> **[0:55](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=55)** When we are talking about relational databases, we refer to a schema as the ability to manage groups of information in a database into a schema.
>
> **[1:06](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=66)** For relational databases, the schema is far simpler.
>
> **[1:10](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=70)** It is a hierarchical or top-down in nature.
>
> **[1:15](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=75)** Designing a schema is an important skill when designing databases.
>
> **[1:20](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=80)** It is a critical functional part of defining the scope, and is often done after consultation with business owners and subject matter experts.
>
> **[1:32](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=92)** Schemas are primarily used to define business needs and align data to those needs.
>
> **[1:40](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=100)** A full business analysis of not just the data, but of how the data is and will be used, should be conducted before any designing is done.
>
> **[1:51](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=111)** This helps with understanding and will guide the decision process in the design.
>
> **[1:57](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=117)** Not all those decisions are covered in this course.
>
> **[2:01](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=121)** Depending on the business decisions made, it may be determined that it is important that the human resources person, production, purchasing, and sales data need to be separated for business data reasons, as is the case seen here.
>
> **[2:19](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=139)** This can be done, for example, in this case, by department.
>
> **[2:24](https://www.linkedin.com/learning/database-design-fundamentals/database-schemas?u=76281980&t=144)** However, in large organizations, this is sometimes done by business division.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (1)
> **Code Keywords:** case, (1)
> **Env Vars:** olap (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Entity relationship diagrams
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=0)** - [Instructor] In the last video, we looked at how to separate data into sections called schemas, groups of data that have like characteristics.
>
> **[0:10](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=10)** You were able to do this easily because you knew your data well.
>
> **[0:13](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=13)** You are what the industry calls a subject matter expert.
>
> **[0:17](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=17)** These are people who are relied upon for their knowledge and expertise in an area, because they have tribal knowledge that is typically not documented and is simply acquired by years of experience at a company or in an industry or position.
>
> **[0:33](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=33)** This type of knowledge helps determine the critical next steps for knowing your data and the relationships between the data.
>
> **[0:41](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=41)** Either as the subject matter expert or as the technical expert, in conjunction with the subject matter expert or experts, the next steps is to collect all the relevant data that is related to the project.
>
> **[0:55](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=55)** That includes reports, data fields you may be currently using, documents, forms, and even manual processes that feed into what you are currently doing or will need to feed into, or augment with what you will need to accomplish.
>
> **[1:11](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=71)** Be very specific with this information in your understanding of it.
>
> **[1:17](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=77)** The easiest way to do this is make it into a game like when I was a kid, because I love data and discovering things.
>
> **[1:25](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=85)** When you come across each piece of collateral, when you pick it up, ask it the following questions, who are you?
>
> **[1:34](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=94)** What do you do?
>
> **[1:37](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=97)** Where do you come from?
>
> **[1:40](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=100)** When are you used?
>
> **[1:43](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=103)** Are you important?
>
> **[1:46](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=106)** If so, why?
>
> **[1:48](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=108)** With these questions, you'll be on your way to being a data whisperer in no time.
>
> **[1:56](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=116)** Reviewing the data and the individual pieces of collateral is a critical time for the stakeholders to come together and finalize specific data requirements and types of information that need to be stored.
>
> **[2:10](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=130)** It is an opportunity to discuss security, privacy, and regulation requirements for the data, understand any data processing and reporting needs to ensure the data can integrate with other systems, hardware, networks, and your team is up-to-date on any outstanding requests or requirements.
>
> **[2:33](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=153)** Once the data has been reviewed, it is time to evaluate any changes to what was missed.
>
> **[2:39](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=159)** In transformation, there is chaos and that can cause cracks in the foundation.
>
> **[2:45](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=165)** This step is added to reevaluate, stop, think, check without bias.
>
> **[2:54](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=174)** Take some time to review these and possibly more questions.
>
> **[2:59](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=179)** Any that you and your team may feel are needed to evaluate and may have slipped through the narrow cracks.
>
> **[3:07](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=187)** Some of the important questions to ask can be what forms or processes and inputs will go into the database?
>
> **[3:16](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=196)** What additional data are you wanting and do not have now?
>
> **[3:23](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=203)** How is the data being used now?
>
> **[3:26](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=206)** How will that change, if at all, going forward?
>
> **[3:31](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=211)** What additional data do you want?
>
> **[3:34](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=214)** Where is it and where does it come from?
>
> **[3:40](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=220)** Once the review is done, a logical design of how the data entities relate to each other and the entity relationship they have with other business data structures at a high level, can be drawn.
>
> **[3:52](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=232)** This is a logical design referred to as an ERD or Entity Relationship Diagram.
>
> **[3:59](https://www.linkedin.com/learning/database-design-fundamentals/entity-relationsip-diagrams?u=76281980&t=239)** An ERD helps identify business processes and elements and can help define the physical design.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** erd (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Relational database design basics
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=0)** - [Instructor] The key differences between logical and physical database models is that logical data models define the data elements in their relationships.
>
> **[0:09](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=9)** Focusing on the business requirements, and how the data should be structured.
>
> **[0:13](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=13)** They provide an abstract, high level view of the data without regard for how they will be physically implemented.
>
> **[0:21](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=21)** Logical data models use entity relationship diagrams to represent entities, attributes, and relationships to show the data is related.
>
> **[0:33](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=33)** In contrast, physical data models define the actual implementation details of the database, such as the specific tables, columns, data types, and storage structures.
>
> **[0:46](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=46)** Physical data models are often tailored to the specific database management system or management system type, and focusing on optimizing performance and storage for that system.
>
> **[1:00](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=60)** The logical model or entity relationship diagram is done first by the business analysts and data architects to fully understand the business flow, requirements, inputs, outflows, and the data.
>
> **[1:18](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=78)** The physical data model is derived from the logical model by the database and the data architect and administrators, and implemented into the specific database management system.
>
> **[1:32](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=92)** The key benefits of the logical data models are that they help identify and improve business processes, enable better description of data elements, minimize the risk of implementing bad models, and support data reuse and sharing.
>
> **[1:52](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=112)** The benefits of physical data models is that it provides a visual representation of the database structure, is used to translate the logical model into the database schema, can be used to optimize performance through indexing, normalization, and storage management.
>
> **[2:10](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=130)** And is a guide to use for ongoing database maintenance and updates.
>
> **[2:16](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=136)** Together, the logical and physical models work to fully understand business and the data.
>
> **[2:23](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=143)** Data without business meaning is just raw facts.
>
> **[2:27](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=147)** When combined with business meaning, we get information, and when joined collectively into reports with other information, we create knowledge.
>
> **[2:38](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=158)** And that can be used to make decisions.
>
> **[2:42](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=162)** Discovery is critical to database design.
>
> **[2:45](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=165)** And depending on the role of the person making the discovery, this may require one or many people.
>
> **[2:52](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=172)** Depending on the size of the company, if you have a logical database to work from, you need less people.
>
> **[2:59](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=179)** If you do not, you need to include business people, as well as ensure no business rules are broken in the design.
>
> **[3:07](https://www.linkedin.com/learning/database-design-fundamentals/realtional-database-design-basics?u=76281980&t=187)** And ideally, you can improve some business functions in the process.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (1), type, (1), require (1), from, (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Data Relationships and Collations

#### Determining primary keys
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=0)** - [Instructor] A primary key is a unique identifier of related data.
>
> **[0:04](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=4)** It is used to uniquely identify a row in the table.
>
> **[0:09](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=9)** The key aspect of a primary key are that they are uniquely identifiable.
>
> **[0:16](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=16)** Each instance of an identity can be uniquely identified.
>
> **[0:21](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=21)** They are not, and it is important that they do not, contain nulls.
>
> **[0:25](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=25)** Primary keys must always contain a value.
>
> **[0:28](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=28)** This means that they are not empty entries at any time.
>
> **[0:33](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=33)** They also must be stable.
>
> **[0:35](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=35)** They also cannot be a value that changes.
>
> **[0:39](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=39)** Stability is very important.
>
> **[0:41](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=41)** Instability makes it difficult to maintain referential integrity.
>
> **[0:46](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=46)** In the long run it can cause performance issues.
>
> **[0:50](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=50)** Composite keys are keys that are combinations of multiple entities.
>
> **[0:55](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=55)** Avoid composite keys when possible.
>
> **[0:58](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=58)** It would be like combining your house number and your street name to make an ideal address because it makes it unique to your street, but not necessarily unique to an entire table.
>
> **[1:09](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=69)** Simple common data types are ideal.
>
> **[1:12](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=72)** Consider the performance and storage implications of the chosen data type.
>
> **[1:18](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=78)** Consider surrogate keys.
>
> **[1:20](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=80)** These are keys that are independent of the data and can be easily made into auto incrementing keys.
>
> **[1:27](https://www.linkedin.com/learning/database-design-fundamentals/determining-primary-keys?u=76281980&t=87)** They are discussed in another independent video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Code Keywords:** type. (1)
> **Speakers:** - [instructor] (1)

#### Different data relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=0)** - [Instructor] Relationships in data are defined by how the data is related to each other.
>
> **[0:05](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=5)** The basics of a one-to-one relationship is that one piece of data is related to one and only one other piece of data in another table.
>
> **[0:17](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=17)** For example, each employee only has one passport.
>
> **[0:21](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=21)** This data is sensitive.
>
> **[0:23](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=23)** You may keep it in a separate file to keep security tight.
>
> **[0:27](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=27)** The data does not change often and is not accessed often.
>
> **[0:33](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=33)** The more common type of relationship is the one-to-many, where there are multiple matching rows in the table for each single in the primary table.
>
> **[0:44](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=44)** An example of this is each customer has multiple orders.
>
> **[0:50](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=50)** The many-to-many relationship is where each side of the relationship can have multiple rows of data.
>
> **[0:58](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=58)** Each of the tables has multiple pieces of related data.
>
> **[1:03](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=63)** When data like this is encountered by an architect in a designing situation, this is when you would often normalize to reduce the complexity of the data.
>
> **[1:16](https://www.linkedin.com/learning/database-design-fundamentals/different-data-relationships?u=76281980&t=76)** By reducing the complexity to remove the overlapping data and connecting the data with foreign keys, we ensure that it is associated as needed by completely removing any duplication and complexity.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Collation and character sets
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=0)** - [Instructor] We have discussed many of the different aspects of data.
>
> **[0:04](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=4)** Essentially the pieces of the data that make up databases.
>
> **[0:08](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=8)** These are all foundational pieces, very important and critical to the design.
>
> **[0:14](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=14)** I'm going to discuss one more item that is important to consider when you complete your architecture and move from the design to the build phase, just like when building a house.
>
> **[0:28](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=28)** As when building a house, this is very foundational and difficult to change after the fact, and is specific to set and setting.
>
> **[0:37](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=37)** Like a foundation of mud and straw is fine for a dry, hot climate, but not for a wet and cold one, different collations and character sets are appropriate for different situations.
>
> **[0:51](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=51)** Collation defines how characters are compared to each other and sorted.
>
> **[0:57](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=57)** It is critical to sorting and searching.
>
> **[1:00](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=60)** It affects case and accent sensitivity.
>
> **[1:04](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=64)** When comparing items, it is critical to know if an uppercase A will or will not match with a lowercase A.
>
> **[1:13](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=73)** When your data contains accents, it is important to know if the letters with and without the accents will match.
>
> **[1:22](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=82)** The collation you choose has specific rules for the ordering of these characters.
>
> **[1:29](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=89)** These are the more common and basic collations, the first being the case-insensitive, allowing items to match regardless of case.
>
> **[1:39](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=99)** This is a common use when importing legacy data, for example, as it is a very forgiving collation.
>
> **[1:49](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=109)** Character sets, or sometimes referred to char sets, are how the data is stored in the database.
>
> **[1:56](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=116)** Each character is assigned a unique binary code.
>
> **[2:01](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=121)** The most common are listed here, with UTF-8 and ASCII being used most often.
>
> **[2:09](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=129)** UTF-8, a variable-width character encoding for Unicode, capable of encoding over 1 million valid character code points in Unicode using one to four 8-bit bytes, is chosen for its universal usability in character set and compatibility.
>
> **[2:35](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=155)** Whereas ASCII represents English characters using 7-bit binary numbers.
>
> **[2:42](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=162)** It's limited to 128 characters, but is often chosen for its compactness.
>
> **[2:51](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=171)** These choices have consequences.
>
> **[2:54](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=174)** As characters take up space, character sets affect the amount of storage.
>
> **[2:59](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=179)** UTF-8 uses one to four bytes per character, whereas UTF-16 uses two to four bytes.
>
> **[3:08](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=188)** The amount of storage is less important to a logical design, but immensely important to physical design.
>
> **[3:18](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=198)** When data retrieval in comparison will matter, pay attention to the collation and how data is sorted, and be sure to choose the right character set for your data.
>
> **[3:29](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=209)** For international applications, UTF-8 is a good choice due to its wide character support.
>
> **[3:37](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=217)** Keep in mind that certain collations can be slower than others due to the complexity of the comparison rules.
>
> **[3:45](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=225)** For example, utf8_unicode_ci versus utf8_general_ci.
>
> **[3:55](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=235)** There are always choices of give and take.
>
> **[3:59](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=239)** Choose the right character set for your data.
>
> **[4:02](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=242)** Doing this wrong will lead to incorrect results.
>
> **[4:07](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=247)** Select an appropriate collation based on your sorting and comparison needs.
>
> **[4:13](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=253)** For example, use utf8_general_ci for case-insensitive applications and utf8_bin for case-sensitive ones.
>
> **[4:27](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=267)** Be consistent with character sets and collations across your data set to avoid conversion issues.
>
> **[4:36](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=276)** Test performance impacts when dealing with large data sets and complex collations.
>
> **[4:44](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=284)** Understanding and properly configuring character sets and collations is crucial for maintaining data integrity, performance, and correct query results in a database system.
>
> **[4:58](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=298)** In the age of AI, many of the challenges of AI come back to the data.
>
> **[5:04](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=304)** Storage of data in a public cloud can be very expensive.
>
> **[5:09](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=309)** Moving it on and off premises is expensive.
>
> **[5:13](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=313)** Moving it through pipelines and through to the GPUs consistently and quickly can be challenging.
>
> **[5:20](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=320)** This is why the choice of the character set and collation is just as important as it ever was.
>
> **[5:28](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=328)** We are moving to an age of AI and unstructured data, but that does not mean we should be sloppy in our design and attention to detail of data.
>
> **[5:39](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=339)** This is standard default for the entire database, if not overwritten specifically by another command, which is both cumbersome and awkward.
>
> **[5:50](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=350)** Making sure the default is correct for the majority of use cases is critical to database design.
>
> **[5:57](https://www.linkedin.com/learning/database-design-fundamentals/collation-and-character-sets?u=76281980&t=357)** It is a matter of making choices that suit the solution optimally with the most latitude for future growth and adaptability.

> [!info]- Semantic Content
>
> **Env Vars:** utf (5), ascii (2)
> **Definitions:** is a  (4)
> **Analogies:** for example (3), just like (1)
> **Code Keywords:** match. (1), case. (1), public (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Data Normalization

#### First normal form
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=0)** - [Presenter] In the last chapter, we looked at data relationships.
>
> **[0:04](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=4)** Now we are going to use those relationships to build out our data architecture.
>
> **[0:10](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=10)** When data is given to an architect, it is similar to the raw materials that any builder or artist has to work with.
>
> **[0:19](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=19)** They don't look anything like the final product will.
>
> **[0:23](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=23)** The first step in wrangling data is investigating the raw product from the users, collecting the reports, documents, and data from all sources, and cross-referencing them to see what data is available and needed.
>
> **[0:40](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=40)** On occasion, you have data already given to you, but you do not know how clean, accurate, or valid it is.
>
> **[0:48](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=48)** All data, regardless of the source, needs to be evaluated and reviewed together for accuracy, duplication, and completeness.
>
> **[1:02](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=62)** Finding your data in all that information is no easy task.
>
> **[1:07](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=67)** Begin by making a list and cross-referencing it is the easiest way to narrow down the fields that are needed.
>
> **[1:14](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=74)** It is the easiest way to get to a single D-duplicated list of fields.
>
> **[1:21](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=81)** Keep note of all the different names and locations that the same file is located in to make later data cleansing easier.
>
> **[1:31](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=91)** Find fields by using the forms and data you are given by the business and that you find in your research.
>
> **[1:38](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=98)** For example, here in this order form, you will find the customer name, email, phone number, and address to get you started.
>
> **[1:48](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=108)** Be sure to write down all the fields and where they came from, so you can find out more about the data later if you need to.
>
> **[1:56](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=116)** It's not uncommon for a field on a report to say something like status, but not have any frame of context.
>
> **[2:04](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=124)** At the time the report was written, it was obvious, but it may not be obvious now.
>
> **[2:09](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=129)** The field use may have changed or it may no longer be in use at all.
>
> **[2:16](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=136)** Once you have determined the fields you need, it is time to place them into unique groupings and apply the normalization rules for optimal performance.
>
> **[2:26](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=146)** For first normal form, you want to start by eliminating repeating groups and create individual tables, and then identify the individual sets of related data and create a primary key for it.
>
> **[2:39](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=159)** A good example of this is the customer data.
>
> **[2:43](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=163)** Start with customer name, email, phone, and address.
>
> **[2:49](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=169)** These fields collectively create the related data of the customer, individually, starting with the customer name.
>
> **[2:58](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=178)** It is typical that on forms like the one we looked at, for it to not be in atomic form or single value form, we need to split it apart into first name and last name when we architect it to reach the atomic form.
>
> **[3:17](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=197)** The email address and phone number are not multi-entry fields, so we're sufficient as they are.
>
> **[3:25](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=205)** Address, however, is another field that is typically found in a non-atomic state.
>
> **[3:32](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=212)** We need to split this one up as well to convert it to an atomic state.
>
> **[3:38](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=218)** The most common way to do this is with the address, city, state, province, and zip code, postal code fields.
>
> **[3:48](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=228)** We have covered a lot of ground.
>
> **[3:51](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=231)** Let's review the rules.
>
> **[3:53](https://www.linkedin.com/learning/database-design-fundamentals/first-normal-form?u=76281980&t=233)** We have eliminated the repeating groups for the customer table, created the tables for customer data, and now we need a primary key, so we add a customer ID to uniquely identify the row.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (1)
> **Code Keywords:** from, (1), let (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Second normal form
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=0)** - [Narrator] In the last video, we looked at first normal form.
>
> **[0:03](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=3)** Now we're going to build on that in second normal form.
>
> **[0:08](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=8)** Let's start with the rules.
>
> **[0:10](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=10)** The important factors for second normal form are to separate the values that apply to multiple records.
>
> **[0:18](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=18)** On the left, you see, we have customer data that still has the order data included in it.
>
> **[0:25](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=25)** Order data is not directly related to the customer.
>
> **[0:28](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=28)** It needs to be separated, so we create two separate lists that contain the data.
>
> **[0:34](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=34)** One for customer data to wrangle all the data related only to customers and separate out into a separate list the order data.
>
> **[0:45](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=45)** When we put that data into its own table, we need to ensure it has a primary key, so we create an order ID to ensure it is unique and unchanging.
>
> **[0:57](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=57)** Review each data item that goes into the order list.
>
> **[1:01](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=61)** Look at each item and say, does this relate to the order ID?
>
> **[1:07](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=67)** Each item needs to relate to the order primary key, or it needs to go into a different list.
>
> **[1:14](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=74)** If it does not relate to the primary key, remove it.
>
> **[1:18](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=78)** When you are confident, you have only fields related to the primary key, then you are ready to include related fields.
>
> **[1:28](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=88)** We start with a customer ID.
>
> **[1:31](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=91)** This is the primary key of the customer table, and it is a foreign key in the order table, and that's second normal form.
>
> **[1:41](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=101)** Let's review our rule.
>
> **[1:43](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=103)** Data of different types, such as customers and orders need to be separated, however, they still need to be connected.
>
> **[1:52](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=112)** This is done with foreign key.
>
> **[1:54](https://www.linkedin.com/learning/database-design-fundamentals/second-normal-form?u=76281980&t=114)** The keys allow the data to stay connected without being duplicated.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Third normal form
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=0)** - [Instructor] Next, let's look at the third normal form, which is most commonly used in business.
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=6)** Let's start with the rules.
>
> **[0:09](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=9)** The most important factor for third normal form is to eliminate fields that do not depend on the primary key.
>
> **[0:17](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=17)** Where the third normal form is different from the second can feel nuanced.
>
> **[0:22](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=22)** The difference is between related and connected.
>
> **[0:28](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=28)** What does this mean?
>
> **[0:30](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=30)** If we look specifically at the order data here, what I have done is separated out the order item data and created an additional list.
>
> **[0:42](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=42)** This list separates out order item data because the order item data is related to the order, making it second normal form.
>
> **[0:53](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=53)** However, it is not directly connected to the order, in that it can be broken down into a lower format.
>
> **[1:00](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=60)** It can be broken down into smaller parts.
>
> **[1:04](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=64)** Third normal form requires that every non-key attribute is directly dependent on the primary key and nothing else.
>
> **[1:14](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=74)** This means eliminating fields that do not depend on the primary key.
>
> **[1:19](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=79)** In this case, it translates in this example into an order item table to factor out the multiple items that are not directly dependent on the order.
>
> **[1:32](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=92)** With an order item ID, that leaves order ID and quantity to relate back to the order.
>
> **[1:44](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=104)** To stay in third normal form, you would keep the customer table as is, with city, state or province, and zip code or postal code.
>
> **[1:55](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=115)** The city and the customer table is already dependent on the customer.
>
> **[2:01](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=121)** So to reach what is called Boyce-Codd normal form, which we'll cover more in the next video, we remove the fields that are related to the address that are not related to the customer directly.
>
> **[2:15](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=135)** This gives us the additional city and state tables, an additional table that will combine the tables with keys.
>
> **[2:25](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=145)** This is rarely done in business, as this type of data is combined so often that the repetitiveness of combining it would slow systems down.
>
> **[2:35](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=155)** It is far more performant to just leave the data in third normal form.
>
> **[2:40](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=160)** This diagram shows us a typical implementation of the databases we just looked at.
>
> **[2:46](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=166)** It is in complete third normal state, as city, state, and zip code are still in the customer table.
>
> **[2:54](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=174)** This is a common design in modern databases for the sake of query speed and data access.
>
> **[3:01](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=181)** It is important to know the rules of the normal forms and also the reasons when and why they are followed.
>
> **[3:09](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=189)** This is the typical rule learned when designing databases.
>
> **[3:13](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=193)** The third normal form will almost always be the most desirable state, just like it is most desirable to cross the road at a crosswalk.
>
> **[3:22](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=202)** However, just like if you were in the middle of a highway in the middle of nowhere and there is no traffic and no crosswalk, then you just cross the road.
>
> **[3:33](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=213)** Sometimes you do not use the highest normal form, and that is okay.
>
> **[3:39](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=219)** Judgment calls based on the size of the data and how often you are joining the data are often the contributing factors in making the determination.
>
> **[3:49](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=229)** Once again, we have covered a lot.
>
> **[3:52](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=232)** Let's review.
>
> **[3:53](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=233)** The important factor for third normal form is to eliminate fields that do not depend on the primary key.
>
> **[4:01](https://www.linkedin.com/learning/database-design-fundamentals/third-normal-form?u=76281980&t=241)** The distinction between the second and third normal forms can be subtle, involving the nuances between being related and being connected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else. (1), case, (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** just like (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Normalization from BCNF to 6NF
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=0)** - [Instructor] The majority of the time databases are not normalized beyond third normal form.
>
> **[0:07](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=7)** So why are there other forms of normalization and what is the point?
>
> **[0:13](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=13)** Boyce-Codd normal form is a table in third normal form that has anomalies due to composite keys.
>
> **[0:20](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=20)** It is an extension of the third normal form and is applied to avoid certain types of redundancies not handled by the third normal form.
>
> **[0:30](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=30)** An example of this, suppose we have a table with a composite key where some non-prime attributes are dependent on a part of the composite key.
>
> **[0:42](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=42)** Boyce-Codd normal form would require restructuring to eliminate such partial dependencies.
>
> **[0:49](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=49)** The fourth normal form is a table in Boyce-Codd normal form that has no multivalued dependencies other than a candidate key.
>
> **[0:57](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=57)** You would apply fourth normal form when you encounter tables with multivalued dependencies, such as where one attribute depends on another set of attributes, but independently of other attributes.
>
> **[1:13](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=73)** Applying fourth normal form would remove redundancies caused by these multivalued dependencies.
>
> **[1:21](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=81)** Yes, this is a little confusing. Here's an example.
>
> **[1:25](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=85)** If a table records student enrollment in courses and participation in extracurricular activities independently, you'd use fourth normal form to separate these two into different tables.
>
> **[1:42](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=102)** A table is in fifth normal form if it is in fourth normal form and cannot be decomposed into smaller tables without losing information or introducing redundancy.
>
> **[1:56](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=116)** Fifth normal form is often used in complex scenarios where data is highly interrelated and you want to eliminate redundancy arising from joining dependencies.
>
> **[2:10](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=130)** In a database tracking employees, projects, and skills where each employee can have multiple skills for different projects.
>
> **[2:19](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=139)** Fifth normal form helps ensure that splitting this information across tables does not introduce redundancy or require complex joins.
>
> **[2:30](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=150)** Sixth normal form deals with temporal databases where you want to separate time dependent data to allow for effective temporal querying.
>
> **[2:41](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=161)** Sixth normal form is primarily used in specialized cases like data warehousing or systems that were require detailed historical tracking.
>
> **[2:51](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=171)** A table tracking employee salaries over time might benefit from sixth normal form by splitting the temporal aspects into separate tables for better query performance.
>
> **[3:05](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=185)** Key considerations for using higher normal forms include careful monitoring of data integrity to reduce redundancy and ensure that the data maintains its integrity without unnecessary duplication.
>
> **[3:20](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=200)** Higher normalization can lead to more complex queries with multiple joins potentially impacting performance.
>
> **[3:27](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=207)** You need to balance normalization with performance considerations, especially for heavy read systems, apply higher normal forms based on the specific data structures and relationships within your database.
>
> **[3:43](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=223)** For example, Boyce-Codd normal form might be sufficient for most relational databases while fifth normal form and sixth normal form are more specialized.
>
> **[3:54](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=234)** In practice, many databases remain in third normal form or Boyce-Codd normal form, as these are often sufficient for most applications.
>
> **[4:03](https://www.linkedin.com/learning/database-design-fundamentals/normalization-from-bcnf-to-6nf?u=76281980&t=243)** However, understanding higher normal forms gives you the tools to handle complex data structures and relationships as needed.

> [!info]- Semantic Content
>
> **Code Keywords:** require (3), this, (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Understanding the Physical Relational Design

#### Data types that are key to relational databases
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=0)** - [Presenter] I cannot mention enough how important it is knowing and understanding your data.
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=6)** It is likely, in the era of AI, the most important skill any professional in the wider field will have as an an advantage over any other human or AI as our workforce changes.
>
> **[0:19](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=19)** Take a look at this image.
>
> **[0:21](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=21)** It looks like a 3.
>
> **[0:23](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=23)** Now, is it a 3 or a 3.0?
>
> **[0:28](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=28)** Now it looks a little different.
>
> **[0:30](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=30)** There is a gap at the top.
>
> **[0:32](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=32)** Is it a 3?
>
> **[0:33](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=33)** Would you wonder if it is a 3.0?
>
> **[0:36](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=36)** Now we have some color.
>
> **[0:38](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=38)** Do we consider the color is relevant?
>
> **[0:42](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=42)** This rendition of the data has the 3 on a blue background, and there is no top to the 3.
>
> **[0:50](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=50)** Note now, I am calling it a rendition of the data.
>
> **[0:54](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=54)** I am no longer at all confident it is a 3.
>
> **[0:58](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=58)** This, without any other context, appears far more like an image than a numeric piece of data.
>
> **[1:06](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=66)** I have mentioned how important data types are to the data integrity and optimization of database management and the performance of physical databases.
>
> **[1:17](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=77)** There are specific character types, such as CHAR, VARCHAR, and TEXT, for different databases, but these are general data types that are common to relational databases as a whole.
>
> **[1:31](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=91)** Fixed-length strings are efficient for storage, but can waste space if values vary significantly in length.
>
> **[1:40](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=100)** Variable-length strings are more flexible and space-efficient for varying lengths.
>
> **[1:47](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=107)** These strings are implemented in physical databases with CHAR, VARCHAR, and TEXT data types.
>
> **[1:57](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=117)** It's important to choose correctly between integer, float, double, or decimal when implementing a physical database.
>
> **[2:05](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=125)** The data integrity and the data that is critical to your business should always be kept in the front of your mind beyond just the rules.
>
> **[2:15](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=135)** For example, if there are numerical fields that are needed to two decimal places, consider if those fields will be used in calculations.
>
> **[2:26](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=146)** You may want to keep more decimal places so that when displayed, they can be rounded when displayed to two decimal places without having the data compromised by a rounding error.
>
> **[2:39](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=159)** Binary data can be fixed, variable, or BLOB, which is a large binary object type.
>
> **[2:46](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=166)** BLOB data types are not common any longer as they are not very performant in relational databases.
>
> **[2:53](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=173)** They're most often seen in unstructured databases that would now more typically be stored in an attached S3 store.
>
> **[3:02](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=182)** However, there are many historical databases that still have them.
>
> **[3:08](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=188)** An example use case would be real estate photos.
>
> **[3:12](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=192)** The photos would typically be stored in a BLOB.
>
> **[3:15](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=195)** However, they are more often now stored in attached S3 unstructured storage, so that the photos in this case can be stored in their larger size and resolution without concern for space or loss of resolution.
>
> **[3:32](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=212)** Date and time data types enforce valid date and time values.
>
> **[3:38](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=218)** For example, they prevent the entry of invalid dates like February 30th.
>
> **[3:45](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=225)** Date and time fields are stored in a more efficient format than character or number fields.
>
> **[3:52](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=232)** This reduces the storage space required and improves performance, especially with large datasets.
>
> **[4:00](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=240)** Databases offer a wide range of built-in functions that can be used with date and time fields, such as date arithmetic, adding or subtracting days, months, or extracting parts of the date, the year, the month, the day, and formatting dates for display.
>
> **[4:22](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=262)** These data types often include support for time zones and cultural differences in date and time formatting, which would be challenging to handle manually using character or number fields.
>
> **[4:38](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=278)** Date and time fields can automatically adapt to different international formats, ensuring that data is presented correctly based on the user's locale.
>
> **[4:49](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=289)** Data is commonly moved around and different relational database management systems may have variations in data type support.
>
> **[4:58](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=298)** Ensure compatibility if you plan to migrate or integrate with other systems.
>
> **[5:03](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=303)** Adhering to SQL standards for data types to enhance portability across different RDBMSs can be a good way to future-proof your system.
>
> **[5:14](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=314)** A database architect must carefully choose data types based on storage requirements, performance needs, data integrity, compatibility, scalability, and specific application requirements.
>
> **[5:28](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=328)** Understanding the implications of each helps in designing efficient and robust databases, but ultimately understanding your data and how it will be used is what will ensure you make the correct decisions.
>
> **[5:42](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=342)** The specific types of data characters you choose for each data type will be chosen specifically when you choose your physical implementation.
>
> **[5:53](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=353)** Each version of SQL, the language of many relational databases, can have slightly different implementation options based on which provider you choose.
>
> **[6:04](https://www.linkedin.com/learning/database-design-fundamentals/data-types-that-are-key-to-relational-databases?u=76281980&t=364)** For example, Oracle uses PL/SQL, a different version of SQL, than Microsoft SQL Server, which uses T-SQL, yet they both adhere to the same ANSI SQL standards.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), blob (3), char (2), varchar (2), text (2)
> **Analogies:** for example (3), such as (2)
> **Definitions:** is a  (4)
> **Code Keywords:** this, (1), type. (1)
> **SQL:** varchar (2)
> **Versions:** 3.0 (2)
> **CLI Commands:** make (1)
> **Speakers:** - [presenter] (1)

#### How rows and columns impact database design
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=0)** - [Instructor] When designing a database, there are several different types of structures you can use depending on your data and how you intend to use it.
>
> **[0:10](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=10)** The most common design is the relational database, which organizes data into tables primarily by row, which we have been discussing.
>
> **[0:19](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=19)** However, other designs like columnar databases are also important.
>
> **[0:25](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=25)** A columnar database, also known as a column-oriented database, stores data by columns rather than by rows.
>
> **[0:33](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=33)** It is optimized for running analytical queries on large datasets.
>
> **[0:38](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=38)** Columnar databases excel at performing operations like aggregations, filtering, and summarizing data across records, making them faster, more efficient for these tasks.
>
> **[0:53](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=53)** These databases are often used in data warehousing environments where the primary use case is reading and analyzing data rather than frequent updates or transactions.
>
> **[1:05](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=65)** If you're dealing with large volumes of data that need to be processed in bulk, such as log analytics or time series data, columnar databases can be very efficient.
>
> **[1:17](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=77)** An example of this is stock trading.
>
> **[1:20](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=80)** Traders often need to calculate running averages, moving sums, or other aggregations on massive streams of data.
>
> **[1:30](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=90)** Dimensional databases are designed around a data model that uses facts and dimensions.
>
> **[1:37](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=97)** Facts represent measurable events, like sales, and dimensions represent the context for those facts, like time, location, or product.
>
> **[1:50](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=110)** The dimensional databases are ideal for OLAP systems, which are used for complex queries and reporting.
>
> **[1:59](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=119)** They allow users to perform multidimensional analysis, such as slicing and dicing data, drilling down into details, and rolling up summaries.
>
> **[2:11](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=131)** Dimensional databases are best for complex queries, and multidimensional analysis, often used in business intelligence and data warehousing environments.
>
> **[2:22](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=142)** An example of this is where the treasury department of a bank is responsible for managing the bank's liquidity, ensuring it has enough liquid assets to meet its obligations while optimizing the return on excess cash.
>
> **[2:37](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=157)** To do this, they need to analyze various factors, such as cashflow forecasts, interest rates, currency exposure, and performance of different asset classes.
>
> **[2:50](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=170)** The treasury team needs to analyze data across multiple dimensions, such as time, daily, monthly, yearly, product types, bonds, loans, deposits, geographic regions, and currencies.
>
> **[3:06](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=186)** A dimensional database allows them to slice and dice this data to understand the impact of different factors on liquidity.
>
> **[3:16](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=196)** Business intelligence databases are often used in BI environments, where the goal is to analyze data from different perspectives to support decision-making.
>
> **[3:27](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=207)** Like columnar databases, these data warehouses are dimensional databases that are common in data warehousing.
>
> **[3:35](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=215)** However, they focus on how data is modeled to support flexible querying.
>
> **[3:41](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=221)** Examples you may be familiar with by name would be Snowflake or Microsoft SQL Server Analysis Services.
>
> **[3:50](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=230)** These support star schema and snowflake schemas, which are common dimensional database designs that we talked about earlier.
>
> **[3:58](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=238)** Each type of database design has its strengths.
>
> **[4:02](https://www.linkedin.com/learning/database-design-fundamentals/how-rows-and-columns-impact-database-design?u=76281980&t=242)** So the choice depends on the specific use case, whether you prioritize data retrieval speed, the complexity of queries, or the volume and type of data.

> [!info]- Semantic Content
>
> **Analogies:** such as (4)
> **Code Keywords:** this, (1), case, (1)
> **Env Vars:** olap (1), sql (1)
> **Cross-References:** we talked about (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Types of relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980&t=0)** - [Instructor] Relationships in databases describe how the data is related between the tables.
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980&t=6)** Tables can have two different types of relationships; either one-to-one, a record in one table is related to a single record in another table, for example, a person and their passport, or one to many, a record in one table can be related to multiple records in another table, for example, a customer can place many orders.
>
> **[0:32](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980&t=32)** In database design and entity relationship diagrams, or ERDs, the one side of the relationship is depicted with a straight line or a single bar.
>
> **[0:43](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980&t=43)** The many side is depicted with a crow's foot symbol, which looks like a branching set of three lines.
>
> **[0:50](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980&t=50)** Relationships are crucial in database design and understanding, because they ensure data integrity, reduce redundancy, and facilitate efficient retrieval of data.
>
> **[1:03](https://www.linkedin.com/learning/database-design-fundamentals/types-of-relationsips?u=76281980&t=63)** Through the relationships, the rules of primary and foreign key constraints and consistency are enforced.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Defining primary keys
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=0)** - [Instructor] The most common and easiest way to ensure unique rows in a table is a unique identifier.
>
> **[0:07](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=7)** This is often but not always the primary key.
>
> **[0:11](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=11)** The first normal form specified that the data has to be unique in each row.
>
> **[0:20](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=20)** A primary key is a unique identifier for each row in a table that can ensure no duplicates and cannot contain a null value, a null value being the absence of a value.
>
> **[0:36](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=36)** The options for a primary key are to find one that already exists in the data you have, or to create a net new column.
>
> **[0:45](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=45)** The balance comes in trying to determine if the added column and data it adds justifies the need.
>
> **[0:54](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=54)** Characteristics to look for in a natural primary key are pieces of data that would create a natural key.
>
> **[1:02](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=62)** They are values that have the key traits of primary keys just discussed.
>
> **[1:08](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=68)** They can be single value or a combination of data pieces that can create a composite key.
>
> **[1:16](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=76)** If a natural or composite key cannot be found due to the nature of the data itself, it changes, or it is personal, identifiable, in any way, or just does not fit the definition of a primary key, then a surrogate key is the ideal option.
>
> **[1:36](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=96)** Most often, a surrogate key is the best option, with the cost of storage and compute being relatively low in comparison to the complexity of data privacy and other challenges that come with natural keys.
>
> **[1:51](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=111)** If you were choosing a natural key, composite, or surrogate key, the important thing to remember is to ensure uniqueness.
>
> **[1:59](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=119)** Make sure the key is never null.
>
> **[2:02](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=122)** And when at all possible, keep it simple, efficient, and consistent.
>
> **[2:08](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=128)** What does simple, efficient, and consistent mean, and why would that be important?
>
> **[2:13](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=133)** It all relates to performance.
>
> **[2:15](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=135)** Modern relational databases create indexes on primary keys.
>
> **[2:21](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=141)** This index allows the database to skip full-table scans and use more efficient index searching methods, significantly speeding up query performance for select statements that involve primary key columns.
>
> **[2:35](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=155)** For performance, we normalize to ensure the data we need is in the right places.
>
> **[2:42](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=162)** If we put a surrogate key on it, the data will be indexed with a numeric key that we will not outgrow.
>
> **[2:50](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=170)** This is particularly important for high-volume transactional environments with read and write transactions that are critical.
>
> **[2:59](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=179)** While primary keys improve query performance, they can also introduce some overhead during insert and update operations.
>
> **[3:08](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=188)** Maintaining the index associated with a primary key requires additional resources, which can slow down these operations slightly, especially if the primary key is not used in queries.
>
> **[3:21](https://www.linkedin.com/learning/database-design-fundamentals/defining-primary-keys?u=76281980&t=201)** Using the primary key in queries is key to fast data retrieval.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Automatically increment a field
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=0)** - [Instructor] Auto incrementing keys provide a unique identifier for each row in a table, which is crucial for maintaining data integrity and establishing relationships between tables.
>
> **[0:12](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=12)** This unique identifier is automatically generated, reducing the risk of human error in key assignment.
>
> **[0:19](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=19)** This is often the best option for the primary key, but is not always the primary key.
>
> **[0:26](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=26)** The benefit of performance efficiency is that numeric keys, such as those generated by auto increment, are generally more efficient for database operations compared to string based keys.
>
> **[0:39](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=39)** This is because numeric comparisons are faster than string comparisons leading to improved query performance.
>
> **[0:48](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=48)** Using an integer for primary key rather than a longer string or composite key saves space in the database.
>
> **[0:57](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=57)** This can be significant when dealing with large data sets.
>
> **[1:01](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=61)** Assuming the data does not already exist in the table, giving space efficiency savings.
>
> **[1:08](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=68)** Auto-incrementing primary keys simplifies the process of adding new rows to a table simplifying data management.
>
> **[1:16](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=76)** Users do not need to manually manage the primary key values, which reduces the complexity and potential for errors.
>
> **[1:25](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=85)** These keys are independent of the actual data in the table, meaning the changes to the data do not affect the primary key.
>
> **[1:34](https://www.linkedin.com/learning/database-design-fundamentals/automatically-increment-a-field?u=76281980&t=94)** This stability is beneficial for maintaining consistent references across the database.

> [!info]- Semantic Content
>
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### The importance of foreign keys
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=0)** - [Instructor] A foreign key in a relational database is like a link or a bridge between two tables.
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=6)** Here you have two tables in a database, one table called "Customer", and the other called "Order".
>
> **[0:13](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=13)** The Customer table could have a column for customer ID, which uniquely identifies each customer.
>
> **[0:21](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=21)** The Order table might have its own columns like order ID and date, and it also has a column called customer ID.
>
> **[0:31](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=31)** The customer ID in the orders table is a foreign key.
>
> **[0:36](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=36)** It points to the customer ID in the customers table.
>
> **[0:40](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=40)** This connection allows you to link an order to the customer who made it.
>
> **[0:46](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=46)** In simple terms, a foreign key is a way to connect related data across different tables, ensuring that the relationships between the data are accurate.
>
> **[0:59](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=59)** In a relational database, this is an entity that establishes a link between data and two tables.
>
> **[1:07](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=67)** It is used to maintain referential integrity within the database by ensuring that the value in the foreign key column corresponds to an existing value in the primary key column of another table.
>
> **[1:21](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=81)** This relationship is often described as a parent-child relationship where the table containing the primary key is the parent and the table with the foreign key is the child.
>
> **[1:36](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=96)** Foreign keys enforce referential integrity by ensuring that a foreign key value must match an existing primary key value in the reference table.
>
> **[1:48](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=108)** This constraint ensures that any changes to the data in the primary key table do not invalidate the foreign key references.
>
> **[1:58](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=118)** By linking tables, foreign keys help streamline data sets and promote efficiency in data retrieval and management.
>
> **[2:07](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=127)** They allow for efficient querying and sorting of data across related tables without duplicating data.
>
> **[2:15](https://www.linkedin.com/learning/database-design-fundamentals/the-importance-of-foreign-keys?u=76281980&t=135)** They're often included in indexes to speed up data access.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### What is a null?
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=0)** - [Instructor] In database design, a NULL represents the absence of a value in a particular field or column.
>
> **[0:07](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=7)** Imagine you're filling out a form and there's a question you don't have an answer to, so you leave it blank.
>
> **[0:14](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=14)** In a database, that blank space is represented by a NULL.
>
> **[0:18](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=18)** It's different from a zero, an empty string or any other value.
>
> **[0:24](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=24)** NULL specifically means "no value."
>
> **[0:28](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=28)** For example, if you're tracking someone's age, a value of zero means the person is a newborn, while NULL means their age is unknown.
>
> **[0:40](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=40)** Special behavior in queries happen when you have a NULL.
>
> **[0:44](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=44)** When you run searches or calculations in a database, NULL values are treated differently.
>
> **[0:50](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=50)** For example, if you try to add numbers together and one of them is a NULL, the result will be a NULL value because the database can't calculate with a missing value.
>
> **[1:04](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=64)** When designing a database, it's important to keep data integrity in mind at all times.
>
> **[1:10](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=70)** It is easy to make a decision that you will make every field in your database mandatory so that you will never have NULL fields.
>
> **[1:19](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=79)** That way, you never have to deal with them in calculations later.
>
> **[1:23](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=83)** This all-or-nothing thinking is rarely the answer.
>
> **[1:27](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=87)** If you force users to enter data in a field that is mandatory to continue on, they're easily tempted to enter bad data or false data to just move on.
>
> **[1:39](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=99)** This is how bad data is created, and leads to a cycle of garbage in, garbage out.
>
> **[1:46](https://www.linkedin.com/learning/database-design-fundamentals/what-is-a-null?u=76281980&t=106)** Often the best answer is to design for the best outcome that creates the cleanest, most correct data you can get.

> [!info]- Semantic Content
>
> **Env Vars:** null (9)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)

#### Naming convention importance in relational databases
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=0)** - [Instructor] Standard naming conventions for relational databases help maintain consistency, clarity, and ease of understanding across the database.
>
> **[0:10](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=10)** To make the readability easier, avoid abbreviations unless they are well-known and unambiguous, industry or company specific.
>
> **[0:20](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=20)** Whatever conventions you choose, apply them consistently throughout the database.
>
> **[0:26](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=26)** If a convention has been started already, do not change it.
>
> **[0:31](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=31)** Consistency is more important than conforming to any particular standard.
>
> **[0:36](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=36)** It will just cause confusion.
>
> **[0:39](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=39)** Avoid using SQL reserved words as names, things like select or where.
>
> **[0:47](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=47)** Table names use singular nouns or plural nouns.
>
> **[0:52](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=52)** The key is consistency, such as customer and order or customers and orders.
>
> **[1:02](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=62)** Do not mix them.
>
> **[1:03](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=63)** Do not have customer, but use orders or vice versa.
>
> **[1:09](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=69)** The case is also important.
>
> **[1:12](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=72)** Use either lowercase, Pascal, or camel case, but be consistent.
>
> **[1:19](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=79)** Avoid spaces, but the use of an underscore is fine.
>
> **[1:25](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=85)** Descriptive words are encouraged and preferred over abbreviations.
>
> **[1:30](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=90)** Column names should be descriptive, but concise.
>
> **[1:34](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=94)** Avoid unnecessary prefixes like TBL underscore or COL underscore unless there is a specific reason.
>
> **[1:45](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=105)** Use lowercase or Pascal following the convention used for table names.
>
> **[1:52](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=112)** For primary keys, use ID or table name underscore ID.
>
> **[1:59](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=119)** For example, customer underscore ID to indicate a primary key.
>
> **[2:04](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=124)** Name the foreign keys with related table name underscore ID.
>
> **[2:10](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=130)** For consistency, ensure you use the same naming as the primary key naming convention.
>
> **[2:18](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=138)** These conventions help make the database structure more intuitive and maintainable, especially in collaborative environments.
>
> **[2:27](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=147)** They make updates easier and long-term maintenance easier.
>
> **[2:31](https://www.linkedin.com/learning/database-design-fundamentals/naming-conventionimportance-in-relational-databases?u=76281980&t=151)** Any integrations with other data will also be easier to bring in or export as well as prepare for any future changes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** sql (1), tbl (1), col (1)
> **Analogies:** such as (1), for example (1)
> **Code Keywords:** case, (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)


### 6. 5. How Developments in AI Affect Database Design

#### Architectural overview for AI
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=0)** - [Instructor] Architecting for an AI environment is as important as a relational environment.
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=6)** This field is far newer, and many enterprises are just starting their journey.
>
> **[0:12](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=12)** They do not have standardized best practices on how things should be done.
>
> **[0:17](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=17)** When relational models touch AI, enterprises usually follow the relational standards their corporations have set.
>
> **[0:25](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=25)** When designing a relational database, especially for use in an AI environment, leveraging the right tools can significantly enhance the efficiency and quality of the design process.
>
> **[0:38](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=38)** Consider using professional tools for designing entire systems.
>
> **[0:43](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=43)** Some common tools for entity relationship diagrams are, MySQL Workbench offers comprehensive tools for database design, SQL development and database administration.
>
> **[0:57](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=57)** Microsoft Visio is popular for creating ER diagrams and other visual representations of data structures.
>
> **[1:05](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=65)** Lucidchart is a cloud-based tool that supports collaborative database diagramming and design.
>
> **[1:13](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=73)** ER/Studio is a tool for data modeling, especially in large, complex environments.
>
> **[1:20](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=80)** And dbForge Studio provides ER diagram capabilities along with SQL coding, database management and administration tools.
>
> **[1:30](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=90)** Metadata Management is a key architectural tool for AI, enabling the effective use of a data catalog to manage integrated data.
>
> **[1:42](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=102)** It helps track data lineage, ensure data governance, and provide context for AI models, which are crucial for explainability and compliance.
>
> **[1:52](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=112)** The current trend in AI maturity is that governments are looking at governance and compliance of AI on top of the data and governance that is currently in place on data and security.
>
> **[2:08](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=128)** Having a centralized location for this tracking is prudent.
>
> **[2:13](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=133)** Security and compliance is an important part of the design, especially in large AI systems.
>
> **[2:20](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=140)** Techniques like data masking, encryption and access control, are integrated into the database design to ensure that data is both accessible and secure.
>
> **[2:33](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=153)** This has to be balanced with other options for security.
>
> **[2:37](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=157)** There are counter options to balance the full performance loss.
>
> **[2:42](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=162)** As a whole, data integration is a foundational element in database design for scalable AI.
>
> **[2:50](https://www.linkedin.com/learning/database-design-fundamentals/architectural-overview-for-ai?u=76281980&t=170)** It ensures that AI models have access to high-quality, diverse data at scale, while also maintaining performance, security and compliance.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** sql (2)
> **CLI Commands:** mysql (1)
> **Code Identifiers:** dbforge (1)
> **Speakers:** - [instructor] (1)

#### Designing for AI
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=0)** - [Instructor] Data integration is crucial in designing databases for scalable AI performance.
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=6)** It involves combining data from different sources into a unified view, essential for training AI models.
>
> **[0:15](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=15)** Unified data access is what will ensure that you have future-proofed your design.
>
> **[0:21](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=21)** You can not predict the future, but you can design for it in a flexible fashion.
>
> **[0:27](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=27)** This means a design of data integration that allows for the creation of a centralized repository where data from various sources, like transactional databases, logs, third-party APIs, and more, can be stored and accessed efficiently.
>
> **[0:46](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=46)** This unified access is critical for AI models that need consistent, clean, and comprehensive datasets.
>
> **[0:54](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=54)** Choosing the right tools for real-time data processing is streaming data integration that requires real-time data, like those in predictive analytics or autonomous systems.
>
> **[1:07](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=67)** Data integration must support streaming data.
>
> **[1:11](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=71)** Tools like Apache Kafka or Amazon Kinesis can be used to integrate and process real-time data, feeding it directly into AI pipelines.
>
> **[1:23](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=83)** The right tool for the right data is key to designing data stores for AI.
>
> **[1:29](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=89)** There are different data stores, each making a marked difference in the scalability and performance.
>
> **[1:35](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=95)** Be sure to choose the right database for the right type of data.
>
> **[1:39](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=99)** Distributed databases are used to handle large-scale data integration for AI.
>
> **[1:44](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=104)** Distributed databases, like Apache Cassandra, MongoDB, Google Bigtable, or Azure Cosmos DB, are often used.
>
> **[1:55](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=115)** These databases are designed to scale horizontally, allowing them to manage massive datasets without sacrificing performance.
>
> **[2:05](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=125)** For columnar and dimensional data models for AI workloads, choosing the right database model is key.
>
> **[2:12](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=132)** For instance, columnar databases, like Apache HBase, can be more efficient for read-heavy AI tasks, while dimensional models, the Star and Snowflake schema, are better suited for analytical queries.
>
> **[2:28](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=148)** For data partitioning and sharding to deal with scalability in databases, what is often needed is to partition or shard data across multiple nodes.
>
> **[2:39](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=159)** Proper integration ensures that these partitions are handled correctly, enabling efficient data retrieval and processing.
>
> **[2:47](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=167)** Considerations for adding tables to an existing database, like schema consistency, ensure new tables align with the existing schema and naming conventions to maintain consistency.
>
> **[3:02](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=182)** The impact on existing workflows, such as considering how to add new tables, might affect an existing ETL process, such as queries and applications, allow you to plan for updating or refactoring where necessary, ensuring that testing and validation is done before fully integrating with new tables and testing their performance and compatibility with existing database operations and AI workflows.
>
> **[3:32](https://www.linkedin.com/learning/database-design-fundamentals/designing-for-ai?u=76281980&t=212)** By considering these factors, you can design a relational database that not only supports current AI needs, but is also flexible and scalable enough to accommodate future developments.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3)
> **Analogies:** such as (2), for instance (1)
> **Env Vars:** etl (1)
> **Speakers:** - [instructor] (1)

#### Considerations for AI: Unstructured data and analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=0)** - [Instructor] Data quality is one of the most important considerations to keep in mind at all times when working in data.
>
> **[0:07](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=7)** Ensure mechanisms are in place to clean and pre-process data before it's ingested into the database.
>
> **[0:13](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=13)** High quality, consistent data is crucial for effective AI model training.
>
> **[0:19](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=19)** Implement caching mechanisms to reduce the load on the database during intensive AI processing tasks, especially for read heavy operations whenever possible.
>
> **[0:31](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=31)** This is a performance consideration that will support consistent throughput to the GPUs.
>
> **[0:38](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=38)** Implement data versioning strategies to track changes to data sets over time, which is crucial for reproducibility in AI experiments.
>
> **[0:49](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=49)** Get to know your data.
>
> **[0:50](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=50)** Almost every aspect of architecting, designing, and performance tuning data is easier if you know every aspect of your data.
>
> **[0:59](https://www.linkedin.com/learning/database-design-fundamentals/considerations-for-ai-unstructured-data-and-analytics?u=76281980&t=59)** This means how it is used, how it is stored, the quantitative, as well as the qualitative aspects of it.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 7. 6. Final Project

#### Final project setup: Design your own database
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=0)** - [Instructor] Welcome to our Database Design Fundamentals Final Project.
>
> **[0:10](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=10)** I'm going to walk you through the setup of the project so you're set up for success.
>
> **[0:16](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=16)** This project is designed to allow you to use a sample report to determine the typical design of a logical database based on data given from a user.
>
> **[0:27](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=27)** This is a common way data is gathered from users along with interviews and discussions.
>
> **[0:34](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=34)** This is the workbook for the final project.
>
> **[0:37](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=37)** We have left in much of the information from chapter three for reference so that you have a starting point to work from.
>
> **[0:45](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=45)** The challenge will start in tab Salesperson and Product where you will choose your fields.
>
> **[0:53](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=53)** In the next few tabs, going through each of the normal forms, I've left spaces for you to choose where to place information.
>
> **[1:03](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=63)** Just to give you a few hints.
>
> **[1:05](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=65)** And always remember to refer back to the rules at the top of each page.
>
> **[1:12](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=72)** Ending with the exercise diagram at the end.
>
> **[1:16](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=76)** This has been pre-populated with the work that we've done so far and you will add on to it with the work that you will do with Salesperson and Product.
>
> **[1:26](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=86)** If you're having challenges, refer back to the sections of the course that cover that topic.
>
> **[1:33](https://www.linkedin.com/learning/database-design-fundamentals/final-project-setup-design-your-own-database?u=76281980&t=93)** Join me in the next video to see how I design this database.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2)
> **Prerequisites:** setup (1), set up (1)
> **Code Keywords:** from. (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Final project walkthrough: Design your own database
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=0)** (soft upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=6)** - [Instructor] I hope you enjoyed working through the final project and designing your own database.
>
> **[0:11](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=11)** Now, let's go through how I would approach this.
>
> **[0:14](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=14)** The first steps are to review the product and salesperson.
>
> **[0:19](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=19)** The salesperson only briefly noted in this form is a tricky concept.
>
> **[0:25](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=25)** This is the one where the discovery process with a user and subject matter expert is very important.
>
> **[0:33](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=33)** There is only a single field on the form, and it appears to be only a name field or maybe even a salesperson number field.
>
> **[0:43](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=43)** It's up to the architecture designer to extrapolate that additional information that will be required and add in a few fields like name, email, phone number, and address that relate to the salesperson.
>
> **[1:01](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=61)** The product characteristics are a bit easier to determine as they are listed on the order form in the details.
>
> **[1:09](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=69)** Things such as size, price, quantity, variety, and status.
>
> **[1:18](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=78)** Using the rules of the first normal form for the salesperson, we eliminate the repeating groups and create separate tables for both the salesperson and the product data.
>
> **[1:31](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=91)** Then identify and create a primary key.
>
> **[1:38](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=98)** This looks much like we did with the customer, where the sales person's name needs to be separated into first and last names to give it a single value for the field to create the atomic requirement.
>
> **[1:53](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=113)** We make the assumption again that we are only saving single values of emails and phone numbers.
>
> **[2:01](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=121)** If there are business requirements for multiples, then other considerations may need to be made.
>
> **[2:10](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=130)** Let's move on to the second normal form.
>
> **[2:13](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=133)** These records are all directly related to the primary key, so they can stay in their tables.
>
> **[2:20](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=140)** Both tables now satisfy the rule of second normal form.
>
> **[2:27](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=147)** The final stage is the third normal form.
>
> **[2:30](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=150)** Eliminate any field that does not depend on the primary key where it makes sense and is appropriate.
>
> **[2:37](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=157)** These records for both tables relate to the primary key, so it can stay in this format to satisfy third normal form.
>
> **[2:51](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=171)** And then, here is our diagram.
>
> **[2:54](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=174)** A final visual of the full outline of the database design.
>
> **[2:59](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=179)** Starting with the customer table, we designed it with a customer ID as an independent key.
>
> **[3:05](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=185)** Customers can have one or more orders that are connected to a single sales person.
>
> **[3:12](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=192)** Each order can have many items, and each product that exists can be associated with many orders.
>
> **[3:20](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=200)** Each salesperson can create many orders, each order can have many items, and each product can be in many order items.
>
> **[3:33](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=213)** And that's it.
>
> **[3:34](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=214)** Congratulations on completing this project.
>
> **[3:37](https://www.linkedin.com/learning/database-design-fundamentals/final-project-walkthrough-design-your-own-database?u=76281980&t=217)** Hope you had fun with it and now have a better understanding of the fundamentals of database design.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft upbeat music) (1)


### 8. Conclusion

#### Empower your world: Innovate, act, transform
> [LinkedIn Learning](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=0)** - [Melody] Congratulations!
>
> **[0:02](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=2)** You designed a full database.
>
> **[0:05](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=5)** That's an accomplishment.
>
> **[0:06](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=6)** Great work.
>
> **[0:09](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=9)** When I did that in college, we were in a room of about 30 students.
>
> **[0:14](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=14)** We had finished an entire exercise of turning data into the third normal form and then an ERD diagram.
>
> **[0:23](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=23)** When the professor asked us if we had liked the exercise, it was a clear 30/70 split.
>
> **[0:31](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=31)** 30% liked it, and 70 did not.
>
> **[0:35](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=35)** The 30% of us that did went on to be data professionals or programmers, and the others changed to other professions.
>
> **[0:44](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=44)** If this course spoke to you, then data may be something you want to explore more of.
>
> **[0:50](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=50)** The data community is a vibrant community of thousands of professionals worldwide and one of the most welcoming professional communities I have ever heard of and certainly experienced.
>
> **[1:02](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=62)** Feel free to reach out to me and connect on LinkedIn, but also connect locally with your local user group if there is one.
>
> **[1:10](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=70)** User groups can be found at aka.ms/datacommunity.
>
> **[1:16](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=76)** I look forward to hearing about your database design successes and new roles in data on LinkedIn.
>
> **[1:24](https://www.linkedin.com/learning/database-design-fundamentals/next-steps-empower-your-world-innovate-act-transform?u=76281980&t=84)** Until next time, empower your world, innovate, act, and transform.

> [!info]- Semantic Content
>
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