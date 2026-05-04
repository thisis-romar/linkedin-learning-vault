---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: python-data-structures-stacks-deques-and-queues
url: "https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues"
duration_minutes: 35
duration: 35m
level: Advanced
updated: 3/11/2024
learners: 101584
skills:
  - Data Structures
  - Python (Programming Language)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHBAYvTGZam4Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708448527135?e=2147483647&amp;v=beta&amp;t=BFa40309T7Lem7HBsJ5zq7ct_4F5TnSwC7P3X5fM8FY"
linkedin_topic: Software Development
learning_paths:
  - '[Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)'
  - '[Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)'
prev_courses:
  - '[Advanced Python- Working With Data](Advanced%20Python-%20Working%20With%20Data.md)'
  - '[Python Data Structures- Linked Lists](Python%20Data%20Structures-%20Linked%20Lists.md)'
next_courses:
  - '[Python Data Structures- Linked Lists](Python%20Data%20Structures-%20Linked%20Lists.md)'
  - '[Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md)'
path_nav: '[{"path":"Master Your Python Skills","position":4,"total":11,"prev":"Advanced Python- Working With Data","next":"Python Data Structures- Linked Lists"},{"path":"Master Python for Data Science","position":6,"total":8,"prev":"Python Data Structures- Linked Lists","next":"Python Data Structures- Trees"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/database-management
  - skill/data-structures
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Data%20Structures-%20Stacks%2C%20Deques%2C%20and%20Queues.md)

![Python Data Structures: Stacks, Deques, and Queues](https://media.licdn.com/dms/image/v2/D560DAQHBAYvTGZam4Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708448527135?e=2147483647&amp;v=beta&amp;t=BFa40309T7Lem7HBsJ5zq7ct_4F5TnSwC7P3X5fM8FY)

# Python Data Structures: Stacks, Deques, and Queues

> Stacks, deques, and queues are three essential Python data structures. They form the backbone of many computer science algorithms, and showing a mastery of these concepts can help you in your current job or help you land your next role. In this course, Dhhyey Desai shows you how to build stacks, queues, and deques, and use these linear data structures to solve real-world problems you might encount

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues) | 35m | Advanced | 102K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Python data structures: Stacks, queues, and deques](#python-data-structures-stacks-queues-and-deques)
  - [What you should know](#what-you-should-know)
  - [Explore the CoderPad environment](#explore-the-coderpad-environment)
- [**1. Stacks**](#1-stacks) (5 videos)
  - [Stacks: An introduction](#stacks-an-introduction)
  - [The push() operation](#the-push-operation)
  - [The pop() operation](#the-pop-operation)
  - [The peek() operation](#the-peek-operation)
  - [Solution: Palindrome checker](#solution-palindrome-checker)
- [**2. Queues**](#2-queues) (5 videos)
  - [Queues: An introduction](#queues-an-introduction)
  - [List-based queues](#list-based-queues)
  - [Stack-based queues](#stack-based-queues)
  - [Node-based queues](#node-based-queues)
  - [Solution: Printer problem](#solution-printer-problem)
- [**3. Deques**](#3-deques) (3 videos)
  - [Deques: An introduction](#deques-an-introduction)
  - [Appending lists with deque](#appending-lists-with-deque)
  - [rotate(), reverse(), and extend()](#rotate-reverse-and-extend)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Python data structures: Stacks, queues, and deques](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/python-data-structures-stacks-queues-and-deques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/python-data-structures-stacks-queues-and-deques?u=76281980&t=0)** - [Dhhyey] Are you interested in mastering the fundamentals of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) [Data Structures](../../Skills/Software%20Development/Data%20Structures.md)? Well, look no further. In this course, we'll explore three essential data structures that form the backbone of many computer science [Algorithms](../../Skills/Software%20Development/Algorithms.md), stacks, queues, and deques. Throughout this course, you learn how to use these data structures to solve real world problems. You'll also discover the benefits of each data structure as well as how to implement them in your own Python code. By the end of this course, you'll be able to design efficient algorithms and write clean readable code using these fundamental data structures. My name is Dhhyey, and I'll be your instructor for this course. I'm a Python enthusiast, and to date, I've taught over 500,000 students online. I'm excited to guide you on this journey and help you reach your Python goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (4), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2)
> **CLI Commands:** python (4)
> **Speakers:** - [dhhyey] (1)

#### [What you should know](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, there are a few concepts that you should know. The first is [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s built-in list data type, specifically knowing about the list data types built in append method and also how you could try to index into a list. You'll also want to know about classes in Python, how classes have attributes, methods and how to instantiate objects. You'll also want to make sure that you have Python 3 installed, because I would say that the best way to learn through courses is by also following along with the instructor. I'll be coding in PyCharm, but you can use any code editor of your choice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3), make (1)
> **Versions:** python 3 (1)
> **Tools:** pycharm (1)
> **Speakers:** - [instructor] (1)

#### [Explore the CoderPad environment](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/explore-the-coderpad-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/explore-the-coderpad-environment?u=76281980&t=0)** - [Instructor] This course includes automated code challenges. They appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors that you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend you use a desktop browser for the best experience with the code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has four areas: Instructions in the top left, a code editor for your answer in the top right, another code editor where you can see how your code is used in the bottom right, and a console for the output in the bottom left. You can use these drag handles to allocate space as you like. For example, if you'd like to see more of the instructions, then you can lower the area of the console output. To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenge's parameters, and its desired result. Parameters are the value that will be passed into your code and it'll have to be of a particular datatype. The return value also has to be of a particular type, and you'll see that noted in the instructions. The Constraints section has useful information about the parameters that will be passed in. The examples show different parameter values and one result would be returned for each of those test cases. You should create your answer in the top right code editor. There are comments in the starting code showing where you should put your solution.
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/explore-the-coderpad-environment?u=76281980&t=94)** When you click "Test my code," you'll see a message indicating whether your code returned a successful result. So if I go ahead and change the code over here, and if you go ahead and make our console output bigger, we should see that the correct code tells us, "Great work, you've got the right answer." If your code isn't successful, you can ask for help. The show_expected_result and show_hints variables determine whether you see the expected results and any hints. Change them to a value of True in order to control the output. So I can go ahead and change both of these to True.
>
> **[2:16](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/explore-the-coderpad-environment?u=76281980&t=136)** And if I run my code again, however, with the solution not working, then as you can see, I get a hint, as well as the expected result that my code should be returning. The code editor in the lower right shows how your solution is used. You can change that code to experiment with different test cases to see how your code reacts to different inputs. Regardless of whether you answer successful, you see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. When you finished each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Code Identifiers:** show_expected_result (1), show_hints (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Stacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Stacks: An introduction](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/stacks-an-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/stacks-an-introduction?u=76281980&t=0)** - [Narrator] A stack is a data structure that is often likened to a stack of plates. If you've just washed your plate, you put it on top of the stack, and when you need a plate, you take it off the top of the stack. So the last plate to be added to the stack will always be the first one to be removed. Thus, a stack is a last in, first out LIFO structure. Now, to exemplify that, the following figure depicts a stack of plates. To remove a plate from the pile means that you have to remove the plate that is on top. Now the plate on top is always the one that has been added in the last, so the last one in is always the first one out. Now, there are two primary operations that are done on stacks, push and pop. When an element is added to the top of the stack, it is pushed onto the stack, and when an element is taken off the top of the stack, it is popped off the stack. Another operation that is sometimes used is called peek, which makes it possible to see the element on the stack without actually popping it off. Now, the only difference between peek and pop is that the peak method returns the topmost element. However, in the case of the pop method, the topmost element is returned, that element is also then deleted from the stack.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1), is called (1)
> **Env Vars:** lifo (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)

#### [The push() operation](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-push-operation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-push-operation?u=76281980&t=0)** - [Instructor] In this video, we're going to dive deeper into the stack data structure in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and specifically look at the push operation. So, first of all, let's recall what a stack is and how it works. Now, a stack is a linear data structure that follows the Last In First Out principle. This means that the last item that is added to the list is always the first one to be removed. So, let's have a look at how we can add an item to a stack. Now, in Python, we can use the append method to add an item to the end of the list, and we can treat this list as a stack. So, let's go ahead and create our own stack. And for this case, it would just be a set of four numbers: one, two, three, and four. Now, if we want to add in a number at the end, and in our case it's going to be five, we can go ahead and say stack.append, and then in brackets, five. Now, when we actually go ahead and print out this stack, it should print out the full list: one, two, three, four, and five. But what if we want to add an item to the top of the stack instead of at the end? Well, this is where the push operation comes in. For example, let's say now, if you want to add in a zero to start the list instead of at the end. If you go ahead and run this right now, it comes up with one, two, three, four, and zero, and not the desired output. So, we can go ahead and create a function in order to implement this new functionality. So, let's go ahead and say, define a new function, which is going to be called push. And then, we'll give it the parameters of stack and then item.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-push-operation?u=76281980&t=93)** And then, we'll go ahead and say stack.insert, which is a new keyword, and then we'll give that the parameters of zero and then item. Okay, so, now let's go ahead and call this function, and we can go ahead and say push, stack, and then zero. Now, our stack is basically what I seen over there, and our item is zero. So, now if we go ahead and run our stack, then it has pushed the zero to the start of the list. So using the insert method, we're able to add in the item, which is a zero to the start of the stack instead of at the end, and that's the push operation in a nutshell. The push operation is a powerful way to add items to the top of a stack in Python. Whether you're solving a problem that requires keeping track of information in reverse order or implementing an undue functionality in your code, using the push operation can help you achieve your goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** python (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The pop() operation](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-pop-operation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-pop-operation?u=76281980&t=0)** - [Instructor] In this video, we're going to continue our exploration of the stack data structure in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and specifically look at the pop operation. Now you may be asking, what is the pop operation and how does it work with a stack? The pop operation is used to remove the top item from a stack. And this operation follows the last in, first out principle. So the last item added to the stack is always the first one to be removed. In Python, the pop operation can be performed by using the pop method off a list. For example, let's consider the following stack. We're going to go ahead and say stack is equal to a list of four numbers, one, two, three, and four. Now let's go ahead and print out stack.pop. So if you go ahead and run this, calling the pop method on a stack returns the top item of our stack, which in this case is four. However, what it also does is it actually removes it from the stack. So if you go ahead and print out the full stack afterwards it will get an output of one, two, and three, and the four is now missing. Now it's important to note that the pop operation returns the removed item. So the item can now be stored in a variable if you want to keep it. So let's go ahead and keep our list and then we'll go ahead and create a variable called top, and it'll say top is the item that we pop off our stack. So we'll go ahead and print out this item and then we'll print out the full stack.
>
> **[1:48](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-pop-operation?u=76281980&t=108)** So as you can see when I run this, I get the output of top, which is four, and I get the output one, two, and three, which is the remaining parts of the stack. Now, what happens if we try to pop an item from an empty stack? In Python, calling the pop method on an empty list will raise an index error exception. So it's always a good idea to check if a stack is empty before calling the pop method on it. In conclusion, whether you're using a stack to solve a specific problem or just exploring the concept, understanding how the pop operation works is key to effectively use stacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [The peek() operation](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-peek-operation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-peek-operation?u=76281980&t=0)** - [Instructor] So let's now continue our journey into the stack data structure in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). And in this video we'll look at the peek operation. The peek operation is used to retrieve the top item from stack without removing it. This is useful when you want to view the top item of a stack without altering the actual stack itself. In Python, the peek operation can be performed by accessing the first item of the list that represents a stack. For example, let's consider the following stack. We'll just go ahead and say stack is equal to 1, 2, 3 and 4. Now let's go ahead and print out the value from the stack which has an index value of minus one. And then after that we'll go ahead and print out the full stack. As you can see, accessing the first item of the list using indexing returns the top item of the stack, which is 4, without removing it. So the stack remains unchanged. It's also important to note that if the stack is empty, accessing the first item of an empty list will raise an IndexError exception. To check this out, let's go ahead and create an empty list for our stack, and then we'll go ahead and create a try and except command. We'll go ahead and say, try, to print, stack, and the value which has an index of minus one and except. If there is an IndexError, print out that the "Stack is empty!"
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/the-peek-operation?u=76281980&t=97)** Now if you go ahead and run this, of course, we get the output that the "Stack is empty!" So it's always a good idea to check if the stack is empty before you try to pass in the peek operation and try to view its top item. The peek operation is a useful tool when you're trying to work with different stacks, whether using the stack to solve a specific problem or just trying to work around a solution. Understanding how the peek operation works can help you effectively use stacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Palindrome checker](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-palindrome-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-palindrome-checker?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-palindrome-checker?u=76281980&t=5)** - [Instructor] Welcome back, I hope you had fun attempting the Palindrome Checker Code Challenge. And in this video we'll be going through a potential solution to the problem. So first of all, we start off by looking at the Node class and you didn't actually have to change anything here because the function was already initialized for us and we don't need to do anything else. So in the Stack class we again have an initialization function, and moving on we see our push operation. Now if remember from our video, the push operation is essentially when we add an item to the top of our stack. Now the stack follows a last in, first out principle and so whatever item is added to the top of our stack will be the first one to get removed. And to add something to the top of our stack, we create a new node and we name it the new head of the stack, which also means the top of the stack. So now we can move on to the pop operation. Here, we check if the stack is empty, and to do so we'll use isEmpty function, which we'll get onto in a second. Then we go ahead and get the data that we need from the head node, and this is going to be data that we just pushed on top of the stack. Now again, last in, first out, so that when in last is going to be the first one that we get out, then we can implement the peek operation. Now if you remember, the peek operation was really similar to the pop operation, but this time we won't be removing the node head from the top of the list and instead we just see whatever data is on the top of the stack and we move on.
>
> **[1:40](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-palindrome-checker?u=76281980&t=100)** Then the isEmpty function. What we do here is check if there is no head node. Now, if there is no head node, then we have no list, so the stack is empty. Finally, we can use all these functions and try to create a palindrome checker using stacks. To do so, first we start off by converting everything into lowercase and remove the punctuation. If you remember, in the instructions we're told to ignore any punctuation. So we do so and we then create a stack using the stack method. And then for each character in the string, we push each one as a separate item into the stack. Then we can pop out each character from the stack and compare it with the string. If all the characters that we have popped out are equal to all the characters in the string, then the string is a palindrome. If you think about this, when we are popping out the items, we pop them out in reverse to how they're actually put in. So if you have a look at race car for example, we'll start popping out items from the back. So we'll get R-A-C-E-C-A-R. Obviously race car is a palindrome so it wouldn't matter, but if it wasn't a palindrome then we would get false and our code would reply false. But of course this code does work and we were told, "Great work! "You got the right answer." And our code returns true because race car is indeed a palindrome. Thank you for that, I hope you had fun.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6)
> **Code Identifiers:** isempty (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 2. Queues

[↑ Back to Table of Contents](#table-of-contents)

#### [Queues: An introduction](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/queues-an-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/queues-an-introduction?u=76281980&t=0)** - [Instructor] Another special type of list is the queue data structure. This data structure is no different from the regular queue you are accustomed to in real life. If you have stood in the line at an airport or to be served your favorite book at your neighborhood shop then you should know how things work in a queue. Queues are also a very fundamental and important concept to grasp since many other [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) have been built upon these. So of course we know how a queue works. The first person to join the queue usually guests serve the first all things being equal. The acronym FIFO best explains this. FIFO stands for first in first out, when people are standing in a queue waiting for their turn to be served, service is only rendered at the front of the queue. The only time that people exit the queue is when they have been served, which only occurs in the very front of the queue. By strict definition, it is illegal for people to join the queue at the front where people are being served or even in the middle. To join the queue, participants must first move behind the last person in the queue, and the length of the queue doesn't matter. This is the only legal or permitted way by which the queue accepts new entrance. Of course, this will be very useful when we're working with code. As human as we are, the queues that we form don't really confirm to strict rules. It may have people who are already in the queue deciding to fall out or even others substituting in for them. It's our intent to model all the dynamics that happen in a real queue in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md),
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/queues-an-introduction?u=76281980&t=95)** but abstracting what a queue is and how it behaves enables us to solve a plethora of challenges, especially in computing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** fifo (2)
> **CLI Commands:** python (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [List-based queues](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/list-based-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/list-based-queues?u=76281980&t=0)** - [Instructor] In this tutorial, we'll be looking at list-based queues in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). A queue is a commonly used data structure. This follows the first in first out principle as we know. In this tutorial, we'll be implementing a list-based queue where the elements are stored in a list. So let's start off by defining a class for our queue. We'll go ahead and just call this queue. Now our class is going to have an init method that initializes the empty list queue and helps us draw our elements in it. Next let's define a method to help us add elements to our queue. This is known as enqueue. Now the enqueue method simply just uses the upend keyword and adds the item to the end of the list. Now the dequeue method first checks if the queue is empty. If it is, then it returns none because there are no values. If not, it removes the first item from the front of the list queue and then it returns it. We can also add in a method to check if the queue is empty. The is_empty method returns true if the length of the queue list is zero and false otherwise. This is done using the len keyword. And finally, let's add in a method to retrieve the size of our queue. The size method simply returns the length of the queue list. This again, is by using the len keyword. So now let's go ahead and expand on the list based queue implementation and include some sample values to help us illustrate how the queue works.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/list-based-queues?u=76281980&t=93)** So let's go to the bottom, and we'll go ahead and say queue is equal to queue to create an instance of the queue class. Now we're going to add some values to it. So we'll go ahead and say queue.enqueue, and we'll add in the value 10. If you remember, the enqueue function adds values to our queue. And then we'll go ahead and say queue.enqueue 20, queue.enqueue 30, and then queue.enqueue 40. Now if you go ahead and print out the size of our queue, it should print out as four. So we can go ahead and say queue.size. And if you go ahead and run this, we get the output of four. Now let's go ahead and check out our dequeue method. So we'll go ahead and create a new variable, and we'll call it value, and we'll say queue.dequeue. Now whatever item is the first in the queue will be removed, and it will be stored in this variable. So if we now go ahead and print out this value, we should get the value of 10, as we do. And that's it. We've now successfully implemented a list-based queue in Python. You can use these methods to enqueue and dequeue items, check if the queue is empty and even retrieve its size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1), known as (1)
> **Code Identifiers:** is_empty (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Stack-based queues](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/stack-based-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/stack-based-queues?u=76281980&t=0)** - [Instructor] In this video we'll be implementing a stack based queue where the elements are located in two stacks. One for enqueuing and one for dequeuing. Let's start off by defining a class for our queue. We'll call it Queue. So after our class has been defined we add in an init method the initializes two empty lists, enqueue stack and dequeue stack. Next, let's go ahead and define a method to add elements to our queue. This is also known as enqueue. The enqueue method simply adds an item to the end of the list enqueue stack by using the .append keyword. Now, let's define a method which will help us remove elements from the front of our queue. Also, this can be known as dequeue. The dequeue method first checks if the dequeue stack is empty. If it is, then it transfers all the elements from the enqueue stack, the dequeue stack, reversing the order. If the dequeue stack is still empty, it returns none. If not, it removes and returns the item at the end of the dequeue stack. Also, we can add in a method to check if the queue is empty. The is empty method returns true if both the enqueue stack and the dequeue stack are both empty and false otherwise. Finally, let's go ahead and add in a method to retrieve the size of our queue. The size method simply returns the sum of the lengths of the enqueue stack, as well as the dequeue stack. And that's it. All you need to do is initialize the class,
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/stack-based-queues?u=76281980&t=93)** add in some values, and we are good to go. We can now successfully implement a stack based queue in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). We can also use his methods to enqueue and dequeue items as we've seen before. Check if the queue's empty and of course, retrieve its size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** known as (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Node-based queues](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/node-based-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/node-based-queues?u=76281980&t=0)** - [Instructor] In this tutorial we'll be implementing a node-based queue where each element in the queue is represented by a node with a value and a reference to the next node in the queue. So let's start off by defining a class for our node. We can just go ahead and call it Node. And our class will have an init method that initializes the node with a value, and sets the reference to the next node to none because that is currently non-existent. Next, let's go ahead and define a class for our queue. Again, we can just call this Queue. Our Queue class will also have an init method that initializes the last node in the queue. Now let's go ahead and define a method to help us add elements to our queue. This is known as enqueue. The enqueue method creates a new node with a given value and adds it to the end of the queue. If the tail is not none, it updates the next reference of the current tail to point to the new node. The tail is then updated to be the new node. If the head is none, it means that the queue is empty, so both the head and tail are set to the new node. Now let's go ahead and define a method to remove elements from the front of the queue. This is also known as dequeue. So the dequeue method checks if the head is none. If it is, it returns none, indicating that the queue is empty. If the head is not none, it removes and returns the value of the head node. The head is then updated to be the next node in the queue. If the new head is none,
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/node-based-queues?u=76281980&t=94)** it means that the queue is now empty, so the tail is set to none. We can also add in a method to check if the queue is empty. The is_empty method returns true if the head is none, and false otherwise.

> [!info]- Semantic Content
>
> **CLI Commands:** node (14)
> **Definitions:** known as (2), means that (2)
> **Code Identifiers:** is_empty (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Printer problem](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-printer-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-printer-problem?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-printer-problem?u=76281980&t=5)** - [Instructor] Welcome back, I hope you had fun attempting the printer problem code challenge. And in this video we'll be having a look at the output actually given. First we see that we have given the class Queue, and this is the class that we are going to be coding under. So we see that there is initialized function over here and over here. And for this function, we don't actually have to make any changes as anything that we need to initialize our class has already been given to us. And so moving on to the next function, the enqueue function. Now if you remember from our lesson in the chapter about enqueue, we can use the append method in order to add an element to the end of the list. And in this case, it'll be any piece of data that we may need to add. Then we move on to the dequeue function. So first of all, we start off by checking if the queue is empty. To do so, we're using the isEmpty function, which we'll come onto in a second. And then we use the pop method and the index zero in order to remove and also print the element at the beginning of our list. Then we move on to the front function. Now all we're doing here is we first check if the queue is empty, and then we use this index zero as we did above, but this time we just access the element at the beginning, we don't actually remove it. Then for the rear function, we go ahead and check the minus one index item in our list, and this will be the item at the end of the list. Then we move on to the size function, and this all we do is use the length function in order
>
> **[1:39](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-printer-problem?u=76281980&t=99)** to get the length of our current list. Finally, the isEmpty function is where we check if our list is empty or not by using the double equals to operator. So our main function is here, where we define a function which is going to simulate the whole printing process, and it's going to help us solve the printer problem. In order to do so, we first of all start off by making another empty list to try to get to the output that we were told to in the question, and then we create our queue. Then we enqueue each document into this queue and then initialize a time. If you remember, we need to also print out our time in our output. Then we go ahead and check that our queue isn't empty. As when our queue is empty, we stop doing any other processes. However, until our queue is an empty, we keep going. Another way to implement this loop would be by checking the size of the list, and when the size of the list is zero, we stop. But in this case, I've used a loop and I've checked when the queue is empty. So first I dequeue the document and get its names and its pages. Then I can calculate the printing time based on the constraints they were given to me in the instructions. Finally, I can update the time by looking at the printing time that is required. And now if you remember, we are told in the question that we could have two pages printed per minute. Finally, we'll print out the document details in the form that we were told in the question,
>
> **[3:12](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/solution-printer-problem?u=76281980&t=192)** and then for each time that we get some document details, we return these document details in order to meet the output that is required in the question. So now if you go ahead and run this, hopefully we should get a code that works. And yes it does because we've done it right and the result is correct. As you can see, our code returns the exact output there was required in the question. I hope you had fun.

> [!info]- Semantic Content
>
> **Code Identifiers:** isempty (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 3. Deques

[↑ Back to Table of Contents](#table-of-contents)

#### [Deques: An introduction](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/deques-an-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/deques-an-introduction?u=76281980&t=0)** - [Instructor] First of all, a deque stands for a double-ended queue, where we take the D, the E, and the first two letters of the queue and put them all together to create this new [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) called deque. The high-level definition of a deque is that it's an abstract data type that resembles both a stack and a queue. Deques can hold a collection of items and order is sort of preserved in a queue. You'll see soon why I use the phrase sort of. In a queue, you can add both items to the front and to the back, and you can also remove items from the front and the back as well. In the next few videos, we'll be looking at three main operations. Reverse, which allows us to reverse the order of elements in the deque, Rotate, which allows us to rotate the elements in the deque to the right or to the left. And extend, which allows us to extend the deque within other iterable, such as a list. A queue uses a first in first out, or FIFO, model and a stack uses a last in first out, LIFO, model. An interesting thing about deque is it can use either of those models and it's actually a hybrid. This is because it can use both of those models at the same time since we are allowed to add and remove items from both its ends. It's up to the programmer, though, to enforce those policies on either end of the queue if they choose to do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** fifo (1), lifo (1)
> **Cross-References:** in the next (1)
> **Definitions:** stands for (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Appending lists with deque](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/appending-lists-with-deque?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/appending-lists-with-deque?u=76281980&t=0)** - [Instructor] In this video, 2 we'll be discussing how you can append list 3 with the Deque data structure in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). 4 Deque, also known as double-ended queue, 5 is a data structure in Python that allows us to add 6 or remove elements from both ends of the list efficiently. 7 It's similar to regular list 8 but with faster insertion times and deletion times. 9 First, let's start off by importing the collections module 10 and creating a Deque. 11 So we can go ahead and say from collections import deque. 12 Now to add elements to the Deque, 13 we can use the append method to add to the right end 14 and the append left method to add the left end. 15 So first of all, let's go ahead and create our Deque. 16 We'll just go ahead and create a variable, my_deque 17 and initialize our Deque. 18 Now let's make use of the append commands 19 to append our Deque. 20 We'll go ahead and say my_deque.append() 21 and we'll give in the number one. 22 And then we'll just go ahead and say my_deque.appendleft() 23 and then we'll give in the number two. 24 Now what's going to happen is our Deque 25 is going to get appended so that the number one 26 is inserted in. 27 However then, the number two is inserted 28 to the left of that. 29 So the output that we get would be two and then one. 30 Let's just go ahead and check this 31 by printing out our Deque. 32
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/appending-lists-with-deque?u=76281980&t=93)** As you can see, when we print out our Deque 33 we get the values two and one in that order. 34 Now, if you want to remove elements from the Deque 35 we can use the pop method to remove from the right end 36 and pop left method to remove from the left end. 37 So let's go ahead and try this out. 38 We can go ahead and say my_deque.pop() 39 and what this is going to do is it's going to pop out 40 the number that's second in our Deque, which is one. 41 And then we'll go ahead and say my_deque.popleft() 42 and this is the first number, which in our case is two. 43 So, now if you go ahead and print out the Deque, 44
>
> **[2:21](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/appending-lists-with-deque?u=76281980&t=141)** then we should get an empty Deque as we do 45 because both of the numbers 46 have been popped off of the Deque and it's that simple. 47 The Deque is a great data structure 48 that you can use when we need to append or remove elements 49 from both ends of the list efficiently. 50 As you can see, you can append lists from both the front 51 and the end really easily by the use of Deques.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Code Identifiers:** my_deque (5)
> **CLI Commands:** python (2), make (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [rotate(), reverse(), and extend()](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/rotate-reverse-and-extend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/rotate-reverse-and-extend?u=76281980&t=0)** - [Instructor] In this video, we'll be looking at some useful methods for working with a Deque data structure in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). As a quick review, the Deque data structure is also known as a double-ended queue, and is a structure that allows us to add or remove elements to both ends of the list efficiently. It's similar to a regular list but with faster insertion and deletion times. First of all, let's start off by importing the collections module. So we'll go ahead and say from collections, and we'll import Deque, which is needed for our lesson. Then we'll go ahead and create our own Deque. For this, we'll just go ahead and say my_deque and create a variable which contains our Deque. And this time, we're going to add in some values, and we'll just make a list, 1, 2, 3, 4 and 5. Now, the first method that we'll look at is rotate. This method allows us to rotate the elements in the Deque from the right to the left. To do this, we can just go ahead and say my_deck.rotate() and we can go ahead and give in the number two. Let's now go ahead and print out the Deque. And what's happened here is that the elements have been rotated two to the right. Now let's look at the reverse method. This method allows us to reverse the order of elements in the Deque. So we can go ahead and say my_deque.reverse() and we can go ahead and print out this new Deque.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/rotate-reverse-and-extend?u=76281980&t=98)** Now as you can see, when we run this, we get the reverse of the Deque that we had over here. So this time, the output is 3, 2, 1, 5 and 4 instead of the output that we had earlier which was 4, 5, 1, 2 and 3. Now finally, let's look at the extend method which allows us to extend the Deque with another iterable search as a list. So let's go ahead and say my_deque.extend() and we'll say 6, 7 and 8. Now, let's go ahead and print out the full Deque. As you can see, we carry on from the Deque that we had after reversing it, and then all we've done is just added on the numbers 6, 7 and 8 to the end. These are just a few of the many useful methods available for working with the Deque data structure in Python. With these tools, you can efficiently manipulate the elements in a Deque to fit your specific needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Code Identifiers:** my_deque (3), my_deck (1)
> **CLI Commands:** python (2), make (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-stacks-deques-and-queues/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on completing the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) course. You've now gained a fundamental understanding of three essential data structures and learned how to apply them to solve real-world problems. Now, you are ready to take your Python skills to the next level. To continue your journey, here are some suggested next steps. Firstly, you could go ahead and try and explore more advanced data structures. Now that you have a good foundation in stacks, queues, and decks, you may want to try and dive deeper into other more advanced data structures such as trees, graphs, and hash tables. These data structures are commonly used in various computer science applications, and learning them will help you become a well-rounded programmer. Secondly, you could try to practice coding challenges. The best way to reinforce your understanding of data structures is to solve coding challenges. Now, there are many websites available where you can go ahead and try to find coding problems that you can solve. And lastly, you can try and build your own real-world projects. One of the best ways to improve your programming skills is to apply them to your own real-world projects. Now remember, learning is a continuous process. Keep practicing, experimenting, and exploring new concepts to keep improving your skills. Thank you for taking this course and I wish you all the best in your future programming projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2), find (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Dhhyey Desai](../../Instructors/Software%20Development/Dhhyey%20Desai.md)

## Skills Covered

- Data Structures
- Python (Programming Language)

## Path Context

### In [Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)
← [Advanced Python- Working With Data](Advanced%20Python-%20Working%20With%20Data.md) | **4 of 11** | [Python Data Structures- Linked Lists](Python%20Data%20Structures-%20Linked%20Lists.md) →

### In [Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)
← [Python Data Structures- Linked Lists](Python%20Data%20Structures-%20Linked%20Lists.md) | **6 of 8** | [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) →

## Appears In

- [Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)
- [Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)

## Related Courses

_Courses sharing skills:_

- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language), Data Structures
- [Python Data Structures- Linked Lists](Python%20Data%20Structures-%20Linked%20Lists.md) — Python (Programming Language), Data Structures
- [Python Data Structures and Algorithms](Python%20Data%20Structures%20and%20Algorithms.md) — Python (Programming Language), Data Structures
- [Practice It- Python Data Structures](Practice%20It-%20Python%20Data%20Structures.md) — Python (Programming Language), Data Structures
- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)

---

[↑ Back to top](#)