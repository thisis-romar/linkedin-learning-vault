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
  - '[Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)'
prev_courses:
  - '[Graph Databases- Neo4j for Complex Data Relationships](Graph%20Databases-%20Neo4j%20for%20Complex%20Data%20Relationships.md)'
next_courses:
  - '[Introduction to Couchbase](Introduction%20to%20Couchbase.md)'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":6,"total":10,"prev":"Graph Databases- Neo4j for Complex Data Relationships","next":"Introduction to Couchbase"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/redis
status: not-started
created: 2026-05-03
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
  - [Understanding Redis](#understanding-redis)
  - [Installing Redis](#installing-redis)
  - [Overview of the terminal CLI](#overview-of-the-terminal-cli)
  - [Understanding Redis docs](#understanding-redis-docs)
- [**1. Basics of Redis**](#1-basics-of-redis) (5 videos)
  - [What is Redis?](#what-is-redis)
  - [Data types](#data-types)
  - [Your first command: SET](#your-first-command-set)
  - [Testing GET](#testing-get)
  - [Playing around with strings](#playing-around-with-strings)
- [**2. Representing Complex Data Structures: Hashes**](#2-representing-complex-data-structures-hashes) (3 videos)
  - [What are hashes?](#what-are-hashes)
  - [Writing and reading from hashes](#writing-and-reading-from-hashes)
  - [Exploring hashes](#exploring-hashes)
- [**3. Lists and Sets in Redis**](#3-lists-and-sets-in-redis) (11 videos)
  - [Introduction to lists](#introduction-to-lists)
  - [Understanding the pop and push mechanics](#understanding-the-pop-and-push-mechanics)
  - [Practical example: Building a queuing system with lists](#practical-example-building-a-queuing-system-with-lists)
  - [Adding people to the queue](#adding-people-to-the-queue)
  - [Getting people out of the queue](#getting-people-out-of-the-queue)
  - [Checking who's there](#checking-whos-there)
  - [Putting someone in the middle](#putting-someone-in-the-middle)
  - [Checking who's the last one in the queue](#checking-whos-the-last-one-in-the-queue)
  - [Analyzing the solution: Problems with repeated members](#analyzing-the-solution-problems-with-repeated-members)
  - [Sets compared to lists](#sets-compared-to-lists)
  - [Running a queuing example using sets](#running-a-queuing-example-using-sets)
- [**4. Sorted Sets**](#4-sorted-sets) (2 videos)
  - [Explaining what a sorted set is](#explaining-what-a-sorted-set-is)
  - [Leader board example using a sorted set](#leader-board-example-using-a-sorted-set)
- [**5. Key Naming Strategies**](#5-key-naming-strategies) (3 videos)
  - [Comparing Redis to relational databases](#comparing-redis-to-relational-databases)
  - [Relating keys to each other](#relating-keys-to-each-other)
  - [Representing multi-key models](#representing-multi-key-models)
- [**6. Beyond Data Storage**](#6-beyond-data-storage) (5 videos)
  - [What else can you do with Redis?](#what-else-can-you-do-with-redis)
  - [Exploring Pub/Sub](#exploring-pubsub)
  - [Exploring streams: Adding data](#exploring-streams-adding-data)
  - [Exploring streams: Reading data](#exploring-streams-reading-data)
  - [Example: Real-time message bus using Pub/Sub](#example-real-time-message-bus-using-pubsub)
- [**7. Watching Keys for Updates**](#7-watching-keys-for-updates) (4 videos)
  - [Introduction to key-space notifications](#introduction-to-key-space-notifications)
  - [Practical example: Building a session timeout feature](#practical-example-building-a-session-timeout-feature)
  - [Resolution](#resolution)
  - [Explanation overview](#explanation-overview)
- [**8. An introduction to Redis at Scale**](#8-an-introduction-to-redis-at-scale) (3 videos)
  - [What's missing for a production-ready architecture?](#whats-missing-for-a-production-ready-architecture)
  - [An introduction to Redis Cluster](#an-introduction-to-redis-cluster)
  - [An introduction to Redis Sentinel](#an-introduction-to-redis-sentinel)
- [**Conclusion**](#conclusion) (1 videos)
  - [How to learn more about Redis](#how-to-learn-more-about-redis)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Redis](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis?u=76281980&t=0)** - [Instructor] [Redis](../../Skills/Software%20Development/Redis.md) is my favorite database, and I'm hoping after this course, it'll be yours too. Mainly because of its flexibility, from storing data to creating message queues, you can set up an entire architecture around Redis. There is really no other database like it. If you think about [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md), there is none out there that matches the uniqueness of Redis. Also, it's a huge jump from the [SQL](../../Skills/Data%20Science/SQL.md) world where most developers live. You'll start thinking in NoSQL terms and solving problems without the constraints of a SQL database. In this course, I'll focus exclusively on Redis, and I'll teach you the core concepts and components of this database. So you can understand its potential through hands-on examples without worrying about the language you're using to interact with it. As long as you're willing to learn about Redis, you're already set. Hello, I'm Fernando, former software architect turned dev advocate. And I've been working and writing about Redis for more than 10 years, and I can't wait to tell you everything I know. So let's get going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (6), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Installing Redis](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=0)** - [Instructor] The first thing that you need to do is install [Redis](../../Skills/Software%20Development/Redis.md) in your computer. So let's look at that. So to install it on your system, go to [Redis.IO](https://Redis.IO) and follow the steps found on the feature documentation. The easiest way is to click on the get started button and find the details related to your OS and with a few steps depending on whether you're using [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), macOS or [Windows](../../Glossary/Service/Windows.md) Redis will be completely installed and functional in your system. Now remember that you'll be installing two main applications. On one side, you'll install the server, which for all intents and purposes will be quote unquote Redis. All the logic from the commands will see in this course will run on the ready server. On the other side, you install the Redis client. This is an application that is meant to let you interface with the server and does not really contain any logic. It is just meant as a gate into Redis. You'll use this program to interface with the server during the course, and then you'll use a specific library for the primary language of your choice when building an actual application using Redis. When that happens, the client will be that library couple with your own code, and you really won't need this command line interface anymore. Once installed to start the server you'll run the command Redis-server. This command will only run once from a dedicated terminal window. And to start a client you'll use the command Redis-[CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) and that command can be run from multiple different terminals and you can have as many clients running
>
> **[1:33](https://www.linkedin.com/learning/redis-essential-training-15012713/installing-redis?u=76281980&t=93)** at the same time as you want. In fact, we'll see examples of that in future videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (9), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Prerequisites:** install (4)
> **CLI Commands:** find (1), redis-cli (1)
> **Tools:** command line (1), terminal (1)
> **Code Identifiers:** macos (1)
> **URLs:** [redis.io](https://redis.io) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)

#### [Overview of the terminal CLI](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/overview-of-the-terminal-cli?u=76281980&t=0)** - [Instructor] Let's look at the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) tool in a bit more detail now. This tool or command line interface is going to be our "gate" into [Redis](../../Skills/Software%20Development/Redis.md). We'll test all features and commands on this course through it. Before using it, remember that you need to start the Redis server. To use the CLI tool, simply run redis-cli on a terminal window. And you can have as many instances of this program running at the same time as you want as long as they're in different terminal [Windows](../../Glossary/Service/Windows.md). You can only enter a single command per line when using the CLI tool. And as you'll see in future videos, while you write, the client will give you autocomplete hint to help you with the syntax of the command you're trying to use. As you can see on the screen right now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (4), [Redis](../../Skills/Software%20Development/Redis.md) (3), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** cli (3)
> **Tools:** terminal (2), command line (1)
> **CLI Commands:** redis-cli (1)
> **Speakers:** - [instructor] (1)

#### [Understanding Redis docs](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=0)** - [Lecturer] The final tool you'll use in this course, and afterwards when you're building your application with [Redis](../../Skills/Software%20Development/Redis.md) is going to be the official documentation. While you can find information about Redis in many places the official looks are filled with details about the commands and the way each one works. So make sure you familiarize yourself with it. I will recommend study by searching the commands you'll use during the course by going to Redis.iOS/commands and simply enter the command that you want to see and click on it. Each command page will have a similar section. The syntax of the command counts first then the first version when it was available. This is important because some commands might only be available on the latest version and you might not be using that for some reason. The time complexity, especially useful to understand how taxing this command could be if you running on a server with lots of data. The ACL categories coming (indistinct) right now they're related to permissions but as an introductory course, we'll use the default ones which let you use everything. A description of the command to tell you exactly what it does. The return value, which is also very important to understand if you're using a command that gets data. A list of related commands, which can come in handy if you don't know where to go next. And finally, a live client, which lets you test out the command on a real ready server. This is a great feature because it lets you try out what you just read
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-redis-docs?u=76281980&t=94)** without having to install anything on your system. And if you need more details about how Redis works internally all the different data types, we'll see. You can also visit [Redis.io/docs](https://Redis.io/docs) and go from there. Overall, the documentation site for Redis is very complete so I highly recommend you start there whenever you're looking for more details.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (6)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** ios (1)
> **URLs:** [redis.io](https://redis.io) (1)
> **Env Vars:** acl (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)


### 1. Basics of Redis

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Redis?](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=0)** - [Instructor] [Redis](../../Skills/Software%20Development/Redis.md) is known as a key-value, in-memory, [NoSQL](../../Skills/Software%20Development/NoSQL.md) database. And while that might not tell you a lot, it's quite an accurate description. Redis, at its most basic, allows you to store a hashmap, if you will, in-memory, without the need of a database schema. There are no complex data models and you can only save a map of keys with values, which are usually strings. And it all happens in memory. There are no hard drives involved usually, and there are no, or close to no, delays in data access. It also means that writing and reading from this [Databases](../../Skills/Software%20Development/Databases.md) is really fast, because it all happens in memory. There is a big delay accessing data from hard drives or any other storage medium. This is another microsecond type of access that we're talking about. Speed is one of the main reasons why you, and really everyone else, will want to use Redis, the amazing performance that it brings. If you're coming from the [SQL](../../Skills/Data%20Science/SQL.md) world, like [MySQL](../../Skills/Software%20Development/MySQL.md), PostgreDB, or similar solutions, they have nothing against Redis when it comes to talking about I/O performance. Of course, because Redis is a NoSQL database, one of the main things missing is the schema that characterizes SQL solutions. That means coming up with complex data modules is actually quite hard and impractical. So you use Redis to store information that needs to be quickly interacted with, either read or written, and that is of simple nature, like configuration options, counters, and the like.
>
> **[1:39](https://www.linkedin.com/learning/redis-essential-training-15012713/what-is-redis?u=76281980&t=99)** Now, because this is a in-memory store, there's always the issue of losing information. If the server crashes, memory data is not saved, thus the data is lost. That means that these pieces of information need to be ephemeral in the sense that if they get deleted, you can easily recreate them, or at least, if you do lose them, you don't lose too much value from it. There are options at your disposal to persist that information and make sure that Redis is a reliable and trusted data store. However, Redis is very rarely used as a main database. Instead, it's used as an auxiliary system where you store simple, quickly accessible information to improve the performance of your overall system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (8), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Definitions:** is a  (4), means that (2), known as (1)
> **CLI Commands:** mysql (1), make (1)
> **Env Vars:** sql (2)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### [Data types](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=0)** - [Instructor] While I did mention that most of the values map to a key are strings, in practice that's not entirely true. We do have some other [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) that we can use to get the most out of our in memory database. So let's take a quick look at them. The data types that are currently supported are strings, lists, sets, hashes, sorted sets, bitmaps, hyper log logs, which really if you ask me they have a very strange name, strings and geospatial indexes. So let's start with the first one. Strings. They are the most basic type of value. You can store up to 512 megabytes of string data inside a single key. So that's quite a lot of information. And it's important to know also that you don't have numeric values in [Redis](../../Skills/Software%20Development/Redis.md). So if you're looking to store a counter, for example, Redis has some interesting in functions to support it but they're always going to be strings. And don't worry about that. We'll see how that works in future videos. Then we have lists. Lists are just that, a collection of things, essentially a collection of strings which works as a doubly linked list. Meaning you can push values into them both from the end and the head. Lists are great so collections. You can store up to four billion elements inside it. Yeah that's actually a B. And even large lists have fantastic performance. Next we have sets. Sets are essentially lists
>
> **[1:32](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=92)** that don't allow for repeated values inside them. They're fantastic tools to use when you have to keep a list of things and those things, those values, can eventually repeat in your logic. You don't need to check the list if the values are already there. You can just use a set instead and forget about checking it for yourself. Then we have sorted sets. As before, the sorted sets builds on top of the previous one and it's a set with everything that that entails and it's also automatically sorted by a specific value. You can use this stereotype to keep things like a leaderboard for games or a list of priorities. The sorting is handled by an efficient algorithm. So it's a great tool to use when the order of the elements it's important to your business logic. And then there are hashes. Hashes are just like Redis essentially but at a smaller scale. You can keep a map of key value pairs associated to a single key. This is what you use usually to represent some more complex data like the information of a user. We'll see more examples in future videos. Streams. They allow you to define, well, streams of data that your database can distribute to different clients. This is quite a novel feature for at traditional database because usually data is requested by clients. Not the other way around. Through the use of streams you can have your database send information to your clients once the information is available. I'll go into more details
>
> **[3:05](https://www.linkedin.com/learning/redis-essential-training-15012713/data-types?u=76281980&t=185)** about streams in future videos so don't worry. They're very cool. So we've seen and we're going to be seeing in detail streams, list sets, hashes, sorted sets and streams. The remaining datatypes, bitmaps, hyper log logs, and geospatial indexes are outside of the scope of this course because they have very particular use cases. And that's it for data types. Once you start seeing examples for each one, you'll see one kind of the value that each one brings to a table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (3), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Analogies:** for example (1), just like (1)
> **Speakers:** - [instructor] (1)

#### [Your first command: SET](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=0)** - [Instructor] Let's look now at the SET Command. The SET Command is probably the one that you use the most couple with tech which we'll look at next. The SET Command allows you to say a value in [Redis](../../Skills/Software%20Development/Redis.md). Here's the syntax. Set the key name, a value, and a bunch of other things that we're going to talk about later. While there are other aspects to a set command, the most important ones here are the key and the value. The key we like as a container for the value. You can think of it as a variable new code. They hold value so many times. In our case the type will always be string. If you want to save all the type of values like we've seen before you'll use all the specific commands that we'll see in future videos. An important thing to know about the SET Command is that it's atomic. That means that the command will always either succeed or fail. There is no chance for it to partially save your data. Much like when you're transferring money there is no chance for only part of that money to get wired. The SET Command will never save only part of your data. If you get a successful response from Redis then that data, its in Redis. Let's now save some data in Redis. So you'll use the set command, couple with the key name. In my case, I'm going to use name and then a value, in my case, I'm going to use Fernando. You see the okay value there. I can also do city country and do Madrid, Spain. Notice how I used the quotes on the second command only.
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/your-first-command-set?u=76281980&t=94)** That is because if you're saving a single [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), without spaces like my name, then you don't need 12 quotes. But if you have blank spaces in between, then you will. Another minor of detail about the SET Command is that if you're trying to save data inside a key that doesn't exist, by default you will create it for the first time. You don't have to check whether the key is there before using it for the first time or not, like which is the, and the example. So the SET Command lets you save data into Redis without having to worry where you save it, and you can trust the results you get without checking if the data actually got saved or not. As long as you get a confirmation, then the data was saved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** set (7)
> **Definitions:** means that (1)
> **Analogies:** think of it as (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Testing GET](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=0)** - [Narrator] The get command is the opposite to set. When set allowed you to save data, get will let you, you know, get it. Following the variable analogy we used, calling get on a key is equivalent of using the value inside the variable. So the syntax of the gate command is very simple. You use the get keyword and then the key name. Now, what can you get as a response of the get command? You can either get a string inside the key as a result, or nil representing that the key is empty, or that it just doesn't exist. An interesting point about key names is that, just like with the values with blank spaces require quotes, as seen in the previous video, if you want to use key names that contain blank spaces, you can also do that, but you also must use double quotes. Let's now take a look at how the get command works. Now we probably saved my name on the key name, so I can do get name and I get the result I want. I can also do get my first name, which is a very valid key name, and I get nil because I've never set that key before. So if I did set my first name to Fernando, works, and if I do the get as before, now I get the value. So as a summary, the get command is one of the simplest commands you'll use.
>
> **[1:33](https://www.linkedin.com/learning/redis-essential-training-15012713/testing-get?u=76281980&t=93)** It will return the string inside a key, if it exists, or it will return nil otherwise. That's all there is to it.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [narrator] (1)

#### [Playing around with strings](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=0)** - [Speaker] While SET and GET are very fine tools, they're also very basic commands that do not provide you with much control over the strings they deal with. Luckily, [Redis](../../Skills/Software%20Development/Redis.md) provides other commands to handle strings; which is the most basic data types supported by this database, and the one that you're going to be using the most. So remember, Redis doesn't deal with numbers. However, you can treat your strengths as numbers with specific functions, such as the INCR, or the DECR functions that will increment or decrement a value by one. So, let's pretend I'm trying to save a number inside a counter key. I can initialize it with the SET command and the zero value. So if I do get counter, I do get zero string even though I enter a number. Now, if I do INCR counter I don't have to specify anything else. The command will return the current value of counter and it will be '1' because I incremented the value by one. I can do it again, and it will be '2', and I can use the DECR command and it will be '1' again. Now, there are variations of these two commands, and these are the INCRBY and the DECRBY. Which will let me specify the increment of the decrement for this change. So, I can say '4' and now my count is 5, and I can say DECRBY counter '2', and now the value of counter is three.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=95)** It is returned as an integer, but remember that if I do get counter, I do get a string to the value three. Now as you can see, these commands are very intuitive. You could have done the same with Get and Set, but that would have required you to first send one command to get the value. Then, add some logic in your code to increase it, or decrease it, however you want, and then send one more command to set the correct value on the key. Keep in mind these commands will only work with basic string keys, as long as these strings can be converted into numbers. Otherwise, they will return an error. If I try to use the INCR command with the key that contains the string 'Fernando', it will fail. Essentially, because it would not know how to turn my name into a number. Now, what if you need to know the length of a string inside a key? You have the STRLEN command, and it's very easy and simple to use. You simply use the STRLEN keyboard with a key name, and it will return the number of characters inside the string. And what if you want to append two strings together inside a key? You have the APPEND command. Also, very intuitive and common in other languages. The syntax as well is very simple. You do the APPEND keyboard, the key you want to effect. And then as a gas parameter you add the string that you want to append to it. As you can see in the example, the my name key is the one we're always dealing with, and is the one that gets affected by the APPEND command
>
> **[3:11](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=191)** at the end. Now, let's go back to Redis and see what else we can do with these commands. Now you could take the APPEND command and the STRLEN command, and create an interesting time series key with fixed length values. Let me explain what I mean. Now, imagine you have four digit numbers being received every second; either by telemetry or something else. We could create a key using the unique stamp time, like this. So we could say APPEND series, and we can use the current unique time stamp; which we know is a number similar to this. And then let's say we add a four digit number here, and then we do it again here, and then one more time here, and finally something like here. Now, the point of this is imagining that these four numbers came at the exact same time, concurrently, from different sources. Now, you could calculate how many values, for instance, you have with the STRLEN command at one given point series. And then just using this command. Now you have 16, but if you divide it by the fixed length of your numbers, which you already know is four, and you know you have four numbers, four values inside the series.
>
> **[4:45](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=285)** Obviously, if you do a 'Get' for the key you get a full string. But, you can play around with these values in this sense to extend the functionality of a very simple string key that we saw before. Something else you could have done is get one or more of the values by using the GETRANGE command, which allows you to get a portion of a string using a zero based index. So, let me also show you how that would work. For instance, if we wanted to get the first value we know it has a length of four, and we know it's a zero-based index. We can do a 'Get' range command and specify the key with the timestamp that we were using so far. And say the start is 'zero' because we know it's a zero-based index that we're using. And then three, because these are the four first characters of our string. And we'll get 0024, which is the first value that we inserted here as well. I encourage you to review the Redis documentation for these commands because you'll see more use cases for them, and you'll find out more ways to deal with strings as well. There are more functions in the documentation of Redis that the ones we've seen so far. Now, for the basics there are three things that you need to remember. You can increment and decrement values of a specific key as if they were integers with the INCR and the DECR command
>
> **[6:20](https://www.linkedin.com/learning/redis-essential-training-15012713/playing-around-with-strings?u=76281980&t=380)** and their variations, the INCRBY and the DECRBY. You can also calculate the length of a string using the STRLEN command. And finally, you can append two strings together with the APPEND command. Again, check out the documentation. There are a lot more things that you can do with strings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (5)
> **Env Vars:** append (6), strlen (5), incr (4), decr (3), decrby (3)
> **Analogies:** for instance (2), such as (1), imagine (1), similar to (1)
> **Documentation:** the documentation (2)
> **CLI Commands:** find (1)
> **API Endpoints:** get  (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)


### 2. Representing Complex Data Structures: Hashes

[↑ Back to Table of Contents](#table-of-contents)

#### [What are hashes?](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/what-are-hashes?u=76281980&t=0)** - [Narrator] A HashMap is a very common data structure in [Software Development](../../Topics/Software%20Development.md) and in [Redis](../../Skills/Software%20Development/Redis.md) the same concept applies. We're talking about a map where each key maps to a single value. If you think about it, Redis is a big HashMap in memory and we're also given the ability to use a smaller version of it to control what data gets saved within the logical structure of a single entity. In other words, you can store multiple properties inside the same map, which makes it the best data type to represent complex structures, commonly known as objects. Essentially, if you're wondering how to save a user or a shopping cart or any entity that have more than a single property, then HashMaps, they are the answer to it. Keep in mind that Redis has optimized HashMaps to the point where they can store up to four billion properties inside a single map. This is not to say you should use them like that but that you might also think about them for other use cases that representing your logged in user or your active shopping cart. HashMaps can deal with anything really.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (3), [Software Development](../../Topics/Software%20Development.md) (1)
> **Definitions:** is a  (2), in other words (1), known as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Writing and reading from hashes](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=0)** - Interacting with hash maps is almost as easy as you need with plain keys. But instead of going with GET and SET I'm going to go with HGET and HSET. Imagine we're trying to get the information from a logged user in memory for easy access. We don't mind losing this version of the data because it's really stored somewhere else and we can quickly restore it. So it's a perfect use case. What data do we need to keep in memory then? We're going to need the user ID so we can quickly get the right data from memory. We're going to need the user's name. We're going to need the user's avatar URL and the user's role. That should be more than enough. All right, so we can save this data using a hash map like this, just the HSET command. And then the hash maps key in my case will be logged user 123 and 123 being my user id. Could be anything here really. And then I'll start adding the attributes and the values inside them. My name, my avatar URL, and finally my role. And that's it. As you can see, the data is saved within the hash map. It is definitely not a pre-format to save the data but it's all stored within the same key: logged user column 123. So now pay special attention to the key.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=95)** If you're coming from the relation of work, you would've used the user ID as a primary key inside the entity itself. You'd saved that data inside the entity but we're not in a relation of work and we don't have the concept of a table. However, when starting the data that way we can access it quickly because we know that our locked in users will be storing keys starting with locked user column and using their ID, We can read the data like this. We can use the HGET command, the logged user, colon, ID. And we can ask for the name. And we get Fernando, my name. Right! and if we stick to the relation of work comparison that will be the equivalent of doing the SELECT name FROM the table logged users, where the ID is my user ID which in this case is 123. Keep this trick in mind because we'll be using it throughout the course and we'll go into more details in future video, So don't worry about it. So what happens if you want to read more than one key, from the hash map? Because we just use the HGET command, but it only allows you to get a single property of the hash map. Instead, we're going to be using the HMGET command which will allow you to get as many keys as you want using the syntax shown there using the HMGET keyword, the key name for the hash map and then specifying the names of the properties that you want to extract.
>
> **[3:08](https://www.linkedin.com/learning/redis-essential-training-15012713/writing-and-reading-from-hashes?u=76281980&t=188)** I'm going to show you with a simple example. Now, let's say we want to get the name and the avatar URL, we can do a HMGET, specify the same key and now I ask for the name and the avatar URL and you see here that I can get it easily. Hash maps allow you to save some pretty interesting structure. So let's take a look at a more complex use case.

> [!info]- Semantic Content
>
> **Env Vars:** url (4), hget (3), hmget (3), hset (2), set (1)
> **API Endpoints:** get  (1)
> **SQL:** select (1)
> **Analogies:** imagine (1)
> **Speakers:** - interacting (1)

#### [Exploring hashes](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=0)** - [Instructor] Let's now play with another practical use case. Let's say we're storing the current shopping cart of our users inside [Redis](../../Skills/Software%20Development/Redis.md). This is a great use case because we're dealing with data that is ephemeral. We might lose it any moment and we wouldn't really mind that much. I mean, our users would, but it wouldn't be the end of the world. It's something that needs to be accessed fast and potentially updated often. So what data do we need to keep in memory? We're going to need the user ID, obviously, so we can quickly read the right cart data, at least the [products](../../Skills/Software%20Development/Microsoft%20Products.md). And for each product, we might want to know the ID of the product, the name, so we don't have to go query from the database every time, each price for the same reason and the amount we want of each. Now, the description says that our products are a list, but we can't really store a list inside a hashmap. Redis won't let us do that. So what do we do? Remember the trick about the key name and the ID I told you about before, well check this out. I'm going to use the HSET command to create a new cart and add data into it. I'm going to name it cart colon 123. Just look at the naming conventions I'm going to use and we'll review them later. Prod one, name, oranges. Prod one, price, 23. Prod one, amount, just one.
>
> **[1:40](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=100)** Then prod two, name, apples. Prod two, price, three 40. And prod two, amount, four. That's it. We created a hashmap and we created the shopping cart. Now again, I'm putting here one orange and four apples into our cart. And I've represented complex [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), meaning our product, through the key plus ID trick. In fact, I here, I went a little bit farther and I also added the use of key plus ID plus property. See how I use the, I added the amount, the price, and the name related to a specific ID inside the hashmap. So what can we do with this? Let me show you. Now, let's say that we want to add three more oranges to the cart. How do we do that? So we have the HINCRBY command and we can specify the cart, specifically, our cart, and then say, product one amount three. And we didn't update of the key amount inside the cart, we increased it.
>
> **[3:13](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=193)** So actually, yeah, we did update it, but not to three but increased by three. So we actually have four oranges now in our cart. What if we want to get a list of all products in the cart? Sure, we can do that with the HGETALL command and specifying the cart again. And here we go. We have oranges and apples and we have all the properties for each one. Finally, do you want to know how many products you have inside the cart? You can use the HLEN and the cart name key. We have six now. Divide the number by the number of fields that you know you have for each product. In our case, that will be three fields. So we get as a result two, that is two types of products. And if you add up the product amount properties you know how many in total you have. There is a lot you can do with hashes. So using these commands and using these type of data structure. Right, so to close the topic on hashes, remember hashmaps let you represent complex objects inside Redis, not just key names. Very simple strings. We actually, here, represented objects that have three properties of different types. You can do a lot with a key plus ID and a key plus ID plus property trick inside a hashmap. And we're going to be seeing more of that in the future.
>
> **[4:49](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-hashes?u=76281980&t=289)** And finally, remember that the HGET and the HSET commands will let you get and set values on the hashmap.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [Redis](../../Skills/Software%20Development/Redis.md) (3), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Env Vars:** hset (2), hincrby (1), hgetall (1), hlen (1), hget (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 3. Lists and Sets in Redis

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to lists](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=0)** - [Instructor] The list is one of those data types that once you learn about them, you'll always be trying to use them. And don't get me wrong, there is barely anything special about lists but that's exactly what makes them great, they're simple. Lists are nothing but a collection of strings. Given how they're internally structured, they're very efficient at adding and removing data from both ends. You see, lists are implemented using the doubly linked list data structure, meaning that every element inside the list, quote unquote, knows about the previous and the next element. It also means that a list has a direct reference to both the first and the last node inside the list. And here you see a very basic representation of what one of these lists looks like. This is a great data structure because it allows you to quickly interact with elements at either end without having to traverse the entire list to get to one of them. And even if you're not interacting with the ends, updating references to the lead or insert a new node between two others can be done very fast. Here I'm graphically showing what that looks like and all you have to do is update references for the surrounding nodes and that's it. That means that you could have millions of items inside a single list, and as long as you're either inserting or removing elements from either end, you can do so in nearly constant time, that's fantastic. Granted, if you do want to use elements in the middle of the list, then you'll have to deal with a big ON time complexity, meaning that the process will have to go through
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-lists?u=76281980&t=94)** all previous elements until you get into the one you want to deal with, the nth plus one element.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** node (2)
> **Speakers:** - [instructor] (1)

#### [Understanding the pop and push mechanics](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=0)** - [Instructor] One measure mechanism used with lists and list-based data types is the Pop and Push mechanism. These two words will either appear as part of the command name that you're going to be using or inside the documentation many times. So it's important to understand them very well. When dealing with lists, popping an element out of it means getting it out from either end. And pushing an element means the opposite. It means adding an element on the list, also on either end of it. Remember, here the key is to understand that we're dealing with the ends, either the head or the tail of the list. Because as I already mentioned, these are the best places to read or write data, at least, you know, within [Redis](../../Skills/Software%20Development/Redis.md). So let's take a quick look at how we can perform these operations. If we want to push data, we have the LPUSH and the RPUSH commands. Meaning left push and right push. In other words, add to the head or to the tail of the list. If you want to pop data, well, you probably guess it, but we have the LPOP and the RPOP commands to also either pop from the head or from the tail of the list. Let's take a quick look at these commands. Pushing an element is as easy as in lpush. The name of the list, in my case, I'm going to be using MYLIST. First element, second element,
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=95)** and let's call it final element. And that's it, I have it on my list. I can then say LPOP. MYLIST, and I will get final element. Why did I get final element if I push them on this order, first being the first one? Let me show you. Now, as you saw, the order of insertion and the place you insert them into matters quite a lot in Redis. Look at this scenario. These three elements pushed into the head of the list, in order from left to right, will make the final element, you know, the, quote/unquote, "final element," be the one that ends up being the first one in the resulted list. The list will look like this: final element, second element, and first element. Because when you insert the first one, is the first one into the list. But the second one, since you're inserting them on the left, from left to right, becomes the new first one. And the final element being the last one inserted into the head will become the new first one, leaving the first element to be the last one. It's a bit of a tongue twister, but you can see it here. If you were looking for the opposite result, you should have used RPUSH instead. Because with the same list of elements inserted in the same order, from left to right, but on the tail of the list, the result will look like this. You first insert the first element. And then the second one comes and gets inserted from the right, from the tail of the list,
>
> **[3:09](https://www.linkedin.com/learning/redis-essential-training-15012713/understanding-the-pop-and-push-mechanics?u=76281980&t=189)** so it becomes the new last one. And finally, you insert the final element, again, from the right, and that one becomes the final element. And you know, reading can be done one at a time, as I show you already, with LPOP and the name of the list. Or you can also pop many elements at the same time. So how do you do that? With LPOP and the name of the list, you pop just one element out of it. And if you specify a number after the name of the list, then you'll get all those elements from the list at once. Remember, popping an element out of the list means modifying the list. It doesn't just read the element, it also takes it out. So every time you pop an element either from the tail or the head, you're diminishing the number of elements inside the list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (2)
> **Env Vars:** lpop (4), rpush (2), mylist (2), lpush (1), rpop (1)
> **CLI Commands:** make (1)
> **Cross-References:** as you saw (1)
> **Documentation:** the documentation (1)
> **Definitions:** in other words (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Practical example: Building a queuing system with lists](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-queuing-system-with-lists?u=76281980&t=0)** - [Narrator] Let's practice some operations with lists by building something practical, a queuing system because everybody loves queuing up for something, right? Jokes aside, this system will let us perform the following actions. Add people into it, get people out of it, check who's queuing, let premium customers have the queue, no questions asked, and finally check who's the pour soul standing last at the end. Now remember when I say people we'll just be adding strings with names. We can't really create lists of anything else but we could potentially use their IDs and then through code hydrate that information into a more complex dataset through our database. But since we're dealing with only reds here we'll just stick to names. Another important aspect to determine is the type of queue that we're going to be using and building. Is this going to be a FIFO, meaning the first person in is the first person out? Or is it going to be a LIFO, meaning the last person in will be the first person out? This will determine the kind of POP and PUSH functions that we use. For a FIFO Queue, we will use RPUSH and LPOP so the order of insertion will be kept correct and the retrieval of these values would make sense, since the first element put into a list will be the first one to be popped out. For a LIFO Queue instead, we could use the LPUSH and LPOP so the last person to come in will be the first person to be received. This will make the first person to arrive very mad so we'll avoid this mechanism for now.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (2), lifo (2), lpop (2), pop (1), push (1)
> **CLI Commands:** make (2)
> **Speakers:** - [narrator] (1)

#### [Adding people to the queue](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/adding-people-to-the-queue?u=76281980&t=0)** - [Narrator] Let's populate our list with the name of the people trying to get to us for some reason. Now, depending on whether they're all here at the start of our shift when we open up the doors, or if they come one-by-one, we could potentially push them all together, like we've seen, or just one-by-one with a single push per person. But let's mix it up a bit. Let's do both. Let's assume we have three people at the door at the moment we open up and then the last two come one after the other. That translates to doing RPUSH thequeue, which is going to be my list, and then adding the names. So we have Carol Shaw, Elizabeth Carr, and finally Ernest Ramos. Those were all the people who were there when we opened up the doors. And then we'll just add thequeue, Jane Carter, and finally, Martha Cooper decided to show up as well. And that's it. Our queue is set. Everyone is inside. So let's continue with the example.

> [!info]- Semantic Content
>
> **Env Vars:** rpush (1)
> **Speakers:** - [narrator] (1)

#### [Getting people out of the queue](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/getting-people-out-of-the-queue?u=76281980&t=0)** - [Instructor] Let's start now serving our clients. As you can probably imagine, we're going to do that one by one. I know we need each as one command. We've already seen it, it's the LPOP command. Every time we use it, we'll get one new name from the head or the tail. We'll just use the LPOP and the name of the queue, as we've already seen, the queue. And we get Carol Shaw. If I keep doing it, I'll get Elizabeth Carr, Ernest Ramos, Jane Carter, and so on until there is no one else to serve in the queue, and then I will get a nil. The queue will still be there, but it will be empty, so we get nil as our response.

> [!info]- Semantic Content
>
> **Env Vars:** lpop (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Checking who's there](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=0)** - [Instructor] Now, let's assume you want to inspect the queue to see who's where. You can really pop your way through it because as you've seen, you'll take them all out of it. You need a way to inspect the list without affecting it. Let's look at that. And that's where the LRANGE command comes in. Look at the following example. Specify the queue, say zero two. What do you think this command will return? It returns the first three elements of the queue without taking the map out of it. But why the first three? Let's look at that. The ranges that we saw, zero and two, they're zero based which means zero is the first element and two is the third one. So LRANGE Command allows you to return the elements within a section of a list, and that section is determined by the ranges we provide. And most importantly, it doesn't affect the list. Now, an interesting detail about these ranges is that you can use negative values and they're considered to be started at the end of the list. So you could write something like LRANGE, thequeue, zero and one, and that will go from the first element, the zero element up to the minus one, which is, if you start at the end of the list,
>
> **[1:33](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-there?u=76281980&t=93)** the last element and that is what you get. The full list of people in the queue without knowing actually how many people are there because you just specify minus one which is key to the last one no matter how many elements in the list are there.

> [!info]- Semantic Content
>
> **Env Vars:** lrange (3)
> **Speakers:** - [instructor] (1)

#### [Putting someone in the middle](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=0)** - [Narrator] Let's pretend now that you want to implement a "premium customer system" where even if they arrive late they can go right into the middle of the queue. Right now, the line looks like this. Which have Carol, Elizabeth, Ernest, Jane and Martha being last. And you want your premium customer Patricia Fox to be right after Ernest. Look for you, we have the LINSERT command. The good thing about this command is that unlike inserting a value into an array using an index where you simply replace the previous value if there was any at that index, with LINSERT, you can decide if you want to insert it after or before the actual index. So you're adding to the list just like when you push a value into it. The other small detail is that instead of working with indexes, LINSERT works with values. So let's see how you would insert Patricia right after Ernest following this logic. Right, so now we can just use the LINSERT command, specify the queue. In our case, that's the name. Then say if you want it before or after. In our case, that's after. Then the people value, which is the name or rather the value that we're looking for. In our case, that's Ernest Ramos. And now finally, the element which is the new value that we're entering. In our case, Patricia Fox. And we've inserted the new value into the list.
>
> **[1:36](https://www.linkedin.com/learning/redis-essential-training-15012713/putting-someone-in-the-middle?u=76281980&t=96)** We have six elements, as you can see there. And if we do, again, the same trick with the LRANGE and the minus one, we can see the queue. You can see that Patricia Fox is now number four right after Ernest without removing or replacing any value previously in the list. One more detail though, leaving the queue example for a second, this command will add the value either before or after the string you pass. We saw that, but only the first instance of that string, that pivotal string. If the string is repeated, which is completely possible inside a list, then you'd only be inserting the new value next to the first instance of that string. Remember that. Now, let's go back to the example.

> [!info]- Semantic Content
>
> **Env Vars:** linsert (4), lrange (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Checking who's the last one in the queue](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=0)** - [Instructor] The last thing I want to show you is how to get the last and the first element of the queue without popping them out. Yes, it's going to be using LRANGE again but you'll have to play around with the ranges. Let me show you. Getting the head of the list is simple. You use LRANGE, then the name of the list and then zero zero as indexes. This command will show you the first element without taking it out using zero as a starting range and zero as the ending range. But how do you get the last element? If you know the size of the list, it's much easier. And you can get the size with something like LLEN and the name of the list. In our case, it will return six. So with that in mind, you can use five as an index for the LRANGE. As you can see here, LRANGE, name of the list, and five, five will return the sixth element of that list. So remember, indexes are zero based and they're inclusive. Meaning that if you only want one value, you need to specify a range of length zero. In other words, you have to use the same index twice. That is why we use zero, zero and that we use five, five for the last one. But what if you don't know the length and you want to avoid using two commands for something this simple? Then you can play around with negative indexes and start counting from the end of the list, like you see on the screen. We're again repeating the index to make sure that only one element gets returned. And because we're using minus one,
>
> **[1:33](https://www.linkedin.com/learning/redis-essential-training-15012713/checking-who-s-the-last-one-in-the-queue?u=76281980&t=93)** we're starting to count at the end. So we're specifying the last element no matter how many elements are there. And to show you how that would work, let me show you just with our example. Minus one, minus one, that would give us Martha Cooper which is of the last element from the queue.

> [!info]- Semantic Content
>
> **Env Vars:** lrange (4), llen (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing the solution: Problems with repeated members](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/analyzing-the-solution-problems-with-repeated-members?u=76281980&t=0)** - [Instructor] Let's step away from the example for a second. The solution works. We have our queuing system and we can even implement a premium customer system that allows them to cut half the line. However, there is one big flaw. From the thing point of view. At least we can keep pushing the same name into the list over and over again and the system will do nothing about it. In fact, we'll have to double check ourselves before adding a name into the list to make sure that it was not already there. Mind you, this is not an issue with our business logic. It's just how list work there's no mechanism preventing them from adding duplicated content. So in summary, you can decide how data gets in and out of the list through the pop and push mechanism. You can rate data without affecting the list with the LRANGE command and you can absolutely add duplicate content into a list if you choose to do it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** lrange (1)
> **Speakers:** - [instructor] (1)

#### [Sets compared to lists](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/sets-compared-to-lists?u=76281980&t=0)** - [Instructor] Preventing duplicates in list can be difficult, or at least it will require extra work. This is why we have sets in [Redis](../../Skills/Software%20Development/Redis.md). Examples like the one we just ran are not meant to be built with lists, simply because of the possibility of accidentally adding duplicated content in them, and messing up your whole logic. Sets are like lists but with the added bonus of not allowing duplicated content inside them. Actually, maybe saying that they're like list is overstretch. They do allow to keep a group of elements inside a container but that's about where all the similarities end. There are some major differences with lists. There's only pushing at the end of a set, for instance, through the SA command. The POP command only pulls random elements out of the set, so it wouldn't work exactly like we want it to work for our use case. Instead of removing the element with POP, you can remove elements from the set with SREM. And finally, elements aren't sorted in any way. The set is a non order group of elements. Let's now take a look at how our current example would change if we use sets instead of leads to implement it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **Env Vars:** pop (2), srem (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Running a queuing example using sets](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=0)** - Let's recap, the queuing system needs to let us add people one by one or altogether. Let us get people out one by one and let our premium customers cut the line. However, as we are about to see, given how sets are in order the last one will not be possible exactly in the same way. So to add people to our queue, it's very easy. We use the SADD command, specify the name of the queue as before, and then the names. Carol Shaw, Elizabeth Carr, and Ernest Ramos. And if we want to add them one by one we also do the same; Jane Carter and Martha Cooper.
>
> **[0:53](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=53)** And that's it, we have everyone on the queue. Now keep in mind, if you try to add Elizabeth Carr again to the queue, nothing will happen, right? So we simply ignore that command and your set won't be affected at all. Now the order of insertion here doesn't matter like it did with the lists, because there is no order essentially. We'll look into using shorter sets which are in ordered, in a feature video but for now it's simply add people in. Instead of using LRANGE to look at the list without affecting it, we can use the SMEMBERS command which will yield a result like you see on the screen. And now instead of using a FIFA approach we can just pick whoever we want to serve first which is you think about it, it is like implementing the premium customer feature from before. Let's say we decide to serve Carol Shaw first. We can just remove Carol from the set like this.
>
> **[1:59](https://www.linkedin.com/learning/redis-essential-training-15012713/running-a-queuing-example-using-sets?u=76281980&t=119)** And as you can see, we get a one, meaning success from ready's. And if we try to review the list of members from the queue using the SMEMBERS command, we can see that Carol is no longer there. And that's it. We can't really check who's last on the queue because that now is up to us. We decide who gets served first and not the commands. So to summarize: sets are very useful structures that simplify the task of keeping track of elements that are not generated by you. Because you're a hundred percent sure that no matter who sends the information you're only going to have one of each inside your set.

> [!info]- Semantic Content
>
> **Env Vars:** smembers (2), sadd (1), lrange (1), fifa (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - let (1)


### 4. Sorted Sets

[↑ Back to Table of Contents](#table-of-contents)

#### [Explaining what a sorted set is](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/explaining-what-a-sorted-set-is?u=76281980&t=0)** - [Narrator] Sorted sets are just like sets in the sense that they don't allow duplicate content either. However, they had one feature we were missing from sets for our queuing system example, order. That means the elements inside a sorted set have a predefined order. The interesting bit about it is that unlike lists, which also have order, the position of the elements is not given by the order of insertion but rather by the value we give them when inserting them. When lists only allow you to insert strings, sorted sets will let you add strings and a value that will be used for the sorting. And on top of that, we can edit the value later and the set will sort itself out for you. So that's also quite neat. So we can implement things like priority cues, where certain value is the priority of the element. We can also implement leaderboard systems around sorted sets and task scheduling systems. So let's see how we could implement a leaderboard next.

> [!info]- Semantic Content
>
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Leader board example using a sorted set](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=0)** - We're going to be building a leaderboard, and what is that exactly? It's simply a list of players sorted by points. The ones who have the most points are at the top and the ones who have the least points are at the bottom. Simple. So why would we want to use a sorted set for this? We could easily build it with a list. However, as we all know, the list will only let us store the names, not the points, and most importantly, we will not be able to sort them by any value. So, sorted sets it is. So what do we need then? We need to know how to add data to the leaderboard, how to sort it by points, how to query the leaderboard to know who's where, and most importantly, how to update the points and re-sort the list. The good part about sorted sets is that sorting comes naturally. We won't have to do anything other than providing the values and the points. That's it. So let's now add some players to a leaderboard. We'll create one that looks like this with Sandra, Nicholas, Cheryl, Doris, and Brian at the bottom with 100 points. We can create this leaderboard with the ZADD command simply specifying the keyword ZADD and then the key name for the leaderboard. In our case, we'll call it leaderboard and then the points are actually the sorting value that we're going to be using and then the actual value that we want to add to the sorted sets. In our case, it's going to be the names. We add Sandra Ortiz with 1000 points. Then with 860 Nicholas. Then we'll add with 600 points
>
> **[1:45](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=105)** to Cheryl Robinson and finally with 100 points, Brian McDonald. And now the leaderboard is created and all players are inside it so let's go back to the presentation. One thing to notice, though, is the order of insertion. Notice how I specifically inserted all players with no pre-established criteria. So their points were not in ascending or descending order. That we just randomly chose them. Let's see what happens now when we try to query the leaderboard with the ZRANGE command. Notice that the ZRANGE command is very similar in syntax to the LRANGE that we saw earlier. We'll specify the name of the leaderboard and then the ranges. In our case, we'll query the whole thing so 0 5 and now you can see that the players are already sorted. The sorted set actually sorted all values by points. So you can see now that all players are here but they are already sorted in an ascending order. That is because that is the full query criteria for the ZRANGE command. If you wanted to query them with having the player with the most points at the top, which is actually what we want for a leaderboard, we need to use the ZREVRANGE command which is the opposite to the ZRANGE command. We can use it exactly in the same way and with the same range.
>
> **[3:20](https://www.linkedin.com/learning/redis-essential-training-15012713/leader-board-example-using-a-sorted-set?u=76281980&t=200)** And now you can see that the leaderboard the result for the leaderboard is the one we intended with Sandra at the top and Brian McDonald with 100 points at the bottom. What if our players earn more points? Let's update their score now and see what happens. Let's pretend that Nicholas just earned 300 points and we can update his points with one single line. And now to update a value, a sorting value inside a sorted set. we'll use the ZINCRBY command. Notice how we're still following a similar syntax for the command names. As before, we're just preparing it with a Z to reference that we affecting a sorted set. We'll put the name of our leaderboard here. There we go. And then how many points of increment we want. In our case, 300 and the member, which is going to be Nicholas Clark. And you can see the result is returned so you already know how many points does Nicholas have and if we check to to make sure that everything worked correctly with ZREVRANGE command, like before, we'll see that now Nicholas, is at the top of the leaderboard. As you can see, sorted sets simplify your work because we don't have to worry about whether we're trying to insert a repeated value. They're sets, after all, and how to sort the members of the set [Redis](../../Skills/Software%20Development/Redis.md) does that for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **Env Vars:** zrange (4), zadd (2), zrevrange (2), lrange (1), zincrby (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - we (1)


### 5. Key Naming Strategies

[↑ Back to Table of Contents](#table-of-contents)

#### [Comparing Redis to relational databases](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/comparing-redis-to-relational-databases?u=76281980&t=0)** - [Instructor] As I mentioned earlier, [Redis](../../Skills/Software%20Development/Redis.md) is not a relational database nor does it share any of the core concepts of our relational database. We don't deal with tables or properties, or even primary or foreign keys. There is no way or no mechanism within Redis for us to natively relate records in any way. Where with a [SQL](../../Skills/Data%20Science/SQL.md) database, you'd have something like this. With Redis, instead, you have something like this. Don't let the names fool you. Those are all individual keys that share the same route in the names, but that's as far as we can get when it comes to similarities. When it comes to saving data, Redis only lets you define a single key and a value for that key. That's all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Relating keys to each other](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/relating-keys-to-each-other?u=76281980&t=0)** - So can we really relate records inside [Redis](../../Skills/Software%20Development/Redis.md)? The answer is yes and well, no. It's a no because there is no built in way for us to relay records to each other like we do with a [SQL](../../Skills/Data%20Science/SQL.md) database. We covered that part already. However, it's also a yes, because we can work around those limitations by playing around with naming conventions. We saw this trick already but let's look at it in more detail. You can preestablish a naming convention with your keys. Something like collection name underscore id of the element equals the main value of the element. That way you can quickly access the value of an element if you know it's ID, which let's be honest you usually do. When dealing with SQL [Databases](../../Skills/Software%20Development/Databases.md), all you care about is the ID of entities. Once you have that, you can get any information you want. We're following the same concept here, but since we don't have the luxury of a single table per entity type, we have to group our keys logically with smart naming conventions. Instead of storing users inside the user's table, you can have keys starting with the string users underscore, so the user with ID 1 will be stored in the key "users_1" and you can read it with a single command, GET users_1. Following on the SQL analogy, that will be like running a SQL query by ID. You have a very optimized way of accessing the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Redis](../../Skills/Software%20Development/Redis.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (4)
> **API Endpoints:** get  (1)
> **Cross-References:** we covered (1)
> **Speakers:** - so (1)

#### [Representing multi-key models](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=0)** - [Instructor] What if you have a data model that is more complex than an ID and a value, because let's face it in a real world scenario models will contain many more properties. Something as simple as a customer record could include properties like name, address, phone number, any other identifying information like here, Doris's record has an ID, a name, an address, and an email address. So the same naming conventions apply only with maybe a little bit more complex. You have the collection name _ the element ID underscore the property name = the value of the property. So if you had, for example, the name and the address of your users store within [Redis](../../Skills/Software%20Development/Redis.md) you could do something like this users _ the actual user id and then _ the name or the address. But let's no stop there. What if we have related models? What if our address has a different properties like street name and city and country on which to store that data, we'll be using two different sets of keys. The addresses set which would start by the street addresses _ then the address id and then the name of the property, street name, city or country, and then the set of user keys, which would start with the users _ string and then the user id, and then the name _ address, which will only reference the address id. We will have to run two queries to get the user's address
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/representing-multi-key-models?u=76281980&t=94)** one to get the ID of the address and one to read the actual data, or actually three if you got three different keys for each other's property. Or we could potentially simplify that using this naming combination. You'll have everything inside the users set of keys that start with string users _ and the user id and then already the address key for all of them, and then the property of the address, city, street, name and country. This could save you one query but it would couple the address model to your user's model, so you will not be able to share the same address record with other user records like you know, a family living inside the same house. You have to replicate those values for each family member. Since there is no standard, you can pretty much come up with your own name and combination. The important thing is that it should give you the ability to create your desired data model and query it in an optimized fashion. That's all you have to remember.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Beyond Data Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [What else can you do with Redis?](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/what-else-can-you-do-with-redis?u=76281980&t=0)** - [Narrator] [Redis](../../Skills/Software%20Development/Redis.md) is a lot more than just a database. In fact, some of the most interesting use cases for Redis are not related to [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) at all. I'm talking about Redis' ability to function as a message bus. A message bus is a messaging infrastructure that allows multiple systems to communicate with each other asynchronously. While it might sound like an unrelated feature, being able to distribute data between the producer and the consumer is not far from being able to store the data a producer makes. So don't be shocked. The most important thing to know about message buses right now is that they follow a very similar architectural paradigm. The bus will always be in the middle, between the producer and the consumers. A producer is an entity creating data and pushing into the bus, and a consumer is an entity reading data off of the bus. You might find situations where the data is persisted inside the bus for a while, in case there are no consumers interested in it, and others where data is simply distributed blindly by the bus, and if there is no one on the other side to consume it, then it simply gets lost. These are both common patterns for massive passes and their differences give you a lot of flexibility when it comes to defining your architecture. You can see here as to, what are we going to be seeing next, based on the type of message bus that we're going to be hitting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (3), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1)
> **Definitions:** is a  (2), is an  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Exploring Pub/Sub](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=0)** - [Instructor] Let's first talk about Pub/Sub. Pub/Sub is a feature of [Redis](../../Skills/Software%20Development/Redis.md). And it was the first message bus that this database feature many, many years ago. Pub/Sub is very simple to use and you don't really have to do anything to set it up. It's also a very simple implementation of it that while it might work very fast, it's not super reliable. And let me explain why that is. Pub/Sub functions under the fire-and-forget mechanism. Meaning that the data producer will push data into the bus and forget about it. Whether the data reach the consumer or not, it's irrelevant. And from the consumer point of view, they will only receive data if that data was produced after they connect it to the bus and started listening for it. Any information produced before that would not exist for them. In other words, it's a great [Real-Time](../../Skills/Database%20Management/Real-Time.md) solution because it's lightweight and easy to use. However, if you're not able to ensure the stability of your consumers, you might lose some data. If you're a producer all you have to do is use the PUBLISH command. Like this using the PUBLISH with a key name, which is going to be the channel name. And then a string, which is going to be the message that you're going to publish. And if you're a consumer, you have to first subscribe to a channel with a SUBSCRIBE command and use the channel name, which is the key that we used before. You can subscribe to multiple channels at the same time and you'll be notified when data is published in any of them.
>
> **[1:35](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-pub-sub?u=76281980&t=95)** You'll receive that data as it is published into a channel. Let me show you how that works. Here, I have two terminal [Windows](../../Glossary/Service/Windows.md) because I'm going to be using one as a consumer and one as a producer. First, the consumer is going to subscribe to a channel, which I'm going to call it notifications and it's going to start there. It's called, it says that it's "Reading messages" and it's going to stay that way until I press Control + C to quit it. Now, on the other terminal window, I'm going to pretend I'm a producer and I'm going to publish a message to that channel, which we call notifications. And I'm going to just say, "it's time to learn Redis". And as you can see immediately on the left window, I got a message on the channel notifications. And the third value is the actual message that I sent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** publish (2), subscribe (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### [Exploring streams: Adding data](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=0)** - Let's now talk about streams. Streams are a very powerful and versatile data type. They're not a separate feature like Pub/Sub. However, we should always remember that in tech, power and versatility come with a price: complexity. And streams are no exception to this rule. The easiest way to think about streams is to think about log files since that's what they were modeled after. With log files, you usually add log lines to the end of them. You have a timestamp per line to easily find logs within a range of time. You use the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) tail command to wait for new logs to appear when you're inspecting the log files. And you don't usually remove log lines from the file. You can use these files in other ways, but the most common use cases are these. And the same holds true for streams. They are an append-only data type that lets you query them in multiple ways, and persist the data that gets added into them. Unless you specifically remove a record from the stream, it'll always be there. Let's start with the appending data, which is the easiest operation. To append data to the end of a stream, you simply use the XADD command like you see here. You will specify a key, an ID, and then a set of key values. And let me break it up a bit, because there is a little drawback here. The key is the name of the key where you're going to store the stream. This is like any other key that we've used so far in [Redis](../../Skills/Software%20Development/Redis.md). The ID is the ID of the data you're entering into a stream.
>
> **[1:37](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=97)** You'll usually use an asterisk here, meaning that Redis will auto-generate that ID for you. And the ID will be returned by the XADD command and it's going to be a unique timestamp followed by an auto-increment integer in case there is already a key with that timestamp in place. This is to avoid collision. And remember that we talked about log lines having, like, a timestamp inside the log file wall. This is going to be our timestamp. And then the final key value per bit is because you can enter a complex data structure into a stream. You're not just adding strings here. Think like adding lines of a CSV file. Each key is going to be the column name, and the value is going to be the actual value you enter. So let's say I'm creating a stream of events. So I'm just going to use the XADD command. Call it "myevents." Do the asterisk to let Redis generate the ID for me. And then I'm going to say the user is going to be Fernando. The event type is going to be left click. And the coordinate x is going to be 32, and the coordinate y is going to be 56. And I can do that many times. You can see that the timestamp was returned and the auto-increment number is zero. That's because I'm the only one entering these events at the same time. If I had multiple Redis clients entering,
>
> **[3:10](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-adding-data?u=76281980&t=190)** we could potentially have a collision, and in that case the auto-increment will take place and be incremented. I can add further events for my user. Say another type could be right click in a separate coordinate. And finally I could say that the same user had an event type scroll. Now notice how this event doesn't have a coordinate x and y. That's because we don't really deal with schemas here like we would use in a [SQL](../../Skills/Data%20Science/SQL.md) database. This is just a schema-less environment. And so remember, streams are always going to store the data. They're a data type, not a separate feature. And most importantly, they're very similar to log files. So if you need to think about it in a way to reason how streams work, think about log files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** xadd (3), csv (1), sql (1)
> **CLI Commands:** find (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - let (1)

#### [Exploring streams: Reading data](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=0)** - [Instructor] Let's now talk about reading data from a stream. That's where things get interesting, because there is not a single way for you to do this. It actually depends on your use case. Let's start by reading data by date range. Since the IDs or elements inside the stream are Unix time stamps, we can use the XRANGE command, and specify the starting and ending times of a range. You see the syntax of XRANGE is very similar to LRANGE, or CRANGE that we saw before, but the difference is that the starting, and ending values for the range, are UNIX timestamps in this case, instead of just single integers like before. The interesting bit about these values, these timestamps, is that we don't need to add the extra number added by varieties to our collisions So we can query a day range easily. Let's look at an example of that. So if I want to read all the values inside my screen, I can use the X range and say my events minus and plus and I get all of the data. The format is peculiar because we get a list of lists and that is due to the fact that for every result, we also get the ID of the result and the complex data saved inside the message. Also, notice how I use the minus and plus instead of actual time stamps. I cheated there a bit, but those are special values wild cards if you will indicating the minimal possible timestamp inside that stream with the minus and the maximum possible timestamp
>
> **[1:37](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=97)** with a plus sign. You can use this to query whenever you need. And because we never know exactly how many elements are between two consecutive timestamps due to the extra number added by [Redis](../../Skills/Software%20Development/Redis.md) 12 collisions we can optionally add the count attribute to our command to limit the number of elements that we get. Like you see on screen. So let me show you how that works with rights. I'm going to use a variation of the XRANGE command. The XREVRANGE, which as you know is the opposite of XRANGE. And I'm going to use the name on my stream and then plus minus count one and I'm going to get the last element of my stream because I'm using the reverse version of XRANGE. And so that is why I'm using the plus first and the minus second. And since I'm limiting to just one this will return the list of elements inside the stream sorted by day range in reverse order and just picking one element. So that translate to the last element in the stream. Now let's see how we can read data in real time. Essentially get notified whenever new data is added to the stream. You can subscribe to one or multiple streams
>
> **[3:10](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=190)** and get notified when new elements are appended to them. And this is similar to how Pub/Sub work in the sense that every element added will be broadcasted to every consumer connected. However, the main difference, is that those records will not be remote from the stream. The syntax is as follow, XREAD and then you have the COUNT and BLOCK properties, which are optional but you can use the first one to limit the number of results you get. And the second one will keep your client waiting until the new element is added. As for the last two properties, the key and the ID can be repeated as many times as you want because you can subscribe to multiple streams at once and you can specify the last ID read on each one of them. Connecting to a stream and specifying the last ID read by your client is effectively like simulating what would've been you connecting in the past, essentially. Let me tell you how that works. Okay, so I have two terminal [Windows](../../Glossary/Service/Windows.md) again because I'm going to show you what happens from the perspective of a consumer and of a producer. So if you want to subscribe to a stream and wait for the first element to be added you can use the following command, XREAD, BLOCK, zero STREAMS, my events and the dollar sign, and that's it. And then I can add a value
>
> **[4:43](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=283)** to my stream with the XADD command we did before. And I can say my events user Fernando event_type scroll.
>
> **[4:55](https://www.linkedin.com/learning/redis-essential-training-15012713/exploring-streams-reading-data?u=76281980&t=295)** And you can see immediately on the other side on the other window, I get the stream name, the ID and the data I added. And because I didn't set it to block, it just dies there and stops waiting for new data to be added.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** xrange (5), xread (2), block (2), lrange (1), crange (1)
> **Code Identifiers:** event_type (1)
> **Tools:** terminal (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Example: Real-time message bus using Pub/Sub](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/example-real-time-message-bus-using-pub-sub?u=76281980&t=0)** - [Presenter] Let's now use Pub/Sub to create a [Real-Time](../../Skills/Database%20Management/Real-Time.md) message for us to see how that would work. I'm going to set up two clients that will act as the consumers, and one that will act as a producer. Right, here I have three [Windows](../../Glossary/Service/Windows.md) instead of two, because the bottom two will be my consumers, and the top one will be the producer. So, I'm going to simply subscribe to mybus in both of them. And then, on the top one, I'm going to publish to mybus, "this message." And immediately, the bottom two consumers get notified, and they see the message. It's that straightforward, because [Redis](../../Skills/Software%20Development/Redis.md) is already prepared for that. As you can see, the process is very straightforward, which is the great part of Pub/Sub. The downside, though, is like we already discussed. If we don't have any consumers set up, then the messages will be lost.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [presenter] (1)


### 7. Watching Keys for Updates

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to key-space notifications](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/introduction-to-key-space-notifications?u=76281980&t=0)** - [Instructor] Keyspace Notifications are probably my favorite feature of [Redis](../../Skills/Software%20Development/Redis.md), mostly because of all the potential that it has. They are the third way in which you can create a message bus-like structure, only in this case, the producer is going to be Redis itself. So, let me explain how that works. Keyspace Notifications allow you to subscribe to events that happens on keys like setting a value, removing a key, and so on. If you subscribe one of your clients to these notifications, you can know when data enters or leaves Redis. This opens up the door for some very interesting behaviors like timeout notifications, time-based actions, reactive architectures, and lots more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (3)
> **Speakers:** - [instructor] (1)

#### [Practical example: Building a session timeout feature](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/practical-example-building-a-session-timeout-feature?u=76281980&t=0)** - [Instructor] To show you that behavior, let's think of a practical use case. Let's figure out how to build a session timeout feature for a web application just using [Redis](../../Skills/Software%20Development/Redis.md). Let's assume we have a web application and we want to make sure that the user's session ends after a certain time. The workflow will be on every request, we should check if the user is logged in. If they are, then we'll check if the session is still valid. Once the session expires, we need to remove the user login flat and we can do all of these with Redis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Resolution](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=0)** - [Instructor] I'm going to show you the solution here, and then we'll break it up and understand exactly how it works. After the user logs in for the first time, we'll use the following query. SET logged_in_users. We'll use the ID 1234, for the user ID, and then we'll save essentially as a value, the timestamp of when that happened. And then we'll use the EX flag, and then we'll put 3,600 there. And then, whenever the user performs any other requests for the same query, essentially with an updated timestamp, we'll add the XX flag. And this is what we're going to be doing. Let me explain. So, this flag that we added, the XX flag, will make sure that we only update the key if it already exists, if it's already being created by [Redis](../../Skills/Software%20Development/Redis.md). Otherwise, it will return minus one. Remember that by default, Redis creates the key for us if it doesn't exist. So, if we don't add that exact flag, the command will always succeed, and we want it to fail at some point. So, are we done? This alone will be more than enough, but what if we also want to handle the notification of the timeout some other way? A proper solution will be to have
>
> **[1:33](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=93)** a separate time out notified service that subscribes to this particular event and is notified whenever this happens so we can handle it on our own. And let me show you how that would work. All right, so we have two terminals [Windows](../../Glossary/Service/Windows.md) again here. The top one has the Redis client all ready and the one on the bottom is just a hash because I need to start my Redis client with a specific set of parameters for it to know that it needs to subscribe to the expiration events, which are the ones that we're going to be looking at. So let me quickly call Redis client, the c-l-i, and then pass the CSV parameter with psubscribe, and then a pattern, which you don't really need to exactly understand what it means. Just know that if you put expired here, the Redis client will subscribe to that particular set of key space notification events. And now back to the example that we used before. If we set the logged_in_user value 1-2-3-4, for let's say whatever timestamp that we want, and then an E-X flag and set it to five. We set it to 3,600 because that is the number of seconds that this record is going to leave. For me to show you an example, I'm just going to set it to five and see what happens in five seconds while I speak. You notice that on the bottom screen,
>
> **[3:09](https://www.linkedin.com/learning/redis-essential-training-15012713/resolution?u=76281980&t=189)** the client received a notification, the expiration notification, of that particular key. Now, if you had this client inside your notification service, this client would've been notified and your bit alert could have been triggered to do whatever you needed for that particular event when the user session expired.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (6), [Windows](../../Glossary/Service/Windows.md) (1)
> **Code Identifiers:** logged_in_users (1), logged_in_user (1)
> **Env Vars:** set (1), csv (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Explanation overview](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=0)** - Let's now review the full solution because we covered it a lot in the previous video. The key to it is in SET command. First with the EX flag and then with the added XX flag. At, at the end of the command. We saw before that the SET command is capable of saving data into RAIDS. However, with the proper flags, it's also capable of telling it to out expire the keys after a certain amount of time. The EX flag does that. We're sending it to 3,600 seconds which is essentially an hour of timeout. The timeout on the key will trigger the removal of it from the database but it also triggers the key space notification which we'll be able to subscribe to. The XX flag that we added later makes sure that the default behavior for the SET command that is of creating the key, if it doesn't exist, is not used. This prevents us from having to check if the key exists before saving the timestamp of the user's activity. It essentially saves us [Redis](../../Skills/Software%20Development/Redis.md) query, which would still be very fast given Red's [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md). However, it simplifies our code and the logic quite a lot. We simply try to save the timestamp and if we get a minus one as a result then we know that it didn't work. And also we know why that is. And the icing on top of this cake that is the solution, are the notifications.
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/explanation-overview?u=76281980&t=94)** Thanks to them, We can expand our logic independently of the main data flow. If tomorrow we want to add a log event or maybe perform other complex logics around this particular exploration event we'll be able to do so thanks to the fact that Redis scan let us know when that key expires.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (2), [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1)
> **Env Vars:** set (3), raids (1), redis (1)
> **Cross-References:** we covered (1), previous video (1)
> **Speakers:** - let (1)


### 8. An introduction to Redis at Scale

[↑ Back to Table of Contents](#table-of-contents)

#### [What's missing for a production-ready architecture?](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=0)** - [Instructor] Alright, so before we close the course, you go about with the next step in your [Redis](../../Skills/Software%20Development/Redis.md) journey, let's try to think about what's missing from everything we've seen so far for you to take your Redis instance in production essentially. So what do we have so far? We have... What have we seen, what have we learned? We understand essentially what Redis is and what kind of use cases we can use it for, that's fantastic. We know the basic commands of Redis, and we know how to download and install Redis on a single computer. But the question now remains, is this enough for production? Is this going to be working correctly in a production environment? Now clearly this changes and varies, depending on what it means for you to be in production. Depending on the type of application that you're building and the type of traffic that you have. But internal terms for production, we sort of need two main things. We need in the context of Redis, we need Redis to scale, there is just too much data for it to fit within a single server. Or if there is just too much demand for the services that Redis is providing. It's just too much traffic, whether it is, it doesn't generate too much demand. The amount of active connections, the amount of active queries, they're just going to be limited if they're just inside a single server. So that is just one of the needs, the other,
>
> **[1:36](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=96)** we need Redis to withstand server problems essentially. Whether we have it on a single server or in multiple servers, we need to make sure that if something happens, if there are issues with those servers, then Redis is able to either repair itself or restart itself, or find another instance that is running that can act as the main server for us. So in other words, we need scaling. We need capacity and processing capabilities to grow based on the demand for them. We need high availability, right? We need for Redis to always remain available even if there are server issues. And we need partition tolerance, which is... This is a specific case where if you have set of nodes that are conforming some sort of cluster in the case of Redis and the connection between two nodes is severed to the point that now you have what, two or more instances of this cluster that are just not able to connect to each other, that's partitioning essentially. You need Redis to still be connected, to still be available, to still be working, right? We need Redis to somehow still process data, return information, and work without effecting the quality of the service to the standards that we set. There are two potential ways to solve or to get these things that we need for production.
>
> **[3:12](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=192)** We can use Cluster, we can use Redis cluster, which is essentially a way for us to distribute the data and the load between multiple servers that are connected to each other and ensuring that we never run out of capacity. That's the main thing because now the data is shattered and we're going to be looking into that in a minute, is essentially distributed between multiple servers and they all act as a single memory essentially. It's not just about duplicating the data, but it's also about distributing it in a way that each server provides their own memory into this database. As a practice increasing the amount of storage and also allowing us to remain highly available. Or we can use Redis Sentinel if instead of capacity, we just care about stability and we just care about the ability for it to always remain available, even in the face of server issues, then Redis Sentinel is an easier and very effective way of doing that. Both approaches have the same downside though, and that is just a part of the nature of how Redis works. That is a problem with... Or not a problem but rather the scenario of being eventually consistent. What that means is that whether you are working with Sentinel or a cluster of Redis nodes, if something happens, there might be a moment, period of time, where the data that one of the clients reads
>
> **[4:48](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=288)** is not exactly the same as the data that the other client reads. Two or more clients just, this is an example of a Redis cluster where two clients are querying the cluster from different sites after it's being partitioned essentially. Once the partitioning happens, whatever the client number one is saving into a cluster is not going to be available for client number two. Obviously, because there is no connectivity between both sides of the cluster. Now what Redis ensures is that eventually, once the connection between both parts of the cluster is reinstantiated then the cluster will become consistent again. So this is very common in [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md), some will sacrifice high availability or even partition tolerance to remain consistent. In the case of Redis, we cannot ensure 100% strong consistency so there might be... There might be scenarios where if a server goes down or network issue, momentary network issue, then the database as a whole will stay in a state of eventual consistency, which will eventually fit itself. And we don't have to do anything about it, it's just something that we need to be aware of. Now the question is, is there one better than the other? Is Sentinel better than cluster or cluster better than Sentinel? And we're going to be looking into more details in the following videos but you know, long story short,
>
> **[6:22](https://www.linkedin.com/learning/redis-essential-training-15012713/what-s-missing-for-a-production-ready-architecture?u=76281980&t=382)** no, there is no better one here. They focused slightly on different things, on different scenarios, different use cases. So the question for you is, which one is better based on your current context and your current needs? Based on that, you will be able to define which one's the better option for you. But either case, both will give you mostly what you need for a production ready instance of Redis. So remember, you need to be aware of both of them and pick the one that is best for your use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (23), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is a  (2), is an  (2), in other words (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** be aware (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [An introduction to Redis Cluster](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=0)** - [Instructor] Now let's take a look at what [Redis](../../Skills/Software%20Development/Redis.md) Cluster is in a little bit more detail. But remember that this video is not meant for you to use it as a full guide, just go on and set up your Cluster in production after watching this video. Rather, this is meant to be an introduction, and I invite you to go into [redis.io](https://redis.io) and check out the documentation for the Cluster mode to know more about it. Now, what is Redis Cluster? It's essentially a way for you to set up a cluster of Redis nodes. The interesting thing about this one is that you don't have to add any extra modules into Redis for it to work. Out of the box, it will be able to be set up as a cluster. It allows you to grow your storage outside of the memory of a single server. So if you have too much information, if you expect to have too much information for a single server, you'll set up a cluster of multiple nodes where each node will lend part of its memory to the storage capacity as a whole. So what do we get by doing this? We get elastic capacity, clearly. The node, or rather the clusters that itself will automatically arrange whether you add new nodes into a cluster or you remove them or they are removed by a server error, the great thing about the cluster is that it is, quote unquote, smart enough for it to arrange itself and pick a new master or choose the best setup, essentially, based on the current context.
>
> **[1:37](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=97)** It is also adding data sharding and data replication without you having to do anything, so you just set up the cluster and then you specify how much data replication you want. This data replication allows the cluster to remain highly available. So if some of the servers fail, you know that this information from those servers is still going to be replicated somewhere else in other servers. That means that the cluster will automatically arrange itself so that that replicated information is still available to clients. Data sharding means that the information that you store in the cluster is not stored within a single server and then that server is replicated, but rather, the information is distributed between different nodes based on the key, based on different [Algorithms](../../Skills/Software%20Development/Algorithms.md). But the point is, you're not always hitting the same server. You're not always like overloading the same server. The information is evenly, or as evenly as possible, distributed between all nodes. That is essentially what gives you that extra capacity of storage, which is also a incredible feature in my book. All of this happens transparently to the client. So client connectors, you know, libraries that are officially supported by Redis are already aware of this protocol, so they don't really have to do anything extra. If you go from a single instance of Redis into Cluster,
>
> **[3:11](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=191)** the client will still work perfectly. Now, the difference is that, instead of just hitting one server, it might need to be told which server to hit, but the interesting thing is that this cluster itself will tell the client where to go find specific piece of information, so you don't really have to do anything. You can see that here, this is somewhat oversimplified setup of a cluster. You can see the cluster nodes, here in the middle, and then on the right side, the light blue text shows what happens first. The client number two is essentially storing new data into a cluster, just getting one random node of the cluster, and that node is sharding information and sending it where it has to go. On the other side, on the left side, the dark green text is showing you what happens when another client, client number one, tries to query that same information that just got saved, but since they don't, you know, that client doesn't really know which node to hit first, it'll just pick a random one again, and that node will return the actual IP address or the actual network address of the node that has the information to the client and the client, they can then go back and do the same query but to the right node, essentially. This all happens very fast and transparently to the user, so you're not aware of anything. If at all, it just adds a few milliseconds because of the initial round trip,
>
> **[4:44](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=284)** but the important part is that this is a very small price to pay for that transparency that you gain, going from one, you know, from a single instance into a cluster. Now, I'm quickly going to show you how to set up a cluster on your local computer. Now this is just purely introduction and it's just a way for you to see how easy it is. Again, go into [redis.io](https://redis.io), check out the documentation, the full documentation to understand exactly what's happening behind the curtain if you will. All right, so in this setup, I have six terminals that are going to be my nodes on the cluster, if you will. And then I have another one that will be in charge of creating the cluster for us. They're all inside the same folder, the redis-cluster-test, as you can see, they all have, you know, I have six folders here, one for each one of these, and they all have this information, essentially. A redis.conf file that I will share it with you, has all these lines. The only line that is changing is the port. Each one will have a different port, as you just saw, that they can be initiating inside the same computer, and then just cluster-enabled yes, cluster-config-file. This file here is not one that you have to set up, but rather, one that Redis going to set for you. Once it knows about the different nodes of the cluster,
>
> **[6:19](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=379)** it will save information here, so you don't have to do anything. The timeout for the nodes in the cluster is to understand whether they are just a bit slow or they are actually out and need to be removed from the cluster, and the appendonly command here. So nothing out of the ordinary here. This is all more than enough. So what I'm going to do now is I'm going to set up the servers using this configuration. As you can see here, these are all starting as individual instances. Nothing. This is how you would instantiate your own servers. They all have the same initial set of messages.
>
> **[7:16](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=436)** All right, so these are all individual instances so far. Nothing really is connecting them. What I'm going to do now is I'm going to paste here the common line that will set everything for us. So essentially, we're saying that the Redis [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) should take care of this. It's going to receive the cluster flag and just the command, the create command. And we'll specify the individual instances, as I mentioned, that are involved in the cluster. And then I specify the cluster-replicas to be 1, meaning that for every node, one more node will have the same information. And by doing this, right, so trying to optimize slave allocation, and now this is just going to essentially tell me, are you sure that you want to do this? I'll say yes, and the cluster is being created. It actually already is. It just takes less than a second. And you can see that they're all now being synced with other replicas here, or just talking to each other for some reason. Now the cluster is ready. The cluster is set up. I don't have to run anything else. Now I just, before we close the video, let me show you what happens if I just were to kill one of these servers.
>
> **[8:49](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-cluster?u=76281980&t=529)** I'll say, I'll just kill 7003. And you can see that there is a connection problem here that the servers are picking up on and then they are reacting, reassessing their situation and recreating the cluster, essentially, based on the new topology. So again, this is what would happen if you in your production environment, if, for instance, one of the servers would fail for some reason, and the information from this particular server would've been replicated somewhere else, so that means you don't have to worry about anything else.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (12), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Prerequisites:** set up (9), setup (3)
> **CLI Commands:** node (10), find (1)
> **Definitions:** is a  (2), means that (1)
> **URLs:** [redis.io](https://redis.io) (2)
> **Documentation:** the documentation (2)
> **Env Vars:** cli (1)
> **Analogies:** for instance (1)

#### [An introduction to Redis Sentinel](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=0)** - [Instructor] All right. Let's now look at what [Redis](../../Skills/Software%20Development/Redis.md) Sentinel is. Remember, this is just an introductory video. If you want to know more, I urge you to go to [redis.io](https://redis.io) and check out the documentation for this particular feature. So what is Redis Sentinel? Redis Sentinel is a way for you to monitor a single master node and figure out if there is a problem with it and if there's a problem with it, [react](../../Skills/Web%20Development/React.js.md). Now, the best way for you to ensure that your Redis set up remains highly available even in the face of issues with your servers. Now, that means that you are monitoring your master node and champion or promoting one of its replicas into master if there is a problem with the master node. Now, I'm talking about master nodes and replicas. This is also something that you should be looking into more in detail on Redis but essentially at a high level, if every time you set up your instance of Redis, you can set up a copy of it, a server that will receive asynchronously the information from the main server. This is to ensure that the information is packed up, that there is a redundancy in case of a problem. Now, if you don't set this up with Sentinel, then if something happens with the master node, then you still have issues because the database suddenly becomes unavailable. But if you mix that replication with Redis Sentinel, then the moment your main Redis server,
>
> **[1:36](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=96)** the master node goes down, it will figure out a way to promote one of its replicas into master. And does that work, actually? So again, Sentinel, which is nothing that you need to add into Redis, it comes out of the box with it. It's just set up to monitor your instances. You will set up more than one because you don't want this behavior of promotion being triggered due to a problem with the actual sentinel and not with the server that it's been monitored. So what you do is you set up at least three sentinels that will be all monitoring the same server. They will talk to each other, and the moment the monitor server goes down, they will decide between all of them if there is a need for promoting one of the replicas. The reason why you want at least three is that you want to make sure that there is not even a split in the voting. Essentially, the sentinels will vote whether they are seeing a problem with the master node or not. You just want to make sure that half of them plus one are saying yes, there's a problem before the promotion of a replica happens. Now, the interesting part is that replicas in this setup are being auto-discovered. So you just need to make sure that you know the IP and port of the main master node. How many replicas you set up, it doesn't matter. The sentinels will fill that out automatically. So you don't really have to worry about that. It is a very strong feature
>
> **[3:11](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=191)** that goes hand in hand with replicas. Now, I haven't really covered replicas in detail because in a second, I'll show you how a replica is being set up which is just one configuration line. So now, I'm going to show you how to set up a replica for master and three different sentinels that monitor the same master. This is just illustrative. You should go into raise the IO and read more about Sentinel to figure out exactly the setup that you need for your production requirements. All right, so here I have with these terminals, these two terminals here are going to be the master node and the replica node on the right side here, top right side. Now, the three bottom terminals are going to be the sentinels monitoring the top left instance. They're all in the same folder. You can see here, Redis Sentinel test. And this, essentially, what I have here is just configuration files. The main one is going to be [redis.com](https://redis.com) which is just simply specifying the port, right? 7010, that's going to be the port for my master node. And then the replica is going to be listening on port 7011, and it's going to be set up as a replica of 7010. Essentially, that's all you need to set up a replica, by the way. This one is going to be a replica of this one. Now, to create a sentinel, all you have to do is provide a sentinel configuration
>
> **[4:45](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=285)** that essentially it says this. It's just specifying the master to be monitored. Just, we give it a name, random name, it doesn't have to be anything specific. Then we specify the IP, the port, and the quorum. That means how many replicas need to be agreeing that there is a problem with the master before they can proceed through anything. Now, this is the number of milliseconds that the master has to be down to be considered, you know, down with a problem. And this is how many milliseconds have to go, total after there is a problem. So that there is a failover process essentially, meaning that one of the replicas is going to be promoted and just the port. The port for the sentinels is also going to be specified here and changed. So I can have all my three replicas working on the same computer, otherwise, they will clash. So let me just quickly show you how that looks. I'm going to set up the Redis server with the main configuration here. It's listening to port 7010. Now, I'm going to set up the replica redis server. Redis replica here. Now, they're talking to each other because they need to sync up. Make sure that the replica is aware of the other one. And now, I just have to boot up my sentinels.
>
> **[6:21](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=381)** My sentinels will be executed with Redis Sentinel, and I specified the configuration file. Just one for each one. Here is Sentinel2 and finally, this is Sentinel3. Now, up to this point, they're all working together. They're all monitoring this instance. And this instance is synchronizing, as you can see, with the replica here. Now, what I'm going to do is I'm going to kill the main node being monitored. The replica is going to start failing clearly. And now after 20 seconds, which is the timeout that I was showing in the configuration of the sentinels, all of them will start figuring out there is a problem essentially with the master. The minute that happens, here you go. They will start figuring out there is a problem and eventually they're going to pick up this one as the new master which already happened. It was really fast. But you can see here they're still having information, sharing information, but they're specifying that a new configuration was saved on disk. And this config rewrite also happened.
>
> **[7:55](https://www.linkedin.com/learning/redis-essential-training-15012713/an-introduction-to-redis-sentinel?u=76281980&t=475)** So now, from now on, the main master of my redis set up is the actual old replica. This all happened thanks to the sentinels that were monitoring this one and now are monitoring this one, the replica. And in fact, we can also see that, remember, these files, I wrote them myself. These are all created by Redis. Now, if I were to check out the configuration of Sentinel, you can see that in fact it changed, right? This is all generated by Redis itself. So we don't really have to pay attention too much to this. But now, the main master being monitored is no longer 7010. It's 7011. So if I were to somehow kill these instances and restart them, all sentinels will start automatically monitoring the new master. This was an override, not by me, and this shows you how sentinels worked. This is all automatically and it's ready. In the case of a problem with the sentinels, they restarted, and they already know which servers to monitor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (19), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Prerequisites:** set up (14), setup (2)
> **CLI Commands:** node (11), make (4)
> **Definitions:** is a  (11), means that (1)
> **URLs:** [redis.io](https://redis.io) (1), [redis.com](https://redis.com) (1)
> **Ports:** port 7011 (1), port 7010 (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [How to learn more about Redis](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=0)** - [Instructor] Alright, well done. Congratulations. You made it to the end of the course. Thank you so much for sharing your time with me. Now that you understand what [Redis](../../Skills/Software%20Development/Redis.md) is, and hopefully how it can help you, you might want to look into Redis Cluster and Sentinel, which will give you an idea of how to create and scalable and reliable architecture. Some other [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md) like [MongoDB](../../Skills/Software%20Development/MongoDB.md), maybe, which goes great, hand in hand with [Node.js](../../Skills/Web%20Development/Node.js.md). And finally, maybe something around NoSQL [Data Modeling](../../Skills/Data%20Science/Data%20Modeling.md), especially around Redis. If you enjoyed this course, it will take your skills to the next level. And on the same line, if you're ready for your next [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course, I've got some suggestions for you. For your NoSQL questions, maybe try NoSQL Essential Trainings. It will take you through the basics, including some interesting theory like the Cap Theorem, which is very used and applicable to all situations. If you're into [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md), you might want to review the course Software Architecture Foundations. It covers some interesting patterns, that will come in handy when working as an architect. And finally, if you're not into Node.js yet, you might want to check out Learning Node.js. That course covers the room time quite well, and even has some videos on how to interact with MongoDB. It'll be a great compliment to your database skills. And if you want to keep in touch with me, you can follow me on LinkedIn or on Twitter @deleteman123. I also have a newsletter where I share
>
> **[1:34](https://www.linkedin.com/learning/redis-essential-training-15012713/how-to-learn-more-about-redis?u=76281980&t=94)** my 20 or so years worth of wisdom from the 18 industry over at Substack. And I have written a bunch of books also about Node.js and how to become a successful software developer. So make sure you check those out as well. Thanks again, I hope you enjoyed the course, and that I managed to get you hooked on Redis. See you around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (4), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (4), [Node.js](../../Skills/Web%20Development/Node.js.md) (4), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2)
> **CLI Commands:** node (4), make (1)
> **File Paths:** node.js (4)
> **Speakers:** - [instructor] (1)


## Instructor

- [Fernando Doglio](../../Instructors/Database%20Management/Fernando%20Doglio.md)

## Skills Covered

- Redis

## Path Context

### In [Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)
← [Graph Databases- Neo4j for Complex Data Relationships](Graph%20Databases-%20Neo4j%20for%20Complex%20Data%20Relationships.md) | **6 of 10** | [Introduction to Couchbase](Introduction%20to%20Couchbase.md) →

## Appears In

- [Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)

---

[↑ Back to top](#)