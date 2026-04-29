---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: elasticsearch-essential-training-2023
url: "https://www.linkedin.com/learning/elasticsearch-essential-training-2023"
duration_minutes: 100
duration: 1h 40m
level: Intermediate
updated: 1/26/2023
learners: 4262
skills:
  - Elasticsearch
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFQJGb3OwvKEQ/learning-public-crop_675_1200/B4DZX8rOjyHAAc-/0/1743700945448?e=2147483647&amp;v=beta&amp;t=hEAQ0rkVxHmzs45U1iyjYQAYvmfpLwxsmgc--r7z7mY"
linkedin_topic: Database Management
learning_paths:
  - '[[Develop Your NoSQL Skills]]'
prev_courses:
  - '[[Introduction to Couchbase]]'
next_courses:
  - '[[Elasticsearch in Depth]]'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":8,"total":10,"prev":"Introduction to Couchbase","next":"Elasticsearch in Depth"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/elasticsearch
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Elasticsearch%20Essential%20Training%20(2023).md)

![Elasticsearch Essential Training (2023)](https://media.licdn.com/dms/image/v2/D4D0DAQFQJGb3OwvKEQ/learning-public-crop_675_1200/B4DZX8rOjyHAAc-/0/1743700945448?e=2147483647&amp;v=beta&amp;t=hEAQ0rkVxHmzs45U1iyjYQAYvmfpLwxsmgc--r7z7mY)

# Elasticsearch Essential Training (2023)

> Elasticsearch has been widely adopted in search engine platforms for modern web and mobile applications. Combined with the power of Kibana—which can help to provide analytical solutions on top of your Elasticsearch cluster—this powerful platform adds the capability to answer complex business questions about your data and your customers, as well as serve up relevant results in your applications. Be

> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023) | 1h 40m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Overview]]** (5 videos)
- **[[#2. Setup]]** (2 videos)
- **[[#3. Loading Data]]** (3 videos)
- **[[#4. Querying Data]]** (3 videos)
- **[[#5. Analyzing Your Data]]** (3 videos)
- **[[#6. Presenting Your Insights]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Explore Elasticsearch for your data
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/explore-elasticsearch-for-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/explore-elasticsearch-for-your-data?u=76281980&t=0)** - [Ben] The ability to index documents and search for them using plain text is a powerful capability, which is why Elasticsearch is so widely adopted by organizations of all sizes.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/explore-elasticsearch-for-your-data?u=76281980&t=10)** As we'll learn, it has evolved well beyond these basic capabilities.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/explore-elasticsearch-for-your-data?u=76281980&t=14)** In this course, we will explore the basics of Elasticsearch so that you can understand its architecture and its capabilities.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/explore-elasticsearch-for-your-data?u=76281980&t=21)** Once we have our environment set up, I'll demonstrate how to organize your data for optimal performance.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/explore-elasticsearch-for-your-data?u=76281980&t=26)** By the end of this course, you'll be able to query the data easily, including complex analytical queries.
>
> **[0:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/explore-elasticsearch-for-your-data?u=76281980&t=31)** We'll also cover how Kibana could help you build analytical solutions on top of Elasticsearch.
>
> **[0:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/explore-elasticsearch-for-your-data?u=76281980&t=36)** These topics and more will be covered in order to get you started with Elasticsearch.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [ben] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/what-you-should-know?u=76281980&t=0)** - To get the most out of this course you should be familiar with JavaScript.
>
> **[0:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/what-you-should-know?u=76281980&t=3)** The Elasticsearch Query Engine is based on JSON objects, which is a type of formatting text inside a document that works perfectly with JavaScript.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/what-you-should-know?u=76281980&t=12)** If you're familiar with web technologies, you'll already have an idea of how data flows in and out of Elasticsearch, and what it's used for.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/what-you-should-know?u=76281980&t=18)** Knowing some basics about databases, will also help you understand how Elasticsearch stores and organizes its data.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1)
> **Env Vars:** json (1)
> **Definitions:** is a  (1)
> **Speakers:** - to (1)


### 1. Overview

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Elasticsearch origins
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=0)** - [Instructor] I like to start my courses by showing where the platform that we're digging into came from because I believe it helps us understand a little bit more about why things are the way they are.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=10)** Now, to do this with Elasticsearch we have to go back to 1999 when the platform Lucene came out.
>
> **[0:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=15)** Doug Cutting wrote it originally back then and it was available as an open-source project on SourceForge.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=21)** Lucene was later added to the Apache Software Foundation in 2001, and then it became its own top-level project in February of 2005.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=30)** Now, Lucene added many top level projects such as Mahout and Nudge which you may know today as HDFS and Apache Mahout.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=38)** The nature of Lucene was that it helped all search engines back then index the data that they were capturing from the internet and provide reasonable ways of retrieving that information based on what we call fuzzy matching.
>
> **[0:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=49)** That means that if you search for something, like funny cat videos, it would return documents or websites that were indexed which contained information related to your search.
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=59)** A real innovation here was how the search engine was able to extract text from almost any type of content and then let you retrieve it later on.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=67)** A few years later, Shay Bannon created Compass which was built on top of Lucene and provided essentially the same services but in a more scalable manner.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=76)** The idea here was to provide a distributed search solution that used common web transfer protocols and document formats.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=83)** This is where Elasticsearch was actually born.
>
> **[1:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=86)** Elasticsearch is a distributed restful search and analytics engine that helps with all kinds of use cases in today's technology landscape.
>
> **[1:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=93)** For its data format, Elasticsearch uses JSON, which is the JavaScript Object Notation.
>
> **[1:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=98)** And for its interface, it uses HTTP.
>
> **[1:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=101)** Now, both of these are incredibly common on the web which makes Elasticsearch really flexible and can be integrated with almost any application out there.
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=109)** In working with Elasticsearch there are clients available in Java, .NET, Python, and many other languages.
>
> **[1:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=114)** Across the landscape, Elasticsearch is by far the most popular enterprise search engine.
>
> **[1:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=119)** In short, if you're looking to do search today and don't want to reinvent the wheel this is probably your best bet.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-origins?u=76281980&t=125)** Also, because of its incredible ability to scan documents and find information, it is becoming more useful for data scientists and analysts to understand what's happening or what insights can be gleaned from the data that is being stored inside of it.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2), cat (1), python (1), find (1)
> **Env Vars:** hdfs (1), json (1), http (1), net (1)
> **Code Keywords:** let (1), interface (1)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Elastic the company
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980&t=0)** - [Instructor] Elastic, the company, provides the open source ELK Stack, which is Elasticsearch, Logstash, and Kibana.
>
> **[0:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980&t=6)** Recently, they reported that they have now over 100 million downloads of their platform.
>
> **[0:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980&t=11)** As I mentioned, their ELK Stack is open source, but the other components they offer, such as security, monitoring and alerting, are paid, known as the X-Pack.
>
> **[0:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980&t=20)** They also offer hosting and training and consulting, which are typically grouped into what we call professional services.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980&t=26)** So this is a common model that many successful open source companies, similar to Cloudera and what they offer with Hadoop, or Teradata, what they do for Presto.
>
> **[0:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980&t=35)** I mention this because, as a business wondering whether or not you should invest in something like Elasticsearch, the fact that there is a commercial entity pushing it forward and investing back in the open source version of the platform is a good sign.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980&t=46)** And that's especially important if you don't plan on having a giant stack of engineers that are deep into the open source side of this.
>
> **[0:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-the-company?u=76281980&t=53)** You can hire them for their professional services and also get things like enterprise-level support with service-level agreements that you can count on to keep your systems up and running.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), known as (1)
> **Env Vars:** elk (2)
> **Analogies:** such as (1), similar to (1)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)

#### Elastic Stack overview
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=0)** - [Instructor] Let's take a look now at how this platform comes together.
>
> **[0:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=3)** First, let's break down the open source part known as Elastic Stack.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=7)** At the bottom of the stack, you have two components, which are focused on getting data into your cluster.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=12)** You have Logstash, which has been around for a while and is great at ingesting log data, but also has evolved to a full-fledged ETL platform.
>
> **[0:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=20)** Logstash offers common connectors, transformations, and outputs, as well as there is an open source community building additional connectors and additional transformations for almost any scenario you may encounter.
>
> **[0:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=32)** I won't be diving too deep into Logstash in this course, as the main focus is on Elasticsearch, however, know that if you're running Elasticsearch, you are most likely going to want Logstash as a good way to ingest data.
>
> **[0:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=44)** Another platform for getting your data into your cluster is Beats.
>
> **[0:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=48)** This is a component that will help you ingest data in real time by looking at transactions occurring in the database or potentially new data being written to a file that you're watching.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=57)** It's a lightweight ingestion engine that helps keep your cluster fresh with near realtime data.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=62)** Sitting on top of both of these is Elasticsearch, the star of our show here.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=67)** The focus of Elasticsearch is essentially to ingest the data that is being given and create indexes of these documents and distribute them across all of the nodes in its cluster.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=76)** From there, Elasticsearch provides an interface using HTTP to search the documents and has many built-in algorithms for scoring them as well as a way to customize your search results.
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=87)** When it comes to using Elasticsearch as an analytics platform or doing more advanced tuning, it may make sense to add Kibana to your platform.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=94)** Kibana offers another layer that you can build your applications on top of.
>
> **[1:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=99)** In this course, we're going to use Kibana because it provides a nice web interface for us and we can run all of our code through their console.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=106)** Outside of these components you get into the stuff you have to pay for.
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=109)** This is called the X-Pack and stands for the Extensions Pack.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=113)** In there, you have many components which you may want if you're running this in an enterprise environment.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=118)** X-Pack offers security integration with things like Kerberos, alerting of data-driven events, monitoring every cluster, reporting results, and a graph engine to help with certain types of search queries.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=129)** All of this is also available in the Elastic Cloud, which is their host adoption.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=133)** We'll take a look at that later just so you can get a sense of how it looks and feels, but for the demos that we'll be going through, we'll be running them locally on our machine.
>
> **[2:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=140)** The four key advantages that the Elastic Stack gives you is first scalability.
>
> **[2:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=145)** By horizontally scaling, you can spin up your Elastic cluster to handle any amount of data.
>
> **[2:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=149)** It offers near realtime results with Beats ingestion tools and it helps you do things like anomaly detection, fraud identification, and all of this is possible because it's happening in real time.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=159)** Of course, this is a NoSQL platform, which means that you don't need a schema when you ingest the data.
>
> **[2:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=165)** You can figure out the schema after the fact.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=167)** And this is really helpful with speed and that's why you can ingest data in near real time is because you don't have to define the structure up front and that, of course, contrasts the old school kind of traditional legacy systems where you have to define the schema before you can actually input any data into it.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elastic-stack-overview?u=76281980&t=183)** Now, there is also an advanced query language built into Elasticsearch that we'll dig into a little bit later.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (1), is an  (1), is called (1), stands for (1)
> **Code Keywords:** let (2), interface (2), for. (1)
> **Env Vars:** etl (1), http (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Use cases
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=0)** - [Instructor] The Elastic Stack can be used for countless different use cases, however, I thought it would make sense just to talk about some of the most common ones that people are using it for today.
>
> **[0:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=9)** A big one is security and log analytics.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=12)** It's incredibly common to have logs dash pulling in your web server logs, or security logs from your firewall, for example.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=18)** Throw them into an index where then, on top of that, you have dashboards, learning, and all kinds of things that you may want to be looking at in your real time with regards to what's going on with your traffic or your security systems.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=30)** So, when it comes to analyzing security and log events, this is a fantastic tool because of how good it is at identifying things in real time.
>
> **[0:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=40)** Another use case, which may not be totally obvious, is to use the Elastic Stack for marketing.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=45)** Following along with this idea that we have web logs in Elastic Search that we can then run queries against, we can use that data to find things like drill paths, how people found our website and where they came from, and even what device they're using or what part of the world they're coming from.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=60)** This way, the marketing team can really gain a lot of insight into the efforts that they have on trying to get people to our website to then sign up or buy a product, or whatever the case may be, and this is all made possible because of the data that's being ingested is so rich with information that helps our marketing team hone in their efforts and kind of use their dollars wisely.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=82)** You can probably also guess that, operationally, this information and being able to react to it in real time would be very useful for your operation center.
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=92)** Now, whether that is monitoring a server, or a cluster of servers, that support a web app or something like a factory that has sensors all over with machines running, being able to ingest the data and then present it in alerts based on anomalies, or then kick off other actions, is really, really useful, especially if you have something that is running with a lot of volume, whether that's people on a website, people using an app, streaming videos, whatever the case may be.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=118)** Being able to ingest data in near real time and react to it can really help smooth things out from an operational standpoint as well as identify weaknesses in your systems that you can then improve later on, and of course, there is Search, the actual ability to use Elastic Search as a search engine.
>
> **[2:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=135)** Now, Elastic Search was built with the idea of providing a great search engine, and today, it is the most widely used one in enterprise space.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/use-cases?u=76281980&t=142)** Now, as you'll see, one of the key points of focus here is how this platform is easily able to parse search queries and retrieve related results based on basically any type of data that you may be looking for.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (1), case, (1), from, (1), from. (1), for. (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Elasticsearch concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=0)** - [Instructor] Before we dig in and start using Elasticsearch, I thought it would make sense to cover all the concepts here so that you have a general understanding of how the pieces fit together.
>
> **[0:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=9)** We'll first have our cluster, and as you can imagine, a cluster is a collection of nodes.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=14)** The cluster has a unique name with a default of Elasticsearch.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=18)** A typical way that you would structure this is to have a development and staging and then a production cluster, but it's totally okay to just have a single cluster with a single node especially when you're just getting set up like this.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=30)** Now, the node is a part of a cluster that stores the data and it provides search index capabilities and has its own unique name.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=38)** Now, the nodes contain indexes, and an index is a collection of similar documents such as customer data, product information, or maybe orders from your website.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=47)** Now, the node names are all in lowercase and you can have as many of them as you want.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=52)** When you're doing almost anything in ElasticSearch you're going to be referencing an index so it's important to have a consistent naming pattern for all of them in your cluster.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=60)** At the base unit, you have a document, which could be for a single customer or order, or an event, let's say coming from an app or a website.
>
> **[1:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=68)** Now, these documents are stored in the JSON format and are physically residing inside of your index.
>
> **[1:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=74)** Now, the index, in order to be scalable, has to be distributed and it does so using shards and replicas.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=80)** Now, a replica is a segment of an index and a shard is a portion of that index.
>
> **[1:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=86)** Because of its nature, a replica can never be located on the same node as the primary shard that it's a backup for.
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=92)** Now, the default when creating an index is to have just one shard and one replica.
>
> **[1:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=96)** Now, this would equal one primary shard and one replica shard distributed across two different nodes.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=102)** Now, if we visualize this, we start out with our cluster here which has several different nodes in it.
>
> **[1:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=107)** We're zooming into node one where we have two indexes, our customer index and our orders index, which inside of those have the physical documents that have the information that we want to store and then use.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=118)** Then we have our node two, which is our first shard, and this one also has a customer index and orders index being a backup for node one.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/elasticsearch-concepts?u=76281980&t=126)** Then if we wanted to round it out for kind of a complete setup, we would have three different replicas here and these replicas would be similar to nodes one and two but mostly serving as just backups.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), make (1)
> **Definitions:** is a  (5)
> **Code Keywords:** this. (1), let (1), for. (1), this, (1)
> **Analogies:** imagine (1), such as (1), similar to (1)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)


### 2. Setup

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Running Elasticsearch in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=0)** - [Ben] Let's start by setting up Elasticsearch.
>
> **[0:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=3)** And we're going to do this using their hosted option from [elastic.co](https://elastic.co).
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=7)** So we head over to that website, and right now there's a big, beautiful button right here.
>
> **[0:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=11)** We can click Start Free trial.
>
> **[0:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=13)** If this website changes, as websites tend to do, you can probably find another button like that.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=18)** Or under Platform, you'd ought to be able to find the way to start a free trial using the Elastic hosted option.
>
> **[0:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=24)** We click that.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=26)** Okay, so to continue on, we need to enter an email and password.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=30)** I'll go ahead and do that here, and then click Sign Up with Email.
>
> **[0:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=33)** Then we need to fill out some more information about our cluster.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=37)** My full name, company, and you can put whatever you want in here.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=47)** Check, check, fill out that form, and give our deployment a name.
>
> **[0:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=51)** We'll call it Bens ES Cluster 123.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=57)** You can change where the actual cluster is being deployed here, it's to the Google Cloud Platform, you can see that by this icon here.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=63)** But if you're in a different location, it should default somewhere else.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=66)** If you need to change it, you're welcome to do so.
>
> **[1:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=68)** This shouldn't matter at all for this course, though, just for our small deployment here.
>
> **[1:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=72)** Then we click Create Deployment.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=75)** All right, once we're up and running here, we have all kinds of options and things that it's going to present us with.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=80)** A lot of this is what Elastic, the company, is trying to sell us.
>
> **[1:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=84)** And for this course, what I want to do is teach you how to use it as if you had your own open source version that maybe was self-hosted on a server or if you were doing it in some other cloud platform like Google Cloud or AWS.
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=95)** So to use this, we're actually going to skip over all this stuff here, and I'm going to click on these little three dots on the left.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=102)** Again, you have more of those options, and scroll all the way down to Dev Tools.
>
> **[1:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=105)** And here is where, in the console, we are going to execute all of our code.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=111)** Now, if you haven't seen it already, you can download the exercise files here.
>
> **[1:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=114)** And what we're basically going to be doing is pasting in code, I'll be explaining it to you.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/running-elasticsearch-in-the-cloud?u=76281980&t=118)** You can do the same or you can type it out yourself, and we'll be using Elasticsearch.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), continue (1), else. (1), self (1), this, (1)
> **CLI Commands:** find (2), aws (1)
> **Exercise Files:** download the (1), exercise files (1)
> **URLs:** [elastic.co](https://elastic.co) (1)
> **Env Vars:** aws (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [ben] (1)

#### Exploring your cluster
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=0)** - [Instructor] All right, let's have a look at our new cluster that we created here.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=4)** I'm going to go ahead and delete all the text that was in the console when I first opened it here.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=10)** And if you skipped any of the other bits what we did is we jumped into the dev tools section which you can get to from the left panel there.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=18)** Now from here I'm going to open the exercise files which you can see under data and scripts.
>
> **[0:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=22)** And this would be 0202.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=25)** I'll click on that guy.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=26)** and we're just going to run some commands that are going to help us understand what's going on in our cluster.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=30)** So first we want to see the overall cluster health.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=34)** So I'll copy this guy in here.
>
> **[0:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=35)** And what we're issuing is a get command.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=37)** So if you're familiar with how web communication works we're sending an actual get request at this endpoint and it is going to give us some information back.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=47)** You can see here we get our timestamp and it's kind of a mess, but at the end you see that we have a hundred percent meaning it's a hundred percent up and running which is good.
>
> **[0:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=55)** That's what we want to see.
>
> **[0:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=56)** I can move this guy over a little bit you can see it can start to phase out so you can read it better but you get the idea that we have a cluster here and it is running at a hundred percent speed.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=67)** Now let's see how many nodes we have.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=69)** So I'll paste this guy in again, another get request and we're going to run this and see how many nodes we have.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=76)** So you see here we actually have three different nodes in our cluster.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=80)** This is the default for this [elastic.co](https://elastic.co) cloud hosted option.
>
> **[1:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=84)** You can of course change this if you are, you know, doing a real deployment.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=88)** Now let's list what indices we have.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=91)** And so here we issue another get command for indices.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=94)** And you can even see the dropdown here when I do this under cat.
>
> **[1:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=98)** You can see all the other options that pop down.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=100)** So you can kind of type this out if you want.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=102)** For me I think it's just easier to show you how I paste it in.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=106)** We'll go ahead and run that there.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=108)** And I'm just going to expand this out so you can read it here.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=110)** So we essentially have two indices here the one for sync jobs and one for connectors.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=115)** So nothing real that we would be able to query yet but that is essentially what is in there as of now.
>
> **[2:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=122)** Now let's actually go go ahead and create one just kind of our first set here.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=125)** Now, the get commands, we're always retrieving data.
>
> **[2:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=127)** Here we're doing a put command and we're actually creating one called sales.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=133)** And this is an index where we're going to then store documents.
>
> **[2:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=136)** So I'll just hit play on this.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=138)** You can see that everything is good.
>
> **[2:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=140)** So here's our index of sales acknowledged true, etc, etc.
>
> **[2:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=145)** So it's that easy to create an actual index.
>
> **[2:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=147)** So if you think if you're building an application and you want to put data somewhere, you literally just send this request in once you have all the permissions and everything else set up and you're good to go.
>
> **[2:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=156)** All right, now let's add a document here.
>
> **[2:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=158)** So I'm going to pass in some JSON data and this is going to be an order.
>
> **[2:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=165)** So we're doing the same thing we normally would do if you're familiar with JSON format here.
>
> **[2:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=168)** You have your key value pairs.
>
> **[2:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=170)** Essentially order ID 123, order amount 500.
>
> **[2:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=173)** And what we're doing is calling it doc and then giving it a name.
>
> **[2:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=177)** We're giving it an ID.
>
> **[2:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=178)** We'll hit play and you can see that it was able to do that.
>
> **[3:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=182)** So result created and sales ID version 123.
>
> **[3:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=189)** Okay, so now we're going to actually pull out one of those documents.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=192)** So we're going to say get and then we're going to give it our index of sales, the doc, and then the ID.
>
> **[3:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=198)** So essentially the same thing we just created there.
>
> **[3:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=200)** Here I'm going to run this guy.
>
> **[3:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=202)** So now you can see how easy it is to retrieve stuff.
>
> **[3:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=205)** So again, if I were building an application pulling back some information in this case about an order I send it to that endpoint using a get request and I get the actual data right there.
>
> **[3:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=214)** Order ID 123 and order amount 500.
>
> **[3:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=219)** Now what I want to do here is actually go back and run list indices again and just see what it shows me 'cause now we should have a new one for sales.
>
> **[3:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=226)** You can see it's listed right there.
>
> **[3:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=228)** So you have the connectors, you have this sync job one and then you have sales.
>
> **[3:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=232)** So that is where our indexes or indices are listed.
>
> **[3:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=236)** If we want, we can also delete that.
>
> **[3:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=238)** We just type in delete sales.
>
> **[4:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=242)** You can see the index listed in the dropdown there.
>
> **[4:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=244)** Hit play.
>
> **[4:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=245)** And then we can go run that list indices again and you'll see that it is no longer there.
>
> **[4:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=253)** So that's how easy it is to explore our server, see what nodes there are, see what indices there are, create an indices, insert some data, retrieve that data and then wipe away our tracks.
>
> **[4:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=264)** Hopefully that gives you an idea of how simple and easy elastic search is to use when building an application.
>
> **[4:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/exploring-your-cluster?u=76281980&t=270)** As well as when you run analytics you can do very similar operations, but create aggregations and we'll explore some of that later on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), delete (3), this. (1), pass (1)
> **UI Navigation:** dropdown (2), open the (1), click on (1)
> **CLI Commands:** cat (1), go run (1)
> **Env Vars:** json (2)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [elastic.co](https://elastic.co) (1)
> **Versions:** version 123 (1)
> **Exercise Files:** exercise files (1)


### 3. Loading Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Bulk loading data
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=0)** - [Instructor] Let's start here in our Elasticsearch journey by uploading some data because obviously, you're not going to hand type data in.
>
> **[0:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=6)** You could use a spreadsheet for that.
>
> **[0:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=8)** So what I want to do in this video is show you how to use cURL commands from the terminal, whether that's Windows or Mac, and actually upload a file.
>
> **[0:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=16)** So real simple stuff but an example that you could obviously use to take further into building an application or some kind of data service, whatever application you want to do with Elasticsearch.
>
> **[0:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=27)** So to start, I'm going to go to our Elastic Cloud home [cloudelastic.co/home](https://cloudelastic.co/home).
>
> **[0:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=33)** You'll see the cluster I created here.
>
> **[0:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=35)** Ben's ES Cluster 123.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=37)** And on the right side under managed deployment, I have little gear icon.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=41)** I'm going to click that guy.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=42)** And the first bit of data we need is our endpoint.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=45)** So if you scroll down, you'll see our applications here and I can click this guy to copy the endpoint.
>
> **[0:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=51)** Now, I want to put that somewhere.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=52)** So what I want to do is open up Notepad here or TextEdit on a Mac, or whatever you prefer.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=57)** And I'm just going to paste that in.
>
> **[0:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=58)** This is the endpoint or the URL we'll use to access our Elasticsearch instance from terminal.
>
> **[1:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=65)** Now, the next bit is to create an API key.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=67)** So over here on the left under security, we'll click that guy and it will say, hey, go over to Kibana because that's where we need to create an API key.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=75)** Click that link, it'll launch us over into the Kibana interface.
>
> **[1:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=79)** And on the left, we are going to scroll down to API keys and we will click create API key.
>
> **[1:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=86)** Give it whatever name you want here.
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=87)** Kibana123, click Create.
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=92)** And I will copy that and I'll head back over to my notepad, paste that in.
>
> **[1:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=97)** So now I have the two crucial bits that I need to actually work with our Elasticsearch instance from terminal.
>
> **[1:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=104)** Okay, so let's open up terminal now and let's get to uploading some data.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=110)** Now, if I'm on a Mac, I can open up an application called Terminal or if I'm on Windows, I'm going to open up Ubuntu, which is a Windows subsystem for Linux.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=118)** Essentially, it's Linux running on my Windows computer.
>
> **[2:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=122)** Now, if you don't have that installed on your Windows machine, just search for it.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=125)** It may be something you have to enable or install some additional components.
>
> **[2:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=128)** But once you do that, and once you launch it, you will have a similar prompt like this, which will have your computer name and then essentially your Bash icon there letting us know that we are ready to accept commands.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=139)** So what I want to do is actually create some variables so I don't have to paste this in every time and get it wrong.
>
> **[2:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=144)** I can just reference that variable name.
>
> **[2:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=147)** And so starting out, I just want to give it the host.
>
> **[2:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=149)** So I'll type ES_HOST in all caps, equals double quotes.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=155)** And I'm going to go over to my endpoint and copy that.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=159)** Click back over here and paste that in.
>
> **[2:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=162)** Hit enter just to verify it's actually there.
>
> **[2:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=165)** I'll type echo in lowercase and then $ES_HOST.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=171)** And you can see that it saved it.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=172)** Now, if you're unfamiliar with how this command works, if I were just to type ES_HOST instead of the dollar sign, it would just print back whatever it is.
>
> **[2:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=179)** So when we're referencing this variable, we need to have that dollar sign there.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=183)** Pretty common.
>
> **[3:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=184)** But if you're unfamiliar, I wanted to just show you that.
>
> **[3:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=186)** Okay, so the next one we want to create is the API key.
>
> **[3:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=189)** So we'll do ES_API_KEY.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=192)** And I like to do 'em in all caps.
>
> **[3:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=193)** They don't have to be, but it's just kind of nice 'cause obviously see without an string of text.
>
> **[3:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=198)** And I'll paste that guy in there, hit that, just double check that it is actually there, ES_API_KEY.
>
> **[3:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=207)** And I forgot the dollar sign like I mentioned before.
>
> **[3:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=211)** There you have it.
>
> **[3:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=211)** So I know my variables are good.
>
> **[3:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=213)** Now let's clear our screen.
>
> **[3:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=215)** So now let's get to creating a file that we're then going to upload.
>
> **[3:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=218)** So we're going to use an old program called vi and we're going to call it reqs as in requests something you probably would send to Elasticsearch from a web application.
>
> **[3:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=227)** We'll hit that and we have our new file, which is very uneventful at this point but I'm going to type the letter i, which puts me into insert mode and now I can type stuff out.
>
> **[3:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=236)** See, I can just type whatever.
>
> **[3:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=237)** Previously, if I had been typing, those would be issuing commands.
>
> **[4:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=240)** We don't want to do that.
>
> **[4:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=241)** And so now what I want to do is go over to the exercise files and there is a bit of data in there and along with the instructions, I'm going to paste that in and you can see I have some JSON data here.
>
> **[4:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=252)** Now, the interesting thing about this JSON data is that it has an index which doesn't exist currently in our cluster and it has IDs for the different documents we're creating and columns and values for each one of these.
>
> **[4:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=263)** So it's a really simple file, but just an example of how you can have multiple bits of data in a single file that we're then going to upload.
>
> **[4:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=271)** So then to get out of this, we'll hit Escape and then :wq, which means write the file and quit the application, which creates our file.
>
> **[4:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=278)** We'll type ls, the command to show what's in our current working directory here.
>
> **[4:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=283)** And you can see our file is there.
>
> **[4:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=285)** So we are good to go.
>
> **[4:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=286)** We have all the bits we need.
>
> **[4:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=288)** Now we execute the curl command.
>
> **[4:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=290)** Okay, so with the command here, which I pasted in from the exercise files, you could type it out if you want, but I just thought it'd be easier to show you.
>
> **[4:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=297)** We're issuing the curl command or this is the program we're using to send a POST request and we have to tell it the content type, giving it the JSON indication so it knows what kind of data to expect.
>
> **[5:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=307)** Then we have to give it the authorization key using the variable we already created, the API key, and where is it going?
>
> **[5:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=313)** It's going to our host and to the bulk API.
>
> **[5:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=317)** Now we're going to give it some data there and tell it that it is using the reqs file that we created and then spit back the results.
>
> **[5:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=324)** So I will just hit enter from here and in the end, I can see that it has a successful message and the status is correct.
>
> **[5:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=332)** So not a whole lot going on there, but what I want to do now is actually hop over and go into the console.
>
> **[5:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=338)** So I'll go back to my Elastic Cloud, jump over here into my cluster.
>
> **[5:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=343)** The same place before we were doing the command under dev tools is where we're going to go again and we're just going to look for these indexes.
>
> **[5:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=351)** So on the pane on the left here, I'll click my little menu bar and go down to Dev Tools.
>
> **[5:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=359)** And you can see that it already had the indices there.
>
> **[6:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=361)** I just want to see what they are.
>
> **[6:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=362)** If not, you can just type this out, hit play.
>
> **[6:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=365)** And you can see now that you have my test, which wasn't there before.
>
> **[6:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=369)** Now if I actually wanted to pull some of that back, I can just type GET /my and you can see that it auto fills it there for me.
>
> **[6:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=376)** My-test, hit play and you can see what it actually has.
>
> **[6:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=380)** It has, you know, the whole thing here, the whole actual column one, the information about it, all that stuff.
>
> **[6:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=386)** Now if I wanted to bring back an actual document 'cause that was just the index itself, I'll type GET /my-test/_doc, which is how we reference the documents.
>
> **[6:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=397)** And then one because we gave one an ID.
>
> **[6:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=401)** I will hit Enter on that and you can see here's the actual data.
>
> **[6:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=405)** So column one, value one.
>
> **[6:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=407)** If I look back at my command or my reqs file, if I go back here and type vi reqs, you can see I have column one, value one under ID one.
>
> **[6:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=419)** So similarly, I could go for two or three or whatever and you'll see, you know, just different data coming in there.
>
> **[7:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=425)** So this was a really simple example but hopefully one that highlights what's possible.
>
> **[7:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=431)** I was able to create an API key.
>
> **[7:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/bulk-loading-data?u=76281980&t=433)** I was able to find my endpoint on my cluster and then I was able to issue some commands from terminal after creating a file and upload that and then hop over to the Elasticsearch interface and see that that data in fact was created and is there waiting for me to use it.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), es_host (3), json (3), es_api_key (2), url (1)
> **Code Keywords:** let (5), interface (2), this, (2), type, (1)
> **Tools:** terminal (6), bash (1)
> **CLI Commands:** curl (3), ls (1), find (1)
> **API Endpoints:** get  (2), post  (1)
> **UI Navigation:** scroll down (2)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)

#### Loading sample data
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=0)** - [Instructor] Now let's load some data into our Elasticsearch cluster that we're going to then use later in other ways with other tools.
>
> **[0:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=8)** Now to start, there are files already in the exercise files if you've downloaded them from this course.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=14)** Otherwise there is a link in this script there that you can use to go download an accounts file from Elastic themselves.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=21)** It's a demo file that they provide that has bank related information.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=25)** So once you have that file downloaded or you have it from the exercise files, we're just going to jump over to that folder so then we can actually inspect the file and upload it to our Elasticsearch cluster.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=37)** So let's jump over to that folder now so we can upload this account's data.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=41)** Now I'm on Windows here with Ubuntu running, so if you're on a Mac, you'll see a different path, but the command is essentially the same, cd means change directory and then I need to give it where the data actually lives.
>
> **[0:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=51)** So on Windows under the Ubuntu Windows subsystem for Linux, it's going to be mnt c and then users for me and then ben, downloads, exercise files, and data.
>
> **[1:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=68)** So I'll jump over there then I'll see what's in the directory.
>
> **[1:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=71)** And you can see there's several different files here.
>
> **[1:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=73)** We're looking for that accounts.json one there, so we're good to go.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=77)** Let's have a look at that file real quick.
>
> **[1:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=78)** We'll type head and accounts and I'll just hit tab to auto complete, and we can see what the data looks like.
>
> **[1:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=84)** That command just gives us the first few lines of the file there.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=88)** So you can see here that we are passing in the ID of the document, and then in that document, we have things like account number, balance, first name, last name, et cetera.
>
> **[1:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=96)** So, pretty solid dataset, pretty valuable information that we could use in whatever kind of analysis or business we're running here.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=103)** And so now what we want to do is take this file and upload it to Elasticsearch.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=108)** So I'm going to clear my window here just so we have something easier to work with, and we're going to use that curl command that we used before.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=115)** And I'm going to paste this in so that way you don't have to see me type the whole thing out, but I'll explain it as we go.
>
> **[1:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=119)** So first off, we have our curl, we're doing a post, giving it some parameters there.
>
> **[2:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=124)** Then we need to give it the content type which is this json, and then we need to give it our authorization key.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=131)** So if you haven't already set this up, the API key is a variable that we created in the previous lesson and we're going to use that as well as this variable here which is our host.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=142)** So if you're unfamiliar with those, go back and watch the previous lesson.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=146)** Otherwise you can just create the API key and host and variables and this code will work for you here.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=151)** The one difference is that we're using this pretty API here, this little command after the question mark to tell that the data basically has already been formatted.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=159)** And we also are using this endpoint here of /bank which is going to tell Elasticsearch to create the index of bank for us.
>
> **[2:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=170)** And so if I want to jump over to Elasticsearch, I can just see this right now.
>
> **[2:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=173)** So I type get /_cat/indices and I'm doing control and enter
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=183)** to automatically run that or I can click the play button.
>
> **[3:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=185)** And you can see here we have the previous one that was created at the very beginning, but we don't have anything else.
>
> **[3:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=190)** There's no other indices here for our bank.
>
> **[3:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=193)** So when we issue this command and we add this endpoint here, it's automatically going to create that index for us and then load this data from this file here into it.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=204)** And that's kind of one of the really cool things about Elasticsearch is that you can really use it as a service where you don't have to tell it anything upfront.
>
> **[3:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=211)** If you've worked with other traditional databases in the past where your application needs to write data to it, you often will have to create all of that data infrastructure before you do anything.
>
> **[3:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=221)** Here, I literally just send it to an endpoint and bang, it works.
>
> **[3:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=225)** And that's one of the beauties of Elasticsearch.
>
> **[3:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=227)** So I'll go ahead and make sure everything looks good here and then hit enter.
>
> **[3:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=231)** And what you'll see is a bunch of stuff just fly across the screen there.
>
> **[3:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=235)** If you are considering getting a raise from your boss, make sure that's happening while he's around so you can impress him with what's happening and the kind of work you do.
>
> **[4:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=242)** And now that we're here, we've seen it all load up there, all the successful messages, we don't have to go back.
>
> **[4:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=247)** We can just jump back into Elasticsearch and see our indices again.
>
> **[4:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=251)** And now you can see that we have the bank one there.
>
> **[4:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=254)** So if we want to dive in deeper, I can say get /bank and then I'll hit enter and you can see details and properties about it.
>
> **[4:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=264)** But if I want to actually pull back a document, I'll just say /_doc and one, run that command, and you can see I have an actual record here.
>
> **[4:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=274)** So this data was passed in, this is from the actual file, you can go verify that.
>
> **[4:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=279)** Here's Amber Duke.
>
> **[4:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=280)** And if I open up that actual file, you can see account number one, ID one, and Amber Duke right there.
>
> **[4:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=288)** So that is how we're able to load in some of this sample data.
>
> **[4:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=292)** And then we're going to reference this later on.
>
> **[4:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=294)** The only other thing we might want to do here is tell Kibana anything more about this data.
>
> **[4:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=299)** So I'll show you where to do that if you're using a different file.
>
> **[5:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=302)** You don't really have to do that here, but I'll just show you where.
>
> **[5:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=305)** So if you click on the little hamburger menu and you go down to stack management and then scroll down to Kibana and data views, under here, you can create a new data view and you can kind of see there are already some out there.
>
> **[5:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=317)** These are different data views that you can then reference later to do analytics on, which is kind of cool.
>
> **[5:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=322)** So, if you want to create a new one here, we can just create it called bank.
>
> **[5:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=326)** You can actually see over on the right side exactly what's there.
>
> **[5:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=329)** For the index pattern, we'll just leave it as bank and star.
>
> **[5:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=332)** You can see that it matches one of our sources.
>
> **[5:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=335)** There is no timestamped field because this data isn't really timestamped.
>
> **[5:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=339)** A lot of times data in Elasticsearch is 'cause it's mostly log data coming in, but in this case, it's not, so we'll click save data view to Kibana.
>
> **[5:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=348)** Good to go, it saved.
>
> **[5:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=350)** You can see as we scroll down it read in all of those fields, right?
>
> **[5:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=354)** You have some of the metadata, the id, the index, et cetera, and then you have the the account number address on all the other bits of data that we actually sent over.
>
> **[6:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=360)** So, you can change some of these things, it tells you the data types, if it can be aggregated, et cetera.
>
> **[6:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/loading-sample-data?u=76281980&t=365)** And this is just a nice way that if you want to really create these views that you can work with in analytics, this is how you do it in Kibana data views.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else. (1), raise (1), case, (1)
> **CLI Commands:** curl (2), make (2), cd (1)
> **Env Vars:** api (3)
> **UI Navigation:** scroll down (2), click on (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (3)
> **File Paths:** accounts.json (1)
> **Speakers:** - [instructor] (1)

#### Setting data types
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=0)** - [Instructor] When it comes to data types in Elasticsearch, there are four main categories that I want to cover.
>
> **[0:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=5)** First, we have our Core data types and these are the ones you might be familiar with, such as Text, Numeric, Boolean, Binary, and Range.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=12)** In many cases, these data types cover all of the data that you'll come across.
>
> **[0:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=16)** However, there are some additional types, such as Complex data types.
>
> **[0:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=20)** A Complex data type is typically represented as an array or an object, or even a nested array of JSON objects.
>
> **[0:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=27)** If you're familiar with things like Hadoop and Hive, the Big Data platforms out there, you're probably familiar with this structure because these things show up all over the place in the Big Data world.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=37)** Elasticsearch also provides geo_point and geo_shape data types.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=41)** A geo_point data type is good for storing latitude and longitude.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=45)** While geo_shape is good for showing polygons.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=47)** These are the actual points and architectures that you need to draw a shape on a screen, or in an app.
>
> **[0:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=53)** There are also some Specialized data types in Elasticsearch for handling things such as IP addresses, auto-complete suggestions on a website, and things like tokens that live in a string.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=62)** We won't go deep into any of those in this course, but I thought it'd be helpful for you to know about them in case you come across them in your day-to-day work.
>
> **[1:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=71)** Now let's go back to Kibana, where we left off building an index pattern.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=75)** What we want to do is create some data types and we're going to do that in the Dev Tools section, not in the Data Views here, that we did before.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=83)** So I'm going to click on my hamburger menu and go back to the Dev Tools section.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=88)** I'll delete what was there before.
>
> **[1:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=89)** And what we actually want to do is create these mappings, these data types, in telling Kibana exactly what's happening and then we will load the data from a file that we have.
>
> **[1:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=99)** So I'm just going to paste this in, so you don't have to see me mess up typing it, but you can get this in the scripts which are located in the exercise files.
>
> **[1:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=107)** Now, what we're creating here is a new index called logstash-2015-05-18, giving it a mapping, telling it the properties of that are geo.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=116)** And then inside of the geo, we have coordinates of type geo_point.
>
> **[2:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=120)** So just like I mentioned, you have geo_points and geo_shapes.
>
> **[2:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=124)** Here is a geo_point.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=125)** So I'm going to run this guy here and you'll see that it created, so it created this new index and it gave it some mappings.
>
> **[2:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=132)** I've got two more that I'm just going to paste in and run, so that way you can see exactly what kind of data types we're creating.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=138)** Essentially the same thing, we just have different logstash dates here, right?
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=142)** So this is like multiple log files, across three different days, all coming in to Elasticsearch and Kibana and we're just setting it up so that way when the data comes in, we can work with it and we don't have to do any extra processing on it.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=155)** So now, I'm going to head over to the console, where I load the data from my curl command.
>
> **[2:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=161)** I'm going to clear the window here.
>
> **[2:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=163)** So first, I'm going to browse over to the folder in my terminal window here.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=167)** I'm on Windows with Ubuntu running so that's why it looks funky.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=171)** If you're on a Mac, it may to be a little bit different, but these commands should all work the same.
>
> **[2:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=174)** So jump over to that folder and let's have a look at what we got.
>
> **[2:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=177)** So inside of the exercise files, you can see there are several different files there.
>
> **[3:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=181)** This one we're looking at, the logs file.
>
> **[3:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=184)** So let's just check out and see what's actually inside there.
>
> **[3:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=189)** And you can see it's, kind of, typical log data.
>
> **[3:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=191)** It's really kind of fuzzy and messy, but there's a timestamp, we have those coordinates you can see, you can see the source information, you can see the type.
>
> **[3:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=199)** So what we're looking at, essentially, is visits to a website.
>
> **[3:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=203)** You can see the origination URL, the titles, et cetera, et cetera.
>
> **[3:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=206)** So typical log data that you would have from a web server.
>
> **[3:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=210)** So I'll clear my window again here and I'll paste in my curl command, which should be pretty familiar at this point,.
>
> **[3:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=217)** What we have is the curl, we're sending it to the POST, giving it a couple flags, telling what kind of data we're sending in with our content type.
>
> **[3:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=224)** We already have set up the Elasticsearch API key from before and the host.
>
> **[3:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=229)** This time we don't have to tell it what index it has, 'cause that's in the file itself.
>
> **[3:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=233)** So we're just sending it to the Bulk Data API, telling it that it's already formatted and that it has binary data.
>
> **[3:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=239)** And then, of course, the file right here, logs.jsonl.
>
> **[4:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=242)** So I'll run this guy and the data will jump up from my desktop into our Elasticsearch cluster.
>
> **[4:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=249)** So if that worked successfully, you should have just saw a bunch of stuff fly across the screen there.
>
> **[4:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=255)** Let's head back over to Kibana and see what kind of stuff we're working with.
>
> **[4:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=259)** I'm going to go ahead and delete all the other things I had from before and I'm just going to check out the indexes here, the indices.
>
> **[4:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=266)** I'll type GET and then cat indices.
>
> **[4:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=270)** And instead of just typing the actual one, you can see they're all three listed there, I'm going to say logstash-* and I will run that command.
>
> **[4:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=282)** It's showing me that there is some data loaded in there, so if we want to know exactly how much, we'll say GET logstash, give it the actual index and then here _count, you just type that and then hit enter and you can see we have an actual count of records, as documents, essentially, is what Elasticsearch is looking for.
>
> **[5:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=302)** So the data was successfully input and we were able to do so using the geo_point data type.
>
> **[5:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=309)** Now, let's move on to another data set where we're going to become even more explicit about the kind of data we're loading into it, so Kibana can know how to handle it properly.
>
> **[5:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=322)** So from here, what I want to do is head back over to my console and I just want to see what kind of data we're working with here.
>
> **[5:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=328)** We'll clear this screen, type ls to see what it is and we have our shakespeare.json file, so let's see what's in there.
>
> **[5:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=337)** We'll type head shakespeare.json and have a little look.
>
> **[5:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=341)** So we have the type, the play_name, the speech_number, et cetera, et cetera.
>
> **[5:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=347)** So we have a lot of data from Shakespeare here.
>
> **[5:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=349)** And this data is accessible in the exercise files, or you can download it from [elastic.co](https://elastic.co), as well, under the Getting Started Guide for Kibana.
>
> **[5:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=357)** This is one of the data sets they'll give you.
>
> **[5:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=359)** So we have some data here, kind of cool, and we'll clear our window again, so we're working with something.
>
> **[6:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=365)** So we'll head back over to our dev console, delete anything that's there.
>
> **[6:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=369)** And then, we're going to paste in the schema that we want for our new index of shakespeare.
>
> **[6:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=374)** This hasn't been created yet.
>
> **[6:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=375)** We're going to give it some mappings and we're going to give it some of the actual fields that are in our dataset.
>
> **[6:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=381)** So we have our speaker, our play_name, line_id, and speech_number.
>
> **[6:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=385)** And then we're giving it the data type.
>
> **[6:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=387)** So we're just, kind of, explicitly mapping what is going to be loaded up into Elasticsearch when the data comes in.
>
> **[6:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=394)** So it doesn't have to guess, it just knows exactly how to handle it.
>
> **[6:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=398)** So we'll hit play on this, we can see that that worked.
>
> **[6:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=402)** And just at the bottom of this, we can type GET cat indices.
>
> **[6:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=411)** And you can see now we have our Shakespeare one.
>
> **[6:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=414)** So we're creating a lot of stuff here.
>
> **[6:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=416)** We have our new indices, we have our data types, now let's load some data.
>
> **[7:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=421)** Back to the console, and remember in the console we have our shakespeare.json.
>
> **[7:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=425)** We're in the place where I downloaded the exercise files.
>
> **[7:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=429)** And so from here, what I want to do is issue another curl command that is going to load that up.
>
> **[7:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=434)** And this is very similar to what I've done before, or what we've been doing.
>
> **[7:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=437)** So I'll just paste in the command here, that way you don't have to see me type it out again.
>
> **[7:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=441)** And with this curl command, what it is it's going to send the POST, it's going to tell it the content type.
>
> **[7:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=446)** We'll give it the key that we set up before, the host.
>
> **[7:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=449)** Here we're going to specify exactly where it's going to go to the shakespeare index, which looks like an endpoint.
>
> **[7:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=455)** The Bulk Data API, the data is formatted, has binary data and we are going to give it the file that is from the directory we're in and then spit out the results so I can see what's happening.
>
> **[7:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=466)** I'll hit enter.
>
> **[7:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=470)** Okay, and once that is done echoing back all of the results, we can head back over to our cluster and see what's going on.
>
> **[7:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=477)** So we already know, we'll just run this guy again, make sure that didn't create a different one on accident or anything.
>
> **[8:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=483)** We have our shakespeare index here and now we can just get a count, like we did before.
>
> **[8:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=489)** Let's see what's actually in there, shakespeare count.
>
> **[8:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=496)** Yeah, you can see quite a bit of data here.
>
> **[8:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=498)** 111,000 records in there.
>
> **[8:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=501)** You can probably go dive into a document, if you'd like, as well.
>
> **[8:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=506)** And you can see the first one here, under id 1, is play name of Henry IV.
>
> **[8:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=511)** You can see the text entry is SCENE 1, London, the place.
>
> **[8:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=515)** You can kind of go through this, so it's really cool, you know, you can kind of have all this data in there and then you can traverse it.
>
> **[8:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=521)** You can do really fun things with it.
>
> **[8:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=522)** So the idea behind these exercises here is to show how to load data in, where you can get some really cool sample data and that data can be of varying types, right?
>
> **[8:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=531)** We've looked at bank data, previously, we've looked at log data from websites, and here we have, actually, scripts, Shakespeare plays loaded up.
>
> **[9:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/setting-data-types?u=76281980&t=541)** So Elasticsearch is incredibly versatile and this is just one good example here of how you can use it, no matter what kind of data that you come across.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), type. (5), delete (3), this, (3), for. (1)
> **Code Identifiers:** geo_point (5), geo_shape (2), play_name (2), speech_number (2), geo_points (1)
> **CLI Commands:** curl (5), cat (2), ls (1), make (1)
> **Env Vars:** api (3), post (2), json (1), url (1), scene (1)
> **Analogies:** such as (3), just like (1), similar to (1)
> **Exercise Files:** exercise files (4)
> **File Paths:** shakespeare.json (3)
> **API Endpoints:** get  (3)


### 4. Querying Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Simple queries
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=0)** - [Instructor] So one of the really cool features and one of the main benefits of using a platform like Elasticsearch with Kibana is the ability to run queries and have its engine figure out what you're looking for.
>
> **[0:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=11)** Sort of like a SQL engine for a database.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=14)** But here we're talking documents and search queries.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=18)** I'm back here in my dev console and what I want to do is just run through a couple different ways.
>
> **[0:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=24)** You can actually run queries against the data that we've previously loaded.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=28)** In this example, we're going to be looking at the bank index that we created.
>
> **[0:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=32)** So I'll just start out by having a look at it saying "Get bank/_search."
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=39)** And you can see all of the results here.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=41)** I have a thousand hits.
>
> **[0:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=43)** I have basically every single row of data or a document in elastic search terms or at least the first few return to me.
>
> **[0:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=50)** And this is the data we're going to be working with here.
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=54)** So that's just a basic query to give me everything.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=57)** So let's get a little bit more specific here.
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=59)** Let's start by looking for bank accounts in our data set that are in the state of California.
>
> **[1:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=64)** So start out with get, give it our index.
>
> **[1:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=68)** We're going to be hitting the search API.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=70)** And then from there, give my open bracket and it gives me a close curly brace automatically.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=76)** And we want to a run a query.
>
> **[1:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=78)** So you can see as I start typing it out, query pops up.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=82)** I'll give my myself a new line to work there and I want to do what's called a match query.
>
> **[1:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=86)** You can see that there's all these options here and we'll talk about some more of them here coming up.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=90)** But right now we'll just stick to match and we give it a field.
>
> **[1:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=93)** So if we want to find all of the accounts in the state of California, well, we have a field called State and we're using the abbreviation there the two character code for state.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=103)** So state CA, search and we hit play and we now see that our total hits are 17.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=111)** If you want to have a look you can see the state equals CA, the state equals CA.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=115)** You can just kind of see some of the examples here.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=118)** So this is just one of the most basic ways on how to run a query against our documents in our Elasticsearch database.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=126)** Now if you're familiar with databases and SQL stuff like that this would be very simple like having a where clause.
>
> **[2:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=132)** So if we want to extend this capability and write a bit more of a complex query, we have some other ways to do that.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=139)** So we'll start out again by saying get give it our index, the API we want, search open curly brace and it gives me the closed curly brace automatically.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=151)** Again, we want a query.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=153)** Here we're going to say bool for Boolean meaning I'm going to give it some conditions that are going to be true or false.
>
> **[2:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=160)** Now here I can specify a couple different ways to handle their results of these conditions.
>
> **[2:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=166)** The one I want to use is called must but also notice there is one that are called must not.
>
> **[2:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=170)** So we'll cover that one in a second.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=172)** So I'm saying must.
>
> **[2:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=173)** And now I have an array.
>
> **[2:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=174)** So not just curly braces, but actual brackets giving me an array.
>
> **[2:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=178)** So inside of the first set of curly braces I'm going to type match just like I did before.
>
> **[3:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=185)** And here we have our field.
>
> **[3:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=187)** So we have state and CA.
>
> **[3:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=191)** So essentially this query right now is doing the same thing as the previous one.
>
> **[3:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=195)** And I'm just going to kind of bring this up so it's easier to read 'cause it'll make more sense once we have the rest of it there.
>
> **[3:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=202)** So at the end of this one I'm going to put a comma and now I'm going to do another match condition.
>
> **[3:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=206)** Let me move this on my screen here.
>
> **[3:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=209)** So here I'm going to add my second clause, if you will, and it's going to say match.
>
> **[3:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=214)** In fact, I need to first give it a curly brace and then type the word match.
>
> **[3:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=219)** There we go.
>
> **[3:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=220)** Gives me the auto complete and we're going to say employer which is another field in our data set and Techade.
>
> **[3:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=227)** Okay, so let's close this guy out kind of fix some of the formatting issues here.
>
> **[3:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=233)** Sometimes it's nice to have a do that stuff for you but other times it's nice to do it on your own.
>
> **[3:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=237)** So just need to add one more curly brace and we're good to go.
>
> **[4:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=242)** So essentially what we have is two conditions that must be true, because we're using the Boolean operator in our query.
>
> **[4:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=249)** And this will return only accounts in the state matching CA with the employer of Techade.
>
> **[4:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=256)** Go ahead and hit play up here.
>
> **[4:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=258)** And you can see now the value our total hits is one.
>
> **[4:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=262)** This is the only actual account that matches our conditions and there was a lot to try to sort out but you get the idea that this could be extremely powerful.
>
> **[4:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=272)** Now let's do another query here and we're going to kind of change it up a little bit.
>
> **[4:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=276)** We're going to do sort of the opposite of this.
>
> **[4:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=279)** In fact, let's just copy this query, paste it down below and let's change that to must not.
>
> **[4:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=285)** So if I just made that one change and hit play it's going to essentially give me every record except that one that was there.
>
> **[4:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=293)** So that's simple enough.
>
> **[4:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=294)** But let's kind of combine these and see if we can even make it more sophisticated and better.
>
> **[4:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=299)** We're going to start out again typing get, giving it our index of bank, telling it the search API is what we want.
>
> **[5:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=307)** Opening up our parentheses or our curly braces.
>
> **[5:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=311)** We're going to say query like before we're going to give it bool just like before.
>
> **[5:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=317)** Now we're going to say must and inside of here match.
>
> **[5:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=323)** And for the field I want to match it with the state of CA.
>
> **[5:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=330)** And then after my must array I'm going to hit a comma and then say, must not.
>
> **[5:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=337)** And then inside of here, match and employer Techade.
>
> **[5:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=346)** So this guy is kind of combining what we saw before, right?
>
> **[5:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=351)** So I want everything in California it must match the state of California but it also must not match this employer of Techade.
>
> **[6:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=360)** So this way you can actually kind of stack these, right?
>
> **[6:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=362)** So inside of your array here for your must and must nots you can have mini conditions, but you also under bool can have multiple different conditions as well or different kinds of clauses.
>
> **[6:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=373)** I'll hit play on this and you can see now essentially we have 16 accounts in California that are not of this employer.
>
> **[6:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=380)** And if you scroll down you can just kind of see and verify that right there.
>
> **[6:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=384)** So again, more and more ways for us to write these queries here.
>
> **[6:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=388)** Let's go on to another example that is a little bit more nuanced than just this Boolean value.
>
> **[6:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=394)** And in this example we're still going to actually use that Boolean operator but we're going to use it in a different way.
>
> **[6:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=400)** So we'll start out like we always do with get, our index and then our search API.
>
> **[6:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=408)** Give it the open and close curly braces inside of here.
>
> **[6:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=412)** We'll say query, then bool.
>
> **[6:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=415)** And I'm just going to kind of let it go here.
>
> **[6:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=416)** Now what I want to do now is type in instead of match or must or any of those, we're going to type should so should is where we get more into kind of the magic behind Elasticsearch.
>
> **[7:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=428)** Now, inside of this should one I'm going to say match and the state of CA.
>
> **[7:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=436)** In addition to the state clause I want to do another one here.
>
> **[7:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=439)** So I'll do open and close curly braces and I'll say Match.
>
> **[7:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=444)** And this time it's going to be last name, but instead of just a text value where it must match exactly I want to make it a little bit more nuanced.
>
> **[7:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=457)** So I'm going to do an open and closed curly braces for this guy and put another query inside of here.
>
> **[7:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=464)** So I'm going to say query, and this is going to be Smith and I'm going to say boost three.
>
> **[7:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=475)** So now what we're doing is, Elasticsearch is looking for documents that match our query.
>
> **[8:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=482)** We're telling that it should match the state of California and it should match the last name of Smith, but boost Smith over the state.
>
> **[8:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=492)** So that way this is more of a priority.
>
> **[8:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=495)** Now, if you can imagine you're building a search engine certain terms in search queries may have higher importance.
>
> **[8:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=502)** And this is essentially how you're able to do that.
>
> **[8:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=504)** You're able to perform sort of subqueries inside of our larger query here to make it even more nuanced and more sophisticated.
>
> **[8:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=511)** I'll hit play on this and we have 18 results.
>
> **[8:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=515)** So here we have a Smith, but they're not in California they're in Rhode Island.
>
> **[8:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=520)** So again, we're boosting Smith.
>
> **[8:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=522)** So Smith is the more important one, here you have a California one, but it is not for a Smith.
>
> **[8:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=527)** Here you have California again, here you have California again.
>
> **[8:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=531)** So if we had just the Boolean operators and we didn't have this subquery, we would've only received essentially one result.
>
> **[8:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=538)** And here we're able to get a much better list of results that may match our query from our app or for our users.
>
> **[9:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/simple-queries?u=76281980&t=546)** And that just is a simple way to run some queries here in Kibana on our Elasticsearch data using that magic of the Elasticsearch engine to kind of find what the users are looking for and give them a list of results or as they put it, documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), match. (4), for. (1), this. (1)
> **CLI Commands:** make (4), find (2)
> **Env Vars:** api (4), sql (2)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** just like (2), imagine (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Term-level queries
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=0)** - [Instructor] Okay, this is 04_02 term level queries.
>
> **[0:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=5)** In addition to match queries, we also have another way that we can issue queries or another type of query that we can use with Elasticsearch in Kibana.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=14)** So we'd already know the one we've done before.
>
> **[0:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=17)** We'll start out similarly here by typing GET bank, giving it the search API, new line, giving it the open and closed parentheses typing query.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=28)** But now, instead of saying match or bool what we're going to say is term.
>
> **[0:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=33)** And term is a way that we can look for numeric values and other keyword words here.
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=39)** So what we're actually going to do is type account number.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=42)** You can see that's a part of our data set in our index.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=45)** And we don't need this whole string here.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=47)** In fact, we're just going to delete most of that and give it number 516.
>
> **[0:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=53)** So essentially what we're saying is look for the account 516 in our data set.
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=59)** You can see that we have one results and we have the max score of one.
>
> **[1:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=64)** And here it is number 516 for our actual account number.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=69)** And so that is a simple way to run that query.
>
> **[1:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=72)** Now, you could probably do that with the match as well but here's what you can't do with the match.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=77)** So let's try GET and then bank, and then in fact let's just copy this whole thing right here and paste it below.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=85)** And in this case, what I want to do is instead of looking at an account number, I want to look at the state.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=91)** So this type state, and we know that this exists, RI for Rhode Island?
>
> **[1:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=97)** And let's run this query.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=100)** You can see that we don't have any results.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=102)** So the query did execute, but the results were zero.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=106)** In fact, they were null.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=108)** So that's because state is a text field and the term queries really don't work that well with text fields, or not at all in fact.
>
> **[1:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=117)** They work more with numeric fields or other types of keyword searches.
>
> **[2:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=121)** So if we had changed this from this kind of a term search to match instead and then ran it, you'd see that we got a bunch of results here.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=131)** So that's the difference there between the match and the term queries.
>
> **[2:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=136)** So what can you do with the term query?
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=138)** Well, one of the cool things is that you can pass in ranges of things.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=142)** So let's copy that first query we had up there and let's paste it down below here.
>
> **[2:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=147)** And so we have our account number, but instead of giving it just a single number, if I put brackets around that, square brackets indicating an array, I can give it a list and also make sure that I'm looking at terms instead of just a singular term.
>
> **[2:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=162)** And I'll hit play.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=164)** And then now I have two results.
>
> **[2:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=166)** So how many hits?
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=167)** Two, max score of one.
>
> **[2:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=168)** We have the account number 516 and the account number.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=172)** Now in this terms example, I just gave it these two accounts to go look for, but if I did want to find all of the accounts between these two values, it's a numeric value.
>
> **[3:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=182)** I could copy this guy and we could kind of play on that using what's called a range query.
>
> **[3:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=186)** So instead of terms, we're going to type in range here and the account number is still correct.
>
> **[3:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=193)** We're going to delete these guys here, this little square brackets.
>
> **[3:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=196)** We're going to give ourselves some new curly brackets.
>
> **[3:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=199)** And here we're going to use some new query terms.
>
> **[3:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=201)** These are unfamiliar to you now but they'll become familiar and they're pretty self-explanatory once you get used to 'em.
>
> **[3:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=206)** So first off, what I want to do is enter gte for greater than or equal to.
>
> **[3:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=213)** Notice it put a number there for me.
>
> **[3:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=214)** This is where I'll type in that 516, meaning any account that equals that or is greater.
>
> **[3:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=220)** And then lte is the next one.
>
> **[3:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=222)** So I'll just start typing, get that guy and here we'll say 851.
>
> **[3:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=226)** And then we also want to boost it so that way these get priority over any other kind of results.
>
> **[3:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=232)** Remember, Elasticsearch is a search engine.
>
> **[3:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=234)** So what it's trying to do is return all kinds of results that could possibly meet the user's request.
>
> **[3:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=239)** So I'll hit play on this guy here.
>
> **[4:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=242)** You can see that we have a lot of accounts, 336 of 'em, max score of two, meaning some of them match exactly and then maybe others don't as well.
>
> **[4:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=251)** But you can see the account number of 518, 520, 525, et cetera, et cetera.
>
> **[4:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=257)** So this is how you could run a more sophisticated query where you're trying to find values between it.
>
> **[4:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=263)** And this is why the data types of your fields in your dataset or in your documents are mapped out correctly in Kibana.
>
> **[4:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=272)** Now, similarly, we could do other things with other fields in there as long as they're typed correctly.
>
> **[4:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=276)** So we'll do GET bank, search API, give me my curly braces and then here we'll start to type our query, will give us the range that we want.
>
> **[4:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=291)** And under range, it already populated the gte lte.
>
> **[4:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=295)** So what we're going to do here is say age which is a field in our data set.
>
> **[5:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=300)** And let's just look for where the age is 35 or greater.
>
> **[5:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=305)** So we'll delete this lte clause there, make sure we get rid of that comma, and we can run this guy.
>
> **[5:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=311)** So here, this is a much more practical query, right?
>
> **[5:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=313)** We're looking for any accounts where the age, presumably the age of the account holder, is 35 or above.
>
> **[5:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/term-level-queries?u=76281980&t=321)** And this is just one of the ways that you can come up with more accurate results for your users using term level and range queries.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), delete (3), match. (1), case, (1), pass (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (2), find (2)
> **API Endpoints:** get  (3)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)

#### Analysis and tokenization
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=0)** - [Instructor] So far, we've been learning how to run different kinds of queries without really understanding what's happening on the backend.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=7)** And so in this module, what I want to do is kind of show you how things are working, and how the tokenizer that is used to analyze a query can change how that query is handled and what it could mean in terms of the results.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=21)** And if that sounds like a mouthful, trust me, it'll make sense here in a little bit.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=25)** So I'm also following along from the script 0403 in the exercise files, if you have that downloaded.
>
> **[0:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=32)** We have here in Cabana our indices.
>
> **[0:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=36)** I just wanted to pull those up, show you what we're working with.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=38)** And most recently, we were working with our bank index.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=41)** So I'll just go there and I want to type in bank, and instead of search this time, I want to type in analyze.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=47)** I'll hit Enter and then give me my new curly braces here to enter my query.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=52)** And I'm going to say tokenizer.
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=54)** And for that type of tokenizer, I'm going to enter standard.
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=59)** So this is just the standard one there.
>
> **[1:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=61)** And I want to pass in some text for this tokenizer to analyze.
>
> **[1:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=65)** I don't need the brackets here in this case.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=67)** What I'm going to type in is The Moon is Made of Cheese Some Say.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=75)** And you can also just paste this in if you want.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=76)** But now what is going to happen when I run this is we're going to get the results.
>
> **[1:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=81)** We're going to analyze what's actually happening when it wants to parse the data that was passed in, parse the query.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=88)** So you can see that it created tokens.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=91)** And the tokens here are for every single word, right?
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=95)** And you can also notice that it kept the capitalization.
>
> **[1:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=98)** So it's telling me that the type of each one of these is alphanumeric.
>
> **[1:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=101)** And this is just a simple phrase that was passed in using the standard tokenizer.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=106)** But what if we had a more complex kind of a query?
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=109)** Well, let's copy that here, paste this down.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=113)** And instead of just The Moon is Made of Cheese Some Say, correctly, let's put dashes here.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=118)** So what if it was The Moon dash is dash Made of Some Cheese dot Some Say and dollar sign.
>
> **[2:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=128)** Well now we run this with these kind of more complex characters coming in, not just basic alphanumeric characters, you can see that it actually stripped out some of these characters.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=138)** So The Moon, and it still parsed those dashes as spaces, is Made of Cheese dot, so it included the dot as a single token, a single word, essentially, and the same type.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=151)** And then it stripped out that dollar sign at the end.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=153)** So that is kind of a weird query coming in.
>
> **[2:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=157)** And it speaks to how just even using the standard tokenizer, Elasticsearch here is able to parse it in a way that makes sense.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=164)** You're trying to get at what could the user possibly be querying for here?
>
> **[2:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=168)** What are they trying to understand?
>
> **[2:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=169)** That's what is called a mixed string.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=172)** Now we can change the type of tokenizer that we're using to get different results.
>
> **[2:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=177)** So let's copy this query and I'll paste it down.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=180)** You can also just change it in place, but I want to do it so you can see 'em all on the same page here.
>
> **[3:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=185)** And we'll type letter.
>
> **[3:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=187)** Now when I run this query here, we're going to have a bit different results.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=192)** In fact, notice that the type is not alphanumeric anymore, it's word.
>
> **[3:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=198)** And also it parsed out that dot right there.
>
> **[3:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=201)** So there's no longer Cheese dot Some as a single alphanumeric token.
>
> **[3:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=206)** We have two separate ones.
>
> **[3:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=207)** It parsed that out.
>
> **[3:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=209)** It's not a singular token anymore.
>
> **[3:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=210)** And it's recognizing these as words for Cheese and Some.
>
> **[3:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=215)** So this one is actually doing a bit better, 'cause we're telling it essentially what type of data that you're going to be receiving in that query.
>
> **[3:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=223)** Now what about a URL or some other kind of text that you may actually want to consider what's in there?
>
> **[3:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=228)** Well, there's a tokenizer for that.
>
> **[3:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=230)** So we'll type GET, bank, analyze, give me my curly braces, here for tokenizer, we're going to say uax underscore url underscore email comma text.
>
> **[4:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=249)** And inside of here, what I want to type is you@[example.com](https://example.com) login at [https://ben](https://ben) [sullins.com](https://sullins.com) attempt.
>
> **[4:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=264)** So something that you might see in sort of a web log, right?
>
> **[4:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=267)** So how is it going to handle it with this kind of tokenizer?
>
> **[4:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=271)** Well, we'll hit play here, and you can see that it actually kept that.
>
> **[4:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=275)** So you@example, and it even recognizes that first bit of text there as the type of email.
>
> **[4:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=282)** We got alphanumerics, alphanumerics.
>
> **[4:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=284)** And then we also down here have a URL.
>
> **[4:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=287)** So this type of tokenizer gives us a different way of handling that text, which can be crucially important depending on what type of input you have here.
>
> **[4:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=296)** And again, if I did standard here and ran this again, we're going to get something very different.
>
> **[5:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=301)** So for example, you and [example.com](https://example.com) were separated out.
>
> **[5:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=305)** So the tokenizer can play a big role in how data is actually handled here.
>
> **[5:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=310)** And I'll turn this back to you for the example.
>
> **[5:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=312)** So uax, url, email.
>
> **[5:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=316)** Run this guy again just so you have it.
>
> **[5:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=317)** And you can see it's recognizing things as much more complex in the different bits that are in there in creating proper tokens.
>
> **[5:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=325)** Now let's try where we can have different fields in an index handle data in a different way by using a different tokenizer.
>
> **[5:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=332)** I'm going to paste this in from the script here so I don't have to type it all out and you don't have to watch me fumble through it.
>
> **[5:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=337)** But what we're going to do is we're going to create a new index called idx1.
>
> **[5:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=342)** We're going to give it some mappings, the properties, and we're going to have one of the fields be title, and that is going to be a type of text and an analyzer of standard.
>
> **[5:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=352)** And then we're going to have another one called english title, which is also text but it uses the English analyzer, not the standard analyzer.
>
> **[6:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=360)** So I'll go ahead and create this index.
>
> **[6:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=363)** Looks good.
>
> **[6:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=364)** I'm not going to go look at it or anything, I don't care.
>
> **[6:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=366)** There's no data in it.
>
> **[6:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=367)** But what I want to do is send some data to it to see how this index would handle it.
>
> **[6:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=372)** So if we say get, like a get request, idx1 slash analyze open curly brace, close curly brace.
>
> **[6:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=382)** And here we're going to say field and the field is going to be title.
>
> **[6:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=387)** So if this data was coming in, and here we're going to say text, and for the text we want to give it Bears with a capital B.
>
> **[6:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=398)** Okay, so passing in this field, or this value to this field which is set up with these properties, it's going to use the standard analyzer.
>
> **[6:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=408)** And if we hit play on this guy, you'll see what it does.
>
> **[6:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=411)** It returns a token of bears type alphanumeric, but it also lowercased the text.
>
> **[6:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=418)** So you kind of lost that if that was a bit of data that was important.
>
> **[7:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=422)** So if we wanted to change this exact thing here, I'll just copy and paste it again so you have 'em both on the screen, and here, instead of passing that value into title, I'm going to say english title.
>
> **[7:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=434)** You can see it listed there and hit play on this one.
>
> **[7:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=437)** You can see that it actually ignored the capital, but it stripped, it's not bears, it's bear.
>
> **[7:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=444)** So once again, let me run it here.
>
> **[7:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=446)** It dropped the capital from the first letter and it kept the rest of the word.
>
> **[7:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=452)** But under english title it dropped that because that's how that analyzer works.
>
> **[7:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=458)** It doesn't want things to be plural.
>
> **[7:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=461)** So the idea here is to learn just a bit about how we set up our fields inside of Elasticsearch.
>
> **[7:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=467)** And then when we run queries on that, what is going to happen?
>
> **[7:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=472)** What kind of tokens are being created and how are those tokens being treated?
>
> **[7:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=476)** It can really mean a big difference in the results being returned.
>
> **[7:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=479)** And at this level, I don't think you need to go deeper than that.
>
> **[8:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/analysis-and-tokenization?u=76281980&t=482)** But if you ever do find results that maybe don't match what you're expecting or things aren't behaving how you would expect them to, this is a great place to start digging into.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (1), pass (1), case. (1), type. (1)
> **URLs:** [example.com](https://example.com) (2), [https://ben](https://ben) (1), [sullins.com](https://sullins.com) (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** url (2)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)


### 5. Analyzing Your Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Basic aggregations
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=0)** - [Instructor] All right, now we're going to have some fun here in Elasticsearch.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=4)** And what we're going to do is run queries, which are known as aggregations.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=10)** This is when we actually get to see numbers, and we're not just doing, say, a search query that's based on some form of text or some form of input from a user.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=18)** Here, we as an analyst, or data scientist, or just the app developer that wants to understand more about the data we have in our cluster, we can run these queries to get actual metrics back.
>
> **[0:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=29)** So first, we're going to start with our bank index.
>
> **[0:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=33)** So we'll say GET bank, and then we're going to use the search API, and we're going to give it the open and closed parentheses.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=41)** So from here we're going to say, let's type it, I'll hit that.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=45)** Size 20, we're going to say size 0, and then we'll hit a comma.
>
> **[0:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=50)** We're going to give it aggs, which are the aggregations, the summarization, if you will, the min, the max, the mean, the average, all those kind of things.
>
> **[0:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=58)** So we'll do aggs, and here we're going to say states.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=62)** And for the agg type, we're going to go on terms, and then inside of here, we're going to say field.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=69)** And then the field is going to be one of our fields, and then it's going to be state.keyword.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=75)** Okay, so we'll run this guy here.
>
> **[1:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=78)** And what you can see are basically a count, doc_count, in our state's aggregation, which is what we called it, right?
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=87)** So we have a bucket, essentially, of every value which is triggered by this state's keyword here.
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=95)** So this is kind of how to think of this.
>
> **[1:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=97)** You have buckets, and inside of there you have metrics.
>
> **[1:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=99)** So the most basic one that it gives you is doc_count.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=103)** So in Texas we have 30, Maryland, we have 28, and these are all the different state codes, et cetera.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=108)** So that is how to do an aggregation query in its most basic form.
>
> **[1:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=114)** The cool thing is that we can actually nest these.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=116)** So I'll copy this query, paste it down below, and after we have our first aggregation, we want to add a second one here.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=126)** So right after the terms, we're going to hit comma, and then we're going to do another aggs query.
>
> **[2:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=134)** And in here we want to create an aggregation calls avg_bal or average balance.
>
> **[2:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=140)** Now, the aggregation type is going to be average, and then for the field, it's going to be balance.
>
> **[2:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=148)** So here, if when we run this guy, what we're going to get is something that's a bit more advanced.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=153)** So similar to before, we have our state's aggregation at the top, because that's the first one we created.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=159)** We're kind of nesting aggregations here, so the order is very important.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=164)** And inside of the state's aggregation, we are keying off of the state code, the TX, the MD, whatever.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=171)** Inside of there, we're getting our doc_count, but then we have our separate aggregation, which lives in the scope of this key, and we're getting the average balance.
>
> **[3:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=182)** So it's just saying val here but we're calling it average balance and we are running an average of that field.
>
> **[3:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=189)** So this is how you can start to build out really good metrics.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=192)** Imagine if you're returning data to your app or to a user, you could return data to them in a way that is meaningful using these types of aggregations.
>
> **[3:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=202)** Now let's break it down further with additional nesting here.
>
> **[3:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=207)** So here, what I'm going to do is just copy that query we've been working on and paste it down below.
>
> **[3:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=212)** All these scripts here are logged in the 05_01 script in the exercise files, by the way, so if you don't want to follow along, you can refer back to that and just copy and paste.
>
> **[3:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=222)** And so here what we can do is add a further aggregation, a further breakdown, after our average balance.
>
> **[3:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=229)** So what I want to do here is find this guy where the second aggs ended, I'll type new and I'm going to enter a new one here called age.
>
> **[3:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=239)** So I'm going to have a separate breakdown, make sure the quotes are in the right place, give it a colon, an open and close parens.
>
> **[4:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=249)** And then we need to add more terms.
>
> **[4:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=251)** And here for the field, it's going to be age.
>
> **[4:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=254)** Get rid of the size parameter.
>
> **[4:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=258)** So when we run this query, what we see is the breakdown at the state level, which we've seen before.
>
> **[4:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=263)** The key being the state code, which we told it in this case TX for Texas.
>
> **[4:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=267)** How many documents are matching that?
>
> **[4:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=270)** In our case these would be number of bank accounts.
>
> **[4:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=272)** The average balance of those bank accounts at the state level, than the further breakdown of age where we have more buckets.
>
> **[4:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=281)** And the key here is going to be the actual age.
>
> **[4:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=284)** So in this case, what this means is the account holders who are 21 years of age within Texas, how many of them do we have?
>
> **[4:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=292)** Five.
>
> **[4:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=293)** How many at 24, how many at 28, et cetera.
>
> **[4:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=295)** So this is how you can create a sort of nested or hierarchical view of analytics inside of your Elasticsearch data.
>
> **[5:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=305)** Now again, we can add a further aggregation on here and this will be the last one, I swear.
>
> **[5:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=310)** I'm going to copy this query, paste it down below and then what I'm going to do is actually just paste in this new aggregation from the script there.
>
> **[5:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=319)** And so this is another agg, and we're doing average balance.
>
> **[5:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=323)** We're doing an average of the field balance.
>
> **[5:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=325)** So basically the same as before, but because we're pasting it down here it's going to be in our age bucket.
>
> **[5:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=331)** So now when I run this, you're going to see essentially the same as before the key of Texas at the top level the document count, in this case the number of accounts, and then the average balance at the state level.
>
> **[5:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=343)** Then if you wanted to ask, "Well, what is the average balance of people that are 21 years old in the state of Texas?"
>
> **[5:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=350)** Well, it's this amount right here.
>
> **[5:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=353)** So this is how, again, you can get just really granular with the analytics and what you're trying to do.
>
> **[5:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=358)** And what's kind of neat about that is if you return the data this way in your app or on your website or however you're presenting this information, you can create drill downs.
>
> **[6:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=367)** You can actually have end users drilling down and interacting with this data in a way to just answer tons of different questions that they may have.
>
> **[6:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=375)** So once they see that first answer they may go, "Hmm, that's weird, let me drill down further."
>
> **[6:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=379)** And this is how you can kind of have all these different breakdowns based on your data living inside of Elasticsearch.
>
> **[6:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=386)** Now, in these examples, we've been kind of explicitly stating what we want to see, the average of a specific field.
>
> **[6:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=392)** But what if I just wanted to see a bunch of different stats?
>
> **[6:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=395)** It's actually quite a bit easier than all this that you're looking at the screen here.
>
> **[6:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=398)** So I'm going to just create some new space here.
>
> **[6:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=400)** And I'll start out by saying GET bank/_search for the search API.
>
> **[6:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=407)** Give me my curly braces and this time we're going to say size of one.
>
> **[6:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=415)** Now we're going to do our aggs.
>
> **[6:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=417)** And inside of here we're going to call it balance-stats.
>
> **[7:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=422)** And for the agg type, it's going to be stats.
>
> **[7:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=426)** See that there.
>
> **[7:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=428)** And then inside of this guy we'll have a field of balance.
>
> **[7:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=436)** All right, I'm guessing you know what you're going to see when we hit run.
>
> **[7:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=439)** We're actually going to see one result for an account here.
>
> **[7:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=443)** And then down below we're going to get all the aggregations.
>
> **[7:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=447)** So we get the count, the min, the max, the average, and the sum.
>
> **[7:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=451)** So this is kind of a neat way.
>
> **[7:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=452)** You can kind of play with this and, you know, vary the actual answers and how you want to see the results.
>
> **[7:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=458)** We don't want to see any results here.
>
> **[7:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=459)** Let's just look at the aggregations overall or how about try dropping this guy into one of our hierarchical buckets here and see what all of the stats are at all those different levels.
>
> **[7:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=470)** So Elasticsearch has a lot of this stuff built in.
>
> **[7:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=473)** It's a really great way to run different statistical type queries on your dataset.
>
> **[7:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=477)** And of course, you can also see how incredibly quick it is.
>
> **[8:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/basic-aggregations?u=76281980&t=481)** Just more power that is available to you by using this platform.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (2), this. (1), case, (1), this, (1)
> **Code Identifiers:** doc_count (3), avg_bal (1)
> **CLI Commands:** find (1), make (1)
> **API Endpoints:** get  (2)
> **Env Vars:** api (2)
> **Analogies:** similar to (1), imagine (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** known as (1)

#### Filtering aggregations
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=0)** - [Instructor] In addition to the basic aggregations that you can do using Elasticsearch and how easy and nice that is, you may want to filter or kind of give different slices of those aggregations.
>
> **[0:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=11)** And that is possible using different filters on top of these aggregations.
>
> **[0:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=17)** Let's start with a basic one like we were doing before.
>
> **[0:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=20)** We'll say GET bank search, do my opened and closed curly braces.
>
> **[0:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=27)** We'll say size of zero, meaning we don't want any results returned.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=34)** For the name of our aggregation, or this aggregation, we'll do states.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=38)** We're going to remove the ag type here, and we'll do terms.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=42)** And for the field it's going to be state keyword.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=46)** We'll remove the size there, delete that, and we can just run this guy here.
>
> **[0:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=51)** So, now all we're getting is dot count.
>
> **[0:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=53)** We didn't actually do a metric, this is just the basic one they give you.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=57)** And essentially, we're showing all the different keys that are available here.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=60)** So, we're bucketing by state.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=62)** This we know, this is the basic way to start it.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=66)** Now, this is essentially like doing a match all query.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=69)** In fact, right past the size option here we can type in query and under here do match all and just run this exact same query, and we'll see we get the exact same results.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=82)** So, 1,000 results, which is our entire data set.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=85)** But because we're now doing a query and an aggregation we can start to do more things with that.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=91)** So, imagine we only wanted our aggregations to be returned for California.
>
> **[1:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=96)** Well, under match all we can kind of wipe that out and just type match, and here do state.keyword.
>
> **[1:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=104)** And the result is going to be CA, or we're going to filter to CA.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=108)** Hit Play now and the value is 17, the number of hits.
>
> **[1:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=112)** So, we can see that that was just a real simple way to do a filter.
>
> **[1:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=117)** Now, because we're doing a filter inside of a query we can revisit all the other ways that we do filters, including using a Boolean operator.
>
> **[2:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=127)** So, I'm going to paste this in so you don't have to watch me type it all out from the script 05_02 in the exercise files.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=133)** And under this here we have query.
>
> **[2:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=137)** I'll get rid of what was there before and bring this guy back over so it makes sense.
>
> **[2:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=143)** And what we have here essentially is a bool, meaning that the conditions I give it must be true, match of state keyword, just like we had, but now we're also going to add in a range query.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=155)** So, if you remember from that previous example now we're able to use this gt, or gte if we want, greater than or greater than or equal to.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=164)** We'll keep it back to gt, where the age is greater than 35, meaning the account holder in our data set, of this bank data set, is above 35.
>
> **[2:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=174)** Now, I still want to get the aggregations, but I also want to filter using these conditions that I just passed in here.
>
> **[3:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=182)** And when we run that you can see that those results dropped down to six from 17.
>
> **[3:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=187)** So, we're not just looking at California anymore, we're looking at those with age over 35.
>
> **[3:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=194)** So, we can keep building upon this, right?
>
> **[3:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=196)** We can kind of do more in terms of our filtering and in terms of our aggregations.
>
> **[3:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=201)** So, let's add actually an aggregation back in from before, which was the average balance.
>
> **[3:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=207)** So, after our aggregation down here, after the state keyword, I'm going to just paste this in from the script, and we're going to create a new ag called average balance on the field balance.
>
> **[3:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=220)** So, pretty straightforward.
>
> **[3:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=222)** I'll hit Play on this guy, and now what you can see there is the average balance within our conditions.
>
> **[3:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=228)** So, it's within our bucket because it's below this ag, so we have our second one here.
>
> **[3:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=233)** And then it is adhering to our query, which has this Boolean operator and two different conditions we're giving it.
>
> **[4:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=241)** So, you can really kind of combine and stack all the things we've been learning in this course to provide very relevant and very good results to your customers, whether that be a business person on a business intelligence kind of situation or an actual app or website.
>
> **[4:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=256)** Now, another cool thing that you can do with this aggregation engine built in to Elasticsearch is perform aggregations at different levels.
>
> **[4:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=264)** And so, this could be very difficult in other programming languages or other data platforms, say a SQL database or something.
>
> **[4:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=271)** So, I'm just going to paste this in, and I'll walk you through this last example here where what we're going to do is look at the state and global average.
>
> **[4:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=281)** So, we're going against our index using the search API.
>
> **[4:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=284)** We don't actually want to see the results, we just want the aggregations.
>
> **[4:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=288)** Our first aggregation here is the state average.
>
> **[4:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=291)** We're going to key off of the state keyword, so that's normal.
>
> **[4:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=295)** We're going to get the average balance at that level, that's what we were just doing above.
>
> **[4:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=299)** And then I have another one, so this is one aggregation here.
>
> **[5:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=304)** I'm going to also have one which is my global average.
>
> **[5:07](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=307)** Now this one doesn't have that terms state keyword there, this one is just global.
>
> **[5:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=312)** I'm actually using that explicit term global, and I'm going to pull back that exact same aggregation.
>
> **[5:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=318)** So, in this case when I run this guy what you'll see is it pulled all the data here, the aggregations, the global average, dot count is 1,000, right, 'cause that's all of it, and the average balance is for everybody, right?
>
> **[5:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=333)** Then dropping down to the state average, so this is our other aggregation here.
>
> **[5:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=338)** This one, it has each different state broken out, so the dot count within it and then the average balance within it.
>
> **[5:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=345)** Now, this is actually very nice and is a great function here because in a lot of other platforms, like I mentioned, that kind of multi-hierarchical aggregation is very difficult to pull off.
>
> **[5:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=358)** And notice, it was basically instantaneous here.
>
> **[6:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/filtering-aggregations?u=76281980&t=361)** So, that is one way that you can stack multiple aggregations and include a higher level aggregation using this global parameter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1), match, (1), this, (1), function (1)
> **Env Vars:** sql (1), api (1)
> **Definitions:** essentially is (1), is a  (1)
> **Analogies:** imagine (1), just like (1)
> **API Endpoints:** get  (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Percentiles and histograms
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=0)** - [Instructor] Elasticsearch offers some advanced ways of analyzing data above and beyond your basic aggregation, such as min, max, average, or count.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=10)** So today, what we're going to look at is percentiles in histograms.
>
> **[0:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=15)** If you're familiar with that from a statistics class or some kind of statistics background, this will all make sense to you, but, otherwise, I'll try to explain it and, kind of, keep it simple as to when you would use this type of analysis.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=26)** Let's start here by looking at our search API for our bank index.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=34)** We're going to tell it "size" of 0 'cause we don't want any actual results back, we just want to see the answer.
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=39)** We'll do an aggregation here.
>
> **[0:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=40)** We're going to call it "pct_balances".
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=42)** So this is the percentiles of balances.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=45)** And then for AGG type, we're going to change that.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=47)** You can see all the different ones here.
>
> **[0:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=48)** We're going to change it to "percentiles", and then you can see it automatically populated everything here.
>
> **[0:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=53)** These are the different percentiles it wants to give you.
>
> **[0:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=56)** And for the field, we're going to give it "balance".
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=59)** So what this is going to do it's going to tell us, essentially, how many accounts are at each different level here.
>
> **[1:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=65)** Like what number of accounts are within the one percentile, the 25 percentile.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=70)** This tells us sort of a distribution.
>
> **[1:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=72)** You know, how many of these are at the low level versus the high level?
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=76)** And what do those percentiles look like in terms of a distribution?
>
> **[1:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=79)** So that way we can actually understand how to run different statistics on them.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=83)** It's more of a deep fine-grain thing, but one that you definitely will be using when you're looking at large sets of data.
>
> **[1:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=89)** Now let's keep going and use it a different way, of a percentile, to come up with an answer to a question here.
>
> **[1:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=96)** So, essentially, what I want to know is how many accounts have a value between 35,000 and 50,000?
>
> **[1:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=105)** Essentially, what percentile of accounts are within those buckets?
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=109)** So we we'll do a similar query, GET bank/_search, open and close curly brace, "size": 0, and we just want the result, "aggs".
>
> **[2:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=123)** I'm going to call it bal_outlier.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=125)** So what we're trying to figure out are any outliers out there.
>
> **[2:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=128)** And here, we're going to go "percentile_ranks".
>
> **[2:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=134)** So a little bit different.
>
> **[2:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=135)** The field is going to be "balance", and the values are not 10 and 15.
>
> **[2:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=140)** That would be pretty low, I imagine, for this kind of data.
>
> **[2:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=143)** And we'll just, kind of, clean that up so it's similar.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=146)** All right, and here, we're going to say 35000,50000.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=151)** So how many accounts or what percentile of accounts live within that range there?
>
> **[2:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=157)** And it turns out none.
>
> **[2:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=158)** We do not have any that are outside of those bounds.
>
> **[2:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=162)** So what the percentile_ranks is saying accounts with $35,000 are in the 69th percentile, and accounts with 50,000 are in the 100th percentile.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=172)** So this way we can kind of see how much of an outlier a certain account may be.
>
> **[2:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=176)** This could be used in, sort of, a fraud detection where you actually run a query.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=180)** You find out what percentile of accounts are within these two buckets, and if a new one is coming in that is way outside of it, then that could be an outlier.
>
> **[3:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=189)** Now another way to actually analyze the data in, kind of, a more succinct manner is using what's called a histogram.
>
> **[3:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=196)** And this is very useful in statistics to understand the distribution of your data and how different statistical models may apply to it.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=204)** So we'll start again with GET bank/_search.
>
> **[3:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=210)** Give me my open and close curly braces.
>
> **[3:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=213)** "size": of zero.
>
> **[3:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=217)** "aggs".
>
> **[3:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=219)** We're going to call this "bals" for balances.
>
> **[3:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=222)** And here, we're just going to type in "histogram".
>
> **[3:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=225)** And for field, we don't want price, we want "balance".
>
> **[3:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=229)** And the interval, we'll do 500.
>
> **[3:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=232)** So this is a very, very simple way, again, of coming up with a really interesting dataset.
>
> **[3:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=237)** So here, you have the key inside of our buckets.
>
> **[4:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=241)** Then this is essentially the balance 'cause that's the field we're keying off of, and in there, you're seeing the count of documents at that level.
>
> **[4:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=250)** Then you have 1500, 2000, 2500, et cetera, et cetera.
>
> **[4:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=254)** And so this, if you were to graph this, it would be really helpful and insightful to understand the actual distribution of the accounts in terms of their balance.
>
> **[4:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=264)** Now, of course, this is an aggregation, and so you can drop this into a filter or a query where you have multiple buckets.
>
> **[4:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=271)** Let's say you wanted to look at a global versus a state level versus a state level of people of a certain age, et cetera.
>
> **[4:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=278)** Histogram is just a different type of aggregation in terms of Elasticsearch eyes.
>
> **[4:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=283)** And you pass in these two fields here, and bang, you've got this really good dataset coming out.
>
> **[4:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/percentiles-and-histograms?u=76281980&t=288)** And that is one of the ways that you can use Elasticsearch for more advanced statistical analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), type, (1), pass (1)
> **Code Identifiers:** percentile_ranks (2), pct_balances (1), bal_outlier (1)
> **CLI Commands:** make (1), find (1)
> **API Endpoints:** get  (2)
> **Env Vars:** api (1), agg (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1), imagine (1)
> **Cross-References:** coming up (1)


### 6. Presenting Your Insights

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Kibana overview and setup
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=0)** - So, along with Elasticsearch, the actual engine that stores our documents, and allows us to use APIs to put data in and pull it back out and manipulate it, do all the fun things we've been doing, there is Kibana, which is a really great way to interact with this data in a visual kind of interface, one that doesn't require a lot of coding.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=21)** So, to get set up here, the way I want to get this working for you, is to analyze some log data.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=26)** First, we're going to click on our little hamburger menu, and go down to Stack Management.
>
> **[0:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=31)** Now, if you remember earlier, we actually imported some data here, and we'll go down to Kibana and Data Views, and that data was from Logstash.
>
> **[0:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=40)** That's an actual engine that logs things, and has web requests coming to a web server.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=46)** So, one of the key, kind of most common use cases for Elastic, probably some data that you have available at your organization.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=52)** So, under Data Views here, what I want to do is click Create Data View, and I want to give it a name, logstash.
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=59)** You can give whatever you want but for me this makes the most sense.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=62)** And I'll just start typing logstash-.
>
> **[1:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=65)** So, the format of the data that we built before, each index was for a different day.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=70)** So, you can kind of see the days listed here of the data we have available to us.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=75)** I'm going to give it the index pattern of logstash-, so anything coming in that matches that pattern will automatically be added and then in Kibana, automatically update our visualizations and everything else.
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=87)** Now with this data, it has a timestamp associated with it, so that's really useful because that helps us do a lot of really interesting things on the analytics side.
>
> **[1:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=96)** So, once we create our data view here, we'll click Save data view to Kibana.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=103)** Now, once that's saved, you can see what it did here, but I'm less interested in actually digging into this, and I'm more interested in going up to Kibana itself.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=111)** So, Kibana here on the Elastic Cloud is called Analytics, and in there I just want to hop over to the Discover tab.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=118)** So, in the Discover tab, you'll see in the top left which data view we're looking at, and you can see these match the ones that were in there before.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=126)** Here is the one that we just created for Logstash.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=129)** We click on that, and I've already pre-selected the dates here, but if you haven't done that, or if you don't see any results up in the top right, you'll see the date filter for this, because this is a time-based dataset, there's the timestamp field.
>
> **[2:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=141)** Go ahead and update that to May 17th, 2015 at 1700 hours, to May 20th, 2015 at 1600 hours, and you'll be seeing the same thing I am here, and this is just a nice way to kind of explore.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=155)** I can click on Fields, I can see what's in them.
>
> **[2:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=158)** I can even pull in field statistics, if I want, where it looks at each of the individual ones and sees the distribution among them.
>
> **[2:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=165)** I mean, there's just so much and it's so easy to just pop in here to individual documents, as well as to look at individual fields.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=172)** So, that is the basics of getting this set up.
>
> **[2:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=175)** Now, because you're using Elastic Cloud, Kibana is already installed and configured and connected to your cluster.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/kibana-overview-and-setup?u=76281980&t=180)** So, it is really nice and easy, and it's a great way to start learning how this works, without being burdened by all the different setup and configuration stuff, which you may not be interested in.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), interface (1), require (1), else. (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (2), setup (1)
> **Speakers:** - so (1)

#### Creating visualizations in Kibana
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=0)** - [Instructor] So here in Kibana, let's create some visualizations.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=4)** I'm going to click on my hamburger menu and then go down to where it says visualize library.
>
> **[0:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=9)** Here is where you actually create data visualizations.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=12)** So we'll click on this big, beautiful button right there.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=14)** And I'm going to use this feature here called Lens.
>
> **[0:16](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=16)** I really like it because it is an easy way to explore the data.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=21)** When you click on that, it gives you this interface here, but it doesn't have the right data view, so let's click on that and go down to Logstash.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=28)** Now we have all of the data that is available in that data view, which came from those files we loaded previously.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=34)** And the beauty of this is I can literally just drag things around and see what happens.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=38)** I can change the chart type right here.
>
> **[0:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=40)** And it's just a really nice, intuitive interface, much better than the previous version.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=45)** So first, what I want to do is create a chart which shows me how many visits we're getting to our website over time.
>
> **[0:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=51)** So a simple way to do that is to drag records over here.
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=54)** And I already have the dates filtered up in the top right, so if you're not seeing this exact thing, go ahead and change that there.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=60)** And in there I can change the type of chart.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=63)** And so I could do a line chart, which would be a very good one, or I could do an area chart, for example, if you want to make it a little bit nicer to look at.
>
> **[1:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=71)** And this is a typical way that we would look at data over time.
>
> **[1:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=74)** Usually what we're looking for visually is the steepness of the angle between the two data points, not necessarily the dots or the size of the bars, whatever.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=83)** And so, you can do that here, and then of course we can change this if we wanted to, but for me, this is the simple way to create a time series analysis.
>
> **[1:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=93)** So I'll click save here and I'll give it a title of Visits by Hour.
>
> **[1:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=98)** I'm not going to put it on a dashboard yet, 'cause we'll look at how to do that later.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=102)** I'll just click save and add to our library.
>
> **[1:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=104)** So there we have it.
>
> **[1:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=105)** Now if I click up in the top left, I go back to my library, I have my chart.
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=109)** I can jump back in, and there it is.
>
> **[1:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=112)** Cool, so that's step one.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=113)** Now let's create a map.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=115)** I'll create another visualization.
>
> **[1:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=117)** Here I'm just going to click on maps.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=118)** In fact, if I were in Lens, and then I wanted to do maps, well, I'll show you what happens.
>
> **[2:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=122)** You go in here, and we want to find our geo coordinates, which is the field we have.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=126)** It's already typed, notice the different color here.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=129)** I'm just going to drag that on.
>
> **[2:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=130)** It's going to say, "Hey, I can't do that, sorry."
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=133)** Go ahead and drag it down here to open it in maps, and it jumped me over immediately.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=138)** So I could have just started with maps, but I kind of like the idea of just always using the same Lens.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=142)** And so now I'm here, it created a new layer, and within that layer I can do some things.
>
> **[2:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=147)** So I'm going to zoom in here.
>
> **[2:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=149)** We're a US-based company in this example.
>
> **[2:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=152)** So all these dots, they don't make a whole lot of sense, right?
>
> **[2:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=156)** It just looks like a mess.
>
> **[2:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=157)** There's really nothing to it, so we need to edit that layer.
>
> **[2:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=160)** I'll click on my Logstash layer here.
>
> **[2:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=163)** I'll go down, and instead of using just vector tiles, I'm going to say "Show clusters when results exceed 10,000."
>
> **[2:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=169)** So that way, we're going to get bigger bubbles with numbers on them.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=172)** Ah, that's better, I can actually read that, and it kind of is more insightful.
>
> **[2:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=176)** Then beyond that, I'm not just going to fill it with a solid color.
>
> **[3:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=181)** Color is one of the key attributes we can use to affect the visualization, so I'm going to choose by value and then I'm going to choose a field here.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=188)** For this, I'm just going to choose bytes, meaning where did most of the requests come from.
>
> **[3:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=193)** I can also adjust the color of the border to a blue that kind of makes more sense, and there you have it.
>
> **[3:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=199)** And I could also change this to an orange or a red, or whatever, but blue seems to be a fairly good one there.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=204)** All right, so now we've been able to color code by a value, we've been able to manipulate that, and we were also able to change kind of the display, and so I'll save and close this.
>
> **[3:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=213)** And what happens now is we're not set on these numbers.
>
> **[3:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=216)** As I zoom in, you see that it starts to break it down further.
>
> **[3:40](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=220)** This data is at latitude and longitude, so it actually gets pretty fine-grain when I start to zoom in there.
>
> **[3:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=227)** And then as I zoom back out, it's going to aggregate that back up for me.
>
> **[3:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=230)** Now of course you could spend countless hours formatting all of this.
>
> **[3:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=233)** I'll leave that to you, but all that is done very simply in this interface here for the map.
>
> **[3:58](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=238)** I'll click save and call this Traffic Locations.
>
> **[4:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=243)** I'll choose none, and I'll save it, and now I have a map.
>
> **[4:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=249)** Okay, so let's create some more visualizations here.
>
> **[4:11](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=251)** I'm going to head back over to my visualize library.
>
> **[4:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=254)** You can see the two we've just created.
>
> **[4:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=255)** One is with Lens and the other is with maps.
>
> **[4:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=259)** I'm going to click create.
>
> **[4:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=260)** I'm going to go back to Lens.
>
> **[4:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=261)** And this one I just want it to be total visits given the timeframe we're looking at.
>
> **[4:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=265)** So I'm going to drag records on over.
>
> **[4:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=268)** Gives me this guy, but I'm going to click on my visualization type and I'm going to go down to legacy metric.
>
> **[4:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=275)** And there you go, count of records, 14,001.
>
> **[4:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=278)** Now I'm going to click on this metric on the right side.
>
> **[4:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=281)** And here, instead of count of records, I'm going to say total visits.
>
> **[4:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=286)** I'll go ahead and click save and we'll call this Total Visits KPI.
>
> **[4:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=293)** We're not going to put it on any specific dashboard yet.
>
> **[4:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=295)** Click save and we are good to go.
>
> **[4:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=297)** Now we're going to do this a couple more times.
>
> **[4:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=299)** I'll go back to my visualize library, create visualization, Lens.
>
> **[5:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=305)** This time I'm going to do clientip.keyword.
>
> **[5:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=309)** Drag that on over.
>
> **[5:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=310)** It gives me this, is not what I want.
>
> **[5:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=313)** Give me that legacy metric again.
>
> **[5:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=315)** Count of records.
>
> **[5:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=317)** But here it went back to that one.
>
> **[5:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=319)** I'm going to drag it on to unique count of clientip.keyword.
>
> **[5:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=323)** Makes no sense, so instead we're going to call this Unique Visitors.
>
> **[5:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=329)** Got it, save, say Unique Visitors KPI.
>
> **[5:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=336)** Do not add it to any existing dashboard.
>
> **[5:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=337)** Click save.
>
> **[5:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=339)** We'll go back and do one more.
>
> **[5:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=341)** And this one is going to be for the number of bytes.
>
> **[5:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=345)** So if I start typing bytes, you can see it's a number here.
>
> **[5:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=348)** I'll drag it over.
>
> **[5:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=350)** Instead of vertical bar I want legacy metric.
>
> **[5:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=354)** And that's actually fine, median of bytes.
>
> **[5:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=356)** I don't mind that, but I want it to show is that bytes, is it kilobytes, megabytes, what is it?
>
> **[6:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=362)** So the value format under appearance is going to be actually bytes.
>
> **[6:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=366)** So there you go.
>
> **[6:08](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=368)** Now I can leave it as median of bytes or I can change that title if I want.
>
> **[6:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=372)** I'm fine with it.
>
> **[6:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=373)** I'll click save and I'll say Median Bytes KPI.
>
> **[6:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=379)** So KPI, if you're unfamiliar, is key performance indicator.
>
> **[6:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=382)** A lot of times you think of it just as a single metric is a way to think of that.
>
> **[6:26](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=386)** There's a lot more science behind it, but in common vernacular, that's what KPIs are.
>
> **[6:30](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=390)** Okay, we've created essentially everything we need here to really get an understanding of the traffic to our website.
>
> **[6:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=397)** So there's one more visualization I want to create, and it's just a list of the most popular pages here.
>
> **[6:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=402)** I'm going to go into Lens and I'm going to search for title, give me the page title.
>
> **[6:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=408)** Drag that on, gives me this thing which I don't want.
>
> **[6:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=411)** I'll click on the type of chart and click table.
>
> **[6:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=414)** And it tells me essentially how many visits were to each one of these pages.
>
> **[6:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=419)** Now this doesn't make quite sense, so I'm going to click on this field here, this metric, and I'm going to go down.
>
> **[7:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=424)** I want the 10 rows in descending order.
>
> **[7:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=429)** And I'm going to say top 10 pages.
>
> **[7:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=434)** Call it like that.
>
> **[7:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=435)** So we've got top 10 pages.
>
> **[7:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=438)** And then you can say rank by count of records is fine.
>
> **[7:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=442)** We're going to not group as other ones as others so that way we don't have that big kind of funky thing on the bottom.
>
> **[7:28](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=448)** And there we go, so now we have our top pages and we have a good list of them so people can actually see what it is.
>
> **[7:37](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=457)** All right, so let's click save and say top pages.
>
> **[7:43](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=463)** Not to any dashboard, click back on our visualization library, and we were able to create many visualizations here.
>
> **[7:49](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=469)** And this new Lens feature is really great.
>
> **[7:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=471)** It's almost Tableau-esque, if you're familiar with Tableau.
>
> **[7:54](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=474)** But play around with this.
>
> **[7:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=475)** Create some visualizations if you want.
>
> **[7:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-visualizations-in-kibana?u=76281980&t=477)** They've got lots of different kinds here, as well as when you click on it it'll show you other types that it recommends, and so I think this is a really great way in Kibana to create different visualizations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (3), this. (3), this, (2), from. (1)
> **UI Navigation:** click on (10)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** kpi (4)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (3)
> **Analogies:** for example (1), kind of like (1)
> **Speakers:** - [instructor] (1)

#### Creating dashboards in Kibana
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=0)** - [Instructor] Another great feature in Kibana is the ability to create dashboards.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=4)** So we already have bevy of wonderful data visualizations here, and what I want to do is essentially combine those to a single page, that is essentially what the definition of a dashboard is.
>
> **[0:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=13)** It's a single page of charts explaining a single topic, letting the user kind of explore and understand what's happening in a single area.
>
> **[0:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=23)** So to get started, we can click this little tooltip right here, but if that's not there, we'll click the hamburger menu dropdown and go over to Dashboard.
>
> **[0:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=32)** From here, we will create a Dashboard, and here, we need to bring in some of our data visualizations.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=38)** We already have our date filter up here, on the top right, which is really nice.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=42)** So we'll click Add from library and we have all of them here.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=45)** So I'm going to add the KPIs first, because I want to format those before I kind of bring any of the other ones in.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=52)** When I click it, notice it just brings these ginormous tiles here which is definitely not what I want.
>
> **[0:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=56)** So I'm going to bring this guy over, kind of drag it like that.
>
> **[1:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=61)** I'll drag this next one just over here.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=63)** It's very free flowing.
>
> **[1:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=64)** I'm not sure I actually like this.
>
> **[1:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=65)** I would kind of prefer it to be more structured than what it is, but easy to get going nonetheless and kind of nice that it's fluid.
>
> **[1:14](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=74)** So, we'll drag.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=75)** Let's see, total visits on top.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=77)** That kind of makes sense.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=77)** Maybe it's probably the most important metric.
>
> **[1:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=79)** And then, unique visitors.
>
> **[1:21](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=81)** There you go.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=82)** We'll hit Cancel.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=83)** All right, so we have kind of those three there.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=85)** Let's bring in some new ones here.
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=87)** Let's start with our Visits by Hour, which is our chart.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=91)** Very nice, that looks good.
>
> **[1:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=93)** Now let's add in our Traffic Locations, which is our map.
>
> **[1:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=98)** Good, just below that.
>
> **[1:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=99)** Let's add in our other one here, Top Pages.
>
> **[1:44](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=104)** And this one kind of went down there.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=106)** Let's drag this guy off to the right.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=108)** Actually, let's kind of move this first.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=111)** We can drag this guy over.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=113)** There we go, and kind of bring this guy up.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=115)** So this can be something that a person would scroll through, see, so we got that there.
>
> **[1:59](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=119)** Bring this guy down so it matches there, bing, and then a person can kind of scroll and see that stuff.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=125)** Good to go.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=126)** And then for the map, maps are generally good when they're bigger.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=129)** So let's make this bad boy full screen here.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=133)** So that way, a person can come here.
>
> **[2:15](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=135)** They can see on the left, the different KPIs.
>
> **[2:17](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=137)** They have this here.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=138)** You could also put the KPIs on top.
>
> **[2:20](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=140)** There's a lot of wiggle room in here.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=142)** So you know, choose whatever layout you think works best for you.
>
> **[2:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=145)** And there, essentially, is all you need to do.
>
> **[2:29](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=149)** Of course, you can go way beyond this in terms of customizing how things look.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=153)** There's, you know, different titles and things like that.
>
> **[2:36](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=156)** Like, let's say I wanted to get rid of those.
>
> **[2:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=158)** I can do that, or I could also get rid of this bit that's inside of the chart there to make this cleaner and nicer.
>
> **[2:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=165)** But essentially, I have created a dashboard.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=167)** Now, what I want to do next is click Save and we'll call this Web Traffic Main.
>
> **[2:56](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=176)** This will be like our main dashboard here.
>
> **[2:57](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=177)** Click Save, and now we have this dashboard.
>
> **[3:01](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=181)** Really beautiful.
>
> **[3:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=182)** As the data flows into Elasticsearch, this would automatically update.
>
> **[3:06](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=186)** I have these dates specifically set here because we know we're just working with some sample data, but this could also be dynamically generated to be today, this week, last 15 minutes, et cetera, so it is pretty powerful.
>
> **[3:18](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=198)** You know, this was just an example to show you how that's working but if you had real data flowing in, you would definitely want this to be more sort of real time.
>
> **[3:25](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=205)** And that way, you could put it up on a display in your marketing area or maybe your network operation center, whatever the case may be.
>
> **[3:32](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=212)** Now from here, we also have a few more options.
>
> **[3:35](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=215)** We can share this, we can embed it, we can do PDF, we can do PNG.
>
> **[3:39](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=219)** There's all kinds of ways you can send this to people.
>
> **[3:41](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=221)** You can also have a sort of this view mode, which you can see.
>
> **[3:45](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=225)** You can even go full screen, and this would be really nice if you had it up on sort of a network operations center.
>
> **[3:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=230)** So dashboards in Kibana, really straightforward once you've already created your data visualizations, or you could actually just start with the dashboard and it would allow you to create visualizations from right there.
>
> **[4:02](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=242)** But that is essentially it.
>
> **[4:03](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/creating-dashboards-in-kibana?u=76281980&t=243)** Make sure to use color wisely on here and that the flow all makes sense, and you have the most important information highlighted for your users.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (1), this, (1)
> **CLI Commands:** make (3)
> **Env Vars:** pdf (1), png (1)
> **UI Navigation:** dropdown (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps with Elasticsearch
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980&t=0)** - As we've seen, Elasticsearch is much more than just a search engine.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980&t=4)** In fact, many data analysts, DevOps professionals, and marketing professionals rely on Elasticsearch daily for their work.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980&t=10)** The journey isn't over, however.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980&t=12)** There are many more concepts, tools, and platforms to understand before you become truly experienced in this platform.
>
> **[0:19](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980&t=19)** To continue this journey, I recommend checking out other related courses, such as Data Science Foundations: Data Engineering, SQL Tips Tricks and Techniques, Analyzing Big Data with Hive, and any of the top 10 courses I have out there, such as the ones on computational linguistics, machine learning, or business intelligence.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980&t=38)** With the skills you've learned here, and that you'll get with these additional courses, you are well on your way to becoming a truly powerful data scientist.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980&t=46)** Feel free to connect with me online, as well as remember, when you free the data, your mind will follow.
>
> **[0:50](https://www.linkedin.com/learning/elasticsearch-essential-training-2023/next-steps-with-elasticsearch?u=76281980&t=50)** Thanks for watching this course and I'll see you back here next time.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Code Keywords:** continue (1)
> **Env Vars:** sql (1)
> **Speakers:** - as (1)


## Instructor

- [[Ben Sullins]]

## Resources

- Exercise files available

## Skills Covered

- Elasticsearch

## Path Context

### In [[Develop Your NoSQL Skills]]
← [[Introduction to Couchbase]] | **8 of 10** | [[Elasticsearch in Depth]] →

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Elasticsearch in Depth]] — Elasticsearch

---

[↑ Back to top](#)