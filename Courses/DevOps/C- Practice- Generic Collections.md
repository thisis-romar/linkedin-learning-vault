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
  - '[Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)'
prev_courses:
  - '[C- Unit Testing with xUnit](C-%20Unit%20Testing%20with%20xUnit.md)'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":8,"total":8,"prev":"C- Unit Testing with xUnit","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/practice-your-c-sharp-generic-collections-skills?u=76281980&t=0)** - Are you ready to check your understanding of .NET dictionaries, priority queues, and sorted sets? This course tests your skills with a series of code challenges exploring a wide range of collection concepts. I'm Walt Ritscher. I've been using .NET stacks and queues since the first days of .NET. As I see it, knowledge of .NET collections is an essential skill, a fundamental concept every .NET developer should know. This course gives you the opportunity to show what you know, so let's go solve some code challenges.

> [!info]- Semantic Content
>
> **Env Vars:** net (5)
> **Definitions:** is an  (1)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a code challenge course where you get to prove your skills by writing code to solve the proposed challenges. There are six challenges in this course. Before you write the code, let me provide some context. What do you need to know? I'll tell you what kind of challenges are in the course, the skills you'll need to demonstrate and some resources where you can acquire the necessary knowledge. The theme for this course is the .NET generic collections. There are a lot of collection types available. For the challenges, you'll work with some of them. Here's a breakdown of the challenges. You'll work with the list<T> specifically with the insertion logic. Next is the dictionary class. You'll be tasked to find matching items in multiple dictionaries and combine them into a new generic list. There is one using the PriorityQueue, a special kind of queue. The challenge is to change the priority levels of items as you add them to the queue. For another task, you'll work with array slicing. That's where you get a contiguous subset of an existing array. The challenge posed in this course is to slice multiple areas in an array and combine them into a new array. Then do it again with a generic list. There is a conversion challenge, taking an existing list and converting and transforming all the items into a new type. Finally, there is a challenge based on the hash set which is an optimized collection of unordered unique elements. It provides fast lookups and high performance set operations and I think it's underutilized in .NET code.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/what-you-should-know?u=76281980&t=95)** You'll get a chance to use it in the course. To find out more about .NET collections check out the "C# Essential Training number two: "Generics, Collections and [LINQ](../../Skills/Software%20Development/Language%20Integrated%20Query%20(LINQ).md)" course. It has details on generic types, collections and concurrent collections. There are many ways to work with .NET Collections. If you want, you can use LINQ to solve the challenges, but that's not the focus of this course. You can solve without LINQ if you prefer. I've chosen to use LINQ for some of my solution code, so having some knowledge of LINQ is useful. We've got some courses that Explore LINQ. The one that is most relevant to the code challenges in this course is ".NET Essentials: Working with LINQ". The other courses for XML and [Databases](../../Skills/Software%20Development/Databases.md) are not as relevant to the challenges but I think you'll find them interesting if you want a complete picture of LINQ and .NET.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linq](../../Skills/Software%20Development/Language%20Integrated%20Query%20(LINQ).md) (8), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** linq (8), net (6), xml (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (3)
> **Analogies:** picture (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Explore the code challenge](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the course table of contents. Each challenge includes instructions that describe your tasks. There's a pair of code editors where you create and test your own solution to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. Now, looking at the CoderPad UI, there are four panes. In the top left are the instructions. On the right side at the top is a code editor. This is where you'll write your answer. There's another code editor on the bottom right. This is where you see how your code is used or called. And on the bottom left is a console for output. Now, you can resize these panes by dragging up and down or by dragging left or right. Now, let's talk about what's in the instructions. Each challenge has instructions that include a description of the challenge. It might include some additional details. It might have the challenge statement. This is where the instructor or where I will explain the task that you need to correctly complete the challenge. I like to note that the way you solve the challenge is up to you. Now, here's what happens when you're ready to test your code. You're go down here to this button and click Test My Code. CoderPad will run your application code and it also runs a set of unit tests to verify
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=92)** that your code solves the proposed challenge. Other things that you can find in the instructions, it depends on each challenge. There could be additional descriptions. There could be a call out for the specific tasks that you need to accomplish. There could be screenshots. There could be object diagrams. There could be flow charts. There might be some sample code in here. For example, this is saying that you need to write your code in this class called WorkWithList and write it in a method called GetTwoLargestNumbers. So if you look over here in the Answer section, you'll see that there is a class called WorkWithList that has a method called GetTwoLargestNumbers. So you'll write your code in here. There's some additional information or there might be some additional information about parameters and the types of results you're expecting, any constraints on the data, and there could be some examples. Now, let's start talking about writing your code. You'll write your code here and it'll be tested in the unit test and you can see some of what the unit test will do here in this area. Now, I recommend that you do not change these values here in the test code because my unit test is looking for, in this example, is looking for a variable called topNumbers. And I'll be using that to verify that you passed back the TwoLargestNumbers. Okay, so now, let's go and see what we have happening up here. There are two classes up here. This first class is called Answer and it has two Boolean parameters, ShowExpectedResult and ShowHints.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=186)** I'll hide that for the moment. And then in most of my challenges in this course, I have an additional class that contains one or more methods and you'll be writing your code in these methods. So in this example, it's called WorkWithList class. I'm going to write my code in here. Now, let's try running my unit test by testing the code. And over here in the Console output, I see that there's an unhandled exception. That's because my unit test is expecting an instance of a list of int to be returned from this method. And currently, it's returning a null. So let's go ahead and return something. So I'll take this inbound parameter and return that and test my code again. And now, I see some information here. I see the original list and the topNumbers and I see "That's not the expected result." because I return more than one number. Also, depending on the challenge, I may output additional information to the console. In this case, it's outputting the original list of numbers and it's outputting the topNumbers. If you want to solve the problem without any hints, this is what you'll see. If you would like additional help, then let's talk about these variables. Let's set ShowExpectedResult to true. So we'll go up here to the Answer class. Change this to true. Rerun the code. And now, I'm still seeing the error message,
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=278)** "You didn't get it right this time." But now, down here, I see that the test failed because topNumbers should have contained two items and the first item should have been nine and the second item should have been eight. You can also get hints. Let's turn this back to false. Turn this to true. Test my code again. Now, I'm not seeing the test failure messages, but I am seeing a "Hint: "Consider using the OrderByDescending method "to arrange the numbers from highest the lowest." So let's try that. So rather than returning numbers, let's write a query here, var q equal to.
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=333)** You see, I'm getting auto completion in IntelliSense. Then I'll do a Lambda here. Actually, I do not need the Lambda. I don't think, so I'll just do a .Take and I'll take two items.
>
> **[5:54](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=354)** And then I'll return q.ToList.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/explore-the-code-challenge?u=76281980&t=362)** It looks like I do need the Lambda here so I'll put in x Lambda x. Now, I'm not getting the red squiggle. That's the only thing about this editor is you get the same red squiggles that you do in Visual Studio or Visual Studio Code. Now, I'm ready to test my code. And now, I see the original list. I see the top numbers. And now, I get the success message, "Another one solved!" When you have finished each code challenge, return to the course table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=0)** - [Instructor] We start this code challenge with an existing list of integers called numbers that has the values one, three and five within the list. We're going to modify this list in the update list method with the value being passed in with the new number parameter. If the new number is negative, then it goes at the end of the list. If it's greater than 100, it goes at the beginning or the start of the list. And if it's a value of zero through 100, it should be placed at the midpoint of the list. The code that I used to solve this challenge is shown here. On line 35, I create this insert index variable and I set it to zero. I'll use that later in my code. Then I check to see if the new number is less than zero. If it's less than zero, then I call numbers.add. Add places the new item at the end of the list. Then I return. Next, down here on line 43, the insert method allows us to pick the location of the insert. So my code is either going to insert it at position zero which puts it at the beginning of the list or it's going to insert it at a calculated value which will put it at the midpoint. So I calculate the midpoint here on line 40. If the number is zero through 100, then I take the existing count of the list, divide that by two and assign that to insert index. Let's verify that it works. I'll test my code. I got the right answer. So that's how I solve the code challenge. There are many other ways you could solve this. I want to spend a couple of minutes talking about
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=96)** another way you can solve this and we can point out a couple other features in the link and in C#. That's in this method shown here on line 46. Now this was not included in your starter code and when you click the Test my Code button, it's not running this code. I just wanted to show you this as an example. So I want to talk about the switch expression in C# and I want to talk about some new link operators that you might find interesting. First, let's start by talking about the switch expression. So the way you set up a switch expression is you use the switch keyword here and then you're going to create values based on some criteria. So the way you would read this is we're going to switch on this integer value and we're going to return an IEnumerable of int. So every one of these expressions must return an IEnumerable of integer. So on line 57 what I'm doing here is I'm saying if new number is less than zero, then do this action. On line 58 I say if it's greater than 100, then do this other action. And this is the discard symbol in C# which is the catchall. And I say so in this third case, if it's anything that's not found in these two conditions, then do this action. So let's reveal what I just said. Based on this number, we're going to return an IEnumerable int. And the way I do that, it was with prepend, with append and some other code. Now the link prepend and append, they alter the sequence. Prepend puts an item at the beginning of the list
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/4481725?u=76281980&t=191)** and append puts the item at the end of the list. But notice what they do here is they return a new list. And this is a nice solution when you don't want side effects. If you've studied [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md), one of the tenets of functional programming is that if you have an array or list, you don't modify the contents of that. Instead what you do is you create a new list with the new content and you return that. So that's what I'm doing here and prepend always returns an IEnumerable int and append returns an IEnumerable of int. I'm going to use insert to place the item in the midpoint. Now insert does cause a side effect so I can't just do a one line here. There's no numbers.insert. That's a link query that does what I'm looking for. So I had to write some code up here to do it. So on line 52, I'm creating a new list of integers and I'm basing it on the existing list. So it will contain all the values of the existing list. Now I'm calling that new list. Then on the new list I'm calling insert using that calculated value. And then here on the discard, I return the new list. And then finally here on line 63, I would return that result on this method. We didn't talk about this method very much. I called it update list with link that takes a new number and to do it in a functional way, will return an IEnumerable of int.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (2)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Exercise Files:** starter code (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Examine dictionary contents](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=0)** - The goal for this code challenge was to look through several dictionaries for a key. In this case it was the teamName key and the dictionaries are here as parameters for this method to FindAllByTeamName method. So I have one dictionary where the key is a string. In fact, all of 'em have strings for the key and they have different types for the values, that all implement the ICollectible interface. So we've got the Cup, the Shirt, and the TradingCard and we're going to look through these dictionaries and if we find a matching key, then we extract the value out of the dictionary and place it in a list of ICollectible. Now I'm going to show you three different ways of solving this code challenge. One working with the Cup dictionary. One working with the Shirt dictionary and one working with the TradingCard dictionary. So the first one, working with the cups, is to look at ContainsKey. So you call this method passing in the key and it returns true if it exists. And then down here on line 31 we extract the value and add it to the allTeamItems list. Now there is an issue with this solution is that it will search the dictionary twice. Once when you call ContainsKey to verify that it exists, and then another time when you extract the value here. So a more efficient way to handling this is to use TryGetValue, which I'm showing here. This time I'm going to be working with the Shirts dictionary. So I try to get the value that will return true if it exists. So if it's true, then the value's placed in this out variable and then I extract that here and I call allTeamItems dot add shirt. As I note in my comments here,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-examine-dictionary-contents?u=76281980&t=95)** be aware there's a possible race condition using either of these solutions. It's easier to see if you look at line 27 and 31. So we have one thread enter this code and gets a value that says does contain the teamName key. And then before it gets to line 31, that thread is halted and another thread takes some action and removes that key. By the time you actually run line 31, that key won't exist anymore. The same is true for the TryGetValue. Now the solution for this is to use a different class. There's a class called ConcurrentDictionary, which is a thread safe way of accessing values. I do have a course on the concurrent collections in dot net. For the third example, working with cards, I'm using Link. Now this also works, but it's not efficient. So here I'm calling Where on the cards, where the card Key is equal to the teamName. Then I go here and I check to make sure there's a result. If the teamCard dot Any, that means if it finds any value or this teamName is the key, then this is true. And then I'll go grab the teamCard. The first item in there, there could be more than one that shouldn't be, but I do like to call First. That ensures I only get one and then I get the value and add it to my list. And then I return all the team items. And as you can see, when I run the code, it works correctly.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-priorityqueue?u=76281980&t=0)** - [Instructor] The goal for this code challenge was to work with the priority queue. Now, because I'm working with this queue in two methods, the ProcessOrder method and also in the GetNextOrder method, I created a variable here at the class level called _queue. And it's a priority queue and I specified the value stored in the queue as a decimal and the priority level is set with an integer value. The rules are set here. So here's the code that I wrote to add the items to the queue at the correct priority level. I created a variable called priorityLevel and I initialize that to the value of five. And then I check my first rule, if the order total is greater than or equal to 25 then I set the priority to three. If it's greater than or equal to 75, I set it to one, if it's any other value, then it's five. And then down here I call Enqueue, I pass in the order total that's the decimal value and the priority level. And then in the GetNextOrder there's only one line of code needed, at least the way I solved it, and that's to call _queue.Dequeue. And I just return that value as a decimal. And when I test the code, you can see in the console output that I got the right answer.

> [!info]- Semantic Content
>
> **Code Identifiers:** prioritylevel (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Use a slice to get a subset](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=0)** - [Instructor] In this code challenge, we're looking for a way to get a slice of data or a subset of data from a source and it's supposed to be a contiguous set of information, so all the items are next to each other in the source. I ask you to do this with two sources, an array and a list of t. For the first example, we're looking at the array example, so here I've got this GetSlicesFromArray and the plan is to return a string array, and then the source is a string array. And one of the ways you can work with an array, of course, is to use an index value to find one of the items. In the newer versions of C-sharp, there's this range operator that's lets us specify a range of values, so I'm starting at 3 and I'm going up to, but not including 6, so they'll only get me items 3, 4, and 5. I like the syntax, I think this is a really elegant syntax that they added recently in C-sharp. So what I'm doing next is I'm doing it again over here, I'm getting all items, 8 through 11 or 8, 9 and 10, and then I'm concatenating the two items together and then I'm calling ToArray to make sure it's turned back into a string array and then I return that value, and as you can see over here, I'm getting the results that I'm looking for. What about working with a list of string? You can't use this syntax in a list, so we have to find another way, so there's the old school way of doing it, prelink, which is called GetRange and then there's the link version, so let's look at both of those.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-use-a-slice-to-get-a-subset?u=76281980&t=93)** So there's GetRange, which is a method on the list of t, so I call GetRange, I say start at position 3 and get three items and then I do that a second time, start at 8 and get three items, and then I am taking the original lists and I'm adding a range, the value that I got here, so that's one way of getting the results. The other way is to use link and in link you can use the Skip and the Take, so I skip the first three items, then I take 3 and then I skip 2 and 8 and take 3, and then of course I call Concat again to put these two together and then of course I would call return q to turn this into a list, I didn't run that code, I ran the first example where I used the range and that's what you're seeing, here.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: ConvertAll](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=0)** - For this code challenge, we start with a list of one type, and we convert it, and transform it into a list of a different type. The two types are listed at the bottom of this code window, we have the Point and the Point3D. The main difference is, of course, that this has an extra property, and since we don't want this to be the default of zero, we'll do a transformation, and the formula was listed here, so we'll do some addition and some multiplication. I've done two examples. One's using the older way of working with conversion in a list of T, that is the convert all method, that was prelink, and then, the second example I show is using some link code. As I said, for this first example, we're going to call points.ConvertAll, this is how I solve the problem. And then I'm saying I want to instantiate a new Point3D, and then I'm applying the formula here. The new Xd value is equal to p.x, I should say p.x + 10. The Yd value is equal to p.y. + 20, and then for Zd, I've got some multiplication happening here. The formula's the same, on line 28, the main differences here is I'm using link so I'm calling select, which will allow me to select that either to my own anonymous type, or in this example, I'm selecting out to the existing type, the Point3D. So I select out, again, the code here's identical, I create a new Point3D, and all the formula is the same. Once I have the select and this potential query,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-convertall?u=76281980&t=95)** then I call .ToList to turn it into a list, and then I would return link points here instead of convert points. So, for this example, I'm returning the first example, where I called ConvertAll.

> [!info]- Semantic Content
>
> **Speakers:** - for (1)

#### [Solution: HashSet operations](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=0)** - [Narrator] One of the reasons I created this code challenge is because I wanted you to work with the hash set. I think it's one of the underused types in the generic collections in .net. It's fast, it's efficient, it only supports unique values. If you attempt to add a duplicate value to a hash set, then nothing happens. It's just ignored. There's no exception thrown. It also has very fast set operations. So while the code challenge itself was to create this [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) search game, that's not what we're really doing here. Is we're just working with the hash set with a set of words in it, and we're modifying the code in these two methods to get player valid words method and the remove duplicate words method. And in both these cases they take a hash set, or multiple hash sets as parameters, and return a hash set of string. In my comments I mentioned you might want to consider using some of the hash set methods, like intersect with, or accept with, or union with. There's also link equivalents. The differences are listed here. The hash set methods are immutable, meaning that the original hash set is changed. Whereas the link methods are immutable, meaning that you get back a new hash set. So in my example from my code challenge and my solution, I chose the link methods. But the syntax is nearly identical. So let's see how I solved this challenge. So for the first one, get player valid words. We're going to check this valid words hash set against the player's words. And the way I solved this was by using the intersect method.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/solution-hashset-operations?u=76281980&t=98)** So what this does is to perform a set operation that returns the common elements between the two collections. So it'll return all the items that match. So if the player passes in this word like F F F or D D D, that's not valid. So that's not going to be in both of the hash sets. So that will eliminate these wrong words, or these incorrect, or non-valid words. And then I'm returning this. Now by default, this returns an IEnumerable of string. So since I'm returning a hash set of string here I call to hash set. For the remove duplicate words you get two hash sets passed in. And what we're going to do is remove the duplicate words that are in both hash sets. So for this example, I chose to use the except link method. So you take the first set, call except, pass it the second set, and then again call to hash set to get a hash set back. And it tells you here the except method is used to perform a set operation that returns the elements from one collection that are not present in another collection. And it says here, it's commonly used to find the differences between the two sequences. So once that's done, the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code runs. And we see over here that player one has the high score. You can see the validated contents. These are the words that were correct in player one and player two. Here's the unique words. And then we see that player one had three words, whereas player two only had one word.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-practice-generic-collections/next-steps?u=76281980&t=1)** - Thanks for participating in this code challenge course. If you like these interactive hands-on challenges, we have more to explore with challenges in [Java](../../Skills/Software%20Development/Java.md), Go, C#, [JavaScript](../../Skills/Software%20Development/JavaScript.md), and [SQL](../../Skills/Data%20Science/SQL.md). Don't forget, we have a big library of .NET and C# related courses. I've got some courses I think you'll like. Thanks again, and may all your code be bug-free.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1), net (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - thanks (1)


## Instructor

- [Walt Ritscher](../../Instructors/Cloud%20Computing/Walt%20Ritscher.md)

## Skills Covered

- C#

## Path Context

### In [Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)
← [C- Unit Testing with xUnit](C-%20Unit%20Testing%20with%20xUnit.md) | **8 of 8**

## Appears In

- [Elevating C- Skills- Building Robust Applications](../../Paths/DevOps/Learning%20Paths/Elevating%20C-%20Skills-%20Building%20Robust%20Applications.md)

## Related Courses

_Courses sharing skills:_

- [Learning C-](../Software%20Development/Learning%20C-.md) — C#
- [Cert Prep- Unity Certified Associate Game Developer Scripting with C-](../Software%20Development/Cert%20Prep-%20Unity%20Certified%20Associate%20Game%20Developer%20Scripting%20with%20C-.md) — C#
- [Nail Your C- Interview](../Software%20Development/Nail%20Your%20C-%20Interview.md) — C#
- [C- Design Patterns Part 2](../Software%20Development/C-%20Design%20Patterns%20Part%202.md) — C#
- [C- Design Patterns Part 1](../Software%20Development/C-%20Design%20Patterns%20Part%201.md) — C#

---

[↑ Back to top](#)