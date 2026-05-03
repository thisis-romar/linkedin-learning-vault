---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cloud-nosql-for-sql-professionals
url: "https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals"
duration_minutes: 166
duration: 2h 46m
level: Intermediate
updated: 2/6/2025
learners: 81678
skills:
  - NoSQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGNUCZPOxVoDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1583278789254?e=2147483647&amp;v=beta&amp;t=5Qg38Nj78yqHsAgZ3aP3LbtpO0xwXIUdmMfwIesqTxs"
linkedin_topic: Database Management
learning_paths:
  - '[[Develop Your NoSQL Skills]]'
prev_courses:
  - '[[Elasticsearch in Depth]]'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":10,"total":10,"prev":"Elasticsearch in Depth","next":null}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/nosql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Cloud%20NoSQL%20for%20SQL%20Professionals.md)

![Cloud NoSQL for SQL Professionals](https://media.licdn.com/dms/image/v2/C4E0DAQGNUCZPOxVoDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1583278789254?e=2147483647&amp;v=beta&amp;t=5Qg38Nj78yqHsAgZ3aP3LbtpO0xwXIUdmMfwIesqTxs)

# Cloud NoSQL for SQL Professionals

> NoSQL databases can store nonrelational data on a super large scale and solve problems regular databases can't handle: indexing the entire internet, predicting subscriber behavior, or targeting ads on a platform as large as Facebook. But with over 150 NoSQL database types, it can be hard for a SQL professional to know where to start. In this course, Lynn Langit breaks down these types into a few m

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals) | 2h 46m | Intermediate | 82K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Simplify the NoSQL ecosystem](#simplify-the-nosql-ecosystem)
  - [Use cloud services](#use-cloud-services)
- [**1. The Road to NoSQL**](#1-the-road-to-nosql) (4 videos)
  - [Manage data as file or tables](#manage-data-as-file-or-tables)
  - [Add behavioral data](#add-behavioral-data)
  - [Add web-scale data](#add-web-scale-data)
  - [Add NoSQL databases](#add-nosql-databases)
- [**2. Understanding NoSQL Databases**](#2-understanding-nosql-databases) (5 videos)
  - [Store data, query information including NoSQL](#store-data-query-information-including-nosql)
  - [Overcome file system limits including NoSQL](#overcome-file-system-limits-including-nosql)
  - [Overcome RDBMS limits using NoSQL](#overcome-rdbms-limits-using-nosql)
  - [Understand CAP Theorem and data](#understand-cap-theorem-and-data)
  - [Apply CAP Theorem with NoSQL](#apply-cap-theorem-with-nosql)
- [**3. Use Key-Value NoSQL**](#3-use-key-value-nosql) (4 videos)
  - [Store huge, in-memory lookup lists on NoSQL](#store-huge-in-memory-lookup-lists-on-nosql)
  - [Use Cloud Memorystore for Redis on GCP](#use-cloud-memorystore-for-redis-on-gcp)
  - [Use AWS ElastiCache for Redis](#use-aws-elasticache-for-redis)
  - [Review NoSQL key-value architecture](#review-nosql-key-value-architecture)
- [**4. Use Columnar NoSQL**](#4-use-columnar-nosql) (5 videos)
  - [Store events on NoSQL](#store-events-on-nosql)
  - [Use Cloud Cassandra on AWS](#use-cloud-cassandra-on-aws)
  - [Use GCP BigTable](#use-gcp-bigtable)
  - [Use GCP BigQuery](#use-gcp-bigquery)
  - [Review NoSQL columnar architecture](#review-nosql-columnar-architecture)
- [**5. Use Document NoSQL**](#5-use-document-nosql) (5 videos)
  - [Store customer activity using NoSQL](#store-customer-activity-using-nosql)
  - [Use Cloud MongoDB on GCP](#use-cloud-mongodb-on-gcp)
  - [Use AWS DocumentDB](#use-aws-documentdb)
  - [Use AWS DynamoDB](#use-aws-dynamodb)
  - [Review NoSQL document architecture](#review-nosql-document-architecture)
- [**6. Use Graph NoSQL**](#6-use-graph-nosql) (4 videos)
  - [Store customer relations using NoSQL](#store-customer-relations-using-nosql)
  - [Use Neo4j on Kubernetes](#use-neo4j-on-kubernetes)
  - [Use AWS Neptune](#use-aws-neptune)
  - [Review NoSQL Graph architecture](#review-nosql-graph-architecture)
- [**7. Use Specialty NoSQL**](#7-use-specialty-nosql) (8 videos)
  - [Store real-time events using NoSQL](#store-real-time-events-using-nosql)
  - [Use GCP Firestore](#use-gcp-firestore)
  - [Store IoT events](#store-iot-events)
  - [Use AWS IoT events](#use-aws-iot-events)
  - [Use AWS TimeStream](#use-aws-timestream)
  - [Store blockchain entries using NoSQL](#store-blockchain-entries-using-nosql)
  - [Use AWS QLDB](#use-aws-qldb)
  - [Google Cloud Vertex AI Vector Search](#google-cloud-vertex-ai-vector-search)
- [**8. Understand NoSQL Trends**](#8-understand-nosql-trends) (3 videos)
  - [Consolidation and cloud for NoSQL](#consolidation-and-cloud-for-nosql)
  - [Multifunction NoSQL databases](#multifunction-nosql-databases)
  - [DataLake NoSQL alternatives](#datalake-nosql-alternatives)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with NoSQL](#next-steps-with-nosql)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Simplify the NoSQL ecosystem](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/simplify-the-nosql-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/simplify-the-nosql-ecosystem?u=76281980&t=0)** - [Lynn] Is the volume of data that you have to manage outgrowing your database infrastructure? Have you heard about [[NoSQL]] database alternatives and are you wondering if any of those would be a fit for your situation? Have you considered using open source NoSQL [[Databases]], such as [[Redis]], or [[MongoDB]], and wondered whether cloud versions of those would be a better fit, or cloud alternatives such as Amazon DynamoDB or [[Google Cloud Platform (GCP)|Google Cloud]] Bigtable? I'm Lynn Langit, and in this course, we're going to take a look at the different aspects of NoSQL databases. We're going to understand the types of databases, such as key value and document, and we're going to apply them to common business scenarios. We have lots to learn, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[Databases]] (3), [[Redis]] (1), [[MongoDB]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Analogies:** such as (3)
> **Speakers:** - [lynn] (1)

#### [Use cloud services](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-services?u=76281980&t=0)** - [Instructor] In this course, we're going to be working with a number of public [[Cloud Services]], and there are some best practices for working with those while you're learning. We're going to be working with [[Amazon Web Services (AWS)|Amazon Web Services]], or [[Google Cloud Platform (GCP)|Google Cloud Platform]] services. You may choose to use other cloud vendors such as [[Microsoft Azure|Azure]] and your process will be slightly different, but these best practices still apply. First, I recommend that you create a dedicated learning account if possible. This way, if you started some services that you don't need for your production business, they're going to be completely separate. Also, if the particular vendor has a free tier, so some of their services can be tried out with no cost, I recommend using that. It's often marked in the console, so you want to take a look when you're starting up services. And if the vendor has the ability to create a cloud budget and an alert, I recommend setting that up; for example, in Amazon, you just go to the cloud budget section and set up the alert to notify you. Usually I use email for that, but you could use a text as well, and I set the threshold to a small amount, usually around $50 US, so that if I forget to turn off a service, for example, I'll get a notification and not a really big cloud bill. And last but not least, it's really important when you're done trying out whatever service you're learning that you turn it off and/or delete the instance when you're done so that you don't have any excessive charges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Services]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[Microsoft Azure|Azure]] (1)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. The Road to NoSQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Manage data as file or tables](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/manage-data-as-file-or-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/manage-data-as-file-or-tables?u=76281980&t=0)** - [Instructor] To get us started taking a look at [[NoSQL]], let's consider this quote from Craig Mundie, "data are becoming the new raw material of business." The most important part of this is the [[Microsoft Word|word]] are. Multiple types of data. And it's really for this reason that the NoSql movement and set of [[Databases]] was born. To start, we need to see where we came from, and what is the state of data today. So when we think about managing data, we of course think about data as files on file systems. We think about data as tables. It's more specifically relational tables in relational [[Database Systems]], such as [[Microsoft SQL Server|SQL Server]], Oracle, or open source systems like [[MySQL]]. The data in the tables is in commercial such as Oracle or open source, RDBMs or relational [[Database Management]] systems. Data these days is also in data warehouses. These are specialty built systems designed for fast, large amounts of data that are retrieved via aggregate queries. Traditionally, these systems were called OLAP, or online analytical processing systems. And this is in contrast to the data in commercial or open source RDBMs, which have been categorized as OLTP, or online transactional systems. So when we think about storing data in file systems, we need to consider key aspects of working with those systems,
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/manage-data-as-file-or-tables?u=76281980&t=93)** because NoSql was created to overcome some of these limits. So the data is stored on some sort of file servers, traditionally, they were on-prem, but increasingly, they're in cloud based services. Managed by network managers rather than data professionals. Although, as these file systems move to the cloud, the emergence of [[DevOps]] or even DataOps roles is something that I see occurring. Particularly on-prem to optimize for increasing amounts of files, the network managers would configure the [[Hardware]]. Contrast this with key aspects of relational database management systems or RDBMs. These systems would use the [[SQL]] syntax very notably, JOIN syntax to join information between multiple tables to retrieve results, and CRUD, or create, read, update or delete modification operations would use database schemas, and often transactions. And the reason I'm calling these aspects of RDBMs out is that I know that most of my viewers will probably have a RDBMS background but some may not. Some people coming just out of school have never actually seen a relational database. And so I think it's important in context when we start talking about what we have available in contrast to this, to think about where we're starting from. Also, we generally optimize these systems by adding indexes or indices to the tables, or by adding hardware. Key aspects of data warehouses include the following.
>
> **[3:08](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/manage-data-as-file-or-tables?u=76281980&t=188)** The data is modeled using a very specific methodology. Generally, it's called a STAR schema, which represents a star if you will a central denormalized table, which is called a fact table and then related smaller tables which are called dimension tables. This becomes very important when we look at some of the new NoSql alternatives, which don't require this kind of rigid schema modeling. Queries do not use JOINS generally, because the majority of the information is pre-joined and pre-aggregated in some cases in the fact table. CRUD operations use batches rather than incremental or streaming inserts. Traditionally, data warehouse systems were designed for very infrequent updates. In my experience, this is often done once per day or even less frequently than that, and you would optimize data warehouses using aggregations or by using hardware

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (4), [[Hardware]] (3), [[Database Management]] (2), [[Microsoft Word|Word]] (1), [[Databases]] (1)
> **Env Vars:** sql (2), crud (2), olap (1), oltp (1), join (1)
> **Analogies:** such as (2)
> **CLI Commands:** mysql (1)
> **SQL:** join (1)
> **Definitions:** is called (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Add behavioral data](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-behavioral-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-behavioral-data?u=76281980&t=0)** - [Presenter] Now, I opened this section talking about data as a plural entity, and a key situation in the world of data has been the addition a new type of data, which is generally called behavioral data. So what is this? So first of all, it's a data that's not transactional. So I'd like to make an example with a retail store. Traditionally, if you sold something, you would capture that and you would put it in your relational database because you needed to have a transaction. Was the, well let's just call it we're selling sweaters, was the red sweater sold or was it not sold? You wouldn't capture the fact of if someone looked at a red sweater and decided, hmm, they put purchase it later or they looked at it for a certain period of time and then put it back. You would only capture the transaction. Now behavioral data is designed to capture those activities. In our example about the red sweater, what was the footpath the customer took in walking over to the red sweater? Did they go directly to it or did they walk around the store? Did they pick it up? How long was it in their hand? And you might say, well this is impossible. It's really very possible. Some of the merchandise tags in stores have had motion tracker sensors for many years and the foot tracker traffic has been captured by overhead cameras as well as by purchasing information from customer cellphones and many other ways of capturing that information. And as I was just explaining, data is collected via devices, sensors, cameras, all kinds of different methods of collecting the data.
>
> **[1:37](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-behavioral-data?u=76281980&t=97)** If you're on a website, collected by looking at where you click, but in some cases if your webcam is turned on, even by where you eyeball lands on the particular page. So there's an increasing methodology in capturing this behavioral data. And as I mentioned, this data was data that was previously not collected. It just wasn't seen as important. There weren't all these capabilities for capturing this data, but the data has increasingly been something that businesses would find value in. So what are some more examples of behavioral data? From websites, as I was mentioning. Not only, can and do, many businesses capture click tracking, where you click on the particular page and there are, in fact, actual businesses that will set up AB testing to help to get customers to perform the action, whether it's downloading or buying by showing different versions of pages and tracking where people click on those pages. And as I just was mentioning, if there is overhead cameras or some sort of camera associated, there even is this capability to have eyeball tracking as another example. Another use case is from mobile applications. User location can be tracked, user activity, it's a really interesting exercise if you use [[Google]] Maps and you have location turned on, to turn on the timeline feature. Not only will Google track where you have been, but they will estimate what you were doing in transit,
>
> **[3:12](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-behavioral-data?u=76281980&t=192)** I think based on the accelerometer in your phone. If you are a real data nerd like me, you can download that data as a [[JSON]] file and you can take a look at where Google has been monitoring that you have gone and what they think that you've been doing, if you've been walking, driving, so on and so forth. So the key aspect of this is relatively recently, the amount and types and, importantly, volume of data that are available has increased exponentially and because of this, new types of data solutions, most notably [[NoSQL]], have been designed to address working with this data more efficiently and effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[JSON]] (1), [[NoSQL]] (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (2)
> **Env Vars:** json (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### [Add web-scale data](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-web-scale-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-web-scale-data?u=76281980&t=0)** - [Narrator] So what has really driven this growth of behavioral data? It's what is commonly called web scale data. So what does this mean? It's behavioral data collected at a massive scale, scale we've never seen before. And this was first driven by the biggest search engines, most notably [[Google]], but Bing and some of the others ones as well. Many of the [[Microsoft Products|products]] that we see today is [[NoSQL]] [[Databases]] were developed by people who worked at Google at one time, or based on technologies that were designed to address these [[Scalability]] challenges because of the amount of data that Google was collecting, not only to index the Web, which in some ways could be argued was transactional, but increasingly behaviorally, through their [[Android]] ecosystem and through their applications such as maps, and so on. Again, along with Google, the other big social players like [[Facebook]], Twitter, and [[LinkedIn]], joined in in this collection of massive amounts of behavioral data and then turning that into business value, either by monetizing that data, or by using that data to increase stickiness of their sites and so on and so forth. Additionally, over the past few years, the type of data that's being collected as behavioral data, has grown exponentially in volume, because it's, in addition to text, it's picture and video based. Particularly, as of this recording, newer
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-web-scale-data?u=76281980&t=93)** services like TikTok, which is similar to Snapchat, for the younger generation, generally, [[Instagram]], and so on, these types of services not only collect the text data of where you are, what you're doing, what you're looking at, but they collect it in the form of picture or video, which is of course, a much larger scale. Speaking of scale, it has been estimated that Google is working with 20 petabytes per day in 2019. So, this data growth, driven by web-scale behavioral data, changes everything, and it's really where the NoSQL ecosystem came from. File systems and [[Relational Databases]] no longer work at this level of scale, and in this course, we're going to look at how the NoSQL ecosystem has evolved. I've been working with it for over ten years, it's been really interesting to see kind of the loop, and this is the second generation of this course. The first generation was about five years ago, and there's been quite a bit of change in the NoSQL ecosystem, most notably with the growth of public [[Cloud Services]] and the services that I choose to show and that I now use with my customers, has substantially changed over this period of time, as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (5), [[NoSQL]] (4), [[Microsoft Products|Products]] (1), [[Databases]] (1), [[Scalability]] (1)
> **Analogies:** picture (2), such as (1)
> **Speakers:** - [narrator] (1)

#### [Add NoSQL databases](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-nosql-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-nosql-databases?u=76281980&t=0)** - To address this data growth challenge the addition of [[NoSQL]] [[Databases]] has been a common pattern for really many years. However the way it's implemented today has evolved. A key reason to take a look at NoSQL databases is because at web scale relational database performance suffers. Now we'll be exploring in more depth why that is as we progress through this course. But it is important to consider that for certain business cases certain data volumes, certain data types, relational database is not the most efficient answer. At web scale it becomes too expensive to scale these relational [[Database Systems]] in particular. Non-relational or NoSQL databases were created to address specifically this problem. Many many years ago buy vendors such as [[Google]] and [[Facebook]] as well as other groups of developers worldwide. NoSQL databases live in the space between files and relational tables. Some people like to talk about semi-structured tabular data or quasi relational. And we'll be looking at specific types. Whether it's [[JSON]] type of data, XML data or other types of data. Often times that data comes first from files and then is loaded into proprietary storage format for the particular NoSQL database instance type. The NoSQL eco system is predicted to grow by this particular citation from 2015 to 2020
>
> **[1:38](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-nosql-databases?u=76281980&t=98)** at a very very fast clip. 38.6% top in terms of new types of IT systems.
>
> **[1:48](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/add-nosql-databases?u=76281980&t=108)** I think there's a number of reasons for that. The first of which is the maturity of market. When I first started working with NoSQL so many years ago, it really was the wild west. At one time there were over 150 different types of NoSQL databases and it was really kind of crazy to try to figure out which ones were viable, which ones to use and in general the market has really calmed down and consolidated. I think that this is reflected in the adoption of NoSQL. So when we then about what data are today in addition to a file based data which we would see everywhere from laptops to file servers whether there on parameter in the cloud. And tabular data in [[Relational Databases]] or data warehouses. The new type of data that's so important to consider and is really the driving force behind NoSQL is behavior data which is sometimes called event data as well. And that data is most typically put into some kind of NoSQL database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (11), [[Databases]] (5), [[Database Systems]] (1), [[Google]] (1), [[Facebook]] (1)
> **Env Vars:** json (1), xml (1)
> **Versions:** 38.6 (1)
> **Analogies:** such as (1)
> **Speakers:** - to (1)


### 2. Understanding NoSQL Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Store data, query information including NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-data-query-information-including-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-data-query-information-including-nosql?u=76281980&t=0)** - [Instructor] Here's a quote from Ankala Subbarao to start the section on learning more about [[NoSQL]], "Process data is information. "Processed information is knowledge." Now, storing data with NoSQL, in my opinion, can be relatively easy, although there are some challenges as compared to storing in a proprietary relational database system, for example, if you're new to it. So, NoSQL storage systems are used for files, or semi-structured tables, as I mentioned previously. It's not used for relational tables, there is no concept of normalization or relating the data between tables, so first normal, second normal, in normal form, for those of us who come from that background. But there is no normalization in the majority of NoSQL systems, doesn't use relational tables, and really importantly, it doesn't use schemas. So there's this concept and NoSQL of schema on read rather than schema on write. And I've seen a lot of dev teams go wrong with this, because they are under kind of they're mistaken impressionally that either they can write their own sort of schema layer, and although that can be done, you really want to use the best fit solution for the data that you are working with. So if you are working with mission critical relational data for which that you need transactions, you do want to use a relational database system. And NoSQL storage is often specific
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-data-query-information-including-nosql?u=76281980&t=93)** to the NoSQL database type. As we'll see when we get into this, there's general categories such as key value or document, NoSQL [[Databases]], so if you have data coming in in the shape of let's say a document, you will tend to choose a NoSQL database from that category. And data types often will drive the selection of the particular NoSQL database, not always though. Now, querying data with NoSQL. I think when you're new to it, is much more challenging, particularly if you come from a relational background. Because in the name, it does not use the answer [[SQL]] query language, and again, notes from the real world, I've seen a number of dev teams underestimate the amount of effort it's going to take to learn how to query data with NoSQL. So we not using the SQL query language, sometimes it's like it and it's often called something QL. So in the case, for example, of an NoSQL database called Cassandra, you use CQL, or Cassandra query language rather than SQL. But that's illusory, it really is not similar structurally or in ease of use to SQL in my experience. NoSQL doesn't use relational tables and joins. Again, I'm emphasizing this because if you're coming from that background, it's almost in my opinion, more difficult to unlearn what you know about [[Relational Databases]], you just really have to start with beginner's mind and think this is a completely different system, it's not like that, it's something new. And NoSQL queries are optimized by the system type.
>
> **[3:07](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-data-query-information-including-nosql?u=76281980&t=187)** Again, this is an area that I did quite a lot of consulting over the years, and people become really frustrated cause of course, in traditional relational systems, you optimize from pretty well known methods like adding indices, partitioning tables, and although some of those methods work in some NoSQL systems, it is really very specific to the particular system. So a complexity working with NoSQL at scale, which is the reason you use it, is committing to understand based on the provided documentation, how you're going to optimize. I've had a real lot of consulting work around this cause, again, teams most often in startups, they just didn't understand. They said, Oh, we'll just use open source, NoSQL database x and it will be free and it will be easy, and then when they became successful, their database blew up, and they had no idea how to fix it. And this really underscores my last point. Learning NoSQL query and optimization requires time. So what you may save in licensing fees, if you are choosing this for storing majority of your data rather than say something like Oracle, you are going to have to pay in terms of time in your dev team learning how to work with a particular NoSQL database. I really cannot stress this enough. In my experience, working with these different databases. I have worked with probably 20 different NoSQL databases in my professional career, and this is really the key difference between success and failure and returning business value. Committing to the time to learning the proclivities of the particular system, is really a non negotiable aspect
>
> **[4:43](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-data-query-information-including-nosql?u=76281980&t=283)** of getting value out of NO SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (21), [[SQL]] (5), [[Databases]] (3), [[Relational Databases]] (1)
> **Env Vars:** sql (5), cql (1)
> **Analogies:** for example (2), such as (1), it's like (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Overcome file system limits including NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/overcome-file-system-limits-including-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/overcome-file-system-limits-including-nosql?u=76281980&t=0)** - [Instructor] So let's consider how [[NoSQL]] can overcome file system limits when we work with web scale behavioral data. NoSQL uses proprietary storage methods. And as I previously mentioned, you can think of it sitting on a scale between file servers and relational [[Database Systems]]. Now in addition to working with file systems, of course there is an entire ecosystem designed to work with data which is represented as files at massive scale. And that's the [[Hadoop]]/Spark ecosystem. Hadoop/Spark you may know uses its own proprietary file storage system commonly called NTFS or increasingly these days, a new type of storage system which is called a Data Lake. Now I've done a number of courses in the library on the Hadoop/Spark ecosystem and [[Data Lakes]], so you may want to search on those terms if you're interested in understanding more about those use cases. In particular I've done work with genomics or bioinformatic research which is file based and worked with Hadoop/Spark and those use cases are discussed in those courses. So Data Lakes increasingly operate on not only distributed file systems, but cloud-based, such as AWS S3 or [[Google Cloud Platform (GCP)|Google Cloud]] Storage, File Buckets or [[Microsoft Azure|Azure]] Data Lakes. So there are a number of services
>
> **[1:35](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/overcome-file-system-limits-including-nosql?u=76281980&t=95)** that have been released relatively recently, over the past 12 months by the cloud vendors, to help to operationalize Data Lakes. So on the highest volume end, in addition to considering NoSQL, I often will consider Hadoop/Spark, Data Lake cloud-based architectures for massive file-based data solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hadoop]] (5), [[Data Lakes]] (4), [[NoSQL]] (3), [[Database Systems]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Env Vars:** ntfs (1), aws (1)
> **Definitions:** is an  (1), is called (1)
> **CLI Commands:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Overcome RDBMS limits using NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/overcome-rdbms-limits-using-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/overcome-rdbms-limits-using-nosql?u=76281980&t=0)** - [Instructor] Now [[NoSQL]], in terms of overcoming RDBMS limits, we're reminded that NoSQL doesn't use [[SQL]] syntax or JOINS. And because of this, throwing massive amounts of quasi structured data into tabular structures can be much more efficient using NoSQL systems. NoSQL CRUD or create read update and delete operations, do not use schemas as I mentioned earlier. So its schema on read rather than write, or transactions, so they're faster in many cases than relational database CRUD operations. And NoSQL optimization, as I was discussing in a previous movie, is unique to each type of NoSQL system and requires significant dev time to learn if you're new to the NoSQL system. Now when we consider overcoming data warehouse limits in terms of NoSQL, we have these considerations. NoSQL does not use, as we were mentioning, any sort of schemas on write, and particularly traditional data warehouse systems have very strict schema modeling requirements, which is something that I am really familiar with. Previously many years ago, I not only worked in this area, I wrote three books on the topic. So it's interesting to see how technology advances and improves and I am sort of happy to say that a key limit of [[Data Warehousing]], which was some of these restrictive star schemas, has been superseded by some of the NoSQL technologies
>
> **[1:36](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/overcome-rdbms-limits-using-nosql?u=76281980&t=96)** that are now available, which provides better value to the customers. NoSQL does not use aggregations, which is the data warehousing method of indexing or adding duplicating portions of the data stored in the warehouse for faster queries. Again, this process of determining building and rebuilding defragging aggregations, although helpful in data warehouse performance, at its time, really is a set of technologies that have been superseded by some of the advancements in NoSQL. So its kind of exciting to see actually. And NoSQL often, not always, does not use custom [[Hardware]]. Data warehouses were notorious for this. And comparatively expensive vendor commercial licenses. Now again, there's always exceptions to this case. As NoSQL becomes commercialized and grows up, there are some relatively expensive license situations out there. But data warehousing in traditional data warehousing in particular was notorious for almost prohibitively expensive licensing, which is no longer the case with NoSQL solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (15), [[Data Warehousing]] (4), [[SQL]] (1), [[Hardware]] (1)
> **Env Vars:** crud (2), rdbms (1), sql (1), joins (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understand CAP Theorem and data](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/understand-cap-theorem-and-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/understand-cap-theorem-and-data?u=76281980&t=0)** - [Narrator] Next up we're going to get an introduction to the CAP Theorem. This stands for consistency, availability, partitions or partition tolerance, and the thinking is that a database system can have two but not all three of these capabilities. So what are they? Consistency has to do with data and the consistency of the data being written and being read. Now in [[Relational Databases]] we have transactions by default which can be summarized by saying if we had two tables and we wanted to take something out of one and put it into another. Then we can combine or group those two statements as a transaction. They can either all succeed or all fail. [[Banking]] is a classic example here. Generally in [[NoSQL]] [[Databases]] transactions aren't present although there are exceptions that we'll see. It's important to understand the performance overhead that transactions cause. In terms of availability, that means that the system will have multiple copies in case one part of the system goes down, there's a redundant copy. Again, there's a cost to this and partitions increase [[Scalability]] because you can simply add more nodes to serve up more of the data. Now, you can already start to see even if you're new to this how these different abilities can be in conflict. Let's look at them in terms of our systems. It is of course an assumption that we're going to have more than one partition when we have this discussion and of course as we mentioned with one notable exception that I know of we can't have all three in one system. So if we think of our consistency and availability
>
> **[1:37](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/understand-cap-theorem-and-data?u=76281980&t=97)** and not partitioning is really what we get with our relational database. Consistency we get transaction isolation and repeatability. And I already talked about the banking application and availability we can have clustered or duplicated servers with up to five nines of uptime. Of course that's a nontrivial thing to do as all of us who have been DBAs know there's quite a bit of work around that. As I mentioned though key to this is not easy to partition. It's expensive to scale. Let's contrast that with availability and partitioning that's classically present in NoSQL. So partitioning fast and globally scalable and if we took a mobile gaming application, we simply add more nodes and if the data isn't consistent all the time, our game players will just hit refresh. It's not, ya know, if I can never bank account by contrast here and we can have high availability we can have clustered servers and we can have high uptime. But as I just mentioned not transactionally consistent. Of course [[Google]] always has to have the exception case and so of the [[Microsoft Products|products]] that I'm aware of that are commercially available the only thing that claims to be and appears to be having all three of the CAP capabilities is [[Google Cloud Platform (GCP)|Google Cloud]] Spanner. Now, as you might imagine this capacity is expensive and although it's very exciting I only recommend it to use for Google-scale relational data. Now if you're curious, like me, and wondering how they actually did this I put a link to the white paper that talks about how they created
>
> **[3:10](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/understand-cap-theorem-and-data?u=76281980&t=190)** their own time management system called True Time. Which is key to the ability to have globally scalable transactional consistency. It is a really compelling read but it is the exception case everybody else just gets two Google gets three

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Banking]] (2), [[NoSQL]] (2), [[Relational Databases]] (1), [[Databases]] (1)
> **Definitions:** is a  (2), stands for (1), means that (1)
> **Env Vars:** cap (2)
> **Cross-References:** we mentioned (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Apply CAP Theorem with NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/apply-cap-theorem-with-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/apply-cap-theorem-with-nosql?u=76281980&t=0)** - [Instructor] So now let's apply the CAP theorem to [[NoSQL]] [[Databases]]. NoSQL databases, we've been discussing, are designed to overcome the limits of scale and of course, having the C or the transactional capabilities slows databases down, so they're generally AP, available and partitionable. And they're designed for the types of data they serve. So whether it's some kind of file or some kind of document or something else. They are created originally by web-scale companies and they are open sourced. Subsequently, they've been commercialized, there's been new types of NoSQL databases created by non-web scale companies, but you can still see the lineage of the Googles, the Facebooks and the LinkedIns in the NoSQL databases that we use today. And they live between files and relational tables. So if we think of what data are today, we think of files and so we think of laptops, file servers, the [[Hadoop]]/Spark ecosystem for massive amounts of pure file-based data, which had been NTFS but are now moving towards cloud-based [[Data Lakes]], object storers such as S3. We have tables and [[Relational Databases]]. We also have our data in data warehouses, we see that still at the OLAP star schemas. And, of course, the area we're focusing here is behavioral or event, which is the NoSQL database world. Now, as I said, I've been working in the NoSQL world for many years and I've seen some trends that are impacting the NoSQL ecosystem that are going to be reflected in what we cover in this course.
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/apply-cap-theorem-with-nosql?u=76281980&t=93)** Significantly different than the original version of this course. And the number one trend is the performance of cloud and cloud technologies. I do all my professional work in cloud now, I know that there are some situations for which cloud does not fit and those would be cases where on-prem NoSQL would be still a viable option, however I like to talk about my experience in my courses, and I have been 100% on cloud for many years now and I'm seeing cloud vendors increasingly provide professional levels of support, integrated support for example GCP having stack driver support, which is their monitoring solution for open-source NoSQL databases, kind of creative and interesting. And more specifically to this course, the cloud vendors have created competitors to the open-source NoSQL solutions. So, for example, MongoDP is a very popular document database and we'll see in this course how it's being not only supported, but also alternatives are being provided from vendors like Amazon. And, of course, it wouldn't be a cloud course if we didn't talk about serverless and this is impacting NoSQL as well. Serverless, to me, equals usability. Now, there's a hot discussion about vendor lock-in versus usability and flexibility. However, I have to tell you, I'm seeing over and over especially if NoSQL is new to you, that having a serverless option gets you up and running faster and gets you to value faster. So, it's not always the correct approach, but I am going to emphasize serverless cloud based NoSQL when it's available
>
> **[3:08](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/apply-cap-theorem-with-nosql?u=76281980&t=188)** because I'm using it. Also, maturity of the ecosystem. Multiple types of NoSQL solutions in one product. And this makes it a little difficult to present this as an introductory course. Back five years ago when I created the original course, if you were looking at a document NoSQL database, it provided documents. Now that same document database will provide different types of data and different types of capabilities and might have transactions, it might have indexes, so as the market has grown up, the [[Microsoft Products|products]] have grown up. And what I would encourage you to do and I'll provide you with resources throughout the course is if you're interested to go more deeply in a particular NoSQL database type, then do that because this course is designed to cover more broadly the entire ecosystem so that you can select the appropriate products of interest. The products have become more complex and as I said originally, each product has it's own method of interaction and you need to commit some time to it. So now that means even more time to get the proper value out of it. Also, there are now abstraction layers, ORM-like or object relation model layers that sit on top. Some of them, for example, are designed for specific solutions, Amplify from AWS, which is designed to get you to value in a mobile app faster, Abstracts Away, the underlying NoSQL database. And again, for the scope of the course, I won't be able to cover all those, I'll just mention when you should look at them. But they can get you to value faster.
>
> **[4:41](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/apply-cap-theorem-with-nosql?u=76281980&t=281)** Tools and enterprise support also are something worth looking at. So, I'm not saying that it's no longer interesting to look at open-source NoSQL databases, what I am saying is from a practical point, there is an ecosystem built up around NoSQL now that makes it more enterprise-like. That is something you should evaluate when you're considering your use of NoSQL for your solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (20), [[Databases]] (7), [[Microsoft Products|Products]] (3), [[Hadoop]] (1), [[Data Lakes]] (1)
> **Env Vars:** cap (1), ntfs (1), olap (1), gcp (1), orm (1)
> **Analogies:** for example (3), such as (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)


### 3. Use Key-Value NoSQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Store huge, in-memory lookup lists on NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-huge-in-memory-lookup-lists-on-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-huge-in-memory-lookup-lists-on-nosql?u=76281980&t=0)** - [Narrator] We're going to consider this quote: "Memory storage is number one. "The [[Redis]] data set, composed of defined key-value pairs, "is primarily stored in the computer's memory." This is from The Redis, which is a key-value [[NoSQL]] database manifesto. So what would you use a key-value NoSQL database for? You would store huge lists. So key-value stores, such as Redis, there are others, I've worked with one called Aerospike for example. They can store huge lists and as the quote mentioned, the idea is in memory, so very very fast. These lists which are sometimes called dictionaries, are stored in memory by default, but can be figured to be persistent on disk. Of course, there's going to be a very significant performance cost to this, so very often key-value in memory [[Databases]] are used for what is called hot data, or data that needs to be accessed very frequently in applications, look-ups, for example. So it's also used for application and requirements which include caching. So in the past, this would had been an object in your application, a hash table or something. But if there's too much data in it, then you can actually use a database, a NoSQL database. They're extremely fast and easily scalable and as you might guess based on our previous discussion of CAP, they are not by default transactionally consistent which is important to understand. Let's look at a Redis data structure so that we can understand
>
> **[1:34](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-huge-in-memory-lookup-lists-on-nosql?u=76281980&t=94)** what a key-value database looks like in terms of [[Data Storage]]. It's just as the picture shows, there's a key and a value. Now these different types of data that are shown are different types of values that can be stored. These are data types and read as strings, bitmaps, so on and so forth and it's really important to understand these are very different especially when you come from a relational background. From relational data types, there's no such thing as hyperloglogs, for example, by default in [[Microsoft SQL Server|SQL Server]], Oracle, so on and so forth. So you want to understand the data typing in your particular NoSQL system. Not so much for the purposes of write 'cause remember, NoSQL databases are schema on read, more so on read for optimizations such as partitioning, indexing, so on and so forth. Here are some examples of key-value NoSQL databases. There are many more than this, but these are ones that I've used in production, so Redis or RedisLabs, Memcached, [[Google Cloud Platform (GCP)|Google Cloud Platform]] Cloud Memorystore for Redis, AWS Elasticache for Redis or Memcached. Now, I want to give you the one, two, three of NoSQL, and what I mean by this is when you're thinking about whether or not you're going to use a particular NoSQL database, in this case a key-value NoSQL database, you generally will have three ways you can implement it. You can implement pure open source, so there'll be no licensing cost. You can implement enterprise.
>
> **[3:06](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-huge-in-memory-lookup-lists-on-nosql?u=76281980&t=186)** In many cases, many of these open source projects have been turned into commercial entities. For that, you will be paying a license fee and that can be on-prem or in the Cloud. Or you can implement what I call a Cloud native if it's available. And in this case, that's GCP Cloud Memorystore for Redis. You see Redis and RedisLabs. So Redis, itself, is free, requires servers, and there are no tools or support. You know again, it's kind of a losery sometimes about the low cost. The cost that you're going to pay is you set it up, you maintain it, you tune it, so on and so forth. RedisLabs is the enterprise edition, requires servers, and they provide support, tools, training, so on and so forth. This can be on-prem or Cloud. And the Cloud native, in our case for GCP, there's one for Amazon as well, is a managed service and it gives you support and tools that are integrated into the GCP ecosystem, in our case, a staff driver which this option three is relatively new for many of these services of the past 12 to 24 months and I'm finding is a really good option to consider for my enterprise customers, so comparing options two and three is a typical sort of scenario that we work with. In this course, I'm going to be showing you most of the time the Cloud-based solutions 'cause those are the ones that I'm generally going to be using with my customers. So to that end, we'll see some demos coming up here on Cloud Memorystore and then the Amazon solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (10), [[NoSQL]] (9), [[Databases]] (3), [[Data Storage]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** gcp (3), cap (1), sql (1), aws (1)
> **Analogies:** for example (3), such as (2), picture (1)
> **Definitions:** is a  (4), is called (1)
> **CLI Commands:** aws (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [narrator] (1)

#### [Use Cloud Memorystore for Redis on GCP](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-memorystore-for-redis-on-gcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-memorystore-for-redis-on-gcp?u=76281980&t=0)** - [Instructor] To work with the [[Redis]] key value [[NoSQL]] store on the [[Google Cloud Platform (GCP)|Google Cloud Platform]], you have a number of choices. And what I've done is I've set up using cloud memory store, here in the instance for us to work with. It's pretty fast to set up and if you want to try this out and you don't have a [[Google Cloud Platform (GCP)|Google Cloud]] account, just set a new one up, you get $300 in free credit and then you'll have to enable the API at just the click of a blue button. Took about five minutes to set it up. I'm going to demonstrate what this looks like and how you would connect to it. So, inside of here, I have already set one up, but you would just generally click this instance and you can see cloud memory store is a fully managed Redis service for Google Cloud Platform and like other services, it's managed, it tells you how much it would be per month, you set the instance information, the basic or the standard. Notice you're not going with high availability here on the standard, if I switch that, there's the price difference. Here you set the location, you set the capacity. Notice if I put this up, then that just goes up by a factor of, you know, an appropriate amount there and then it shows the estimated network throughput for your [[Capacity Planning]]. You can set the Redis version, three, two, and four are supported as of this recording. If you have a custom configuration, you can add that. You set up your networking information, and then you can set up your instance IP address range. Now once you set that up, what you get is you get an integrated, managed Redis cluster
>
> **[1:36](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-memorystore-for-redis-on-gcp?u=76281980&t=96)** and you can see you get some simple monitoring here. You can see the instance properties, connection properties, and the authorized network. Now, if you wanted to, you could simply take Redis backup file, which is called a dump file, and you can import it. So if you had like an on prem Redis, or you know, coming from another cloud or something, you could just import that and then bring that in. Now, as is typical with many services in the Google Cloud Web UI, there is no capacity here to insert data, query data, and this is sort of typical for [[Google]]. Oftentimes, they don't make functionality available in the Web UI. If you wanted do further probing or interaction using a Google client, you would use this cloud shell and that would open up a VM and then you could use their scripting, which is the GCloud command and you could interact that way. So, in their documentation, you could then just type GCloud and this is a separate VM, so client, if you will. Now that's one way to do it, another way to do it is to, let me close this out, simplest possible way here from their documentation is to set up another virtual machine on your Google infrastructure and to use the telnet, kind of old school methodology of just basically pinging your instance. So you can see, first you just install it, and then you get the instance IP address and you just connect to the port.
>
> **[3:11](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-memorystore-for-redis-on-gcp?u=76281980&t=191)** And then once you connect to the port, then you enter some Redis commands. Now when you interact with Redis, it's a set and a get. Again, like I was saying, this is the world of [[SQL]], it's NoSQL, so set hello world and then you get hello. This is sort of the, you know, simplest possible way. So I have this set up and the IP is here and then I have the compute engine instance set up so let me SSH to that. And again, in the Google world, if you're new to this, unlike some of the other worlds, Amazon notably, you have this integrated terminal. I think maybe Amazon actually has this now, but it's relatively new. Google has always had it. So, you get automatic key transfer and here you're into the terminal. So let's go ahead and get apt-get, so we can just copy this and I misspoke there, let's get telnet using apt-get, okay, so there it is, and I did install it once, I'm kind of just doing this for illustration purposes. So let's get a text editor here and fix this. So now, I will get the instance IP address and telnet to it, so the instance IP address is here and then, I just offline, I used a text editor to set this command up. And there's our connection and we are connected and so now, we can type ping, we get back pong. And, we can type
>
> **[4:46](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-memorystore-for-redis-on-gcp?u=76281980&t=286)** set hello world, and we get back OK. And then we can get hello. Now, if we wanted to, at this point, we've put some data into our Redis instance, so we could export this as a backup file and we can move this around. Now when we're working with this instance, we can see that we have a certain capacity set up here and we have the basic monitoring inside of here, but we can integrate with the Google monitoring stacked, or over monitoring of this instance lives within the Google network, so there are other ways to work with Redis in Google. For example, if you just type Redis, you can see that we have some click to deploy and this is open source Redis that has been set up and can either be run on containers, or it can be run on [[Virtual Machines]]. So, when you are working with Redis on the Google Cloud Platform, I recommend you take a look at memory store or basically, you just type in here because there are more solutions coming up, you can see Redis Enterprise from Redis Labs is available, and they've configured it. So, it's really quick and easy to set up a key value store, now I did kind of skip over the client. Redis itself has a client, a [[CLI]], that you would install, I just kind of did a hello world, so you'd want to look into the documentation here, export and import data, and then setup the Redis client,
>
> **[6:20](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-memorystore-for-redis-on-gcp?u=76281980&t=380)** or the API, which is more typical, is that you would be programming against this in your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (17), [[Google]] (8), [[Google Cloud Platform (GCP)|Google cloud platform]] (3), [[NoSQL]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2)
> **Prerequisites:** set up (10), install (3), setup (1)
> **CLI Commands:** gcloud (2), apt (2), make (1), ssh (1)
> **Env Vars:** api (2), sql (1), ssh (1), cli (1)
> **Definitions:** is a  (2), is called (1)
> **Tools:** terminal (2)
> **Cross-References:** coming up (1)
> **Documentation:** the documentation (1)

#### [Use AWS ElastiCache for Redis](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-elasticache-for-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-elasticache-for-redis?u=76281980&t=0)** - [Instructor] Now, to work with managed, no-sequel key value [[Redis]] on Amazon, I'm in the Amazon console here, and again, like with [[Google]], you can just set up a trial account. And notice when you type Redis, you get their managed service, which is called ElastiCache. Now, unlike Google service, this took a little longer when I set this up, so it took about five, 10 minutes, so Google's took less than five. So, I'm going to start it and probably pause the video. So if I click get started now, you can see I have two options. I have Redis, or I have Memcached. So again, this shows, really, an example of a cloud-managed version of an open source, key value, no sequel store for hot in memory data. So you can see ElastiCache for Redis offers multi-availability zone with auto-failover and enhanced robustness, so it's optimized, so it's often used for cacheing, message broker, and you can set up Cluster Mode, so you would just fill in this. And of course if you were doing this in production, you would script this, and you would capture your script in your source control. This is really just for demonstration. No sequel course, and you can see the engine compatibility. They have a little bit more variety here. Google, you'll remember, had only less versions. The port, parameter group, number of replicas, and the node type. So you can see this is set up by default for a pretty big size, and the idea is, again, that this is going to be a massive [[Data Storage]]. Now if you're using a brand-new Amazon account, you might have to make sure that you can
>
> **[1:35](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-elasticache-for-redis?u=76281980&t=95)** get this number of instance. These are easy to perch a machine instances, 'cause if you are using this instance size for something else, Amazon purposely limits, as does Google and [[Microsoft Azure|Azure]], everybody, how many of big instances you can get. It's basically for your own protection so that somebody doesn't get in there and spit out too many instances and run up charges. So you can see here, you've got advanced settings, multi-AZ, subnet group, we're going to create new, we're going to call this a demo-redis, no sequel, no sequel course. Here's your VPC, and you need some subnets, so, 'cause you got to have high availability. You can have encryption and with Google you can have this stuff as well; it's just not all these parameters are exposed via the web UI. This is, again, kind of a vendor difference. Google you can get 'em via gcloud, it's still kind of the same capabilities; it's just differently how you get 'em. Here you can important again a dump file and set up automatic backups. This is the managed aspect and have the maintenance, either by no preference or maintenance window. So you fill this out and then you just click create, and then basically you wait. So then you can access your Redis cluster. Now, while we're waiting for this, just a couple more things to consider in the Amazon ecosystem. Kind of like Google, you can have Redis that is not Amazon optimized, if you will, or managed, by going over to their marketplace. You might remember we went to Google's marketplace,
>
> **[3:09](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-elasticache-for-redis?u=76281980&t=189)** and we looked at their Redis-created implementations. So the difference is, you know, Redis is creating those and optimizing them for the vendor, rather than the vendor creating 'em, and in real production situations, it is interesting to see who does a better job. So I've actually low tested at scale, you know, for example, an Amazon configuration for Amazon versus a Redis configuration on Amazon. So you can see over here, if I search Redis in the marketplace, these are images, basically. But we have a number of different images that have been made available. Some by Redis Enterprise, which is the commercial sided of Redis, and some by, you know, different vendors that use Redis in their product. So, again, lots to choose from. When you're just getting started, I really recommend, that's why I'm showing this first, to use a vendor's implementation, if you're going up on the cloud. Of course with this you would also have to create a full client, and so you get an [[Amazon EC2|EC2]] instance and then you would install the Redis binaries for the Redis client, and then can interact from a command line. Or if you want to, you can go directly to the API. You can see in the menu options, we have Redis, Memcached, which is the other engine, Service Updates, Reserved Nodes. This is a way to save money, basically, in production. Backups, Parameter Groups, Subnets, Events, and then we do have a client that we can look at here. I actually think I'll just pause the video and then come back to this when it's complete,
>
> **[4:42](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-elasticache-for-redis?u=76281980&t=282)** so I can show you what it looks like. Okay, you can see in the Amazon console that my ElastiCache Redis cluster is now available. So, inside of here, it's Redis. There's one shard, three nodes. Here's the node type. Status is available, it's up to date, it's not encrypted. And, if I click here, you can see more information about it, as well as, I have the ability to perform the actions that are available. Backup, modify, delete. I can migrate data from the end point. It's really important to understand where the endpoint is, so here it is. And, if I were going to then work with this, I would use this endpoint from my separate client, a machine, which would probably be a easy two instance here, and importantly I would have to set up the appropriate security rules. When you are working with server-based instances on the cloud, you have to set up your security rules, and at Amazon, of course that's in your security group to allow traffic from this port, 6379. Like in Google, if we click in here, we can see that we have some information about the the nodes, and if we click the node here, we can see that we have some basic metrics shown here, called watch metrics in the case of Amazon, for each node, so CPU utilization and swap usage, which is memory, memory, network, so on and so forth.
>
> **[6:17](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-elasticache-for-redis?u=76281980&t=377)** So, something specific to Redis, so evictions, reclaimed items, this is to do with memory usage, because of course the idea here is that you're going to have all of your data in memory, and you're going to size your cluster appropriately. So you can see at the node level. If we wanted to add a node, we can do that here. Now of course, as with Google, when we're in the Amazon world, we use the console for learning, but for any sort of production situation, we should be using the AWS [[CLI]]. Just script any changes to our cluster. We should also capture our cluster configuration and put that into our source control for any sort of production situation. So if we wanted to then get rid of this, then we would click here, and then we would simply click on delete, and then it would, by default, make a final backup. We don't need one in this case, and we're going to say delete. And then I will also remind you that, if in an earlier movie you created a GCP memory stored instance, and an EC2 client, you're going to want to shut those off as well, if you're done working with them at this point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (20), [[Google]] (11), [[Amazon EC2|Ec2]] (2), [[Data Storage]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** node (6), make (2), az (1), gcloud (1), aws (1)
> **Env Vars:** ec2 (2), vpc (1), api (1), cpu (1), aws (1)
> **Prerequisites:** set up (6), getting started (1), install (1)
> **UI Navigation:** in the menu (1), click on (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** kind of like (1), for example (1)
> **Tools:** command line (1)

#### [Review NoSQL key-value architecture](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-key-value-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-key-value-architecture?u=76281980&t=0)** - [Instructor] So, now that we've seen a cloud key-value [[NoSQL]] database, namely [[Redis]], in action, let's talk about where you would use this in the real world by example with an architecture. So for my architectural examples in this course, I've tried to use reference architectures published by Amazon or [[Google]], rather than ones that I created myself for clients. First because my client ones are proprietary and second, one of the nice features of some of these architectures, mostly the Amazon ones, is that they include a CloudFormation template. So, I've put the link here, and if you want to actually just click that template, it will build the architecture so you can actually explore it in more detail. However do be aware, there can be some substantial cloud service charges if you choose to do that. So anyway, this first architecture is a scalable chat app and it uses a pub/sub, or a publisher/subscriber pattern. And I picked it and I thought it was interesting because this is similar to a situation I had with a real client where the natural thing is to use pub/sub 'cause it's a service. So I thought it was interesting 'cause it showed an alternative to using pub/sub with key-value NoSQL implementations so ElastiCache. It has a [[Node.js]] front-end, and it has a Node.js/[[WebSocket|WebSockets]] backend and like I said, the link is to the Amazon blog post that explains the connection through WebSockets 'cause I'm sure some of you people listening,
>
> **[1:35](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-key-value-architecture?u=76281980&t=95)** will want to know about that. Even though it's not directly related to the NoSQL choice, it's still interesting. And you can also like I said, using CloudFormation, implement the architecture. So here's what it looks like, and you can see highlighted, it's pretty simple which I like. Simple is hard but generally good. So, you've got chat clients going to the Amazon cloud, and inside of a VPC, inside of Elastic Beanstalk, which is a website. It's a service if you will. You're running a node.js application. Those are the chat servers at the front-end and they have an app load balancer. And they'll be on the front. And they are in two separate security groups which is the best practice. And then you can see in a separate security group, you have Amazon ElastiCache for Redis. Now I will mention the security here because again, this is an area whenever you have data that people tend to neglect. So when you have server-based NoSQL solutions on the cloud then you have to configure the security boundaries yourself. So the security groups if you will which are the virtual firewalls. When you server list, then it's a role-based security and this pattern is not, you know, specific to NoSQL. It's just something I don't here mentioned often enough. So cloud server-based requires configuration of security groups and testing to make sure the proper ports are open. In Case of Redis, of course it's 6379 by default. And the case of server list which will seen some other NoSQL solutions
>
> **[3:08](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-key-value-architecture?u=76281980&t=188)** that's proper role-based management. So you can see here the chat app uses ElastiCache for Redis because it's a great solution to keep the chat information very very available and fast in memory and very scalable. So it's a simple architecture that's you know, not I wouldn't say production-ready but it's a great starting point for appropriate concept and it's server elegant use of key value store. So if you want to try it out, you can go to the link, otherwise, this is showing this architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (6), [[Redis]] (4), [[Node.js]] (3), [[WebSocket|Websockets]] (2), [[Google]] (1)
> **CLI Commands:** node (3), make (1)
> **File Paths:** node.js (3)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** template (2)
> **Env Vars:** vpc (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)


### 4. Use Columnar NoSQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Store events on NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-events-on-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-events-on-nosql?u=76281980&t=0)** - [Narrator] In this next section, let's consider this quote, "Data is the new science. "[[Big Data]] holds the answers." From Angela Ahrendts from Apple. In this section, we're going to take a look at capturing customer events with [[NoSQL]]. A typical type of database that we would select for this type of scenario would be a columnstore. An example of this is Cassandra, which is open-source and it could store customer events. This is that behavioral data that we were talking about earlier in this course. If you're in a store, "Where did you walk in the store?" "What did you look at?" "What did you pick up?" Not necessarily, "What did you buy?" So these behavioral events are stored in what are called irregular, or jagged, or sparse tabular structures. Sometimes they're called matrices 'cause they're multidimensional. And they're used to store ragged datasets. They can be used for just retrieving individual events or for retrieving aggregates. It depends on the type of NoSQL store that you select here. And they can be extremely fast either for these individual or aggregate queries. And they're going to be scalable, of course. They are not going to be transactionally consistent by default, or even sometimes it's not even possible to make these stores transactionally consistent. So it's really important to understand the differences between this and using a relational database, for example. It's important to consider how the data is stored in a columnstore. In a relational database, data is stored in a record-oriented manner in relational tables,
>
> **[1:34](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-events-on-nosql?u=76281980&t=94)** so customers and their orders for example. In a columnstore, the data is stored in column families, in a column-oriented structure. And this diagram is from a representation of a service called Dremel that was made by [[Google]] that is the basis for a number of their commercial [[Microsoft Products|products]]. But it really represents visually the difference in the storage of a columnstore and a rowstore. So some examples of columnar NoSQL [[Databases]] are, as I mentioned, Cassandra, which was developed at [[Facebook]] and then open-sourced and took a kind of familiar route, kind of like [[Redis]] and Mongo and some of the other big open-source NoSQL databases. There's a free version and there's the commercial version. Google BigTable, which is sometimes called an events store, is Google's representation of a columnar NoSQL database service on their GCP platform. Also interestingly, you may remember when we talked about the CAP theorem earlier in this course, their product GCP Spanner is transactionally consistent while being highly available and partitionable and it is actually a physical layer that was built on top of BigTable. I put a link to that white paper in this slide because I thought it was an interesting read. Also, and somewhat surprisingly, another columnar as a basis service is GCP BigQuery. This is an aggregation store rather than an events store. So replacement data warehouse and much, much more. Again, when we're looking
>
> **[3:07](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-events-on-nosql?u=76281980&t=187)** at how we're going to select our columnstore NoSQL we have a similar set of three choices as we've presented in previous types. One is pure open-source, Cassandra, so it's free, it requires servers, and there's no supporter tools so it has that cost structure. If you want to capture cloud events then the GCP BigTable is an optional columnar choice. It's a managed service. Notably, it's server-less and Google supplies support and tools. And for cloud warehousing, GCP BigQuery is a managed built on a columnstore but the implementation's a bit different and it's server-less. Both BigTable and BigQuery, I would consider quite advanced products. I've used them since before Inception. Being Google insider, I've had the opportunity to try them out and I've been really excited about them. I mean you have to remember that the basis for this entire industry was generated in companies like Google. So it's not surprising that their services are some of the most performant and provides some of the best value at high-scale. And of course for the cloud warehouse you'll have support and tools, as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (6), [[Google]] (6), [[Microsoft Products|Products]] (2), [[Databases]] (2), [[Big Data]] (1)
> **Env Vars:** gcp (5), cap (1)
> **Cross-References:** earlier in (2), we talked about (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2), kind of like (1)
> **CLI Commands:** make (1), mongo (1)
> **Speakers:** - [narrator] (1)

#### [Use Cloud Cassandra on AWS](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-cassandra-on-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-cassandra-on-aws?u=76281980&t=0)** - [Instructor] So, to look at [[NoSQL]] column stores, let's first look on AWS. And in the search box here, we'll type Cassandra. And relatively new is their Managed Cassandra Service. So let's take a look at that. So, this is less than 12 months old. And the idea here is that Amazon's providing you with their version of optimized Cassandra. And you can see here that you have a Cassandra application and then you have your managed service. So, if we click Get Started, it's really kind of great, and I wish all NoSQL [[Databases]] had this. Because I know years ago when I was exploring all of them, all the different terms and ways of storing and ways of querying are, as I was mentioning, unique to the NoSQL database type. And I love this quick start. It's really well done, so good job, Amazon. So, you can see that you have a couple steps to set this up. So, you would first create what's called a keyspace. And they define what it is in case you're new to this. So, it's a way to group related tables. And they talk about using multiple availability zones for high availability. And then here is the Cassandra Query Language, which would create this empty sample key space. And you can see, here it is. And then just click Create Keyspace. Then the next step is we want to create a table in the keyspace. So, it tells you here that tables are the primary [[Data Structures]], and they're organized into rows and columns. Of course, they're going to be a column store
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-cassandra-on-aws?u=76281980&t=93)** underneath the hood. That's the point here. So you can see here is the CQL to create a table called tutorialtable in our tutorial keyspace. And it has these values in it: name, email, age. And the primary key is the email. And now the table has been created. So the next step is to populate the table with data. And notice here we're going to insert a row. So we're going to insert values into this particular table. The values are shown here. And then we're going to query our data. And run the command. We have a query editor. And we can see there's our record. But of course, under the hood, although this looks quite relational, remember it's a column store. So, in this case, the actual information is stored in a [[JSON]] format. So, I love the ability to quickly get going here if you're new to working with Cassandra. The integration is really nice. I mean, if you contrast this with what you would have to do to go to the Cassandra site, get the binaries, download them, set up a client, so on and so forth, I mean, you're really saving a lot of time. Now, once you set this up, then notice we have an integration with CloudWatch, which, again, is another reason to use a vendor-optimized version rather than an open-sourced version. And then here are your keyspaces. And you can see it's the replication strategy inside of here. And then here's your table.
>
> **[3:07](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-cassandra-on-aws?u=76281980&t=187)** And you can see the schema of the table. And if you wanted to query, we have included query editor in the web UI, which, again, is really sort of nice to work with. So, as with the previous example, we could use, in the Amazon Marketplace, a Cassandra image that was optimized by the Cassandra committers. But my experience would be that when the vendor provides you with a managed service, particularly if you're new to it, it's a great way to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[Databases]] (1), [[Data Structures]] (1), [[JSON]] (1)
> **Env Vars:** aws (1), cql (1), json (1)
> **CLI Commands:** aws (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Use GCP BigTable](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigtable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigtable?u=76281980&t=0)** - [Narrator] Now in the [[Google]] world for columnar [[NoSQL]] [[Databases]] we have Bigtable. And I went ahead and created an instance already. Remember this is sorella so I'll show you what you would need to fill out. The instance name, the ID, the type, production three nodes or dev, whether it's a SSD or HDD drives, cluster location, number of nodes, performance. Here they show the performance. And then again Google will give you a cost estimate. So I'll just put in an example here. And... Once I select a region, and a zone and a number of nodes it gives a cost estimate. Notice if I take the storage size up, of course the cost estimate, well first it's telling me I don't have enough space for this, so the cost estimate will change. Which I just really like this, I think it's a great feature. And then it gives you the ability to put in a replicated cluster as well. As is typical, this creates pretty quickly. So I did create an instance already and you can see here that has three nodes, it gives me a quick view of the storage utilization. Now sort of vendor difference between Google and Amazon is, and I mentioned this earlier, but this does come into play in the NoSQL database world quite frequently for some reason. As Amazon's really good at setting up their UI so you can just click and get started, Google doesn't really do that as often. And this is an example here in Bigtable.
>
> **[1:35](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigtable?u=76281980&t=95)** So inside of here even though you can create the instance, you can't really do anything in terms of tables or data inside of here. You have to use the G cloud command. Now what I did because I found their documentation to be a bit hard to go through, is I actually wrote a simpler version. So I have a separate course called GCP essentials that goes over basically almost all Google services. And in here I have sections and the Bigtable one, I actually also use it myself. So you can see that this is from their documentation and the G cloud command uses the cloud Bigtable tool. And so you may remember that to use G cloud you can just open up a terminal in the bottom, and I've already done that here. Just going to bring this up. And you can see that I ran these commands and then I configured the CBTTRC file and then I listed the clusters. So you can see in here I had to put the instance name, the instances list, and then here is the name of my cluster, demo noSQL. There it is. And then to create a table even though in the UI there are tables, you can only look at them, you can't create them from here. So you have to use either the STK with you know node or something, or you can use this G cloud commands. So the way that, that works is create table but in my case I got an error that I missing the instance.
>
> **[3:11](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigtable?u=76281980&t=191)** So I had to put the instance and the correct syntaxes here. So you have to say instance, demo, noSGL, in my case, and create table by table. And then when we list them you have to put the instance. It wasn't picking up the instance for some reason. So you can see there's my table. And then you create a column family. So we created a column family here, called column family one. And then this is how you put data in. So set for my table, for column family one, a test value. And again I have all this here, in terms of a script on [[GitHub]]. And there's the URL for GitHub. So that you can add a column family, you can view it, you can put a test value, and you can read it. So once you put it in, then here we're reading my table and you can see again it's in [[JSON]]. So it's just a little bit different in the way that you interact with it. You can have the monitoring just like you have in Amazon. So it's a similar type of integrated monitoring. Also they have a key visualizer which kind of interesting. This is only significant if you have a whole bunch of keys, it basically is a heat map. And it shows you where your data is. So it's kind of a useful thing. So this is an integrated, unique to Google implementation. And this is something they used internally. And it's a hugely scalable event store called Bigtable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (6), [[NoSQL]] (3), [[GitHub]] (2), [[Databases]] (1), [[JSON]] (1)
> **Env Vars:** ssd (1), hdd (1), gcp (1), cbttrc (1), stk (1)
> **Code Identifiers:** nosql (2), nosgl (1)
> **Tools:** github (2), terminal (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** node (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Use GCP BigQuery](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigquery?u=76281980&t=0)** - [Instructor] Now this next [[NoSQL]] service isn't really NoSQL, so it's a little bit tricky. The underlying storage is NoSQL, but the query layer is actually [[SQL]], so but I'm getting ahead of myself. It's called [[Google]] BigQuery. So in order to use this in your [[Google Cloud Platform (GCP)|Google Cloud]] account, if you go to the marketplace and datasets, and that's just off the menu over here, and then I'm just going to search for some data, so I'm going to pick storm data. This is public data, and if you click that, it'll say View Dataset. Once you click View Dataset, it'll take that dataset and it'll make it available in the BigQuery service. This service is so advanced, it's really kind of almost like magic, so once you click that, which I already did, you can see here's the... BigQuery public data, and then you can see all the different data here including the new NOAA storm prediction center data. So let's see what it's actually called. NOAA, so down here. NOAA Preliminary Severe Storms. So that's going to be here. So this is all public data that you can access, and this really goes back to sort of the beginning of NoSQL and being started by Google. So this service is the commercialization of a set of services that have been used inside of Google for years and years and years, and this service is actually not new. It's been out since 2011. And when it was released, it was so revolutionary
>
> **[1:32](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigquery?u=76281980&t=92)** people didn't actually understand it, they didn't get it, they just didn't believe it, basically. So what is this? Well, the underlying storage is a column store, but you don't see it or care about it because it's serverless. And really the brilliance of the service is that the column store is designed for aggregations, so they're sort of the classic [[Data Warehousing]] of events. However, the top query layer, unlike everything else I'm going to show in this course, is actually SQL, so this is NoSQL SQL. (laughs) Which is a little bit crazy, but I think it's the most advanced, most usable, and it's something I use with almost every customer. Why? Because people want to use SQL, they know SQL, and they want it to be scalable, and they want it to be partitionable, and they don't want to deal with managing servers, and that's really what you get with this. So you can see inside of here I created a query, so I looked at the data itself, which has these hail reports, tornado reports, and wind reports, and I just selected some of the data, and before I clicked Run, it told me how much data would be processed. Why? And again, I think this is the front end of the NoSQL movement. Actually it sort of comes back around to SQL. The idea is you pay only for the amount of data scanned. You don't pay for servers, you don't pay for licenses, you don't pay for [[Hardware]]. You pay for query as a service, if you will.
>
> **[3:07](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigquery?u=76281980&t=187)** And you can see once you run this, you get the result, now this is going to be cached because I already ran it once, and, of course, it's [[JSON]] under the hood because we're in a column store situation. Also you can look here at the execution details, which you might want to when you're running massive queries so see how you might want to optimize this. And again, this course really isn't getting into the depths of optimization, because each of these [[Microsoft Products|products]] could be its own course, but I will tell you that it is extremely important that you understand how to optimize. This is one where I've actually done quite a bit of production work. So you might do something like partitioning the underlying files, compressing the underlying files, changing them to a different format because it was more efficient in terms of columnar reads. So the thing that is fascinating about this is it looks like a SQL database, but it is as far away from a SQL database as can possibly be. It's serverless and massively scalable and a column store. And if you don't believe me looking at this, I highly encourage you to read this white paper which talks about the underlying column store which is called Dremel. And I know when it first came out, I really wanted to understand how Google was able to do it, and I think in terms of what's happening with NoSQL and the possibility of NoSQL, frankly you'll always want to look to the leadership of companies at the scale of Google. And they don't do all of the work, but they've done quite a lot of the work. So if you read in here, it talks about
>
> **[4:42](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-bigquery?u=76281980&t=282)** how this paradigm of distributed compute on a column store was created, and there's the actual diagram that I used, and what are the mathematics behind this, how this actually processes data. You can see it's a nested columnar store. Also this is really useful if you're going to work with this service at scale, because if you understand the underlying storage, then you could understand how to properly optimize so that this amount of data scanned is the least possible, so you can provide the best value for your customers or for your business if you're working directly for a company. So, again, this is one that I would say you're probably surprised is in this course, but I think it's kind of the future, because the SQL query layer is what people want. It's not by accident that a lot of these something QL query languages look like SQL. You might have noticed the Cassandra in the previous movie looked like SQL. It's not, though. This is actual SQL, which is really kind of interesting. So it's in a value to filter when you're looking at NoSQL solutions, what is the query layer language like? How usable is it? And frankly the closer it is to ANSI SQL, probably the higher value it's going to provide more quickly to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (13), [[NoSQL]] (9), [[Google]] (5), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Data Warehousing]] (1)
> **Env Vars:** sql (13), noaa (3), json (1), ansi (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Review NoSQL columnar architecture](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-columnar-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-columnar-architecture?u=76281980&t=0)** - [Narrator] So now let's look at applying this Cloud Columnar [[NoSQL]] services to an architecture. In this case we're going to be building a scalable Ad Tech application and we want to use column stores for both events, which is individual queries and analytics patterns, which is aggregates queries. Via Pub/Sub on the front-end, which is really typical for events or event streams because usually the events come in in streams. Because we're going to actually be working with the [[Google]] ecosystem here, we're going to use their middleware product called Dataflow, which is a implementation of open source Apache Beam, which is the distributed [[Data Processing]] platform that many people at Google, and others, worked with. And importantly, we're going to use a NoSQL Column storer multi service back end. So here's Google's reference architecture for this type of solution. You can see the information is being collected in the modern way with multiple different types of systems collecting the customer events. So we have beacons, so these could be in, for example, a retail store or they could be at an event, we have back [[Microsoft Office|office]] business systems and we have mobile devices, that in this case are getting push notifications when certain thresholds are met. So within [[Google Cloud Platform (GCP)|Google Cloud]], we have Pub/Sub that the events are coming in on, and then our processing is happening
>
> **[1:34](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-columnar-architecture?u=76281980&t=94)** on the Dataflow platform. Messaging is going to Pub/Sub and the notifications through App Engine, which is the server list web hosting set of services on GCP. Germane to our discussion, though, is the back-end and you'll that we have the event and analytic pattern that I've built many times for customers, this really common pattern and I particularly enjoy using Google Cloud for this pattern because, as I've been saying there are services here are really very advanced in terms of the value that they provide. So, Cloud Bigtable is your event store, your scalable event store. And, note, it is serverless as well and BigQuery is your analytics store. So you have the [[SQL]] layer built on top of the column store and that provides the data warehouse functionality in a serverless fashion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[NoSQL]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Data Processing]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** gcp (1), sql (1)
> **CLI Commands:** apache (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 5. Use Document NoSQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Store customer activity using NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-customer-activity-using-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-customer-activity-using-nosql?u=76281980&t=0)** - [Instructor] We'll start a discussion of document [[NoSQL]] [[Databases]] with a quote from Werner Vogels, the CTO of Amazon. He said, it all started in 2004 when Amazon was running Oracle's enterprise edition with clustering and replication. We had an advanced team of database administrators and access to top experts within Oracle. We were pushing the limits of what was a leading commercial database at the time, and were unable to sustain the availability, [[Scalability]] and performance needed that our growing Amazon business demanded. I think that quote is a very useful introduction to document NoSQL databases. [[Google]] wasn't the only player who created the basis for what has become a type of NoSQL database. In other words, the column stores we just looked at. The dominant document store was created out of needs of Amazon. So we're going to take a look at storing customer activity with NoSQL. Using Documents stores, such as [[MongoDB]] and DynamoDB, which is Amazon, to store customer activity. These stores are going to store behavioral events and documents. And they're going to be stored in irregularly shaped tables. These are also called ragged datasets. An example of this is a customer may perform behavior A, B and C in one case, and B, C and D in another case. As with other NoSQL structures, these document databases are extremely fast
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-customer-activity-using-nosql?u=76281980&t=93)** for querying and easily scalable, and they are not by default transactionally consistent. To visualize what this information would look like, here's an example from the MongoDB documentation. Our documents store would store information with a key and a value. But the value would be a document. Those documents generally take formats that are those such as [[JSON]], which stands for [[JavaScript]] Object Notation as shown here. BSON, which is Binary Object Notation which is serialized or other [[Forms]] such as XML. Examples of document NoSQL databases are MongoDB, which is open source or there's a commercial version. AWS DynamoDB, which supports both key values and documents. And newly released AWS DocumentDB, which is MongoDB compatible. Again, as with other categories of NoSQL databases, we have basically three types of implementation choices around document NoSQL databases. We could use pure open source such as MongoDB. Licensing would be free, we would have to set up our servers, there would be no support or tools. So those costs would be substantial. We could use Cloud Document database, such as AWS DocumentDB, which is the managed service. It does require servers. Interestingly, it's MongoDB compatible. And Amazon does supply support and tools.
>
> **[3:07](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-customer-activity-using-nosql?u=76281980&t=187)** Or we could use a multi-purpose NoSQL database. And this is the first of a couple of examples that we'll see in this course of what I call the more evolved or the more useful NoSQL databases. In that Dynamo dB, although originated as a key value store, it has evolved to have full support for documents as well, and I would argue that in many cases, having the capabilities to support two types of NoSQL implementations increases the usability and the value to customers. This is a managed service. It's serverless, which is another huge plus point, and you get Amazon support and tools. And we'll take a look at all three of these in subsequent movies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (11), [[Databases]] (7), [[MongoDB]] (6), [[Scalability]] (1), [[Google]] (1)
> **Env Vars:** aws (3), cto (1), json (1), bson (1), xml (1)
> **Definitions:** is a  (3), in other words (1), stands for (1)
> **Analogies:** such as (5)
> **CLI Commands:** aws (3)
> **Code Identifiers:** db (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Use Cloud MongoDB on GCP](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-mongodb-on-gcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-mongodb-on-gcp?u=76281980&t=0)** - [Instructor] Let's take a look at [[MongoDB]] on GCP. In order to do that, as with previous examples, just go into the search box here in the web UI, and type Mongo, and you'll see that we have a number of choices and as with [[Redis]], when we looked at that in a previous movie, you can see here that we have [[Google]] supported deployments through the Google marketplace. And, I've gone ahead and set one of these up 'cause it takes a few minutes, and you'll notice here that some of them are administered by Google and some of them are administered by Mongo, so it's a similar type of decision factor as what we've seen. Now, over in the deployments manager, what I have done is I have selected to deploy MongoDB, created by Google click to deploy. And, what we're looking at here is a templating solution, so deployment in Google is similar to a cloud formation template in Amazon in that it's an end to end solution and it incorporates all the various objects that you would need and you can see here that I've configured this and it has set up everything that I would need. Actually what I think I'm going to do just to show you what is configurable here is I'll just open this up and see, you get a launch on compute engine, it shows you I have a deployment of this, how much it would cost, it's in VM's, other options would be on containers for example,
>
> **[1:34](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-mongodb-on-gcp?u=76281980&t=94)** it's a database, and here's pricing information. Really helps you get up and going much more quickly than just installing this on a Google VM for example. And then, if you click launch on compute engine, what you then are presented with, is in this case, a nice graphic, which shows you what you're going to get, these are compute engine instances, primary, secondary, and an arbiter in this case. Now one thing I would caution you on my trial account, I had to set the server tier instance count to one otherwise, I exceeded the number of CPU's that were available, and again, this is a throttling that's put on free tier accounts to avoid fraud basically and unexpected charges. But other than that, I could just accept all the defaults, and then, I just click to deploy and it took about 10 minutes to deploy. So once it's deployed, what you have is you have this, which shows the deployment and it gives you more information. Again, this really helps you get up and running quickly, so it's a tip when you're evaluating [[NoSQL]] rather than, you know, going through the pain of installing this manually on either a local virtual machine or a cloud based virtual machine using the marketplace, is really very important when you're evaluating. So you can see once it's set up, then how do you connect to it? As is sort of typical in the Google world, you are going to use the shell. And so here it tells you to use this gcloud command and to connect. So I'm going to copy this command,
>
> **[3:07](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-mongodb-on-gcp?u=76281980&t=187)** I'm going to go over back here and go back home, open up the shell, I'm going to make it a little bit bigger so you can see it better, and then, you can see that I'm SSHing to my particular implementation, and then, once I'm in, what I can then do is I can work with a Mongo shell and I start the Mongo shell with the world Mongo. So this the Mongo client. And again, just to be clear on this, this [[Google Cloud Platform (GCP)|Google Cloud]] shell is a separate VM, so it's a client machine, it's not the actual cluster. And now, we're in the Mongo prompt. Now here, if you're unfamiliar, I just opened the Mongo documentation, and you can see that we're in the page here of the Mongo shell. So if I scroll down to work with the Mongo shell, we are going to display the database that we're using, so we're going to go over here and just type DB and we're in the test database, and then, we're going to insert a value into the test database. Notice the syntax here is collections, so it almost looks like a key value pair, it's just really simple. Obviously this is designed for nested documents, so it could be a lot more complex than x:1, but just to get the idea. And then we'll just paste this here and you can see that the acknowledgement is true and it's inserted and gives you an object ID. So, again, if you're new to Mongo,
>
> **[4:41](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-cloud-mongodb-on-gcp?u=76281980&t=281)** this is a great way to start working with the types of data, you know you can go through here and just use this quick client, I really like the way that this works. The other thing I like about the deployments when evaluating NoSQL solutions on the cloud, is that not only can you set them up really easily, but I'll show you here, if I go in here and I click delete, it's going to delete all of the objects that were created with this, it's a transactional deployment, it's very much like cloud formation Amazon stacks and templates, Google Cloud a platform deployments, and you get them out of the Google Cloud marketplace. So, and the marketplace is right here, but I generally just search because a search works pretty well inside of here. It should, it's a Google product right? So I'm going to go ahead and just go back here and I'm going to go and just delete my deployment because I'm done with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (8), [[Google Cloud Platform (GCP)|Google cloud]] (3), [[MongoDB]] (2), [[NoSQL]] (2), [[Redis]] (1)
> **CLI Commands:** mongo (11), gcloud (1), make (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), similar to (1)
> **Env Vars:** gcp (1), cpu (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)

#### [Use AWS DocumentDB](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-documentdb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-documentdb?u=76281980&t=0)** - [Instructor] So now we're going to take a look at Mongo on AWS or document database. So if I type mongo, again, I really like the clever search capability here, remember when we typed Cassandra, we got a last to cache, so Amazon's doing a good job with SEO here. So we have a relatively new offering called DocumentDB, and DocumentDB is a [[MongoDB]] compatible database service. Now, the cynical among us would say that Amazon is simply trying to basically eliminate all their competitors by creating alternative solutions and I think you wouldn't be wrong in this particular case because, rater than optimize MongoDB for AWS, Amazon has gone the route of creating their own Mongo compatible version, so direct competition. So it's called DocumentDB, I've already made one here, but I'm going to go ahead and click Create and show you what this would look like. It's very much in the vain of the managed [[NoSQL]] [[Databases]], so you can create a cluster, you set up the instance class, the number of instances to set up the authentication, the username, the password, it tells you how much it will cost, and then you create the cluster, and this takes, again, about five, ten minutes, it is server based, and you have the ability to have manage the instances and make snapshots as well. So I've set this up, and you can see once you do that, then it gives you the ability to connect. You can connect as a Mongo client and you can see here, this is the command that you would use from your separate, in this case, [[Amazon EC2|EC2]] instance, to connect.
>
> **[1:36](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-documentdb?u=76281980&t=96)** You also could connect with an application, which would be a typical sort of production use case of this. You can see information about your particular cluster, including the endpoints, information about the backups, so on and so forth. Now, I will leave the client configuration as an exercise for you since we just did it in [[Google]]. You can see here is the directions, it's really very similar, you would have to spin up an EC2 instance, and then you install the Mongo shell, and then once you install the Mongo shell, and then you would use that command that I pointed out there to connect from the client, and then you would be able to use the Mongo shell as we did previous movie using the Google instance of this, and you can see here's an example using the Mongo shell of inserting a more typical sized document. You might remember from previous movie, we just said X is one, but this is sort of a more typical ragged, nested [[JSON]] document, so in this case, db.inventory.insert, and here's the document, and then here, we're calling a find command, and if we wanted to update, we would update here, and then we could delete, which is called remove in this syntax. Now one of the reasons I am showing you this page is, if this syntax just seems really strange to you if you come from a [[SQL]] background, well that kind of is the point. I've been talking about the challenge of learning the particular data access language
>
> **[3:09](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-documentdb?u=76281980&t=189)** for the particular type of NoSQL implementation that you select, and again, I keep saying it 'cause it's nontrivial. I've seen many a dev group just really not consider how long it's going to take them to figure out how to use this syntax if they have a relational background. Now not every dev group does, some come directly out of maybe university and they've never actually worked with [[Relational Databases]], so they don't have to unlearn it, but in any case, it's not a like for like, and that's really, really important. So when you are going through and setting up, you're going to want to always get to the point of creating the cluster, creating the database, and then doing a hello world, which is inserting some data, maybe updating it and deleting it, so you can at least get that level of functionality to understand what it's like to work with the NoSQL product, and again, as an aside, I have to tell you, and having worked with tens and maybe even 50 different NoSQL databases, sometimes just doing that can take too much time, which will tell you quite a lot about the functionality. One of the reasons I'm focusing on cloud based NoSQL databases is they're faster, they're faster to set up, they're faster to optimize, and the reason you use NoSQL is to get value faster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (6), [[Databases]] (3), [[MongoDB]] (2), [[Amazon EC2|Ec2]] (2), [[Google]] (2)
> **CLI Commands:** mongo (8), aws (2), make (1), find (1)
> **Env Vars:** aws (2), ec2 (2), seo (1), json (1), sql (1)
> **Prerequisites:** set up (3), install (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Use AWS DynamoDB](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-dynamodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-dynamodb?u=76281980&t=0)** - [Instructor] Next up in document and key value [[NoSQL]] [[Databases]] is probably the most widely used now NoSQL database in the world, and that's DynamoDB. As I said in my introduction to this section, through the quote with Werner Vogels, the Amazon CTO, Amazon productized this technology that they used to solve their own business problem and I think because of this, this service has been quite revolutionary and highly usable since its initial release and Amazon really just continually improves it. It's kind of to me the standard for cloud NoSQL databases. I always look to see what is going on with DynamoDB because as great as it is, Amazon continues to make it even better. So let's get into it and I'll point out some of the aspects, the core aspects, and some of the interesting new features. So like anything else in Amazon, we click the blue button and it's a tables as a service, so we're going to call this table customers and let's create a partition key. Now, the selection of partition key in production size loads is really important, the data needs to be distributed appropriately, so again, this is part of that learn how to use the product based on what the vendor tells you. And, you can add a sort key. Notice, the table settings, by default, have no secondary indexes. There's a provision capacity set to five reads and five writes, it's not five individual rows or columns. It's vendor-determined capacity. It has alarms set at 80% upper threshold
>
> **[1:35](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-dynamodb?u=76281980&t=95)** and an encryption at [[Representational State Transfer (REST)|rest]], with default encryption type. And, I don't have the required role to enable auto scaling by default. I can also now add tags. Tagging of course is important to identify resources in the Amazon ecosystem, so key value pairs. And I'm going to click create. So the creation is going to be almost instantaneous and the UI here is great, it's really easy to use. Of course, in any production situation, you're going to use the AWS [[CLI]] and script. Any of the work with the tables and check that under your source control. It's really, really great for discovery here. So you can see that we have the ability to associate DynamoDB tables with streams. Well that's pretty logical since eventing and event streams is increasingly a customer request. Here we have table details and notice we have the ability to have a point in time recovery. This is a relatively new feature. We can manage our encryption, we can use our own keys. This is very new, cloud watch contributor insights, it's in preview. So this is Amazon advising you using machine learning as to sizing your table instance and other properties of your table to have best performance. You can have TTL on your data, time to live. Notice you have table status, creation date, the read write capacity mode, and the sizing of the table if you will. Notice here, in the items, we don't have anything,
>
> **[3:08](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-dynamodb?u=76281980&t=188)** so we can create an item. Again, I really have to emphasize how much I like being able to create items inside of the UI. It just really saves me time. So I'm just doing key value pairs and then here, notice the data types, and then I'm going to click save. Notice, here's my item and if I click into it, I can see the text or the tray the text is in, [[JSON]], and notice I have a DynamoDB json, which shows me the allocated information here on lines 3, 6, and 9. Now in terms of querying, querying here is very non [[SQL]] like so it's very important that you understand how to query. I could do a whole course on this. I really recommend that if you're going to use Dynamo and you probably will if you're going to be in the Amazon ecosystem using NoSQL, that you spend some time understanding how to appropriately write queries and you actually read and practice the documentation. You'll just save a lot of developer headache if you do that. Notice here, you have some ability to manage item level information, so TTL, so on and so forth, you can duplicate it. Next over here, we have metrics. So this is a typical Amazon metrics console. Notice this is a subset of the metrics that you can see. Very important that you want to understand throttling, 'cause you maybe want to set the capacity.
>
> **[4:39](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-dynamodb?u=76281980&t=279)** You're paying by capacity here and this is serverless service. You don't care about servers, you don't care about scaling. You have some basic alarms here that don't have enough data at this point, but the idea is that you want to set alarms on when the table capacity is being reached. And here is your capacity setting. So you can use provision or you can use on demand. Again, very, very important, you're looking at a table as a service, it's a different kind of a model in terms of deployment, the serverless model, that I find a lot of customers don't take the time to understand and then either, their table is not sized properly and their application stops, or worse, their table is not constrained adequately and they get too big of a DynamoDB bill, 'cause they haven't through through the patterns of their data usage and they're just throwing all their data in DynamoDB and that might not be the best design for certain cases. Indexes are a really important topic in terms of effective querying in Dynamo. Beyond the scope of this course, but I feel like I'd be remiss if I didn't mention this. Some new capabilities, we have the ability to create global tables for DynamoDB streams. Again, a lot of new functionality coming in here to support stream based eventing solutions. Backups is within the past 12 to 24 months, including a point in time recovery. Originally, the thinking was this is just, you know, hot data that flows through your system into some other more persistent store
>
> **[6:13](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-dynamodb?u=76281980&t=373)** like an eventual relational database for some of the information or maybe a file system, but more and more people are using Dynamo as a core database storage for their application. We have contributor insights, triggers. And another thing I want to talk about is [[DAX]]. So DAX is in response to competition of in memory, large NoSQL type of stores. Not just [[Redis]], other ones as well, they call 'em accelerators. So Amazon calls DAX, DynamoDB accelerator. The idea is to extend the functionality of Dynamo rather than have to go to another accelerator or customized NoSQL solution like Redis, keep it all in Dynamo. So in other words, make some of your tables be in memory. And I think this is actually just very, very astute on Amazon's part because they're really understanding the challenge of learning the different NoSQL databases. And I think that's one of the reasons why Dynamo is and remains a market leader in the NoSQL world, because Amazon has really been very proactive in adding customer features, whether backups, whether in memory, whether, you know, machine learning to analyze the setup of the table. It's a really innovative service, so I think in terms of cloud NoSQL, it's really very important to use DynamoDB as kind of one of the standards in terms of what is occurring and this idea of consolidation is really quite fascinating to me.
>
> **[7:47](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-dynamodb?u=76281980&t=467)** I've had several customers use DynamoDB for all of their NoSQL needs in their solution and it's worked really well for them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (10), [[Databases]] (3), [[DAX]] (3), [[JSON]] (2), [[Redis]] (2)
> **Env Vars:** dax (3), ttl (2), cto (1), aws (1), cli (1)
> **CLI Commands:** make (2), aws (1), find (1)
> **Definitions:** is a  (3), in other words (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Review NoSQL document architecture](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-document-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-document-architecture?u=76281980&t=0)** - [Instructor] Let's look now at a reference cloud document, [[NoSQL]] Architecture. This one was actually published by Amazon. But interestingly, I'm an advisor to a start up, actually a couple startups, but a startup that built using this pattern. And so it's really interesting to get feedback from a team on how it worked for them. It was their first cloud application. And they recently got funding and launched. So it's been pretty exciting to see their success. So first of all the application Scalable mobile customer application, it's using the events pattern. So the streaming events pattern, and it's using mobile, and it's built on the Amazon ecosystem. So this particular one is using the Cognito serverless user authentication service on the front-end. And important for our discussion in the back-end here we're using a document NoSQL Architecture. So what does this look like ? It's actually amazingly simple. So what has been interesting in the [[Mobile Development]] space is the implementation of frameworks which sit on top of cloud based services. For Amazon, that framework is called Amplify. So the Amplify framework is designed to enable mobile dev teams to get applications up and running on top of Amazon's set of services, and including importantly NoSQL services really really quickly. Using the Amplify framework, the team that I mentored
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-document-architecture?u=76281980&t=93)** was able to get a prototype up and going in less than two weeks. And in a couple of months, they were actually able to get their first round of funding because they were able to have users and show revenue. So the key services that Amplify abstracted away from them was Cognito and Dynamo. It was actually really interesting to see that they thought in terms of a data first model, which they built in the Amplify interface, and then building that model. In other words, creating the structure. So customers table and whatever fields or columns would be in that table would then build tables in Dynamo and really until we got to the point of diving into the performance of the application, they were aware the Dynamo tables were there, but they were really working at a higher level, they were working at the Amplify level. So it kind of reminded me of the days of having object of relational mappers in the relational database world when we had layers up above the [[Databases]]. But this was interesting coz it wasn't just database, other services as well. So in any case, for this particular solution, and others that I've seen, DynamoDB really is all things to the application. It is used for key value storage. It's used for document storage, there are some tables that are using the [[DAX]] accelerator so they're in memory they're hot tables. So I think growing trend I see having these vendor services, and most of them are serverless just be the sort all in one,
>
> **[3:10](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-document-architecture?u=76281980&t=190)** NoSQL store on that vendor platform. Now, that's not to say that using other databases such as [[MongoDB]], or [[Redis]], or Cassandra would be poor choice. It's really all about speed. And because Amazon and [[Google]] have been quickly building features into their own NoSQL services, it's becoming increasingly difficult to find value in services that are built outside of these ecosystems. So it's a real interesting sort of situation, because on one hand of course you don't get locked into the vendor, probably. But the service differentiation is so great, that it's hard to justify not using that vendors offering. So in this particular case, the DynamoDB ecosystem provided excellent value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (5), [[Databases]] (2), [[Mobile Development]] (1), [[DAX]] (1), [[MongoDB]] (1)
> **Definitions:** is called (1), in other words (1)
> **CLI Commands:** find (1)
> **Env Vars:** dax (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 6. Use Graph NoSQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Store customer relations using NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-customer-relations-using-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-customer-relations-using-nosql?u=76281980&t=0)** - [Instructor] To open this section, here's a quote from Eric Schmidt from [[Google]]. "There were 5 exabytes of information created between the dawn of civilization through 2003, but that much information is now created every 2 days." In this section, we're going to analyze customer activity with [[NoSQL]]. We're going to look at graph [[Databases]], such as [[Neo4j]] that store data and importantly, their relationships between the data items. This is defined as nodes and edges that are stored in graphs. However, there's more than one format, as we'll see. And, these graph database are used to store graph-based data. And, as all other NoSQL-type of databases, they're extremely fast for relationship queries and easily scalable, but, by default, they're not transactionally consistent. So, what is this data representation look like? And, this is from a vendor documentation for graph databases. You can see it's the entities, so [[John the Ripper|John]], Andrew, Sara, for example. And they can have [[Metadata]], such as labels, users in this case. They can have properties, such as John has a username, a city, a notifications and a registration date. But the important difference in a graph database, is in addition to the entities, labels and properties, the relationship between the entities is also stored. So, we can see John follows Sara, for example, and John likes "It is the east, and...", so, some kind of quote, I guess. So, the idea here is you're storing,
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-customer-relations-using-nosql?u=76281980&t=93)** both what I call the nouns and the verbs, the entities and the relationships. It's been really interesting to see that Amazon has jumped into the foray here, relatively recently. For a long time, the leading graph database, and the one I use with all my customers, was Neo4j, open source or commercial. And it supports property graphs and is queried with a Cypher programming query language. Within the past 12 months of this recording, Amazon has released NeptuneDB that supports graph-based data in two formats, has two different query engines. One's called Gremlin and that supports CSV-based property graphs. And another's called SPARQL and that supports triples or quads, RDF or turtle data formats. So, there's a lot of complexity in these two graph contenders and you might wonder why is this needed. Well, graph database space in NoSQL is one of the remaining, in my opinion, more open areas where there's a lot of development. Because as data volumes increase, storing the noun/verb or storing the entities and their relationships is still rather new for many of my customers. And so, there are different, sort of, use cases out there. Despite the graph database landscape being relatively new, we still have our one, two, three choices. So, open source, Neo4j, free, requires servers and you have to provide support and tooling. At the enterprise level, there's a commercial version
>
> **[3:06](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-customer-relations-using-nosql?u=76281980&t=186)** of Neo4j that's licensed. It still requires servers but they supply the support and the tooling. And relatively new on the block, we have AWS NeptuneDB which is a managed service and they supply the support and tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (4), [[John the Ripper|John]] (4), [[NoSQL]] (3), [[Databases]] (3), [[Google]] (1)
> **Analogies:** such as (3), for example (2)
> **Env Vars:** csv (1), sparql (1), rdf (1), aws (1)
> **Definitions:** defined as (1), is a  (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Use Neo4j on Kubernetes](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-neo4j-on-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-neo4j-on-kubernetes?u=76281980&t=0)** So let's start by taking a look at a pattern that we've seen throughout this course. And this is a vendor or a [[Google]] optimized implementation on GCP. So, in the GCP console, I've typed [[Neo4j]] and you can see we have a lot of different configurations to pick from. The one that caught my eye was the casual cluster. So let's take a look at it. What this does is this is a [[Kubernetes]] app so this uses containers. And for those of you who've done any work with Kubernetes, that's a whole set of learning steps in and of itself and if you layer on properly setting up a distributed no sequel database, that's a lot to do. So using a pre-configured setup out of the Google marketplace can really save you time. And in fact, this one is pretty well done. So I actually spun it up and it just took a few minutes because of course, it's running on the Google infrastructure and their implementations are really so fast to start up, and it supplies you with a testable cluster, really, really quickly. So if you click configure, what you get is a deployment, again, as we saw in earlier movies, you just fill out the UI here. Now notice there's two steps. The first thing you have to do is create a Kubernetes cluster. So you just click create cluster, that takes about a minute or so, and then once that is created, you'll get a progress bar here, then you click deploy. Now the reason to play is available in my implementation, it won't be in yours, is because I already have
>
> **[1:35](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-neo4j-on-kubernetes?u=76281980&t=95)** a cluster setup so I could deploy another casual cluster onto that Kubernetes cluster. This will be grayed out in your case, until you clicked this. So it's a two step deployment. So I'm actually going to close this just to make it a little bit simpler. And now I'm going to show you what the completed deployment looks like. So this took, oh gosh, maybe about five minutes to do, and what it does is it sets up on the Kubernetes cluster and Kubernetes, of course is backed by Google Compute Engine [[Virtual Machines]], but you don't see that, it's basically all done for you when the Kubernetes cluster is set up. And then on top of that, the neo4j casual cluster is set up. And you can see you've got some nice documentation here, that tells you how to then access, because, as with all the other no sequel [[Databases]] you then need a client to work with. This becomes a little bit more tricky because you're not working with the Ms here you're working with Kubernetes cluster and so you have to figure out how to connect to the appropriate node in the cluster. So you can see over here to access the cipher shell, the directions tell you to set the app instance name the name you deployed, and the name you deployed here is this one casual cluster A81. So you just changed my graph to that value. And then, so you can see what this is doing here, you can see that what is happening is the neo4j password is being set from the cube CTL command and your cluster, you're getting the secret out.
>
> **[3:08](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-neo4j-on-kubernetes?u=76281980&t=188)** And that's being passed to the cipher shell. And notice here, this is a Docker container image that is registered on the Google Container Registry. So the neo4j public casual cluster, and it really is just for learning. And you can notice this is set up here to access this and then you can either work from the command line, the cipher command line, or you do have the option of accessing neo4j in a browser, and it gives you the information on how to do that as well. Now, what I did is I opened up a separate page here. And let me just scroll up so you can see what this looks like. And you can see that the first line here is, I got the container credentials. And then once I did that, then I passed the [[Representational State Transfer (REST)|rest]] of this through, passing in the container name here. And then once that was run, then I was able to work with the shell. So, the shell is available once a connection is made. And here, then, in this particular cluster, I looked in the neo4j documentation, and you can see that I have an overview in this cluster. And I have three different databases. So how I found that, is I went to the documentation here, and I wanted to view the members of a casual cluster so you can see, here they are. And then, I could work with the databases that were there. And then here's the databases that are
>
> **[4:43](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-neo4j-on-kubernetes?u=76281980&t=283)** part of the casual cluster. I could create a database and so on and so forth and this is inside of the neo4j manual. Also, some of you might be interested in how to import data, so inside of the manual here, basically the sort of canonical movies example and they have the data, that's here, so persons, movies and roles, so you'd have to create these CSV files put them in a bucket, and then you would import them. And that would be here, or it says load CSV, this would be into a [[Google Cloud Platform (GCP)|Google Cloud]] Storage bucket. So then you could run the canonical movie example. The thing that I was really impressed with this, is how quick and easy it was to set up. And the fact that I could set it up on Kubernetes, which is a modern sort of infrastructure. So I really liked, again, using the marketplace that's a pattern. And I really liked using a deployment, because when I'm done with this deployment of course, what I can do is just delete and it will cleanly delete all of the information. It was a really nice way to get set up quickly, so that I could explore running neo4j on GCP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (9), [[Neo4j]] (8), [[Google]] (5), [[Databases]] (4), [[Virtual Machines]] (1)
> **Prerequisites:** set up (5), setup (2), configure (1)
> **Env Vars:** gcp (3), csv (2), a81 (1), ctl (1)
> **Definitions:** is a  (5)
> **CLI Commands:** make (1), node (1), docker (1)
> **Tools:** command line (2), gcp console (1)
> **Cross-References:** as we saw (1)
> **Documentation:** the documentation (1)

#### [Use AWS Neptune](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-neptune?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-neptune?u=76281980&t=0)** - Now for this next example we'll look at Amazon. So here if we type, [[Neo4j]] we don't find anything. Then, of course, you may remember from the earlier movie that Amazon has an alternative. And this is you know, just kind of similar throughout this course where [[Google]] seems to be supporting the open source version and Amazon seems to be creating an alternative version. Which one's better? You'll have to test to find out but it is an interesting pattern. So their graph database is called Neptune. And to work with that, you click launch, Amazon Neptune and you can see that you have different engine versions and then instance classes. And their instances are set pretty large. So again, be cautious when you're testing this. This is not set up for free tier or small instances and tells you that right here, "Neptune does not have a free tier." So be sure to turn it off when you're done if you're studying. So by default, you're going to create read replicas in a different zone and then you're going to have a database identifier and I'm going to call it, nosqlgraph and click next. And here's the VPC subnet availability these zone setting so I'll just go to defaults. So for the DB cluster identifier, I'm just going to leave it blank. And for the other settings, we'll just go with the defaults. I'm going to take off Deletion protection. This is something that is a little bit annoying when you're testing. I understand from a production point but if you don't take it off you can't delete. So it's just a aspect of working with testing
>
> **[1:35](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-neptune?u=76281980&t=95)** that you want to take notice of in the Amazon ecosystem. And when I click, Create database. Now, while this is creating, I want to point your attention to the documentation. Again, the brevity of this course does not allow me to go super deep into the complexity here of working with Neptune. One thing I really want to emphasize though, is this idea of which data model Gremlin or RDF Sparkle. It's interesting to look at this because it seems to me that Amazon's going a sort of a different approach than what Noe4J is doing which is trying to be a graph database for all, they're trying to have multiple capabilities. One thing I did note in looking at the documentation is that it is A or B it's not A and B. So you really have to study this and get it right. If you don't know from having worked with your graph data which one's going to work best for you. I did have a client where I worked with RDF and it was in the art museum space where they worked with RDF data in terms identifying the artworks. So that was something I knew that they needed RDF data. In terms of using Gremlin, to me, that seems more generic and more like Neo4J in terms of what I call the noun-verb graph data. So my experience has been RDF is specialized and you'll know when you need it. So let's go back and look at this and see how long this is going to take. One thing that I noticed that was interesting it was very modern
>
> **[3:06](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-neptune?u=76281980&t=186)** is this capability to have a Notebook. And this is indeed a Jupiter Notebook and this is served up by the Amazon Sage Maker ecosystem. And the idea here is that rather than having client I guess would be a Gremlin client or a Sparkle client on a separate [[Amazon EC2|EC2]] instance you could use those libraries through a Jupiter Notebook. And I just find this interesting because this comes to me out of the [[Data Science]] world. So my experience is that graph [[Databases]] are often combined with machine learning workloads and so I think that's where the notebook client is coming in. I think it's interesting they built it into the interface. This is a really new service, And as I was investigating comparisons, I noticed some criticism that there wasn't yet a graph browser built into Neptune. Neo4j is very well known for having a very rich graph browser, a visual graph browser. So I would guess that Amazon as is typical will continue to build out features so by the time you watch it, this might be a little bit different. So I'm going to go ahead and pause this video here and then when these instances are created, I'll come back and take a look at it. So it took about 15 minutes for this to complete and we have two DB instances. So we have the Nosqlgraph instance here and then if we go back, we can see we have this second one as well. So basically what we have is over-reader and we have a writer and we have our typical
>
> **[4:39](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-neptune?u=76281980&t=279)** sort of monitoring, high-level monitoring. And then in terms of clients kind of interesting. Here's the documentation so you can set up here either Gremlin or Sparkle client on an EC2 instance or there's a new type of a client that again, I'll let you explore on your own 'cause it does take quite a bit more time to set up. So you can create a notebook. And once you can a notebook, you're creating a EC2 instance with a Jupiter notebook on it with some examples of both Sparkle and Gremlin. So that took again about another 15 minutes to set that up and then you open the notebook and you'll have the section underneath it where you can connect as a client. So working with Neptune, really interesting, lot of new capabilities. Again, when you're done like any other service you've tried out because this is not the free tier, make sure that you remember to delete everything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (3), [[Amazon EC2|Ec2]] (3), [[Google]] (1), [[Data Science]] (1), [[Databases]] (1)
> **Env Vars:** rdf (5), ec2 (3), vpc (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **CLI Commands:** find (3), make (1)
> **Documentation:** the documentation (3)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (1), open the (1)
> **Best Practices:** remember to (1)

#### [Review NoSQL Graph architecture](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-graph-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-graph-architecture?u=76281980&t=0)** - [Narrator] In terms of looking at an architecture for a graph [[NoSQL]] database. Let's evaluate using one for a scalable marketing customer-analysis application. Again we're going to have an inventing pattern. We're going to use social media feeds here and the reason for using a graph rather than something like a document or a key value store. Is we do want to capture the relationships from the social media feeds, who's friends with who, who likes what. We're going to have a custom query front end and a NoSQL backend. And interestingly we're going to use the data like pattern. I don't know if you remember when we discussed it earlier or if it's familiar to you. The idea is that you have an object store or a huge file system. So in the Amazon case of S3 in [[Google]] would be [[Google Cloud Platform (GCP)|Google cloud]] storage buckets and you apply layers on top of that So that becomes your storage facility. So this comes out of the Amazon ecosystem and this was from a blog posts. And again they have a cloud formation template which allows you to deploy the whole thing in the linked blog posts here. So the idea is that you have users accessing a Neptune utilities and an Apache gremlin client. So custom application on an [[Amazon EC2|EC2]] instance, or could be (mumbles) [[Kubernetes]], some kind of compute inside the VPC and that is going to generate twitter like data into the data Lake so Amazon S3 and then that is going to interact with Amazon Neptune, which is going to use gremlin queries over Amazon Neptune and perform an aggregation of the data
>
> **[1:39](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/review-nosql-graph-architecture?u=76281980&t=99)** that's been analyzed for relationships with the data that is just stored in the data Lake. So Neptune is performing the analysis of the data in the data Lake. Now this is a pattern that I'm seeing more and more where a NoSQL layer is being applied on the top of a data Lake because the ability to store massive amounts of data cheaply is really compelling. S3 storage is far cheaper than traditional for example, relational database storage or data warehouse storage up in the cloud. So this pattern is interesting and interesting particularly in using this graph database to retrieve the relationships and provide that information back to the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[Google]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Amazon EC2|Ec2]] (1), [[Kubernetes]] (1)
> **Env Vars:** ec2 (1), vpc (1)
> **CLI Commands:** apache (1)
> **Cross-References:** we discussed (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 7. Use Specialty NoSQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Store real-time events using NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-real-time-events-using-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-real-time-events-using-nosql?u=76281980&t=0)** - [Instructor] Let's start with this quote from Thomas Davenport. "Every company has [[Big Data]] in its future "and every company will eventually be in the data business." In this section, we're going to look at what I call specialty [[NoSQL]] [[Databases]]. As the NoSQL ecosystem matures, it's interesting to see how the databases evolve to meet customer demands. And the top level trend here is time-based events coming from devices. So in this section, we're going to look at specialty built NoSQL databases that can store [[Real-Time]] events using NoSQL, and we'll start with looking at two versions of a GCP popular NoSQL event database, [[Firebase]] and Firestore, and the idea with this is we're going to store time-based event data. Depending on whether it's Firebase or Firestore, data will be stored and made available in either real time or near real time. And this is used to store event-based data, so jagged data, keys, and varying values. So it's kind of a variant of wide column and key value. And this is extremely fast for time-based queries and easily scalable. And again, it's not transactionally consistent. So, within the past 12 months of this recording, GCP has evolved Firebase, very popular, into another option, Firestore. And we'll start by looking at these two. So Firebase stores one large [[JSON]] tree. It is a complex, hierarchical structure,
>
> **[1:34](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-real-time-events-using-nosql?u=76281980&t=94)** it's harder to organize at scale 'cause it's a single structure. But the important point is it's real time, and presence is supported, and it's designed to be used with mobile apps. This was actually an acquisition, and you can see this in the way that you work with it still today, Firebase is hosted separately from the GCP main console. Contrast that with GCP Firestore, which stores data as collections of documents. It allows for richer, faster queries at scale, it requires less data flattening, and it's designed for GCP applications in general. It is integrated with the Cloud Console.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (5), [[Firebase]] (5), [[Databases]] (3), [[Big Data]] (1), [[Real-Time]] (1)
> **Env Vars:** gcp (5), json (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Use GCP Firestore](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-firestore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-firestore?u=76281980&t=0)** - [Instructor] Here we are in the GCP console. And we've navigated to cloud firestore. Notice when you go to set up cloud firestore, there's two modes. And this is what I was just reviewing In the previous movie. There is native mode. And there is data store mode. They have two different API's. The [[Scalability]] is different. App Engine support is different. The maximum right per second limits are different. Real time updates are only available in native mode. And mobile and web client libraries are only available in native mode. So typically, you'll pick this for mobile. In other words, cloud fire store native mode, and you'll pick data store mode for general application. So if I select this, it is a one time one way selection. And I'm going to select a location here. And I'm going to click create database. Now while I'm doing that, I'm going to navigate over to the [[Firebase]] web UI, which as I mentioned the previous movie, because [[Google]] acquired Firebase is still separate as of this recording from the GCP console. And you can see here, the recommendation is also to use firestore. Although if you scroll down, you can choose the real time database, if you want to. And this is the interface for it. It looks similar, but not quite the same. This is designed for very rapid [[Mobile Development]]. And it provides a number of services
>
> **[1:34](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-gcp-firestore?u=76281980&t=94)** that sit on top of this real time database. So now navigating back to the GCP console, I can create an entity and I'm going to specify that this is a customer and I'm going to add a property and I'm going to set this property as indexable and I'm going to add a second property. And I'm going to set this type to an integer going to call it some number. And I'm not going to index this. And I'm going to to click Create. So here I have my entity notice you can import from a backup file export. As with the other managed data services, I have a dashboard where I can integrate this with GCP monitoring. Here are my indexes. And I haven't created any composite indexes, which would be secondary indexes in this case, again, this will be based on your query patterns. And then you have administrative settings that are available here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (2), [[Scalability]] (1), [[Google]] (1), [[Mobile Development]] (1)
> **Env Vars:** gcp (4), api (1)
> **Tools:** gcp console (3)
> **Definitions:** is a  (2), in other words (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Store IoT events](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-iot-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-iot-events?u=76281980&t=0)** - [Instructor] Now we're going to take a overview look at what I think is really the future of [[NoSQL]]. And this is through the lens of [[IoT]], or [[IoT|Internet of Things]]. I have quite a bit of familiarity with the AWS IoT ecosystem, having worked in a production setting a few years ago when the services were relatively new, for over a year. And what has been interesting to see is how across the cloud ecosystem, whether it's Amazon, [[Google]], or [[Microsoft Azure|Azure]], how these purpose-built systems are evolving because of demand. IoT is one of the big drivers and creators of data that would be appropriate for NoSQL. So event data. And it is challenging to work with using traditional datastores because of the limits of size, also the type of data is event data, which is sort of a classic NoSQL, because you will have some values be populated in some states, but not always. So, populating a traditional relational database with this data would result in data blow. It would have a lot of nulls, or basically, empty spaces. And the data can be voluminous, because the events generated by these IoT devices is non-trivial. So, it's interesting to see how purpose-built systems abstract away the underlined NoSQL. As we'll see in our brief look here at AWS IoT, NoSQL is something that's being used, but you're not seeing it. So there is an IoT event database underneath AWS IoT.
>
> **[1:35](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-iot-events?u=76281980&t=95)** It is, if you read very carefully in their documentation, some kind of version of DynamoDB, but it is a proprietary version. And they're designed to store IoT event data. It's stored and queried per device, so there is device awareness built into the structure. You'll remember that classic NoSQL does not have any sort of schema or structure, so this is a hybrid type of a NoSQL. 'Cause there is an underlying structure that is being applied. The idea is, Iot event data will be natively stored, it will be extremely fast for IoT event queries, and scalable. It won't be transactional, 'cause it's NoSQL, and in this case it's going to be part of IoT core. It's a set of services. And this is an area where innovation is occurring very rapidly. It's very much a possibility by the time you watch this, there will be even more services. Amazon has released, I think, 50% of this. That is available as of this recording, in the last six to twelve months. So, there are many things to look at here. We're going to look at something that's really pretty new, it's called Iot Events. And the reason I pulled this out is because, it's interesting, when I was working in the production situation, we had to write all this. This was not a service that was available, and it took a really large amount of our development time. So, it's just an example of cloud vendors paying attention to what the customers are doing, and trying to provide value
>
> **[3:08](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-iot-events?u=76281980&t=188)** so that they can get to market faster. Had we had this service, I am very convinced that we could have developed faster and gotten to market faster, which was an important aspect of the work that we were doing. 'Cause we had competitive pressure. So Iot events is a subset of the IoT core, which is a layer of abstraction on top of several types of NoSQL [[Databases]]. And it actually provides a graphical design input, I'll show you it in the subsequent movie, but the concepts are, you have device inputs, and then the IoT Events service, which is to release all of these new services. So you just pay by the consumption. It helps you to monitor your equipment changes in operation, and trigger alerts to respond when events occur. So, and it's in a venting mechanism. And you can define the conditional logic to evaluate the incoming telemetry data, and then detect and trigger and set actions. So, we'll take a brief look next at the IoT section of AWS, and then we'll drill into the IoT events section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (17), [[NoSQL]] (9), [[IoT|Internet of things]] (1), [[Google]] (1), [[Microsoft Azure|Azure]] (1)
> **Definitions:** is a  (4), is an  (3)
> **CLI Commands:** aws (4)
> **Env Vars:** aws (4)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Use AWS IoT events](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-iot-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-iot-events?u=76281980&t=0)** - [Instructor] Here we are in the AWS management console, and if we scroll down you can see in the [[IoT]] section or [[IoT|Internet of Things]], we have really a large list of services. The first service that typically you start with is IOT core and that allows you to setup your database and your connection to your external devices and they're called things, so we'll see that referenced in the events section. You can see that we have a number of analytic capabilities including IOT analytics, we have 1-Click, we have Device [[Microsoft Defender|Defender]], Device Management, Greengrass which runs IOT on the device rather than in the cloud, we have SiteWise and Things Graph. We're going to drill into events, because again it represents a layer of abstraction over the underlying [[NoSQL]] database that I think is interesting for IOT, and 'cause it represents I think where noSQL is going in terms of the value that the cloud vendors are providing. So inside of IOT events we remember from the previous movie that basically it is a framework to help us to set up thresholds for events on our particular devices and actions. And this logic is called a detector model. So if we click create detector model, we have several to choose from here, and notice interestingly, it's a visual interface. This is really a secondary abstraction so we've got an abstraction over noSQL
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-iot-events?u=76281980&t=93)** but now we have an abstraction that's not scripting language or an API rather a visual language, and I think this is particularly interesting because what I've found in working with IOT clients is depending on what the device is, if it's a home monitoring device, if it's a, case I worked with was a sprinkler controller device for commercial use, whether it's building control, you generally are going to be interfacing with device experts and sometimes also subject matter experts, so having this visual layer for communicating I think can get you to value faster. So we're going to work with a template and you can see we have a number of templates here so everything from you know, human heartbeats for example, to event detections with sensors and applications, so we'll just click on that, 'cause it's using MQTT which is a standard protocol for commercial IOT devices, rather than TCPIP for example, so we'll click start. And you can see here's our visual interface, and here's the start point, so it's a state model and here we have the device in the state of idle, and you can see again it's a nice view, so we can define our event in here, so on enter, on input, on exit, and then this is to our state change here, and you can see here is our event trigger logic. That is an abstraction layer that sits on top of our underlying noSQL database that holds our device event information.
>
> **[3:06](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-iot-events?u=76281980&t=186)** And you can see when the variable position is not from the input IOT events the blueprints tracking device input, you're getting a particular position and then you can add an action here. So if we click add action, we can choose an action and we can send a message to an IOT events endpoint, so Kinesis Firehose, we can trigger a Lambda, we can publish a new topic, we can use an SQS message, an SNS message, set a timer, set a variable. And then when the device is in use, again we have the same configurable input here, and then we can go to an exception state. And over here we have our visual designer so we can use this to add additional logic. When we're ready for this to be used we can click publish and then this will be made available in our IOT eventing ecosystem. Again I think this level of abstraction over noSQL, number one is really useful, and number two, represents the direction that I see the noSQL ecosystem evolving, which is into domain specific abstraction layers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (11), [[NoSQL]] (6), [[IoT|Internet of things]] (1), [[Microsoft Defender|Defender]] (1)
> **Env Vars:** iot (11), aws (1), api (1), mqtt (1), tcpip (1)
> **Code Identifiers:** nosql (6)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **UI Navigation:** scroll down (1), click on (1), go to (1)
> **Analogies:** for example (2)
> **Prerequisites:** setup (1), set up (1)
> **CLI Commands:** aws (1)

#### [Use AWS TimeStream](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-timestream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-timestream?u=76281980&t=0)** - Yet another innovation announced by AWS at last years Reinvent was a new [[NoSQL]] database to further augment [[IoT]] and other event scenarios. As of this recording this product is not yet publicly available. It's in a private beta, but I wanted to include it because it is interesting. I am on that private beta and by the time you see this, this may be publicly available. So the idea is to store time-based events with NoSQL, which is a very typical scenario for IOT. So time-based event data bases, \such as the newly announced AWS TimeStream. The data will be stored and query able via time [[Windows]]. Now this is a capability that we've had in [[Relational Databases]] via windowing functions for quite a while. So you might wonder what is the purpose of this? Why would we just not use a relational database? And again, this comes down to the key, and core value propositions of NoSQL. You may be thinking or remembering that with IOT eventing data a reason to use the IOT services is because of the volume of data. It simply would be too expensive to store that data in a relational database and too slow, because the transactional capabilities provided by the relational database really just slow it down, add cost, and don't add any value. So the thinking behind this product is customers want the ability to query by time windows that they're familiar with
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-timestream?u=76281980&t=93)** from the relational world, but they it at the scale for event based data. So as Andy Jassy announced the idea is that it will be 100, to 500, to 1,000 times faster on the volumes of data that customers are bringing in with their IOT solutions. So it will be extremely fast for time- based queries and of course, being NoSQL, it will be AP of cap theorem. In other words, highly available, and importantly very, very easy partition able. Simply add an additional partition to scale out. This is also been announced, of course, to be server less, which is the direction that the cloud vendors are taking their custom NoSQL implementations, which again, makes it really interesting, because you can simply pay for capacity and not worry about setting up servers, configuring servers, configuring high availability. All that is included in what you're getting from the vendor. So I haven't seen competitive TimeStream type [[Databases]] yet available from the other cloud vendors. So I think this will be an interesting area to watch as Amazon leads here and to see what the adoption is around this solution. It is very specialized and there's always a trade off between usability, because there will be optimizations available here that are specific to the NoSQL world. So you again, have to consult the documentation, understand how to do the optimization,
>
> **[3:07](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-timestream?u=76281980&t=187)** whether it's partitioning, indexing, or whatever it is when it's announced, verses leveraging knowledge that you have from either the more conventional NoSQL world, or the relational world, but I think it is, it does bear watching, it does bear trying out if you have this scenario. So AWS TimeStream.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (7), [[IoT]] (5), [[Windows]] (2), [[Relational Databases]] (1), [[Databases]] (1)
> **Env Vars:** iot (5), aws (3)
> **CLI Commands:** aws (3)
> **Definitions:** is a  (2), in other words (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Speakers:** - yet (1)

#### [Store blockchain entries using NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-blockchain-entries-using-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-blockchain-entries-using-nosql?u=76281980&t=0)** - [Woman] The next type of [[NoSQL]] data base is designed to store [[Blockchain]] data. An example of this is Amazon QLDB or quantum ledger database. It is used to store blockchain event-based data in an immutable or unchangeable journal. Is extremely fast for blockchain event-based queries and easily scalable and it's part of AWS Managed Blockchain which is a set of services. Now it's not required that you use QLDB with Managed Blockchain and there have been some interesting customer scenarios that Amazon has been documenting in their series with (mumbles) traveling around the world, mostly to developing countries, where there's some so interesting uses of QLDB for its immutability. Because it becomes a permanent system of record. However, it can be used and is designed to be used in conjunction with AWS Managed Blockchain services which again were released last November at re: Invent. Now QLDB has a number of concepts which I'm assuming are new to most of my viewers here and so we'll just cover a couple terms before we dive in and take a look at the actual service itself. So it uses, at its core, this idea of an immutable journal so one of the foundational principles of chain based computing, is having a journal that has all changes recorded for all time
>
> **[1:34](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/store-blockchain-entries-using-nosql?u=76281980&t=94)** and is unalterable. So some other core concepts here is, each set of changes or each document is called a block and a list of those changes in QLDB is called a strand. Along the strand, each of the blocks will have a sequence number and it will be protected by a hash. And as you traverse the strand you will be able to work with document revision histories. So one of the things that I like about the Amazon implementation of QLDB and blockchain, is they have a very useful tutorial. Now the full tutorial for blockchain itself, first time I went through it took me a couple of hours because the concepts were new and I wanted to stop and look up concepts. Probably if I just click through I can do it faster. So I would encourage you, if you're interested as I am in this technologies, to use this as a starting point. Next we'll take a look at QLDB but we'll round that out and I will point you to the blockchain tutorial because I think it really is well worth doing to get a basic understanding of how this services work in general and specifically on the Amazon core system

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (9), [[NoSQL]] (1)
> **Env Vars:** qldb (7), aws (2)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** aws (2)
> **Speakers:** - [woman] (1)

#### [Use AWS QLDB](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-qldb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-qldb?u=76281980&t=0)** - Here we are in Amazon QLDB. And notice we can create a ledger or we can start the tutorial. Again, it has a pretty good description of how this works, talks about the journal and the current state and the indexed history and the cryptographic verification. So we're going to actually start the tutorial. So there are a couple sections here. The first thing is we're going to create an empty ledger and we're going to call it Vehicle Registration. We could put tags on it, we're not going to bother to do that, we're going to create the ledger and it's creating. Notice it says it may take a few minutes to become active. Now our ledger is created. So we're going to go back to the tutorial. We're going to refresh, select our ledger, and we're going to load it with sample data. Now that's completed, and we're going to open the query editor. We're going to select our ledger and we'll see that we have some information that's been populated. So we have vehicle information, driver's license, registration, and person information. Now, we're going to query the information. So we're going to copy this query, paste it into the editor and we're selecting the vehicle information for this VIN. We're going to click Run and we'll see that we have one result.
>
> **[1:36](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-qldb?u=76281980&t=96)** And you can see this is from the tutorial, the associated tutorial, so we'll just run a second query just so you can see how this works, we're going to join the vehicle with the vehicle registration to get related information. Copy the query, paste it in, and there's our result. So now back to the tutorial. We could also verify the integrity of a document in the ledger journal by using cryptographic hashing with SHA-256. If we want to see that information, we can open that up and then we could perform the steps here. We could go to the ledgers and then we can get the digest.
>
> **[2:27](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/use-aws-qldb?u=76281980&t=147)** And there's our digest. Now in addition to this tutorial, I recommended in the previous movie that you may want to also do the manage block chain tutorial, which, as I was saying, took me a couple of hours because I wanted to make sure I understood all the concepts. I think if you just ran through it quickly, it would be faster. To summarize, Amazon QLDB does not require that you use Amazon [[Blockchain]], but these two are often used together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (1)
> **Env Vars:** qldb (2), vin (1), sha (1)
> **UI Navigation:** open the (1), go to (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - here (1)

#### [Google Cloud Vertex AI Vector Search](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/vector-database-index-on-gcp-vertex-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/vector-database-index-on-gcp-vertex-ai?u=76281980&t=0)** - [Instructor] In the world of [[NoSQL]], vector-[[Databases]] are being increasingly used in [[Generative AI]] solutions. What is a vector-database and how do you actually use it? Well, you can see by the graphic here that we take our content, and rather than just querying directly using a query engine like [[SQL]] or a query language associated, there is an interim step, which is called embedding. What this embedding does is it translates the source data into a numerical representation, a set of vectors. The model that is embedded is then used for querying in a more efficient manner. The purpose of this is to take semi-structured data and to represent it in a highly efficient manner so that queries can be performed against thousands, tens of thousands, or even millions of dimensions of data. While there are many open source solutions, such as [[ChromaDB]], a new way to work with vector-databases if you work on the cloud, is to use vendor created solutions because they're somewhat simpler to implement. They're often created as indexing solutions rather than databases. But the underlying technology is the same. It's embeddings and vectors. Let's look at an example in the GCP ecosystem. Using a Jupyter Notebook inside of [[Google Cloud Platform (GCP)|Google Cloud]]
>
> **[1:36](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/vector-database-index-on-gcp-vertex-ai?u=76281980&t=96)** from Colab Enterprise. If you don't have a Google Cloud account, you can also run this sample, which is part of [[Google]] sample set on public Colab. We're going to take a look at how this works in the Google ecosystem. Other cloud vendors are similar. So you can see on the right side, we have a look data set. This is a public data set, has 30,000 rows of synthetic product data for [[E-Commerce]]. We're first going to get the data, so we're just downloading the data into a bucket. And I've pre-run this sample 'cause it takes about 30 minutes to run. And then we're going to use the associated APIs to quickly build and deploy a vector search index. There's a couple steps to do this. First, we have to take the text information and we have to change the representation into the numeric vectors. Using Google's AI platform, we can easily do this by simply setting up some parameters. And you can see in the sample here, the parameters are listed. We have the dimensions, in our case, we're going to use 768 from the text embeddings API, and the approximate neighbors count, how many similar items we want to retrieve in typical cases. And then we're going to allow for indexes to be updated via streaming, which is very typical for e-commerce type of applications where you have lots of data updates coming rapidly. Once we create the index, then we're going to create an endpoint and that will allow us to query
>
> **[3:10](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/vector-database-index-on-gcp-vertex-ai?u=76281980&t=190)** and work with the data that's represented by these vector embeddings via this endpoint. The endpoint is almost like an API. And again, what the Google ecosystem has done is they have exposed this functionality, which in an open source example by comparison, you would have to create a database such as ChromaDB. You would have to set the database up, you would have to set up the VMs, connect them, scale them. You would have to select your method of embedding or write your embedding code, create your embeddings, load your database, and then determine your query methodology and write your query language. It's really a lot more overhead than using these integrated APIs. So once we've created the index endpoint, then we need to deploy it. Once we deploy it inside of [[Vertex]] AI, you can see that we have a vector search section, and here is our index, and here is our endpoint. You can have multiple endpoints for scaling. Inside of our index, we can then use our associated API to query it. And you can see that we have done some querying. If we look on the monitoring, we ran a couple queries there. What does that look like? If we scroll down, there we've deployed the index and then we need to stream the created index with our embedded data, which we've done here, and insert it. It's just a for loop.
>
> **[4:45](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/vector-database-index-on-gcp-vertex-ai?u=76281980&t=285)** And then for our query, this is the syntax of the query language. So what we're doing here is we're getting the embedding from the product embeds [[JSON]]. And then once we get that, we can specify a product ID to get the embedding for it, and we can run a query with our particular embedding to, in this case, find our neighbors because that's how we generated our embedding. So this is a shopping basket example. We can see, you know, what type of [[Microsoft Products|products]] people bought, when they bought, in this case, the excursion short, and then what's the proximity in terms of frequency of nearest neighbors. And it's really just that simple. It exposes itself kind of like a more traditional indexing. The difference here is we are using embeddings for scale. And when I started this movie, I talked about [[Generative AI|gen AI]], and this is the use case that my customers are using this capability because for gen AI, of course, when you are either [[Fine Tuning]] a model or you are not as often, but trying to build your own custom of models, you are working with really a crushing amount of data and more typical approaches in the NoSQL ecosystem are really unable to be able to scale unless you have the resources of someone like a Google. So this new capability of generating embeddings allows for more efficient query ability of semi-structured data and is very well integrated into Google
>
> **[6:19](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/vector-database-index-on-gcp-vertex-ai?u=76281980&t=379)** and other cloud vendor ecosystems as indexing capability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (6), [[Databases]] (3), [[NoSQL]] (2), [[ChromaDB]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2)
> **Env Vars:** api (3), sql (1), gcp (1), json (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Tools:** colab (2), jupyter (1)
> **Analogies:** such as (2), kind of like (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** set up (1)


### 8. Understand NoSQL Trends

[↑ Back to Table of Contents](#table-of-contents)

#### [Consolidation and cloud for NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/consolidation-and-cloud-for-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/consolidation-and-cloud-for-nosql?u=76281980&t=0)** - [Narrator] Peter Sondergaard from Gartner says, "Information is the oil of the 21st century, and analytics is the combustion engine," and this is reflected in the evolution of [[NoSQL]], in the time I've been working with the ecosystem. The first big trend I'm seeing is consolidation of the NoSQL market. I'm observing that open-source based companies seem to be declining in number and in market adoption, and they seem to be being replaced by either cloud vendor supported versions or by cloud vendor replacements. I'm also seeing consolidation by mergers of the NoSQL companies. I'm further observing consolidation by current NoSQL [[Microsoft Products|products]] such as, [[Redis]] for example, adding features, NoSQL [[Databases]] that were started in one category. Key-Value in the case of Redis are adding capabilities and some of the other categories such as, documents or wide column. And I'm seeing the preference for customers that want tools and support and the movement away from pure open-source, because many customers have felt the pain of trying to support the open-source versions of the products on their own. When I think of the NoSQL market, I think of the four core types of NoSQL databases shown here as, Key-Value, Column Family, Graph or Document. But I also think of the other types
>
> **[1:34](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/consolidation-and-cloud-for-nosql?u=76281980&t=94)** that I've shown in this course, what I call blended NoSQL. So, Key-Value plus Document for example. Importantly, events is driving the evolution of the NoSQL ecosystem. And I think it's really interesting to see what the vendors, and I've paid the most attention to Amazon because that's where I've done most of my production work has done in this space in terms of time streams, near real time and [[IoT]] abstraction layers. Support for [[Blockchain]] technologies is also really interesting coming from the cloud vendors, and we did take a look here at Amazon's relatively recently released QLDB or Quantum Ledger Database. Probably though the most interesting aspect of the NoSQL ecosystem is a subtle one, and this relates to what's going on in [[Google]]'s implementation. I think it's best represented by Google BigQuery, which many would argue is not a NoSQL service because you use a [[SQL]]-query layer. However, if you read the underlying implementation, it is indeed built on a massive NoSQL store in Dremel. So, what I think is fascinating is it appears to be almost a circular evolution in that because of the pervasiveness and the usability of the SQL query language, whether the various NoSQL stores implement a sequel like query language. So, everything from CQL with Cassandra all the way
>
> **[3:09](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/consolidation-and-cloud-for-nosql?u=76281980&t=189)** to a pure ANSI SQL language in Google's BigQuery. Adding a more SQL like query layer does really impact the usability of NoSQL and it's something to pay attention to. And the another aspect of the NoSQL ecosystem that I think bears watching is the move to the cloud. As you would know, since you've watched this entire class, this has been a complete restructuring of an earlier version of this course where I did not focus on cloud versions of NoSQL databases because they didn't exist. So, this has been over the past three to four years, a pretty significant shift in the market led by, as usual, Amazon and Google. They're creating either supported versions of NoSQL with migration paths such as, Amazon's DocumentDB, which they say right in the description, supports Mongo and has a migration path to alternatives such as, GCP's Bigtable, which many could argue is the evolution of both Mongo and Redis into a Key-Value wide column massively scalable cloud native for Google Store. I find that the vendor implementations, because they're built by the vendors they're built to work with their clouds, are much easier to work with and given for many teams, the amount of new information they have to process, when they're working with NoSQL, whether it's how to store,
>
> **[4:42](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/consolidation-and-cloud-for-nosql?u=76281980&t=282)** how to query, how to optimize. I find faster time to value and I generally will prefer working with the cloud vendor solutions rather than the open-source. Particularly, I will prefer it if the cloud vendor is offering a serverless solution. I think Amazon DynamoDB is the quintessential example of this, and I think that's why DynamoDB takes the lead in the cloud based NoSQL market. It simply is easy to use provides a lot of value. Amazon is constantly adding new features that customers want from Point-in-time backups to the ability to put tables into a global location or in memory. Really, the amount of innovation here is benefiting all of us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (19), [[Google]] (5), [[SQL]] (4), [[Redis]] (3), [[Databases]] (3)
> **Env Vars:** sql (4), qldb (1), cql (1), ansi (1), gcp (1)
> **Analogies:** such as (4), for example (2)
> **CLI Commands:** mongo (2), find (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Multifunction NoSQL databases](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/multifunction-nosql-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/multifunction-nosql-databases?u=76281980&t=0)** - [Narrator] Continuing on evaluating the evolution of the [[NoSQL]] ecosystem, looking a multi functionality is really important. When I first got into this game, many years ago, I would say, all right, I need key value store, so let me pick [[Redis]], I need a document data base, so let me pick [[MongoDB]]. Now it's really not that simple, because both MongoDB and Redis can be both. Key value and document and more. So what has really happened is, instead of having 150 different NoSQL [[Databases]], we're having maybe five that are relevant. And those five are adding layers of features. Another key set of features is in memory options, for those NoSQL databases that weren't natively in memory. And I think again DynamoDB from Amazon, represents kind of the direction there. Customers are wanting to be able to utilize the memory of whatever hosting environment, so that they can serve up even faster. Enterprise features are key, whether to backup, monitoring. [[Google]] has had an interesting direction in terms of integrating versions of open source [[Microsoft Products|products]] such as Cloud memory store for Redis or [[Neo4j]] or MongoDB for example, and integrating them so that Google's enterprise monitoring, staff driver, in their case, will integrate with the performance counters in the particular NoSQL databases, so it's one monitoring solution. And again, this provides significant value
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/multifunction-nosql-databases?u=76281980&t=93)** in production applications. Another interesting trend is abstraction layers. Y'know, we looked briefly in this course at [[IoT]] services and venting. And I mentioned Amplify in terms of my mentorship of a startup. It was really interesting to work with that startup team, and to see, as I mentioned previously, that when they first started, they were actually completely unaware of what their database was because it was abstracted away through Amplify, was indeed DynamoDB. And at some point of course, when they were debugging and building their application, they needed to realize that and go to Dynamo. And some people might argue, that's not a good thing, because when you are building you will invariably run into challenges, and if there's too much abstraction, it becomes difficult to find where the problems are. But, I mean, I did see this team get to value, and of course, Google has the entire [[Firebase]] ecosystem, which is somewhat similar to Amplify. The idea is to abstract away the database, so that you can work on the application code. Now summarizing, Cloud NoSQL databases, and kind of the way I think about it from an architectural standpoint, is this chart. And you can see in the key value world, of course, Redis leads the open source charge. I think of DynamoDB and I note that it's serverless on AWS. For GCP I think of memory store for Redis. In the Columnar world, Cassandra is the standard in open source. Course, Amazon has the new Managed Cassandra product. And they also have their data warehouse Redshift. I'm really hoping
>
> **[3:07](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/multifunction-nosql-databases?u=76281980&t=187)** that they add a serverless component to that, because I think it will help it to be more competitive. On the GCP side, we have Bigtable for hot data and BigQuery, which has the interesting [[SQL]] layer over the top of it for the data warehouser aggregate queries. And I think in this category, Google really has a very interesting offering, cause both of these services are very fast, very usable, serverless and very compelling, and I use them with a lot of customer solutions. In the document world, MongoDB is the open source standard. Amazon has Dynamo and the newly introduced DocumentDB, I think really to give customers a migration path. Google's offering here is managed MongoDB. I think that they really see their customers using Bigtable and that's what I tend to do rather than Mongo solution on GCP. In the graph world, we have some interesting new services to compete with the open source standard Neo4J. A notably an AWS Neptune, which you may remember, provides not one, but two different graph models, both the Gremlin model and the SPARQL query model. Google offers managed Neo4J. I do see the growth of graph a database demands from my customers, and so it would be interesting to see what happens in this space. I think there's more to come. And then a lot of interest in the events IoT space. Amazon's coming with Timestream. They have now, already, IoT Events, which is serverless. GCP has strong offering there with Firebase, Firestore, and they do have IoT core, and again, all this is serverless.
>
> **[4:39](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/multifunction-nosql-databases?u=76281980&t=279)** On the ledger side, we have Amazon with Hyperledger offering on [[Blockchain]]. And then as far as pure ledger database, they have the relatively newly released, serverless QLDB. And I think it's very significant here to note, that the trend not only is to offer alternatives to open source on the Cloud, but to offer serverless alternatives. I think that's just really very significant, and when you are in the process of evaluating what's going to work for you, you want to do side by side bake offs. And when you have the opportunity to have serverless, really can have time to value much more quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (6), [[NoSQL]] (5), [[Redis]] (5), [[MongoDB]] (5), [[Databases]] (4)
> **Env Vars:** gcp (4), aws (2), sql (1), sparql (1), qldb (1)
> **CLI Commands:** aws (2), find (1), mongo (1)
> **Analogies:** such as (1), for example (1), similar to (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [DataLake NoSQL alternatives](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/datalake-nosql-alternatives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/datalake-nosql-alternatives?u=76281980&t=0)** - [Narrator] Now although this course covers [[NoSQL]] in my work as an architect, I am often asked to discuss another alternative in terms of [[Big Data]] processing and that is DataLake. So it's really beyond the scope of this course to go deep into it. I do have some other courses in the library on these technologies and I would really encourage you to also include learning about these technologies because increasingly as the volumes of data become very very significant, Data lake becomes a relevant part of an ecosystem that probably will include NoSQL. So although I call this Data lake alternative for the NoSQLmarket I might also say [[Data Lakes]] plus NoSQL. So a couple of trends that are significant here. The [[Hadoop]] ecosystem which is distributed [[Data Processing]] at huge scale has really evolved into in memory via the spark ecosystem. And I would recommend that again, if you're working with file-based solutions that are huge sized, you might also want to take a look at some of these technologies. I've been doing quite a lot of work for example with Genomic data for Bioinformatic research and nearly every customer that I work with there is using a combination of Hadoop spark and NoSQL. In this data Lake ecosystem spark dominates and then we'll add NoSQL like functionality and sometimes [[SQL]] on top of it as well.
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/datalake-nosql-alternatives?u=76281980&t=93)** Cloud based data lakes from vendors like Amazon that are built on object stores such as S3. We'll replace the underlying proprietary expensive hard to maintain Hadoop distributed file system or HDFS for many of these data Lake solutions. In fact Amazon actually introduced a set of services called Amazon data Lake last year re-invent to help customers get time to value more quickly when they're building data Lake technologies. [[Google]] again is taking the lead. They seem to always be pushing the market forward in terms of technology which is skin good for all of us. They have moved well beyond Hadoop which is ancient by Google standards, 15 plus years old at this recording to a commercial implementation of their next level unified API, which is called Apache Beam. That part of it of course is open source. They built a distributed data processing service on top of it called Dataflow and you'll see throughout Google reference architectures and ecosystems that when they have massive big data projects, they'll use a combination of dataflow which will operate on Google GCS buckets as their data Lake and then they will process with various types of technologies including spark but also including NoSQL functionality, which for them would often be big query,
>
> **[3:06](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/datalake-nosql-alternatives?u=76281980&t=186)** which I know is very ironic it's NoSQL with SQL, but I think in many ways as I've said a couple of times in this course, this actually represents the future of NoSQL. In other words a NoSQL backend with a SQL front end and they've expanded big query substantially over the past few years. They've added the ability to do inserts, updates and delete or crud operations. They've added the ability to add functions and interestingly they've added machine learning. So it becomes really the query layer on top of the data Lake and in some ways it makes working with NoSQL not necessary sometimes in GCP. It's really interesting to see how the market moves. The trends around cloud and consolidation and data lakes, I think are very important when you're considering your NoSQL choices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (11), [[Hadoop]] (4), [[Google]] (4), [[Data Lakes]] (3), [[SQL]] (3)
> **Env Vars:** sql (3), hdfs (1), api (1), gcs (1), gcp (1)
> **Definitions:** is called (1), in other words (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with NoSQL](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/next-steps-with-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/next-steps-with-nosql?u=76281980&t=0)** - [Lynn] Pearl Zhu says, "We are moving slowly into "an era where [[Big Data]] is the starting point, not the end." Although we are at the end of this course, there are many resources available for you to continue your learning. In particular, because this is cloud-based [[NoSQL]], I want to point you to some resources that I find really valuable on both the GCP and the AWS cloud communities. In addition to the architecture references that I've used and pointed out in this particular course, there are two communities of experts. For [[Google]], it's [[Google Cloud Platform (GCP)|Google Cloud]] Developer Expert, and Amazon, it's Amazon Community Hero. So here I am out on the AWS Hero's directory page, and I will point out that relatively new is this category called Data Heroes. And I was proud to be part of the first group that was announced the end of last year for the work on education that I've done globally. But in addition to the work I've done, the people that are listed here are fantastic resources around the world for understanding NoSQL and other data services on AWS. In addition to that, in the Google community, if you go to the Google Developer Expert community, and here I'll set it for the [[Google Cloud Platform (GCP)|Google Cloud platform]]. There's not yet a data category. You can simply click on a location, and here I am. I've made a big move from California to the center of the United States, and I am part of this group as well because of the education efforts I've done on the GCP platform.
>
> **[1:33](https://www.linkedin.com/learning/cloud-nosql-for-sql-professionals/next-steps-with-nosql?u=76281980&t=93)** And if you want to find someone, you simply click on an area. Most people will blog. They will publish content on [[GitHub]], and I've just found this community to be tremendously useful. So join our communities and wishing you much success with your NoSQL implementation. I'm Lynn Langit and thanks for listening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[Google]] (3), [[Big Data]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1)
> **CLI Commands:** aws (3), find (2)
> **Env Vars:** aws (3), gcp (2)
> **UI Navigation:** click on (2), go to (1)
> **Tools:** github (1)
> **Speakers:** - [lynn] (1)


## Instructor

- [[Lynn Langit]]

## Skills Covered

- NoSQL

## Path Context

### In [[Develop Your NoSQL Skills]]
← [[Elasticsearch in Depth]] | **10 of 10**

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Introduction To Nosql]] — NoSQL
- [[NoSQL Essential Training]] — NoSQL

---

[↑ Back to top](#)