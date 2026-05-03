---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-data-structures-trees
url: "https://www.linkedin.com/learning/python-data-structures-trees"
duration_minutes: 76
duration: 1h 16m
level: Intermediate
updated: 2/25/2021
learners: 229277
skills:
  - Data Structures
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/python-data-structures-trees-2834010"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH_Em7BoVMKfQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614101500291?e=2147483647&amp;v=beta&amp;t=b5l6sKjpqIUjZ3K0Z7Yz5lWIsDTpbhLOG2jcSoXakeY"
linkedin_topic: Database Management
learning_paths:
  - '[[Master Python for Data Science]]'
prev_courses:
  - '[[Python Data Structures- Stacks, Deques, and Queues]]'
next_courses:
  - '[[Advanced Pandas]]'
path_nav: '[{"path":"Master Python for Data Science","position":7,"total":8,"prev":"Python Data Structures- Stacks, Deques, and Queues","next":"Advanced Pandas"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/data-structures
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Python%20Data%20Structures-%20Trees.md)

![Python Data Structures:  Trees](https://media.licdn.com/dms/image/v2/C4E0DAQH_Em7BoVMKfQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614101500291?e=2147483647&amp;v=beta&amp;t=b5l6sKjpqIUjZ3K0Z7Yz5lWIsDTpbhLOG2jcSoXakeY)

# Python Data Structures:  Trees

> What are trees, in Python, and how do they fit in with other data structures such as linked lists and graphs? In this course, instructor Ryan Mitchell discusses binary search trees (BSTs) and what you can do with them in a real-world context. Ryan shows you how to build a basic tree with just a few lines of Python. She steps through how to search and traverse a tree, as well as how to print a tree

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees) | 1h 16m | Intermediate | 229K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Getting started with trees](#getting-started-with-trees)
  - [What you should know](#what-you-should-know)
  - [BSTs and other trees](#bsts-and-other-trees)
- [**1. Navigating Trees**](#1-navigating-trees) (7 videos)
  - [Building a basic tree](#building-a-basic-tree)
  - [Searching a tree](#searching-a-tree)
  - [Traversing a tree](#traversing-a-tree)
  - [Getting the maximum height of a tree](#getting-the-maximum-height-of-a-tree)
  - [Getting all nodes at a particular depth](#getting-all-nodes-at-a-particular-depth)
  - [Challenge: Printing a tree](#challenge-printing-a-tree)
  - [Solution: Printing a tree](#solution-printing-a-tree)
- [**2. Modifying Trees**](#2-modifying-trees) (6 videos)
  - [Adding nodes](#adding-nodes)
  - [Deleting nodes: Theory](#deleting-nodes-theory)
  - [Deleting nodes: Code](#deleting-nodes-code)
  - [Detecting unbalanced trees](#detecting-unbalanced-trees)
  - [Challenge: Adding a balance indicator to the printed tree](#challenge-adding-a-balance-indicator-to-the-printed-tree)
  - [Solution: Adding a balance indicator to the printed tree](#solution-adding-a-balance-indicator-to-the-printed-tree)
- [**3. Rebalancing Trees**](#3-rebalancing-trees) (5 videos)
  - [Introduction to rotations](#introduction-to-rotations)
  - [Rotating trees in Python](#rotating-trees-in-python)
  - [Fixing a tree with multiple points of imbalance](#fixing-a-tree-with-multiple-points-of-imbalance)
  - [Challenge: Smarter automated rebalancing](#challenge-smarter-automated-rebalancing)
  - [Solution: Smarter automated rebalancing](#solution-smarter-automated-rebalancing)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with data structures](#next-steps-with-data-structures)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with trees](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=0)** - [Instructor] Whether you're looking to crack the coding interview, gain real skills once you've gotten the job, or just feel like there's some structure, maybe a data structure, missing in your life. You're going to want to learn about trees. When lists get too long, hash maps collide, and your graphs get tangled, trees are there to help sort out your data. (whooshing) We are going to do hands-on. I mean literal hands-on work with trees. Along the way, we'll be writing our own tree library in [[Python (Programming Language)|Python]] from scratch. You'll gain an intuitive understanding of the [[Algorithms]] that underpin one of the most commonly used trees in computer science, the binary search tree. I'll walk you through adding, deleting, traversing, and searching nodes, inspecting, rotating, and rebalance entries. By the end of this course, you'll have comprehensive knowledge that will allow you to work with and integrate these [[Data Structures]] into your own code. So, if you haven't used them before or just want to refresher you're in for a treat. (whooshing) Don't leave. Stop beating around the bush. I'll help you branch out. Just lumber on over to the next section. I promise this course won't leave you stumped.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Algorithms]] (1), [[Data Structures]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [What you should know](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=0)** - [Instructor] What can you expect from this course? So one of the goals of online learning is to make content accessible and useful to as broad of an audience as possible. So while we will be exploring some relatively advanced topics in this course, I've tried to use simple language and explanations throughout while avoiding technical jargon. To that end, I've also, de-emphasized some of the math when working with trees. Logarithms, and exponents, and sets often come up with trees, here I've tried to keep things really concrete and only use or imply a particular equation when it's necessary. And in such a way that it's understanding, isn't critical for the [[Representational State Transfer (REST)|rest]] of the series. And of course the jokes will be bad because I'm an engineer, not a comedian. If you're an experienced programmer just looking for a refresher, this course is for you. Feel free to fast forward for the specific subjects you need. You're not going to hurt my feelings. If you're new to programming, this course is for you too. Trees are so fundamental to computer science and a deep understanding of them will serve you well throughout your career. And if you're a non programmer, I'm glad you're here. Trees are conceptually fascinating, easy to work with and understand on paper. And if you get something out of the coding parts, that's cool too. Maybe you'll be inspired to pick up a little [[Python (Programming Language)|Python]] by the end. But for everyone to get the most out of the series, you really going to want to know basic Python, have Python three installed on your machine and ready to go. And we comfortable with concepts like classes, objects, methods, and especially pointers. I also recommend watching the linked list series first, or at least being familiar with linked lists
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=94)** and the practical aspects of working with them. And that's about it. Trees are what I like to think of as one of the simple or fundamental [[Data Structures]] of computer science, sort of like how mechanical engineering has the simple machines. You know, the wedge, the screw, the pulley, in software engineering, we have the graph, the link list, the tree. And I really hope that everyone gets a chance to appreciate and understand their beauty.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Data Structures]] (1)
> **CLI Commands:** python (3), make (1)
> **Speakers:** - [instructor] (1)

#### [BSTs and other trees](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=0)** - [Instructor] This section is perhaps the most crucial because it [[Forms]] the absolute foundation of everything we're going to explore throughout this course. But it's also one of the easiest, just a few basic concepts to grasp. And the first concept I want to talk about is the formal definition of a tree. Fundamentally, a tree is any data structure that follows these rules. It has to have exactly one root node. So if a tree has two root nodes, they can't be connected to each other so what you actually have is two trees. If a tree has no root node, then its children aren't connected to anything, or maybe it doesn't have children and then it's nothing. I don't know, anyway, let's just keep it simple. One tree, one root, one root, one tree. Two, each node can have any number of child nodes, can have zero children, in which case we call that node a leaf. It can have 100 children or even infinity children which I guess is a concept more useful for philosophers than software engineers but still this is a valid tree. And three, each node, except for the root, links to exactly one parent. Because if you have a child with two parents, you start getting loops, and remember trees don't have loops. Oh, and while we're at it, a node cannot be its own parent because that's just weird and unnatural. And that's it, any data structure that meets those three criteria is a tree. In practice, there are many different types of trees with additional rules that make them useful. For example, data. Each node in a tree usually has some kind of data associated with it.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=95)** In a directory structure, for example, this data would be the directory names and files, or other memory pointers to files at the leafs. There are also usually rules about how the nodes are arranged. For example, we can make a tree of words where all the children of the node A must start with the A. All the children of the node AT must start with the AT. And this is a special kind of tree called a trie. And it's actually often used for things like [[Microsoft Word|word]] look-ups. But the kind of tree that we're going to be talking about is the binary search tree. In a binary search tree, each node has only two children called a left and a right child. This is what makes it a binary or two, a two tree. Each node has a value associated with it. Any values to the left of the node must be less than the value of their parents. And any values to the right of the node must be greater than the value of their parents. A tree can also not have duplicated or equal values, each value must be unique. So this results in trees that look like this. This is an example of an illegal binary search tree because the 25 is on the left side of the root. But 25 is obviously greater than 20. Remember, only values that are less than their parents can go on the left. We can fix this by placing the 25 on the right of the tree instead. In fact, if you make a sweep across a binary search tree from left to right, you should find that all of the values
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=189)** are in this numeric order. And if you don't remember the rules right now, that's fine. We are going to go over them again and again and again. So strap in, buckle up, make sure you keep your lefts and your rights straight, and let's head over to the next chapter to start working on some code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** node (13), make (4), find (1)
> **Definitions:** is a  (4), is an  (1)
> **Analogies:** for example (3)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)


### 1. Navigating Trees

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a basic tree](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=0)** - [Instructor] I've spent a lot of time in the last three videos talking about trees, binary search trees and how easy they are to build and use. Now, let me prove it to you. Let's start with the node class. This is going to be the basic building block of our trees. And of course nodes aren't very useful without any data, so let's pass some data to it when it's initialized. This is going to be the number that the node represents so self.data equals data. So now we have an object, it has some data, of course nodes also have this property where they have left and right children. So let's add this pointers in there and initialize them to be none at first. Okay, great. So how do we use this class? Let's start by defining a new node and giving it some data. Now if we want to start building a tree, we can attach new nodes to the left and right of our parent node. So node.left equals node five, node.right equals node data value of 15. Note that I'm putting nodes with smaller data, in this case the five to the left and I'm putting nodes with larger data, in this case the 15 to the right. This is because we're building a binary search tree as discussed in the last section, smaller values go to the left, larger values go to the right. And if I wanted to expand the tree a little more, I could do something like this node.left.left equals node two that's going to be our smallest number in the tree.
>
> **[1:32](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=92)** It has to be smaller than five. Node.left.right, so we need something that is smaller than 10 larger than five. Let's give it a six. Node.right.left, let's put a number between 10 in our root and 15. So how about node 13? Node.right.right, so this can be as big as we want. It has to be bigger than 15. Let's go crazy, give it 10,000. Okay, great. So if you want to see data at a particular point or node in the tree, all I have to do is this, print node.right.data. Print node.right.right.data. Okay. We can run it with [[Python (Programming Language)|Python]]. Great, so this printed out the 15 and the 10,000. Another thing and to note here is that we can really take any node and declare it to be its own tree. Like if we take my tree equals node.left, awesome, my tree is actually a whole new tree unto itself and node.left is the root of my tree. Trees are recursive, it's new trees all the way down. So in order to avoid confusion around what we're considering to be an official tree, maybe add some [[Metadata]] or helper functions.
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=189)** What we can do is make a really nice simple wrapper class called class tree. And this is just going to take a root node, just like that. We might even have some simple metadata along with the root node. So maybe like a name for our tree and we can give it a default string value of an empty string. Okay, great. So now we have named trees, they have root nodes and we can instantiate it like this, equals new tree and let's pass in node and we want to call it Ryan's tree. Fantastic. Great, so let's do a little bit of testing with this, print myTree.root.left.data, print myTree.root.right.right.data. Oops, had an auto-complete there. Let's print out the name up here. And get rid of that so we're not confused about what's going on. Ryan's tree and print out a couple of nodes. There, so now we have a great little tree
>
> **[4:42](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=282)** with just a few lines of code play around with it, get used to it and then head over to the next section where we're going to start expanding these node and tree classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (24), python (1), make (1)
> **Code Identifiers:** mytree (2)
> **Cross-References:** in the last (2)
> **UI Navigation:** go to (2)
> **Versions:** node 13 (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)

#### [Searching a tree](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=0)** - [Instructor] In this section, we're going to do something so fundamental to binary search trees that it's literally in the name. We are going to binary them. No, I'm kidding, we're going to search them. We will search the binary search tree. So remember this fundamental property of the binary search tree. The small values always go to the left and the large values always go to the right. So if I'm starting at the root and I want to find 27, what do I do first? Start here and say, is 27 less than or greater than 50? So obviously 27 is less than 50, so going to 25. And I say, is 27 less than or greater than 25? It's greater than, so awesome, I found the 27. So let's write this up in code using the node class from the last section. Let's make a function in the node class called search. And this is going to take in a target, which is the data that we're looking for in the tree. And the first thing we're going to do is check the case where this current node. Self matches the target that we're searching for. So if self.data equals target, let's print "found it" or something like that, and then return self. So returning the node that we found in the tree. Otherwise, if we don't match it, we need to keep looking. So if we have a left node, if our current self has a left node, if self.left, then we'll need to check to see if the target
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=96)** is on the left side of the tree. That is, the target is less than the current data. So, and self.data is greater than target, we are going to recursively keep searching the tree. So let's return self.left.search for the same target. And then we do the same thing on the right side. Check if the right exists, if self self.right and self.data is less than target.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=130)** Return self.right.search target. Now, there's a case that's missing here or at least not explicitly written. So what happens when the data we're searching for isn't in the tree? In that case, it'll fall through to the end here. It won't find a viable left or right node. It can't keep going, so it's just going to return none. Remember in [[Python (Programming Language)|Python]], there's always an invisible return none at the end. So let's just add a print statement, letting us know that it didn't find anything. There we go. So let's try this out with the tree that we created in the last section. Let's say found is going to be equal to tree.root.search, and let's look for node 10,000. Okay, so found is going to actually just be that node object there. So let's print found.data.
>
> **[3:15](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=195)** Oh, sorry, that's my tree. Great, found it. And it returns that note with the value of 10,000. Note that we can also take advantage of our tree class here as a rapper and not a convenience function, search. And that's going to take self and then just search the root node. Return self.root.search for a target. Target, target. And by adding these functions into this tree rapper, it just kind of creates a nice way of accessing it. So instead of calling my tree.root.search, I can just call my tree.search. Found it, 10,000. Alright, great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (10), find (3), make (1), python (1)
> **UI Navigation:** go to (2)
> **Versions:** node 10 (1)
> **Cross-References:** in the last (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Traversing a tree](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=0)** - [Instructor] And the last section we were given a target node to search for and made a beeline straight to in our tree. Along the way we left a trail a visited nodes as we made each decision about where to go next. But what if instead of the goal being to find a particular target node, the goal was just to systematically visit every node. Now this can be useful for many reasons counting the number of nodes in a tree or finding the maximum and minimum depths for example. Really understanding how to write a program that visits every node of a tree can reveal some pretty cool properties about trees and recursion that might not be obvious at first. So let's take a look at the three types of tree traversal. Technically there are more than just these three types but these are the three types you'll see commonly and that computer scientists commonly use. So there's, pre-order traversal, in-order traversal and post-order traversal. Let's take a look at pre-order traversal. This is where we visit the node, starting with the root and then going down like this. So one, two, three, four, five, six, seven, eight, nine.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=72)** So think about big diagonal sweeps, and then you go back and visit those ones to the right real quick. And the in-order traversal, we're going to start with the smallest node and go left to right. So one, two, three, four, five, six, seven, eight, nine.
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=96)** And when you do an in-order traversal you're starting with the smallest node and going to the largest node in order. So in-order traversal. In the post-order traversal, we're going to start with the leftmost node again and go left to right visiting the root last. So one, two up to the root three, four, five, six up to the root eight, up to the root. And the count for all these different traversals is actually very similar. The only difference between them is at what point do you print/log/record the current node you're visiting. So let's go check out the code. So here's the code. And the first thing we want to do is sort of create our three traversal functions in the node class. So def traversePre-order take some self, traverseInorder and then of course, def traversePostorder. Okay, great. And let's start up by a writing traversePre-order. The first thing we know we want to do is print the current node. So print self.data, and remember pre-order tree traversal starts by printing the root node then goes left prints that node, and then keeps going left as much as it can before going right. So, the next thing I want to do is if self.left
>
> **[3:10](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=190)** if there's a left node, self.left.traversePre-order. So we recurse down. Then if self.right, self.right.first, and then we recurse again. Now here's the really cool thing, we can fill in the other two functions simply by copying and pasting this pre-order traversal code and then changing where we call the print function. So here we want to call print in the middle. Let's clean this up. And then here in post-order, the last thing we want to do is call print. With traverse in-order, remember this is the one that prints the nodes out from smallest to largest, and you can really see how it works here. Anything in the left is going to be smaller than the current node. So we'll always print those out if possible before printing itself. Then it goes to print everything to the right and those nodes will always be larger. So you can kind of see how it ends up printing out the values in order. And let's add some wrappers to the tree class as is tradition def traverseInorder self self.root.traverseInorder. Okay, great. I'll just copy and paste to make this easy,
>
> **[4:48](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=288)** Pre, Pre, Post, Post. And here I have the same tree that we had on the whiteboard with traversePreorder, traverseInorder and traversePostorder. So let's give this a try. So there you have it. And if you think we're done with recursive [[Algorithms]] on trees, think again. We're going to be doing something a little similar to this in the next section, looking at the heights of trees. So you're definitely going to be a pro at this if you're not already.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** node (16), find (1), make (1)
> **Code Identifiers:** traverseinorder (4), traversepre (3), traversepostorder (2), traversepreorder (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Getting the maximum height of a tree](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=0)** - [Instructor] When computer scientists talk about the height of a tree, they mean how many nodes that are from the root to the leaf at the deepest part of the tree. The height of a tree is it's maximum height. So, this tree with a very shallow and a very deep part still has a height of four. One, two, three four. Remember, the height is important because it determines the maximum run time for the search of a tree. So if I'm trying to find this node, the two, it takes me four steps. Even though there might not be that much stuff in the tree. So let's look at how to find the maximum height, or the height of the tree. The basic idea is for each node, starting with the root tree recursively call get height for each of its children. And those children call get height for their children, et cetera. Each time get height as recursively called, the starting height that node is given and incremented. So here, the starting height is zero at the root. Then we have a string, one, two, three, and four. If a leaf node has reached, the function returns kicks its height back up the stack and the node above it. And each node above it returns the deepest height on either side. So this node, for example, it has a high of four, and a hight of a three, and it will return four as its height. And if this is making her brain scramble a little bit, no worries. The code itself is actually three lines long. So let's go check it out. So let's start by defining a function called height
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=94)** in our node class here. So Def height. And then we also want to pass in an argument called H, and this is going to be the height at our current level in the tree, whatever that level is. So the basic idea is that we want to check to see if the left and the right nodes exist. And remember, each time we recurse down, we're literally moving down one level in the tree. So then we're going to add one to this H here. So we can write something like this. Left height is going to be equal to self.left.height H plus one, 'cause remember we're recursing down when we call this, if self.left, otherwise we want to set the left height equal to H. And we can do the same thing for the right height, self.right.height, H plus one, if self.right, else, it's just whatever H is at this current level. All right, now here's the trick. We're actually going to return the max of the left height and the right height. Okay. So, there you go. Three lines of [[Python (Programming Language)|Python]], just like I promised. If you think it's too good to be true, let's try it out. So here I have that same tree that we had on the whiteboard. I'm calling it very tall tree, and then we want to print out tree.root.height. Okay, and what is that?
>
> **[3:07](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=187)** Four. There you go. Let's also, just as a test, make another tree called a very short tree, and then do the same printing out the height. And, there we go. Very short tree that only contains the root node. Has a height of zero. And then of course, to sort of finish this off, we're going to add an function to a wrapper called height, and then we return self.root.height.
>
> **[3:45](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=225)** And then we should be able to do this, and then we have a nice, convenient tree height function. Great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (9), find (2), python (1), make (1)
> **Analogies:** for example (1), just like (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### [Getting all nodes at a particular depth](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=0)** - [Instructor] We're going to write a function that takes in an arbitrary depth, like two, and prints out the nodes at that depth from left to right. So while getting all the nodes at a particular depth might not seem immediately useful, it's essential for some of the more advanced tasks when working with trees, especially printing them which is a challenge in the next video. So imagine if you will, a tiny, little person attached to the root by a bungee cord. There we go. And they leap off the root of the tree, and then get yanked back up when the cord runs out. And then they go back down and then up again, then down, then up again, then down. And each time at the point of maximum descent, they record the node that they're currently at before being yanked back up again. And they do this until they recorded every node in a straight line across the tree. Now, this might seem like a bizarre visualization, tiny, little people with bungee cords, but that's exactly how the code works. So let's go check it out. All right let's write a function called getNodesAtDepth in the node class, getNodesAtDepth. And this will be very much like our height function here. But instead of incrementing the height at each level, we decrement it, return when we've reached zero and then add nodes to an array to keep track
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=95)** of along the way as we recurse. All right, so we're going to take an a depth and a list of nodes. and this is actually going to be an empty array by default. So we don't have to explicitly give it to this function. Now, if depth is equal to zero, again, we want to upend the node that we're currently at. So that would be self.data and return the list of nodes. The next thing we need to do is check if there's a left or a right node and then recursively call this function. Again, very, very similar to what we did in order to get the height of the tree, and also similar to the tree traversal functions. So seeing some patterns here yet? So if self.left, self.left.getNodesAtDepth, depth minus one, pass in the nodes. If self.right, same thing, self.right.getNodesAtDepth, depth minus one. pass in the nodes. And if we fall through here, we still want to make sure we return that nodes array. All right. To finish it off, let's just add a wrapper to our tree class. getNodesAtDepth. Self is going to take a depth and return self.root.getNodesAtDepth with that depth.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=188)** Okay, great. Just to test this out, here I have the tree that I showed on the whiteboard earlier. Let's print tree.getNodesAtDepth2.
>
> **[3:23](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=203)** Okay, great. And that's the 13, 35, 55 and 103 that we saw on the whiteboard. What happens if we do getNodesAtDepth3? Hm. I would expect to see eight nodes there, but of course, only four of the nodes that level were actually populated. So if there are missing nodes at a certain level, it'll just skip over them without doing anything. But there are some situations in which it can be desirable to sort of fill in the gaps, even if there aren't any values there. And we can actually make a simple change to our code in order to do that. So getNodesAtDepth here. So else: nodes.extend. And let's just populate it with a none value times two raised to the power of depth minus one. And we're going to do the same thing on the right side. I did the math earlier on this, and you can check me if you want, but two to the power of depth minus one will fill in gaps appropriately, depending on the height that we first encountered a missing node. Remember, if we encounter a missing node very high up as compared to the depth that we want to go down, that's actually going to represent a lot of gaps in our tree down lower at the depth that we're recording the nodes. So let's test this out again. And we're still getting getNodesAtDepth level three. And perfect.
>
> **[4:57](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=297)** You can see all the nodes we would expect to find. We can see where the gaps are. I think that looks really great. And this function is going to be really useful for the next challenge, wink, wink. So let's head on over and check it out.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), make (2), find (1)
> **Code Identifiers:** getnodesatdepth (8), getnodesatdepth2 (1), getnodesatdepth3 (1)
> **Analogies:** similar to (2), imagine (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Printing a tree](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=0)** - [Instructor] All right in the previous section, we printed out all the nodes at a specific depth of the tree essentially printing out one row of the tree at a time and you might be thinking to yourself, Hmm if I did this to all of the rows of the tree in order, could I actually see the tree? And the answer is yes. So let's print out trees charter terminal so we can examine them more visually but print functions like this are also a matter of personal taste and style. So how do you draw connections between the nodes? How do you space the nodes? There are a lot of little details and decisions that need to be made. So dust off those old text formatting skills and rise to the challenge. I want you to create a print function for a tree that will display all the nodes of the tree with connections between them in the terminal. Obviously not expecting anything that'll print millions of nodes that would get a little bit messy but four or five levels of depth to handle any upcoming exercises would be nice. So play around with it and see what you come up with.

> [!info]- Semantic Content
>
> **Tools:** terminal (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Printing a tree](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=0)** - [Instructor] All right, so I hope you had fun with this one, and made something that prints out your trees satisfactorily. We're going to be doing a lot of tree printing in the next two chapters. So whether you use your solution or want to use mine, doesn't matter, but you do need something to print out your trees. So I'll walk you through what I came up with. The first thing we want to do, and by the way, this is all going to be in the tree class, not the node class that we've been mostly working with. But the first thing that we're going to want to do is print out the tree's name. You know, we added those name attributes to the trees, might as well start using them. I also added a feature where you can pass in an optional label, just for this one instance of printing. And it will also print out that, you know, maybe we could put like a fun dash in there or something. Next thing is going to be to get the height of the tree. So that's that height function that we wrote, and you need this to determine the ultimate width of the tree, and how big the base of the tree is going to be. In the spacing, hard-coded, this is the spacing between each node. Then you can use all of this information to get the base width of the tree. The total width will be this many spaces, and then use that to calculate the offset, which is how far over you start printing spaces before you begin printing data. And that offset is going to be the biggest when it prints the root node, because that's going to go right in the middle, so you're going to have a bunch of space, print out the root node, and then print the next line.
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=96)** Then we start iterating through all of the rows here. If the depth is greater than zero, we know that we've already printed that root level. And the first thing we need to do is print some directional lines, connecting the nodes together. So you can see I'm printing the offset, doing some spacing and join, and then slashes, forward slash, and then a backslash there. Next we want to get the next row of data to print out. So that's going to be using that get nodes at depth function, told you it would come in handy. And then we print the offset. And then we start printing out the actual data that we got from that row. And this node to char, that's just a little utility function that I wrote. So that takes in either a number or none. Remember that get nodes at depth can return none. And so if that's the case, I just print an underscore. I thought that looked pretty nice, But then it looks at the length of that number. So if you have the number 20, it's going to take up two spaces. If you have the number 200, it's going to take up three spaces. You kind of want to account for that when you're trying to make your tree look nice. So after you printed that out, just update the spacing, and offset for the next row. And then you're good. You get a quick sample. This is the same tree we used in the last section. Prints out the title, Ryan's cool tree. And you can see how it filled in those gaps with the underscores. Looks a little bit better, I think. With three rows, spacing starts to get
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=189)** a little bit funky at four rows. But I might play around with that later. So if you have a really cool tree printing solution that you came up with, I would love to see it. You know, reach out, let me know how you did with this.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), make (1)
> **Cross-References:** in the next (1), in the last (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Modifying Trees

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding nodes](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=0)** - [Instructor] Up until this point, every interaction we've had with the tree has been to read it without any modification. But in this chapter, we'll start learning a few of the basic methods of tree modification and actually start changing these trees. The most obvious modification of course is to add data to the tree. Fortunately, this is also one of the easiest. We're going to write a function very similar to the search function from chapter one, section two. In fact, the code is almost completely identical apart from what happens when we find the node and what happens when we don't find the node. So this is the original search function, and I'm literally just going to copy paste it. Change the name to add and change the variable target to data. This isn't obviously changing target to data isn't a functional change, but this is no longer a target we're searching for, it's data that we're adding. And so I think it makes sense to change the variable name there. Just change it in a few places there. If the date data is equal to the data that we found in the current node, there's nothing to do. Remember trees can't have duplicates, so let's just return and do nothing. And here we're basically continuing our tree search, if there's a left child, and the data we're searching for is smaller than the current data, we're going to keep going and we're going to recurse down now looking to add that data, same with the right side. But there's still a case we're missing and that's the part where we actually add the data.
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=94)** So if the data is less than the current nodes data and there's no left child, what we want to do is actually just add the data at this point. And we can rewrite this a little bit to make this more efficient. So, if data is less than self.data if self.left is None, here's where we want to add the data self.left = Node. We'll make a new node with that data. So if there's no left child, the data should go there and we're setting the left child equal to the data. And then here's where we recurse else: self.left, does exist. Self.left.add data. Now, I'm just going to copy and paste this and switch it around for the right side. So, change that to a greater than right, right, right. Trees are wonderfully somatic. So, now we have our add function and let's actually test it out and let's add a wrapper here too as always def add self, data. Self.root.add data. Great. And I happen to have a tree hanging around here. Let's add tree.add insert a 10. Great, get out of the 10
>
> **[3:10](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=190)** and we can try it with a tree.add. I don't know, 76. Cool. And what if we do tree.add one that's already in there, like 75. Takes no action. Perfect. So now you know how to add data to trees.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), find (2), make (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Deleting nodes: Theory](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=0)** - [Instructor] Deletion from a tree like insertion starts with searching the tree based on a target value. If the value is not found, we return without doing anything we don't make any changes to the tree but if we do find the target value, we have to remove it but we can't just, you know, take it out or any children that has, might go floating off into space. So we have to be careful. There are three cases to consider for deletion. Zero children, one child and two children. Remember, according to the Computer Scientists all problems are caused by children. In the case of zero children like this 25 we just remove the link to the parent node. The node gets deleted and we're all good. That's it. In this case, the node to be deleted has one child like the 75 here. Here, the child becomes the parent just like I'm turning into my mother. So we take this hundred, move it up. This link becomes a link to 100 now and the 75 has been deleted. In the case of two children just remember RTFM that of course stands for Right Tree Find Minimum. So this technique might seem a little bit arbitrary and non-obvious at first but trust me on this. If you memorize it, RTFM and apply it every time it will work, it will always work but let's take a look at why it works because that will make things easier to remember. So in the case of two children,
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=94)** like with the 75 here you're going to go to the right tree and find the minimum node or the smallest node and that's going to be this 80 here and the node is guaranteed to have at most one child. So we can even put like, you know, 92 hanging off of here. Why isn't guaranteed to have at most one child? Because if it had a left child it wouldn't be the smallest node anymore. So we know the smallest node in the right tree has no left child and so what we do is take this node, take its value and put it into the node here that we want to be deleted. Get rid of the 75, make it an 80 and then we just take any orphaned right children hanging off of here and move them up. It becomes essentially a deletion of this node which only has one child and we can do that because any value from this right tree will always be bigger than anything from the left tree and because this node is the smallest everything on the right tree is still larger than it so the math checks out, this is a valid tree. So right tree find minimum. Replaced the node to be deleted with the minimum and then essentially you perform a deletion on this node which only has one child and is much easier to delete. All right. So that's all well exciting but what's more exciting is deleting those in your life by which I mean of course in code. So head on over to the next section and we're going to write this up.

> [!info]- Semantic Content
>
> **CLI Commands:** node (14), find (4), make (3)
> **Env Vars:** rtfm (2)
> **Definitions:** stands for (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Deleting nodes: Code](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=0)** - [Instructor] In the last section, we went over the plan for how to delete nodes and repair the tree afterwards. So make sure you've watched and reasonably understand the last video because now we're going to actually be coding it up. So we're going to make a new function in the node class, and we're going to call it delete. Def delete. And that's going to take in a target, which is the target value that we're actually going to be deleting from the tree. And there are three cases here, and this will probably seem pretty familiar at this point. If self.data is equal to target, do the deletion here. Else, if self.right and target is greater than self.data, we recurse down. So, self.right.delete target. If self.left and target is less than self.data, self.left.delete target recurse down on the left side. Before we fill in this part, the part where the deletion actually happens, I wanted to take a step back for a minute and look at how we're going to call this in the tree class itself. So def delete self target and ordinarily we would do self.root.delete, target, just like that. But what if the route itself needed to be deleted? And in this case, we can't just perform some operation or transformation on the route, but we actually need to get rid of this object entirely and replace the root
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=93)** with an entirely different node. So, we might not need to, but if we do, we're going to want something like this. And this will actually replace the route, but this means that our delete function needs to be returning some sort of a node object. Now, I'm not saying this is the only way to do it, but this is how I'm going to do it today. So what we do is we go back up to our delete function here. And just make sure that this is returning things and it's replacing things appropriately.
>
> **[2:13](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=133)** - Okay. So now let's take a look at what happens under the self.data equals target, because this is where the magic happens. If self.left and self.right, if both of these exist, we know that we need to RTFM, Remember that stands for right tree, find a minimum, and do that deletion where we preserve both the children Else, one child or no children under this else. So, if there are no children, we want to return none. And if there's one child, we want to return that child. And the cool thing is we can accomplish this with one line. Turn self.left or self.right. So if both of are none, it'll just return none. But if one of them exists it'll return the one that exists. Pretty neat, right? But not for the RTFM case. So we want to find the minimum of the right tree. And the first thing we're going to do is write a function called findMin, just a little helper function here. And this is just going to recurse down and find the minimum. And that minimum is going to lie to the left, right? .Left.findMin, or return self.data. So this basically finds the leftmost piece of data in the tree. So minValue, it's going to be equal to self.right.findMin. Because we want to find the minimum value
>
> **[3:48](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=228)** in that right tree. We want to use that to replace the current data. And then what we want to do is we want to is we want to delete that minimum value in the right tree. So self.right is going to be self.right.delete minValue. So we can use this delete function to actually delete that minValue from the right tree. And that's that we're deleting it from self.right. So that right subtree only. So it's not going to touch the value that we just inserted here. Also, return self. Can't forget that. So now that everything's in place, I happen to have that tree from the white board in the last section, and we have that here, and we can print it out. Okay, great. Let's take a look. So, let's try the experiment that we did on the whiteboard and actually just delete that 75, and that, remember, has two children there. Save it. Great, deleted the 75. The other thing I want to check is to make sure it deletes the root value appropriately as sort of an edge case. All right. And it leaves the 50 and the replaced it with the 67. So this tree is starting to look a little lopsided though.
>
> **[5:23](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=323)** If you noticed, not many values over here, a bunch of them kind of hanging down there. So, how do we deal with that situation? I would recommend that you head over to the next video to find out.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (4), node (3)
> **Code Identifiers:** findmin (3), minvalue (3)
> **Cross-References:** in the last (2), next video (1)
> **Env Vars:** rtfm (2)
> **Definitions:** means that (1), stands for (1)
> **Speakers:** - [instructor] (1), - okay (1)
> **Analogies:** just like (1)

#### [Detecting unbalanced trees](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=0)** - [Instructor] Well, adding and deleting all of these nodes, you've probably noticed that some trees get what computer scientists call unbalanced. For instance, if we have this tree, 25, 50, 75 this could obviously be more concisely written in a different way as 50, 25 and 75. All the same values, but in a much more compact tree. And this isn't just a matter of some frivolous aesthetics. The more levels of tree has, the longer it can take the search it, even if the number of nodes is the same. For instance, if we want to find the 75, we need to make two hops in the previous tree. But with this one, it's just to check to see if 75 is greater than or less than 50. Obviously not a big deal in this case, but imagine you're doing millions of tree lookups perhaps with very large trees, this becomes a huge deal. So it's critically important to be able to detect when trees are unbalanced and be able to prevent or fix imbalances. And we'll be talking about fixing them in the next chapter, but let's talk about a formal definition of an unbalanced tree. So if I take this nice balanced tree and add the number 100 to it, there's no way that this tree could get more compact. It's still fine. But then if I had 150 to it, okay, now it's unbalanced. And so you can kind of see why this formal definition of an unbalanced tree makes sense. A tree is unbalanced if at any node, one side of a tree has a maximum depth of two or greater than the other side.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=95)** So in the case of this tree, we look at the depth of the left side of the root, the left side of the root and the depth is one. The maximum depth of the right side is one, two, three so three minus one is two. So the right side has a depth of two or greater than the depth of the left side so the tree is unbalanced. You could also say that the tree is unbalanced at this point at the root. And if we look at the 25 over here, there are no children off of here and there are no children off of here, this is a perfectly balanced point on the tree. The tree is not unbalanced at this point. The tree is still unbalanced but its point of imbalances at the root node here. So, all right, let's head over to the code and look at how to identify these unbalanced nodes and unbalanced trees. All right, so where can I write a function on the node class called is balanced. And this is going to tell you guessed it, whether or not that particular node is balanced at that point. So is balanced takes in self. The first thing we need to do is get the left height and that's going to be self.left.height plus one. And that's only if the left side exists, if self.left else zero. So this is the height at the left child plus one, if the left child exists else, it has a high
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=188)** of zero over there because there is no left child. And then we do the same thing with the right, self.right.height plus one if self.right else zero. All right, and then we need to return whether or not the difference between these two heights is less than two. So return absolute value of left height minus right height is less than two. Okay, so let's test this out on the tree from our whiteboard here. And let's check if the root node is balanced, tree.root.is balanced. And then we also want to check tree.root.left.is balanced.
>
> **[4:03](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=243)** And there we go. It's not balanced at the root and is balanced at that node to the left there. So it looks good. Head over to the next video for a little challenge involving this function.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), find (1), make (1)
> **Analogies:** for instance (2), imagine (1)
> **Cross-References:** in the next (1), next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Adding a balance indicator to the printed tree](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=0)** - [Instructor] In the last section, we looked at determining the balance of the tree at any given node. And this is going to be a really important thing to track throughout the next chapter. So for this reason, it'd be really nice if we could see the balance of our tree in our print function. Remember the function from the challenge in the last chapter. So for this challenge, I want you to modify the tree printing code from chapter one to indicate whether or not a tree is balanced. You might write in the height differences at each node or at each point, an indicator on the exact node, maybe get really crazy and look into libraries that print text in different colors. Whatever you want to do, up to you. Have fun with it. And I'll see you in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (2), next chapter (1), in the next (1)
> **CLI Commands:** node (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Adding a balance indicator to the printed tree](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=0)** - [Instructor] All right. So hopefully this challenge wasn't too difficult. It shouldn't have been as hard as writing the print function in the first place. So I figured I'd give you a bit of a [[Representational State Transfer (REST)|rest]] after getting through that last chapter. So I want the fairly simple root and I just added an asterisk after each node if the node is in balance. So you can see here, we know this point is imbalanced at the root. And so an asterisk gets added after it, 75, that's another point of imbalance that turned up and that makes sense because it has two children off this side and no children off that side. And this involved writing a two string function on the node class. So it can tell whether or not itself is balanced and if it's not balanced then it returns it state as a string with an asterisk. If it is balanced, it just returns its data as a string. And this is used by the print function and this sort of internal utility function, nodeToChar in particular. And this now takes in a node object and then calls to string on it. And this is convenient because it can take into account the length of this whole string whatever is returned with or without the asterisk. And it uses this to sort of keep the alignment of all the characters consistent. So it just treats this as sort of a three character bit of data that needs to be printed out there and that keeps all the space in consistent.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=93)** In addition, I had to make a modification to get nodes at depth. That function on the node object and what it does is instead of, we used to have self.data, append self.data so you just get like a list of no data that was there, not actually append self and this is called by the print function. So instead of the print function just getting a list of numbers, it gets a list of note objects which allows it to call these functions on the node object to tell if they're balanced or not at that point. Being able to see the points of imbalance in a tree is going to be something that's really critical for the next chapter. So I recommend that you add this or something like it to your code and start playing around with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (6), make (1)
> **Code Identifiers:** nodetochar (1)
> **Cross-References:** next chapter (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Rebalancing Trees

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to rotations](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=0)** - [Instructor] In the last chapter, we looked at the unbalanced tree. So how to detect imbalances and how to mark the nodes at which these imbalances occur. And remember the notation I'm using here is the asterisk. And in this chapter, we're going to look at how to actually fix these imbalances. So how to take a scraggly tree like this and turn it into a bushy and faster search tree. Remember, and imbalance occurs when there's a height difference of two or more between the left and the right side at any given node. So when computer scientists are looking at an imbalance, what they're really looking at is the next two levels below the current node. And because we only need to look at two levels to see if an imbalance exists, these two levels can also be used to classify the imbalance into one of four types. You see, computer scientists really care about whether these imbalances are on the left or the right, and whether they go to the left or the right in the level after that. So, because we're only looking at two levels below the node, there are only four possibilities of directions the imbalances can go in. So there's the left, left imbalance, the right, right imbalance, the left, right imbalance and the right, left imbalance. And to fix these imbalances, we perform an operation on the tree called a rotation. So let's look at how this has done in the first case, the left, left imbalance. So here we have a left, left unbalanced tree and to rebalance it we're going to do something that's called a right rotation. And the first step is to identify the pivot. That's the node hanging off to the left
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=93)** of the unbalanced node. And I like to imagine grasping this node and pulling it up and letting the other two nodes fall to either side. So you have the 20, you pull it up, the 30 falls over there, the 10 falls over there, and this whole thing sort of rotates clockwise. So you can imagine pulling it up, letting the 30 fall down, the 10 fall down, it rotates clockwise or to the right, and that's why it's called a right rotation. Now there's one extra thing we do need to worry about, any children hanging off of the nodes. You know, computer scientists are always worried about the children. So here, the nine and the 11 can keep hanging off of the 10, the 31 can stay hanging off of the 30, the 21 though can't keep hanging off the 20, because now 20 is root, it already has two children. So what we're going to do is actually going to break the connection, and we're going to move it up to the 30, and we redraw it there. And this is always a legal move because we know that this 21 is greater than 20, and we know that it's less than 30, because it was on the left side of the tree before. And so it's always going to be just fine to reconnect it to the 30 there. And so that was a right rotation and it fixes a left, left imbalance in a tree. How would you fix a right, right imbalance? So here's a right, right imbalance. And once again, the 20 is the pivot. We're going to grasp it, pull it up,
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=188)** let the 10 and the 30 fall to either side. Have 10, 30, okay. And this is called a left rotation, because when you pull it up, the whole thing sort of moves counterclockwise or to the left. And of course we have to worry about the children again. So the nine is going to hang off there, the 29 and the 31 are just fine, but this 19 can no longer hang off the 20. So we're going to break that connection, move it up to the 10. All right, great. So, now we have this concept of a right rotation and a left rotation, and it turns out you can use these same basic tools to fix the right and left imbalances that we saw earlier. Okay, so let's check out this left, right imbalance. So computer scientists figured out this really clever thing. You take the left node from the point of the imbalance and you perform a left rotation on this node. Okay, so not touching the 30, just performing a left rotation here. And this means that the 20 becomes the pivot, and this kind of swings up and becomes a node directly under the 30. So we're going to redraw as 30, 20, and 10. The nine can keep hanging off the 10. The 21 can keep hanging off the 20 there.
>
> **[4:46](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=286)** And that 19, the connection gets broken, moves up there. Oh, and we have the 31. So this time doesn't change because we're not performing any sort of rotation on the 30, the 30 is untouched. But then we end up with, and of course, there's still an imbalance there, but we end up with this left, left unbalanced tree and we've reduced it to the previously solved problem. We know we can fix this with a right rotation. So to fix the left, right imbalance, you're going to perform a left rotation followed by a right rotation. And of course you do the exact opposite on a right left unbalanced tree.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9)
> **Definitions:** is called (1), means that (1)
> **Analogies:** imagine (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Rotating trees in Python](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=0)** - [Instructor] In the last section we performed some tree rotations on the whiteboard, but now let's actually write them up in [[Python (Programming Language)|Python]]. So here I have examples of all four unbalanced trees left, left, right, right. Left, right, and right, left. And let's start with the right rotation function. Remember that's the one that fixes the left, left unbalance. And now, unlike previous functions we're not going to write this one in the node or tree classes, although we could, but this function takes in a node object. The one that we want to perform the rotation on and returns a different node object. So the classes can use these functions, but they don't need to be inside the class. So we're going rotate right. And that's going to take in the root. And the first thing we want to do is identify our pivot. Remember that's root that left. So this 20 here, and that's our pivot. And then we want to identify the node that we need to reattach. That 21 at pivot.right. So we'll call that reattachNode pivot.right. Now set root.left to the reattach node. Set pivot.right equal to the root and then return the pivot. And that will set the new root of our left, left unbalanced tree. Now to call this function, we just do unbalancedLeftLeft.root is equal to rotatRright unbalancedLeftLeft.root
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=97)** And remember what gets returned from this function is actually a different node object than the one that we passed in. And notice how the root of this tree is set to the return value of this function which is the pivot that we've picked out. So this will actually replace the root with the pivot in order to rebalance the tree. And we can test this by calling unbalancedLeftLeft.print, after rebalancing it. And we see that it's rebalanced. Great, so now we want a left rotation, and here's something really cool that you might not have realized yet. We can actually make a rotate left function by literally copying and pasting this rotateRight. And then changing every instance of the [[Microsoft Word|word]], right to the word left. And every instance of the word left to the word right. Right, left, great rotate left. Let's try calling it on our unbalancedRightright tree equals rotateLeft dot root. And of course we want to print it again.
>
> **[2:56](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=176)** Okay, so there's our left left tree, right, right tree. And that worked as well. So now we still have the other two unbalanced trees left right tree and the right left tree. And remember we can use these same rotate, left and rotate right operations to rebalance those trees as well simply by performing two of them in a row. So let's start with the left right unbalanced tree. The first step is going to be to identify the node that we actually want to rotate first. And that's the 10. Remember the first step is to leave the 30 alone, and then perform a rotation on the 10. And that's going to be a left rotation. So unbalancedLeftRight.root.left as equal to rotateLeft unbalanced.Left.Right.root.left. And then the next step is going to be perform a right rotation on the root itself. Okay, and then print it out and see what we have. There we go, rebalanced it. And of course with our last tree type, we can perform the exact same steps and the exact opposite direction. So I'm actually just going to copy and paste this code and then replace everything left, with right, right with left, right, right. Of course rotate right is going to be our first move,
>
> **[4:31](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=271)** rotate left, it's going to be our second move. That looks pretty good. And there we go, it rebalances at last tree type in all four of those are, are rebalanced. All right, I will see you in the next section. We're going to stop writing so much of this stuff by hand and start automating our tree fixing little bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** unbalancedleftleft (3), rotateleft (2), reattachnode (1), rotatrright (1), rotateright (1)
> **CLI Commands:** node (7), python (1), make (1)
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [Fixing a tree with multiple points of imbalance](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=0)** - So let's say we have a tree that may be all sorts of screwed up, like this one. And maybe we just want to run it through some sort of an automagic fixer, and don't want to have to think about how exactly the tree is screwed up. So we know how to fix an imbalance at a node if we know which type of imbalance that node has. We also know how to iterate through every node on a tree. So, what if we iterated through every node in the tree, figured out what kind of imbalance, if any, that node has, and then fix it. The trick here, the thing we haven't really done yet, is classify the imbalances automatically. So, let's write a function in the node class called fixImbalanceIfExists. And the first thing this is going to do, is try to figure out what imbalance this node has. And in order to do that, we're going to need to know the height on the left and the right, and get the height difference between them. And we can do that using, the code from our isBalanced function. And I'm actually going to put this in a new function because we're going to be dealing with height differences a lot here. So, I'm going to make a function called getLeftRightHeightDifference. And this is just going to return left height minus right height at that node. All right. So, in our function here, we can say if self.getLeftRightHeightDifference is greater than one, we know that the left height is too long for whatever that right height is.
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=94)** And so we know it's some sort of a left, or a left imbalance. Else if self.getLeftRightHeightDifference, is less than negative one, so the opposite direction, we know that there's some sort of a right imbalance here. Okay, so we know the sort of broad imbalance, but is it a left left imbalance? Or is it a left right imbalance? So what we want to do is just do this again. If self.left.getLeftRightHeightDifference is greater than zero, we know that this is a left left imbalance. Else, it's a, left right imbalance. And then if self.right.getLeftRightHeightDifference, is less than zero, it's a right right imbalance, else right left. Okay, great. So now we have the four different types of imbalances classified, but what do we do about actually fixing them? So for the left left imbalance, remember we want to rotate right passing self. But rotateRight actually returns potentially a new node. It will always return a new node. It'll return the pivot node. So we need to make sure that we return something. So now fixImbalanceIfExists returns a new node. So that's going to influence how we call that, but let's just keep writing it for now. We also need to make sure, given that fixImbalanceIfExists has to return a node,
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=188)** that we return self down here, if there's nothing at all wrong with the node. And then under left right, what we're going to do is we want to perform a left rotation on that left node, and then actually return the rotateRight. And then here we do the exact opposite. So return rotateLeft, and then here return self.right equals rotateRight(self.right), return rotateLeft. Okay, perfect. So, now for the final touch, we want to be able to call this function on every node in the tree. So let's make a function called rebalance. This is going to be in the node class again. if self.left, it's going to seem pretty familiar, self.left.rebalance(). So traversing down. If self.right, self.right.rebalance, and recursing down again. And then after we recurse all the way down to the leaves, we're going to want to fix the tree, self.left.fixImbalanceIfExists, and then down here, self.right.fixImbalanceIfExists. And so this traverses down to the leaves, and then at the leaf, and then working its way back up, it'll fix the imbalances if exists. And I prefer to fix trees bottom up.
>
> **[4:42](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=282)** You can prefer to fix them top down. I just think it's a little bit easier to work with bottom up. But there is one node, that this won't be able to fix by itself, and that's the root. Because remember it fixes the left and the right, but what about that root node? How does that get fixed if it's imbalanced? I'm going to want to write a wrapper function in here anyway, rebalance. And so this is the perfect place to actually just fix that root node. So, we're going to want to rebalance, starting from the bottom up. So we're going to call self.root.rebalance first, to fix all those nodes below it. And then if the root is still imbalanced at this point, self.root equals self.root.fixImbalanceIfExists. And there, that should be it. Let's test this out on our really screwed up tree here. And there you go. This tree certainly looks much nicer than this one up here.

> [!info]- Semantic Content
>
> **CLI Commands:** node (20), make (4)
> **Code Identifiers:** fiximbalanceifexists (6), getleftrightheightdifference (5), rotateright (3), rotateleft (2), isbalanced (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### [Challenge: Smarter automated rebalancing](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=0)** - [Instructor] In the last section we created a function that would scan a tree for imbalances and then fix them. So this might be a handy thing to do after adding and deleting nodes, when there's a danger that the trees could become imbalanced. But imagine you have a very large tree with thousands or millions of nodes. Scanning every single node to rebalance a tree of this size would get prohibitively difficult, especially if you're frequently adding and removing data to and from it. So imagine, every time you add a piece of data you have to visit every node, check to see if everything's balanced, do the rebalancing, there's no way. So is there any way you can make this easier on yourself? Maybe you don't have to brute force check every node in the tree. And if you don't have to check every node, which nodes do you need to check each time you add or remove a node? So here's the challenge. Update your add and delete functions to perform these checks and rebalances on the tree automatically after modifying it. Think carefully about where in the code these lines should be added in order to take advantage of recursion. Should really only be a few lines of code, so sit and think about it for a little bit, type up your solution, test it out, and then head over to the solution to see how you did.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), make (1)
> **Analogies:** imagine (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Smarter automated rebalancing](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=0)** - [Instructor] So if you've finished this challenge successfully then congratulations are in order because you have just invented the self-balancing tree. In all seriousness, many of the techniques we've used throughout this series to balance these binary search trees come from the AVL Tree named for the Soviet Mathematician slash Computer Scientists Adelson Velsky and Landis who first came up with them in 1962. So the AVL Tree's known as a self-balancing tree that it's able to correct or rebalance itself after every insertion or deletion and it does this in a really efficient way. So figuring out which nodes to check and rotate after an insertion or deletion is really one of the last fundamental pieces to making these trees work. So the trick here is that under both insertion and deletion you only need to check the balance of the nodes on the path from the node that you inserted or deleted up to the root node, all the nodes along that path and this kind of makes sense. Remember, nodes only become imbalanced if the height on the left or the right has changed. So if the heights don't change, if that end of that node was balanced before then it will remain balanced and the only nodes for which the height on the left or the right are going to change are the nodes up along the path from the root to the added or deleted node. Okay so how do we check and fix only the nodes along this critical path in our existing code? If you remember from the addition function
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=94)** the one on the node and not the one in the tree. So let's take a look at the addition function and you can see that it recurses down. So self dot left dot add we're going to go down to that function again self dot right dot add, go down that function again and the next line is going to be where it pops out of this recursion here and here and so it's going to pop out along that critical path and so every time it pops out we want to make sure to fix that node which is going to be along the critical path and also make sure when you do this you're also fixing the root don't forget about the root. So in that wrapper function there we make sure to also fix that root node. Similarly in the deletion code you're recursing downs here and here and then there's some recursion there and such but where you're popping out in the deletion code is going to be down at the bottom there and so this is a really good place to check for an imbalance and so here, the tree that we've printed out is actually that very screwed up tree that we had in the last section and all I've done is used the add function to add the nodes rather than just sort of setting them where I want them in the tree by hand and you can see that we started with the root of 50 and just by adding nodes, things have kind of shifted around. So now the root is 35 and we can try to screw it up again
>
> **[3:07](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=187)** by calling delete 50 tree dot delete 75 and then see what it looks like there as well and you can see it just keeps correcting itself. Now 25 is the root. So there you go. You've written a full featured self-balancing binary search tree completely from scratch in [[Python (Programming Language)|Python]]. So give yourself a pat on the back and head over to the next and sadly, last video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (7), make (3), python (1)
> **Best Practices:** make sure to (2), don't forget (1)
> **Env Vars:** avl (2)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with data structures](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=0)** - [Instructor] So congratulations. You've covered the basics of nearly everything there is to do with trees, or a tree rather. Our good friend, the binary search tree. Don't worry, most trees are very similar to this one. You traverse them using very similar code, you insert and delete nodes. The rules might be a little bit different, but the concepts and lingo are mostly the same. There are trees with many children per node, trees that have additional properties that modify their rebalancing strategies, trees where you might be more likely to reach one child node, than another child node. Maybe you'll invent your own tree. But where to go from here? So, if you're looking for an overview of other [[Data Structures]], particularly in [[Python (Programming Language)|Python]], there are a lot of really great [[LinkedIn]] Learning videos. I recommend the video on linked lists by Erin Allard as good preparation for this course. But if you haven't seen it yet and you want to learn about linked lists, definitely check it out. Another great data structure course is "Stacks, Queues, and Deques" also by Erin Allard. And for a broader overview of data structures and [[Algorithms]] check out Robin Andrews' "[[Python Data Structures and Algorithms]]." I particularly like his treatment of search algorithms. For more in depth information about trees specifically, you may want to hit the books. So I heartily recommend "Introduction to Algorithms," whichever edition you can get your hands on. This is a really classic data structures and algorithms textbook, and it's what's sitting on my bookshelf right now. And with that, thanks for joining me in this little walk through the trees.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Data Structures]] (4), [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1)
> **CLI Commands:** node (3), python (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ryan Mitchell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-data-structures-trees-2834010)

## Skills Covered

- Data Structures
- Python (Programming Language)

## Path Context

### In [[Master Python for Data Science]]
← [[Python Data Structures- Stacks, Deques, and Queues]] | **7 of 8** | [[Advanced Pandas]] →

## Appears In

- [[Master Python for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Structures- Linked Lists]] — Python (Programming Language), Data Structures
- [[Python Data Structures- Stacks, Deques, and Queues]] — Python (Programming Language), Data Structures
- [[Python Data Structures and Algorithms]] — Python (Programming Language), Data Structures
- [[Practice It- Python Data Structures]] — Python (Programming Language), Data Structures
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)

---

[↑ Back to top](#)