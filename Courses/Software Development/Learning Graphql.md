---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-graphql-2021
url: "https://www.linkedin.com/learning/learning-graphql-2021"
level: Intermediate
updated: 8/25/2021
learners: 9010
skills:
  - GraphQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQF7SApTfyZQPg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629736172619?e=2147483647&amp;v=beta&amp;t=yqtcQFMUUjLAmdEaXGeED3xtb1XSouLcUOQNAmXSpSw"
linkedin_topic: Software Development
learning_paths:
  - '[[Stay Ahead in GraphQL]]'
next_courses:
  - '[[GraphQL Essential Training]]'
path_nav: '[{"path":"Stay Ahead in GraphQL","position":1,"total":3,"prev":null,"next":"GraphQL Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/graphql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20Graphql.md)

![Learning Graphql](https://media.licdn.com/dms/image/v2/C4D0DAQF7SApTfyZQPg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629736172619?e=2147483647&amp;v=beta&amp;t=yqtcQFMUUjLAmdEaXGeED3xtb1XSouLcUOQNAmXSpSw)

# Learning Graphql

> Data-driven applications depend on remote queries that run through APIs. GraphQL—a query language for APIs that was originally built by Facebook—allows developers to choose the kinds of requests they want to make and to receive information on multiple facets of that query in one request. The GraphQL approach to querying across networks can address a wide variety of large-scale development problems

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021) | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [An introduction to GraphQL](#an-introduction-to-graphql)
  - [What you should know before watching this course](#what-you-should-know-before-watching-this-course)
- [**1. What Is GraphQL?**](#1-what-is-graphql) (3 videos)
  - [Understanding GraphQL](#understanding-graphql)
  - [How GraphQL differs from REST](#how-graphql-differs-from-rest)
  - [Using GraphQL Playground](#using-graphql-playground)
- [**2. GraphQL Queries**](#2-graphql-queries) (4 videos)
  - [Using enum types and arguments](#using-enum-types-and-arguments)
  - [Adding variables](#adding-variables)
  - [Querying connected types](#querying-connected-types)
  - [Creating operation names](#creating-operation-names)
- [**3. Mutations and Subscriptions**](#3-mutations-and-subscriptions) (5 videos)
  - [Changing data with mutations](#changing-data-with-mutations)
  - [Creating GraphQL fragments](#creating-graphql-fragments)
  - [Working with subscriptions](#working-with-subscriptions)
  - [Challenge: Sending pet library queries](#challenge-sending-pet-library-queries)
  - [Solution: Pet library query construction](#solution-pet-library-query-construction)
- [**4. Creating a GraphQL Server Schema**](#4-creating-a-graphql-server-schema) (4 videos)
  - [Introducing the GraphQL schema definition language](#introducing-the-graphql-schema-definition-language)
  - [Setting up a GraphQL server with Apollo Server](#setting-up-a-graphql-server-with-apollo-server)
  - [Creating a custom object](#creating-a-custom-object)
  - [Adding an enumeration type](#adding-an-enumeration-type)
- [**5. Schema Enhancements**](#5-schema-enhancements) (7 videos)
  - [Working with mutations](#working-with-mutations)
  - [Sending input types to mutations](#sending-input-types-to-mutations)
  - [Building a custom scalar](#building-a-custom-scalar)
  - [Returning a custom object](#returning-a-custom-object)
  - [Customizing schema mocks with Apollo Server](#customizing-schema-mocks-with-apollo-server)
  - [Creating subscriptions](#creating-subscriptions)
  - [Writing schema documentation](#writing-schema-documentation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [An introduction to GraphQL](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=0)** - [Eve] API has provided us with a standard way of getting data and [[GraphQL]] gives us a new way of designing an API to serve up all types of data. No matter where your data is, a database, a cloud service, a [[Representational State Transfer (REST)|rest]] API, GraphQL can serve as a wrapper for all of that data. Big companies like [[GitHub]], PayPal, Expedia, [[Facebook]], Twitter, and more have made big bets on GraphQL. My name is Eve Porcello. I'm a software engineer and a teacher, and I'm a big fan of GraphQL. I love that GraphQL gives us a query language for asking questions of our data and I particularly love the type system that we can use to design a schema that everyone can use to build more functional applications. I'm glad you're here with me to start your GraphQL learning journey today. Let's start sending some queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (6), [[Representational State Transfer (REST)|Rest]] (1), [[GitHub]] (1), [[Facebook]] (1)
> **Env Vars:** api (3)
> **Tools:** github (1)
> **Speakers:** - [eve] (1)

#### [What you should know before watching this course](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Narrator] This course is aimed at beginners with no [[GraphQL]] experience. And really there's not a lot of setup required. To participate in most of the class you'll just need a web browser. I will also show you how to build a GraphQL application using Apollo Server, which is a [[Node.js]] implementation of a GraphQL server. If you want to follow along with that part of the class, you'll need Node.js installed. To check to see if you have it installed you can open your terminal or command prompt and type node -v If you see a version number there you have it installed. If not, you can install at [nodejs.org](https://nodejs.org) You don't need to use Node or [[JavaScript]] to work with GraphQL, but I'll show you this as an example of how you might get started on a GraphQL project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (5), [[Node.js]] (2), [[JavaScript]] (1)
> **CLI Commands:** node (4)
> **Prerequisites:** setup (1), you'll need (1), install (1)
> **File Paths:** node.js (2)
> **Tools:** terminal (1), command prompt (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. What Is GraphQL?

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding GraphQL](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=0)** - [Instructor] [[GraphQL]] is a query language for your API. It was created at [[Facebook]] and open sourced in 2015. And something to really remember about GraphQL is that it's a spec. It's a document that describes everything that is part of the language, including a query language and a schema definition language for designing your API's types. GraphQL gives us a way of taking all of our data sources, our [[Representational State Transfer (REST)|rest]] APIs, our [[Databases]], our [[Cloud Services]], and put it into some sort of user interface, and this is how the query looks. So over here on the left side of the screen, we have all of our clients, phones, CLIs, desktop applications, even VR, and we can send a query to a GraphQL server that sits in front of all of the various data sources. This will then collect information from all of those sources and return the data in a single response, so that's the idea with a GraphQL query. We have a single query and a single response. GraphQL also gives us a domain specific language, in other words, a way of designing our API's types in a readable language that everybody can understand. We can pull everybody together to work on the schema, and then everybody can go off and work on their own parts of the application based on that document as a single source of truth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (6), [[Facebook]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Databases]] (1), [[Cloud Services]] (1)
> **Env Vars:** api (3)
> **Definitions:** is a  (1), in other words (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### [How GraphQL differs from REST](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=0)** - [Instructor] So let's talk a little bit about how we get data with [[Representational State Transfer (REST)|REST]], and then we'll compare this to how we get it with [[GraphQL]]. So with REST, we're going to send a request. We'll send an HTTP request to /lifts/panorama to get information about this lift. Then if I want to grab information about any of the trails off of this lift, I'll have to make four separate HTTP requests for all of this data. Now, this works pretty well. It's pretty nice. However, with each one of these requests, there is latency. So we're waiting on all of these to be fulfilled in order to be able to load our data. Also, once we get back these huge blobs of [[JSON]] data, they're in no shape to display. We have to parse it, sort it, filter it, do all the stuff we need to do on the client, turn the data into the shape that we want, and that's a lot of effort, particularly if we're using a phone. Here's where GraphQL comes into play. The way we get data with GraphQL is we send a query. So again, this is actually another HTTP request. It's a POST request that we're sending to GraphQL's single endpoint, which you usually find at /graphql. Now, the query's going to tell the API what data we need. So we have this query. We asked for specifically the fields we want, and then we get back our response as JSON that is the exact same shape as the query. We only get the data that we asked for, no more and no less. And that's pretty cool.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=94)** And again, with a single endpoint, there's less latency. Another really amazing thing about GraphQL is that we can move a lot of the sorting, parsing, and filtering back to the server, transform the data into the shape that we want, and then we can use the phone simply for rendering. We can use the client for rendering, which is going to be a lot faster, and it makes those clients a lot happier. Let's talk a little bit about how we change data with REST. So let's say we wanted to change the status of one of these lifts, like panorama. We wanted to make it open. Well, we could send that request to our API, to this /lifts/panorama route, and then we'd get back a blob of JSON data. It's an HTTP PUT request updating the status. The way that we change data with GraphQL is we send another one of those POST requests to our /graphql route. But this time we're going to send a different type of operation to our GraphQL API, and this time we're sending a mutation. So we're sending one called setLiftStatus. We'll take in the name and the new status, and then we'll return some data about that mutation. And again, we're going to see the response is the exact same shape as the mutation. So again, we're sending these queries to our APIs. The APIs collect all the data, and then return that data in a single response. And the way that this is working behind the scenes is that each one of these fields that we're asking for in the query is backed by a function,
>
> **[3:08](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=188)** and that function can then go to the database, go to the REST API or whatever, and ask for the data that's required, and then return it. So again, these are resolver functions. They're resolving the data that we require, and this allows us to collect data from multiple places at the same time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (9), [[Representational State Transfer (REST)|Rest]] (4), [[JSON]] (3)
> **Env Vars:** rest (4), http (4), api (4), json (3), post (2)
> **CLI Commands:** make (2), find (1)
> **API Endpoints:** post  (2), put  (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** setliftstatus (1)
> **Analogies:** compare this to (1)
> **Speakers:** - [instructor] (1)

#### [Using GraphQL Playground](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=0)** - [Instructor] The most important place to start when we're dealing with [[GraphQL]] is with the query language. Now the GraphQL query language is defined in that GraphQL spec, which you can find at spec.[graphql.org](https://graphql.org). So over here, if we look at Language, this is giving us all of the information we need about what is valid syntax for this language. Now, when you're dealing with data from a GraphQL API, it's more than likely you're going to see some sort of interface that looks like this. This is called the GraphQL Playground, and the playground allows you to send these queries right here in your browser. So all you need to do is go to snowtooth.[moonhighway.com](https://moonhighway.com) and you'll see the exact same thing that I am showing. So let's talk about a query. We're going to write our query here on the left-hand side of the screen. Again, we're sending all of these queries to our single end point that's located in the center up here. And on the left, we're going to write our query for liftCount. So liftCount should return a number of chairlifts that are at the ski resort. So I create my query. I wrap any fields that I want to ask for in curly braces. And then I see my response in this object. So far, so good. Let's go ahead and add onto this. And we're going to query all lifts. We'll grab the name and the capacity for now. I'll send the query again and we should see all of these objects being returned. So if you didn't happen to memorize this API, where could you look to figure out which fields are available?
>
> **[1:32](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=92)** Well, GraphQL makes this really fun. You can select the docs panel over here on the right hand side of the screen, and you can see all of the different queries that are available. So for example, we sent a query for liftCount, liftCount returns an int. Notice that the exclamation mark is after the [[Microsoft Word|word]] int. And that just means that this is non-nullable. In other words, it can not return null. In other words, it's required. So we also have an optional argument that we're sending here, the status argument. So in the next video, I'll show you how we can send a status to filter our results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** liftcount (4)
> **Definitions:** in other words (2), is called (1), means that (1)
> **Documentation:** spec (2), the docs (1)
> **URLs:** [graphql.org](https://graphql.org) (1), [moonhighway.com](https://moonhighway.com) (1)
> **Env Vars:** api (2)
> **UI Navigation:** go to (1), select the (1)
> **CLI Commands:** find (1)


### 2. GraphQL Queries

[↑ Back to Table of Contents](#table-of-contents)

#### [Using enum types and arguments](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=0)** - [Instructor] Let's talk a little bit more about how we can send filters to our [[GraphQL]] queries. So what I'll do is I'll move lift count. I'm going to pop this up onto line two. Then we're going to send it just to make sure it's working, we have 11. Now lift count, if we look at the documentation, says there's an optional, we know it's optional, cause there's no exclamation mark. There's an optional status for lift status. So what's lifts status. We can scroll to the bottom and we'll see that lift status is an enumeration type. Think of an enum as being a restricted list of options for a field. Unlike name, which we saw before, if we look at all lifts and then name, we see that that's a string. That's just any old string. However, when we want to get more granular and we want to limit that to a list, a lift is either open, it's closed or it's on hold, which just means maybe it'll open later in the day. So now I'm going to close the documentation panel. We're going to open and close a set of parentheses and I'll pass in status, and then I'll also pass in open, closed or hold. And enums inside of the query are not going to need quotation marks. So I'll say open now I'll click play and we'll see six. Pretty cool. Now, let's say I wanted to see both the open and the close lifts. So I'll send another query for lift count and as soon as I do that, we're going to see some errors.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=94)** Number one, we know it's an error because we see a little bit of red over here, letting us know, hey, something's up, we're doing something wrong. But also our error message tells us that field's lift count conflict because they have differing arguments. So what I'm trying to do is I'm trying to send the same query with different arguments and there's a conflict. So what I can do is I can add to the beginning of this line, I can say open lifts and then I'll say close lifts. So what I've done here is I've added, what's called an alias to each one of these fields. I've renamed these fields so that I can send the query. It works as we expect it to and also we can see that the response has been renamed. This works for any field. It's particularly useful to sort out this error that we get, but you can also use it, let's say I really don't like the field name, 'name' and I want to call it lift name. I'm allowed to do that. I can just rename it with an alias and then we'll see that the response renames lift name in each one of these spots. So we've done a couple things here. First, we used a GraphQL argument to filter our results and then we also used an alias so that we could send the same query with different arguments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (2)
> **Documentation:** the documentation (2)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Adding variables](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=0)** - [Instructor] Currently our filters are inline. In other words, we're adding these statuses inline into this query, but it's also possible to create variables for anything we're sending into these queries. Sending variables means that I can pass dynamic data into the query at runtime. Let's say I had a dropdown or something where I wanted to let our users select the status. I could set up our query to make this possible. So, here on line one, here's what I'll do. I'm going to use the dollar sign and status. And then this is our [[GraphQL]] variable. We know it's a variable because of the dollar sign and we can call these whatever we want. But the important thing is we need to set the type appropriately. So, I'll say LiftStatus. And a very important thing that we need to do is to match the status exactly. So, LiftStatus doesn't have an exclamation mark. If we added one, we would break the query. Now, that I've done this, I can pass $status into this query. So, I'm going to get rid of the closedLifts, just to show that this is working. I then will come down here to my query variables panel. And actually, let's send the query first. We'll see 11, and I just want to call that liftCount. So, we'll see 11. Now, what I can do is I can pass these query variables in, it'll add some predictive texts for me there for status, and then I can pass open, closed, or hold.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=94)** So, it is going to ask me because we're passing in these values as [[JSON]]. It will ask me to use double quotes around both the key and the value. So, let's go ahead and click play. And now we see six. HOLD, three, CLOSED, there we go. One thing to know is if you're trying this along with me, this is live data, so if your number is slightly different, don't worry about it. It's probably just somebody opened or closed or put on hold one of the lifts. Another little tip about the Playground, whenever we're working in the context of a query, in other words, when my cursor is between these two curly braces, I can hit Ctrl + Space and this is going to surface all the different fields that I can query. So, I don't have to memorize this. I don't have to open up the docs panel if I don't want to. I am super hooked up by our predictive texts by our IntelliSense here. And now, I can just add these fields. So, again, Ctrl + Space. I can then go down with these arrows and then send the query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (1), [[JSON]] (1), cursor (1)
> **Env Vars:** json (1), hold (1), closed (1)
> **Definitions:** in other words (2), means that (1)
> **Code Identifiers:** closedlifts (1), liftcount (1)
> **UI Navigation:** dropdown (1), select the (1)
> **CLI Commands:** make (1)
> **Documentation:** the docs (1)
> **Prerequisites:** set up (1)

#### [Querying connected types](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=0)** - [Instructor] We've gotten a lot of information about a single type. But part of the power of [[GraphQL]] is being able to make connections between different data types. So let me show you what I mean. If we go over here to our allLifts query, there's another one of these fields called trailAccess. So this is going to tell me, based on the lift that I'm on. So I can ride a lift up to the top of the mountain and then I can take a trail down. So this is going to let me know how to do that. I also want to get rid of our status argument here. If I got rid of the query. And now we can see that there's a trailAccess field. This returns an array of objects. All of these objects have all of the fields that are related to the trail. For more on what that trail type is you can always come over to the documentation panel, you can select trailAccess, but you also can search the docs. So if you're like, there's probably a trail in here somewhere, you can click on Trail and that's going to tell you exactly what is here. So this is how we make that connection. We're connecting a lift to a trail by a field. And we're able to query any of the fields that are on that type. So let's say status, and then we'll go ahead and add it. So this is how we make the connection between lifts and trails, but how do we make a connection between trails and lifts? In other words, the other way? So we can actually do that right here. So on line 10, I'm going to open up our list of fields, grab accessedByLifts.
>
> **[1:33](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=93)** This is going to give me information. Okay, if I went up this lift and then I went down this trail, how do I get to these trails by lifts? So I'm going to go ahead and click play. And then we see another array of objects. So this allows us to make these different connections between our data types. These are the main ones for this API. We got our lifts and we got our trails.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (1)
> **CLI Commands:** make (5)
> **Code Identifiers:** trailaccess (3), alllifts (1), accessedbylifts (1)
> **Documentation:** the documentation (1), the docs (1)
> **Env Vars:** api (1)
> **UI Navigation:** click on (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Creating operation names](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=0)** - [Instructor] Let's say that we wanted to add a couple different queries to our query document. I'm going to get rid of all this trail stuff, 'cause really, what I want is I want a different query that's giving me information about all of our trails. So I'll grab name and status here, and then I'll try to send it. As soon as I do, we already noticed the red over here. This faint whisper of red. It's very upset with us. But if we try to send it, it's not going to work either. Because it says this anonymous operation must be the only defined operation. So what the complaint is here is that we've added two queries to our query document and we haven't given these queries a name. These are considered anonymous queries. Think of that like an anonymous function. So if I give this a name, like All Lifts, and I give this a name, like All Trails, this is going to then remove those little red patches, and now, if I click on the dropdown, I can send, I can execute these queries one at a time. So this in the Graph QL query language is called the operation name. An operation name is simply a name that we assigned to the query, and typically, this is not a rule, but a convention, we use Pascal case for this. So a capital A and a capital L. You can call this whatever you want. Doesn't have to be the same as the name of the lifts. You could call it pancakes. Doesn't matter. You can send these one at a time
>
> **[1:33](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=93)** and this will clear that error. So whatever you want to call it is fine, but making sure to give more than one query a name is a good idea. And I would say actually, it's a good idea to use these anyway because you're giving a little bit more description about what your query is.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), dropdown (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Mutations and Subscriptions

[↑ Back to Table of Contents](#table-of-contents)

#### [Changing data with mutations](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=0)** - [Instructor] So far, we know that queries get data. But there's another type of [[GraphQL]] operation that's very useful called a mutation. Mutations are used whenever we need to change data. So I'm going to create my first mutation here, and it's going to be called setTrailStatus. So if we take a look at the documentation here, and I scroll down to setTrailStatus, this is always taking in the ID and the status and returning a trail. So we're setting the desired status for this trail. I can always check the IDs of trails. So let's say we want to, let's see... "Goosebumps" seems like a fun one. And the current status is OPEN. So let's go ahead and close it. It's too windy. We can't have people out there. We have to close it. Let's go ahead and add an ID. The ID is "goosebumps." And the second thing we need to pass is our desired status. So this is going to be OPEN or CLOSED. It's slightly different than the earlier enumeration type we used with OPEN, CLOSED and HOLD. A trail can either be OPEN or CLOSED. So it's open already. Let's close it. Then we know that we're going to get back some fields from the trail. So we can go ahead and add... I don't know, name and status. Okay. So now that we've done this, we can go ahead and click play, and we see our response, name, and CLOSED. And we go back to our data here,
>
> **[1:37](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=97)** and we find goosebumps. We'll see that the status is CLOSED. Very cool. Another way that we could do this, there is a Trail query. And the Trail query starts with a capital T. We will grab the goosebumps. And now we can grab the name and the status, and this will select that individual trail. So however you want to check that is fine. So this is our mutation. We're changing data. Queries get data, mutations change data. Both our POST requests that we're sending to our GraphQL API, that's located here, and this will change the status based on whatever arguments we pass in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (2)
> **Env Vars:** closed (5), open (4), hold (1), post (1), api (1)
> **Code Identifiers:** settrailstatus (2)
> **CLI Commands:** find (1)
> **API Endpoints:** post  (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)

#### [Creating GraphQL fragments](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=0)** - [Instructor] Another nice thing to know about the [[GraphQL]] query language is that we can take advantage of GraphQL fragments for composition. We're going to write a query for a Lift. We'll take in the id of panorama and we'll get the name and the status. So, we're familiar with this syntax, but let's say I wanted to reuse some fields. So, usually at this point in the class, someone asked me, how do I do like a star query? Like give me all the fields please. And so that I would say there is no operation for that, but there's a way that we can do this with a fragment that may be useful. So, I'll show you a couple of uses for it. First thing I'll say, is fragment AllFields, and when I create the fragment, I need to create it on a specific type. So, we couldn't create a fragment of trail and lift fields together, instead I would have to create this with a single fragment on the Lift type. So here, we'll add an id, a name, a status, a capacity, a night, an elevationGain, all these different fields, right? And now what I can do is I can remove name and status from our Lift query, and I can push them in right here. So, I'll use the spread syntax, dot dot dot,
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=94)** and I'll push in AllFields. And this is going to give me everything. What's really cool about this, and the reason I said this was for composition, is let's say I wanted to send a query for all lifts, dot dot dot AllFields. I can send the exact same query and get back the exact same fields. So, the fragment is very useful in a case like this, but I would caution you, that make sure you really need all these fields when you're using them. I would maybe call this LiftDetails instead. LiftDetails, and LiftDetails. And this way, we're still adhering to the principles of GraphQL's declarative query syntax. We want to just ask for the fields we need. We don't want to be grabbing a bunch of extraneous data all the time, but maintaining a fragment is pretty cool. Let's say I don't really care about the elevationGain, or whether or not the lift is open at night, I can get rid of them, I can send the query again, and we're going to see just the fields that I asked for. So, this is a GraphQL fragment, a super important syntax when you're designing your queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (4)
> **Code Identifiers:** elevationgain (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Working with subscriptions](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=0)** - [Instructor] So far, we know that queries get data and mutations change data, but there is even a third type of [[GraphQL]] operation called a subscription. A GraphQL subscription works over web sockets and it sets up a listener. So, let me show you how this works. I could create a subscription for liftStatusChange, grab the name and the status. And now I'm going to go ahead and click play. This is going to listen for any data changes in real time. And then if a status has changed over here in another panel, we're going to see all of these comeback in the browser immediately. So again, unlike a query, which we just send the query, we get a response, a subscription, we set up a listener. So, we're listening for any of those changes. As soon as they come in, they will be present here in our user interface. So, this is pretty cool. A subscription sets up kind of that [[Real-Time]] feel in your application. These were first implemented at [[Facebook]] and they were used for live likes. When you see those little thumbs up on a post, continuing to go up in real time, those are powered by GraphQL subscriptions. Same goes for those live videos where you see little emoji heads, happy, sad, et cetera, if someone is sharing a video. So, this is a GraphQL subscription.
>
> **[1:32](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=92)** Queries get data, mutations change data, and subscriptions listen for data changes over a web socket in real time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (4), [[Real-Time]] (1), [[Facebook]] (1)
> **Code Identifiers:** liftstatuschange (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Sending pet library queries](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980&t=0)** - [Instructor] Now that you've had a chance to explore the query language, it is your turn to try it out. So if you go to [https://pet-library.moonhighway.com](https://pet-library.moonhighway.com), this is going to bring up another playground for you. And here I'd like you to write a query to get all pets with their name, weight, and category. Then you can extend that query. Think about those connected queries we talked about, and you want to extend it to see who has checked out the pet. And then finally for extra credit, which will count towards your final [[GraphQL]] grade, you can create an account using a mutation. So give it a shot and I'll show you the answer in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (1)
> **Cross-References:** we talked about (1), in the next (1)
> **URLs:** [https://pet-library.moonhighway.com](https://pet-library.moonhighway.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Pet library query construction](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=0)** - [Instructor] All right, how did it go? Hopefully good. The first thing we wanted to do was to write a query to get all pets with their name, weight and category. So I can send a query for all pets and I'll find name, Control + Space, weights, Control + Space, category. Boom, so we got those, that's good. Then we wanted to extend the query to see who has checked out the pet. Now, if you're exploring this for the first time, you can always check out the documentation panel, so let's go ahead and scroll down. We see, oh, this is connecting to a customer, so I probably want to add the inCareOf field. We know that we're making a selection for some fields on that customer, so let me show you this first. If I tried to send just inCareOf, without any of those curly braces, we'd get an error because it says there must be a selection of sub-fields so let's fix it. Open and close those and we'll grab a name. So now we can see who has checked out a pet. And, again, this is live data too, so you may have different folks checking out these pets. Okay. Then, finally, for extra credit, again, no stress, you don't have to do it if you don't want to, but we do have a CreateAccountinput. Now an input type, we haven't talked about yet, is a wrapper around some fields that are sent to a mutation. And it's a good practice to, if you have several fields
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=94)** that you're sending to a mutation, to wrap them in an input type. Again, we'll explore the docs, we'll look at the CreateAccountinput. This object contains a name, username and password, so that's all we need to supply here. So I'll say name, Eve Porcello. Username, we'll say "evetahoe". Password is password. Nobody steal my password, okay. Then we're going to say username and name, and this will create our account, pretty cool. So this is allowing us to send several fields, all together, in this mutation. Now, just to take this even further, we could create a variable here, input, CreateAccountinput, and I know that this is required so I'll add the exclamation mark. Now what we'll do is we'll take this object, and I'm just going to put it on my clipboard, I'm going to Control + X that, and I'll say input. Now we'll mosey down to the Query Variables panel, we need to send this as [[JSON]], and we need to put it on the input key, it's a nested object for a member. And, now that I'm here, I'm getting some red because I need to wrap all of my keys in double quotes, JSON for the win so there we go.
>
> **[3:14](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=194)** Cool, so I'm also going to change my username because it won't let me create a non unique one. So I'll say "evetahoe1", very creative, and now I'll click play and we've created our new account. So a couple ways of getting to the same destination, the input type is going to allow us to wrap all of our input fields in a single object, and then we can use the dollar sign to pass this as a variable. So great job, you killed it, you did great. We were able to get some data about our pets and also create an account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Code Identifiers:** incareof (2)
> **Env Vars:** json (2)
> **Documentation:** the documentation (1), the docs (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)


### 4. Creating a GraphQL Server Schema

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the GraphQL schema definition language](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=0)** - [Instructor] So far, we've talked about a couple different pieces of the [[GraphQL]] spec. We have talked about the query language, and then we've touched on the schema definition language, which is a language that defines all of our API's types. So, in order to send these queries, we need a well-defined schema. So, let's take a closer look at some of the pieces that make up the schema definition language. First of all, in GraphQL, we have a few different scalar types. In other words, if we're going to return a single value, we can return either an int, a float, a string, a Boolean, or an ID. So, these represent just one little container of data. If a field returns one thing, it's going to return one of these five built-in scalar types. When we set this up in our schema, it'll look like this. We'll define the name of the field, like ID. And then, we'll set that to a value that's being returned. In this case, an ID or, for the name, a string. And then, once we've started to create these different fields, they're grouped into different object types so, for example, if we have a photo, we might have an ID name, URL description, rating, private, all of these fields are going to be available on that photo type. Another really important conversation in GraphQL is nullability. So, nullable versus non-nullable. If we see an exclamation mark that just means that we have to return a value that is not null. And, specifically, we need to return a string. So, here, our name is required, it's non-nullable, and description is nullable.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=94)** So, if we return null for a description, our query will still execute. All of the queries that are part of our API are going to be wrapped in the query type. So, here, we have total users that returns an int, and then any other queries that we have listed here are going to be available at the playground and on this API. Fields can return lists, so let's say we add a user with a field called posted photos. A user might post more than one photo, so we would return a list, we'd know it's a list because we got these square brackets here. And then inside of the brackets, we have the object type that we want to return. When we're talking about nullability for lists, here on the screen, we have the least restrictive to the most restrictive. The first one we have here is a nullable list of nullable values, so any value inside of it can be null as can the array itself. The second option here is that any value inside of this array could be null, but the actual value of photos can't be null. And then finally we have the most restrictive, meaning that no values inside of the array can be null. And the value itself can't be null. Now, this is typically what we use to define a list. And that's because you can also return an empty array. That's not null, so that would be valid. So, that is a quick look at our schema definition language. Of course, I'm going to show you how to actually create your own schema, so we'll get to that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (3)
> **Definitions:** is a  (3), in other words (1), means that (1)
> **Env Vars:** api (3), url (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Setting up a GraphQL server with Apollo Server](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=0)** - [Instructor] Now that we have a sense of what is included in the schema definition language, we're going to create our own schema. But to do this, we need to create our first Apollo Server. So, what we're going to do to get started here is literally just start from scratch. So, I'm going to navigate to my desktop, then I'm going to create a folder called ski-day-counter. I'm going to get into that folder and then I'm going to [[npm]] init -y, so we'll just set all the defaults, and then the dependencies that I'm going to need to work on this are as follows. We're going to need [[GraphQL]], we're going to need apollo-server, and we're also going to need nodemon, which will just restart our server anytime we make changes to the schema. Nice. So the next step we want to take here is we want to open this up in our code editor. Within the code editor, we'll create a new file called index.js, which is going to house our schema. So, a couple things we need to get this started is we're going to create our own Apollo Server here. Apollo Server is a [[Node.js]] implementation of a GraphQL server, so we're going to go ahead and import this from that package. The next thing we're going to do is create our type definitions. So our type definitions, think of this as just being our schema, and the way that we'll often see this done
>
> **[1:33](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=93)** in a node.js project is we'll use this function called gql, gql is a function that comes from the Apollo Server package, and it's going to take our schema string, and it's going to turn it into an abstract syntax. It's going to turn it into an AST, an abstract syntax tree. Now, this is just a fancy way of saying it's going to take a string and it's going to turn it into an object that's a little bit easier to parse. I'm going to leave that here for a second while we also create resolvers. So these resolvers are just functions that are going to return data for the schema. The next thing we'll do is we'll create our instance of the Apollo Server. So I'll say, "new ApolloServer," and what the Apollo Server needs to take in are two things, it needs to take in typeDefs and resolvers. Now, at the moment, we're not going to worry about these resolver functions, because we only want to worry about the schema right now. So instead of passing resolvers into this, we're going to pass in a key called mocks: true, and mocks: true is going to mock data for the schema. So we don't need to worry about wiring up all of our data sources just yet. Instead, we can just worry about defining the schema that will be our API. So finally, we're going to call server.listen. This is going to start our server,
>
> **[3:06](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=186)** and then we're going to create a little console.log message in order to see what port this is running on. So I'll say, "Server running at ${url}." Okay. So here inside of the type definitions, let's create our first schema type. So we're going to create a Query type. Remember, this is the wrapper around all of the queries that are available on the API. And, specifically, I'm going to use totalDays and return an Int. Remember that this means that we should return an int and we can't return null. So once we have this created, I'm going to go to the package.[[JSON]] file. Remember that we've installed Apollo Server, GraphQL and nodemon, so now what we need to do is create a start script, and this start script is just going to run nodemon and, specifically, the index file. So I'm going to just say "nodemon .," and that's going to run the index. Now that I've done this, I can go to the terminal, I can run npm start, and this should run our server at localhost:4000. So once we visit localhost:4000, we're going to see that, "Hey, we got a playground running here." The GraphQL playground has a query called totalDays. And what we can do here is we can send a query for totalDays. So now we see -10, 29, -48. So why is that working like that? Well, the mocks, if we go back to the index, are returning some sort of value for totalDays.
>
> **[4:43](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=283)** This allows us to have some sort of data returned, it allows us to define our queries without having to worry about those data sources just yet. We have created a schema inside of our type definitions, we have set up mocking, and then we have created the server and started it on localhost:4000.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (4), [[npm]] (2), [[Node.js]] (2), [[JSON]] (1)
> **CLI Commands:** npm (2), node (2), make (1)
> **Code Identifiers:** totaldays (4), typedefs (1)
> **File Paths:** node.js (2), index.js (1), package.json (1)
> **URLs:** [localhost:4000](https://localhost:4000) (3)
> **Ports:** :4000 (3)
> **Env Vars:** api (2), ast (1)
> **UI Navigation:** go to (2), navigate to (1)

#### [Creating a custom object](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=0)** - [Instructor] So far we have set up our ApolloServer using this type called query, and we have a single query for total days. Now let's define our first object type here. So the API that we're trying to build here, we're trying to build a ski day counter. Think of this as just being an activity counter, where we're going to track the number of days that we ski during a year. Now, if you don't like skiing and you want to say something else running day or programming day or learning [[GraphQL]] day or whatever it is, you can add that here. So here on line five, we're going to add a couple of different fields inside of our custom objects. Specifically, we'll add an id, we'll add a date which will be a string. And then we'll add a mountain which will be a string as well. Once I've created this custom object type, I can then add a query for all days. We can return a ski day inside of this array and we're going to make it such that we can't return null inside of the array. And we can't return null as the value of the year, but remember we can always return an empty array. So if we go back to our playground running notice that this has restarted our server using nodemon. And if we look at the documentation panel, we should see that all days is now here. So let's query all days. And again, we don't have any data sources wired up and that's actually good. We're just making sure that this is working as expected. As soon as I do this,
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=94)** we have an array of objects coming back and with the Apollo server mocks, anytime we're returning a list, it's going to return two objects. Now we see this data being returned and we have values for all of these three fields that are part of the ski day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Adding an enumeration type](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=0)** - [Instructor] The next thing I want to do is add an enumeration type. The enum type I want to add is for conditions. So conditions are just going to tell us, what was it like to ski on this particular day? There are several types of conditions that you could create, but why don't we use POWDER, a ton of snow, HEAVY, which means that it's a thick, wet, snow, west coast, snow. And then we can add ICE. And then I can add THIN, which means you're mostly skiing on rocks and dirt. So we've created the enumeration type. We have set that value to whatever conditions is, and let me fix that typo, conditions. And now what I can do is check this out. We'll see. And I may have to hit a refresh to get the schema back. So I will see conditions. And if I click play, we'll see that. So notice that typo I made before, condition. So let's hit save on that. We'll change that to conditions. And then we should see that here. So you may have to hit refresh as you're adding to your schema, but notice that if you make a change of any sort, you still will be able to get the right data back. But in order to see it pop up in the documentation, you may have to hit that refresh. So that's an enumeration type. We've added this to the schema and we've returned it from a value.

> [!info]- Semantic Content
>
> **Env Vars:** powder (1), heavy (1), ice (1), thin (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 5. Schema Enhancements

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with mutations](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=0)** - [Instructor] Just like we have a query type for all of our get operations, the operations that get data, we should create a mutation type that has all of our verbs, all of our actions that are going to change data. So I'll create a removeDay mutation. It should take in the ID of the day that we want to remove. And then I'll return from this a SkiDay. Remember, we can return anything from a mutation, but we have to return something, could be a Boolean, could be an object. In this case, we'll just return the entire SkiDay object so we can have access to all of those fields. Now, if we go back to our playground, we should see removeDay has been added here. Let's go ahead and replace this with a mutation called removeDay. I'll pass in an ID. It doesn't matter what the ID is for the moment. And then this will return ID, mountain, whatever. And again, this is just returning those mocked values so that we can test out these queries.

> [!info]- Semantic Content
>
> **Code Identifiers:** removeday (3)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Sending input types to mutations](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=0)** - [Instructor] Let's go ahead and add one more of these. And this is going to be called addDay. Now the addDay mutation, I want to send those values that are necessary like date and mountain and conditions and things like that. So this is a really good opportunity for me to use our first input type. I'm going to call this AddDayInput, and the reason I'm calling it this is because it's often nice to associate the input type, specifically with the name of the mutation. So that's what that's all about. And from this, I'm going to return a SkiDay. So once I've created that, I need to create the input type as well. The input is called AddDayInput, and the AddDayInput wraps around the date, which is a string. It wraps around the mountain, which is also a string, and then the conditions which we'll make not required. Perfect. So once I've done this, I go back over to my playground. I'm going to, instead of sending the removeDay mutation, I'm going to say addDay. Remember, we're going to send the input type, which is an object. The input has a date, so one 1/2/2025.
>
> **[1:26](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=86)** We'll say mountain, Alpine Meadows, and conditions on that fateful day were icy. So now, once I've added those fields to the input, I need to return something. So I'll just grab the date from this. And when I send that, it's going to return my string. So again, haven't wired up the data sources yet, so you won't see that actual value, but you'll know that this mutation will work, and this is a nice thing to be able to provide your front-end developers, even if the data sources aren't wired, you can still add a day. You can still create the mutation that's going to work with their user interface. So that's that. We've created a few different mutations; adding a day, removing a day, and taking in an input type for those values that we need every time a new day is added.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Code Identifiers:** addday (3), removeday (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Building a custom scalar](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=0)** - [Instructor] Might be noticing that we're adding a string every time we're dealing with a date. Now a date is a really good opportunity to use one of those custom scalars, and a custom scalar is, again, a customized value that's going to be used for a single value. Instead of just returning a string, which is kind of an open-ended type, we can say, hey, the date should actually have some semantic meaning to it. So I want to return a date here, and I want to send a date here. Now you might be wondering, how do I define what a date actually is? And that's something you're going to do in your resolver functions. You don't need to worry about that at this moment when you're creating a schema. Instead, you can just think about this as being a customized container for a date value, and then you can define this later using your resolver functions. So that's that. We're going to create that first, and then if we take a look at this over here, we're going to see in the documentation panel that this date is being returned and this is a custom scalar. So you can think about opportunities to use these all through your schemas. Typically, I put these at the top of the schema so that they don't get shuffled out of my sight line as I'm developing a schema. But like I mentioned before, you'll see these for email addresses, you'll see these for URLs, all sorts of different things, but you can use these in cases
>
> **[1:32](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=92)** where you want to be a little bit more specific than a string.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Returning a custom object](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=0)** - [Instructor] Currently, when we send the removeDay mutation, we're returning an entire SkiDay. This will give us access to all of those fields that are on the SkiDay, but there's a pretty cool thing we can do to make this even better. We're going to create a custom type called RemoveDayPayload. Just like our input type, we're associating this with a specific mutation by calling it removeDay. Remember, that a schema is all about communication, so it's really important that we use the proper names when defining this stuff. So what is the RemoveDayPayload? Well, we're going to add a little bit of [[Metadata]] onto this type so that we can return it from this mutation. So let me change this first. There we go. And then on line 32 is where I'm going to add the day so I can return all of those fields that I like from the SkiDay, but I'm also going to say removed: Boolean, so this will let us know true or false if it has been removed. I'm also going to add a field called totalBefore. So before I remove the day, how many were there? And then total after. So this is going to help me calculate how many days before and after this operation was sent. So now, again, I can send this mutation. The mutation is called removeDay. It takes in the ID of the day we want to remove. You can just put whatever you want in there.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=94)** And now, check it out. We have the day. So here, we have access on the object to the date, the mountain, all that stuff. So we're getting a little bit more information for this. So something I'm noticing here is if I try to send this date fields for the type date, we're getting this error. It says that there's no mock defined for this. So why don't we do that in the next video. We're going to take a look at how do we create a custom mock so that we can avoid errors like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1)
> **Code Identifiers:** removeday (3), totalbefore (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Customizing schema mocks with Apollo Server](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=0)** - [Instructor] We just ran into this error where if I ask for the date field, it's giving us this no mock defined for type date error. So the way that we can fix this is we need to create some custom mocks for the date field. Right now, we're just using the defaults, which return kind of dummy values for these fields. So what I'll do is I'll add a value for mocks. That's going to be an object that defines all of these various types. So here online 45, I'm going to create a date mock. And again, think of this as just being a function that's going to return some sort of value for a date. So it's going to look like this. I'm going to say 1/2/2025. Now, instead of saying mocks true and using the defaults, we're going to just send mocks in. If we go back to the playground and try to send this again, it's always going to return this value for a date. Now, of course, you can do this for different types too. Let's say for a string, you want to return cool data. Once you set this up and send that again, anytime we're asking for a string, you're going to get that set string back. Another thing we noticed, and let's go ahead and add our query back. So our query for alldays, specifically, we had date, mountain, let's say conditions. Now, this is just returning two values, two objects
>
> **[1:39](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=99)** every time I send a query that returns a list. And that's because that's just the default. We can pull in an instance of MockList from Apollo Server. And any time we're sending a query for alldays, it's going to look like this. So remember, we're returning an object here. So you need to point our little arrow function at a set of parentheses that wrap around our object. Then we're going to say alldays. This will be another function that we defined, but this time, we're going to say new MockList. And we'll pass it a value of eight. Back to our playground. Let's send this again. And we'll see we have eight values being returned. Pretty cool. So it's always going to return two as a default. If I use a mock list and pass it a single value, it'll always return that value. You can also do this. We'll pass it an array where we say between one and 15. This will return a random number between one and 15. So this time, there's a bunch. (laughs) If I say between one and five, this will generate one of those random values as well. Here, we got one, two, three, four. So there's a lot of flexibility we can find with mocking. You can mock different types. And you can mock different queries to create your own custom mocking behavior when you're developing your schema.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Creating subscriptions](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=0)** - [Instructor] The type that we want to represent in the schema is the subscription. So let's go ahead and add the subscription type. Remember, just like the mutation and the query, we're going to wrap any subscriptions that are available on this API here, and let's just call this newDay and it should return a SkiDay. There we go. Once I've added that I can go back and I can find that here. So we'll replace the query with the subscription. The newDay returns the SkiDay so we have access to all of those fields. Once I hit play, it'll say subscription field must return Iterable. That's fine. We haven't set up any mocking for the subscription, but we still have a container for it. So that's what a subscription type looks like. It looks just like a mutation or a query.

> [!info]- Semantic Content
>
> **Code Identifiers:** newday (2)
> **Analogies:** just like (2)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Writing schema documentation](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=0)** - [Instructor] One of the coolest things we can do with our schema and one of the kindest things we can do for others who are using our schema, including ourselves, is we can add documentation. So let's say our schema is in a space where we feel like it's really solid and it's ready to go. What I can do is I can start to add documentation to each one of our fields and each one of our types. So let me show you what I mean by that by documenting the ski day. We're going to set up any documentation with three double quotes, so open three, close three double quotes, and then we're going to add documentation for the ski day. So I'll say an object that describes the characteristics of a ski day. Then we can document each individual field with just a set of double quotes. So I'll say a ski day's unique identifier. I can say the date that a ski day occurred.
>
> **[1:18](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=78)** I'll say the location where a ski day occurred. And then the shape that the snow was in when this ski day happened. Now that I've added these to the schema, I can check this out in the playground. So if I open the documentation panel, I select this all ski day. Let's check it out. Type details: An object that describes the characteristics of a ski day. Each one of these individual fields will have that as well. I've said it before. I'll say it again and again and again. A schema is all about communication. So in addition to naming your fields really well, in addition to creating these nice data relationships, we're going to want to take the final step of documenting the schema just so that there's a lot of clarity around what these types are and what your intentions are for them. So I definitely recommend taking this step. It's an extra step. It's one that should probably happen after you're pretty solid on what the schema entails, but I would recommend doing this for yourself and for other consumers of your API.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980&t=0)** - [Instructor] Now that you've been introduced to [[GraphQL]], there are many different routes that you can take to use it in your own projects. For a look at all of the different libraries, check out [graphql.org/code](https://graphql.org/code). Here you'll find different technologies and tools that you can use to build your own projects. I'd highly recommend the Apollo Stack, as well as Hasura, Prisma, and AWS AppSync. From here, the possibilities are numerous, but I hope this gave you a good first look at GraphQL and how it's used. Keep me posted on what you build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (3)
> **CLI Commands:** find (1), aws (1)
> **URLs:** [graphql.org](https://graphql.org) (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)


## Skills Covered

- GraphQL

## Path Context

### In [[Stay Ahead in GraphQL]]
**1 of 3** | [[GraphQL Essential Training]] →

## Appears In

- [[Stay Ahead in GraphQL]]

## Related Courses

_Courses sharing skills:_

- [[Building GraphQL Applications in Laravel]] — GraphQL
- [[Building a GraphQL Project with React.js]] — GraphQL
- [[Spring with GraphQL]] — GraphQL
- [[Migrating from REST to GraphQL]] — GraphQL
- [[GraphQL Essential Training]] — GraphQL

---

[↑ Back to top](#)