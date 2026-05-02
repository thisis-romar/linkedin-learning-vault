---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-recursion
url: "https://www.linkedin.com/learning/javascript-recursion"
duration_minutes: 67
duration: 1h 7m
level: Intermediate
updated: 11/23/2021
learners: 400716
skills:
  - JavaScript
exercise_files: true
github: "https://github.com/LinkedInLearning/javascript-recursion-2887233"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQETCQbptznOVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1637347099901?e=2147483647&amp;v=beta&amp;t=vMmRnT78QbyIr74Pmd1kT8J9w3xT_yPsj1pFWY3hNVs"
linkedin_topic: Software Development
learning_paths:
  - '[[Improve Your JavaScript Language Skills]]'
prev_courses:
  - '[[Level Up- JavaScript]]'
next_courses:
  - '[[JavaScript- Arrays]]'
path_nav: '[{"path":"Improve Your JavaScript Language Skills","position":4,"total":8,"prev":"Level Up- JavaScript","next":"JavaScript- Arrays"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Recursion.md)

![JavaScript: Recursion](https://media.licdn.com/dms/image/v2/C560DAQETCQbptznOVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1637347099901?e=2147483647&amp;v=beta&amp;t=vMmRnT78QbyIr74Pmd1kT8J9w3xT_yPsj1pFWY3hNVs)

# JavaScript: Recursion

> Recursion, in which functions call themselves, is a foundational structure for algorithms. If you find it hard to break a technical problem down into its simplest form, learning recursion may be just what you need. In this course, software engineer Mustapha Rufai provides a detailed guide to understanding recursion using JavaScript, exploring common use cases and detailing ways to approach these k

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-recursion) | 1h 7m | Intermediate | 401K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to recursion algorithms in JavaScript](#introduction-to-recursion-algorithms-in-javascript)
  - [Get the most out of this course](#get-the-most-out-of-this-course)
- [**1. How to Think about Recursion**](#1-how-to-think-about-recursion) (7 videos)
  - [Loops and iteration in JavaScript](#loops-and-iteration-in-javascript)
  - [Implement exponentials and factorials with JavaScript loops](#implement-exponentials-and-factorials-with-javascript-loops)
  - [What is recursion?](#what-is-recursion)
  - [What are base cases?](#what-are-base-cases)
  - [Implement exponentials and factorials with recursion](#implement-exponentials-and-factorials-with-recursion)
  - [Challenge: Implement the join() function recursively](#challenge-implement-the-join-function-recursively)
  - [Solution: Implement the join() function recursively](#solution-implement-the-join-function-recursively)
- [**2. How to Improve Recursive Algorithms**](#2-how-to-improve-recursive-algorithms) (5 videos)
  - [What is tail recursion?](#what-is-tail-recursion)
  - [Wrapper functions in JavaScript](#wrapper-functions-in-javascript)
  - [Accumulators for tail recursion](#accumulators-for-tail-recursion)
  - [Memoization to improve performance of recursive programs](#memoization-to-improve-performance-of-recursive-programs)
  - [JavaScript quickSort() with recursion](#javascript-quicksort-with-recursion)
- [**3. Solving Recursive Technical Interview Questions**](#3-solving-recursive-technical-interview-questions) (7 videos)
  - [How to approach recursive problems](#how-to-approach-recursive-problems)
  - [Challenge: Identify a palindrome](#challenge-identify-a-palindrome)
  - [Solution: Identify a palindrome](#solution-identify-a-palindrome)
  - [Challenge: Count the number of leaves in a binary tree](#challenge-count-the-number-of-leaves-in-a-binary-tree)
  - [Solution: Count the number of leaves in a binary tree](#solution-count-the-number-of-leaves-in-a-binary-tree)
  - [Challenge: Find middle of LinkedList](#challenge-find-middle-of-linkedlist)
  - [Solution: Find middle of LinkedList](#solution-find-middle-of-linkedlist)
- [**Conclusion**](#conclusion) (1 videos)
  - [Dig deeper into JavaScript recursion](#dig-deeper-into-javascript-recursion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to recursion algorithms in JavaScript](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=0)** - [Mustapha] Do you find it hard to break a technical problem down into its simplest form?
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=5)** Then you need to learn recursion.
>
> **[0:07](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=7)** Recursion is a fundamental concept in [[Software Development]].
>
> **[0:11](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=11)** One of the hallmarks of good software engineers is their problem-solving ability.
>
> **[0:17](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=17)** Recursion is an essential tool we use to simplify complex problems.
>
> **[0:23](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=23)** We will explore how to think recursively, then progress to improving the performance of recursive [[Algorithms]].
>
> **[0:30](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=30)** I am Mustapha Rufai, a software engineer based in Nigeria.
>
> **[0:35](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=35)** I really enjoyed creating this course for you because it blends my love of problem solving and teaching.
>
> **[0:42](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=42)** So join me in my [[LinkedIn]] Learning course on [[JavaScript]]: Recursion.
>
> **[0:47](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=47)** You will come away with working knowledge of concepts, techniques, and applications of recursion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Algorithms]] (1), [[LinkedIn]] (1), [[JavaScript]] (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [mustapha] (1)

#### [Get the most out of this course](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=0)** - [Instructor] This course is about solving problems using recursion.
>
> **[0:04](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=4)** The skills I mention next are good to have, but not required.
>
> **[0:09](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=9)** You can take this course and understand what is being discussed, without having studied these [[JavaScript]] concepts in the past.
>
> **[0:16](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=16)** To get the most out of this course, basic knowledge of JavaScript functions are helpful.
>
> **[0:23](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=23)** We will be creating functions and expressions that code themselves.
>
> **[0:28](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=28)** In addition, it will be helpful if you understand variable scoping.
>
> **[0:32](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=32)** The ability to differentiate, between local and global variables is useful when we talk about dropout functions.
>
> **[0:40](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=40)** Furthermore, understanding the knowledge of [[Data Collection]] in JavaScript, arrays and objects will also be valuable.
>
> **[0:49](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=49)** We will employ data collections where we study accumulators and lookout how to pass data from one function instance to another.
>
> **[0:58](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=58)** The exercise files in this course are on [[GitHub]].
>
> **[1:02](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=62)** You should have a GitHub account to access these files.
>
> **[1:07](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=67)** Basic understanding of how to clone a repository will also be helpful.
>
> **[1:12](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=72)** You can access this repository, via the Tami now, or GitHub desktop.
>
> **[1:18](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=78)** You can also avoid, gits totally by downloading files directly from GitHub.
>
> **[1:24](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=84)** To demonstrate accessing these files, I will navigate to the repo.
>
> **[1:30](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=90)** I will clone it into my Tami now using [[Git]] clone, name of the repo, or I will copy the URL into my GitHub desktop.
>
> **[1:41](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=101)** Then I will navigate to this folder in my file system.
>
> **[1:45](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=105)** Here, you will find your files for this course.
>
> **[1:49](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=109)** The files in other videos are grouped as branches.
>
> **[1:53](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=113)** So to get the next file, you need to switch branch by going to your GitHub desktop.
>
> **[2:00](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=120)** This will list all the branches available.
>
> **[2:03](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=123)** You may notice some branches ending in B and E.
>
> **[2:07](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=127)** B signifies files as at the beginning of a video and E signifies files as at the end of the video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (6), [[JavaScript]] (3), [[Data Collection]] (1), [[Git]] (1)
> **Tools:** github (6)
> **CLI Commands:** git (1), find (1)
> **UI Navigation:** navigate to (2)
> **Env Vars:** url (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. How to Think about Recursion

[↑ Back to Table of Contents](#table-of-contents)

#### [Loops and iteration in JavaScript](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=0)** - [Instructor] We will start by reviewing this webpage.
>
> **[0:03](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=3)** Notice the red rectangles that keep generating.
>
> **[0:06](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=6)** Also notice the number at the center of each rectangle.
>
> **[0:11](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=11)** This same number is printed to the console.
>
> **[0:15](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=15)** Repetition is a common task in programming.
>
> **[0:19](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=19)** There are two paradigms programming languages use to repeat actions, loops and recursion.
>
> **[0:28](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=28)** Understanding when to use them is one of the hallmarks of a skilled programmer.
>
> **[0:34](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=34)** Consider a loop like climbing steps.
>
> **[0:37](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=37)** This that is the base, the stop will be the top.
>
> **[0:40](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=40)** And the step is the climb.
>
> **[0:43](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=43)** From this analogy we gather that loops require a starting point and ending point and a step which connects the end points.
>
> **[0:54](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=54)** This flow will break when the step does not reach the stop.
>
> **[0:58](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=58)** The loop we start, but never end.
>
> **[1:01](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=61)** This is called an infinite loop situation, In [[JavaScript]], we have the for and while loops.
>
> **[1:10](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=70)** The for loop has the start, stop and step requirement's built into its syntax.
>
> **[1:16](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=76)** But if while loop requires that you pay special attention to these requirements.
>
> **[1:24](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=84)** Remember the webpage I introduced earlier?
>
> **[1:26](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=86)** Here it is again.
>
> **[1:28](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=88)** The red rectangles and numbers are still generated.
>
> **[1:32](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=92)** The program will never stop generating new blocks.
>
> **[1:36](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=96)** You do not want that to happen as this is an in finite loop situation.
>
> **[1:41](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=101)** If it's continuous generating your computer may hang and you will be forced to shut down.
>
> **[1:48](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=108)** Here is another webpage that terminates.
>
> **[1:52](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=112)** Notice how a fixed number or blue blocks are generated.
>
> **[1:56](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=116)** As you can see in the console, the last number is four.
>
> **[2:01](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=121)** In this video, we have demonstrated the importance of repetition in programming, focusing on loops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Definitions:** is a  (1), is called (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Implement exponentials and factorials with JavaScript loops](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=0)** - [Instructor] We have seen the definition of loops.
>
> **[0:02](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=2)** Now let's use them in code samples.
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=5)** Let's start with the power function.
>
> **[0:08](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=8)** Two raised to power three is eight.
>
> **[0:09](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=9)** Two raised to power three is eight.
>
> **[0:12](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=12)** This is two repeated three times.
>
> **[0:15](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=15)** Let us implement this inside a power.js file.
>
> **[0:19](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=19)** We will create the function power that will take two parameters: the base and its exponent.
>
> **[0:26](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=26)** Inside our function, let's create a variable result that will be initialized to one.
>
> **[0:33](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=33)** Then, we create the for loop.
>
> **[0:35](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=35)** We start from one, and less than or equal to the exponent, and increment by one.
>
> **[0:42](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=42)** and increment by one.
>
> **[0:44](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=44)** For each iteration, we multiply the result by the given base.
>
> **[0:50](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=50)** At the end of our function and outside of the loop, we return result.
>
> **[0:54](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=54)** we return result.
>
> **[0:56](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=56)** To test our code, let's link the [[JavaScript]] to the [[HTML]] file.
>
> **[1:02](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=62)** I will then open this file in the browser.
>
> **[1:05](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=65)** Now, if we pass in two comma three, we will get eight.
>
> **[1:06](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=66)** Now, if we pass in two comma three, we will get eight.
>
> **[1:10](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=70)** Likewise, if we pass in five comma six, we will get 15,625.
>
> **[1:15](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=75)** Likewise, if we pass in five comma six, we will get 15,625.
>
> **[1:20](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=80)** Let's look at another function called factorial.
>
> **[1:24](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=84)** In mathematics, the factorial of a positive integer N, denoted by N factorial, is the product of all positive integers less than or equal to N.
>
> **[1:36](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=96)** Notice that the factorial of zero is one.
>
> **[1:37](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=97)** Notice that the factorial of zero is one.
>
> **[1:42](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=102)** We will start by creating a function factorial that takes one parameter called position.
>
> **[1:49](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=109)** Inside this function, let's create a variable answer that will be initialized to one.
>
> **[1:57](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=117)** Next, we create the for loop. We start from position.
>
> **[2:03](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=123)** At one, that is, At one, that is, it is greater than zero and decrements by one.
>
> **[2:10](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=130)** For each iteration, we multiply the answer by the given number.
>
> **[2:17](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=137)** Finally, we can return answer just before the closing type.
>
> **[2:22](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=142)** Let's test our code by linking the factorial file into our HTML file.
>
> **[2:27](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=147)** into our HTML file.
>
> **[2:29](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=149)** First, we can test with the factorial of five.
>
> **[2:33](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=153)** We should return 120.
>
> **[2:34](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=154)** We should return 120.
>
> **[2:36](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=156)** We can then test with the factorial of 10.
>
> **[2:37](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=157)** We can then test with the factorial of 10.
>
> **[2:40](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=160)** We should return 3,628,800.
>
> **[2:42](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=162)** We should return 3,628,800.
>
> **[2:43](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=163)** We should return 3,628,800.
>
> **[2:46](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=166)** With the examples we have covered, we have seen our JavaScript.
>
> **[2:49](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=169)** Use these loops to implement mathematical functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2)
> **Env Vars:** html (3)
> **File Paths:** power.js (1)
> **Speakers:** - [instructor] (1)

#### [What is recursion?](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=0)** - [Tutor] There's a popular phrase in Nigeria, no credit today, come tomorrow.
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=5)** It's usually found at entrances of restaurants.
>
> **[0:09](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=9)** The store owner is telling people who don't have money to not bother entering the store.
>
> **[0:15](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=15)** When the customer comes back the next day and they still don't have money, the same instruction will be true.
>
> **[0:21](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=21)** This will continue without end.
>
> **[0:24](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=24)** This scenario introduces the idea of recursion.
>
> **[0:29](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=29)** Recursion is a function that calls itself.
>
> **[0:33](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=33)** It is another way to repeat commands in programming.
>
> **[0:37](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=37)** Technically, recursion is a problem solving technique in which problems are solved by reducing them to smaller problems of the same form.
>
> **[0:48](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=48)** The function itself will do a section of the job and delegate the [[Representational State Transfer (REST)|rest]].
>
> **[0:53](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=53)** It may delegate the rest to itself or to another function entirely.
>
> **[0:59](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=59)** There are three things all recursive functions must have.
>
> **[1:02](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=62)** There must be a base case for all accurate values.
>
> **[1:07](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=67)** In our restaurant scenario, the base case is the customer must have money to pay the bill.
>
> **[1:13](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=73)** This base case most not make recursive calls.
>
> **[1:18](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=78)** Once the customer can make purchases, the rule to come back tomorrow no longer applies to them, no more recursive calls.
>
> **[1:27](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=87)** When recursive calls are made, it should call a smaller instance and make forward progress towards the base case.
>
> **[1:35](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=95)** As long as the customer doesn't have money, they should try to gain money during the week so they can start making purchases.
>
> **[1:44](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=104)** The idea of recursion, is to help us solve problems efficiently and elegantly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Speakers:** - [tutor] (1)

#### [What are base cases?](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=0)** - [Instructor] Let's talk about when recursive functions should stop calling themselves.
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=5)** A recursive function should stop calling itself when it hits a base case.
>
> **[0:10](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=10)** Base cases ensure determination of recursive calls.
>
> **[0:15](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=15)** Once we hit the base case, new instances of the function must not be created.
>
> **[0:21](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=21)** Let's consider a relay race where the athletes are passing batons to one another.
>
> **[0:27](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=27)** One athlete will collect this baton and not pass it.
>
> **[0:31](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=31)** This athlete, called the anchor leg, will terminate the run by racing to the finish line.
>
> **[0:38](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=38)** This athlete is acting as a base case.
>
> **[0:41](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=41)** If this unique athlete does not exist, all the athletes will keep running and passing batons forever.
>
> **[0:48](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=48)** You want to avoid this happening.
>
> **[0:51](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=51)** If you do not, the athletes will run out of energy, they will be unable to move.
>
> **[0:57](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=57)** Likewise, if the program keeps calling itself infinitely, you will run out of memory and similar resources.
>
> **[1:06](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=66)** This may lead to stack overflow exceptions.
>
> **[1:09](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=69)** When stack overflow occurs, your program will not be able to create new instances of itself because it has run out of memory.
>
> **[1:19](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=79)** This may cause your program and computer to crash.
>
> **[1:24](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=84)** To see what a stack trace looks like, let's compare our iterative program with our recursive program.
>
> **[1:32](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=92)** In the first program, we have functionA that calls functionB, which, in turn, calls functionC.
>
> **[1:41](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=101)** In functionC, on line 10, we will trace our stack with console.trace.
>
> **[1:48](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=108)** Console.trace is a method of the console objects that output stack traces.
>
> **[1:54](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=114)** This method allows functionC to know who called it.
>
> **[1:59](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=119)** So when it finishes executing, it will return to the caller.
>
> **[2:04](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=124)** For the iterative function, you can see in the browser that it terminates.
>
> **[2:09](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=129)** When you run this program, you will notice the flow of the function calls.
>
> **[2:15](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=135)** Now, what will happen if the functions never stopped calling each other?
>
> **[2:20](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=140)** That is the case with our second program.
>
> **[2:23](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=143)** Here, we will have two functions, D and F, that will call each other nonstop.
>
> **[2:30](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=150)** We will trace our start in the later function.
>
> **[2:33](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=153)** Before running the function, let me warn you that it may cause your program and system to anger, so be careful.
>
> **[2:42](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=162)** I am going to call functionD now and wait patiently.
>
> **[2:51](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=171)** As you can see, we have now run out of memory.
>
> **[2:55](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=175)** This is the effect of not having a base case in recursion.
>
> **[2:59](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=179)** Your program will run out of stack to trace.
>
> **[3:02](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=182)** Our memory will be exited.
>
> **[3:05](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=185)** So how can we prevent stack overflow?
>
> **[3:09](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=189)** We can prevent stack overflow by ensuring each recursive call takes a parameter that tends to the base case.
>
> **[3:17](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=197)** In this example, notice how the baton exchange program calls itself but with less athletes every time until there are no athletes left and it will stop running.
>
> **[3:28](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=208)** Same thing happens in our musicPlayer program.
>
> **[3:32](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=212)** Here, we have tried to apply a base case that terminates to each of these functions.

> [!info]- Semantic Content
>
> **Code Identifiers:** functionc (3), functiona (1), functionb (1), functiond (1), musicplayer (1)
> **Documentation:** stack overflow (4)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Implement exponentials and factorials with recursion](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=0)** - It's time to see recursion in action.
>
> **[0:03](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=3)** Let's start with exponential.
>
> **[0:06](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=6)** We have already learned that we need three things before we can implement recursive function.
>
> **[0:12](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=12)** We need to identify the big problem, then, we identify the small problem.
>
> **[0:17](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=17)** Finally, we need to find the relationship between the two.
>
> **[0:23](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=23)** Let's say, we want to find four raised to power 50.
>
> **[0:27](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=27)** This is a big problem.
>
> **[0:29](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=29)** It looks complex, but we know from mathematics that any number raised to power zero, we'll give one.
>
> **[0:37](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=37)** This will be the case, for all numbers.
>
> **[0:40](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=40)** What can we do with this fact?
>
> **[0:42](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=42)** We can state that something is common to all numbers.
>
> **[0:45](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=45)** This will ensure that our code terminates.
>
> **[0:49](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=49)** We have found our base case.
>
> **[0:52](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=52)** Finally, we need to link the big problem to the small problem.
>
> **[0:57](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=57)** How do we do this?
>
> **[0:58](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=58)** We can find a way to repeat the solution to the small problem, incrementally.
>
> **[1:04](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=64)** Yes, we can grow from known to the unknown.
>
> **[1:10](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=70)** What we know for sure is that, four raised to power zero is one.
>
> **[1:16](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=76)** Then four raised to power one, will be four times four raised to power zero.
>
> **[1:24](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=84)** This would give us one.
>
> **[1:26](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=86)** Putting this in notch.
>
> **[1:27](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=87)** We know that four raised to power 2, is 16.
>
> **[1:32](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=92)** This implies that, that is also four times four raised to power one.
>
> **[1:38](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=98)** Do you see a pattern for me here?
>
> **[1:40](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=100)** The pattern is that four raised to power n, is sent in as four times four raised to power and minus one.
>
> **[1:51](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=111)** Let's implement this pattern.
>
> **[1:55](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=115)** First, we create a function called power.
>
> **[1:59](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=119)** This function will take two parameters, the base and it's exponent.
>
> **[2:05](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=125)** The first thing we need to do is to write the base case.
>
> **[2:10](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=130)** If the exponent is zero, we should return one.
>
> **[2:17](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=137)** This best case is important.
>
> **[2:19](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=139)** It will prevent our code from running infinitely.
>
> **[2:23](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=143)** Next, we can call a function to solve the big case.
>
> **[2:32](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=152)** To test our code, we can copy this and pass it to our function here.
>
> **[2:38](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=158)** Then, when we check the power of four raised to power five, we can get 1024.
>
> **[2:47](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=167)** Let's walk on another example.
>
> **[2:49](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=169)** This time we implement factorial recursively.
>
> **[2:54](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=174)** Let us find the factorial of 20.
>
> **[2:57](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=177)** This may look complex, we need to identify the small problem, which is the base case.
>
> **[3:06](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=186)** Mathematically, the factorial of zero is one.
>
> **[3:12](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=192)** So if the value is either of these, we should return zero.
>
> **[3:18](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=198)** Since we have found our base case, the next thing is to figure out how to grow from the small problem to the big problem.
>
> **[3:26](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=206)** The pattern here is the factorial of any number multiplied by a factorial of the previous index.
>
> **[3:34](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=214)** Thus, let's create the function factorial, that we will take an index.
>
> **[3:42](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=222)** First, we check our base case when the index is zero, we should return one.
>
> **[3:51](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=231)** If not, we should return the index multiplied by the factorial of index before it.
>
> **[4:01](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=241)** There, we have been able to implement factorial.
>
> **[4:05](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=245)** Let's test this in our console.
>
> **[4:07](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=247)** So if we put the factorial of five, we should get 120.
>
> **[4:13](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=253)** That's it.
>
> **[4:14](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=254)** We have implemented the exponential and factorial function recursively.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Definitions:** is a  (1)
> **Speakers:** - it (1)

#### [Challenge: Implement the join() function recursively](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=0)** - [Instructor] Fibonacci is a mathematical expression in which the correct number is the sum of the last two numbers.
>
> **[0:14](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=14)** The first two numbers in the sequence are seeded.
>
> **[0:18](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=18)** The first number is always zero and the second number is always one.
>
> **[0:24](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=24)** Then the third number will the sum of the last two numbers.
>
> **[0:29](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=29)** So we have one.
>
> **[0:31](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=31)** Our task is to write a recursive [[JavaScript]] function called Fibonacci that takes parameter N, which is the position of the Nth number and returns the value at that index.
>
> **[0:45](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=45)** So if given N, to be nine, it should return 21.
>
> **[0:51](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=51)** To solve this challenge, consider how to implement the base case.
>
> **[0:55](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=55)** This will guide you to having a terminating condition.
>
> **[0:59](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=59)** Ask yourself what is the smallest Fibonacci number possible, then gradually build your program from there.
>
> **[1:06](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=66)** With this challenge, you will be able to use the base case to solve the recursive problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Implement the join() function recursively](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=0)** - [Narrator] Now that you have an idea of how to approach recursive problem, let's make use of it.
>
> **[0:13](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=13)** In our JS file, we have a function Fibonacci, which takes one parameter N.
>
> **[0:20](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=20)** From the definition of Fibonacci, we know that it is seeded.
>
> **[0:24](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=24)** The Fibonacci of zero will always be zero and the Fibonacci of one will always be one.
>
> **[0:31](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=31)** So it means that when the given index is either zero or one, the same number will be returned.
>
> **[0:44](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=44)** This will be a terminating case or a base case.
>
> **[0:48](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=48)** Now that we have figured out the base case, we are left with resolving the recursive course, at this point let's recall that the Fibonacci sequence says that the current number is the sum of the last two numbers.
>
> **[1:04](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=64)** Thus the Fibonacci of N will be the Fibonacci of N minus one.
>
> **[1:12](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=72)** Plus the Fibonacci of N minus two.
>
> **[1:16](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=76)** We can now test this in our console.
>
> **[1:20](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=80)** We will paste it in our console.
>
> **[1:22](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=82)** We will call the Fibonacci of five, which will return five.
>
> **[1:26](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=86)** We will call the Fibonacci of 10. Which will return 55.
>
> **[1:31](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=91)** And finally, we will call the Fibonacci of 20, which would give us 6765.
>
> **[1:39](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=99)** Congratulations, you have now solved a recursive problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. How to Improve Recursive Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [What is tail recursion?](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=0)** - [Instructor] Now that we understand recursion, let's see another approach to implementing it.
>
> **[0:06](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=6)** Imagine a girl named Bibi.
>
> **[0:08](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=8)** Her parents are traveling for the weekend.
>
> **[0:10](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=10)** She is tasked with taking care of a three siblings, Ada, Dayo and Sabinus.
>
> **[0:18](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=18)** She's in charge of assuring everyone is well fed during this period and keeping track of what they ate.
>
> **[0:25](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=25)** On the first night, she ordered pizza.
>
> **[0:28](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=28)** Now this pizza can be shared in two ways, either she picks her slice, then passes the remaining to her siblings, or she lets her siblings have their slices before picking hers.
>
> **[0:42](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=42)** If she passes the pizza and only picks after everyone has had theirs, she runs the risk of getting hungrier.
>
> **[0:50](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=50)** This is because of the time it takes for the pizza to get back to her.
>
> **[0:55](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=55)** Here, you are making recursive call before processing.
>
> **[0:59](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=59)** As she's passing the pizza before eating, this is called head recursion.
>
> **[1:06](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=66)** Now, if she picks her slice before passing the remaining portion, it would not matter how long the pizza takes to get through circle, she would have been fed.
>
> **[1:16](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=76)** In this case, she is processing before making the recursive call, this is called tail recursion, which means she is processing before making recursive calls.
>
> **[1:29](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=89)** In both cases, she's making recursive calls, but which approach is more efficient?
>
> **[1:36](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=96)** the tail recursion is better because she does not have to depend on round timing before she eats.
>
> **[1:43](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=103)** Tail recursion, is a technique to make recursive program more efficient.
>
> **[1:48](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=108)** When you apply this trick, your program is unlikely to run into a Stack Overflow error.
>
> **[1:54](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=114)** Tail recursion employs an accumulator that keeps track of how long we have come in our recursive stack.
>
> **[2:03](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=123)** To continue our analogy, Bibi also needs to know how many slices her siblings have taken.
>
> **[2:10](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=130)** To make this process much more orderly, she says each sibling can only communicate with the person next to them.
>
> **[2:19](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=139)** She can apply head recursion to get this information by asking Ada while passing the pizza at the same time.
>
> **[2:26](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=146)** How many slices are you taking?
>
> **[2:29](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=149)** Ada will pass the pizza along and ask Dayo the same question, who will also ask Sabinus in return.
>
> **[2:37](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=157)** Now, Sabinus is the last person, so he takes his share, then returns the remaining slices to Dayo with the information I have taken two slices.
>
> **[2:49](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=169)** Dayo will take her share, and return the [[Representational State Transfer (REST)|rest]] to Ada saying I have taken three slices.
>
> **[2:57](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=177)** Notice the accumulator, being used to track the total removed.
>
> **[3:02](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=182)** Ada will take two slices, then pass the remaining back to Bibi saying I have taken two slices.
>
> **[3:10](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=190)** Bibi, will eat the remaining four slices before recording that 11 slices have been eaten in total.
>
> **[3:18](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=198)** Here, only Bibi knows the total number of slices eaten.
>
> **[3:24](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=204)** In this approach, the recursive calls happen before processing.
>
> **[3:29](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=209)** Here, the call to other siblings, happens before the pizza slices are taken out.
>
> **[3:35](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=215)** We won't know how many slices have been eaten until Sabinus, last instance of the recursive call has reported how many he took.
>
> **[3:45](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=225)** If she approaches this problem, with tail recursion, Bibi will take her own share, then pass the rest along saying I took four slices.
>
> **[3:56](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=236)** Ada will take her share and pass the rest to Dayo saying I took two slices.
>
> **[4:03](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=243)** We have eaten six slices so far.
>
> **[4:06](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=246)** Dayo, will take three slices, then pass the rest to Sabinus.
>
> **[4:12](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=252)** Sabinus will take his own two slices, then report back to Dayo, that 11 slices have been eaten.
>
> **[4:20](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=260)** Dayo, will pass this information back to Ada.
>
> **[4:23](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=263)** Ada will relate same to Bibi.
>
> **[4:26](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=266)** In this scenario, everyone knows how many slices were eaten.
>
> **[4:31](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=271)** Not only that, the recursive call happens after the individual has taken their share of the pizza.
>
> **[4:38](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=278)** This is the basic idea behind tail recursion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (4)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** make (2)
> **Documentation:** stack overflow (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Wrapper functions in JavaScript](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=0)** - [Instructor] There are buttons you can use to improve the performance of the recursive functions.
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=5)** One of them is the wrapper function pattern.
>
> **[0:08](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=8)** The job of a wrapper function is to help the main function.
>
> **[0:13](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=13)** The main function wants to perform a task.
>
> **[0:15](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=15)** So it's delegate it.
>
> **[0:18](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=18)** To illustrate this, let's consider binary operations in mathematics.
>
> **[0:23](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=23)** Function addition, we'll take two parameters, a and b, and it will return their sum.
>
> **[0:31](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=31)** Likewise, function subtraction will behave similarly.
>
> **[0:35](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=35)** Now, let's test if these functions are commutative.
>
> **[0:40](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=40)** An operation is said to be commutative if the order of the operands do not matter.
>
> **[0:47](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=47)** For function addition, A plus B, will always be equal to B plus A.
>
> **[0:54](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=54)** So we say it is commutative.
>
> **[0:57](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=57)** Another function that is commutative is multiplication.
>
> **[1:02](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=62)** For function subtraction, A minus B is never equal to B minus A.
>
> **[1:09](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=69)** Thus, we conclude that subtraction is not commutative.
>
> **[1:15](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=75)** Another function that is not commutative is division.
>
> **[1:20](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=80)** We can see the implementation of these by creating a function is commutative on line 17, which takes a test function and two operands.
>
> **[1:32](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=92)** We will call a test function and change the order in which the operands are passed to it.
>
> **[1:39](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=99)** We will save the operations in first result and second results.
>
> **[1:44](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=104)** Finally, we will test the result for equality and return.
>
> **[1:50](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=110)** I want to draw your attention to how is commutative is using other functions to complete its own task.
>
> **[1:58](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=118)** Those other functions, in this case, addition and multiplication, are executed in its environment and have access to its lexical scope.
>
> **[2:11](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=131)** So, how can you apply this pattern to recursion?
>
> **[2:15](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=135)** Let's implement a count function.
>
> **[2:18](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=138)** This function will employ another function to complete its own task.
>
> **[2:23](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=143)** Let's call this wrap function, repeat.
>
> **[2:27](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=147)** This function will take a single parameter.
>
> **[2:31](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=151)** It will call itself recursively until it gets to the end.
>
> **[2:36](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=156)** Here, the counter is the wrapping function and repeat is the wrapped function.
>
> **[2:43](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=163)** This pattern of wrapping a function is used when, one, you need to pass different values to the recursive calls and two, the recursive calls need access to the starting data in the wrapping function scope.
>
> **[3:01](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=181)** As seen here, repeat is taking a new parameter with each call and it is always having access to the scope of the counter.
>
> **[3:10](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=190)** Let's build on our example.
>
> **[3:13](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=193)** Instead of counting, we will sum the numbers between our starts and end.
>
> **[3:19](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=199)** If we sum the numbers between two and five, including its edges, we should get 14.
>
> **[3:27](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=207)** We will start with two and the current sum will be zero.
>
> **[3:31](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=211)** Then, we will add one to our starts to become three.
>
> **[3:36](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=216)** So our current sum goes to three, start, goes to four and the current sum goes to five.
>
> **[3:42](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=222)** Again, starts goes to five and the current sum goes to nine.
>
> **[3:47](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=227)** Finally, starts become six, which will stop our recursive call and the current sum will go to 14.
>
> **[3:55](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=235)** Our wrapping function will be sum, which takes the parameter start and end.
>
> **[4:04](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=244)** We will have a wrapped function called add next, that will keep track of the starts value and our current sum.
>
> **[4:15](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=255)** First, we create our base case.
>
> **[4:17](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=257)** If the start value is greater that the end, we should return the current sum.
>
> **[4:24](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=264)** Else, we should make a recursive call until start gets to end.
>
> **[4:32](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=272)** Notice how function add next is assessing the scope of function sum to get the variable and.
>
> **[4:42](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=282)** We can test this program by linking to our console and calling the variable sum with values two and five.
>
> **[4:55](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=295)** To be clear, wrapper functions are useful when you need to pass different values to each recursive call.
>
> **[5:03](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=303)** It can also be used to change input to the recursive calls.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Accumulators for tail recursion](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=0)** - [Narrator] The other pattern of tail recursion is accumulators.
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=5)** The idea behind accumulators is the result is being collected as the recursive calls are made.
>
> **[0:12](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=12)** Remembers Bibi and her siblings.
>
> **[0:15](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=15)** They used an accumulator technique to track the number of pizza slices that are being eaten immediately after someone takes their share.
>
> **[0:24](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=24)** Let's use this pattern to rewrite our counter function.
>
> **[0:29](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=29)** We are going to remove the wrapped function, repeatedly, and put it directly inside our program.
>
> **[0:35](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=35)** Focus your attention on the recursive call on line 20.
>
> **[0:40](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=40)** You will notice that this parameter changes.
>
> **[0:43](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=43)** This value is then used to process the call instance.
>
> **[0:49](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=49)** We can also illustrate this idea by using a built-in [[JavaScript]] method, array.join.
>
> **[0:55](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=55)** Array.join will concatenate all the elements in an array using a separator.
>
> **[1:02](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=62)** Here, you are seeing an array containing the letters of the country, Germany.
>
> **[1:08](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=68)** We can join them by space, by comma, by plus sign, and by dash.
>
> **[1:17](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=77)** Let's think about how this function will work recursively.
>
> **[1:21](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=81)** We take a character and add the separator.
>
> **[1:24](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=84)** When we take the next character, we need to add to our previous accumulator before adding the separator.
>
> **[1:32](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=92)** We repeat this until there are no more characters.
>
> **[1:36](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=96)** That accumulator keep increasing with each recursive call.
>
> **[1:42](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=102)** We can implement this by creating a function, join.
>
> **[1:45](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=105)** It will take an array called content and a string separator.
>
> **[1:50](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=110)** Now let's use a wrapped function, padContent, as seen on line eight, to recursively build our new string.
>
> **[1:59](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=119)** It will do this by keeping track of our current index in the array and the string we have built so far.
>
> **[2:07](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=127)** Now, once our current index gets to the last index, we should stop building the string and return whatever we have.
>
> **[2:15](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=135)** This is our base case. Else, we should go to the next index and then concentrate the separator with our current string build.
>
> **[2:25](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=145)** We will kick off this recursive chain by calling our wrapped function with index zero and an empty string, as seen on line 18.
>
> **[2:35](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=155)** We can test this function by returning to our web browser.
>
> **[2:39](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=159)** In the console, you will notice that we are successfully adding a separator to the array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** padcontent (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Memoization to improve performance of recursive programs](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=0)** - [Instructor] There are several ways to make ricochet faster.
>
> **[0:03](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=3)** Let's discuss one of them.
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=5)** Memoization is a technique of improving the performance of programs.
>
> **[0:11](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=11)** Memoization starts by checking if a program has been executed previously and utilizes that results.
>
> **[0:19](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=19)** Otherwise, it will execute this new instance of the program and study results.
>
> **[0:25](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=25)** Let's say, you have a function X with parameter Y and results Z.
>
> **[0:30](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=30)** To get Z, we need to perform some computation.
>
> **[0:34](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=34)** The next time you run the same function under the same circumstances, memoization will ensure the function does not perform the competition, but make it [[Fetch]] to previously stored data.
>
> **[0:47](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=47)** Consider the Fibonacci Sequence we studied earlier.
>
> **[0:50](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=50)** If we process the Fibonacci of five, this kind of three will be generated.
>
> **[0:56](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=56)** Notice out some sections are repeating.
>
> **[0:59](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=59)** The Fibonacci of three and it's so sections repeat two times.
>
> **[1:04](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=64)** Using our former approach, we will have to compute this repeating sequences every time we eat it.
>
> **[1:11](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=71)** But when we apply memoization to recursion, at each instance, we will keep the results.
>
> **[1:18](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=78)** To compute Fibonacci of five, we will call the Fibonacci of three plus Fibonacci of four.
>
> **[1:25](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=85)** Now, Fibonacci of three, we'll compute and return a result.
>
> **[1:31](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=91)** This is our first call to Fibonacci of three.
>
> **[1:34](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=94)** For Fibonacci of four to compute, It needs Fibonacci of three.
>
> **[1:39](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=99)** This is our second call to Fibonacci of three.
>
> **[1:42](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=102)** Instead of executing this second core, we will use the results generated in the first call.
>
> **[1:50](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=110)** Let's illustrate this in our VS Code.
>
> **[1:53](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=113)** We will bring back a previous Fibonacci program.
>
> **[1:57](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=117)** To turn it into a memois version, we needed a way to start it and retrieve at order of one.
>
> **[2:04](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=124)** [[Java]] script objet fulfills this requirement.
>
> **[2:08](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=128)** So on line two, let's create a cache variable that will be an empty object.
>
> **[2:15](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=135)** Now, before we perform our computation, we must first check if it doesn't perform previously and the answer is third in the cache.
>
> **[2:26](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=146)** These happens between line four to line six.
>
> **[2:30](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=150)** If we find the results, we return that answer and exit the function immediately as you can see on line five.
>
> **[2:39](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=159)** Otherwise, we go on to compute our answer.
>
> **[2:43](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=163)** This answer will then be saved into our cache against next time as seen on line 16.
>
> **[2:53](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=173)** You may wonder how our memois version performs in relation to the previous function.
>
> **[2:59](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=179)** We can check how long it takes these functions to return an answer using the [[JavaScript]] date objects.
>
> **[3:06](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=186)** We will initialize a date objet before calling a Fibonacci functions, then we will get a change in milliseconds.
>
> **[3:14](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=194)** We will console our answer to the browser.
>
> **[3:17](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=197)** From my discussion, we have now seen how memoization can be applied to improve the performers of a recursive program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[Java]] (1), [[JavaScript]] (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [JavaScript quickSort() with recursion](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=0)** - [Instructor] There are several applications of recursion.
>
> **[0:03](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=3)** It is commonly used in sorting or arranging items in a given order.
>
> **[0:09](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=9)** Quick Sort is an example of these sorting [[Algorithms]].
>
> **[0:14](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=14)** And it is also one of the fastest sorting algorithms.
>
> **[0:20](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=20)** In a worst case scenario, it's performance is order of n squared, which is not much different from a nested loop.
>
> **[0:28](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=28)** But on average, it will perform in order of nlogn.
>
> **[0:34](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=34)** This is slightly faster than Merge Sort, and it's a great improvement on Selection, Insertion, and Bubble Sort.
>
> **[0:44](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=44)** Quick Sort algorithm employs three tools: swapping, partitioning, and sorting.
>
> **[0:52](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=52)** Swapping here means changing the content of two indexes.
>
> **[0:56](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=56)** For example, we want the letter a and letter b to swap position.
>
> **[1:02](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=62)** So the letter a moves to the empty area, b moves to where a has just left, then a can move to the now empty position.
>
> **[1:15](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=75)** Here we see how the algorithm is implemented using function Swap Elements.
>
> **[1:23](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=83)** This function would take three parameters as seen on line two, the given array, and the two indexes to be swapped.
>
> **[1:34](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=94)** We moved the content of one of the index to temp, as seen on line three.
>
> **[1:40](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=100)** These recreates an empty space for the second index to enter.
>
> **[1:44](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=104)** Temp is then brought back.
>
> **[1:47](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=107)** We test this in our browser using the array, 6, 2, 30, 45, 1, 5, 8, 98, 32, 21.
>
> **[1:59](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=119)** Here we are trying to swap index zero and index eight.
>
> **[2:05](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=125)** As you can see in our console, you will notice that on index zero we have value six, and on index eight we have value 32.
>
> **[2:16](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=136)** After applying the swapping algorithm, at index zero we now have 32, and on index eight we now have six.
>
> **[2:27](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=147)** Next, we talk about partitioning.
>
> **[2:30](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=150)** This means dividing our array into two equal halves, using a selected pivot.
>
> **[2:38](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=158)** To understand partitioning, first we take any element in the array as the pivot, usually the first or last are selected.
>
> **[2:49](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=169)** In this example, we will use the last index as our pivot.
>
> **[2:54](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=174)** It is this partitioning in that introduces the nested loop measured earlier.
>
> **[3:00](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=180)** Our goal with partitioning is to ensure all elements less than the pivot are on the left and those greater than the pivot are on the right.
>
> **[3:12](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=192)** The left pointer will move left seeking numbers less than pivot, then the right pointer will move right seeking numbers greater than pivot.
>
> **[3:23](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=203)** Once both pointers find what they seek, they will swap content.
>
> **[3:28](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=208)** Once swapping is achieved, the right pointer will continue moving an index forward until it finds another number greater than pivot.
>
> **[3:40](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=220)** Then the left point will move backward seeking a number less than pivot, and another swapping will occur.
>
> **[3:50](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=230)** Once both pointers points to the same index or index of left pointer is great that an index of right pointer, they stopped seeking, and the pivot is swapped with the current content of the left pointer.
>
> **[4:07](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=247)** To continue with our program, let us create a function partition that will take three arguments, the array on our left and right pointers.
>
> **[4:19](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=259)** We can set our pivot to the content of the last index as seen on line 11.
>
> **[4:27](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=267)** Now, while the left pointer is less than or equal to the right pointer, we want the left point to move positively seeking numbers greater than pivot as seen on line 14.
>
> **[4:42](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=282)** Once that is found, we want our right pointer to move and seek content less than pivot.
>
> **[4:50](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=290)** Once these two are found and our left pointer is still less than the right pointer as seen on line 19, then we should swap their position.
>
> **[5:02](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=302)** Once the position is swapped as seen on line 20, then pointers can move to the next position to start seeking again.
>
> **[5:13](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=313)** Let's test this partition function with an array that starts at left and right being zero and six respectively.
>
> **[5:23](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=323)** You will notice the solution on our tests in the console.
>
> **[5:28](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=328)** The final part of this algorithm is the Quick Sort.
>
> **[5:32](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=332)** Once the pivot has been placed in position Quick Sort is used to sort elements before the element in order then sort element after the element.
>
> **[5:44](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=344)** This is where recursion comes in.
>
> **[5:46](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=346)** Quick Sort is used to search elements before the pivot in order then sort elements after the pivots, this is where recursion comes in.
>
> **[5:59](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=359)** Let's study how the Quick Sort algorithm will implement this section.
>
> **[6:05](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=365)** This function will sort an array from start to end.
>
> **[6:10](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=370)** We employ an accumulator yet that is carried through each instance of decor, as you can see on line 49.
>
> **[6:19](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=379)** Our base case will check if the accumulator array.length is greater than one as seen on line 43.
>
> **[6:28](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=388)** Then we get the pivot through our petitioning function as seen on line 44.
>
> **[6:34](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=394)** We will now call our Quick Sort function, passing the pivot into it.
>
> **[6:40](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=400)** This will reduce the set of functions that we need to address.
>
> **[6:45](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=405)** We are going to test our implementation using these test array.
>
> **[6:50](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=410)** As you can see in the console, we are able to successfully sort our array in ascending order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Solving Recursive Technical Interview Questions

[↑ Back to Table of Contents](#table-of-contents)

#### [How to approach recursive problems](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=0)** - [Narrator] For many people, taking a recursion does not come naturally.
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=5)** It takes practice and lots of problem solving to internalize the approach.
>
> **[0:10](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=10)** In this section, I describe my own approach to solving recursive problems.
>
> **[0:16](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=16)** The [[JavaScript]] interpreter will run through a function from top to bottom, two times.
>
> **[0:23](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=23)** On the first run, called hoisting, it will allocate memory to the variables before executing the code.
>
> **[0:30](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=30)** In this example, step A is expected to run, then step B will follow.
>
> **[0:38](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=38)** Top to bottom execution does not work for recursion.
>
> **[0:43](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=43)** In recursion, step B may still be running when step D comes into play.
>
> **[0:50](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=50)** You will get confused trying to process this function.
>
> **[0:54](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=54)** The first step to think a recursion, is to focus on what is supposed to happen.
>
> **[0:59](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=59)** Forget temporarily about what the function is doing.
>
> **[1:04](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=64)** Earlier in the course, Bibi asked her siblings, "How many pizza slices have been eaten?"
>
> **[1:10](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=70)** And the answer was received.
>
> **[1:12](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=72)** Forget about how the function arrives at the solution and trust that you will get a correct result.
>
> **[1:19](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=79)** To further explain, lets create a function sumRange that takes a parameter index, and returns the sum of all numbers up to, and including index.
>
> **[1:31](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=91)** Here, we have applied the first step.
>
> **[1:35](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=95)** The second step is to find a subproblem similar to the original problem but with less data.
>
> **[1:43](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=103)** So this means a subproblem will involve the functional sumRange taking index minus one.
>
> **[1:50](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=110)** We have now applied step two.
>
> **[1:54](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=114)** Finally, find the smallest possible solution to this problem.
>
> **[1:58](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=118)** The smallest possible solution, must return its own answer without having to call another instance of the same function.
>
> **[2:07](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=127)** In this scenario, our smallest impute will be zero.
>
> **[2:11](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=131)** Because sumRange of zero will always be zero.
>
> **[2:15](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=135)** This will be our base case.
>
> **[2:17](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=137)** It will ensure the function terminates.
>
> **[2:20](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=140)** By the end of this third step, we would have arrived at a complete recursive solution.
>
> **[2:27](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=147)** Don't forget to focus on what should happen, then find a subproblem with less parameter.
>
> **[2:33](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=153)** Finally, find the simplest possible solution to the challenge.
>
> **[2:37](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=157)** Once you master this steps, you can mix them as you please.
>
> **[2:41](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=161)** This is my intuitive approach to solving recursive problems.
>
> **[2:47](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=167)** Let's see how we can apply it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **CLI Commands:** find (4)
> **Code Identifiers:** sumrange (3)
> **Cross-References:** earlier in (1)
> **Analogies:** similar to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Identify a palindrome](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=0)** (upbeat eccentric music)
>
> **[0:07](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=7)** - [Narrator] There are some words or phrases that are read the same way forward or backward.
>
> **[0:13](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=13)** These are called palindromes.
>
> **[0:15](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=15)** For example, racecar, rotor, and a man a plan a canal Panama.
>
> **[0:24](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=24)** Words like extract, print, and motor are not palindromes.
>
> **[0:30](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=30)** Is it now possible to create a function that checks if a given string is a palindrome?
>
> **[0:38](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=38)** This is a common interview question.
>
> **[0:40](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=40)** I am going to implement this using iteration.
>
> **[0:44](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=44)** And your challenge will be to think throughout it can be done recursively.
>
> **[0:49](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=49)** In thinking through this challenge, you must identify the best case or the simplest version of these problem.
>
> **[0:58](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=58)** For the iterative implementation, let us create a function is palindrome.
>
> **[1:04](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=64)** These function, we type phrase that we want to check.
>
> **[1:09](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=69)** A brute force approach will be to look through the whole length of the phrase, but on inspecting the palindrome, you will notice that it is symmetrical at the center.
>
> **[1:20](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=80)** Thus, a shutter approach will be to check the element at the first index, with the element of the last index.
>
> **[1:29](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=89)** They gradually converge at the center of the phrase.
>
> **[1:33](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=93)** We are going to check and get the size of the phrase.
>
> **[1:39](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=99)** [[JavaScript]] allows us to treat strings like RAs, and we will utilize this feature.
>
> **[1:47](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=107)** We will look through our phrase, we will look through our phrase and at each iteration, we will check if any of the indexes do not match.
>
> **[2:00](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=120)** At which point we will return false.
>
> **[2:04](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=124)** But if it's successfully used through the RA, till it gets to the middle, then we return true.
>
> **[2:13](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=133)** Let's test our solution.
>
> **[2:15](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=135)** We can do that by passing motor, rotor, and a man a plan a canal Panama, without the spaces into it.
>
> **[2:27](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=147)** As you can see, motor has been flagged as not being a palindrome but the other phrases are.
>
> **[2:35](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=155)** Now your task is to implement this function using recursion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat eccentric music) (1)

#### [Solution: Identify a palindrome](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=0)** (upbeat jingle)
>
> **[0:07](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=7)** - [Instructor] In solving a recursive problem, it is good to simplify our thinking and find the simplest solution first.
>
> **[0:16](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=16)** What is the simplest palindrome that can exist?
>
> **[0:20](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=20)** It is a single character, or no character at all.
>
> **[0:24](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=24)** The letter Z is a palindrome because if you read it forward or backward, you get the same thing.
>
> **[0:33](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=33)** An empty string is also a palindrome because any direction you read it, you will read the same thing.
>
> **[0:41](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=41)** Our best case will then be a string with zero or one character.
>
> **[0:48](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=48)** Now, if you have more than one character, that's where we will employ recursion.
>
> **[0:54](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=54)** Borrowing our solution to the iterative version, we know that the first and last indexes will be the same.
>
> **[1:03](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=63)** If it's not the same, we can accurately say that the phrase is not a palindrome and return false.
>
> **[1:12](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=72)** Let's switch to our vs code.
>
> **[1:14](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=74)** Our function would take a phrase.
>
> **[1:19](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=79)** We will keep the size of the phrase.
>
> **[1:24](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=84)** Now if the size is either zero or one, we return, as we have reached the best case.
>
> **[1:33](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=93)** Otherwise, the second and its opposing index, are stringed using soft string.
>
> **[1:41](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=101)** This is passed as value into our recursive call.
>
> **[1:46](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=106)** Here, on line 12, we are using the accumulative pattern.
>
> **[1:51](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=111)** We continue to do this until we reach the best case as seen on line six.
>
> **[1:59](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=119)** If we test our recursive implementation, with the data used previously in our slide, you will realize that the results are same.
>
> **[2:10](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=130)** Here, we are employing the recursion as our expression would have been evaluated before the recursion takes place.
>
> **[2:21](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=141)** You may be curious to know what the time complexity of this algorithm is.
>
> **[2:27](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=147)** First, let's assume a worst case scenario where we have our phrase is not empty.
>
> **[2:33](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=153)** Because of checking, if this phrase is size zero or one, it is constant, so K of one.
>
> **[2:42](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=162)** Then, we need to check the length before removing the two extreme indexes, say K of two.
>
> **[2:52](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=172)** This becomes K one plus N divided by two times K two, which is the same thing as order of (unknown) of N.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Tools:** vs code (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Count the number of leaves in a binary tree](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=0)** (intro music playing)
>
> **[0:07](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=7)** - A tree is a node based data structure.
>
> **[0:11](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=11)** Trees are used to show relationships.
>
> **[0:14](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=14)** Recursion is a very useful tool in finding these relationships.
>
> **[0:19](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=19)** You may consider the relationship between parents and their children as a Family Tree.
>
> **[0:25](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=25)** Each node can have multiple children.
>
> **[0:30](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=30)** Binary trees are special trees that only have a maximum of two children.
>
> **[0:36](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=36)** When a child of a node does not have children, we say it is a leaf.
>
> **[0:42](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=42)** In what ways can we chase the lineage?
>
> **[0:46](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=46)** Generally, there are two approaches to traverse trees.
>
> **[0:50](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=50)** You can check through the depth called the Depth First Search or DFS.
>
> **[0:56](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=56)** Or you can check through the breadth called the Breadth First Search or BFS.
>
> **[1:03](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=63)** The DFS algorithm includes Preorder, Inorder and Postorder.
>
> **[1:11](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=71)** The Preorder is where we traverse our tree from the root to the left out, then come back to the right shout. Root, left, right.
>
> **[1:22](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=82)** The Inorder is where we traverse our tree from the left to the root, then to the right shout. Left, root, right.
>
> **[1:34](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=94)** This is programmatically the easiest approach to flowing through a binary tree.
>
> **[1:41](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=101)** The Postorder is where we traverse our tree from the left to the right, then say two on the root. Left, right, root.
>
> **[1:52](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=112)** If you need to implement the stack data structure, this is the best approach to use.
>
> **[1:58](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=118)** It is very effective when evaluating mathematical equations.
>
> **[2:04](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=124)** Thus given the root of a binary tree, Write the function that returns a Preorder arrangement of leaves.
>
> **[2:14](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=134)** That means you should return an array of the leafs of the given binary tree. Your function should take three parameters, the root, a left subject and a right subject.
>
> **[2:30](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=150)** The end is you will employ wrapped functions and accumulators to keep track of the leaf.
>
> **[2:38](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=158)** Think about what your base case will be.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3)
> **Env Vars:** dfs (2), bfs (1)
> **Definitions:** is a  (3)
> **Speakers:** - a (1)
> **Non-Speech:** (intro music playing) (1)

#### [Solution: Count the number of leaves in a binary tree](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=0)** - Since we are solving this with preOrder then we have to transverse Root, Left, Right.
>
> **[0:16](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=16)** So we have to check the route first.
>
> **[0:18](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=18)** If it does not exist then we do not go further.
>
> **[0:21](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=21)** There is nothing to check, but if it exists then we put the value of that route into our tracking array.
>
> **[0:29](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=29)** After which, we can visit the left node, Then we visit the right node.
>
> **[0:36](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=36)** So, given this tree, we will go through the route and record A. Then we visit the left sub-tree.
>
> **[0:43](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=43)** Here, we will record B. Now B has left sub-tree too so, we will record D. D also has a left sub-tree, so we will record H. This will take us back to the right sub-tree where we will record E, then J.
>
> **[1:05](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=65)** Using this approach we will get all the nodes in the binary tree. But we are only interested in the leafs, so we have to check and confirm that the node does not have children before we push it to our tracking array.
>
> **[1:21](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=81)** The leafs in this case are the the one that are H, J, L, N, and M.
>
> **[1:30](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=90)** We will start with getting all the nodes.
>
> **[1:33](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=93)** To implement our code let's create a function count_nodes solution.
>
> **[1:40](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=100)** This will take root of type binary tree node that you want to transverse. Let's create an empty array of nodes that will track all the nodes we visit. Now we will create our RA function.
>
> **[1:55](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=115)** Let's call it "flow". This RA function will check if the root is empty.
>
> **[2:07](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=127)** I just go back to the previous node but if it is not empty, Then we push the data in the current node to nodes array.
>
> **[2:22](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=142)** Then, following the pre-order constraint, we will visit the left sub-tree and the right sub-tree.
>
> **[2:36](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=156)** We will then call our function "flow".
>
> **[2:40](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=160)** Once it finishes running we will return nodes that we have been tracking.
>
> **[2:48](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=168)** Now, when you test your code you will get the content of several binary trees.
>
> **[2:54](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=174)** You should always check each node is in the preOrder fashion. But the challenge asked us to find the leafs. Remember that the leaf of a node is without children.
>
> **[3:09](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=189)** So, instead of pushing all visited nodes to the array as seen on line sixteen, we are going to confirm that the current node does not have a left or right child.
>
> **[3:21](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=201)** First, let's duplicate our function and rename it to "count leafs solution."
>
> **[3:30](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=210)** We are no longer tracking nodes so I am renaming this to "leafs".
>
> **[3:36](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=216)** Now, at the point of pushing we will confirm that root dot left is null and root dot right is null before pushing the leaf.
>
> **[3:50](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=230)** (keyboard clicking) Once we have made the confirmation, we can now continue transversing by returning to the left node or the right node.
>
> **[4:04](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=244)** At the end, we will return results.
>
> **[4:07](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=247)** This is the solution to our count leafs challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** node (11), find (1)
> **Code Identifiers:** preorder (2), count_nodes (1)
> **Non-Speech:** (upbeat music) (1), (keyboard clicking) (1)
> **Cross-References:** go back to (1)
> **Best Practices:** you should always (1)
> **Speakers:** - since (1)

#### [Challenge: Find middle of LinkedList](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=0)** - [Instructor] In the earlier challenges we have worked with arrays and binary trees.
>
> **[0:12](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=12)** In this challenge, we will introduce another data structure, the LinkedList.
>
> **[0:18](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=18)** A LinkedList is a linear data structure similar to an array, however, unlike arrays, elements are now stored in a particular memory location or index.
>
> **[0:30](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=30)** Rather, each element is a separate object that contains a pointer or a link to the next object in that list.
>
> **[0:40](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=40)** We start from somewhere, usually called the head, and we move through the list using each element or object in the list.
>
> **[0:51](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=51)** Also, the last node in the LinkedList is usually pointing to null.
>
> **[0:57](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=57)** Some of the differences between an array and a LinkedList include insertion and deleting at the top of the list.
>
> **[1:06](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=66)** It takes just one step in a LinkedList, but it is much more expensive in an array.
>
> **[1:13](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=73)** In addition, an array is usually fixed size, but a LinkedList can grow linearly to accommodate the data.
>
> **[1:23](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=83)** In this challenge, you'll be given a single LinkedList and your task is to find the items in the middle.
>
> **[1:32](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=92)** The test list will be 16, 7, 3, 4, and 9, and your function will return 3.
>
> **[1:42](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=102)** In the second list you'll be given 89, 66, 24, 11, 53, 77, and your function will return 11.
>
> **[1:57](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=117)** This challenge can be completed in 15 minutes.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), find (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Find middle of LinkedList](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=0)** - To solve this challenge, we are going to create a structure for our linked list.
>
> **[0:10](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=10)** We will create class linked list.
>
> **[0:16](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=16)** This class, we have a constructor, this constructor we have two class variables, the data for our initial item in the list, and then a pointer to the next item in the list.
>
> **[0:34](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=34)** Currently it is NULL, so we just have one item in the list.
>
> **[0:39](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=39)** Next, we are going to create the next object of this list.
>
> **[0:44](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=44)** So we have a function with list item.
>
> **[0:48](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=48)** This function, we take the data and then we are going to create an object of the list.
>
> **[0:57](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=57)** The list item function, we take the data inside it, it'll create a new instance of the linked list.
>
> **[1:06](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=66)** Then it will insert the data into the new instance of the linked list and point to NULL.
>
> **[1:14](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=74)** Now we can approach our question.
>
> **[1:17](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=77)** Our task is to find the middle item of a linked list.
>
> **[1:22](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=82)** So we need to, first of all, know our tracking position, and we need to assume that we don't know our midpoint yet.
>
> **[1:35](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=95)** So we are now going to create a function that will transverse through our linked list and try to find this midpoint.
>
> **[1:45](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=105)** Find midpoint, we take a parameter head, which is the starting point of our linked list.
>
> **[1:51](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=111)** It will check if this head is NULL, which signifies that there is no item in the linked list.
>
> **[2:00](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=120)** At which each point, we are going to just assume that our linked list is empty and return immediately.
>
> **[2:10](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=130)** But if our linked list is not empty, we can now start transversing through linked list.
>
> **[2:17](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=137)** So tracking position, we'll move one step ahead.
>
> **[2:22](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=142)** Then we will call our findMidPoint recursively to take the next item and check if it is NULL.
>
> **[2:32](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=152)** This will continue until we get to the end of our linked list.
>
> **[2:38](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=158)** If we are able to get to the end, then we will set the end to be our head.
>
> **[2:46](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=166)** To test our code, we need to call our midpoint and then pass in some values into it.
>
> **[2:57](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=177)** We have our code set up now to test our piece of code, let's pass in our test data.
>
> **[3:05](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=185)** We are going to create an instance of our function list item.
>
> **[3:13](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=193)** Then we are going to set other items in this list.
>
> **[3:18](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=198)** We these, we have been able to put items 16, seven, three, four, and nine into our linked list.
>
> **[3:29](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=209)** Next, we can try to transverse through this linked list by calling midPointTrack and passing our head into it.
>
> **[3:39](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=219)** Then we can save these inside a variable and console our answer to the output.
>
> **[3:53](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=233)** At this point, you will be able to see in our console that our midpoint is three and the next item passing through each other.

> [!info]- Semantic Content
>
> **Env Vars:** null (4)
> **CLI Commands:** find (3)
> **Code Identifiers:** findmidpoint (1), midpointtrack (1)
> **Prerequisites:** set up (1)
> **Speakers:** - to (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Dig deeper into JavaScript recursion](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=0)** - [Mustapha] Our study of recursion has provided us with several tools.
>
> **[0:05](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=5)** We have employed them in solving both algorithmic and day-to-day challenges.
>
> **[0:11](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=11)** You may notice that our solutions became faster as we optimized and kept track of our computations.
>
> **[0:20](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=20)** To expand on this program's solving approach, I recommend you to take courses on dynamic programming, here on [[LinkedIn]] Learning.
>
> **[0:28](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=28)** When I started my journey into [[Data Structures]] and [[Algorithms]] in [[JavaScript]], I struggled to find good learning resources.
>
> **[0:35](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=35)** I was lucky to come across JavaScript Info.
>
> **[0:38](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=38)** I recommend you check it out when you need to learn new topics.
>
> **[0:43](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=43)** It can also serve as reference materials during your programming journey.
>
> **[0:49](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=49)** As you tackle new problem sets, you will need to gain in-depth knowledge of JavaScript internals.
>
> **[0:55](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=55)** Check out documentation around web technologies by the Mozilla Developer Network, or MTN.
>
> **[1:02](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=62)** It's a great resource for learning the latest JavaScript syntaxes and concepts.
>
> **[1:08](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=68)** One of the fastest way to gain problem-solving skills is by solving lots of challenges.
>
> **[1:15](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=75)** I suggest you step out of your comfort zone and try out the assignments available in Introduction to Computer Science, by Robert Sedgewick and Kevin Wayne.
>
> **[1:26](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=86)** Another platform where you can find quality problem sets is MIT OpenCourseWare.
>
> **[1:33](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=93)** Note that some of these problems may not be said in JavaScript.
>
> **[1:37](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=97)** You can demonstrate your higher knowledge of understanding if you first translate the tasks to JavaScript before solving it.
>
> **[1:46](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=106)** The concept from this course and other resources I just mentioned will definitely give you deeper insight and practical knowledge.
>
> **[1:54](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=114)** I write about JavaScript and web technologies on my blog, [mrufai.com](https://mrufai.com).
>
> **[2:00](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=120)** Check them out, then connect with me, Mustapha Rufai, on LinkedIn Learning.
>
> **[2:06](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=126)** I would love to hear from you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (7), [[LinkedIn]] (2), [[Data Structures]] (1), [[Algorithms]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** mtn (1), mit (1)
> **URLs:** [mrufai.com](https://mrufai.com) (1)
> **Warnings:** note that (1)
> **Speakers:** - [mustapha] (1)


## Instructor

- [[Mustapha Rufai]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/javascript-recursion-2887233)

## Skills Covered

- JavaScript

## Path Context

### In [[Improve Your JavaScript Language Skills]]
← [[Level Up- JavaScript]] | **4 of 8** | [[JavaScript- Arrays]] →

## Appears In

- [[Improve Your JavaScript Language Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)