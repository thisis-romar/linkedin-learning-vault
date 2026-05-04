---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQFgh-k_HSEA-w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679596183511?e=2147483647&amp;v=beta&amp;t=8ljOncdp1sujzOrHlcVlT99xjG1BBJP6BQrihIoJk-A"
linkedin_topic: Database Management
learning_paths:
  - '[Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)'
prev_courses:
  - '[Elasticsearch Essential Training (2023)](Elasticsearch%20Essential%20Training%20(2023).md)'
next_courses:
  - '[Cloud NoSQL for SQL Professionals](Cloud%20NoSQL%20for%20SQL%20Professionals.md)'
path_nav: '[{"path":"Develop Your NoSQL Skills","position":9,"total":10,"prev":"Elasticsearch Essential Training (2023)","next":"Cloud NoSQL for SQL Professionals"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/elasticsearch
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Elasticsearch%20in%20Depth.md)

![Elasticsearch in Depth](https://media.licdn.com/dms/image/v2/C4D0DAQFgh-k_HSEA-w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679596183511?e=2147483647&amp;v=beta&amp;t=8ljOncdp1sujzOrHlcVlT99xjG1BBJP6BQrihIoJk-A)

# Elasticsearch in Depth

> With its ability to index and search documents using plain text, Elasticsearch has become one of the most popular and widely adopted search engines. In this course, Edward Capriolo goes beyond the basics of what Elasticsearch can do. Edward covers specialized data type and query support—like using pipelines to enhance data and combining fields to simplify searching. He shows you how to execute adv

> [LinkedIn Learning](https://www.linkedin.com/learning/elasticsearch-in-depth) | 1h 27m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Much more than full-text searches](#much-more-than-full-text-searches)
- [**1. Getting Started**](#1-getting-started) (6 videos)
  - [The Elasticsearch stack](#the-elasticsearch-stack)
  - [Installing Elasticsearch and Kibana locally](#installing-elasticsearch-and-kibana-locally)
  - [Executing basic CRUD-like data operations](#executing-basic-crud-like-data-operations)
  - [Using Elastic SQL](#using-elastic-sql)
  - [Basic Elastic schema and data design](#basic-elastic-schema-and-data-design)
  - [Document database schema topics](#document-database-schema-topics)
- [**2. Specialized Data Type and Query Support**](#2-specialized-data-type-and-query-support) (6 videos)
  - [Finding objects with GeoShape](#finding-objects-with-geoshape)
  - [Storing data and searching complex nested data](#storing-data-and-searching-complex-nested-data)
  - [Creating parent/child relationships between documents](#creating-parentchild-relationships-between-documents)
  - [Combining multiple fields to simplify searching](#combining-multiple-fields-to-simplify-searching)
  - [Using Elasticsearch pipelines to enhance data](#using-elasticsearch-pipelines-to-enhance-data)
  - [Storing data with varying structures using flatten](#storing-data-with-varying-structures-using-flatten)
- [**3. Advanced Queries**](#3-advanced-queries) (6 videos)
  - [Filtering, matching, and scoring explained](#filtering-matching-and-scoring-explained)
  - [Retrieving large result sets using the Scroll API](#retrieving-large-result-sets-using-the-scroll-api)
  - [Performing aggregations](#performing-aggregations)
  - [Indexing templates to define index properties](#indexing-templates-to-define-index-properties)
  - [Implementing expiring data with lifecycle management](#implementing-expiring-data-with-lifecycle-management)
  - [Working with index aliases](#working-with-index-aliases)
- [**4. Modifying Data**](#4-modifying-data) (5 videos)
  - [Updating documents using scripting](#updating-documents-using-scripting)
  - [Saving scripts for reuse](#saving-scripts-for-reuse)
  - [Updating by query](#updating-by-query)
  - [Using document versioning](#using-document-versioning)
  - [Managing long-running operations using Task API](#managing-long-running-operations-using-task-api)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Much more than full-text searches](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/much-more-than-full-text-searches?u=76281980&t=0)** - [Narrator] [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) is one of the most popular search engines, but many may not know that Elastic can do more than full tech search. Elasticsearch is a document database that offers the ability to store documents while indexing specific fields inside the documents. These indexes are distributed and replicated across clusters of tens or even hundreds of server computers. My name is Edward Capriolo. I'm a technologist who has been lucky enough to take on a number of [Big Data](../../Skills/Data%20Science/Big%20Data.md) challenges. I have designed and implement systems that store and analyze terabytes of data using a variety of so-called [NoSQL](../../Skills/Software%20Development/NoSQL.md) systems. If you're ready to pull up your sleeves and learn how to utilize advance in-depth features of Elasticsearch, join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (3), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [The Elasticsearch stack](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=0)** - [Instructor] In this section, we will give a brief introduction to the Elastic stack, and the best place to start is the heart of the stack, [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md). Elasticsearch is designed as a fully distributed data store, meaning that multiple computers, or sometimes as we call them nodes can work in concert to divide and replicate data, but for smaller cases, it can scale down to a single node for lighter workloads. Elasticsearch is a document data store and it uses [JSON](../../Skills/Web%20Development/JSON.md) as a native document type and API. Internally, Elastic heavily leverages Apache Lucene as a storage format. Lucene is a specialized database engine with the ability to search structured data, as well as blocks of text, like emails. Document [Databases](../../Skills/Software%20Development/Databases.md) are not as standardized as [SQL](../../Skills/Data%20Science/SQL.md) databases, so we'll run through the basics to help provide some groundwork for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course. On the right, we have a document. We're calling it document, and we're giving an ID of 45. It has two fields inside it. One is an age, which is a number, and the other is a nickname, which is a list of strings. Note that in Elastic, elements could be singular or list based without ischemic change. On the left, we have a simplistic description of a data node in an Elasticsearch cluster. Notice the outer container is called an index. This can be a bit confusing for those from a relational database background where the primary [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) are called tables, and the specialized structures to optimize searches inside those tables are called indexes. In Elasticsearch, index is the primary data container, not a table.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=94)** Elastic uses HDP as an interface to the database. When a document like the one on the right is inserted, it is sorted in a single shard, and from there it can be further searched or modified. Now, let's understand how a cluster of nodes can work together. Elastic assigns different roles for physical nodes. A common role is the leader node. The leader is decide who's in charge of shards. Another common role is a data node. Data nodes actually hold the data, so typically what people do is they have a few leaders possibly divided across different racks or data centers for redundancy, and then as many data nodes as they need to solve their problem. Each index has a shard count and a replication factor. In this case, the document on the bottom left is going to the my stuff index, and since it's replicated, it goes to two separate data nodes. This provides both performance and replication redundancy. Take note that some features in Elastic are affected by how many shards an index has. For example, some features in Elasticsearch use term frequency, inverse document frequency to figure out scores, effectively how often a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) is used, and based the on number of shards, the corpus on each node may be different, but this is a finer point we could get into later. Finally, we can discuss the Elasticsearch stack. On the top here we have Elasticsearch, which is the document database we've just been discussing. However, there are many tools that work with it. Throughout this course, we're going to use Kibana, which is a web interface for Elastic and note, Kibana is a very, very elegant,
>
> **[3:09](https://www.linkedin.com/learning/elasticsearch-in-depth/the-elasticsearch-stack?u=76281980&t=189)** full featured web interface to work with Elastic. It's not just some, oh, let's add a web interface to this thing. It's a very useful tool, and we'll be using it for the rest of the course. Outside of that, there's other components you could use. Outside of Kibana, there are other tools, like Beats and Logstash. Logstash is very popular, 'cause many people take their log data and store it in Elasticsearch, and Logstash is especially made to help capture and move that data into Elasticsearch, sometimes finessing it on the way in. Also note that there are some options which aren't part of the standard open source Elastic distribution that are provided by the Elastic vendor, such as graph and machine learning. We won't talk about those during this course, but they're very interesting in and of themselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (10), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Definitions:** is a  (9), is an  (1), is called (1)
> **CLI Commands:** node (5), apache (1)
> **Env Vars:** json (1), api (1), sql (1), hdp (1)
> **Warnings:** note that (3)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Installing Elasticsearch and Kibana locally](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=0)** - [Instructor] This section will focus on installing [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) in Kibana. This will help you do the remainder of the materials in this course. Please note that this setup is only for local demonstration purposes and wouldn't be how you'd set up a production server. So to get started, I've moved my way onto the Elasticsearch page and found a download link. As I mentioned, there's other ways to run Elastic, potentially as a web service, but in this case, we're going to just download the binaries and run them locally. My laptop is [Windows](../../Glossary/Service/Windows.md), so I've chosen it as a platform. Other options are available here. These links will provide you with the ZIP file, which is the entire Elasticsearch distribution. Likewise, we're also going to download Kibana. Again, you could choose the distribution that's appropriate for you. Both Elasticsearch and Kibana are binaries of a decent size. However, with a broadband connection, you'll download them fairly quickly. I unzipped them and I want to take this opportunity to walk through the directories of them just so we understand their layout. Elasticsearch is written in [Java](../../Skills/Software%20Development/Java.md), so the majority of this application runs on a variety of platforms, including Windows, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and Mac. In these type of applications, it's common to have a bin folder where executable scripts are, a config where your configuration exists, data where your data is stored, and logs. On my machine, I didn't have to customize this application at all to start it. So let's move back and look at Kibana. Kibana has a similar setup in actuality. However, one thing to note that Kibana is written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) whereas Elasticsearch, as we mentioned, is written in Java.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=94)** The way I like to run Elastic is through the command prompt. It may seem a little archaic at first, but I think it makes it easier to see log files or startup issues. So the trick here is to navigate to the directory where you've downloaded Elastic from. In my case, I know it is this directory. As you're navigating, you could use some tricks like dir to list the directories or cd to change directory. But in this case, all I have to do is type Elasticsearch and this triggers the elasticsearch.bat file or batch file. With this type of application, no news is good news, so if you don't see any error messages, it's safe to assume Elastic has started up. If you want to be more sure, you can navigate your browser to localhost:920. You should see a message similar to this, which shows us that Elastic is indeed up and running. We could do a similar thing for Kibana. We could navigate to the directory that we downloaded Kibana to. Then switch the cd folder and then run Kibana, which will trigger the kibana.bat file. Once Kibana is done loading, you'll see a message like this that says Kibana is now available and Kibana is available on localhost:5601. Kibana here is warning us that we don't have security enabled. That's okay 'cause we're only running it locally. In a production environment, if you saw this message, you should definitely not dismiss it. Throughout the course, we use the Dev Tools feature quite a lot. That can be found here. You could look through this left menu and navigate to Dev Tools. This gives us a query interface to execute commands against Elastic.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/installing-elasticsearch-and-kibana-locally?u=76281980&t=188)** But remember, elastic is really just an HTTP server so you could always use cURL or some other tool to run the commands. I just find Kibana to be the most useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (8), [Windows](../../Glossary/Service/Windows.md) (2), [Java](../../Skills/Software%20Development/Java.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** cd (2), python (1), curl (1), find (1)
> **UI Navigation:** navigate to (3)
> **Warnings:** note that (2), warning (1)
> **Prerequisites:** setup (2), set up (1)
> **URLs:** [localhost:920](https://localhost:920) (1), [localhost:5601](https://localhost:5601) (1)
> **Ports:** :920 (1), :5601 (1)
> **Env Vars:** zip (1), http (1)

#### [Executing basic CRUD-like data operations](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=0)** - [Instructor] In this section, we are going to demonstrate how to do basic create, read, update and delete or CRUD operations. Let's take note of some important aspects in the design of [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md). First, the protocol is HTTP based. This makes it easy to use when compared to other [Databases](../../Skills/Software%20Development/Databases.md) that may only have a binary interface. Even a user with a browser, [JavaScript](../../Skills/Software%20Development/JavaScript.md), cURL or Postman has full ability to execute every operation the database supports. Throughout the course, we use Cabana dev tools which is a simple tool to execute commands. But it could as easily be done with tools, like we mentioned above, or a high level API written in a programming language like [Java](../../Skills/Software%20Development/Java.md). Next, the Elastic API leverages concept from restful web services, like using HTTP verbs. A user wishing to add a document uses an http PUT verb or retrieving a document uses a GET verb. In the cases where the requests are complex, Elastic uses structured [JSON](../../Skills/Web%20Development/JSON.md) in the body of requests. This is called the Querydsl. In the case of Elastic, the DSL or domain specific language exposes the unique features that Elastic offers. So here we're going to type. The C in CRUD stands for create. And we could start with that. We start with the PUT verb, which is appropriate since we are creating data. The URL next contains the name of an index, bowled over,
>
> **[1:33](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=93)** which will hold the data. In this case, we append underscore doc, which has a special meaning to Elastic. And the final path of the URL is the ID for the document. Even though this looks like a number, it's actually a string. For the body, we are using a JSON document and including three fields: first name, last name and average. If the insertion is successful, the results will look like that on the right, or the successful count is one.
>
> **[2:05](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=125)** Let's insert a second user. To do this, we copy and paste it. But notice we changed the ID in the URL. If we didn't, we would accidentally overwrite the first document. Let's remove the data we just created. For this, we'll use the DELETE verb and specify the same URL. In the right, we could see what the status result should look like when we match a document and delete it. Quickly, let's look at what some of the endpoints return when you attempt to delete a document that does not exist.
>
> **[2:46](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=166)** Here we showed the status of what happens when you attempt to read and delete a document that doesn't exist in the index. Now let's look at another use case. What if we want to add additional fields to an already existing document or update it? For this, we do not need to know the entire source, only the fields you wish to add. In this example, let's give bowler number one a nickname of lincoln. To do this, we start with a POST verb. In the first part of the URL, we put the index name. In the second, we put update. In the third path, we put the document ID. We're also adding the refresh equals true so that Elastic will re-index this data right away. To update the doc, we use a JSON body. We put a doc object. And inside it, all the fields inside the doc become part of the original document. We could [Fetch](../../Skills/Web%20Development/Fetch.md) the document back to see if it's been added. Now the fun part. The R in CRUD is read. It is Elasticsearch after all. So let's explore some ways to search our data. If we don't know the idea of a document, we could search it out using the search endpoint. We start it with the GET verb. Again, we mentioned the index name. And this time, we referenced the underscore search end point. Instead of an ID, we added a q parameter to the query and specified a value. Notice it even included a star. The star is like a wild card match. Using q searches across all documents and all fields. If we're only interested in the document data
>
> **[4:19](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=259)** and not the extraneous data Elastic adds to the response, we could use the filter path parameter. Let's give it a try. Since we added hits dot hits dot underscore source, you could see, on the right, we only get the body of the match documents. Let's do a more advanced search. Let's find averages between a minimum and a maximum using range queries. This could be done using the q parameter as well. We will specify the field average and includes beginning and end values.
>
> **[5:03](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=303)** While we've mentioned that Elastic uses [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) whenever possible, larger, more complex queries become hard to express even in a URL, even using query parameters. We'll do a few examples that use a query body. We could transplant the queue into the query string object. Notice, this particular query object is very sensitive to white space, so be careful. Adding a single space here makes the query return no results. The rest of the course will cover more complex aspects of Elasticsearch. We will show how to update or delete by query and how to do more complex searching, like nested bool queries. For now, we're going to only give you the most basic match all query, so you could get an idea of what other features may be out there as the auto-complete scroll by. As we could see, there's match, match all, match phrase, match prefix. We won't have time to show all of these features. But you could poke around and try the data yourself. For now, we're just going to do the most basic match all, which returns all documents. Let's add Bob back to see if we could find Bob.
>
> **[6:22](https://www.linkedin.com/learning/elasticsearch-in-depth/executing-basic-crud-like-data-operations?u=76281980&t=382)** As you can see on the right, match all returned all documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** url (6), crud (3), json (3), http (2), api (2)
> **API Endpoints:** put  (2), get  (2), delete  (1), post  (1)
> **CLI Commands:** find (2), curl (1)
> **Definitions:** is a  (1), is called (1), stands for (1)
> **Cross-References:** we mentioned (2)
> **Code Identifiers:** curl (1)
> **Tools:** postman (1)

#### [Using Elastic SQL](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=0)** - [Instructor] In this section, we are going to use Elastic [SQL](../../Skills/Data%20Science/SQL.md) to query data. Elastic is a document database that stores [JSON](../../Skills/Web%20Development/JSON.md) documents, and it has a Query DSL that actually uses JSON as the primary language of interacting with the database. That being said, SQL is a widely popular declarative language to query [Databases](../../Skills/Software%20Development/Databases.md). Users with SQL experience could leverage Elastic SQL to do many types of queries. Let's get started using a data set of user-generated content for blogs or poetry. We're going to insert two documents. Each has an author, a date, a title, and a package, and we'll let Elastic create the schema dynamically.
>
> **[0:45](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=45)** Now, to search documents, the most common way is to use the Query DSL. We could put together a simple match query looking for some words in the passage, and we could find some matches. Here, we constructed a simple match query that's looking in the passage fields for bowling, dinner, cheer, or award. This matched some documents. Again, it takes some time to ramp up and learn Query DSL, and since SQL interface is so popular, it could answer a lot of basic queries. So let's search the author field using SQL, and see if we could find the same poem.
>
> **[1:30](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=90)** Let's start by running the most basic query. Here, we'll hit the SQL endpoint, setting the format to text, and we'll make a body feeding one parameter, a query, which is running Select Star. This returns two results, one by Nathaniel Bowlmorn, and another by Whiph Onpin. Let's use a filter to query the results down. Here, we used a where clause in the same way in the Query DSL we would use a filter query. While it is not possible to do every type of SQL query in Elastic SQL, the language is powerful. Let's construct a group and count query.
>
> **[2:17](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=137)** This query has a few sections. In the first, we're selecting the author field and an aggregate field, which is the count. Then we're using a from section to reference our index. We're using a where section to filter the data, and we're grouping by author. Also, notice we use the three quotes for our query. This allows us to do multi-line queries fairly easily. If we remove the format equals text, we could see that the result is returned as JSON, and also, importantly, it has a cursor, which would allow us to retrieve larger result sets and page through them.
>
> **[3:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elastic-sql?u=76281980&t=180)** The endpoint has a translate feature. This takes the SQL query and converts it to a Query DSL query. This is a really great way to learn the Query DSL language. As you could see on the right, the query's been broken down into two parts. The filter is done as a wild card query on the author field, and the grouping is done in an aggregation query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (10), [JSON](../../Skills/Web%20Development/JSON.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1), cursor (1)
> **Env Vars:** sql (10), dsl (6), json (3)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [Basic Elastic schema and data design](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=0)** - [Instructor] In this section we'll discuss and show examples of schema and data design in Elastic. Use cases of Elastic vary. Some may use it as a primary database meaning it is possibly the only place data is stored. Other times Elastic is used to supplement the primary database. This is common because many [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) are well suited for dealing with discreet rows and tables or columns of fixed width while [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) can store documents with megabytes of text and provide sophisticated searching inside these documents such as fuzzy matching or boosting. When using Elasticsearch as a supplemental database, it is possible not to store the initial source document. This might be a little bit hard to wrap your head around but think about it this way. When indexing data like text for searching, the data is tokenized and normalized to make the searching more efficient. Thus, if you only need the data in Elastic for that case, storing the original document isn't strictly necessary. This is a very important design decision because if the source data is not stored in Elastic, it can be hard to debug how something is working and features like re-indexing can't work. Elastic generally advises that you should store the data and I would say you should as well. Let's go through an example where we choose not to store the source data. Let's quickly demonstrate setting no source. On line three, we've created an index definition. We're starting with mappings and we're using the underscore source field, and we're setting the enabled attribute equal to false. Here we're inserting a simple document.
>
> **[1:40](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=100)** And here we've defined a search. In this case, we're searching where the author keyword is Nathaniel Boulmore. Let's see if we find the data. In this case, we do. Remember the source isn't saved so all we know is that document ID matches this search. Let's give an example of how this can be difficult. Here are then another search, which seems to be exactly the same, but something is different. I'm searching not in the author keyword field but the author field, which has been tokenized. Notice how without the source data, it's very hard to understand why this query would work and this query wouldn't work. In Elastic, every document has an ID. During insertion, if the user does not specify an ID, Elastic will create one dynamically. If the user does select an ID, Elastic will use that. This is implications depending on if the action is an insert, an upsert, or an update. And take note that when specifying an ID, Elastic does have to do some more work on the right path. This is an important design that affects how your application will work. For example, if you're doing blind rights and you don't use an ID, you could potentially introduce duplicates in a failure scenario. This might be okay. Maybe you'll remove the duplicates in your query phase later, or some other background process will do it. But you may want tighter control and you may want to use updates to make sure documents could only exist once. To illustrate this, we're going to create a simple data set. Notice on line 47, we're using the put verb
>
> **[3:14](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=194)** and we're specifying an ID of one. We could also change this and use the post verb. In this case, we don't have to specify a document ID.
>
> **[3:34](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=214)** This worked. Notice the ID created is returned on the right. We could use this to search the data.
>
> **[3:49](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=229)** Again, remember, note that this approach could easily create data duplication. Each time this request is resent, I'm getting a new ID. There's now 29 documents of this than the database. Elastic is often described as a near realtime search engine. While many operations are atomic like put or get, other operations like fuzzy matching rely on indexes to be rebuilt to reflect the latest data. Rebuilding an index is expensive, especially for high data volumes, so it's usually only done periodically. In order to show how the refresh interval works, we've put together this script. We're going to create an index, set the settings for the refresh time to be 30 seconds. We're going to insert some data and then retrieve it using the get API. Then we're going to look for it to search API. If we do this quickly, the data won't be found, but then if we search 30 or 31 seconds later, it should be found. Let's give it a go.
>
> **[5:01](https://www.linkedin.com/learning/elasticsearch-in-depth/basic-elastic-schema-and-data-design?u=76281980&t=301)** The data is found here as we could see on the right. Notice the data is not found. We'll wait a little while. La de da, waiting for some data. Waiting, waiting, waiting, waiting, waiting waiting. Hm, da da. Oh, there it is. So this shows you the effect of the refresh interval, and again, this setting is in place because built a new index is an expensive process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Definitions:** is an  (3), is a  (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (2)
> **Analogies:** such as (1), for example (1)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### [Document database schema topics](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=0)** - [Instructor] In this section we're going to cover document database schema topics including types, mapping, and dynamic schemas. Before we get started, however, I'd like to take a minute to compare document [Databases](../../Skills/Software%20Development/Databases.md) to [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). Relational databases are very common and thus there's lots of information about how to design them. Typically, databases have one-to-one relationships, one to many relationships, many to many relationships, and there's volumes of material on how to create a database correctly either in third normal form or fourth normal form or even fifth normal form. Document databases are different. There's not as much theory on them. Many of them fall into the category of [NoSQL](../../Skills/Software%20Development/NoSQL.md) or newSQL stores and people have to come up with new patterns. Typically in a document database, you do normalizing because joins and other relationships aren't as easy to model. Then the question becomes how do you divide your data? Do you put it in one very large document? Does it have nested documents inside of it or subsections? That takes some specialized learning and, quite frankly, some trial and error. So what we're going to do is we're going to just start with a simple schema and get more complicated as we explain some of these things. So the first things many people think is they may believe that Elastic Search is schemaless. You could come to the web interface of Elastic and you could create a document with a date and age and a nickname and say insert this into an index called Simple Schema. And Elastic accepts it even though we haven't set up any schema at all. So they might believe it's schemaless, but that isn't true. A mapping was created dynamically
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=92)** that we could take a look at by hitting the mapping endpoint. As we could see on the right here, Elastic Search auto detected the schema, and in this case correctly, or at least we think it's correctly. Let's insert another more complex document. Here notice the nickname is a single field, but here it's an array. We've added two new objects. One is called Complex Type and one is an array called Complex Data 2, which has Complex objects inside of it. Elastic Search allowed us to insert this data. Let's see what the mapping looks like. As we can see, the mapping is getting much larger. We have Complex Data Defined, Complex Data 2. What's going on here? Well, what's happening is Elastic Search is a document database, so unless the document violates the schema, it will allow it to go in. So let's make a schema violation. Let's change this 40 years to a number like 40 I guess
>
> **[2:33](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=153)** That works. But, why does it work? It only works because Elastic is converting this number to a string before inserting it. But it wouldn't do it the other way. If we had defined this data as a number first, it wouldn't take a string, it would throw an exception when we tried to insert it and that would be pretty bad. So as a rule of thumb, and the way you should design every application not just a rule of thumb, you should create a schema. It keeps things consistent. So we're going to do that here. We're going to get a fresh start. So what we're going to do is we're going to delete what we've created. I've already captured the mapping and I'm going to add something to the mapping, which is dynamic equals false.
>
> **[3:16](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=196)** Notice we could still insert the same data and let's try to search it all. The data is still here. And let's look at the mapping. Now, the only difference in this case is we could still insert dynamic documents, however, since we've set strict equal to false, we won't change the mapping. Let me show you what I mean.
>
> **[3:44](https://www.linkedin.com/learning/elasticsearch-in-depth/document-database-schema-topics?u=76281980&t=224)** We've here edit fields to the document, but they aren't present in this mapping. And this is dynamic set to false meaning when new data comes in we aren't going to create a field definition for it, even though we'll accept it in the documents. Now this is still problematic later on if we did want to index this field and the data wasn't in a consistent way, it wouldn't work and be useful. So this is a trade off with document databases. You have to decide what you want to allow and how strongly typed you want everything to be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (4), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Code Identifiers:** nosql (1), newsql (1)
> **Best Practices:** rule of thumb (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Specialized Data Type and Query Support

[↑ Back to Table of Contents](#table-of-contents)

#### [Finding objects with GeoShape](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=0)** - [Instructor] In this section, we're going to demonstrate how to use geospatial indexing support. To get started, we will create an index. In the mappings section, we will create a field called pin, which is an object. Inside it, we will nest a field called location. Note, it's important that the type of this object will be geo_point. This is a specialized type that represents a point on the earth, which is a sphere. I feel the need to tell a flat earth joke, but I'll avoid that. Next, we'll populate a small database of interesting things. Let's imagine that "Bowled Over" has propelled our bowling career and on the Pro bowling tour, we're traveling around the world and while we're doing that, we wish to do some sightseeing. For our first document, we're adding the Statue of Liberty to our database. The field attraction_type is set to monument and we've given it a human-readable name. For the pin coordinates, we specified longitude and latitude, which I researched offline. We also have created two other documents. One is a theme park I often visit in Rye, New York called Playland. The other is the location of The Alamo, which is in Texas. Note that the Statue of Liberty and Rye Playland are very close together, while Texas is fairly far away.
>
> **[1:22](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=82)** Now that this data is inserted, let's do some searching. We're starting with a basic template to query data. You could see it on line 56. Here, we're starting with a Boolean query and we're doing a match_all and we're boosting results where the type is theme park. We can see that all three documents were returned, but the Playland theme park has a much higher score, which you could see on line six in the right pane. Now, we're going to modify this base query and have it take into account some geospatial data. To do this, we've added a filter clause to the query. Recall that filters must be true for results to be returned. Inside the filter, we're adding a geo_distance query object. This has some mandatory and optional properties. An important one here is distance. Here, we specified the distance as 50 miles. Next, we're setting the pin.location to somewhere in New York. As expected, we could see that only two of the results were returned, because they're within 50 miles of this pin point. Another neat thing we can do, instead of filtering by distance, is boost by distance. This allows us to create queries where we can give locations closer to our point of reference a higher score. To do this, we add a should clause and we use the distance_feature query object. We set the fields we want to reference, in this case pin.location, and we set the pivot field to 10 miles. This effectively adjusts the score by 10 mile increments, saying that as things get 10 miles farther away,
>
> **[2:58](https://www.linkedin.com/learning/elasticsearch-in-depth/finding-objects-with-geoshape?u=76281980&t=178)** the score gets lowered. Finally, we put the origin. Here, I use the array syntax. (chuckles) Be very careful here. I accidentally assumed that when using array syntax the values are latitude, longitude, but actually they're longitude, latitude and inverting this location New York actually placed it somewhere in Antarctica. After running this query, we could see that the scores have been adjusted and the score of Playland is higher than the score of Statue of Liberty just because we've boosted it and it's closer to our reference location. Also note, Elastic has some very cool visualizations in Kibana. Let's look at how maps could be rendered. Here, we navigate to the Maps interface and we add a layer. We could take documents from [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md). We specify our index using an index pattern, which is location*, and then we add a layer. As you could see here, the locations appear on our map. Again, Kibana is a very cool and very functional web interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Code Identifiers:** geo_point (1), attraction_type (1), match_all (1), geo_distance (1), distance_feature (1)
> **Definitions:** is a  (4), is an  (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** template (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Storing data and searching complex nested data](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=0)** - [Instructor] This section is going to describe how to store, index and search complicated nested elements inside [JSON](../../Skills/Web%20Development/JSON.md) documents. Here on line three we've created a document that describes the scores of two teams bowling against each other. Notice on line six we have a scores element which is actually an array of multiple games. Notice each bowler has bowled two games. Let's insert the document. In this case, Elastic search has created the mapping for us. Let's take a look at it. On the right, on line 18 we can see scores doesn't have a type. Internally, it's type is object. There's implication that comes with the object storage and we'll explain them right now. Let's do a search for a bowler named [John](../../Glossary/Tool/John%20the%20Ripper.md) on the Strike Force team. Notice we found a match but what this means is that there is a document with a bowler named John and a team named Strike Force. But importantly, this design does not allow us to match only a single team with a bowler named John. If we scroll up to our original document we could see that the bowler named John on line 34 is on the Bowling Turkeys. There's no one named John on the Strike Force team. Let's delete the index and recreate it using the nested type instead of the object type for the scores array. Internally, what this does is each nested object becomes an internal document linked to the parent document. Note here that this index has the same mappings
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-and-searching-complex-nested-data?u=76281980&t=95)** as the original one. The only difference is on line 95 we've used the type nested. Let's go back and reinsert our original document. Now, to search this document for the criteria we want we're going to use a special search type called nested. On line 127, we've started a search. On line 130, you could see that our query contains an element called nested supplying a path. In this case, the path is scores, the element, that's the array. This type of query will unroll the scores into multiple documents, allowing us to search them, and in the query we've included our original search to look for a bowler named Strike Force. Let's see if we get any matches. There is indeed a bowler named Bob on the Strike Force team as we could see on the hits on the right on line 30. Let's do our original search and see if it incorrectly finds a bowler named John. Here on line 153, we've done the same search. We've just replaced the name Bob with John. As expected, as you can see on the right, there's no matches here. There's no hits. That's because we're only searching nested documents. A quick note about nesting is that every nested internal document creates a separate document in Elastic so it's not the ideal to use when you may have arrays that have hundreds or even thousands of internal documents. There may be a better way to design and we'll talk about some later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [John](../../Glossary/Tool/John%20the%20Ripper.md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** json (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating parent/child relationships between documents](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=0)** - In this section, we're going to show how to relate documents together using the parent-child features. So before we get into using this feature, we're going to start off with a few caveats. [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) is not a relational database. It is a document oriented database. And this type of data store favors de normalizing data, which generally means copying data instead of trying to link documents together. However, this feature is here and it is kind of useful and interesting and we'll explain how it works. So the best use case of this feature is when a parent has many children. So the canonical example given is if you have a store with items and you have lots of orders of those items, that would be a perfect time to use it. Where a bad time to use it would be hundreds of millions of items related to hundreds of millions of other items. There's a few other caveats such as documents can only have one parent. But let's not get too deep into that. Let's just give an example and go with it. So for this example, we're going to use the idea of a bowling alley, having arcade machines. So we're going to model the bowling alley in an index called "lanes" and we're also going to model the arcade machines inside separate documents. To do this we're starting with the mapping. Notice on line nine, we have a type called "join_field." No, we have a type name join_field, and it's type is join and we've listed relations, biz name, arcade machine. In this relation, the biz name is the parent and the arcade machine is the child.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=94)** So we're going to create our first document here. This will be a bowling alley called "White Plains Bowl." And if you notice the join field, the type is biz name. So it's the parent side of this relationship. Now we're going to say that this bowling alley has two arcade machines. So we're going to create documents for this. Pay special attention here. We're creating a document in the same index. Its ID is three, but the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) is one. This is very important. The documents that represent the arcades or the children have to be in the same chart as the parent. Otherwise this won't work. So this is where the routing is used. It tells Elastic how to route this document. This document represents an arcade machine of "Street Fighter Two." And as you can see, it's joint field is an arcade machine and it is Parent is ID one. Now we're going to create another arcade machine, kind of the grabby claw thing where you almost pick up the toy but you never get it. This is also in the same bowling alley. Awesome. So now let's see how we can use these features. The most simple thing to do is say, well, I'm going to go to a bowling alley and I know which one I'm going to go to. Before I go, I want to get a feel for what arcade machines are there. So can issue a query where we ask for the parent one, what are arcade machines or what children are of that parent? Awesome. We could see here that "Street Fighter Two" and the Grabby Claw thing is available in the arcade. So I want to go out and ask the Bowled on social network where I could find this arcade machine.
>
> **[3:10](https://www.linkedin.com/learning/elasticsearch-in-depth/creating-parent-child-relationships-between-documents?u=76281980&t=190)** So here, we're using a different query. starting on line 66, you could see the query. We're using the has child's relationship and we're asking who has a child of type arcade machine whose name happens to be "Street fighter." And as you could see, Elastic correctly told us that "White Plains Bowl" has this arcade machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Code Identifiers:** join_field (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - in (1)

#### [Combining multiple fields to simplify searching](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=0)** - [Instructor] In this section, we are going to demonstrate how to combine fields for searching. For end users, we want searching to be as simple as possible. In some cases, this can be complicated. An index could have multiple fields and for a Elastic search performance is generally better when searching fewer fields. To solve for this we are going to create an amalgamation field which combines data from multiple fields into a single field. For this example, we are going to model a small data set with user information for our social network for bowlers, Bowled Over. On line three are we are using the put verb. The target URL is the Bowled Over endpoint and the [JSON](../../Skills/Web%20Development/JSON.md) body has mappings for two fields a first name and a last name. Notice we used keyword for the fields instead of text. This is implications we will solve later on in the lesson. (mouse clicking)
>
> **[0:57](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=57)** Next, we are going to insert two small documents which simulate users. Notice for this example, in the second document Edward is an upper case. Let's imagine someone using our social network. When they join, they want to look for their friends. They've heard that Edward is a member so they want to go look for him. To do this, we use a get verb and we're specifying a URL containing the Bowled Over index. We use the underscore search endpoint and we use the simple Q equals Edward parameter. This search didn't find Edward and the reason is the first name field is defined as a keyword, meaning only exact matches find the data. If we change this to uppercase Edward, the record is found. One way to solve this problem is by using the copy to feature. What this feature does is at insertion time when data is added values of some fields are copied to others. To accomplish this, we'll add a field called monikers which is a fancy synonym for name. Next, for the existing fields, first name and last name, we will change them and include copy to settings. You can see on line 37, when we overwrite an existing mapping, we use a put and we specify the underscore mapping in the URL and we don't include the mapping as the top level element of the body. For this feature to work we actually have to re-insert the data. Take note that changing the mapping does not automatically cause a re-index. Let's go back to our original searches and try them again,
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-in-depth/combining-multiple-fields-to-simplify-searching?u=76281980&t=155)** starting with the first name that was not the same case as the inserted data. In the right result pain you could see that the data is found. This is 'cause behind the scenes the query is searching all fields including the new moniker field. Let's look at another quick example. Often people have trouble spelling names they're unfamiliar with. In particular, my last name ends in an O but people sometimes believe it ends in an A. We can use the fuzziness feature to attempt to match spellings that are close. To do this, we're creating a match query and we're using the fuzziness parameter. Notice this found me, even though the last name was specified as Capriola in the query but in the data set, it's Capriolo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** url (3), json (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using Elasticsearch pipelines to enhance data](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=0)** - [Instructor] In this section, we're going to learn about a [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) feature in Elastic known as ingest pipelines. Pipelines provide the ability to do data processing inside the [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) database. This allows us to alter data, add or remove fields, or even prevent a record from being added if it doesn't meet requirements. First, we are going to create an index with a mapping. This is a modified version of the schema we use throughout the course representing users in our fictional social network for bowlers named bowled_over. This schema simply defines a few fields to store the user's name. A common ask is to record when a document is inserted. Having the insert time is good for diagnostics. And let's say that our social network, we may find it useful to boost searches for new users. And for that, we wish to automatically attach the time the data was indexed. We could use the pipeline for this. If you notice on line 22, we've created a statement which will create a pipeline known as add_index_time. These could have descriptions, but the most interesting part is the processor section. Here we've defined the set processor. And this element has two parts, a field and a value. You can notice in the field, we're using the _source, which means the source document being inserted and index time is the fields you wish to add. The value uses templating. And again, the ingest object is provided automatically, as well as a timestamp. So we don't need very much logic here. Running the PUT will insert, and we'll create the index. And then by default,
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=92)** we want to have the pipeline run when we insert into our bowled_over index. So we'll set it as the default pipeline for bowled_over. Now that we've defined our pipeline and made it the default pipeline for our bowled_over index, let's do an insert and see what happens. Notice here, we're inserting a document with only two fields, the first name and the last name. The insert was successful. Let's see what happens when we read it back. Awesome. We can see that the index time has been automatically added to this document. Let's look at another built-in processor. It is very common to use IP addresses for logging web traffic. Elasticsearch will download GeoIP [Databases](../../Skills/Software%20Development/Databases.md), and it provides a processor, that given a source IP will automatically attach GeoIP information to a document as it's inserted. On line 50, you can see we're defining another ingest pipeline known as geoip. For the processor here, we're setting it to be geoip, and we're telling it which fields we expect the data to be in, which in this case is the ip field. If you remember, when we defined the bowled_over index, we gave it a default pipeline. So in this case, we could override the pipeline by providing an argument in our PUT statement. Here, we're setting an IP and we're inserting data. Let's see what happens when we read it back. Great. We can see here that the document has GeoIP data, which has been automatically added, including the country, latitude, and longitude. It is also possible to use conditional logic in a pipeline.
>
> **[3:07](https://www.linkedin.com/learning/elasticsearch-in-depth/using-elasticsearch-pipelines-to-enhance-data?u=76281980&t=187)** For this example, let's say we wish to use a bowler's average to decide which pipeline to run. To do this, if you look at line 73, we'll define a new pipeline called conditional_pipeline. Notice this one has two processors. Each processor is activated by an IF statement. In this case, the context, which is the document being inserted, needs a field named average. And if the field is less than 200, the add_index_time pipeline will be activated. And if the field is more than 200, the geoip pipeline will be activated. Again, when we're putting the document, we could override the default index and select this one. So let's see what happens when we use the conditional pipeline. If we read back the data, we can see that the geographic GeoIP information has been added. This is because the user's average was greater than 200.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Code Identifiers:** bowled_over (5), add_index_time (2), conditional_pipeline (1)
> **Definitions:** known as (3), is a  (1)
> **API Endpoints:** put  (2)
> **Env Vars:** put (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Storing data with varying structures using flatten](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=0)** - [Instructor] This section demonstrates the flattened data type. This data type is best used for documents that have a large number of unknown fields. To illustrate when this feature is useful, imagine our social network bold over starts distributing an app to employees that allows 'em to send small notes to each other. These notes are just defined as documents with arbitrary keys and values. Let's imagine some notes that users may send back and forth to each other. We've created these three documents over here. They're very simple. One is from Ted, reminding himself to fix the pin setter. A second is a document from Ted to Mindy saying "The pin setter can't be fixed so we need to order a new one." Notice that these two messages already have different fields. This one has a from, a date and a message. While the second message has a to and an order. Let's insert one more document. This is a document of Mindy reminding herself. she has to find new investors because bold over social network has driven their revenues high and there's more bowlers, causing the pin setters to break. So this design looks like it's working great. Let's take a look at the mapping inside elastic. Now, as we could see on our right every field that's ever been inserted, the from, the message, the order, the reminder, the to and the why have created mappings. This design won't work over the long run because each index has a maximum number of mappings. And even if you could define many of them, they're not very useful in this format and the index would be very bloated. So let's look at a better design using flattening.
>
> **[1:39](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=99)** What we're going to do here is create a new mapping. We're going to set the dynamic attribute on the top level object to strict. This won't allow people to create arbitrary fields in the top level object. And we're going to pull out some of the critical things from our note systems, a date, a from, and a to. We're going to assume all messages have these three things. Now the question is what to do with all the other fields, but we could use is the flatten type. And as you can see on line 56, we've created an element called unstructured which type is flattened. What this will allow us to do is all the fields that are new have to be put in this object but they won't ever have any schema. Let's give it a try. So here's the message 3 that Mindy had sent to herself. We've just restructured it slightly where all of the extra fields are now in this unstructured section, and we'll insert it. Let's take a look at the mapping that was generated from this insert. As we can see, these fields, reminder and why aren't present in our schema on the right here. This is because they have been flattened. Let's do some searches of the flattened data type. On line 78 we've created a simple search and we're using the term, search, and we're looking for values that are said find new investors. So here, as you can see, we've been able to match on the value. Very good. What you could also do is you could pick specific fields in the unstructured and match only on those. In this case, unstructured remainder just by using dot notation, that found the same document. Now, this approach obviously has some limits.
>
> **[3:15](https://www.linkedin.com/learning/elasticsearch-in-depth/storing-data-with-varying-structures-using-flatten?u=76281980&t=195)** The benefit of using the flattened type is it stops the mapping explosions. However, the downside is all the data is really internally sorted into single field, and thus it's one type. So if your data is a mix of numbers and strings and dates, it will only sort in a lexigraphical way. Still, it's better than trying to maintain the [Metadata](../../Skills/Web%20Development/Metadata.md) for every single field inserted in a very dynamic index like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Definitions:** is a  (3), defined as (1)
> **CLI Commands:** find (2)
> **Analogies:** imagine (2)
> **Speakers:** - [instructor] (1)


### 3. Advanced Queries

[↑ Back to Table of Contents](#table-of-contents)

#### [Filtering, matching, and scoring explained](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=0)** - [Instructor] In this section, we are going to cover filtering, matching, and scoring. To do this, we're using our dataset which is a sample of user contributed data which we've called the bowled_over_artist_guild. Effectively, it's like almost a blog system where users could create articles with a title, and a passage, which is a text like a poem. We have two examples of this in our pane. We've already inserted this data. You notice the passage is a large body of text. The author title and data are marked smaller discrete values. We've used the mapping endpoint, so we can see what it looks like. What elastic's doing here is for each string field that's considering it, a text, but also adding a keyword field assuming the data is below a certain size that's what the signal ignore above does. So let's do a basic search. So basic search provides it _search endpoint. And the query that's very simple is the match all query. Now notice this query has returned both results. Obviously we're trying to match all of them, but I think to start noticing for this section is results have a score. Match inquiries always have a score, and what that means is some documents match more than others, and this relates to how elastic internally stores documents, and how it scores words that are more frequent than others. Let's look at another example. In this example, starting on line 36, we're trying another search, and this time we're trying to use a term query on the author field. Notice this didn't work, and that's because the author field is a text field, so this term can't be found.
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=92)** Text fields are turned into inverted indexes, and finding individual terms is difficult. However, in our schema, all of the fields are also available as a keyword. So in this case, we've mentioned the author keyword column, and looked for the same turn. Indeed, this time we actually find the passage we're looking for. So that's a little quirk of how text and keyword fields work. Let's look at some work complex examples. Starting here, line 59, we're doing a query, and we're starting off with a bool query. Bool means boolean, and it allows us to have multiple sections. A must, a must not, a should, and a should not. It is one more section called the filter. Everything in the filter will be returned from the query, and has no effect on scoring, let's see what we mean. Here, we've done a term query, and we're looking for a specific author. Notice here that the score is zero because filtering ignores scores. It is a true or false match. The thing is either here or it is not. Let's look at a more complex example. In this case, starting on line 73, we're starting with the bool query, and we're using the should condition. In this context, a should is like an or, if either of the clauses below it match will return the result. So here what we've done is we've done one match, and we're looking for the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) "I", a very common word inside a passage, we'll find many passages with "I" and then we're matching another passage looking for the word bowl. Notice in this case, we've applied a boost on line 87.
>
> **[3:10](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=190)** What this does is it matches documents higher if they have bowl, than if they would have "I", since "I" is a very common word. So we'll subtract the filter here and see what this does. As you can see, both of our articles are matched because this article has the word "I", and this article has the word "I". However, bowl is matched over here, but this article is scored higher than the other one because we're boosting the word bowling. Now, just because you're using a keyword field doesn't mean you only have to search the entire word. The prefix filter works on keywords, and can match the front half of them. So here we've done a filter query, and we've used the prefix query option, and we're looking for half of the author's name. This still works. Here's an example of what's known as an exist query. This checks to see if the document has a field called author cuz not every document has to have every field. Both of our documents have an author column, so they're both returned. And of course, bool queries can also be nested. In this example, starting on line 167 we have an outer bool query with a should, and an inner bool query with a must. Also notice in this case, we're using the fuzzy operator. Fuzzy means it's matching based on expressions, and in this case we have a star, so words ending in "iel".
>
> **[4:50](https://www.linkedin.com/learning/elasticsearch-in-depth/filtering-matching-and-scoring-explained?u=76281980&t=290)** Again here, notice the score, based on the matching conditions, the score may go up and down. Finally, I just wanted to give an example of using the match all query. In some cases, you want to match all the data, and then filter out specific things. So you could use the match all syntax, and in this case we're using a term query on a field that is a date. This works fine, you could specify the date in multiple ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (8)
> **Definitions:** is a  (7), known as (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** bowled_over_artist_guild (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Retrieving large result sets using the Scroll API](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=0)** - [Instructor] In this section we're going to cover retrieving large result sets using the point in time or PIT feature. To understand this feature, let's look at an example case. You could imagine that an Elastic index may have millions or billions of documents and you want to move your way through them. Well, imagine that index was changing as you worked with it. Scrolling through the data could produce unpredictable results. PITs freeze the data and ensure that whatever operation you're doing has a consistent view of the index. To illustrate how PIT works, we've created a simple index with two documents. To freeze the index or create a point in time, we're going to use the post verb. We're going to mention the index name and then we're going to use the PIT endpoint. Here we're specifying a keep a live time of 10 minutes. What that means is if the PIT isn't interacted with within 10 minutes, it will close on its own. Notice this PIT query has returned an ID. This ID needs to be used in subsequent calls to reference the PIT. Here we've created a basic search. Notice we're only trying to return one result and the query we're doing is a match off. We've referenced our PIT query and a new keep alive time and an important thing. We're sorting the results here based on the shard doc. This is an internal Elastic identifier that is guaranteed to be there. You could search on anything as long as you could move through it and the appropriate tiebreakers are in place. Let's run the first query.
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-in-depth/retrieving-large-result-sets-using-the-scroll-api?u=76281980&t=95)** Notice this query had two hits but since we requested a size of only one, one was returned. Important. Notice there's this sort field here, and the data is one. This is returning the Elastic ID of the data. We need to use this column in our next query. So we've created another PIT query here. All the criteria is the same. We've updated the ID of the PIT and notice there's a search after. Again, since this query returned one we'll put search after one and run the query. In this case, we've returned the second query of the set. So this is how to use PIT. Obviously, this was a very small data set, only two columns but this would work over large column, over large data sets as well. When you're done using the PIT, you could delete it. Simply use the delete verb, reference the PIT endpoint and set the appropriate ID. It's good to delete your PITs as soon as possible because Elastic behind the scenes is merging and rebuilding the internal document structure all the time and PITs force those documents to be open for much longer so they're usable, so it's good to clean up so Elastic could free the associated resources.

> [!info]- Semantic Content
>
> **Env Vars:** pit (12)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** imagine (2)
> **Speakers:** - [instructor] (1)

#### [Performing aggregations](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=0)** - [Instructor] In this section, we're going to be performing aggregations to summarize data. These type of aggregations include grouping and counting, getting distinct elements, or even generating histograms. The data set we're going to use for this example is from our nested data section. The index is called bowled_over_team_scores and this document models the scores in a bowling league. Starting on line 54, we could see this data. We have a league name and a date, and then an array of scores. Each score has a game, a team name, a bowler, and a score. And in this data set there's actually two teams, each with two bowlers. We included a second document where the same two teams bowl a week later. Let's take a look at our first aggregation query. On line 167, we're issuing a search. We're using the nested feature because we want to look at individual bowlers, so we've reached in and we're only trying to match the data from the bowler Bob on the Strikeforce team and we're generating two aggregations. One is the unique IDs or unique dates that Bob has bowled. And the other, interestingly, is the average date. While we can sum the date, it won't produce any meaningful data. Let's just see what it would look like. Starting here, we can see the value of aggregations. Here's the average date, but more interestingly here's the unique IDs. As we could see, this bowler has actually bowled on two different dates. Let's do some other fun aggregations. Let's say we wanted to give a booby prize
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/performing-aggregations?u=76281980&t=92)** to the person who bowled the lowest game. We could figure that out by using the min query on the scores field. Getting used to writing these aggregations can be a little bit tricky, so I have a simple tip. I use the [SQL](../../Skills/Data%20Science/SQL.md) interface and I prototype some of my queries there. So here I'm doing an SQL group in count, where I'm selecting a league name and account, and grouping by the league name. You could take this data and look at in a tabular format and once you have a query you like, you could translate it like so. On the right now, Elastic has written the query DSL query for us so we don't have to figure out how to do this. We're using it here inside a search and we get back the same data. Another neat way to summarize data is using a histogram. Starting on line 259, we build an aggregate and we unroll the scores as we've done in other examples. And then inside the aggregation column, we're using the histogram function and telling it to use the score field. We could set different intervals here and we could see what the results look like. On the right, we could see the intervals are broken by groups of 20 and we could see how many people have bowled a 120, how many games have bowled a 160, how many people bowled a 240. There are a lot of aggregation queries and options in [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md), and we can't cover them all, but this gives you a good jumpstart to give you some ideas of what you can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Env Vars:** sql (2), dsl (1)
> **Code Identifiers:** bowled_over_team_scores (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Indexing templates to define index properties](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=0)** - [Instructor] In this section, we are going to use index templates to define index properties. Throughout the course, we've created a number of indexes to hold data. Usually, we have let the database create the mapping dynamically or we've created a mapping file per index. Index templates allow you to create templates with properties that match index names on creation. That's a mouthful, but as we use it I think it'll make more sense. Let's start by creating an index and looking at the settings and mappings. Here we'll use a data set of user contributed writings and poetry we've been calling the Bowled over Artist Guild. Let's take a look at the settings that were created when we inserted the data.
>
> **[0:49](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=49)** We can do this by using the settings endpoint. Notice here that the number of shards is one. We could also look at the mapping of this index
>
> **[1:06](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=66)** and this is what we've seen many times. The mapping holds the data types and their indexing settings. Now to understand index templates, let's start with a concept called table by day or in elastic sense, index by day. Generally, this pattern is useful when data can be grouped by time. It makes it easy to find data and maybe even delete the data because it all would fit into the same bucket based on the time it was created. To accomplish this, we're going to do inserts and we're going to add a date to the name of the index. Notice here, the index has a date component in the name itself. Let's insert a second document for a second day.
>
> **[1:56](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=116)** We could easily search over these two indexes. Notice we've used a star here which searches over all of the indexes we have. Let's use an index template here to make sure all indexes created have the same settings and schema.
>
> **[2:17](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=137)** Here we've created a template that matches the index pattern, Bowled over Artist Guild star and we've adjusted the number of shards to three. Let's also include some mapping so that every document has the same indexing.
>
> **[2:35](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=155)** Awesome. Now we could delete the data and insert it again and we'll see if the settings take effect.
>
> **[2:47](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=167)** Notice the delete endpoint can take a wild card expression too, just like the get or put. Obviously, you want to be very careful when deleting with a wild card like a star. All right. Let's insert the data again.
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=188)** Now, let's review the settings and see if they match what we would expect.
>
> **[3:22](https://www.linkedin.com/learning/elasticsearch-in-depth/indexing-templates-to-define-index-properties?u=76281980&t=202)** As we can see, the number of shards is three. So index templates can be used a number of ways. They could define settings for the entire application or a specific index. They could also be ordered by number, controlling which rules get applied if multiple templates match the expression.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** template (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Implementing expiring data with lifecycle management](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=0)** - [Instructor] In this section, we're going to demonstrate how to do expiring, or what is sometimes called TTL-based data, using internal lifecycle management. Internal lifecycle management, or ILM, is a feature in Elastic that automatically changes the characteristics of indexes based on criteria. A common use case for ILM is when implementing a hot, warm, cold architecture. Data moves between [Hardware](../../Topics/Hardware.md) classes as it's searched less often. These type of operations can be done manually by scripting or Chron or some kind of scheduling tool, but [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) has its own inbuilt ILM. Let's take a look at how ILM works. Here we've used the put verb to create a policy. We've called it fast TTL policy. The policy has two phases, hot and delete. As you can see, the hot data rolls over at a one minute rate and the delete data deletes things. This is not the kind of setup you'd want to use in production but here we want to expire the indexes so we could see this work quickly. The next phase of ILM is that it doesn't work well with standard indexes. Usually it's used as what's called index streams. These look like an index, in that they have an index template and the index template matches a pattern, except an important note is, as you can see on line 57, is the data stream is specified. So here, any data written to an index named fast TTL star won't be written to a standard index. It'll be written to a data stream. And note, we've attached the index to a lifecycle, the same policy we've mentioned above, fast TTL policy.
>
> **[1:41](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=101)** This next setting here causes the Elastic to examine the ILM policy every 15 seconds. You might want to raise or lower this based on your requirements, but it makes sense to keep it at the default unless you know what you're doing. So now the interesting part of ILM. Documents written to ILM don't post to this exact index. They post to a data stream, which behind the scenes is a series of indexes. Let's take a look. One inserted document, and then another. Notice here, on line three you could actually see that the index returned is a hidden index. You could see this 'cause it starts with a dot. What does this mean? Here, we're using the indexes, the cat endpoint to show the indexes. And as you can see, there's actually an index here with two documents inside it. But we could search this index by using the friendly name we defined above. As you can see, the data is found. If we wait a while and retry this query, our policy should automatically delete this data. So we'll go out and get a coffee or something and come back and see what happens. Nope, still there. We could see a new index has rolled over. Oh, look at that. The data's now gone. And the indexes themselves have rolled over. So that's how internal lifecycle management works.
>
> **[3:14](https://www.linkedin.com/learning/elasticsearch-in-depth/implementing-expiring-data-with-lifecycle-management?u=76281980&t=194)** Behind the scenes, Elastic manages indexes and the user sees them as data streams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1), [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Env Vars:** ilm (8), ttl (4)
> **Definitions:** is a  (3)
> **Exercise Files:** template (2)
> **CLI Commands:** cat (1)
> **Warnings:** important note (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Working with index aliases](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=0)** - [Instructor] This section is going to show how to use index aliases to simplify [Data Management](../../Skills/Software%20Development/Data%20Management.md). To understand this, let's think of a few examples. In some other section, we've approached the concept of index by day, where your data is actually divided across multiple indexes. In this case, we've created an index called Bold Over Artist Guild, and it's actually divided by day, where some documents exist in one day and some documents exist in another day. This is a common theme to deal with time series data and eventually you may have to roll up or modify these indexes and aliases are very helpful with this. Let me explain. In [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md), we could use wild cards or list multiple indexes to do a query. Here we're doing a match query that searches over two indexes. As expected, this is returning two results, as you could see on line 13. Now, these indexes over time, we may decide to change them. Like we may decide we want to add another field or possibly change how we're indexing in existing fields. Elasticsearch has an API for this. It's called the re-index API. On line 34, you could see an example. We're making a post to re-index and we're specifying a source index, which in this case, we're using the data from the first of the month, shown on line 37, and we're creating a new index where we just appended A to this name. You would normally do this if you change the index definition or the index template and you want to re-index. So we've done that here. We've re-indexed our data, but now there's a problem. If we search for the Bold Over Artist Guild,
>
> **[1:35](https://www.linkedin.com/learning/elasticsearch-in-depth/working-with-index-aliases?u=76281980&t=95)** instead of finding two documents, we'll find three. And that's because there's actually three indexes now behind the scenes. We have the same document choice in Bold Over Artist Guild and Bold Over Artist Guild A. So we could use index aliases to fix this problem. How would we do that? Elastic has an endpoint called aliases, and it supports one or more actions that could be specified in an array. So the first thing we're going to do here, is we're going to remove the old index and we're going to edit index alias. Or if you feel safe, we could put them in the reverse order. It doesn't really matter because the entire operation happens completely or not at all. So let's execute this action. It's acknowledged here. And now let's go run our search again. Now we have the correct number of results, which is two. And as you could see, one datum is coming from the second index, and this is our updated index, and the original index is now gone. So there's many ways you could use index templates. You could do perhaps index by day, and then make an alias which includes day one, day two, day three. Index aliases could also use wild cards inside them or other patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (2), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **CLI Commands:** find (1), go run (1), make (1)
> **Env Vars:** api (2)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Modifying Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Updating documents using scripting](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=0)** - [Instructor] In this section we're going to update documents using scripting. This technique is useful in a variety of cases, one being if you only want to update part of a document or two, if you want to update a document based on its current values. Let's get started. Throughout this course we have envisioned a social network called "Bowled Over." A social network for bowlers. In this case we'll add a new index that records what a bowler does in their league play. In this case, the league has, starting on line 3 you could see we've created a new index called bowled over games, and we have a date and a league name, a bowler name, and a score. We're going to insert this document and let Elastic create the index mapping automatically. As you can see on the right, this was inserted. Let's look at the mapping by using the bowled over games mapping. You can note on the right here on line 27 that the scores type is long. Elastic search in this case doesn't care whether scores is a single value or an array value. It just needs to know the field is long. Let's see what the data looks like we inserted. Great, on the right we could see there's scores as an array and there's only one score. Let's imagine we finished our second game and bowled a measly 115. Rather than inserting the whole document we could use the update syntax and scripting to add a score to this array. Starting on line 15, you could see we're using a post and we're using the underscore update endpoint. Inside the body of the post, we have a script. The script has a few components. First, it has a source. This is actual code and the code itself is defined by the language
>
> **[1:33](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=93)** which in this case is the painless language. So this source code says inside the context, that's the request. And inside the source document being inserted take the scores field and add an element to it. Which is the elements? The element is defined in the params score which is almost like another document inside this script. So we're trying to add a 151 to this array. Let's see if it works. We use the get endpoint to view the results and in this case, we could see on the right on line 8, 151 has been added to the current document. Now, after bowling a 151 we might realize it's time to get a soda and take a little break, see if we can do better in our third and final game. So what we'll do is we'll introduce a concept for storing a bar tab, simply an item count. So the script below here is different. Rather than a pending to an existing field as we did before, we're going to create a new field. So as you can see we're starting a post on line 28 to the same document. And again, we're using a script, in this case on line 31 you could see we use the multi-line syntax. So we use three quotes to specify a script that's multiple lines. And what we're doing here is instead of appending to an array, we are actually updating a field. And in this case, we have an if statement to cover what would happen if it doesn't exist. So our main goal here is to put this parameter in the bar tab if the field doesn't exist or add it to the bar tab if it doesn't exist. That's covered by both the cases here
>
> **[3:08](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=188)** on line 33 and line 35. Let's run this example. Great. We could read back the results and see if the bar tab was added. Yes, in this case we could see we still have the two scores from the bowler and the new bar tab field has been introduced. Now, obviously this isn't the most efficient way to model a system of keeping a bar tab. Usually we want to track the items but let's just say we are going with this setup here. What would happen if we accidentally sent the same update twice or even three times?
>
> **[3:43](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-documents-using-scripting?u=76281980&t=223)** Well, now we have a problem because the bar tab is set three times and we only ordered a single soda. To deal with this type of problem [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) offers optimistic concurrency controls meaning it's a conditional update. So what we'll do here is we will append this field which says only execute this script if the document is at sequence number 6. Let's see if this works. Ah, we've got an exception here, and that's because the sequence isn't at 6 it's currently at 4. So the only way we could update this document is if we specify the correct sequence number. So let's set the sequence number to what we expect, 4. And then let's run this insert again. This time it was accepted and the sequence number is now 5 and the primary term is 1. Let's see what the results look like. Yes, as you can see, the scores are updated and the bar tab has been updated appropriately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Saving scripts for reuse](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=0)** - [Instructor] In this section, we're going to save and reuse a script. There's a few good reasons to do this. The first is that scripts have application logic and it's better if those are specified in only one place. And the second is compiling the scripts is performance intensive. Elastic search puts a cap on how many scripts you could compile in a given time period. This is the same document and script that was used earlier in the chapter, so I'm not going to explain it again fully but let's just go through it quickly. We have a document that represents a bowler in a league and we have another document which describes how we want to append the bar tab field to it. Let's run them both.
>
> **[0:46](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=46)** In this case, we could see that our document was created and we used the scripting logic to append a bar tab field or create it if it doesn't exist. Now, as I mentioned we don't want to recreate this script in every single request. It could be error prone, so now we're going to save that script to use it later.
>
> **[1:10](https://www.linkedin.com/learning/elasticsearch-in-depth/saving-scripts-for-reuse?u=76281980&t=70)** Starting on line 30, you could see how this is done. On line 30, we use a post to the scripts endpoint and we name the script update bar tab. We took the same scripting above. We simply created the script elements, specified the language and specified the source. Again, this is just a script that appends the fields if they exist or create it if it does not. We could save this, and now the script is saved in the elastic search server and is reusable. If we want to check to see if it's there we could use the get verb and look for the script. Great. As we can see, the script is there, so let's move on. In our example above, we mentioned we did an update and we specified parameters and we inlined the script. In this case we'll just reference the script saved on the server. So if you look at this example down here starting on line 147, we simply use the same script element but instead of using the source, we use the ID. This ID matches the name above of the script we inserted, and we supplied the parameters as before. Now we could run this example and see what happens. As you can see we've updated the bar tab using the script that was saved on the server.

> [!info]- Semantic Content
>
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Updating by query](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=0)** - Update by Query is a feature in [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) that allows us to select one or more documents using a filtered DSL or a Lucene query syntax and modify them using a variety of methods. This is of course useful when you know the IDs of a document but there's many of them. Or, you don't know the IDs and you want to change numerous messages. So to get started, we're going to recreate a document which we've used previously in this section. It stores bowlers, their scores and a bar tab, which shows how much money they've spent at the bar and have yet to pay back. So, interestingly enough, let's say this feature goes over very well and many people bowl but forget to pay their bar tab. Well, this creates a problem but let's turn this into a solution. Someone in marketing came up with a clever promotion. Why don't we take everybody who owes a bar tab and tell them if they bowl a game higher than 200 in the month of February, we'll pay their bar tab for free. Interesting concept. How do we locate those people? As you can see on line 13, we've composed a search query. We're using a bool query at the top level on line 17 and then we're using multiple must clauses. We're specifying a range, people who have bowled over 200. A range of time, dates between February 1st and February 29th and a range. We only want to forgive bar tabs that are less than $10. Let's see if this matches anybody. Great. We could see on the right, that this one bowler has been matched. So how do we go about forgiving
>
> **[1:32](https://www.linkedin.com/learning/elasticsearch-in-depth/updating-by-query?u=76281980&t=92)** how much money they owe? Here we've composed a script query on line 48. Notice the source of the script. We're going to set their bar tab equal to zero, as we've done on line 53. And we're also going to leave a message that says, "Hey we've paid your bar tab." Now in this case, we're doing a conditional update query. So we use the post verb, the name of the index, bowled_over_games and the update by query endpoint. So since we've already talked about the script, we're just transplanting the query from the previous section into this section. Notice the query is right here with all the same criteria. Let's run this query. Great. On the right you could see, this information is slightly different than other APIs. It tells us how many records have been updated as you could see on line six. Let's see what the data looks like. Ah, as you could see on the right, on line eight, the bar tab has been set to zero and the message is, "We've paid your tab of 9.25." So, one thing to note about this feature is that you do want to know how many records you're going to change because if you're changing a lot of records, you may want to use a different technique that we'll talk about in the next section called "Creating a Task."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Code Identifiers:** bowled_over_games (1)
> **Env Vars:** dsl (1)
> **Versions:** 9.25 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - update (1)

#### [Using document versioning](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=0)** - [Instructor] In this section, we are going to demonstrate how to use versioning support to make conditional updates to documents. Before we show how to do it, let's take a moment to come up with a case where we might need this feature. Transactions and data stores take many [Forms](../../Skills/Web%20Development/Forms.md). Many [Databases](../../Skills/Software%20Development/Databases.md) are categorized as online transaction processing, or OLTP, and have strict transaction locking and serialization features, often grouped into a category of things called ACID transactions. Taking this to another level, sometimes transactions are needed between two systems or distributed transactions. My head hurts a little bit. Let's get back to Elastic. Elastic has what is called optimistic concurrency control using versioning. This is exposed as a compare and swap. Apply this operation only if the document is at the expected version. This approach has some upsides and some downsides. If a system holds many documents, each of them rarely being updated, the chance of a conflict and retry is very low. However, if there are many users attempting to update a document at roughly the same time, retries cause delay, and at a certain point, if something is retrying too much, the overall availability of the system is low. Applications usually have to give up retrying, and ultimately, that looks like a failure. One more important thing to note. Generally, even systems that store and process transactions, such as the movement of monetary funds, typically are designed using logs or ledgers and not fields or tables
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=94)** where moving money involves large multi-table or multi-row transactions. To understand how Elastic optimistic concurrency control works, let's take a use case. Let's say our bowling season is over, and it's time to plan an award dinner. Each user is given a link, a one-time link, and asked to vote on a local restaurant over the next few days. It's expected that a few people will vote, and very few will vote at the same time. So Elastic's optimistic concurrency control seems like a good fit. To do this, we are going to create an index called votes, and the administrator will create a first document. The document simply uses keys as the names of restaurants, Hamburger Heaven, Pizzas are Us, and Holy Wings, and sets the vote to zero.
>
> **[2:26](https://www.linkedin.com/learning/elasticsearch-in-depth/using-document-versioning?u=76281980&t=146)** Now it's time for people to vote. We definitely want to make sure that the same transaction doesn't cause a double vote. So this is where Elastic's versioning comes in. If you notice on line 12, we're using the post verb. The first part is the votes index, and then we're using the update endpoint. We're specifying the document id, but notice the query parameters, we're using two. If sequence number equals zero, and if primary term equals one. Let's look on the right. Currently, we could see that the sequence number is zero, and the primary term is one. So we could expect this update to succeed. Let's try it. This did. Let's take a look at what the data looks like. The data has correctly registered one vote for Hamburger Heaven. Now the version is two, and the sequence number is one. Version is a field that we don't touch directly. We always interact through the primary term in the sequence number. Let's try to accidentally make the same vote again. As we can see, this was rejected. Elastic has given us a reason on line 13. There is a version conflict. Sequence number and primary term don't match. Let's make another vote for Hamburger Heaven using the right values. This post succeeded, and we could see the document value is expected. Using this, we could also do scripted updates or manipulate the field using counters or the painless query language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** oltp (1), acid (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Managing long-running operations using Task API](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=0)** - [Instructor] This section is going to explain how to use the task feature in Elastic, which manages long-running queries. If you remember from our previous section, we introduced a bowled over games index and we added a field to that index, which is shown on line seven on the left, which is the bar tab. And then if you remember, we created a query that would locate bar tabs based on criteria and forgive them. We won't go through this whole query but suffice it to say it searches our data set looking for bar tabs and it replaces them. Let's run this query. Notice we're using wait for completion equals true on line 11. On the right, you could see the response we got. We have a certain number of records updated and our request completed successfully. But if you could imagine our Elastic search database may have billions of documents and brontobytes of data, so not all queries could be run in real time. For example, imagine this request matched millions of results. We probably wouldn't be able to change them all instantaneously so we could simulate how that would work. In a case like that, we would set wait for completion equal to false. So let's run this same query again. Now, in this case, we've been given back the task id which is an ID used to manage the task. I've copied this task ID here and let's see how we would use it. Well firstly, we could list all the tasks. On the right, you'll see here there's some tasks that are actually being made by [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) itself so they're not all relevant to things that users are doing. We could seek out a specific task. So let's look at this task.
>
> **[1:34](https://www.linkedin.com/learning/elasticsearch-in-depth/managing-long-running-operations-using-task-api?u=76281980&t=94)** We could see this task on the right is completed and we have the same information, how many rows were updated, and that's basically it. Because this task was already complete, there's nothing we could do with it, but if it wasn't complete we could cancel it using this particular endpoint. So we could say, tasks cancel. We won't click that because it won't work. But an important part is when we create a task like this we do have to delete it ourselves and the syntax for that is here. So we would use the delete verb and say dot tasks slash task and give the name. As you can see on the right this results in the task being deleted. So this is how we create background or asynchronous tasks and how we manage them. Beyond that there's some other things you could look forward to. For example, if a task is very large you could actually split the task into parts and paralyze it. We'll get into that in a later section when we talk about paging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Analogies:** imagine (2), for example (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/elasticsearch-in-depth/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/elasticsearch-in-depth/next-steps?u=76281980&t=0)** (gentle music)
>
> **[0:09](https://www.linkedin.com/learning/elasticsearch-in-depth/next-steps?u=76281980&t=9)** (gentle music continues) (gentle music fades)

> [!info]- Semantic Content
>
> **Non-Speech:** (gentle music) (1), (gentle music continues) (1), (gentle music fades) (1)


## Instructor

- [Edward Capriolo](../../Instructors/Database%20Management/Edward%20Capriolo.md)

## Resources

- Exercise files available

## Skills Covered

- Elasticsearch

## Path Context

### In [Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)
← [Elasticsearch Essential Training (2023)](Elasticsearch%20Essential%20Training%20(2023).md) | **9 of 10** | [Cloud NoSQL for SQL Professionals](Cloud%20NoSQL%20for%20SQL%20Professionals.md) →

## Appears In

- [Develop Your NoSQL Skills](../../Paths/Database%20Management/Learning%20Paths/Develop%20Your%20NoSQL%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Elasticsearch Essential Training (2023)](Elasticsearch%20Essential%20Training%20(2023).md) — Elasticsearch

---

[↑ Back to top](#)