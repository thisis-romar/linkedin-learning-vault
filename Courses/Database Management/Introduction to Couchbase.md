---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-couchbase
url: "https://www.linkedin.com/learning/introduction-to-couchbase"
duration_minutes: 71
duration: 1h 11m
level: Beginner
updated: 2/28/2024
learners: 16135
skills:
  - Database Development
  - Couchbase
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHhmHn_rhPxdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655146592401?e=2147483647&amp;v=beta&amp;t=s7G9TI7Oon7yRPl5ToMz4_RyqOc1VCzsgSFUZla_7qI"
linkedin_topic: Database Management
learning_paths:
  - '[[Develop Your NoSQL Skills]]'
prev_courses:
  - '[[Redis Essential Training]]'
next_courses:
  - '[[Elasticsearch Essential Training (2023)]]'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":7,"total":10,"prev":"Redis Essential Training","next":"Elasticsearch Essential Training (2023)"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/database-development
  - skill/couchbase
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Introduction%20to%20Couchbase.md)

![Introduction to Couchbase](https://media.licdn.com/dms/image/v2/C560DAQHhmHn_rhPxdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655146592401?e=2147483647&amp;v=beta&amp;t=s7G9TI7Oon7yRPl5ToMz4_RyqOc1VCzsgSFUZla_7qI)

# Introduction to Couchbase

> The course provides an overview of the fundamentals of Couchbase, a leading NoSQL database that's been emerging in popularity, offering data format versatility and easy scalability all without downtime. Instructor Michelle Burns walks you through the basics of Couchbase Capella and shows what it can do for you, whether you’re a developer, admin, or just looking to learn more about Couchbase. She s

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase) | 1h 11m | Beginner | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Getting Started with Couchbase Capella]]** (8 videos)
- **[[#2. Completing Key Value Operations]]** (5 videos)
- **[[#3. Querying with Couchbase]]** (2 videos)
- **[[#4. Getting Your Couchbase Database to Perform Effectively]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Couchbase and what it can do for you
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=0)** - [Michelle] Are you an application developer looking to make the next great app?
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=4)** Or are you a SQL developer who already created a wildly successful app that now needs to scale?
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=11)** If you're wondering where to begin, I suggest with Couchbase Capella.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=16)** Couchbase is a NoSQL database that uses and expands the ability of SQL and can scale often without system downtime.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=25)** Capella provides a fully-managed Couchbase database.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=29)** It automates setup, ongoing operations, and database maintenance.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=33)** This allows you to fully focus on what you are good at, bringing to life a best-in-class application.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=40)** I'm Michelle Burns, the lead e-learning creator for the Couchbase Academy.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=45)** I'm excited to teach you all that Couchbase Capella has to offer.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-and-what-it-can-do-for-you-23456905?u=76281980&t=49)** So let's jump right in.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [michelle] (1)

#### Couchbase: Understanding the lexicon
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=0)** - [Instructor] Before diving into Capella, let's learn how Couchbase organizes data.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=5)** Couchbase is a NoSQL database, that harnesses the power of an SQL or relational database, while allowing for the flexibility of a NoSQL data solution.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=16)** It is highly available, provides low latency transactions, and is easily scalable, often without downtime.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=25)** Capella is an interface that allows you to access a fully managed, Couchbase database.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=31)** Here, I'm showing you Capella, where you can view and work with many databases, or clusters, all from one pane.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=40)** At Couchbase, data is in databases, also referred to as clusters.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=46)** A database is a group of interconnected servers or nodes, that work together to support applications.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=53)** In this example, Freedom Air has three databases or clusters of data fueling different applications, including thick desktop, web, mobile, or any application built using an SDK.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=68)** Let's drill into one database to see what it's made of.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=72)** Database one is composed of five servers or nodes, which is not a requirement, but simply an example.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=79)** The number of nodes is chosen by a user who completes the initial setup.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=84)** In production, Couchbase requires a minimum of three nodes, to ensure the data's high availability.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=91)** While Couchbase has six different services to choose from, this example configuration shows the three most commonly used services.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=99)** Three nodes in this example are for the data service, and two nodes are split between the query and index services.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=107)** You can choose to have more than one service on a single node, or a node can be devoted to a single service.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=113)** The choice is yours.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=115)** An important feature of Couchbase is auto failover, where Couchbase automatically replicates data in a database, to ensure it's always available, even if one or more nodes fail.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=128)** This configuration shows the minimum recommendation of three data nodes.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=133)** And you can see how some are marked active, while each has a replica.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=139)** Replicas are kept in warm standby, so they're always ready to replace the active node when needed.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=146)** So for example, if node two here fails, Couchbase immediately activates node two's replicas.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=154)** So the node continues to take requests.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=157)** As long as the appropriate number of replicas is present at all times, the Couchbase database will be highly available.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=164)** And the best part is, users rarely know failover took place.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=169)** Now we'll look at the way that data is partitioned within data service nodes only.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=176)** A bucket is our first level of partition.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=180)** A bucket is the same as a database in a SQL or relational data model.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=185)** A scope lives within a Couchbase bucket on a data service node, and a scope is similar to a schema in a relational data model.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=195)** The next data partition is a collection, which lives within a scope.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=200)** It is similar to a table in a relational data model.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=204)** So this leads to an obvious question.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=207)** Where do your documents go?
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=208)** In Couchbase, documents are housed in Collections, where all key value operations are performed.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=215)** Further, you have multiple data format options, including JSON, CSV, TSV, and JSON line.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=224)** Finally, documents are similar to rows, in a relational database model.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=230)** And why does this structure matter to you?
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=233)** Well, if your data is organized into microservices, it comes into the database in certain groupings.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=239)** Scopes and collections maintain those groupings, so you're not reinventing your structure.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=245)** When operations are coded, the database is directed to a collection of documents, speeding up operation times, and increasing retrieval accuracy.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=255)** If you want multiple non-related users to access data, scopes and collections help keep data in appropriate isolation, which ensures data integrity and allows for greater security.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=268)** And those are the building blocks of Couchbase.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-couchbase/couchbase-understanding-the-lexicon-23456903?u=76281980&t=271)** Understanding how Couchbase is organized allows you to make Capella and database settings choices that strengthen and sustain your applications.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), make (1)
> **Env Vars:** sql (2), json (2), sdk (1), csv (1), tsv (1)
> **Code Keywords:** let (2), interface (1), from, (1), finally, (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** similar to (3), for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Couchbase Capella

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Signing up for Capella
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=0)** - [Instructor] Getting into Couchbase Capella is quick and easy.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=3)** You can do it in around three minutes.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=6)** I'll show you how by sharing a real-life example.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=9)** Let's say Freedom Air, my company, is considering Couchbase Capella to simplify and accelerate database management.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=17)** As a Freedom Air admin, I want to explore the free trial, so I'll use this address to navigate to the Capella sign-up page.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=25)** Here on the Capella signup page, I will enter my name, email address, and all relevant information and click get started.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=34)** Capella will then ask me to verify my email address by sending me an email.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=40)** Remember to check any spam or promotional folders for that email address.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=46)** I've found the email, and I'll click the link here to verify.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=51)** You may be asked to sign in again.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=55)** From here, you'll agree to the service agreements by clicking in the box and opting in to email if you so choose.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=62)** Then click create account.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=65)** For this 30-day free trial, which does not require a credit card, you'll be given these options.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=71)** Make your choices accordingly, and click deploy now.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=78)** If your organization needs other regions, you'll want to upgrade to the full access version of Capella, which you can do at any time.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=87)** While the database is launching, I do want to make a point about geography.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=92)** We have many different options at this time, depending on the service you choose.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=98)** However, to learn more about configuration options by cloud service, please navigate to this area to learn more in Couchbase documentation.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=111)** It's important to note if your servers are physically in the same location as the region you choose, your latency will most likely be low.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=119)** However, if the region you choose is far away from your server's physical location, your database's latency will most likely increase, decreasing the efficiency of your application.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=133)** And just like that, welcome to your Capella free trial!
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-couchbase/signing-up-for-capella-23461791?u=76281980&t=137)** Your database is now ready, and we will take the next steps in the next few modules.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), require (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Adding users to Capella
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=0)** - [Instructor] Now that our cluster is up and running, our first step is going to be to add users as you probably know right this minute who those people are.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=9)** Within Capella, our first step is going to be to add users at the UI level.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=14)** Within a few clicks, you can add all the users you need to the entire Capella UI.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=19)** Let's look at our user options.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=22)** An Organization Owner is the only user who can add or delete other users.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=28)** This person has access to billing, can generate or modify API keys, and has full data access to all clusters, projects, and clouds created.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=38)** The Project Creator is someone who creates the projects that organize your clusters of data.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=45)** This person is also automatically assigned as a project owner for any projects they create.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=51)** A Cloud Manager is a user that you would only add if you have previous experience with Couchbase.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=57)** This person is someone who manages outside clouds hosted separately in Microsoft Azure, Amazon Web Services, or Google Web Services.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=66)** And finally, an Organization Member has read only access at the organization level for projects they're assigned.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=75)** They can also be given more extensive permissions within the projects or clusters.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=80)** And now we've returned to the Capella UI in order to add our users.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=85)** My first step is to navigate to the users area and because I've created this trial account, I will be listed here as the Organization Owner.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=96)** In order to add a user, I'm going to click add user.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=100)** I will add the person's name and email address.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=111)** Then based on the role that I'll need, I'll give John his organizational permissions.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=120)** I'm going to make him a Project Creator so that he can create projects within Couchbase Capella.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=126)** And then I click add user and Capella has told me that John Doe was added successfully.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=133)** He will be listed as pending until he accepts his verification email.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=138)** Also, it is very easy to delete a user as all you would need to do within the Capella UI is click on the trashcan and type the word remove in order to remove John as a user.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-couchbase/adding-users-to-capella?u=76281980&t=154)** Capella again will tell me that John was successfully removed and I'll need to add all users who will interact with the Capella UI from this area.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), let (1), finally, (1)
> **UI Navigation:** navigate to (1), click on (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Segmenting databases and adding users to projects
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=0)** - [Instructor] Now that your organization users have been added, you can add projects to Capella.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=6)** Think of projects as a way to organize the clusters of data that feed your applications.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=12)** Projects allow you to keep or adjust your current data structure and strengthen data access security.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=20)** Here's an example of what the user structure looks like behind the Capella UI.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=25)** Organization users are first added to Capella, then projects are created and users are given the needed permissions to work within each project.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=36)** Each project can house one or more clusters of data, and a user with access to that project has access to all clusters within the project.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=46)** So, if I have five developers with access to this project on the screen, each developer will have access to all three clusters within this project.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=57)** Making sure you understand this is key to maintaining data security.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=62)** And it is a best practice to plan out which clusters logically need to be linked within a project.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=69)** To do this, you may want to gather your team and whiteboard the answers to these two questions.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=75)** Number one, how are my applications organized today?
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=79)** And number two, how do I want them to be organized in Capella?
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=84)** When Freedom Air planned out their project structure, they decided to separate projects out by housing applications for airports in project one, for flight paths in project two, for airlines in project three, and for regions in project four.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=101)** This way, they gave access to clusters following current data structures.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=106)** Let me show you how easy it is to begin creating a project structure in Capella.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=112)** Just so that you're aware, I've cleared all of the trial information so that we can start with a blank slate for this demonstration.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=121)** From the menu on the left, I would first click Projects, then I will click Create a Project and I'll give my project a name, Project 1.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=133)** I click Create a Project, and automatically Capella has told me that Project 1 has been successfully created.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=141)** I can then go about adding Project 2,
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=154)** Project 3, and Project 4.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=162)** To add users to a given project, I will first click on the project name and here you can see two options, the clusters identified as part of this project and the users.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=174)** We'll click on users and I'll need to click add users to project.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=182)** From here, I'm going to use the dropdown menu and I'm going to choose the user I'd like to add.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=189)** Remember, users must first be added at an organization level.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=194)** If the user is in Capella, they can be selected from the dropdown menu.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=199)** If the user is not in Capella, they will not be present in the dropdown menu.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=205)** From here, I'm going to give this user project owner permissions and I'm going to click Add User.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=212)** Capella has told me that I've successfully added one user, and now Michelle Burns has been given options to work within any clusters within this project.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=224)** Within the user options were five different roles, and I'd like to show you where you'd find out what the capabilities of each of those permissions are.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=234)** You can do that by clicking on Documentation on the left, then click on Organizations and Access, Organizations, and Manage Users.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=248)** This is the most up to date information about Couchbase Capella supplied by Couchbase.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=254)** And here you can learn more about the capabilities of each of the users within Capella.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=262)** I'd also like to make a quick note here that my examples cover multiple projects and clusters, but please be aware that the free trial version of Capella can create many, many projects, but you can only spin up one data cluster.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=277)** If you need more than one data cluster, please upgrade to the full access version.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-couchbase/segmenting-databases-and-adding-users-to-projects?u=76281980&t=283)** While segmenting databases into projects takes time, once identified, they enhanced database visibility and data access security well worth any time spent.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), dropdown (3)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** this, (1), let (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Spinning up cluster with buckets, scopes, and collections
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=0)** - [Instructor] With Couchbase Capella's 30 day free trial, you can easily take a Couchbase database for a spin.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=7)** This section will show you what you get and how to view the data included with the trial cluster.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=13)** Let's start with an example.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=15)** As a Freedom Air database manager and developer, I came to Capella to see how Couchbase can handle my needs, but in order to do any of these things, I need to know how my cluster is configured, and where to find my data.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=30)** In order to do that we will navigate over to the Capella UI.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=34)** Now that our cluster is up and healthy, indicated by this green dot here, let's look at some of the configurations that are set by default.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=44)** First, I will click the name of the cluster to view the details, and then I will click Configuration across the top.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=51)** As part of the trial cluster we're on a basic plan, which enables us to have a one node cluster with four of the Couchbase services, including data, index, query, and search.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=65)** My compute viability is two virtual CPUs at eight gigabytes of RAM.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=72)** My disc type is GP3, Amazon's EBS general purpose SSD volume type.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=80)** My storage capacity is 50 gigabytes.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=84)** And I have 3000 input output operations per second, or IOPS.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=90)** If you want any more than what's here, you can always hit Upgrade to get the full access version of Capella.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=98)** Now we're going to navigate to Buckets to view the data that Couchbase has put into this bucket by default.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=107)** I can see here that my bucket, which is called travel-sample, has over 63,000 documents in it.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=116)** It uses 76 MIB of in memory data.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=121)** And the disc used is about 55 MIB.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=125)** If I click on the title of the data set, I can make adjustments to the bucket behavior under Advanced Settings.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=134)** For example, I can enable Flush or specify a time to live for documents.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=140)** Both of these settings are disabled by default.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=144)** Before we get any further into the documents, and how they're structured, let's walk through a reminder of how Couchbase breaks documents out.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=153)** Use the bucket to get the appropriate scope.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=156)** Use the scope to get individual collections and perform queries across the contained collections.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=163)** Use the collections to perform key value operations on JSON or CSV documents.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=169)** Remember too, that each of these segments align with a relational database in this way.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=176)** Buckets are Databases, Scopes are Schemas, Collections are Tables, and Documents are Rows.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=184)** Returning to the Capella UI, where can I find these buckets, scopes, collections, and documents?
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=190)** Within the buckets tab I will click on the three dots icon at the end of the data set row here.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=198)** Now I can see my options for scopes, collections, and documents.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=203)** I can also delete the entire bucket if I so choose.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=207)** In order to see the information specifically in each data set, you can click Documents, and you can see that documents are separated out by the bucket, the scope, and the collection.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=225)** I can also change the limit of documents I see on a single screen from 5, to 200.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=234)** Finally, if you wanted to delete all the preset data, and import your own data, you would simply need to delete the buckets, and then click Tools and Import, and then import your own JSON or CSV files into your own named bucket.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-couchbase/spinning-up-cluster-with-buckets-scopes-and-collections?u=76281980&t=256)** Congratulations, you have your very first cluster in Couchbase Capella and you are now ready to run key value operations, queries, and indexes against the data inside it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default. (3), delete (3), type. (1), finally, (1)
> **Env Vars:** mib (2), json (2), csv (2), ram (1), gp3 (1)
> **CLI Commands:** find (2), node (1), make (1)
> **UI Navigation:** click on (2), navigate to (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Choosing an SDK and an IDE
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=0)** - You probably already know, but if you don't, you have many code language options to choose from when working with Couchbase clusters.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=7)** In order to connect your application to the Couchbase cluster housed in Capella, you'll use one of the nine software development kits or SDKs that Couchbase supports.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=18)** To have this conversation, we'll first narrow down the choices and say our example Freedom Air is a Node.js shop.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=23)** and say our example Freedom Air is a Node.js shop.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=27)** Now I'll jump back into the Capella UI and we'll need to go to documentation so that you can get the most current Node.js SDK.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=37)** To do that, I'm going to click on documentation, and from here, I'll navigate up to SDKs and you can see all the options that are present with the most current version available.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=50)** I'll click on Node.js and as you can see, there's getting started, working with data and a variety of other pieces of information.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=59)** I'm going to click getting started and start using the Node.js SDK.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=64)** As you read through this information, it's going to be important that you look for the Capella versions of how to connect to a Node.js application.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=73)** My next step will be to open visual studio code.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=77)** My preferred IDE or integrated development environment.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=82)** Visual studio code is a free IDE open sourced on the internet.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=86)** It can be found at code.[visualstudio.com/download](https://visualstudio.com/download).
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=88)** It can be found at code.[visualstudio.com/download](https://visualstudio.com/download).
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=93)** In VS Code, I'm developing a Node.js project In VS Code, I'm developing a Node.js project called app.js.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=98)** called app.js.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=100)** And you could call your project whatever you'd like.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=103)** I've already downloaded my package.json dependencies.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=107)** And in order to enter the other Couchbase dependencies into the IDE, I will type NPM, install, Couchbase.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=115)** I will type NPM, install, Couchbase.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=119)** And hit Enter to execute.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=122)** After the command executes, I can click on node modules and see that the Couchbase dependencies have been added.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=133)** Also, I can click on package.json to see the dependency declaration here for the version 3.2.5.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=140)** for the version 3.2.5.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=142)** And so with that, the dependencies are loaded into the IDE.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=146)** Now I know that developers love to have code samples.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=150)** So I'd like to provide you with a Node.js connect code that will make it easier for you to connect to Capella.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=156)** When connecting Node.js, you will of course use asynchronous APIs.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=160)** In this connection code example, you can see that async precedes the cluster method and the await prefix must be used or you'll need to work with a returned promise object.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=172)** And for a Capella connection, you'll need to whitelist the Capella cluster URL seen here to make the connection securely.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=181)** And there you have it.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-couchbase/choosing-an-sdk-and-an-ide?u=76281980&t=182)** That's how you can choose an SDK and add the appropriate dependencies so your project is ready and you are up and ready to get coding.

> [!info]- Semantic Content
>
> **CLI Commands:** node (11), npm (2), make (2)
> **File Paths:** node.js (10), app.js (2), package.json (2)
> **Env Vars:** ide (4), sdk (3), npm (2), url (1)
> **Prerequisites:** getting started (2), install (2), you'll need (2)
> **UI Navigation:** click on (4), go to (1)
> **Versions:** version 3 (2), 2.5 (2)
> **Tools:** visual studio (2), vs code (2)
> **Definitions:** is a  (3)

#### Connecting to Couchbase through Capella
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=0)** - [Instructor] You know, we've waited long enough.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=3)** Let's get Freedom Air's trial cluster connected to couchbase using Capella.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=8)** To make life easier, I've pasted an example of the no js connection code into our IDE Visual Studio code.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=16)** Let's see what we have here.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=18)** Across the top, the requirements statement allows access to the couchbase modules.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=25)** Then we have four variables to define, endpoint, username, password, and bucketName.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=32)** Below that is the connection code, and at the bottom, I've customized this by adding a ping to verify the connection, and a console.log to print the ping result.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=43)** Whether you use these additional lines is totally up to you.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=47)** Now where do I get these variable definitions?
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=50)** That'll be back in the Capella UI, so let's go there now.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=54)** My first step when I'm looking at my cluster is to click on the cluster name to view details.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=60)** Then I will click the connect menu.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=63)** Here is a variety of information I'll use to connect to the couchbase cluster.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=68)** But first, I'd like to show you a developer's paradise of information.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=73)** If I click on SDK Examples, you can choose any of the language examples, and use this code as a starting point for your application.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=83)** To close this, I'll click the x, and we're going to copy the endpoint here, as that's the first variable that's asked for.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=91)** Then, I'm going to go up to Buckets, and I'm going to take note of our bucket name, as that will be required for the connection code as well.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=101)** I'll navigate back into the IDE, and I'll paste my endpoint address.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=111)** Then, I'll key in travel sample, as my bucket name.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=120)** The other two variables I need to define are username and password.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=125)** It's very important to call out that you will need to add a user with database credentials, which is different from the username and password that you use to sign into the Capella UI.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=136)** I'll return to Capella.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=138)** I've returned to Capella in order to add database credentials by clicking connect and scrolling down to database access.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=149)** By clicking connect, I can see where we have database access and I'll click manage credentials.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=158)** From here, I'll click create database credential, and this will automatically list information from users that are added into Capella.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=168)** In order to make this easier to remember, I'm going to change the user name to FAClientApp, and then I'll key in an appropriate password.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=179)** As you can see, Capella will keep track of whether or not you've hit your password requirements, and I'm going to want to take note of this password.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=189)** Finally, I can make bucket selections, scope collections, and access selections, using the dropdown menus.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=197)** So I'm going to use the bucket travel sample, I'll focus on all scopes in the bucket, and then, I can choose my access of read, write, or read and write.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=212)** Once I've made my choices, I could add another user by clicking this button here, but I'm good with this one user for now, so I'll hit create.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=224)** Capella tells me that database credentials has been added, and now, I can return to my IDE to key in those variables.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=236)** My user name is FAClientApp, and my password is here.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=249)** The last thing I need to do is make sure, that my IP address is whitelisted, so that couchbase can connect to my client application and where it will run from.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=260)** This connection could be your local pc or possibly an EC2 instance where the app runs.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=266)** In order to whitelist the connection, I'm going to click the back button, and now I'm again on the connect menu.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=274)** I'm going to click manage allowed IP, and as you can see, there are no IPs allowed here, so I'll add an allowed IP.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=284)** I'm going to make a choice whether or not I'd like this to be a temporary add or a permanent add, and I'm going to leave it at permanent.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=292)** Also, because I'm working from my local machine, I can use the button here, add my IP, or I could paste in a different IP address if I'd like to.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=303)** From here on, I'm going to click add IP, and Capella will tell me, that this IP address has been successfully added.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=313)** Now we're ready to test our connection.
>
> **[5:15](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=315)** We've entered all of the variables here, and we'll save the code, and then I'll key in node, app dot js, and hit enter to run the code.
>
> **[5:31](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=331)** As you can see, the ping result has told us, that the connection was successful, and there you go.
>
> **[5:38](https://www.linkedin.com/learning/introduction-to-couchbase/connecting-to-couchbase-through-capella?u=76281980&t=338)** Freedom Air's trial cluster is now connected to couchbase using Couchbase Capella.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), for. (1), finally, (1), from. (1)
> **CLI Commands:** make (5), node (1)
> **Env Vars:** ide (3), sdk (1), ec2 (1)
> **UI Navigation:** click on (1), dropdown (1)
> **Code Identifiers:** bucketname (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Get your Couchbase up and running
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=0)** - [Instructor] It's time to apply the skills we've discussed in this chapter.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=8)** When you've finished with this challenge, you'll have your own Couchbase Capella single-node cluster.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=14)** You'll be able to connect to that cluster and start developing against it.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=18)** Working this challenge will mean you will complete these steps.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=22)** First, go to cloud.[couchbase.com/sign-up](https://couchbase.com/sign-up) and sign up for a free trial cluster.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=31)** This may take a few minutes.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=33)** Second, view the data that is automatically loaded into that cluster or, if you prefer, import your own data to work with.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=42)** Third, add a user under the Database Credentials area of the Cluster Connect menu.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=47)** Fourth, whitelist your IP address to allow your application to connect to the Couchbase cluster.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=54)** Fifth, choose whichever IDE, integrated development environment, and software development kit, SDK, you prefer to code with.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=64)** Look at the exercise files for website addresses for Visual Studio Code IDE, as well as the addresses of where to find any of the nine Couchbase-supported SDKs.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=75)** Sixth and finally, enter the appropriate connect code and run your code to show you have connected to your trial Capella cluster.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-get-your-couchbase-up-and-running?u=76281980&t=83)** Depending on the setup and download speeds, completing the steps of this challenge should take you no more than 10 minutes, good luck.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), sdk (1)
> **CLI Commands:** node (1), find (1)
> **Code Keywords:** finally, (1)
> **URLs:** [couchbase.com](https://couchbase.com) (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)

#### Solution: Get your Couchbase up and running
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=0)** - [Instructor] Now let's walk through the solution to the challenge activity.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=3)** My first step was to navigate to cloud.[couchbase.com/sign-up](https://couchbase.com/sign-up).
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=10)** I've filled in my information, checked service agreements, and chosen a cloud service and geography appropriate to my database needs.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=20)** And this is what our Couchbase trial database dashboard looks like as of today.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=25)** Please keep in mind that Couchbase Capella is always evolving to provide users with the very best experience, so your dashboard might look a little different.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=34)** We'll start by looking at the sample data that's automatically imported into a trial database under Explore Data.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=42)** You can also see the options to import data and to connect, which we'll cover.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=49)** For now, I'll click Explore Data as we need the bucket, scope, and collection names to connect.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=57)** Now, I'm in the query workbench, where I will expand the menu for the only bucket in this database.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=66)** Here, I'll take note that my sample data bucket is called Travel Sample, then I will also take note that the scope name I'm looking for is Inventory, and the collection that I want is called Airline.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=83)** I'll need all of these for my connection code.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=86)** I'll click Home to return to the welcome dashboard.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=90)** If you added your own data, you would've clicked Import Data and followed the steps outlined here under the Import sub tab.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=100)** Click Home again to return to the main dashboard.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=104)** And finally, I'll click the Connect option for step-by-step instructions on how to connect.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=112)** In the Connect menu, I'll want to save the Public Connection String Address, as this will be my variable input for an endpoint.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=123)** I can click the copy button here.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=126)** Then I'll follow the first step by clicking Allowed IP addresses.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=133)** Then I'll click Add Allowed IP and add my current IP address, and I'll click Add Allowed IP.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=144)** From here, Capella will tell me that that IP address is now added and the connection can be made between my database and my machine.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=154)** Then I'll follow step two to create my database credentialed user.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=160)** I'll click Database Access.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=165)** Then I'll click Create Database Access, and I will add my username, FAClientApp, and a password that fits the requirements.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=176)** I'll take note of that username and password in order to place that into my connect code.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=183)** Also, I can select All Buckets, or just have access to one named bucket that's here.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=195)** As well as the scope, and Read/Write access is what I'll want to choose here.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=203)** I'll click Create Database Access, and Capella will tell me that my database credential has been created.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=211)** Finally, I'll want to choose my database credentialed user.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=217)** This will allow the username and password to show up in the next steps, it's really helpful.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=224)** Based on my SDK needs, I'll make choices in steps three, four, and five of the Connect menu to get the code needed to connect your database.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=235)** I'll choose Node js as my code, and then I already have installed the Node js SDK, but here you have the opportunity to learn more and download that if needed.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=251)** In step five, I can choose a snippet of code or the full code sample, which is what I'm going to use.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=259)** Because I've selected my database credentialed user in step two, I can select my bucket, and then my scope, and then my collection that I'd like to connect to.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=279)** And now my sample code will include all the information I've already inputted, except the password here, I'll need to enter that.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=290)** Now I'm in Visual Studio Code, where I've already added my Node js dependencies.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=296)** Then I brought over the full code from step five of the Connect menu and pasted it.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=304)** I've checked that the correct inputs are here for the endpoint, the database credentialed user and password, as well as the bucket, scope, and collection name.
>
> **[5:19](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=319)** Finally, I will save the code and then run the connection.
>
> **[5:32](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=332)** And as you can see here, all of the different operations that were given to us by the sample code have run effectively.
>
> **[5:42](https://www.linkedin.com/learning/introduction-to-couchbase/solution-get-your-couchbase-up-and-running-23456904?u=76281980&t=342)** We hope you got through this challenge well, and we're moving on to the next steps of exploring Capella.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), let (1), public (1)
> **CLI Commands:** node (3), make (1)
> **Env Vars:** sdk (2)
> **Exercise Files:** sample code (2)
> **Definitions:** is called (2)
> **Warnings:** keep in mind (1), note that (1)
> **URLs:** [couchbase.com](https://couchbase.com) (1)
> **Cross-References:** in the next (1)


### 2. Completing Key Value Operations

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Completing a Get
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=0)** - [Instructor] As a developer, it's likely your next step is to build out application functionality by coding key value operations.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=8)** Using the code for a connected Couchbase database, as you can see here in Visual Studio Code, you'll need to remember that in Couchbase, key value operations are only completed on a collection.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=21)** We'll need to find a document ID we can use to test the get operation.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=26)** So we'll return to Couchbase Capella to look up a document ID that currently exists in the Travel Sample bucket.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=34)** After I've signed in, I'll click on my database name to view the details.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=42)** Then the Data Tools menu.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=46)** In order to see the documents within this bucket called Travel Sample, I'll want to make sure the Documents area is selected.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=54)** I can use the dropdown menu to select my bucket, my scope, and my collection.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=64)** And then I'll take note of this document ID, airline_ 10123.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=71)** That's what I'll use to test my get operation in my IDE, which will return to now.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=78)** For simplicity's sake, I've pasted in the get code here and let's see what we've added.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=85)** First, we have the named collection that is attached to the collection name airline up above here.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=93)** Then I've asked for the get result with the await prefix and the get method.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=98)** The document ID that I've noted is here.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=104)** Finally, I'll ensure the result is returned as an object by using console.log.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=111)** And as you can see, when I ran the command, document ID 10123 was returned with the information here.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=123)** You have now completed a get using the Node.js SDK in Couchbase.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-couchbase/completing-a-get-23462800?u=76281980&t=128)** Continue on to learn more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), await (1), finally, (1), continue (1)
> **CLI Commands:** find (1), make (1), node (1)
> **Env Vars:** ide (1), sdk (1)
> **UI Navigation:** click on (1), dropdown (1)
> **File Paths:** node.js (1)
> **Tools:** visual studio (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Completing an INSERT, UPSERT, and DELETE
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=0)** - [Instructor] When getting started with Couchbase, you might find that it helps to spend a little time better understanding how to perform required application tasks.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=10)** Let's talk about the common operations insert and delete and Couchbase's operation of upsert.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=17)** As you probably already know an insert assumes a document does not exist and if the document for a given key does not exist the code provided inserts the document.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=29)** This is the opposite of a delete operation assuming that a document does exist and the code provided removes that document from the database.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=38)** An upsert is specific to Couchbase.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=41)** It does not assume the preexistence of a document.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=45)** And so it will take one of two actions.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=48)** If a document does exist, that document is updated for a given key.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=52)** And if the document does not exist, it is inserted just like an insert operation.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=59)** Now, we'll return to the IDE to show you what an upsert looks like.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=63)** This code should be familiar to you by now with the cluster information, the bucket, and the scope already listed.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=71)** To make life easy, I'm going to paste the rest of the code in for an upsert.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=76)** And, as you can see, we've added the collection listed as airline, the result is set to an upsert and this is the document that we are upserting.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=90)** If you need a simple insert, you would simply change this method from upsert to insert.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=97)** Now, I'm going to save the code, and I will key in my run command, and hit Enter to execute the code.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=110)** As you can see, I have a CAS value, and a token for this newly upserted document because previously airline 2212 did not exist and now it does within the database.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=124)** I will now replace the information for the upsert with the code for delete.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=131)** And I have that here.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=136)** I'll copy, and then paste this back into the IDE.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=143)** And, with this one, we're simply adding the result, and removing the document labeled airline_10 which is the ID.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=153)** I'm going to save this information.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=157)** And then, again, I'll run the code.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=163)** And, as you can see, this operation has been completed.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-couchbase/completing-an-insert-upsert-and-delete?u=76281980&t=167)** And the document airline_10 has been removed from our database and, just like that, we've completed three different operations: insert, upsert and delete for our database set of documents.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (1)
> **Env Vars:** ide (2), cas (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** just like (2)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Handling errors and exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=0)** - [Instructor] Okay, so everything is going well, and your code has been running the exact results you want, but what happens when an error or an exception does come up?
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=11)** We all know that errors happen, and the best developers will always test and plan for them.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=17)** To see how to do that, we'll slip back into the Visual Studio Code IDE.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=22)** Here, I've written and saved code to remove a document called airline_10.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=29)** When I go down to the terminal and run the code,
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=37)** I can see that I have a document not found error, also known as a document not found exception in languages other than Node.js.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=47)** If uncaught, errors could be propagated to the web layer, which can cause headaches for you as the developer.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=54)** To improve this and to save time, I'll paste a try-catch block into the code.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=62)** And as you can see here, I've added an error message and a key identifier for the erroring operation.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=70)** I'll hit File and save the code, and now I'll go into the terminal and run the application.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=80)** Success, the error is now handled in that it's caught and displays a user-friendly message with a key reference.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-couchbase/handling-errors-and-exceptions?u=76281980&t=89)** And that's how we can code our application to provide appropriate and helpful outputs when errors take place.

> [!info]- Semantic Content
>
> **Tools:** terminal (2), visual studio (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Env Vars:** ide (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Complete a key value operation using Node.js
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=1)** - [Narrator] I hope you feel ready and excited to try out the skills we've just discussed by completing this challenge.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=12)** When you finish this challenge, you'll have working Node.js code for one, maybe two key value operations.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=20)** If you want to use a different coding language please reference Couchbase's website on SDKs for more examples.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=27)** Okay, so this challenge asks you to complete each of these steps.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=32)** First, go to Capella to view your clusters data set making note of the names of the buckets, scopes, collections, and document IDs for the data you'll use.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=43)** Second, in the IDE of your choice, complete one of two key value operations.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=50)** Either get or delete.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=52)** If you really want a challenge, you can do both.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=55)** Please note the solution to double check your work will be in Node.js.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=60)** Third, change the document key so the operation fails.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=65)** Fourth, add a try-catch block to the operation with the text for catching the error.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=71)** Fifth and finally, run the code and receive the error information as expected.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=77)** Depending on your familiarity with the coding options, this should take no more than about seven minutes.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-couchbase/challenge-complete-a-key-value-operation-using-node-js?u=76281980&t=83)** Good luck.

> [!info]- Semantic Content
>
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Code Keywords:** delete (1), finally, (1)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Complete a key value operation using Node.js
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=0)** - [Instructor] So, how did this challenge go?
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=7)** You have some options to choose from so I will show the code for two different key value operations.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=13)** Please remember that I'm using the no-js code.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=16)** If you're using a different language, please refer to the Couchbase documentation for those code examples.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=22)** I'll start by pasting in the get code.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=25)** When looking at this code, please note that any of the key value operations will start by obtaining the bucket, scope, and collection, as you can see here.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=35)** The catch block is written to catch any errors thrown during the get operation in the try block.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=42)** Now I'll save this and I'll run the application.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=50)** And as you can see, I've received my expected results.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=54)** And for those of you who chose the delete operation or for those super students who did both operations, I'll paste in the delete code.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=64)** Again, you'll notice that we've still named our bucket, scope, and collection.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=69)** We've entered the appropriate try catch block and we've changed the user friendly messages as appropriate to a delete operation.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=79)** Now I'll save this code and I'll run it.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=85)** And voila, I've received the expected result.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=88)** I hope this challenge felt simple and understandable.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-couchbase/solution-complete-a-key-value-operation-using-node-js?u=76281980&t=92)** And if you'd like to try other operations or other languages, please refer to Couchbase documentation for more code examples by SDK.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), super (1)
> **Env Vars:** sdk (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Querying with Couchbase

> [[#Table of Contents|↑ Back to Table of Contents]]

#### SQL and SQL++ and Indexing In Capella
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=0)** - [Instructor] If you are familiar with SQL, then you're familiar with Couchbase's SQL++, which you may have seen referred to as N1QL or nickel.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=11)** So what is SQL++?
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=14)** Well, it used to have a different name.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=16)** SQL++ is still the Couchbase query language that harnesses the power of SQL and the flexibility of JSON.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=23)** SQL++ manipulates JSN documents in the same way that SQL manipulates data in relational databases.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=33)** SQL++ extends SQL to handle nested data that is both schemaless and non-uniform and SQL++ handles data containing arrays and objects.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=47)** Here you can see the side-by-side comparison, where the syntax and standards are nearly identical.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=53)** There's only a small change in your from statement, so if you know SQL, then you know SQL++.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=61)** Now we'll return to the Capella UI to see how easy it is to work with these statements in our query workbench.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=69)** From our database dashboard, I'll click on my Cluster or Database name.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=75)** Remember those two words are interchangeable, and then I'll click on Data Tools.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=82)** And finally, I want to make sure that query is selected.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=87)** There are two dropdown menus here that are very important because you'll need to select the bucket and scope so your query works on the correct data.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=98)** To make things easier, I'll paste in a query where I'm looking to find US airlines.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=106)** I'll hit the Run button to run the query and Capella will give me a host of different information.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=115)** On the right here, you can see the indexing advice as well as build suggestions.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=122)** You can also see any indexes that currently exist, which may help you to improve your query.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=129)** The Recent Queries button allows you to see past queries and any indexes that you've entered.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=136)** And down below you can find the last run, the number of documents returned, the size, the time elapsed, and the execution time.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=146)** Finally, your data will output in these different formats.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=152)** JSON will always be the default view.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=156)** However, you can switch to table, chart, plan, or plan text based on your needs.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=165)** You also have the ability to download results, copy the query plan text, or expand this area.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=176)** There are a few special considerations you'll want to keep in mind when you're moving into SQL++ from SQL.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=183)** These are the DISTINCT function, special characters, case sensitivity, and the use of Couchbase's UPSERT.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=192)** Please note that while using SQL++, you can use the DISTINCT function in the same way you could use it when querying with SQL.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=203)** You'll need the use of back ticks when your collections or field names have any special characters or reserved words.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=211)** The example here illustrates the correct use of back ticks when querying in Couchbase.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=217)** Unlike SQL, attribute descriptions and bucket names are case sensitive, so that's another difference you need to keep in mind.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=227)** However, querying keywords are not case sensitive as it's shown here on the screen.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=234)** Finally, please know the UPSERT command, which is specific to SQL++, can replace the content of an existing document or it can insert a document that does not yet exist.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=249)** This is something not available in SQL.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=252)** Just so you have it on hand, here's a comprehensive list of common operations used in SQL++ querying and their definitions.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=261)** Please take special attention for the formatting of the FROM and JOIN syntax and definitions.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=268)** Now we're going to shift to another area where SQL++ is important and helpful: indexing.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=276)** In a modern world, everyone needs more speed and no one wants to be the developer of a good but slow application.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=284)** To that end, indexing becomes incredibly important.
>
> **[4:48](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=288)** Just so that we all know what we're discussing, we'll define an index as a data structure queries use to find records in a database faster.
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=297)** In short, adding indexes creates more efficient paths to frequently searched data.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=303)** And who creates those indexes?
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=306)** You the developer are definitely in charge.
>
> **[5:09](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=309)** However, Capella is structured to work with your data expertise to create the very best indexes your data can offer.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=318)** Please keep in mind that at Couchbase, indexes are required, but if they help your users get the data faster and more accurately, why wouldn't you use them?
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=329)** So let's see this in action as we return to the Capella UI Query Workbench.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=335)** I'm back in the Workbench, and what I'd like to do is paste in this query first without any additional indexes, only with a primary index.
>
> **[5:45](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=345)** This query is going to call for the named and created attributes of all documents within the airline collection in the inventory scope.
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=355)** I'll click Run to run the query.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=358)** And as you can see, this query has given us 10 documents at the byte size of 245 bytes in 11.7 milliseconds.
>
> **[6:10](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=370)** On the right-hand side here, you can see the recommendations for different indexes.
>
> **[6:16](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=376)** And all I need to do in order to apply this recommendation is click Build Suggested.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=384)** This section allows you to see that that index has been added.
>
> **[6:29](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=389)** It moved from 13 indexes to 14, and now we'll set this query to run again by clicking Run.
>
> **[6:42](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=402)** And just like that, our same amount of information, 10 docks with 245 bytes was returned in three milliseconds rather than 11.7.
>
> **[6:56](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=416)** To go from 11 to three milliseconds might not sound significant, but when thousands and thousands of transactions are running every second, the time savings that results in a more efficient query is highly significant.
>
> **[7:12](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=432)** Within Capella, you can manage indexes by toggling to the Indexes menu, and from here you have the ability to click the Delete icon, the Trashcan icon here to delete the index if you so choose, type in Delete, and you simply delete that index.
>
> **[7:36](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=456)** The list of indexes that's here is part of our sample data.
>
> **[7:40](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=460)** So if you bring over your own data, you'll need to keep in mind that you'll add your own indexes.
>
> **[7:46](https://www.linkedin.com/learning/introduction-to-couchbase/sql-and-sql-plus-plus-and-indexing-in-capella?u=76281980&t=466)** However, on every query that's completed, Couchbase will offer you different build suggestions based on the data present.

> [!info]- Semantic Content
>
> **Env Vars:** sql (21), json (2), distinct (2), upsert (2), n1ql (1)
> **Code Keywords:** delete (4), finally, (3), function (2), extends (1), switch (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** click on (2), dropdown (1), select the (1), switch to (1)
> **Warnings:** keep in mind (4), note that (1)
> **Prerequisites:** you'll need (3)
> **Versions:** 11.7 (2)
> **SQL:** join (1)

#### Using JOINs and Parameters with SQL++/N1QL
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=0)** - [Instructor] Setting JOINs and parameters are two ways to enhance querying in Couchbase.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=6)** JOINs are connections between information in different document sets.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=10)** They can increase efficiency and make querying even more effective and faster.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=17)** The best strategy when writing effective JOINs is to let the end result guide the journey.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=23)** Before completing a JOIN, stop and ask: what information do I want users to see and access?
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=30)** For example, there may be many times when I'd like users to see more information than what is in one document alone.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=39)** Let's look at an example of what I mean.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=42)** These two documents have many points of data, but on the left, an airline code of airline_137 will probably not be familiar to my users.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=54)** So I'll JOIN my right side document with the airline key 137, and this will give users the airline name, as well as other details they might need.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=65)** Because Couchbase is a key-value store and this is a key-value operation, there is no index needed for this JOIN.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=75)** Now let's see what this looks like in the Capella UI.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=80)** From my dashboard page, I'll navigate to Data Tools and then I'm on the Query tab for the query workbench.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=90)** I'll need to remember to select the appropriate bucket and scope from the dropdown menu.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=98)** Then to save time, I will paste my query into the box.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=106)** As you can see here, the JOIN is included in the query language.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=111)** I'm joining the collection called route to the collection called airline.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=117)** I'll click Run and the query will call up all the appropriate information in both documents.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=127)** Then when a user calls this information, they will not only see the airline ID, but the airline's name and other relevant information.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=137)** Here on the right-hand side, you can see the different information that might be helpful and the build suggested opportunities.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=148)** Another way to increase query efficiency is with the named and positional parameters, which can help you ensure common queries can be executed effectively even if the variable values change often.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=162)** When a query comes in like this one, Couchbase parses all statements and prepares an execution plan as you can see here.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=172)** When querying with named or positional parameters, the query plan is prepared once and then the query can be easily executed any number of times thereafter with different values.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=185)** Let's see where to find this in the Capella UI.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=189)** Again, I've returned to my query workbench, and now I'll make sure the correct bucket and scope are selected, and then in order to deal with this named parameter, I will first paste in my query.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=208)** Then I'll need to go to query options and down to named parameters.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=214)** Positional parameters are also here, and the process I'm about to show you works for either.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=221)** Click into the plus sign and where it says name and value, I will key in information listing name, and giving the value of Mile Air as the parameter that may change.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=239)** I will click Save and then I will run this query.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-couchbase/using-joins-and-parameters-with-sql-plus-plus-n1ql?u=76281980&t=247)** Now, regardless of the number of times your parameter changes, your query will not be slowed down.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **SQL:** join (4)
> **Env Vars:** join (4)
> **UI Navigation:** navigate to (1), select the (1), dropdown (1), go to (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)


### 4. Getting Your Couchbase Database to Perform Effectively

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Evaluating database performance
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=0)** - [Instructor] By using the single pane design of the Capella UI, you can see many different metrics for your trial database.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=7)** Let's look at what's here.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=10)** In order to see the metrics, I'm going to click the cluster name or the database name, and then I'm going to click monitoring.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=19)** As this is a trial database, I'm just getting started and we'll be limited in what we can see, but let's look at what's preloaded and what you can add.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=28)** Capella pre-fills metrics for the data service, and I know that because it says data service here.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=36)** I can add metrics for the other services by clicking this dropdown and then scrolling through.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=44)** And as you can see, as the service changes, so too does the name.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=51)** I can also get rid of any one of the metrics by clicking the X in that area.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=59)** And as you can see, Capella will automatically update the screen.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=66)** If I want to add any of the metrics, I can see that my metrics are highlighted, and I'll add back in the current active items by bucket.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=83)** And I just have to note that any newly added metrics will always be at the bottom of the screen.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=91)** You also have the ability to set your monitoring frequency from as little as 30 minutes to as long as 30 days.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=99)** As you can see, the default is set for one hour, but as I change my monitoring, the metrics will update automatically.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=111)** You can also force a refresh of the screen by clicking this icon here, or you could set an automatic refresh for one or two minutes, based on what your needs are.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=125)** And that's a high level overview of monitoring.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=128)** But next, let's go into the settings category to see what else we can find.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=133)** Here, I'll click settings.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=136)** And on the left hand side is a menu that allows you to see many different sections of your database settings, including your configuration, where I can look at my plan, I can look at the buckets that exist in my trial database.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=153)** I can look at the nodes and get their specific host names, copying that if I need to connect to just that node, and I can also see the different services available.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=166)** If I wanted to upgrade to any more of the services, I would need to click this upgrade button and add to my trial cluster, as only four services are allowed on a trial cluster within Capella.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=180)** Also, I have my networking options here, as well as my security options.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=188)** Under general, I can make changes to my database name, so if I wanted to change this to Freedom Development, I could click Save, and now my database has a different name, which may impact my code.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=203)** So make sure that you keep track of that.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=206)** I also have the ability to turn off my database, and this is recommended to save costs only on non-production databases.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=215)** You can turn off a database for up to 30 days, and in order to learn more, click the learn more icon here.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=226)** You also have the ability to disable the playground setting that you may have seen at the top right of your screen, or you can delete your database.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=238)** Finally, on the far right is a summary of our database as it exists today.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=243)** It's AWS, its US location is here, the version, the CIDR, the support tickets open, when it was created, and who it was created by.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-couchbase/evaluating-database-performance-23462799?u=76281980&t=257)** Again, if you wanted to upgrade to the full version of Capella, you would simply click upgrade, and then look at the different options that you have available to you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1), node (1), aws (1)
> **Code Keywords:** let (3), delete (1), finally, (1)
> **Definitions:** is a  (3)
> **Env Vars:** aws (1), cidr (1)
> **UI Navigation:** dropdown (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)

#### Scaling vertically and horizontally
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=0)** - [Narrator] As the needs of your database change, Capella can scale in a matter of minutes, rather than hours or days.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=7)** Please note that all the examples here are in the full access version of Capella and will require purchase beyond the free trial.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=16)** Also note that as you make scaling changes, your credit costs will change and you probably want to check in with your organization owner before you save those changes.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=26)** After your cluster has been up and running for a while, you can click into the cluster details and view the metrics for CPU Utilization by Node, which is a common measurement to judge database performance.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=40)** Let's imagine this CPU usage is too high.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=44)** What can I do?
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=45)** I can scale in three different ways.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=48)** I'll click on "Configuration" to see my options.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=52)** Here I can see that I currently have three nodes, which is the minimum requirement for a production-ready cluster.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=59)** I can increase that number easily by using this dropdown here, and I'll up that to four nodes.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=67)** From here I will click "Update Configuration" and Capella will ask me to confirm my options.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=74)** I'm fine with what's here, so I'm going to click "Confirm" and now Capella has told me that the configuration will be successfully updated and to allow around 15 minutes for the changes to take effect.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=88)** However, it could take less time than that.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=91)** And just like that, my number of nodes has been expanded and my CPU usage will likely go down.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=98)** Another option for scaling is to utilize the Compute feature here.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=103)** As you can see, we currently have four virtual CPUs with 16 gigs of RAM.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=109)** If I use this dropdown menu, I can see a variety of other options.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=114)** And let's just say we'll double everything by changing this to eight virtual CPUs and 32 gigs of RAM.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=122)** Again, if I make this change, my credit costs will be changed as well.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=127)** You may want to check in with your organization before you do that.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=132)** Capella will ask me to update the configuration and then to confirm my choice.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=141)** Once I do that, Capella will tell me that this could take up to 15 minutes.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=145)** But again, it may take less time than that.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=149)** Okay, so in a matter of about 20 minutes, our virtual CPUs have doubled and our RAM capacity has also been doubled.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=157)** Finally, I can also exercise an upscale in storage capacity by clicking up here or down as needed.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=170)** Again, our standard is 50 gigabytes, but you can raise that standard as needed.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=176)** Clicking here, you want to pay attention to the fact that the storage is per node.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=181)** So keep that in mind.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=182)** You can update the configuration by clicking "Update Configuration" again, and confirming.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=189)** And Capella will tell you it takes about 15 minutes.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=191)** Again, that time varies.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=194)** This will also impact your credit amount.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=198)** So again, you may want to reach out to a member of your organization before you make these changes.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=204)** With these three options in the full access version of Capella, I didn't manually add or redistribute in order to scale my cluster.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=213)** I made the selections and allowed Capella to automatically make the needed adjustments, in minutes rather than in hours.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-couchbase/scaling-vertically-and-horizontally?u=76281980&t=221)** All the while my users have had access to my database.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), node (2)
> **Code Keywords:** let (2), require (1), while, (1), finally, (1), raise (1)
> **Env Vars:** cpu (3), ram (3)
> **UI Navigation:** dropdown (2), click on (1)
> **Analogies:** imagine (1), just like (1)
> **Warnings:** note that (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Applying replication
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=0)** - [Instructor] Database security and availability are at the top of any manager's priority list.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=6)** That's why database replication, another feature of Capella, is so helpful.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=11)** Please note that when using this feature you'll be required to purchase the full access version of Capella beyond the free trial.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=18)** Also adding replication may change your credit costs.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=22)** So you probably want to check in with your organization owner before you save these changes.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=26)** What is replication?
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=28)** It's having two copies of a database in two different locations to ensure that if one goes down the other can take its place quickly and without user interruption.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=39)** Let's jump into Capella to see where we can find this feature.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=42)** First, I'm going to look at my clusters that I see here on my single pane dashboard view.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=48)** It's important to note that you must have the original and the replication clusters created prior to getting started with replication.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=56)** Here, you can see I have Freedom Air 1A, and that's listed in the United States in the state of Oregon.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=64)** And then I have my replication cluster as Freedom Air 1B, that will be in the European Union in the country of Ireland.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=72)** So the geographic location of the server will hopefully ensure one cluster outage is not impacted by the other.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=80)** I'm going to click into my Freedom Air 1A cluster, and then I'll select Replications.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=88)** From here, I'll start my replication by clicking Setup Replication.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=93)** I have some options to choose from.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=95)** The first is a one way replication or two way.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=98)** I'm going to leave it as one way for now.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=101)** Then I'm going to choose the clusters that will be replicated.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=105)** Freedom Air 1A is selected because that's a cluster I clicked into.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=109)** I will use the dropdown menu to choose the other cluster.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=112)** And it's important that if you didn't create the cluster in the previous step, you won't see this other cluster in the dropdown.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=120)** From here, I now can select the buckets to work from as well.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=125)** I'm going to choose my source bucket.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=128)** And then it's important that your target bucket has the same labeling as your source bucket in order for the replication to complete.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=137)** I'm going to click Next.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=139)** And from here, the collections have the same requirement.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=143)** Scopes and collections that do not exist on the target cluster with the same names will not be replicated.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=150)** I'll click Next.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=152)** And I could set filters if I'd like to, but for now I'm going to stick with the defaults, and I'll click Next again to go to the settings, and I can make the choices here, but for right now, I'm going to stick with my defaults.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=168)** From here, I will click Setup Replication, and Capella will tell me that this replication is currently taking place.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=176)** It's important to note that Capella will ensure operations conducted during the time of replication are completed.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=182)** As soon as the replica database is available the operations that took place during the setup time will complete.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=190)** And just like that, Capella has let me know that the replication has been added.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=195)** My database is replicated and available in case a node or cluster fails.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-couchbase/applying-replication?u=76281980&t=200)** Capella has automatically made all the adjustments to ensure my two databases are synchronized.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (2), select the (1), go to (1)
> **Prerequisites:** setup (3), getting started (1)
> **CLI Commands:** find (1), make (1), node (1)
> **Code Keywords:** let (2), from. (1)
> **Warnings:** note that (3)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=0)** - [Narrator] I want to say thanks for joining me on this course, and while this may be the end of your overview, I hope it's just the beginning of your journey with Couchbase and Couchbase Capella.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=13)** As is the beauty of LinkedIn Learning, you can go back and review any section or information that I've shared.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=20)** And because our mission at Couchbase is always to provide a world-class NoSQL database, we are constantly evolving and there will always be opportunities to learn more about Couchbase's latest and greatest developments and upgrades.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=36)** Please consider bookmarking [couchbase.com](https://couchbase.com) as you see here for the latest news, updates, trainings, and other information.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=47)** Also, feel free to learn more about Couchbase by checking out the Couchbase Community Hub at community.[couchbase.com](https://couchbase.com), or take a look at our Discord page, where you can join all of our couch base developers and enthusiasts in Couchbase events, hackathons, live streaming, and more.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=69)** Finally, please feel free to connect with me or any Couchbase employees on LinkedIn.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=75)** Please consider me as a Couchbase resource.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=79)** I'd be happy to answer any questions you have or point you in the right direction to find the answers you need.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=86)** At Couchbase, we're always looking for ways to improve our world and businesses with efficient, performant, and flexible applications.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-couchbase/next-steps-23462801?u=76281980&t=95)** And as you continue your journey, I wish you solid coding.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), continue (1)
> **URLs:** [couchbase.com](https://couchbase.com) (2)
> **CLI Commands:** find (1)
> **Tools:** discord (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Michelle Burns]]

## Skills Covered

- Database Development
- Couchbase

## Path Context

### In [[Develop Your NoSQL Skills]]
← [[Redis Essential Training]] | **7 of 10** | [[Elasticsearch Essential Training (2023)]] →

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python- Practical Database Examples]] — Database Development
- [[Vector Databases in Practice- Deep Dive]] — Database Development
- [[Database Foundations- Application Development]] — Database Development
- [[Databases for Node.js Developers]] — Database Development
- [[Programming Foundations Databases]] — Database Development

---

[↑ Back to top](#)