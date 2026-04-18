---
type: course
slug: elasticsearch-in-depth
url: "https://www.linkedin.com/learning/elasticsearch-in-depth"
duration_minutes: 87
duration: 1h 27m
level: Intermediate
updated: 3/27/2023
learners: 4262
skills:
  - Elasticsearch
exercise_files: true
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/elasticsearch
status: not-started
created: 2026-04-17
---

# Elasticsearch in Depth

> With its ability to index and search documents using plain text, Elasticsearch has become one of the most popular and widely adopted search engines. In this course,
Edward Capriolo goes beyond the basics of what Elasticsearch can do. Edward covers specialized data type and query support—like using pipelines to enhance data and combining fields to simplify searching. He shows you how to execute adv

> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth) | 1h 27m | Intermediate | 4K learners

## Instructor

- [[Edward Capriolo]]

## Resources

- Exercise files available

## Skills Covered

- Elasticsearch

## Table of Contents

### Introduction

#### Much more than full-text searches
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980&t=0)** - [Narrator] Elasticsearch is one of the most popular search engines, but many may not know that Elastic can do more than full tech search.
>
> **[0:08](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980&t=8)** Elasticsearch is a document database that offers the ability to store documents while indexing specific fields inside the documents.
>
> **[0:15](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980&t=15)** These indexes are distributed and replicated across clusters of tens or even hundreds of server computers.
>
> **[0:22](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980&t=22)** My name is Edward Capriolo.
>
> **[0:24](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980&t=24)** I'm a technologist who has been lucky enough to take on a number of big data challenges.
>
> **[0:29](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980&t=29)** I have designed and implement systems that store and analyze terabytes of data using a variety of so-called NoSQL systems.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980&t=37)** If you're ready to pull up your sleeves and learn how to utilize advance in-depth features of Elasticsearch, join me in my LinkedIn learning course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started

#### The Elasticsearch stack
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=0)** - [Instructor] In this section, we will give a brief introduction to the Elastic stack, and the best place to start is the heart of the stack, Elasticsearch.
>
> **[0:08](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=8)** Elasticsearch is designed as a fully distributed data store, meaning that multiple computers, or sometimes as we call them nodes can work in concert to divide and replicate data, but for smaller cases, it can scale down to a single node for lighter workloads.
>
> **[0:22](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=22)** Elasticsearch is a document data store and it uses JSON as a native document type and API.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=30)** Internally, Elastic heavily leverages Apache Lucene as a storage format.
>
> **[0:35](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=35)** Lucene is a specialized database engine with the ability to search structured data, as well as blocks of text, like emails.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=42)** Document databases are not as standardized as SQL databases, so we'll run through the basics to help provide some groundwork for the rest of the course.
>
> **[0:50](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=50)** On the right, we have a document.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=52)** We're calling it document, and we're giving an ID of 45.
>
> **[0:55](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=55)** It has two fields inside it.
>
> **[0:58](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=58)** One is an age, which is a number, and the other is a nickname, which is a list of strings.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=63)** Note that in Elastic, elements could be singular or list based without ischemic change.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=69)** On the left, we have a simplistic description of a data node in an Elasticsearch cluster.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=75)** Notice the outer container is called an index.
>
> **[1:18](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=78)** This can be a bit confusing for those from a relational database background where the primary data structures are called tables, and the specialized structures to optimize searches inside those tables are called indexes.
>
> **[1:29](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=89)** In Elasticsearch, index is the primary data container, not a table.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=94)** Elastic uses HDP as an interface to the database.
>
> **[1:38](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=98)** When a document like the one on the right is inserted, it is sorted in a single shard, and from there it can be further searched or modified.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=106)** Now, let's understand how a cluster of nodes can work together.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=110)** Elastic assigns different roles for physical nodes.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=113)** A common role is the leader node.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=115)** The leader is decide who's in charge of shards.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=118)** Another common role is a data node.
>
> **[2:01](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=121)** Data nodes actually hold the data, so typically what people do is they have a few leaders possibly divided across different racks or data centers for redundancy, and then as many data nodes as they need to solve their problem.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=133)** Each index has a shard count and a replication factor.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=138)** In this case, the document on the bottom left is going to the my stuff index, and since it's replicated, it goes to two separate data nodes.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=146)** This provides both performance and replication redundancy.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=151)** Take note that some features in Elastic are affected by how many shards an index has.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=155)** For example, some features in Elasticsearch use term frequency, inverse document frequency to figure out scores, effectively how often a word is used, and based the on number of shards, the corpus on each node may be different, but this is a finer point we could get into later.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=171)** Finally, we can discuss the Elasticsearch stack.
>
> **[2:54](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=174)** On the top here we have Elasticsearch, which is the document database we've just been discussing.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=180)** However, there are many tools that work with it.
>
> **[3:02](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=182)** Throughout this course, we're going to use Kibana, which is a web interface for Elastic and note, Kibana is a very, very elegant, full featured web interface to work with Elastic.
>
> **[3:13](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=193)** It's not just some, oh, let's add a web interface to this thing.
>
> **[3:16](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=196)** It's a very useful tool, and we'll be using it for the rest of the course.
>
> **[3:19](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=199)** Outside of that, there's other components you could use.
>
> **[3:22](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=202)** Outside of Kibana, there are other tools, like Beats and Logstash.
>
> **[3:26](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=206)** Logstash is very popular, 'cause many people take their log data and store it in Elasticsearch, and Logstash is especially made to help capture and move that data into Elasticsearch, sometimes finessing it on the way in.
>
> **[3:38](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=218)** Also note that there are some options which aren't part of the standard open source Elastic distribution that are provided by the Elastic vendor, such as graph and machine learning.
>
> **[3:49](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=229)** We won't talk about those during this course, but they're very interesting in and of themselves.

> [!info]- Semantic Content
>
> **Definitions:** is a  (9), is an  (1), is called (1)
> **Code Keywords:** interface (4), let (2), case, (1), finally, (1)
> **CLI Commands:** node (5), apache (1)
> **Env Vars:** json (1), api (1), sql (1), hdp (1)
> **Warnings:** note that (3)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Installing Elasticsearch and Kibana locally
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=0)** - [Instructor] This section will focus on installing Elasticsearch in Kibana.
>
> **[0:03](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=3)** This will help you do the remainder of the materials in this course.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=7)** Please note that this setup is only for local demonstration purposes and wouldn't be how you'd set up a production server.
>
> **[0:13](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=13)** So to get started, I've moved my way onto the Elasticsearch page and found a download link.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=18)** As I mentioned, there's other ways to run Elastic, potentially as a web service, but in this case, we're going to just download the binaries and run them locally.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=26)** My laptop is Windows, so I've chosen it as a platform.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=28)** Other options are available here.
>
> **[0:31](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=31)** These links will provide you with the ZIP file, which is the entire Elasticsearch distribution.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=37)** Likewise, we're also going to download Kibana.
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=39)** Again, you could choose the distribution that's appropriate for you.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=42)** Both Elasticsearch and Kibana are binaries of a decent size.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=45)** However, with a broadband connection, you'll download them fairly quickly.
>
> **[0:48](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=48)** I unzipped them and I want to take this opportunity to walk through the directories of them just so we understand their layout.
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=54)** Elasticsearch is written in Java, so the majority of this application runs on a variety of platforms, including Windows, Linux, and Mac.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=63)** In these type of applications, it's common to have a bin folder where executable scripts are, a config where your configuration exists, data where your data is stored, and logs.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=75)** On my machine, I didn't have to customize this application at all to start it.
>
> **[1:19](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=79)** So let's move back and look at Kibana.
>
> **[1:26](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=86)** Kibana has a similar setup in actuality.
>
> **[1:29](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=89)** However, one thing to note that Kibana is written in Python whereas Elasticsearch, as we mentioned, is written in Java.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=94)** The way I like to run Elastic is through the command prompt.
>
> **[1:37](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=97)** It may seem a little archaic at first, but I think it makes it easier to see log files or startup issues.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=103)** So the trick here is to navigate to the directory where you've downloaded Elastic from.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=108)** In my case, I know it is this directory.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=111)** As you're navigating, you could use some tricks like dir to list the directories or cd to change directory.
>
> **[1:57](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=117)** But in this case, all I have to do is type Elasticsearch and this triggers the elasticsearch.bat file or batch file.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=125)** With this type of application, no news is good news, so if you don't see any error messages, it's safe to assume Elastic has started up.
>
> **[2:12](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=132)** If you want to be more sure, you can navigate your browser to localhost:920.
>
> **[2:16](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=136)** You should see a message similar to this, which shows us that Elastic is indeed up and running.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=142)** We could do a similar thing for Kibana.
>
> **[2:24](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=144)** We could navigate to the directory that we downloaded Kibana to.
>
> **[2:27](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=147)** Then switch the cd folder and then run Kibana, which will trigger the kibana.bat file.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=153)** Once Kibana is done loading, you'll see a message like this that says Kibana is now available and Kibana is available on localhost:5601.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=164)** Kibana here is warning us that we don't have security enabled.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=167)** That's okay 'cause we're only running it locally.
>
> **[2:49](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=169)** In a production environment, if you saw this message, you should definitely not dismiss it.
>
> **[2:53](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=173)** Throughout the course, we use the Dev Tools feature quite a lot.
>
> **[2:56](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=176)** That can be found here.
>
> **[2:58](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=178)** You could look through this left menu and navigate to Dev Tools.
>
> **[3:04](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=184)** This gives us a query interface to execute commands against Elastic.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=188)** But remember, elastic is really just an HTTP server so you could always use cURL or some other tool to run the commands.
>
> **[3:14](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=194)** I just find Kibana to be the most useful.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (1), from. (1), this, (1), switch (1)
> **CLI Commands:** cd (2), python (1), curl (1), find (1)
> **UI Navigation:** navigate to (3)
> **Warnings:** note that (2), warning (1)
> **Prerequisites:** setup (2), set up (1)
> **URLs:** [localhost:920](https://localhost:920) (1), [localhost:5601](https://localhost:5601) (1)
> **Ports:** :920 (1), :5601 (1)
> **Env Vars:** zip (1), http (1)

#### Executing basic CRUD-like data operations
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=0)** - [Instructor] In this section, we are going to demonstrate how to do basic create, read, update and delete or CRUD operations.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=7)** Let's take note of some important aspects in the design of Elasticsearch.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=12)** First, the protocol is HTTP based.
>
> **[0:15](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=15)** This makes it easy to use when compared to other databases that may only have a binary interface.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=21)** Even a user with a browser, JavaScript, cURL or Postman has full ability to execute every operation the database supports.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=30)** Throughout the course, we use Cabana dev tools which is a simple tool to execute commands.
>
> **[0:35](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=35)** But it could as easily be done with tools, like we mentioned above, or a high level API written in a programming language like Java.
>
> **[0:43](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=43)** Next, the Elastic API leverages concept from restful web services, like using HTTP verbs.
>
> **[0:50](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=50)** A user wishing to add a document uses an http PUT verb or retrieving a document uses a GET verb.
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=59)** In the cases where the requests are complex, Elastic uses structured JSON in the body of requests.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=66)** This is called the Querydsl.
>
> **[1:08](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=68)** In the case of Elastic, the DSL or domain specific language exposes the unique features that Elastic offers.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=76)** So here we're going to type.
>
> **[1:19](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=79)** The C in CRUD stands for create.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=82)** And we could start with that.
>
> **[1:24](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=84)** We start with the PUT verb, which is appropriate since we are creating data.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=88)** The URL next contains the name of an index, bowled over, which will hold the data.
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=95)** In this case, we append underscore doc, which has a special meaning to Elastic.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=100)** And the final path of the URL is the ID for the document.
>
> **[1:44](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=104)** Even though this looks like a number, it's actually a string.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=106)** For the body, we are using a JSON document and including three fields: first name, last name and average.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=113)** If the insertion is successful, the results will look like that on the right, or the successful count is one.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=125)** Let's insert a second user.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=126)** To do this, we copy and paste it.
>
> **[2:08](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=128)** But notice we changed the ID in the URL.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=131)** If we didn't, we would accidentally overwrite the first document.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=139)** Let's remove the data we just created.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=142)** For this, we'll use the DELETE verb and specify the same URL.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=146)** In the right, we could see what the status result should look like when we match a document and delete it.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=151)** Quickly, let's look at what some of the endpoints return when you attempt to delete a document that does not exist.
>
> **[2:46](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=166)** Here we showed the status of what happens when you attempt to read and delete a document that doesn't exist in the index.
>
> **[2:53](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=173)** Now let's look at another use case.
>
> **[2:55](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=175)** What if we want to add additional fields to an already existing document or update it?
>
> **[2:59](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=179)** For this, we do not need to know the entire source, only the fields you wish to add.
>
> **[3:04](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=184)** In this example, let's give bowler number one a nickname of lincoln.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=188)** To do this, we start with a POST verb.
>
> **[3:11](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=191)** In the first part of the URL, we put the index name.
>
> **[3:13](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=193)** In the second, we put update.
>
> **[3:15](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=195)** In the third path, we put the document ID.
>
> **[3:19](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=199)** We're also adding the refresh equals true so that Elastic will re-index this data right away.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=204)** To update the doc, we use a JSON body.
>
> **[3:27](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=207)** We put a doc object.
>
> **[3:29](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=209)** And inside it, all the fields inside the doc become part of the original document.
>
> **[3:33](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=213)** We could fetch the document back to see if it's been added.
>
> **[3:40](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=220)** Now the fun part.
>
> **[3:41](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=221)** The R in CRUD is read.
>
> **[3:43](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=223)** It is Elasticsearch after all.
>
> **[3:45](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=225)** So let's explore some ways to search our data.
>
> **[3:48](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=228)** If we don't know the idea of a document, we could search it out using the search endpoint.
>
> **[3:57](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=237)** We start it with the GET verb.
>
> **[3:59](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=239)** Again, we mentioned the index name.
>
> **[4:01](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=241)** And this time, we referenced the underscore search end point.
>
> **[4:04](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=244)** Instead of an ID, we added a q parameter to the query and specified a value.
>
> **[4:08](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=248)** Notice it even included a star.
>
> **[4:10](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=250)** The star is like a wild card match.
>
> **[4:13](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=253)** Using q searches across all documents and all fields.
>
> **[4:17](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=257)** If we're only interested in the document data and not the extraneous data Elastic adds to the response, we could use the filter path parameter.
>
> **[4:25](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=265)** Let's give it a try.
>
> **[4:30](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=270)** Since we added hits dot hits dot underscore source, you could see, on the right, we only get the body of the match documents.
>
> **[4:39](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=279)** Let's do a more advanced search.
>
> **[4:40](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=280)** Let's find averages between a minimum and a maximum using range queries.
>
> **[4:45](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=285)** This could be done using the q parameter as well.
>
> **[4:48](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=288)** We will specify the field average and includes beginning and end values.
>
> **[5:03](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=303)** While we've mentioned that Elastic uses REST whenever possible, larger, more complex queries become hard to express even in a URL, even using query parameters.
>
> **[5:13](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=313)** We'll do a few examples that use a query body.
>
> **[5:16](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=316)** We could transplant the queue into the query string object.
>
> **[5:24](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=324)** Notice, this particular query object is very sensitive to white space, so be careful.
>
> **[5:29](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=329)** Adding a single space here makes the query return no results.
>
> **[5:34](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=334)** The rest of the course will cover more complex aspects of Elasticsearch.
>
> **[5:39](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=339)** We will show how to update or delete by query and how to do more complex searching, like nested bool queries.
>
> **[5:46](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=346)** For now, we're going to only give you the most basic match all query, so you could get an idea of what other features may be out there as the auto-complete scroll by.
>
> **[5:57](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=357)** As we could see, there's match, match all, match phrase, match prefix.
>
> **[6:01](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=361)** We won't have time to show all of these features.
>
> **[6:04](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=364)** But you could poke around and try the data yourself.
>
> **[6:06](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=366)** For now, we're just going to do the most basic match all, which returns all documents.
>
> **[6:14](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=374)** Let's add Bob back to see if we could find Bob.
>
> **[6:22](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=382)** As you can see on the right, match all returned all documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), delete (6), this, (4), interface (1), type. (1)
> **Env Vars:** url (6), crud (3), json (3), http (2), api (2)
> **API Endpoints:** put  (2), get  (2), delete  (1), post  (1)
> **CLI Commands:** find (2), curl (1)
> **Definitions:** is a  (1), is called (1), stands for (1)
> **Cross-References:** we mentioned (2)
> **Code Identifiers:** curl (1)
> **Tools:** postman (1)

#### Using Elastic SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=0)** - [Instructor] In this section, we are going to use Elastic SQL to query data.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=4)** Elastic is a document database that stores JSON documents, and it has a Query DSL that actually uses JSON as the primary language of interacting with the database.
>
> **[0:13](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=13)** That being said, SQL is a widely popular declarative language to query databases.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=18)** Users with SQL experience could leverage Elastic SQL to do many types of queries.
>
> **[0:23](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=23)** Let's get started using a data set of user-generated content for blogs or poetry.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=28)** We're going to insert two documents.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=30)** Each has an author, a date, a title, and a package, and we'll let Elastic create the schema dynamically.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=45)** Now, to search documents, the most common way is to use the Query DSL.
>
> **[0:49](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=49)** We could put together a simple match query looking for some words in the passage, and we could find some matches.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=60)** Here, we constructed a simple match query that's looking in the passage fields for bowling, dinner, cheer, or award.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=67)** This matched some documents.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=69)** Again, it takes some time to ramp up and learn Query DSL, and since SQL interface is so popular, it could answer a lot of basic queries.
>
> **[1:18](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=78)** So let's search the author field using SQL, and see if we could find the same poem.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=90)** Let's start by running the most basic query.
>
> **[1:33](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=93)** Here, we'll hit the SQL endpoint, setting the format to text, and we'll make a body feeding one parameter, a query, which is running Select Star.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=103)** This returns two results, one by Nathaniel Bowlmorn, and another by Whiph Onpin.
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=109)** Let's use a filter to query the results down.
>
> **[1:54](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=114)** Here, we used a where clause in the same way in the Query DSL we would use a filter query.
>
> **[1:59](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=119)** While it is not possible to do every type of SQL query in Elastic SQL, the language is powerful.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=125)** Let's construct a group and count query.
>
> **[2:17](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=137)** This query has a few sections.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=138)** In the first, we're selecting the author field and an aggregate field, which is the count.
>
> **[2:23](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=143)** Then we're using a from section to reference our index.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=146)** We're using a where section to filter the data, and we're grouping by author.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=151)** Also, notice we use the three quotes for our query.
>
> **[2:34](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=154)** This allows us to do multi-line queries fairly easily.
>
> **[2:42](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=162)** If we remove the format equals text, we could see that the result is returned as JSON, and also, importantly, it has a cursor, which would allow us to retrieve larger result sets and page through them.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=180)** The endpoint has a translate feature.
>
> **[3:02](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=182)** This takes the SQL query and converts it to a Query DSL query.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=188)** This is a really great way to learn the Query DSL language.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=192)** As you could see on the right, the query's been broken down into two parts.
>
> **[3:16](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=196)** The filter is done as a wild card query on the author field, and the grouping is done in an aggregation query.

> [!info]- Semantic Content
>
> **Env Vars:** sql (10), dsl (6), json (3)
> **Code Keywords:** let (6), interface (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### Basic Elastic schema and data design
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=0)** - [Instructor] In this section we'll discuss and show examples of schema and data design in Elastic.
>
> **[0:06](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=6)** Use cases of Elastic vary.
>
> **[0:08](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=8)** Some may use it as a primary database meaning it is possibly the only place data is stored.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=14)** Other times Elastic is used to supplement the primary database.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=18)** This is common because many relational databases are well suited for dealing with discreet rows and tables or columns of fixed width while Elasticsearch can store documents with megabytes of text and provide sophisticated searching inside these documents such as fuzzy matching or boosting.
>
> **[0:35](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=35)** When using Elasticsearch as a supplemental database, it is possible not to store the initial source document.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=41)** This might be a little bit hard to wrap your head around but think about it this way.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=45)** When indexing data like text for searching, the data is tokenized and normalized to make the searching more efficient.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=52)** Thus, if you only need the data in Elastic for that case, storing the original document isn't strictly necessary.
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=59)** This is a very important design decision because if the source data is not stored in Elastic, it can be hard to debug how something is working and features like re-indexing can't work.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=69)** Elastic generally advises that you should store the data and I would say you should as well.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=75)** Let's go through an example where we choose not to store the source data.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=80)** Let's quickly demonstrate setting no source.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=83)** On line three, we've created an index definition.
>
> **[1:26](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=86)** We're starting with mappings and we're using the underscore source field, and we're setting the enabled attribute equal to false.
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=95)** Here we're inserting a simple document.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=100)** And here we've defined a search.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=102)** In this case, we're searching where the author keyword is Nathaniel Boulmore.
>
> **[1:47](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=107)** Let's see if we find the data.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=110)** In this case, we do.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=111)** Remember the source isn't saved so all we know is that document ID matches this search.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=116)** Let's give an example of how this can be difficult.
>
> **[2:00](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=120)** Here are then another search, which seems to be exactly the same, but something is different.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=125)** I'm searching not in the author keyword field but the author field, which has been tokenized.
>
> **[2:10](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=130)** Notice how without the source data, it's very hard to understand why this query would work and this query wouldn't work.
>
> **[2:16](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=136)** In Elastic, every document has an ID.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=139)** During insertion, if the user does not specify an ID, Elastic will create one dynamically.
>
> **[2:25](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=145)** If the user does select an ID, Elastic will use that.
>
> **[2:29](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=149)** This is implications depending on if the action is an insert, an upsert, or an update.
>
> **[2:34](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=154)** And take note that when specifying an ID, Elastic does have to do some more work on the right path.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=159)** This is an important design that affects how your application will work.
>
> **[2:43](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=163)** For example, if you're doing blind rights and you don't use an ID, you could potentially introduce duplicates in a failure scenario.
>
> **[2:50](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=170)** This might be okay.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=171)** Maybe you'll remove the duplicates in your query phase later, or some other background process will do it.
>
> **[2:57](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=177)** But you may want tighter control and you may want to use updates to make sure documents could only exist once.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=183)** To illustrate this, we're going to create a simple data set.
>
> **[3:11](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=191)** Notice on line 47, we're using the put verb and we're specifying an ID of one.
>
> **[3:18](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=198)** We could also change this and use the post verb.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=204)** In this case, we don't have to specify a document ID.
>
> **[3:34](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=214)** This worked.
>
> **[3:35](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=215)** Notice the ID created is returned on the right.
>
> **[3:38](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=218)** We could use this to search the data.
>
> **[3:49](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=229)** Again, remember, note that this approach could easily create data duplication.
>
> **[3:54](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=234)** Each time this request is resent, I'm getting a new ID.
>
> **[3:59](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=239)** There's now 29 documents of this than the database.
>
> **[4:02](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=242)** Elastic is often described as a near realtime search engine.
>
> **[4:06](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=246)** While many operations are atomic like put or get, other operations like fuzzy matching rely on indexes to be rebuilt to reflect the latest data.
>
> **[4:16](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=256)** Rebuilding an index is expensive, especially for high data volumes, so it's usually only done periodically.
>
> **[4:23](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=263)** In order to show how the refresh interval works, we've put together this script.
>
> **[4:27](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=267)** We're going to create an index, set the settings for the refresh time to be 30 seconds.
>
> **[4:35](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=275)** We're going to insert some data and then retrieve it using the get API.
>
> **[4:39](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=279)** Then we're going to look for it to search API.
>
> **[4:41](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=281)** If we do this quickly, the data won't be found, but then if we search 30 or 31 seconds later, it should be found.
>
> **[4:48](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=288)** Let's give it a go.
>
> **[5:01](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=301)** The data is found here as we could see on the right.
>
> **[5:04](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=304)** Notice the data is not found.
>
> **[5:07](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=307)** We'll wait a little while.
>
> **[5:09](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=309)** La de da, waiting for some data.
>
> **[5:12](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=312)** Waiting, waiting, waiting, waiting, waiting waiting.
>
> **[5:16](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=316)** Hm, da da.
>
> **[5:18](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=318)** Oh, there it is.
>
> **[5:20](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=320)** So this shows you the effect of the refresh interval, and again, this setting is in place because built a new index is an expensive process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (4), this, (1), while. (1)
> **Definitions:** is an  (3), is a  (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (2)
> **Analogies:** such as (1), for example (1)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### Document database schema topics
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=0)** - [Instructor] In this section we're going to cover document database schema topics including types, mapping, and dynamic schemas.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=7)** Before we get started, however, I'd like to take a minute to compare document databases to relational databases.
>
> **[0:13](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=13)** Relational databases are very common and thus there's lots of information about how to design them.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=18)** Typically, databases have one-to-one relationships, one to many relationships, many to many relationships, and there's volumes of material on how to create a database correctly either in third normal form or fourth normal form or even fifth normal form.
>
> **[0:32](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=32)** Document databases are different.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=34)** There's not as much theory on them.
>
> **[0:36](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=36)** Many of them fall into the category of noSQL or newSQL stores and people have to come up with new patterns.
>
> **[0:43](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=43)** Typically in a document database, you do normalizing because joins and other relationships aren't as easy to model.
>
> **[0:49](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=49)** Then the question becomes how do you divide your data?
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=52)** Do you put it in one very large document?
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=54)** Does it have nested documents inside of it or subsections?
>
> **[0:58](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=58)** That takes some specialized learning and, quite frankly, some trial and error.
>
> **[1:01](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=61)** So what we're going to do is we're going to just start with a simple schema and get more complicated as we explain some of these things.
>
> **[1:08](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=68)** So the first things many people think is they may believe that Elastic Search is schemaless.
>
> **[1:14](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=74)** You could come to the web interface of Elastic and you could create a document with a date and age and a nickname and say insert this into an index called Simple Schema.
>
> **[1:24](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=84)** And Elastic accepts it even though we haven't set up any schema at all.
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=87)** So they might believe it's schemaless, but that isn't true.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=90)** A mapping was created dynamically that we could take a look at by hitting the mapping endpoint.
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=95)** As we could see on the right here, Elastic Search auto detected the schema, and in this case correctly, or at least we think it's correctly.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=103)** Let's insert another more complex document.
>
> **[1:45](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=105)** Here notice the nickname is a single field, but here it's an array.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=110)** We've added two new objects.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=111)** One is called Complex Type and one is an array called Complex Data 2, which has Complex objects inside of it.
>
> **[2:01](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=121)** Elastic Search allowed us to insert this data.
>
> **[2:03](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=123)** Let's see what the mapping looks like.
>
> **[2:07](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=127)** As we can see, the mapping is getting much larger.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=129)** We have Complex Data Defined, Complex Data 2.
>
> **[2:14](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=134)** What's going on here?
>
> **[2:15](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=135)** Well, what's happening is Elastic Search is a document database, so unless the document violates the schema, it will allow it to go in.
>
> **[2:23](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=143)** So let's make a schema violation.
>
> **[2:25](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=145)** Let's change this 40 years to a number like 40 I guess
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=153)** That works.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=155)** But, why does it work?
>
> **[2:36](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=156)** It only works because Elastic is converting this number to a string before inserting it.
>
> **[2:42](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=162)** But it wouldn't do it the other way.
>
> **[2:43](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=163)** If we had defined this data as a number first, it wouldn't take a string, it would throw an exception when we tried to insert it and that would be pretty bad.
>
> **[2:50](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=170)** So as a rule of thumb, and the way you should design every application not just a rule of thumb, you should create a schema.
>
> **[2:56](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=176)** It keeps things consistent.
>
> **[2:58](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=178)** So we're going to do that here.
>
> **[2:59](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=179)** We're going to get a fresh start.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=180)** So what we're going to do is we're going to delete what we've created.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=183)** I've already captured the mapping and I'm going to add something to the mapping, which is dynamic equals false.
>
> **[3:16](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=196)** Notice we could still insert the same data and let's try to search it all.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=204)** The data is still here.
>
> **[3:25](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=205)** And let's look at the mapping.
>
> **[3:27](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=207)** Now, the only difference in this case is we could still insert dynamic documents, however, since we've set strict equal to false, we won't change the mapping.
>
> **[3:35](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=215)** Let me show you what I mean.
>
> **[3:44](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=224)** We've here edit fields to the document, but they aren't present in this mapping.
>
> **[3:49](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=229)** And this is dynamic set to false meaning when new data comes in we aren't going to create a field definition for it, even though we'll accept it in the documents.
>
> **[3:56](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=236)** Now this is still problematic later on if we did want to index this field and the data wasn't in a consistent way, it wouldn't work and be useful.
>
> **[4:03](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=243)** So this is a trade off with document databases.
>
> **[4:06](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=246)** You have to decide what you want to allow and how strongly typed you want everything to be.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), interface (1), throw (1), delete (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Code Identifiers:** nosql (1), newsql (1)
> **Best Practices:** rule of thumb (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Specialized Data Type and Query Support

#### Finding objects with GeoShape
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=0)** - [Instructor] In this section, we're going to demonstrate how to use geospatial indexing support.
>
> **[0:05](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=5)** To get started, we will create an index.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=7)** In the mappings section, we will create a field called pin, which is an object.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=12)** Inside it, we will nest a field called location.
>
> **[0:15](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=15)** Note, it's important that the type of this object will be geo_point.
>
> **[0:19](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=19)** This is a specialized type that represents a point on the earth, which is a sphere.
>
> **[0:24](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=24)** I feel the need to tell a flat earth joke, but I'll avoid that.
>
> **[0:31](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=31)** Next, we'll populate a small database of interesting things.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=34)** Let's imagine that "Bowled Over" has propelled our bowling career and on the Pro bowling tour, we're traveling around the world and while we're doing that, we wish to do some sightseeing.
>
> **[0:44](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=44)** For our first document, we're adding the Statue of Liberty to our database.
>
> **[0:48](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=48)** The field attraction_type is set to monument and we've given it a human-readable name.
>
> **[0:53](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=53)** For the pin coordinates, we specified longitude and latitude, which I researched offline.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=60)** We also have created two other documents.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=62)** One is a theme park I often visit in Rye, New York called Playland.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=66)** The other is the location of The Alamo, which is in Texas.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=70)** Note that the Statue of Liberty and Rye Playland are very close together, while Texas is fairly far away.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=82)** Now that this data is inserted, let's do some searching.
>
> **[1:26](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=86)** We're starting with a basic template to query data.
>
> **[1:29](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=89)** You could see it on line 56.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=91)** Here, we're starting with a Boolean query and we're doing a match_all and we're boosting results where the type is theme park.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=100)** We can see that all three documents were returned, but the Playland theme park has a much higher score, which you could see on line six in the right pane.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=108)** Now, we're going to modify this base query and have it take into account some geospatial data.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=115)** To do this, we've added a filter clause to the query.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=118)** Recall that filters must be true for results to be returned.
>
> **[2:01](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=121)** Inside the filter, we're adding a geo_distance query object.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=126)** This has some mandatory and optional properties.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=129)** An important one here is distance.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=131)** Here, we specified the distance as 50 miles.
>
> **[2:15](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=135)** Next, we're setting the pin.location to somewhere in New York.
>
> **[2:20](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=140)** As expected, we could see that only two of the results were returned, because they're within 50 miles of this pin point.
>
> **[2:28](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=148)** Another neat thing we can do, instead of filtering by distance, is boost by distance.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=153)** This allows us to create queries where we can give locations closer to our point of reference a higher score.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=159)** To do this, we add a should clause and we use the distance_feature query object.
>
> **[2:45](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=165)** We set the fields we want to reference, in this case pin.location, and we set the pivot field to 10 miles.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=171)** This effectively adjusts the score by 10 mile increments, saying that as things get 10 miles farther away, the score gets lowered.
>
> **[2:59](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=179)** Finally, we put the origin. Here, I use the array syntax.
>
> **[3:04](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=184)** (chuckles) Be very careful here.
>
> **[3:06](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=186)** I accidentally assumed that when using array syntax the values are latitude, longitude, but actually they're longitude, latitude and inverting this location New York actually placed it somewhere in Antarctica.
>
> **[3:23](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=203)** After running this query, we could see that the scores have been adjusted and the score of Playland is higher than the score of Statue of Liberty just because we've boosted it and it's closer to our reference location.
>
> **[3:36](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=216)** Also note, Elastic has some very cool visualizations in Kibana.
>
> **[3:40](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=220)** Let's look at how maps could be rendered.
>
> **[3:44](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=224)** Here, we navigate to the Maps interface and we add a layer.
>
> **[3:50](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=230)** We could take documents from Elasticsearch.
>
> **[3:54](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=234)** We specify our index using an index pattern, which is location*, and then we add a layer.
>
> **[4:02](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=242)** As you could see here, the locations appear on our map.
>
> **[4:09](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=249)** Again, Kibana is a very cool and very functional web interface.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), interface (2), finally, (1)
> **Code Identifiers:** geo_point (1), attraction_type (1), match_all (1), geo_distance (1), distance_feature (1)
> **Definitions:** is a  (4), is an  (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** template (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Storing data and searching complex nested data
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=0)** - [Instructor] This section is going to describe how to store, index and search complicated nested elements inside JSON documents.
>
> **[0:08](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=8)** Here on line three we've created a document that describes the scores of two teams bowling against each other.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=14)** Notice on line six we have a scores element which is actually an array of multiple games.
>
> **[0:20](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=20)** Notice each bowler has bowled two games.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=25)** Let's insert the document.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=26)** In this case, Elastic search has created the mapping for us.
>
> **[0:29](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=29)** Let's take a look at it.
>
> **[0:36](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=36)** On the right, on line 18 we can see scores doesn't have a type.
>
> **[0:40](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=40)** Internally, it's type is object.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=42)** There's implication that comes with the object storage and we'll explain them right now.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=46)** Let's do a search for a bowler named John on the Strike Force team.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=52)** Notice we found a match but what this means is that there is a document with a bowler named John and a team named Strike Force.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=60)** But importantly, this design does not allow us to match only a single team with a bowler named John.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=66)** If we scroll up to our original document we could see that the bowler named John on line 34 is on the Bowling Turkeys.
>
> **[1:13](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=73)** There's no one named John on the Strike Force team.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=76)** Let's delete the index and recreate it using the nested type instead of the object type for the scores array.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=82)** Internally, what this does is each nested object becomes an internal document linked to the parent document.
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=92)** Note here that this index has the same mappings as the original one.
>
> **[1:36](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=96)** The only difference is on line 95 we've used the type nested.
>
> **[1:45](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=105)** Let's go back and reinsert our original document.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=110)** Now, to search this document for the criteria we want we're going to use a special search type called nested.
>
> **[1:59](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=119)** On line 127, we've started a search.
>
> **[2:02](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=122)** On line 130, you could see that our query contains an element called nested supplying a path.
>
> **[2:08](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=128)** In this case, the path is scores, the element, that's the array.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=131)** This type of query will unroll the scores into multiple documents, allowing us to search them, and in the query we've included our original search to look for a bowler named Strike Force.
>
> **[2:21](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=141)** Let's see if we get any matches.
>
> **[2:27](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=147)** There is indeed a bowler named Bob on the Strike Force team as we could see on the hits on the right on line 30.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=153)** Let's do our original search and see if it incorrectly finds a bowler named John.
>
> **[2:36](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=156)** Here on line 153, we've done the same search.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=159)** We've just replaced the name Bob with John.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=164)** As expected, as you can see on the right, there's no matches here.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=167)** There's no hits.
>
> **[2:48](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=168)** That's because we're only searching nested documents.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=171)** A quick note about nesting is that every nested internal document creates a separate document in Elastic so it's not the ideal to use when you may have arrays that have hundreds or even thousands of internal documents.
>
> **[3:04](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=184)** There may be a better way to design and we'll talk about some later.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (2), type. (1), delete (1)
> **Env Vars:** json (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating parent/child relationships between documents
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=0)** - In this section, we're going to show how to relate documents together using the parent-child features.
>
> **[0:06](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=6)** So before we get into using this feature, we're going to start off with a few caveats.
>
> **[0:11](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=11)** Elasticsearch is not a relational database.
>
> **[0:13](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=13)** It is a document oriented database.
>
> **[0:15](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=15)** And this type of data store favors de normalizing data, which generally means copying data instead of trying to link documents together.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=25)** However, this feature is here and it is kind of useful and interesting and we'll explain how it works.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=30)** So the best use case of this feature is when a parent has many children.
>
> **[0:36](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=36)** So the canonical example given is if you have a store with items and you have lots of orders of those items, that would be a perfect time to use it.
>
> **[0:44](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=44)** Where a bad time to use it would be hundreds of millions of items related to hundreds of millions of other items.
>
> **[0:50](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=50)** There's a few other caveats such as documents can only have one parent.
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=54)** But let's not get too deep into that.
>
> **[0:55](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=55)** Let's just give an example and go with it.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=57)** So for this example, we're going to use the idea of a bowling alley, having arcade machines.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=62)** So we're going to model the bowling alley in an index called "lanes" and we're also going to model the arcade machines inside separate documents.
>
> **[1:14](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=74)** To do this we're starting with the mapping.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=77)** Notice on line nine, we have a type called "join_field."
>
> **[1:21](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=81)** No, we have a type name join_field, and it's type is join and we've listed relations, biz name, arcade machine.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=90)** In this relation, the biz name is the parent and the arcade machine is the child.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=94)** So we're going to create our first document here.
>
> **[1:37](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=97)** This will be a bowling alley called "White Plains Bowl."
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=100)** And if you notice the join field, the type is biz name.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=102)** So it's the parent side of this relationship.
>
> **[1:45](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=105)** Now we're going to say that this bowling alley has two arcade machines.
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=109)** So we're going to create documents for this.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=111)** Pay special attention here.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=113)** We're creating a document in the same index.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=116)** Its ID is three, but the routing is one.
>
> **[2:00](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=120)** This is very important.
>
> **[2:01](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=121)** The documents that represent the arcades or the children have to be in the same chart as the parent.
>
> **[2:07](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=127)** Otherwise this won't work.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=129)** So this is where the routing is used.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=131)** It tells Elastic how to route this document.
>
> **[2:14](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=134)** This document represents an arcade machine of "Street Fighter Two."
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=138)** And as you can see, it's joint field is an arcade machine and it is Parent is ID one.
>
> **[2:25](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=145)** Now we're going to create another arcade machine, kind of the grabby claw thing where you almost pick up the toy but you never get it.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=151)** This is also in the same bowling alley.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=155)** Awesome.
>
> **[2:36](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=156)** So now let's see how we can use these features.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=159)** The most simple thing to do is say, well, I'm going to go to a bowling alley and I know which one I'm going to go to.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=164)** Before I go, I want to get a feel for what arcade machines are there.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=167)** So can issue a query where we ask for the parent one, what are arcade machines or what children are of that parent?
>
> **[2:56](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=176)** Awesome.
>
> **[2:57](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=177)** We could see here that "Street Fighter Two" and the Grabby Claw thing is available in the arcade.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=183)** So I want to go out and ask the Bowled on social network where I could find this arcade machine.
>
> **[3:10](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=190)** So here, we're using a different query.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=192)** starting on line 66, you could see the query.
>
> **[3:15](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=195)** We're using the has child's relationship and we're asking who has a child of type arcade machine whose name happens to be "Street fighter."
>
> **[3:25](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=205)** And as you could see, Elastic correctly told us that "White Plains Bowl" has this arcade machine.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1)
> **Code Identifiers:** join_field (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - in (1)

#### Combining multiple fields to simplify searching
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=0)** - [Instructor] In this section, we are going to demonstrate how to combine fields for searching.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=4)** For end users, we want searching to be as simple as possible.
>
> **[0:08](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=8)** In some cases, this can be complicated.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=10)** An index could have multiple fields and for a Elastic search performance is generally better when searching fewer fields.
>
> **[0:17](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=17)** To solve for this we are going to create an amalgamation field which combines data from multiple fields into a single field.
>
> **[0:23](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=23)** For this example, we are going to model a small data set with user information for our social network for bowlers, Bowled Over.
>
> **[0:31](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=31)** On line three are we are using the put verb.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=34)** The target URL is the Bowled Over endpoint and the JSON body has mappings for two fields a first name and a last name.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=42)** Notice we used keyword for the fields instead of text.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=45)** This is implications we will solve later on in the lesson.
>
> **[0:49](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=49)** (mouse clicking)
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=57)** Next, we are going to insert two small documents which simulate users.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=62)** Notice for this example, in the second document Edward is an upper case.
>
> **[1:11](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=71)** Let's imagine someone using our social network.
>
> **[1:14](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=74)** When they join, they want to look for their friends.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=76)** They've heard that Edward is a member so they want to go look for him.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=80)** To do this, we use a get verb and we're specifying a URL containing the Bowled Over index.
>
> **[1:26](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=86)** We use the underscore search endpoint and we use the simple Q equals Edward parameter.
>
> **[1:33](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=93)** This search didn't find Edward and the reason is the first name field is defined as a keyword, meaning only exact matches find the data.
>
> **[1:41](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=101)** If we change this to uppercase Edward, the record is found.
>
> **[1:45](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=105)** One way to solve this problem is by using the copy to feature.
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=109)** What this feature does is at insertion time when data is added values of some fields are copied to others.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=116)** To accomplish this, we'll add a field called monikers which is a fancy synonym for name.
>
> **[2:01](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=121)** Next, for the existing fields, first name and last name, we will change them and include copy to settings.
>
> **[2:07](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=127)** You can see on line 37, when we overwrite an existing mapping, we use a put and we specify the underscore mapping in the URL and we don't include the mapping as the top level element of the body.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=139)** For this feature to work we actually have to re-insert the data.
>
> **[2:23](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=143)** Take note that changing the mapping does not automatically cause a re-index.
>
> **[2:32](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=152)** Let's go back to our original searches and try them again, starting with the first name that was not the same case as the inserted data.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=164)** In the right result pain you could see that the data is found.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=167)** This is 'cause behind the scenes the query is searching all fields including the new moniker field.
>
> **[2:56](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=176)** Let's look at another quick example.
>
> **[2:59](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=179)** Often people have trouble spelling names they're unfamiliar with.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=183)** In particular, my last name ends in an O but people sometimes believe it ends in an A.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=188)** We can use the fuzziness feature to attempt to match spellings that are close.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=192)** To do this, we're creating a match query and we're using the fuzziness parameter.
>
> **[3:18](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=198)** Notice this found me, even though the last name was specified as Capriola in the query but in the data set, it's Capriolo.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (3), case. (1)
> **Env Vars:** url (3), json (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Using Elasticsearch pipelines to enhance data
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=0)** - [Instructor] In this section, we're going to learn about a data processing feature in Elastic known as ingest pipelines.
>
> **[0:06](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=6)** Pipelines provide the ability to do data processing inside the Elasticsearch database.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=10)** This allows us to alter data, add or remove fields, or even prevent a record from being added if it doesn't meet requirements.
>
> **[0:17](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=17)** First, we are going to create an index with a mapping.
>
> **[0:20](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=20)** This is a modified version of the schema we use throughout the course representing users in our fictional social network for bowlers named bowled_over.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=28)** This schema simply defines a few fields to store the user's name.
>
> **[0:35](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=35)** A common ask is to record when a document is inserted.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=38)** Having the insert time is good for diagnostics.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=41)** And let's say that our social network, we may find it useful to boost searches for new users.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=46)** And for that, we wish to automatically attach the time the data was indexed.
>
> **[0:50](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=50)** We could use the pipeline for this.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=52)** If you notice on line 22, we've created a statement which will create a pipeline known as add_index_time.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=60)** These could have descriptions, but the most interesting part is the processor section.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=63)** Here we've defined the set processor.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=66)** And this element has two parts, a field and a value.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=69)** You can notice in the field, we're using the _source, which means the source document being inserted and index time is the fields you wish to add.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=77)** The value uses templating.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=80)** And again, the ingest object is provided automatically, as well as a timestamp.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=85)** So we don't need very much logic here.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=88)** Running the PUT will insert, and we'll create the index.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=91)** And then by default, we want to have the pipeline run when we insert into our bowled_over index.
>
> **[1:37](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=97)** So we'll set it as the default pipeline for bowled_over.
>
> **[1:41](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=101)** Now that we've defined our pipeline and made it the default pipeline for our bowled_over index, let's do an insert and see what happens.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=108)** Notice here, we're inserting a document with only two fields, the first name and the last name.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=115)** The insert was successful.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=116)** Let's see what happens when we read it back.
>
> **[1:59](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=119)** Awesome.
>
> **[2:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=120)** We can see that the index time has been automatically added to this document.
>
> **[2:04](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=124)** Let's look at another built-in processor.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=126)** It is very common to use IP addresses for logging web traffic.
>
> **[2:10](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=130)** Elasticsearch will download GeoIP databases, and it provides a processor, that given a source IP will automatically attach GeoIP information to a document as it's inserted.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=142)** On line 50, you can see we're defining another ingest pipeline known as geoip.
>
> **[2:28](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=148)** For the processor here, we're setting it to be geoip, and we're telling it which fields we expect the data to be in, which in this case is the ip field.
>
> **[2:38](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=158)** If you remember, when we defined the bowled_over index, we gave it a default pipeline.
>
> **[2:43](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=163)** So in this case, we could override the pipeline by providing an argument in our PUT statement.
>
> **[2:48](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=168)** Here, we're setting an IP and we're inserting data.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=172)** Let's see what happens when we read it back.
>
> **[2:55](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=175)** Great. We can see here that the document has GeoIP data, which has been automatically added, including the country, latitude, and longitude.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=183)** It is also possible to use conditional logic in a pipeline.
>
> **[3:07](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=187)** For this example, let's say we wish to use a bowler's average to decide which pipeline to run.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=192)** To do this, if you look at line 73, we'll define a new pipeline called conditional_pipeline.
>
> **[3:18](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=198)** Notice this one has two processors.
>
> **[3:21](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=201)** Each processor is activated by an IF statement.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=204)** In this case, the context, which is the document being inserted, needs a field named average.
>
> **[3:31](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=211)** And if the field is less than 200, the add_index_time pipeline will be activated.
>
> **[3:36](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=216)** And if the field is more than 200, the geoip pipeline will be activated.
>
> **[3:40](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=220)** Again, when we're putting the document, we could override the default index and select this one.
>
> **[3:45](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=225)** So let's see what happens when we use the conditional pipeline.
>
> **[3:50](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=230)** If we read back the data, we can see that the geographic GeoIP information has been added.
>
> **[3:56](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=236)** This is because the user's average was greater than 200.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (2), override (2), this. (1), default, (1)
> **Code Identifiers:** bowled_over (5), add_index_time (2), conditional_pipeline (1)
> **Definitions:** known as (3), is a  (1)
> **API Endpoints:** put  (2)
> **Env Vars:** put (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Storing data with varying structures using flatten
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=0)** - [Instructor] This section demonstrates the flattened data type.
>
> **[0:03](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=3)** This data type is best used for documents that have a large number of unknown fields.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=7)** To illustrate when this feature is useful, imagine our social network bold over starts distributing an app to employees that allows 'em to send small notes to each other.
>
> **[0:16](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=16)** These notes are just defined as documents with arbitrary keys and values.
>
> **[0:20](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=20)** Let's imagine some notes that users may send back and forth to each other.
>
> **[0:24](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=24)** We've created these three documents over here.
>
> **[0:26](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=26)** They're very simple.
>
> **[0:27](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=27)** One is from Ted, reminding himself to fix the pin setter.
>
> **[0:31](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=31)** A second is a document from Ted to Mindy saying "The pin setter can't be fixed so we need to order a new one."
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=39)** Notice that these two messages already have different fields.
>
> **[0:43](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=43)** This one has a from, a date and a message.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=45)** While the second message has a to and an order.
>
> **[0:49](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=49)** Let's insert one more document.
>
> **[0:51](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=51)** This is a document of Mindy reminding herself.
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=54)** she has to find new investors because bold over social network has driven their revenues high and there's more bowlers, causing the pin setters to break.
>
> **[1:01](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=61)** So this design looks like it's working great.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=63)** Let's take a look at the mapping inside elastic.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=67)** Now, as we could see on our right every field that's ever been inserted, the from, the message, the order, the reminder, the to and the why have created mappings.
>
> **[1:19](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=79)** This design won't work over the long run because each index has a maximum number of mappings.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=85)** And even if you could define many of them, they're not very useful in this format and the index would be very bloated.
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=92)** So let's look at a better design using flattening.
>
> **[1:39](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=99)** What we're going to do here is create a new mapping.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=102)** We're going to set the dynamic attribute on the top level object to strict.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=106)** This won't allow people to create arbitrary fields in the top level object.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=110)** And we're going to pull out some of the critical things from our note systems, a date, a from, and a to.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=115)** We're going to assume all messages have these three things.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=118)** Now the question is what to do with all the other fields, but we could use is the flatten type.
>
> **[2:03](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=123)** And as you can see on line 56, we've created an element called unstructured which type is flattened.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=129)** What this will allow us to do is all the fields that are new have to be put in this object but they won't ever have any schema.
>
> **[2:15](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=135)** Let's give it a try.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=139)** So here's the message 3 that Mindy had sent to herself.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=142)** We've just restructured it slightly where all of the extra fields are now in this unstructured section, and we'll insert it.
>
> **[2:30](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=150)** Let's take a look at the mapping that was generated from this insert.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=153)** As we can see, these fields, reminder and why aren't present in our schema on the right here.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=159)** This is because they have been flattened.
>
> **[2:42](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=162)** Let's do some searches of the flattened data type.
>
> **[2:45](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=165)** On line 78 we've created a simple search and we're using the term, search, and we're looking for values that are said find new investors.
>
> **[2:56](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=176)** So here, as you can see, we've been able to match on the value.
>
> **[2:59](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=179)** Very good.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=180)** What you could also do is you could pick specific fields in the unstructured and match only on those.
>
> **[3:06](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=186)** In this case, unstructured remainder just by using dot notation, that found the same document.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=192)** Now, this approach obviously has some limits.
>
> **[3:15](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=195)** The benefit of using the flattened type is it stops the mapping explosions.
>
> **[3:19](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=199)** However, the downside is all the data is really internally sorted into single field, and thus it's one type.
>
> **[3:25](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=205)** So if your data is a mix of numbers and strings and dates, it will only sort in a lexigraphical way.
>
> **[3:32](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=212)** Still, it's better than trying to maintain the metadata for every single field inserted in a very dynamic index like this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type. (4), from, (3), break. (1), try. (1)
> **Definitions:** is a  (3), defined as (1)
> **CLI Commands:** find (2)
> **Analogies:** imagine (2)
> **Speakers:** - [instructor] (1)


### 3. Advanced Queries

#### Filtering, matching, and scoring explained
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=0)** - [Instructor] In this section, we are going to cover filtering, matching, and scoring.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=4)** To do this, we're using our dataset which is a sample of user contributed data which we've called the bowled_over_artist_guild.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=10)** Effectively, it's like almost a blog system where users could create articles with a title, and a passage, which is a text like a poem.
>
> **[0:19](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=19)** We have two examples of this in our pane.
>
> **[0:22](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=22)** We've already inserted this data.
>
> **[0:24](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=24)** You notice the passage is a large body of text.
>
> **[0:27](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=27)** The author title and data are marked smaller discrete values.
>
> **[0:31](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=31)** We've used the mapping endpoint, so we can see what it looks like.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=34)** What elastic's doing here is for each string field that's considering it, a text, but also adding a keyword field assuming the data is below a certain size that's what the signal ignore above does.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=46)** So let's do a basic search.
>
> **[0:48](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=48)** So basic search provides it _search endpoint.
>
> **[0:51](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=51)** And the query that's very simple is the match all query.
>
> **[0:55](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=55)** Now notice this query has returned both results.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=57)** Obviously we're trying to match all of them, but I think to start noticing for this section is results have a score.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=63)** Match inquiries always have a score, and what that means is some documents match more than others, and this relates to how elastic internally stores documents, and how it scores words that are more frequent than others.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=76)** Let's look at another example.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=77)** In this example, starting on line 36, we're trying another search, and this time we're trying to use a term query on the author field.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=85)** Notice this didn't work, and that's because the author field is a text field, so this term can't be found.
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=92)** Text fields are turned into inverted indexes, and finding individual terms is difficult.
>
> **[1:38](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=98)** However, in our schema, all of the fields are also available as a keyword.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=102)** So in this case, we've mentioned the author keyword column, and looked for the same turn.
>
> **[1:47](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=107)** Indeed, this time we actually find the passage we're looking for.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=111)** So that's a little quirk of how text and keyword fields work.
>
> **[1:55](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=115)** Let's look at some work complex examples.
>
> **[1:59](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=119)** Starting here, line 59, we're doing a query, and we're starting off with a bool query.
>
> **[2:04](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=124)** Bool means boolean, and it allows us to have multiple sections.
>
> **[2:07](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=127)** A must, a must not, a should, and a should not.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=131)** It is one more section called the filter.
>
> **[2:14](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=134)** Everything in the filter will be returned from the query, and has no effect on scoring, let's see what we mean.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=139)** Here, we've done a term query, and we're looking for a specific author.
>
> **[2:27](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=147)** Notice here that the score is zero because filtering ignores scores.
>
> **[2:31](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=151)** It is a true or false match.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=153)** The thing is either here or it is not.
>
> **[2:36](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=156)** Let's look at a more complex example.
>
> **[2:38](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=158)** In this case, starting on line 73, we're starting with the bool query, and we're using the should condition.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=164)** In this context, a should is like an or, if either of the clauses below it match will return the result.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=171)** So here what we've done is we've done one match, and we're looking for the word "I", a very common word inside a passage, we'll find many passages with "I" and then we're matching another passage looking for the word bowl.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=183)** Notice in this case, we've applied a boost on line 87.
>
> **[3:10](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=190)** What this does is it matches documents higher if they have bowl, than if they would have "I", since "I" is a very common word.
>
> **[3:19](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=199)** So we'll subtract the filter here and see what this does.
>
> **[3:25](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=205)** As you can see, both of our articles are matched because this article has the word "I", and this article has the word "I".
>
> **[3:34](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=214)** However, bowl is matched over here, but this article is scored higher than the other one because we're boosting the word bowling.
>
> **[3:41](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=221)** Now, just because you're using a keyword field doesn't mean you only have to search the entire word.
>
> **[3:48](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=228)** The prefix filter works on keywords, and can match the front half of them.
>
> **[3:53](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=233)** So here we've done a filter query, and we've used the prefix query option, and we're looking for half of the author's name.
>
> **[4:01](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=241)** This still works.
>
> **[4:04](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=244)** Here's an example of what's known as an exist query.
>
> **[4:07](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=247)** This checks to see if the document has a field called author cuz not every document has to have every field.
>
> **[4:17](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=257)** Both of our documents have an author column, so they're both returned.
>
> **[4:23](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=263)** And of course, bool queries can also be nested.
>
> **[4:26](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=266)** In this example, starting on line 167 we have an outer bool query with a should, and an inner bool query with a must.
>
> **[4:36](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=276)** Also notice in this case, we're using the fuzzy operator.
>
> **[4:39](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=279)** Fuzzy means it's matching based on expressions, and in this case we have a star, so words ending in "iel".
>
> **[4:50](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=290)** Again here, notice the score, based on the matching conditions, the score may go up and down.
>
> **[4:57](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=297)** Finally, I just wanted to give an example of using the match all query.
>
> **[5:02](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=302)** In some cases, you want to match all the data, and then filter out specific things.
>
> **[5:06](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=306)** So you could use the match all syntax, and in this case we're using a term query on a field that is a date.
>
> **[5:13](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=313)** This works fine, you could specify the date in multiple ways.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (4), this, (1), for. (1), match. (1)
> **Definitions:** is a  (7), known as (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** bowled_over_artist_guild (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Retrieving large result sets using the Scroll API
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=0)** - [Instructor] In this section we're going to cover retrieving large result sets using the point in time or PIT feature.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=7)** To understand this feature, let's look at an example case.
>
> **[0:10](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=10)** You could imagine that an Elastic index may have millions or billions of documents and you want to move your way through them.
>
> **[0:17](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=17)** Well, imagine that index was changing as you worked with it.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=21)** Scrolling through the data could produce unpredictable results.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=25)** PITs freeze the data and ensure that whatever operation you're doing has a consistent view of the index.
>
> **[0:33](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=33)** To illustrate how PIT works, we've created a simple index with two documents.
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=39)** To freeze the index or create a point in time, we're going to use the post verb.
>
> **[0:44](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=44)** We're going to mention the index name and then we're going to use the PIT endpoint.
>
> **[0:48](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=48)** Here we're specifying a keep a live time of 10 minutes.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=52)** What that means is if the PIT isn't interacted with within 10 minutes, it will close on its own.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=57)** Notice this PIT query has returned an ID.
>
> **[1:00](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=60)** This ID needs to be used in subsequent calls to reference the PIT.
>
> **[1:05](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=65)** Here we've created a basic search.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=67)** Notice we're only trying to return one result and the query we're doing is a match off.
>
> **[1:12](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=72)** We've referenced our PIT query and a new keep alive time and an important thing.
>
> **[1:18](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=78)** We're sorting the results here based on the shard doc.
>
> **[1:21](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=81)** This is an internal Elastic identifier that is guaranteed to be there.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=85)** You could search on anything as long as you could move through it and the appropriate tiebreakers are in place.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=90)** Let's run the first query.
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=95)** Notice this query had two hits but since we requested a size of only one, one was returned.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=102)** Important.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=103)** Notice there's this sort field here, and the data is one.
>
> **[1:47](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=107)** This is returning the Elastic ID of the data.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=110)** We need to use this column in our next query.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=113)** So we've created another PIT query here.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=118)** All the criteria is the same.
>
> **[2:01](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=121)** We've updated the ID of the PIT and notice there's a search after.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=125)** Again, since this query returned one we'll put search after one and run the query.
>
> **[2:12](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=132)** In this case, we've returned the second query of the set.
>
> **[2:14](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=134)** So this is how to use PIT.
>
> **[2:16](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=136)** Obviously, this was a very small data set, only two columns but this would work over large column, over large data sets as well.
>
> **[2:24](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=144)** When you're done using the PIT, you could delete it.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=146)** Simply use the delete verb, reference the PIT endpoint and set the appropriate ID.
>
> **[2:34](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=154)** It's good to delete your PITs as soon as possible because Elastic behind the scenes is merging and rebuilding the internal document structure all the time and PITs force those documents to be open for much longer so they're usable, so it's good to clean up so Elastic could free the associated resources.

> [!info]- Semantic Content
>
> **Env Vars:** pit (12)
> **Code Keywords:** delete (3), let (2), case. (1), case, (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** imagine (2)
> **Speakers:** - [instructor] (1)

#### Performing aggregations
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=0)** - [Instructor] In this section, we're going to be performing aggregations to summarize data.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=4)** These type of aggregations include grouping and counting, getting distinct elements, or even generating histograms.
>
> **[0:11](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=11)** The data set we're going to use for this example is from our nested data section.
>
> **[0:16](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=16)** The index is called bowled_over_team_scores and this document models the scores in a bowling league.
>
> **[0:22](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=22)** Starting on line 54, we could see this data.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=25)** We have a league name and a date, and then an array of scores.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=30)** Each score has a game, a team name, a bowler, and a score.
>
> **[0:34](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=34)** And in this data set there's actually two teams, each with two bowlers.
>
> **[0:40](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=40)** We included a second document where the same two teams bowl a week later.
>
> **[0:44](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=44)** Let's take a look at our first aggregation query.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=47)** On line 167, we're issuing a search.
>
> **[0:50](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=50)** We're using the nested feature because we want to look at individual bowlers, so we've reached in and we're only trying to match the data from the bowler Bob on the Strikeforce team and we're generating two aggregations.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=62)** One is the unique IDs or unique dates that Bob has bowled.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=67)** And the other, interestingly, is the average date.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=70)** While we can sum the date, it won't produce any meaningful data.
>
> **[1:13](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=73)** Let's just see what it would look like.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=77)** Starting here, we can see the value of aggregations.
>
> **[1:19](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=79)** Here's the average date, but more interestingly here's the unique IDs.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=85)** As we could see, this bowler has actually bowled on two different dates.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=88)** Let's do some other fun aggregations.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=90)** Let's say we wanted to give a booby prize to the person who bowled the lowest game.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=94)** We could figure that out by using the min query on the scores field.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=100)** Getting used to writing these aggregations can be a little bit tricky, so I have a simple tip.
>
> **[1:44](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=104)** I use the SQL interface and I prototype some of my queries there.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=108)** So here I'm doing an SQL group in count, where I'm selecting a league name and account, and grouping by the league name.
>
> **[1:57](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=117)** You could take this data and look at in a tabular format and once you have a query you like, you could translate it like so.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=125)** On the right now, Elastic has written the query DSL query for us so we don't have to figure out how to do this.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=131)** We're using it here inside a search and we get back the same data.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=138)** Another neat way to summarize data is using a histogram.
>
> **[2:21](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=141)** Starting on line 259, we build an aggregate and we unroll the scores as we've done in other examples.
>
> **[2:27](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=147)** And then inside the aggregation column, we're using the histogram function and telling it to use the score field.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=153)** We could set different intervals here and we could see what the results look like.
>
> **[2:41](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=161)** On the right, we could see the intervals are broken by groups of 20 and we could see how many people have bowled a 120, how many games have bowled a 160, how many people bowled a 240.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=172)** There are a lot of aggregation queries and options in Elasticsearch, and we can't cover them all, but this gives you a good jumpstart to give you some ideas of what you can do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (1), this. (1), function (1)
> **Env Vars:** sql (2), dsl (1)
> **Code Identifiers:** bowled_over_team_scores (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Indexing templates to define index properties
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=0)** - [Instructor] In this section, we are going to use index templates to define index properties.
>
> **[0:04](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=4)** Throughout the course, we've created a number of indexes to hold data.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=7)** Usually, we have let the database create the mapping dynamically or we've created a mapping file per index.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=14)** Index templates allow you to create templates with properties that match index names on creation.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=21)** That's a mouthful, but as we use it I think it'll make more sense.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=25)** Let's start by creating an index and looking at the settings and mappings.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=30)** Here we'll use a data set of user contributed writings and poetry we've been calling the Bowled over Artist Guild.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=38)** Let's take a look at the settings that were created when we inserted the data.
>
> **[0:49](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=49)** We can do this by using the settings endpoint.
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=54)** Notice here that the number of shards is one.
>
> **[0:58](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=58)** We could also look at the mapping of this index
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=66)** and this is what we've seen many times.
>
> **[1:08](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=68)** The mapping holds the data types and their indexing settings.
>
> **[1:12](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=72)** Now to understand index templates, let's start with a concept called table by day or in elastic sense, index by day.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=80)** Generally, this pattern is useful when data can be grouped by time.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=83)** It makes it easy to find data and maybe even delete the data because it all would fit into the same bucket based on the time it was created.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=91)** To accomplish this, we're going to do inserts and we're going to add a date to the name of the index.
>
> **[1:39](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=99)** Notice here, the index has a date component in the name itself.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=108)** Let's insert a second document for a second day.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=116)** We could easily search over these two indexes.
>
> **[1:59](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=119)** Notice we've used a star here which searches over all of the indexes we have.
>
> **[2:04](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=124)** Let's use an index template here to make sure all indexes created have the same settings and schema.
>
> **[2:17](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=137)** Here we've created a template that matches the index pattern, Bowled over Artist Guild star and we've adjusted the number of shards to three.
>
> **[2:25](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=145)** Let's also include some mapping so that every document has the same indexing.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=155)** Awesome. Now we could delete the data and insert it again and we'll see if the settings take effect.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=167)** Notice the delete endpoint can take a wild card expression too, just like the get or put.
>
> **[2:53](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=173)** Obviously, you want to be very careful when deleting with a wild card like a star.
>
> **[2:58](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=178)** All right.
>
> **[2:59](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=179)** Let's insert the data again.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=188)** Now, let's review the settings and see if they match what we would expect.
>
> **[3:22](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=202)** As we can see, the number of shards is three.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=204)** So index templates can be used a number of ways.
>
> **[3:27](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=207)** They could define settings for the entire application or a specific index.
>
> **[3:32](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=212)** They could also be ordered by number, controlling which rules get applied if multiple templates match the expression.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), delete (3), this, (1)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** template (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Implementing expiring data with lifecycle management
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=0)** - [Instructor] In this section, we're going to demonstrate how to do expiring, or what is sometimes called TTL-based data, using internal lifecycle management.
>
> **[0:09](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=9)** Internal lifecycle management, or ILM, is a feature in Elastic that automatically changes the characteristics of indexes based on criteria.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=18)** A common use case for ILM is when implementing a hot, warm, cold architecture.
>
> **[0:23](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=23)** Data moves between hardware classes as it's searched less often.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=28)** These type of operations can be done manually by scripting or Chron or some kind of scheduling tool, but Elasticsearch has its own inbuilt ILM.
>
> **[0:36](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=36)** Let's take a look at how ILM works.
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=39)** Here we've used the put verb to create a policy.
>
> **[0:42](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=42)** We've called it fast TTL policy.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=45)** The policy has two phases, hot and delete.
>
> **[0:49](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=49)** As you can see, the hot data rolls over at a one minute rate and the delete data deletes things.
>
> **[0:55](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=55)** This is not the kind of setup you'd want to use in production but here we want to expire the indexes so we could see this work quickly.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=62)** The next phase of ILM is that it doesn't work well with standard indexes.
>
> **[1:07](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=67)** Usually it's used as what's called index streams.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=70)** These look like an index, in that they have an index template and the index template matches a pattern, except an important note is, as you can see on line 57, is the data stream is specified.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=82)** So here, any data written to an index named fast TTL star won't be written to a standard index.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=88)** It'll be written to a data stream.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=90)** And note, we've attached the index to a lifecycle, the same policy we've mentioned above, fast TTL policy.
>
> **[1:41](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=101)** This next setting here causes the Elastic to examine the ILM policy every 15 seconds.
>
> **[1:47](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=107)** You might want to raise or lower this based on your requirements, but it makes sense to keep it at the default unless you know what you're doing.
>
> **[1:54](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=114)** So now the interesting part of ILM.
>
> **[1:57](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=117)** Documents written to ILM don't post to this exact index.
>
> **[2:02](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=122)** They post to a data stream, which behind the scenes is a series of indexes.
>
> **[2:07](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=127)** Let's take a look.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=129)** One inserted document, and then another.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=133)** Notice here, on line three you could actually see that the index returned is a hidden index.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=139)** You could see this 'cause it starts with a dot.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=142)** What does this mean?
>
> **[2:24](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=144)** Here, we're using the indexes, the cat endpoint to show the indexes.
>
> **[2:29](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=149)** And as you can see, there's actually an index here with two documents inside it.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=155)** But we could search this index by using the friendly name we defined above.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=159)** As you can see, the data is found.
>
> **[2:42](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=162)** If we wait a while and retry this query, our policy should automatically delete this data.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=167)** So we'll go out and get a coffee or something and come back and see what happens.
>
> **[2:54](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=174)** Nope, still there.
>
> **[2:59](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=179)** We could see a new index has rolled over.
>
> **[3:05](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=185)** Oh, look at that. The data's now gone.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=188)** And the indexes themselves have rolled over.
>
> **[3:11](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=191)** So that's how internal lifecycle management works.
>
> **[3:14](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=194)** Behind the scenes, Elastic manages indexes and the user sees them as data streams.

> [!info]- Semantic Content
>
> **Env Vars:** ilm (8), ttl (4)
> **Code Keywords:** delete (3), let (2), raise (1)
> **Definitions:** is a  (3)
> **Exercise Files:** template (2)
> **CLI Commands:** cat (1)
> **Warnings:** important note (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Working with index aliases
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=0)** - [Instructor] This section is going to show how to use index aliases to simplify data management.
>
> **[0:05](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=5)** To understand this, let's think of a few examples.
>
> **[0:08](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=8)** In some other section, we've approached the concept of index by day, where your data is actually divided across multiple indexes.
>
> **[0:17](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=17)** In this case, we've created an index called Bold Over Artist Guild, and it's actually divided by day, where some documents exist in one day and some documents exist in another day.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=28)** This is a common theme to deal with time series data and eventually you may have to roll up or modify these indexes and aliases are very helpful with this.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=37)** Let me explain.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=38)** In Elasticsearch, we could use wild cards or list multiple indexes to do a query.
>
> **[0:44](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=44)** Here we're doing a match query that searches over two indexes.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=47)** As expected, this is returning two results, as you could see on line 13.
>
> **[0:53](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=53)** Now, these indexes over time, we may decide to change them.
>
> **[0:56](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=56)** Like we may decide we want to add another field or possibly change how we're indexing in existing fields.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=62)** Elasticsearch has an API for this.
>
> **[1:04](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=64)** It's called the re-index API.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=66)** On line 34, you could see an example.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=69)** We're making a post to re-index and we're specifying a source index, which in this case, we're using the data from the first of the month, shown on line 37, and we're creating a new index where we just appended A to this name.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=83)** You would normally do this if you change the index definition or the index template and you want to re-index.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=88)** So we've done that here.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=90)** We've re-indexed our data, but now there's a problem.
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=92)** If we search for the Bold Over Artist Guild, instead of finding two documents, we'll find three.
>
> **[1:39](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=99)** And that's because there's actually three indexes now behind the scenes.
>
> **[1:43](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=103)** We have the same document choice in Bold Over Artist Guild and Bold Over Artist Guild A.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=110)** So we could use index aliases to fix this problem.
>
> **[1:54](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=114)** How would we do that?
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=116)** Elastic has an endpoint called aliases, and it supports one or more actions that could be specified in an array.
>
> **[2:03](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=123)** So the first thing we're going to do here, is we're going to remove the old index and we're going to edit index alias.
>
> **[2:10](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=130)** Or if you feel safe, we could put them in the reverse order.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=133)** It doesn't really matter because the entire operation happens completely or not at all.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=139)** So let's execute this action.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=142)** It's acknowledged here.
>
> **[2:24](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=144)** And now let's go run our search again.
>
> **[2:30](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=150)** Now we have the correct number of results, which is two.
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=153)** And as you could see, one datum is coming from the second index, and this is our updated index, and the original index is now gone.
>
> **[2:42](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=162)** So there's many ways you could use index templates.
>
> **[2:44](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=164)** You could do perhaps index by day, and then make an alias which includes day one, day two, day three.
>
> **[2:51](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=171)** Index aliases could also use wild cards inside them or other patterns.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), this. (2), this, (1)
> **CLI Commands:** find (1), go run (1), make (1)
> **Env Vars:** api (2)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Modifying Data

#### Updating documents using scripting
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=0)** - [Instructor] In this section we're going to update documents using scripting.
>
> **[0:03](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=3)** This technique is useful in a variety of cases, one being if you only want to update part of a document or two, if you want to update a document based on its current values.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=12)** Let's get started.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=14)** Throughout this course we have envisioned a social network called "Bowled Over."
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=18)** A social network for bowlers.
>
> **[0:20](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=20)** In this case we'll add a new index that records what a bowler does in their league play.
>
> **[0:24](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=24)** In this case, the league has, starting on line 3 you could see we've created a new index called bowled over games, and we have a date and a league name, a bowler name, and a score.
>
> **[0:36](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=36)** We're going to insert this document and let Elastic create the index mapping automatically.
>
> **[0:41](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=41)** As you can see on the right, this was inserted.
>
> **[0:43](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=43)** Let's look at the mapping by using the bowled over games mapping.
>
> **[0:48](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=48)** You can note on the right here on line 27 that the scores type is long.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=52)** Elastic search in this case doesn't care whether scores is a single value or an array value.
>
> **[0:56](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=56)** It just needs to know the field is long.
>
> **[0:59](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=59)** Let's see what the data looks like we inserted.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=62)** Great, on the right we could see there's scores as an array and there's only one score.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=66)** Let's imagine we finished our second game and bowled a measly 115.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=70)** Rather than inserting the whole document we could use the update syntax and scripting to add a score to this array.
>
> **[1:17](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=77)** Starting on line 15, you could see we're using a post and we're using the underscore update endpoint.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=82)** Inside the body of the post, we have a script.
>
> **[1:25](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=85)** The script has a few components.
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=87)** First, it has a source.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=88)** This is actual code and the code itself is defined by the language which in this case is the painless language.
>
> **[1:36](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=96)** So this source code says inside the context, that's the request.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=100)** And inside the source document being inserted take the scores field and add an element to it.
>
> **[1:47](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=107)** Which is the elements?
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=108)** The element is defined in the params score which is almost like another document inside this script.
>
> **[1:54](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=114)** So we're trying to add a 151 to this array.
>
> **[1:58](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=118)** Let's see if it works.
>
> **[2:01](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=121)** We use the get endpoint to view the results and in this case, we could see on the right on line 8, 151 has been added to the current document.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=131)** Now, after bowling a 151 we might realize it's time to get a soda and take a little break, see if we can do better in our third and final game.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=139)** So what we'll do is we'll introduce a concept for storing a bar tab, simply an item count.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=146)** So the script below here is different.
>
> **[2:28](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=148)** Rather than a pending to an existing field as we did before, we're going to create a new field.
>
> **[2:34](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=154)** So as you can see we're starting a post on line 28 to the same document.
>
> **[2:39](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=159)** And again, we're using a script, in this case on line 31 you could see we use the multi-line syntax.
>
> **[2:45](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=165)** So we use three quotes to specify a script that's multiple lines.
>
> **[2:48](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=168)** And what we're doing here is instead of appending to an array, we are actually updating a field.
>
> **[2:54](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=174)** And in this case, we have an if statement to cover what would happen if it doesn't exist.
>
> **[2:58](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=178)** So our main goal here is to put this parameter in the bar tab if the field doesn't exist or add it to the bar tab if it doesn't exist.
>
> **[3:06](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=186)** That's covered by both the cases here on line 33 and line 35.
>
> **[3:10](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=190)** Let's run this example.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=192)** Great.
>
> **[3:13](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=193)** We could read back the results and see if the bar tab was added.
>
> **[3:17](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=197)** Yes, in this case we could see we still have the two scores from the bowler and the new bar tab field has been introduced.
>
> **[3:24](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=204)** Now, obviously this isn't the most efficient way to model a system of keeping a bar tab.
>
> **[3:29](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=209)** Usually we want to track the items but let's just say we are going with this setup here.
>
> **[3:33](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=213)** What would happen if we accidentally sent the same update twice or even three times?
>
> **[3:43](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=223)** Well, now we have a problem because the bar tab is set three times and we only ordered a single soda.
>
> **[3:49](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=229)** To deal with this type of problem Elasticsearch offers optimistic concurrency controls meaning it's a conditional update.
>
> **[3:57](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=237)** So what we'll do here is we will append this field which says only execute this script if the document is at sequence number 6.
>
> **[4:07](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=247)** Let's see if this works.
>
> **[4:10](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=250)** Ah, we've got an exception here, and that's because the sequence isn't at 6 it's currently at 4.
>
> **[4:15](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=255)** So the only way we could update this document is if we specify the correct sequence number.
>
> **[4:20](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=260)** So let's set the sequence number to what we expect, 4.
>
> **[4:24](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=264)** And then let's run this insert again.
>
> **[4:28](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=268)** This time it was accepted and the sequence number is now 5 and the primary term is 1.
>
> **[4:33](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=273)** Let's see what the results look like.
>
> **[4:37](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=277)** Yes, as you can see, the scores are updated and the bar tab has been updated appropriately.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case, (3), break, (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Saving scripts for reuse
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=0)** - [Instructor] In this section, we're going to save and reuse a script.
>
> **[0:03](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=3)** There's a few good reasons to do this.
>
> **[0:05](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=5)** The first is that scripts have application logic and it's better if those are specified in only one place.
>
> **[0:11](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=11)** And the second is compiling the scripts is performance intensive.
>
> **[0:14](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=14)** Elastic search puts a cap on how many scripts you could compile in a given time period.
>
> **[0:19](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=19)** This is the same document and script that was used earlier in the chapter, so I'm not going to explain it again fully but let's just go through it quickly.
>
> **[0:28](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=28)** We have a document that represents a bowler in a league and we have another document which describes how we want to append the bar tab field to it.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=37)** Let's run them both.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=46)** In this case, we could see that our document was created and we used the scripting logic to append a bar tab field or create it if it doesn't exist.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=57)** Now, as I mentioned we don't want to recreate this script in every single request.
>
> **[1:01](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=61)** It could be error prone, so now we're going to save that script to use it later.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=70)** Starting on line 30, you could see how this is done.
>
> **[1:13](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=73)** On line 30, we use a post to the scripts endpoint and we name the script update bar tab.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=80)** We took the same scripting above.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=82)** We simply created the script elements, specified the language and specified the source.
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=87)** Again, this is just a script that appends the fields if they exist or create it if it does not.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=91)** We could save this, and now the script is saved in the elastic search server and is reusable.
>
> **[1:37](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=97)** If we want to check to see if it's there we could use the get verb and look for the script.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=102)** Great. As we can see, the script is there, so let's move on.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=106)** In our example above, we mentioned we did an update and we specified parameters and we inlined the script.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=113)** In this case we'll just reference the script saved on the server.
>
> **[1:57](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=117)** So if you look at this example down here starting on line 147, we simply use the same script element but instead of using the source, we use the ID.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=126)** This ID matches the name above of the script we inserted, and we supplied the parameters as before.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=133)** Now we could run this example and see what happens.
>
> **[2:18](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=138)** As you can see we've updated the bar tab using the script that was saved on the server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), case, (1), this, (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### Updating by query
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=0)** - Update by Query is a feature in Elasticsearch that allows us to select one or more documents using a filtered DSL or a Lucene query syntax and modify them using a variety of methods.
>
> **[0:11](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=11)** This is of course useful when you know the IDs of a document but there's many of them.
>
> **[0:16](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=16)** Or, you don't know the IDs and you want to change numerous messages.
>
> **[0:21](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=21)** So to get started, we're going to recreate a document which we've used previously in this section.
>
> **[0:25](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=25)** It stores bowlers, their scores and a bar tab, which shows how much money they've spent at the bar and have yet to pay back.
>
> **[0:31](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=31)** So, interestingly enough, let's say this feature goes over very well and many people bowl but forget to pay their bar tab.
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=39)** Well, this creates a problem but let's turn this into a solution.
>
> **[0:43](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=43)** Someone in marketing came up with a clever promotion.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=45)** Why don't we take everybody who owes a bar tab and tell them if they bowl a game higher than 200 in the month of February, we'll pay their bar tab for free.
>
> **[0:55](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=55)** Interesting concept.
>
> **[0:56](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=56)** How do we locate those people?
>
> **[0:58](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=58)** As you can see on line 13, we've composed a search query.
>
> **[1:02](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=62)** We're using a bool query at the top level on line 17 and then we're using multiple must clauses.
>
> **[1:08](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=68)** We're specifying a range, people who have bowled over 200.
>
> **[1:13](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=73)** A range of time, dates between February 1st and February 29th and a range.
>
> **[1:20](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=80)** We only want to forgive bar tabs that are less than $10.
>
> **[1:23](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=83)** Let's see if this matches anybody.
>
> **[1:27](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=87)** Great.
>
> **[1:28](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=88)** We could see on the right, that this one bowler has been matched.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=91)** So how do we go about forgiving how much money they owe?
>
> **[1:36](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=96)** Here we've composed a script query on line 48.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=100)** Notice the source of the script.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=102)** We're going to set their bar tab equal to zero, as we've done on line 53.
>
> **[1:48](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=108)** And we're also going to leave a message that says, "Hey we've paid your bar tab."
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=113)** Now in this case, we're doing a conditional update query.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=116)** So we use the post verb, the name of the index, bowled_over_games and the update by query endpoint.
>
> **[2:02](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=122)** So since we've already talked about the script, we're just transplanting the query from the previous section into this section.
>
> **[2:08](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=128)** Notice the query is right here with all the same criteria.
>
> **[2:11](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=131)** Let's run this query.
>
> **[2:14](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=134)** Great.
>
> **[2:15](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=135)** On the right you could see, this information is slightly different than other APIs.
>
> **[2:19](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=139)** It tells us how many records have been updated as you could see on line six.
>
> **[2:23](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=143)** Let's see what the data looks like.
>
> **[2:28](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=148)** Ah, as you could see on the right, on line eight, the bar tab has been set to zero and the message is, "We've paid your tab of 9.25."
>
> **[2:37](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=157)** So, one thing to note about this feature is that you do want to know how many records you're going to change because if you're changing a lot of records, you may want to use a different technique that we'll talk about in the next section called "Creating a Task."

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (1)
> **Code Identifiers:** bowled_over_games (1)
> **Env Vars:** dsl (1)
> **Versions:** 9.25 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - update (1)

#### Using document versioning
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=0)** - [Instructor] In this section, we are going to demonstrate how to use versioning support to make conditional updates to documents.
>
> **[0:07](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=7)** Before we show how to do it, let's take a moment to come up with a case where we might need this feature.
>
> **[0:12](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=12)** Transactions and data stores take many forms.
>
> **[0:15](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=15)** Many databases are categorized as online transaction processing, or OLTP, and have strict transaction locking and serialization features, often grouped into a category of things called ACID transactions.
>
> **[0:29](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=29)** Taking this to another level, sometimes transactions are needed between two systems or distributed transactions.
>
> **[0:35](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=35)** My head hurts a little bit.
>
> **[0:37](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=37)** Let's get back to Elastic.
>
> **[0:39](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=39)** Elastic has what is called optimistic concurrency control using versioning.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=45)** This is exposed as a compare and swap.
>
> **[0:47](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=47)** Apply this operation only if the document is at the expected version.
>
> **[0:52](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=52)** This approach has some upsides and some downsides.
>
> **[0:56](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=56)** If a system holds many documents, each of them rarely being updated, the chance of a conflict and retry is very low.
>
> **[1:04](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=64)** However, if there are many users attempting to update a document at roughly the same time, retries cause delay, and at a certain point, if something is retrying too much, the overall availability of the system is low.
>
> **[1:16](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=76)** Applications usually have to give up retrying, and ultimately, that looks like a failure.
>
> **[1:21](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=81)** One more important thing to note.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=82)** Generally, even systems that store and process transactions, such as the movement of monetary funds, typically are designed using logs or ledgers and not fields or tables where moving money involves large multi-table or multi-row transactions.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=100)** To understand how Elastic optimistic concurrency control works, let's take a use case.
>
> **[1:46](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=106)** Let's say our bowling season is over, and it's time to plan an award dinner.
>
> **[1:50](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=110)** Each user is given a link, a one-time link, and asked to vote on a local restaurant over the next few days.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=116)** It's expected that a few people will vote, and very few will vote at the same time.
>
> **[2:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=120)** So Elastic's optimistic concurrency control seems like a good fit.
>
> **[2:04](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=124)** To do this, we are going to create an index called votes, and the administrator will create a first document.
>
> **[2:12](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=132)** The document simply uses keys as the names of restaurants, Hamburger Heaven, Pizzas are Us, and Holy Wings, and sets the vote to zero.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=146)** Now it's time for people to vote.
>
> **[2:28](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=148)** We definitely want to make sure that the same transaction doesn't cause a double vote.
>
> **[2:32](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=152)** So this is where Elastic's versioning comes in.
>
> **[2:34](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=154)** If you notice on line 12, we're using the post verb.
>
> **[2:38](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=158)** The first part is the votes index, and then we're using the update endpoint.
>
> **[2:43](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=163)** We're specifying the document id, but notice the query parameters, we're using two.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=167)** If sequence number equals zero, and if primary term equals one.
>
> **[2:52](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=172)** Let's look on the right.
>
> **[2:53](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=173)** Currently, we could see that the sequence number is zero, and the primary term is one.
>
> **[2:58](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=178)** So we could expect this update to succeed.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=180)** Let's try it.
>
> **[3:03](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=183)** This did.
>
> **[3:04](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=184)** Let's take a look at what the data looks like.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=188)** The data has correctly registered one vote for Hamburger Heaven.
>
> **[3:12](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=192)** Now the version is two, and the sequence number is one.
>
> **[3:16](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=196)** Version is a field that we don't touch directly.
>
> **[3:19](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=199)** We always interact through the primary term in the sequence number.
>
> **[3:22](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=202)** Let's try to accidentally make the same vote again.
>
> **[3:26](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=206)** As we can see, this was rejected.
>
> **[3:28](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=208)** Elastic has given us a reason on line 13.
>
> **[3:31](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=211)** There is a version conflict.
>
> **[3:32](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=212)** Sequence number and primary term don't match.
>
> **[3:35](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=215)** Let's make another vote for Hamburger Heaven using the right values.
>
> **[3:40](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=220)** This post succeeded, and we could see the document value is expected.
>
> **[3:48](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=228)** Using this, we could also do scripted updates or manipulate the field using counters or the painless query language.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (2), case. (1), match. (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** oltp (1), acid (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Managing long-running operations using Task API
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=0)** - [Instructor] This section is going to explain how to use the task feature in Elastic, which manages long-running queries.
>
> **[0:06](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=6)** If you remember from our previous section, we introduced a bowled over games index and we added a field to that index, which is shown on line seven on the left, which is the bar tab.
>
> **[0:18](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=18)** And then if you remember, we created a query that would locate bar tabs based on criteria and forgive them.
>
> **[0:23](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=23)** We won't go through this whole query but suffice it to say it searches our data set looking for bar tabs and it replaces them.
>
> **[0:30](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=30)** Let's run this query.
>
> **[0:32](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=32)** Notice we're using wait for completion equals true on line 11.
>
> **[0:38](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=38)** On the right, you could see the response we got.
>
> **[0:40](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=40)** We have a certain number of records updated and our request completed successfully.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=46)** But if you could imagine our Elastic search database may have billions of documents and brontobytes of data, so not all queries could be run in real time.
>
> **[0:54](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=54)** For example, imagine this request matched millions of results.
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=57)** We probably wouldn't be able to change them all instantaneously so we could simulate how that would work.
>
> **[1:03](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=63)** In a case like that, we would set wait for completion equal to false.
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=66)** So let's run this same query again.
>
> **[1:09](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=69)** Now, in this case, we've been given back the task id which is an ID used to manage the task.
>
> **[1:15](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=75)** I've copied this task ID here and let's see how we would use it.
>
> **[1:19](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=79)** Well firstly, we could list all the tasks.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=82)** On the right, you'll see here there's some tasks that are actually being made by Elasticsearch itself so they're not all relevant to things that users are doing.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=90)** We could seek out a specific task.
>
> **[1:31](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=91)** So let's look at this task.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=94)** We could see this task on the right is completed and we have the same information, how many rows were updated, and that's basically it.
>
> **[1:42](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=102)** Because this task was already complete, there's nothing we could do with it, but if it wasn't complete we could cancel it using this particular endpoint.
>
> **[1:49](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=109)** So we could say, tasks cancel.
>
> **[1:51](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=111)** We won't click that because it won't work.
>
> **[1:53](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=113)** But an important part is when we create a task like this we do have to delete it ourselves and the syntax for that is here.
>
> **[2:00](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=120)** So we would use the delete verb and say dot tasks slash task and give the name.
>
> **[2:06](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=126)** As you can see on the right this results in the task being deleted.
>
> **[2:09](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=129)** So this is how we create background or asynchronous tasks and how we manage them.
>
> **[2:13](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=133)** Beyond that there's some other things you could look forward to.
>
> **[2:17](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=137)** For example, if a task is very large you could actually split the task into parts and paralyze it.
>
> **[2:22](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=142)** We'll get into that in a later section when we talk about paging.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (2), case, (1)
> **Analogies:** imagine (2), for example (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/next-steps?u=76281980&t=0)** (gentle music)
>
> **[0:09](https://www.linkedin.com/learning/elasticsearch-in-depth/next-steps?u=76281980&t=9)** (gentle music continues) (gentle music fades)

> [!info]- Semantic Content
>
> **Non-Speech:** (gentle music) (1), (gentle music continues) (1), (gentle music fades) (1)


## Path Context

### In [[Develop Your NoSQL Skills]]
← [[Elasticsearch Essential Training (2023)]] | **9 of 10** | [[Cloud NoSQL for SQL Professionals]] →

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Elasticsearch Essential Training (2023)]] — Elasticsearch
