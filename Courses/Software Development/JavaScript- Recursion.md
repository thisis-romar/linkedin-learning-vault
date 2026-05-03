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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/introduction-to-recursion-algorithms-in-javascript?u=76281980&t=0)** - [Mustapha] Do you find it hard to break a technical problem down into its simplest form? Then you need to learn recursion. Recursion is a fundamental concept in [[Software Development]]. One of the hallmarks of good software engineers is their problem-solving ability. Recursion is an essential tool we use to simplify complex problems. We will explore how to think recursively, then progress to improving the performance of recursive [[Algorithms]]. I am Mustapha Rufai, a software engineer based in Nigeria. I really enjoyed creating this course for you because it blends my love of problem solving and teaching. So join me in my [[LinkedIn]] Learning course on [[JavaScript]]: Recursion. You will come away with working knowledge of concepts, techniques, and applications of recursion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Algorithms]] (1), [[LinkedIn]] (1), [[JavaScript]] (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [mustapha] (1)

#### [Get the most out of this course](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=0)** - [Instructor] This course is about solving problems using recursion. The skills I mention next are good to have, but not required. You can take this course and understand what is being discussed, without having studied these [[JavaScript]] concepts in the past. To get the most out of this course, basic knowledge of JavaScript functions are helpful. We will be creating functions and expressions that code themselves. In addition, it will be helpful if you understand variable scoping. The ability to differentiate, between local and global variables is useful when we talk about dropout functions. Furthermore, understanding the knowledge of [[Data Collection]] in JavaScript, arrays and objects will also be valuable. We will employ data collections where we study accumulators and lookout how to pass data from one function instance to another. The exercise files in this course are on [[GitHub]]. You should have a GitHub account to access these files. Basic understanding of how to clone a repository will also be helpful. You can access this repository, via the Tami now, or GitHub desktop. You can also avoid, gits totally by downloading files directly from GitHub. To demonstrate accessing these files, I will navigate to the repo. I will clone it into my Tami now using [[Git]] clone, name of the repo,
>
> **[1:35](https://www.linkedin.com/learning/javascript-recursion/get-the-most-out-of-this-course?u=76281980&t=95)** or I will copy the URL into my GitHub desktop. Then I will navigate to this folder in my file system. Here, you will find your files for this course. The files in other videos are grouped as branches. So to get the next file, you need to switch branch by going to your GitHub desktop. This will list all the branches available. You may notice some branches ending in B and E. B signifies files as at the beginning of a video and E signifies files as at the end of the video.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=0)** - [Instructor] We will start by reviewing this webpage. Notice the red rectangles that keep generating. Also notice the number at the center of each rectangle. This same number is printed to the console. Repetition is a common task in programming. There are two paradigms programming languages use to repeat actions, loops and recursion. Understanding when to use them is one of the hallmarks of a skilled programmer. Consider a loop like climbing steps. This that is the base, the stop will be the top. And the step is the climb. From this analogy we gather that loops require a starting point and ending point and a step which connects the end points. This flow will break when the step does not reach the stop. The loop we start, but never end. This is called an infinite loop situation, In [[JavaScript]], we have the for and while loops. The for loop has the start, stop and step requirement's built into its syntax. But if while loop requires that you pay special attention to these requirements. Remember the webpage I introduced earlier? Here it is again. The red rectangles and numbers are still generated. The program will never stop generating new blocks.
>
> **[1:36](https://www.linkedin.com/learning/javascript-recursion/loops-and-iteration-in-javascript?u=76281980&t=96)** You do not want that to happen as this is an in finite loop situation. If it's continuous generating your computer may hang and you will be forced to shut down. Here is another webpage that terminates. Notice how a fixed number or blue blocks are generated. As you can see in the console, the last number is four. In this video, we have demonstrated the importance of repetition in programming, focusing on loops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Definitions:** is a  (1), is called (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Implement exponentials and factorials with JavaScript loops](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=0)** - [Instructor] We have seen the definition of loops. Now let's use them in code samples. Let's start with the power function. Two raised to power three is eight. Two raised to power three is eight. This is two repeated three times. Let us implement this inside a power.js file. We will create the function power that will take two parameters: the base and its exponent. Inside our function, let's create a variable result that will be initialized to one. Then, we create the for loop. We start from one, and less than or equal to the exponent, and increment by one. and increment by one. For each iteration, we multiply the result by the given base. At the end of our function and outside of the loop, we return result. we return result. To test our code, let's link the [[JavaScript]] to the [[HTML]] file. I will then open this file in the browser. Now, if we pass in two comma three, we will get eight. Now, if we pass in two comma three, we will get eight. Likewise, if we pass in five comma six, we will get 15,625. Likewise, if we pass in five comma six, we will get 15,625. Let's look at another function called factorial. In mathematics, the factorial of a positive integer N, denoted by N factorial, is the product of all positive integers less than
>
> **[1:34](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-javascript-loops?u=76281980&t=94)** or equal to N. Notice that the factorial of zero is one. Notice that the factorial of zero is one. We will start by creating a function factorial that takes one parameter called position. Inside this function, let's create a variable answer that will be initialized to one. Next, we create the for loop. We start from position. At one, that is, At one, that is, it is greater than zero and decrements by one. For each iteration, we multiply the answer by the given number. Finally, we can return answer just before the closing type. Let's test our code by linking the factorial file into our HTML file. into our HTML file. First, we can test with the factorial of five. We should return 120. We should return 120. We can then test with the factorial of 10. We can then test with the factorial of 10. We should return 3,628,800. We should return 3,628,800. We should return 3,628,800. With the examples we have covered, we have seen our JavaScript. Use these loops to implement mathematical functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2)
> **Env Vars:** html (3)
> **File Paths:** power.js (1)
> **Speakers:** - [instructor] (1)

#### [What is recursion?](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=0)** - [Tutor] There's a popular phrase in Nigeria, no credit today, come tomorrow. It's usually found at entrances of restaurants. The store owner is telling people who don't have money to not bother entering the store. When the customer comes back the next day and they still don't have money, the same instruction will be true. This will continue without end. This scenario introduces the idea of recursion. Recursion is a function that calls itself. It is another way to repeat commands in programming. Technically, recursion is a problem solving technique in which problems are solved by reducing them to smaller problems of the same form. The function itself will do a section of the job and delegate the [[Representational State Transfer (REST)|rest]]. It may delegate the rest to itself or to another function entirely. There are three things all recursive functions must have. There must be a base case for all accurate values. In our restaurant scenario, the base case is the customer must have money to pay the bill. This base case most not make recursive calls. Once the customer can make purchases, the rule to come back tomorrow no longer applies to them, no more recursive calls. When recursive calls are made, it should call a smaller instance and make forward progress towards the base case.
>
> **[1:35](https://www.linkedin.com/learning/javascript-recursion/what-is-recursion?u=76281980&t=95)** As long as the customer doesn't have money, they should try to gain money during the week so they can start making purchases. The idea of recursion, is to help us solve problems efficiently and elegantly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Speakers:** - [tutor] (1)

#### [What are base cases?](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=0)** - [Instructor] Let's talk about when recursive functions should stop calling themselves. A recursive function should stop calling itself when it hits a base case. Base cases ensure determination of recursive calls. Once we hit the base case, new instances of the function must not be created. Let's consider a relay race where the athletes are passing batons to one another. One athlete will collect this baton and not pass it. This athlete, called the anchor leg, will terminate the run by racing to the finish line. This athlete is acting as a base case. If this unique athlete does not exist, all the athletes will keep running and passing batons forever. You want to avoid this happening. If you do not, the athletes will run out of energy, they will be unable to move. Likewise, if the program keeps calling itself infinitely, you will run out of memory and similar resources. This may lead to stack overflow exceptions. When stack overflow occurs, your program will not be able to create new instances of itself because it has run out of memory. This may cause your program and computer to crash. To see what a stack trace looks like, let's compare our iterative program with our recursive program.
>
> **[1:32](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=92)** In the first program, we have functionA that calls functionB, which, in turn, calls functionC. In functionC, on line 10, we will trace our stack with console.trace. Console.trace is a method of the console objects that output stack traces. This method allows functionC to know who called it. So when it finishes executing, it will return to the caller. For the iterative function, you can see in the browser that it terminates. When you run this program, you will notice the flow of the function calls. Now, what will happen if the functions never stopped calling each other? That is the case with our second program. Here, we will have two functions, D and F, that will call each other nonstop. We will trace our start in the later function. Before running the function, let me warn you that it may cause your program and system to anger, so be careful. I am going to call functionD now and wait patiently.
>
> **[2:51](https://www.linkedin.com/learning/javascript-recursion/what-are-base-cases?u=76281980&t=171)** As you can see, we have now run out of memory. This is the effect of not having a base case in recursion. Your program will run out of stack to trace. Our memory will be exited. So how can we prevent stack overflow? We can prevent stack overflow by ensuring each recursive call takes a parameter that tends to the base case. In this example, notice how the baton exchange program calls itself but with less athletes every time until there are no athletes left and it will stop running. Same thing happens in our musicPlayer program. Here, we have tried to apply a base case that terminates to each of these functions.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=0)** - It's time to see recursion in action. Let's start with exponential. We have already learned that we need three things before we can implement recursive function. We need to identify the big problem, then, we identify the small problem. Finally, we need to find the relationship between the two. Let's say, we want to find four raised to power 50. This is a big problem. It looks complex, but we know from mathematics that any number raised to power zero, we'll give one. This will be the case, for all numbers. What can we do with this fact? We can state that something is common to all numbers. This will ensure that our code terminates. We have found our base case. Finally, we need to link the big problem to the small problem. How do we do this? We can find a way to repeat the solution to the small problem, incrementally. Yes, we can grow from known to the unknown. What we know for sure is that, four raised to power zero is one. Then four raised to power one, will be four times four raised to power zero. This would give us one. Putting this in notch. We know that four raised to power 2, is 16.
>
> **[1:32](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=92)** This implies that, that is also four times four raised to power one. Do you see a pattern for me here? The pattern is that four raised to power n, is sent in as four times four raised to power and minus one. Let's implement this pattern. First, we create a function called power. This function will take two parameters, the base and it's exponent. The first thing we need to do is to write the base case. If the exponent is zero, we should return one. This best case is important. It will prevent our code from running infinitely. Next, we can call a function to solve the big case. To test our code, we can copy this and pass it to our function here. Then, when we check the power of four raised to power five, we can get 1024. Let's walk on another example. This time we implement factorial recursively. Let us find the factorial of 20. This may look complex, we need to identify the small problem, which is the base case.
>
> **[3:06](https://www.linkedin.com/learning/javascript-recursion/implement-exponentials-and-factorials-with-recursion?u=76281980&t=186)** Mathematically, the factorial of zero is one. So if the value is either of these, we should return zero. Since we have found our base case, the next thing is to figure out how to grow from the small problem to the big problem. The pattern here is the factorial of any number multiplied by a factorial of the previous index. Thus, let's create the function factorial, that we will take an index. First, we check our base case when the index is zero, we should return one. If not, we should return the index multiplied by the factorial of index before it. There, we have been able to implement factorial. Let's test this in our console. So if we put the factorial of five, we should get 120. That's it. We have implemented the exponential and factorial function recursively.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Definitions:** is a  (1)
> **Speakers:** - it (1)

#### [Challenge: Implement the join() function recursively](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/challenge-implement-the-join-function-recursively?u=76281980&t=0)** - [Instructor] Fibonacci is a mathematical expression in which the correct number is the sum of the last two numbers. The first two numbers in the sequence are seeded. The first number is always zero and the second number is always one. Then the third number will the sum of the last two numbers. So we have one. Our task is to write a recursive [[JavaScript]] function called Fibonacci that takes parameter N, which is the position of the Nth number and returns the value at that index. So if given N, to be nine, it should return 21. To solve this challenge, consider how to implement the base case. This will guide you to having a terminating condition. Ask yourself what is the smallest Fibonacci number possible, then gradually build your program from there. With this challenge, you will be able to use the base case to solve the recursive problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Implement the join() function recursively](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=0)** - [Narrator] Now that you have an idea of how to approach recursive problem, let's make use of it. In our JS file, we have a function Fibonacci, which takes one parameter N. From the definition of Fibonacci, we know that it is seeded. The Fibonacci of zero will always be zero and the Fibonacci of one will always be one. So it means that when the given index is either zero or one, the same number will be returned. This will be a terminating case or a base case. Now that we have figured out the base case, we are left with resolving the recursive course, at this point let's recall that the Fibonacci sequence says that the current number is the sum of the last two numbers. Thus the Fibonacci of N will be the Fibonacci of N minus one. Plus the Fibonacci of N minus two. We can now test this in our console. We will paste it in our console. We will call the Fibonacci of five, which will return five. We will call the Fibonacci of 10. Which will return 55. And finally, we will call the Fibonacci of 20,
>
> **[1:34](https://www.linkedin.com/learning/javascript-recursion/solution-implement-the-join-function-recursively?u=76281980&t=94)** which would give us 6765. Congratulations, you have now solved a recursive problem.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=0)** - [Instructor] Now that we understand recursion, let's see another approach to implementing it. Imagine a girl named Bibi. Her parents are traveling for the weekend. She is tasked with taking care of a three siblings, Ada, Dayo and Sabinus. She's in charge of assuring everyone is well fed during this period and keeping track of what they ate. On the first night, she ordered pizza. Now this pizza can be shared in two ways, either she picks her slice, then passes the remaining to her siblings, or she lets her siblings have their slices before picking hers. If she passes the pizza and only picks after everyone has had theirs, she runs the risk of getting hungrier. This is because of the time it takes for the pizza to get back to her. Here, you are making recursive call before processing. As she's passing the pizza before eating, this is called head recursion. Now, if she picks her slice before passing the remaining portion, it would not matter how long the pizza takes to get through circle, she would have been fed. In this case, she is processing before making the recursive call, this is called tail recursion, which means she is processing before making recursive calls. In both cases, she's making recursive calls, but which approach is more efficient?
>
> **[1:36](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=96)** the tail recursion is better because she does not have to depend on round timing before she eats. Tail recursion, is a technique to make recursive program more efficient. When you apply this trick, your program is unlikely to run into a Stack Overflow error. Tail recursion employs an accumulator that keeps track of how long we have come in our recursive stack. To continue our analogy, Bibi also needs to know how many slices her siblings have taken. To make this process much more orderly, she says each sibling can only communicate with the person next to them. She can apply head recursion to get this information by asking Ada while passing the pizza at the same time. How many slices are you taking? Ada will pass the pizza along and ask Dayo the same question, who will also ask Sabinus in return. Now, Sabinus is the last person, so he takes his share, then returns the remaining slices to Dayo with the information I have taken two slices. Dayo will take her share, and return the [[Representational State Transfer (REST)|rest]] to Ada saying I have taken three slices. Notice the accumulator, being used to track the total removed. Ada will take two slices, then pass the remaining back to Bibi saying I have taken two slices.
>
> **[3:10](https://www.linkedin.com/learning/javascript-recursion/what-is-tail-recursion?u=76281980&t=190)** Bibi, will eat the remaining four slices before recording that 11 slices have been eaten in total. Here, only Bibi knows the total number of slices eaten. In this approach, the recursive calls happen before processing. Here, the call to other siblings, happens before the pizza slices are taken out. We won't know how many slices have been eaten until Sabinus, last instance of the recursive call has reported how many he took. If she approaches this problem, with tail recursion, Bibi will take her own share, then pass the rest along saying I took four slices. Ada will take her share and pass the rest to Dayo saying I took two slices. We have eaten six slices so far. Dayo, will take three slices, then pass the rest to Sabinus. Sabinus will take his own two slices, then report back to Dayo, that 11 slices have been eaten. Dayo, will pass this information back to Ada. Ada will relate same to Bibi. In this scenario, everyone knows how many slices were eaten. Not only that, the recursive call happens after the individual has taken their share of the pizza. This is the basic idea behind tail recursion.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=0)** - [Instructor] There are buttons you can use to improve the performance of the recursive functions. One of them is the wrapper function pattern. The job of a wrapper function is to help the main function. The main function wants to perform a task. So it's delegate it. To illustrate this, let's consider binary operations in mathematics. Function addition, we'll take two parameters, a and b, and it will return their sum. Likewise, function subtraction will behave similarly. Now, let's test if these functions are commutative. An operation is said to be commutative if the order of the operands do not matter. For function addition, A plus B, will always be equal to B plus A. So we say it is commutative. Another function that is commutative is multiplication. For function subtraction, A minus B is never equal to B minus A. Thus, we conclude that subtraction is not commutative. Another function that is not commutative is division. We can see the implementation of these by creating a function is commutative on line 17, which takes a test function and two operands. We will call a test function and change the order
>
> **[1:36](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=96)** in which the operands are passed to it. We will save the operations in first result and second results. Finally, we will test the result for equality and return. I want to draw your attention to how is commutative is using other functions to complete its own task. Those other functions, in this case, addition and multiplication, are executed in its environment and have access to its lexical scope. So, how can you apply this pattern to recursion? Let's implement a count function. This function will employ another function to complete its own task. Let's call this wrap function, repeat. This function will take a single parameter. It will call itself recursively until it gets to the end. Here, the counter is the wrapping function and repeat is the wrapped function. This pattern of wrapping a function is used when, one, you need to pass different values to the recursive calls and two, the recursive calls need access to the starting data in the wrapping function scope. As seen here, repeat is taking a new parameter with each call and it is always having access to the scope of the counter. Let's build on our example.
>
> **[3:13](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=193)** Instead of counting, we will sum the numbers between our starts and end. If we sum the numbers between two and five, including its edges, we should get 14. We will start with two and the current sum will be zero. Then, we will add one to our starts to become three. So our current sum goes to three, start, goes to four and the current sum goes to five. Again, starts goes to five and the current sum goes to nine. Finally, starts become six, which will stop our recursive call and the current sum will go to 14. Our wrapping function will be sum, which takes the parameter start and end. We will have a wrapped function called add next, that will keep track of the starts value and our current sum. First, we create our base case. If the start value is greater that the end, we should return the current sum. Else, we should make a recursive call until start gets to end. Notice how function add next is assessing the scope of function sum to get the variable and. We can test this program by linking to our console and calling the variable sum with values two and five.
>
> **[4:55](https://www.linkedin.com/learning/javascript-recursion/wrapper-functions-in-javascript?u=76281980&t=295)** To be clear, wrapper functions are useful when you need to pass different values to each recursive call. It can also be used to change input to the recursive calls.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Accumulators for tail recursion](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=0)** - [Narrator] The other pattern of tail recursion is accumulators. The idea behind accumulators is the result is being collected as the recursive calls are made. Remembers Bibi and her siblings. They used an accumulator technique to track the number of pizza slices that are being eaten immediately after someone takes their share. Let's use this pattern to rewrite our counter function. We are going to remove the wrapped function, repeatedly, and put it directly inside our program. Focus your attention on the recursive call on line 20. You will notice that this parameter changes. This value is then used to process the call instance. We can also illustrate this idea by using a built-in [[JavaScript]] method, array.join. Array.join will concatenate all the elements in an array using a separator. Here, you are seeing an array containing the letters of the country, Germany. We can join them by space, by comma, by plus sign, and by dash. Let's think about how this function will work recursively. We take a character and add the separator. When we take the next character, we need to add to our previous accumulator before adding the separator. We repeat this until there are no more characters.
>
> **[1:36](https://www.linkedin.com/learning/javascript-recursion/accumulators-for-tail-recursion?u=76281980&t=96)** That accumulator keep increasing with each recursive call. We can implement this by creating a function, join. It will take an array called content and a string separator. Now let's use a wrapped function, padContent, as seen on line eight, to recursively build our new string. It will do this by keeping track of our current index in the array and the string we have built so far. Now, once our current index gets to the last index, we should stop building the string and return whatever we have. This is our base case. Else, we should go to the next index and then concentrate the separator with our current string build. We will kick off this recursive chain by calling our wrapped function with index zero and an empty string, as seen on line 18. We can test this function by returning to our web browser. In the console, you will notice that we are successfully adding a separator to the array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** padcontent (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Memoization to improve performance of recursive programs](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=0)** - [Instructor] There are several ways to make ricochet faster. Let's discuss one of them. Memoization is a technique of improving the performance of programs. Memoization starts by checking if a program has been executed previously and utilizes that results. Otherwise, it will execute this new instance of the program and study results. Let's say, you have a function X with parameter Y and results Z. To get Z, we need to perform some computation. The next time you run the same function under the same circumstances, memoization will ensure the function does not perform the competition, but make it [[Fetch]] to previously stored data. Consider the Fibonacci Sequence we studied earlier. If we process the Fibonacci of five, this kind of three will be generated. Notice out some sections are repeating. The Fibonacci of three and it's so sections repeat two times. Using our former approach, we will have to compute this repeating sequences every time we eat it. But when we apply memoization to recursion, at each instance, we will keep the results. To compute Fibonacci of five, we will call the Fibonacci of three plus Fibonacci of four. Now, Fibonacci of three, we'll compute and return a result. This is our first call to Fibonacci of three.
>
> **[1:34](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=94)** For Fibonacci of four to compute, It needs Fibonacci of three. This is our second call to Fibonacci of three. Instead of executing this second core, we will use the results generated in the first call. Let's illustrate this in our VS Code. We will bring back a previous Fibonacci program. To turn it into a memois version, we needed a way to start it and retrieve at order of one. [[Java]] script objet fulfills this requirement. So on line two, let's create a cache variable that will be an empty object. Now, before we perform our computation, we must first check if it doesn't perform previously and the answer is third in the cache. These happens between line four to line six. If we find the results, we return that answer and exit the function immediately as you can see on line five. Otherwise, we go on to compute our answer. This answer will then be saved into our cache against next time as seen on line 16. You may wonder how our memois version performs in relation to the previous function. We can check how long it takes these functions to return an answer using the [[JavaScript]] date objects. We will initialize a date objet
>
> **[3:08](https://www.linkedin.com/learning/javascript-recursion/memoization-to-improve-performance-of-recursive-programs?u=76281980&t=188)** before calling a Fibonacci functions, then we will get a change in milliseconds. We will console our answer to the browser. From my discussion, we have now seen how memoization can be applied to improve the performers of a recursive program.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=0)** - [Instructor] There are several applications of recursion. It is commonly used in sorting or arranging items in a given order. Quick Sort is an example of these sorting [[Algorithms]]. And it is also one of the fastest sorting algorithms. In a worst case scenario, it's performance is order of n squared, which is not much different from a nested loop. But on average, it will perform in order of nlogn. This is slightly faster than Merge Sort, and it's a great improvement on Selection, Insertion, and Bubble Sort. Quick Sort algorithm employs three tools: swapping, partitioning, and sorting. Swapping here means changing the content of two indexes. For example, we want the letter a and letter b to swap position. So the letter a moves to the empty area, b moves to where a has just left, then a can move to the now empty position. Here we see how the algorithm is implemented using function Swap Elements. This function would take three parameters as seen on line two, the given array, and the two indexes to be swapped. We moved the content of one of the index to temp,
>
> **[1:38](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=98)** as seen on line three. These recreates an empty space for the second index to enter. Temp is then brought back. We test this in our browser using the array, 6, 2, 30, 45, 1, 5, 8, 98, 32, 21. Here we are trying to swap index zero and index eight. As you can see in our console, you will notice that on index zero we have value six, and on index eight we have value 32. After applying the swapping algorithm, at index zero we now have 32, and on index eight we now have six. Next, we talk about partitioning. This means dividing our array into two equal halves, using a selected pivot. To understand partitioning, first we take any element in the array as the pivot, usually the first or last are selected. In this example, we will use the last index as our pivot. It is this partitioning in that introduces the nested loop measured earlier. Our goal with partitioning is to ensure all elements less than the pivot are on the left and those greater than the pivot are on the right.
>
> **[3:12](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=192)** The left pointer will move left seeking numbers less than pivot, then the right pointer will move right seeking numbers greater than pivot. Once both pointers find what they seek, they will swap content. Once swapping is achieved, the right pointer will continue moving an index forward until it finds another number greater than pivot. Then the left point will move backward seeking a number less than pivot, and another swapping will occur. Once both pointers points to the same index or index of left pointer is great that an index of right pointer, they stopped seeking, and the pivot is swapped with the current content of the left pointer. To continue with our program, let us create a function partition that will take three arguments, the array on our left and right pointers. We can set our pivot to the content of the last index as seen on line 11. Now, while the left pointer is less than or equal to the right pointer, we want the left point to move positively seeking numbers greater than pivot as seen on line 14. Once that is found,
>
> **[4:44](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=284)** we want our right pointer to move and seek content less than pivot. Once these two are found and our left pointer is still less than the right pointer as seen on line 19, then we should swap their position. Once the position is swapped as seen on line 20, then pointers can move to the next position to start seeking again. Let's test this partition function with an array that starts at left and right being zero and six respectively. You will notice the solution on our tests in the console. The final part of this algorithm is the Quick Sort. Once the pivot has been placed in position Quick Sort is used to sort elements before the element in order then sort element after the element. This is where recursion comes in. Quick Sort is used to search elements before the pivot in order then sort elements after the pivots, this is where recursion comes in. Let's study how the Quick Sort algorithm will implement this section. This function will sort an array from start to end. We employ an accumulator yet that is carried through each instance of decor, as you can see on line 49.
>
> **[6:19](https://www.linkedin.com/learning/javascript-recursion/javascript-quicksort-with-recursion?u=76281980&t=379)** Our base case will check if the accumulator array.length is greater than one as seen on line 43. Then we get the pivot through our petitioning function as seen on line 44. We will now call our Quick Sort function, passing the pivot into it. This will reduce the set of functions that we need to address. We are going to test our implementation using these test array. As you can see in the console, we are able to successfully sort our array in ascending order.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=0)** - [Narrator] For many people, taking a recursion does not come naturally. It takes practice and lots of problem solving to internalize the approach. In this section, I describe my own approach to solving recursive problems. The [[JavaScript]] interpreter will run through a function from top to bottom, two times. On the first run, called hoisting, it will allocate memory to the variables before executing the code. In this example, step A is expected to run, then step B will follow. Top to bottom execution does not work for recursion. In recursion, step B may still be running when step D comes into play. You will get confused trying to process this function. The first step to think a recursion, is to focus on what is supposed to happen. Forget temporarily about what the function is doing. Earlier in the course, Bibi asked her siblings, "How many pizza slices have been eaten?" And the answer was received. Forget about how the function arrives at the solution and trust that you will get a correct result. To further explain, lets create a function sumRange that takes a parameter index, and returns the sum of all numbers up to, and including index. Here, we have applied the first step.
>
> **[1:35](https://www.linkedin.com/learning/javascript-recursion/how-to-approach-recursive-problems?u=76281980&t=95)** The second step is to find a subproblem similar to the original problem but with less data. So this means a subproblem will involve the functional sumRange taking index minus one. We have now applied step two. Finally, find the smallest possible solution to this problem. The smallest possible solution, must return its own answer without having to call another instance of the same function. In this scenario, our smallest impute will be zero. Because sumRange of zero will always be zero. This will be our base case. It will ensure the function terminates. By the end of this third step, we would have arrived at a complete recursive solution. Don't forget to focus on what should happen, then find a subproblem with less parameter. Finally, find the simplest possible solution to the challenge. Once you master this steps, you can mix them as you please. This is my intuitive approach to solving recursive problems. Let's see how we can apply it.

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
> **[0:07](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=7)** - [Narrator] There are some words or phrases that are read the same way forward or backward. These are called palindromes. For example, racecar, rotor, and a man a plan a canal Panama. Words like extract, print, and motor are not palindromes. Is it now possible to create a function that checks if a given string is a palindrome? This is a common interview question. I am going to implement this using iteration. And your challenge will be to think throughout it can be done recursively. In thinking through this challenge, you must identify the best case or the simplest version of these problem. For the iterative implementation, let us create a function is palindrome. These function, we type phrase that we want to check. A brute force approach will be to look through the whole length of the phrase, but on inspecting the palindrome, you will notice that it is symmetrical at the center. Thus, a shutter approach will be to check the element at the first index, with the element of the last index. They gradually converge at the center of the phrase. We are going to check and get the size of the phrase. [[JavaScript]] allows us to treat strings like RAs,
>
> **[1:44](https://www.linkedin.com/learning/javascript-recursion/challenge-identify-a-palindrome?u=76281980&t=104)** and we will utilize this feature. We will look through our phrase, we will look through our phrase and at each iteration, we will check if any of the indexes do not match. At which point we will return false. But if it's successfully used through the RA, till it gets to the middle, then we return true. Let's test our solution. We can do that by passing motor, rotor, and a man a plan a canal Panama, without the spaces into it. As you can see, motor has been flagged as not being a palindrome but the other phrases are. Now your task is to implement this function using recursion.

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
> **[0:07](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=7)** - [Instructor] In solving a recursive problem, it is good to simplify our thinking and find the simplest solution first. What is the simplest palindrome that can exist? It is a single character, or no character at all. The letter Z is a palindrome because if you read it forward or backward, you get the same thing. An empty string is also a palindrome because any direction you read it, you will read the same thing. Our best case will then be a string with zero or one character. Now, if you have more than one character, that's where we will employ recursion. Borrowing our solution to the iterative version, we know that the first and last indexes will be the same. If it's not the same, we can accurately say that the phrase is not a palindrome and return false. Let's switch to our vs code. Our function would take a phrase. We will keep the size of the phrase. Now if the size is either zero or one, we return, as we have reached the best case. Otherwise, the second and its opposing index, are stringed using soft string.
>
> **[1:41](https://www.linkedin.com/learning/javascript-recursion/solution-identify-a-palindrome?u=76281980&t=101)** This is passed as value into our recursive call. Here, on line 12, we are using the accumulative pattern. We continue to do this until we reach the best case as seen on line six. If we test our recursive implementation, with the data used previously in our slide, you will realize that the results are same. Here, we are employing the recursion as our expression would have been evaluated before the recursion takes place. You may be curious to know what the time complexity of this algorithm is. First, let's assume a worst case scenario where we have our phrase is not empty. Because of checking, if this phrase is size zero or one, it is constant, so K of one. Then, we need to check the length before removing the two extreme indexes, say K of two. This becomes K one plus N divided by two times K two, which is the same thing as order of (unknown) of N.

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
> **[0:07](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=7)** - A tree is a node based data structure. Trees are used to show relationships. Recursion is a very useful tool in finding these relationships. You may consider the relationship between parents and their children as a Family Tree. Each node can have multiple children. Binary trees are special trees that only have a maximum of two children. When a child of a node does not have children, we say it is a leaf. In what ways can we chase the lineage? Generally, there are two approaches to traverse trees. You can check through the depth called the Depth First Search or DFS. Or you can check through the breadth called the Breadth First Search or BFS. The DFS algorithm includes Preorder, Inorder and Postorder. The Preorder is where we traverse our tree from the root to the left out, then come back to the right shout. Root, left, right. The Inorder is where we traverse our tree from the left to the root, then to the right shout. Left, root, right. This is programmatically the easiest approach to flowing through a binary tree.
>
> **[1:41](https://www.linkedin.com/learning/javascript-recursion/challenge-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=101)** The Postorder is where we traverse our tree from the left to the right, then say two on the root. Left, right, root. If you need to implement the stack data structure, this is the best approach to use. It is very effective when evaluating mathematical equations. Thus given the root of a binary tree, Write the function that returns a Preorder arrangement of leaves. That means you should return an array of the leafs of the given binary tree. Your function should take three parameters, the root, a left subject and a right subject. The end is you will employ wrapped functions and accumulators to keep track of the leaf. Think about what your base case will be.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=0)** - Since we are solving this with preOrder then we have to transverse Root, Left, Right. So we have to check the route first. If it does not exist then we do not go further. There is nothing to check, but if it exists then we put the value of that route into our tracking array. After which, we can visit the left node, Then we visit the right node. So, given this tree, we will go through the route and record A. Then we visit the left sub-tree. Here, we will record B. Now B has left sub-tree too so, we will record D. D also has a left sub-tree, so we will record H. This will take us back to the right sub-tree where we will record E, then J. Using this approach we will get all the nodes in the binary tree. But we are only interested in the leafs, so we have to check and confirm that the node does not have children before we push it to our tracking array. The leafs in this case are the the one that are H, J, L, N, and M. We will start with getting all the nodes.
>
> **[1:33](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=93)** To implement our code let's create a function count_nodes solution. This will take root of type binary tree node that you want to transverse. Let's create an empty array of nodes that will track all the nodes we visit. Now we will create our RA function. Let's call it "flow". This RA function will check if the root is empty. I just go back to the previous node but if it is not empty, Then we push the data in the current node to nodes array.
>
> **[2:22](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=142)** Then, following the pre-order constraint, we will visit the left sub-tree and the right sub-tree. We will then call our function "flow". Once it finishes running we will return nodes that we have been tracking. Now, when you test your code you will get the content of several binary trees. You should always check each node is in the preOrder fashion. But the challenge asked us to find the leafs. Remember that the leaf of a node is without children. So, instead of pushing all visited nodes to the array as seen on line sixteen, we are going to confirm that the current node does not have a left or right child. First, let's duplicate our function and rename it to "count leafs solution." We are no longer tracking nodes so I am renaming this to "leafs". Now, at the point of pushing we will confirm that root dot left is null and root dot right is null before pushing the leaf. (keyboard clicking) Once we have made the confirmation,
>
> **[3:57](https://www.linkedin.com/learning/javascript-recursion/solution-count-the-number-of-leaves-in-a-binary-tree?u=76281980&t=237)** we can now continue transversing by returning to the left node or the right node. At the end, we will return results. This is the solution to our count leafs challenge.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=0)** - [Instructor] In the earlier challenges we have worked with arrays and binary trees. In this challenge, we will introduce another data structure, the LinkedList. A LinkedList is a linear data structure similar to an array, however, unlike arrays, elements are now stored in a particular memory location or index. Rather, each element is a separate object that contains a pointer or a link to the next object in that list. We start from somewhere, usually called the head, and we move through the list using each element or object in the list. Also, the last node in the LinkedList is usually pointing to null. Some of the differences between an array and a LinkedList include insertion and deleting at the top of the list. It takes just one step in a LinkedList, but it is much more expensive in an array. In addition, an array is usually fixed size, but a LinkedList can grow linearly to accommodate the data. In this challenge, you'll be given a single LinkedList and your task is to find the items in the middle. The test list will be 16, 7, 3, 4, and 9,
>
> **[1:38](https://www.linkedin.com/learning/javascript-recursion/challenge-find-middle-of-linkedlist?u=76281980&t=98)** and your function will return 3. In the second list you'll be given 89, 66, 24, 11, 53, 77, and your function will return 11. This challenge can be completed in 15 minutes.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=0)** - To solve this challenge, we are going to create a structure for our linked list. We will create class linked list. This class, we have a constructor, this constructor we have two class variables, the data for our initial item in the list, and then a pointer to the next item in the list. Currently it is NULL, so we just have one item in the list. Next, we are going to create the next object of this list. So we have a function with list item. This function, we take the data and then we are going to create an object of the list. The list item function, we take the data inside it, it'll create a new instance of the linked list. Then it will insert the data into the new instance of the linked list and point to NULL. Now we can approach our question. Our task is to find the middle item of a linked list. So we need to, first of all, know our tracking position, and we need to assume that we don't know our midpoint yet. So we are now going to create a function
>
> **[1:38](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=98)** that will transverse through our linked list and try to find this midpoint. Find midpoint, we take a parameter head, which is the starting point of our linked list. It will check if this head is NULL, which signifies that there is no item in the linked list. At which each point, we are going to just assume that our linked list is empty and return immediately. But if our linked list is not empty, we can now start transversing through linked list. So tracking position, we'll move one step ahead. Then we will call our findMidPoint recursively to take the next item and check if it is NULL. This will continue until we get to the end of our linked list. If we are able to get to the end, then we will set the end to be our head. To test our code, we need to call our midpoint and then pass in some values into it. We have our code set up now to test our piece of code, let's pass in our test data. We are going to create an instance of our function list item. Then we are going to set other items in this list.
>
> **[3:18](https://www.linkedin.com/learning/javascript-recursion/solution-find-middle-of-linkedlist?u=76281980&t=198)** We these, we have been able to put items 16, seven, three, four, and nine into our linked list. Next, we can try to transverse through this linked list by calling midPointTrack and passing our head into it. Then we can save these inside a variable and console our answer to the output. At this point, you will be able to see in our console that our midpoint is three and the next item passing through each other.

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
> **[0:00](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=0)** - [Mustapha] Our study of recursion has provided us with several tools. We have employed them in solving both algorithmic and day-to-day challenges. You may notice that our solutions became faster as we optimized and kept track of our computations. To expand on this program's solving approach, I recommend you to take courses on dynamic programming, here on [[LinkedIn]] Learning. When I started my journey into [[Data Structures]] and [[Algorithms]] in [[JavaScript]], I struggled to find good learning resources. I was lucky to come across JavaScript Info. I recommend you check it out when you need to learn new topics. It can also serve as reference materials during your programming journey. As you tackle new problem sets, you will need to gain in-depth knowledge of JavaScript internals. Check out documentation around web technologies by the Mozilla Developer Network, or MTN. It's a great resource for learning the latest JavaScript syntaxes and concepts. One of the fastest way to gain problem-solving skills is by solving lots of challenges. I suggest you step out of your comfort zone and try out the assignments available in Introduction to Computer Science, by Robert Sedgewick and Kevin Wayne. Another platform where you can find quality problem sets is MIT OpenCourseWare.
>
> **[1:33](https://www.linkedin.com/learning/javascript-recursion/dig-deeper-into-javascript-recursion?u=76281980&t=93)** Note that some of these problems may not be said in JavaScript. You can demonstrate your higher knowledge of understanding if you first translate the tasks to JavaScript before solving it. The concept from this course and other resources I just mentioned will definitely give you deeper insight and practical knowledge. I write about JavaScript and web technologies on my blog, [mrufai.com](https://mrufai.com). Check them out, then connect with me, Mustapha Rufai, on LinkedIn Learning. I would love to hear from you.

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