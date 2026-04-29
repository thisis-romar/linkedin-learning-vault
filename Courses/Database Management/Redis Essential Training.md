---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: redis-essential-training-15012713
url: "https://www.linkedin.com/learning/redis-essential-training-15012713"
duration_minutes: 112
duration: 1h 52m
level: Beginner
updated: 7/31/2024
learners: 2833
skills:
  - Redis
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGqjOoQsarMbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1669829521019?e=2147483647&amp;v=beta&amp;t=49EhSz43yqEEFohPdqwuzvIuXC7aG4Fsaf_6QIUUreY"
linkedin_topic: Database Management
learning_paths:
  - '[[Develop Your NoSQL Skills]]'
prev_courses:
  - '[[Graph Databases- Neo4j for Complex Data Relationships]]'
next_courses:
  - '[[Introduction to Couchbase]]'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":6,"total":10,"prev":"Graph Databases- Neo4j for Complex Data Relationships","next":"Introduction to Couchbase"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/redis
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Redis%20Essential%20Training.md)

![Redis Essential Training](https://media.licdn.com/dms/image/v2/C4E0DAQGqjOoQsarMbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1669829521019?e=2147483647&amp;v=beta&amp;t=49EhSz43yqEEFohPdqwuzvIuXC7aG4Fsaf_6QIUUreY)

# Redis Essential Training

> If you’re interested in learning more about how to use Redis, you couldn’t have picked a more appropriate time. Knowing how to use the open-source, in-memory database is quickly becoming a highly sought-after skill. In this course, instructor Fernando Doglio covers the core concepts and basic functionality of Redis for data management, data processing, and more.Learn the fundamentals to get up and

> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713) | 1h 52m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - Understanding Redis
  - Installing Redis
  - Overview of the terminal CLI
  - Understanding Redis docs
- [**1. Basics of Redis**](#1-basics-of-redis) (5 videos)
  - What is Redis?
  - Data types
  - Your first command: SET
  - Testing GET
  - Playing around with strings
- [**2. Representing Complex Data Structures: Hashes**](#2-representing-complex-data-structures-hashes) (3 videos)
  - What are hashes?
  - Writing and reading from hashes
  - Exploring hashes
- [**3. Lists and Sets in Redis**](#3-lists-and-sets-in-redis) (11 videos)
  - Introduction to lists
  - Understanding the pop and push mechanics
  - Practical example: Building a queuing system with lists
  - Adding people to the queue
  - Getting people out of the queue
  - Checking who's there
  - Putting someone in the middle
  - Checking who's the last one in the queue
  - Analyzing the solution: Problems with repeated members
  - Sets compared to lists
  - Running a queuing example using sets
- [**4. Sorted Sets**](#4-sorted-sets) (2 videos)
  - Explaining what a sorted set is
  - Leader board example using a sorted set
- [**5. Key Naming Strategies**](#5-key-naming-strategies) (3 videos)
  - Comparing Redis to relational databases
  - Relating keys to each other
  - Representing multi-key models
- [**6. Beyond Data Storage**](#6-beyond-data-storage) (5 videos)
  - What else can you do with Redis?
  - Exploring Pub/Sub
  - Exploring streams: Adding data
  - Exploring streams: Reading data
  - Example: Real-time message bus using Pub/Sub
- [**7. Watching Keys for Updates**](#7-watching-keys-for-updates) (4 videos)
  - Introduction to key-space notifications
  - Practical example: Building a session timeout feature
  - Resolution
  - Explanation overview
- [**8. An introduction to Redis at Scale**](#8-an-introduction-to-redis-at-scale) (3 videos)
  - What's missing for a production-ready architecture?
  - An introduction to Redis Cluster
  - An introduction to Redis Sentinel
- [**Conclusion**](#conclusion) (1 videos)
  - How to learn more about Redis

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Understanding Redis
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=0)** - [Instructor] Redis is my favorite database, and I'm hoping after this course, it'll be yours too.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=5)** Mainly because of its flexibility, from storing data to creating message queues, you can set up an entire architecture around Redis.
>
> **[0:13](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=13)** There is really no other database like it.
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=15)** If you think about NoSQL databases, there is none out there that matches the uniqueness of Redis.
>
> **[0:21](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=21)** Also, it's a huge jump from the SQL world where most developers live.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=25)** You'll start thinking in NoSQL terms and solving problems without the constraints of a SQL database.
>
> **[0:30](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=30)** In this course, I'll focus exclusively on Redis, and I'll teach you the core concepts and components of this database.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=37)** So you can understand its potential through hands-on examples without worrying about the language you're using to interact with it.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=43)** As long as you're willing to learn about Redis, you're already set.
>
> **[0:47](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=47)** Hello, I'm Fernando, former software architect turned dev advocate.
>
> **[0:50](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=50)** And I've been working and writing about Redis for more than 10 years, and I can't wait to tell you everything I know.
>
> **[0:56](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=56)** So let's get going.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Code Keywords:** let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Installing Redis
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=0)** - [Instructor] The first thing that you need to do is install Redis in your computer.
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=3)** So let's look at that.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=5)** So to install it on your system, go to [Redis.IO](https://Redis.IO) and follow the steps found on the feature documentation.
>
> **[0:11](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=11)** The easiest way is to click on the get started button and find the details related to your OS and with a few steps depending on whether you're using Linux, macOS or Windows Redis will be completely installed and functional in your system.
>
> **[0:27](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=27)** Now remember that you'll be installing two main applications.
>
> **[0:30](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=30)** On one side, you'll install the server, which for all intents and purposes will be quote unquote Redis.
>
> **[0:36](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=36)** All the logic from the commands will see in this course will run on the ready server.
>
> **[0:40](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=40)** On the other side, you install the Redis client.
>
> **[0:44](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=44)** This is an application that is meant to let you interface with the server and does not really contain any logic.
>
> **[0:49](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=49)** It is just meant as a gate into Redis.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=53)** You'll use this program to interface with the server during the course, and then you'll use a specific library for the primary language of your choice when building an actual application using Redis.
>
> **[1:03](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=63)** When that happens, the client will be that library couple with your own code, and you really won't need this command line interface anymore.
>
> **[1:11](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=71)** Once installed to start the server you'll run the command Redis-server.
>
> **[1:18](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=78)** This command will only run once from a dedicated terminal window.
>
> **[1:23](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=83)** And to start a client you'll use the command Redis-cli and that command can be run from multiple different terminals and you can have as many clients running at the same time as you want.
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=94)** In fact, we'll see examples of that in future videos.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (2)
> **Prerequisites:** install (4)
> **CLI Commands:** find (1), redis-cli (1)
> **Tools:** command line (1), terminal (1)
> **Code Identifiers:** macos (1)
> **URLs:** [redis.io](https://redis.io) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)

#### Overview of the terminal CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=0)** - [Instructor] Let's look at the CLI tool in a bit more detail now.
>
> **[0:04](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=4)** This tool or command line interface is going to be our "gate" into Redis.
>
> **[0:09](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=9)** We'll test all features and commands on this course through it.
>
> **[0:14](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=14)** Before using it, remember that you need to start the Redis server.
>
> **[0:18](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=18)** To use the CLI tool, simply run redis-cli on a terminal window.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=24)** And you can have as many instances of this program running at the same time as you want as long as they're in different terminal windows.
>
> **[0:33](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=33)** You can only enter a single command per line when using the CLI tool.
>
> **[0:38](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=38)** And as you'll see in future videos, while you write, the client will give you autocomplete hint to help you with the syntax of the command you're trying to use.
>
> **[0:48](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=48)** As you can see on the screen right now.

> [!info]- Semantic Content
>
> **Env Vars:** cli (3)
> **Tools:** terminal (2), command line (1)
> **Code Keywords:** let (1), interface (1)
> **CLI Commands:** redis-cli (1)
> **Speakers:** - [instructor] (1)

#### Understanding Redis docs
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=0)** - [Lecturer] The final tool you'll use in this course, and afterwards when you're building your application with Redis is going to be the official documentation.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=8)** While you can find information about Redis in many places the official looks are filled with details about the commands and the way each one works.
>
> **[0:16](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=16)** So make sure you familiarize yourself with it.
>
> **[0:19](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=19)** I will recommend study by searching the commands you'll use during the course by going to Redis.iOS/commands and simply enter the command that you want to see and click on it.
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=32)** Each command page will have a similar section.
>
> **[0:35](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=35)** The syntax of the command counts first then the first version when it was available.
>
> **[0:41](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=41)** This is important because some commands might only be available on the latest version and you might not be using that for some reason.
>
> **[0:50](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=50)** The time complexity, especially useful to understand how taxing this command could be if you running on a server with lots of data.
>
> **[0:59](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=59)** The ACL categories coming (indistinct) right now they're related to permissions but as an introductory course, we'll use the default ones which let you use everything.
>
> **[1:09](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=69)** A description of the command to tell you exactly what it does.
>
> **[1:13](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=73)** The return value, which is also very important to understand if you're using a command that gets data.
>
> **[1:19](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=79)** A list of related commands, which can come in handy if you don't know where to go next.
>
> **[1:24](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=84)** And finally, a live client, which lets you test out the command on a real ready server.
>
> **[1:30](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=90)** This is a great feature because it lets you try out what you just read without having to install anything on your system.
>
> **[1:37](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=97)** And if you need more details about how Redis works internally all the different data types, we'll see.
>
> **[1:43](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=103)** You can also visit [Redis.io/docs](https://Redis.io/docs) and go from there.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=108)** Overall, the documentation site for Redis is very complete so I highly recommend you start there whenever you're looking for more details.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (1), finally, (1)
> **Code Identifiers:** ios (1)
> **URLs:** [redis.io](https://redis.io) (1)
> **Env Vars:** acl (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)


### 1. Basics of Redis

> [↑ Back to Table of Contents](#table-of-contents)

#### What is Redis?
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=0)** - [Instructor] Redis is known as a key-value, in-memory, NoSQL database.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=5)** And while that might not tell you a lot, it's quite an accurate description.
>
> **[0:10](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=10)** Redis, at its most basic, allows you to store a hashmap, if you will, in-memory, without the need of a database schema.
>
> **[0:17](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=17)** There are no complex data models and you can only save a map of keys with values, which are usually strings.
>
> **[0:26](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=26)** And it all happens in memory.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=28)** There are no hard drives involved usually, and there are no, or close to no, delays in data access.
>
> **[0:36](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=36)** It also means that writing and reading from this databases is really fast, because it all happens in memory.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=43)** There is a big delay accessing data from hard drives or any other storage medium.
>
> **[0:48](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=48)** This is another microsecond type of access that we're talking about.
>
> **[0:51](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=51)** Speed is one of the main reasons why you, and really everyone else, will want to use Redis, the amazing performance that it brings.
>
> **[1:01](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=61)** If you're coming from the SQL world, like MySQL, PostgreDB, or similar solutions, they have nothing against Redis when it comes to talking about I/O performance.
>
> **[1:11](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=71)** Of course, because Redis is a NoSQL database, one of the main things missing is the schema that characterizes SQL solutions.
>
> **[1:20](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=80)** That means coming up with complex data modules is actually quite hard and impractical.
>
> **[1:25](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=85)** So you use Redis to store information that needs to be quickly interacted with, either read or written, and that is of simple nature, like configuration options, counters, and the like.
>
> **[1:39](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=99)** Now, because this is a in-memory store, there's always the issue of losing information.
>
> **[1:44](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=104)** If the server crashes, memory data is not saved, thus the data is lost.
>
> **[1:50](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=110)** That means that these pieces of information need to be ephemeral in the sense that if they get deleted, you can easily recreate them, or at least, if you do lose them, you don't lose too much value from it.
>
> **[2:03](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=123)** There are options at your disposal to persist that information and make sure that Redis is a reliable and trusted data store.
>
> **[2:10](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=130)** However, Redis is very rarely used as a main database.
>
> **[2:14](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=134)** Instead, it's used as an auxiliary system where you store simple, quickly accessible information to improve the performance of your overall system.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), means that (2), known as (1)
> **CLI Commands:** mysql (1), make (1)
> **Env Vars:** sql (2)
> **Code Keywords:** else, (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### Data types
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=0)** - [Instructor] While I did mention that most of the values map to a key are strings, in practice that's not entirely true.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=7)** We do have some other data structures that we can use to get the most out of our in memory database.
>
> **[0:13](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=13)** So let's take a quick look at them.
>
> **[0:16](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=16)** The data types that are currently supported are strings, lists, sets, hashes, sorted sets, bitmaps, hyper log logs, which really if you ask me they have a very strange name, strings and geospatial indexes.
>
> **[0:31](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=31)** So let's start with the first one.
>
> **[0:33](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=33)** Strings.
>
> **[0:34](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=34)** They are the most basic type of value.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=37)** You can store up to 512 megabytes of string data inside a single key.
>
> **[0:41](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=41)** So that's quite a lot of information.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=43)** And it's important to know also that you don't have numeric values in Redis.
>
> **[0:48](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=48)** So if you're looking to store a counter, for example, Redis has some interesting in functions to support it but they're always going to be strings.
>
> **[0:57](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=57)** And don't worry about that.
>
> **[0:57](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=57)** We'll see how that works in future videos.
>
> **[1:02](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=62)** Then we have lists.
>
> **[1:04](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=64)** Lists are just that, a collection of things, essentially a collection of strings which works as a doubly linked list.
>
> **[1:10](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=70)** Meaning you can push values into them both from the end and the head.
>
> **[1:16](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=76)** Lists are great so collections.
>
> **[1:18](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=78)** You can store up to four billion elements inside it.
>
> **[1:21](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=81)** Yeah that's actually a B.
>
> **[1:24](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=84)** And even large lists have fantastic performance.
>
> **[1:29](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=89)** Next we have sets.
>
> **[1:30](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=90)** Sets are essentially lists that don't allow for repeated values inside them.
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=94)** They're fantastic tools to use when you have to keep a list of things and those things, those values, can eventually repeat in your logic.
>
> **[1:43](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=103)** You don't need to check the list if the values are already there.
>
> **[1:46](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=106)** You can just use a set instead and forget about checking it for yourself.
>
> **[1:52](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=112)** Then we have sorted sets.
>
> **[1:55](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=115)** As before, the sorted sets builds on top of the previous one and it's a set with everything that that entails and it's also automatically sorted by a specific value.
>
> **[2:05](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=125)** You can use this stereotype to keep things like a leaderboard for games or a list of priorities.
>
> **[2:10](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=130)** The sorting is handled by an efficient algorithm.
>
> **[2:13](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=133)** So it's a great tool to use when the order of the elements it's important to your business logic.
>
> **[2:20](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=140)** And then there are hashes.
>
> **[2:23](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=143)** Hashes are just like Redis essentially but at a smaller scale.
>
> **[2:28](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=148)** You can keep a map of key value pairs associated to a single key.
>
> **[2:32](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=152)** This is what you use usually to represent some more complex data like the information of a user.
>
> **[2:38](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=158)** We'll see more examples in future videos.
>
> **[2:42](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=162)** Streams.
>
> **[2:43](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=163)** They allow you to define, well, streams of data that your database can distribute to different clients.
>
> **[2:50](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=170)** This is quite a novel feature for at traditional database because usually data is requested by clients.
>
> **[2:57](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=177)** Not the other way around.
>
> **[2:58](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=178)** Through the use of streams you can have your database send information to your clients once the information is available.
>
> **[3:04](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=184)** I'll go into more details about streams in future videos so don't worry.
>
> **[3:08](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=188)** They're very cool.
>
> **[3:11](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=191)** So we've seen and we're going to be seeing in detail streams, list sets, hashes, sorted sets and streams.
>
> **[3:19](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=199)** The remaining datatypes, bitmaps, hyper log logs, and geospatial indexes are outside of the scope of this course because they have very particular use cases.
>
> **[3:29](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=209)** And that's it for data types.
>
> **[3:32](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=212)** Once you start seeing examples for each one, you'll see one kind of the value that each one brings to a table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** for example (1), just like (1)
> **Speakers:** - [instructor] (1)

#### Your first command: SET
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=0)** - [Instructor] Let's look now at the SET Command.
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=3)** The SET Command is probably the one that you use the most couple with tech which we'll look at next.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=8)** The SET Command allows you to say a value in Redis.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=12)** Here's the syntax.
>
> **[0:14](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=14)** Set the key name, a value, and a bunch of other things that we're going to talk about later.
>
> **[0:20](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=20)** While there are other aspects to a set command, the most important ones here are the key and the value.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=25)** The key we like as a container for the value.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=28)** You can think of it as a variable new code.
>
> **[0:31](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=31)** They hold value so many times.
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=32)** In our case the type will always be string.
>
> **[0:34](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=34)** If you want to save all the type of values like we've seen before you'll use all the specific commands that we'll see in future videos.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=43)** An important thing to know about the SET Command is that it's atomic.
>
> **[0:46](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=46)** That means that the command will always either succeed or fail.
>
> **[0:50](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=50)** There is no chance for it to partially save your data.
>
> **[0:55](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=55)** Much like when you're transferring money there is no chance for only part of that money to get wired.
>
> **[1:01](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=61)** The SET Command will never save only part of your data.
>
> **[1:04](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=64)** If you get a successful response from Redis then that data, its in Redis.
>
> **[1:10](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=70)** Let's now save some data in Redis.
>
> **[1:13](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=73)** So you'll use the set command, couple with the key name.
>
> **[1:17](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=77)** In my case, I'm going to use name and then a value, in my case, I'm going to use Fernando.
>
> **[1:22](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=82)** You see the okay value there.
>
> **[1:24](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=84)** I can also do city country and do Madrid, Spain.
>
> **[1:31](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=91)** Notice how I used the quotes on the second command only.
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=94)** That is because if you're saving a single word, without spaces like my name, then you don't need 12 quotes.
>
> **[1:41](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=101)** But if you have blank spaces in between, then you will.
>
> **[1:46](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=106)** Another minor of detail about the SET Command is that if you're trying to save data inside a key that doesn't exist, by default you will create it for the first time.
>
> **[1:57](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=117)** You don't have to check whether the key is there before using it for the first time or not, like which is the, and the example.
>
> **[2:04](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=124)** So the SET Command lets you save data into Redis without having to worry where you save it, and you can trust the results you get without checking if the data actually got saved or not.
>
> **[2:16](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=136)** As long as you get a confirmation, then the data was saved.

> [!info]- Semantic Content
>
> **Env Vars:** set (7)
> **Code Keywords:** let (2), case, (2)
> **Definitions:** means that (1)
> **Analogies:** think of it as (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Testing GET
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=0)** - [Narrator] The get command is the opposite to set.
>
> **[0:02](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=2)** When set allowed you to save data, get will let you, you know, get it.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=8)** Following the variable analogy we used, calling get on a key is equivalent of using the value inside the variable.
>
> **[0:17](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=17)** So the syntax of the gate command is very simple.
>
> **[0:19](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=19)** You use the get keyword and then the key name.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=24)** Now, what can you get as a response of the get command?
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=28)** You can either get a string inside the key as a result, or nil representing that the key is empty, or that it just doesn't exist.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=37)** An interesting point about key names is that, just like with the values with blank spaces require quotes, as seen in the previous video, if you want to use key names that contain blank spaces, you can also do that, but you also must use double quotes.
>
> **[0:55](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=55)** Let's now take a look at how the get command works.
>
> **[1:00](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=60)** Now we probably saved my name on the key name, so I can do get name and I get the result I want.
>
> **[1:07](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=67)** I can also do get my first name, which is a very valid key name, and I get nil because I've never set that key before.
>
> **[1:16](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=76)** So if I did set my first name to Fernando, works, and if I do the get as before, now I get the value.
>
> **[1:29](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=89)** So as a summary, the get command is one of the simplest commands you'll use.
>
> **[1:33](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=93)** It will return the string inside a key, if it exists, or it will return nil otherwise.
>
> **[1:39](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=99)** That's all there is to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [narrator] (1)

#### Playing around with strings
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=0)** - [Speaker] While SET and GET are very fine tools, they're also very basic commands that do not provide you with much control over the strings they deal with.
>
> **[0:10](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=10)** Luckily, Redis provides other commands to handle strings; which is the most basic data types supported by this database, and the one that you're going to be using the most.
>
> **[0:20](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=20)** So remember, Redis doesn't deal with numbers.
>
> **[0:22](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=22)** However, you can treat your strengths as numbers with specific functions, such as the INCR, or the DECR functions that will increment or decrement a value by one.
>
> **[0:35](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=35)** So, let's pretend I'm trying to save a number inside a counter key.
>
> **[0:40](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=40)** I can initialize it with the SET command and the zero value.
>
> **[0:45](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=45)** So if I do get counter, I do get zero string even though I enter a number.
>
> **[0:51](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=51)** Now, if I do INCR counter I don't have to specify anything else.
>
> **[0:56](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=56)** The command will return the current value of counter and it will be '1' because I incremented the value by one.
>
> **[1:05](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=65)** I can do it again, and it will be '2', and I can use the DECR command and it will be '1' again.
>
> **[1:13](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=73)** Now, there are variations of these two commands, and these are the INCRBY and the DECRBY.
>
> **[1:20](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=80)** Which will let me specify the increment of the decrement for this change.
>
> **[1:24](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=84)** So, I can say '4' and now my count is 5, and I can say DECRBY counter '2', and now the value of counter is three.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=95)** It is returned as an integer, but remember that if I do get counter, I do get a string to the value three.
>
> **[1:45](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=105)** Now as you can see, these commands are very intuitive.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=108)** You could have done the same with Get and Set, but that would have required you to first send one command to get the value.
>
> **[1:54](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=114)** Then, add some logic in your code to increase it, or decrease it, however you want, and then send one more command to set the correct value on the key.
>
> **[2:02](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=122)** Keep in mind these commands will only work with basic string keys, as long as these strings can be converted into numbers.
>
> **[2:09](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=129)** Otherwise, they will return an error.
>
> **[2:11](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=131)** If I try to use the INCR command with the key that contains the string 'Fernando', it will fail.
>
> **[2:18](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=138)** Essentially, because it would not know how to turn my name into a number.
>
> **[2:23](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=143)** Now, what if you need to know the length of a string inside a key?
>
> **[2:27](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=147)** You have the STRLEN command, and it's very easy and simple to use.
>
> **[2:32](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=152)** You simply use the STRLEN keyboard with a key name, and it will return the number of characters inside the string.
>
> **[2:41](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=161)** And what if you want to append two strings together inside a key?
>
> **[2:47](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=167)** You have the APPEND command.
>
> **[2:49](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=169)** Also, very intuitive and common in other languages.
>
> **[2:53](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=173)** The syntax as well is very simple.
>
> **[2:55](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=175)** You do the APPEND keyboard, the key you want to effect.
>
> **[2:58](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=178)** And then as a gas parameter you add the string that you want to append to it.
>
> **[3:03](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=183)** As you can see in the example, the my name key is the one we're always dealing with, and is the one that gets affected by the APPEND command at the end.
>
> **[3:13](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=193)** Now, let's go back to Redis and see what else we can do with these commands.
>
> **[3:20](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=200)** Now you could take the APPEND command and the STRLEN command, and create an interesting time series key with fixed length values.
>
> **[3:27](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=207)** Let me explain what I mean.
>
> **[3:30](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=210)** Now, imagine you have four digit numbers being received every second; either by telemetry or something else.
>
> **[3:37](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=217)** We could create a key using the unique stamp time, like this.
>
> **[3:41](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=221)** So we could say APPEND series, and we can use the current unique time stamp; which we know is a number similar to this.
>
> **[3:53](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=233)** And then let's say we add a four digit number here, and then we do it again here, and then one more time here, and finally something like here.
>
> **[4:08](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=248)** Now, the point of this is imagining that these four numbers came at the exact same time, concurrently, from different sources.
>
> **[4:19](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=259)** Now, you could calculate how many values, for instance, you have with the STRLEN command at one given point series.
>
> **[4:29](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=269)** And then just using this command.
>
> **[4:33](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=273)** Now you have 16, but if you divide it by the fixed length of your numbers, which you already know is four, and you know you have four numbers, four values inside the series.
>
> **[4:45](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=285)** Obviously, if you do a 'Get' for the key you get a full string.
>
> **[4:50](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=290)** But, you can play around with these values in this sense to extend the functionality of a very simple string key that we saw before.
>
> **[5:01](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=301)** Something else you could have done is get one or more of the values by using the GETRANGE command, which allows you to get a portion of a string using a zero based index.
>
> **[5:14](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=314)** So, let me also show you how that would work.
>
> **[5:18](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=318)** For instance, if we wanted to get the first value we know it has a length of four, and we know it's a zero-based index.
>
> **[5:26](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=326)** We can do a 'Get' range command and specify the key with the timestamp that we were using so far.
>
> **[5:36](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=336)** And say the start is 'zero' because we know it's a zero-based index that we're using.
>
> **[5:41](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=341)** And then three, because these are the four first characters of our string.
>
> **[5:46](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=346)** And we'll get 0024, which is the first value that we inserted here as well.
>
> **[5:53](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=353)** I encourage you to review the Redis documentation for these commands because you'll see more use cases for them, and you'll find out more ways to deal with strings as well.
>
> **[6:02](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=362)** There are more functions in the documentation of Redis that the ones we've seen so far.
>
> **[6:08](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=368)** Now, for the basics there are three things that you need to remember.
>
> **[6:12](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=372)** You can increment and decrement values of a specific key as if they were integers with the INCR and the DECR command and their variations, the INCRBY and the DECRBY.
>
> **[6:24](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=384)** You can also calculate the length of a string using the STRLEN command.
>
> **[6:29](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=389)** And finally, you can append two strings together with the APPEND command.
>
> **[6:33](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=393)** Again, check out the documentation.
>
> **[6:36](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=396)** There are a lot more things that you can do with strings.

> [!info]- Semantic Content
>
> **Env Vars:** append (6), strlen (5), incr (4), decr (3), decrby (3)
> **Code Keywords:** let (6), else. (2), this. (2), finally, (1)
> **Analogies:** for instance (2), such as (1), imagine (1), similar to (1)
> **Documentation:** the documentation (2)
> **CLI Commands:** find (1)
> **API Endpoints:** get  (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)


### 2. Representing Complex Data Structures: Hashes

> [↑ Back to Table of Contents](#table-of-contents)

#### What are hashes?
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=0)** - [Narrator] A HashMap is a very common data structure in software development and in Redis the same concept applies.
>
> **[0:06](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=6)** We're talking about a map where each key maps to a single value.
>
> **[0:10](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=10)** If you think about it, Redis is a big HashMap in memory and we're also given the ability to use a smaller version of it to control what data gets saved within the logical structure of a single entity.
>
> **[0:23](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=23)** In other words, you can store multiple properties inside the same map, which makes it the best data type to represent complex structures, commonly known as objects.
>
> **[0:34](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=34)** Essentially, if you're wondering how to save a user or a shopping cart or any entity that have more than a single property, then HashMaps, they are the answer to it.
>
> **[0:47](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=47)** Keep in mind that Redis has optimized HashMaps to the point where they can store up to four billion properties inside a single map.
>
> **[0:56](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=56)** This is not to say you should use them like that but that you might also think about them for other use cases that representing your logged in user or your active shopping cart.
>
> **[1:08](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=68)** HashMaps can deal with anything really.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), in other words (1), known as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Writing and reading from hashes
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=0)** - Interacting with hash maps is almost as easy as you need with plain keys.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=5)** But instead of going with GET and SET I'm going to go with HGET and HSET.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=12)** Imagine we're trying to get the information from a logged user in memory for easy access.
>
> **[0:18](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=18)** We don't mind losing this version of the data because it's really stored somewhere else and we can quickly restore it.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=25)** So it's a perfect use case.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=29)** What data do we need to keep in memory then?
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=32)** We're going to need the user ID so we can quickly get the right data from memory.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=37)** We're going to need the user's name.
>
> **[0:39](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=39)** We're going to need the user's avatar URL and the user's role.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=43)** That should be more than enough.
>
> **[0:46](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=46)** All right, so we can save this data using a hash map like this, just the HSET command.
>
> **[0:51](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=51)** And then the hash maps key in my case will be logged user 123 and 123 being my user id.
>
> **[1:00](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=60)** Could be anything here really.
>
> **[1:02](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=62)** And then I'll start adding the attributes and the values inside them.
>
> **[1:08](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=68)** My name, my avatar URL, and finally my role.
>
> **[1:17](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=77)** And that's it. As you can see, the data is saved within the hash map.
>
> **[1:22](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=82)** It is definitely not a pre-format to save the data but it's all stored within the same key: logged user column 123.
>
> **[1:32](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=92)** So now pay special attention to the key.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=95)** If you're coming from the relation of work, you would've used the user ID as a primary key inside the entity itself.
>
> **[1:41](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=101)** You'd saved that data inside the entity but we're not in a relation of work and we don't have the concept of a table.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=108)** However, when starting the data that way we can access it quickly because we know that our locked in users will be storing keys starting with locked user column and using their ID, We can read the data like this.
>
> **[2:02](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=122)** We can use the HGET command, the logged user, colon, ID.
>
> **[2:10](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=130)** And we can ask for the name.
>
> **[2:13](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=133)** And we get Fernando, my name.
>
> **[2:17](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=137)** Right! and if we stick to the relation of work comparison that will be the equivalent of doing the SELECT name FROM the table logged users, where the ID is my user ID which in this case is 123.
>
> **[2:31](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=151)** Keep this trick in mind because we'll be using it throughout the course and we'll go into more details in future video, So don't worry about it.
>
> **[2:40](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=160)** So what happens if you want to read more than one key, from the hash map?
>
> **[2:43](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=163)** Because we just use the HGET command, but it only allows you to get a single property of the hash map.
>
> **[2:49](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=169)** Instead, we're going to be using the HMGET command which will allow you to get as many keys as you want using the syntax shown there using the HMGET keyword, the key name for the hash map and then specifying the names of the properties that you want to extract.
>
> **[3:08](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=188)** I'm going to show you with a simple example.
>
> **[3:12](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=192)** Now, let's say we want to get the name and the avatar URL, we can do a HMGET, specify the same key and now I ask for the name and the avatar URL and you see here that I can get it easily.
>
> **[3:29](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=209)** Hash maps allow you to save some pretty interesting structure.
>
> **[3:33](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=213)** So let's take a look at a more complex use case.

> [!info]- Semantic Content
>
> **Env Vars:** url (4), hget (3), hmget (3), hset (2), set (1)
> **Code Keywords:** case. (2), let (2), this, (1), this. (1)
> **API Endpoints:** get  (1)
> **SQL:** select (1)
> **Analogies:** imagine (1)
> **Speakers:** - interacting (1)

#### Exploring hashes
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=0)** - [Instructor] Let's now play with another practical use case.
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=3)** Let's say we're storing the current shopping cart of our users inside Redis.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=7)** This is a great use case because we're dealing with data that is ephemeral.
>
> **[0:11](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=11)** We might lose it any moment and we wouldn't really mind that much.
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=15)** I mean, our users would, but it wouldn't be the end of the world.
>
> **[0:18](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=18)** It's something that needs to be accessed fast and potentially updated often.
>
> **[0:23](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=23)** So what data do we need to keep in memory?
>
> **[0:27](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=27)** We're going to need the user ID, obviously, so we can quickly read the right cart data, at least the products.
>
> **[0:35](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=35)** And for each product, we might want to know the ID of the product, the name, so we don't have to go query from the database every time, each price for the same reason and the amount we want of each.
>
> **[0:49](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=49)** Now, the description says that our products are a list, but we can't really store a list inside a hashmap.
>
> **[0:56](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=56)** Redis won't let us do that.
>
> **[0:58](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=58)** So what do we do?
>
> **[0:59](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=59)** Remember the trick about the key name and the ID I told you about before, well check this out.
>
> **[1:07](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=67)** I'm going to use the HSET command to create a new cart and add data into it.
>
> **[1:14](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=74)** I'm going to name it cart colon 123.
>
> **[1:16](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=76)** Just look at the naming conventions I'm going to use and we'll review them later.
>
> **[1:22](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=82)** Prod one, name, oranges.
>
> **[1:29](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=89)** Prod one, price, 23.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=95)** Prod one, amount, just one.
>
> **[1:40](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=100)** Then prod two, name, apples.
>
> **[1:46](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=106)** Prod two, price, three 40.
>
> **[1:51](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=111)** And prod two, amount, four.
>
> **[1:56](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=116)** That's it.
>
> **[1:57](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=117)** We created a hashmap and we created the shopping cart.
>
> **[2:04](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=124)** Now again, I'm putting here one orange and four apples into our cart.
>
> **[2:10](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=130)** And I've represented complex data structures, meaning our product, through the key plus ID trick.
>
> **[2:17](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=137)** In fact, I here, I went a little bit farther and I also added the use of key plus ID plus property.
>
> **[2:27](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=147)** See how I use the, I added the amount, the price, and the name related to a specific ID inside the hashmap.
>
> **[2:37](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=157)** So what can we do with this?
>
> **[2:40](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=160)** Let me show you.
>
> **[2:42](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=162)** Now, let's say that we want to add three more oranges to the cart.
>
> **[2:48](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=168)** How do we do that?
>
> **[2:49](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=169)** So we have the HINCRBY command and we can specify the cart, specifically, our cart, and then say, product one amount three.
>
> **[3:06](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=186)** And we didn't update of the key amount inside the cart, we increased it.
>
> **[3:13](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=193)** So actually, yeah, we did update it, but not to three but increased by three.
>
> **[3:19](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=199)** So we actually have four oranges now in our cart.
>
> **[3:24](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=204)** What if we want to get a list of all products in the cart?
>
> **[3:28](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=208)** Sure, we can do that with the HGETALL command and specifying the cart again.
>
> **[3:35](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=215)** And here we go.
>
> **[3:36](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=216)** We have oranges and apples and we have all the properties for each one.
>
> **[3:42](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=222)** Finally, do you want to know how many products you have inside the cart?
>
> **[3:47](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=227)** You can use the HLEN and the cart name key.
>
> **[3:50](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=230)** We have six now.
>
> **[3:54](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=234)** Divide the number by the number of fields that you know you have for each product.
>
> **[3:58](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=238)** In our case, that will be three fields.
>
> **[4:01](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=241)** So we get as a result two, that is two types of products.
>
> **[4:06](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=246)** And if you add up the product amount properties you know how many in total you have.
>
> **[4:14](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=254)** There is a lot you can do with hashes.
>
> **[4:16](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=256)** So using these commands and using these type of data structure.
>
> **[4:21](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=261)** Right, so to close the topic on hashes, remember hashmaps let you represent complex objects inside Redis, not just key names.
>
> **[4:31](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=271)** Very simple strings.
>
> **[4:33](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=273)** We actually, here, represented objects that have three properties of different types.
>
> **[4:40](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=280)** You can do a lot with a key plus ID and a key plus ID plus property trick inside a hashmap.
>
> **[4:45](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=285)** And we're going to be seeing more of that in the future.
>
> **[4:49](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=289)** And finally, remember that the HGET and the HSET commands will let you get and set values on the hashmap.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), finally, (2), case. (1), case, (1)
> **Env Vars:** hset (2), hincrby (1), hgetall (1), hlen (1), hget (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 3. Lists and Sets in Redis

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to lists
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=0)** - [Instructor] The list is one of those data types that once you learn about them, you'll always be trying to use them.
>
> **[0:06](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=6)** And don't get me wrong, there is barely anything special about lists but that's exactly what makes them great, they're simple.
>
> **[0:13](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=13)** Lists are nothing but a collection of strings.
>
> **[0:16](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=16)** Given how they're internally structured, they're very efficient at adding and removing data from both ends.
>
> **[0:22](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=22)** You see, lists are implemented using the doubly linked list data structure, meaning that every element inside the list, quote unquote, knows about the previous and the next element.
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=32)** It also means that a list has a direct reference to both the first and the last node inside the list.
>
> **[0:38](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=38)** And here you see a very basic representation of what one of these lists looks like.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=43)** This is a great data structure because it allows you to quickly interact with elements at either end without having to traverse the entire list to get to one of them.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=53)** And even if you're not interacting with the ends, updating references to the lead or insert a new node between two others can be done very fast.
>
> **[1:01](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=61)** Here I'm graphically showing what that looks like and all you have to do is update references for the surrounding nodes and that's it.
>
> **[1:09](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=69)** That means that you could have millions of items inside a single list, and as long as you're either inserting or removing elements from either end, you can do so in nearly constant time, that's fantastic.
>
> **[1:23](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=83)** Granted, if you do want to use elements in the middle of the list, then you'll have to deal with a big ON time complexity, meaning that the process will have to go through all previous elements until you get into the one you want to deal with, the nth plus one element.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** node (2)
> **Speakers:** - [instructor] (1)

#### Understanding the pop and push mechanics
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=0)** - [Instructor] One measure mechanism used with lists and list-based data types is the Pop and Push mechanism.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=7)** These two words will either appear as part of the command name that you're going to be using or inside the documentation many times.
>
> **[0:13](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=13)** So it's important to understand them very well.
>
> **[0:17](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=17)** When dealing with lists, popping an element out of it means getting it out from either end.
>
> **[0:22](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=22)** And pushing an element means the opposite.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=24)** It means adding an element on the list, also on either end of it.
>
> **[0:30](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=30)** Remember, here the key is to understand that we're dealing with the ends, either the head or the tail of the list.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=37)** Because as I already mentioned, these are the best places to read or write data, at least, you know, within Redis.
>
> **[0:45](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=45)** So let's take a quick look at how we can perform these operations.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=53)** If we want to push data, we have the LPUSH and the RPUSH commands.
>
> **[0:59](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=59)** Meaning left push and right push.
>
> **[1:02](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=62)** In other words, add to the head or to the tail of the list.
>
> **[1:06](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=66)** If you want to pop data, well, you probably guess it, but we have the LPOP and the RPOP commands to also either pop from the head or from the tail of the list.
>
> **[1:18](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=78)** Let's take a quick look at these commands.
>
> **[1:22](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=82)** Pushing an element is as easy as in lpush.
>
> **[1:27](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=87)** The name of the list, in my case, I'm going to be using MYLIST.
>
> **[1:32](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=92)** First element, second element, and let's call it final element.
>
> **[1:38](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=98)** And that's it, I have it on my list.
>
> **[1:41](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=101)** I can then say LPOP.
>
> **[1:45](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=105)** MYLIST, and I will get final element.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=108)** Why did I get final element if I push them on this order, first being the first one?
>
> **[1:53](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=113)** Let me show you.
>
> **[1:56](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=116)** Now, as you saw, the order of insertion and the place you insert them into matters quite a lot in Redis.
>
> **[2:03](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=123)** Look at this scenario.
>
> **[2:04](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=124)** These three elements pushed into the head of the list, in order from left to right, will make the final element, you know, the, quote/unquote, "final element," be the one that ends up being the first one in the resulted list.
>
> **[2:17](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=137)** The list will look like this: final element, second element, and first element.
>
> **[2:22](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=142)** Because when you insert the first one, is the first one into the list.
>
> **[2:26](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=146)** But the second one, since you're inserting them on the left, from left to right, becomes the new first one.
>
> **[2:33](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=153)** And the final element being the last one inserted into the head will become the new first one, leaving the first element to be the last one.
>
> **[2:42](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=162)** It's a bit of a tongue twister, but you can see it here.
>
> **[2:46](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=166)** If you were looking for the opposite result, you should have used RPUSH instead.
>
> **[2:52](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=172)** Because with the same list of elements inserted in the same order, from left to right, but on the tail of the list, the result will look like this.
>
> **[3:01](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=181)** You first insert the first element.
>
> **[3:03](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=183)** And then the second one comes and gets inserted from the right, from the tail of the list, so it becomes the new last one.
>
> **[3:11](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=191)** And finally, you insert the final element, again, from the right, and that one becomes the final element.
>
> **[3:20](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=200)** And you know, reading can be done one at a time, as I show you already, with LPOP and the name of the list.
>
> **[3:28](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=208)** Or you can also pop many elements at the same time.
>
> **[3:33](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=213)** So how do you do that?
>
> **[3:34](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=214)** With LPOP and the name of the list, you pop just one element out of it.
>
> **[3:39](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=219)** And if you specify a number after the name of the list, then you'll get all those elements from the list at once.
>
> **[3:48](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=228)** Remember, popping an element out of the list means modifying the list.
>
> **[3:53](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=233)** It doesn't just read the element, it also takes it out.
>
> **[3:56](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=236)** So every time you pop an element either from the tail or the head, you're diminishing the number of elements inside the list.

> [!info]- Semantic Content
>
> **Env Vars:** lpop (4), rpush (2), mylist (2), lpush (1), rpop (1)
> **Code Keywords:** let (4), case, (1), this: (1), this. (1), finally, (1)
> **CLI Commands:** make (1)
> **Cross-References:** as you saw (1)
> **Documentation:** the documentation (1)
> **Definitions:** in other words (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Practical example: Building a queuing system with lists
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=0)** - [Narrator] Let's practice some operations with lists by building something practical, a queuing system because everybody loves queuing up for something, right?
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=8)** Jokes aside, this system will let us perform the following actions.
>
> **[0:11](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=11)** Add people into it, get people out of it, check who's queuing, let premium customers have the queue, no questions asked, and finally check who's the pour soul standing last at the end.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=24)** Now remember when I say people we'll just be adding strings with names.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=29)** We can't really create lists of anything else but we could potentially use their IDs and then through code hydrate that information into a more complex dataset through our database.
>
> **[0:39](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=39)** But since we're dealing with only reds here we'll just stick to names.
>
> **[0:44](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=44)** Another important aspect to determine is the type of queue that we're going to be using and building.
>
> **[0:50](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=50)** Is this going to be a FIFO, meaning the first person in is the first person out?
>
> **[0:55](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=55)** Or is it going to be a LIFO, meaning the last person in will be the first person out?
>
> **[1:01](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=61)** This will determine the kind of POP and PUSH functions that we use.
>
> **[1:05](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=65)** For a FIFO Queue, we will use RPUSH and LPOP so the order of insertion will be kept correct and the retrieval of these values would make sense, since the first element put into a list will be the first one to be popped out.
>
> **[1:20](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=80)** For a LIFO Queue instead, we could use the LPUSH and LPOP so the last person to come in will be the first person to be received.
>
> **[1:27](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=87)** This will make the first person to arrive very mad so we'll avoid this mechanism for now.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (2), lifo (2), lpop (2), pop (1), push (1)
> **Code Keywords:** let (3)
> **CLI Commands:** make (2)
> **Speakers:** - [narrator] (1)

#### Adding people to the queue
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=0)** - [Narrator] Let's populate our list with the name of the people trying to get to us for some reason.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=5)** Now, depending on whether they're all here at the start of our shift when we open up the doors, or if they come one-by-one, we could potentially push them all together, like we've seen, or just one-by-one with a single push per person.
>
> **[0:21](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=21)** But let's mix it up a bit.
>
> **[0:22](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=22)** Let's do both.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=24)** Let's assume we have three people at the door at the moment we open up and then the last two come one after the other.
>
> **[0:33](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=33)** That translates to doing RPUSH thequeue, which is going to be my list, and then adding the names.
>
> **[0:42](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=42)** So we have Carol Shaw, Elizabeth Carr, and finally Ernest Ramos.
>
> **[0:57](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=57)** Those were all the people who were there when we opened up the doors.
>
> **[1:00](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=60)** And then we'll just add thequeue, Jane Carter, and finally, Martha Cooper decided to show up as well.
>
> **[1:19](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=79)** And that's it. Our queue is set.
>
> **[1:21](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=81)** Everyone is inside.
>
> **[1:22](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=82)** So let's continue with the example.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (1), continue (1)
> **Env Vars:** rpush (1)
> **Speakers:** - [narrator] (1)

#### Getting people out of the queue
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=0)** - [Instructor] Let's start now serving our clients.
>
> **[0:02](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=2)** As you can probably imagine, we're going to do that one by one.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=7)** I know we need each as one command.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=8)** We've already seen it, it's the LPOP command.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=12)** Every time we use it, we'll get one new name from the head or the tail.
>
> **[0:17](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=17)** We'll just use the LPOP and the name of the queue, as we've already seen, the queue.
>
> **[0:22](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=22)** And we get Carol Shaw.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=25)** If I keep doing it, I'll get Elizabeth Carr, Ernest Ramos, Jane Carter, and so on until there is no one else to serve in the queue, and then I will get a nil.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=37)** The queue will still be there, but it will be empty, so we get nil as our response.

> [!info]- Semantic Content
>
> **Env Vars:** lpop (2)
> **Code Keywords:** let (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Checking who's there
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=0)** - [Instructor] Now, let's assume you want to inspect the queue to see who's where.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=5)** You can really pop your way through it because as you've seen, you'll take them all out of it.
>
> **[0:10](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=10)** You need a way to inspect the list without affecting it.
>
> **[0:14](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=14)** Let's look at that.
>
> **[0:17](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=17)** And that's where the LRANGE command comes in.
>
> **[0:21](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=21)** Look at the following example.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=25)** Specify the queue, say zero two.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=28)** What do you think this command will return?
>
> **[0:31](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=31)** It returns the first three elements of the queue without taking the map out of it.
>
> **[0:36](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=36)** But why the first three?
>
> **[0:38](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=38)** Let's look at that.
>
> **[0:40](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=40)** The ranges that we saw, zero and two, they're zero based which means zero is the first element and two is the third one.
>
> **[0:48](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=48)** So LRANGE Command allows you to return the elements within a section of a list, and that section is determined by the ranges we provide.
>
> **[0:57](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=57)** And most importantly, it doesn't affect the list.
>
> **[1:02](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=62)** Now, an interesting detail about these ranges is that you can use negative values and they're considered to be started at the end of the list.
>
> **[1:14](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=74)** So you could write something like LRANGE, thequeue, zero and one, and that will go from the first element, the zero element up to the minus one, which is, if you start at the end of the list, the last element and that is what you get.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=95)** The full list of people in the queue without knowing actually how many people are there because you just specify minus one which is key to the last one no matter how many elements in the list are there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** lrange (3)
> **Speakers:** - [instructor] (1)

#### Putting someone in the middle
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=0)** - [Narrator] Let's pretend now that you want to implement a "premium customer system" where even if they arrive late they can go right into the middle of the queue.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=12)** Right now, the line looks like this.
>
> **[0:14](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=14)** Which have Carol, Elizabeth, Ernest, Jane and Martha being last.
>
> **[0:20](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=20)** And you want your premium customer Patricia Fox to be right after Ernest.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=25)** Look for you, we have the LINSERT command.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=28)** The good thing about this command is that unlike inserting a value into an array using an index where you simply replace the previous value if there was any at that index, with LINSERT, you can decide if you want to insert it after or before the actual index.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=43)** So you're adding to the list just like when you push a value into it.
>
> **[0:49](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=49)** The other small detail is that instead of working with indexes, LINSERT works with values.
>
> **[0:55](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=55)** So let's see how you would insert Patricia right after Ernest following this logic.
>
> **[1:02](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=62)** Right, so now we can just use the LINSERT command, specify the queue. In our case, that's the name.
>
> **[1:10](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=70)** Then say if you want it before or after.
>
> **[1:12](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=72)** In our case, that's after.
>
> **[1:14](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=74)** Then the people value, which is the name or rather the value that we're looking for.
>
> **[1:21](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=81)** In our case, that's Ernest Ramos.
>
> **[1:25](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=85)** And now finally, the element which is the new value that we're entering.
>
> **[1:29](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=89)** In our case, Patricia Fox.
>
> **[1:33](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=93)** And we've inserted the new value into the list.
>
> **[1:36](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=96)** We have six elements, as you can see there.
>
> **[1:38](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=98)** And if we do, again, the same trick with the LRANGE and the minus one, we can see the queue.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=108)** You can see that Patricia Fox is now number four right after Ernest without removing or replacing any value previously in the list.
>
> **[1:59](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=119)** One more detail though, leaving the queue example for a second, this command will add the value either before or after the string you pass.
>
> **[2:08](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=128)** We saw that, but only the first instance of that string, that pivotal string.
>
> **[2:13](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=133)** If the string is repeated, which is completely possible inside a list, then you'd only be inserting the new value next to the first instance of that string.
>
> **[2:22](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=142)** Remember that.
>
> **[2:24](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=144)** Now, let's go back to the example.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), let (3), this. (1), for. (1), finally, (1)
> **Env Vars:** linsert (4), lrange (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### Checking who's the last one in the queue
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=0)** - [Instructor] The last thing I want to show you is how to get the last and the first element of the queue without popping them out.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=5)** Yes, it's going to be using LRANGE again but you'll have to play around with the ranges.
>
> **[0:10](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=10)** Let me show you.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=12)** Getting the head of the list is simple.
>
> **[0:14](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=14)** You use LRANGE, then the name of the list and then zero zero as indexes.
>
> **[0:19](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=19)** This command will show you the first element without taking it out using zero as a starting range and zero as the ending range.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=29)** But how do you get the last element?
>
> **[0:31](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=31)** If you know the size of the list, it's much easier.
>
> **[0:34](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=34)** And you can get the size with something like LLEN and the name of the list.
>
> **[0:39](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=39)** In our case, it will return six.
>
> **[0:41](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=41)** So with that in mind, you can use five as an index for the LRANGE.
>
> **[0:45](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=45)** As you can see here, LRANGE, name of the list, and five, five will return the sixth element of that list.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=53)** So remember, indexes are zero based and they're inclusive.
>
> **[0:58](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=58)** Meaning that if you only want one value, you need to specify a range of length zero.
>
> **[1:04](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=64)** In other words, you have to use the same index twice.
>
> **[1:07](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=67)** That is why we use zero, zero and that we use five, five for the last one.
>
> **[1:13](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=73)** But what if you don't know the length and you want to avoid using two commands for something this simple?
>
> **[1:19](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=79)** Then you can play around with negative indexes and start counting from the end of the list, like you see on the screen.
>
> **[1:26](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=86)** We're again repeating the index to make sure that only one element gets returned.
>
> **[1:31](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=91)** And because we're using minus one, we're starting to count at the end.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=95)** So we're specifying the last element no matter how many elements are there.
>
> **[1:42](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=102)** And to show you how that would work, let me show you just with our example.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=108)** Minus one, minus one, that would give us Martha Cooper which is of the last element from the queue.

> [!info]- Semantic Content
>
> **Env Vars:** lrange (4), llen (1)
> **Code Keywords:** let (2), case, (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Analyzing the solution: Problems with repeated members
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=0)** - [Instructor] Let's step away from the example for a second.
>
> **[0:02](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=2)** The solution works.
>
> **[0:04](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=4)** We have our queuing system and we can even implement a premium customer system that allows them to cut half the line.
>
> **[0:10](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=10)** However, there is one big flaw.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=12)** From the thing point of view.
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=15)** At least we can keep pushing the same name into the list over and over again and the system will do nothing about it.
>
> **[0:20](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=20)** In fact, we'll have to double check ourselves before adding a name into the list to make sure that it was not already there.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=29)** Mind you, this is not an issue with our business logic.
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=32)** It's just how list work there's no mechanism preventing them from adding duplicated content.
>
> **[0:38](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=38)** So in summary, you can decide how data gets in and out of the list through the pop and push mechanism.
>
> **[0:46](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=46)** You can rate data without affecting the list with the LRANGE command and you can absolutely add duplicate content into a list if you choose to do it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** lrange (1)
> **Speakers:** - [instructor] (1)

#### Sets compared to lists
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=0)** - [Instructor] Preventing duplicates in list can be difficult, or at least it will require extra work.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=5)** This is why we have sets in Redis.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=8)** Examples like the one we just ran are not meant to be built with lists, simply because of the possibility of accidentally adding duplicated content in them, and messing up your whole logic.
>
> **[0:19](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=19)** Sets are like lists but with the added bonus of not allowing duplicated content inside them.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=24)** Actually, maybe saying that they're like list is overstretch.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=28)** They do allow to keep a group of elements inside a container but that's about where all the similarities end.
>
> **[0:34](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=34)** There are some major differences with lists.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=37)** There's only pushing at the end of a set, for instance, through the SA command.
>
> **[0:42](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=42)** The POP command only pulls random elements out of the set, so it wouldn't work exactly like we want it to work for our use case.
>
> **[0:52](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=52)** Instead of removing the element with POP, you can remove elements from the set with SREM.
>
> **[1:00](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=60)** And finally, elements aren't sorted in any way.
>
> **[1:03](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=63)** The set is a non order group of elements.
>
> **[1:07](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=67)** Let's now take a look at how our current example would change if we use sets instead of leads to implement it.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), case. (1), finally, (1), let (1)
> **Env Vars:** pop (2), srem (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Running a queuing example using sets
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=0)** - Let's recap, the queuing system needs to let us add people one by one or altogether.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=5)** Let us get people out one by one and let our premium customers cut the line.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=12)** However, as we are about to see, given how sets are in order the last one will not be possible exactly in the same way.
>
> **[0:20](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=20)** So to add people to our queue, it's very easy.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=24)** We use the SADD command, specify the name of the queue as before, and then the names.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=29)** Carol Shaw, Elizabeth Carr, and Ernest Ramos.
>
> **[0:40](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=40)** And if we want to add them one by one we also do the same; Jane Carter and Martha Cooper.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=53)** And that's it, we have everyone on the queue.
>
> **[0:57](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=57)** Now keep in mind, if you try to add Elizabeth Carr again to the queue, nothing will happen, right?
>
> **[1:01](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=61)** So we simply ignore that command and your set won't be affected at all.
>
> **[1:07](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=67)** Now the order of insertion here doesn't matter like it did with the lists, because there is no order essentially.
>
> **[1:13](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=73)** We'll look into using shorter sets which are in ordered, in a feature video but for now it's simply add people in.
>
> **[1:22](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=82)** Instead of using LRANGE to look at the list without affecting it, we can use the SMEMBERS command which will yield a result like you see on the screen.
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=94)** And now instead of using a FIFA approach we can just pick whoever we want to serve first which is you think about it, it is like implementing the premium customer feature from before.
>
> **[1:46](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=106)** Let's say we decide to serve Carol Shaw first.
>
> **[1:49](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=109)** We can just remove Carol from the set like this.
>
> **[1:59](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=119)** And as you can see, we get a one, meaning success from ready's.
>
> **[2:04](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=124)** And if we try to review the list of members from the queue using the SMEMBERS command, we can see that Carol is no longer there.
>
> **[2:13](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=133)** And that's it.
>
> **[2:14](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=134)** We can't really check who's last on the queue because that now is up to us.
>
> **[2:20](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=140)** We decide who gets served first and not the commands.
>
> **[2:27](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=147)** So to summarize: sets are very useful structures that simplify the task of keeping track of elements that are not generated by you.
>
> **[2:37](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=157)** Because you're a hundred percent sure that no matter who sends the information you're only going to have one of each inside your set.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), yield (1), this. (1)
> **Env Vars:** smembers (2), sadd (1), lrange (1), fifa (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - let (1)


### 4. Sorted Sets

> [↑ Back to Table of Contents](#table-of-contents)

#### Explaining what a sorted set is
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=0)** - [Narrator] Sorted sets are just like sets in the sense that they don't allow duplicate content either.
>
> **[0:04](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=4)** However, they had one feature we were missing from sets for our queuing system example, order.
>
> **[0:11](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=11)** That means the elements inside a sorted set have a predefined order.
>
> **[0:16](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=16)** The interesting bit about it is that unlike lists, which also have order, the position of the elements is not given by the order of insertion but rather by the value we give them when inserting them.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=28)** When lists only allow you to insert strings, sorted sets will let you add strings and a value that will be used for the sorting.
>
> **[0:39](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=39)** And on top of that, we can edit the value later and the set will sort itself out for you.
>
> **[0:44](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=44)** So that's also quite neat.
>
> **[0:47](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=47)** So we can implement things like priority cues, where certain value is the priority of the element.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=53)** We can also implement leaderboard systems around sorted sets and task scheduling systems.
>
> **[0:58](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=58)** So let's see how we could implement a leaderboard next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### Leader board example using a sorted set
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=0)** - We're going to be building a leaderboard, and what is that exactly?
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=3)** It's simply a list of players sorted by points.
>
> **[0:06](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=6)** The ones who have the most points are at the top and the ones who have the least points are at the bottom.
>
> **[0:10](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=10)** Simple. So why would we want to use a sorted set for this?
>
> **[0:14](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=14)** We could easily build it with a list.
>
> **[0:16](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=16)** However, as we all know, the list will only let us store the names, not the points, and most importantly, we will not be able to sort them by any value.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=25)** So, sorted sets it is.
>
> **[0:27](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=27)** So what do we need then?
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=29)** We need to know how to add data to the leaderboard, how to sort it by points, how to query the leaderboard to know who's where, and most importantly, how to update the points and re-sort the list.
>
> **[0:40](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=40)** The good part about sorted sets is that sorting comes naturally.
>
> **[0:44](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=44)** We won't have to do anything other than providing the values and the points. That's it.
>
> **[0:51](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=51)** So let's now add some players to a leaderboard.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=53)** We'll create one that looks like this with Sandra, Nicholas, Cheryl, Doris, and Brian at the bottom with 100 points.
>
> **[1:00](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=60)** We can create this leaderboard with the ZADD command simply specifying the keyword ZADD and then the key name for the leaderboard.
>
> **[1:09](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=69)** In our case, we'll call it leaderboard and then the points are actually the sorting value that we're going to be using and then the actual value that we want to add to the sorted sets.
>
> **[1:21](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=81)** In our case, it's going to be the names.
>
> **[1:28](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=88)** We add Sandra Ortiz with 1000 points.
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=94)** Then with 860 Nicholas. Then we'll add with 600 points
>
> **[1:45](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=105)** to Cheryl Robinson and finally with 100 points, Brian McDonald.
>
> **[1:58](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=118)** And now the leaderboard is created and all players are inside it so let's go back to the presentation.
>
> **[2:07](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=127)** One thing to notice, though, is the order of insertion.
>
> **[2:10](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=130)** Notice how I specifically inserted all players with no pre-established criteria.
>
> **[2:14](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=134)** So their points were not in ascending or descending order. That we just randomly chose them.
>
> **[2:19](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=139)** Let's see what happens now when we try to query the leaderboard with the ZRANGE command.
>
> **[2:26](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=146)** Notice that the ZRANGE command is very similar in syntax to the LRANGE that we saw earlier.
>
> **[2:32](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=152)** We'll specify the name of the leaderboard and then the ranges. In our case, we'll query the whole thing so 0 5 and now you can see that the players are already sorted.
>
> **[2:43](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=163)** The sorted set actually sorted all values by points.
>
> **[2:49](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=169)** So you can see now that all players are here but they are already sorted in an ascending order.
>
> **[2:54](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=174)** That is because that is the full query criteria for the ZRANGE command.
>
> **[2:57](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=177)** If you wanted to query them with having the player with the most points at the top, which is actually what we want for a leaderboard, we need to use the ZREVRANGE command which is the opposite to the ZRANGE command.
>
> **[3:14](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=194)** We can use it exactly in the same way and with the same range.
>
> **[3:20](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=200)** And now you can see that the leaderboard the result for the leaderboard is the one we intended with Sandra at the top and Brian McDonald with 100 points at the bottom.
>
> **[3:31](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=211)** What if our players earn more points?
>
> **[3:33](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=213)** Let's update their score now and see what happens.
>
> **[3:36](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=216)** Let's pretend that Nicholas just earned 300 points and we can update his points with one single line.
>
> **[3:43](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=223)** And now to update a value, a sorting value inside a sorted set. we'll use the ZINCRBY command.
>
> **[3:51](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=231)** Notice how we're still following a similar syntax for the command names. As before, we're just preparing it with a Z to reference that we affecting a sorted set.
>
> **[4:03](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=243)** We'll put the name of our leaderboard here. There we go.
>
> **[4:08](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=248)** And then how many points of increment we want.
>
> **[4:11](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=251)** In our case, 300 and the member, which is going to be Nicholas Clark.
>
> **[4:20](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=260)** And you can see the result is returned so you already know how many points does Nicholas have and if we check to to make sure that everything worked correctly with ZREVRANGE command, like before, we'll see that now Nicholas, is at the top of the leaderboard.
>
> **[4:42](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=282)** As you can see, sorted sets simplify your work because we don't have to worry about whether we're trying to insert a repeated value.
>
> **[4:48](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=288)** They're sets, after all, and how to sort the members of the set Redis does that for us.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (4)
> **Env Vars:** zrange (4), zadd (2), zrevrange (2), lrange (1), zincrby (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - we (1)


### 5. Key Naming Strategies

> [↑ Back to Table of Contents](#table-of-contents)

#### Comparing Redis to relational databases
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=0)** - [Instructor] As I mentioned earlier, Redis is not a relational database nor does it share any of the core concepts of our relational database.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=8)** We don't deal with tables or properties, or even primary or foreign keys.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=12)** There is no way or no mechanism within Redis for us to natively relate records in any way.
>
> **[0:20](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=20)** Where with a SQL database, you'd have something like this.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=24)** With Redis, instead, you have something like this.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=28)** Don't let the names fool you.
>
> **[0:30](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=30)** Those are all individual keys that share the same route in the names, but that's as far as we can get when it comes to similarities.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=37)** When it comes to saving data, Redis only lets you define a single key and a value for that key.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=43)** That's all.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Relating keys to each other
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=0)** - So can we really relate records inside Redis?
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=3)** The answer is yes and well, no.
>
> **[0:06](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=6)** It's a no because there is no built in way for us to relay records to each other like we do with a SQL database.
>
> **[0:13](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=13)** We covered that part already.
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=15)** However, it's also a yes, because we can work around those limitations by playing around with naming conventions.
>
> **[0:22](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=22)** We saw this trick already but let's look at it in more detail.
>
> **[0:26](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=26)** You can preestablish a naming convention with your keys.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=29)** Something like collection name underscore id of the element equals the main value of the element.
>
> **[0:35](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=35)** That way you can quickly access the value of an element if you know it's ID, which let's be honest you usually do.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=43)** When dealing with SQL databases, all you care about is the ID of entities.
>
> **[0:47](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=47)** Once you have that, you can get any information you want.
>
> **[0:51](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=51)** We're following the same concept here, but since we don't have the luxury of a single table per entity type, we have to group our keys logically with smart naming conventions.
>
> **[1:01](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=61)** Instead of storing users inside the user's table, you can have keys starting with the string users underscore, so the user with ID 1 will be stored in the key "users_1" and you can read it with a single command, GET users_1.
>
> **[1:20](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=80)** Following on the SQL analogy, that will be like running a SQL query by ID.
>
> **[1:25](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=85)** You have a very optimized way of accessing the data.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4)
> **Code Keywords:** let (2), type, (1)
> **API Endpoints:** get  (1)
> **Cross-References:** we covered (1)
> **Speakers:** - so (1)

#### Representing multi-key models
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=0)** - [Instructor] What if you have a data model that is more complex than an ID and a value, because let's face it in a real world scenario models will contain many more properties.
>
> **[0:11](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=11)** Something as simple as a customer record could include properties like name, address, phone number, any other identifying information like here, Doris's record has an ID, a name, an address, and an email address.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=24)** So the same naming conventions apply only with maybe a little bit more complex.
>
> **[0:30](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=30)** You have the collection name _ the element ID underscore the property name = the value of the property.
>
> **[0:38](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=38)** So if you had, for example, the name and the address of your users store within Redis you could do something like this users _ the actual user id and then _ the name or the address.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=53)** But let's no stop there.
>
> **[0:55](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=55)** What if we have related models?
>
> **[0:58](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=58)** What if our address has a different properties like street name and city and country on which to store that data, we'll be using two different sets of keys.
>
> **[1:08](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=68)** The addresses set which would start by the street addresses _ then the address id and then the name of the property, street name, city or country, and then the set of user keys, which would start with the users _ string and then the user id, and then the name _ address, which will only reference the address id.
>
> **[1:31](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=91)** We will have to run two queries to get the user's address one to get the ID of the address and one to read the actual data, or actually three if you got three different keys for each other's property.
>
> **[1:43](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=103)** Or we could potentially simplify that using this naming combination.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=108)** You'll have everything inside the users set of keys that start with string users _ and the user id and then already the address key for all of them, and then the property of the address, city, street, name and country.
>
> **[2:02](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=122)** This could save you one query but it would couple the address model to your user's model, so you will not be able to share the same address record with other user records like you know, a family living inside the same house.
>
> **[2:16](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=136)** You have to replicate those values for each family member.
>
> **[2:21](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=141)** Since there is no standard, you can pretty much come up with your own name and combination.
>
> **[2:26](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=146)** The important thing is that it should give you the ability to create your desired data model and query it in an optimized fashion.
>
> **[2:33](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=153)** That's all you have to remember.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Beyond Data Storage

> [↑ Back to Table of Contents](#table-of-contents)

#### What else can you do with Redis?
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=0)** - [Narrator] Redis is a lot more than just a database.
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=3)** In fact, some of the most interesting use cases for Redis are not related to data storage at all.
>
> **[0:09](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=9)** I'm talking about Redis' ability to function as a message bus.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=12)** A message bus is a messaging infrastructure that allows multiple systems to communicate with each other asynchronously.
>
> **[0:19](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=19)** While it might sound like an unrelated feature, being able to distribute data between the producer and the consumer is not far from being able to store the data a producer makes.
>
> **[0:30](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=30)** So don't be shocked.
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=32)** The most important thing to know about message buses right now is that they follow a very similar architectural paradigm.
>
> **[0:39](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=39)** The bus will always be in the middle, between the producer and the consumers.
>
> **[0:43](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=43)** A producer is an entity creating data and pushing into the bus, and a consumer is an entity reading data off of the bus.
>
> **[0:51](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=51)** You might find situations where the data is persisted inside the bus for a while, in case there are no consumers interested in it, and others where data is simply distributed blindly by the bus, and if there is no one on the other side to consume it, then it simply gets lost.
>
> **[1:08](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=68)** These are both common patterns for massive passes and their differences give you a lot of flexibility when it comes to defining your architecture.
>
> **[1:17](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=77)** You can see here as to, what are we going to be seeing next, based on the type of message bus that we're going to be hitting.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2)
> **Code Keywords:** function (1), while, (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Exploring Pub/Sub
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=0)** - [Instructor] Let's first talk about Pub/Sub.
>
> **[0:02](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=2)** Pub/Sub is a feature of Redis.
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=3)** And it was the first message bus that this database feature many, many years ago.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=8)** Pub/Sub is very simple to use and you don't really have to do anything to set it up.
>
> **[0:14](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=14)** It's also a very simple implementation of it that while it might work very fast, it's not super reliable.
>
> **[0:19](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=19)** And let me explain why that is.
>
> **[0:22](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=22)** Pub/Sub functions under the fire-and-forget mechanism.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=25)** Meaning that the data producer will push data into the bus and forget about it.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=29)** Whether the data reach the consumer or not, it's irrelevant.
>
> **[0:33](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=33)** And from the consumer point of view, they will only receive data if that data was produced after they connect it to the bus and started listening for it.
>
> **[0:42](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=42)** Any information produced before that would not exist for them.
>
> **[0:47](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=47)** In other words, it's a great real-time solution because it's lightweight and easy to use.
>
> **[0:54](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=54)** However, if you're not able to ensure the stability of your consumers, you might lose some data.
>
> **[1:02](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=62)** If you're a producer all you have to do is use the PUBLISH command.
>
> **[1:07](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=67)** Like this using the PUBLISH with a key name, which is going to be the channel name.
>
> **[1:12](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=72)** And then a string, which is going to be the message that you're going to publish.
>
> **[1:16](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=76)** And if you're a consumer, you have to first subscribe to a channel with a SUBSCRIBE command and use the channel name, which is the key that we used before.
>
> **[1:26](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=86)** You can subscribe to multiple channels at the same time and you'll be notified when data is published in any of them.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=95)** You'll receive that data as it is published into a channel.
>
> **[1:38](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=98)** Let me show you how that works.
>
> **[1:42](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=102)** Here, I have two terminal windows because I'm going to be using one as a consumer and one as a producer.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=108)** First, the consumer is going to subscribe to a channel, which I'm going to call it notifications and it's going to start there.
>
> **[2:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=120)** It's called, it says that it's "Reading messages" and it's going to stay that way until I press Control + C to quit it.
>
> **[2:07](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=127)** Now, on the other terminal window, I'm going to pretend I'm a producer and I'm going to publish a message to that channel, which we call notifications.
>
> **[2:18](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=138)** And I'm going to just say, "it's time to learn Redis".
>
> **[2:25](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=145)** And as you can see immediately on the left window, I got a message on the channel notifications.
>
> **[2:31](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=151)** And the third value is the actual message that I sent.

> [!info]- Semantic Content
>
> **Code Keywords:** pub (4), let (3), super (1)
> **Env Vars:** publish (2), subscribe (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### Exploring streams: Adding data
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=0)** - Let's now talk about streams.
>
> **[0:02](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=2)** Streams are a very powerful and versatile data type.
>
> **[0:05](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=5)** They're not a separate feature like Pub/Sub.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=8)** However, we should always remember that in tech, power and versatility come with a price: complexity.
>
> **[0:13](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=13)** And streams are no exception to this rule.
>
> **[0:16](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=16)** The easiest way to think about streams is to think about log files since that's what they were modeled after.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=24)** With log files, you usually add log lines to the end of them.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=29)** You have a timestamp per line to easily find logs within a range of time.
>
> **[0:34](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=34)** You use the Linux tail command to wait for new logs to appear when you're inspecting the log files.
>
> **[0:40](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=40)** And you don't usually remove log lines from the file.
>
> **[0:44](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=44)** You can use these files in other ways, but the most common use cases are these.
>
> **[0:50](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=50)** And the same holds true for streams.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=53)** They are an append-only data type that lets you query them in multiple ways, and persist the data that gets added into them.
>
> **[0:59](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=59)** Unless you specifically remove a record from the stream, it'll always be there.
>
> **[1:05](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=65)** Let's start with the appending data, which is the easiest operation.
>
> **[1:09](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=69)** To append data to the end of a stream, you simply use the XADD command like you see here.
>
> **[1:15](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=75)** You will specify a key, an ID, and then a set of key values.
>
> **[1:20](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=80)** And let me break it up a bit, because there is a little drawback here.
>
> **[1:26](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=86)** The key is the name of the key where you're going to store the stream.
>
> **[1:30](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=90)** This is like any other key that we've used so far in Redis.
>
> **[1:33](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=93)** The ID is the ID of the data you're entering into a stream.
>
> **[1:37](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=97)** You'll usually use an asterisk here, meaning that Redis will auto-generate that ID for you.
>
> **[1:42](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=102)** And the ID will be returned by the XADD command and it's going to be a unique timestamp followed by an auto-increment integer in case there is already a key with that timestamp in place.
>
> **[1:54](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=114)** This is to avoid collision.
>
> **[1:55](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=115)** And remember that we talked about log lines having, like, a timestamp inside the log file wall.
>
> **[2:02](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=122)** This is going to be our timestamp.
>
> **[2:04](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=124)** And then the final key value per bit is because you can enter a complex data structure into a stream.
>
> **[2:10](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=130)** You're not just adding strings here.
>
> **[2:12](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=132)** Think like adding lines of a CSV file.
>
> **[2:15](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=135)** Each key is going to be the column name, and the value is going to be the actual value you enter.
>
> **[2:23](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=143)** So let's say I'm creating a stream of events.
>
> **[2:26](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=146)** So I'm just going to use the XADD command.
>
> **[2:29](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=149)** Call it "myevents."
>
> **[2:32](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=152)** Do the asterisk to let Redis generate the ID for me.
>
> **[2:37](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=157)** And then I'm going to say the user is going to be Fernando.
>
> **[2:42](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=162)** The event type is going to be left click.
>
> **[2:47](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=167)** And the coordinate x is going to be 32, and the coordinate y is going to be 56.
>
> **[2:53](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=173)** And I can do that many times.
>
> **[2:55](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=175)** You can see that the timestamp was returned and the auto-increment number is zero.
>
> **[3:03](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=183)** That's because I'm the only one entering these events at the same time.
>
> **[3:07](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=187)** If I had multiple Redis clients entering, we could potentially have a collision, and in that case the auto-increment will take place and be incremented.
>
> **[3:17](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=197)** I can add further events for my user.
>
> **[3:25](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=205)** Say another type could be right click in a separate coordinate.
>
> **[3:36](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=216)** And finally I could say that the same user had an event type scroll.
>
> **[3:47](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=227)** Now notice how this event doesn't have a coordinate x and y.
>
> **[3:51](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=231)** That's because we don't really deal with schemas here like we would use in a SQL database.
>
> **[3:57](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=237)** This is just a schema-less environment.
>
> **[4:01](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=241)** And so remember, streams are always going to store the data.
>
> **[4:06](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=246)** They're a data type, not a separate feature.
>
> **[4:09](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=249)** And most importantly, they're very similar to log files.
>
> **[4:11](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=251)** So if you need to think about it in a way to reason how streams work, think about log files.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type. (1), pub (1), type, (1)
> **Env Vars:** xadd (3), csv (1), sql (1)
> **CLI Commands:** find (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - let (1)

#### Exploring streams: Reading data
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=0)** - [Instructor] Let's now talk about reading data from a stream.
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=3)** That's where things get interesting, because there is not a single way for you to do this.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=7)** It actually depends on your use case.
>
> **[0:10](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=10)** Let's start by reading data by date range.
>
> **[0:14](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=14)** Since the IDs or elements inside the stream are Unix time stamps, we can use the XRANGE command, and specify the starting and ending times of a range.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=25)** You see the syntax of XRANGE is very similar to LRANGE, or CRANGE that we saw before, but the difference is that the starting, and ending values for the range, are UNIX timestamps in this case, instead of just single integers like before.
>
> **[0:40](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=40)** The interesting bit about these values, these timestamps, is that we don't need to add the extra number added by varieties to our collisions So we can query a day range easily.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=53)** Let's look at an example of that.
>
> **[0:56](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=56)** So if I want to read all the values inside my screen, I can use the X range and say my events minus and plus and I get all of the data.
>
> **[1:08](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=68)** The format is peculiar because we get a list of lists and that is due to the fact that for every result, we also get the ID of the result and the complex data saved inside the message.
>
> **[1:21](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=81)** Also, notice how I use the minus and plus instead of actual time stamps.
>
> **[1:26](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=86)** I cheated there a bit, but those are special values wild cards if you will indicating the minimal possible timestamp inside that stream with the minus and the maximum possible timestamp with a plus sign.
>
> **[1:39](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=99)** You can use this to query whenever you need.
>
> **[1:44](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=104)** And because we never know exactly how many elements are between two consecutive timestamps due to the extra number added by redis 12 collisions we can optionally add the count attribute to our command to limit the number of elements that we get.
>
> **[2:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=120)** Like you see on screen.
>
> **[2:01](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=121)** So let me show you how that works with rights.
>
> **[2:07](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=127)** I'm going to use a variation of the XRANGE command.
>
> **[2:12](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=132)** The XREVRANGE, which as you know is the opposite of XRANGE.
>
> **[2:20](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=140)** And I'm going to use the name on my stream and then plus minus count one and I'm going to get the last element of my stream because I'm using the reverse version of XRANGE.
>
> **[2:36](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=156)** And so that is why I'm using the plus first and the minus second.
>
> **[2:40](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=160)** And since I'm limiting to just one this will return the list of elements inside the stream sorted by day range in reverse order and just picking one element.
>
> **[2:54](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=174)** So that translate to the last element in the stream.
>
> **[2:58](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=178)** Now let's see how we can read data in real time.
>
> **[3:01](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=181)** Essentially get notified whenever new data is added to the stream.
>
> **[3:07](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=187)** You can subscribe to one or multiple streams and get notified when new elements are appended to them.
>
> **[3:14](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=194)** And this is similar to how Pub/Sub work in the sense that every element added will be broadcasted to every consumer connected.
>
> **[3:22](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=202)** However, the main difference, is that those records will not be remote from the stream.
>
> **[3:29](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=209)** The syntax is as follow, XREAD and then you have the COUNT and BLOCK properties, which are optional but you can use the first one to limit the number of results you get.
>
> **[3:41](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=221)** And the second one will keep your client waiting until the new element is added.
>
> **[3:47](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=227)** As for the last two properties, the key and the ID can be repeated as many times as you want because you can subscribe to multiple streams at once and you can specify the last ID read on each one of them.
>
> **[4:02](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=242)** Connecting to a stream and specifying the last ID read by your client is effectively like simulating what would've been you connecting in the past, essentially.
>
> **[4:12](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=252)** Let me tell you how that works.
>
> **[4:15](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=255)** Okay, so I have two terminal windows again because I'm going to show you what happens from the perspective of a consumer and of a producer.
>
> **[4:24](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=264)** So if you want to subscribe to a stream and wait for the first element to be added you can use the following command, XREAD, BLOCK, zero STREAMS, my events and the dollar sign, and that's it.
>
> **[4:41](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=281)** And then I can add a value to my stream with the XADD command we did before.
>
> **[4:47](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=287)** And I can say my events user Fernando event_type scroll.
>
> **[4:55](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=295)** And you can see immediately on the other side on the other window, I get the stream name, the ID and the data I added.
>
> **[5:05](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=305)** And because I didn't set it to block, it just dies there and stops waiting for new data to be added.

> [!info]- Semantic Content
>
> **Env Vars:** xrange (5), xread (2), block (2), lrange (1), crange (1)
> **Code Keywords:** let (6), this. (1), case. (1), case, (1), pub (1)
> **Code Identifiers:** event_type (1)
> **Tools:** terminal (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Example: Real-time message bus using Pub/Sub
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=0)** - [Presenter] Let's now use Pub/Sub to create a real-time message for us to see how that would work.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=7)** I'm going to set up two clients that will act as the consumers, and one that will act as a producer.
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=15)** Right, here I have three windows instead of two, because the bottom two will be my consumers, and the top one will be the producer.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=25)** So, I'm going to simply subscribe to mybus in both of them.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=37)** And then, on the top one, I'm going to publish to mybus, "this message."
>
> **[0:45](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=45)** And immediately, the bottom two consumers get notified, and they see the message.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=53)** It's that straightforward, because Redis is already prepared for that.
>
> **[0:59](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=59)** As you can see, the process is very straightforward, which is the great part of Pub/Sub.
>
> **[1:04](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=64)** The downside, though, is like we already discussed.
>
> **[1:06](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=66)** If we don't have any consumers set up, then the messages will be lost.

> [!info]- Semantic Content
>
> **Code Keywords:** pub (2), let (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [presenter] (1)


### 7. Watching Keys for Updates

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to key-space notifications
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980&t=0)** - [Instructor] Keyspace Notifications are probably my favorite feature of Redis, mostly because of all the potential that it has.
>
> **[0:08](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980&t=8)** They are the third way in which you can create a message bus-like structure, only in this case, the producer is going to be Redis itself.
>
> **[0:18](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980&t=18)** So, let me explain how that works.
>
> **[0:21](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980&t=21)** Keyspace Notifications allow you to subscribe to events that happens on keys like setting a value, removing a key, and so on.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980&t=28)** If you subscribe one of your clients to these notifications, you can know when data enters or leaves Redis.
>
> **[0:35](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980&t=35)** This opens up the door for some very interesting behaviors like timeout notifications, time-based actions, reactive architectures, and lots more.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), let (1)
> **Speakers:** - [instructor] (1)

#### Practical example: Building a session timeout feature
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980&t=0)** - [Instructor] To show you that behavior, let's think of a practical use case.
>
> **[0:03](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980&t=3)** Let's figure out how to build a session timeout feature for a web application just using Redis.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980&t=12)** Let's assume we have a web application and we want to make sure that the user's session ends after a certain time.
>
> **[0:18](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980&t=18)** The workflow will be on every request, we should check if the user is logged in.
>
> **[0:24](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980&t=24)** If they are, then we'll check if the session is still valid.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980&t=28)** Once the session expires, we need to remove the user login flat and we can do all of these with Redis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Resolution
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=0)** - [Instructor] I'm going to show you the solution here, and then we'll break it up and understand exactly how it works.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=7)** After the user logs in for the first time, we'll use the following query.
>
> **[0:12](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=12)** SET logged_in_users.
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=15)** We'll use the ID 1234, for the user ID, and then we'll save essentially as a value, the timestamp of when that happened.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=25)** And then we'll use the EX flag, and then we'll put 3,600 there.
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=32)** And then, whenever the user performs any other requests for the same query, essentially with an updated timestamp, we'll add the XX flag.
>
> **[0:48](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=48)** And this is what we're going to be doing.
>
> **[0:52](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=52)** Let me explain.
>
> **[0:54](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=54)** So, this flag that we added, the XX flag, will make sure that we only update the key if it already exists, if it's already being created by Redis.
>
> **[1:06](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=66)** Otherwise, it will return minus one.
>
> **[1:08](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=68)** Remember that by default, Redis creates the key for us if it doesn't exist.
>
> **[1:12](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=72)** So, if we don't add that exact flag, the command will always succeed, and we want it to fail at some point.
>
> **[1:22](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=82)** So, are we done?
>
> **[1:23](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=83)** This alone will be more than enough, but what if we also want to handle the notification of the timeout some other way?
>
> **[1:31](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=91)** A proper solution will be to have a separate time out notified service that subscribes to this particular event and is notified whenever this happens so we can handle it on our own.
>
> **[1:41](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=101)** And let me show you how that would work.
>
> **[1:45](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=105)** All right, so we have two terminals windows again here.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=108)** The top one has the Redis client all ready and the one on the bottom is just a hash because I need to start my Redis client with a specific set of parameters for it to know that it needs to subscribe to the expiration events, which are the ones that we're going to be looking at.
>
> **[2:06](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=126)** So let me quickly call Redis client, the c-l-i, and then pass the CSV parameter with psubscribe, and then a pattern, which you don't really need to exactly understand what it means.
>
> **[2:23](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=143)** Just know that if you put expired here, the Redis client will subscribe to that particular set of key space notification events.
>
> **[2:32](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=152)** And now back to the example that we used before.
>
> **[2:36](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=156)** If we set the logged_in_user value 1-2-3-4, for let's say whatever timestamp that we want, and then an E-X flag and set it to five.
>
> **[2:51](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=171)** We set it to 3,600 because that is the number of seconds that this record is going to leave.
>
> **[2:58](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=178)** For me to show you an example, I'm just going to set it to five and see what happens in five seconds while I speak.
>
> **[3:06](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=186)** You notice that on the bottom screen, the client received a notification, the expiration notification, of that particular key.
>
> **[3:14](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=194)** Now, if you had this client inside your notification service, this client would've been notified and your bit alert could have been triggered to do whatever you needed for that particular event when the user session expired.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1), pass (1)
> **Code Identifiers:** logged_in_users (1), logged_in_user (1)
> **Env Vars:** set (1), csv (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Explanation overview
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=0)** - Let's now review the full solution because we covered it a lot in the previous video.
>
> **[0:06](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=6)** The key to it is in SET command.
>
> **[0:09](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=9)** First with the EX flag and then with the added XX flag.
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=15)** At, at the end of the command.
>
> **[0:18](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=18)** We saw before that the SET command is capable of saving data into RAIDS.
>
> **[0:22](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=22)** However, with the proper flags, it's also capable of telling it to out expire the keys after a certain amount of time.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=29)** The EX flag does that.
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=32)** We're sending it to 3,600 seconds which is essentially an hour of timeout.
>
> **[0:38](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=38)** The timeout on the key will trigger the removal of it from the database but it also triggers the key space notification which we'll be able to subscribe to.
>
> **[0:49](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=49)** The XX flag that we added later makes sure that the default behavior for the SET command that is of creating the key, if it doesn't exist, is not used.
>
> **[0:58](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=58)** This prevents us from having to check if the key exists before saving the timestamp of the user's activity.
>
> **[1:08](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=68)** It essentially saves us REDIS query, which would still be very fast given Red's performance metrics.
>
> **[1:14](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=74)** However, it simplifies our code and the logic quite a lot.
>
> **[1:18](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=78)** We simply try to save the timestamp and if we get a minus one as a result then we know that it didn't work.
>
> **[1:24](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=84)** And also we know why that is.
>
> **[1:28](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=88)** And the icing on top of this cake that is the solution, are the notifications.
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=94)** Thanks to them, We can expand our logic independently of the main data flow.
>
> **[1:39](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=99)** If tomorrow we want to add a log event or maybe perform other complex logics around this particular exploration event we'll be able to do so thanks to the fact that Redis scan let us know when that key expires.

> [!info]- Semantic Content
>
> **Env Vars:** set (3), raids (1), redis (1)
> **Code Keywords:** let (2)
> **Cross-References:** we covered (1), previous video (1)
> **Speakers:** - let (1)


### 8. An introduction to Redis at Scale

> [↑ Back to Table of Contents](#table-of-contents)

#### What's missing for a production-ready architecture?
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=0)** - [Instructor] Alright, so before we close the course, you go about with the next step in your Redis journey, let's try to think about what's missing from everything we've seen so far for you to take your Redis instance in production essentially.
>
> **[0:18](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=18)** So what do we have so far?
>
> **[0:20](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=20)** We have... What have we seen, what have we learned?
>
> **[0:23](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=23)** We understand essentially what Redis is and what kind of use cases we can use it for, that's fantastic.
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=29)** We know the basic commands of Redis, and we know how to download and install Redis on a single computer.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=37)** But the question now remains, is this enough for production?
>
> **[0:41](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=41)** Is this going to be working correctly in a production environment?
>
> **[0:48](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=48)** Now clearly this changes and varies, depending on what it means for you to be in production.
>
> **[0:55](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=55)** Depending on the type of application that you're building and the type of traffic that you have.
>
> **[0:58](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=58)** But internal terms for production, we sort of need two main things.
>
> **[1:03](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=63)** We need in the context of Redis, we need Redis to scale, there is just too much data for it to fit within a single server.
>
> **[1:11](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=71)** Or if there is just too much demand for the services that Redis is providing.
>
> **[1:20](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=80)** It's just too much traffic, whether it is, it doesn't generate too much demand.
>
> **[1:25](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=85)** The amount of active connections, the amount of active queries, they're just going to be limited if they're just inside a single server.
>
> **[1:32](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=92)** So that is just one of the needs, the other, we need Redis to withstand server problems essentially.
>
> **[1:40](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=100)** Whether we have it on a single server or in multiple servers, we need to make sure that if something happens, if there are issues with those servers, then Redis is able to either repair itself or restart itself, or find another instance that is running that can act as the main server for us.
>
> **[2:01](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=121)** So in other words, we need scaling.
>
> **[2:04](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=124)** We need capacity and processing capabilities to grow based on the demand for them.
>
> **[2:09](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=129)** We need high availability, right?
>
> **[2:11](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=131)** We need for Redis to always remain available even if there are server issues.
>
> **[2:17](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=137)** And we need partition tolerance, which is... This is a specific case where if you have set of nodes that are conforming some sort of cluster in the case of Redis and the connection between two nodes is severed to the point that now you have what, two or more instances of this cluster that are just not able to connect to each other, that's partitioning essentially.
>
> **[2:44](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=164)** You need Redis to still be connected, to still be available, to still be working, right?
>
> **[2:50](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=170)** We need Redis to somehow still process data, return information, and work without effecting the quality of the service to the standards that we set.
>
> **[3:05](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=185)** There are two potential ways to solve or to get these things that we need for production.
>
> **[3:12](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=192)** We can use Cluster, we can use Redis cluster, which is essentially a way for us to distribute the data and the load between multiple servers that are connected to each other and ensuring that we never run out of capacity.
>
> **[3:24](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=204)** That's the main thing because now the data is shattered and we're going to be looking into that in a minute, is essentially distributed between multiple servers and they all act as a single memory essentially.
>
> **[3:41](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=221)** It's not just about duplicating the data, but it's also about distributing it in a way that each server provides their own memory into this database.
>
> **[3:50](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=230)** As a practice increasing the amount of storage and also allowing us to remain highly available.
>
> **[3:58](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=238)** Or we can use Redis Sentinel if instead of capacity, we just care about stability and we just care about the ability for it to always remain available, even in the face of server issues, then Redis Sentinel is an easier and very effective way of doing that.
>
> **[4:19](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=259)** Both approaches have the same downside though, and that is just a part of the nature of how Redis works.
>
> **[4:26](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=266)** That is a problem with... Or not a problem but rather the scenario of being eventually consistent.
>
> **[4:33](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=273)** What that means is that whether you are working with Sentinel or a cluster of Redis nodes, if something happens, there might be a moment, period of time, where the data that one of the clients reads is not exactly the same as the data that the other client reads.
>
> **[4:53](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=293)** Two or more clients just, this is an example of a Redis cluster where two clients are querying the cluster from different sites after it's being partitioned essentially.
>
> **[5:06](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=306)** Once the partitioning happens, whatever the client number one is saving into a cluster is not going to be available for client number two.
>
> **[5:14](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=314)** Obviously, because there is no connectivity between both sides of the cluster.
>
> **[5:19](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=319)** Now what Redis ensures is that eventually, once the connection between both parts of the cluster is reinstantiated then the cluster will become consistent again.
>
> **[5:32](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=332)** So this is very common in NoSQL databases, some will sacrifice high availability or even partition tolerance to remain consistent.
>
> **[5:42](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=342)** In the case of Redis, we cannot ensure 100% strong consistency so there might be... There might be scenarios where if a server goes down or network issue, momentary network issue, then the database as a whole will stay in a state of eventual consistency, which will eventually fit itself.
>
> **[6:06](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=366)** And we don't have to do anything about it, it's just something that we need to be aware of.
>
> **[6:10](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=370)** Now the question is, is there one better than the other?
>
> **[6:13](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=373)** Is Sentinel better than cluster or cluster better than Sentinel?
>
> **[6:16](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=376)** And we're going to be looking into more details in the following videos but you know, long story short, no, there is no better one here.
>
> **[6:25](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=385)** They focused slightly on different things, on different scenarios, different use cases.
>
> **[6:29](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=389)** So the question for you is, which one is better based on your current context and your current needs?
>
> **[6:37](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=397)** Based on that, you will be able to define which one's the better option for you.
>
> **[6:43](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=403)** But either case, both will give you mostly what you need for a production ready instance of Redis.
>
> **[6:53](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=413)** So remember, you need to be aware of both of them and pick the one that is best for your use case.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2), in other words (1)
> **Code Keywords:** let (1), for, (1), case, (1), case. (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** be aware (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### An introduction to Redis Cluster
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=0)** - [Instructor] Now let's take a look at what Redis Cluster is in a little bit more detail.
>
> **[0:04](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=4)** But remember that this video is not meant for you to use it as a full guide, just go on and set up your Cluster in production after watching this video.
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=15)** Rather, this is meant to be an introduction, and I invite you to go into [redis.io](https://redis.io) and check out the documentation for the Cluster mode to know more about it.
>
> **[0:26](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=26)** Now, what is Redis Cluster?
>
> **[0:29](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=29)** It's essentially a way for you to set up a cluster of Redis nodes.
>
> **[0:34](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=34)** The interesting thing about this one is that you don't have to add any extra modules into Redis for it to work.
>
> **[0:41](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=41)** Out of the box, it will be able to be set up as a cluster.
>
> **[0:46](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=46)** It allows you to grow your storage outside of the memory of a single server.
>
> **[0:51](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=51)** So if you have too much information, if you expect to have too much information for a single server, you'll set up a cluster of multiple nodes where each node will lend part of its memory to the storage capacity as a whole.
>
> **[1:06](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=66)** So what do we get by doing this?
>
> **[1:08](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=68)** We get elastic capacity, clearly.
>
> **[1:11](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=71)** The node, or rather the clusters that itself will automatically arrange whether you add new nodes into a cluster or you remove them or they are removed by a server error, the great thing about the cluster is that it is, quote unquote, smart enough for it to arrange itself and pick a new master or choose the best setup, essentially, based on the current context.
>
> **[1:37](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=97)** It is also adding data sharding and data replication without you having to do anything, so you just set up the cluster and then you specify how much data replication you want.
>
> **[1:50](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=110)** This data replication allows the cluster to remain highly available.
>
> **[1:54](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=114)** So if some of the servers fail, you know that this information from those servers is still going to be replicated somewhere else in other servers.
>
> **[2:05](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=125)** That means that the cluster will automatically arrange itself so that that replicated information is still available to clients.
>
> **[2:16](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=136)** Data sharding means that the information that you store in the cluster is not stored within a single server and then that server is replicated, but rather, the information is distributed between different nodes based on the key, based on different algorithms.
>
> **[2:31](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=151)** But the point is, you're not always hitting the same server.
>
> **[2:34](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=154)** You're not always like overloading the same server.
>
> **[2:36](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=156)** The information is evenly, or as evenly as possible, distributed between all nodes.
>
> **[2:42](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=162)** That is essentially what gives you that extra capacity of storage, which is also a incredible feature in my book.
>
> **[2:51](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=171)** All of this happens transparently to the client.
>
> **[2:54](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=174)** So client connectors, you know, libraries that are officially supported by Redis are already aware of this protocol, so they don't really have to do anything extra.
>
> **[3:08](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=188)** If you go from a single instance of Redis into Cluster, the client will still work perfectly.
>
> **[3:15](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=195)** Now, the difference is that, instead of just hitting one server, it might need to be told which server to hit, but the interesting thing is that this cluster itself will tell the client where to go find specific piece of information, so you don't really have to do anything.
>
> **[3:34](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=214)** You can see that here, this is somewhat oversimplified setup of a cluster.
>
> **[3:40](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=220)** You can see the cluster nodes, here in the middle, and then on the right side, the light blue text shows what happens first.
>
> **[3:48](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=228)** The client number two is essentially storing new data into a cluster, just getting one random node of the cluster, and that node is sharding information and sending it where it has to go.
>
> **[4:02](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=242)** On the other side, on the left side, the dark green text is showing you what happens when another client, client number one, tries to query that same information that just got saved, but since they don't, you know, that client doesn't really know which node to hit first, it'll just pick a random one again, and that node will return the actual IP address or the actual network address of the node that has the information to the client and the client, they can then go back and do the same query but to the right node, essentially.
>
> **[4:33](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=273)** This all happens very fast and transparently to the user, so you're not aware of anything.
>
> **[4:38](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=278)** If at all, it just adds a few milliseconds because of the initial round trip, but the important part is that this is a very small price to pay for that transparency that you gain, going from one, you know, from a single instance into a cluster.
>
> **[4:57](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=297)** Now, I'm quickly going to show you how to set up a cluster on your local computer.
>
> **[5:02](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=302)** Now this is just purely introduction and it's just a way for you to see how easy it is.
>
> **[5:09](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=309)** Again, go into [redis.io](https://redis.io), check out the documentation, the full documentation to understand exactly what's happening behind the curtain if you will.
>
> **[5:19](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=319)** All right, so in this setup, I have six terminals that are going to be my nodes on the cluster, if you will.
>
> **[5:29](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=329)** And then I have another one that will be in charge of creating the cluster for us.
>
> **[5:35](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=335)** They're all inside the same folder, the redis-cluster-test, as you can see, they all have, you know, I have six folders here, one for each one of these, and they all have this information, essentially.
>
> **[5:46](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=346)** A redis.conf file that I will share it with you, has all these lines.
>
> **[5:55](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=355)** The only line that is changing is the port.
>
> **[5:58](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=358)** Each one will have a different port, as you just saw, that they can be initiating inside the same computer, and then just cluster-enabled yes, cluster-config-file.
>
> **[6:09](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=369)** This file here is not one that you have to set up, but rather, one that Redis going to set for you.
>
> **[6:16](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=376)** Once it knows about the different nodes of the cluster, it will save information here, so you don't have to do anything.
>
> **[6:22](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=382)** The timeout for the nodes in the cluster is to understand whether they are just a bit slow or they are actually out and need to be removed from the cluster, and the appendonly command here.
>
> **[6:34](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=394)** So nothing out of the ordinary here.
>
> **[6:36](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=396)** This is all more than enough.
>
> **[6:39](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=399)** So what I'm going to do now is I'm going to set up the servers using this configuration.
>
> **[6:49](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=409)** As you can see here, these are all starting as individual instances.
>
> **[6:59](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=419)** Nothing.
>
> **[7:01](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=421)** This is how you would instantiate your own servers.
>
> **[7:08](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=428)** They all have the same initial set of messages.
>
> **[7:16](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=436)** All right, so these are all individual instances so far.
>
> **[7:20](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=440)** Nothing really is connecting them.
>
> **[7:23](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=443)** What I'm going to do now is I'm going to paste here the common line that will set everything for us.
>
> **[7:33](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=453)** So essentially, we're saying that the Redis CLI should take care of this.
>
> **[7:38](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=458)** It's going to receive the cluster flag and just the command, the create command.
>
> **[7:43](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=463)** And we'll specify the individual instances, as I mentioned, that are involved in the cluster.
>
> **[7:50](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=470)** And then I specify the cluster-replicas to be 1, meaning that for every node, one more node will have the same information.
>
> **[8:00](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=480)** And by doing this, right, so trying to optimize slave allocation, and now this is just going to essentially tell me, are you sure that you want to do this?
>
> **[8:14](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=494)** I'll say yes, and the cluster is being created.
>
> **[8:20](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=500)** It actually already is.
>
> **[8:22](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=502)** It just takes less than a second.
>
> **[8:24](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=504)** And you can see that they're all now being synced with other replicas here, or just talking to each other for some reason.
>
> **[8:37](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=517)** Now the cluster is ready.
>
> **[8:40](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=520)** The cluster is set up.
>
> **[8:41](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=521)** I don't have to run anything else.
>
> **[8:43](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=523)** Now I just, before we close the video, let me show you what happens if I just were to kill one of these servers.
>
> **[8:49](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=529)** I'll say, I'll just kill 7003.
>
> **[8:55](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=535)** And you can see that there is a connection problem here that the servers are picking up on and then they are reacting, reassessing their situation and recreating the cluster, essentially, based on the new topology.
>
> **[9:16](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=556)** So again, this is what would happen if you in your production environment, if, for instance, one of the servers would fail for some reason, and the information from this particular server would've been replicated somewhere else, so that means you don't have to worry about anything else.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (9), setup (3)
> **CLI Commands:** node (10), find (1)
> **Code Keywords:** let (2), else. (2), this. (1), this, (1), if, (1)
> **Definitions:** is a  (2), means that (1)
> **URLs:** [redis.io](https://redis.io) (2)
> **Documentation:** the documentation (2)
> **Env Vars:** cli (1)
> **Analogies:** for instance (1)

#### An introduction to Redis Sentinel
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=1)** Let's now look at what Redis Sentinel is.
>
> **[0:04](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=4)** Remember, this is just an introductory video.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=7)** If you want to know more, I urge you to go to [redis.io](https://redis.io) and check out the documentation for this particular feature.
>
> **[0:13](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=13)** So what is Redis Sentinel?
>
> **[0:15](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=15)** Redis Sentinel is a way for you to monitor a single master node and figure out if there is a problem with it and if there's a problem with it, react.
>
> **[0:25](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=25)** Now, the best way for you to ensure that your Redis set up remains highly available even in the face of issues with your servers.
>
> **[0:35](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=35)** Now, that means that you are monitoring your master node and champion or promoting one of its replicas into master if there is a problem with the master node.
>
> **[0:46](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=46)** Now, I'm talking about master nodes and replicas.
>
> **[0:49](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=49)** This is also something that you should be looking into more in detail on Redis but essentially at a high level, if every time you set up your instance of Redis, you can set up a copy of it, a server that will receive asynchronously the information from the main server.
>
> **[1:09](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=69)** This is to ensure that the information is packed up, that there is a redundancy in case of a problem.
>
> **[1:15](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=75)** Now, if you don't set this up with Sentinel, then if something happens with the master node, then you still have issues because the database suddenly becomes unavailable.
>
> **[1:26](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=86)** But if you mix that replication with Redis Sentinel, then the moment your main Redis server, the master node goes down, it will figure out a way to promote one of its replicas into master.
>
> **[1:44](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=104)** And does that work, actually?
>
> **[1:46](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=106)** So again, Sentinel, which is nothing that you need to add into Redis, it comes out of the box with it.
>
> **[1:52](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=112)** It's just set up to monitor your instances.
>
> **[1:55](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=115)** You will set up more than one because you don't want this behavior of promotion being triggered due to a problem with the actual sentinel and not with the server that it's been monitored.
>
> **[2:06](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=126)** So what you do is you set up at least three sentinels that will be all monitoring the same server.
>
> **[2:14](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=134)** They will talk to each other, and the moment the monitor server goes down, they will decide between all of them if there is a need for promoting one of the replicas.
>
> **[2:26](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=146)** The reason why you want at least three is that you want to make sure that there is not even a split in the voting.
>
> **[2:33](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=153)** Essentially, the sentinels will vote whether they are seeing a problem with the master node or not.
>
> **[2:40](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=160)** You just want to make sure that half of them plus one are saying yes, there's a problem before the promotion of a replica happens.
>
> **[2:49](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=169)** Now, the interesting part is that replicas in this setup are being auto-discovered.
>
> **[2:54](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=174)** So you just need to make sure that you know the IP and port of the main master node.
>
> **[2:59](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=179)** How many replicas you set up, it doesn't matter.
>
> **[3:03](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=183)** The sentinels will fill that out automatically.
>
> **[3:06](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=186)** So you don't really have to worry about that.
>
> **[3:08](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=188)** It is a very strong feature that goes hand in hand with replicas.
>
> **[3:13](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=193)** Now, I haven't really covered replicas in detail because in a second, I'll show you how a replica is being set up which is just one configuration line.
>
> **[3:22](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=202)** So now, I'm going to show you how to set up a replica for master and three different sentinels that monitor the same master.
>
> **[3:30](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=210)** This is just illustrative.
>
> **[3:32](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=212)** You should go into raise the IO and read more about Sentinel to figure out exactly the setup that you need for your production requirements.
>
> **[3:40](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=220)** All right, so here I have with these terminals, these two terminals here are going to be the master node and the replica node on the right side here, top right side.
>
> **[3:52](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=232)** Now, the three bottom terminals are going to be the sentinels monitoring the top left instance.
>
> **[3:59](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=239)** They're all in the same folder.
>
> **[4:02](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=242)** You can see here, Redis Sentinel test.
>
> **[4:04](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=244)** And this, essentially, what I have here is just configuration files.
>
> **[4:09](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=249)** The main one is going to be [redis.com](https://redis.com) which is just simply specifying the port, right?
>
> **[4:16](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=256)** 7010, that's going to be the port for my master node.
>
> **[4:20](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=260)** And then the replica is going to be listening on port 7011, and it's going to be set up as a replica of 7010.
>
> **[4:32](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=272)** Essentially, that's all you need to set up a replica, by the way.
>
> **[4:36](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=276)** This one is going to be a replica of this one.
>
> **[4:39](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=279)** Now, to create a sentinel, all you have to do is provide a sentinel configuration that essentially it says this.
>
> **[4:49](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=289)** It's just specifying the master to be monitored.
>
> **[4:55](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=295)** Just, we give it a name, random name, it doesn't have to be anything specific.
>
> **[4:59](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=299)** Then we specify the IP, the port, and the quorum.
>
> **[5:04](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=304)** That means how many replicas need to be agreeing that there is a problem with the master before they can proceed through anything.
>
> **[5:14](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=314)** Now, this is the number of milliseconds that the master has to be down to be considered, you know, down with a problem.
>
> **[5:21](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=321)** And this is how many milliseconds have to go, total after there is a problem.
>
> **[5:30](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=330)** So that there is a failover process essentially, meaning that one of the replicas is going to be promoted and just the port.
>
> **[5:38](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=338)** The port for the sentinels is also going to be specified here and changed.
>
> **[5:42](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=342)** So I can have all my three replicas working on the same computer, otherwise, they will clash.
>
> **[5:48](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=348)** So let me just quickly show you how that looks.
>
> **[5:51](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=351)** I'm going to set up the Redis server with the main configuration here.
>
> **[5:59](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=359)** It's listening to port 7010.
>
> **[6:01](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=361)** Now, I'm going to set up the replica redis server.
>
> **[6:07](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=367)** Redis replica here.
>
> **[6:10](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=370)** Now, they're talking to each other because they need to sync up.
>
> **[6:13](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=373)** Make sure that the replica is aware of the other one.
>
> **[6:17](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=377)** And now, I just have to boot up my sentinels.
>
> **[6:21](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=381)** My sentinels will be executed with Redis Sentinel, and I specified the configuration file.
>
> **[6:31](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=391)** Just one for each one.
>
> **[6:33](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=393)** Here is Sentinel2 and finally, this is Sentinel3.
>
> **[6:48](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=408)** Now, up to this point, they're all working together.
>
> **[6:53](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=413)** They're all monitoring this instance.
>
> **[6:56](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=416)** And this instance is synchronizing, as you can see, with the replica here.
>
> **[7:00](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=420)** Now, what I'm going to do is I'm going to kill the main node being monitored.
>
> **[7:07](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=427)** The replica is going to start failing clearly.
>
> **[7:10](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=430)** And now after 20 seconds, which is the timeout that I was showing in the configuration of the sentinels, all of them will start figuring out there is a problem essentially with the master.
>
> **[7:23](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=443)** The minute that happens, here you go.
>
> **[7:26](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=446)** They will start figuring out there is a problem and eventually they're going to pick up this one as the new master which already happened.
>
> **[7:40](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=460)** It was really fast.
>
> **[7:42](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=462)** But you can see here they're still having information, sharing information, but they're specifying that a new configuration was saved on disk.
>
> **[7:53](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=473)** And this config rewrite also happened.
>
> **[7:55](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=475)** So now, from now on, the main master of my redis set up is the actual old replica.
>
> **[8:04](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=484)** This all happened thanks to the sentinels that were monitoring this one and now are monitoring this one, the replica.
>
> **[8:13](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=493)** And in fact, we can also see that, remember, these files, I wrote them myself.
>
> **[8:20](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=500)** These are all created by Redis.
>
> **[8:23](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=503)** Now, if I were to check out the configuration of Sentinel, you can see that in fact it changed, right?
>
> **[8:34](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=514)** This is all generated by Redis itself.
>
> **[8:38](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=518)** So we don't really have to pay attention too much to this.
>
> **[8:41](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=521)** But now, the main master being monitored is no longer 7010.
>
> **[8:48](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=528)** It's 7011.
>
> **[8:49](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=529)** So if I were to somehow kill these instances and restart them, all sentinels will start automatically monitoring the new master.
>
> **[8:59](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=539)** This was an override, not by me, and this shows you how sentinels worked.
>
> **[9:04](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=544)** This is all automatically and it's ready.
>
> **[9:06](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=546)** In the case of a problem with the sentinels, they restarted, and they already know which servers to monitor.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (14), setup (2)
> **CLI Commands:** node (11), make (4)
> **Definitions:** is a  (11), means that (1)
> **Code Keywords:** let (2), this. (2), raise (1), this, (1), finally, (1)
> **URLs:** [redis.io](https://redis.io) (1), [redis.com](https://redis.com) (1)
> **Ports:** port 7011 (1), port 7010 (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### How to learn more about Redis
> [LinkedIn Learning](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=0)** - [Instructor] Alright, well done.
>
> **[0:01](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=1)** Congratulations. You made it to the end of the course.
>
> **[0:04](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=4)** Thank you so much for sharing your time with me.
>
> **[0:07](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=7)** Now that you understand what Redis is, and hopefully how it can help you, you might want to look into Redis Cluster and Sentinel, which will give you an idea of how to create and scalable and reliable architecture.
>
> **[0:21](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=21)** Some other NoSQL databases like MongoDB, maybe, which goes great, hand in hand with Node.js.
>
> **[0:28](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=28)** And finally, maybe something around NoSQL data modeling, especially around Redis.
>
> **[0:32](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=32)** If you enjoyed this course, it will take your skills to the next level.
>
> **[0:37](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=37)** And on the same line, if you're ready for your next LinkedIn learning course, I've got some suggestions for you.
>
> **[0:46](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=46)** For your NoSQL questions, maybe try NoSQL Essential Trainings.
>
> **[0:50](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=50)** It will take you through the basics, including some interesting theory like the Cap Theorem, which is very used and applicable to all situations.
>
> **[1:00](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=60)** If you're into software architecture, you might want to review the course Software Architecture Foundations.
>
> **[1:05](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=65)** It covers some interesting patterns, that will come in handy when working as an architect.
>
> **[1:09](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=69)** And finally, if you're not into Node.js yet, you might want to check out Learning Node.js.
>
> **[1:14](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=74)** That course covers the room time quite well, and even has some videos on how to interact with MongoDB.
>
> **[1:20](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=80)** It'll be a great compliment to your database skills.
>
> **[1:23](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=83)** And if you want to keep in touch with me, you can follow me on LinkedIn or on Twitter @deleteman123.
>
> **[1:32](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=92)** I also have a newsletter where I share my 20 or so years worth of wisdom from the 18 industry over at Substack.
>
> **[1:39](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=99)** And I have written a bunch of books also about Node.js and how to become a successful software developer.
>
> **[1:45](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=105)** So make sure you check those out as well.
>
> **[1:48](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=108)** Thanks again, I hope you enjoyed the course, and that I managed to get you hooked on Redis.
>
> **[1:53](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=113)** See you around.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), make (1)
> **File Paths:** node.js (4)
> **Code Keywords:** finally, (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Fernando Doglio]]

## Skills Covered

- Redis

## Path Context

### In [[Develop Your NoSQL Skills]]
← [[Graph Databases- Neo4j for Complex Data Relationships]] | **6 of 10** | [[Introduction to Couchbase]] →

## Appears In

- [[Develop Your NoSQL Skills]]

---

[↑ Back to top](#)