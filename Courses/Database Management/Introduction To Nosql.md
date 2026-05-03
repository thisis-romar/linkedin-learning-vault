---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-nosql
url: "https://www.linkedin.com/learning/introduction-to-nosql"
level: Beginner
updated: 9/20/2022
learners: 45186
skills:
  - NoSQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFLGH9-sTY3vg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663360544743?e=2147483647&amp;v=beta&amp;t=-H4pGudE5RdYcLzCUcnu27NhNd25x8LRIQh5SQnHnVA"
linkedin_topic: Database Management
learning_paths:
  - '[[Develop Your NoSQL Skills]]'
next_courses:
  - '[[NoSQL Essential Training]]'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":1,"total":10,"prev":null,"next":"NoSQL Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/nosql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Introduction%20To%20Nosql.md)

![Introduction To Nosql](https://media.licdn.com/dms/image/v2/C4E0DAQFLGH9-sTY3vg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663360544743?e=2147483647&amp;v=beta&amp;t=-H4pGudE5RdYcLzCUcnu27NhNd25x8LRIQh5SQnHnVA)

# Introduction To Nosql

> Understanding what NoSQL means for programmers can be hard enough, but what about people who are not in the development or IT community? NoSQL databases, which offer greater scalability and flexibility than relational databases—form the backbone of many disruptive applications that affect all of our lives. Anyone, from developers to C-level executives to nontechnical professionals, could benefit f

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-nosql) | Beginner | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [A guide to NoSQL: No programming needed](#a-guide-to-nosql-no-programming-needed)
- [**1. NoSQL? Why Can’t You Have Any Sequels?**](#1-nosql-why-cant-you-have-any-sequels) (3 videos)
  - [So what is NoSQL?](#so-what-is-nosql)
  - [Asking data questions with query languages](#asking-data-questions-with-query-languages)
  - [Horizontal scalability](#horizontal-scalability)
- [**2. NoSQL Powers Everything**](#2-nosql-powers-everything) (2 videos)
  - [You're already using NoSQL databases—you just don't know it](#youre-already-using-nosql-databasesyou-just-dont-know-it)
  - [Give more examples](#give-more-examples)
- [**3. The Three Vs: Volume, Velocity, and Variety**](#3-the-three-vs-volume-velocity-and-variety) (5 videos)
  - [Volume: How much data are you really talking about?](#volume-how-much-data-are-you-really-talking-about)
  - [Velocity: Defining online speeds with OLTP](#velocity-defining-online-speeds-with-oltp)
  - [Velocity: Understanding and increasing throughput](#velocity-understanding-and-increasing-throughput)
  - [Variety: Rethinking the data model](#variety-rethinking-the-data-model)
  - [Variety: NoSQL data models](#variety-nosql-data-models)
- [**4. Differences in Scalability, Performance, and Data Modeling**](#4-differences-in-scalability-performance-and-data-modeling) (1 videos)
  - [Comparing the three Vs to current relational databases](#comparing-the-three-vs-to-current-relational-databases)
- [**Conclusion**](#conclusion) (1 videos)
  - [That's a wrap](#thats-a-wrap)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [A guide to NoSQL: No programming needed](https://www.linkedin.com/learning/introduction-to-nosql/a-guide-to-nosql-no-programming-needed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/a-guide-to-nosql-no-programming-needed?u=76281980&t=0)** - [David] Did you know that many of the apps and services you use today simply wouldn't have been possible not too long ago? The advent of no [[NoSQL]] [[Databases]] forever changed the landscape of capability, leaping us forward into the types of experiences we've come to expect. NoSQL databases have significantly changed our lives, but outside of the technical sphere, most don't even know they exist. Hi, my name is David Jones-Gilardi. And over the last 25 years, I've professionally coded applications for both enterprises and startups in a plethora of languages, and managed many relational NoSQL databases during that time as well. I particularly enjoy breaking down complex concepts in information that anyone can understand. So no matter if you have a technical background or not, I'll help you right along. Join me on [[LinkedIn]] Learning as we dig into some fun facts, real world examples, and NoSQL database knowledge that is sure to give you a new appreciation for the technology behind your favorite services and apps, not to mention a leg up in the technical know-how you can bring to bear.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (4), [[Databases]] (3), [[LinkedIn]] (1)
> **Speakers:** - [david] (1)


### 1. NoSQL? Why Can’t You Have Any Sequels?

[↑ Back to Table of Contents](#table-of-contents)

#### [So what is NoSQL?](https://www.linkedin.com/learning/introduction-to-nosql/so-what-is-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/so-what-is-nosql?u=76281980&t=0)** - [Instructor] Okay. Let's have a little fun. Pick up your phone and pick some of your top used apps. Maybe it's Netflix, or it could be Apple's Siri if you're on an iPhone. Maybe you like to shop at Walmart or Alibaba or need some home improvement items from Lowe's or Home Depot. How about Starbucks for some coffee, maybe Spotify if you listen to music or maybe you need to get somewhere fast with Uber. There are plenty of examples. All of these have something in common. They're all using [[NoSQL]] [[Databases]]. And in fact, some of them like [[Facebook]], created some of the very first NoSQL databases. So what exactly are NoSQL databases? How'd they come to be? And what impact have they had on our lives? Let's find out. As we've just heard, NoSQL databases are used with so many of our favorite apps. They have significantly impacted our lives. So then what exactly is NoSQL? First off the acronym. NoSQL means not only [[SQL]] or SQL. And SQL stands for Structured Query Language. SQL is the language that we use to talk to [[Relational Databases]]. Whether this is to create a table in a database or maybe we want to create, read, update or delete data itself, all of these are tasks that we can do with SQL. And since SQL is the language we've used for decades with relational databases, when NoSQL databases first came into the scene it was a way to differentiate them from relational approaches. To get a better idea of where NoSQL databases came from, you have to look at the landscape in the mid 2000's.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-nosql/so-what-is-nosql?u=76281980&t=96)** The amount of data being used for sites and the consumer requirement for immediate response times forced companies to take different approach from relational databases. They simply couldn't scale. Facebook is a good example of this. At the time, they had over a billion users and relational databases couldn't meet the demand for the amount of data and serving all those users at the same time. Nobody wants to wait 20 seconds for a website to respond. And this is just one example. This theme plays out again and again with ever growing [[Big Data]] and response time requirements. There are now hundreds of NoSQL databases on the market in a very healthy ecosystem NoSQL databases, power so many of the apps and services that we use every day. They're literally behind everything that we do, from watching movies to [[Banking]], to getting directions for our next destination. They enable the amazing increase in an application's capability, and performance we all take for granted. But this just scratches the surface. Let's dig in a little further as we learn more about what databases are and how applications talk to them and what exactly horizontal [[Scalability]] means.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (10), [[Databases]] (9), [[SQL]] (6), [[Relational Databases]] (4), [[Facebook]] (2)
> **Env Vars:** sql (6)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** iphone (1)
> **Speakers:** - [instructor] (1)

#### [Asking data questions with query languages](https://www.linkedin.com/learning/introduction-to-nosql/asking-data-questions-with-query-languages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/asking-data-questions-with-query-languages?u=76281980&t=0)** - [Instructor] If you like to garden like me, then you know gardening involves a lot of buckets, you know, containers that carry a bunch of plants, water, or move rocks from a pile to wherever there's landscaping. Now, imagine there were no containers at all, and we could only move what we could carry in our hands, stone by stone, walking from one end of the yard to another, over and over. Not only would this take a lot more effort, but it would also take significantly more time. [[Databases]] are the containers of our data, and without them, applications would be quite limited in what they could accomplish. That's only one part of the story though. Containers aren't very effective if you can't put anything in or take anything out. So let's learn a bit about the way we talk to databases. So in the previous section, I mentioned something called [[SQL]], or Structured Query Language. This is the language we've been using for decades to talk to databases. It allows us to read and write data to our databases using a language that we can easily read and understand. Let's look at a simple example. Now, don't worry about the syntax here. All that really matters is that I've created a garden table in my database with two fields, project and description. This table will now contain data for any of my gardening projects. Now, let's write some data to the table. You can see that we have three projects, one to plant herbs in the tall planter, the second to make a spiral rock garden with succulents, and the third one to revel in the glory of our new rock garden. And we tell the database that we're writing this data into the database
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-nosql/asking-data-questions-with-query-languages?u=76281980&t=92)** by using insert into statements. Notice that for each of the statements, we also define the table and the fields we are writing to. So these read insert some data into the garden table for fields project and description. And then we follow up with specifying the values, the actual data we want to store in those fields. Okay, that's great. We wrote some data to the database, but how do we get the data back out? In this example, we are selecting or reading all data from the garden table, and you can see our three projects in the results. Now, this is a really simplistic example, but the point here is to just illustrate some basic read and write operations to get a feel for how this works. By the way, if you've ever used a spreadsheet, you've used a database. The difference with databases used for applications is in how we talk to them and the amount of data we can store. You probably wouldn't store billions of rows of data in a spreadsheet. Imagine how long it would take to scroll to the bottom. Now, [[NoSQL]] databases have a lot more language variation that we'll talk about a little later. As a matter of fact, the examples we just went through came from a NoSQL database. And now that you have a basic idea of how we talk to databases, let's jump into exactly what horizontal [[Scalability]] means.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (7), [[NoSQL]] (2), [[SQL]] (1), [[Scalability]] (1)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Horizontal scalability](https://www.linkedin.com/learning/introduction-to-nosql/horizontal-scalability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/horizontal-scalability?u=76281980&t=0)** - [Instructor] Think of your computer right now. You're probably watching this video on a computer at this very moment. Now, what would you do if you wanted to make it faster or give it more storage capacity? If you're computer savvy, you might upgrade the processor, put in more memory or add a larger disk for more storage. Maybe you'd take it to the shop and have them upgrade it or simply buy a faster machine. This is called vertical scaling, which means if we want to increase the capability of a computer, we scale its components up making them bigger, faster, et cetera. Now, [[NoSQL]] [[Databases]] use a scale out approach called horizontal [[Scalability]]. So instead of vertically scaling a single computer, we add more and more computers that spread the load around them. This is a completely different approach from how we scale databases for decades and is at the core of how NoSQL databases deliver near instant experiences, no matter how [[Big Data]] gets. Okay, so NoSQL databases use multiple computers that coordinate their efforts as compared to a single machine. But how does it actually work? Now, the details of how each NoSQL database does this, are going to be a bit different but let's look at a general example. Now, imagine for a moment, we have a single table of data. Let's use the garden example from the previous section. This is a pretty small table. It only has three rows, but that's fine for now. Remember that NoSQL databases are made of multiple computers that spread the load and coordinate their efforts. So in a case like this, I might have a single database that's actually spread over many computers. So instead of the data and the table
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-nosql/horizontal-scalability?u=76281980&t=93)** being on a single machine, the rows are spread around a cluster of machines. Now you might be wondering, how does this make sense for just three rows of data? That seems like overkill for something like this and you'd be right. So, let's size up our table a bit. Let's say we have a billion rows of data. I've been really busy in the garden, or maybe we created a garden app that went viral and everyone is using it. This is where NoSQL databases really shine. By spreading the load around multiple machines, they can handle more than a single machine can. Because of their ability to simply add on more computers as needed and continuously spread the load around those computers, NoSQL databases by design can more aptly handle larger and larger sets of data while maintaining consistent performance since each individual computer needs to do less work than a single computer would have to do if it tried to handle the whole data set on its own. Not only that, but in many cases they're cheaper and more reliable than a single vertically scaled computer. They don't put all of their data in one basket per se and they take advantage of distributed computing to provide us with experiences we couldn't have otherwise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (7), [[Databases]] (7), [[Scalability]] (1), [[Big Data]] (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 2. NoSQL Powers Everything

[↑ Back to Table of Contents](#table-of-contents)

#### [You're already using NoSQL databases—you just don't know it](https://www.linkedin.com/learning/introduction-to-nosql/you-re-already-using-nosql-databases-you-just-don-t-know-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/you-re-already-using-nosql-databases-you-just-don-t-know-it?u=76281980&t=0)** - [Instructor] Imagine you're watching a movie while traveling. You can start the movie in one part of the world before you get on the plane, and then seamlessly pick up where you left off the moment you touch down or connect to a network. This is enabled through the distributed nature of [[NoSQL]] [[Databases]] and the ability to quickly distribute data around the globe. Netflix is a pioneer in the NoSQL space. And over the years, they've really pushed the envelope of what we've come to expect from our services. Let's take a look under the hood and see how services like Netflix take advantage of NoSQL technology to bring us an awesome viewing experience. Every time you watch a show, data is being collected about what you view, how long, where you've left off, et cetera, and used to power things like recommendations. Have you ever noticed how your recommended shows are constantly being updated? Not only that, but Netflix is watched by millions of people around the globe simultaneously. Think about that for a moment. All those little interactions, all those plays, pauses, and little data points are being stored in milliseconds for all those users at the same time. Before NoSQL databases, providing a service like this would've been extremely expensive, if at all possible. Netflix actually uses a combination of multiple NoSQL databases to ensure that reads and writes are both as fast as possible for the best viewing experience. And this comes down to a core point about NoSQL databases. There isn't just one type of NoSQL database. There are many NoSQL databases out there, and each have specific capabilities
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-nosql/you-re-already-using-nosql-databases-you-just-don-t-know-it?u=76281980&t=92)** they are purpose-built to perform. This is a distinction from the traditional general-purpose databases we've been using for decades, which we'll get into a bit later. Services like Netflix take advantage of the [[Scalability]], performance and reliability of NoSQL databases to provide near instant feeling and never down experiences we pretty much take for granted today. And as you'll find out in the next section, they're not the only ones.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (9), [[Databases]] (7), [[Scalability]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Give more examples](https://www.linkedin.com/learning/introduction-to-nosql/give-more-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/give-more-examples?u=76281980&t=0)** - [Instructor] Previously in this course, we talked about how Netflix uses [[NoSQL]] technologies to provide a pretty awesome experience. But they're not the only ones doing this. A huge majority of Fortune 100 companies use NoSQL [[Databases]]. Some estimates have this as high as 90%, as well as thousands of others. You can find experiences across the spectrum, from baking, to eCommerce, gaming, healthcare, utilities, you name it. There are simply too many to list. However, there is one on the list that is a particular note, Apple. Whether you like them or not, Apple has arguably affected all of our lives in one way or another. Siri, Messaging, Maps, iCloud, iTunes, these are all powered by NoSQL databases at a scale that is breathtaking. At last report, Apple has more than 160,000 nodes of NoSQL database in Apache Cassandra, and stores over a hundred petabytes of data. That's five times the amount of data contained in the Library of Congress. This kind of scale, and many of the services Apple provides, most likely wouldn't exist without the ability of NoSQL databases to horizontally scale while maintaining consistent performance, and at a cost much lower than scaling traditional [[Relational Databases]]. Another example is Home Depot. During the COVID pandemic, they had to weather a huge spike in their digital channels, and also provide curbside pickup to better serve customers. They saw a 300% spike in traffic and 80% order volume increase. They also launched curbside pickup across the United States
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-nosql/give-more-examples?u=76281980&t=95)** within a month. To see a company this size with as much infrastructure, stores, and logistical complexity make something like this happen in so short a time is quite amazing. And as you might have guessed, they used NoSQL databases to help them quickly expand their capability to meet the demand. That, along with the solid architecture they already had in place, allowed them to move fast. These are just two more examples of companies that leverage NoSQL databases to handle huge scale new capabilities and growth. There are thousands of others and more joining every day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (7), [[Databases]] (5), [[Relational Databases]] (1)
> **CLI Commands:** find (1), apache (1), make (1)
> **Code Identifiers:** ecommerce (1), icloud (1), itunes (1)
> **Env Vars:** covid (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. The Three Vs: Volume, Velocity, and Variety

[↑ Back to Table of Contents](#table-of-contents)

#### [Volume: How much data are you really talking about?](https://www.linkedin.com/learning/introduction-to-nosql/volume-how-much-data-are-you-really-talking-about?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/volume-how-much-data-are-you-really-talking-about?u=76281980&t=0)** - [Instructor] According to Seagate's Global Datasphere research, realtime data in 2010 was about one zetabyte. A zetabyte is a one followed by 21 zeros. Now, I'm not sure about you, but I have a hard time imagining how large that really is, so let's see if we can get our heads wrapped around this. If the average movie length is 90 minutes, then one zetabyte can store around 30 billion 4K movies. If you watch them all back to back, it would take 5,133,579 years. I sure hope you like popcorn. Here's some butter. So, let's talk about the volume requirements that spawned [[NoSQL]] [[Databases]] and continues to fuel their growth. If one zetabyte sounds like a lot, try to wrap your head around 175 zetabytes, which is the predicted value in the next few years. If we thought [[Big Data]] was big in 2010, it's growing absolutely enormous and shows no signs of letting up. So it's one thing to say that NoSQL databases can handle huge amounts of data, but how do they do this? Now, think back to our conversation on horizontal [[Scalability]]. Remember that NoSQL databases distribute data around multiple nodes or machines in a single database. Now, each of these nodes can handle some amount of data and this isn't the same across all NoSQL databases, but for our example, let's say that's one terabyte of data. Now, using our garden example from earlier, as the amount of garden projects increases, so does the amount of data being stored on each node. Now, let's pretend we have three nodes in our database and each can store one terabyte. By the way, one terabyte can hold
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-nosql/volume-how-much-data-are-you-really-talking-about?u=76281980&t=94)** roughly 4.5 million 200-page books. That's a lot of gardening, but like I said earlier, are input viral. Now, if data keeps growing, eventually we'll run out of space on our three nodes and here's where NoSQL databases do something really cool. To expand, just add another node. Now, we have four terabytes of storage. If we need more than four terabytes, just add another node, and so on. Now, to be clear, this is a really simplistic example but hopefully it gets the point across. Now, contrast this to how we scale up traditional databases. In order to add more storage, we would need to add more disk to a single machine. And at some point we'll run into physical constraints and won't be able to add anymore. We've essentially filled up our bucket. Now, one might ask, "Wouldn't adding multiple machines be more expensive than simply adding more disk to one?" That's a good question. NoSQL databases were designed in what we call low commodity [[Hardware]]. Generally, a single machine needed for a NoSQL database is much cheaper than it was normally needed for a traditional database. So, when comparing each of the same data scale, NoSQL databases tend to be cheaper overall. Data is growing at an ever increasing rate, and it's at a scale that's hard to wrap our heads around. NoSQL databases were built with this in mind, and some can effectively scale indefinitely. They are uniquely poised to take on big data and can continue to grow along with our data needs. Horizontal scalability has other benefits not only related to data size, so let's continue the conversation, see what's in store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (9), [[Databases]] (9), [[Big Data]] (2), [[Scalability]] (2), [[Hardware]] (1)
> **CLI Commands:** node (3)
> **Definitions:** is a  (2)
> **Versions:** 4.5 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Velocity: Defining online speeds with OLTP](https://www.linkedin.com/learning/introduction-to-nosql/velocity-defining-online-speeds-with-oltp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/velocity-defining-online-speeds-with-oltp?u=76281980&t=0)** - [Instructor] When you go to a website or use an application, do you care at all how much data is behind whatever it is you're doing in that application, or do you just care that it's responsive, that it feels immediate and you're not stuck waiting? How many of us have used an application that took, say five, maybe 10 seconds to respond, and immediately felt frustrated and wanted to leave the site? Today, we simply expect that our experiences will be instant, and this gives us part of the picture of why [[NoSQL]] [[Databases]] are built the way they are, and why they came into the scene. We'll discuss the difference between transactional and analytical queries, and how those apply to both relational and NoSQL databases. Let's get into it. So to really grasp the distinction between NoSQL and [[Relational Databases]], we need to talk about OLTP and OLAP. Yes, acronyms! All right. First, OLTP means online transactional processing which translates into real time or online speeds, the speed of the web. When we talk about instant experiences, this is what we mean. And OLAP means online analytical processing. These are cases where you need to analyze your data, sometimes very large sets of data, or perform ad-hoc queries. And ad-hoc queries aren't predefined, they might just be a single request. Now, each OLTP and OLAP have different properties. OLTP queries require fast response times. They're usually simple queries that don't change often. These are the types of queries that we build into applications, the repeatable queries that may be executed thousands or millions of times. And they need to be as fast as possible.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-nosql/velocity-defining-online-speeds-with-oltp?u=76281980&t=96)** Now, on the other hand, OLAP queries tend to be a lot more complex. They may take many seconds to minutes or longer to complete and they may also be exploratory queries that we use to analyze and get value out of our data. Now I'd like you to take a moment and visualize a horizontal line. Put OLTP on one side and OLAP on the other, then slap relational databases right in the middle, then put NoSQL databases on the OLTP end. Now this is a key concept that's important to understand. Relational databases are general purpose databases and can perform both OLTP and OLAP queries. You can do this all in a single database, this is a feature, and one of the reasons that some people continue to use relational databases. But as you might have guessed, because of their general purpose nature and limits on [[Scalability]], performance can degrade as data size increases. For example, you might start to run into performance issues in a relational database with a table that has millions of rows, compared to some NoSQL databases that can handle billions of rows while providing online performance. But here's a key point. Comparing relational [[SQL]] databases to NoSQL databases is not an apples to apples comparison. They're each built for different needs which is an important distinction. As data grows, we still expect immediate response times. Users don't care how much data or complexity are behind a system. They just want it work and work fast. If every time you tried to use a card on a shopping site it took 30 seconds to respond, you'd most likely find another vendor. NoSQL databases are designed to scale easily
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-nosql/velocity-defining-online-speeds-with-oltp?u=76281980&t=189)** and maintain consistent online speeds, no matter the scale. Relational databases are mostly general purpose and perform a wider range of queries, but at a cost to performance as data grows. And understanding this distinction is key to understanding how NoSQL databases scale with our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (9), [[NoSQL]] (8), [[Relational Databases]] (5), [[Scalability]] (1), [[SQL]] (1)
> **Env Vars:** oltp (7), olap (6), sql (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** picture (1), for example (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Velocity: Understanding and increasing throughput](https://www.linkedin.com/learning/introduction-to-nosql/velocity-understanding-and-increasing-throughput?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/velocity-understanding-and-increasing-throughput?u=76281980&t=0)** - [Instructor] Throughout this course, we've talked a lot about how [[NoSQL]] [[Databases]] can maintain performance at scale and handle extremely large sets of data. But I want you to think on this a moment: how? Given what you've learned so far, see if you can come up with an approach. The answer lies in one of the key features of NoSQL databases. Now it's one thing to say that a database can handle [[Big Data]], but it wouldn't matter much if the database just got slower and slower as more data is added to it. As we learned in the last video, NoSQL databases operate at online speeds and they need to maintain query response times, usually in milliseconds, in order to stay effective. Now, looking at Netflix again, they handle many millions of operations per second, adding up to hundreds of billions of interactions a day. Yes, that's hundreds of billions. Just think about the enormity of that for a moment. Oh, and all those interactions need to be super fast in real time to ensure users aren't frustrated and have the best experience. So to understand how this is done, we need to know a little bit about throughput. Look up throughput online and you'll find a definition similar to the amount of items processed within a given time. It's essentially a measure of how much stuff we can transfer from one location to another and at what speed. Location in our Netflix example might be both from your TV or application back to the Netflix service itself. Let's take a single machine. Use our gardening example and say it's throughput is 1,000 operations per second, but now our user base is really growing and we need to double the amount of operations per second we can handle. How do we do this? Add another machine, again at 1,000 ops a second,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-nosql/velocity-understanding-and-increasing-throughput?u=76281980&t=93)** and split the data between the two. Now we have two machines instead of one, both at a thousand ops a second, but with the same data spread around a single database, thereby doubling our throughput. If I need 3,000 ops a second, add another machine, rinse and repeat. Now I'd like to point out this is a very high-level example. I'm glossing over a ton of details. In reality, there's a lot more to it. We could spend hours digging into things like replication, linear [[Scalability]], asynchronous communication, and how they affect actual throughput. What's important is understanding how the same ability to horizontally scale not only increases the amount of data a NoSQL database can store, but it's also key to maintaining performance as that data grows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (4), [[Databases]] (3), [[Big Data]] (1), [[Scalability]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Variety: Rethinking the data model](https://www.linkedin.com/learning/introduction-to-nosql/variety-rethinking-the-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/variety-rethinking-the-data-model?u=76281980&t=0)** - [Instructor] Have you ever been in a restaurant and got stuck deciding between a dish that you've had for years, one that's familiar and certain you'll enjoy compared to trying something new, maybe something healthier? You just want to add a bit of variety of your taste buds. This experience is similar to what we face when [[Data Modeling]] for [[Relational Databases]] compared to no [[SQL]] [[Databases]]. One is tried and true. The other offers up a lot more variation of flexibility, both have pros and cons. So what kind of differences can we expect to see when data modeling between relational and no SQL databases? Let's talk about it. Now, data models are the structure we used to store data and databases. Remember the garden table we created earlier to store our projects in? While an extremely simple case, this is a data model and it provides a whole host of information that defines the structure of our data, where the data is located, what fields and types of data exist, how to look it up, et cetera. Now we've been using relational databases for the better part of 50 years. And the way we data model with them is still fundamentally the same. It's familiar. Relational databases were born at a time when the amount of storage available was very small and extremely expensive. So they were built to use the least amount of storage possible and favored using unique non-repeating data. We call this low redundancy. For example, let's say we extend our garden app to include plant types along with projects. We could simply add a type field to our existing garden table like this. However, as we add more projects and plants, we'll most likely repeat some plant types. And as our projects continue to stack up, a lot of the same data gets repeated, like herb in this example. So to make sure we have low redundancy,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-nosql/variety-rethinking-the-data-model?u=76281980&t=93)** we'd most likely create another table and store each plant type only once. Then we'd link the plant type table to the garden table to join the tables. That way, when we query data back, we still get all the needed information, but we aren't needlessly repeating data. So this is a more efficient use of space, which we're great back when relational databases were first created but these joins add complexity and processing time. And the performance cost of those joins can really add up. Imagine what this might look like with tens or hundreds of tables in a single data model. Now we've been using virtually the same methods of data model for decades with relational databases to great effect. However, they simply don't scale when [[Big Data]] comes into play. And when those SQL databases came into the scene, they were built to handle data modeling in a different way to improve performance and [[Scalability]]. And this led to a set of different approaches that really changed how applications are built. So let's try something new and add some variety to our data modeling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (5), [[Data Modeling]] (4), [[Databases]] (4), [[SQL]] (3), [[Big Data]] (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (2), we call this (1)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Variety: NoSQL data models](https://www.linkedin.com/learning/introduction-to-nosql/variety-nosql-data-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/variety-nosql-data-models?u=76281980&t=0)** - [Narrator] By taking advantage of advances in technology, they simply weren't constrained the same way traditional [[Databases]] were. Now, [[Relational Databases]] use a tabular, structured [[Data Modeling]] approach that focuses on keeping data redundancy low. Think rows and columns in a table, like a spreadsheet. Now, no single databases flip this on its head and offer more variety in how we model data and our purpose built to conform to specific data modeling styles. One example are key value databases. They're the simplest in terms of data modeling and some of the fastest databases out there. And as the name applies, you store some value and look up that value using a key. A telephone directory is a good example, where the key is the person or business and the value is the phone number. Now you can store all sorts of information this way, but notice it's not tightly structured the way a relational database would be. We don't have any of the table definitions, constraints, or joins between tables, which results in less processing needed to get the data. Now there are plenty of other examples like document stores, graph, time series, and even tabular [[NoSQL]] databases. And there's data modeling approaches can vary quite a bit. Some don't require much if any data modeling up front, whereas others do require some but not to the degree the relation databases do. Another example are document stores. Think just storing the contents of some document without caring about what's on the page. This kind of database is optimized for storing and retrieving documents but there's no relationship between them. This could be very useful for storing patient medical information because each patient's data is so unique. No [[SQL]] databases opened up possibilities
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-nosql/variety-nosql-data-models?u=76281980&t=93)** that allowed application builders to evolve the kinds of experiences and services we all consume every day. However, there is a trade off. Nothing comes for free. Or no SQL databases may reduce complexity in some ways, that complexity is then passed off to application developers to count for it in their applications. So reducing complexity in one just moves it to another. But the payoff for no SQL is performance, scale, and more resilient databases and many companies feel it's worth the trade off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (9), [[Data Modeling]] (5), [[SQL]] (3), [[Relational Databases]] (1), [[NoSQL]] (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [narrator] (1)


### 4. Differences in Scalability, Performance, and Data Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Comparing the three Vs to current relational databases](https://www.linkedin.com/learning/introduction-to-nosql/comparing-the-three-vs-to-current-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/comparing-the-three-vs-to-current-relational-databases?u=76281980&t=0)** - [Instructor] Comparing relational and [[NoSQL]] [[Databases]] is like comparing an Olympic decathlon athlete to a hundred meter world record holder. While the decathlon includes a hundred meter sprint, pure 100 meter spinners are usually faster. That's not that one athlete is better than the other but they hone their bodies differently. One being more general purpose while the other focus is on a specific ability. Now, since the time of the NoSQL revolution, [[Relational Databases]] have shored up some of the gap but they simply can't scale the same performance as NoSQL databases. They are though great general purpose systems that can perform a wide range of operations. Now, relational databases have come a long way since they've been around and they continue to evolve. Over the years, they've made marked improvements in the volume of data they can handle, the velocity at which they can process that data and the variety of data formats they can use. Many can even scale out in a sense as compared to only vertically scaling but when combining the three Vs together, volume, velocity and variety, they don't match in a [[SQL]] databases. Now one can argue this isn't a fair comparison because we're taking relational databases and comparing them to a whole class of various NoSQL databases, each that are specialized reform specific functions. And as I said earlier, in this course, this isn't an apples to apples comparison, and it shouldn't be treated that way. Now you can find plenty online forums, university studies and benchmarks that say some relational database is faster than a NoSQL database in a very specific use case or that NoSQL databases outperform relational databases in every situation.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-nosql/comparing-the-three-vs-to-current-relational-databases?u=76281980&t=93)** The fact of the matter is these databases are simply built to do different things. They each have their place. And if you take nothing else away from this course, it would be this one point. Relational databases can perform a wide variety of queries, both on the transactional and analytical parts of the spectrum. And they do this using a single language that developers have been using for decades. They conform to a set of standards that keep data consistent at the database level, generally preventing developers from worrying about this in their applications. But with these abilities com constraints and availability and performance and [[Scalability]] as data grows. Now, NoSQL databases have more variety in the types of data formats available to them but these aren't all usually available in a single database and it can take more time for developers to learn each of these variations. They scale extremely well and in some cases can scale indefinitely which allows them to easily grow along with data and many have solid availability that can shrug off outages that would stop a relational database code. But not all of them offer options for strong consistency like relational databases do, which puts more of the burden on application developers to account for this in code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (7), [[Databases]] (7), [[Relational Databases]] (6), [[SQL]] (1), [[Scalability]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [That's a wrap](https://www.linkedin.com/learning/introduction-to-nosql/that-s-a-wrap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-nosql/that-s-a-wrap?u=76281980&t=0)** - [Instructor] Well, look at that, you made it to the end of this course. We've covered so much. Great job. I hope you have a new appreciation and understanding for the ways that [[NoSQL]] [[Databases]] power everything we do. The size and scale of data out there is mind-boggling, and it shows no signs of letting up. NoSQL database adoption continues to grow. And with it, new disruptive apps waiting to change your lives are right around the corner. Thank you so much for joining me on this journey as we explored the NoSQL landscape. I hope you had as much fun learning about NoSQL databases as I did explaining it. If you've gained some knowledge along the way, I'll take it as a solid win for both of us. Now, feel free to reach out to me at david-gilardi on [[LinkedIn]] and SonicDMG on Twitter and [[GitHub]]. Take care. And the next time you launch an app, take a moment to reflect on the sheer size and scale that exists behind the scenes to make it all happen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (4), [[Databases]] (2), [[LinkedIn]] (1), [[GitHub]] (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


## Skills Covered

- NoSQL

## Path Context

### In [[Develop Your NoSQL Skills]]
**1 of 10** | [[NoSQL Essential Training]] →

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Cloud NoSQL for SQL Professionals]] — NoSQL
- [[NoSQL Essential Training]] — NoSQL

---

[↑ Back to top](#)