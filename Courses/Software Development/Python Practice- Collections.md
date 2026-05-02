---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-practice-collections
url: "https://www.linkedin.com/learning/python-practice-collections"
duration_minutes: 11
duration: 11m
level: Intermediate
updated: 9/13/2023
learners: 62992
skills:
  - Python (Programming Language)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFCrLcz8K9sJA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692643564786?e=2147483647&amp;v=beta&amp;t=k_-vXGjaevWvfYyAzHvMgQU-2Dx6uvdcfHxxHznPHyQ"
linkedin_topic: Software Development
learning_paths:
  - '[[Python Hands-On Practice]]'
prev_courses:
  - '[[Python Practice- Operations]]'
next_courses:
  - '[[Python Practice- Object-Oriented Programming]]'
path_nav: '[{"path":"Python Hands-On Practice","position":4,"total":14,"prev":"Python Practice- Operations","next":"Python Practice- Object-Oriented Programming"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Practice-%20Collections.md)

![Python Practice: Collections](https://media.licdn.com/dms/image/v2/D560DAQFCrLcz8K9sJA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692643564786?e=2147483647&amp;v=beta&amp;t=k_-vXGjaevWvfYyAzHvMgQU-2Dx6uvdcfHxxHznPHyQ)

# Python Practice: Collections

> Want to get up to speed with Python collections, but not sure where to begin? In this course, designed for developers with intermediate-level Python experience, LinkedIn Learning staff instructor Scott Simpson gives you a hands-on overview of the different available data types in the Python collections module and shows you how to use each of them to write more efficient and more reliable code. Joi

> [LinkedIn Learning](https://www.linkedin.com/learning/python-practice-collections) | 11m | Intermediate | 63K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Try your Python programming skills](#try-your-python-programming-skills)
  - [What you should know](#what-you-should-know)
  - [Exploring the Lab environment](#exploring-the-lab-environment)
- [**1. Code Challenges**](#1-code-challenges) (5 videos)
  - [Solution: Deduplicate and sort a list](#solution-deduplicate-and-sort-a-list)
  - [Solution: Modify a tuple](#solution-modify-a-tuple)
  - [Solution: At the bakery](#solution-at-the-bakery)
  - [Solution: Who won?](#solution-who-won)
  - [Solution: What's that taste like?](#solution-whats-that-taste-like)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Try your Python programming skills](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=0)** - [Narrator] [[Python (Programming Language)|Python]] is one of the most popular programming languages in the world.
>
> **[0:04](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=4)** Knowledge of Python opens the door to working with data, building applications, and solving problems with code that can run on many types of devices.
>
> **[0:12](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=12)** In this Code Challenge course, you can test your knowledge of Python collections to build your confidence working with [[Data Structures]] in the language.
>
> **[0:19](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=19)** I've put together five code challenges that cover the concepts around collections that you'll use when working in Python.
>
> **[0:25](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=25)** Build and test your solutions to these challenges in the built-in interactive coding environment.
>
> **[0:30](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=30)** No special software required.
>
> **[0:32](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=32)** And when you finish your solution to each challenge, take a look at my solution videos to see how I solve them.
>
> **[0:38](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=38)** I'm Scott Simpson, senior staff instructor at [[LinkedIn]] Learning.
>
> **[0:41](https://www.linkedin.com/learning/python-practice-collections/try-your-python-programming-skills?u=76281980&t=41)** If you're ready to try out your Python collection skills, let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Data Structures]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (5)
> **Speakers:** - [narrator] (1)

#### [What you should know](https://www.linkedin.com/learning/python-practice-collections/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/what-you-should-know?u=76281980&t=0)** - [Speaker] In this Code Challenge course, I expect you to be familiar with using collections in [[Python (Programming Language)|Python]].
>
> **[0:05](https://www.linkedin.com/learning/python-practice-collections/what-you-should-know?u=76281980&t=5)** We'll work with lists, tuples, sets, and dictionaries and we'll use some flow control and conditional statements too.
>
> **[0:12](https://www.linkedin.com/learning/python-practice-collections/what-you-should-know?u=76281980&t=12)** The challenges start out quite basic and become more involved as the course moves on.
>
> **[0:16](https://www.linkedin.com/learning/python-practice-collections/what-you-should-know?u=76281980&t=16)** If you need to refresh your Python knowledge, take a look at these courses in the [[LinkedIn]] Learning Library.
>
> **[0:21](https://www.linkedin.com/learning/python-practice-collections/what-you-should-know?u=76281980&t=21)** To work on these challenges, you don't need to install any separate software.
>
> **[0:25](https://www.linkedin.com/learning/python-practice-collections/what-you-should-know?u=76281980&t=25)** The Coding Challenge environment is part of the LinkedIn Learning course page.
>
> **[0:29](https://www.linkedin.com/learning/python-practice-collections/what-you-should-know?u=76281980&t=29)** We'll explore how that works in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (2)
> **CLI Commands:** python (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [speaker] (1)

#### [Exploring the Lab environment](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:14](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=14)** These challenges are hosted by Coder Pad and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:20](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=20)** We recommend using a desktop browser for the best experience with code challenges but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:28](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=28)** The code challenge has four areas.
>
> **[0:30](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=30)** Instructions are in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left.
>
> **[0:43](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=43)** You can use these drag handles to allocate space as you like.
>
> **[0:48](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=48)** To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left.
>
> **[0:54](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=54)** Each challenge has instructions that include a description of the challenge and the challenge's parameters and desired result.
>
> **[1:01](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=61)** Parameters are values that are passed into your code and they have to be of a particular data type.
>
> **[1:06](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=66)** The return value also has to be of a particular type and you'll also see that noted in the instructions.
>
> **[1:12](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=72)** The constraints section has useful information about the parameters that will be passed in.
>
> **[1:17](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=77)** The examples show different parameter values and what result would be returned for each of those test cases.
>
> **[1:23](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=83)** Create your answer in the top right code editor.
>
> **[1:26](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=86)** There are comments in the starting code showing where to put your solution.
>
> **[1:30](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=90)** (keyboard clicks) When you click test my code, you'll see a message indicating whether your code returned a correct result.
>
> **[1:46](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=106)** If your code isn't successful, you can ask for help.
>
> **[1:57](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=117)** The show expected result and show hints variables determine whether you see the expected output and any hints.
>
> **[2:05](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=125)** (keyboard clicks) Change them to a value of true to control the output.
>
> **[2:16](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=136)** The code editor in the lower right shows how your solution is used.
>
> **[2:20](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=140)** You can change that code to experiment with different test cases.
>
> **[2:25](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=145)** (keyboard clicks)
>
> **[2:41](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=161)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left.
>
> **[2:47](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=167)** If any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[2:52](https://www.linkedin.com/learning/python-practice-collections/exploring-the-lab-environment?u=76281980&t=172)** When you finish each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Code Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Deduplicate and sort a list](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=0)** - [Instructor] Here is how I solved this challenge.
>
> **[0:02](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=2)** My solution uses two [[Python (Programming Language)|Python]] functions to transform the animals list.
>
> **[0:06](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=6)** Working from the inside out here, I'm using the set function to create a new set from the animals list.
>
> **[0:14](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=14)** The set function is a convenient way to make sure we have only unique items in a group.
>
> **[0:19](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=19)** A set cannot contain duplicate items, but a list can.
>
> **[0:23](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=23)** So by converting our list to a set, we get a de-duplicated group of items.
>
> **[0:28](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=28)** Whether we saw one fox or 20 foxes, for example, the set only says fox once.
>
> **[0:33](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=33)** After that, I used the sorted function here to create a new list for my set with its items in alphabetical order.
>
> **[0:39](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=39)** That's important because a set does not have a guaranteed order, but a list does and a requirement of the challenge was to present the items in alphabetical order.
>
> **[0:49](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=49)** This is what I return as the result when my prepare list function is called.
>
> **[0:53](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=53)** Let's run this and see what happens.
>
> **[0:56](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=56)** There's my list.
>
> **[0:57](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=57)** The items are in alphabetical order and there's only one instance of each type of animal.
>
> **[1:01](https://www.linkedin.com/learning/python-practice-collections/solution-1-deduplicate-and-sort-a-list?u=76281980&t=61)** We're ready to use this data in our app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Modify a tuple](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=0)** - [Instructor] To solve this challenge, I need to use the values from the original topple and the new value, and I need to insert that new value at the specified index.
>
> **[0:10](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=10)** So, I start by using slicing to get the items in the original topple, starting from the beginning through the value of index.
>
> **[0:17](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=17)** The colon here without a number before it means to start at the beginning of a collection and then index following it means to stop when it reaches that value.
>
> **[0:25](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=25)** So for example, if the value of index was four, this portion of code would represent items 0, 1, 2, and 3.
>
> **[0:33](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=33)** Then I use plus and the new value followed by a comma in parentheses to add the new value.
>
> **[0:39](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=39)** Without the comma, this value would be treated as a string and we can't concatenate a string to topple values.
>
> **[0:44](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=44)** And because the first part over here contains the values up to where I wanted this item to be, this item will be in the correct place.
>
> **[0:51](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=51)** After this, I add the [[Representational State Transfer (REST)|rest]] of the original values here.
>
> **[0:54](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=54)** This time starting at the index running through the end of the collection.
>
> **[0:58](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=58)** When this is returned, it'll be a topple because even though topples are immutable, we're constructing a new one out of three topple values: the first segment, the new value, and the last segment.
>
> **[1:09](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=69)** You might also have converted the topple to a list and worked with it in that form using the list index insert method.
>
> **[1:16](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=76)** If you did though, you'd need to remember to convert that list back to a topple or your code wouldn't satisfy the requirements in the challenge.
>
> **[1:23](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=83)** Let's run this.
>
> **[1:25](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=85)** And there we go.
>
> **[1:26](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=86)** That worked!
>
> **[1:28](https://www.linkedin.com/learning/python-practice-collections/solution-2-modify-a-tuple?u=76281980&t=88)** I can see that my value baseball has been inserted at position two and that the value 11 has been inserted at index 3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: At the bakery](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=0)** - [Speaker] Here's how I solved this challenge.
>
> **[0:03](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=3)** To add our missing cake flavor to the cake's dictionary, we'll use its inventory ID as the key and then add the value as a list with the flavor and price.
>
> **[0:12](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=12)** Then I'll work on listing out the menu items.
>
> **[0:16](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=16)** I'll start out with an empty list that will collect our strings for each item.
>
> **[0:20](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=20)** Then I'll loop over each item in the cake's dictionary and I'll use the values method.
>
> **[0:26](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=26)** Using cakes.values returns us the value part but not the key part of each entry.
>
> **[0:32](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=32)** In this challenge, we don't really care a lot about the key for each item.
>
> **[0:35](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=35)** There are inventory numbers that aren't relevant to the menu itself.
>
> **[0:38](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=38)** So we'll use the list, which is the value component of each key pair and work with each set of values for flavor and price as we iterate through the dictionary.
>
> **[0:48](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=48)** I'll use an F string to insert each of my variables into a formatted string with the [[Microsoft Word|word]] cake, a dash and a currency symbol.
>
> **[0:54](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=54)** That makes each output string match the format the challenge asked for.
>
> **[0:58](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=58)** Each of those strings gets appended to my items list and the loop will continue until it's done with all the items in the dictionary.
>
> **[1:05](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=65)** Then I'll construct my return value.
>
> **[1:08](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=68)** The return value is where the sorting comes in.
>
> **[1:10](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=70)** Right now, the strings in the items list are in the order that they were read from the dictionary and that's not the order we want them in.
>
> **[1:17](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=77)** The challenge asked for the items to be in reverse alphabetical order.
>
> **[1:21](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=81)** So first, we'll sort the list to put it in alphabetical order and then we'll use the reversed function to switch that from A to Z to Z to A.
>
> **[1:31](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=91)** But reversed gives us an iterator, not a collection.
>
> **[1:34](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=94)** So we'll wrap that in a list function to turn the information back into a list and that's what the challenge asked us to return.
>
> **[1:44](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=104)** I'll run this and there's my little menu and here's the coffee cake flavor we added before listing the menu out.
>
> **[1:52](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=112)** If you got the same result on the first try, you might say this was a piece of cake or six pieces of cake.
>
> **[1:58](https://www.linkedin.com/learning/python-practice-collections/solution-3-at-the-bakery?u=76281980&t=118)** Hmm. Now I'm hungry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Speakers:** - [speaker] (1)

#### [Solution: Who won?](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=0)** - [Instructor] To solve this challenge, I started by creating variables to hold the values we're looking for, the highest average, and the name of the person with the highest average.
>
> **[0:11](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=11)** Each time through the for loop, we get a topple containing a key and a value, a name, and a list of scores.
>
> **[0:17](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=17)** For each list of scores, we add up the values and divide by the number of items to calculate the average or mean score for that person.
>
> **[0:28](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=28)** Then we compare the average for that person with the value stored as the highest average we've seen so far.
>
> **[0:34](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=34)** If our current average is greater than the stored one, we record the new highest average and we also store the name of the person associated with that score.
>
> **[0:43](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=43)** Once the loop ends, we return the name and score of the person with the highest score inside square brackets.
>
> **[0:49](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=49)** Remember, the challenge asked for the result to be a list.
>
> **[0:53](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=53)** Without these brackets, we'd be returning a tuple instead.
>
> **[0:56](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=56)** And a tuple is an appropriate thing for a function to return, but it's not what the challenge asked for.
>
> **[1:02](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=62)** I'll run this and let's see who won.
>
> **[1:06](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=66)** It looks like Carol is our winner.
>
> **[1:08](https://www.linkedin.com/learning/python-practice-collections/solution-4-who-won?u=76281980&t=68)** Good job, Carol.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: What's that taste like?](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=0)** - [Instructor] To solve this challenge, we'll start with an empty list to hold our results.
>
> **[0:06](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=6)** Then we move on to looping through each top level item in the dictionary.
>
> **[0:10](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=10)** In the provided dictionary, these will be the fruits and vegetable structures.
>
> **[0:14](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=14)** In each of those categories, we'll loop through the types, and within each type, we'll loop through the individual item.
>
> **[0:22](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=22)** At this point, this is the part of the data structure that we're looking at.
>
> **[0:26](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=26)** For example, "mango", "pineapple", "apple", and so on.
>
> **[0:30](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=30)** This brings us to the level of the data where we can check the color of an item.
>
> **[0:39](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=39)** And in our case here, we're asking whether the item is red.
>
> **[0:48](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=48)** If it is, we'll construct a string that uses the name of the item we're working within and the taste value that's associated with it.
>
> **[0:58](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=58)** We'll append that to our list of results.
>
> **[1:02](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=62)** And when the loop is finished, we'll return the list.
>
> **[1:06](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=66)** I'll run this, and we can see that we have two results.
>
> **[1:10](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=70)** The apple, which is sweet, and the beet, which is earthy.
>
> **[1:13](https://www.linkedin.com/learning/python-practice-collections/solution-5-what-s-that-taste-like?u=76281980&t=73)** Those both sound tasty, but we probably shouldn't get them mixed up.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-practice-collections/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-collections/next-steps?u=76281980&t=0)** - [Scott] If you were able to solve these challenges, congratulations.
>
> **[0:03](https://www.linkedin.com/learning/python-practice-collections/next-steps?u=76281980&t=3)** And if not, take some time to refresh your knowledge of [[Python (Programming Language)|Python]] and come back and try again.
>
> **[0:08](https://www.linkedin.com/learning/python-practice-collections/next-steps?u=76281980&t=8)** If you're ready to move on and solve more advanced challenges, take a look at our other interactive Python Code challenge courses here on [[LinkedIn]] Learning.
>
> **[0:15](https://www.linkedin.com/learning/python-practice-collections/next-steps?u=76281980&t=15)** See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - [scott] (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[Python Hands-On Practice]]
← [[Python Practice- Operations]] | **4 of 14** | [[Python Practice- Object-Oriented Programming]] →

## Appears In

- [[Python Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)