---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-practice-generic-collections
url: "https://www.linkedin.com/learning/c-sharp-practice-generic-collections"
duration_minutes: 26
duration: 26m
level: Intermediate
updated: 9/14/2023
learners: 12992
skills:
  - C#
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHJedElBO8qIw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691188888679?e=2147483647&amp;v=beta&amp;t=M6CQ3IFs0FXdjgeC-OWAAsngHStFc6v-6Lez9PN6rhw"
linkedin_topic: DevOps
learning_paths:
  - '[[Elevating C- Skills- Building Robust Applications]]'
prev_courses:
  - '[[C- Unit Testing with xUnit]]'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":8,"total":8,"prev":"C- Unit Testing with xUnit","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C-%20Practice-%20Generic%20Collections.md)

![C# Practice: Generic Collections](https://media.licdn.com/dms/image/v2/D4E0DAQHJedElBO8qIw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691188888679?e=2147483647&amp;v=beta&amp;t=M6CQ3IFs0FXdjgeC-OWAAsngHStFc6v-6Lez9PN6rhw)

# C# Practice: Generic Collections

> Join senior LinkedIn Learning instructor Walt Rischer in this hands-on, interactive, skills-first coding course designed uniquely for intermediate C# developers. Explore generic collections skills in C# to boost your technical know-how or prepare for an interview to land a new role. This course includes Code Challenges powered by CoderPad. Code Challenges are interactive coding exercises with real

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-practice-generic-collections) | 26m | Intermediate | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Practice your C# generic collections skills](#practice-your-c-generic-collections-skills)
  - [What you should know](#what-you-should-know)
  - [Explore the code challenge](#explore-the-code-challenge)
- [**1. Collections Code Challenges**](#1-collections-code-challenges) (6 videos)
  - [Solution: Insert into List<T>](#solution-insert-into-listt)
  - [Solution: Examine dictionary contents](#solution-examine-dictionary-contents)
  - [Solution: PriorityQueue](#solution-priorityqueue)
  - [Solution: Use a slice to get a subset](#solution-use-a-slice-to-get-a-subset)
  - [Solution: ConvertAll](#solution-convertall)
  - [Solution: HashSet operations](#solution-hashset-operations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Practice your C# generic collections skills](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/practice-your-c-sharp-generic-collections-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/practice-your-c-sharp-generic-collections-skills?u=76281980&t=0)** - Are you ready to check your understanding of .NET dictionaries, priority queues, and sorted sets?
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/practice-your-c-sharp-generic-collections-skills?u=76281980&t=7)** This course tests your skills with a series of code challenges exploring a wide range of collection concepts.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/practice-your-c-sharp-generic-collections-skills?u=76281980&t=14)** I'm Walt Ritscher.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/practice-your-c-sharp-generic-collections-skills?u=76281980&t=15)** I've been using .NET stacks and queues since the first days of .NET.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/practice-your-c-sharp-generic-collections-skills?u=76281980&t=20)** As I see it, knowledge of .NET collections is an essential skill, a fundamental concept every .NET developer should know.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/practice-your-c-sharp-generic-collections-skills?u=76281980&t=28)** This course gives you the opportunity to show what you know, so let's go solve some code challenges.

> [!info]- Semantic Content
>
> **Env Vars:** net (5)
> **Definitions:** is an  (1)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a code challenge course where you get to prove your skills by writing code to solve the proposed challenges.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=7)** There are six challenges in this course.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=10)** Before you write the code, let me provide some context.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=14)** What do you need to know?
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=16)** I'll tell you what kind of challenges are in the course, the skills you'll need to demonstrate and some resources where you can acquire the necessary knowledge.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=24)** The theme for this course is the .NET generic collections.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=28)** There are a lot of collection types available.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=31)** For the challenges, you'll work with some of them.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=34)** Here's a breakdown of the challenges.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=35)** You'll work with the list<T> specifically with the insertion logic.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=40)** Next is the dictionary class.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=42)** You'll be tasked to find matching items in multiple dictionaries and combine them into a new generic list.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=48)** There is one using the PriorityQueue, a special kind of queue.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=53)** The challenge is to change the priority levels of items as you add them to the queue.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=58)** For another task, you'll work with array slicing.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=61)** That's where you get a contiguous subset of an existing array.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=65)** The challenge posed in this course is to slice multiple areas in an array and combine them into a new array.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=71)** Then do it again with a generic list.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=74)** There is a conversion challenge, taking an existing list and converting and transforming all the items into a new type.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=82)** Finally, there is a challenge based on the hash set which is an optimized collection of unordered unique elements.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=88)** It provides fast lookups and high performance set operations and I think it's underutilized in .NET code.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=95)** You'll get a chance to use it in the course.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=98)** To find out more about .NET collections check out the "C# Essential Training number two: "Generics, Collections and [[Language Integrated Query (LINQ)|LINQ]]" course.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=105)** It has details on generic types, collections and concurrent collections.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=111)** There are many ways to work with .NET Collections.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=113)** If you want, you can use LINQ to solve the challenges, but that's not the focus of this course.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=119)** You can solve without LINQ if you prefer.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=122)** I've chosen to use LINQ for some of my solution code, so having some knowledge of LINQ is useful.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=128)** We've got some courses that Explore LINQ.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=130)** The one that is most relevant to the code challenges in this course is ".NET Essentials: Working with LINQ".
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=137)** The other courses for XML and [[Databases]] are not as relevant to the challenges but I think you'll find them interesting if you want a complete picture of LINQ and .NET.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Linq]] (8), [[Databases]] (1)
> **Env Vars:** linq (8), net (6), xml (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (3)
> **Analogies:** picture (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Explore the code challenge](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the course table of contents.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=8)** Each challenge includes instructions that describe your tasks.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=11)** There's a pair of code editors where you create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=16)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course videos.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=24)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=32)** Now, looking at the CoderPad UI, there are four panes.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=36)** In the top left are the instructions.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=38)** On the right side at the top is a code editor.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=40)** This is where you'll write your answer.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=43)** There's another code editor on the bottom right.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=45)** This is where you see how your code is used or called.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=49)** And on the bottom left is a console for output.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=52)** Now, you can resize these panes by dragging up and down or by dragging left or right.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=59)** Now, let's talk about what's in the instructions.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=62)** Each challenge has instructions that include a description of the challenge.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=66)** It might include some additional details.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=68)** It might have the challenge statement.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=70)** This is where the instructor or where I will explain the task that you need to correctly complete the challenge.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=77)** I like to note that the way you solve the challenge is up to you.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=81)** Now, here's what happens when you're ready to test your code.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=84)** You're go down here to this button and click Test My Code.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=88)** CoderPad will run your application code and it also runs a set of unit tests to verify that your code solves the proposed challenge.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=97)** Other things that you can find in the instructions, it depends on each challenge.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=101)** There could be additional descriptions.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=104)** There could be a call out for the specific tasks that you need to accomplish.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=108)** There could be screenshots.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=109)** There could be object diagrams.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=112)** There could be flow charts.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=113)** There might be some sample code in here.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=115)** For example, this is saying that you need to write your code in this class called WorkWithList and write it in a method called GetTwoLargestNumbers.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=123)** So if you look over here in the Answer section, you'll see that there is a class called WorkWithList that has a method called GetTwoLargestNumbers.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=132)** So you'll write your code in here.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=137)** There's some additional information or there might be some additional information about parameters and the types of results you're expecting, any constraints on the data, and there could be some examples.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=147)** Now, let's start talking about writing your code.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=149)** You'll write your code here and it'll be tested in the unit test and you can see some of what the unit test will do here in this area.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=158)** Now, I recommend that you do not change these values here in the test code because my unit test is looking for, in this example, is looking for a variable called topNumbers.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=168)** And I'll be using that to verify that you passed back the TwoLargestNumbers.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=174)** Okay, so now, let's go and see what we have happening up here.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=177)** There are two classes up here.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=179)** This first class is called Answer and it has two Boolean parameters, ShowExpectedResult and ShowHints.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=186)** I'll hide that for the moment.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=188)** And then in most of my challenges in this course, I have an additional class that contains one or more methods and you'll be writing your code in these methods.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=197)** So in this example, it's called WorkWithList class.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=200)** I'm going to write my code in here.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=201)** Now, let's try running my unit test by testing the code.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=209)** And over here in the Console output, I see that there's an unhandled exception.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=213)** That's because my unit test is expecting an instance of a list of int to be returned from this method.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=218)** And currently, it's returning a null.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=220)** So let's go ahead and return something.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=222)** So I'll take this inbound parameter and return that and test my code again.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=230)** And now, I see some information here.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=234)** I see the original list and the topNumbers and I see "That's not the expected result."
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=240)** because I return more than one number.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=243)** Also, depending on the challenge, I may output additional information to the console.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=247)** In this case, it's outputting the original list of numbers and it's outputting the topNumbers.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=255)** If you want to solve the problem without any hints, this is what you'll see.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=258)** If you would like additional help, then let's talk about these variables.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=262)** Let's set ShowExpectedResult to true.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=265)** So we'll go up here to the Answer class.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=268)** Change this to true.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=271)** Rerun the code.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=277)** And now, I'm still seeing the error message, "You didn't get it right this time."
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=281)** But now, down here, I see that the test failed because topNumbers should have contained two items and the first item should have been nine and the second item should have been eight.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=293)** You can also get hints.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=294)** Let's turn this back to false.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=297)** Turn this to true.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=303)** Test my code again.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=306)** Now, I'm not seeing the test failure messages, but I am seeing a "Hint: "Consider using the OrderByDescending method "to arrange the numbers from highest the lowest."
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=314)** So let's try that.
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=316)** So rather than returning numbers, let's write a query here, var q equal to.
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=333)** You see, I'm getting auto completion in IntelliSense.
>
> **[5:36](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=336)** Then I'll do a Lambda here.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=340)** Actually, I do not need the Lambda.
>
> **[5:42](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=342)** I don't think, so I'll just do a .Take and I'll take two items.
>
> **[5:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=354)** And then I'll return q.ToList.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=362)** It looks like I do need the Lambda here so I'll put in x Lambda x.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=367)** Now, I'm not getting the red squiggle.
>
> **[6:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=368)** That's the only thing about this editor is you get the same red squiggles that you do in Visual Studio or Visual Studio Code.
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=375)** Now, I'm ready to test my code.
>
> **[6:19](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=379)** And now, I see the original list.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=381)** I see the top numbers.
>
> **[6:22](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=382)** And now, I get the success message, "Another one solved!"
>
> **[6:26](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=386)** When you have finished each code challenge, return to the course table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Code Identifiers:** topnumbers (4)
> **Definitions:** is a  (3), is called (1)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** sample code (1)


### 1. Collections Code Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Insert into List<T>](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=0)** - [Instructor] We start this code challenge with an existing list of integers called numbers that has the values one, three and five within the list.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=8)** We're going to modify this list in the update list method with the value being passed in with the new number parameter.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=16)** If the new number is negative, then it goes at the end of the list.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=20)** If it's greater than 100, it goes at the beginning or the start of the list.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=24)** And if it's a value of zero through 100, it should be placed at the midpoint of the list.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=29)** The code that I used to solve this challenge is shown here.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=32)** On line 35, I create this insert index variable and I set it to zero.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=37)** I'll use that later in my code.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=38)** Then I check to see if the new number is less than zero.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=42)** If it's less than zero, then I call numbers.add.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=46)** Add places the new item at the end of the list.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=50)** Then I return.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=51)** Next, down here on line 43, the insert method allows us to pick the location of the insert.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=58)** So my code is either going to insert it at position zero which puts it at the beginning of the list or it's going to insert it at a calculated value which will put it at the midpoint.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=67)** So I calculate the midpoint here on line 40.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=70)** If the number is zero through 100, then I take the existing count of the list, divide that by two and assign that to insert index.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=81)** Let's verify that it works.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=83)** I'll test my code.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=86)** I got the right answer.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=88)** So that's how I solve the code challenge.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=90)** There are many other ways you could solve this.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=92)** I want to spend a couple of minutes talking about another way you can solve this and we can point out a couple other features in the link and in C#.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=102)** That's in this method shown here on line 46.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=104)** Now this was not included in your starter code and when you click the Test my Code button, it's not running this code.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=111)** I just wanted to show you this as an example.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=113)** So I want to talk about the switch expression in C# and I want to talk about some new link operators that you might find interesting.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=122)** First, let's start by talking about the switch expression.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=125)** So the way you set up a switch expression is you use the switch keyword here and then you're going to create values based on some criteria.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=136)** So the way you would read this is we're going to switch on this integer value and we're going to return an IEnumerable of int.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=144)** So every one of these expressions must return an IEnumerable of integer.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=149)** So on line 57 what I'm doing here is I'm saying if new number is less than zero, then do this action.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=157)** On line 58 I say if it's greater than 100, then do this other action.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=162)** And this is the discard symbol in C# which is the catchall.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=167)** And I say so in this third case, if it's anything that's not found in these two conditions, then do this action.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=174)** So let's reveal what I just said.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=176)** Based on this number, we're going to return an IEnumerable int.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=180)** And the way I do that, it was with prepend, with append and some other code.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=185)** Now the link prepend and append, they alter the sequence.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=189)** Prepend puts an item at the beginning of the list and append puts the item at the end of the list.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=194)** But notice what they do here is they return a new list.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=198)** And this is a nice solution when you don't want side effects.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=201)** If you've studied [[Functional Programming]], one of the tenets of functional programming is that if you have an array or list, you don't modify the contents of that.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=210)** Instead what you do is you create a new list with the new content and you return that.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=217)** So that's what I'm doing here and prepend always returns an IEnumerable int and append returns an IEnumerable of int.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=229)** I'm going to use insert to place the item in the midpoint.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=234)** Now insert does cause a side effect so I can't just do a one line here.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=239)** There's no numbers.insert.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=242)** That's a link query that does what I'm looking for.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=244)** So I had to write some code up here to do it.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=246)** So on line 52, I'm creating a new list of integers and I'm basing it on the existing list.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=253)** So it will contain all the values of the existing list.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=256)** Now I'm calling that new list.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=257)** Then on the new list I'm calling insert using that calculated value.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=262)** And then here on the discard, I return the new list.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=266)** And then finally here on line 63, I would return that result on this method.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=271)** We didn't talk about this method very much.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=273)** I called it update list with link that takes a new number and to do it in a functional way, will return an IEnumerable of int.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (2)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Exercise Files:** starter code (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Examine dictionary contents](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=0)** - The goal for this code challenge was to look through several dictionaries for a key.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=4)** In this case it was the teamName key and the dictionaries are here as parameters for this method to FindAllByTeamName method.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=11)** So I have one dictionary where the key is a string.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=13)** In fact, all of 'em have strings for the key and they have different types for the values, that all implement the ICollectible interface.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=21)** So we've got the Cup, the Shirt, and the TradingCard and we're going to look through these dictionaries and if we find a matching key, then we extract the value out of the dictionary and place it in a list of ICollectible.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=33)** Now I'm going to show you three different ways of solving this code challenge.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=38)** One working with the Cup dictionary.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=40)** One working with the Shirt dictionary and one working with the TradingCard dictionary.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=43)** So the first one, working with the cups, is to look at ContainsKey.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=47)** So you call this method passing in the key and it returns true if it exists.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=53)** And then down here on line 31 we extract the value and add it to the allTeamItems list.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=61)** Now there is an issue with this solution is that it will search the dictionary twice.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=66)** Once when you call ContainsKey to verify that it exists, and then another time when you extract the value here.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=72)** So a more efficient way to handling this is to use TryGetValue, which I'm showing here.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=77)** This time I'm going to be working with the Shirts dictionary.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=79)** So I try to get the value that will return true if it exists.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=84)** So if it's true, then the value's placed in this out variable and then I extract that here and I call allTeamItems dot add shirt.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=93)** As I note in my comments here, be aware there's a possible race condition using either of these solutions.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=99)** It's easier to see if you look at line 27 and 31.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=103)** So we have one thread enter this code and gets a value that says does contain the teamName key.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=110)** And then before it gets to line 31, that thread is halted and another thread takes some action and removes that key.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=116)** By the time you actually run line 31, that key won't exist anymore.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=121)** The same is true for the TryGetValue.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=123)** Now the solution for this is to use a different class.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=128)** There's a class called ConcurrentDictionary, which is a thread safe way of accessing values.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=132)** I do have a course on the concurrent collections in dot net.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=136)** For the third example, working with cards, I'm using Link.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=140)** Now this also works, but it's not efficient.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=142)** So here I'm calling Where on the cards, where the card Key is equal to the teamName.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=149)** Then I go here and I check to make sure there's a result.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=152)** If the teamCard dot Any, that means if it finds any value or this teamName is the key, then this is true.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=160)** And then I'll go grab the teamCard.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=164)** The first item in there, there could be more than one that shouldn't be, but I do like to call First.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=168)** That ensures I only get one and then I get the value and add it to my list.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=174)** And then I return all the team items.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=176)** And as you can see, when I run the code, it works correctly.

> [!info]- Semantic Content
>
> **Code Identifiers:** teamname (4), allteamitems (2), teamcard (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** the key is (1)
> **Warnings:** be aware (1)
> **Speakers:** - the (1)

#### [Solution: PriorityQueue](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=0)** - [Instructor] The goal for this code challenge was to work with the priority queue.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=4)** Now, because I'm working with this queue in two methods, the ProcessOrder method and also in the GetNextOrder method, I created a variable here at the class level called _queue.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=18)** And it's a priority queue and I specified the value stored in the queue as a decimal and the priority level is set with an integer value.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=26)** The rules are set here.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=28)** So here's the code that I wrote to add the items to the queue at the correct priority level.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=33)** I created a variable called priorityLevel and I initialize that to the value of five.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=37)** And then I check my first rule, if the order total is greater than or equal to 25 then I set the priority to three.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=44)** If it's greater than or equal to 75, I set it to one, if it's any other value, then it's five.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=50)** And then down here I call Enqueue, I pass in the order total that's the decimal value and the priority level.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=57)** And then in the GetNextOrder there's only one line of code needed, at least the way I solved it, and that's to call _queue.Dequeue.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=66)** And I just return that value as a decimal.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=68)** And when I test the code, you can see in the console output that I got the right answer.

> [!info]- Semantic Content
>
> **Code Identifiers:** prioritylevel (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Use a slice to get a subset](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=0)** - [Instructor] In this code challenge, we're looking for a way to get a slice of data or a subset of data from a source and it's supposed to be a contiguous set of information, so all the items are next to each other in the source.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=14)** I ask you to do this with two sources, an array and a list of t.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=18)** For the first example, we're looking at the array example, so here I've got this GetSlicesFromArray and the plan is to return a string array, and then the source is a string array.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=28)** And one of the ways you can work with an array, of course, is to use an index value to find one of the items.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=35)** In the newer versions of C-sharp, there's this range operator that's lets us specify a range of values, so I'm starting at 3 and I'm going up to, but not including 6, so they'll only get me items 3, 4, and 5.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=50)** I like the syntax, I think this is a really elegant syntax that they added recently in C-sharp.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=56)** So what I'm doing next is I'm doing it again over here, I'm getting all items, 8 through 11 or 8, 9 and 10, and then I'm concatenating the two items together and then I'm calling ToArray to make sure it's turned back into a string array and then I return that value, and as you can see over here, I'm getting the results that I'm looking for.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=77)** What about working with a list of string?
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=80)** You can't use this syntax in a list, so we have to find another way, so there's the old school way of doing it, prelink, which is called GetRange and then there's the link version, so let's look at both of those.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=93)** So there's GetRange, which is a method on the list of t, so I call GetRange, I say start at position 3 and get three items and then I do that a second time, start at 8 and get three items, and then I am taking the original lists and I'm adding a range, the value that I got here, so that's one way of getting the results.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=117)** The other way is to use link and in link you can use the Skip and the Take, so I skip the first three items, then I take 3 and then I skip 2 and 8 and take 3, and then of course I call Concat again to put these two together and then of course I would call return q to turn this into a list, I didn't run that code, I ran the first example where I used the range and that's what you're seeing, here.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: ConvertAll](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=0)** - For this code challenge, we start with a list of one type, and we convert it, and transform it into a list of a different type.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=7)** The two types are listed at the bottom of this code window, we have the Point and the Point3D.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=13)** The main difference is, of course, that this has an extra property, and since we don't want this to be the default of zero, we'll do a transformation, and the formula was listed here, so we'll do some addition and some multiplication.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=27)** I've done two examples.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=29)** One's using the older way of working with conversion in a list of T, that is the convert all method, that was prelink, and then, the second example I show is using some link code.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=43)** As I said, for this first example, we're going to call points.ConvertAll, this is how I solve the problem.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=49)** And then I'm saying I want to instantiate a new Point3D, and then I'm applying the formula here.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=55)** The new Xd value is equal to p.x, I should say p.x + 10.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=61)** The Yd value is equal to p.y. + 20, and then for Zd, I've got some multiplication happening here.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=70)** The formula's the same, on line 28, the main differences here is I'm using link so I'm calling select, which will allow me to select that either to my own anonymous type, or in this example, I'm selecting out to the existing type, the Point3D.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=86)** So I select out, again, the code here's identical, I create a new Point3D, and all the formula is the same.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=92)** Once I have the select and this potential query, then I call .ToList to turn it into a list, and then I would return link points here instead of convert points.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=102)** So, for this example, I'm returning the first example, where I called ConvertAll.

> [!info]- Semantic Content
>
> **Speakers:** - for (1)

#### [Solution: HashSet operations](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=0)** - [Narrator] One of the reasons I created this code challenge is because I wanted you to work with the hash set.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=6)** I think it's one of the underused types in the generic collections in .net.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=10)** It's fast, it's efficient, it only supports unique values.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=14)** If you attempt to add a duplicate value to a hash set, then nothing happens.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=18)** It's just ignored.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=19)** There's no exception thrown.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=21)** It also has very fast set operations.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=24)** So while the code challenge itself was to create this [[Microsoft Word|word]] search game, that's not what we're really doing here.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=31)** Is we're just working with the hash set with a set of words in it, and we're modifying the code in these two methods to get player valid words method and the remove duplicate words method.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=42)** And in both these cases they take a hash set, or multiple hash sets as parameters, and return a hash set of string.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=50)** In my comments I mentioned you might want to consider using some of the hash set methods, like intersect with, or accept with, or union with.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=59)** There's also link equivalents.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=61)** The differences are listed here.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=63)** The hash set methods are immutable, meaning that the original hash set is changed.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=68)** Whereas the link methods are immutable, meaning that you get back a new hash set.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=73)** So in my example from my code challenge and my solution, I chose the link methods.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=78)** But the syntax is nearly identical.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=80)** So let's see how I solved this challenge.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=83)** So for the first one, get player valid words.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=85)** We're going to check this valid words hash set against the player's words.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=92)** And the way I solved this was by using the intersect method.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=98)** So what this does is to perform a set operation that returns the common elements between the two collections.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=103)** So it'll return all the items that match.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=105)** So if the player passes in this word like F F F or D D D, that's not valid.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=110)** So that's not going to be in both of the hash sets.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=114)** So that will eliminate these wrong words, or these incorrect, or non-valid words.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=119)** And then I'm returning this.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=122)** Now by default, this returns an IEnumerable of string.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=126)** So since I'm returning a hash set of string here I call to hash set.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=133)** For the remove duplicate words you get two hash sets passed in.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=138)** And what we're going to do is remove the duplicate words that are in both hash sets.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=142)** So for this example, I chose to use the except link method.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=147)** So you take the first set, call except, pass it the second set, and then again call to hash set to get a hash set back.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=155)** And it tells you here the except method is used to perform a set operation that returns the elements from one collection that are not present in another collection.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=163)** And it says here, it's commonly used to find the differences between the two sequences.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=168)** So once that's done, the [[Representational State Transfer (REST)|rest]] of the code runs.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=171)** And we see over here that player one has the high score.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=176)** You can see the validated contents.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=178)** These are the words that were correct in player one and player two.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=182)** Here's the unique words.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=185)** And then we see that player one had three words, whereas player two only had one word.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/next-steps?u=76281980&t=1)** - Thanks for participating in this code challenge course.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/next-steps?u=76281980&t=4)** If you like these interactive hands-on challenges, we have more to explore with challenges in [[Java]], Go, C#, [[JavaScript]], and [[SQL]].
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/next-steps?u=76281980&t=18)** Don't forget, we have a big library of .NET and C# related courses.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/next-steps?u=76281980&t=23)** I've got some courses I think you'll like.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/next-steps?u=76281980&t=26)** Thanks again, and may all your code be bug-free.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[JavaScript]] (1), [[SQL]] (1)
> **Env Vars:** sql (1), net (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Walt Ritscher]]

## Skills Covered

- C#

## Path Context

### In [[Elevating C- Skills- Building Robust Applications]]
← [[C- Unit Testing with xUnit]] | **8 of 8**

## Appears In

- [[Elevating C- Skills- Building Robust Applications]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#

---

[↑ Back to top](#)