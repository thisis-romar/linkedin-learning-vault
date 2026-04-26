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
created: 2026-04-21
---

![Python Data Structures:  Trees](https://media.licdn.com/dms/image/v2/C4E0DAQH_Em7BoVMKfQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614101500291?e=2147483647&amp;v=beta&amp;t=b5l6sKjpqIUjZ3K0Z7Yz5lWIsDTpbhLOG2jcSoXakeY)

# Python Data Structures:  Trees

> What are trees, in Python, and how do they fit in with other data structures such as linked lists and graphs? In this course, instructor Ryan Mitchell discusses binary search trees (BSTs) and what you can do with them in a real-world context. Ryan shows you how to build a basic tree with just a few lines of Python. She steps through how to search and traverse a tree, as well as how to print a tree

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees) | 1h 16m | Intermediate | 229K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Ryan Mitchell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-data-structures-trees-2834010)

## Skills Covered

- Data Structures
- Python (Programming Language)

## Table of Contents

### Introduction

#### Getting started with trees
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=0)** - [Instructor] Whether you're looking to crack the coding interview, gain real skills once you've gotten the job, or just feel like there's some structure, maybe a data structure, missing in your life.
>
> **[0:09](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=9)** You're going to want to learn about trees.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=11)** When lists get too long, hash maps collide, and your graphs get tangled, trees are there to help sort out your data.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=18)** (whooshing) We are going to do hands-on.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=20)** I mean literal hands-on work with trees.
>
> **[0:24](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=24)** Along the way, we'll be writing our own tree library in Python from scratch.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=28)** You'll gain an intuitive understanding of the algorithms that underpin one of the most commonly used trees in computer science, the binary search tree.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=36)** I'll walk you through adding, deleting, traversing, and searching nodes, inspecting, rotating, and rebalance entries.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=42)** By the end of this course, you'll have comprehensive knowledge that will allow you to work with and integrate these data structures into your own code.
>
> **[0:49](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=49)** So, if you haven't used them before or just want to refresher you're in for a treat.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=54)** (whooshing) Don't leave.
>
> **[0:55](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=55)** Stop beating around the bush.
>
> **[0:57](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=57)** I'll help you branch out.
>
> **[0:59](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=59)** Just lumber on over to the next section.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-trees/getting-started-with-trees?u=76281980&t=61)** I promise this course won't leave you stumped.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=0)** - [Instructor] What can you expect from this course?
>
> **[0:03](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=3)** So one of the goals of online learning is to make content accessible and useful to as broad of an audience as possible.
>
> **[0:09](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=9)** So while we will be exploring some relatively advanced topics in this course, I've tried to use simple language and explanations throughout while avoiding technical jargon.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=18)** To that end, I've also, de-emphasized some of the math when working with trees.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=22)** Logarithms, and exponents, and sets often come up with trees, here I've tried to keep things really concrete and only use or imply a particular equation when it's necessary.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=32)** And in such a way that it's understanding, isn't critical for the rest of the series.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=36)** And of course the jokes will be bad because I'm an engineer, not a comedian.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=42)** If you're an experienced programmer just looking for a refresher, this course is for you.
>
> **[0:46](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=46)** Feel free to fast forward for the specific subjects you need.
>
> **[0:49](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=49)** You're not going to hurt my feelings.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=52)** If you're new to programming, this course is for you too.
>
> **[0:55](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=55)** Trees are so fundamental to computer science and a deep understanding of them will serve you well throughout your career.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=61)** And if you're a non programmer, I'm glad you're here.
>
> **[1:03](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=63)** Trees are conceptually fascinating, easy to work with and understand on paper.
>
> **[1:08](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=68)** And if you get something out of the coding parts, that's cool too.
>
> **[1:11](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=71)** Maybe you'll be inspired to pick up a little Python by the end.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=75)** But for everyone to get the most out of the series, you really going to want to know basic Python, have Python three installed on your machine and ready to go.
>
> **[1:22](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=82)** And we comfortable with concepts like classes, objects, methods, and especially pointers.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=88)** I also recommend watching the linked list series first, or at least being familiar with linked lists and the practical aspects of working with them.
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=96)** And that's about it.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=98)** Trees are what I like to think of as one of the simple or fundamental data structures of computer science, sort of like how mechanical engineering has the simple machines.
>
> **[1:48](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=108)** You know, the wedge, the screw, the pulley, in software engineering, we have the graph, the link list, the tree.
>
> **[1:55](https://www.linkedin.com/learning/python-data-structures-trees/what-you-should-know?u=76281980&t=115)** And I really hope that everyone gets a chance to appreciate and understand their beauty.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (1)
> **Speakers:** - [instructor] (1)

#### BSTs and other trees
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=0)** - [Instructor] This section is perhaps the most crucial because it forms the absolute foundation of everything we're going to explore throughout this course.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=7)** But it's also one of the easiest, just a few basic concepts to grasp.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=11)** And the first concept I want to talk about is the formal definition of a tree.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=15)** Fundamentally, a tree is any data structure that follows these rules.
>
> **[0:19](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=19)** It has to have exactly one root node.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=22)** So if a tree has two root nodes, they can't be connected to each other so what you actually have is two trees.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=29)** If a tree has no root node, then its children aren't connected to anything, or maybe it doesn't have children and then it's nothing.
>
> **[0:37](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=37)** I don't know, anyway, let's just keep it simple.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=39)** One tree, one root, one root, one tree.
>
> **[0:43](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=43)** Two, each node can have any number of child nodes, can have zero children, in which case we call that node a leaf.
>
> **[0:51](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=51)** It can have 100 children or even infinity children which I guess is a concept more useful for philosophers than software engineers but still this is a valid tree.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=61)** And three, each node, except for the root, links to exactly one parent.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=67)** Because if you have a child with two parents, you start getting loops, and remember trees don't have loops.
>
> **[1:13](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=73)** Oh, and while we're at it, a node cannot be its own parent because that's just weird and unnatural.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=79)** And that's it, any data structure that meets those three criteria is a tree.
>
> **[1:24](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=84)** In practice, there are many different types of trees with additional rules that make them useful.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=88)** For example, data.
>
> **[1:30](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=90)** Each node in a tree usually has some kind of data associated with it.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=95)** In a directory structure, for example, this data would be the directory names and files, or other memory pointers to files at the leafs.
>
> **[1:43](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=103)** There are also usually rules about how the nodes are arranged.
>
> **[1:47](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=107)** For example, we can make a tree of words where all the children of the node A must start with the A.
>
> **[1:53](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=113)** All the children of the node AT must start with the AT.
>
> **[1:57](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=117)** And this is a special kind of tree called a trie.
>
> **[2:00](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=120)** And it's actually often used for things like word look-ups.
>
> **[2:04](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=124)** But the kind of tree that we're going to be talking about is the binary search tree.
>
> **[2:08](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=128)** In a binary search tree, each node has only two children called a left and a right child.
>
> **[2:15](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=135)** This is what makes it a binary or two, a two tree.
>
> **[2:19](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=139)** Each node has a value associated with it.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=142)** Any values to the left of the node must be less than the value of their parents.
>
> **[2:27](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=147)** And any values to the right of the node must be greater than the value of their parents.
>
> **[2:32](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=152)** A tree can also not have duplicated or equal values, each value must be unique.
>
> **[2:38](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=158)** So this results in trees that look like this.
>
> **[2:42](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=162)** This is an example of an illegal binary search tree because the 25 is on the left side of the root.
>
> **[2:48](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=168)** But 25 is obviously greater than 20.
>
> **[2:52](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=172)** Remember, only values that are less than their parents can go on the left.
>
> **[2:57](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=177)** We can fix this by placing the 25 on the right of the tree instead.
>
> **[3:03](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=183)** In fact, if you make a sweep across a binary search tree from left to right, you should find that all of the values are in this numeric order.
>
> **[3:11](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=191)** And if you don't remember the rules right now, that's fine.
>
> **[3:13](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=193)** We are going to go over them again and again and again.
>
> **[3:18](https://www.linkedin.com/learning/python-data-structures-trees/bsts-and-other-trees?u=76281980&t=198)** So strap in, buckle up, make sure you keep your lefts and your rights straight, and let's head over to the next chapter to start working on some code.

> [!info]- Semantic Content
>
> **CLI Commands:** node (13), make (4), find (1)
> **Definitions:** is a  (4), is an  (1)
> **Code Keywords:** let (2), this. (1)
> **Analogies:** for example (3)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)


### 1. Navigating Trees

#### Building a basic tree
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=0)** - [Instructor] I've spent a lot of time in the last three videos talking about trees, binary search trees and how easy they are to build and use.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=7)** Now, let me prove it to you.
>
> **[0:09](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=9)** Let's start with the node class.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=11)** This is going to be the basic building block of our trees.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=15)** And of course nodes aren't very useful without any data, so let's pass some data to it when it's initialized.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=23)** This is going to be the number that the node represents so self.data equals data.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=28)** So now we have an object, it has some data, of course nodes also have this property where they have left and right children.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=36)** So let's add this pointers in there and initialize them to be none at first.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=41)** Okay, great.
>
> **[0:43](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=43)** So how do we use this class?
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=45)** Let's start by defining a new node and giving it some data.
>
> **[0:50](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=50)** Now if we want to start building a tree, we can attach new nodes to the left and right of our parent node.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=56)** So node.left equals node five, node.right equals node data value of 15.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=65)** Note that I'm putting nodes with smaller data, in this case the five to the left and I'm putting nodes with larger data, in this case the 15 to the right.
>
> **[1:14](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=74)** This is because we're building a binary search tree as discussed in the last section, smaller values go to the left, larger values go to the right.
>
> **[1:22](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=82)** And if I wanted to expand the tree a little more, I could do something like this node.left.left equals node two that's going to be our smallest number in the tree.
>
> **[1:32](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=92)** It has to be smaller than five.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=95)** Node.left.right, so we need something that is smaller than 10 larger than five.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=102)** Let's give it a six.
>
> **[1:45](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=105)** Node.right.left, let's put a number between 10 in our root and 15.
>
> **[1:51](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=111)** So how about node 13?
>
> **[1:55](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=115)** Node.right.right, so this can be as big as we want.
>
> **[2:00](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=120)** It has to be bigger than 15.
>
> **[2:02](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=122)** Let's go crazy, give it 10,000.
>
> **[2:05](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=125)** Okay, great.
>
> **[2:07](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=127)** So if you want to see data at a particular point or node in the tree, all I have to do is this, print node.right.data.
>
> **[2:18](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=138)** Print node.right.right.data.
>
> **[2:26](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=146)** Okay.
>
> **[2:28](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=148)** We can run it with Python.
>
> **[2:31](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=151)** Great, so this printed out the 15 and the 10,000.
>
> **[2:37](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=157)** Another thing and to note here is that we can really take any node and declare it to be its own tree.
>
> **[2:44](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=164)** Like if we take my tree equals node.left, awesome, my tree is actually a whole new tree unto itself and node.left is the root of my tree.
>
> **[2:55](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=175)** Trees are recursive, it's new trees all the way down.
>
> **[2:59](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=179)** So in order to avoid confusion around what we're considering to be an official tree, maybe add some metadata or helper functions.
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=189)** What we can do is make a really nice simple wrapper class called class tree.
>
> **[3:16](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=196)** And this is just going to take a root node, just like that.
>
> **[3:25](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=205)** We might even have some simple metadata along with the root node.
>
> **[3:29](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=209)** So maybe like a name for our tree and we can give it a default string value of an empty string.
>
> **[3:38](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=218)** Okay, great.
>
> **[3:38](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=218)** So now we have named trees, they have root nodes and we can instantiate it like this, equals new tree and let's pass in node and we want to call it Ryan's tree.
>
> **[3:58](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=238)** Fantastic.
>
> **[4:00](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=240)** Great, so let's do a little bit of testing with this, print myTree.root.left.data, print myTree.root.right.right.data.
>
> **[4:17](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=257)** Oops, had an auto-complete there.
>
> **[4:25](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=265)** Let's print out the name up here.
>
> **[4:33](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=273)** And get rid of that so we're not confused about what's going on.
>
> **[4:37](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=277)** Ryan's tree and print out a couple of nodes.
>
> **[4:39](https://www.linkedin.com/learning/python-data-structures-trees/building-a-basic-tree?u=76281980&t=279)** There, so now we have a great little tree with just a few lines of code play around with it, get used to it and then head over to the next section where we're going to start expanding these node and tree classes.

> [!info]- Semantic Content
>
> **CLI Commands:** node (24), python (1), make (1)
> **Code Keywords:** let (11), this, (3), pass (2), class. (1), self (1)
> **Code Identifiers:** mytree (2)
> **Cross-References:** in the last (2)
> **UI Navigation:** go to (2)
> **Versions:** node 13 (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)

#### Searching a tree
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=0)** - [Instructor] In this section, we're going to do something so fundamental to binary search trees that it's literally in the name.
>
> **[0:06](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=6)** We are going to binary them.
>
> **[0:08](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=8)** No, I'm kidding, we're going to search them.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=10)** We will search the binary search tree.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=13)** So remember this fundamental property of the binary search tree.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=17)** The small values always go to the left and the large values always go to the right.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=22)** So if I'm starting at the root and I want to find 27, what do I do first?
>
> **[0:27](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=27)** Start here and say, is 27 less than or greater than 50?
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=32)** So obviously 27 is less than 50, so going to 25.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=36)** And I say, is 27 less than or greater than 25?
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=40)** It's greater than, so awesome, I found the 27.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=44)** So let's write this up in code using the node class from the last section.
>
> **[0:48](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=48)** Let's make a function in the node class called search.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=52)** And this is going to take in a target, which is the data that we're looking for in the tree.
>
> **[0:57](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=57)** And the first thing we're going to do is check the case where this current node.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=61)** Self matches the target that we're searching for.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=67)** So if self.data equals target, let's print "found it" or something like that, and then return self.
>
> **[1:17](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=77)** So returning the node that we found in the tree.
>
> **[1:21](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=81)** Otherwise, if we don't match it, we need to keep looking.
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=86)** So if we have a left node, if our current self has a left node, if self.left, then we'll need to check to see if the target is on the left side of the tree.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=98)** That is, the target is less than the current data.
>
> **[1:41](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=101)** So, and self.data is greater than target, we are going to recursively keep searching the tree.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=110)** So let's return self.left.search for the same target.
>
> **[1:57](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=117)** And then we do the same thing on the right side.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=119)** Check if the right exists, if self self.right and self.data is less than target.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=130)** Return self.right.search target.
>
> **[2:15](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=135)** Now, there's a case that's missing here or at least not explicitly written.
>
> **[2:19](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=139)** So what happens when the data we're searching for isn't in the tree?
>
> **[2:23](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=143)** In that case, it'll fall through to the end here.
>
> **[2:27](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=147)** It won't find a viable left or right node.
>
> **[2:29](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=149)** It can't keep going, so it's just going to return none.
>
> **[2:32](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=152)** Remember in Python, there's always an invisible return none at the end.
>
> **[2:36](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=156)** So let's just add a print statement, letting us know that it didn't find anything.
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=165)** There we go.
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=165)** So let's try this out with the tree that we created in the last section.
>
> **[2:50](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=170)** Let's say found is going to be equal to tree.root.search, and let's look for node 10,000.
>
> **[2:59](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=179)** Okay, so found is going to actually just be that node object there.
>
> **[3:05](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=185)** So let's print found.data.
>
> **[3:15](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=195)** Oh, sorry, that's my tree.
>
> **[3:22](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=202)** Great, found it.
>
> **[3:23](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=203)** And it returns that note with the value of 10,000.
>
> **[3:28](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=208)** Note that we can also take advantage of our tree class here as a rapper and not a convenience function, search.
>
> **[3:36](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=216)** And that's going to take self and then just search the root node.
>
> **[3:41](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=221)** Return self.root.search for a target.
>
> **[3:48](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=228)** Target, target.
>
> **[3:52](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=232)** And by adding these functions into this tree rapper, it just kind of creates a nice way of accessing it.
>
> **[3:58](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=238)** So instead of calling my tree.root.search, I can just call my tree.search.
>
> **[4:04](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=244)** Found it, 10,000.
>
> **[4:06](https://www.linkedin.com/learning/python-data-structures-trees/searching-a-tree?u=76281980&t=246)** Alright, great.

> [!info]- Semantic Content
>
> **Code Keywords:** self (13), let (9), function (2), for. (1), case, (1)
> **CLI Commands:** node (10), find (3), make (1), python (1)
> **UI Navigation:** go to (2)
> **Versions:** node 10 (1)
> **Cross-References:** in the last (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Traversing a tree
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=0)** - [Instructor] And the last section we were given a target node to search for and made a beeline straight to in our tree.
>
> **[0:06](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=6)** Along the way we left a trail a visited nodes as we made each decision about where to go next.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=12)** But what if instead of the goal being to find a particular target node, the goal was just to systematically visit every node.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=20)** Now this can be useful for many reasons counting the number of nodes in a tree or finding the maximum and minimum depths for example.
>
> **[0:27](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=27)** Really understanding how to write a program that visits every node of a tree can reveal some pretty cool properties about trees and recursion that might not be obvious at first.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=36)** So let's take a look at the three types of tree traversal.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=40)** Technically there are more than just these three types but these are the three types you'll see commonly and that computer scientists commonly use.
>
> **[0:48](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=48)** So there's, pre-order traversal, in-order traversal and post-order traversal.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=53)** Let's take a look at pre-order traversal.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=56)** This is where we visit the node, starting with the root and then going down like this.
>
> **[1:00](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=60)** So one, two, three, four, five, six, seven, eight, nine.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=72)** So think about big diagonal sweeps, and then you go back and visit those ones to the right real quick.
>
> **[1:17](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=77)** And the in-order traversal, we're going to start with the smallest node and go left to right.
>
> **[1:23](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=83)** So one, two, three, four, five, six, seven, eight, nine.
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=96)** And when you do an in-order traversal you're starting with the smallest node and going to the largest node in order.
>
> **[1:43](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=103)** So in-order traversal.
>
> **[1:45](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=105)** In the post-order traversal, we're going to start with the leftmost node again and go left to right visiting the root last.
>
> **[1:53](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=113)** So one, two up to the root three, four, five, six up to the root eight, up to the root.
>
> **[2:06](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=126)** And the count for all these different traversals is actually very similar.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=130)** The only difference between them is at what point do you print/log/record the current node you're visiting.
>
> **[2:18](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=138)** So let's go check out the code.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=142)** So here's the code.
>
> **[2:23](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=143)** And the first thing we want to do is sort of create our three traversal functions in the node class.
>
> **[2:29](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=149)** So def traversePre-order take some self, traverseInorder and then of course, def traversePostorder.
>
> **[2:46](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=166)** Okay, great.
>
> **[2:47](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=167)** And let's start up by a writing traversePre-order.
>
> **[2:50](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=170)** The first thing we know we want to do is print the current node.
>
> **[2:53](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=173)** So print self.data, and remember pre-order tree traversal starts by printing the root node then goes left prints that node, and then keeps going left as much as it can before going right.
>
> **[3:07](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=187)** So, the next thing I want to do is if self.left if there's a left node, self.left.traversePre-order.
>
> **[3:16](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=196)** So we recurse down.
>
> **[3:18](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=198)** Then if self.right, self.right.first, and then we recurse again.
>
> **[3:26](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=206)** Now here's the really cool thing, we can fill in the other two functions simply by copying and pasting this pre-order traversal code and then changing where we call the print function.
>
> **[3:39](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=219)** So here we want to call print in the middle.
>
> **[3:43](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=223)** Let's clean this up.
>
> **[3:48](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=228)** And then here in post-order, the last thing we want to do is call print.
>
> **[3:57](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=237)** With traverse in-order, remember this is the one that prints the nodes out from smallest to largest, and you can really see how it works here.
>
> **[4:05](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=245)** Anything in the left is going to be smaller than the current node.
>
> **[4:09](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=249)** So we'll always print those out if possible before printing itself.
>
> **[4:13](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=253)** Then it goes to print everything to the right and those nodes will always be larger.
>
> **[4:18](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=258)** So you can kind of see how it ends up printing out the values in order.
>
> **[4:22](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=262)** And let's add some wrappers to the tree class as is tradition def traverseInorder self self.root.traverseInorder.
>
> **[4:36](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=276)** Okay, great.
>
> **[4:38](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=278)** I'll just copy and paste to make this easy,
>
> **[4:48](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=288)** Pre, Pre, Post, Post.
>
> **[4:56](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=296)** And here I have the same tree that we had on the whiteboard with traversePreorder, traverseInorder and traversePostorder.
>
> **[5:04](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=304)** So let's give this a try.
>
> **[5:09](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=309)** So there you have it.
>
> **[5:11](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=311)** And if you think we're done with recursive algorithms on trees, think again.
>
> **[5:15](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=315)** We're going to be doing something a little similar to this in the next section, looking at the heights of trees.
>
> **[5:20](https://www.linkedin.com/learning/python-data-structures-trees/traversing-a-tree?u=76281980&t=320)** So you're definitely going to be a pro at this if you're not already.

> [!info]- Semantic Content
>
> **Code Keywords:** self (8), let (7), this. (1), class. (1), function (1)
> **CLI Commands:** node (16), find (1), make (1)
> **Code Identifiers:** traverseinorder (4), traversepre (3), traversepostorder (2), traversepreorder (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Getting the maximum height of a tree
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=0)** - [Instructor] When computer scientists talk about the height of a tree, they mean how many nodes that are from the root to the leaf at the deepest part of the tree.
>
> **[0:08](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=8)** The height of a tree is it's maximum height.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=11)** So, this tree with a very shallow and a very deep part still has a height of four.
>
> **[0:16](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=16)** One, two, three four.
>
> **[0:19](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=19)** Remember, the height is important because it determines the maximum run time for the search of a tree.
>
> **[0:24](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=24)** So if I'm trying to find this node, the two, it takes me four steps.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=28)** Even though there might not be that much stuff in the tree.
>
> **[0:31](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=31)** So let's look at how to find the maximum height, or the height of the tree.
>
> **[0:35](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=35)** The basic idea is for each node, starting with the root tree recursively call get height for each of its children.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=41)** And those children call get height for their children, et cetera.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=44)** Each time get height as recursively called, the starting height that node is given and incremented.
>
> **[0:51](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=51)** So here, the starting height is zero at the root.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=54)** Then we have a string, one, two, three, and four.
>
> **[1:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=60)** If a leaf node has reached, the function returns kicks its height back up the stack and the node above it.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=67)** And each node above it returns the deepest height on either side.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=72)** So this node, for example, it has a high of four, and a hight of a three, and it will return four as its height.
>
> **[1:22](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=82)** And if this is making her brain scramble a little bit, no worries.
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=86)** The code itself is actually three lines long.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=88)** So let's go check it out.
>
> **[1:31](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=91)** So let's start by defining a function called height in our node class here.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=95)** So Def height.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=98)** And then we also want to pass in an argument called H, and this is going to be the height at our current level in the tree, whatever that level is.
>
> **[1:47](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=107)** So the basic idea is that we want to check to see if the left and the right nodes exist.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=112)** And remember, each time we recurse down, we're literally moving down one level in the tree.
>
> **[1:57](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=117)** So then we're going to add one to this H here.
>
> **[2:01](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=121)** So we can write something like this.
>
> **[2:03](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=123)** Left height is going to be equal to self.left.height H plus one, 'cause remember we're recursing down when we call this, if self.left, otherwise we want to set the left height equal to H.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=142)** And we can do the same thing for the right height, self.right.height, H plus one, if self.right, else, it's just whatever H is at this current level.
>
> **[2:35](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=155)** All right, now here's the trick.
>
> **[2:37](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=157)** We're actually going to return the max of the left height and the right height.
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=165)** Okay.
>
> **[2:46](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=166)** So, there you go.
>
> **[2:47](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=167)** Three lines of Python, just like I promised.
>
> **[2:50](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=170)** If you think it's too good to be true, let's try it out.
>
> **[2:54](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=174)** So here I have that same tree that we had on the whiteboard.
>
> **[2:57](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=177)** I'm calling it very tall tree, and then we want to print out tree.root.height.
>
> **[3:05](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=185)** Okay, and what is that?
>
> **[3:07](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=187)** Four.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=188)** There you go.
>
> **[3:10](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=190)** Let's also, just as a test, make another tree called a very short tree, and then do the same printing out the height.
>
> **[3:22](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=202)** And, there we go.
>
> **[3:23](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=203)** Very short tree that only contains the root node.
>
> **[3:25](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=205)** Has a height of zero.
>
> **[3:27](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=207)** And then of course, to sort of finish this off, we're going to add an function to a wrapper called height, and then we return self.root.height.
>
> **[3:45](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=225)** And then we should be able to do this, and then we have a nice, convenient tree height function.
>
> **[3:53](https://www.linkedin.com/learning/python-data-structures-trees/getting-the-maximum-height-of-a-tree?u=76281980&t=233)** Great.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), self (5), function (4), this, (2), pass (1)
> **CLI Commands:** node (9), find (2), python (1), make (1)
> **Analogies:** for example (1), just like (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### Getting all nodes at a particular depth
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=0)** - [Instructor] We're going to write a function that takes in an arbitrary depth, like two, and prints out the nodes at that depth from left to right.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=11)** So while getting all the nodes at a particular depth might not seem immediately useful, it's essential for some of the more advanced tasks when working with trees, especially printing them which is a challenge in the next video.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=23)** So imagine if you will, a tiny, little person attached to the root by a bungee cord.
>
> **[0:30](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=30)** There we go.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=32)** And they leap off the root of the tree, and then get yanked back up when the cord runs out.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=40)** And then they go back down and then up again, then down, then up again, then down.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=45)** And each time at the point of maximum descent, they record the node that they're currently at before being yanked back up again.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=54)** And they do this until they recorded every node in a straight line across the tree.
>
> **[1:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=60)** Now, this might seem like a bizarre visualization, tiny, little people with bungee cords, but that's exactly how the code works.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=67)** So let's go check it out.
>
> **[1:10](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=70)** All right let's write a function called getNodesAtDepth in the node class, getNodesAtDepth.
>
> **[1:22](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=82)** And this will be very much like our height function here.
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=86)** But instead of incrementing the height at each level, we decrement it, return when we've reached zero and then add nodes to an array to keep track of along the way as we recurse.
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=97)** All right, so we're going to take an a depth and a list of nodes.
>
> **[1:44](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=104)** and this is actually going to be an empty array by default.
>
> **[1:48](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=108)** So we don't have to explicitly give it to this function.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=112)** Now, if depth is equal to zero, again, we want to upend the node that we're currently at.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=119)** So that would be self.data and return the list of nodes.
>
> **[2:05](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=125)** The next thing we need to do is check if there's a left or a right node and then recursively call this function.
>
> **[2:11](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=131)** Again, very, very similar to what we did in order to get the height of the tree, and also similar to the tree traversal functions.
>
> **[2:17](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=137)** So seeing some patterns here yet?
>
> **[2:19](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=139)** So if self.left, self.left.getNodesAtDepth, depth minus one, pass in the nodes.
>
> **[2:32](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=152)** If self.right, same thing, self.right.getNodesAtDepth, depth minus one.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=160)** pass in the nodes.
>
> **[2:42](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=162)** And if we fall through here, we still want to make sure we return that nodes array.
>
> **[2:47](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=167)** All right.
>
> **[2:48](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=168)** To finish it off, let's just add a wrapper to our tree class.
>
> **[2:53](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=173)** getNodesAtDepth.
>
> **[2:55](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=175)** Self is going to take a depth and return self.root.getNodesAtDepth with that depth.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=188)** Okay, great.
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=189)** Just to test this out, here I have the tree that I showed on the whiteboard earlier.
>
> **[3:14](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=194)** Let's print tree.getNodesAtDepth2.
>
> **[3:23](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=203)** Okay, great.
>
> **[3:24](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=204)** And that's the 13, 35, 55 and 103 that we saw on the whiteboard.
>
> **[3:29](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=209)** What happens if we do getNodesAtDepth3?
>
> **[3:35](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=215)** Hm.
>
> **[3:35](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=215)** I would expect to see eight nodes there, but of course, only four of the nodes that level were actually populated.
>
> **[3:43](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=223)** So if there are missing nodes at a certain level, it'll just skip over them without doing anything.
>
> **[3:48](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=228)** But there are some situations in which it can be desirable to sort of fill in the gaps, even if there aren't any values there.
>
> **[3:54](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=234)** And we can actually make a simple change to our code in order to do that.
>
> **[3:59](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=239)** So getNodesAtDepth here.
>
> **[4:01](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=241)** So else: nodes.extend.
>
> **[4:07](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=247)** And let's just populate it with a none value times two raised to the power of depth minus one.
>
> **[4:16](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=256)** And we're going to do the same thing on the right side.
>
> **[4:23](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=263)** I did the math earlier on this, and you can check me if you want, but two to the power of depth minus one will fill in gaps appropriately, depending on the height that we first encountered a missing node.
>
> **[4:37](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=277)** Remember, if we encounter a missing node very high up as compared to the depth that we want to go down, that's actually going to represent a lot of gaps in our tree down lower at the depth that we're recording the nodes.
>
> **[4:50](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=290)** So let's test this out again.
>
> **[4:52](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=292)** And we're still getting getNodesAtDepth level three.
>
> **[4:56](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=296)** And perfect.
>
> **[4:57](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=297)** You can see all the nodes we would expect to find.
>
> **[5:00](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=300)** We can see where the gaps are.
>
> **[5:02](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=302)** I think that looks really great.
>
> **[5:03](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=303)** And this function is going to be really useful for the next challenge, wink, wink.
>
> **[5:08](https://www.linkedin.com/learning/python-data-structures-trees/getting-all-nodes-at-a-particular-depth?u=76281980&t=308)** So let's head on over and check it out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), self (7), function (6), pass (2), class, (1)
> **CLI Commands:** node (7), make (2), find (1)
> **Code Identifiers:** getnodesatdepth (8), getnodesatdepth2 (1), getnodesatdepth3 (1)
> **Analogies:** similar to (2), imagine (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Printing a tree
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=0)** - [Instructor] All right in the previous section, we printed out all the nodes at a specific depth of the tree essentially printing out one row of the tree at a time and you might be thinking to yourself, Hmm if I did this to all of the rows of the tree in order, could I actually see the tree?
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=21)** And the answer is yes.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=23)** So let's print out trees charter terminal so we can examine them more visually but print functions like this are also a matter of personal taste and style.
>
> **[0:33](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=33)** So how do you draw connections between the nodes?
>
> **[0:35](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=35)** How do you space the nodes?
>
> **[0:37](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=37)** There are a lot of little details and decisions that need to be made.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=41)** So dust off those old text formatting skills and rise to the challenge.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=45)** I want you to create a print function for a tree that will display all the nodes of the tree with connections between them in the terminal.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=52)** Obviously not expecting anything that'll print millions of nodes that would get a little bit messy but four or five levels of depth to handle any upcoming exercises would be nice.
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-trees/challenge-printing-a-tree?u=76281980&t=62)** So play around with it and see what you come up with.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Tools:** terminal (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Printing a tree
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=0)** - [Instructor] All right, so I hope you had fun with this one, and made something that prints out your trees satisfactorily.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=11)** We're going to be doing a lot of tree printing in the next two chapters.
>
> **[0:14](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=14)** So whether you use your solution or want to use mine, doesn't matter, but you do need something to print out your trees.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=20)** So I'll walk you through what I came up with.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=23)** The first thing we want to do, and by the way, this is all going to be in the tree class, not the node class that we've been mostly working with.
>
> **[0:30](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=30)** But the first thing that we're going to want to do is print out the tree's name.
>
> **[0:34](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=34)** You know, we added those name attributes to the trees, might as well start using them.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=39)** I also added a feature where you can pass in an optional label, just for this one instance of printing.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=45)** And it will also print out that, you know, maybe we could put like a fun dash in there or something.
>
> **[0:50](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=50)** Next thing is going to be to get the height of the tree.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=54)** So that's that height function that we wrote, and you need this to determine the ultimate width of the tree, and how big the base of the tree is going to be.
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=62)** In the spacing, hard-coded, this is the spacing between each node.
>
> **[1:08](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=68)** Then you can use all of this information to get the base width of the tree.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=72)** The total width will be this many spaces, and then use that to calculate the offset, which is how far over you start printing spaces before you begin printing data.
>
> **[1:24](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=84)** And that offset is going to be the biggest when it prints the root node, because that's going to go right in the middle, so you're going to have a bunch of space, print out the root node, and then print the next line.
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=96)** Then we start iterating through all of the rows here.
>
> **[1:40](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=100)** If the depth is greater than zero, we know that we've already printed that root level.
>
> **[1:45](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=105)** And the first thing we need to do is print some directional lines, connecting the nodes together.
>
> **[1:49](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=109)** So you can see I'm printing the offset, doing some spacing and join, and then slashes, forward slash, and then a backslash there.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=119)** Next we want to get the next row of data to print out.
>
> **[2:02](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=122)** So that's going to be using that get nodes at depth function, told you it would come in handy.
>
> **[2:07](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=127)** And then we print the offset.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=130)** And then we start printing out the actual data that we got from that row.
>
> **[2:14](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=134)** And this node to char, that's just a little utility function that I wrote.
>
> **[2:17](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=137)** So that takes in either a number or none.
>
> **[2:20](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=140)** Remember that get nodes at depth can return none.
>
> **[2:25](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=145)** And so if that's the case, I just print an underscore.
>
> **[2:27](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=147)** I thought that looked pretty nice, But then it looks at the length of that number.
>
> **[2:32](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=152)** So if you have the number 20, it's going to take up two spaces.
>
> **[2:37](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=157)** If you have the number 200, it's going to take up three spaces.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=160)** You kind of want to account for that when you're trying to make your tree look nice.
>
> **[2:44](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=164)** So after you printed that out, just update the spacing, and offset for the next row.
>
> **[2:49](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=169)** And then you're good.
>
> **[2:51](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=171)** You get a quick sample.
>
> **[2:53](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=173)** This is the same tree we used in the last section.
>
> **[2:59](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=179)** Prints out the title, Ryan's cool tree.
>
> **[3:01](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=181)** And you can see how it filled in those gaps with the underscores.
>
> **[3:05](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=185)** Looks a little bit better, I think.
>
> **[3:07](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=187)** With three rows, spacing starts to get a little bit funky at four rows.
>
> **[3:11](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=191)** But I might play around with that later.
>
> **[3:13](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=193)** So if you have a really cool tree printing solution that you came up with, I would love to see it.
>
> **[3:19](https://www.linkedin.com/learning/python-data-structures-trees/solution-printing-a-tree?u=76281980&t=199)** You know, reach out, let me know how you did with this.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), class, (1), pass (1), case, (1), let (1)
> **CLI Commands:** node (5), make (1)
> **Cross-References:** in the next (1), in the last (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Modifying Trees

#### Adding nodes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=0)** - [Instructor] Up until this point, every interaction we've had with the tree has been to read it without any modification.
>
> **[0:06](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=6)** But in this chapter, we'll start learning a few of the basic methods of tree modification and actually start changing these trees.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=13)** The most obvious modification of course is to add data to the tree.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=17)** Fortunately, this is also one of the easiest.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=20)** We're going to write a function very similar to the search function from chapter one, section two.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=26)** In fact, the code is almost completely identical apart from what happens when we find the node and what happens when we don't find the node.
>
> **[0:33](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=33)** So this is the original search function, and I'm literally just going to copy paste it.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=39)** Change the name to add and change the variable target to data.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=44)** This isn't obviously changing target to data isn't a functional change, but this is no longer a target we're searching for, it's data that we're adding.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=53)** And so I think it makes sense to change the variable name there.
>
> **[0:58](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=58)** Just change it in a few places there.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=61)** If the date data is equal to the data that we found in the current node, there's nothing to do.
>
> **[1:06](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=66)** Remember trees can't have duplicates, so let's just return and do nothing.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=72)** And here we're basically continuing our tree search, if there's a left child, and the data we're searching for is smaller than the current data, we're going to keep going and we're going to recurse down now looking to add that data, same with the right side.
>
> **[1:30](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=90)** But there's still a case we're missing and that's the part where we actually add the data.
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=94)** So if the data is less than the current nodes data and there's no left child, what we want to do is actually just add the data at this point.
>
> **[1:44](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=104)** And we can rewrite this a little bit to make this more efficient.
>
> **[1:48](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=108)** So, if data is less than self.data if self.left is None, here's where we want to add the data self.left = Node.
>
> **[2:03](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=123)** We'll make a new node with that data.
>
> **[2:05](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=125)** So if there's no left child, the data should go there and we're setting the left child equal to the data.
>
> **[2:11](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=131)** And then here's where we recurse else: self.left, does exist.
>
> **[2:16](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=136)** Self.left.add data.
>
> **[2:20](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=140)** Now, I'm just going to copy and paste this and switch it around for the right side.
>
> **[2:26](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=146)** So, change that to a greater than right, right, right.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=153)** Trees are wonderfully somatic.
>
> **[2:37](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=157)** So, now we have our add function and let's actually test it out and let's add a wrapper here too as always def add self, data.
>
> **[2:52](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=172)** Self.root.add data. Great.
>
> **[2:57](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=177)** And I happen to have a tree hanging around here.
>
> **[3:00](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=180)** Let's add tree.add insert a 10.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=188)** Great, get out of the 10 and we can try it with a tree.add.
>
> **[3:14](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=194)** I don't know, 76.
>
> **[3:19](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=199)** Cool.
>
> **[3:20](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=200)** And what if we do tree.add one that's already in there, like 75.
>
> **[3:30](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=210)** Takes no action. Perfect.
>
> **[3:32](https://www.linkedin.com/learning/python-data-structures-trees/adding-nodes?u=76281980&t=212)** So now you know how to add data to trees.

> [!info]- Semantic Content
>
> **Code Keywords:** self (7), function (4), let (4), for, (1), else: (1)
> **CLI Commands:** node (5), find (2), make (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Deleting nodes: Theory
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=0)** - [Instructor] Deletion from a tree like insertion starts with searching the tree based on a target value.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=5)** If the value is not found, we return without doing anything we don't make any changes to the tree but if we do find the target value, we have to remove it but we can't just, you know, take it out or any children that has, might go floating off into space.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=20)** So we have to be careful.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=22)** There are three cases to consider for deletion.
>
> **[0:25](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=25)** Zero children, one child and two children.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=29)** Remember, according to the Computer Scientists all problems are caused by children.
>
> **[0:34](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=34)** In the case of zero children like this 25 we just remove the link to the parent node.
>
> **[0:38](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=38)** The node gets deleted and we're all good.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=41)** That's it.
>
> **[0:43](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=43)** In this case, the node to be deleted has one child like the 75 here.
>
> **[0:49](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=49)** Here, the child becomes the parent just like I'm turning into my mother.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=54)** So we take this hundred, move it up.
>
> **[0:58](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=58)** This link becomes a link to 100 now and the 75 has been deleted.
>
> **[1:03](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=63)** In the case of two children just remember RTFM that of course stands for Right Tree Find Minimum.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=75)** So this technique might seem a little bit arbitrary and non-obvious at first but trust me on this.
>
> **[1:22](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=82)** If you memorize it, RTFM and apply it every time it will work, it will always work but let's take a look at why it works because that will make things easier to remember.
>
> **[1:32](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=92)** So in the case of two children, like with the 75 here you're going to go to the right tree and find the minimum node or the smallest node and that's going to be this 80 here and the node is guaranteed to have at most one child.
>
> **[1:48](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=108)** So we can even put like, you know, 92 hanging off of here.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=112)** Why isn't guaranteed to have at most one child?
>
> **[1:55](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=115)** Because if it had a left child it wouldn't be the smallest node anymore.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=119)** So we know the smallest node in the right tree has no left child and so what we do is take this node, take its value and put it into the node here that we want to be deleted.
>
> **[2:12](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=132)** Get rid of the 75, make it an 80 and then we just take any orphaned right children hanging off of here and move them up.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=142)** It becomes essentially a deletion of this node which only has one child and we can do that because any value from this right tree will always be bigger than anything from the left tree and because this node is the smallest everything on the right tree is still larger than it so the math checks out, this is a valid tree.
>
> **[2:43](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=163)** So right tree find minimum.
>
> **[2:46](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=166)** Replaced the node to be deleted with the minimum and then essentially you perform a deletion on this node which only has one child and is much easier to delete.
>
> **[2:55](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=175)** All right.
>
> **[2:56](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=176)** So that's all well exciting but what's more exciting is deleting those in your life by which I mean of course in code.
>
> **[3:02](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-theory?u=76281980&t=182)** So head on over to the next section and we're going to write this up.

> [!info]- Semantic Content
>
> **CLI Commands:** node (14), find (4), make (3)
> **Code Keywords:** case, (1), this. (1), let (1), delete (1)
> **Env Vars:** rtfm (2)
> **Definitions:** stands for (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Deleting nodes: Code
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=0)** - [Instructor] In the last section, we went over the plan for how to delete nodes and repair the tree afterwards.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=5)** So make sure you've watched and reasonably understand the last video because now we're going to actually be coding it up.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=10)** So we're going to make a new function in the node class, and we're going to call it delete.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=15)** Def delete.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=17)** And that's going to take in a target, which is the target value that we're actually going to be deleting from the tree.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=23)** And there are three cases here, and this will probably seem pretty familiar at this point.
>
> **[0:27](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=27)** If self.data is equal to target, do the deletion here.
>
> **[0:35](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=35)** Else, if self.right and target is greater than self.data, we recurse down.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=42)** So, self.right.delete target.
>
> **[0:47](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=47)** If self.left and target is less than self.data, self.left.delete target recurse down on the left side.
>
> **[0:59](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=59)** Before we fill in this part, the part where the deletion actually happens, I wanted to take a step back for a minute and look at how we're going to call this in the tree class itself.
>
> **[1:10](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=70)** So def delete self target and ordinarily we would do self.root.delete, target, just like that.
>
> **[1:21](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=81)** But what if the route itself needed to be deleted?
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=86)** And in this case, we can't just perform some operation or transformation on the route, but we actually need to get rid of this object entirely and replace the root with an entirely different node.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=95)** So, we might not need to, but if we do, we're going to want something like this.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=102)** And this will actually replace the route, but this means that our delete function needs to be returning some sort of a node object.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=110)** Now, I'm not saying this is the only way to do it, but this is how I'm going to do it today.
>
> **[1:55](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=115)** So what we do is we go back up to our delete function here.
>
> **[2:02](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=122)** And just make sure that this is returning things and it's replacing things appropriately.
>
> **[2:13](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=133)** - Okay. So now let's take a look at what happens under the self.data equals target, because this is where the magic happens.
>
> **[2:21](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=141)** If self.left and self.right, if both of these exist, we know that we need to RTFM, Remember that stands for right tree, find a minimum, and do that deletion where we preserve both the children Else, one child or no children under this else.
>
> **[2:41](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=161)** So, if there are no children, we want to return none.
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=165)** And if there's one child, we want to return that child.
>
> **[2:49](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=169)** And the cool thing is we can accomplish this with one line.
>
> **[2:53](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=173)** Turn self.left or self.right.
>
> **[2:58](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=178)** So if both of are none, it'll just return none.
>
> **[3:01](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=181)** But if one of them exists it'll return the one that exists.
>
> **[3:04](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=184)** Pretty neat, right?
>
> **[3:05](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=185)** But not for the RTFM case.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=188)** So we want to find the minimum of the right tree.
>
> **[3:10](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=190)** And the first thing we're going to do is write a function called findMin, just a little helper function here.
>
> **[3:18](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=198)** And this is just going to recurse down and find the minimum.
>
> **[3:20](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=200)** And that minimum is going to lie to the left, right?
>
> **[3:25](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=205)** .Left.findMin, or return self.data.
>
> **[3:32](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=212)** So this basically finds the leftmost piece of data in the tree.
>
> **[3:39](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=219)** So minValue, it's going to be equal to self.right.findMin.
>
> **[3:46](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=226)** Because we want to find the minimum value in that right tree.
>
> **[3:51](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=231)** We want to use that to replace the current data.
>
> **[3:55](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=235)** And then what we want to do is we want to is we want to delete that minimum value in the right tree.
>
> **[4:00](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=240)** So self.right is going to be self.right.delete minValue.
>
> **[4:08](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=248)** So we can use this delete function to actually delete that minValue from the right tree.
>
> **[4:13](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=253)** And that's that we're deleting it from self.right.
>
> **[4:16](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=256)** So that right subtree only.
>
> **[4:18](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=258)** So it's not going to touch the value that we just inserted here.
>
> **[4:23](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=263)** Also, return self.
>
> **[4:24](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=264)** Can't forget that.
>
> **[4:26](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=266)** So now that everything's in place, I happen to have that tree from the white board in the last section, and we have that here, and we can print it out.
>
> **[4:40](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=280)** Okay, great.
>
> **[4:41](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=281)** Let's take a look.
>
> **[4:44](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=284)** So, let's try the experiment that we did on the whiteboard and actually just delete that 75, and that, remember, has two children there.
>
> **[4:59](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=299)** Save it.
>
> **[5:03](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=303)** Great, deleted the 75.
>
> **[5:06](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=306)** The other thing I want to check is to make sure it deletes the root value appropriately as sort of an edge case.
>
> **[5:16](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=316)** All right.
>
> **[5:17](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=317)** And it leaves the 50 and the replaced it with the 67.
>
> **[5:21](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=321)** So this tree is starting to look a little lopsided though.
>
> **[5:23](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=323)** If you noticed, not many values over here, a bunch of them kind of hanging down there.
>
> **[5:27](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=327)** So, how do we deal with that situation?
>
> **[5:30](https://www.linkedin.com/learning/python-data-structures-trees/deleting-nodes-code?u=76281980&t=330)** I would recommend that you head over to the next video to find out.

> [!info]- Semantic Content
>
> **Code Keywords:** self (20), delete (14), function (6), let (3), else, (2)
> **CLI Commands:** find (5), make (4), node (3)
> **Code Identifiers:** findmin (3), minvalue (3)
> **Cross-References:** in the last (2), next video (1)
> **Env Vars:** rtfm (2)
> **Definitions:** means that (1), stands for (1)
> **Speakers:** - [instructor] (1), - okay (1)
> **Analogies:** just like (1)

#### Detecting unbalanced trees
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=0)** - [Instructor] Well, adding and deleting all of these nodes, you've probably noticed that some trees get what computer scientists call unbalanced.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=7)** For instance, if we have this tree, 25, 50, 75 this could obviously be more concisely written in a different way as 50, 25 and 75.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=21)** All the same values, but in a much more compact tree.
>
> **[0:25](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=25)** And this isn't just a matter of some frivolous aesthetics.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=28)** The more levels of tree has, the longer it can take the search it, even if the number of nodes is the same.
>
> **[0:34](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=34)** For instance, if we want to find the 75, we need to make two hops in the previous tree.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=40)** But with this one, it's just to check to see if 75 is greater than or less than 50.
>
> **[0:46](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=46)** Obviously not a big deal in this case, but imagine you're doing millions of tree lookups perhaps with very large trees, this becomes a huge deal.
>
> **[0:55](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=55)** So it's critically important to be able to detect when trees are unbalanced and be able to prevent or fix imbalances.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=61)** And we'll be talking about fixing them in the next chapter, but let's talk about a formal definition of an unbalanced tree.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=67)** So if I take this nice balanced tree and add the number 100 to it, there's no way that this tree could get more compact.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=75)** It's still fine.
>
> **[1:16](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=76)** But then if I had 150 to it, okay, now it's unbalanced.
>
> **[1:21](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=81)** And so you can kind of see why this formal definition of an unbalanced tree makes sense.
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=86)** A tree is unbalanced if at any node, one side of a tree has a maximum depth of two or greater than the other side.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=95)** So in the case of this tree, we look at the depth of the left side of the root, the left side of the root and the depth is one.
>
> **[1:44](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=104)** The maximum depth of the right side is one, two, three so three minus one is two.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=112)** So the right side has a depth of two or greater than the depth of the left side so the tree is unbalanced.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=119)** You could also say that the tree is unbalanced at this point at the root.
>
> **[2:03](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=123)** And if we look at the 25 over here, there are no children off of here and there are no children off of here, this is a perfectly balanced point on the tree.
>
> **[2:13](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=133)** The tree is not unbalanced at this point.
>
> **[2:16](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=136)** The tree is still unbalanced but its point of imbalances at the root node here.
>
> **[2:20](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=140)** So, all right, let's head over to the code and look at how to identify these unbalanced nodes and unbalanced trees.
>
> **[2:27](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=147)** All right, so where can I write a function on the node class called is balanced.
>
> **[2:32](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=152)** And this is going to tell you guessed it, whether or not that particular node is balanced at that point.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=160)** So is balanced takes in self.
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=165)** The first thing we need to do is get the left height and that's going to be self.left.height plus one.
>
> **[2:53](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=173)** And that's only if the left side exists, if self.left else zero.
>
> **[3:01](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=181)** So this is the height at the left child plus one, if the left child exists else, it has a high of zero over there because there is no left child.
>
> **[3:11](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=191)** And then we do the same thing with the right, self.right.height plus one if self.right else zero.
>
> **[3:20](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=200)** All right, and then we need to return whether or not the difference between these two heights is less than two.
>
> **[3:25](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=205)** So return absolute value of left height minus right height is less than two.
>
> **[3:36](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=216)** Okay, so let's test this out on the tree from our whiteboard here.
>
> **[3:43](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=223)** And let's check if the root node is balanced, tree.root.is balanced.
>
> **[3:54](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=234)** And then we also want to check tree.root.left.is balanced.
>
> **[4:03](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=243)** And there we go.
>
> **[4:04](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=244)** It's not balanced at the root and is balanced at that node to the left there.
>
> **[4:11](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=251)** So it looks good.
>
> **[4:12](https://www.linkedin.com/learning/python-data-structures-trees/detecting-unbalanced-trees?u=76281980&t=252)** Head over to the next video for a little challenge involving this function.

> [!info]- Semantic Content
>
> **Code Keywords:** self (5), let (4), function (2), case, (1), else, (1)
> **CLI Commands:** node (6), find (1), make (1)
> **Analogies:** for instance (2), imagine (1)
> **Cross-References:** in the next (1), next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Adding a balance indicator to the printed tree
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=0)** - [Instructor] In the last section, we looked at determining the balance of the tree at any given node.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=10)** And this is going to be a really important thing to track throughout the next chapter.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=13)** So for this reason, it'd be really nice if we could see the balance of our tree in our print function.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=18)** Remember the function from the challenge in the last chapter.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=21)** So for this challenge, I want you to modify the tree printing code from chapter one to indicate whether or not a tree is balanced.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=28)** You might write in the height differences at each node or at each point, an indicator on the exact node, maybe get really crazy and look into libraries that print text in different colors.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=40)** Whatever you want to do, up to you.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=42)** Have fun with it.
>
> **[0:43](https://www.linkedin.com/learning/python-data-structures-trees/challenge-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=43)** And I'll see you in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (2), next chapter (1), in the next (1)
> **CLI Commands:** node (3)
> **Code Keywords:** function (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Adding a balance indicator to the printed tree
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:06](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=6)** So hopefully this challenge wasn't too difficult.
>
> **[0:09](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=9)** It shouldn't have been as hard as writing the print function in the first place.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=12)** So I figured I'd give you a bit of a rest after getting through that last chapter.
>
> **[0:16](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=16)** So I want the fairly simple root and I just added an asterisk after each node if the node is in balance.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=26)** So you can see here, we know this point is imbalanced at the root.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=29)** And so an asterisk gets added after it, 75, that's another point of imbalance that turned up and that makes sense because it has two children off this side and no children off that side.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=39)** And this involved writing a two string function on the node class.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=44)** So it can tell whether or not itself is balanced and if it's not balanced then it returns it state as a string with an asterisk.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=54)** If it is balanced, it just returns its data as a string.
>
> **[0:57](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=57)** And this is used by the print function and this sort of internal utility function, nodeToChar in particular.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=65)** And this now takes in a node object and then calls to string on it.
>
> **[1:10](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=70)** And this is convenient because it can take into account the length of this whole string whatever is returned with or without the asterisk.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=79)** And it uses this to sort of keep the alignment of all the characters consistent.
>
> **[1:24](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=84)** So it just treats this as sort of a three character bit of data that needs to be printed out there and that keeps all the space in consistent.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=93)** In addition, I had to make a modification to get nodes at depth.
>
> **[1:39](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=99)** That function on the node object and what it does is instead of, we used to have self.data, append self.data so you just get like a list of no data that was there, not actually append self and this is called by the print function.
>
> **[1:58](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=118)** So instead of the print function just getting a list of numbers, it gets a list of note objects which allows it to call these functions on the node object to tell if they're balanced or not at that point.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=130)** Being able to see the points of imbalance in a tree is going to be something that's really critical for the next chapter.
>
> **[2:16](https://www.linkedin.com/learning/python-data-structures-trees/solution-adding-a-balance-indicator-to-the-printed-tree?u=76281980&t=136)** So I recommend that you add this or something like it to your code and start playing around with it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), self (3), class. (1)
> **CLI Commands:** node (6), make (1)
> **Code Identifiers:** nodetochar (1)
> **Cross-References:** next chapter (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Rebalancing Trees

#### Introduction to rotations
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=0)** - [Instructor] In the last chapter, we looked at the unbalanced tree.
>
> **[0:03](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=3)** So how to detect imbalances and how to mark the nodes at which these imbalances occur.
>
> **[0:08](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=8)** And remember the notation I'm using here is the asterisk.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=11)** And in this chapter, we're going to look at how to actually fix these imbalances.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=15)** So how to take a scraggly tree like this and turn it into a bushy and faster search tree.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=21)** Remember, and imbalance occurs when there's a height difference of two or more between the left and the right side at any given node.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=29)** So when computer scientists are looking at an imbalance, what they're really looking at is the next two levels below the current node.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=36)** And because we only need to look at two levels to see if an imbalance exists, these two levels can also be used to classify the imbalance into one of four types.
>
> **[0:46](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=46)** You see, computer scientists really care about whether these imbalances are on the left or the right, and whether they go to the left or the right in the level after that.
>
> **[0:55](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=55)** So, because we're only looking at two levels below the node, there are only four possibilities of directions the imbalances can go in.
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=62)** So there's the left, left imbalance, the right, right imbalance, the left, right imbalance and the right, left imbalance.
>
> **[1:11](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=71)** And to fix these imbalances, we perform an operation on the tree called a rotation.
>
> **[1:16](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=76)** So let's look at how this has done in the first case, the left, left imbalance.
>
> **[1:21](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=81)** So here we have a left, left unbalanced tree and to rebalance it we're going to do something that's called a right rotation.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=88)** And the first step is to identify the pivot.
>
> **[1:31](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=91)** That's the node hanging off to the left of the unbalanced node.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=95)** And I like to imagine grasping this node and pulling it up and letting the other two nodes fall to either side.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=102)** So you have the 20, you pull it up, the 30 falls over there, the 10 falls over there, and this whole thing sort of rotates clockwise.
>
> **[1:54](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=114)** So you can imagine pulling it up, letting the 30 fall down, the 10 fall down, it rotates clockwise or to the right, and that's why it's called a right rotation.
>
> **[2:03](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=123)** Now there's one extra thing we do need to worry about, any children hanging off of the nodes.
>
> **[2:07](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=127)** You know, computer scientists are always worried about the children.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=130)** So here, the nine and the 11 can keep hanging off of the 10, the 31 can stay hanging off of the 30, the 21 though can't keep hanging off the 20, because now 20 is root, it already has two children.
>
> **[2:25](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=145)** So what we're going to do is actually going to break the connection, and we're going to move it up to the 30, and we redraw it there.
>
> **[2:35](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=155)** And this is always a legal move because we know that this 21 is greater than 20, and we know that it's less than 30, because it was on the left side of the tree before.
>
> **[2:47](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=167)** And so it's always going to be just fine to reconnect it to the 30 there.
>
> **[2:52](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=172)** And so that was a right rotation and it fixes a left, left imbalance in a tree.
>
> **[2:56](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=176)** How would you fix a right, right imbalance?
>
> **[2:59](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=179)** So here's a right, right imbalance.
>
> **[3:02](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=182)** And once again, the 20 is the pivot.
>
> **[3:06](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=186)** We're going to grasp it, pull it up, let the 10 and the 30 fall to either side.
>
> **[3:11](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=191)** Have 10, 30, okay.
>
> **[3:15](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=195)** And this is called a left rotation, because when you pull it up, the whole thing sort of moves counterclockwise or to the left.
>
> **[3:27](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=207)** And of course we have to worry about the children again.
>
> **[3:31](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=211)** So the nine is going to hang off there, the 29 and the 31 are just fine, but this 19 can no longer hang off the 20.
>
> **[3:41](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=221)** So we're going to break that connection, move it up to the 10.
>
> **[3:45](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=225)** All right, great.
>
> **[3:46](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=226)** So, now we have this concept of a right rotation and a left rotation, and it turns out you can use these same basic tools to fix the right and left imbalances that we saw earlier.
>
> **[4:00](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=240)** Okay, so let's check out this left, right imbalance.
>
> **[4:04](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=244)** So computer scientists figured out this really clever thing.
>
> **[4:08](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=248)** You take the left node from the point of the imbalance and you perform a left rotation on this node.
>
> **[4:15](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=255)** Okay, so not touching the 30, just performing a left rotation here.
>
> **[4:20](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=260)** And this means that the 20 becomes the pivot, and this kind of swings up and becomes a node directly under the 30.
>
> **[4:29](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=269)** So we're going to redraw as 30, 20, and 10.
>
> **[4:37](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=277)** The nine can keep hanging off the 10.
>
> **[4:41](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=281)** The 21 can keep hanging off the 20 there.
>
> **[4:46](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=286)** And that 19, the connection gets broken, moves up there.
>
> **[4:51](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=291)** Oh, and we have the 31.
>
> **[4:53](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=293)** So this time doesn't change because we're not performing any sort of rotation on the 30, the 30 is untouched.
>
> **[5:00](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=300)** But then we end up with, and of course, there's still an imbalance there, but we end up with this left, left unbalanced tree and we've reduced it to the previously solved problem.
>
> **[5:11](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=311)** We know we can fix this with a right rotation.
>
> **[5:13](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=313)** So to fix the left, right imbalance, you're going to perform a left rotation followed by a right rotation.
>
> **[5:21](https://www.linkedin.com/learning/python-data-structures-trees/introduction-to-rotations?u=76281980&t=321)** And of course you do the exact opposite on a right left unbalanced tree.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9)
> **Code Keywords:** let (3), case, (1)
> **Definitions:** is called (1), means that (1)
> **Analogies:** imagine (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Rotating trees in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=0)** - [Instructor] In the last section we performed some tree rotations on the whiteboard, but now let's actually write them up in Python.
>
> **[0:06](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=6)** So here I have examples of all four unbalanced trees left, left, right, right.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=12)** Left, right, and right, left.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=15)** And let's start with the right rotation function.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=17)** Remember that's the one that fixes the left, left unbalance.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=21)** And now, unlike previous functions we're not going to write this one in the node or tree classes, although we could, but this function takes in a node object.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=28)** The one that we want to perform the rotation on and returns a different node object.
>
> **[0:33](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=33)** So the classes can use these functions, but they don't need to be inside the class.
>
> **[0:38](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=38)** So we're going rotate right.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=40)** And that's going to take in the root.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=42)** And the first thing we want to do is identify our pivot.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=45)** Remember that's root that left.
>
> **[0:47](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=47)** So this 20 here, and that's our pivot.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=52)** And then we want to identify the node that we need to reattach.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=56)** That 21 at pivot.right.
>
> **[0:59](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=59)** So we'll call that reattachNode pivot.right.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=65)** Now set root.left to the reattach node.
>
> **[1:10](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=70)** Set pivot.right equal to the root and then return the pivot.
>
> **[1:17](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=77)** And that will set the new root of our left, left unbalanced tree.
>
> **[1:23](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=83)** Now to call this function, we just do unbalancedLeftLeft.root is equal to rotatRright unbalancedLeftLeft.root
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=97)** And remember what gets returned from this function is actually a different node object than the one that we passed in.
>
> **[1:43](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=103)** And notice how the root of this tree is set to the return value of this function which is the pivot that we've picked out.
>
> **[1:49](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=109)** So this will actually replace the root with the pivot in order to rebalance the tree.
>
> **[1:55](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=115)** And we can test this by calling unbalancedLeftLeft.print, after rebalancing it.
>
> **[2:05](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=125)** And we see that it's rebalanced.
>
> **[2:08](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=128)** Great, so now we want a left rotation, and here's something really cool that you might not have realized yet.
>
> **[2:15](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=135)** We can actually make a rotate left function by literally copying and pasting this rotateRight.
>
> **[2:21](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=141)** And then changing every instance of the word, right to the word left.
>
> **[2:24](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=144)** And every instance of the word left to the word right.
>
> **[2:29](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=149)** Right, left, great rotate left.
>
> **[2:34](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=154)** Let's try calling it on our unbalancedRightright tree equals rotateLeft dot root.
>
> **[2:46](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=166)** And of course we want to print it again.
>
> **[2:56](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=176)** Okay, so there's our left left tree, right, right tree.
>
> **[2:59](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=179)** And that worked as well.
>
> **[3:02](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=182)** So now we still have the other two unbalanced trees left right tree and the right left tree.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=188)** And remember we can use these same rotate, left and rotate right operations to rebalance those trees as well simply by performing two of them in a row.
>
> **[3:17](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=197)** So let's start with the left right unbalanced tree.
>
> **[3:20](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=200)** The first step is going to be to identify the node that we actually want to rotate first.
>
> **[3:26](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=206)** And that's the 10.
>
> **[3:27](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=207)** Remember the first step is to leave the 30 alone, and then perform a rotation on the 10.
>
> **[3:32](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=212)** And that's going to be a left rotation.
>
> **[3:36](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=216)** So unbalancedLeftRight.root.left as equal to rotateLeft unbalanced.Left.Right.root.left.
>
> **[3:49](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=229)** And then the next step is going to be perform a right rotation on the root itself.
>
> **[3:58](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=238)** Okay, and then print it out and see what we have.
>
> **[4:05](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=245)** There we go, rebalanced it.
>
> **[4:08](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=248)** And of course with our last tree type, we can perform the exact same steps and the exact opposite direction.
>
> **[4:16](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=256)** So I'm actually just going to copy and paste this code and then replace everything left, with right, right with left, right, right.
>
> **[4:28](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=268)** Of course rotate right is going to be our first move, rotate left, it's going to be our second move.
>
> **[4:35](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=275)** That looks pretty good.
>
> **[4:39](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=279)** And there we go, it rebalances at last tree type in all four of those are, are rebalanced.
>
> **[4:46](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=286)** All right, I will see you in the next section.
>
> **[4:49](https://www.linkedin.com/learning/python-data-structures-trees/rotating-trees-in-python?u=76281980&t=289)** We're going to stop writing so much of this stuff by hand and start automating our tree fixing little bit.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (4), class. (1), type, (1)
> **Code Identifiers:** unbalancedleftleft (3), rotateleft (2), reattachnode (1), rotatrright (1), rotateright (1)
> **CLI Commands:** node (7), python (1), make (1)
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### Fixing a tree with multiple points of imbalance
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=0)** - So let's say we have a tree that may be all sorts of screwed up, like this one. And maybe we just want to run it through some sort of an automagic fixer, and don't want to have to think about how exactly the tree is screwed up.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=12)** So we know how to fix an imbalance at a node if we know which type of imbalance that node has.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=17)** We also know how to iterate through every node on a tree.
>
> **[0:19](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=19)** So, what if we iterated through every node in the tree, figured out what kind of imbalance, if any, that node has, and then fix it.
>
> **[0:27](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=27)** The trick here, the thing we haven't really done yet, is classify the imbalances automatically.
>
> **[0:33](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=33)** So, let's write a function in the node class called fixImbalanceIfExists.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=41)** And the first thing this is going to do, is try to figure out what imbalance this node has.
>
> **[0:46](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=46)** And in order to do that, we're going to need to know the height on the left and the right, and get the height difference between them.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=52)** And we can do that using, the code from our isBalanced function.
>
> **[0:58](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=58)** And I'm actually going to put this in a new function because we're going to be dealing with height differences a lot here.
>
> **[1:04](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=64)** So, I'm going to make a function called getLeftRightHeightDifference.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=72)** And this is just going to return left height minus right height at that node.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=79)** All right.
>
> **[1:20](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=80)** So, in our function here, we can say if self.getLeftRightHeightDifference is greater than one, we know that the left height is too long for whatever that right height is.
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=94)** And so we know it's some sort of a left, or a left imbalance.
>
> **[1:40](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=100)** Else if self.getLeftRightHeightDifference, is less than negative one, so the opposite direction, we know that there's some sort of a right imbalance here.
>
> **[1:53](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=113)** Okay, so we know the sort of broad imbalance, but is it a left left imbalance?
>
> **[1:58](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=118)** Or is it a left right imbalance?
>
> **[2:00](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=120)** So what we want to do is just do this again.
>
> **[2:02](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=122)** If self.left.getLeftRightHeightDifference is greater than zero, we know that this is a left left imbalance.
>
> **[2:14](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=134)** Else, it's a, left right imbalance.
>
> **[2:19](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=139)** And then if self.right.getLeftRightHeightDifference, is less than zero, it's a right right imbalance, else right left.
>
> **[2:32](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=152)** Okay, great.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=153)** So now we have the four different types of imbalances classified, but what do we do about actually fixing them?
>
> **[2:39](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=159)** So for the left left imbalance, remember we want to rotate right passing self.
>
> **[2:46](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=166)** But rotateRight actually returns potentially a new node.
>
> **[2:50](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=170)** It will always return a new node.
>
> **[2:51](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=171)** It'll return the pivot node.
>
> **[2:53](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=173)** So we need to make sure that we return something.
>
> **[2:55](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=175)** So now fixImbalanceIfExists returns a new node.
>
> **[2:59](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=179)** So that's going to influence how we call that, but let's just keep writing it for now.
>
> **[3:03](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=183)** We also need to make sure, given that fixImbalanceIfExists has to return a node, that we return self down here, if there's nothing at all wrong with the node.
>
> **[3:13](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=193)** And then under left right, what we're going to do is we want to perform a left rotation on that left node, and then actually return the rotateRight.
>
> **[3:28](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=208)** And then here we do the exact opposite.
>
> **[3:30](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=210)** So return rotateLeft, and then here return self.right equals rotateRight(self.right), return rotateLeft.
>
> **[3:46](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=226)** Okay, perfect.
>
> **[3:48](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=228)** So, now for the final touch, we want to be able to call this function on every node in the tree.
>
> **[3:53](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=233)** So let's make a function called rebalance.
>
> **[3:57](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=237)** This is going to be in the node class again.
>
> **[3:59](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=239)** if self.left, it's going to seem pretty familiar, self.left.rebalance().
>
> **[4:06](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=246)** So traversing down.
>
> **[4:08](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=248)** If self.right, self.right.rebalance, and recursing down again.
>
> **[4:15](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=255)** And then after we recurse all the way down to the leaves, we're going to want to fix the tree, self.left.fixImbalanceIfExists, and then down here, self.right.fixImbalanceIfExists.
>
> **[4:33](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=273)** And so this traverses down to the leaves, and then at the leaf, and then working its way back up, it'll fix the imbalances if exists.
>
> **[4:40](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=280)** And I prefer to fix trees bottom up.
>
> **[4:42](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=282)** You can prefer to fix them top down.
>
> **[4:45](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=285)** I just think it's a little bit easier to work with bottom up.
>
> **[4:48](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=288)** But there is one node, that this won't be able to fix by itself, and that's the root.
>
> **[4:53](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=293)** Because remember it fixes the left and the right, but what about that root node?
>
> **[4:56](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=296)** How does that get fixed if it's imbalanced?
>
> **[4:58](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=298)** I'm going to want to write a wrapper function in here anyway, rebalance.
>
> **[5:04](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=304)** And so this is the perfect place to actually just fix that root node.
>
> **[5:07](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=307)** So, we're going to want to rebalance, starting from the bottom up.
>
> **[5:11](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=311)** So we're going to call self.root.rebalance first, to fix all those nodes below it.
>
> **[5:17](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=317)** And then if the root is still imbalanced at this point, self.root equals self.root.fixImbalanceIfExists.
>
> **[5:26](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=326)** And there, that should be it.
>
> **[5:28](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=328)** Let's test this out on our really screwed up tree here.
>
> **[5:36](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=336)** And there you go.
>
> **[5:37](https://www.linkedin.com/learning/python-data-structures-trees/fixing-a-tree-with-multiple-points-of-imbalance?u=76281980&t=337)** This tree certainly looks much nicer than this one up here.

> [!info]- Semantic Content
>
> **Code Keywords:** self (17), function (8), let (5), else, (1)
> **CLI Commands:** node (20), make (4)
> **Code Identifiers:** fiximbalanceifexists (6), getleftrightheightdifference (5), rotateright (3), rotateleft (2), isbalanced (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### Challenge: Smarter automated rebalancing
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=0)** - [Instructor] In the last section we created a function that would scan a tree for imbalances and then fix them.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=11)** So this might be a handy thing to do after adding and deleting nodes, when there's a danger that the trees could become imbalanced.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=18)** But imagine you have a very large tree with thousands or millions of nodes.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=23)** Scanning every single node to rebalance a tree of this size would get prohibitively difficult, especially if you're frequently adding and removing data to and from it.
>
> **[0:30](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=30)** So imagine, every time you add a piece of data you have to visit every node, check to see if everything's balanced, do the rebalancing, there's no way.
>
> **[0:38](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=38)** So is there any way you can make this easier on yourself?
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=41)** Maybe you don't have to brute force check every node in the tree.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=45)** And if you don't have to check every node, which nodes do you need to check each time you add or remove a node?
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=52)** So here's the challenge.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=53)** Update your add and delete functions to perform these checks and rebalances on the tree automatically after modifying it.
>
> **[0:59](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=59)** Think carefully about where in the code these lines should be added in order to take advantage of recursion.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-trees/challenge-smarter-automated-rebalancing?u=76281980&t=65)** Should really only be a few lines of code, so sit and think about it for a little bit, type up your solution, test it out, and then head over to the solution to see how you did.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), make (1)
> **Code Keywords:** function (1), delete (1)
> **Analogies:** imagine (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Smarter automated rebalancing
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=0)** - [Instructor] So if you've finished this challenge successfully then congratulations are in order because you have just invented the self-balancing tree.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=13)** In all seriousness, many of the techniques we've used throughout this series to balance these binary search trees come from the AVL Tree named for the Soviet Mathematician slash Computer Scientists Adelson Velsky and Landis who first came up with them in 1962.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=28)** So the AVL Tree's known as a self-balancing tree that it's able to correct or rebalance itself after every insertion or deletion and it does this in a really efficient way.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=39)** So figuring out which nodes to check and rotate after an insertion or deletion is really one of the last fundamental pieces to making these trees work.
>
> **[0:47](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=47)** So the trick here is that under both insertion and deletion you only need to check the balance of the nodes on the path from the node that you inserted or deleted up to the root node, all the nodes along that path and this kind of makes sense.
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=62)** Remember, nodes only become imbalanced if the height on the left or the right has changed.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=67)** So if the heights don't change, if that end of that node was balanced before then it will remain balanced and the only nodes for which the height on the left or the right are going to change are the nodes up along the path from the root to the added or deleted node.
>
> **[1:24](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=84)** Okay so how do we check and fix only the nodes along this critical path in our existing code?
>
> **[1:31](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=91)** If you remember from the addition function the one on the node and not the one in the tree.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=98)** So let's take a look at the addition function and you can see that it recurses down.
>
> **[1:44](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=104)** So self dot left dot add we're going to go down to that function again self dot right dot add, go down that function again and the next line is going to be where it pops out of this recursion here and here and so it's going to pop out along that critical path and so every time it pops out we want to make sure to fix that node which is going to be along the critical path and also make sure when you do this you're also fixing the root don't forget about the root.
>
> **[2:13](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=133)** So in that wrapper function there we make sure to also fix that root node.
>
> **[2:18](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=138)** Similarly in the deletion code you're recursing downs here and here and then there's some recursion there and such but where you're popping out in the deletion code is going to be down at the bottom there and so this is a really good place to check for an imbalance and so here, the tree that we've printed out is actually that very screwed up tree that we had in the last section and all I've done is used the add function to add the nodes rather than just sort of setting them where I want them in the tree by hand and you can see that we started with the root of 50 and just by adding nodes, things have kind of shifted around.
>
> **[3:03](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=183)** So now the root is 35 and we can try to screw it up again by calling delete 50 tree dot delete 75 and then see what it looks like there as well and you can see it just keeps correcting itself.
>
> **[3:24](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=204)** Now 25 is the root.
>
> **[3:27](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=207)** So there you go.
>
> **[3:28](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=208)** You've written a full featured self-balancing binary search tree completely from scratch in Python.
>
> **[3:33](https://www.linkedin.com/learning/python-data-structures-trees/solution-smarter-automated-rebalancing?u=76281980&t=213)** So give yourself a pat on the back and head over to the next and sadly, last video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), self (5), delete (2), let (1)
> **CLI Commands:** node (7), make (3), python (1)
> **Best Practices:** make sure to (2), don't forget (1)
> **Env Vars:** avl (2)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps with data structures
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=0)** - [Instructor] So congratulations.
>
> **[0:01](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=1)** You've covered the basics of nearly everything there is to do with trees, or a tree rather.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=7)** Our good friend, the binary search tree.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=10)** Don't worry, most trees are very similar to this one.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=13)** You traverse them using very similar code, you insert and delete nodes.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=17)** The rules might be a little bit different, but the concepts and lingo are mostly the same.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=22)** There are trees with many children per node, trees that have additional properties that modify their rebalancing strategies, trees where you might be more likely to reach one child node, than another child node.
>
> **[0:34](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=34)** Maybe you'll invent your own tree.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=36)** But where to go from here?
>
> **[0:38](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=38)** So, if you're looking for an overview of other data structures, particularly in Python, there are a lot of really great LinkedIn Learning videos.
>
> **[0:46](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=46)** I recommend the video on linked lists by Erin Allard as good preparation for this course.
>
> **[0:51](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=51)** But if you haven't seen it yet and you want to learn about linked lists, definitely check it out.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=56)** Another great data structure course is "Stacks, Queues, and Deques" also by Erin Allard.
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=62)** And for a broader overview of data structures and algorithms check out Robin Andrews' "[[Python Data Structures and Algorithms]]."
>
> **[1:09](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=69)** I particularly like his treatment of search algorithms.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=72)** For more in depth information about trees specifically, you may want to hit the books.
>
> **[1:17](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=77)** So I heartily recommend "Introduction to Algorithms," whichever edition you can get your hands on.
>
> **[1:23](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=83)** This is a really classic data structures and algorithms textbook, and it's what's sitting on my bookshelf right now.
>
> **[1:30](https://www.linkedin.com/learning/python-data-structures-trees/next-steps-with-data-structures?u=76281980&t=90)** And with that, thanks for joining me in this little walk through the trees.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), python (2)
> **Code Keywords:** delete (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


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