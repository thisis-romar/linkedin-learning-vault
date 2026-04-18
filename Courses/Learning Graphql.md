---
type: course
slug: learning-graphql-2021
url: "https://www.linkedin.com/learning/learning-graphql-2021"
level: Intermediate
updated: 8/25/2021
learners: 9010
skills:
  - GraphQL
exercise_files: false
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/graphql
status: not-started
created: 2026-04-17
---

# Learning Graphql

> Data-driven applications depend on remote queries that run through APIs. GraphQL—a query language for APIs that was originally built by Facebook—allows developers to choose the kinds of requests they want to make and to receive information on multiple facets of that query in one request. The GraphQL approach to querying across networks can address a wide variety of large-scale development problems

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021) | Intermediate | 9K learners

## Skills Covered

- GraphQL

## Table of Contents

### Introduction

#### An introduction to GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=0)** - [Eve] API has provided us with a standard way of getting data and GraphQL gives us a new way of designing an API to serve up all types of data.
>
> **[0:08](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=8)** No matter where your data is, a database, a cloud service, a rest API, GraphQL can serve as a wrapper for all of that data.
>
> **[0:16](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=16)** Big companies like GitHub, PayPal, Expedia, Facebook, Twitter, and more have made big bets on GraphQL.
>
> **[0:23](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=23)** My name is Eve Porcello.
>
> **[0:25](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=25)** I'm a software engineer and a teacher, and I'm a big fan of GraphQL.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=29)** I love that GraphQL gives us a query language for asking questions of our data and I particularly love the type system that we can use to design a schema that everyone can use to build more functional applications.
>
> **[0:41](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=41)** I'm glad you're here with me to start your GraphQL learning journey today.
>
> **[0:45](https://www.linkedin.com/learning/learning-graphql-2021/an-introduction-to-graphql?u=76281980&t=45)** Let's start sending some queries.

> [!info]- Semantic Content
>
> **Env Vars:** api (3)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Speakers:** - [eve] (1)

#### What you should know before watching this course
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Narrator] This course is aimed at beginners with no GraphQL experience.
>
> **[0:03](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980&t=3)** And really there's not a lot of setup required.
>
> **[0:06](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980&t=6)** To participate in most of the class you'll just need a web browser.
>
> **[0:10](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980&t=10)** I will also show you how to build a GraphQL application using Apollo Server, which is a Node.js implementation of a GraphQL server.
>
> **[0:19](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980&t=19)** If you want to follow along with that part of the class, you'll need Node.js installed.
>
> **[0:24](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980&t=24)** To check to see if you have it installed you can open your terminal or command prompt and type node -v If you see a version number there you have it installed.
>
> **[0:34](https://www.linkedin.com/learning/learning-graphql-2021/what-you-should-know-before-watching-this-course?u=76281980&t=34)** If not, you can install at [nodejs.org](https://nodejs.org) You don't need to use Node or JavaScript to work with GraphQL, but I'll show you this as an example of how you might get started on a GraphQL project.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4)
> **Prerequisites:** setup (1), you'll need (1), install (1)
> **File Paths:** node.js (2)
> **Tools:** terminal (1), command prompt (1)
> **Code Keywords:** class, (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. What Is GraphQL?

#### Understanding GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=0)** - [Instructor] GraphQL is a query language for your API.
>
> **[0:03](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=3)** It was created at Facebook and open sourced in 2015.
>
> **[0:07](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=7)** And something to really remember about GraphQL is that it's a spec.
>
> **[0:11](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=11)** It's a document that describes everything that is part of the language, including a query language and a schema definition language for designing your API's types.
>
> **[0:23](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=23)** GraphQL gives us a way of taking all of our data sources, our rest APIs, our databases, our cloud services, and put it into some sort of user interface, and this is how the query looks.
>
> **[0:34](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=34)** So over here on the left side of the screen, we have all of our clients, phones, CLIs, desktop applications, even VR, and we can send a query to a GraphQL server that sits in front of all of the various data sources.
>
> **[0:50](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=50)** This will then collect information from all of those sources and return the data in a single response, so that's the idea with a GraphQL query.
>
> **[0:58](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=58)** We have a single query and a single response.
>
> **[1:02](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=62)** GraphQL also gives us a domain specific language, in other words, a way of designing our API's types in a readable language that everybody can understand.
>
> **[1:13](https://www.linkedin.com/learning/learning-graphql-2021/understanding-graphql?u=76281980&t=73)** We can pull everybody together to work on the schema, and then everybody can go off and work on their own parts of the application based on that document as a single source of truth.

> [!info]- Semantic Content
>
> **Env Vars:** api (3)
> **Definitions:** is a  (1), in other words (1)
> **Code Keywords:** interface (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### How GraphQL differs from REST
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=0)** - [Instructor] So let's talk a little bit about how we get data with REST, and then we'll compare this to how we get it with GraphQL.
>
> **[0:06](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=6)** So with REST, we're going to send a request.
>
> **[0:10](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=10)** We'll send an HTTP request to /lifts/panorama to get information about this lift.
>
> **[0:17](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=17)** Then if I want to grab information about any of the trails off of this lift, I'll have to make four separate HTTP requests for all of this data.
>
> **[0:26](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=26)** Now, this works pretty well.
>
> **[0:28](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=28)** It's pretty nice.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=29)** However, with each one of these requests, there is latency.
>
> **[0:32](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=32)** So we're waiting on all of these to be fulfilled in order to be able to load our data.
>
> **[0:39](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=39)** Also, once we get back these huge blobs of JSON data, they're in no shape to display.
>
> **[0:45](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=45)** We have to parse it, sort it, filter it, do all the stuff we need to do on the client, turn the data into the shape that we want, and that's a lot of effort, particularly if we're using a phone.
>
> **[0:56](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=56)** Here's where GraphQL comes into play.
>
> **[0:59](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=59)** The way we get data with GraphQL is we send a query.
>
> **[1:03](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=63)** So again, this is actually another HTTP request.
>
> **[1:07](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=67)** It's a POST request that we're sending to GraphQL's single endpoint, which you usually find at /graphql.
>
> **[1:15](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=75)** Now, the query's going to tell the API what data we need.
>
> **[1:18](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=78)** So we have this query.
>
> **[1:19](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=79)** We asked for specifically the fields we want, and then we get back our response as JSON that is the exact same shape as the query.
>
> **[1:28](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=88)** We only get the data that we asked for, no more and no less.
>
> **[1:33](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=93)** And that's pretty cool.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=94)** And again, with a single endpoint, there's less latency.
>
> **[1:37](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=97)** Another really amazing thing about GraphQL is that we can move a lot of the sorting, parsing, and filtering back to the server, transform the data into the shape that we want, and then we can use the phone simply for rendering.
>
> **[1:50](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=110)** We can use the client for rendering, which is going to be a lot faster, and it makes those clients a lot happier.
>
> **[1:57](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=117)** Let's talk a little bit about how we change data with REST.
>
> **[1:59](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=119)** So let's say we wanted to change the status of one of these lifts, like panorama.
>
> **[2:05](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=125)** We wanted to make it open.
>
> **[2:07](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=127)** Well, we could send that request to our API, to this /lifts/panorama route, and then we'd get back a blob of JSON data.
>
> **[2:16](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=136)** It's an HTTP PUT request updating the status.
>
> **[2:20](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=140)** The way that we change data with GraphQL is we send another one of those POST requests to our /graphql route.
>
> **[2:27](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=147)** But this time we're going to send a different type of operation to our GraphQL API, and this time we're sending a mutation.
>
> **[2:34](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=154)** So we're sending one called setLiftStatus.
>
> **[2:37](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=157)** We'll take in the name and the new status, and then we'll return some data about that mutation.
>
> **[2:43](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=163)** And again, we're going to see the response is the exact same shape as the mutation.
>
> **[2:51](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=171)** So again, we're sending these queries to our APIs.
>
> **[2:54](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=174)** The APIs collect all the data, and then return that data in a single response.
>
> **[2:59](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=179)** And the way that this is working behind the scenes is that each one of these fields that we're asking for in the query is backed by a function, and that function can then go to the database, go to the REST API or whatever, and ask for the data that's required, and then return it.
>
> **[3:17](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=197)** So again, these are resolver functions.
>
> **[3:19](https://www.linkedin.com/learning/learning-graphql-2021/how-graphql-differs-from-rest?u=76281980&t=199)** They're resolving the data that we require, and this allows us to collect data from multiple places at the same time.

> [!info]- Semantic Content
>
> **Env Vars:** rest (4), http (4), api (4), json (3), post (2)
> **Code Keywords:** let (3), function (2), for, (1), require (1)
> **CLI Commands:** make (2), find (1)
> **API Endpoints:** post  (2), put  (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** setliftstatus (1)
> **Analogies:** compare this to (1)
> **Speakers:** - [instructor] (1)

#### Using GraphQL Playground
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=0)** - [Instructor] The most important place to start when we're dealing with GraphQL is with the query language.
>
> **[0:04](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=4)** Now the GraphQL query language is defined in that GraphQL spec, which you can find at spec.[graphql.org](https://graphql.org).
>
> **[0:11](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=11)** So over here, if we look at Language, this is giving us all of the information we need about what is valid syntax for this language.
>
> **[0:20](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=20)** Now, when you're dealing with data from a GraphQL API, it's more than likely you're going to see some sort of interface that looks like this.
>
> **[0:27](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=27)** This is called the GraphQL Playground, and the playground allows you to send these queries right here in your browser.
>
> **[0:35](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=35)** So all you need to do is go to snowtooth.[moonhighway.com](https://moonhighway.com) and you'll see the exact same thing that I am showing.
>
> **[0:42](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=42)** So let's talk about a query.
>
> **[0:43](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=43)** We're going to write our query here on the left-hand side of the screen.
>
> **[0:46](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=46)** Again, we're sending all of these queries to our single end point that's located in the center up here.
>
> **[0:52](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=52)** And on the left, we're going to write our query for liftCount.
>
> **[0:56](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=56)** So liftCount should return a number of chairlifts that are at the ski resort.
>
> **[1:01](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=61)** So I create my query.
>
> **[1:03](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=63)** I wrap any fields that I want to ask for in curly braces.
>
> **[1:07](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=67)** And then I see my response in this object.
>
> **[1:10](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=70)** So far, so good.
>
> **[1:11](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=71)** Let's go ahead and add onto this.
>
> **[1:13](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=73)** And we're going to query all lifts.
>
> **[1:15](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=75)** We'll grab the name and the capacity for now.
>
> **[1:18](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=78)** I'll send the query again and we should see all of these objects being returned.
>
> **[1:23](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=83)** So if you didn't happen to memorize this API, where could you look to figure out which fields are available?
>
> **[1:32](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=92)** Well, GraphQL makes this really fun.
>
> **[1:35](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=95)** You can select the docs panel over here on the right hand side of the screen, and you can see all of the different queries that are available.
>
> **[1:42](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=102)** So for example, we sent a query for liftCount, liftCount returns an int.
>
> **[1:47](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=107)** Notice that the exclamation mark is after the word int.
>
> **[1:51](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=111)** And that just means that this is non-nullable.
>
> **[1:54](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=114)** In other words, it can not return null.
>
> **[1:56](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=116)** In other words, it's required.
>
> **[1:58](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=118)** So we also have an optional argument that we're sending here, the status argument.
>
> **[2:03](https://www.linkedin.com/learning/learning-graphql-2021/using-graphql-playground?u=76281980&t=123)** So in the next video, I'll show you how we can send a status to filter our results.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (2), interface (1)
> **Code Identifiers:** liftcount (4)
> **Definitions:** in other words (2), is called (1), means that (1)
> **Documentation:** spec (2), the docs (1)
> **URLs:** [graphql.org](https://graphql.org) (1), [moonhighway.com](https://moonhighway.com) (1)
> **Env Vars:** api (2)
> **UI Navigation:** go to (1), select the (1)
> **CLI Commands:** find (1)


### 2. GraphQL Queries

#### Using enum types and arguments
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=0)** - [Instructor] Let's talk a little bit more about how we can send filters to our GraphQL queries.
>
> **[0:05](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=5)** So what I'll do is I'll move lift count.
>
> **[0:07](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=7)** I'm going to pop this up onto line two.
>
> **[0:11](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=11)** Then we're going to send it just to make sure it's working, we have 11.
>
> **[0:17](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=17)** Now lift count, if we look at the documentation, says there's an optional, we know it's optional, cause there's no exclamation mark.
>
> **[0:24](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=24)** There's an optional status for lift status.
>
> **[0:27](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=27)** So what's lifts status.
>
> **[0:28](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=28)** We can scroll to the bottom and we'll see that lift status is an enumeration type.
>
> **[0:33](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=33)** Think of an enum as being a restricted list of options for a field.
>
> **[0:37](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=37)** Unlike name, which we saw before, if we look at all lifts and then name, we see that that's a string.
>
> **[0:44](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=44)** That's just any old string.
>
> **[0:46](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=46)** However, when we want to get more granular and we want to limit that to a list, a lift is either open, it's closed or it's on hold, which just means maybe it'll open later in the day.
>
> **[1:00](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=60)** So now I'm going to close the documentation panel.
>
> **[1:03](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=63)** We're going to open and close a set of parentheses and I'll pass in status, and then I'll also pass in open, closed or hold.
>
> **[1:10](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=70)** And enums inside of the query are not going to need quotation marks.
>
> **[1:16](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=76)** So I'll say open now I'll click play and we'll see six.
>
> **[1:21](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=81)** Pretty cool.
>
> **[1:23](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=83)** Now, let's say I wanted to see both the open and the close lifts.
>
> **[1:26](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=86)** So I'll send another query for lift count and as soon as I do that, we're going to see some errors.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=94)** Number one, we know it's an error because we see a little bit of red over here, letting us know, hey, something's up, we're doing something wrong.
>
> **[1:41](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=101)** But also our error message tells us that field's lift count conflict because they have differing arguments.
>
> **[1:48](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=108)** So what I'm trying to do is I'm trying to send the same query with different arguments and there's a conflict.
>
> **[1:55](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=115)** So what I can do is I can add to the beginning of this line, I can say open lifts and then I'll say close lifts.
>
> **[2:06](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=126)** So what I've done here is I've added, what's called an alias to each one of these fields.
>
> **[2:11](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=131)** I've renamed these fields so that I can send the query.
>
> **[2:15](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=135)** It works as we expect it to and also we can see that the response has been renamed.
>
> **[2:22](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=142)** This works for any field.
>
> **[2:24](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=144)** It's particularly useful to sort out this error that we get, but you can also use it, let's say I really don't like the field name, 'name' and I want to call it lift name.
>
> **[2:34](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=154)** I'm allowed to do that.
>
> **[2:35](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=155)** I can just rename it with an alias and then we'll see that the response renames lift name in each one of these spots.
>
> **[2:43](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=163)** So we've done a couple things here.
>
> **[2:45](https://www.linkedin.com/learning/learning-graphql-2021/using-enum-types-and-arguments?u=76281980&t=165)** First, we used a GraphQL argument to filter our results and then we also used an alias so that we could send the same query with different arguments.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), type. (1), enum (1)
> **Documentation:** the documentation (2)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Adding variables
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=0)** - [Instructor] Currently our filters are inline.
>
> **[0:03](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=3)** In other words, we're adding these statuses inline into this query, but it's also possible to create variables for anything we're sending into these queries.
>
> **[0:14](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=14)** Sending variables means that I can pass dynamic data into the query at runtime.
>
> **[0:20](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=20)** Let's say I had a dropdown or something where I wanted to let our users select the status.
>
> **[0:25](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=25)** I could set up our query to make this possible.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=29)** So, here on line one, here's what I'll do.
>
> **[0:31](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=31)** I'm going to use the dollar sign and status.
>
> **[0:34](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=34)** And then this is our GraphQL variable.
>
> **[0:36](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=36)** We know it's a variable because of the dollar sign and we can call these whatever we want.
>
> **[0:41](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=41)** But the important thing is we need to set the type appropriately.
>
> **[0:45](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=45)** So, I'll say LiftStatus.
>
> **[0:47](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=47)** And a very important thing that we need to do is to match the status exactly.
>
> **[0:53](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=53)** So, LiftStatus doesn't have an exclamation mark.
>
> **[0:56](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=56)** If we added one, we would break the query.
>
> **[0:59](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=59)** Now, that I've done this, I can pass $status into this query.
>
> **[1:04](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=64)** So, I'm going to get rid of the closedLifts, just to show that this is working.
>
> **[1:09](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=69)** I then will come down here to my query variables panel.
>
> **[1:13](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=73)** And actually, let's send the query first.
>
> **[1:15](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=75)** We'll see 11, and I just want to call that liftCount.
>
> **[1:21](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=81)** So, we'll see 11.
>
> **[1:23](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=83)** Now, what I can do is I can pass these query variables in, it'll add some predictive texts for me there for status, and then I can pass open, closed, or hold.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=94)** So, it is going to ask me because we're passing in these values as JSON.
>
> **[1:38](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=98)** It will ask me to use double quotes around both the key and the value.
>
> **[1:44](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=104)** So, let's go ahead and click play.
>
> **[1:46](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=106)** And now we see six.
>
> **[1:48](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=108)** HOLD, three, CLOSED, there we go.
>
> **[1:55](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=115)** One thing to know is if you're trying this along with me, this is live data, so if your number is slightly different, don't worry about it.
>
> **[2:02](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=122)** It's probably just somebody opened or closed or put on hold one of the lifts.
>
> **[2:07](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=127)** Another little tip about the Playground, whenever we're working in the context of a query, in other words, when my cursor is between these two curly braces, I can hit Ctrl + Space and this is going to surface all the different fields that I can query.
>
> **[2:24](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=144)** So, I don't have to memorize this.
>
> **[2:26](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=146)** I don't have to open up the docs panel if I don't want to.
>
> **[2:29](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=149)** I am super hooked up by our predictive texts by our IntelliSense here.
>
> **[2:35](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=155)** And now, I can just add these fields.
>
> **[2:38](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=158)** So, again, Ctrl + Space.
>
> **[2:41](https://www.linkedin.com/learning/learning-graphql-2021/adding-variables?u=76281980&t=161)** I can then go down with these arrows and then send the query.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), let (4), this, (1), this. (1), super (1)
> **Env Vars:** json (1), hold (1), closed (1)
> **Definitions:** in other words (2), means that (1)
> **Code Identifiers:** closedlifts (1), liftcount (1)
> **UI Navigation:** dropdown (1), select the (1)
> **CLI Commands:** make (1)
> **Documentation:** the docs (1)
> **Prerequisites:** set up (1)

#### Querying connected types
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=0)** - [Instructor] We've gotten a lot of information about a single type.
>
> **[0:03](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=3)** But part of the power of GraphQL is being able to make connections between different data types.
>
> **[0:10](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=10)** So let me show you what I mean.
>
> **[0:11](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=11)** If we go over here to our allLifts query, there's another one of these fields called trailAccess.
>
> **[0:18](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=18)** So this is going to tell me, based on the lift that I'm on.
>
> **[0:24](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=24)** So I can ride a lift up to the top of the mountain and then I can take a trail down.
>
> **[0:28](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=28)** So this is going to let me know how to do that.
>
> **[0:31](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=31)** I also want to get rid of our status argument here.
>
> **[0:34](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=34)** If I got rid of the query.
>
> **[0:36](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=36)** And now we can see that there's a trailAccess field.
>
> **[0:39](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=39)** This returns an array of objects.
>
> **[0:42](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=42)** All of these objects have all of the fields that are related to the trail.
>
> **[0:46](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=46)** For more on what that trail type is you can always come over to the documentation panel, you can select trailAccess, but you also can search the docs.
>
> **[0:56](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=56)** So if you're like, there's probably a trail in here somewhere, you can click on Trail and that's going to tell you exactly what is here.
>
> **[1:04](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=64)** So this is how we make that connection.
>
> **[1:06](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=66)** We're connecting a lift to a trail by a field.
>
> **[1:09](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=69)** And we're able to query any of the fields that are on that type.
>
> **[1:13](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=73)** So let's say status, and then we'll go ahead and add it.
>
> **[1:16](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=76)** So this is how we make the connection between lifts and trails, but how do we make a connection between trails and lifts?
>
> **[1:23](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=83)** In other words, the other way?
>
> **[1:25](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=85)** So we can actually do that right here.
>
> **[1:27](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=87)** So on line 10, I'm going to open up our list of fields, grab accessedByLifts.
>
> **[1:33](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=93)** This is going to give me information.
>
> **[1:35](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=95)** Okay, if I went up this lift and then I went down this trail, how do I get to these trails by lifts?
>
> **[1:42](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=102)** So I'm going to go ahead and click play.
>
> **[1:44](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=104)** And then we see another array of objects.
>
> **[1:48](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=108)** So this allows us to make these different connections between our data types.
>
> **[1:53](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=113)** These are the main ones for this API.
>
> **[1:55](https://www.linkedin.com/learning/learning-graphql-2021/querying-connected-types?u=76281980&t=115)** We got our lifts and we got our trails.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** let (3), type. (2)
> **Code Identifiers:** trailaccess (3), alllifts (1), accessedbylifts (1)
> **Documentation:** the documentation (1), the docs (1)
> **Env Vars:** api (1)
> **UI Navigation:** click on (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Creating operation names
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=0)** - [Instructor] Let's say that we wanted to add a couple different queries to our query document.
>
> **[0:04](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=4)** I'm going to get rid of all this trail stuff, 'cause really, what I want is I want a different query that's giving me information about all of our trails.
>
> **[0:14](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=14)** So I'll grab name and status here, and then I'll try to send it.
>
> **[0:18](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=18)** As soon as I do, we already noticed the red over here.
>
> **[0:21](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=21)** This faint whisper of red.
>
> **[0:23](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=23)** It's very upset with us.
>
> **[0:25](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=25)** But if we try to send it, it's not going to work either.
>
> **[0:28](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=28)** Because it says this anonymous operation must be the only defined operation.
>
> **[0:34](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=34)** So what the complaint is here is that we've added two queries to our query document and we haven't given these queries a name.
>
> **[0:42](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=42)** These are considered anonymous queries.
>
> **[0:44](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=44)** Think of that like an anonymous function.
>
> **[0:47](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=47)** So if I give this a name, like All Lifts, and I give this a name, like All Trails, this is going to then remove those little red patches, and now, if I click on the dropdown, I can send, I can execute these queries one at a time.
>
> **[1:04](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=64)** So this in the Graph QL query language is called the operation name.
>
> **[1:08](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=68)** An operation name is simply a name that we assigned to the query, and typically, this is not a rule, but a convention, we use Pascal case for this.
>
> **[1:19](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=79)** So a capital A and a capital L.
>
> **[1:22](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=82)** You can call this whatever you want.
>
> **[1:25](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=85)** Doesn't have to be the same as the name of the lifts.
>
> **[1:27](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=87)** You could call it pancakes.
>
> **[1:29](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=89)** Doesn't matter.
>
> **[1:31](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=91)** You can send these one at a time and this will clear that error.
>
> **[1:35](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=95)** So whatever you want to call it is fine, but making sure to give more than one query a name is a good idea.
>
> **[1:42](https://www.linkedin.com/learning/learning-graphql-2021/creating-operation-names?u=76281980&t=102)** And I would say actually, it's a good idea to use these anyway because you're giving a little bit more description about what your query is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1), this. (1)
> **UI Navigation:** click on (1), dropdown (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Mutations and Subscriptions

#### Changing data with mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=0)** - [Instructor] So far, we know that queries get data.
>
> **[0:03](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=3)** But there's another type of GraphQL operation that's very useful called a mutation.
>
> **[0:09](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=9)** Mutations are used whenever we need to change data.
>
> **[0:13](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=13)** So I'm going to create my first mutation here, and it's going to be called setTrailStatus.
>
> **[0:19](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=19)** So if we take a look at the documentation here, and I scroll down to setTrailStatus, this is always taking in the ID and the status and returning a trail.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=29)** So we're setting the desired status for this trail.
>
> **[0:33](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=33)** I can always check the IDs of trails.
>
> **[0:37](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=37)** So let's say we want to, let's see... "Goosebumps" seems like a fun one.
>
> **[0:43](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=43)** And the current status is OPEN.
>
> **[0:45](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=45)** So let's go ahead and close it.
>
> **[0:47](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=47)** It's too windy.
>
> **[0:48](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=48)** We can't have people out there.
>
> **[0:50](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=50)** We have to close it.
>
> **[0:51](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=51)** Let's go ahead and add an ID.
>
> **[0:53](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=53)** The ID is "goosebumps."
>
> **[0:56](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=56)** And the second thing we need to pass is our desired status.
>
> **[1:00](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=60)** So this is going to be OPEN or CLOSED.
>
> **[1:03](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=63)** It's slightly different than the earlier enumeration type we used with OPEN, CLOSED and HOLD.
>
> **[1:09](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=69)** A trail can either be OPEN or CLOSED.
>
> **[1:12](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=72)** So it's open already.
>
> **[1:13](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=73)** Let's close it.
>
> **[1:15](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=75)** Then we know that we're going to get back some fields from the trail.
>
> **[1:19](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=79)** So we can go ahead and add... I don't know, name and status.
>
> **[1:26](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=86)** Okay.
>
> **[1:27](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=87)** So now that we've done this, we can go ahead and click play, and we see our response, name, and CLOSED.
>
> **[1:35](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=95)** And we go back to our data here, and we find goosebumps.
>
> **[1:40](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=100)** We'll see that the status is CLOSED.
>
> **[1:42](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=102)** Very cool.
>
> **[1:43](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=103)** Another way that we could do this, there is a Trail query.
>
> **[1:49](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=109)** And the Trail query starts with a capital T.
>
> **[1:54](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=114)** We will grab the goosebumps.
>
> **[2:00](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=120)** And now we can grab the name and the status, and this will select that individual trail.
>
> **[2:07](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=127)** So however you want to check that is fine.
>
> **[2:10](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=130)** So this is our mutation.
>
> **[2:12](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=132)** We're changing data.
>
> **[2:13](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=133)** Queries get data, mutations change data.
>
> **[2:17](https://www.linkedin.com/learning/learning-graphql-2021/changing-data-with-mutations?u=76281980&t=137)** Both our POST requests that we're sending to our GraphQL API, that's located here, and this will change the status based on whatever arguments we pass in.

> [!info]- Semantic Content
>
> **Env Vars:** closed (5), open (4), hold (1), post (1), api (1)
> **Code Keywords:** let (5), pass (2), this, (2)
> **Code Identifiers:** settrailstatus (2)
> **CLI Commands:** find (1)
> **API Endpoints:** post  (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)

#### Creating GraphQL fragments
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=0)** - [Instructor] Another nice thing to know about the GraphQL query language is that we can take advantage of GraphQL fragments for composition.
>
> **[0:08](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=8)** We're going to write a query for a Lift.
>
> **[0:10](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=10)** We'll take in the id of panorama and we'll get the name and the status.
>
> **[0:20](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=20)** So, we're familiar with this syntax, but let's say I wanted to reuse some fields.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=29)** So, usually at this point in the class, someone asked me, how do I do like a star query?
>
> **[0:36](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=36)** Like give me all the fields please.
>
> **[0:41](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=41)** And so that I would say there is no operation for that, but there's a way that we can do this with a fragment that may be useful.
>
> **[0:50](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=50)** So, I'll show you a couple of uses for it.
>
> **[0:53](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=53)** First thing I'll say, is fragment AllFields, and when I create the fragment, I need to create it on a specific type.
>
> **[1:02](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=62)** So, we couldn't create a fragment of trail and lift fields together, instead I would have to create this with a single fragment on the Lift type.
>
> **[1:12](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=72)** So here, we'll add an id, a name, a status, a capacity, a night, an elevationGain, all these different fields, right?
>
> **[1:22](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=82)** And now what I can do is I can remove name and status from our Lift query, and I can push them in right here.
>
> **[1:30](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=90)** So, I'll use the spread syntax, dot dot dot, and I'll push in AllFields.
>
> **[1:36](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=96)** And this is going to give me everything.
>
> **[1:40](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=100)** What's really cool about this, and the reason I said this was for composition, is let's say I wanted to send a query for all lifts, dot dot dot AllFields.
>
> **[1:51](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=111)** I can send the exact same query and get back the exact same fields.
>
> **[1:55](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=115)** So, the fragment is very useful in a case like this, but I would caution you, that make sure you really need all these fields when you're using them.
>
> **[2:05](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=125)** I would maybe call this LiftDetails instead.
>
> **[2:10](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=130)** LiftDetails, and LiftDetails.
>
> **[2:15](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=135)** And this way, we're still adhering to the principles of GraphQL's declarative query syntax.
>
> **[2:21](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=141)** We want to just ask for the fields we need.
>
> **[2:24](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=144)** We don't want to be grabbing a bunch of extraneous data all the time, but maintaining a fragment is pretty cool.
>
> **[2:31](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=151)** Let's say I don't really care about the elevationGain, or whether or not the lift is open at night, I can get rid of them, I can send the query again, and we're going to see just the fields that I asked for.
>
> **[2:43](https://www.linkedin.com/learning/learning-graphql-2021/creating-graphql-fragments?u=76281980&t=163)** So, this is a GraphQL fragment, a super important syntax when you're designing your queries.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (2), this, (2), class, (1), for. (1)
> **Code Identifiers:** elevationgain (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Working with subscriptions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=0)** - [Instructor] So far, we know that queries get data and mutations change data, but there is even a third type of GraphQL operation called a subscription.
>
> **[0:11](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=11)** A GraphQL subscription works over web sockets and it sets up a listener.
>
> **[0:16](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=16)** So, let me show you how this works.
>
> **[0:18](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=18)** I could create a subscription for liftStatusChange, grab the name and the status.
>
> **[0:24](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=24)** And now I'm going to go ahead and click play.
>
> **[0:28](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=28)** This is going to listen for any data changes in real time.
>
> **[0:31](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=31)** And then if a status has changed over here in another panel, we're going to see all of these comeback in the browser immediately.
>
> **[0:42](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=42)** So again, unlike a query, which we just send the query, we get a response, a subscription, we set up a listener.
>
> **[0:52](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=52)** So, we're listening for any of those changes.
>
> **[0:55](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=55)** As soon as they come in, they will be present here in our user interface.
>
> **[1:00](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=60)** So, this is pretty cool.
>
> **[1:02](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=62)** A subscription sets up kind of that real-time feel in your application.
>
> **[1:07](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=67)** These were first implemented at Facebook and they were used for live likes.
>
> **[1:12](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=72)** When you see those little thumbs up on a post, continuing to go up in real time, those are powered by GraphQL subscriptions.
>
> **[1:21](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=81)** Same goes for those live videos where you see little emoji heads, happy, sad, et cetera, if someone is sharing a video.
>
> **[1:30](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=90)** So, this is a GraphQL subscription.
>
> **[1:32](https://www.linkedin.com/learning/learning-graphql-2021/working-with-subscriptions?u=76281980&t=92)** Queries get data, mutations change data, and subscriptions listen for data changes over a web socket in real time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), interface (1)
> **Code Identifiers:** liftstatuschange (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Sending pet library queries
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980&t=0)** - [Instructor] Now that you've had a chance to explore the query language, it is your turn to try it out.
>
> **[0:05](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980&t=5)** So if you go to [https://pet-library.moonhighway.com](https://pet-library.moonhighway.com), this is going to bring up another playground for you.
>
> **[0:15](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980&t=15)** And here I'd like you to write a query to get all pets with their name, weight, and category.
>
> **[0:21](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980&t=21)** Then you can extend that query.
>
> **[0:22](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980&t=22)** Think about those connected queries we talked about, and you want to extend it to see who has checked out the pet.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980&t=29)** And then finally for extra credit, which will count towards your final GraphQL grade, you can create an account using a mutation.
>
> **[0:37](https://www.linkedin.com/learning/learning-graphql-2021/challenge-sending-pet-library-queries?u=76281980&t=37)** So give it a shot and I'll show you the answer in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** we talked about (1), in the next (1)
> **URLs:** [https://pet-library.moonhighway.com](https://pet-library.moonhighway.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Solution: Pet library query construction
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=0)** - [Instructor] All right, how did it go?
>
> **[0:01](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=1)** Hopefully good.
>
> **[0:04](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=4)** The first thing we wanted to do was to write a query to get all pets with their name, weight and category.
>
> **[0:11](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=11)** So I can send a query for all pets and I'll find name, Control + Space, weights, Control + Space, category.
>
> **[0:21](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=21)** Boom, so we got those, that's good.
>
> **[0:25](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=25)** Then we wanted to extend the query to see who has checked out the pet.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=29)** Now, if you're exploring this for the first time, you can always check out the documentation panel, so let's go ahead and scroll down.
>
> **[0:36](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=36)** We see, oh, this is connecting to a customer, so I probably want to add the inCareOf field.
>
> **[0:44](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=44)** We know that we're making a selection for some fields on that customer, so let me show you this first.
>
> **[0:51](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=51)** If I tried to send just inCareOf, without any of those curly braces, we'd get an error because it says there must be a selection of sub-fields so let's fix it.
>
> **[1:02](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=62)** Open and close those and we'll grab a name.
>
> **[1:05](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=65)** So now we can see who has checked out a pet.
>
> **[1:09](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=69)** And, again, this is live data too, so you may have different folks checking out these pets.
>
> **[1:15](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=75)** Okay.
>
> **[1:16](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=76)** Then, finally, for extra credit, again, no stress, you don't have to do it if you don't want to, but we do have a CreateAccountinput.
>
> **[1:25](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=85)** Now an input type, we haven't talked about yet, is a wrapper around some fields that are sent to a mutation.
>
> **[1:31](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=91)** And it's a good practice to, if you have several fields that you're sending to a mutation, to wrap them in an input type.
>
> **[1:40](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=100)** Again, we'll explore the docs, we'll look at the CreateAccountinput.
>
> **[1:44](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=104)** This object contains a name, username and password, so that's all we need to supply here.
>
> **[1:50](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=110)** So I'll say name, Eve Porcello.
>
> **[1:55](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=115)** Username, we'll say "evetahoe".
>
> **[2:01](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=121)** Password is password.
>
> **[2:05](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=125)** Nobody steal my password, okay.
>
> **[2:07](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=127)** Then we're going to say username and name, and this will create our account, pretty cool.
>
> **[2:16](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=136)** So this is allowing us to send several fields, all together, in this mutation.
>
> **[2:22](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=142)** Now, just to take this even further, we could create a variable here, input, CreateAccountinput, and I know that this is required so I'll add the exclamation mark.
>
> **[2:36](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=156)** Now what we'll do is we'll take this object, and I'm just going to put it on my clipboard, I'm going to Control + X that, and I'll say input.
>
> **[2:46](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=166)** Now we'll mosey down to the Query Variables panel, we need to send this as JSON, and we need to put it on the input key, it's a nested object for a member.
>
> **[2:59](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=179)** And, now that I'm here, I'm getting some red because I need to wrap all of my keys in double quotes, JSON for the win so there we go.
>
> **[3:14](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=194)** Cool, so I'm also going to change my username because it won't let me create a non unique one.
>
> **[3:22](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=202)** So I'll say "evetahoe1", very creative, and now I'll click play and we've created our new account.
>
> **[3:30](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=210)** So a couple ways of getting to the same destination, the input type is going to allow us to wrap all of our input fields in a single object, and then we can use the dollar sign to pass this as a variable.
>
> **[3:49](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=229)** So great job, you killed it, you did great.
>
> **[3:53](https://www.linkedin.com/learning/learning-graphql-2021/solution-pet-library-query-construction?u=76281980&t=233)** We were able to get some data about our pets and also create an account.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), type, (1), type. (1), pass (1)
> **Code Identifiers:** incareof (2)
> **Env Vars:** json (2)
> **Documentation:** the documentation (1), the docs (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)


### 4. Creating a GraphQL Server Schema

#### Introducing the GraphQL schema definition language
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=0)** - [Instructor] So far, we've talked about a couple different pieces of the GraphQL spec.
>
> **[0:04](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=4)** We have talked about the query language, and then we've touched on the schema definition language, which is a language that defines all of our API's types.
>
> **[0:12](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=12)** So, in order to send these queries, we need a well-defined schema.
>
> **[0:16](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=16)** So, let's take a closer look at some of the pieces that make up the schema definition language.
>
> **[0:21](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=21)** First of all, in GraphQL, we have a few different scalar types.
>
> **[0:24](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=24)** In other words, if we're going to return a single value, we can return either an int, a float, a string, a Boolean, or an ID.
>
> **[0:33](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=33)** So, these represent just one little container of data.
>
> **[0:37](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=37)** If a field returns one thing, it's going to return one of these five built-in scalar types.
>
> **[0:44](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=44)** When we set this up in our schema, it'll look like this.
>
> **[0:47](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=47)** We'll define the name of the field, like ID.
>
> **[0:49](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=49)** And then, we'll set that to a value that's being returned.
>
> **[0:52](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=52)** In this case, an ID or, for the name, a string.
>
> **[0:57](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=57)** And then, once we've started to create these different fields, they're grouped into different object types so, for example, if we have a photo, we might have an ID name, URL description, rating, private, all of these fields are going to be available on that photo type.
>
> **[1:15](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=75)** Another really important conversation in GraphQL is nullability.
>
> **[1:19](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=79)** So, nullable versus non-nullable.
>
> **[1:21](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=81)** If we see an exclamation mark that just means that we have to return a value that is not null.
>
> **[1:26](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=86)** And, specifically, we need to return a string.
>
> **[1:29](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=89)** So, here, our name is required, it's non-nullable, and description is nullable.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=94)** So, if we return null for a description, our query will still execute.
>
> **[1:39](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=99)** All of the queries that are part of our API are going to be wrapped in the query type.
>
> **[1:44](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=104)** So, here, we have total users that returns an int, and then any other queries that we have listed here are going to be available at the playground and on this API.
>
> **[1:55](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=115)** Fields can return lists, so let's say we add a user with a field called posted photos.
>
> **[2:01](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=121)** A user might post more than one photo, so we would return a list, we'd know it's a list because we got these square brackets here.
>
> **[2:09](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=129)** And then inside of the brackets, we have the object type that we want to return.
>
> **[2:13](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=133)** When we're talking about nullability for lists, here on the screen, we have the least restrictive to the most restrictive.
>
> **[2:20](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=140)** The first one we have here is a nullable list of nullable values, so any value inside of it can be null as can the array itself.
>
> **[2:30](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=150)** The second option here is that any value inside of this array could be null, but the actual value of photos can't be null.
>
> **[2:39](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=159)** And then finally we have the most restrictive, meaning that no values inside of the array can be null.
>
> **[2:46](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=166)** And the value itself can't be null.
>
> **[2:49](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=169)** Now, this is typically what we use to define a list.
>
> **[2:53](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=173)** And that's because you can also return an empty array.
>
> **[2:56](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=176)** That's not null, so that would be valid.
>
> **[2:59](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=179)** So, that is a quick look at our schema definition language.
>
> **[3:04](https://www.linkedin.com/learning/learning-graphql-2021/introducing-the-graphql-schema-definition-language?u=76281980&t=184)** Of course, I'm going to show you how to actually create your own schema, so we'll get to that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (2), this. (1), case, (1), private (1)
> **Definitions:** is a  (3), in other words (1), means that (1)
> **Env Vars:** api (3), url (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Setting up a GraphQL server with Apollo Server
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=0)** - [Instructor] Now that we have a sense of what is included in the schema definition language, we're going to create our own schema.
>
> **[0:07](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=7)** But to do this, we need to create our first Apollo Server.
>
> **[0:10](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=10)** So, what we're going to do to get started here is literally just start from scratch.
>
> **[0:15](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=15)** So, I'm going to navigate to my desktop, then I'm going to create a folder called ski-day-counter.
>
> **[0:25](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=25)** I'm going to get into that folder and then I'm going to npm init -y, so we'll just set all the defaults, and then the dependencies that I'm going to need to work on this are as follows.
>
> **[0:41](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=41)** We're going to need graphql, we're going to need apollo-server, and we're also going to need nodemon, which will just restart our server anytime we make changes to the schema.
>
> **[0:54](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=54)** Nice.
>
> **[0:55](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=55)** So the next step we want to take here is we want to open this up in our code editor.
>
> **[1:00](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=60)** Within the code editor, we'll create a new file called index.js, which is going to house our schema.
>
> **[1:06](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=66)** So, a couple things we need to get this started is we're going to create our own Apollo Server here.
>
> **[1:12](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=72)** Apollo Server is a node.js implementation of a GraphQL server, so we're going to go ahead and import this from that package.
>
> **[1:22](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=82)** The next thing we're going to do is create our type definitions.
>
> **[1:26](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=86)** So our type definitions, think of this as just being our schema, and the way that we'll often see this done in a node.js project is we'll use this function called gql, gql is a function that comes from the Apollo Server package, and it's going to take our schema string, and it's going to turn it into an abstract syntax.
>
> **[1:49](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=109)** It's going to turn it into an AST, an abstract syntax tree.
>
> **[1:54](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=114)** Now, this is just a fancy way of saying it's going to take a string and it's going to turn it into an object that's a little bit easier to parse.
>
> **[2:02](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=122)** I'm going to leave that here for a second while we also create resolvers.
>
> **[2:08](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=128)** So these resolvers are just functions that are going to return data for the schema.
>
> **[2:15](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=135)** The next thing we'll do is we'll create our instance of the Apollo Server.
>
> **[2:19](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=139)** So I'll say, "new ApolloServer," and what the Apollo Server needs to take in are two things, it needs to take in typeDefs and resolvers.
>
> **[2:31](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=151)** Now, at the moment, we're not going to worry about these resolver functions, because we only want to worry about the schema right now.
>
> **[2:39](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=159)** So instead of passing resolvers into this, we're going to pass in a key called mocks: true, and mocks: true is going to mock data for the schema.
>
> **[2:50](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=170)** So we don't need to worry about wiring up all of our data sources just yet.
>
> **[2:54](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=174)** Instead, we can just worry about defining the schema that will be our API.
>
> **[2:59](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=179)** So finally, we're going to call server.listen.
>
> **[3:03](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=183)** This is going to start our server, and then we're going to create a little console.log message in order to see what port this is running on.
>
> **[3:12](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=192)** So I'll say, "Server running at ${url}."
>
> **[3:19](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=199)** Okay.
>
> **[3:21](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=201)** So here inside of the type definitions, let's create our first schema type.
>
> **[3:26](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=206)** So we're going to create a Query type.
>
> **[3:27](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=207)** Remember, this is the wrapper around all of the queries that are available on the API.
>
> **[3:32](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=212)** And, specifically, I'm going to use totalDays and return an Int.
>
> **[3:37](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=217)** Remember that this means that we should return an int and we can't return null.
>
> **[3:41](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=221)** So once we have this created, I'm going to go to the package.json file.
>
> **[3:46](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=226)** Remember that we've installed Apollo Server, GraphQL and nodemon, so now what we need to do is create a start script, and this start script is just going to run nodemon and, specifically, the index file.
>
> **[3:59](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=239)** So I'm going to just say "nodemon .," and that's going to run the index.
>
> **[4:05](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=245)** Now that I've done this, I can go to the terminal, I can run npm start, and this should run our server at localhost:4000.
>
> **[4:14](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=254)** So once we visit localhost:4000, we're going to see that, "Hey, we got a playground running here."
>
> **[4:20](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=260)** The GraphQL playground has a query called totalDays.
>
> **[4:24](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=264)** And what we can do here is we can send a query for totalDays.
>
> **[4:28](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=268)** So now we see -10, 29, -48.
>
> **[4:33](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=273)** So why is that working like that?
>
> **[4:35](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=275)** Well, the mocks, if we go back to the index, are returning some sort of value for totalDays.
>
> **[4:43](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=283)** This allows us to have some sort of data returned, it allows us to define our queries without having to worry about those data sources just yet.
>
> **[4:52](https://www.linkedin.com/learning/learning-graphql-2021/setting-up-a-graphql-server-with-apollo-server?u=76281980&t=292)** We have created a schema inside of our type definitions, we have set up mocking, and then we have created the server and started it on localhost:4000.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), function (2), abstract (2), type. (2), pass (1)
> **CLI Commands:** npm (2), node (2), make (1)
> **Code Identifiers:** totaldays (4), typedefs (1)
> **File Paths:** node.js (2), index.js (1), package.json (1)
> **URLs:** [localhost:4000](https://localhost:4000) (3)
> **Ports:** :4000 (3)
> **Env Vars:** api (2), ast (1)
> **UI Navigation:** go to (2), navigate to (1)

#### Creating a custom object
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=0)** - [Instructor] So far we have set up our ApolloServer using this type called query, and we have a single query for total days.
>
> **[0:08](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=8)** Now let's define our first object type here.
>
> **[0:12](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=12)** So the API that we're trying to build here, we're trying to build a ski day counter.
>
> **[0:18](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=18)** Think of this as just being an activity counter, where we're going to track the number of days that we ski during a year.
>
> **[0:24](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=24)** Now, if you don't like skiing and you want to say something else running day or programming day or learning GraphQL day or whatever it is, you can add that here.
>
> **[0:34](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=34)** So here on line five, we're going to add a couple of different fields inside of our custom objects.
>
> **[0:40](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=40)** Specifically, we'll add an id, we'll add a date which will be a string.
>
> **[0:45](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=45)** And then we'll add a mountain which will be a string as well.
>
> **[0:49](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=49)** Once I've created this custom object type, I can then add a query for all days.
>
> **[0:54](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=54)** We can return a ski day inside of this array and we're going to make it such that we can't return null inside of the array.
>
> **[1:04](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=64)** And we can't return null as the value of the year, but remember we can always return an empty array.
>
> **[1:09](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=69)** So if we go back to our playground running notice that this has restarted our server using nodemon.
>
> **[1:19](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=79)** And if we look at the documentation panel, we should see that all days is now here.
>
> **[1:23](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=83)** So let's query all days.
>
> **[1:26](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=86)** And again, we don't have any data sources wired up and that's actually good.
>
> **[1:29](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=89)** We're just making sure that this is working as expected.
>
> **[1:33](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=93)** As soon as I do this, we have an array of objects coming back and with the Apollo server mocks, anytime we're returning a list, it's going to return two objects.
>
> **[1:45](https://www.linkedin.com/learning/learning-graphql-2021/creating-a-custom-object?u=76281980&t=105)** Now we see this data being returned and we have values for all of these three fields that are part of the ski day.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type, (1), this, (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Adding an enumeration type
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=0)** - [Instructor] The next thing I want to do is add an enumeration type.
>
> **[0:04](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=4)** The enum type I want to add is for conditions.
>
> **[0:08](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=8)** So conditions are just going to tell us, what was it like to ski on this particular day?
>
> **[0:14](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=14)** There are several types of conditions that you could create, but why don't we use POWDER, a ton of snow, HEAVY, which means that it's a thick, wet, snow, west coast, snow.
>
> **[0:26](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=26)** And then we can add ICE.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=29)** And then I can add THIN, which means you're mostly skiing on rocks and dirt.
>
> **[0:33](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=33)** So we've created the enumeration type.
>
> **[0:35](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=35)** We have set that value to whatever conditions is, and let me fix that typo, conditions.
>
> **[0:42](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=42)** And now what I can do is check this out.
>
> **[0:46](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=46)** We'll see.
>
> **[0:47](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=47)** And I may have to hit a refresh to get the schema back.
>
> **[0:50](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=50)** So I will see conditions.
>
> **[0:54](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=54)** And if I click play, we'll see that.
>
> **[0:55](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=55)** So notice that typo I made before, condition.
>
> **[0:59](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=59)** So let's hit save on that.
>
> **[1:02](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=62)** We'll change that to conditions.
>
> **[1:04](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=64)** And then we should see that here.
>
> **[1:07](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=67)** So you may have to hit refresh as you're adding to your schema, but notice that if you make a change of any sort, you still will be able to get the right data back.
>
> **[1:17](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=77)** But in order to see it pop up in the documentation, you may have to hit that refresh.
>
> **[1:23](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=83)** So that's an enumeration type.
>
> **[1:24](https://www.linkedin.com/learning/learning-graphql-2021/adding-an-enumeration-type?u=76281980&t=84)** We've added this to the schema and we've returned it from a value.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (3), let (2), enum (1)
> **Env Vars:** powder (1), heavy (1), ice (1), thin (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 5. Schema Enhancements

#### Working with mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=0)** - [Instructor] Just like we have a query type for all of our get operations, the operations that get data, we should create a mutation type that has all of our verbs, all of our actions that are going to change data.
>
> **[0:14](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=14)** So I'll create a removeDay mutation.
>
> **[0:16](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=16)** It should take in the ID of the day that we want to remove.
>
> **[0:21](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=21)** And then I'll return from this a SkiDay.
>
> **[0:23](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=23)** Remember, we can return anything from a mutation, but we have to return something, could be a Boolean, could be an object.
>
> **[0:30](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=30)** In this case, we'll just return the entire SkiDay object so we can have access to all of those fields.
>
> **[0:36](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=36)** Now, if we go back to our playground, we should see removeDay has been added here.
>
> **[0:43](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=43)** Let's go ahead and replace this with a mutation called removeDay.
>
> **[0:48](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=48)** I'll pass in an ID.
>
> **[0:49](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=49)** It doesn't matter what the ID is for the moment.
>
> **[0:52](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=52)** And then this will return ID, mountain, whatever.
>
> **[0:58](https://www.linkedin.com/learning/learning-graphql-2021/working-with-mutations?u=76281980&t=58)** And again, this is just returning those mocked values so that we can test out these queries.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), let (1), pass (1)
> **Code Identifiers:** removeday (3)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Sending input types to mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=0)** - [Instructor] Let's go ahead and add one more of these.
>
> **[0:03](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=3)** And this is going to be called addDay.
>
> **[0:06](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=6)** Now the addDay mutation, I want to send those values that are necessary like date and mountain and conditions and things like that.
>
> **[0:15](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=15)** So this is a really good opportunity for me to use our first input type.
>
> **[0:20](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=20)** I'm going to call this AddDayInput, and the reason I'm calling it this is because it's often nice to associate the input type, specifically with the name of the mutation.
>
> **[0:31](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=31)** So that's what that's all about.
>
> **[0:34](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=34)** And from this, I'm going to return a SkiDay.
>
> **[0:38](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=38)** So once I've created that, I need to create the input type as well.
>
> **[0:42](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=42)** The input is called AddDayInput, and the AddDayInput wraps around the date, which is a string.
>
> **[0:52](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=52)** It wraps around the mountain, which is also a string, and then the conditions which we'll make not required.
>
> **[1:01](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=61)** Perfect.
>
> **[1:03](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=63)** So once I've done this, I go back over to my playground.
>
> **[1:07](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=67)** I'm going to, instead of sending the removeDay mutation, I'm going to say addDay.
>
> **[1:12](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=72)** Remember, we're going to send the input type, which is an object.
>
> **[1:15](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=75)** The input has a date, so one 1/2/2025.
>
> **[1:26](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=86)** We'll say mountain, Alpine Meadows, and conditions on that fateful day were icy.
>
> **[1:42](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=102)** So now, once I've added those fields to the input, I need to return something.
>
> **[1:48](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=108)** So I'll just grab the date from this.
>
> **[1:50](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=110)** And when I send that, it's going to return my string.
>
> **[1:53](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=113)** So again, haven't wired up the data sources yet, so you won't see that actual value, but you'll know that this mutation will work, and this is a nice thing to be able to provide your front-end developers, even if the data sources aren't wired, you can still add a day.
>
> **[2:09](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=129)** You can still create the mutation that's going to work with their user interface.
>
> **[2:15](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=135)** So that's that.
>
> **[2:16](https://www.linkedin.com/learning/learning-graphql-2021/sending-input-types-to-mutations?u=76281980&t=136)** We've created a few different mutations; adding a day, removing a day, and taking in an input type for those values that we need every time a new day is added.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (2), this, (2), let (1), type. (1), this. (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Code Identifiers:** addday (3), removeday (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Building a custom scalar
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=0)** - [Instructor] Might be noticing that we're adding a string every time we're dealing with a date.
>
> **[0:06](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=6)** Now a date is a really good opportunity to use one of those custom scalars, and a custom scalar is, again, a customized value that's going to be used for a single value.
>
> **[0:20](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=20)** Instead of just returning a string, which is kind of an open-ended type, we can say, hey, the date should actually have some semantic meaning to it.
>
> **[0:28](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=28)** So I want to return a date here, and I want to send a date here.
>
> **[0:34](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=34)** Now you might be wondering, how do I define what a date actually is?
>
> **[0:38](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=38)** And that's something you're going to do in your resolver functions.
>
> **[0:42](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=42)** You don't need to worry about that at this moment when you're creating a schema.
>
> **[0:46](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=46)** Instead, you can just think about this as being a customized container for a date value, and then you can define this later using your resolver functions.
>
> **[0:56](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=56)** So that's that.
>
> **[0:57](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=57)** We're going to create that first, and then if we take a look at this over here, we're going to see in the documentation panel that this date is being returned and this is a custom scalar.
>
> **[1:09](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=69)** So you can think about opportunities to use these all through your schemas.
>
> **[1:13](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=73)** Typically, I put these at the top of the schema so that they don't get shuffled out of my sight line as I'm developing a schema.
>
> **[1:21](https://www.linkedin.com/learning/learning-graphql-2021/building-a-custom-scalar?u=76281980&t=81)** But like I mentioned before, you'll see these for email addresses, you'll see these for URLs, all sorts of different things, but you can use these in cases where you want to be a little bit more specific than a string.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** type, (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Returning a custom object
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=0)** - [Instructor] Currently, when we send the removeDay mutation, we're returning an entire SkiDay.
>
> **[0:05](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=5)** This will give us access to all of those fields that are on the SkiDay, but there's a pretty cool thing we can do to make this even better.
>
> **[0:14](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=14)** We're going to create a custom type called RemoveDayPayload.
>
> **[0:19](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=19)** Just like our input type, we're associating this with a specific mutation by calling it removeDay.
>
> **[0:27](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=27)** Remember, that a schema is all about communication, so it's really important that we use the proper names when defining this stuff.
>
> **[0:36](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=36)** So what is the RemoveDayPayload?
>
> **[0:38](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=38)** Well, we're going to add a little bit of metadata onto this type so that we can return it from this mutation.
>
> **[0:46](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=46)** So let me change this first.
>
> **[0:48](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=48)** There we go.
>
> **[0:49](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=49)** And then on line 32 is where I'm going to add the day so I can return all of those fields that I like from the SkiDay, but I'm also going to say removed: Boolean, so this will let us know true or false if it has been removed.
>
> **[1:07](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=67)** I'm also going to add a field called totalBefore.
>
> **[1:10](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=70)** So before I remove the day, how many were there?
>
> **[1:13](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=73)** And then total after.
>
> **[1:15](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=75)** So this is going to help me calculate how many days before and after this operation was sent.
>
> **[1:21](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=81)** So now, again, I can send this mutation.
>
> **[1:24](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=84)** The mutation is called removeDay.
>
> **[1:28](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=88)** It takes in the ID of the day we want to remove.
>
> **[1:31](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=91)** You can just put whatever you want in there.
>
> **[1:34](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=94)** And now, check it out.
>
> **[1:35](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=95)** We have the day.
>
> **[1:36](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=96)** So here, we have access on the object to the date, the mountain, all that stuff.
>
> **[1:42](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=102)** So we're getting a little bit more information for this.
>
> **[1:46](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=106)** So something I'm noticing here is if I try to send this date fields for the type date, we're getting this error.
>
> **[1:54](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=114)** It says that there's no mock defined for this.
>
> **[1:57](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=117)** So why don't we do that in the next video.
>
> **[1:59](https://www.linkedin.com/learning/learning-graphql-2021/returning-a-custom-object?u=76281980&t=119)** We're going to take a look at how do we create a custom mock so that we can avoid errors like this.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), let (2), type, (1)
> **Code Identifiers:** removeday (3), totalbefore (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Customizing schema mocks with Apollo Server
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=0)** - [Instructor] We just ran into this error where if I ask for the date field, it's giving us this no mock defined for type date error.
>
> **[0:10](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=10)** So the way that we can fix this is we need to create some custom mocks for the date field.
>
> **[0:16](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=16)** Right now, we're just using the defaults, which return kind of dummy values for these fields.
>
> **[0:22](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=22)** So what I'll do is I'll add a value for mocks.
>
> **[0:25](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=25)** That's going to be an object that defines all of these various types.
>
> **[0:29](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=29)** So here online 45, I'm going to create a date mock.
>
> **[0:33](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=33)** And again, think of this as just being a function that's going to return some sort of value for a date.
>
> **[0:40](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=40)** So it's going to look like this.
>
> **[0:41](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=41)** I'm going to say 1/2/2025.
>
> **[0:47](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=47)** Now, instead of saying mocks true and using the defaults, we're going to just send mocks in.
>
> **[0:54](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=54)** If we go back to the playground and try to send this again, it's always going to return this value for a date.
>
> **[1:00](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=60)** Now, of course, you can do this for different types too.
>
> **[1:03](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=63)** Let's say for a string, you want to return cool data.
>
> **[1:10](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=70)** Once you set this up and send that again, anytime we're asking for a string, you're going to get that set string back.
>
> **[1:18](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=78)** Another thing we noticed, and let's go ahead and add our query back.
>
> **[1:23](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=83)** So our query for alldays, specifically, we had date, mountain, let's say conditions.
>
> **[1:33](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=93)** Now, this is just returning two values, two objects every time I send a query that returns a list.
>
> **[1:42](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=102)** And that's because that's just the default.
>
> **[1:44](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=104)** We can pull in an instance of MockList from Apollo Server.
>
> **[1:49](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=109)** And any time we're sending a query for alldays, it's going to look like this.
>
> **[1:53](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=113)** So remember, we're returning an object here.
>
> **[1:56](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=116)** So you need to point our little arrow function at a set of parentheses that wrap around our object.
>
> **[2:03](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=123)** Then we're going to say alldays.
>
> **[2:08](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=128)** This will be another function that we defined, but this time, we're going to say new MockList.
>
> **[2:14](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=134)** And we'll pass it a value of eight.
>
> **[2:17](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=137)** Back to our playground.
>
> **[2:20](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=140)** Let's send this again.
>
> **[2:21](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=141)** And we'll see we have eight values being returned.
>
> **[2:23](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=143)** Pretty cool.
>
> **[2:24](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=144)** So it's always going to return two as a default.
>
> **[2:27](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=147)** If I use a mock list and pass it a single value, it'll always return that value.
>
> **[2:33](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=153)** You can also do this.
>
> **[2:35](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=155)** We'll pass it an array where we say between one and 15.
>
> **[2:40](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=160)** This will return a random number between one and 15.
>
> **[2:45](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=165)** So this time, there's a bunch. (laughs) If I say between one and five, this will generate one of those random values as well.
>
> **[2:55](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=175)** Here, we got one, two, three, four.
>
> **[3:00](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=180)** So there's a lot of flexibility we can find with mocking.
>
> **[3:02](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=182)** You can mock different types.
>
> **[3:04](https://www.linkedin.com/learning/learning-graphql-2021/customizing-schema-mocks-with-apollo-server?u=76281980&t=184)** And you can mock different queries to create your own custom mocking behavior when you're developing your schema.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), this. (3), pass (3), default. (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Creating subscriptions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=0)** - [Instructor] The type that we want to represent in the schema is the subscription.
>
> **[0:04](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=4)** So let's go ahead and add the subscription type.
>
> **[0:07](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=7)** Remember, just like the mutation and the query, we're going to wrap any subscriptions that are available on this API here, and let's just call this newDay and it should return a SkiDay.
>
> **[0:18](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=18)** There we go.
>
> **[0:20](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=20)** Once I've added that I can go back and I can find that here.
>
> **[0:26](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=26)** So we'll replace the query with the subscription.
>
> **[0:31](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=31)** The newDay returns the SkiDay so we have access to all of those fields.
>
> **[0:36](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=36)** Once I hit play, it'll say subscription field must return Iterable.
>
> **[0:41](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=41)** That's fine.
>
> **[0:42](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=42)** We haven't set up any mocking for the subscription, but we still have a container for it.
>
> **[0:47](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=47)** So that's what a subscription type looks like.
>
> **[0:50](https://www.linkedin.com/learning/learning-graphql-2021/creating-subscriptions?u=76281980&t=50)** It looks just like a mutation or a query.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (1)
> **Code Identifiers:** newday (2)
> **Analogies:** just like (2)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Writing schema documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=0)** - [Instructor] One of the coolest things we can do with our schema and one of the kindest things we can do for others who are using our schema, including ourselves, is we can add documentation.
>
> **[0:12](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=12)** So let's say our schema is in a space where we feel like it's really solid and it's ready to go.
>
> **[0:18](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=18)** What I can do is I can start to add documentation to each one of our fields and each one of our types.
>
> **[0:25](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=25)** So let me show you what I mean by that by documenting the ski day.
>
> **[0:30](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=30)** We're going to set up any documentation with three double quotes, so open three, close three double quotes, and then we're going to add documentation for the ski day.
>
> **[0:43](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=43)** So I'll say an object that describes the characteristics of a ski day.
>
> **[0:52](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=52)** Then we can document each individual field with just a set of double quotes.
>
> **[0:57](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=57)** So I'll say a ski day's unique identifier.
>
> **[1:04](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=64)** I can say the date that a ski day occurred.
>
> **[1:18](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=78)** I'll say the location where a ski day occurred.
>
> **[1:25](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=85)** And then the shape that the snow was in when this ski day happened.
>
> **[1:38](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=98)** Now that I've added these to the schema, I can check this out in the playground.
>
> **[1:43](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=103)** So if I open the documentation panel, I select this all ski day.
>
> **[1:47](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=107)** Let's check it out.
>
> **[1:48](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=108)** Type details: An object that describes the characteristics of a ski day.
>
> **[1:52](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=112)** Each one of these individual fields will have that as well.
>
> **[1:56](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=116)** I've said it before. I'll say it again and again and again.
>
> **[2:00](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=120)** A schema is all about communication.
>
> **[2:03](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=123)** So in addition to naming your fields really well, in addition to creating these nice data relationships, we're going to want to take the final step of documenting the schema just so that there's a lot of clarity around what these types are and what your intentions are for them.
>
> **[2:25](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=145)** So I definitely recommend taking this step.
>
> **[2:27](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=147)** It's an extra step.
>
> **[2:28](https://www.linkedin.com/learning/learning-graphql-2021/writing-schema-documentation?u=76281980&t=148)** It's one that should probably happen after you're pretty solid on what the schema entails, but I would recommend doing this for yourself and for other consumers of your API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** api (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980&t=0)** - [Instructor] Now that you've been introduced to GraphQL, there are many different routes that you can take to use it in your own projects.
>
> **[0:07](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980&t=7)** For a look at all of the different libraries, check out [graphql.org/code](https://graphql.org/code).
>
> **[0:11](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980&t=11)** Here you'll find different technologies and tools that you can use to build your own projects.
>
> **[0:17](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980&t=17)** I'd highly recommend the Apollo Stack, as well as Hasura, Prisma, and AWS AppSync.
>
> **[0:24](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980&t=24)** From here, the possibilities are numerous, but I hope this gave you a good first look at GraphQL and how it's used.
>
> **[0:30](https://www.linkedin.com/learning/learning-graphql-2021/next-steps?u=76281980&t=30)** Keep me posted on what you build.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), aws (1)
> **URLs:** [graphql.org](https://graphql.org) (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)


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
