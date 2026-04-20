---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: practical-database-design-implementing-responsible-data-solutions-with-sql-querying
url: "https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying"
duration_minutes: 137
duration: 2h 17m
level: Intermediate
updated: 12/2/2025
learners: 9944
skills:
  - Data Management
  - Database Systems
  - Database Design
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEJyvvVXH1rHw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719007502300?e=2147483647&amp;v=beta&amp;t=gyN7XQNU3wtCS5fWULS6ESFqVhIiHFXxNwGLb73qBuk"
linkedin_topic: Data Science
learning_paths:
  - Advance Your Database Administration Skills
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-management
  - skill/database-systems
  - skill/database-design
  - skill/sql
status: not-started
created: 2026-04-20
---

![Practical Database Design: Implementing Responsible Data Solutions with SQL Querying](https://media.licdn.com/dms/image/v2/D560DAQEJyvvVXH1rHw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719007502300?e=2147483647&amp;v=beta&amp;t=gyN7XQNU3wtCS5fWULS6ESFqVhIiHFXxNwGLb73qBuk)

# Practical Database Design: Implementing Responsible Data Solutions with SQL Querying

> In this hands-on course, learn the fundamental concepts underlying database system design, including not only the design of applications using databases, but also covering the fundamental implementation techniques used in database systems. Instructor Brandeis Marshall takes you through a practical application of database design, database implementation, and data querying to determine when SQL quer

> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying) | 2h 17m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Dr. Brandeis Marshall]]

## Resources

- Exercise files available

## Skills Covered

- Data Management
- Database Systems
- Database Design
- SQL

## Table of Contents

### Introduction

#### Designing and implementing a data model
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=0)** - Have you ever been given a data set only to realize that you can't turn it into a dashboard?
>
> **[0:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=7)** You need to understand the relationship between categories, fill in contextual gaps, and prioritize building a data model.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=16)** Having conversations with your clients is key to meeting their data insight expectations.
>
> **[0:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=23)** In this course, I'll teach you the fundamentals of designing and implementing a data model.
>
> **[0:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=30)** Using MySQL Workbench, we'll walk through the full arc of any database project including business rules, data generation, and SQL querying.
>
> **[0:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=44)** Hi, I'm Brandeis Marshall, a former college professor turned data learning entrepreneur.
>
> **[0:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=51)** And data modeling is my tech jam.
>
> **[0:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=54)** So let me be your personal coach as we build this project together.
>
> **[1:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/designing-and-implementing-a-data-model?u=76281980&t=60)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** mysql (1)
> **Env Vars:** sql (1)
> **Speakers:** - have (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=0)** - [Instructor] I designed this course for beginner to intermediate data analyst and engineers who have a basic understanding of database design and SQL.
>
> **[0:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=12)** You may currently be in a data role or work with a data team.
>
> **[0:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=17)** There's a myriad of data terms and you don't need to know all of them for this course.
>
> **[0:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=25)** I'll go over some of the most common ones to help make it easier.
>
> **[0:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=30)** I will be using MySQL Workbench, which is a free, open source database management systems tool.
>
> **[0:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=39)** You can download it here.
>
> **[0:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=41)** FYI, I'll be using my SQL Workbench 8.0.31 FYI, I'll be using my SQL Workbench 8.0.31 because it's the most stable version.
>
> **[0:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=52)** You'll need to select Archives to choose the correct version.
>
> **[1:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=60)** If you download a newer version, some of the features may not work correctly.
>
> **[1:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=66)** You'll also need to download MySQL Community Server 8.0.36.
>
> **[1:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=70)** MySQL Community Server 8.0.36.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=75)** No need to go to the Archives.
>
> **[1:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=78)** Just select the version on the home screen.
>
> **[1:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=85)** Well, that should do it.
>
> **[1:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-you-should-know?u=76281980&t=87)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), fyi (2)
> **CLI Commands:** mysql (3), make (1)
> **Versions:** 8.0.31 (2), 8.0.36 (2)
> **UI Navigation:** go to (1), select the (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Business Rule Development

#### How databases help businesses
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=1)** - [Narrator] Whether you say database or database, you've had to interact with several of them as part of your position duties.
>
> **[0:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=9)** There's a backend data structure that you must connect to that helps you complete your task.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=16)** Behind every login screen, internal search bar and Slack channel is a database.
>
> **[0:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=24)** You rely on those databases to be up and running.
>
> **[0:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=28)** You rely on them to contain the data that you're looking for.
>
> **[0:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=33)** You rely on them to save and store your work products and all the correspondence surrounding them.
>
> **[0:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=41)** Business operations can't happen without databases.
>
> **[0:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=48)** HR departments manage talent recruitment, acquisition and retention strategies.
>
> **[0:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=56)** Product departments design, implement and maintain a suite of services and products.
>
> **[1:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=64)** Marketing and sales departments execute lead generation campaigns and cultivate client relationships, and IT departments coordinate the integration of systems, tools, and platforms.
>
> **[1:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=80)** Data assets are created, manipulated, repurposed, and isolated within businesses to help fulfill business key performance indicators, goals, and objectives and key results.
>
> **[1:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=98)** These data assets come in various forms.
>
> **[1:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=102)** There's documents, spreadsheets, media, software, dashboards, and so on.
>
> **[1:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=112)** From the organization's CEO to their clients, data is added, updated, retrieved, and deleted daily from a collection of databases, whether you're aware of it or not.
>
> **[2:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=126)** While everyone in the organization implicitly engages with databases, it takes an organization's commitment to data stewardship to ensure their data assets are sufficiently protected.
>
> **[2:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=141)** Now, data stewardship in a nutshell is concerns with standardizing data definitions, ensuring data quality and managing data lineage, and data stewardship calls on all levels of data professionals, including chief data officers, data administrators, database administrators, data scientists, data analysts, and data engineers.
>
> **[2:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=169)** All these people evaluate the data integrity for completeness and trustworthiness, along with securing the data privacy of their products and clients.
>
> **[3:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=183)** It's you as the data analyst or data engineer who are crucial to help guide the rest of the organization in effective execution of data stewardship practices.
>
> **[3:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=196)** You understand at a deep level that if the databases underpinning the organization are poorly modeled, inaccurately sized, or too aged, the whole organization is susceptible to data breaches, compromised reputation and insolvency.
>
> **[3:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=219)** You're typically the first to see the impacts of incomplete or poor data quality.
>
> **[3:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=225)** You experience the inaccurate outcomes when the databases aren't following a regimented online routine or cadence.
>
> **[3:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=237)** So your main responsibility is to quickly evaluate the relevant data insights given the mounds of existing and new data assets within your purview.
>
> **[4:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=250)** Going from data assets to data insights takes a good handle on a combination of data skills and business understanding.
>
> **[4:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/how-databases-help-businesses?u=76281980&t=261)** In the next lesson, we will look at how the data becomes useful to an organization.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1), protected (1)
> **Env Vars:** ceo (1)
> **Cross-References:** in the next (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### The DIKW Model
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=0)** - [Instructor] Being a conduit who helps translate unprocessed raw data into valuable insights can be overwhelming unless you anchor your work in a data relationship model for value extraction.
>
> **[0:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=14)** Enter the DIKW model, where DIKW stands for Data, Information, Knowledge, Wisdom.
>
> **[0:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=25)** DIKW is typically represented as a pyramid to show the stages of transformation from data to wisdom latent observations.
>
> **[0:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=37)** The DIKM model has seen its share of criticism.
>
> **[0:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=41)** The most common critique is that it's an oversimplification of two key aspects.
>
> **[0:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=49)** First, the pyramid structure assumes that each phase produces less content than the previous one.
>
> **[0:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=57)** That assumption falls short quickly, as we can attest that data generates more data, and information generates more information, knowledge generates more knowledge, and, of course, acquiring wisdom opens the door to realizing more wisdom.
>
> **[1:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=77)** The relationship between data, information, knowledge, and wisdom is much more complicated than represented by the DIKW model.
>
> **[1:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=89)** DIKW's sequentially styled progression can appear too elementary or half-baked for practical execution.
>
> **[1:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=101)** Their interdependent and integrated bonds can seem untractable, especially given the public release of generative AI in 2022.
>
> **[1:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=112)** But as a data analyst and engineer, working with data requires taking the complicated and drilling it down into doable, repeatable steps.
>
> **[2:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=123)** The pyramid structure helps us focus on identifying and filtering out irrelevant content.
>
> **[2:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=130)** Following every possibility is not only time-consuming, but also very unproductive.
>
> **[2:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=140)** Our clients tend to be internal to the organization, from the product team to the CEO, and they desire a clear data story.
>
> **[2:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=150)** Being able to delineate between data, information, knowledge, and wisdom also helps us communicate data stories more effectively to our clients.
>
> **[2:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=163)** A key to making the DIKW model work for you is in the transitions from one stage to the next.
>
> **[2:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=172)** The data to information transition focuses on building connections between the raw data elements.
>
> **[3:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=181)** Data comes to us disjointed, and we're often tasked with organizing the disarray.
>
> **[3:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=190)** In the database world, this involves designing a coherent and representative data model.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=197)** Next comes the information to knowledge transition.
>
> **[3:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=201)** It focuses on establishing the proper context.
>
> **[3:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=205)** The data industry has adopted the use of statistical modeling, machine learning, and other computational approaches as a first pass of providing context.
>
> **[3:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=218)** I'll add that this context isn't a monolith and requires human intervention.
>
> **[3:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=225)** The second pass needed to establish proper context considers the cultural, economic, situational, and social implications of the knowledge outcomes.
>
> **[3:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=239)** Only then can we be more convinced that our outcomes are important and relevant.
>
> **[4:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=247)** Last comes the knowledge to wisdom transition.
>
> **[4:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=252)** It centers on being confident in the repeatability and ethical alignment of our outcomes.
>
> **[4:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=260)** Additional AI algorithms and automated decision systems are implemented alongside extensive verification and validation schemes.
>
> **[4:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=271)** Public release of services and products serves as a common approach used to determine if wisdom, bias, or discrimination has been accomplished.
>
> **[4:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=284)** During this course, we'll strengthen our data to information translation skills, appreciating the underlying data model can't be fully understood without grasping its association to business structure.
>
> **[5:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-dikw-model?u=76281980&t=302)** We'll delve into the business side of this equation in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** dikw (6), dikm (1), ceo (1)
> **Code Keywords:** public (2), pass (2)
> **Cross-References:** in the next (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### What's a business rule?
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=0)** - [Instructor] The business world relies heavily on having access to accurate data.
>
> **[0:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=6)** As data practitioners, we tend to use our skills to support an organization's product and service development.
>
> **[0:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=13)** This sort of application is client facing with tangible impacts.
>
> **[0:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=19)** It makes us feel good to see clients interacting with dashboards.
>
> **[0:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=23)** Within the organization, it's easier to explicitly distinguish the value of the data team from the software development team.
>
> **[0:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=31)** Data flows in and out of each business unit.
>
> **[0:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=34)** Not only the product department, HR, operations management, IT, finance, marketing and sales departments generate, collect, analyze, and summarize data assets regularly.
>
> **[0:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=51)** This means everyone within these departments is an implementer of their department's specific data standards.
>
> **[1:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=60)** Well, how does each team member know what the data standards are?
>
> **[1:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=65)** It's through establishing business rules.
>
> **[1:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=70)** Business rules help guide decision making within an organization.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=75)** They're integral in framing the relationships between data elements.
>
> **[1:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=80)** A business rule interprets a single business related operation to explain a business function using conditional statements, business rules document information and processes that could be repeatable.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=97)** Business rules are characterized into three main groups.
>
> **[1:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=100)** Structural rule, decision, logic, and process flow.
>
> **[1:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=107)** A structural rule is a business rule that's unique to that business.
>
> **[1:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=111)** For example, the Instagram social media platform stipulates the acceptable post, reel and story sizes.
>
> **[2:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=120)** If you try uploading media content of other sizes, then your visual content will be awkwardly manipulated to fit or be outright rejected by Instagram.
>
> **[2:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=134)** A decision logic business rule focuses on actions needed to implement that business rule across the organization.
>
> **[2:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=144)** Continuing with the Instagram post example, there would be a routine that checks the dimension of a post prior to posting to the profile's timeline.
>
> **[2:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=155)** These business rules use formal logic quantifiers, such as if then, if else, only if, when, et cetera.
>
> **[2:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=168)** And lastly, a process flow business rule coordinates and groups actions together so that they happen sequentially.
>
> **[2:58](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=178)** Once a post is uploaded to a social media platform, there are a series of monitoring actions that happen.
>
> **[3:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=186)** The post's engagement rate includes reactions, reposts, and comments is traced.
>
> **[3:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=193)** The original poster is notified of their post's activities, along with the series of protocols to disseminate the post across the poster's network.
>
> **[3:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=203)** These three types of business rules are co-created with members of those seven main organizational units and the data practitioners.
>
> **[3:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=215)** The data practitioners become the gatekeepers by proxy of the business' operations.
>
> **[3:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=222)** An organization runs only as effectively as its ability to translate business function to implementable business rules.
>
> **[3:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/what-s-a-business-rule?u=76281980&t=234)** Now that we've discussed business rules, let's turn our attention to what exactly is a business operation, and we need to distinguish between business rules and business operations.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), else, (1), if, (1), let (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### A business rule vs. a business operation
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=1)** - [Narrator] So I know what you're thinking.
>
> **[0:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=2)** Why do I need to know what a business operation is?
>
> **[0:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=7)** Business operations are outside of my wheelhouse.
>
> **[0:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=10)** I also don't want to take on any more responsibility.
>
> **[0:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=14)** I'm a data analyst or a data engineer.
>
> **[0:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=17)** That's my lane.
>
> **[0:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=19)** As you can attest, our work is embedded in every aspect of the organization.
>
> **[0:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=24)** It's easy to experience scope creep.
>
> **[0:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=28)** Yes, you're filtering requests from multiple departments, and you're so busy completing tasks that you lose sight of what your main job responsibilities are.
>
> **[0:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=39)** This is your reminder that you're not a data generalist.
>
> **[0:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=44)** Business operations are the daily, monthly, quarterly, and annual activities that organizations engage in to earn a profit.
>
> **[0:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=54)** At a basic level, business operations are the strategic arm of the organization.
>
> **[1:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=61)** There's forecasting, quality control, and supply chain management activities that need to be ironed out.
>
> **[1:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=69)** And these are on top of the HR, finance, and product department activities I've previously mentioned.
>
> **[1:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=77)** As you've probably guessed, business operations encompass a lot, including business rules, practices, and policies.
>
> **[1:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=87)** For instance, a social media company would consider the type of advertising campaign it needs to identify highly influential profiles, increase their fan base, and boost length of engagement on their platform.
>
> **[1:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=103)** The company's leadership would set the vision for this work while other departments handle the implementation.
>
> **[1:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=112)** Those of us in data roles, particularly data analyst and data engineers, focus on how to represent the digital aspects of the leadership's vision through data management business rules.
>
> **[2:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=127)** Nothing more.
>
> **[2:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=128)** Not every aspect of the business can be expressed or reduced to a digital format or data asset.
>
> **[2:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=137)** What's important to consider is staying clear on the one to two frequent business departments that serve as your data source.
>
> **[2:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=148)** Also, be aware of the one to two frequent business departments that your data outcomes are sent.
>
> **[2:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=156)** Knowing your data inputs and outputs helps you better understand how your work supports strategic operations of the business.
>
> **[2:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=165)** The lines between business operations, practices, and policies as a data practitioner blur easily if you're not alert.
>
> **[2:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-operation?u=76281980&t=177)** Next up, I'll give tips on distinguishing between business rules and business practices.

> [!info]- Semantic Content
>
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### A business rule vs. a business practice
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=0)** - [Instructor] We discussed business operations to provide you with the aerial view of how business rules fit within it.
>
> **[0:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=7)** But business practices aren't as formal, stable, or clear.
>
> **[0:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=13)** In fact, the relationship between business rules and business practices have a limited overlap.
>
> **[0:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=20)** Business practices are the team-developed tactics and methods the organization uses to achieve its objectives.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=29)** These practices are shaped by the members within the team, their managers, and guided by their discipline's code of conduct.
>
> **[0:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=40)** The team's dynamics, both good and bad habits, establish how that team communicates and collaborates to complete their assigned projects.
>
> **[0:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=52)** A good example of a data-focused business practice is how a team establishes their slate of data products and services.
>
> **[1:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=61)** This tech stack discussion is a frequent topic.
>
> **[1:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=66)** The data tools, applications, and platforms change often.
>
> **[1:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=72)** They are commercial and open source systems.
>
> **[1:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=76)** Does your team rely on using both types of systems, or stick with just one?
>
> **[1:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=82)** For instance, each team member has a preferred programming language, certain familiarity with specific systems, preferred slate of data tools, and ways to complete data modeling and analytics tasks.
>
> **[1:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=98)** Teams deal with how to effectively leverage their individual skillset, while not using every data tool, system, and platform available.
>
> **[1:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=110)** That's not cost effective for the organization, and there's no blueprint on how a team chooses its tech stack.
>
> **[1:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=119)** Business practices try to nail down the internal mechanics of how the work gets done.
>
> **[2:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=125)** This is an evolving situation, as a team's members, projects, and project scopes can change suddenly.
>
> **[2:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=135)** Business rules play a role, though.
>
> **[2:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=139)** They give generic guardrails to help keep business practices relevant to the organization's needs.
>
> **[2:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=146)** For instance, an organization may decide to create a business rule that stipulates the use of a certain database management system.
>
> **[2:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=156)** Now, the development of the data team's business practices will be only for that database management system, and they'll implement it in accordance to standard data governance principles.
>
> **[2:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=169)** This process repeats for each project the data team works on.
>
> **[2:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=174)** Over time, the data team establishes their own routine.
>
> **[2:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=179)** Now that we've discussed business operations and business practices with respect to business rules, we have one more element to talk about, the relationship between business policies and business rules.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-practice?u=76281980&t=197)** That's up next.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for instance (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### A business rule vs. a business policy
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=0)** - [Host] It may seem unnatural for business policies and business rules to be part of the same conversation, but in day-to-day data team activities, much of our work is guided by the organization's business policies.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=16)** Business policies take on one of three forms, facilitating regulatory or restrictive.
>
> **[0:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=24)** Each type of business policy provides a blueprint for defining limits of how the organization's team members should be making decisions.
>
> **[0:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=34)** Ideally, a business policy is clear, concise, simple, inclusive, and stable in practice however, conflicting business policies are unearthed as they can be developed in silos.
>
> **[0:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=51)** Data governance committees are formed internally to help provide sufficient and regular checks and balances given specific compliance stipulations.
>
> **[1:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=62)** For instance, let's revisit the business rule that checks the dimensions of an Instagram post prior to posting to the profile's timeline.
>
> **[1:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=73)** A business policy would require that the posts not contain explicit or inappropriate content.
>
> **[1:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=81)** The data governance committee of data and legal experts would figure out what constitutes explicit and inappropriate content, as well as agree to how to algorithmically establish those parameters.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=97)** The banking, insurance and healthcare industries contend with more comprehensive national oversight to help minimize data privacy breaches.
>
> **[1:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=108)** In other industries, business policies concerning data management activities aren't common.
>
> **[1:55](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=115)** The public release of generative AI in March, 2023 has altered this landscape.
>
> **[2:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=122)** Many organizations are looking and some are shaping agile implementable AI policies to support better transparency, accountability, and governance.
>
> **[2:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=135)** As you can see, business policies serve as an additional layer of protection for the organization.
>
> **[2:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=142)** They also help support the effective implementation of business rules.
>
> **[2:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=148)** The ultimate goals of business policies within the data management space remain constant to improve data quality, maintain a high standard of documentation, and keep data secure.
>
> **[2:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=162)** There have been a lot of terms and scenarios shared so far.
>
> **[2:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=167)** Next up, we are going to reinforce what you've learned.
>
> **[2:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/a-business-rule-vs-a-business-policy?u=76281980&t=171)** We'll see how well you're able to distinguish between a business rule, business operation, business practice, and business policy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1), public (1)
> **Analogies:** for instance (1)
> **Speakers:** - [host] (1)

#### Example business rules
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=0)** [Instructor] - Before we hop into the exercises, let's recap a few important terms.
>
> **[0:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=5)** A business rule interprets a single business-related operation to explain a business function.
>
> **[0:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=12)** A business operation is a daily, monthly, quarterly, and annual activity that organizations engage in to earn a profit.
>
> **[0:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=23)** A business practice is a tactic or method a team within the organization developed to help them to achieve one of their objectives.
>
> **[0:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=35)** And lastly, a business policy outlines for the organization's team members the limits and boundaries on how they should be making decisions.
>
> **[0:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=46)** Now suppose you've recently been hired as a data analyst or data engineer at The Brainery, a social media platform for educators.
>
> **[0:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=56)** You're joining the quickly expanding data team that is housed under the product division.
>
> **[1:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=63)** As you're becoming familiar with how your team operates, you're realizing you're performing tasks for every division of the organization.
>
> **[1:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=72)** And some activities you don't think should be handled by you.
>
> **[1:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=78)** After a team meeting discussion about this, the group decided that charting their activities is the best next step.
>
> **[1:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=88)** They create a shared document with these four categories.
>
> **[1:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=92)** Now, you're all set up and can start reviewing your last week's activities.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=97)** Which category would you put each activity in?
>
> **[1:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=102)** When you're ready, you can check your answer.
>
> **[1:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=105)** in the document I've included in your exercise files.
>
> **[1:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/example-business-rules?u=76281980&t=109)** Additional exercises are also available to give you more practice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1), this, (1)
> **Definitions:** is a  (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)


### 2. Database Design

#### Entities and relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=0)** - [Instructor] Databases have come a long way since they were created in the 1960s and SQL was invented in the early 1970s.
>
> **[0:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=10)** We have document databases, graph databases, cloud databases, relational databases, and so much more.
>
> **[0:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=19)** Regardless of the database type, the building blocks of a useful database starts with well-constructed business rules.
>
> **[0:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=28)** These business rules are easily converted into a clear set of entities and relationships.
>
> **[0:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=36)** An entity in a database represents a single person label, place type, object or event.
>
> **[0:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=45)** For example, in The Brainery, a social media platform for educators, we'll need to represent the Brainery users.
>
> **[0:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=54)** Let's call them brainiacs.
>
> **[0:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=57)** We'll also need to represent other types of users, like friends and followers, and we can't forget about creating entities that represent brainiacs' posts and direct messages.
>
> **[1:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=72)** Entities are powerful digital structures to organize data.
>
> **[1:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=78)** They help us not commingle different objects.
>
> **[1:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=81)** We don't want to confuse a post with a direct message, for instance.
>
> **[1:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=86)** The context of how entities are related or not related to each other is needed.
>
> **[1:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=93)** That's where the concept of a relationship fills that gap.
>
> **[1:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=98)** A database relationship indicates how many instances of an entity are associated with how many instances of another entity.
>
> **[1:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=109)** It's easier to explain this when you know the relationship type between entities.
>
> **[1:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=116)** The one-to-many relationship specifies that one instance from an entity is associated with many instances from the other entity.
>
> **[2:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=128)** Now, one-to-many relationships are very popular, so you'll see them most often.
>
> **[2:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=135)** Let me share an example.
>
> **[2:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=137)** In The Brainery, a brainiac makes many posts, and lastly, there are many-to-many relationships.
>
> **[2:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=147)** They specify that many instances from an entity are associated with many instances from another entity.
>
> **[2:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=155)** For example, in the Brainery, brainiacs have many followers.
>
> **[2:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=162)** When we try to implement the many-to-many relationship inside a real database, we actually run into a problem.
>
> **[2:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=170)** That is, how do we create an entity with both sides needing to denote many instances from the other side?
>
> **[3:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=181)** But we're getting ahead of ourselves.
>
> **[3:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/entities-and-relationships?u=76281980&t=184)** Next up, we'll clarify the minimum requirement options for each of these relationships.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (2), let (2)
> **Analogies:** for example (2), for instance (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Cardinalities
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=1)** - [Instructor] Knowing how to specify your entities and relationships are the first important step in crafting an entity relationship model.
>
> **[0:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=9)** The hard step, however, comes with nailing down the expected minimum and maximum number of instances that'll appear in your database.
>
> **[0:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=19)** This step is commonly referred to as setting the relationship cardinality.
>
> **[0:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=26)** A relationship cardinality indicates the expected minimum and maximum number of occurrences for a pair of entities.
>
> **[0:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=35)** For instance, in the Brainery, we allow a brainiac to have no to many followers.
>
> **[0:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=42)** The minimum cardinality is zero, while the maximum cardinality is many.
>
> **[0:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=47)** That means you don't require a brainiac to have any followers before being considered a user of our social platform.
>
> **[0:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=57)** Since minimum and maximum relationship cardinalities can be infinite, data model rules were set up to make our lives easier.
>
> **[1:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=68)** A relationship cardinality must be one of these four options, mandatory one, mandatory many, optional one, and optional many.
>
> **[1:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=80)** Mandatory one says that there's one and only one instance of that entity that's associated with the other entity.
>
> **[1:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=91)** For example, the Brainery requires that a post must be associated with one and only one brainiac user.
>
> **[1:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=102)** Mandatory many says that there are at least one to many instances of that entity being associated with the other entity.
>
> **[1:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=113)** In the Brainery example, the team decided in order to form a group, at least one group post must be sent with the possibility of many messages amongst the group members.
>
> **[2:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=128)** Optional one says that there's none to one instance of that entity being associated with the other entity.
>
> **[2:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=139)** So in the Brainery, a brainiac may be affiliated with up to one organization at a time.
>
> **[2:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=147)** Optional many says that there's none to many instances of that entity being associated with the other entity.
>
> **[2:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=158)** For instance, a brainiac can post zero posts to an unlimited number of posts to their platform.
>
> **[2:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=166)** For each relationship type, we are tasked with identifying the relationship cardinality for both entities.
>
> **[2:55](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=175)** Yes, it's a two-way communication we have to represent.
>
> **[3:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=180)** So for our optional mini example, we've only described one side of the relationship cardinality, from the brainiac entity to the post entity.
>
> **[3:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=193)** We need to also describe the relationship cardinality from the post entity to the brainiac entity.
>
> **[3:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=201)** Using entities, relationships and cardinalities, you have the basics of creating a data model that can represent many aspects that are part of the business world.
>
> **[3:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=215)** It can also be structured enough to follow the rules of core database design.
>
> **[3:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/cardinalities?u=76281980&t=223)** Next up, we'll start to bring these concepts together for database requirement specifications.

> [!info]- Semantic Content
>
> **Analogies:** for instance (2), for example (1)
> **Code Keywords:** require (1), type, (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Scoping the database requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=1)** - [Narrator] Our recap of the entity relationship model tapped into the foundational mechanics of good database design.
>
> **[0:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=8)** However, before we proceed with the digital workings of database design, let's take a minute to emphasize the less discussed analog and more tactical aspects.
>
> **[0:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=21)** Many in leadership may not have database experience.
>
> **[0:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=24)** Often, they hope that the database can serve as the main landing area for the vast majority of the digital parts of their business, but as a data analyst or data engineer, you know that this is far from reality.
>
> **[0:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=42)** We need specificity and details to make the data model make sense for the long haul.
>
> **[0:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=50)** Identifying entities and relationships tend to be easy, in most cases, after having regular and focused conversations.
>
> **[1:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=60)** The relationship cardinalities, on the other hand, are a different story.
>
> **[1:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=66)** Your client may not know how they want their business to operate, so they're more fuzzy on those details, but you're forced to make to make changeable choices as to comply with database design rules.
>
> **[1:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=83)** You make these decisions based on your understanding of the real world problem first, and then using your expertise and experience, you translate the problem into the confining digital infrastructure of a database.
>
> **[1:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=99)** I want to remind you to not make these changeable choices in isolation.
>
> **[1:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=104)** You have to be intentional in discussing your choices with team members, managers, and leadership.
>
> **[1:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=112)** Your understanding of the problem and how the database will address that problem may not match with theirs.
>
> **[2:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=120)** Your assumptions may not be their assumptions.
>
> **[2:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=124)** It's likely that your client will push to expand the scope of the database, rather than provide you with inner working details you requested.
>
> **[2:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=136)** That's the nature of database design.
>
> **[2:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=139)** You, as the expert, have to suggest priorities and ask questions so that you receive the answers you're looking for.
>
> **[2:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=148)** Your main objective is to help settle on a reasonable database scope that aligns with your client's needs and adjusts their expectations as needed.
>
> **[2:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=159)** You and your team communicating what's easily implementable, difficult, and improbable is crucial.
>
> **[2:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=168)** Accomplishing this objective results in a database design process with less friction between you and your client.
>
> **[2:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/scoping-the-database-requirements?u=76281980&t=176)** We'll use the remainder of this lesson to demonstrate how to do this, from crafting data requirements to developing a solid, logical database model.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Code Keywords:** let (1), for. (1), this, (1)
> **Speakers:** - [narrator] (1)

#### Analyzing the overall data requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=0)** - [Instructor] To help us reign in a client's expectations, we need to lean into formalizing the organization's data requirements documentation.
>
> **[0:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=10)** Data requirements aren't discussed as often.
>
> **[0:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=13)** They tend to be assumed or gathered over time, but it's as important as business requirements and software requirements documentations.
>
> **[0:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=22)** Both business operations and software development become easier to map out and manage when there's a solid data plan.
>
> **[0:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=32)** For most of you, you'll join an organization with an existing database management system.
>
> **[0:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=39)** Your intention then is to find, review, and understand the existing data requirements documentation and cross your fingers that the documentation closely reflects what's happening in practice.
>
> **[0:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=53)** For everyone else, you'll likely be at a startup or smaller organization that's figuring out data requirements on the fly.
>
> **[1:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=62)** Your plan then is to create an outline of the data requirements as you encounter them in your data role.
>
> **[1:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=70)** This is definitely more time consuming and an unsupported perspective of the data operations.
>
> **[1:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=78)** Data requirements in a nutshell, define and describe how data elements are captured, stored, and processed.
>
> **[1:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=88)** Data requirements appear within business operations and software development specification documents, for instance.
>
> **[1:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=96)** The five main parts of a data requirements document are entities, entity features called attributes, relationships, data validation rules, and data storage, and retrieval approaches.
>
> **[1:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=113)** We've talked extensively about entities and relationships already, so we'll move on to describing the other elements of data requirements.
>
> **[2:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=124)** First up, attributes.
>
> **[2:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=126)** An attribute is an identifying piece of information that helps describe an entity.
>
> **[2:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=132)** For example, in the brainery, the brainiac entity would have at least the following attributes.
>
> **[2:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=140)** First name, last name, username, password, and last login.
>
> **[2:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=147)** Next, we'll talk about data validation rules.
>
> **[2:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=151)** These rules help confirm that the data entered meets predetermined criteria and aligns with business rules.
>
> **[2:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=160)** For example, for every new brainiac user, we need to validate their email address.
>
> **[2:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=166)** The format of the email needs to be structured in a specific way and will need to certify that the email is attached to a real electronic inbox.
>
> **[2:58](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=178)** Lastly, we must concern ourselves with the data storage and retrieval approaches.
>
> **[3:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=185)** These methods are looking to make data management efficient.
>
> **[3:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=189)** We want to choose the best database structure, create effective indexing schemes, and implement optimized data access methods.
>
> **[3:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=199)** A good example is for the database to quickly reveal common friends between a brainiac and one of their followers.
>
> **[3:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=209)** There's a 10 point checklist I run through to ensure I have a fuller picture of an organization's data needs.
>
> **[3:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=217)** These are important to know, but I won't be covering them in depth in this course.
>
> **[3:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=222)** I've included my checklist in the exercise files.
>
> **[3:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=227)** Taking this step makes crafting a robust data model that closely aligns with the business rules so much easier.
>
> **[3:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/analyzing-the-overall-data-requirements?u=76281980&t=236)** We'll see how these elements tie together next.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), for instance (1), picture (1)
> **CLI Commands:** find (1), make (1)
> **Documentation:** the documentation (1), specification (1)
> **Code Keywords:** else, (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Connecting entities, relationships, and business rules
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=0)** - [Instructor] Now, we're ready to create our conceptual database model.
>
> **[0:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=5)** The conceptual database model, sometimes referred to as the conceptual schema, provides a high level interpretation of the business rules, along with the description of the main components of the entity relationship model.
>
> **[0:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=21)** The step-by-step process of constructing a conceptual database model goes like so.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=29)** Number one, gather the business rules through discussions with your client or reading the company's documentation, or both.
>
> **[0:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=38)** Number two, isolate the probable entities.
>
> **[0:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=41)** Number three, add the presumed relationship between entities based on your initial understanding of the business rules.
>
> **[0:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=50)** Number four, add the relationship carnalities as you see fit.
>
> **[0:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=56)** And number five, collaborate with other team members and clients to increase data model representation that suits client's needs.
>
> **[1:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=67)** Let's demonstrate this process by creating a portion of the conceptual database model for the Brainery.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=75)** As a social media platform for educators, the Brainery at its core has the following components.
>
> **[1:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=82)** Number one, brainiac users can upload posts, while a post must only be associated with one post creator.
>
> **[1:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=92)** The entities are therefore brainiac and post.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=97)** The word can in this sentence indicates that a brainiac may or may not have uploaded a post or uploaded many posts, so that confirms an optional mini-relationship on the post entity side.
>
> **[1:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=116)** A post having one author reflects that a post can't exist without a brainiac, so that lends itself to establishing a mandatory one relationship.
>
> **[2:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=130)** We've covered steps one through four.
>
> **[2:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=133)** Do step five after you've gone through a few more business rules.
>
> **[2:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=139)** Let's run through a few more examples.
>
> **[2:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=142)** Number two, every brainiac can have both friends and followers.
>
> **[2:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=148)** A friend is the Brainery user who a brainiac follows, while a follower is, well, a user that follows the brainiac.
>
> **[2:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=160)** Number three, more precisely, a brainiac can have followers.
>
> **[2:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=167)** A follower must follow at least one brainiac.
>
> **[2:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=171)** And a brainiac's friend connection occurs when the brainiac initiates the follow and the friend follows back.
>
> **[3:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=181)** Now, pause this lesson and see if you can create the entity relationship or ER model as me.
>
> **[3:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=189)** We're addressing two business rules.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=197)** There's a distinction being made between a follower and a friend for the brainiac.
>
> **[3:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=204)** The brainiac follower relationship is affirmed when the follower makes a connection to the brainiac.
>
> **[3:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=212)** So a brainiac can have zero to many followers, while a follower must follow at least one person, but could follow many.
>
> **[3:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=223)** The opposite situation happens in the brainiac friend relationship.
>
> **[3:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=230)** One more business rule description for practice.
>
> **[3:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=234)** Number four, a brainiac can only send private messages to their friends, not to followers.
>
> **[4:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=244)** Now, this is a bit of a trick example.
>
> **[4:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=247)** There's a relationship between the entities, brainiac and friend, that involves another entity called direct message.
>
> **[4:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=257)** The direct message relies on knowing the information from both brainiac and friend for the direct message entity to exist.
>
> **[4:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=268)** Direct message is an example of an associative entity.
>
> **[4:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=273)** Using the Brainery example, we've constructed a conceptual database model.
>
> **[4:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=280)** We've implemented the five-step process to isolate entities, establish relationships, and define carnalities.
>
> **[4:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/connecting-entities-relationships-and-business-rules?u=76281980&t=288)** We'll discuss more in the next lesson how to represent this relationship and all the others in the database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Identifying data integrity requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=0)** - [Lecturer] Our conceptual database model gives us a great overview of how business rules show up in the data model and how they're connected to each other.
>
> **[0:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=10)** What we've created so far is a great visual, but it's not ready to be implemented within a database management system or DBMS.
>
> **[0:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=21)** One more element is missing, the attributes for each entity.
>
> **[0:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=28)** Attributes are classified in two ways.
>
> **[0:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=31)** Number one, attributes that describe the characteristics of that entity.
>
> **[0:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=37)** And number two, attributes that describe the relationship between two entities.
>
> **[0:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=43)** Every entity must have at least one attribute called the primary key to uniquely identify an instance of that entity.
>
> **[0:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=54)** There are typically other attributes that are related to that attribute too.
>
> **[0:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=59)** Each Brainiac has a first name, last name, email, password, and last login, and is uniquely identified by their username.
>
> **[1:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=70)** No two usernames can be the same, so username is the primary key.
>
> **[1:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=77)** The friend, follower, post, and direct message entities need attributes that cover the first category.
>
> **[1:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=86)** A friend has three attributes, username, friend type, date connected.
>
> **[1:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=92)** Username is the primary key.
>
> **[1:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=96)** A follower has, let's say, two attributes, username, date followed.
>
> **[1:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=103)** Username is the primary key.
>
> **[1:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=105)** A post has four attributes, post ID, text, date created, and date modified.
>
> **[1:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=113)** Post ID is the primary key.
>
> **[1:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=117)** A direct message has four attributes, message ID, text, date sent, and date modified.
>
> **[2:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=126)** Post ID is the primary key.
>
> **[2:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=129)** Now that the descriptive attributes have been added, we can turn our attention to the relationship identifying attributes.
>
> **[2:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=137)** Here's were having the conceptual schema and knowing your primary keys are so helpful.
>
> **[2:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=145)** The majority of the work has already been done for you.
>
> **[2:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=148)** You need to learn how to convert the visual representation into digital form.
>
> **[2:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=154)** Every primary key in one entity could be referenced in another entity known as a foreign key.
>
> **[2:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=163)** The stipulation is that, one, there must be an existing relationship between the two entities, and two, the foreign key is added to the relationship side that could have many instances.
>
> **[2:58](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=178)** Let's explain this concept with an example, specifically the Brainiac and post one to many relationship.
>
> **[3:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=187)** That means one Brainiac can send many posts, but a post is only associated with one Brainiac.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=197)** The Brainiac's primary key of username is added to the post entity as a foreign key.
>
> **[3:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=205)** Let's do the more complicated case of the Brainiac and friend exchanging a direct message.
>
> **[3:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=213)** Since both the Brainiac and friend can send messages, we need to record each message separately.
>
> **[3:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=221)** We keep track of who sends which message to whom and when.
>
> **[3:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=227)** So, we need to create the direct message entity, which has the Brainiac and friend's primary keys as foreign keys.
>
> **[3:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=236)** And these foreign keys are serving double duty as primary keys for the direct message entity.
>
> **[4:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=244)** Now, we have a complete logical database model.
>
> **[4:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/identifying-data-integrity-requirements?u=76281980&t=248)** It's time to shift to what data will populate this data model once implemented in the DBMS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type, (1)
> **Env Vars:** dbms (2)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [lecturer] (1)


### 3. Data Generation and Datasets

#### The data you're given: Now what?
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=0)** - [Narrator] Before we explore the database tool, we're sketching out the type of data that'll eventually populate this database and imagine what good sample data criteria is.
>
> **[0:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=13)** This will help build our confidence in our data model.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=16)** With our need for data, we simply go to the internet.
>
> **[0:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=20)** We search, we find, we download, we use.
>
> **[0:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=24)** Well, not so fast.
>
> **[0:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=26)** Be cautious of using existing datasets.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=29)** There are three crucial questions to ask.
>
> **[0:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=32)** Number one, where did it come from and for what original purpose?
>
> **[0:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=39)** What are the data gathering procedures being used and how much harm is introduced?
>
> **[0:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=45)** And number three, do you own the rights to do what you want with the data?
>
> **[0:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=50)** Each question helps you pinpoint where that procured dataset matches your needs and where there are gaps.
>
> **[0:58](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=58)** Let's say that I decide to use my social media data as a representative sample to help imagine the Brainery's database.
>
> **[1:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=68)** Since the dataset is my social media content, I can answer questions one to three with ease.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=75)** For question one, this data was requested from a social media company to serve as a local copy of all posts sent on that social platform.
>
> **[1:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=87)** There's no sensitive information shared in these posts.
>
> **[1:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=90)** For question two, the data gathering processes remain unknown.
>
> **[1:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=96)** The social media company provides a request for archive data portal so I can retrieve my content via zip file within 48 hours of the request.
>
> **[1:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=109)** And the answer to question three is yes, and the social media company can do what they want with this content as well.
>
> **[1:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=117)** If the answer to question three is a yes, proceed.
>
> **[2:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=122)** Immediately, you'll notice that there are examples of posts and there's information about the social media profile user, but upon further inspection, you'll see no information about what we've called friends and followers.
>
> **[2:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=142)** Lastly, this dataset has no examples of direct communications between two users.
>
> **[2:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=149)** Now that you've identified several large gaps, we could abandon this sample dataset and search for another one that's better suited for our needs, or we could search for datasets to append to this one, your choice.
>
> **[2:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=166)** On the other hand, for my direct message content, my responses to question three would be very different.
>
> **[2:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=176)** I wouldn't want to share content that another party hadn't given their permission.
>
> **[3:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=182)** Data ownership, privacy, confidentiality, and what constitutes as vulnerable data features take on a whole new meaning in this situation.
>
> **[3:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=194)** Either way, you have a beginning of a process for using existing datasets.
>
> **[3:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=200)** Number one, determine data ownership with informed consent preferred.
>
> **[3:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=207)** Number two, identify privacy, confidentiality, and security aspects of any dataset early on.
>
> **[3:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=217)** And number three, pinpoint vulnerable data features early on.
>
> **[3:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=223)** We need to consider more factors regarding the fitness of data to build out test scenarios.
>
> **[3:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-given-now-what?u=76281980&t=230)** We discuss some of these next.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Asking questions of the data
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=0)** - [Instructor] Establishing data ownership and first pass relevancy of sample data rounds out the first layer of dataset discovery.
>
> **[0:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=10)** The second layer is determining the breadth and depth of your existing datasets.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=16)** We are getting in the data.
>
> **[0:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=19)** There are two main broad questions we set out to answer.
>
> **[0:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=23)** Number one, how complete is the data in the existing dataset structure?
>
> **[0:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=30)** And two, how accurate or correct is the data in the existing dataset structure?
>
> **[0:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=39)** Data completeness is concerned with how well populated data entries are throughout the dataset.
>
> **[0:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=46)** It's the breadth portion of this second layer.
>
> **[0:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=50)** For example, we'd initially scan the user and post related content in my sample Twitter data and see how it matches with the brainery's logical database model.
>
> **[1:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=64)** Data correctness or accuracy focuses on how well the true value of these data entries are represented.
>
> **[1:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=72)** It's the depth portion of the second layer.
>
> **[1:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=76)** For instance, we'll need to learn more about the range and relevancy of these data values.
>
> **[1:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=83)** A quick scan isn't going to cut it.
>
> **[1:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=86)** Our sample data has too many columns and rows for us to manually summarize or organize.
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=94)** It's time to apply an algorithmic approach.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=97)** There are three methods that'll help us assess the completeness and accuracy of our dataset if we're able to read it into a data analysis platform like Python pandas.
>
> **[1:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=110)** First up, the info method, when executed, provides us with the number of entries, number of columns, number of entries for each column, data type of each column, and the amount of memory usage.
>
> **[2:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=126)** The ideal output would be that all the number of entries and the number of injuries for each column are the same.
>
> **[2:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=135)** Next, the describe method gives us the descriptive statistics about each numerical column.
>
> **[2:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=144)** That's the count again, mean, standard deviation, minimum, 25%, 50%, and 75% quantiles, and the maximum values.
>
> **[2:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=159)** It's up to us to decide if these values are within a truthful range by creating histograms or performing a regression analysis.
>
> **[2:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=170)** Lastly, we have the deep dive option now called y data profiling.
>
> **[2:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=176)** You may know it as pandas profiling.
>
> **[3:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=180)** If your dataset isn't too large, you can generate a profile report.
>
> **[3:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=185)** This report details a range of statistics with visualizations.
>
> **[3:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=191)** There's also a nifty assessment of where missing values, duplicates, and outliers exist.
>
> **[3:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=198)** Now that we have tangible key pieces, we need to discuss and evaluate the dataset with other team members.
>
> **[3:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=206)** We can judge whether this existing dataset has substantial, relevant, timely, and quality content to fit our needs for the Brainery.
>
> **[3:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=217)** Now, we've discussed repurposing an existing dataset.
>
> **[3:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=222)** What would be our approach if creating a dataset from scratch was needed?
>
> **[3:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-the-data?u=76281980&t=227)** We'll explore this in the next section.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** python (1)
> **Code Keywords:** pass (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### The data you're creating: Pros and cons
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=0)** - [Instructor] Some data environments elect to create synthetic data sets themselves or license them from other organizations.
>
> **[0:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=8)** The banking and credit lending industry use synthetic financial data to improve fraud detection.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=16)** Manufacturing companies use synthetic data for better quality control testing and predictive maintenance processes.
>
> **[0:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=26)** AI-powered companies use synthetic data to test the robustness of their facial feature recognition and natural language processing systems.
>
> **[0:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=37)** In doing so, there are expected pros and cons.
>
> **[0:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=42)** Let's discuss the pros first.
>
> **[0:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=45)** Top benefits include, number one, your ability to generate data sets that are diverse and realistic.
>
> **[0:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=54)** You can mimic characteristics found in the real world and test different models or scenarios relatively easily.
>
> **[1:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=63)** Number two, you have the opportunity to save costs.
>
> **[1:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=68)** Once data generation is complete, an organization isn't spending a bunch of money repeatedly on real dataset licenses, and you're avoiding the real world data collection process, which is notoriously very costly.
>
> **[1:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=88)** And number three, you significantly reduce concerns around data ownership and privacy.
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=95)** You can keep sensitive data safe, and it also allows organizations to circumvent regulatory and compliance expectations.
>
> **[1:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=106)** On the flip side, top limitations of synthetic data sets include, number one, the quality of your synthetic dataset hinges on your chosen generation model.
>
> **[2:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=120)** If your model is lacking, so is your synthetic data.
>
> **[2:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=125)** Everything is connected, from the attribute characteristics to the column distribution.
>
> **[2:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=133)** Number two, using synthetic data is too risky.
>
> **[2:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=140)** The data generation team needs to contend with a myriad of issues.
>
> **[2:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=145)** They include, but not limited to, bias propagation, IP infringement, data pollution, and data contamination.
>
> **[2:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=157)** And number three, you can't distinguish a good synthetic dataset from a not-so-good one.
>
> **[2:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=166)** Assessing the reliability of synthetic data sets is in its infancy.
>
> **[2:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=172)** There's a lack of standardization of how synthetic data sets are built, testing their robustness, or how well they mimic the real world.
>
> **[3:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=183)** You aren't able to methodically compare one synthetic dataset with another.
>
> **[3:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=191)** So there you have it.
>
> **[3:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=193)** We have the pros of potentially generating diverse and realistic data, saving cost, and keeping sensitive data safe.
>
> **[3:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=203)** We've shared several limitations of choosing an inadequate data generation model, dealing with a slew of data integrity issues, and not being able to assess reliability.
>
> **[3:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/the-data-you-re-creating-pros-and-cons?u=76281980&t=217)** We'll finish up this chapter with important questions to ask if you're planning on developing your own synthetic data.

> [!info]- Semantic Content
>
> **Code Keywords:** include, (3), let (1)
> **Speakers:** - [instructor] (1)

#### Asking questions of your made-up data
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=0)** - [Presenter] Being aware of the strengths and weaknesses of synthetic datasets makes it easier for us to develop methodically.
>
> **[0:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=7)** We aren't ignorant to its shortcomings so we can adjust our expectations.
>
> **[0:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=13)** Creating the perfect dataset isn't the goal as it doesn't truly exist, but the ability to generate a relevant dataset becomes the main objective.
>
> **[0:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=26)** The decision to generate synthetic data shouldn't be your sole decision.
>
> **[0:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=31)** There are considerations that need to be weighted, and these considerations should be discussed and evaluated with the project team.
>
> **[0:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=40)** Having sufficient context of what's needed in the synthetic data will help you avoid making sweeping generalizations.
>
> **[0:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=50)** The top considerations include: What are the business and compliance requirements?
>
> **[0:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=56)** Which real data will be used as a model?
>
> **[1:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=60)** Which data features should and shouldn't be tagged for synthetic generation?
>
> **[1:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=67)** Which scenarios are important to represent?
>
> **[1:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=71)** And which benchmarking tools help to assess data quality?
>
> **[1:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=77)** These considerations and other ones that come up in discussion should be placed in context to the project's goals, scope, and timeline.
>
> **[1:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=89)** Addressing issues, managing risks, and adjusting deliverables come with the territory and practice.
>
> **[1:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=97)** It's a lot of complexity.
>
> **[1:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=100)** Understandably, you may feel like you don't have the skills to create or even co-create a synthetic dataset.
>
> **[1:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=109)** You aren't alone here.
>
> **[1:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=110)** It's a big ask.
>
> **[1:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=113)** Text-based solutions exist to help relieve some of the synthetic dataset generation burden.
>
> **[2:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=121)** First up, we have the open-source synthetic data tools.
>
> **[2:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=126)** These tools provide you with code that can be modified and extended.
>
> **[2:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=132)** You have the opportunity to build your own customized datasets.
>
> **[2:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=136)** Second, we have commercial synthetic data tools.
>
> **[2:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=140)** These are typically platforms that allow for modular dataset creation.
>
> **[2:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=146)** This plug-and-play approach quickly generates synthetic datasets and provides an out-of-the-box evaluation environment to assess data quality.
>
> **[2:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=158)** Lastly, online communities have formed as a support network for those generating and using synthetic datasets.
>
> **[2:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=167)** You can ask questions and exchange ideas around test and synthetic data.
>
> **[2:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=173)** Also, seek out resources to help you learn recent advances in techniques and overcoming challenges.
>
> **[3:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=181)** Well, this wraps up the must-knows when it comes to dataset selection and generation.
>
> **[3:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/asking-questions-of-your-madeup-data?u=76281980&t=189)** Whether you use real data, synthetic data, or combination, stay focused on the type of data that will represent the project's data flows.

> [!info]- Semantic Content
>
> **Code Keywords:** include: (1)
> **Speakers:** - [presenter] (1)


### 4. Database Implementation

#### Overview of MySQL Workbench
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=0)** - [Instructor] We're ready to digitize your pen and paper logical database model for the Brainery.
>
> **[0:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=7)** You can choose from a range of database management systems.
>
> **[0:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=12)** We're using MySQL Workbench.
>
> **[0:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=15)** MySQL Workbench provides data analysts, engineers, and other database professionals with a single platform to store their data model, datasets, develop their SQL queries, and conduct some database maintenance.
>
> **[0:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=34)** It's completely free so you don't have to worry about pesky licensing fees.
>
> **[0:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=40)** Our first goal is to ensure that every entity, relationship, and carnality from the logical database model is accurately reflected within MySQL Workbench.
>
> **[0:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=53)** I'll be using version 8.0.32 because it's the most stable version at the time of this recording.
>
> **[1:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=62)** After you install and configure your SQL Workbench, go ahead and open it back up.
>
> **[1:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=69)** It's pretty bare, but behind this minimalist layout is a robust interface.
>
> **[1:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=77)** You should have one MySQL connections local instance.
>
> **[1:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=83)** We'll use it after we are finished adding our data model.
>
> **[1:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=88)** Well, I've already opened up MySQL Workbench.
>
> **[1:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=92)** Now click on the icon representing three entities and two relationships.
>
> **[1:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=101)** You've just launched the data modeling side of MySQL Workbench.
>
> **[1:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=107)** And to create a new data model, click on the + sign.
>
> **[1:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=116)** Now there is a lot of information shared here.
>
> **[1:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=119)** The left panel gives a snapshot of the data model if you want to see it.
>
> **[2:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=126)** Since we have yet to add anything, it's pretty bare.
>
> **[2:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=131)** The right panel provides quick access to templates frequently used by other MySQL Workbench users.
>
> **[2:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=141)** I find them rather distracting, so I suggest deactivating them.
>
> **[2:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=147)** Click on the two gray and blue icons at the top of your screen.
>
> **[2:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=155)** Now the center panel occupies the entire screen.
>
> **[2:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=159)** You can see that there are headings: EER Diagrams, Physical Schemas, Schema Privileges, SQL Scripts, and Model Notes.
>
> **[2:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=174)** Feel free to expand or collapse them to reveal their contents.
>
> **[3:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=190)** Now what we'll be doing is actually adding a diagram, so that is listed under the EER Diagrams.
>
> **[3:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=202)** So all you need to do is just click the Add Diagram icon
>
> **[3:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=210)** and it opens up a new EER diagram.
>
> **[3:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=215)** One last note, before we proceed don't forget to save this file, Save Model.
>
> **[3:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=223)** And I called mine TheBrainery with the extension mwb.
>
> **[4:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=240)** Well, that's all folks.
>
> **[4:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-mysql-workbench?u=76281980&t=241)** There's your quick tour of the data model side of MySQL Workbench.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (8), find (1)
> **Env Vars:** sql (3), eer (3)
> **UI Navigation:** click on (3)
> **Versions:** version 8 (1), 0.32 (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), configure (1)
> **Code Keywords:** interface (1)
> **Best Practices:** don't forget (1)

#### Creating entities in MySQL Workbench
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=0)** - [Instructor] It's time to set up some data entry.
>
> **[0:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=4)** We need to set up our digital data modeling environment.
>
> **[0:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=9)** So remember you saved that file.
>
> **[0:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=12)** Now we go back in, and we can now double-click TheBrainery under the Models.
>
> **[0:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=22)** Of course, go ahead and open the model.
>
> **[0:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=25)** Of course ours is completely blank.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=29)** Once again, it'll open up to a gridded whiteboard.
>
> **[0:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=33)** You have those three panels.
>
> **[0:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=36)** You can decide to activate or deactivate the left and the right panel as you're comfortable.
>
> **[0:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=43)** I'll go ahead and deactivate the left-hand panel, but I'll keep the right panel open.
>
> **[0:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=49)** I like having much more whiteboard real estate on my screen.
>
> **[0:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=56)** The right-hand panel is really kind of cool to have just because I get to see all the different tables that wind up populating my data model.
>
> **[1:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=65)** So the way I get started is actually creating the tables first.
>
> **[1:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=70)** So all the entities will be added at once.
>
> **[1:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=74)** So by doing that, I click the table icon over on the left-hand side.
>
> **[1:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=82)** You can see the little hand motion come up, and I select where I want the table to go anywhere on the screen.
>
> **[1:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=91)** I just went ahead and picked the center.
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=95)** So every time you create a table, table1 is a default label, but of course, that's not the table name that you want to name your tables and your data model.
>
> **[1:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=107)** So go ahead and double-click on table1.
>
> **[1:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=113)** You will see a second window open up below the whiteboard grid.
>
> **[2:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=122)** You can adjust the size of that whiteboard grid as much as you want.
>
> **[2:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=128)** I like making sure that I see the table on the whiteboard grid and I see the table name and all of the column information in the secondary window on one screen.
>
> **[2:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=144)** So now you can rename your table, and of course, you can add your attributes or your column names as well.
>
> **[2:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=152)** So for this example, let me go ahead and add the table Brainiac.
>
> **[2:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=163)** Now, once you change the table name, you can now start adding in the columns.
>
> **[2:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=169)** Now remember, the very first column name or attribute name needs to be the primary key.
>
> **[2:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=177)** And a primary key is also non-null.
>
> **[3:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=180)** So by default, when you double click on the column name, the column name that MySQL Workbench creates is ID Brainiac.
>
> **[3:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=193)** I don't particularly like that naming scheme.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=197)** So, I am naming my primary key Username,
>
> **[3:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=206)** and you can see a little key icon to the left-hand side of Username populate.
>
> **[3:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=214)** I also want to make sure to change the data type to a VARCHAR and make sure that it's no more than 20 characters.
>
> **[3:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=225)** So I put up 20 inside of the parentheses.
>
> **[3:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=228)** Also what you'll notice is that both PK and NN have been marked.
>
> **[3:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=237)** The rest of the data types you don't need to be concerned about.
>
> **[4:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=242)** So now you can move on to your next attribute name or column name.
>
> **[4:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=248)** You can go ahead and double-click to edit.
>
> **[4:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=251)** And again, MySQL Workbench has a default name that it will name your column.
>
> **[4:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=258)** This one happens to be Brainiac column.
>
> **[4:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=261)** Of course that's not what's in your logical database model.
>
> **[4:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=267)** So now you need to rename it.
>
> **[4:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=269)** And let me rename it FirstName.
>
> **[4:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=276)** I'm going to go ahead and keep the data type as VARCHAR(45), but I'm not going to make it a PK or a primary key.
>
> **[4:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=287)** I'm going to make sure that it is non-null 'cause of course, anytime there is a username, the username has to map to a real person with a first name.
>
> **[4:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=299)** Now, once you've done this first table, repeat this for all the other strong entities in your logical database model.
>
> **[5:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=309)** Recall that a strong entity doesn't have its own primary keys coming from another entity.
>
> **[5:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-entities-in-mysql-workbench?u=76281980&t=317)** So for TheBrainery, build out the next four tables and meet me in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), mysql (2)
> **UI Navigation:** double-click (3), open the (1), click on (1)
> **Code Keywords:** let (2), default, (1)
> **SQL:** varchar (2)
> **Env Vars:** varchar (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)

#### Creating relationships in MySQL Workbench
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=0)** - [Narrator] So how did it go?
>
> **[0:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=2)** How many strong entities did you create?
>
> **[0:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=5)** Four or five?
>
> **[0:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=8)** I created four.
>
> **[0:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=10)** Brainiac, post, friend and follower.
>
> **[0:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=18)** But the DirectMessage entity isn't a strong entity, it's an associative entity.
>
> **[0:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=25)** We need to reference the primary keys from both Brainiac and Friend in order to make DirectMessage.
>
> **[0:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=35)** So we'll move on by setting up the relationships and I'll start with creating the DirectMessage associative entity.
>
> **[0:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=45)** I suggest that you organize your tables so that the relationship lines don't overlap.
>
> **[0:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=52)** It's more aesthetically pleasing, in my opinion.
>
> **[0:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=56)** So you'll see me moving around the tables and the relationships.
>
> **[1:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=62)** We're going to walk through creating two different types of relationships.
>
> **[1:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=66)** As I said, we're going to start with a DirectMessage entity.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=75)** For DirectMessage, it's what's called a many-to-many relationship.
>
> **[1:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=81)** And again, we're looking at Brainiac and Friend.
>
> **[1:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=87)** In order to create this entity, you now need to select the N:M icon that's to your left.
>
> **[1:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=98)** Once you select it, you'll see the little hand dial and you select the first entity in the relationship.
>
> **[1:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=107)** Let's call that Brainiac.
>
> **[1:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=110)** And then you select the second entity in that relationship.
>
> **[1:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=113)** And from this case, it's Friend.
>
> **[1:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=116)** As you can see, a whole new entity has been created that has Brainiac username and Friend username as the primary keys, but they also serve as the foreign keys as well.
>
> **[2:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=133)** The first thing that you'll notice is that Brainiac Has Friend as a table name isn't very descriptive.
>
> **[2:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=141)** So what you can do is double click and now you're able to modify the name of this table as well as add any more attributes that are associated with this relationship.
>
> **[2:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=159)** So I'm going to be replacing Brainiac Has Friends with DirectMessage.
>
> **[2:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=170)** For all my table names, I don't like to have any spaces or underscores or dashes.
>
> **[2:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=176)** So I just merge, DirectMessage as one phrase.
>
> **[3:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=184)** Since this secondary window has popped up and I have more attributes to add, I'll go ahead and extend that second window so that I can now add in the other attributes.
>
> **[3:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=199)** And they happen to be, which of course, has a different data type.
>
> **[3:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=206)** It's not a VARCHAR 45.
>
> **[3:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=211)** I want to scroll and make sure that it is of a text and give it a certain number of characters when it comes to text.
>
> **[3:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=223)** So for this example, I'm going to say the max is 1,000 characters.
>
> **[3:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=230)** Now, because the message needs to be sent, that means that this attribute is not known and that finishes the message attribute.
>
> **[4:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=245)** The next two attributes are all around the date.
>
> **[4:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=249)** The first one is date sent,
>
> **[4:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=257)** and I want to make sure that the data type has been changed so that it is datetime, and of course, the message that has to be sent at a particular time, which means this attribute cannot be known either.
>
> **[4:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=279)** The last attribute however, I'm going to be calling date modified.
>
> **[4:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=285)** This one, I've placed here just in case the two individuals want to modify the message that they send to each other after it has been sent.
>
> **[4:58](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=298)** So again, I go ahead and with the data type, I change it to datetime, but this time, it can be a null value.
>
> **[5:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=312)** So now I'm done with a DirectMessage entity.
>
> **[5:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=317)** Now, to make things a little bit easier to see, you can now move the secondary window down so you can reveal the rest of your tables.
>
> **[5:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=327)** And now we can move on to the second type of relationship that we're going to go over to today.
>
> **[5:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=334)** So let's look at Brainiac and Post.
>
> **[5:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=339)** If you recall, a Brainiac can send many different Posts, but a Post is only associated with one Brainiac.
>
> **[5:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=350)** This is a one-to-many relationship.
>
> **[5:55](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=355)** In order to create the one-to-many relationship, you need to select a 1:N icon from the left hand side.
>
> **[6:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=368)** And then you need to select the Post entity first and then the Brainiac entity.
>
> **[6:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=380)** So now what we have is a one-to-many relationship.
>
> **[6:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=385)** The one side is associated with Brainiac and the many side is associated with Post.
>
> **[6:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=393)** Now what you probably want to do is select Brainiac first and then select Post.
>
> **[6:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=401)** But that would reverse the relationship, so you have a many-to-one relationship.
>
> **[6:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=407)** That's not what you want to do.
>
> **[6:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=410)** If you wind up making a mistake in any type of relationship, all you need to do is select the relationship, right click, and then you're able to delete the relationship.
>
> **[7:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=426)** And as you can, see now you have no relationship, there's no association or reference of Brainiac inside of Post.
>
> **[7:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=437)** Okay, let me go back and create that one-to-many relationship again since I just deleted it.
>
> **[7:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=447)** Select, remember, select Post first and then Brainiac.
>
> **[7:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=452)** And now you've created that one-to-many relationship.
>
> **[7:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=455)** What you would immediately see is that in the Post entity, you have Brainiac username.
>
> **[7:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=465)** That's now a red key.
>
> **[7:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=469)** That's making sure that you know that it is a foreign key to the Post entity.
>
> **[7:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=476)** And now you've established that one-to-many relationship.
>
> **[8:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=482)** So the one last step, which is to check the carnality.
>
> **[8:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=487)** And remember what I said, a Brainiac can send zero to unlimited number of Posts, but a Post must be associated with a Brainiac.
>
> **[8:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=498)** So what does this mean for the relationship?
>
> **[8:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=501)** That means that when it comes to a Brainiac sending Posts, they could send an optional many.
>
> **[8:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=510)** What we have in this relationship is a mandatory one to a mandatory many relationship, and we want to change it.
>
> **[8:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=520)** So how do we do that?
>
> **[8:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=522)** It's super easy.
>
> **[8:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=524)** Just double click on the relationship and the secondary window at the bottom of the screen appears.
>
> **[8:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=534)** And you have a name of the relationship, which you can't ignore in the very first tab.
>
> **[9:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=540)** Click to the second tab at the bottom called Foreign Key.
>
> **[9:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=545)** And now, you're revealing the referencing table, the carnaility and the reference table information.
>
> **[9:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=552)** You can now uncheck or check the mandatory toggles, all depending on whether it's mandatory or optional when it comes to that carnality.
>
> **[9:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=565)** So in order to make sure that you have now identified that a Brainiac can send zero to many messages, you just unchecked mandatory on the Post side of this relationship.
>
> **[9:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=580)** So now for every relationship that we've created, we want to check to make sure that this relationship has the right carnality, whether or not it's mandatory or optional for each of the relationships that we've created.
>
> **[9:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=597)** Now, let's go back to DirectMessage.
>
> **[10:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=601)** When it comes to Brainiac to DirectMessage, as well as friend to DirectMessage, are the relationships correct?
>
> **[10:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=609)** I think they are.
>
> **[10:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=612)** 'Cause remember, the Brainiac and the Friend need to be represented in DirectMessage in order for DirectMessage to actually exist.
>
> **[10:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=622)** And in order for DirectMessage to happen, a message needs to be sent.
>
> **[10:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=631)** So that means there's a mandatory one type of conversation that happens between Brainiac and Friend.
>
> **[10:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=639)** So the mandatory one to the mandatory many on both sides of these relationships makes sense.
>
> **[10:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=647)** Now we have demonstrated the two most common relationships.
>
> **[10:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=652)** It's time for you to create the remaining relationships and adjust their carnallites as you see fit.
>
> **[11:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-relationships-in-mysql-workbench?u=76281980&t=660)** We'll do another pass over these relationships in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), type. (1), type, (1), delete (1)
> **CLI Commands:** make (6)
> **UI Navigation:** select the (5), click on (1)
> **Definitions:** is a  (4), means that (2)
> **Cross-References:** go back to (1), in the next (1)
> **SQL:** varchar (1)
> **Env Vars:** varchar (1)
> **Speakers:** - [narrator] (1)

#### Confirming identifying and non-identifying relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=0)** - [Lecturer] So, I've completed the other relationships that I have in my logical database design, and this is what it looks like.
>
> **[0:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=8)** So, you've looked at all of your pen and paper sketches of the logical database model many, many times by now.
>
> **[0:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=17)** Your MySQL Workbench data model should be looking pretty close to what you actually have on paper, right?
>
> **[0:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=26)** And that's a replica.
>
> **[0:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=28)** Hold them up side by side to make sure that each table, attribute, and relationship are the same.
>
> **[0:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=41)** But your two diagrams may not look exactly the same.
>
> **[0:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=47)** You may have noticed when we reviewed the carnality, there was this option to make a relationship identifying or non non-identifying.
>
> **[0:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=59)** There are relationship lines that could be solid or dotted.
>
> **[1:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=66)** We haven't named these different classifications of relationships yet.
>
> **[1:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=71)** So let me give you an example.
>
> **[1:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=74)** When it comes to Brainiac and Post, this is a solid line indicating and identifying relationship.
>
> **[1:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=84)** How do you know that?
>
> **[1:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=86)** Double click the relationship.
>
> **[1:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=88)** Once again, this will bring up the secondary window.
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=94)** I'm going to pull it up a little bit so you can see all the information when it comes to this relationship.
>
> **[1:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=101)** We've already indicated that mandatory on the Brainiac side is unchecked, but then in the center, we have identifying relationship check.
>
> **[1:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=114)** What does that really mean?
>
> **[1:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=116)** The non-identifying relationship, that means unchecking this identifying relationship button now creates this dotted or dashed line, and it indicates that the foreign key remains a non-key attribute in the table.
>
> **[2:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=135)** So, for example, when it comes to Post, its primary key post ID uniquely identifies that each message has been posted and that message is already linked back to the Brainiac.
>
> **[2:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=154)** So, that means that the Post table contains the Brainiac's primary key of Brainiac username as a non-key attribute.
>
> **[2:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=168)** Now, let's look at a different type of relationship.
>
> **[2:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=172)** So, when it comes to DirectMessage, both Brainiac username
>
> **[3:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=181)** and Friend username are identifying the relationship between Brainiac and Friend for the DirectMessage.
>
> **[3:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=192)** Both of these relationships require a solid line.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=197)** These are both the primary key and the foreign key to the DirectMessage associative entity.
>
> **[3:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=204)** So, you want to keep the identifying relationship checked.
>
> **[3:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=211)** Now, for the last two relationships between Brainiac and Friend and Brainiac and Follower, you can now check the relationships and decide whether or not you want them to be identifying or non-identifying.
>
> **[3:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=227)** I've indicated that both for Follower and for Friend, when it comes to a Brainiac, these are non-identifying relationships.
>
> **[3:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=237)** So, now I've unchecked the box on both.
>
> **[4:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=241)** So, you will see them as non-identifying relationships.
>
> **[4:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=248)** Now, as an FYI, you can decide on whether or not you want to create your relationships as identifying or non-identifying when you create your logical database model inside of MySQL Workbench.
>
> **[4:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=265)** So, on the left you can see many different icons to indicate the relationship type as well as the relationship classification.
>
> **[4:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=276)** So, you can create your logic database model with identifying or non-identifying relationships.
>
> **[4:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=285)** For any type of relationship that you want to create, just select the icon that you want, either solid line or dotted line.
>
> **[4:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=294)** When you're done, I'm happy to tell you you're done with entity relationship modeling.
>
> **[5:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/confirming-identifying-and-non-identifying-relationships?u=76281980&t=301)** Congrats.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (2), make (2)
> **Code Keywords:** let (2), require (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** fyi (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### Creating the database schema
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=0)** - [Instructor] With the meticulous attention that you paid to the database design, you've set yourself up for an easy creation of the database schema, and MySQL Workbench does the heavy lifting for you.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=16)** The database schema, as a reminder, is the blueprint that describes how the data is connected to each other and amongst the tables.
>
> **[0:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=28)** It consists of SQL create table definitions.
>
> **[0:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=32)** The syntax goes like this.
>
> **[0:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=36)** Key word create table with user-defined table name, open parentheses, then list each column name with accompanying data type, list the primary keys, list the foreign keys, as needed, and then close the parentheses with the semicolon at the end.
>
> **[1:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=62)** Since your data model has been inputted into MySQL Workbench, you can generate the database schema with just a few clicks.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=75)** All you need to do is go to File, Export, Forward Engineer, SQL Create Scripts.
>
> **[1:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=87)** Now you've launched the MySQL script maker tool.
>
> **[1:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=93)** You can save the script to a file and name it whatever you want.
>
> **[1:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=100)** On this top text field, let's name it
>
> **[1:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=108)** TheBraineryDB.
>
> **[1:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=112)** You also need to select Generate DROP Statements Before Each CREATE Statement.
>
> **[1:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=119)** This makes your debugging a whole lot easier in your database.
>
> **[2:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=123)** So that's why I suggest you go ahead and click that.
>
> **[2:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=128)** Once you're done, click Continue.
>
> **[2:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=134)** Now a new window will appear and ask you which objects to include or exclude from your scripts.
>
> **[2:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=143)** You just need to make sure that Export MySQL Table Objects has been checked.
>
> **[2:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=150)** It should be 'cause it's the default, and you will see five total objects, and five have been selected underneath.
>
> **[2:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=160)** Because views, routines, triggers and user objects are beyond the scope of this course, they should remain unchecked.
>
> **[2:55](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=175)** Now just click Continue.
>
> **[3:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=180)** In order to save the file, go ahead and select Save to Another File, and now you can name the file.
>
> **[3:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=189)** Let's name this TheBraineryDB.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=197)** You can, of course, just put it anywhere that you like and click Save.
>
> **[3:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=211)** Now select Finished, and now your MySQL scripting tool window should go away.
>
> **[3:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=220)** You're ready to run an SQL script to create our database.
>
> **[3:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=226)** We'll be sure to check that the script has no errors.
>
> **[3:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/creating-the-database-schema?u=76281980&t=230)** SQL querying, here we come.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (2), this. (1), type, (1), export, (1)
> **CLI Commands:** mysql (5), make (1)
> **Env Vars:** sql (4), drop (1), create (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 5. SQL Querying

#### Overview of the SELECT statement
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=0)** - [Instructor] Knowing SQL has skyrocketed as a preferred skill for data analysts and engineers.
>
> **[0:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=7)** Learning SQL has stayed relatively the same since the early 1970s.
>
> **[0:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=13)** The emphasis is placed on learning the mechanics of structuring an SQL statement.
>
> **[0:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=20)** However, we should also focus on understanding the decision-making implications of what an SQL query is retrieving.
>
> **[0:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=30)** Let's discuss the mechanics first.
>
> **[0:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=32)** The SQL select statement.
>
> **[0:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=35)** The select clause is first, which contains the list of columns to be returned back to the user.
>
> **[0:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=43)** Then comes the from clause.
>
> **[0:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=46)** It holds the list of tables needed to perform the query.
>
> **[0:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=51)** After from, we have options, depending on which database items we're trying to retrieve.
>
> **[0:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=59)** Most times, we need a where clause.
>
> **[1:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=62)** The where clause places conditions on which data elements will be selected and filtered out for each column.
>
> **[1:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=72)** And sometimes, especially when we want to cluster or sort, we'll use the group by, having, and/or order by clauses.
>
> **[1:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=85)** The group by clause does just that, groups data elements anchored on at least one column.
>
> **[1:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=94)** For example, grouping your organization's customer list based on which continent they reside.
>
> **[1:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=104)** The having clause, which is only tied to the group by clause, places conditions on the group after you have created them.
>
> **[1:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=114)** For example, your manager says they only want to know which regions have more than 1000 purchases.
>
> **[2:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=125)** The order by clause sorts the data in the selected columns in either ascending or descending order.
>
> **[2:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=134)** For example, you may want to order your organization's customer list in alphabetical order, or organized by total purchases amount within the last 90 days.
>
> **[2:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=149)** Although we write the SQL select statement in this order, the processing order is much different.
>
> **[2:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=159)** It goes as follows.
>
> **[2:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=162)** Starting with the from clause, then moving on to the where clause, next comes group by, and having clauses, if needed, the select clause happens next, and and the processing order ends with the order by clause.
>
> **[3:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=184)** At every stage, we're filtering, which means we're systematically removing tables, then rows, and lastly, columns.
>
> **[3:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=194)** We end up with a selective list of columns and rows that meet the conditions of the SQL query.
>
> **[3:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=204)** Now, we can't overlook how null entries can disqualify a row from appearing in a result set, and therefore, making a result sets incomplete.
>
> **[3:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=217)** We also can't overlook how important both primary keys and foreign keys are to our database design.
>
> **[3:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=226)** Without solid primary keys and foreign keys, our SQL querying would return lackluster results.
>
> **[3:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=236)** Pay close attention to the motivation, ethical, and legal impact of which queries are requested and how they are shared.
>
> **[4:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/overview-of-the-select-statement?u=76281980&t=247)** Keeping the SQL processing order top of mind will help you figure out which clauses in the select statement are really needed.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9)
> **Analogies:** for example (3)
> **Code Keywords:** let (1), from, (1)
> **Speakers:** - [instructor] (1)

#### Another toy dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=0)** - [Instructor] Now that we have the database schema, we need to upload it into our MySQL Workbench database partition.
>
> **[0:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=11)** Starting on the home screen, we'll select the MySQL connections, local instance.
>
> **[0:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=18)** I've called mine TheBrainery.
>
> **[0:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=21)** Go ahead, double click and enter your password.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=29)** What'll open up is now your database partition side of the MySQL Workbench.
>
> **[0:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=37)** You'll see that the format looks very similar to what we had over in the entity relationship modeling side.
>
> **[0:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=45)** On the left hand panel, you have a bunch of administration from management to instance to performance.
>
> **[0:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=53)** You don't need to worry about any of this in this course.
>
> **[0:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=56)** There's also another tab when it comes to schemas.
>
> **[1:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=60)** Again, this is outside of this course, so don't need to worry about it.
>
> **[1:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=66)** The main panel has the ability for you to write your SQL scripts.
>
> **[1:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=71)** Each number is lined with a particular number associated with it.
>
> **[1:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=77)** So of course right now what you see is just a number 1 with the blinking cursor.
>
> **[1:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=83)** Above that, you have a series of different icons.
>
> **[1:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=87)** We'll only be concerned about the lightning bolt that happens to be in yellow.
>
> **[1:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=92)** It is the one that helps you execute and run any of your SQL scripts.
>
> **[1:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=102)** So now let me go ahead and open up our database schema.
>
> **[1:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=108)** File, open SQL script, and then select the SQL schema, which I called TheBraineryDB.
>
> **[2:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=122)** Once you click open, you'll see it populate inside of your SQL scripting space.
>
> **[2:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=130)** This should look very familiar to you as we just created it.
>
> **[2:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=136)** All the tables with their primary keys, foreign keys, and other information is listed.
>
> **[2:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=145)** One thing to note is that you'll see that there's different color codings.
>
> **[2:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=150)** The blue tends to indicate a command that is being run if there's two dashes before some text that indicates a comment.
>
> **[2:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=160)** So up at the very top, there is a comment that says, "MySQL Script generated by MySQL Workbench."
>
> **[2:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=169)** But then you'll actually see a command that would run and execute.
>
> **[2:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=174)** For example, you will see set and then a series of instructions.
>
> **[3:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=182)** So now let me go ahead and run the script by clicking on the lightning bolt icon up at the top bar.
>
> **[3:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=194)** Now I know that went pretty fast, but right here in the bottom there is a second window just like we had in the entity relationship modeling side.
>
> **[3:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=203)** You can expand that window and now you can see that every single command was executed.
>
> **[3:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=213)** Each line is given a particular action, status.
>
> **[3:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=218)** So you want to see the green.
>
> **[3:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=220)** Green means approved and accepted.
>
> **[3:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=224)** Anytime you see a yellow, that means that the command could not run, but it did not stop the execution of the next command.
>
> **[3:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=234)** If you get a red icon, that means the script was unable to continue processing.
>
> **[4:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=242)** You're going to have to start over again and make the corrections before you can complete that script file.
>
> **[4:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=252)** In the secondary window, you'll also see what time, what action was taken or what the command was, how long the command took, which is the duration or fetch time, as well as the response.
>
> **[4:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=266)** The response lets you know how many rows were affected by issuing that particular SQL command.
>
> **[4:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=275)** As you can see, all the commands were issued just fine.
>
> **[4:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=280)** Now, every table that we have has zero rows in them, and of course we need to populate them.
>
> **[4:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=289)** All we have done is just make sure that the database schema is now loaded in, so now the database could potentially house rows with some data.
>
> **[5:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=301)** For this demonstration, we'll only populate the brainiac, friend, follower, post, and direct message tables.
>
> **[5:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=314)** As a data scientist and engineer, you likely won't be directly adding data to tables.
>
> **[5:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=321)** It's typically performed by another system.
>
> **[5:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=324)** For instance, on an e-commerce invoice, the items bought, their quantity, total price and details are automatically added to the corresponding database tables.
>
> **[5:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=338)** It's part of the transaction operations and processing to track fulfillment orders.
>
> **[5:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=344)** To populate a database table directly, you'll need to follow the syntax.
>
> **[5:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=349)** Keyword, insert into, and then the table name, open parentheses, the list of the column names, close parentheses, then keyword values, open parentheses, then you list all the values, you close parentheses and then end with the semicolon.
>
> **[6:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=376)** For each table, I am adding a certain number of rows that I've put all of my insert statements into a separate SQL script.
>
> **[6:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=388)** I highly suggest doing this method.
>
> **[6:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=394)** So you go to file, again, open SQL script, and then select the actual database SQL script file.
>
> **[6:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=404)** I called mine TheBrainyDataset.
>
> **[6:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=410)** Now all the tables that I'm showing you, I've added synthetically generated content that's all dummy.
>
> **[6:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=419)** You can see I have insert into, and then there's a series of brainiac rows that all have different sets of information.
>
> **[7:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=432)** Then I go to friend.
>
> **[7:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=435)** Next is follower, then post, and then I round everything out with the direct message entity.
>
> **[7:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=448)** It's important to realize the order in which I created this SQL script.
>
> **[7:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=454)** I started with all of the strong entities, remember what they were, brainiac, friend, follower, and post.
>
> **[7:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=464)** But remember, for the direct message entity, it's an associative entity.
>
> **[7:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=470)** So it needed to have information from both brainiac and friend.
>
> **[7:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=474)** So that is the table that I actually inserted data in last.
>
> **[8:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=482)** So now that you have this file open, once again, you can run this file.
>
> **[8:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=488)** Let me go ahead and scroll up so you see the window, the secondary window of all of the output.
>
> **[8:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=497)** So you just select the lightning bolt one more time to execute all of these insert statements.
>
> **[8:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=507)** Again, it goes really, really fast.
>
> **[8:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=511)** So let me scroll up a bit and you can see all of the insert statements from each of the entities have been added.
>
> **[8:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=520)** All you see is a sea of green, that is what you want.
>
> **[8:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=525)** Now it's time to retrieve data from these files.
>
> **[8:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=529)** What I like to do first is confirm that all the data I think should be in these tables are actually in these tables.
>
> **[8:58](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/another-toy-dataset?u=76281980&t=538)** This means I'm writing select from SQL queries.

> [!info]- Semantic Content
>
> **Env Vars:** sql (11)
> **UI Navigation:** select the (4), go to (2), scroll up (2)
> **CLI Commands:** mysql (5), make (2)
> **Code Keywords:** let (4), continue (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (1), just like (1), for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### SELECT-FROM clauses
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=0)** - [Instructor] Checking the contents of these database tables that you just added, data may seem unnecessary, but I can attest that there have been times when I've added the wrong data to a table.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=16)** So I make it part of my practice to run two types of SQL queries that only use the SELECT and FROM clauses.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=29)** To display the data entries from a subset of tables of a specific table, we use a certain SQL syntax.
>
> **[0:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=40)** It's keyword SELECT.
>
> **[0:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=44)** You list the table names with a comma in between, then the keyword FROM anD ending with the table name and the semicolon at the end, but this right here is where we have the SQL scripts from the last lesson.
>
> **[1:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=67)** So now, in order to write A SQL query for the Post table, I can now write the query inside of a new SQL script sheet.
>
> **[1:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=85)** All you need to do is just type, SELECT
>
> **[1:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=93)** PostID, Message, then FROM and, of course, the table name, which is Post.
>
> **[1:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=106)** You end with a semicolon, and you press the lightning bolt.
>
> **[1:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=114)** It went super fast.
>
> **[1:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=116)** So let me now show you the windows that opened up below.
>
> **[2:02](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=122)** So the first window that opens up is actually what's called your result grid.
>
> **[2:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=129)** You can now see you have PostID, and you have Message.
>
> **[2:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=133)** You have each of the post IDs listed numerically and then the messages for each one of those post ID.
>
> **[2:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=144)** Underneath that window is a third window, which, of course, you can expand, and you will see that it shows you the action, the output, the response and of course, the duration times.
>
> **[2:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=157)** Of course, it took no times in order to run that simple query, and it retrieved all 81 rows.
>
> **[2:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=168)** So if you want to collapse them, you can go ahead and collapse every single one, and now you have the full white space available to you from the SQL script.
>
> **[3:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=186)** Now, you can repeat this type of query for the other tables.
>
> **[3:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=190)** As an example, let me go through one more table, and you can do the rest on your own.
>
> **[3:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=197)** So let me try doing the SELECT FROM query for the brainiac.
>
> **[3:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=207)** So instead of for PostID and Message, let me change that to username and then of course, in the FROM, I want to change that to brainiac.
>
> **[3:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=223)** So once again, you select the bolt to run the query.
>
> **[3:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=229)** Now that you run the SELECT username FROM brainiac query, you can once again expand the second window to reveal the result grid, and you can see all of the usernames listed on the left-hand side.
>
> **[4:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=246)** You can also see how much time it took for that particular query to run, like you did with the last one.
>
> **[4:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=255)** It returned all 25 rows.
>
> **[4:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=261)** You can, of course, collapse them back to the bottom, so you can hide them from your view.
>
> **[4:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=269)** Now, if you want to display the data of all the columns, replace the column names with an asterisk, instead of for the column names.
>
> **[4:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=281)** So for example, if you wanted to display all the columns from brainiac, you would need to replace username with this asterisk.
>
> **[4:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=294)** If you run the query, that secondary window will populate, and now you will see each of the column names and their contents listed for you.
>
> **[5:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=311)** You can go ahead and collapse the secondary window, so you can reveal all of the white space for the SQL scripting, but in our example, we don't have a whole lot of rows here.
>
> **[5:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=327)** It's easy to display them and superficially check them over.
>
> **[5:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=332)** If you have thousands or hundreds of thousands of rows, this approach isn't an effective use of your time.
>
> **[5:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=340)** So what's an alternative?
>
> **[5:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=344)** It's using the SQL function called count.
>
> **[5:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=348)** The count function returns the number of rows that matches a specific criterion.
>
> **[5:55](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=355)** You can count the number of rows where data appears in a specific column or columns, but I like to use it initially to count the number of rows in a table.
>
> **[6:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=369)** So I'm including all of the columns.
>
> **[6:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=374)** Let me show you an example.
>
> **[6:19](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=379)** So let's say I want to know the number of rows that exist within brainiac.
>
> **[6:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=386)** So I'm going to replace the asterisk that you see here on the screen by now typing in count before it, open parentheses,
>
> **[6:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=401)** move the space bar one to encapsulate the asterisk and then close the parentheses.
>
> **[6:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=412)** So the result of the query, SELECT count (*) FROM brainiac;,
>
> **[7:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=424)** it shows up in the result grid.
>
> **[7:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=427)** Now, you might need to expand the column width on this result grid because only one row returned.
>
> **[7:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=438)** You're just receiving the number of counts of how many rows exist in the table, and that count is 25 for the table brainiac.
>
> **[7:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=452)** Now, we can do this particular query for every one of the tables.
>
> **[7:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=457)** So if I were to do this for the Post table, how many rows do you think would be in the result grid?
>
> **[7:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=470)** Let me go ahead and press the bolt, and let's see if you are correct.
>
> **[7:55](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=475)** If you said 81, you've got it.
>
> **[8:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=480)** Now, you can do these SELECT statements for the other tables.
>
> **[8:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=487)** With these two types of SQL queries, you've done a good first pass with the data accuracy check.
>
> **[8:17](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=497)** Your data analytics group may require additional routines that examine the completeness or validity of the data.
>
> **[8:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-clauses?u=76281980&t=506)** While data quality is a high priority, we're here to create and run SQL queries to uncover meaningful insights, and that starts with adding a WHERE clause to our SQL SELECT statements.

> [!info]- Semantic Content
>
> **Env Vars:** sql (11), select (8), where (1)
> **Code Keywords:** let (8), function (2), type, (1), super (1), from, (1)
> **SQL:** select (8), where (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** and (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)

#### SELECT-FROM-WHERE clauses
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=0)** - [Instructor] The majority of your SQL queries will include two or more tables.
>
> **[0:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=7)** They require you to correctly use the primary keys and foreign keys to filter out relevant data.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=16)** The WHERE clause allows you to match rows with the information that's related to each other across tables.
>
> **[0:25](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=25)** Suppose you want to know a list of posts with the word I-P-S-U-M.
>
> **[0:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=36)** So of course, what you want to make sure that you identify are the two tables that you'll need.
>
> **[0:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=42)** That'll be Brainiac and post.
>
> **[0:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=44)** For simplicity, I've gone ahead and written these queries out and have pasted them into our SQL scripting tool.
>
> **[0:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=57)** You'll see that Brainiac and post are listed in the FROM clause.
>
> **[1:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=63)** You'll also see in the SELECT clause that you'll have the Brainiac's first name, the last name, as well as the post message that that phrase appears.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=75)** Now here is the new information.
>
> **[1:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=78)** When it comes to the WHERE clause, you now have to identify what are the primary key and foreign key matches that align so that you receive the information you're looking for.
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=95)** The Brainiac's username must match with the post foreign key Brainiac username, and you now have to make sure that the phrase, content are going to be pattern matched as well.
>
> **[1:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=113)** That's coming from the post entity.
>
> **[2:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=120)** And as you can see on line three, there's a red X.
>
> **[2:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=124)** And remember what I said about red icons?
>
> **[2:07](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=127)** They mean you've done something wrong and there's a correction needed.
>
> **[2:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=134)** So this particular line has an error when it comes to the phrase I-P-S-U-M.
>
> **[2:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=143)** The asterisk have not copied over correctly.
>
> **[2:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=148)** So now if you delete those apostrophes and add them back in on your keyboard, you will now see that that phrase has now changed colors.
>
> **[2:44](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=164)** And of course, the red icon is gone.
>
> **[2:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=169)** Go ahead and hit the lightning bolt and you will now see the result grid.
>
> **[2:58](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=178)** Pull up that secondary window, and now you see all of the messages that contain that phrase, I-P-S-U-M.
>
> **[3:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=193)** Once you verify the results, you can go ahead and collapse that secondary window.
>
> **[3:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=200)** Now suppose you want to know who someone's friends are.
>
> **[3:27](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=207)** When I'm running through a series of SELECT statements, I like to remove the SELECT statement that I had previously and have a clean sheet.
>
> **[3:38](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=218)** So when I add a new SQL query, all I see is just the results of that SQL query.
>
> **[3:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=227)** So I went ahead and removed the previous query, and let me go ahead and add the next one.
>
> **[3:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=234)** Once again, I've already written it, so let me go ahead and paste this SQL query that's looking for the number of friends Brandeis has within this particular database.
>
> **[4:12](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=252)** Now, once again, I have a little bit of a problem, but the red icon isn't there.
>
> **[4:18](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=258)** But if I were to go ahead and select the bolt, you're going to see an error pop up at the bottom of the screen.
>
> **[4:30](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=270)** And there it is.
>
> **[4:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=273)** There is the red X letting me know that the column of Brandeis cannot be found.
>
> **[4:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=281)** That means that once again, I need to make sure that my apostrophes are correct.
>
> **[4:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=290)** Once I change the apostrophes, the word Brandeis has now been color coded, changed, and now I'm able to run the script by hitting that lightning bolt again.
>
> **[5:06](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=306)** And now this particular execution has been successful.
>
> **[5:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=310)** I can scroll and expand the secondary window, and now I can see the usernames who are friends of Brandeis.
>
> **[5:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=321)** Good data Rick, Joy, B, Lady Mo, and Nina M.
>
> **[5:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=331)** As you can see, I like collapsing the windows, so it's easier in order to see what are the SQL scripts that I'm running, and then to see the results separately.
>
> **[5:45](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=345)** Okay, last example.
>
> **[5:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=347)** Now suppose you want to know the followers that Brandeis has.
>
> **[5:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=353)** Once again, I've gone ahead and written this SQL query, so let me go ahead and paste it into this window.
>
> **[6:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=369)** What you will see, of course, is the from tables, Brainiac and follower, you need both them to isolate who are the followers of Brandeis.
>
> **[6:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=381)** Now, of course, in the WHERE clause, you are now going to try to match the Brainiac's username with the foreign key from the follower entity, which is called Brainiac username.
>
> **[6:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=400)** And you also want to make sure that you match up the right person's name that you're trying to find the follower list for.
>
> **[6:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=409)** That happens to be the Brainiac's first name, which of course is Brandeis.
>
> **[6:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=416)** And don't forget, go ahead and change the apostrophes to make sure that the word within the apostrophes are a different color code.
>
> **[7:10](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=430)** In the SELECT portion, you want to identify all of the usernames that are distinct, which means you don't want any duplicates.
>
> **[7:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=442)** So when you're done, go ahead and run that query.
>
> **[7:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=448)** You see that the query has a run and you actually have a result grid.
>
> **[7:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=457)** Now, don't forget to expand that list, and as you can see, there's nothing here.
>
> **[7:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=463)** There's no followers in the list.
>
> **[7:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=466)** That means that Brandeis has no followers.
>
> **[7:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=470)** Even though the result came back with no, it actually is a correct result.
>
> **[7:58](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=478)** As I've demonstrated, the WHERE clause helps us sift through the data in a quick and easy manner, but the SQL query outputs aren't easily organized for human understanding.
>
> **[8:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=493)** For example, in the first query, what if we wanted to group these outputs based upon the Brainiac's name?
>
> **[8:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/select-from-where-clauses?u=76281980&t=500)** We'll get into slightly more meaningful SQL querying statements in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9), where (4), select (4)
> **SQL:** where (4), select (4)
> **Code Keywords:** let (3), for. (2), require (1), delete (1)
> **CLI Commands:** make (5), find (1)
> **Definitions:** means that (2), is called (1), is a  (1)
> **Best Practices:** don't forget (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)

#### GROUP BY and ORDER BY clauses
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=0)** - [Instructor] As a Data Analyst or Engineer, you'll be asked to summarize the contents of a database at different levels of granularity.
>
> **[0:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=9)** The ORDER BY clause helps us order the output in ascending or descending order.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=16)** Let's start with a GROUP BY clause example.
>
> **[0:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=20)** Suppose we want to display the Friends of each Brainiac.
>
> **[0:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=24)** Now, I've gone ahead and written this query out, so let me go ahead and copy and paste it into the SQL Scripting Window.
>
> **[0:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=32)** (keyboard clicks) As you can tell, we are using both of the tables, Brainiac and Friend.
>
> **[0:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=42)** And of course, we want to make sure that we are matching the Primary Key from Brainiac with the Foreign Key that exists within the Friend table as well, in the WHERE clause.
>
> **[0:54](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=54)** Of course, we want to GROUP BY the actual Friends, so we want to make sure our GROUP BY statement has Friends.Username.
>
> **[1:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=64)** What we want to return, of course, exists within the SELECT statement, which is the Friend.Username, and of course, the Brainiacs information.
>
> **[1:15](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=75)** So once we're ready, we go ahead and press that lightning bolt.
>
> **[1:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=80)** In the Result Grid window, you can see the list of all the Friends associated with each of the Brainiacs.
>
> **[1:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=88)** You will see that there are multiple Brainiacs listed for Friends.
>
> **[1:35](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=95)** Please note, that you need to have the Friend.Username listed not only in the GROUP BY clause, but also in the SELECT clause as well.
>
> **[1:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=108)** If you try to run this query without the Friend.Username in the SELECT clause, this will not work.
>
> **[1:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=119)** This is actually one of the rules of the GROUP BY statement.
>
> **[2:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=123)** You have to make sure that any columns listed in the GROUP BY, also appear in the SELECT clause.
>
> **[2:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=131)** But now that you see these results of this GROUP BY, you realize that you're only interested in knowing the Friends of Brainiacs from let's say, the same family with the last name of Smith.
>
> **[2:24](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=144)** Now, you may be tempted to add a condition to the WHERE clause, but that would be a mistake.
>
> **[2:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=151)** The new condition is associated with the groupings, not with all of the tables.
>
> **[2:39](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=159)** So this is when you need to use the HAVING clause, which is processed after the GROUP BY clause has been executed.
>
> **[2:49](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=169)** Remember that from the SQL Processing Order, from earlier in this course?
>
> **[2:56](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=176)** So I've gone ahead and added this last part of the query, which is the HAVING clause.
>
> **[3:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=184)** It's HAVING Brainiac.LastName is set to Smith.
>
> **[3:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=188)** Now don't forget, you have to make sure your apostrophes are correct and that the words within the apostrophes are highlighted a different color.
>
> **[3:21](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=201)** Once you're ready, go ahead and press that lightning bolt.
>
> **[3:26](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=206)** Now you will see that the results that you had from the GROUP BY query has now been modified and filtered out with this GROUP BY, HAVING query.
>
> **[3:37](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=217)** You can now see that Tuchala Smith has five Friends.
>
> **[3:46](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=226)** Now, last up is the ORDER BY clause.
>
> **[3:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=230)** It's common for your clients, both internal and external to the organization, to want to see the output ordered alphabetically.
>
> **[4:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=240)** Suppose you want to display the postings containing the phrase IPSUM organized by Brainiac.
>
> **[4:13](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=253)** This way, you want to see those post groups together by each Brainiac.
>
> **[4:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=260)** So let me go ahead and write this query.
>
> **[4:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=263)** Of course, this query will look very similar to the one we've seen in previous lessons.
>
> **[4:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=271)** Let me go ahead and paste it into our SQL Scripting Window,
>
> **[4:40](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=280)** and you will now see that you are looking at both the Brainiac and Post Tables.
>
> **[4:47](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=287)** The WHERE clause is matching the Primary Key and the Foreign Keys appropriately.
>
> **[4:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=293)** And of course, you're now trying to match that particular phrase.
>
> **[4:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=299)** I'm going to do a quick modification to make sure that the phrase is understandable by the system, changing those apostrophes.
>
> **[5:11](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=311)** And now what I've added is this ORDER BY phrase.
>
> **[5:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=314)** The ORDER BY clause is now organizing the output by Brainiacs Last Name and then First Name.
>
> **[5:23](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=323)** When you're ready, go ahead and press that lightning bolt, expand that secondary window.
>
> **[5:31](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=331)** And now you see the listing of first name and last name of the Brainiac with the messages that include the phrase that we have requested.
>
> **[5:43](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=343)** Now by default, SQL sorts in ascending order.
>
> **[5:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=348)** That's why B is first.
>
> **[5:51](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=351)** And of course, S is last.
>
> **[5:55](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=355)** Now we've gone through several fundamentals of Database Design, Implementation, and SQL Querying.
>
> **[6:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/group-by-and-order-by-clauses?u=76281980&t=363)** It's time to bring it all together, and for you to gain practice in building your own database.

> [!info]- Semantic Content
>
> **Env Vars:** group (10), sql (5), order (4), select (4), having (4)
> **SQL:** group by (10), order by (4), select (4), having (4), where (3)
> **Code Keywords:** let (5), return, (1), default, (1)
> **CLI Commands:** make (5)
> **Cross-References:** earlier in (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 6. Final Project

#### Bringing it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=0)** - [Instructor] It's now time for the final project.
>
> **[0:03](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=3)** Let's take everything I've shown you and apply it.
>
> **[0:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=8)** Start by making any changes to the existing logical database model.
>
> **[0:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=14)** Here's a few suggestions.
>
> **[0:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=16)** One, the DirectMessage entity now only allows the brainiac and friend to exchange one message; you want them to be able to share multiple messages.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=29)** So what type of modifications would you make?
>
> **[0:33](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=33)** Number two, reconsider how the friend and follower information is organized.
>
> **[0:41](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=41)** You want to ensure that you have a clear listing of friends and followers for each brainiac.
>
> **[0:48](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=48)** Think about ways to restructure those entities.
>
> **[0:52](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=52)** You may need to create an associative entity or two.
>
> **[0:57](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=57)** Once you've done that, then try extending your logical database model to include capturing post reactions from a brainiacs, friends, and followers.
>
> **[1:08](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=68)** For example, noting when a post receives a thumbs up or a friend reposts the post.
>
> **[1:16](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=76)** Throughout all of your adjustments, remember to check your relationships and carnalities.
>
> **[1:22](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/bringing-it-all-together?u=76281980&t=82)** Good luck, and meet me in the next video where I show you what I did.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Final project: The Brainery
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=0)** - [Instructor] Well, here you have it.
>
> **[0:01](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=1)** This is my solution to the final project.
>
> **[0:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=5)** As you can see, I've added a couple of more tables, including those associative entities that I referenced in the previous lesson.
>
> **[0:14](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=14)** I have the BrainiacFollowerList, as well as the BrainiacFriendList.
>
> **[0:20](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=20)** I've also made a quick update to the DirectMessage where I've added a DirectMessageId.
>
> **[0:28](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=28)** Remember, I also told you about those post reactions?
>
> **[0:32](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=32)** Well, I also added a reaction table as well.
>
> **[0:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=36)** That includes the reaction name, ID, and of course, the emoji.
>
> **[0:42](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=42)** Since a repost is either you repost it or you don't repost it, I just added a quick attribute inside of each of the tables.
>
> **[0:53](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=53)** PostReactionByFriend and PostReactionByFollower.
>
> **[0:59](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/final-project-the-brainery?u=76281980&t=59)** I've included this solution file in the exercise files if you'd like to review it.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=0)** - Congratulations, give yourself a pat on the back.
>
> **[0:04](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=4)** You've done it.
>
> **[0:05](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=5)** It wasn't as overwhelming as you'd imagined, right?
>
> **[0:09](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=9)** If you're interested in gaining more practice in SQL, check out Kedeisha Bryan's advanced SQL course, or to learn more about leading a responsible AI organization, Elizabeth M. Adams has a great course on this topic.
>
> **[0:29](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=29)** Well, we've reached the end of our time together for now.
>
> **[0:34](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=34)** Thanks for taking this course.
>
> **[0:36](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=36)** For more conversations about data ethics and building more responsible data practices, follow me on LinkedIn or visit my company website at [dataedx.com](https://dataedx.com).
>
> **[0:50](https://www.linkedin.com/learning/practical-database-design-implementing-responsible-data-solutions-with-sql-querying/next-steps?u=76281980&t=50)** Thank you for watching.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **URLs:** [dataedx.com](https://dataedx.com) (1)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Advance Your Database Administration Skills]]
← [[SQL Server Fundamentals- Master Basic Query Techniques]] | **7 of 11** | [[Advanced SQL for Query Tuning and Performance Optimization]] →

## Appears In

- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL, Database Design
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL
- [[Using SQL with Python]] — SQL

---

[↑ Back to top](#)