---
type: course
slug: learning-mongodb-17360744
url: "https://www.linkedin.com/learning/learning-mongodb-17360744"
duration_minutes: 172
duration: 2h 52m
level: Beginner
updated: 12/16/2022
learners: 5271
skills:
  - MongoDB
exercise_files: true
github: "https://github.com/LinkedInLearning/introduction-to-mongodb-4315215/codespaces"
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/mongodb
status: not-started
created: 2026-04-17
---

# Learning MongoDB

> Excelling in an ever-changing software development world requires true "full stack" experience. Knowledge of nonrelational databases, in particular, adds exciting new capabilities and features that make everyday development easier, more streamlined, and vastly more scalable. This course provides an introduction on how to use MongoDB, one of the most popular nonrelational databases in the world. Di

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744) | 2h 52m | Beginner | 5K learners

## Instructor

- [[Justin Jenkins]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/introduction-to-mongodb-4315215/codespaces)

## Skills Covered

- MongoDB

## Table of Contents

### Introduction

#### Modern database and application design with MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/modern-database-and-application-design-with-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/modern-database-and-application-design-with-mongodb?u=76281980&t=1)** - [Justin Jenkins] Hi, I'm Justin Jenkins, and I've been working in MongoDB for over 10 years, both as a full-stack developer and administrator, as well as an occasional conference speaker and advocate.
>
> **[0:11](https://www.linkedin.com/learning/learning-mongodb-17360744/modern-database-and-application-design-with-mongodb?u=76281980&t=11)** One of the coolest things about MongoDB, beyond its blazing performance, is the modern and flexible JSON inspired document model.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/modern-database-and-application-design-with-mongodb?u=76281980&t=19)** Imagine just being able to store your data the way your application already understands it.
>
> **[0:23](https://www.linkedin.com/learning/learning-mongodb-17360744/modern-database-and-application-design-with-mongodb?u=76281980&t=23)** In strings, arrays or objects, or even objects inside objects, all backed up by a powerful and easy to use JavaScript inspired query language.
>
> **[0:34](https://www.linkedin.com/learning/learning-mongodb-17360744/modern-database-and-application-design-with-mongodb?u=76281980&t=34)** We're going to go well beyond dusty old tables in SQL here.
>
> **[0:38](https://www.linkedin.com/learning/learning-mongodb-17360744/modern-database-and-application-design-with-mongodb?u=76281980&t=38)** Join me for this course on LinkedIn learning, where I'll tackle the basics of MongoDB.
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/modern-database-and-application-design-with-mongodb?u=76281980&t=43)** From queries, to data modeling, to administration, and even interacting with MongoDB from some of those popular program languages.

> [!info]- Semantic Content
>
> **Env Vars:** json (1), sql (1)
> **Analogies:** imagine (1)
> **Speakers:** - [justin (1)


### 1. Getting Started

#### Why MongoDB?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=0)** - [Instructor] Imagine this scenario.
>
> **[0:03](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=3)** You just got a new job.
>
> **[0:05](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=5)** You've been hired to design and build a brand new recipe site, because there aren't enough of those already.
>
> **[0:11](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=11)** You show up to first day of work, and to your first meeting.
>
> **[0:15](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=15)** Your two new bosses.
>
> **[0:17](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=17)** Because of course, start enthusiastically drawing his and her visions for the site on a whiteboard, spanning the wall of a giant conference room, looking over downtown.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=28)** Boss one says, this site needs to be fast and scale.
>
> **[0:32](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=32)** And Boss two says, we need to make sure we have user comments.
>
> **[0:37](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=37)** And we need to be able to convert the recipes between imperial and metric.
>
> **[0:41](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=41)** We're going global.
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=43)** Don't forget about likes.
>
> **[0:44](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=44)** Oh and user ratings for the recipes.
>
> **[0:48](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=48)** We need a quick meal section.
>
> **[0:50](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=50)** And we need to make sure, we have really easy way to tag these recipes.
>
> **[0:54](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=54)** And organize by dinner and breakfast.
>
> **[0:57](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=57)** We're going to need a JSON API.
>
> **[1:00](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=60)** Don't forget, we're going to hire five more devs.
>
> **[1:02](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=62)** They need to be able to onboard quickly.
>
> **[1:05](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=65)** Also, I want to make sure, we can easily find any Polish recipes.
>
> **[1:08](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=68)** We're going global.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=70)** Your head is spinning.
>
> **[1:12](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=72)** All these features.
>
> **[1:14](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=74)** It's going to take forever, just to come up with database structure to organize this.
>
> **[1:18](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=78)** So many tables, so much joining, and it has to be fast.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=83)** You're starting to second guess your decision to take this job.
>
> **[1:26](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=86)** And it's only just past noon.
>
> **[1:29](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=89)** But then the tacos arrive.
>
> **[1:31](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=91)** Well, at least we have tacos.
>
> **[1:34](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=94)** But what if things didn't have to be so complicated?
>
> **[1:37](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=97)** What if we could do all these things in a simpler way, and make it fast?
>
> **[1:41](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=101)** What if instead of designing complicated architecture of tables, we could use rich documents?
>
> **[1:49](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=109)** MongoDB helps us do this with this document model.
>
> **[1:53](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=113)** We can store things more naturally, in a format that fits nicely into modern applications.
>
> **[1:58](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=118)** Oh, and it's fast too.
>
> **[2:01](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=121)** With MongoDB, we can take care of almost, all the features the bosses requested in one single document.
>
> **[2:08](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=128)** Example, we could take our title, and a description, and a array of user comments, and an array of ingredients, where we can break it out by quantity and amount in unit, and an array of likes with user IDs, and an array of tags, and even a type field.
>
> **[2:27](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=147)** We're going to be learning all about how documents work, how to querying MongoDB?
>
> **[2:33](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=153)** How to design your database, code against it, and how to administer and scale it?
>
> **[2:38](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=158)** For this course, we'll be working with the local installation of MongoDB, but we will touch on how things work in production.
>
> **[2:45](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=165)** So before we dive into working on MongoDB proper, in the next two videos I'll walk you through, getting MongoDB set up on a local machine for Windows and Mac.
>
> **[2:55](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=175)** Get ready, it's going to be a fun ride.
>
> **[2:57](https://www.linkedin.com/learning/learning-mongodb-17360744/why-mongodb?u=76281980&t=177)** Oh, and there will be tacos.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Env Vars:** json (1), api (1)
> **Best Practices:** don't forget (2)
> **Code Keywords:** this. (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### MongoDB vs. relational databases
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=0)** - [Instructor] Throughout this course, we'll be delving into many aspects of how MongoDB works and how it differs from more traditional or relational databases.
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=9)** From a high level, a database is essentially an organized collection of data, and more complex databases have their own formal design and data modeling standards.
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=20)** MongoDB falls into a broader category of databases referred to as NoSQL, where more traditional databases use SQL.
>
> **[0:30](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=30)** Both types of databases are true databases and, in fact, share many concepts.
>
> **[0:35](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=35)** Both can be run in most major operating systems, and many organizations use more than one type of database, as different database types may be better suited for different use cases.
>
> **[0:48](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=48)** What differs between your relational database in MongoDB comes down to two major aspects.
>
> **[0:55](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=55)** How the data is queried, ie, reading and writing to and from the database, and how the data is structured.
>
> **[1:03](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=63)** So let's start off with a brief overview of relational databases and how they work.
>
> **[1:08](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=68)** While the concepts were developed decades earlier, relational databases first became popular in the 1980s.
>
> **[1:15](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=75)** Ones commonly used today are Oracle, Microsoft SQL Server, My SQL, and its variants.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=83)** They stored their data in rows with a varying number of columns all within tables.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=90)** These tables generally have some sort of relation.
>
> **[1:33](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=93)** Think like a team and its players.
>
> **[1:35](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=95)** One table could hold the data for the players, like their names, position, et cetera, and another table could store the information about the teams: the team's name, their stadium, et cetera.
>
> **[1:49](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=109)** To get the data into or out of these tables, relational databases use a structured query language, or SQL for short.
>
> **[1:58](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=118)** For example, to get all the information about a player with a last name Pulisic, you could do a query like this: Select, asterisks, or more commonly star, meaning all columns, from the table players, where the last name equals Pulisic.
>
> **[2:15](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=135)** Sometimes that is enough to get the data you need, but more often, you'll need data from multiple tables brought together or joined.
>
> **[2:23](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=143)** That is where relations come in.
>
> **[2:26](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=146)** Since more than one player is on a single team, there will be multiple player rows in the player's table, and one team row in the team's table.
>
> **[2:37](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=157)** You can join these two tables together based on that relationship, ie, the relationship between the players and their team.
>
> **[2:46](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=166)** MongoDB, on the other hand, is what we referred to earlier as a NoSQL database.
>
> **[2:52](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=172)** NoSQL databases started to be developed in the 2000s, and some popular types are MongoDB, Cassandra, CouchDB, Redis, Memcache, and DynamoDB.
>
> **[3:04](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=184)** They use many different NoSQL methods to query their data, including, in the case of MongoDB, JavaScript, or even HTTP itself for other databases.
>
> **[3:15](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=195)** In their most basic form, like DynamoDB, they are key value stores, but they can also be graph or object databases, or again, in the case of MongoDB, a document store.
>
> **[3:27](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=207)** While we'll dive much deeper into this later, documents are a very flexible and powerful way to store data and have many advantages over tables.
>
> **[3:35](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=215)** For example, instead of storing our data in a lot of different tables and joining it all back together, we could have a single team document that has the name of the team, their stadium, and then an array of player objects, which are also documents themselves, with each player's name, their number, and their position, and maybe even an array of the schedule of their games.
>
> **[3:58](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=238)** The teams can then live together in a collection with other teams.
>
> **[4:03](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=243)** To query the data, we use adjacent like syntax to find the team document with the name Seattle Sounders, for example here.
>
> **[4:12](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=252)** Due to these differences, there are many advantages of using MongoDB for your next project, and some disadvantages, but some of the advantages include, a much more flexible, schema-less storage format, high speed and easy scaling, and of course, much more we'll talk about in this course.
>
> **[4:30](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-vs-relational-databases?u=76281980&t=270)** Next, we're going to talk about using the git repo as associated with this course.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), http (1)
> **Code Keywords:** let (1), this: (1), include, (1)
> **Analogies:** for example (3)
> **CLI Commands:** find (1), git (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files for this course
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/using-the-exercise-files-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/using-the-exercise-files-for-this-course?u=76281980&t=0)** - [Instructor] This course has an accompanying GitHub repo, which will have some useful notes in this lessons folder, for example, as well as some other things I'll describe throughout the course.
>
> **[0:10](https://www.linkedin.com/learning/learning-mongodb-17360744/using-the-exercise-files-for-this-course?u=76281980&t=10)** By default, you can use this embedded inside a code space, and that's what I'd suggest.
>
> **[0:15](https://www.linkedin.com/learning/learning-mongodb-17360744/using-the-exercise-files-for-this-course?u=76281980&t=15)** However, if you'd like to set up everything locally, you can do that as well, by clicking this local option and figure out how the best way to clone this repository to your local machine is.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Getting started with GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=0)** - [Instructor] Along with the Git repo, there's also a customized GitHub codespace that you can use to follow along with nearly this entire course.
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=7)** Within the codespace, MongoDB will be automatically set up for you and you'll have access to query the database, create or import your own data and generally just mess around without installing anything on your local machine and all within the browser.
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=20)** To use the codespace, start at the course's repo and press the green code button and then codespaces.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=27)** You should see a local option and a codespaces option.
>
> **[0:30](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=30)** I already have a codespace created, but I'll create one from scratch, just so you can see it working.
>
> **[0:36](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=36)** It will be defaulted to two cores and four gigs of ram, which is plenty for this course to use.
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=43)** That should launch up a new window and start setting up your codespace.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=47)** Once the codespace is started up, which may take a few minutes the first time, as we're installing real copies of MongoDB, as well as full support for PHP, Node, Python and Go.
>
> **[0:59](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=59)** With the codespace completed and opened, you'll see some of the same folder structure as in the repo itself, because it is a repo itself.
>
> **[1:08](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=68)** There's a collections folder that has some of our example data.
>
> **[1:11](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=71)** Except for here, I've automatically imported all this example data for you, so you don't need to do anything.
>
> **[1:17](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=77)** Additionally, there's a lessons folder with each lesson and any files that go along with it.
>
> **[1:22](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=82)** For example, some of the programming lessons we'll get to later each have their own folder with code you can see live and edit in your browser.
>
> **[1:38](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=98)** This codespace is essentially a full version of Visual Studio Code running in the browser and all your changes are saved to the cloud.
>
> **[1:46](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=106)** We've also installed the official MongoDB extension for Visual Studio Code, which will let us automatically connect to the database, too.
>
> **[1:55](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=115)** Which we can do by clicking the leaf symbol on the side here from MongoDB, and then click this open form and we can leave all these settings defaulted, because we're going to be connecting to this codespaces local host on this port.
>
> **[2:10](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=130)** And when we connect, we'll see over the left here some of our example data already imported into the database and we can click on them and see, inside our editor, some of our documents.
>
> **[2:23](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=143)** A lot more on this later.
>
> **[2:29](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=149)** You can also use a terminal.
>
> **[2:31](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=151)** You can go over here to this menu and find terminal and open a new terminal.
>
> **[2:37](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=157)** I've already installed Mongosh, which is the MongoDB shell, so you can simply type Mongosh in here and it will connect to your local copy running inside here.
>
> **[2:49](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=169)** So we can say, show DBS to list our databases.
>
> **[2:53](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=173)** You can see there's a list of databases here, that corresponds to the plugins version, over here.
>
> **[3:02](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=182)** While I'd still recommend you install a local copy of MongoDB, you can use this codespace instead or along with your setup to make things as seamless and easy as possible.
>
> **[3:12](https://www.linkedin.com/learning/learning-mongodb-17360744/getting-started-with-github-codespaces?u=76281980&t=192)** Next, we'll talk about how to install MongoDB locally on your machine and your specific operating system.

> [!info]- Semantic Content
>
> **CLI Commands:** git (1), php (1), node (1), python (1), find (1)
> **Tools:** terminal (3), visual studio (2), github (1)
> **Prerequisites:** install (2), set up (1), setup (1)
> **Env Vars:** php (1), dbs (1)
> **Code Keywords:** let (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Install MongoDB on Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=0)** - [Instructor] Okay, let's get started.
>
> **[0:02](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=2)** First thing we're going to want to do is go to the MongoDB website, and look for the MongoDB Community Server download.
>
> **[0:08](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=8)** I'm already here in the download page.
>
> **[0:10](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=10)** You may need to browse through this menu here to find the community server.
>
> **[0:14](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=14)** We're going to look for the MSI package.
>
> **[0:18](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=18)** There are some other options here, but this will be the easiest way to install on Windows.
>
> **[0:21](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=21)** The current version is 6.0, but this course is generally compatible all the way down to MongoDB 4.2.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=28)** So we're going to go ahead and download this package here.
>
> **[0:32](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=32)** Once that's done downloading, we'll get the wizard to install MongoDB, and we'll go ahead and click next and accept the license agreement.
>
> **[0:39](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=39)** I'm sure you'll read the entire thing.
>
> **[0:42](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=42)** We're going to just accept the regular default here, so we're going to do a complete install, and we're going to install MongoDB as a service so that anytime we reboot our computer, MongoDB will already be started up for us.
>
> **[0:55](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=55)** We're going to pick the default location for the data files as well as the log files.
>
> **[0:59](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=59)** We'll come back to that at a later point.
>
> **[1:02](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=62)** We'll keep continuing through the wizard.
>
> **[1:05](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=65)** We're going to install MongoDB Compass, which is recommended here.
>
> **[1:07](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=67)** It's a graphical interface for MongoDB and the easiest way to do things in Windows.
>
> **[1:14](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=74)** We'll let this run.
>
> **[1:16](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=76)** At some point in your install, you may see a warning like this depending on your computer set up.
>
> **[1:21](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=81)** You can just say yes.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=83)** Again, this is another warning letting you know that the services may or may not be running exactly the right way.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=90)** You may need to reboot later.
>
> **[1:32](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=92)** It'll be depending on your system setup.
>
> **[1:36](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=96)** All right.
>
> **[1:37](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=97)** That looks like it's all finished up.
>
> **[1:38](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=98)** By default, depending on the settings, it may have launched MongoDB Compass for you automatically as you've seen here.
>
> **[1:44](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=104)** So go ahead and finish this.
>
> **[1:47](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=107)** And it'll tell us you may need to restart.
>
> **[1:49](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=109)** I don't need to right now, so I'll just say no, but you can go ahead and do that.
>
> **[1:53](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=113)** Close out these welcome messages.
>
> **[1:56](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=116)** And now we can connect directly to MongoDB to see if everything has been set up correctly.
>
> **[2:02](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=122)** This is a default connection string and that's where everything is installed automatically.
>
> **[2:08](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=128)** Press Connect, and we'll see we do have some databases over here.
>
> **[2:13](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=133)** Throughout the course, you'll see me doing most things on a command line or in a terminal using a mongo shell.
>
> **[2:19](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=139)** One of the easiest ways to get this same functionality in Windows is going down here to the bottom left and click the MONGO SH.
>
> **[2:28](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=148)** This will launch a mongo shell for us, and we can do things like show DBS, and it'll show us our databases here, which will be the same in the interface right here.
>
> **[2:42](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=162)** So anytime you see me running in a terminal, you can run it right here.
>
> **[2:46](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=166)** You can also separately download the shell from the same MongoDB website.
>
> **[2:51](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=171)** This used to be built together with MongoDB, but it's no longer there.
>
> **[2:55](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=175)** Next, let's take a quick look at where things were installed for this.
>
> **[2:59](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=179)** We can go to our explorer and find the program files in MongoDB, and you'll see a server directory here.
>
> **[3:08](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=188)** And whatever version you installed, most likely 6.0, you'll see the data directory we talked about earlier.
>
> **[3:15](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=195)** This is where all the data files are for your database, and also a log directory, and a bin directory.
>
> **[3:26](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=206)** Inside of the bin directory, it has the actual MongoDB server, which is mongod here.
>
> **[3:32](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=212)** Again, switching back to MongoDB Compass and the shell.
>
> **[3:36](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=216)** You'll notice these are just some default databases.
>
> **[3:38](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=218)** Nothing much else is going on here.
>
> **[3:40](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=220)** That's 'cause we haven't imported any data.
>
> **[3:42](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=222)** To do that, we'll need the MongoDB database tools.
>
> **[3:46](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=226)** We'll be handling that in the next video.
>
> **[3:48](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=228)** On the Windows operating system, when we want to install the MongoDB database tools, we'll go to the same website, and go over here to Tools, and click on Download Tools, and we'll see a number of different tools available.
>
> **[4:03](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=243)** We have MongoDB Compass, which we already downloaded and installed.
>
> **[4:06](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=246)** With the shell separately as I mentioned that you can install.
>
> **[4:09](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=249)** If you like using purely just the command line, you can download that here, and will download a mongosh.exe.
>
> **[4:16](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=256)** And lastly, we have the database tools.
>
> **[4:19](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=259)** We download these in a similar way.
>
> **[4:21](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=261)** We can choose an MSI.
>
> **[4:24](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=264)** Download that.
>
> **[4:29](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=269)** And we'll just run through the wizard.
>
> **[4:33](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=273)** We'll install the default location.
>
> **[4:39](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=279)** If we get any verification warnings like this we'll just say yes, and we'll finish.
>
> **[4:46](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=286)** Now, these tools will be located in that same MongoDB directory, but it says servers.
>
> **[4:53](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=293)** They'll be under tools and whatever version of the tools.
>
> **[4:57](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-windows?u=76281980&t=297)** This bin directory will hold the actual files like the mongoimport, which we can use to import files, or we can do that via MongoDB Compass, which we'll show later.

> [!info]- Semantic Content
>
> **Prerequisites:** install (9), set up (2), setup (1)
> **Code Keywords:** let (3), interface (2), this. (2), default, (1)
> **CLI Commands:** mongo (3), find (2)
> **Env Vars:** msi (2), mongo (1), dbs (1)
> **Tools:** command line (2), terminal (2)
> **UI Navigation:** go to (3), click on (1)
> **Versions:** 6.0 (2), 4.2 (1)
> **Cross-References:** we talked about (1), in the next (1)

#### Install MongoDB on macOS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=0)** - [Instructor] All right, let's get started.
>
> **[0:02](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=2)** For the Mac operating system, we can download the server directly via the website here and install it anywhere on your system.
>
> **[0:11](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=11)** However, the easiest possible way to install it is using Brew.
>
> **[0:15](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=15)** If you haven't installed Brew before, you can go to brew.sh and follow the directions there.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=19)** Brew is a package manager for the macOS operating system.
>
> **[0:23](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=23)** Once you have Brew installed, you can simply tap the mongodb brew.
>
> **[0:36](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=36)** After that's done tapping, you can type brew update to make sure you get the latest packages.
>
> **[0:44](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=44)** Now you can install the MongoDB Community Edition server by typing brew install mongodb-community.
>
> **[0:58](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=58)** And in this case, this course is targeted to version six of MongoDB, so we're going to make sure we do that here.
>
> **[1:06](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=66)** This will also install the MongoDB database tools and the shell for you automatically, so you don't need to install them separately as you do in some other operating systems.
>
> **[1:17](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=77)** Once that's done installing, we can use Brew to start up our MongoDB server by typing brew services start and mongodb-community.
>
> **[1:34](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=94)** This successfully installed our MongoDB server, and we can connect to it using the MongoDB shell, which was also installed for us by Brew, by simply typing mongosh.
>
> **[1:47](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=107)** This will spit out a bunch of data here the first time.
>
> **[1:49](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=109)** We don't really need to worry about that.
>
> **[1:51](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=111)** The important part is it connected to your local machine here, and you'll see the version is 6.0.
>
> **[1:59](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=119)** We can use the command show dbs to show our locally installed databases.
>
> **[2:06](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=126)** Right now I haven't imported anything yet.
>
> **[2:08](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=128)** We're handling that in the next video.
>
> **[2:10](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=130)** To exit, simply type exit.
>
> **[2:13](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=133)** You'll see me throughout the course using a terminal to access MongoDB.
>
> **[2:17](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=137)** Using the mongosh command is one way to do this.
>
> **[2:20](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=140)** Another way would be to install MongoDB's Compass UI.
>
> **[2:26](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=146)** You can install MongoDB Compass by using brew install --cask mongodb-compass.
>
> **[2:38](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=158)** Once that's completed, you should be able to find MongoDB Compass with your other applications.
>
> **[2:47](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=167)** You may get a warning like this.
>
> **[2:49](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=169)** You can open it anyhow.
>
> **[2:51](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=171)** And then we can connect to the same service we just started with Brew.
>
> **[2:56](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=176)** Press Connect.
>
> **[2:58](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=178)** And you'll see the same databases that we saw when we did the show dbs command.
>
> **[3:03](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=183)** Another thing you can do is you can click this mongosh at the bottom, and you'll get that same interface where you're able to type MongoDB commands right inside MongoDB Compass.
>
> **[3:17](https://www.linkedin.com/learning/learning-mongodb-17360744/install-mongodb-on-macos?u=76281980&t=197)** In the next video, we'll show how to import example data to your database.

> [!info]- Semantic Content
>
> **CLI Commands:** brew (13), make (2), find (1)
> **Prerequisites:** install (9)
> **Code Keywords:** this. (2), let (1), case, (1), interface (1)
> **Cross-References:** in the next (2)
> **File Paths:** brew.sh (1)
> **Code Identifiers:** macos (1)
> **Versions:** 6.0 (1)
> **Tools:** terminal (1)

#### Importing example data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=0)** - In this video, we'll be talking about how to import data into your local MongoDB install.
>
> **[0:05](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=5)** As a reminder, if you're using the code spaces this data's already been automatically imported for you and you can access it via the MangoDB extension.
>
> **[0:16](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=16)** As you see here, this cooker data and three example collections have already been imported.
>
> **[0:22](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=22)** If you aren't using code spaces, we're about to import these three into your local MongoDB install.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=28)** Now that you have MongoDB server and clients installed let's import some example data that we'll use throughout this course.
>
> **[0:35](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=35)** There are a couple different ways you can import data to your MongoDB server but here I'm going to show two different ways.
>
> **[0:42](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=42)** One, using the MongoDB compass UI, and two, using Mongo import from the command line.
>
> **[0:49](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=49)** First, we'll make sure we have downloaded the courses repo.
>
> **[0:54](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=54)** Inside the courses repo you'll see a collections folder and we'll go inside that.
>
> **[1:00](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=60)** And if we list the contents of that, we'll see there are three different json files in here that have data that we're going to import into MongoDB.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=70)** So to do that via the MongoDB Compass, we'll go down to the bottom here, which the plus sign and click it.
>
> **[1:17](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=77)** This will create our database.
>
> **[1:19](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=79)** We're going to call it 'cooker' and we'll import the first collection of documents here which is just called 'examples'.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=90)** So we'll call the collection name 'examples' here.
>
> **[1:33](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=93)** Click Create Database.
>
> **[1:35](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=95)** You should see the listing of the database you just created 'cooker' here.
>
> **[1:39](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=99)** You can click that.
>
> **[1:40](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=100)** And then the collection we created called 'examples' which doesn't have any documents in it yet.
>
> **[1:45](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=105)** You can click that and you should see a big import data button here as well as some options to import data here.
>
> **[1:52](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=112)** We'll click the import data, select a file, browse to where the course repo has been downloaded, click into that to collections, and then the 'examples' json file, and click open.
>
> **[2:08](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=128)** This is a JSON format, so we'll make sure this is selected and import.
>
> **[2:13](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=133)** You should see three documents have been imported and sure enough we can see them right here.
>
> **[2:18](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=138)** Another way to import your data is using the command line using Mongo import, which is one the database tools that we installed earlier, again, from the course repo in the collections folder, we'll list our files and we'll see there are two other json files we haven't imported.
>
> **[2:35](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=155)** To import them using the command line, we can use 'Mongoimport' and specify the database that we have just created so 'cooker'.
>
> **[2:47](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=167)** And since these are exported files, we need to add this json Array command option.
>
> **[2:53](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=173)** And then whatever file name it will automatically name the collection after that.
>
> **[2:59](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=179)** So for recipes json it'll create a collection called 'recipes'.
>
> **[3:05](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=185)** So we can go ahead and press enter on that.
>
> **[3:07](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=187)** It should say that seven documents were imported successfully.
>
> **[3:11](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=191)** There is one more file called 'users' so we'll just say users dot json.
>
> **[3:19](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=199)** And that should say two documents were imported successfully.
>
> **[3:23](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=203)** We can either use the command line again using 'mongo sh' and use our cooker database.
>
> **[3:34](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=214)** And now we've switched to the cooker database and we are inside where all those documents were imported.
>
> **[3:42](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=222)** And we'll learn more about clearing that later or we can switch back into MongoDB Compass.
>
> **[3:49](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=229)** Click this refresh button and we should now see some more collections on our cooker database that include some recipes which we'll be doing queries on later.
>
> **[3:58](https://www.linkedin.com/learning/learning-mongodb-17360744/importing-example-data?u=76281980&t=238)** You can go ahead and start messing around looking at these and seeing how we can store data a lot more about how we're going to query this and create these documents in the next lessons.

> [!info]- Semantic Content
>
> **CLI Commands:** mongo (3), make (2)
> **Code Keywords:** let (1), import. (1), import, (1), switch (1)
> **Tools:** command line (3)
> **Prerequisites:** install (2)
> **Env Vars:** json (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)


### 2. Documents and Collections

#### Create a document
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=1)** - [Instructor] So what exactly are documents?
>
> **[0:04](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=4)** Simply put, MongoDB documents are field-value pairs stored in a JSON-like format called BSON, which stands for Binary JSON.
>
> **[0:14](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=14)** So what are you waiting for?
>
> **[0:16](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=16)** Let's create some documents and save them to our database.
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=20)** Throughout this course, you'll see me using MongoDB shell on a terminal on a Mac.
>
> **[0:25](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=25)** However the same terminal commands can all be run within Codespaces as well.
>
> **[0:30](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=30)** To do that, you can start a New Terminal in the Codespace and right here I can list contents.
>
> **[0:38](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=38)** I can go into the lessons folder.
>
> **[0:41](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=41)** I can also run mongosh to get a MongoDB shell.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=47)** So anywhere you're seeing me running a shell on a command line terminal, you can do the exact same thing in a Codespace terminal as well.
>
> **[0:54](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=54)** What I'm going to go ahead and do is go into our course repo and go in the lessons folder and so lessons/2.1 for this lesson.
>
> **[1:07](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=67)** And in here you can see there's a recipe.json file.
>
> **[1:11](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=71)** I'm going to go ahead and open this in VS Code 'cause it's going to format it for us nicely.
>
> **[1:16](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=76)** You can see something that looks a lot like JSON because it pretty much is JSON.
>
> **[1:21](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=81)** Line two here, we go ahead and start with the title of a recipe for chicken tacos as well as a description and a cook time.
>
> **[1:31](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=91)** You can see these two are strings and this one is integer and they're all raft in these curly brackets.
>
> **[1:39](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=99)** So there can be multiple key value pairs and they can actually be all kinds of different data types, strings, rays, objects, more than that in future lesson.
>
> **[1:51](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=111)** Let's go ahead and start inserting some documents into our database.
>
> **[1:56](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=116)** So I'm going to go ahead and load up Mongo.
>
> **[2:01](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=121)** Now this is the Mongo shell command.
>
> **[2:03](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=123)** It might throw some warnings at you here.
>
> **[2:05](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=125)** Don't worry about them.
>
> **[2:06](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=126)** You can just clear them out of the way.
>
> **[2:09](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=129)** If you had any problems and that didn't load up make sure to go back to the install video where we learned how to run the Mongod command to launch MongoDB server.
>
> **[2:21](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=141)** Once we're in Mongo, we'll get a MongoDB shell.
>
> **[2:24](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=144)** One important thing to know is this is a JavaScript shell.
>
> **[2:28](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=148)** We can literally write JavaScript here if we want.
>
> **[2:32](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=152)** But first let's connect to the right database.
>
> **[2:35](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=155)** Again make sure to check back to the install videos if you haven't imported the example databases yet.
>
> **[2:40](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=160)** So we're going to go ahead and use the cooker database and we'll do much like we did in the code editor but here we'll sign the document to a variable.
>
> **[2:53](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=173)** So let's just call it doc, we could actually call it whatever we want and we'll give it a talk title and the title of Tacos and we'll add a description here of tacos.
>
> **[3:13](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=193)** And we'll give it a cook time as well.
>
> **[3:18](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=198)** And let's say that cook time is 20 minutes total and we're going to close it out right there and it's going to spit back something here.
>
> **[3:26](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=206)** This means it worked correctly and it'll give us a nice formatted version of it.
>
> **[3:31](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=211)** Now a document is a lot like a row and a sequel table, but it's way more flexible.
>
> **[3:38](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=218)** So the next thing we'll do now that we have our document ready we'll need to insert it into a collection.
>
> **[3:45](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=225)** So the way we do that is db.
>
> **[3:48](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=228)** whatever our collection name is.
>
> **[3:50](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=230)** Just call us tacos and then we're going to use this insertOne command and we're going to give it our variable and it's going to tell us properly inserted the document.
>
> **[4:06](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=246)** If the collection didn't exist already it's actually automatically created for you, more in collections later but they're kind of analogous to tables in sequel.
>
> **[4:16](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=256)** Let's go ahead and see what our document looks like.
>
> **[4:19](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=259)** So let's do db.tacos.find, and we'll get back our document, the title, description, and cook time.
>
> **[4:32](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=272)** But you'll also notice this other field here.
>
> **[4:34](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=274)** This underscore ID, that wasn't in original document.
>
> **[4:39](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=279)** The underscore ID field is required in every document in MongaDB and why you could supply your own.
>
> **[4:44](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=284)** It's better to let MongoDB auto to generate one like it did here.
>
> **[4:48](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=288)** Not only will make sure it's unique which it has to be, but also it actually contains an encoded daytime for you which is really useful for sorting.
>
> **[4:58](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=298)** Anyhow, back to our document.
>
> **[5:01](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=301)** There's also a little trick here that we can use on find and we can put this "pretty" at the end and it'll give us a nicely formatted document.
>
> **[5:13](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=313)** And one more trick, if you press the up arrow in the shell you'll see we can get back previous commands.
>
> **[5:23](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=323)** So if we wanted to assign another taco let's just call it document two and we'll call this Dos Tacos and then we can press up till we find that insert one command.
>
> **[5:39](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=339)** We'll change the variable here to doc2 and then we will run the fined pretty, we'll get back two different documents, our Tacos and our Dos Tacos.
>
> **[5:54](https://www.linkedin.com/learning/learning-mongodb-17360744/create-a-document?u=76281980&t=354)** In the next lesson we'll talk more about find and how to query documents.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), mongo (3), make (3)
> **Code Keywords:** let (9), throw (1)
> **Tools:** terminal (5), command line (1), vs code (1)
> **Env Vars:** json (4), bson (1)
> **Definitions:** is a  (2), stands for (1)
> **Cross-References:** go back to (1), in the next (1)
> **Best Practices:** make sure to (2)
> **Prerequisites:** install (2)

#### Using .find() to query documents
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=0)** - [Instructor] The find command is one of the most basic MongoDB commands and acts much like a SELECT statement in SQL.
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=7)** Let's learn how to use find to query our recipe documents and find specific recipes.
>
> **[0:13](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=13)** The first parameter for find is a document.
>
> **[0:17](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=17)** Not the document that you're trying to match but rather a query document.
>
> **[0:22](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=22)** If you pass an empty query document that'll match all documents.
>
> **[0:26](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=26)** The default is an empty document.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=28)** For example, if we do DB dot recipes dot find and don't pass anything, we'll get a whole bunch of stuff back.
>
> **[0:39](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=39)** If we ask for something specific, like where the title is equal to tacos, I will get just one recipe back.
>
> **[0:53](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=53)** Now to make that look a little nicer I can add on to the end an extra little command called pretty.
>
> **[1:02](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=62)** And now this is formatted in a much more readable fashion.
>
> **[1:08](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=68)** We can also do conditionals.
>
> **[1:11](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=71)** So if we wanted to match more than one thing, for example, not just the title but also the cook time being 20 minutes.
>
> **[1:24](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=84)** We'll get back our document again.
>
> **[1:28](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=88)** Now I happen to know that took 20 minutes so if we change this to 19 we won't get any results back.
>
> **[1:35](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=95)** Just again, no results back.
>
> **[1:38](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=98)** Because nothing matched both and tacos and 19 minutes cook time.
>
> **[1:45](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=105)** Sometimes the document might contain a lot more data than you need for your purpose.
>
> **[1:49](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=109)** As you've kind of already seen.
>
> **[1:52](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=112)** By default, find will return all document fields much like a select star.
>
> **[1:57](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=117)** But if you want to specify or narrow down the field you want to return you need to provide a second parameter to find.
>
> **[2:06](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=126)** So in this case let's switch it back to just looking for tacos.
>
> **[2:10](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=130)** And as a second parameter here I will add title again.
>
> **[2:18](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=138)** And I'll put one for true.
>
> **[2:21](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=141)** So this is going to mean I want just the title back.
>
> **[2:26](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=146)** When I enter that you could see I just get the title back.
>
> **[2:30](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=150)** You can also exclude fields.
>
> **[2:34](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=154)** So instead of a one here, I can make that a zero and it'll bring you back everything but the title.
>
> **[2:44](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=164)** To get back all the documents with just their title you could send an empty document in your search.
>
> **[2:53](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=173)** So I'll just write that out from scratch again.
>
> **[2:55](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=175)** DB dot recipes dot find and an empty query document.
>
> **[3:02](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=182)** And then title equals one.
>
> **[3:07](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=187)** Now I just got back only the titles for my recipes.
>
> **[3:11](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=191)** It's a little bit easier to manage.
>
> **[3:14](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=194)** But what if I need to search by a partial title?
>
> **[3:17](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=197)** After all, a user of our website is unlikely to type out the exact recipe name.
>
> **[3:23](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=203)** Do that.
>
> **[3:24](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=204)** We use wildcard searches.
>
> **[3:26](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=206)** It's akin to like a like statement in sequel.
>
> **[3:29](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=209)** However, instead of using the percent sign, we use regular expressions.
>
> **[3:33](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=213)** Because remember we're using a JavaScript shell in MongoDB.
>
> **[3:37](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=217)** So we can use regular expressions just like you would in JavaScript.
>
> **[3:42](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=222)** For example, we could do DB dot recipes dot find and this time it's going to look very similar.
>
> **[3:49](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=229)** We're going to ask for title.
>
> **[3:53](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=233)** But we're going to put another bracket here.
>
> **[3:55](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=235)** And we're going to use this dollar sign reg ex.
>
> **[4:00](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=240)** And a slash.
>
> **[4:02](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=242)** I'm just going to write a regular expression here and an I here for case insensitive.
>
> **[4:07](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=247)** And then we're just going to close out our result here.
>
> **[4:11](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=251)** And you'll see we get back two different documents.
>
> **[4:15](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=255)** Actually, it's kind of hard to see so let's use one of the tricks we learned earlier.
>
> **[4:19](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=259)** So we have our query here.
>
> **[4:22](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=262)** And I'm going to give it a second parameter of just title equals one.
>
> **[4:29](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=269)** And now you could see it brought back two different recipes.
>
> **[4:33](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=273)** Chicken soft tacos and tacos.
>
> **[4:36](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=276)** In case you're wondering, we can also do searches on numeric ranges with greater than or less than or or queries.
>
> **[4:45](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=285)** Lots of other stuff like that.
>
> **[4:46](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=286)** We'll cover those in the next section.
>
> **[4:49](https://www.linkedin.com/learning/learning-mongodb-17360744/using-find-to-query-documents?u=76281980&t=289)** Next we'll talk about what we could store in documents.

> [!info]- Semantic Content
>
> **CLI Commands:** find (9), make (2)
> **Code Keywords:** let (3), pass (2), default, (1), switch (1)
> **Analogies:** for example (3), just like (1)
> **Env Vars:** select (1), sql (1)
> **Definitions:** is a  (1), is an  (1)
> **SQL:** select (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### What can you store in a document?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=1)** - [Instructor] MongoDB documents could store a wide variety of data in a number of different formats which often makes development easier.
>
> **[0:08](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=8)** So far, we've mostly worked with text or number fields in our documents.
>
> **[0:13](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=13)** These are much like the basic types you might be used to in a relational database but what if we want more flexibility?
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=20)** Take this recipe for example.
>
> **[0:22](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=22)** When we think about it, recipe contains a lot more than just text or number data.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=27)** In fact, it has a lot more structure and detail that we can see on the printed page and categorize in our minds.
>
> **[0:34](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=34)** But how do we store it?
>
> **[0:36](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=36)** Sure, we could just copy and paste list of ingredients and the directions and store them in a large text field, but then we'd lose a lot of granularity and options for what we could do with that data later.
>
> **[0:48](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=48)** For example, what if we need to change the measurements from imperial to metric?
>
> **[0:53](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=53)** or change serving sizes?
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=56)** In a traditional database, at this point, you'd need to start thinking about refactoring this data and about normalization, denormalization, et cetera.
>
> **[1:06](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=66)** With MongoDB, we don't have to do that.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=70)** With MongoDB, we can mix and match data types together and pretty much store this recipe exactly like it is on the page, but also in a way that will let us do really powerful things later.
>
> **[1:22](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=82)** At this point, you might be really starting to understand why they call these documents.
>
> **[1:27](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=87)** Let's start with the directions.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=90)** There are steps, and the order matters, sort of like an array?
>
> **[1:36](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=96)** To see how we could store this, I'm going to open up some example files I put it in the lessons slash 2.3 directory.
>
> **[1:45](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=105)** In here you could see there's a directions dot JSON, and ingredients.
>
> **[1:50](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=110)** I'm going to go ahead and open these in VS codes so they'll format it nicely.
>
> **[1:54](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=114)** You could see with the directions, we have a title, and then I've just actually stored a flat out array for the directions.
>
> **[2:04](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=124)** Roll the pie crust, make the filling, bake.
>
> **[2:07](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=127)** (laughs) Of course, real directions would be different than this, but of course this is just an example.
>
> **[2:13](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=133)** We can literally represent this with the JavaScript style array and store it in our document.
>
> **[2:20](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=140)** Now let's move on to another part of this recipe.
>
> **[2:23](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=143)** The ingredients.
>
> **[2:25](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=145)** Oh, for ingredients dot JSON, you could see I've expanded on this document.
>
> **[2:30](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=150)** We still have our title and our directions, but starting here in line eight, we have ingredients, and again, it's an array, but this time, instead of an array of strings like the directions, it's an array of objects.
>
> **[2:45](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=165)** Not only that, that object has objects inside this.
>
> **[2:50](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=170)** You can actually think about this as its own document itself.
>
> **[2:55](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=175)** The nice thing this lets us do is store ingredients in their units together yet separately.
>
> **[3:01](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=181)** So we could, for example, change the serving size or the units of measure later.
>
> **[3:07](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=187)** As you can imagine, there are a number of ways to do this.
>
> **[3:11](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=191)** This is just one example.
>
> **[3:13](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=193)** I'll also open up a more complex example of this.
>
> **[3:17](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=197)** To do that, I'm going use MongoDB Compass, free GUI from MongoDB.
>
> **[3:24](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=204)** You can see the links of lesson notes for more on how to find this.
>
> **[3:28](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=208)** This one is a full fledged recipe.
>
> **[3:31](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=211)** It has a title, calories, preserving, cook time, a description, directions in an array ingredients in a more robust object array, has likes, like count, ratings, et cetera.
>
> **[3:50](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=230)** We're going to talk about how we're can start organizing some of these documents into collections.
>
> **[3:57](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=237)** Lastly, let's show inserting a document that we want to create.
>
> **[4:01](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=241)** So to do so, we can use the insert or insert one or insert many, but for this example, I'll use insert.
>
> **[4:09](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=249)** So in this test collection, I'll use insert one, and we'll give it a document to insert.
>
> **[4:17](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=257)** So we can say "Title test doc," and that's it.
>
> **[4:25](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=265)** We'll just have one document with a title, and it'll say "Acknowledged true," that it inserted and it gave us an object ID, which will be the object ID of the document that was just graded.
>
> **[4:36](https://www.linkedin.com/learning/learning-mongodb-17360744/what-can-you-store-in-a-document?u=76281980&t=276)** So if we do "Test dot find" you'll see a document with a title of "Test doc" and the auto-generated object ID for your underscore ID value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (4), this, (2)
> **Analogies:** for example (3), imagine (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** json (2), gui (1)
> **Versions:** 2.3 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Collections
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=1)** - [Instructor] While the flexibility of MongoDB's document model has many advantages for developers, keeping those documents organized can become trickier.
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=9)** That is where collections come in.
>
> **[0:12](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=12)** As we store more and more of our site's data in MongoDB, inevitably some of that data will be distinctly different.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=19)** Take these documents for example, we have a Recipe, a Blog Post and a User account.
>
> **[0:25](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=25)** Now, we could store these all together by having maybe a type field and mark it as recipe or a post or user, but at some point, that's going to not only become somewhat annoying but it can cause performance problems.
>
> **[0:39](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=39)** With collections however, we can keep related documents grouped together for simpler organization and better performance.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=47)** You can think of collections, somewhat like tables in a relational database, but not all the documents need to have the same schema or structure.
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=56)** The collections themselves are then stored inside databases which we'll get to shortly.
>
> **[1:02](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=62)** We've actually been using collection all along.
>
> **[1:05](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=65)** It's what we've been using after the DB in our queries.
>
> **[1:08](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=68)** For example, if we do db.recipes.find and ask for all documents and then say we just want the title back to keep this little more clean.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=83)** This gives us all the documents that are in our collection.
>
> **[1:28](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=88)** Now, there are some commands that you should know to help us with collections and databases.
>
> **[1:34](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=94)** For example, we can do the show dbs command.
>
> **[1:40](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=100)** This will show us all the databases in our MongoDB instance.
>
> **[1:44](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=104)** We can also use show collections.
>
> **[1:47](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=107)** This will show the collections inside whatever database we're currently in.
>
> **[1:52](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=112)** If you need to know what database you're currently in, you can use db.getName which will let us know we're in the cooker database.
>
> **[2:02](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=122)** Both databases and collections are created as you use them.
>
> **[2:07](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=127)** I.e. insert data, so it's really simple to create them.
>
> **[2:11](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=131)** For example, if I wanted to create a brand new collection, I could do db.cool_newStuff and insert something.
>
> **[2:24](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=144)** So in this case, I'm going to insert just a empty document.
>
> **[2:31](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=151)** And as you can see, it inserted one and if I do that show collections again, now, cool_newStuff exists as a collection.
>
> **[2:39](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=159)** I didn't even have to create it, it just got created for me.
>
> **[2:43](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=163)** They can be named pretty much any UTF eight string with the exception of blank or null, those are not valid collection names.
>
> **[2:51](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=171)** So now we can store our recipes with our recipes, our users with our users and our blog posts with our blog posts.
>
> **[3:02](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=182)** You can also create sub collections using a dot like this.
>
> **[3:07](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=187)** Say instead of cool_newStuff, we did cool.newStuff.insertOne.
>
> **[3:14](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=194)** Now when we look at our collections, we'll see a completely different one.
>
> **[3:17](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=197)** Now, this doesn't actually store your data any differently but it can be helpful for query purposes.
>
> **[3:23](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=203)** There are also other collection options like cap collections, where we can tell MongoDB to only store a maximum amount of documents at any one time and will automatically delete the oldest documents in the collection to make room for a new one.
>
> **[3:37](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=217)** Well, couple of more is advanced topics like that later in this course.
>
> **[3:41](https://www.linkedin.com/learning/learning-mongodb-17360744/collections?u=76281980&t=221)** Next, we'll use what we've learned so far to complete a challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), this. (1), delete (1)
> **Analogies:** for example (4)
> **Code Identifiers:** getname (1), newstuff (1), insertone (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** utf (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a recipe document
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-create-a-recipe-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-create-a-recipe-document?u=76281980&t=0)** - [Instructor] All right, it's time for our first challenge.
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-create-a-recipe-document?u=76281980&t=9)** For this challenge, you'll need to use a new collection, create a new document for a recipe and that recipe should include at a minimum, certain fields.
>
> **[0:21](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-create-a-recipe-document?u=76281980&t=21)** It should have a title, a description, a star rating, a food type tag, a user comments section, so that could be an array of objects, for example, and optionally directions and ingredients.
>
> **[0:38](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-create-a-recipe-document?u=76281980&t=38)** You can look at some of the examples in the recipe collection for this but see how much you can do from memory.
>
> **[0:44](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-create-a-recipe-document?u=76281980&t=44)** Good luck.
>
> **[0:45](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-create-a-recipe-document?u=76281980&t=45)** In the next video, we'll show a solution to this challenge.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a recipe document
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=0)** - [Instructor] So hopefully, you found this challenge pretty easy after everything we reviewed.
>
> **[0:10](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=10)** To solve this, we use a combination of strings, arrays, and objects.
>
> **[0:15](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=15)** I'm going to open up an example document I've already created in VS Code.
>
> **[0:21](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=21)** Here we can see the title as a string, the comments as an array of objects, and here, I've used a special date field, which you can look up on your own.
>
> **[0:36](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=36)** We also have the directions that are also an array, but this is an array of just strings that are comma separated.
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=43)** We also have ingredients, which is an array of objects as well, but we'll close that for now.
>
> **[0:50](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=50)** We have star ratings from 1 to 5, doesn't look like many people like this recipe.
>
> **[0:58](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=58)** We have tags to describe this recipe, and also, Dessert type.
>
> **[1:03](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=63)** So we can literally just copy this whole document.
>
> **[1:07](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=67)** And by way of example, I'll open up Mongo Compass to show actually inserting it.
>
> **[1:14](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=74)** So we'll go to our test, solutions collection, and we'll go to Insert Document, and literally, just paste our document here, and we'll insert it.
>
> **[1:29](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=89)** And there we go, we have a new recipe in here, and it has all our special data types, and we're all good.
>
> **[1:41](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=101)** So go ahead, keep messing around with this, try to get comfortable with it.
>
> **[1:45](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-create-a-recipe-document?u=76281980&t=105)** And in our next section we're going to be talking about querying MongoDB.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), type. (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (2)
> **CLI Commands:** mongo (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Querying

#### Sort, limit, and skip
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=0)** - When querying a database, making sure to limit the amount of data returned and sorting it properly, is key to better performance of both your queries as well as your overall application.
>
> **[0:11](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=11)** So, how do you limit, sort or skip documents in your queries?
>
> **[0:18](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=18)** When you request documents back from manga db, under the covers, the database returns back what is called a Cursor.
>
> **[0:25](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=25)** Technically, when you run the Find command via the shell with the driver in your programming language even though it is sent to the server, it actually doesn't run right away.
>
> **[0:35](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=35)** Instead, it waits until the results are requested back.
>
> **[0:39](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=39)** This happens automatically unless, you manually iterate on the cursor.
>
> **[0:44](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=44)** But it's important to understand nonetheless.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=47)** While this might not seem like a huge difference, what it allows you to do is add extra commands after find to do what is called chaining.
>
> **[0:57](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=57)** If you've ever used a JavaScript framework like jQuery, you're likely very familiar with this concept.
>
> **[1:04](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=64)** The order of the items you chain together doesn't matter but how they change your results matters a great deal.
>
> **[1:14](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=74)** One of the most basic query options you can run is Limit which as this name implies, limits the number of results returned.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=83)** To illustrate this, let's look at our recipes collection.
>
> **[1:27](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=87)** And we're going to do a find for all documents.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=90)** And we're going to request a count back.
>
> **[1:32](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=92)** We'll see that there are seven recipes in our collection.
>
> **[1:37](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=97)** To make this little easier to see, I'm going to change this to request all documents back and then, just ask for the title, field and just remove the count altogether.
>
> **[1:50](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=110)** Now we'll get a nice clean listing of our recipes.
>
> **[1:56](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=116)** Now if we want to limit those results, we will simply add on this limit option.
>
> **[2:02](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=122)** So now we've gotten two or three, et cetera.
>
> **[2:10](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=130)** Another very common query option is Sort.
>
> **[2:14](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=134)** Now sort will take a document in itself, where the key, being the field you want to sort by.
>
> **[2:23](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=143)** So let's say, title and the value being which direction.
>
> **[2:30](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=150)** So, one, meaning ascending.
>
> **[2:32](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=152)** Negative one, meaning descending.
>
> **[2:35](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=155)** So if we do this now, we'll get all the recipes back with Apple Pie at the top and Zucchini Brownies at the bottom.
>
> **[2:44](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=164)** So if we do negative one, we get Zucchini Brownies first, Apple Pie at the bottom.
>
> **[2:53](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=173)** Again if we want to limit this, we could do ascending .limit and only get two recipes back but now it's alphabetized Apple Pie, Brown Sugar Meatloaf.
>
> **[3:07](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=187)** A less used, but sometimes useful query option is Skip.
>
> **[3:12](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=192)** So if, let's keep it alphabetized for the moment and we'll say, I want to skip one document.
>
> **[3:21](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=201)** When I do that, Apple Pie is gone, Brown Sugar Meatloaf starts off the list of our recipes.
>
> **[3:29](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=209)** You can chain together many of these commands as you kind of already noticed.
>
> **[3:35](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=215)** So, if I want to skip one and then limit one, I get Brown Sugar.
>
> **[3:42](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=222)** If I skip two and limit one, now, we have Chicken Soft Tacos and you can see it will go along our recipes in alphabetical order.
>
> **[3:52](https://www.linkedin.com/learning/learning-mongodb-17360744/sort-limit-and-skip?u=76281980&t=232)** Next, we'll talk about different operators you can use in your queries and also how to query data that is stored in arrays.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), if, (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is called (2)
> **Code Identifiers:** jquery (1)
> **Speakers:** - when (1)

#### Working with operators and arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=1)** - [Instructor] MongoDB has a number of operators that can be used on your fields, be it a string, number, array, object, or sub document.
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=9)** We can use these to conditionally filter our results.
>
> **[0:12](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=12)** Most of these operators will likely work in a familiar way.
>
> **[0:16](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=16)** But how they look may be slightly out at first.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=19)** Since MongoDB uses a JSON-like syntax for its queries, using some traditional operators like greater than and less than won't work.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=28)** To avoid this problem, the query language uses strings with a dollar sign in front of them.
>
> **[0:34](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=34)** No, this has nothing to do with money, but once you have some of these down you will be able to write much richer queries.
>
> **[0:41](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=41)** How does this work?
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=43)** Well, for example, instead of greater than, we have $gt, and instead of less than we have $lt.
>
> **[0:53](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=53)** And instead of less than or equal to, we have $lte.
>
> **[0:59](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=59)** By the way, to follow along, you want to make sure you import the recipe's collection via the recipe's js file in the course repo.
>
> **[1:09](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=69)** Now, let's imagine we need to add a new feature to our website called Quick Meals.
>
> **[1:16](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=76)** To do so, we want a query to find out all the recipes with a cook time of less than or equal to 30 minutes.
>
> **[1:25](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=85)** We can do that with query like this.
>
> **[1:28](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=88)** We specify the cook time, our $lte, and 30 for minutes.
>
> **[1:35](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=95)** Now we get back all the recipes that will take 30 minutes or less to cook.
>
> **[1:42](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=102)** Now that's fine, but there's also prep time.
>
> **[1:45](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=105)** So let's add on checking for prep time of 10 minutes or less.
>
> **[1:53](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=113)** We can do this which is equivalent to an, and query by simply adding a comma.
>
> **[2:02](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=122)** So here we have our cook time again and comma prep time, and our prep time less than or equal to 10 minutes.
>
> **[2:10](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=130)** You'll see now we have three recipes that came back.
>
> **[2:14](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=134)** If we are wondering why smoked salmon is now gone, we could simply query that recipe directly and we can see that it's cook time's 20 minutes, it's prep times 15, which exceeded our query's limits.
>
> **[2:32](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=152)** We can also do an, or query by prefacing our conditional with dollar sign or.
>
> **[2:40](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=160)** And we put our two filters inside an array.
>
> **[2:44](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=164)** So we have our cook time filter and our prep time filter inside this array.
>
> **[2:56](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=176)** In this case we'll get four documents back.
>
> **[3:00](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=180)** So what about arrays and objects?
>
> **[3:04](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=184)** For this, let's take a look at our tags array where we have some useful information about our recipes.
>
> **[3:13](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=193)** For example, here we see our tacos or mexican, quick, easy and ground beef or apple pie is traditional in 4th of July.
>
> **[3:23](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=203)** If we want to find all the recipes that were tagged with easy we can simply say tags "easy" as our filter and we'll get back four different documents that all have easy in them somewhere in their tags.
>
> **[3:43](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=223)** But what if we want easy and Mexican?
>
> **[3:47](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=227)** At this point you might be thinking you can just put that inside an array or something like this.
>
> **[3:56](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=236)** I want to find all the tags easy or mexican but we get no results.
>
> **[4:02](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=242)** This won't work because mongo will see this as an exact match for the array and try to do an exact match on the arrays in the documents.
>
> **[4:11](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=251)** So in other words, you'd have to send the entire contents of the array to match.
>
> **[4:16](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=256)** Instead, we need to use a completely different operator in this case, "all".
>
> **[4:23](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=263)** So we say tags and we put inside another document "all" and now we can put our array of easy and quick and we will surely get back two recipes.
>
> **[4:39](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=279)** On the other hand, if we want recipe that are easy or Mexican, we can use the "in" operator.
>
> **[4:48](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=288)** So same thing as before, but instead of "all" we're passing "in" and we'll get four recipes this time.
>
> **[4:58](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=298)** Lastly, if we want to reach inside the data of an object or an array, we use dot notation.
>
> **[5:06](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=306)** For that, let's take a look at the ingredients field.
>
> **[5:12](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=312)** Here we have a complex object that has the name of our ingredient and quantity, et cetera.
>
> **[5:21](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=321)** Now if we want to get back all the recipes with exit them, we could simply use dot notation like so, ingredients.name and egg, and we'll get back two different recipes, pancakes and zucchini brownies.
>
> **[5:40](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=340)** Now just by way of illustration if we deconstruct this slightly and ask for ingredients with an object inside name with a value of egg, which you think might work, this won't because again it's the same problem as before.
>
> **[5:58](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=358)** It's looking for an exact match.
>
> **[6:00](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=360)** So we'd need to write out the whole objects or erase contents for that to work.
>
> **[6:05](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=365)** So remember to use dot notation unless you want an exact match.
>
> **[6:10](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=370)** There are many other operators you can find by checking out the official MongoDB docs and there's also some links in the readme.
>
> **[6:17](https://www.linkedin.com/learning/learning-mongodb-17360744/working-with-operators-and-arrays?u=76281980&t=377)** Next we'll talk about how to update and delete documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), match. (3), this. (2), this, (1), case, (1)
> **CLI Commands:** find (4), make (1), mongo (1)
> **Analogies:** for example (2), imagine (1)
> **Env Vars:** json (1)
> **Documentation:** the readme (1)
> **Definitions:** in other words (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Updating documents
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=1)** - [Lecturer] At some point, your data is going to need to change.
>
> **[0:03](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=3)** Be it because you decide to change your schema, a user updates their profile, or, the most likely reason in my case, one of our recipes are the spelling error.
>
> **[0:13](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=13)** For this lesson, I'm going to be using the examples collection so we don't mess with our recipes data.
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=20)** You can find an examples.js file and (indistinct) how to import this collection in the notes and the course repo.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=28)** Most of the time, you just need to update a single field in a single document.
>
> **[0:34](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=34)** To do this, we can use update one along with a couple of update operators.
>
> **[0:40](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=40)** Here we will cover set unset and inc as in increment.
>
> **[0:46](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=46)** On the other hand, the update command will update multiple documents, but works basically the same way.
>
> **[0:53](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=53)** By the way, Mongo also has a concept of upsert which will update or insert, depending on if I'm matching document or field already exists or not.
>
> **[1:05](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=65)** You can see a link in the docs to learn more about this.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=70)** To update a field, we can use the set operator.
>
> **[1:15](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=75)** First, let's get a list of a recipes from our example collection.
>
> **[1:21](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=81)** Here, we can see three different recipes.
>
> **[1:24](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=84)** Now, say we want to change the title of this pizza recipe to be more descriptive because it's actually a thin crust pizza.
>
> **[1:32](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=92)** Well, we can do that by running db.examples.updateOne Tell it which document we want to update with this filter.
>
> **[1:43](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=103)** And we want to update the one called pizza.
>
> **[1:48](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=108)** And as a second parameter, we're going to give it the set operator and tell it what we want set to do.
>
> **[1:59](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=119)** So in this case, we want it to change it to Thin crust pizza.
>
> **[2:07](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=127)** And we'll close that out and you'll see it matched one document and modified one document.
>
> **[2:15](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=135)** If we get our listing again, you'll see this is now called Thin Crust pizza.
>
> **[2:20](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=140)** In this case we used the title as our filter back here.
>
> **[2:25](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=145)** But we could have used _id for example, if we want to be more specific about which document we're updating.
>
> **[2:33](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=153)** If you run set on a document that doesn't have that field already, it will insert it.
>
> **[2:39](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=159)** Remember that absurd idea?
>
> **[2:41](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=161)** Well, let's go ahead and try that now.
>
> **[2:43](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=163)** First let's find that document as is.
>
> **[2:47](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=167)** So we'll just do a quick search here.
>
> **[2:51](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=171)** Well, I'll clear this out.
>
> **[2:52](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=172)** We'll do a quick search here for Thin crust pizza.
>
> **[2:55](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=175)** We could see this document just has a title in it right now.
>
> **[2:59](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=179)** Let's bring back up our update and we'll change this around a little bit.
>
> **[3:04](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=184)** So instead of title pizza, since that will no longer match, we'll change that to Thin crust pizza.
>
> **[3:15](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=195)** And instead of setting the title, we are going to add a field called vegan and we're going to make that false because this pizza has meat on it.
>
> **[3:28](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=208)** Now again, it will tell us it's matched a document and it modified document.
>
> **[3:32](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=212)** And if we look up this recipe, we'll see the titles Thin crust pizza and it now has vegan false on it.
>
> **[3:41](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=221)** If we no longer want this field on anymore, we can use the unset operator.
>
> **[3:50](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=230)** So the same as this set, but we'll change it to unset.
>
> **[3:58](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=238)** And instead of setting the value of what this field will be, we'll just tell it use this field vegan and we'll put a 1 for true.
>
> **[4:06](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=246)** So it means unset this field.
>
> **[4:11](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=251)** And when we do that, we see the field is gone.
>
> **[4:16](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=256)** Cool. Now what if we'd like to do something like easily increment a field without having to know the value of net field at the time the query ran.
>
> **[4:27](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=267)** I'll tell you more in a second why this could be really important.
>
> **[4:30](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=270)** To do this, let's go ahead and check out the example tacos recipe.
>
> **[4:35](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=275)** So title tacos and I'll just print it out pretty here.
>
> **[4:40](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=280)** You could see as you look through this, the document is a full fledged recipe like we've been working in earlier.
>
> **[4:49](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=289)** You also see there's a likes array and a likes_count which is a pre-calculated count of the number of items in that likes array.
>
> **[4:58](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=298)** Now what if we need to increment that count field by one?
>
> **[5:03](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=303)** In other words, simulating another user liking the recipe.
>
> **[5:06](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=306)** Well, we can do that by using the inc operator.
>
> **[5:11](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=311)** So the way that works, it's very similar to the set.
>
> **[5:15](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=315)** But instead of setting a field, we'll still give it a filter of what document we want and it will tell it to increment.
>
> **[5:25](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=325)** And we'll tell it which field to increment.
>
> **[5:27](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=327)** In this case, it's the likes count.
>
> **[5:31](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=331)** And we'll tell it by how much.
>
> **[5:33](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=333)** So this could be 1. It could be 10.
>
> **[5:35](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=335)** It could be 1000. It could be -1.
>
> **[5:37](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=337)** But it will be whatever we want to increment the value it currently is by.
>
> **[5:43](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=343)** We'll go ahead and close that out.
>
> **[5:46](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=346)** Now when we search for this, we'll see our likes count is three instead of two as it was before.
>
> **[5:55](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=355)** Again, if I run this command again, make it -1, search for that.
>
> **[6:02](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=362)** Our likes count is back down to two which matches this so let's just leave it that way.
>
> **[6:09](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=369)** Doing it this way can be very useful as it guarantees what is called eventual consistency.
>
> **[6:16](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=376)** The database will make sure that field is always increased by in our case one.
>
> **[6:22](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=382)** To understand this better, imagine if three users liked a recipe on your site at the exact same time.
>
> **[6:29](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=389)** So in this case, say the initial line count was 10, then the count should end up being 13.
>
> **[6:36](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=396)** But if any of those queries tried to check the like count in the array and update that count field, you risk the final count being completely wrong.
>
> **[6:44](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=404)** With this atomic operation however, you never need to worry about that.
>
> **[6:49](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=409)** Keep in mind, by default there aren't any locks or transactions on queries.
>
> **[6:55](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-documents?u=76281980&t=415)** Next, we'll talk about updating and modifying arrays.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (4), this, (4), this. (1), match, (1)
> **CLI Commands:** make (3), find (2), mongo (1)
> **Definitions:** is a  (2), in other words (1), is called (1)
> **Analogies:** for example (1), similar to (1), imagine (1)
> **Code Identifiers:** updateone (1), likes_count (1)
> **File Paths:** examples.js (1)
> **Documentation:** the docs (1)
> **Warnings:** keep in mind (1)

#### Updating arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=1)** - [Instructor] Working with fields that contain array data means we will need to use some different operators, push and pull.
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=7)** To add an item to an array, we can use push, which will push an item to the end of the array.
>
> **[0:14](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=14)** So, let's start off again with our Tacos recipe, and look again at that likes array.
>
> **[0:23](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=23)** So there's two items in it, two user IDs.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=27)** Let's go ahead and push another user ID into that array.
>
> **[0:32](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=32)** So we can do db.examples, updateOne, tell it we want to update where the title is Tacos, and as the second parameter, we're going to say we want to push something into the likes array.
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=56)** And in this case, let's add ID 60, and then we'll close that out.
>
> **[1:03](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=63)** You'll see it matched one document, modified one document.
>
> **[1:06](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=66)** If we run our find again, you'll see there is now a 60 added in our likes array.
>
> **[1:16](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=76)** If we wanted to remove that, we can simply use the pull operator.
>
> **[1:22](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=82)** So instead of push here, we can just change that to pull.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=90)** It will, again, acknowledge it updated correctly, and you can see that it is gone from that likes array.
>
> **[1:37](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=97)** Now in this case, I used an int, but it could've been a string or an object, or even another array, whatever's valid in there.
>
> **[1:45](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=105)** There are also a number of other array operators you can use.
>
> **[1:49](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=109)** You could see the link in lesson notes for more.
>
> **[1:52](https://www.linkedin.com/learning/learning-mongodb-17360744/updating-arrays?u=76281980&t=112)** Next, we'll talk about how to delete documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), delete (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** updateone (1)
> **Speakers:** - [instructor] (1)

#### Deleting documents
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=0)** - [Instructor] Updating documents is great but sometimes things go really bad.
>
> **[0:04](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=4)** Like things get really messed up, or you just need more disc space, so you'll need to delete documents.
>
> **[0:12](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=12)** We have two basic options, delete one or delete many.
>
> **[0:15](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=15)** Both take a filter document, like find in the update commands, for delete one, the first matching document in the collection is deleted.
>
> **[0:23](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=23)** For delete many, all documents that match will be deleted.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=27)** Obviously, if you're writing a query that you expect to only ever delete a single document, use delete one to be safe.
>
> **[0:34](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=34)** You can provide the underscore ID or any other sort of filter.
>
> **[0:39](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=39)** Let's take a quick look at the documents in our example collection.
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=43)** Now, now say we want to delete this Delete me document.
>
> **[0:46](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=46)** We could look at the object ID here and delete it.
>
> **[0:51](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=51)** So, delete one and we'll tell it, I want to delete one that has the object ID here.
>
> **[1:03](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=63)** And, oops.
>
> **[1:04](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=64)** Got an extra parentheses.
>
> **[1:06](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=66)** And now, that close it out.
>
> **[1:11](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=71)** Now it acknowledged it deleted one.
>
> **[1:14](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=74)** If we get the list of our documents, now it's gone.
>
> **[1:18](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=78)** Now we could have also made a filter check.
>
> **[1:20](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=80)** For example, the likes count.
>
> **[1:22](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=82)** For any documents that have no likes.
>
> **[1:26](https://www.linkedin.com/learning/learning-mongodb-17360744/deleting-documents?u=76281980&t=86)** Next, we'll have another challenge, combining some of the skills we've learned in this section.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (12), let (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Write a query
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=0)** - [Instructor] Well, it's that time again, another challenger appears.
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=9)** Okay, so in all seriousness, let's get your fingers to typing and use some of the concepts and skills we've learned so far.
>
> **[0:16](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=16)** Your mission, using the provided recipes collection, or if you want to use your own data, feel free to adopt this, if that's your thing, you have three tasks.
>
> **[0:26](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=26)** First, we need a query that will bring back the top rated recipes, five being the highest rating.
>
> **[0:33](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=33)** Base that off the ratings of Ray, but hint, explore the scheme of the documents and you'll probably see a ratings average field with the average already compiled for you.
>
> **[0:44](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=44)** Use this to order results by the most popular, limited to four.
>
> **[0:49](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=49)** You can pause the video now and try.
>
> **[0:54](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=54)** For challenge number two, once you have done that, write a query that uses the tags array field in our recipes to bring back the recipes tagged with Mexican, still ordered by top rated and limited to four.
>
> **[1:09](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=69)** Go ahead and give it a try.
>
> **[1:12](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=72)** And the last challenge, write a brand new query that gets back all the recipes liked by user ID 1, sorted by the title with no limit.
>
> **[1:24](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=84)** Take a look at the likes array for this one.
>
> **[1:27](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-write-a-query?u=76281980&t=87)** In the next video, I'll show you one way to write these three different queries and you can compare with what you've come up with.

> [!info]- Semantic Content
>
> **Code Keywords:** try. (2), let (1), this, (1)
> **Non-Speech:** (upbeat music) (1), (music ends) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Solution: Write a query
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=0)** - [Instructor] Were you able to complete all three challenges?
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=9)** Did you just skip ahead to this video to see how I did it?
>
> **[0:13](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=13)** Either way, let's see how to solve these challenges.
>
> **[0:16](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=16)** First. For number one, we could do a way more complicated query and try to figure out the average ratings from the rating array for each recipe.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=27)** But hopefully you got my hint, and used the rating_average field.
>
> **[0:33](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=33)** So to do this, we can write a query like this.
>
> **[0:39](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=39)** We'll go ahead and find all the recipes and I'll request back all documents and I'll just get back the title to make this a little more clean.
>
> **[0:51](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=51)** And in this case, all we really need to do is sort.
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=56)** So we sort by the rating_avg.
>
> **[1:02](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=62)** And importantly, you want to do a negative one to get descending.
>
> **[1:07](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=67)** So we get the highest rated first.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=70)** And then we simply limit by four.
>
> **[1:13](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=73)** And we have our top four recipes.
>
> **[1:17](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=77)** I bring this up specifically because often it may make sense in your documents to have a separate field like this rating avg that pre-calculate things like counts and averages.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=90)** If you checked out the document, you'll also see if there's something similar for likes.
>
> **[1:35](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=95)** So just keep that in mind.
>
> **[1:37](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=97)** Second, for this challenge, we need just a slight change to the query we just wrote.
>
> **[1:44](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=104)** Instead of asking for all the recipes with no filter, we'll add a filter on tags.
>
> **[1:51](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=111)** So in this empty document that will now become tags and equal to Mexican.
>
> **[2:04](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=124)** Now we'll get back the two Mexican recipes sorted by how popular they are.
>
> **[2:16](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=136)** Now for the third challenge, we're going to have to write a completely different query, but before we write that query, let's get back and look at our some of our documents a little more closely.
>
> **[2:31](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=151)** So I'm going to go ahead and find again all the documents and just the title.
>
> **[2:37](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=157)** And I'm also going to ask for the likes array.
>
> **[2:42](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=162)** So both of those are set to one and I'm going to sort by the title.
>
> **[2:50](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=170)** Okay? Now as you can see, each of these have some likes
>
> **[2:58](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=178)** except for poor zucchini brownies.
>
> **[3:01](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=181)** I guess no one likes those.
>
> **[3:03](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=183)** So these have the user IDs here that liked each recipe.
>
> **[3:08](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=188)** And each of these is slightly different.
>
> **[3:10](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=190)** Now, if we want to solve the challenge, we need to use an operator.
>
> **[3:17](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=197)** We need to use the operator all.
>
> **[3:20](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=200)** So I'm going to start from scratch again here and do recipes find, but instead of asking for all documents back, I'm going to ask, I'm going to say likes and open up another document here and say all.
>
> **[3:36](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=216)** And I'm going to give it an array and I'm going to put one in there for user ID one.
>
> **[3:43](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=223)** And close that out and just ask for the title again here and close that and sort by the title as well.
>
> **[4:00](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=240)** Now we got back the all the recipes that are liked by user id one ordered by their title.
>
> **[4:10](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=250)** Just to show this is working, let's clear that out.
>
> **[4:15](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=255)** Okay? so that's user ID one and we'll change one to 35, which is a different user.
>
> **[4:20](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=260)** And you'll see they'll only liked one recipe, pancakes.
>
> **[4:24](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=264)** Now if we put in both one and 35 here, we'll still get pancakes only.
>
> **[4:32](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=272)** And that's because user one while they like these other recipes the only one in common is pancakes.
>
> **[4:40](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=280)** Because this functions like an and query.
>
> **[4:44](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=284)** If we want to switch this around to get all the recipes that either of these people liked we would need to change all to in.
>
> **[4:53](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=293)** And now we get all five recipes that are liked by either of those individuals.
>
> **[5:01](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-write-a-query?u=76281980&t=301)** In the next section, we'll dig into data and schema modeling with our databases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), this. (1), case, (1), switch (1)
> **CLI Commands:** find (3), make (2)
> **Code Identifiers:** rating_average (1), rating_avg (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### The MongoDB Shell
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=0)** - [Presenter] MongoDB has also released a newer version of the Shell that will eventually replace Mongo called Mongo SH.
>
> **[0:06](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=6)** So let's review that a little too.
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=9)** You can download Mongo SH from the MongoDB website just like you did for MongoDB server in the tools.
>
> **[0:16](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=16)** Or you can use Brew if you're on a Mac.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=19)** By default, like Mongo, it'll connect to your local MongoDB server or you could specify the connection.
>
> **[0:26](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=26)** So let's go ahead and run it and you'll see it connected to my local MongoDB server.
>
> **[0:32](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=32)** So far, it looks a lot like Mongo.
>
> **[0:34](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=34)** And let's go ahead and use our cooker database.
>
> **[0:38](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=38)** Mongo SH has a couple of helpful improvements on the shell.
>
> **[0:41](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=41)** For example, if you need more info about a command and you don't want to look it up, you can add help to the end of it.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=47)** Like for example, if I was in my recipes collection and I wanted to create an index on it but I couldn't quite remember how like the right command was, then we can add help to the end and it'll give us an example of how to create an index as well as a link to the documentation.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=70)** Another nice new feature is highlighting.
>
> **[1:13](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=73)** This works both when the data is returned and when you're writing a query.
>
> **[1:18](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=78)** For example, if I'm querying my recipes and I wanted to find one where its title is Taco then you'll see it's already nicely color coding this query for me, so it's a little easier to see what I'm typing.
>
> **[1:34](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=94)** You can imagine when you're writing a much longer query, it's very useful.
>
> **[1:38](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=98)** The results are also color coded and formatted, so I don't need to add the pretty to the end as we've done earlier and we get this automatic color coding which is pretty cool.
>
> **[1:49](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=109)** Lastly, this is all based on a node js environment.
>
> **[1:52](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=112)** So you can go beyond just JavaScript.
>
> **[1:55](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=115)** For example, we could assign the results of a query to a variable.
>
> **[2:02](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=122)** So let's just call this results and we'll do db.recipes.find and I'm just going to return all the documents back 'cause there's only seven of 'em anyway.
>
> **[2:16](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=136)** And then we're going to ask for the title back and the prep time.
>
> **[2:23](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=143)** Note, yeah, you could put these in quotes if you want, and it'll just highlight it slightly differently.
>
> **[2:30](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=150)** And we're going to say, we don't need our ID back so we'll make that zero.
>
> **[2:37](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=157)** And then we're going to turn the results of this to an array.
>
> **[2:42](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=162)** So that's just standard JavaScript there.
>
> **[2:45](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=165)** And now we could do console.table and we could put our results variable inside it.
>
> **[2:53](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=173)** And now we get a nice formatted table with our results in there which makes a lot easier to read.
>
> **[3:01](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=181)** Additionally, there's auto complete.
>
> **[3:04](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=184)** So if I am writing a query here and I say recipes.find and I'm going to say go on the cook time.
>
> **[3:15](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=195)** And I know it's like, you know, I want like a greater or less or something, I can't quite remember if I press tab there, it's going to tell me there's a possible command that's GT or GTE for for the time and if I take that away, I'll actually get a couple more options here.
>
> **[3:34](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=214)** These Geo Coordinate ones aren't going to be very useful in this case, but that's just an example.
>
> **[3:40](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=220)** There's also a built-in editor for writing scripts, optional snippets and extensions you can use and a lot more.
>
> **[3:47](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=227)** So if this looks cool to you, make sure to go check it out.
>
> **[3:51](https://www.linkedin.com/learning/learning-mongodb-17360744/the-mongodb-shell?u=76281980&t=231)** Next we'll talk about data in schema modeling.

> [!info]- Semantic Content
>
> **CLI Commands:** mongo (6), find (3), make (2), brew (1), node (1)
> **Analogies:** for example (4), just like (1), imagine (1), it's like (1)
> **Code Keywords:** let (4), default, (1), case, (1)
> **Env Vars:** gte (1)
> **Documentation:** the documentation (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [presenter] (1)


### 4. Data and Schema Modeling

#### How you need to think differently
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=1)** - [Instructor] So far, we've talked about how to create a document and how to query documents.
>
> **[0:05](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=5)** We haven't really talked about strategies for data modeling.
>
> **[0:08](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=8)** Since we're dealing with a different type of database, we need to think differently about how we store and model our data.
>
> **[0:15](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=15)** As (inaudible) from MongoDB likes to say, data that is accessed together should be stored together, meaning if you're going to be reading or writing data together, it is usually a good idea to store them together.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=28)** Instead of storing data in two different places you should be thinking about how you might be able to embed one of those pieces of data inside the other.
>
> **[0:39](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=39)** This should have you thinking differently about traditional one-to-one and one-to-many relationships.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=47)** Also, keep in mind what is more likely in the case of your data.
>
> **[0:52](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=52)** Take for example, the likes in a recipe document.
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=56)** It is an a array of user IDs.
>
> **[0:58](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=58)** These could also be object IDs and while there might be thousands of likes, there will most likely be hundreds or less.
>
> **[1:05](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=65)** And since we are just storing an ID, in most cases, an array will be great for this.
>
> **[1:11](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=71)** We store likes with the recipe because we want to show the likes when we display the recipe.
>
> **[1:17](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=77)** It reduces reason queries.
>
> **[1:20](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=80)** But what about a feature like the ability for a user to save recipes.
>
> **[1:25](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=85)** For this use case, it probably makes more sense to store that in an array inside the user document instead.
>
> **[1:32](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=92)** Why do I say that?
>
> **[1:33](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=93)** Because the data is more linked to the user than the recipes.
>
> **[1:38](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=98)** We have no need to search all the recipes to find ones with the user ID in a saved recipes array.
>
> **[1:45](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=105)** Instead, here we're having a saved recipes array inside the user document.
>
> **[1:51](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=111)** We even went so far as to keep the recipe name in there so we can display that without querying for the recipe itself since the title is unlikely to change.
>
> **[1:59](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=119)** Of course, your use case may differ.
>
> **[2:02](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=122)** Same goes for ingredients.
>
> **[2:04](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=124)** While it is more complicated data, since it's an array of objects, the number of those objects has an upper bound, the max number of ingredients, in other words, that is well within a reasonable range.
>
> **[2:17](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=137)** The reason I mentioned reasonable range is you do want to keep in mind that your whole document will be loaded into RAM when it's accessed.
>
> **[2:23](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=143)** So if one of those fields is going to have a huge amount of data in it, you might want to split that up.
>
> **[2:29](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=149)** More on that later.
>
> **[2:31](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=151)** Take another example, addresses.
>
> **[2:34](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=154)** In a relational database, you'd likely have a user's table, and an addresses table, and you'd probably have another table that would link the address and the user.
>
> **[2:45](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=165)** With a document model, you could handle that very differently.
>
> **[2:49](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=169)** Since the address only applies to the user, you can embed the address using a sub-document in the user document.
>
> **[2:58](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=178)** This makes sense because you're almost always going to read and modify the user's address in the context of the user.
>
> **[3:06](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=186)** So by stringing it together, you not only simplify things, you reduce queries.
>
> **[3:13](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=193)** Sometimes, however, references make more sense.
>
> **[3:16](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=196)** Let's take a very different example.
>
> **[3:18](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=198)** If we have information associated with something that is rarely read at the same time, for example, like something a user would click on a page to load it.
>
> **[3:29](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=209)** Okay, like say we had some ridiculous feature, our bosses asked for like music to listen to while cooking.
>
> **[3:35](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=215)** And we store song data, and lyrics, and cover art and all that.
>
> **[3:39](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=219)** This makes sense to store separately, as it would rarely be read or written at the same time and thus reduce, for example, how much RAM we use.
>
> **[3:49](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=229)** If you are doing this, though, you should probably consider using unique indexes in both documents.
>
> **[3:55](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=235)** So far, we've mostly been talking about one-to-one relationships.
>
> **[3:59](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=239)** What about one-to-many?
>
> **[4:01](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=241)** One-to-many would be something like a recipe and its comments.
>
> **[4:04](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=244)** There's one recipe, but many comments.
>
> **[4:08](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=248)** If our site is really successful, and the recipes have lots and lots of comments, perhaps even threaded, we might not want to store all those comments inside the recipe document.
>
> **[4:19](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=259)** Instead, we could just store the comments in a separate collection of documents, but we could still take advantage of MongoDB to optimize the data performance.
>
> **[4:29](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=269)** If we change our UX so that the page loads with the recipe with top comments and the user can optionally press a see more button to get the rest of the comments, we could just store the top comments in the recipe and leave the rest in separate documents.
>
> **[4:45](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=285)** This can improve performance dramatically since on initial page load and under most use cases, you only ever query your recipe document.
>
> **[4:56](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=296)** You do want to keep a few things in mind, though.
>
> **[4:59](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=299)** Part of the reason we'd store things this way is it is unlikely a user is going to ever need to see all the comments they've ever made.
>
> **[5:07](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=307)** So we don't need to store this information with a user.
>
> **[5:10](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=310)** Instead, it is most likely a recipe needs to show the comments made on a recipe and those comments aren't going to change.
>
> **[5:19](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=319)** But some things can change.
>
> **[5:20](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=320)** Take a user's information for example.
>
> **[5:23](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=323)** If you store this as part of the comments, and you want to show a full name and a profile picture, these things might change over time.
>
> **[5:30](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=330)** So you'll need to keep that in mind and either store that data slightly differently or have a process to update it.
>
> **[5:36](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=336)** You could, for example, store just the user ID and the comment and get all the user IDs and do a query to the user collection.
>
> **[5:46](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=346)** So treat it more like a join.
>
> **[5:48](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=348)** But you could also store some basic information about the user, enough to load the comment, and then after page load, make a query to the user's collection and update that via Ajax.
>
> **[5:59](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=359)** And then you can add in your profile image.
>
> **[6:02](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=362)** Well, that was a lot.
>
> **[6:03](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=363)** So once you have your data model sorted, the next most important thing is indexing.
>
> **[6:08](https://www.linkedin.com/learning/learning-mongodb-17360744/how-you-need-to-think-differently?u=76281980&t=368)** We'll talk about that next.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), picture (1)
> **Code Keywords:** this. (1), case, (1), let (1), this, (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** ram (2)
> **Definitions:** is an  (1), in other words (1)
> **Warnings:** keep in mind (2)
> **UI Navigation:** click on (1)
> **Prerequisites:** you'll need (1)

#### Basic indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=1)** - [Instructor] Ah indexes, or is it indices?
>
> **[0:03](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=3)** Anyhow, index early, index often that's what I say.
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=7)** Seriously though, having at least a basic understanding of indexes can and will help your application perform at its best.
>
> **[0:15](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=15)** While this topic can get very deep and complex, the basic idea of indexes, is very simple.
>
> **[0:22](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=22)** Just like an index in the back of a book, an index in a database will allow a query to quickly look up where some information is in your database without having to read or scan the entire book.
>
> **[0:36](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=36)** Even computers need a little help sometimes.
>
> **[0:41](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=41)** So let's start with a query here to find out how indexes in MongoDB work.
>
> **[0:46](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=46)** I'm going to do a simple query on our recipes collection to find any recipes that have a cook time of 10 minutes exactly.
>
> **[0:58](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=58)** So I'll do cook time, 10 minutes.
>
> **[1:03](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=63)** And let's just ask for the title back only.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=70)** You'll see one document comes back, "Pancakes".
>
> **[1:15](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=75)** Now let's add another command to help us see what really happened under the hood.
>
> **[1:21](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=81)** So we'll keep our same find query here, but we'll at the end a command, explain.
>
> **[1:29](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=89)** And we need some extra information for explain, so we're going to ask for the execution stats.
>
> **[1:38](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=98)** Now, this is going to bring back a bunch of stuff that we're not going to cover here.
>
> **[1:43](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=103)** The important part here is under execution stats.
>
> **[1:47](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=107)** You could see a total docs examined is seven.
>
> **[1:51](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=111)** Now, there are seven recipes in our database, so that means the query had to examine all the documents in our collection.
>
> **[1:58](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=118)** Imagine if we had 10,000, or a million documents.
>
> **[2:02](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=122)** Well that might not be so great.
>
> **[2:04](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=124)** Let's try another query real quick, and we'll also run explain on it.
>
> **[2:10](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=130)** So here, we're going to look where the title is, "Tacos", instead of prep time.
>
> **[2:16](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=136)** And that we're going to ask it to explain, and give us the execution stats.
>
> **[2:21](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=141)** Again, we'll scroll up here to the execution stats and we'll see total documents examined is now one.
>
> **[2:32](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=152)** Well, how did that happen?
>
> **[2:35](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=155)** Simple, title already has an index on it.
>
> **[2:39](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=159)** As an example, I created an index on this field.
>
> **[2:42](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=162)** If I hadn't done that, this would've read, "Total documents examined: seven".
>
> **[2:46](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=166)** So we just increased our performance on our query dramatically.
>
> **[2:51](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=171)** Again, imagine if we had 10,000 recipes, we'd have avoided 9,999 recipes with one simple index.
>
> **[3:00](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=180)** We can get some information about the indexes we have in our collection by running a special command.
>
> **[3:05](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=185)** But first, let me show you a little trick.
>
> **[3:08](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=188)** If we do db.recipes, our collection, and then press Tab twice, I'll get a list of commands I can run on my collection.
>
> **[3:18](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=198)** Now here, my font's really big, so it gave it to more.
>
> **[3:21](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=201)** So I'm going to have to press space bar to find what we're looking for here, which is there's a get indexes command and in fact there's also a get indices in case that's how you like to pronounce it.
>
> **[3:33](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=213)** So let's go ahead and run that get indexes.
>
> **[3:38](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=218)** You could see we have two different indexes.
>
> **[3:40](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=220)** The first one is the default index created by MongoDB itself, and that's on the _ID field.
>
> **[3:47](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=227)** And the second one here is on the title field and you also see it's unique, more on that later.
>
> **[3:53](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=233)** And it's called "Title_1".
>
> **[3:56](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=236)** That is how the query was able to jump right to the right document when we had a search on title.
>
> **[4:05](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=245)** So how do we create an index?
>
> **[4:08](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=248)** Well, if we had looked at that listing earlier we would've seen there is a DB create index command.
>
> **[4:16](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=256)** And here we'll just tell it what we'd like to create our index on.
>
> **[4:21](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=261)** So since we were doing cook time before let's go ahead and tell it to do cook time.
>
> **[4:25](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=265)** And then you need a direction, you want the index to go.
>
> **[4:27](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=267)** This is exactly like how sort works with ascending or descending.
>
> **[4:31](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=271)** So just for fun, we'll make it descending.
>
> **[4:35](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=275)** And now it tells us it created the index.
>
> **[4:38](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=278)** And sure enough, if we run get indexes, we have a third index here and it's called "Cook time -1".
>
> **[4:49](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=289)** That's the default name you could actually give it your own name if you want.
>
> **[4:53](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=293)** The order here doesn't actually matter a ton but you should try and match how your queries will most often be run, be it ascending or descending.
>
> **[5:01](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=301)** Now if you run our query again, let's go ahead and do that again on cook time, 10 minutes and explain that.
>
> **[5:13](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=313)** If we scroll up, we will see that the total documents examined is now one, success.
>
> **[5:23](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=323)** Now to remove an index, we can use the drop index command.
>
> **[5:27](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=327)** For that, we're going to need the name of the index.
>
> **[5:31](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=331)** So again, let's run our get indexes.
>
> **[5:35](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=335)** And you may already remember the index was called "Cook time -1".
>
> **[5:42](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=342)** And we can simply run DB.recipes.drop index, and in just single regular quotes here, the name of the index and it will go ahead and drop that.
>
> **[5:58](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=358)** If we run get indexes again, we only have two indexes.
>
> **[6:03](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=363)** There are a lot of options on indexes like unique, which will make sure any two documents can't have the same or exact same field or any values twice or compound indexes that can have two or more fields in them and even geospatial indexes and a lot more.
>
> **[6:21](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=381)** But the important bit to remember is to examine the queries you're running especially if you're running them often and make sure you have proper indexes on those fields.
>
> **[6:30](https://www.linkedin.com/learning/learning-mongodb-17360744/basic-indexes?u=76281980&t=390)** Next, we'll talk about how we can store files within MongoDB using grid FS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9)
> **CLI Commands:** find (4), make (3)
> **Analogies:** imagine (2), just like (1)
> **UI Navigation:** scroll up (2)
> **Definitions:** is a  (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### Using different collection types
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=0)** - [Instructor] So far, we've mostly talked about how when using documents we need to think differently about storing and structuring our data.
>
> **[0:08](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=8)** Going deeper, there are certain types of data that are best stored in special types of collections.
>
> **[0:13](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=13)** By default, a collection could store basically any type of document but MongoDB supports some special types of collections that are designed to handle certain use cases.
>
> **[0:23](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=23)** The tool we'll talk about here are capped collections and time series collections.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=28)** Capped collections cap the amount of data or documents that can be stored in them and automatically removes documents once that cap or limit is reached.
>
> **[0:38](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=38)** It also ensures that all the documents are inserted in the order they were created.
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=43)** This is especially great for cases where you have something like log data where the order matters but the usefulness of that data lessens over time.
>
> **[0:53](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=53)** Now typically, we just allow MongoDB to automatically create a collection for us, but in this case we want it to be capped from the start.
>
> **[1:01](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=61)** So to do this, we'll run a command like this, db.createCollection.
>
> **[1:09](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=69)** And we'll give that collection a name so let's just call this error_log.
>
> **[1:14](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=74)** And then we're going to give it some attributes like capped being true and the size.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=83)** So this would be the max size that this collection could be before it starts deleting documents out of it.
>
> **[1:31](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=91)** Along with this size, we could do a max number of documents and right here we could add that by saying max and whatever that max is, in this case 10,000 documents.
>
> **[1:46](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=106)** Out of the box, a capped collection requires a max size not necessarily a max number of documents.
>
> **[1:52](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=112)** However, when the max size is reached, it will automatically start deleting documents.
>
> **[1:57](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=117)** We'll talk about that process in a moment.
>
> **[2:00](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=120)** You could choose a specific amount of disk space you want to use by the size, or you could pick the max number documents.
>
> **[2:08](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=128)** Either way, MongoDB will take care of this for you.
>
> **[2:12](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=132)** So, how does this automatic deletion work?
>
> **[2:15](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=135)** MongoDB uses a principle called first in, first out, where the oldest data, the first in, is next in line or first to be deleted, i.e. kicked out.
>
> **[2:25](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=145)** So you never have to worry about running out of disk space due to too many documents or just keeping around a lot of old data you don't need anymore.
>
> **[2:33](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=153)** MongoDB can do this since the insertion order is guaranteed as we talked about earlier.
>
> **[2:40](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=160)** You can also convert an existing collection to a capped one like so.
>
> **[2:44](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=164)** There are a few limitations with capped collections.
>
> **[2:47](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=167)** By default, there is no index, since it doesn't need it as the insertion order is guaranteed.
>
> **[2:53](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=173)** That means if you need to update your documents you need to create an index for performance reasons.
>
> **[2:59](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=179)** Also, you can't shard a capped collection.
>
> **[3:02](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=182)** Another type of collection is time series.
>
> **[3:05](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=185)** This is a new type in MongoDB 5.0.
>
> **[3:08](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=188)** Time series collections use some of the same ideas about insertion order but focus on one or more unchanging parameters.
>
> **[3:17](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=197)** For example, what if instead of just a log, you wanted to store this data something at a given time and keep measuring and tracking that.
>
> **[3:25](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=205)** An example might be stock data.
>
> **[3:27](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=207)** You might want to track how the stock is doing every 30 seconds during the whole trading day.
>
> **[3:31](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=211)** You could do this in time series collection by making the stock symbol, the thing that doesn't change, and some other metadata, the things that you track every 30 seconds.
>
> **[3:42](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=222)** You could track, for example, the stock price, volume, high, low, and open price, or even some data about some other stocks symbol at that exact 30 second interval.
>
> **[3:52](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=232)** You could use this to build very rich data set to do all sorts of queries later on and build out chart to do an analysis.
>
> **[4:00](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=240)** And because we use a time series collection, our data is already optimized for those queries later.
>
> **[4:05](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=245)** Another example might be some kind of sensor data, maybe a really smart smoker pellet grill.
>
> **[4:12](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=252)** We could pipe out the input of the temperature sensor and the grill, the outside temperature, temperature of the meat, and the pellet level every minute.
>
> **[4:21](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=261)** We would then be able to analyze that data in real time essentially and see trends like the temperature outside getting colder.
>
> **[4:28](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=268)** So you may need more pellets combined with the current pellet level to send a push notification to a phone to let a user know they need to refill the pellet sooner than they thought.
>
> **[4:39](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=279)** Even better, their options to automatically delete these documents via a time to live option, so you can cap them like a capped collection.
>
> **[4:48](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=288)** There are lots more options with time series collections, so make sure to check out the docs if this seems interesting to you.
>
> **[4:55](https://www.linkedin.com/learning/learning-mongodb-17360744/using-different-collection-types?u=76281980&t=295)** Next we'll have a challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (2), this, (2), let (2), delete (1)
> **Code Identifiers:** createcollection (1), error_log (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Versions:** 5.0 (1)
> **Cross-References:** we talked about (1)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)

#### Challenge: Avoiding joins
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=0)** (upbeat techno music)
>
> **[0:06](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=6)** - [Instructor] All right.
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=7)** It's challenge time.
>
> **[0:08](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=8)** If you're coming from the relational database world, you'll be familiar with joins and the use of multiple tables to construct a result.
>
> **[0:16](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=16)** But we aren't using a relational database.
>
> **[0:17](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=17)** We're using a document database.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=19)** Now, imagine this scenario; The recipe site is going great.
>
> **[0:23](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=23)** So great, in fact, we're going to publish a book on Kickstarter with our best recipes in it.
>
> **[0:29](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=29)** And the campaign was a great success but now it's time to ship the rewards.
>
> **[0:33](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=33)** We have a couple of sources of data mostly given to us in spreadsheets and CSV dumps.
>
> **[0:40](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=40)** We have a list of backers that has user ID, first name, last name, email, and a backing level.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=47)** We have a separate list of shipping addresses with a user ID, street name, city, zip state, et cetera.
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=56)** And then lastly, have a completely separate list that has user ID and an item name of their backer reward.
>
> **[1:03](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=63)** And the user may have one or more of these items.
>
> **[1:07](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=67)** So how can we take these different bits of data and instead of say putting them in different tables and joining 'em together, store them in a single document, that is a document for each backer.
>
> **[1:18](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=78)** I put some example files in a lesson slash 4.4 folder if you're having trouble visualizing this source data.
>
> **[1:25](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=85)** But just remember what we talked about earlier with one-to-one relationships and one to many relationships.
>
> **[1:32](https://www.linkedin.com/learning/learning-mongodb-17360744/challenge-avoiding-joins?u=76281980&t=92)** Next, I'll show you one way we could handle this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** csv (1)
> **Versions:** 4.4 (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat techno music) (1)

#### Solution: Avoiding joins
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=0)** (upbeat techno music)
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=7)** - [Instructor] So how did you do?
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=9)** This challenge might have been a little bit harder but hopefully the solution you came up with was actually pretty simple and elegant.
>
> **[0:16](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=16)** Here's one way we could have solved this.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=19)** Using our three different data sources, first, we'll create a document that has the user ID, the first name, last name, email, and backing level here on line six.
>
> **[0:32](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=32)** Then, we're going to add a couple different combinations of the objects and arrays.
>
> **[0:37](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=37)** To get the shipping address, we're going to have an object that has all the shipping address information inside it.
>
> **[0:44](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=44)** And for rewards, since there could be more than one, we're going to have an array.
>
> **[0:49](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=49)** So in this case, the person got a book and a beach towel.
>
> **[0:52](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=52)** Why we gave them beach towels, I have no idea.
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=56)** Take a look at the shipping address real quick.
>
> **[0:59](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=59)** Since we're only going to ship to them once, there's no real reason to sh -- to store this in a separate table like an address collection, because we're only going to ship to them once and once we ship that address is never going to change again.
>
> **[1:12](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=72)** Similarly with rewards, we don't need to link over to another collection or table that says, you know, ID one and ID two for book and beach towel.
>
> **[1:22](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=82)** We can just put 'em right here in this array.
>
> **[1:24](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=84)** So now we can take our three different data sources and put them in one nice, succinct document.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/solution-avoiding-joins?u=76281980&t=90)** In the next section we're going to talk about how you can code with Mango DB.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), case, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat techno music) (1)


### 5. Coding with MongoDB

#### Python
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=0)** - [Narrator] So far, we've been working with MongoDB directly, and that's all well and good, but what about actually making applications with it?
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=7)** Luckily, there are drivers and libraries for a ton of programming languages and frameworks to allow us to do just that.
>
> **[0:14](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=14)** Here we'll be starting with Python, but if you're more comfortable with JavaScript, or PHP, or Go, feel free to skip to those videos instead.
>
> **[0:23](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=23)** Each one will cover the same examples.
>
> **[0:25](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=25)** We won't be diving deep, or even talking about best practices, but there will be code files and some useful resources provided in the README files in the course's repo.
>
> **[0:35](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=35)** So, let's get started.
>
> **[0:36](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=36)** If you're installing this locally, the first thing you'll want to do is install PyMongo, which is the official Python driver maintained by MongoDB.
>
> **[0:46](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=46)** You should see the link on your screen.
>
> **[0:49](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=49)** Browse through and follow whatever the current instructions are.
>
> **[0:53](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=53)** I used PIP for mine, so, this is probably a great example.
>
> **[0:59](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=59)** If everything went well after this install, we should be able to connect to our database.
>
> **[1:03](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=63)** I'm going to do this in our code space to illustrate it a little more cleanly, since everything's already set up for us.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=70)** If we go to the Lessons folder, and 5.1, you'll see a number of Python files here, but, first, let's just try to connect from the Python shell, so, we'll open a Python shell in the terminal in our code space.
>
> **[1:27](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=87)** Again, if you don't remember how to open that, you can go over here to Terminal, and create a new terminal.
>
> **[1:34](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=94)** We'll open Python, and then we will import PyMongo that we just installed, but, again, in the code space, you don't need to do that.
>
> **[1:43](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=103)** It's already been done for you, and then we'll set up our client, and in this case we'll use local host, and this would be the same if you're doing it on your local machine, and the default port.
>
> **[1:56](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=116)** Then we'll set a variable here called db, and we'll sign that to the cooker database.
>
> **[2:04](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=124)** Now we should be able to do db.name and get back cooker, so, everything's working great.
>
> **[2:12](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=132)** We can also run commands like we would on the shell, so, we could do recipes on our recipes collection, and find_one(), and we'll get back one document here.
>
> **[2:29](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=149)** We could also use find() instead of find_one(), but you see now, you're getting back a cursor.
>
> **[2:35](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=155)** If you remember earlier, find() brings back a cursor of data, not just a string of documents, so, to deal with that, we're going to need to actually make a Python program.
>
> **[2:48](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=168)** To find some of the examples, I'll go ahead and close the terminal here, and, again, go to the 5.1 folder, and I'll open one of these files.
>
> **[2:56](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=176)** Since we're in code spaces, we can press the play button here, and this will execute the file for us, and this says, "Setting up mongo client, Connecting to database, Connected successfully," and the database name is cooker, so, how did we accomplish that?
>
> **[3:15](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=195)** You can see in line three here, we'll import pymongo just like we did on the shell, and we'll print out that message, set up our client exact same way, set our cooker database, and run the command on that, and assign that to a variable called database_name, which we then output at the end in this print statement.
>
> **[3:38](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=218)** The next example is using find_one() again, like we did in the Python shell.
>
> **[3:44](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=224)** This time, instead, we'll import pretty print.
>
> **[3:47](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=227)** It's going to look a little nicer.
>
> **[3:50](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=230)** When we execute this, we'll see a somewhat formatted version of a recipe document right here, and we did that by running the find_one() command, and then using pretty print around that recipe document, but, what about that cursor example?
>
> **[4:11](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=251)** So, here we can see we run a for loop on line 10, and we use the results of a find() command, and then we print out the title from each recipe.
>
> **[4:29](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=269)** In this case, I'm calling the recipe "item," so, we'll loop through each recipe that comes back, and print out the title, so, we execute that, and you can see we have our different recipes just spinning out the title.
>
> **[4:44](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=284)** By way of example, again, we can go into a terminal, and go to lessons/5.1, and I can just type "python," and then the name of the file, which was three "-find," and you'll get the same output.
>
> **[5:05](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=305)** We can also add additional commands like sorting and limiting, so, in this example here, we have on line 10, again, a standard find() command, and we append this .sort by title, and we'll use the pymongo.ASCENDING, and they just do this to say .ASCENDING or .DESCENDING, because sometimes that negative one, one situation can be a little bit confusing, and then a limit of three here, so, again, it should print out three document titles, three recipe titles rather, and we'll see here, we have just three of these, and it's been ordered A, B, C, so, unlike this example, which was not ordered.
>
> **[5:52](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=352)** Lastly, we have an example of a recipe search.
>
> **[5:57](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=357)** I'm going to start out by executing this first before I go into the code with this one, so, we'll again use Python, and we'll use this fifth example, and it'll bring us a prompt saying, "What would you like to cook?"
>
> **[6:09](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=369)** Well, that's a theme of this course, so, we'll say "taco," and we get back two results here, one for chicken soft tacos, and one for tacos, as well as a description from the recipe, and a sentence that says this recipe will take about 29 minutes, and be about 205 calories per serving, so, how did we accomplish this?
>
> **[6:32](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=392)** Again, we import pymongo, and this time we'll also import os, which will allow us to get some interaction for the user.
>
> **[6:41](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=401)** We'll do the same connections over here to connect to the database, but then we'll print out, and ask for an input for what they'd like to cook, and assign that to a search variable.
>
> **[6:54](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=414)** Clear screen for them, just make it a little cleaner, and then it will output our search, so, we're searching for what we asked them in the search variable.
>
> **[7:06](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=426)** We found the following recipes here.
>
> **[7:08](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=428)** I'm putting my query in a separate variable, just to make it a little bit more clear, and that query will be on the title, and here, if you recall back in earlier lessons we're using a red regex search here, so that I don't have to put capital "T," Tacos, I could put capital "T" here, or lowercase tacos, and we'll find either one, because this makes it case insensitive here with these options, and there's a note about this above, in the code you can look at, then, on line 30, we've run another loop based on the query that we've now sent to find() here, and we'll be able to get a total cook time by combining the prep time, and the item, the recipe's cook time, here to get a total time, and then, we'll output the title, output the description,
>
> **[7:59](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=479)** and then, this is the line where we have, the recipe will take about this many minutes, so, if I kind of scroll over here a little bit, you'll see we're taking that total time we just calculated above, and adding it to get a total time, and also pulling out the recipe's calories per serving to say in that sentence that told us it was about such and such calories per serving, and then we print out the rest of that, so, we'll run that one more time, and you'll see here, "What would you like to cook?"
>
> **[8:35](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=515)** This time, I'm just going to type "meat," and we'll see we get a result back for Brown Sugar Meatloaf, so, if Python's your thing, why don't you try editing these files and messing around a bit?
>
> **[8:46](https://www.linkedin.com/learning/learning-mongodb-17360744/python?u=76281980&t=526)** It's really great in code spaces, because you don't need to worry about really messing anything up, because you can always restart it, so, again, if Python's your thing, why don't you see what you can make with PyMongo in MongoDB, and have some fun.

> [!info]- Semantic Content
>
> **CLI Commands:** python (12), find (8), make (4), php (1), pip (1)
> **Env Vars:** ascending (2), php (1), readme (1), pip (1), descending (1)
> **Code Keywords:** let (2), this, (1), case, (1), this . (1)
> **Code Identifiers:** find_one (4), database_name (1)
> **Tools:** terminal (5)
> **Prerequisites:** set up (3), install (2)
> **Versions:** 5.1 (3)
> **UI Navigation:** go to (3)

#### Node.js
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=0)** - [Instructor] Unless you've already watched the Python or PHP videos, so far we've been working with MongoDB directly.
>
> **[0:06](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=6)** Which is great, but what about making actual applications?
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=9)** Node JS is just one of many frameworks and libraries that have official drivers from MongoDB.
>
> **[0:14](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=14)** again, if you're more comfortable with Python or GO or PHP, feel free to skip to one of those videos instead.
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=20)** Each one will cover the same sort of examples, but you can try them all out in the code spaces without setting anything up.
>
> **[0:26](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=26)** We won't be diving deep, or even talking best practices but there will be code files and some useful resources provided in the readme in the course repo.
>
> **[0:35](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=35)** For a local install, the first thing we'll want to do is go to the official node driver maintained by MongoDB.
>
> **[0:41](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=41)** You can see the links in the lesson readme, or just Google it.
>
> **[0:44](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=44)** Here, we'll be using NPM to install the driver, specifically at the 4.10 version, but whatever's the latest will probably work fine.
>
> **[0:53](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=53)** If you have any problems, go ahead and set the exact version.
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=56)** Make sure to check out the docs or the latest install instructions.
>
> **[1:01](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=61)** To make things easier, I've already set up everything in the code space so you can use that to view the files, test them out, and even edit your own.
>
> **[1:09](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=69)** So let's go to lessons 5.2, and you'll see a number of node files here.
>
> **[1:18](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=78)** Let's go ahead and give them a try.
>
> **[1:20](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=80)** First, let's look at this first one.
>
> **[1:22](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=82)** We can open up in a terminal by right clicking, say "Open integrated terminal" and it'll go right to the folder we're in, and you can type node one dash test.
>
> **[1:34](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=94)** You'll see it said "Set up Mongo client, connecting database, connected successfully."
>
> **[1:39](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=99)** And let us know the database name is Cooker.
>
> **[1:41](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=101)** So how do we do that?
>
> **[1:43](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=103)** If you open up the file here, we'll see we first, on line one, make a Mongo client, and I'm adding this assert- it's not necessary.
>
> **[1:55](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=115)** We have the connection string to the database, as well as the database name on line five here.
>
> **[2:01](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=121)** And then we're consoling out that we're setting up the client, here in an anonymous function but it could be a name function as well.
>
> **[2:08](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=128)** We have our client set up and we connect with our connection string, and we await connection to the client and successfully connected.
>
> **[2:21](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=141)** We pick our database, and then we can run on line 21 here, this database database name which will get us the name of our database, and then we just close out our connection.
>
> **[2:34](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=154)** Next, let's try the other examples.
>
> **[2:38](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=158)** Again, I can open this in my terminal.
>
> **[2:44](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=164)** In this case, we ran a version of the find one command and node nicely color coded and formatted this for us.
>
> **[2:52](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=172)** Let's see how we did that.
>
> **[2:57](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=177)** Again, same general setup here with the connection string and the client.
>
> **[3:02](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=182)** And we'll go down and we'll specify a collection, this time for recipes in line 14.
>
> **[3:08](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=188)** And then on line 16 here, we'll actually get our recipe and assigned at something.
>
> **[3:13](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=193)** So we're using a find one command on our connection, or a collection rather.
>
> **[3:18](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=198)** And we'll console log out the recipe.
>
> **[3:21](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=201)** So that nice formatting is just node JS nicely formatting JSON for us.
>
> **[3:27](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=207)** Next we can try the find command.
>
> **[3:35](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=215)** In this case, we're listing out seven different recipes in our database.
>
> **[3:40](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=220)** So let's look at that.
>
> **[3:45](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=225)** Again, same connections, and we'll skip down, again our collection recipes.
>
> **[3:52](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=232)** And here in line 16 we're using just the find instead of find one command.
>
> **[3:56](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=236)** And that will bring us back a cursor, if you recall from earlier, which means we'll need to iterate over that to get our recipes out of the cursor.
>
> **[4:04](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=244)** So we're just doing a simple wild loop here, and keep doing it as long as we have another document.
>
> **[4:10](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=250)** That's what the has next here is.
>
> **[4:12](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=252)** And we'll get each next document, I called it "Recipes" here.
>
> **[4:18](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=258)** And then we will console log out that.
>
> **[4:22](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=262)** And that's how we got our seven recipe titles.
>
> **[4:25](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=265)** We can also do commands on those.
>
> **[4:28](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=268)** So in this file, four, we are going to on line 16.
>
> **[4:33](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=273)** Add onto our find a dot sort, and we'll pick title and one for sending.
>
> **[4:43](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=283)** And we'll limit that to three documents.
>
> **[4:46](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=286)** So we can go ahead and run that example here.
>
> **[4:52](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=292)** And we'll see, we now have just three document titles, and the recipes are in A B C D order.
>
> **[5:01](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=301)** Lastly, we'll have a more interactive example.
>
> **[5:05](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=305)** So we'll do the fifth example here, and we'll say, what would you like to cook?
>
> **[5:10](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=310)** Well, going with a theme here, we want tacos.
>
> **[5:14](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=314)** So that came back with a searching for tacos.
>
> **[5:19](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=319)** We found the following recipes for us, that gave us a title here, the description, and then the sentence.
>
> **[5:26](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=326)** The recipe will take about 29 minutes, and be approximately 205 calories per serving.
>
> **[5:33](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=333)** So how do we accomplish that?
>
> **[5:38](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=338)** This time it's a little bit different.
>
> **[5:40](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=340)** We're going to, on line one here, use the standard node way of reading in user input.
>
> **[5:48](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=348)** And we're going to ask the question you saw at the beginning.
>
> **[5:52](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=352)** And then we're going to go ahead and use a name function here to do our search.
>
> **[5:58](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=358)** So we're going to take in the search input that you typed.
>
> **[6:02](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=362)** So in my case I typed tacos, and we're going to do a similar connection here again as we've done in our other examples.
>
> **[6:11](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=371)** And if we skip down here to line 28, you'll see I've put the query now in its own variable to make it a little easier to see.
>
> **[6:20](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=380)** We've also changed it a little bit.
>
> **[6:22](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=382)** We're using a RegX search with this I option, which makes things case insensitive.
>
> **[6:29](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=389)** So if the recipe title is capital T tacos, and I type lowercase tacos it's also going to match either way.
>
> **[6:38](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=398)** And then on line 35, we are going to run the find command with the query that we put in the variable here on line 28.
>
> **[6:46](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=406)** And then we will sort by the title sending.
>
> **[6:50](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=410)** And this line on 37, just going to clear out the interface there so it's a little cleaner and you'll see the searching for whatever search we put in.
>
> **[7:02](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=422)** And then on line 45 we'll iterate over the cursor, the example you saw, two different documents- and two different recipes rather came back, and we will display that recipe.
>
> **[7:14](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=434)** And this function here is how we got some kind of nice formatting.
>
> **[7:19](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=439)** So let's skip down to that on line 59 here.
>
> **[7:22](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=442)** So that will take in our recipe document, right here.
>
> **[7:26](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=446)** It will calculate a total time on line 61 here, by combining the recipe prep time and the recipe cook time.
>
> **[7:35](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=455)** So these are two fields from the document, combines 'em into a total time, then gets out the recipe title.
>
> **[7:43](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=463)** And you'll notice here I used dot syntax.
>
> **[7:46](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=466)** And here I used an erase syntax, either of them perfectly valid to do in note.
>
> **[7:51](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=471)** And we will output the description line 624 here.
>
> **[7:55](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=475)** And then finally that line that showed us that the recipe will take approximately the total time, which we've calculated up here, and the calories per serving right there.
>
> **[8:08](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=488)** So go ahead and take some time to look through these example files to better understand them, and feel free to tweak them the code space with some of your own changes.
>
> **[8:17](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=497)** And if Java script's your thing, why not see if you can make something cool with node JS and MongoDB?
>
> **[8:22](https://www.linkedin.com/learning/learning-mongodb-17360744/node-js?u=76281980&t=502)** Have fun!

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), find (7), make (5), python (2), php (2)
> **Code Keywords:** let (8), function (4), case, (2), try. (1), assert (1)
> **Prerequisites:** install (3), set up (3), setup (1)
> **Env Vars:** php (2), npm (1), json (1)
> **Tools:** terminal (3)
> **Versions:** 4.10 (1), 5.2 (1)
> **Documentation:** the readme (1), the docs (1)
> **UI Navigation:** go to (1)

#### PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=0)** - [Instructor] If you skipped right to this video to see how to use MongoDB with PHP, then you're in the right place.
>
> **[0:05](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=5)** Again, if you're more comfortable with Python, JavaScript, or Go, feel free to skip to one of those videos instead.
>
> **[0:10](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=10)** We'll cover the same sort of things in those examples.
>
> **[0:13](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=13)** In this course so far, we've been working with MongoDB directly, which is great.
>
> **[0:17](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=17)** But what about making actual web applications?
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=20)** PHP is one of many languages that have official drivers from MongoDB, and there's plugins for many major frameworks, like Laravel.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=27)** Here, we won't be diving too deep or even talking best practices, but there will be code files and some useful resources provided in the course repo.
>
> **[0:37](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=37)** For a local install, the first thing we'll need to do is install the official PHP driver, i.e. extension, maintained by MongoDB.
>
> **[0:45](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=45)** See the links in the README.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=47)** Also, make sure to check out the docs for the most recent install instructions.
>
> **[0:52](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=52)** But the most important thing is to add the line to your PHP INI file to enable the extension and save it.
>
> **[0:59](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=59)** The next step is to install the PHP library for MongoDB.
>
> **[1:04](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=64)** The easiest way to do this is via Composer and that's the same way I've done it in the codespace.
>
> **[1:08](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=68)** So let's go ahead and check it out there.
>
> **[1:12](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=72)** So if we launch our codespace and go to lessons and the 5.3 folder, you'll see a number of example PHP files here.
>
> **[1:22](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=82)** This index dot PHP could be launched by pressing this button at the top.
>
> **[1:28](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=88)** And you'll get this page here, which we'll dive into in a second.
>
> **[1:34](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=94)** The way that works in the codespace, if you look at this ports tab, you can see we're running on port 3000 default PHP server.
>
> **[1:43](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=103)** You can do the same thing on your local or whatever setup you have.
>
> **[1:48](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=108)** All right, so let's look at some of those example files.
>
> **[1:51](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=111)** This first one here, we'll test.
>
> **[1:53](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=113)** We'll be setting up the Mongo client, connect to the database, connected successfully, told us our database name's cooker.
>
> **[2:00](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=120)** So let's look at how we did that.
>
> **[2:02](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=122)** So for file one here, you'll see we require the autoload file and then the header, here, is just for presentation reasons.
>
> **[2:11](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=131)** And right here on line nine, we start the client connection with our connection string, here, to our local database.
>
> **[2:19](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=139)** And we're showing, connect to the database.
>
> **[2:22](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=142)** At this point, we're selecting the cooker database on line 15 here, and it was connected successfully.
>
> **[2:29](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=149)** And right here, we're going to save our database name to a variable.
>
> **[2:33](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=153)** So we're using this getDatabaseName command on our database and then outputting it here.
>
> **[2:41](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=161)** And then again, just footer for presentation.
>
> **[2:45](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=165)** Next, we'll use the find one command and you'll see it outputted a document here.
>
> **[2:51](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=171)** And this is a recipe for chicken soft tacos.
>
> **[2:55](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=175)** So for this, we have essentially the same setup here, where we're connecting.
>
> **[3:01](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=181)** Except for here on line 12, we're going to specifically get a collection, which is the recipes.
>
> **[3:07](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=187)** So that's on the client, the database cooker and the recipes collection.
>
> **[3:13](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=193)** And then we're running the findOne command, on the collection this time, instead of the database.
>
> **[3:19](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=199)** And that will bring back a recipe, which we save to this variable.
>
> **[3:22](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=202)** And we're going to pretty print it and output it here in JSON.
>
> **[3:28](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=208)** And that's how we can see that, here.
>
> **[3:31](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=211)** For the find command, we're going to output the names of each of our recipes here.
>
> **[3:38](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=218)** And so that's going to work a little bit differently.
>
> **[3:41](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=221)** We'll see in example three here, the same connection set up and then again, picking our recipes collection.
>
> **[3:50](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=230)** But this time we're using find and if you recall from earlier, find returns a cursor.
>
> **[3:54](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=234)** So it means we need to iterate over it.
>
> **[3:56](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=236)** So here, we're just doing a simple for loop on each of the recipes that comes back, as a recipe, and outputting the title.
>
> **[4:04](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=244)** You can see here, I've used an array syntax to get the title field off the recipe.
>
> **[4:14](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=254)** We can also use additional commands on this.
>
> **[4:17](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=257)** So here, we only have three recipes and they're in alphabetical order now.
>
> **[4:22](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=262)** So how do we do that?
>
> **[4:25](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=265)** Again, same connection setup and our collection.
>
> **[4:30](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=270)** Except for here, I'm going to create a new options variable.
>
> **[4:33](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=273)** And I'm going to start off just as an empty array.
>
> **[4:35](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=275)** And then I'm going to append things to this.
>
> **[4:37](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=277)** So I'm going to append a sort and I'm going to say that is on the title, ascending.
>
> **[4:43](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=283)** That's a one.
>
> **[4:44](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=284)** And then I'm going to add a limit to this as well, of three.
>
> **[4:47](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=287)** And then on line 18 here, I'm going to get back our recipes again, but use the find command instead of findOne.
>
> **[4:53](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=293)** I'm going to send it an empty array, which will be the same as sending an empty document to a find query.
>
> **[5:00](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=300)** And then I'm going to add on this optional options and that is going to add our sort and limit and iterate over it again.
>
> **[5:08](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=308)** And you'll see we're getting three now, in alphabetical order.
>
> **[5:12](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=312)** Last one is more interactive.
>
> **[5:15](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=315)** So here we have a HTML form.
>
> **[5:17](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=317)** And as it might suggest, the computer already knew, I wanted to search for tacos.
>
> **[5:22](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=322)** So I'm going to submit that and I'll get two different recipes here.
>
> **[5:26](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=326)** I'll get the recipe title, a description, and then this sentence here, that's saying it will take about 29 minutes and be approximately 205 calories a serving.
>
> **[5:36](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=336)** So how did we do that?
>
> **[5:40](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=340)** So here, we're going to include a bit more HTML for presentation purposes.
>
> **[5:45](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=345)** So right at the top here is the form you saw, and that's encompassing this.
>
> **[5:51](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=351)** And then we're going to check, on line 29 here, if we got a search from the form.
>
> **[5:56](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=356)** And if we did, we're going to go ahead and set up our connection again.
>
> **[6:00](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=360)** And then here, we're going to change our query slightly.
>
> **[6:02](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=362)** So I'm going to assign a part of this query to a variable here to make it a little more clear.
>
> **[6:07](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=367)** It's going to be an array, and we're going to be searching on the title, and we're going to use this regex here.
>
> **[6:12](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=372)** And this regex is going to accept whatever our search term was.
>
> **[6:16](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=376)** And this I in the option makes it case insensitive.
>
> **[6:19](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=379)** There's a comment about it here.
>
> **[6:20](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=380)** So that means if I type capital T tacos, that will match your recipe that's capital T tacos, and if I put lowercase, it will still match the capital T tacos recipe.
>
> **[6:29](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=389)** Then we'll show our output.
>
> **[6:31](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=391)** Again, this is where some of the options come in.
>
> **[6:35](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=395)** We'll sort by title.
>
> **[6:37](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=397)** And we use our find command again, on line 56.
>
> **[6:40](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=400)** And we'll send that query that we assigned in the variable earlier and pass along our options.
>
> **[6:45](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=405)** Again, it will be a cursor, so we need to iterate over that.
>
> **[6:48](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=408)** We're going to combine the prep time and the cook time on this recipe to get a total time.
>
> **[6:54](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=414)** So we're going to display that down here in the output, on line 69.
>
> **[6:59](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=419)** And we construct that sentence that we saw earlier, where it tells us the total time of the recipe and the approximate calories per serving.
>
> **[7:08](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=428)** So go ahead, take some time, look through these code files try to understand them a bit better.
>
> **[7:13](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=433)** Feel free to modify them with your own changes in the codespace and try something out.
>
> **[7:17](https://www.linkedin.com/learning/learning-mongodb-17360744/php?u=76281980&t=437)** And if PHP is your thing, why don't you see what you can build with PHP and MongoDB.

> [!info]- Semantic Content
>
> **CLI Commands:** php (10), find (7), make (2), python (1), composer (1)
> **Env Vars:** php (10), html (2), readme (1), ini (1), json (1)
> **Code Keywords:** let (3), this. (3), require (1), this, (1), pass (1)
> **Prerequisites:** install (4), setup (3), set up (2)
> **Code Identifiers:** findone (2), getdatabasename (1)
> **Documentation:** the readme (1), the docs (1)
> **Ports:** port 3000 (1)
> **Versions:** 5.3 (1)

#### Golang
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=0)** - So far, we've been working with MongoDB directly, but what about making some applications with it?
>
> **[0:05](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=5)** Luckily there're drivers, many different programming languages, and frameworks that do just that.
>
> **[0:10](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=10)** Here we'll be using Go, so if you're more comfortable with Python or PHP or JavaScript, ie Node.js, then make sure to watch those videos instead.
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=20)** We won't be diving deep, or even talking about best practices, but there will be code files for you to check out in the courses code space.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=27)** For a local installation, the first thing you'll want to do is get the Go drivers using this command.
>
> **[0:33](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=33)** Make sure to check out the MongoDB docs on the website for the latest install instructions.
>
> **[0:37](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=37)** There's a lot of great information there.
>
> **[0:39](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=39)** Once that's installed, you'll be good to go.
>
> **[0:41](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=41)** However, I've included a number of examples in the repo, and everything is already set up for you in the code space.
>
> **[0:47](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=47)** So let's head there and see what they do.
>
> **[0:50](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=50)** So we'll go to the lessons, and then 5.4 folder here, and you'll see a couple of different example Go programs.
>
> **[1:00](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=60)** So if you recall how to open a terminal, we can open a terminal and this will go right to where this folder is.
>
> **[1:07](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=67)** And we can just do go run, and our example program.
>
> **[1:12](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=72)** And you'll see it says setting up a mongo client, connecting the database, connected successfully, listing our databases here.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=83)** So how did we do that?
>
> **[1:28](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=88)** You'll see the first thing we'll need to do is import a couple things related to MongoDB, specifically this Mongo driver here, as well as the one for bson.
>
> **[1:37](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=97)** And we're also including the Mongo options here in all these and we'll come to that later.
>
> **[1:44](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=104)** Inside our main function here, on line 16, we print out the setting the client, and then line 18, we set up a new client connection with our connection string here to our local MongoDB install.
>
> **[1:58](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=118)** You'll see in all these Go examples, you'll generally see a client followed by an err here and that's usually handled by something like this.
>
> **[2:07](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=127)** And that's generally required for Go.
>
> **[2:10](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=130)** Then we connect to our database, and it's generally called a context here in Go.
>
> **[2:16](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=136)** So that's what we're doing here.
>
> **[2:19](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=139)** And then again, we have our err that we fall back to.
>
> **[2:24](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=144)** We'll be printing out connected successfully, and we're deferring the disconnect here as we list out our databases.
>
> **[2:31](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=151)** And we'll assign our databases to a variable here in line 39.
>
> **[2:34](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=154)** And again an err.
>
> **[2:36](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=156)** And so on the client here, we're using this ListDatabaseNames command, and we're sending it that context we talked about earlier.
>
> **[2:45](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=165)** And here is a bit of typing we need for Go and we're basically just saying, we're getting back some bson data, our fallback err, and lastly, printing out the database names as we saw earlier.
>
> **[2:56](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=176)** Next, let's try the second example.
>
> **[3:00](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=180)** So I'm going to open up terminal again.
>
> **[3:06](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=186)** And this will be using the find one command.
>
> **[3:09](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=189)** So you'll see it found one recipe here, and we're spitting out a formatted document.
>
> **[3:19](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=199)** So how do we do that?
>
> **[3:24](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=204)** So we'll do the same sort of thing here with our imports.
>
> **[3:28](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=208)** And then in our main function, we'll set up a client again, with an err fallback.
>
> **[3:35](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=215)** And same thing with our context and err fallback again.
>
> **[3:40](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=220)** And this on line 32 is where things change slightly.
>
> **[3:43](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=223)** We're going to target a collection, we're going to sign this collection on our database, cooker, and we're going to specify the collection, recipes.
>
> **[3:52](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=232)** And then we are going to create a result variable here.
>
> **[3:55](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=235)** And we're going to say that we're getting back bson data again.
>
> **[3:59](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=239)** And now on our collection we can run FindOne, send it to context, and let it know that we're getting a bson documents.
>
> **[4:09](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=249)** And we're going to do some decoding on that result so we can display them.
>
> **[4:14](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=254)** Some err fallback here.
>
> **[4:16](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=256)** And this output variable, we're just going to use this json MarshallIndent, which will allow us to get that nice formatting we saw with the document earlier, and again a fall back err.
>
> **[4:31](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=271)** Next we'll use the find command.
>
> **[4:40](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=280)** In this case, we're getting back the titles of different recipes in our database.
>
> **[4:50](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=290)** So, show that, again the exact same importing, and same connection, and the same context.
>
> **[5:02](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=302)** And where we'll change things around a little bit is right around line 31 here.
>
> **[5:07](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=307)** We're going to type a recipe specifically.
>
> **[5:10](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=310)** We're only going to type part of this document, the title, cause that's all we're displaying here.
>
> **[5:15](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=315)** And we're just saying, you know, this is bson, and this is exact title and omit them if they're empty.
>
> **[5:22](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=322)** This is more necessary when working Go, since Go is typed, and inherently mongoDB is schemeless.
>
> **[5:29](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=329)** So on our connection here, we'll again use our cooker database and our collection recipes, and on line 37 here, we'll get a cursor back when we use the Find command.
>
> **[5:41](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=341)** Cause if you recall earlier, if you get multiple documents back and when- that's what happens when you use find, that's going to be a cursor which we'll need to iterate over.
>
> **[5:49](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=349)** So we do that below.
>
> **[5:51](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=351)** So first we're going to assign a general recipes variable again, and we're going to tell it it's of a type of array of our recipe type that we defined up here on line 31.
>
> **[6:04](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=364)** And then we'll do on this cursor, we'll just run all, and send it our context, and those recipes we just got back.
>
> **[6:13](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=373)** And we can simply print them out.
>
> **[6:16](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=376)** So let's run that one more time.
>
> **[6:23](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=383)** And you'll see here each of the recipes.
>
> **[6:25](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=385)** We can take that one step further here, with this last example.
>
> **[6:37](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=397)** And you'll see we just got one recipe back.
>
> **[6:46](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=406)** So here, we are going to expand a bit more.
>
> **[6:50](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=410)** So first we're starting off with our same imports, and our connection, and the same context and err fallbacks.
>
> **[6:59](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=419)** Except for here we're going to expand our type a bit, 'cause you remember, we just saw we had the title plus some more things including the cook time and the description.
>
> **[7:08](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=428)** So we're going to expand our type here for recipe to have those three fields.
>
> **[7:13](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=433)** And you'll see again these are bson, and over here you can see this one's a string, this one's an int for the cook time number.
>
> **[7:23](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=443)** And this one is also a string.
>
> **[7:25](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=445)** And we've changed things slightly here as well.
>
> **[7:28](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=448)** So you'll see in our database, it's snake cased cook_time, and we're changing it to this casing, 'cause that's more in line with how our Go file is.
>
> **[7:39](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=459)** Again, we have our collection on line 37 where we connect to the cooker database in the recipes.
>
> **[7:45](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=465)** And here we're going to create a document for our search, 'cause it's a little more complicated.
>
> **[7:50](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=470)** So we have, I'm calling it a filter here, and I'm going to send a bson document with a key and a value.
>
> **[7:58](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=478)** So title equaling Apple Pie.
>
> **[8:01](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=481)** I'll get back any documents named Apple Pie.
>
> **[8:04](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=484)** And then we have our query options.
>
> **[8:07](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=487)** So we'll have options, we'll send it the find command, sign that to options, and then we'll set them on there.
>
> **[8:14](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=494)** So we're going to SetSort to the title and ascending, and then our options again.
>
> **[8:23](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=503)** And we're going to set our limit to three.
>
> **[8:24](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=504)** In this case we only had one Apple Pie recipe, but if we had three, we'd get three back.
>
> **[8:29](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=509)** Again, we get a cursor in line 48 here.
>
> **[8:32](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=512)** And we get that because we are reusing the find command.
>
> **[8:35](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=515)** So this may look a little confusing cause it may look like you're invoking find twice, but this is where we're assigning the options to find, and this is where we're actually invoking find.
>
> **[8:45](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=525)** And then we have err fallback, And again we have those recipes and a array of recipes, our new expended type, which on line 57 here will go through the cursor to go through each one and print them out.
>
> **[9:01](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=541)** So feel free to mess around with these example files in the code space, try out some changes, see how it works.
>
> **[9:06](https://www.linkedin.com/learning/learning-mongodb-17360744/golang?u=76281980&t=546)** And now that you've got a taste of MongoDB with Go, why don't you go and make something great with it?

> [!info]- Semantic Content
>
> **CLI Commands:** find (9), make (3), mongo (3), python (1), php (1)
> **Code Keywords:** let (4), function (2), this. (1), case, (1), type, (1)
> **Prerequisites:** set up (3), install (2)
> **Tools:** terminal (3)
> **Code Identifiers:** mongodb (1), cook_time (1)
> **Cross-References:** we talked about (1), as we saw (1)
> **Best Practices:** make sure to (2)
> **File Paths:** node.js (1)

#### How to use GridFS to store files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=0)** - [Instructor] You can not only store documents in MongoDB, you can store entire files.
>
> **[0:04](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=4)** This opens up a lot of possibilities, not only for better organization but also application features.
>
> **[0:10](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=10)** To do this, MongoDB uses what's called GridFS, a technology that will break up the contents of the file into chunks each stored in its own document and also store the information about the file itself in a sort of parent document.
>
> **[0:24](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=24)** When you need the file back, MongoDB will simply stream the chunks back to you.
>
> **[0:28](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=28)** A great way to get started with GridFS is to use the mongofiles binary that's included with the database tools.
>
> **[0:35](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=35)** Refer to that video again if you haven't installed them already, or if you're using the codespace, it's already there for you.
>
> **[0:42](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=42)** To illustrate how GridFS works, let's store some new files.
>
> **[0:45](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=45)** First, we'll upload an image that we can use for one of our recipes.
>
> **[0:49](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=49)** Inside of the lessons, 5.5 folder, you'll see there's an images folder with some example images I've included for you.
>
> **[1:00](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=60)** We can use the mongofiles command to upload or put something into the database.
>
> **[1:05](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=65)** So let's upload this apple pie image right here.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=70)** So I'm already in the terminal in the 5.5 folder.
>
> **[1:14](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=74)** So I'll go into the images.
>
> **[1:17](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=77)** I'll list that just so I can see the same images here.
>
> **[1:20](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=80)** And we'll get apple pie.
>
> **[1:22](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=82)** Now, I'll just copy that.
>
> **[1:24](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=84)** And we'll do mongofiles put, and the file name here, apple pie.
>
> **[1:32](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=92)** And then we will also add this --db=files to specify what database we want to upload this to.
>
> **[1:40](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=100)** And it will say that it connected and added the apple pie image to a Grid File.
>
> **[1:48](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=108)** Now I could see that file added by using mongofiles again and use this list command and specify our DB as files.
>
> **[2:01](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=121)** And I'm going to add this --quiet just so there's a little less noise.
>
> **[2:05](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=125)** And you can see it uploaded apple-pie.jpg and there's the size of it.
>
> **[2:12](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=132)** Now let's see how the database stored these files.
>
> **[2:15](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=135)** So I can go into our extension here for MongoDB.
>
> **[2:21](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=141)** I'll connect and I'll see a files database here.
>
> **[2:25](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=145)** And again, you could use the Mongo Compass UI for this as well.
>
> **[2:28](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=148)** And we'll see an fs files database with one document in it.
>
> **[2:32](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=152)** And that's the document we just uploaded.
>
> **[2:35](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=155)** If we look here, we can see some information about the file, file name when we uploaded it, it's size, et cetera.
>
> **[2:43](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=163)** And if we had some extra metadata, we could have that there as well.
>
> **[2:47](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=167)** You could add things like titles or descriptions, or credit for the photo, or anything else a file might want.
>
> **[2:56](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=176)** You'll also notice a fs chunks collection here with another document inside it.
>
> **[3:01](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=181)** And this document has a files_id, underscore id, and this will match the file fs file id here.
>
> **[3:12](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=192)** So this matches up between the two.
>
> **[3:16](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=196)** You'll notice we only have one chunk here because the file wasn't very large.
>
> **[3:20](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=200)** The current maximum document size is 16 megabytes and these image files are much smaller.
>
> **[3:25](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=205)** So we only have one chunk.
>
> **[3:27](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=207)** Now if we had bigger files, you'd see a lot more chunks for certain files.
>
> **[3:32](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=212)** So let's go ahead and do that.
>
> **[3:34](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=214)** For a bigger file, I'm going to the internet archive and get a copy of the book "Ozma of Oz."
>
> **[3:39](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=219)** It's one of the books in the hundred-year-old Oz series.
>
> **[3:42](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=222)** And we'll see here we can download a PDF.
>
> **[3:46](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=226)** So I can go ahead and copy this URL.
>
> **[3:50](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=230)** And I'm going to download it into my codespace folder.
>
> **[3:57](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=237)** So I'll just list that again and I will download that.
>
> **[4:03](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=243)** And let's rename that just to make it a little easier 'cause that's kind of a weird name there.
>
> **[4:08](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=248)** And we'll just rename that ozma.pdf and list that again.
>
> **[4:15](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=255)** And we can see our ozma.pdf right here.
>
> **[4:19](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=259)** So I'm going to upload that to mongofiles.
>
> **[4:24](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=264)** And we'll do put again and ozma.pdf and --db=files.
>
> **[4:34](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=274)** Again, tell it the database to upload to and we'll see that connected and uploaded the file.
>
> **[4:39](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=279)** So if we go back to our files, Documents here, refresh this, we'll now see two documents.
>
> **[4:47](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=287)** We'll see the one we just uploaded, that's "Ozma of Oz."
>
> **[4:52](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=292)** And if we go to our chunks over here that was just one document.
>
> **[4:56](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=296)** And now the multiple documents, because it was a much bigger file and we had to spread it out amongst a lot more documents.
>
> **[5:04](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=304)** Now if we want to delete that file out, we can use mongofiles again.
>
> **[5:09](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=309)** So mongofiles and we use delete and ozma.pdf and --db=files.
>
> **[5:22](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=322)** And that successfully deleted that out.
>
> **[5:26](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=326)** If we refresh this, we'll see it's backed down to one chunk in one document.
>
> **[5:33](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=333)** Now, how do we get files back out?
>
> **[5:36](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=336)** Most of the time, we use a Mongo client library like Python or PHP or Node.
>
> **[5:40](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=340)** Here we'll use mongofiles command itself again.
>
> **[5:44](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=344)** So we'll do mongofiles, and we'll use the word get here, and we'll look for that apple pie image we uploaded, and ---db=files.
>
> **[6:03](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=363)** And it will say it connected and finished writing the file.
>
> **[6:07](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=367)** So if we list the files here, we'll see apple pie and we can go in and browse our codespace here, we'll see apple pie.
>
> **[6:16](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=376)** And sure enough, here's the image of the apple pie.
>
> **[6:19](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=379)** Lastly, let's see an example of using GridFS with Python.
>
> **[6:24](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=384)** And so in this same directory, we have an example Python script that we're going to go ahead and run.
>
> **[6:38](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=398)** And you'll see the apple pie that already existed and then a new file called test.txt and here's some output on it.
>
> **[6:46](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=406)** So let's see how it did that in Python.
>
> **[6:48](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=408)** We imported PyMongo as well as importing GridFS here on line four.
>
> **[6:54](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=414)** We connect to our database.
>
> **[6:56](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=416)** And we say we want the files database specifically.
>
> **[7:01](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=421)** And then, we are going to write this content here to a file named test.txt.
>
> **[7:09](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=429)** And then we're going to list the contents of our GridFS and get that specific file out and read it.
>
> **[7:17](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=437)** And that again, if we run this, we get this output here that matches that.
>
> **[7:27](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=447)** You could also make a PHP or Node or go script to upload or pull images out of MongoDB to organize user uploaded recipe images, for example.
>
> **[7:36](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=456)** Or you could use this as an organizational layer on top of a CDN like S3.
>
> **[7:41](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=461)** So you could keep your source images in GridFS, but actually serve them off S3.
>
> **[7:46](https://www.linkedin.com/learning/learning-mongodb-17360744/how-to-use-gridfs-to-store-files?u=76281980&t=466)** Next, we'll cover topics around server administration.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (4), delete (2)
> **CLI Commands:** python (4), mongo (2), make (2), php (2), node (2)
> **Env Vars:** php (2), pdf (1), url (1), cdn (1)
> **File Paths:** test.txt (2)
> **Versions:** 5.5 (2)
> **Code Identifiers:** files_id (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)


### 6. Server Administration

#### MongoDB config file
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=1)** - You can configure just about anything you need to be at the command line options when you start up MongoDB like the dash dash DB path for the location of the data files. But MongoDB's config file let us do this more easily and safely.
>
> **[0:14](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=14)** The location of the file differs based on your OS and can also be manually configured.
>
> **[0:20](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=20)** See the lesson description for more on that.
>
> **[0:22](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=22)** The files themselves are written in YAML.
>
> **[0:25](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=25)** Let's take a look at an example config file and see some things they can do.
>
> **[0:30](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=30)** So in the 6.1, which is this lessons directory, there's a Mongo deep conf and a sample conf.
>
> **[0:38](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=38)** Let's go ahead and look at the Mongo.
>
> **[0:42](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=42)** Let's see a couple things right of the bat here.
>
> **[0:45](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=45)** For locking, we are using a log file and we are telling it a location it can be, and we're appending by default.
>
> **[0:56](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=56)** Now this can be important as log files can fill up sometimes so you may want to put those in a particular location like on another disk in your database in production.
>
> **[1:06](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=66)** Let's move on to storage.
>
> **[1:08](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=68)** This is where we could set the db path for the files.
>
> **[1:12](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=72)** As mentioned before, without having to do it when we start up with that dash db.
>
> **[1:18](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=78)** With a net we have a bind IP and a port and that could be important if you need to change things for security reasons or for replication.
>
> **[1:28](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=88)** There are a bunch more options.
>
> **[1:29](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=89)** So let's see a couple more of those.
>
> **[1:32](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=92)** In the sample comp, we're going to demonstrate a couple more powerful options among the db.
>
> **[1:38](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=98)** In this case, I've put the log files somewhere else in my system.
>
> **[1:43](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=103)** I've also put the DB path somewhere else so I could specify it to a specific disc.
>
> **[1:50](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=110)** I also set directory per db, true.
>
> **[1:53](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=113)** I like to do this personally because you can separate out your databases onto different physical discs, for example.
>
> **[2:01](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=121)** (indistinct) you can do that easily since each database will have its own directory and you can mount different directories at different disks.
>
> **[2:09](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=129)** Other things that might be important are the max income connections.
>
> **[2:13](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=133)** This happens to be the default.
>
> **[2:15](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=135)** You may need to change that for your usage.
>
> **[2:18](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=138)** Another interesting thing under process management here is fork, true.
>
> **[2:22](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=142)** By default, MongoDB won't fork itself.
>
> **[2:27](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=147)** So it won't be a background process.
>
> **[2:29](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=149)** Fork will make it a background process by default and this is most likely how you'll actually want to run things in production.
>
> **[2:36](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=156)** This is how most databases run.
>
> **[2:38](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=158)** Security is another important aspect.
>
> **[2:42](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=162)** In this case, I have authorization enabled which will require role-based authentication.
>
> **[2:49](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=169)** JavaScript enabled is another thing you may or may not want to enable.
>
> **[2:54](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=174)** There could be some security issues if you allow JavaScript to run.
>
> **[2:58](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=178)** But if you don't, you can't do things like import a JSON file of a collection.
>
> **[3:04](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=184)** Replication is another important bit.
>
> **[3:07](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=187)** Here, I'm setting the default replica set name which needs to be the same for all members of the replica set.
>
> **[3:15](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=195)** To use the conflict file you simply pass a dash-dash config when you start up MongoDB. For example, you'd do it something like Mongod, dash-dash, config, and the location of wherever your file is.
>
> **[3:30](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=210)** So actually here we could just run it like that; mongod, mongodconf.
>
> **[3:36](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=216)** For Windows users, it may end up looking like that.
>
> **[3:39](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=219)** So that's a three letter file extension.
>
> **[3:43](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=223)** Take a look at the lesson notes and read me for links to more config options and how those line up with command line options.
>
> **[3:51](https://www.linkedin.com/learning/learning-mongodb-17360744/mongodb-config-file?u=76281980&t=231)** In the next lesson, we're going to talk about replication.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default. (2), case, (2), default, (1), require (1)
> **CLI Commands:** mongo (2), make (1)
> **Env Vars:** yaml (1), json (1)
> **Tools:** command line (2)
> **Analogies:** for example (2)
> **Versions:** 6.1 (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)

#### Replication
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=0)** - [Narrator] Throughout this course, we've been running a standalone database, which is fine to get things started, but it's not recommended for production.
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=7)** What if something goes wrong?
>
> **[0:09](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=9)** What if your server crashes or becomes unavailable?
>
> **[0:12](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=12)** While you might be able to fix things quickly, you'll still have some sort of downtime, and downtime isn't good or worse.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=19)** You might have a disk problem that corrupts your data, and that'd be really bad.
>
> **[0:24](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=24)** Replica sets are MongoDB's way of helping you avoid these problems by running multiple identical copies of your database at once.
>
> **[0:32](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=32)** It does this by having a primary node and multiple secondary notes.
>
> **[0:37](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=37)** The primary copies of all the data to secondaries, and if the primary ever goes away, one of the secondaries automatically takes its place.
>
> **[0:46](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=46)** This also helps for scaling your database.
>
> **[0:49](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=49)** To show this, we're going to want a clean slate, so, I'm actually going to set this up inside a docket container running Linux, but none of that is actually necessary for you to do, and you can follow along in your local machine.
>
> **[1:04](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=64)** Now I'm going to set up three members of this replica set on my one host here.
>
> **[1:09](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=69)** In production, what you'd want to do is send three separate hosts, i.e., servers, so, I'm going to start here by opening four tabs, and connecting to my docket container in each.
>
> **[1:19](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=79)** I've already installed MongoDB in a container, but I haven't set it up yet, so, I already have one tab here.
>
> **[1:26](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=86)** Let's open up three more, and I'm just going to connect to the containers.
>
> **[1:39](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=99)** The first thing I'm going to do is make a place for the data files to live, so, I'm in my route here.
>
> **[1:46](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=106)** I'm going to go ahead and create a folder called "store" with another folder called "data" inside of it, and then let's go ahead inside that folder, and I'm going to make three separate directories, one for each of my replica set members, so, we'll just call this rs1, and I'll make another one, rs2, and make another one, rs3, so, now we have three directories in there.
>
> **[2:11](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=131)** Next we to run a version of MongoDB in each of our three terminals, and we're going to run a special command, so, here we're going to run mongod, and give it this replSet command, and we need to give it a name.
>
> **[2:29](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=149)** Now this needs to be the same everywhere we're working, so, make sure you get that name right, and then a DB path, which we just created, so, store, data, and this one will be rs1, and we'll give it a port, because each of these is going to need to run on a different port, so, we'll let this run on the default port, and we'll add two extra options at the end here, and you can configure these for your actual production use, but this will be best for our example.
>
> **[2:59](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=179)** I'll give it smallfiles, and an opLogSize of 200.
>
> **[3:04](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=184)** So, let's go ahead and copy that, so we can use it again in the next terminal, and we'll see this starting to run, and it's waiting for connections on port 27017, so, let's do that again, but this time we'll run on port 18 here, and we'll give it rs2 for the folder, and everything else will remain the same.
>
> **[3:30](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=210)** Let that start running.
>
> **[3:30](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=210)** Now it's listening for connections on that other port.
>
> **[3:34](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=214)** Lastly, we'll create a third.
>
> **[3:36](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=216)** Change the port, again, 19.
>
> **[3:40](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=220)** Those ports could be whatever you want.
>
> **[3:41](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=221)** I'm just doing that for ease of use.
>
> **[3:46](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=226)** Now waiting for connections on port 19, so, if I run htop, for example, I will see multiple versions of MongoDB running here, three, in in fact, and that's for each of our replica set members, so, next thing we'll need to do is actually tell these replica set members that the other ones exist.
>
> **[4:13](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=253)** They don't actually know it yet.
>
> **[4:14](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=254)** We don't actually have a replica set yet.
>
> **[4:16](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=256)** To do that, I'm going to go ahead and log into that first one that was running on port 27017, and I'll just clear that out, and once we connect here, we need to give it a configuration, so, we'll just make a variable name here called "config," and we'll give it an _id, and we're going to make that match our cookingSet that we set earlier, and then we need to give it some members, so, members, and we'll give it an array here of members, and that will consist of an object representing each one of these three servers that are running, so, they need an ID themself, so, we'll just say zero and host,
>
> **[5:08](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=308)** so, that's just local host, and whatever port they're running on.
>
> **[5:12](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=312)** In production, again, this would be a different machine.
>
> **[5:16](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=316)** We'll just go ahead and copy this, and we give it our first one, and then we'll give it our second one on port 18, _id 1, and then a third one, port 19, and _id 2, and then we'll close out the array, and close out our object, and it'll spit it out nicely formatted for us, and we're just going to send that the command rs.initiate(), and we're going to give it our config, so, you could see it ran, and it tells us right now we're on the secondary, so, this could change at any time.
>
> **[6:05](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=365)** If we are doing this from scratch, we could run it on any of these members, but if we already had data, we'd want to run it on that member first.
>
> **[6:15](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=375)** So, right now it's saying we're on the secondary, as you can see here, this prompt changed, so, I can run this rs.status() command, and this will give us a whole bunch of information about our replica set, but the important part is this members portion, and you can see in the members portion, 17, it says it's primary, 18, secondary, and, 19, secondary, and you'll see, in fact, this automatically changed the primary, because we're on the one with port 17, and it has been elected the primary.
>
> **[6:56](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=416)** There's some other interesting commands you can run like db.isMaster(), and that will give us kind of a smaller, more succinct summary of this.
>
> **[7:10](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=430)** It lets us know our hosts, our set name, as well as some various information about what's going on in a replica set.
>
> **[7:19](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=439)** Now, one of the most important things, of course, is actually replicating data, so, the first thing I'm going to do is actually log out of this primary, and we'll just exit, and I'm going to log into one of those ones, et cetera, as the secondary, so, as you can see here, our prompt is changed to secondary, and if I do, show dbs, you'll see it says database list failed, not a master, so, if we want to run commands on this, we actually have to set a slaveOK to true, but we're not going to do that right now.
>
> **[7:56](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=476)** The whole point is we can't run commands on here, and we also can't write to it, so, I'll go ahead and exit the secondary, and we'll log back onto our primary, and I'm going to just create a blank document, so, db.testo.insertOne(), and we're just going to give it an empty document here, so, when we run this, it's going to replicate this across our different replica sets, so, if I look here, for example, I'll close out the output on the other replica set members, and when I run this, you'll see it got the message
>
> **[8:45](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=525)** to create something in the test database called testo, so did this one, and so did this one, so, now each of the replica set members have a copy of that in storage.
>
> **[9:01](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=541)** You'll notice different connections here, et cetera.
>
> **[9:06](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=546)** Sweet, now we have three identical copies of our database.
>
> **[9:10](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=550)** By the way, while you connect to each MongoDB individually, you can only write to the primary, again.
>
> **[9:16](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=556)** Lastly, to connect to the replica set properly, you'll want a slightly different command.
>
> **[9:22](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=562)** You'll want to use a connection string, so, instead of here, connecting via the port, I'm going to do something like this, which is the whole connection string that lists each of the members, separated of our replica set, and then we're also going to say what our replica set is named, and then when I connect to that, you'll see it's similar, but it automatically connects me to the primary, so, I can go ahead and do whatever I need to do.
>
> **[9:49](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=589)** There are a bunch more options for replica sets, so, make sure to check the rest of the notes for links and more info.
>
> **[9:54](https://www.linkedin.com/learning/learning-mongodb-17360744/replication?u=76281980&t=594)** Next, we'll talk about a related idea, which is sharding.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (6), let (6), this. (1)
> **CLI Commands:** make (8), node (1)
> **Ports:** port 27017 (2), port 18 (2), port 19 (2), port 17 (1)
> **Code Identifiers:** replset (1), oplogsize (1), cookingset (1), ismaster (1), slaveok (1)
> **Analogies:** for example (2)
> **Best Practices:** recommended (1), make sure to (1)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** in the next (1)

#### Sharding
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=0)** - [Narrator] Going through an entire sharding setup is beyond the scope of this course.
>
> **[0:04](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=4)** However, having a fundamental idea of what sharding is, and how it works is important, so, later, if you need it, you can have a smooth transition to a sharded server setup.
>
> **[0:14](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=14)** Sharding is the concept of breaking up or partitioning your data across multiple servers.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=19)** This can be helpful performance, and, overall, infrastructure, instead of scaling up, as your data grows, i.e., buying bigger and bigger servers, you can scale out or across multiple servers.
>
> **[0:32](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=32)** You can also spread things out better depending on your usage.
>
> **[0:36](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=36)** For example, if you need more disk space, but not as much RAM, you can max out your disk, and save some money elsewhere.
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=43)** Now, partitioning is possible with some other database systems, but almost all the time, it involves a lot of manual intervention, and pretty complicated setups.
>
> **[0:52](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=52)** With MongoDB, we can auto shard our data, which is awesome, but before we continue, it's important to understand why the ability to use sharding is really cool.
>
> **[1:04](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=64)** It is easily one of the most complicated concepts and setups of MongoDB, so, for many basic, and even moderate MongoDB setups, a replica set is probably all you need.
>
> **[1:13](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=73)** Nonetheless, let's talk about the aspects of the MongoDB cluster, which is how we refer to server setup of a sharded database.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=83)** As we briefly touched on, sharding takes your data and breaks it up amongst multiple servers.
>
> **[1:29](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=89)** This differs from a replica set, which is a copy of your data on multiple servers.
>
> **[1:35](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=95)** A replica set replicates your data on any server in the set, whereas, sharding breaks up the data between the servers in a replica set.
>
> **[1:45](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=105)** When you connect, your queries are automatically delegated to one of the members in the set.
>
> **[1:51](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=111)** This works great since each member has a copy of all the data, so, how does MongoDB handle sharding when the data might be broken up into multiple servers?
>
> **[2:01](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=121)** To do this, we use another process called MongoS, so, not MongoD.
>
> **[2:07](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=127)** This process works like a router, and contains something like a table of contents, keeping track of what data is where.
>
> **[2:15](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=135)** It does this by using something called a shard key, along with config servers, which we'll talk more about later, so, when you connect and send queries to MongoDB, MongoS will handle looking up where that data is, and getting it from the right server, and also merge that data together, if it resided on multiple servers.
>
> **[2:36](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=156)** The best part is it does this all under the covers, so, it just acts like a normal query in connection.
>
> **[2:42](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=162)** You don't need to do anything special on the application side.
>
> **[2:47](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=167)** Your client connects to MongoS, and the config servers, here shown with a replica set, keep track of where the data is, and the other replica sets shown here, store the data.
>
> **[2:59](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=179)** We already talked earlier about how we should use replica sets for our data, and the same goes for config servers, since they store where your data lives.
>
> **[3:08](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=188)** If you lost that table of contents, you'd have to manually reconstruct it, which would be a nightmare, so, run a replica set for your config servers, and back it up often.
>
> **[3:17](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=197)** The good part is it's only a small amount of data, so, how does MongoDB automatically shard this data?
>
> **[3:25](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=205)** The first thing you'll need to do is enable sharding on the database, and then tell it a collection you'd like to shard, as well as a shard key.
>
> **[3:33](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=213)** MongoDB will use this key to break up our data.
>
> **[3:36](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=216)** The key needs to be something that could be indexed, because it basically is an index, so, imagine this example.
>
> **[3:42](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=222)** We have all our recipes in alpha order by title, all stored together, apple pie through zucchini brownies.
>
> **[3:50](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=230)** If we chose the recipe title as our shard key, MongoDB would break up our data by title, so, something like this.
>
> **[3:58](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=238)** Now, recipe data is broken up into three shards.
>
> **[4:02](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=242)** In this case, all evenly spread out with three recipes in each.
>
> **[4:06](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=246)** Now, in reality, there'll probably be thousands in each shard, depending on the way you break up your data, but in this case, we have everything A through B, and all the recipes F through M, and then T through Z in the last shard here.
>
> **[4:20](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=260)** As we add more recipes, MongoDB will look at the shard key, and add the recipes to the correct shard.
>
> **[4:27](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=267)** If a shard is getting too big, what's called unbalanced, it automatically splits up the shard into two or more new shards.
>
> **[4:34](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=274)** You could also use _id as your shard key, and essentially your data would be sharded by the document's creation date.
>
> **[4:43](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=283)** You can also use a compound shard key like a compound index, but you should be sure that it matches the types of queries you're making, or that could be non-optimal.
>
> **[4:53](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=293)** The location of the data, which shard, is stored in the config servers.
>
> **[4:58](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=298)** Again, MongoDB does this all automatically, behind the scenes, and in most cases, you don't have to change a thing about your application code, so, if you think you'll need sharding in the future, or maybe even if you don't think so right now, take a little time to think about how to construct your documents, and if that could be sharded well.
>
> **[5:17](https://www.linkedin.com/learning/learning-mongodb-17360744/sharding?u=76281980&t=317)** Next, we'll talk about authentication and authorization.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), continue (1), let (1), this, (1), this. (1)
> **Prerequisites:** setup (3), you'll need (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), imagine (1)
> **Env Vars:** ram (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)

#### Authentication and authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=1)** - [Instructor] Securing your databases is very important, and while you might be able to accomplish some of that by keeping your database behind a firewall, or other network-based security measures, you should still strongly consider setting up authentication and authorization with your database.
>
> **[0:17](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=17)** First, let's talk about the difference between the two.
>
> **[0:21](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=21)** Authentication is like logging into account.
>
> **[0:24](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=24)** For this, MongoDB has usernames and passwords, or keys you can use.
>
> **[0:29](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=29)** You can think about this as like having a badge to get into an office building.
>
> **[0:34](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=34)** Authorization is a different concept.
>
> **[0:37](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=37)** It means, even if you are logged in, you may or may not be authorized to do certain things.
>
> **[0:43](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=43)** For this, MongoDB has different roles and privileges you can assign to users in what's called role-based access control.
>
> **[0:52](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=52)** So with our office example, your badge might be able to get you into the building, but it might not let you in the executive conference room, or the server room.
>
> **[1:02](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=62)** By default, authentication or access control isn't turned on for MongoDB and there are no user accounts.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=70)** So let's go ahead and create an account, and turn on access control.
>
> **[1:15](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=75)** First, we'll need to have MongoDB set up without access control, which, as we already talked about, by default it isn't.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=83)** Now, we'll log into the Shell and use the admin database.
>
> **[1:28](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=88)** So right here I have MongoDB running, and I'm going to log into Shell, and I'm going to use the admin database, and we're going to run a command inside it.
>
> **[1:41](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=101)** Let's go ahead and open that up in VS code so we can see it nicely.
>
> **[1:46](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=106)** This is the db.createUser command.
>
> **[1:51](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=111)** We're going to create the user, taco, and we're going to specify a password.
>
> **[1:55](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=115)** In this case, I'm using MongoDB 4.2.
>
> **[1:59](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=119)** Anything 4.2 and above, we can say this passwordPrompt command, so we don't have to type a password in here, free text.
>
> **[2:07](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=127)** And here on line five, we assign some different roles.
>
> **[2:11](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=131)** We're going to assign the role of userAdminAnyDatabase inside the db admin, as well as granting the general readWriteAnyDatabase permission.
>
> **[2:24](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=144)** Now, we could change these around if need be, because by giving them userAdminAnyDatabase, as well as readWriteAnyDatabase, we're basically making them a super user.
>
> **[2:36](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=156)** So for a user that just needs read-data, for example, we could just grant them readAnyDatabase.
>
> **[2:44](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=164)** So we'd take out the Write here, and just make it readAnyDatabase.
>
> **[2:49](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=169)** Now they only have read privileges.
>
> **[2:51](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=171)** Additionally, we could restrict it even further by just making it read and assigning a database like we did here in this object.
>
> **[3:00](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=180)** Now they would only be able to read within that specified database, and no others unless you grant them separately.
>
> **[3:07](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=187)** Note, when you make the user rules like this with the read only, they can not only not write, they also can't do things like create indexes, or run a backup.
>
> **[3:17](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=197)** So make sure you have those configured properly for each user.
>
> **[3:21](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=201)** Let's go ahead, copy this command, and we'll run it inside our Shell.
>
> **[3:29](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=209)** It will ask us for a password.
>
> **[3:30](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=210)** Just going to make it 1, 2, 3, 4, 5, very secure.
>
> **[3:34](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=214)** And it's going to tell us it created the user correctly.
>
> **[3:39](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=219)** Now, what we're going to need to do is shutdown, and restart the database.
>
> **[3:44](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=224)** So to do that, we will run this adminCommand here, and do shutdown true.
>
> **[3:54](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=234)** And that will shutdown our database, and you'll see here it's exited the process, and told us it shutdown.
>
> **[4:04](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=244)** Now, we'll need to edit the MongoDB config file, and add that we're going to enable authorization.
>
> **[4:12](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=252)** So can exit the Shell here since we're not connected anyhow.
>
> **[4:17](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=257)** And I'm going to edit the Mongo conf file, which in my case, resides here.
>
> **[4:24](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=264)** And I'm going to scroll down and you may need to type this out in your file, but I already have it commented out here.
>
> **[4:33](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=273)** And we'll uncomment security, and authorization and make that enabled.
>
> **[4:39](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=279)** And we'll go ahead and save that file.
>
> **[4:43](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=283)** And now I'm going to restart MongoDB here.
>
> **[4:48](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=288)** So now it's restarted and you'll see if I just try to connect to Mongo here.
>
> **[4:54](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=294)** Once you have this running, there's basically two ways to authenticate.
>
> **[4:59](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=299)** You could do this while you connect.
>
> **[5:01](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=301)** To do this, we'll need to specify what database we made our authentication database, which if you remember earlier was the admin database.
>
> **[5:09](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=309)** So we can do mongo --authenticationDatabase.
>
> **[5:16](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=316)** So authenticationDatabase.
>
> **[5:19](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=319)** Oh let me fix this.
>
> **[5:23](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=323)** authenticationDatabase.
>
> **[5:25](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=325)** We'll tell it that it is the admin database, and our user was taco, and -p to let us enter in a password.
>
> **[5:36](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=336)** And we'll do that and we'll see we're now connected properly.
>
> **[5:41](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=341)** You can also do this after you connect.
>
> **[5:43](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=343)** So in this case, we would use the admin database, and then we can run the db.auth command, and give it whatever username.
>
> **[5:56](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=356)** So Taco.
>
> **[5:58](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=358)** And we can use that passwordPrompt again, command.
>
> **[6:04](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=364)** Close that out.
>
> **[6:05](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=365)** And now tell us to enter our password.
>
> **[6:08](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=368)** And one means we successfully logged in.
>
> **[6:12](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=372)** There are lots of different roles, and permissions and combinations thereof you can use, so make sure to check out the docs for your use case.
>
> **[6:20](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=380)** You could see links in the course description.
>
> **[6:23](https://www.linkedin.com/learning/learning-mongodb-17360744/authentication-and-authorization?u=76281980&t=383)** Next, we'll talk about another very important thing you should do in production, backing up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (3), case, (3), default, (1), super (1)
> **Code Identifiers:** authenticationdatabase (3), passwordprompt (2), useradminanydatabase (2), readwriteanydatabase (2), readanydatabase (2)
> **CLI Commands:** make (6), mongo (3)
> **Versions:** 4.2 (2)
> **Prerequisites:** set up (1), make sure you have (1)
> **Documentation:** the docs (1)
> **Tools:** vs code (1)
> **UI Navigation:** scroll down (1)

#### Backups
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=0)** - [Instructor] Backups, backups, backups.
>
> **[0:02](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=2)** Seriously.
>
> **[0:03](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=3)** Back up your databases and also test your restore plans.
>
> **[0:07](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=7)** Of course, like any good database there are a number of ways to accomplish backups with MongoDB.
>
> **[0:12](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=12)** We will talk about two of them.
>
> **[0:14](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=14)** Copying data files and using the mongodump and mongorestore programs.
>
> **[0:19](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=19)** The first method we'll talk about is one of the easiest but also one of the most manual.
>
> **[0:24](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=24)** And it has some drawbacks.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=27)** Right now I'm in the DB path directory from where I started MongoDB with the dash dash DB path and some directory.
>
> **[0:36](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=36)** So in here you can see all the files from MongoDB.
>
> **[0:40](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=40)** What we're going to need to do is back these up.
>
> **[0:42](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=42)** But before we do that, again, to do things right we need to stop any rights to the disc so we can copy these files.
>
> **[0:49](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=49)** And then immediately turn them back on when we're done.
>
> **[0:52](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=52)** To do that, go ahead and log into MongoDB on the shell.
>
> **[0:57](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=57)** And we'll issue the command DB dot fsync lock.
>
> **[1:04](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=64)** And this will tell us it's now locked against rights.
>
> **[1:07](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=67)** Things are still getting written in the database.
>
> **[1:10](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=70)** They're just in memory right now.
>
> **[1:12](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=72)** So we need to hurry up and copy the files so that we don't lose anything in memory.
>
> **[1:17](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=77)** So what we're going to want to do is copy all these files somewhere as a backup.
>
> **[1:23](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=83)** For example, if things were in the data slash db directory, we could do something like this.
>
> **[1:30](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=90)** Copy recursively all the data files into wherever our backup location was.
>
> **[1:37](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=97)** Once those are done copying we can go back to MongoDB and issue the DB dot fsync unlock command.
>
> **[1:49](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=109)** And it'll tell us the unlock has been completed.
>
> **[1:54](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=114)** This has an obvious downside.
>
> **[1:56](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=116)** If anything goes wrong, the database during the backup, any non-written data is likely to be lost.
>
> **[2:04](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=124)** However, in many use cases, this is a manageable risk.
>
> **[2:08](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=128)** In fact, you could just shut down MongoDB completely and then copy the files and start it back up and have the same effect.
>
> **[2:18](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=138)** Or if you have a maintenance window, or even better if you're using a replica set which you should be, you could take one item out of the replica set to do this backup.
>
> **[2:29](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=149)** And this might actually be the best option.
>
> **[2:31](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=151)** And then you're going to have no downtime at all.
>
> **[2:34](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=154)** In either case, when you need to restore simply stop MongoDB, copy the backed up files into your MongoDB data files directory, removing any existing ones, and restart MongoDB.
>
> **[2:48](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=168)** The other method is using mongodump and mongorestore.
>
> **[2:53](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=173)** To use mongodump, we can literally run mongodump.
>
> **[3:00](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=180)** And it will just start spitting out files into a dump folder.
>
> **[3:04](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=184)** If I look in this dump folder.
>
> **[3:06](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=186)** You'll see there's a folder for each database.
>
> **[3:09](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=189)** And inside there there's the files for the collection.
>
> **[3:13](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=193)** If it's not running default port nearly specify the port and you can see more options by running mongodump dash dash help because you can actually back up individual databases, individual collections, or even run a query and just do partial documents you want that match a query.
>
> **[3:34](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=214)** To restore you could simply run the mongorestore.
>
> **[3:40](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=220)** And give it the dump directory.
>
> **[3:43](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=223)** Again, this could be just a single database or single collection depending on how you back things up.
>
> **[3:50](https://www.linkedin.com/learning/learning-mongodb-17360744/backups?u=76281980&t=230)** Now, go forth and don't forget to back up.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), case, (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Wrapping up
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=0)** - [Justin] Well, that's it.
>
> **[0:01](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=1)** We've touched on a lot of topics in this course, and I hope it's been helpful.
>
> **[0:05](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=5)** If there were some things you weren't quite sure on, I encourage you to go back and re-watch the video, and make sure you're following along as best as possible in your own MongoDB server.
>
> **[0:15](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=15)** If you want some next steps and a bit of a challenge, one area you can start looking into is MongoDB's aggregation framework, which allows you to do some pretty complicated and powerful queries on your data.
>
> **[0:27](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=27)** As with any technology there are a lot more things to learn, so make sure to check out some of the links in the lesson Read Mes, and also on the MongoDB site in general.
>
> **[0:38](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=38)** It really has a lot of great docs and some great tutorials as well.
>
> **[0:41](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=41)** One of the best ways to keep learning is to do.
>
> **[0:44](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=44)** So I encourage you to try out a small project with MongoDB.
>
> **[0:48](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=48)** Since it's so easy to go from a JSON to a MongoDB document, maybe check out some APIs.
>
> **[0:54](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=54)** Grab some data and then see what you can do with it.
>
> **[0:57](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=57)** Or you could use it on your own personal website, or portfolio, perhaps a side project at work.
>
> **[1:03](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=63)** Just go, try it out.
>
> **[1:05](https://www.linkedin.com/learning/learning-mongodb-17360744/wrapping-up?u=76281980&t=65)** Also, feel free to connect with me on LinkedIn or on Twitter at @LearnMongo and best of luck in the future.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** json (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [justin] (1)


## Path Context

### In [[Develop Your NoSQL Skills]]
← [[NoSQL Essential Training]] | **3 of 10** | [[Introduction to Neo4j]] →

## Appears In

- [[Develop Your NoSQL Skills]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — MongoDB
- [[MongoDB Essential Training]] — MongoDB
- [[Choosing A Database Postgresql Mysql Mongo And Cloud]] — MongoDB
