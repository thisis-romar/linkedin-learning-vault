---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-data-structures-linked-lists-21039506
url: "https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506"
duration_minutes: 62
duration: 1h 2m
level: Intermediate
updated: 4/12/2024
learners: 6969
skills:
  - Data Structures
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/python-data-structures-linked-lists-coderpad-3862042"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGux-kR88_Z9g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712710126604?e=2147483647&amp;v=beta&amp;t=aKsQLLn30aLMbPLAMK-bZbxQal72aUj4Kc1JdM9J-1M"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Your Python Skills]]'
  - '[[Master Python for Data Science]]'
prev_courses:
  - '[[Python Data Structures- Stacks, Deques, and Queues]]'
  - '[[Python Data Structures and Algorithms]]'
next_courses:
  - '[[Advanced Python- Practical Database Examples]]'
  - '[[Python Data Structures- Stacks, Deques, and Queues]]'
path_nav: '[{"path":"Master Your Python Skills","position":5,"total":11,"prev":"Python Data Structures- Stacks, Deques, and Queues","next":"Advanced Python- Practical Database Examples"},{"path":"Master Python for Data Science","position":5,"total":8,"prev":"Python Data Structures and Algorithms","next":"Python Data Structures- Stacks, Deques, and Queues"}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Data%20Structures-%20Linked%20Lists.md)

![Python Data Structures: Linked Lists](https://media.licdn.com/dms/image/v2/D4D0DAQGux-kR88_Z9g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712710126604?e=2147483647&amp;v=beta&amp;t=aKsQLLn30aLMbPLAMK-bZbxQal72aUj4Kc1JdM9J-1M)

# Python Data Structures: Linked Lists

> In this course, get an introduction to linked lists, a popular and useful dynamic Python data structure. Instructor Ryan Mitchell covers various types of linked lists, and gives you the opportunity to practice your skills with CoderPad challenges in each chapter. Ryan starts with the basics—how Python lists are stored, the advantages and disadvantages, and how linked lists solve some of these prob

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506) | 1h 2m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [The best dynamic Python data structure: Linked Lists](#the-best-dynamic-python-data-structure-linked-lists)
  - [What You Should Know](#what-you-should-know)
  - [Using CoderPad](#using-coderpad)
- [**1. Getting Started**](#1-getting-started) (4 videos)
  - [Lists, Linked Lists, and Memory](#lists-linked-lists-and-memory)
  - [Practical Applications of Linked Lists](#practical-applications-of-linked-lists)
  - [Building a Linked List in Python](#building-a-linked-list-in-python)
  - [Solution: Finding a middle ground](#solution-finding-a-middle-ground)
- [**2. Building Functionality**](#2-building-functionality) (4 videos)
  - [Searching](#searching)
  - [Deleting Nodes](#deleting-nodes)
  - [Inserting Nodes](#inserting-nodes)
  - [Solution: Removing duplicates](#solution-removing-duplicates)
- [**3. Variations on a Theme**](#3-variations-on-a-theme) (4 videos)
  - [Circular Lists](#circular-lists)
  - [Doubly Linked Lists](#doubly-linked-lists)
  - [Orthogonal Linked Lists](#orthogonal-linked-lists)
  - [Solution: Fixing a doubly-linked list](#solution-fixing-a-doubly-linked-list)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The best dynamic Python data structure: Linked Lists](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/the-best-dynamic-python-data-structure-linked-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/the-best-dynamic-python-data-structure-linked-lists?u=76281980&t=0)** - Do you like linked lists or looking to learn more about linked lists? Well, you'll like linked lists on [[LinkedIn]] Learning. Linked lists have everything: nodes, pointers, data, insertion, deletion, searching, and traversals. You can make them circular, you can make them doubly-linked. We even have the rare orthogonal linked list. Hi, I'm Ryan Mitchell, author of "Web Scraping with [[Python (Programming Language)|Python]]" and lots of other Python things. I'm excited to introduce you to linked Lists. They're one of my favorite dynamic [[Data Structures]]. By the end of this course, you'll get hands-on experience working with linked lists through code samples and challenges. I'll also give you industry insider information about how you can use linked lists at work or in the interview for your dream job. No one wants a listless employee, so let's go learn linked lists.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1), [[Data Structures]] (1)
> **CLI Commands:** make (2), python (2)
> **Speakers:** - do (1)

#### [What You Should Know](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/what-you-should-know?u=76281980&t=0)** - If you've never written a line of code in your life, congratulations on starting your journey, but just don't do it with this course. You are awesome, you are fantastic, but this is just not the first step for you. Go check out an introductory [[Python (Programming Language)|Python]] course first, and I promise I will be here when you get back. Okay, if you're still here, here's what you're going to want to know or brush up on. So first of all, if you are an experienced programmer, know at least a couple different languages but aren't familiar with Python, this course will probably be fine. You might want to look up a couple things about the language like its use of indentation, but honestly, Python syntax is so straightforward that it'll likely be pretty easy to pick up. And if you don't find it easy, I just want everyone to know that regardless of Python skill level, there's no shame in pausing, slowing down, and or rewatching videos as needed. We put those little player control buttons down there for a reason. So, if I'm going too fast or too slow, just remember we gave you buttons. Anyway, if you do have experience with Python programming, awesome. Just make sure you're familiar with a few things first. Lists, yes, the regular ones, the Python list class. This is a case where it's hard to appreciate a remake if you're not familiar with the original. Object-oriented Python. I'm talking classes, instances, attributes, methods, inheritance. We're going to be using these things to create our linked lists. And whether you've programmed in Python specifically
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/what-you-should-know?u=76281980&t=94)** or other languages, you'll want to have a basic understanding of pointers and memory addresses. Just the basics, like a pointer is a four or eight byte memory address representing the location of an object or some data in memory. So with all that said, I would like to point you to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8)
> **CLI Commands:** python (8), find (1), make (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - if (1)

#### [Using CoderPad](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/using-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/using-coderpad?u=76281980&t=0)** - [Narrator] Although watching the course videos is an important, crucial part of this course, it's not the only part. To get the most out of this course, you're going to want to follow along at home as well. I recommend that you download the course exercise files, available through a direct download link on this page, or through the course [[GitHub]] page, and the link to that is on the course site as well. The course exercise files contain begin states and end states for each piece of code in each video in the course. The begin state is marked with an underscore B, and the end state is marked with an underscore E. That way, you can write the code yourself or just play around with it and run what I've already written as you see fit. There are also three challenges in this course, and each challenge uses [[Embedded Software]] called CoderPad in order to provide you with an in-browser programming experience. Simply click over to the challenge, read the instructions, type your solution, and see how you did. I recommend that you use CoderPad on a desktop browser. You can use the [[LinkedIn]] Learning mobile app and write the code on your phone with your thumbs, but why would you do that to yourself? There are four screens in CoderPad. You can enlarge them and shrink them as you see fit with these little handles here. The first screen you're going to want to look at is the instructions. I wrote them myself, and they are very important. They will tell you all about the challenge, what the expected output is with examples, and where to go for more hints and practice if you need them. The answer screen is just to the right of that, and this is where you'll enter your code.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/using-coderpad?u=76281980&t=93)** I've tried to make this as easy as possible, so in general, you'll see an empty function. It just has the function, name, the arguments here, and all you have to do is put your code inside of it. Just below that is the test code, so this isn't too exciting, but it does show you how your function will be called. I don't show you the exact values used in the list that will be past your function, so that's a little bit of a surprise after you run it for the first time. If you don't like surprises, you can of course, run your code at any time. It may fail, but it will also show you the values being used to test your code. So feel free to do that and to run your code, of course, just use the Test My Code button on the bottom right, and then direct your attention to this fourth screen here. This is the console output, so you especially want to look at this if your code is failing and you don't know why. You're going to see all your program output, print statements and errors that will help you debug your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Embedded Software]] (1), [[LinkedIn]] (1)
> **Exercise Files:** exercise files (2), download the (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Lists, Linked Lists, and Memory](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/lists-linked-lists-and-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/lists-linked-lists-and-memory?u=76281980&t=0)** - [Narrator] The [[Python (Programming Language)|Python]] list, despite its lowercase spelling in Python, this is actually a class, the list class. Each list that we create is an instance of the list class, it's a list object. Now, most classes in Python, like say a datetime class, have a limited amount of data they will ever hold in them. Python knows exactly how much memory it needs to store it, but what about a list? How big is a list? Well, it can be any size. It can be zero elements long, it can be 500 million elements long, there's just no telling. The problem is that all the elements of a list, or rather pointers to them, need to be stored in the same contiguous block of memory. This allows us to jump to a particular index of the list by taking the starting point, multiplying the index by the block size, and then adding the two together. Then you go and jump to that spot in memory. So when we create a list, Python needs to find an empty chunk of memory that can comfortably accommodate a list that will potentially grow. Let's say we assume our list will hold no more than eight items, so we find a chunk of memory that's big enough to hold those eight items. Every time we add something to the list, not a big deal, it's super fast. We have room for it. But what happens when we keep adding to that list and it gets too big for its current space? Well, the list needs to be moved. This requires moving every single value from the old list to the new and bigger list, and this operation takes a lot of time. The eighth item added to the list is fast. The ninth item takes a very, very, very long time,
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/lists-linked-lists-and-memory?u=76281980&t=96)** longer than if we had just allocated the right amount of space for our list in the first place. Now, some programming languages get around this problem by forcing you to declare the maximum number of things your list will hold upfront. For example, this array declaration in [[Java]]. This is declaring a new integer array, the Java version of a list, that is 20 integer long. That way, it never has to reallocate memory or move it around. You can tell upfront how big the list is going to be, but even then, you run into issues if you delete items from the middle of a list. If an item is deleted, you have to take all of the following items and move them one by one. And this is a problem that the Python tuple has solved very nicely. Simply never let people add or remove items. You declare exactly how big it will ever be, and then you can only modify the values inside of it, but you can't add or remove them. But what if there is another way to solve this problem? Going back to our list expansion problem, what if when you ran out of memory, you just added a little note that said hey, the list continues over here in this block, and then you continue on with your list. Now, one problem is that if you want to jump to the the last element of the list, you have to jump to the end of this one first, read the address where it continues, and then jump to the next list. You can't just jump straight to the segment of memory that you want. Now, what if that's not a problem for us? What if we're always reading lists in order anyway? What if we don't want to jump around and let's take this idea to its extreme conclusion. What if every single element simply had a pointer to
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/lists-linked-lists-and-memory?u=76281980&t=189)** where the next element was? When you declare a new list, then you never need to allocate more than one chunk of memory because the next item could be stored over here, over there, over there, you can use up all these little bits and pieces of memory. You can trivially, add and delete items from the list without having to rearrange anything else. You just skip over the node you want to remove, and everything else can stay in place. The only thing you give up is your ability to jump to any random index in the list. For some applications, it may be a Faustian bargain, an untenable position, or it may not matter at all. This is a list with linked elements, the linked list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Java]] (2)
> **CLI Commands:** python (6), find (2), node (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Practical Applications of Linked Lists](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/practical-applications-of-linked-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/practical-applications-of-linked-lists?u=76281980&t=0)** - Because there are so many interesting tricks to working with linked lists, they're often used for job interview questions. But I want to get out of this mindset that linked lists are only good for interviews and that you don't need them once you have the job. I've worked with linked lists many times in my career, some in obvious ways, like a class that I've literally named Linked List Node, and some in subtle ways, where a large complex object just happens to have a reference to another one of the same type. And then you realize, oh, hey, this is a linked list. So, what are some types of scenarios where you might encounter a linked list? Maybe you're drawing or rendering each frame in an animation. You don't care what came before, you don't care what comes at frame 200, you only care where you are now and what's coming up next. Maybe you're doing Riemann sums to get the approximate integral of a stream of data coming in. You just need to know the current measurement, the time or distance between two measurements, and you're set. Many CS problems are well-suited to the linked list. For instance, the Undo functionality in a document editor. You need to know where you are, you need to know what the last action was, and that's it. And if you think about it, you have both an undo and a redo action. Could this be a linked list? What would that data structure look like? Really, any situation in which you never need to jump directly to an arbitrary index and where you really only care about the current and the next element, a linked list may be ideal. And this is especially true if you're dealing with situations where you have a large number, say thousands or millions of elements.
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/practical-applications-of-linked-lists?u=76281980&t=94)** A linked list is going to be a must in those situations. So come with me. Yeah, I'll show you how to do linked lists for the job interview, but more importantly, I'll show you how to do them for the job. And most importantly of all, I will show you how to do linked lists for fun.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - because (1)

#### [Building a Linked List in Python](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/building-a-linked-list-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/building-a-linked-list-in-python?u=76281980&t=0)** - [Instructor] Up until now. Linked lists have only been a theory, but here we're going to put it into practice. The first thing we're going to want to start with is a node, class node. This represents a node or an element within our linked list. Let's give it constructor. All right, so we're going to have two attributes. The first is a data attribute, self dot data equals data. And then the next is a pointer, the next pointer, self dot next. And we're going to leave this as none for now. So when we make a new node, it doesn't have a next pointer unless we give it one later. Okay, so great, we can make a new linked list by doing this. Node one, N dot next equals node two. So now we're populating our next pointers. Dot next dot next equals node three. All right, course over, everyone can go home now. Oh, you want more linked lists? Okay, well fine. While this is technically all you need to make a linked list, they generally have useful features associated with them. So let's add some, let's add an add function. Well maybe we'll call it an append function, that sounds a little more [[Python (Programming Language)|Python]]-ic. And what would also be nice is if we had some sort of wrapper around our node class that represented the list itself, a collection of nodes. And this could be something that says this is the root or the head. This is where my linked list starts, this is where it ends.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/building-a-linked-list-in-python?u=76281980&t=93)** Something that can maybe hold [[Metadata]] about our list, like its length. So I'm going to make a class called LL, which stands for linked list. And I'm going to give it an attribute called head. Self dot head, we're going to start it out with none. So we could actually have an empty linked list or a linked list that has no elements at all, not even a head. Okay, so now we're going to add our append function here. Def append and we're going to give it some data to append. There are a couple options, we could pass in the actual node object, or we could just pass in the data and make a new node. I'm going to go with that second option. Okay, so we've made our new node. So we want to add our new node. We want to append it to the end of our list. Well, how would that work? We have to traverse the whole linked list in order to find the end. So I'm going to make a variable called current to keep track of where we currently are in the list and where we're traversing. And this is going to be equal to self dot head to start out with. Okay, so while current dot next, while there's a new place to go, we move forward. Current is equal to current dot next, so we're moving along the list. Finally, if we exit this while loop, that means that current dot next does not exist, that the node we're currently on has no next node, and we've reached the end of our list. So at this point, we can set our new node
>
> **[3:07](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/building-a-linked-list-in-python?u=76281980&t=187)** to be the next of the current node. So current dot next equals new node. Okay, so there is one other case we're missing. What if our head itself is none? We can add a special case for that. If not self dot head, self dot head is equal to new node. We need to make sure we move that line up here and then return. There's no need to do anything else here. This is a special case. Okay, now what else might we need to help us on our journey of exploring these linked lists? Well, it might be nice if we could see them. So let's add a print function to our LL class. Def print. First, we need something to keep track of the values that we're going to print. Now coming to do something a little bit silly and wasteful and create a list object to store these values in. And here's the thing, printing a linked list is a little bit silly and wasteful. You don't generally do that. This function is purely for educational purposes so we can visualize these. In real life, you would never write a print function on your linked list. So next, we're going to traverse the list in a slightly different way than we did up here. So same line, current equals self dot head. But instead of saying while current dot next,
>
> **[4:41](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/building-a-linked-list-in-python?u=76281980&t=281)** we're just going to say while current. Then for each current node, I'm going to append current dot data. And then current is equal to current dot next. So if the current node exists, I grab current dot data and then go to the next node. And when we leave the loop, we know that we've reached a link that no longer exists. And so we print our output joined with arrows. And actually I want to do something because this output is integers and I want to make sure this is a string, so I'm just going to append the string of the integer there. So that should work a little bit better. So these are two slightly different ways of traversing the same linked list. Here, we're really interested in the pointers. We want to make sure we're on that previous node so that we can set the next one to the new node. And here we're really interested in the data on the current node that we're on. So finally, let's try this all out. LL is equal to LL. make a new linked list. LL dot append, append one, LL dot append two. LL dot append three. Finally, LL dot print. We can save that and then go down here to run it and look at that. We have our linked list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Metadata]] (1)
> **CLI Commands:** node (24), make (10), python (1), find (1)
> **Definitions:** is a  (6)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Finding a middle ground](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-finding-a-middle-ground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-finding-a-middle-ground?u=76281980&t=0)** - [Instructor] Are you a Linked Lists master? Well, let's not get ahead of ourselves. That was a little fast and slow pointer joke. Get it, like get ahead of yourself? Okay, let's just look at the solution. We have our function get_midpoint. It takes in a linked list object and needs to return the data associated with the midpoint. So with all of these challenges, you really just want to write it out. We know that we need a slow pointer and we know that we need a fast pointer that moves twice as slow as the slow pointer. So we just write it, slow = ll.head, fast = ll.head. Then we're going to need some sort of loop to keep us traversing through the list. And we know that this loop needs to depend on something about the fast pointer. We want to watch the fast pointer and stop when the fast pointer reaches the end of the list. So at first, I just said while fast.next. So while we're not at the end of the list. Of course this is a little bit dangerous because we might actually get into a situation where the fast node itself is null. So I'm just going to add a check there while fast and fast.next. Then we increment everything, slow = slow.next, and then the fast pointer races ahead using fast.next.next. Finally, the fast pointer has zoomed ahead
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-finding-a-middle-ground?u=76281980&t=95)** and reached the end of the list. Our while check fails. We exit the while loop. And we return whatever data is currently associated with the slow pointer. Let's check it out. And it works. This approach of using two different pointers and returning the data from one pointer while checking the conditions of the second pointer can be used for all sorts of tricky interview questions. So if you're in a [[Job Searching]] scenario, I do recommend you study it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Job Searching]] (1)
> **CLI Commands:** node (1)
> **Code Identifiers:** get_midpoint (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Building Functionality

[↑ Back to Table of Contents](#table-of-contents)

#### [Searching](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/searching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/searching?u=76281980&t=0)** - [Instructor] Earlier I discussed some pros and cons of linked lists versus [[Python (Programming Language)|Python]] lists, arrays, tuples, et cetera. Well, one thing is for sure, in an unsorted linked list, searching takes the same time as in any other unsorted linear data structure. You just have to go through it one element at a time and check whether you found your data or not. So let's get to it. I wrote some code down here that creates a randomly shuffled linked list with the value zero through nine, perfect for searching. And if we print this out, you can see, there you go. There's our random linked list. So next I'm going to add a search method to the linked list class, and I'm going to do that right above the print method here. Def, search, and we pass in some data that we want to search for. So this is going to return a Boolean, whether the value is found or not. And we're going to use a very similar traversal technique to what we used earlier to print the list. So first we set current equal to self.head. Then while there exists a current node, we check to see if the data in that current node matches the data that was passed in. If current.data equals data, let's return true. Great, we found it, then we advance to the next node if we haven't found it yet, current equals current.next. Finally, if we exit the while loop, we know that our data doesn't exist, and we return false. And we can go check that out down here. Let's try to find the value five.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/searching?u=76281980&t=98)** Great, it found it. So there's another way to write the search method that I want to talk about because it's a topic that's actually relevant to the whole [[Representational State Transfer (REST)|rest]] of the course, and that is recursion. So we can write another search method in our LL class. It's really just a wrapper around the node class. Return self.head.search, data. Okay, then if we go up to the node, we're going to write a recursive search function. If self.data equals data, return true. Else, self.next.search, data. Return. And of course we want do if self.next, there. Okay, so that's a recursive search function, and you can see that it's recursively calling the search function on the next node. So this works, this works really well. It's super slick, it's clever. There's only one little problem. Python's default recursion limit, its maximum stack size, is a thousand. That means that if your list is longer than 1000 elements long, this approach isn't going to work. All right, so we can do this to fix it. Import sys. Sys.setrecursion limit 2000.
>
> **[3:06](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/searching?u=76281980&t=186)** Okay, great. All of our problems are solved because we made the recursion limit 2000. No, this is not a robust extensible enterprise solution. In addition, each time you recurs the stack itself takes time and memory to create and then pop back out again. It's much faster to use an iterative while loop than a recursive solution. Now if you work with another data structure like trees, recursion might make sense because trees are typically very short. The problems are a little more complicated and difficult to visualize without recursion and so it works really well there. But with linked lists, you really want to be using iterative solutions. So I'm just going to comment out this recursive solution right now. You can take a look at it later if you want, but there you go. One more note about the search function is that it returns a Boolean, and this may or may not be useful for you. Why do we care whether or not the number of four is in this list? But one thing it could do is say, return additional information or documents about this node. So for example, this data could really be a key and then you could have self.additional_stuff that you're really looking for. And that search function would actually look for data by its key. It really depends on what you're using these link lists for. Regardless of what you're searching your link list for, the basic technique of setting the current to head, checking in your while loop,
>
> **[4:40](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/searching?u=76281980&t=280)** and then moving to the next node remains the same. And in fact, this is a pattern that, as you might guess, we're going to see a few more times in this course. All right, so let's try this out. You can see a value like five is found in our list. Let's try 10, which should not be found. And there we go. Mission accomplished.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (8), python (2), find (1), make (1)
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** additional_stuff (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Deleting Nodes](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/deleting-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/deleting-nodes?u=76281980&t=0)** - [Instructor] Linked lists, like many [[Data Structures]], are extremely forgiving. Don't like a node? Just delete it. It's easy. I'll show you my favorite way to do it. There are actually many ways to delete a node, but this particular way, I think, is a good combination of relatively few lines of code, but also verbosely written enough that all the cases are laid out nicely so you can really see how it works. So first case, here's the data we want to delete from our list. Do we have any elements in the list? "If not self.head:", the list is empty, nothing to delete here, we can all go home. All right, the second case, which is also kind of a special one, the data in the head node itself needs to be deleted. "If self.head.data == data: self.head = self.head.next" and we "return". So here we're actually replacing the head itself with the next value. The second value in the list now becomes the first value, there are no longer any references to the old head node, it goes flying off into space and hopefully it gets picked up by the [[Python (Programming Language)|Python]] garbage collector at some point. Now that all of the edge cases are taken care of, we can really start cruising. The traversal should be very familiar to you by now. So set the current node "= self.head while current.next:", we're going to do some "stuff here". Then "current = current.next".
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/deleting-nodes?u=76281980&t=98)** Okay, so "stuff here". What stuff do we want to do here? Well, we already know that the head node itself doesn't match our data, we don't need to check it. And the strategy is actually going to be to look ahead a little bit, check to see if "current.next.data = data". So we know that current.next exists and we can check its data because we're checking "while current.next", we want to check out its data. So if current.next.data is equal to data, we found our match in the very next node, and we know that the next node needs to be deleted. So the node that we're on right now, that's the node before the match. And we're going to take this link and just skip over the next node, the node that should be deleted. And this causes that next node to lose all connections to the link list. That node goes flying off in a space to be picked up by the Python garbage collector and mission accomplished. So "current.next = current.next.next" and "return". No reason to keep iterating through that list. So if you don't return here, what will happen is that always traverse the entire list. Anytime that you find a node with matching data, of course, it's going to get deleted. And that might be a thing that you want. Maybe there's an application where you want to sort of scan the whole list and find and delete any matching nodes that you find in the list.
>
> **[3:11](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/deleting-nodes?u=76281980&t=191)** But for us, what I want to do right now is just find the first instance, delete it, and then return. So let's try this out on a linked list that I've made down here just for the occasion. We have all the elements in order, no randomization involved, and we want to delete a node from the beginning, so let's do "ll.delete(0)", we want to check out our edge cases, let's delete a node from the middle, and then let's delete a node from the end and then print it out again. And there you go: A significantly shortened list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Structures]] (1)
> **CLI Commands:** node (18), find (4), python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Inserting Nodes](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/inserting-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/inserting-nodes?u=76281980&t=0)** - [Instructor] So we've appended nodes to the end of our linked list. But how do we insert a node in the middle or even the beginning? And this is another case where linked lists generally outperform traditional lists. In a traditional list, you have to shuffle all the subsequent elements around to make room for a new one. In a linked list, you just write the new element to memory anywhere you want, and update a single link to point to it. Of course, there is one catch, there's always a catch, we do have to traverse to the point in the list where we want to insert it, we can't just hop to a random point in memory, but where do you want to insert it? Well, there are a few possibilities, but I want to introduce you to the concept of a sorted linked list. So we're going to make a linked list where every item must be in numerical ascending order. And this means that our insertion function needs to look for the right spot to insert the node, so it will go along until the next node has a greater value than itself, and then it inserts the new data there. So let's write this up. This new insertion method is going to look similar to the delete method here. So make the new method, call it insert self, and then we're going to insert some data. Let's just start by making a new node using this data. And there are a few cases we need to handle, so I'm just going to create this node at the top so we have it ready to go. In the first case, that's where we have an empty list and the head doesn't exist. And of course, we need to check, if not self.head, self.head = new_node, really easy case,
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/inserting-nodes?u=76281980&t=96)** and then just return. The second case, what if the head data is greater than the data passed in and we actually need to replace the head with a new node? So if self.head.data > data, and we know that head exists because otherwise we would've handled it up there and returned, self.head = new_node and return. And as you can see, these two cases are very similar to the delete method here. We check to see if the head exists and then we check to see if we need to replace the head. And now as you might guess, we're going to just traverse through the list and handle the [[Representational State Transfer (REST)|rest]] of the cases. All right, so current = self.head while current.next, do something and then keep traversing, current = current.next. Okay, so what is the something that we do? Well, in our delete method, you can see, we check to see if next.data is equal to the data that we're looking for, and at that point we want to delete it. So as you might guess, down here, we're going to do an if statement, if current.next.data > data, just like in the delete method, we did a deletion. At this point, we're going to do an insertion. We say new_node.next = current.next, and then current.next = new_node and then return. Okay, so that looks pretty good,
>
> **[3:14](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/inserting-nodes?u=76281980&t=194)** but there is a case that we're still missing and that is if we need to insert the new node at the end of the list. So if this new data coming in is bigger than anything else we have at the list, we need to insert it at the very end and we can handle that case just by saying current.next = new_node outside of our while loop. So we know if we've reached the end of our while loop, we're at the very end, and if we haven't inserted and returned already, we just stick that new node at the end. Okay, so there is a slightly slicker way to write all of this. I'm going to write it like this while current.next and current.next.data < data, then we can get rid of this if statement, take that code out, we just keep traversing and then put this outside of our while loop entirely. So all this while loop is saying is keep going while there's still data and while that data is less than what our current data is. And finally, we know that we need to insert ourselves at this location if we've exited for whatever reason, either we've run out of list or the data ahead of us is larger, now we need to insert ourselves. Now current.next might be none,
>
> **[4:48](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/inserting-nodes?u=76281980&t=288)** but that is perfectly fine, we're at the end of the list, doesn't matter, now we're just sticking that new node at the end of the list. So we can use the same code regardless of whether we're in the middle or at the end of the list. Which means that we just add both checks in our while statement, doesn't matter. So I have some randomly shuffled elements down here, and for e in randomly shuffled element. I'm just going to say ll.insert(e). And then I'm actually going to print that at each stage so you can see that printout. All right, so that looks fairly orderly. In the next challenge, you're going to be doing some more work with sorted lists. So get those thinking caps on and sort yourself out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (9), make (3)
> **Code Identifiers:** new_node (5)
> **Definitions:** means that (2), is a  (2)
> **Analogies:** similar to (1), just like (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Removing duplicates](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-removing-duplicates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-removing-duplicates?u=76281980&t=0)** - [Instructor] All right. Hopefully this challenge wasn't too crazy. How are we feeling? Everyone good? Remember, if you're feeling stuck with any of these challenges, just start writing. All of these lists have a print method. Try something, print it out, see what happens. Keep going. So I'll show you what I did. Here we have the remove_duplicates function. It takes in a linked list. We're going to start with a very familiar pattern, current = ll.head. Now the question is, what do we put into our while loop to keep us moving ahead? Well, what I want to do is look ahead at the data in the next node. And if the data in the next node equals the data in my current node, then I'm going to delete the next node. Remember, in order to delete a node in a linked list, you need to currently be on the previous node. So we want to be looking ahead. So in this while loop here, I'm going to look ahead and check current.next. So while there's a next node, keep going, then if the data in the next node equals the current data, whoops, we've found a duplicate. So how do we delete it? Set current.next = current.next.next. So we just skip over it. Now there is a possibility that current.next.next is none or null. And that's why we have this check here to see if current still exists before we try calling next on it.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-removing-duplicates?u=76281980&t=93)** So that's just a safety check. Now finally, of course, we want to traverse, keep going to our next node. There is a catch though, and that's why I have this else statement here. If we've deleted the next node, we want to get a chance to compare our current node against the new following node. So we do actually want to stay put for an extra loop to check to see if there were three or more of the same value in a row. We only want to move up a step, we only want to update current, if we didn't perform a deletion and everything looks good. So let's run this and check it out. Alright, and it does look good.

> [!info]- Semantic Content
>
> **CLI Commands:** node (12)
> **Cross-References:** in the next (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** remove_duplicates (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Variations on a Theme

[↑ Back to Table of Contents](#table-of-contents)

#### [Circular Lists](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/circular-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/circular-lists?u=76281980&t=0)** - [Instructor] This chapter I call variations on a theme because we're going to discuss different types of linked lists. Every type of linked list consists of zero or more nodes connected by links or pointers that allow them to form chains across memory. But what exact shapes those chains take and the rules that govern traversing their pointers are up to interpretation. For example, the circular linked list. What would happen if we took a linked list and made the last link point back to the head? Like the ouroboros of ancient philosophy, it would form a circle. In a circular linked list, there are no null next nodes. It's simply not allowed. You have to be very careful when traversing circular linked lists because if you don't check to see if you reach the head again, you may enter an infinite loop. So let's go to the code and start playing around with these. The easiest way to demonstrate a circular linked list is with our regular linked list class. So here I've created a new linked list with random elements in it. All I'm going to do is find the last node in the list and then make that point back to the head. So current is equal to ll.head while current.next ll current equals current.next.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/circular-lists?u=76281980&t=79)** And then finally current.next is equal to ll.head. Okay, so now we've created a circular link list, and if we call ll.print again and then run this, you see it prints out the first time and then gets caught in this infinite loop when it's trying to print the second time. So I'm actually going to manually stop that. All right? We don't want that to run forever, so this is not a great situation to be in. So let's make an actual CLL class that can handle situations like this, class CLL, and that of course stands for circular linked list. Give it a constructor. Okay, so circular linked lists can be empty just like any other linked list, in which case the head is none. In addition to a head, circular linked lists often contain tails. So the tail is the node that comes directly before the head or sort of at the end, such as it is of a circular linked list. So the tail.next will always point back to the head unless of course, they're both empty. So it isn't strictly necessary to keep the tail element around but it does allow you to easily insert elements before the head, which we're going to see in a minute. Let's add an append function. Append. So the first case to check is if we have an empty list, if not self.head. And if our list is empty, this is really easy, self.head equals Node data, okay?
>
> **[2:58](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/circular-lists?u=76281980&t=178)** Now, because it's a circular list and we do have a tail, we have to make sure that everything is linked up. Remember, even with one element, there are no empty links allowed. So self.head is equal to that Node. Self.tail is equal to self.head because the tail is the same as the head here. Self.head.next is equal to self.head. And then we return. I know this looks ridiculous, but this is what we have to do. Note that I don't have to set self.tail.next to anything because self.tail is already set to the self.head and we've set the next pointer on the head. So therefore we've also set it on the tail. So the nice thing now is that this is our only special case. Everything else is just inserting a node into a non empty circular list. The goal here is to insert between the tail and the head, turning the inserted node into the new tail. So self.tail.next is equal to Node data. I'm actually going to take this out. I'm going to call it new_node. New_node. Then I'm going to put that up at top there. This is going to save us a little bit of writing and just make it look a little nicer. Then new_node.next is equal to self.head. self.tail is equal to new_node. Finally, let's add a print function. This is going to be a little bit of a different algorithm from the print function
>
> **[4:31](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/circular-lists?u=76281980&t=271)** that we wrote in the basic link list. So let's just write it from scratch. So first we want to check the special case, an empty list. If not self.head, we do nothing, we just return. Then we need to make our output list. So output, it's just a new list. Current equals self.head. That old pattern, again, while current.next is not equal to self.head. So directly comparing those nodes to see if we reached the head again. Remember, we don't want to get stuck in an infinite loop. Output.append string value of current.data, current is current.next. So finally, we need to make sure that we append the tail data because we haven't done that yet. Output.append, self.tail.data. Finally, we print this all out, join it together, output, and then just to sort of say, hey, this is a circular linked list and it keeps going forever. Let's add another little arrow at the end and then some ellipses. Okay, and let's try this out so we can append all those to our new CLL. Let's call it a CLL.
>
> **[6:03](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/circular-lists?u=76281980&t=363)** And then beautiful. All right. Circular linked lists work well for situations in which you're continuously iterating through a repeated and potentially dynamic cycle of items. For example, if you're creating players in a game, each node could represent a player and then you iterate to each player as their return in the game occurs. Similarly, recurring tasks in a to-do list or certain queue implementations also take advantage of circular lists. And some of the concepts that we learned here, such as the tail pointer is not unique to just the circular list. So you can actually use a tail pointer in any linked list. And in fact, we're going to circle back around to this concept of a tail pointer in the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), make (6), find (1)
> **Env Vars:** cll (4)
> **Analogies:** for example (2), just like (1), such as (1)
> **Code Identifiers:** new_node (3)
> **Definitions:** stands for (1), is a  (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Doubly Linked Lists](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/doubly-linked-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/doubly-linked-lists?u=76281980&t=0)** - [Instructor] The linked list that we've been working with is also called the singly linked list. This is because it's often compared to its relative, the doubly linked list, or DLL. The doubly linked list contains both next and previous pointers in order to let you traverse it both ways. This obviously makes it easier to move back and forth and also to implement certain [[Algorithms]]. For example, to delete a node in a singly linked list, we need to keep a reference to the previous node that linked to the node we wanted to delete. With a doubly linked list, all you need is the node you want to delete, and you can move back and forth to update the links as needed. So let's write this up. I'm going to make a class called DLL, and this is going to look a lot like the singly linked list at first. Just contains a head, which is none to start out with, but we do need to create a new node class. So I'm going to call that Dnode to differentiate from the singly linked node class. Node, okay, and so what kind of attributes do we need in here? Well, we're going to have data. Oh, we need to pass the data in, and we're going to have both a next and a previous pointer. So self.next starts off as None, self.prev = None. Okay, so the first thing I want to add into our list class here is an append method. So passing some new data, make it a new node,
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/doubly-linked-lists?u=76281980&t=95)** and we need to make sure we use the DNode class for this. Okay, and the [[Representational State Transfer (REST)|rest]] of this is all going to seem pretty familiar. So if self.head is none, self.head = new_node, and we're done. Next, we can start iterating until we find the end of the list. So current = self.head while current.next. Keep iterating. Finally, we've reached the end of the list. The new next node is going to be new_node. Current.next is equal to new_node. And then because this is a doubly linked list, we need to hook it up both ways. So new_node.previous is going to be current. Okay, so now we can test this out by creating a new doubly linked list out of these elements I have here, just appending 0 through 9, for e in elements, dll.append e and then dll.print. And just one thing I want to do here, I'm going to make this extend our regular linked list class. And this is nice because many of the methods in the length list class will still work in the doubly linked list class because obviously that next pointer still exists. So things like print, we don't have to do any modification to. All right. Now let's write a delete method. And there's actually something special I want to do
>
> **[3:11](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/doubly-linked-lists?u=76281980&t=191)** to make this a little bit easier for us. I want to modify the search method of the base linked list class. So instead of returning true or false, I want it to return the node instance that was found. So return current, otherwise return none. Oops. Okay. And it's worth noting that a node instance will always evaluate to true in a Boolean statement and none will evaluate to false. So if you had any code that was using the search method already, it'll still work. But now we've made it a little more useful for our doubly linked list. So over in the delete method for our doubly linked list, we have our append. Now we're adding delete. And here's the data we want to delete. I'm actually just going to search for this node. So if it's not found in the list at all, if not node, we can just return. Next, we have a special case where the node is the current head. So if node equals self.head, self.head equals self.head.next, and it's been effectively deleted. If a link to a previous node exists in the node that we're trying to delete, we can follow it and make sure it skips over the deleted node. If a next link exists, we do the same thing. Node.next.prev equals node.prev. All right, and that's it.
>
> **[4:49](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/doubly-linked-lists?u=76281980&t=289)** Let's try deleting a few elements from our linked list to check it out. Let's delete one from the beginning and one from the middle, and one from the end just to test all our edge cases. Oh, and finally, print it out again. Alright, looks like it worked well. I hope you have fun with these. You know how that old jingle goes? Double the adventure, double the twists with double linked lists.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (20), make (6), find (1)
> **Code Identifiers:** new_node (4)
> **Env Vars:** dll (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Orthogonal Linked Lists](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/orthogonal-linked-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/orthogonal-linked-lists?u=76281980&t=0)** - [Instructor] Even with our circular and doubly linked lists, they still moved in a line. This next structure really stretches the limits of what a linked list is, but it's a fun one to explore, and that is the orthogonal linked list. In an orthogonal linked list, you're not limited to next and previous, but you can go up, down, left and right. As you might guess, there are many, many ways these orthogonal lists can be defined and implemented and the things that they can be used for. But I want to show you a specific example of using an orthogonal link list to represent data in a sparse matrix as demonstrated in Donald Knuth's "The Art of Computer Programming: Volume 1." This very hefty book was first published in 1968, but the techniques that Knuth teaches are extremely relevant today, and if mathematics and logic remain the same, they will be relevant forever. A sparse matrix is a matrix where most of the values are zeros, and you don't want to have to store all of those zeros. You only want to store the values with non-zero data, and you want to store them in such a way that they're easy to traverse and operate on in order. So enter the orthogonal linked list. The basic strategy we're going to use is this. Store two head lists, regular [[Python (Programming Language)|Python]] lists called row head and column head. Now, you could make these head lists linked lists if you want, but they're going to remain the same size. We don't need to modify them at all, and it's really convenient to be able to jump
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/orthogonal-linked-lists?u=76281980&t=94)** to an arbitrary location within them. So they're not linked lists. These head lists contain what I'll call ONodes or orthogonal linked list nodes. These contain a down pointer and a right pointer. So why don't they contain up and left pointers? Well, they could, but then we'd have to link them back and forth among all the neighboring nodes, and that would be equivalent to a doubly linked, orthogonal linked list. We really only need the singly linked version for what we're doing. The ONode contains the following information. Data, obviously, this is the non-zero numerical value in our sparse matrix. Row, this is the row number in our sparse matrix. Col or column, and this is the column number in our sparse matrix. Down, the down link to the next node and right, the right link to the next node. Okay, so let's say we're trying to make a sparse matrix that looks like this. That's a 4 x 5 matrix with 20 elements, and only 4 of them are populated by non-zero values. So we would represent it like this. We define our matrix with zero zero being the top left corner. We have our column head and row head lists with their empty ONode elements, and they don't contain any data themselves. They never get modified, but they serve as sort of entry points into these rows and columns of the sparse matrix. In the science of linked lists, these empty nodes or dummy nodes are called sentinel nodes.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/orthogonal-linked-lists?u=76281980&t=188)** You don't touch them, but they hold your place and can make certain [[Algorithms]] easier. Then each node is slotted into its correct row and column with the pointers connected to any other non empty values in that row or column that might follow it. It's pointed to either by a sentinel node or a non-zero value that precedes it in that row or column. Alright, so that's a lot of stuff, but let's go to the code and sort of cement some of these ideas. I'm going to go down here and we're going to start by defining an ONode class, class ONode, and what sorts of things do we want in our ONode class or orthogonal node class. Well, we're going to have some data and that represents the non-zero value in our sparse matrix. And we're going to have a row position and a column position, and that's the actual row and column in our sparse matrix. So self.data equals data, self.row equals row, self.col equals col, self.down equals none. So these are our pointers and self.right equals none. Alright, now let's create our OLL or orthogonal linked list class. So we're going to start off by passing it a total number of rows and number of columns. So self, rows, cols. Now these won't be used directly, they're not going to be attributes, but they will be used to create our row head and column head lists of sentinel nodes.
>
> **[4:43](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/orthogonal-linked-lists?u=76281980&t=283)** So self.row head, it's a new list. We're going to make an ONode and leave that blank. Leave that empty for now. Four i in range, 0, rows. Okay, so what do we put in here? Well, the data is going to be none. It's just a sentinel node. Then we're going to have i, that's going to be the row number. And then what do we want for the column value? Well, I'm going to do negative 1. And the reason I do this is because if we are in the zeroth column, that's in a special position in our sparse matrix, but this really comes before the zeroth column. It's at the negative first column in a sense. Okay, so I'm going to use negative 1 for that column position. Now I just copy and paste this and just change row to column and cols right there. Now I need to reverse the order here, so negative 1, and then i, okay, now what we want to do is create an insert method. Okay, now, previously when we made insert and append methods, we passed some data in, but here we want to just make a new node, and that's because we have row and column information associated with this as well as data. So it makes sense just to pass a whole new node object rather than constructing it in here. And we can think of this as two insertions. So one into the row link list using the right connectors and the other into the column link list
>
> **[6:20](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/orthogonal-linked-lists?u=76281980&t=380)** using the down connectors. And I'm going to be a little bit tricky and actually copy paste some of our insert code here. Now, we only need this part, we don't need the base cases here, and that's because we already have the sentinel nodes in the row head and column head. Remember I said those guys make some of these algorithms a little bit easier, and this is exactly why. To be fair, we do need to replace a lot of the words here. So current is actually going to be equal to self.row_head, new_node.row. So we're going to the row head and we're jumping right to that row position to get the correct row list there. Then what we want to do is we want to arrange all the nodes in this row according to their column numbers rather than by the data. So while current.right and current.right.col is less than new_node.col, okay? So while current.right, there's still more nodes here to look at, and the right column is less than our new node column, we keep moving to the right. So current is equal to current.right? And we just replace the [[Microsoft Word|word]] next with the word right, and then we should be good. Now to do the insertion into the column, I'm going to just do the exact same thing. Replace the word row with the word col, col.
>
> **[7:56](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/orthogonal-linked-lists?u=76281980&t=476)** Replace the word write with the word down, replace col with row, down, down, down, down, okay? And that's our entire insert method. Okay? So now I want to write a print method here, and the easiest way to print is going to be to iterate through the rows and then just print one row at a time. Okay, so for row in self.row_head. I'm going to pre-populate the output with a whole bunch of zeros. So this is a sparse matrix. There are a lot of zeros that need to be printed, so we're just going to do that first. And we want the number of zeros to be equal to the number of columns because we're printing a single row and going across columns, times length, self.col_head is the easiest way to do that. Then we iterate through, so current equals row while current.right, current equals current.right. Then at the correct position in our output array, we just update the data, we change the zero to whatever the actual data is at that position in our sparse matrix. So output at current.col is going to be equal to current.data. Finally, we print the row,
>
> **[9:28](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/orthogonal-linked-lists?u=76281980&t=568)** and this is going to be outside of our while loop, and I'm going to use a space as a separator instead of the arrows that we were doing before, because we want to represent this as a matrix of values rather than a linked list per se. Okay? So let's try this out. I have down here an ASCII art representation of our sparse matrix. It is 4 rows by 5 columns, and then we populate all the values. So we have that 3 at the 0, 0 position, 4, the 0, 4 position, et cetera. And let's try this out. Looks great. And you can see that those algorithms and principles from 1968 still work today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[Algorithms]] (3), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (9), make (6), python (1)
> **Code Identifiers:** row_head (2), new_node (2), col_head (1)
> **Env Vars:** oll (1), ascii (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Fixing a doubly-linked list](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-fixing-a-doubly-linked-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-fixing-a-doubly-linked-list?u=76281980&t=0)** - [Instructor] These corrupted lists are no match for our [[Python (Programming Language)|Python]] skills. With enough time and fiddling around with them, at least. This is one where a slicker solution is definitely possible, but I just went ahead and wrote it. Sometimes just sitting down, getting a cup of tea and brute force writing it out gets the job done. So we have this aptly named function called list_fixer, it fixes lists. It fixes the doubly linked list, which is its only argument. Now one of these pointers in the doubly linked list is broken, and our list is going to be shorter in the broken direction than it is in the unbroken direction. So first thing, the really dumb brute force thing that I want to do is get a list of these nodes going both forwards and backwards, and then check them both out. So I made a nodes_forward list, just a regular Python list. Set current equal to dll.head. This should be a pretty familiar pattern, while current: nodes_forward.append(current). So we're just adding the node, the node object itself, not the data, important to note, and then current = current.next. So we collect a list of all the nodes going forward. And then I'm going to get a list of all the nodes going in the backwards direction. So, when I wrote this, all I had to do was copy and paste the nodes_forward code, change the [[Microsoft Word|word]] forward to the word backward, the word head to the word tail,
>
> **[1:32](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-fixing-a-doubly-linked-list?u=76281980&t=92)** and the word next to the word previous and done. So it was really easy. I also printed these two lists out down here so that when we run this, I'm just going to run it right now and look, a little sneak peek, I did get it right, but you can see that going forward, the list is actually broken right here. And then going backwards, we have the full list. Okay, so going back to the code, we need to figure out which one of these is longer, which is the correct full list of nodes to use. So I'm just going to call this all nodes and that's the longer list of nodes and I'm going to set it to forward. But if the length of nodes backwards is longer, then I want to set all nodes to nodes_backward. But of course, nodes_backward is backward because we went through the list in the opposite direction. So I need to use this little Python list slicing syntax trick to iterate through the list in the -1 step size in order to flip the list around. Okay, so now we have a guaranteed uncorrupted list of all of our nodes in the forward direction. And my goal here is just to walk through them and update all of the links in our doubly linked list in order to fix any links that might have gotten corrupted. So how do we do that? Well, let's start writing it. for i, node in enumerate(all_nodes). Let's just step through it and fix things as we go.
>
> **[3:05](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/solution-fixing-a-doubly-linked-list?u=76281980&t=185)** So here, we're setting node.previous to the previous all_nodes in our list. However, this isn't going to work out so well if i is equal to 0 because i -1 is going to do the wrong thing. So we only want to do this step if we are not at the very beginning of our list. Similarly, if we are not at the very end of our list, we want to set the next pointer to be the next node at the i+1 index. And, as you can see, over here, look, it worked. Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** node (5), python (3)
> **Code Identifiers:** nodes_forward (3), nodes_backward (2), all_nodes (2), list_fixer (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-data-structures-linked-lists-21039506/next-steps?u=76281980&t=1)** - Well, that's it. I hope you had as much fun learning about linked lists and all their variations as I did creating this course. The linked list is not just a data structure. It's a programming concept that you'll find in many [[Algorithms]] you learn and problems that you encounter throughout your career, not just in the job interview. So if you're looking for another data structure that fills the voids in your life, I'd also suggest my course about trees in [[Python (Programming Language)|Python]]. That's trees, the data structure, not just the arboreal plant. Trees are dynamic [[Data Structures]] similar to linked lists that fit nicely in the hierarchy of computer science data structures. I hope you'll continue to explore with me. Well, that's all for now. I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2), [[Algorithms]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - well (1)


## Instructor

- [[Ryan Mitchell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-data-structures-linked-lists-coderpad-3862042)

## Skills Covered

- Data Structures
- Python (Programming Language)

## Path Context

### In [[Master Your Python Skills]]
← [[Python Data Structures- Stacks, Deques, and Queues]] | **5 of 11** | [[Advanced Python- Practical Database Examples]] →

### In [[Master Python for Data Science]]
← [[Python Data Structures and Algorithms]] | **5 of 8** | [[Python Data Structures- Stacks, Deques, and Queues]] →

## Appears In

- [[Master Your Python Skills]]
- [[Master Python for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Structures- Trees]] — Python (Programming Language), Data Structures
- [[Python Data Structures- Stacks, Deques, and Queues]] — Python (Programming Language), Data Structures
- [[Python Data Structures and Algorithms]] — Python (Programming Language), Data Structures
- [[Practice It- Python Data Structures]] — Python (Programming Language), Data Structures
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)

---

[↑ Back to top](#)