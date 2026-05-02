---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: vanilla-javascript-building-on-the-document-object-model-dom
url: "https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom"
duration_minutes: 107
duration: 1h 47m
level: Advanced
updated: 6/29/2021
learners: 400716
skills:
  - Document Object Model (DOM)
  - JavaScript
exercise_files: true
github: "https://github.com/LinkedInLearning/vanilla-js-DOM-2876283"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEL1YDA4pMuSQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624636988037?e=2147483647&amp;v=beta&amp;t=8rrIP4NN2s_q3nQuIvT0KiT86gGqhsjREA3oLRT4JuY"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore Web Development with Vanilla JavaScript]]'
prev_courses:
  - '[[Vanilla JavaScript- Web Performance Optimization APIs]]'
path_nav: '[{"path":"Explore Web Development with Vanilla JavaScript","position":8,"total":8,"prev":"Vanilla JavaScript- Web Performance Optimization APIs","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/document-object-model-dom
  - skill/javascript
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Vanilla%20JavaScript-%20Building%20on%20the%20Document%20Object%20Model%20(DOM).md)

![Vanilla JavaScript: Building on the Document Object Model (DOM)](https://media.licdn.com/dms/image/v2/C560DAQEL1YDA4pMuSQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624636988037?e=2147483647&amp;v=beta&amp;t=8rrIP4NN2s_q3nQuIvT0KiT86gGqhsjREA3oLRT4JuY)

# Vanilla JavaScript: Building on the Document Object Model (DOM)

> At the heart of every web application and framework (such as Angular or React) lies the DOM, the Document Object Model. In this course, instructor W. Scott Means explores the DOM from the bottom up. After a fast-paced introduction to the Node interface and DOM trees, Scott takes things to the next level by constructing a functioning HTML parser. He shows you how HTML source code is translated into

> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom) | 1h 47m | Advanced | 401K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn the JavaScript DOM inside and out](#learn-the-javascript-dom-inside-and-out)
  - [Where to start](#where-to-start)
- [**1. Key DOM Concepts**](#1-key-dom-concepts) (6 videos)
  - [The Node interface](#the-node-interface)
  - [DOM-specific maps and lists](#dom-specific-maps-and-lists)
  - [Random access with querySelector()](#random-access-with-queryselector)
  - [CRUD in the DOM](#crud-in-the-dom)
  - [Challenge: queryAll++](#challenge-queryall)
  - [Solution: queryAll++](#solution-queryall)
- [**2. HTML to DOM**](#2-html-to-dom) (9 videos)
  - [Where does the DOM come from?](#where-does-the-dom-come-from)
  - [DIY HTML parsing](#diy-html-parsing)
  - [Building a firm foundation: The lexer](#building-a-firm-foundation-the-lexer)
  - [Parsing text](#parsing-text)
  - [Parsing comments](#parsing-comments)
  - [Parsing elements](#parsing-elements)
  - [Parsing attributes](#parsing-attributes)
  - [Challenge: Void elements](#challenge-void-elements)
  - [Solution: Void elements](#solution-void-elements)
- [**3. Transforming the DOM**](#3-transforming-the-dom) (9 videos)
  - [Traversing the tree](#traversing-the-tree)
  - [Building a pretty printer](#building-a-pretty-printer)
  - [Processing document fragments](#processing-document-fragments)
  - [Processing comments](#processing-comments)
  - [Processing elements](#processing-elements)
  - [Processing element attributes](#processing-element-attributes)
  - [Handling text and cleanup](#handling-text-and-cleanup)
  - [Challenge: Empty tags](#challenge-empty-tags)
  - [Solution: Empty tags](#solution-empty-tags)
- [**Conclusion**](#conclusion) (1 videos)
  - [Level up your DOM skills](#level-up-your-dom-skills)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn the JavaScript DOM inside and out](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=0)** - This course covers the DOM interface, nodes, trees, and how to access them from [[JavaScript]].
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=5)** But it also dives deeper, showing you how the browser parses your [[HTML]] and how you can manipulate it yourself, using nothing but a text editor.
>
> **[0:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=12)** My name is Scott Means and I started writing code while the movie "ET" was still in theaters.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=16)** I was lucky enough to be growing up at the same time personal computers were.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=20)** So I got to understand them at a fundamental level.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=22)** And as complex as things have become, understanding the fundamentals is still the secret to becoming an experienced, productive and happy programmer.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=29)** This course covers the DOM interface, nodes, trees, and how to access them from JavaScript.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=34)** But it also dives deeper showing you how the browser parses your HTML and how you can manipulate it yourself, using nothing but a text editor.
>
> **[0:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/learn-the-javascript-dom-inside-and-out?u=76281980&t=40)** If you want to understand the DOM like a framework or browser developer does, join me in my [[LinkedIn]] learning course, as we explore the Dom API, build a pretty printer, and even write our own HTML parser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2), [[LinkedIn]] (1)
> **Env Vars:** dom (3), html (3), api (1)
> **Speakers:** - this (1)

#### [Where to start](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-to-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-to-start?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, you should be familiar with [[JavaScript]], recursion, arrow functions, regular expressions, and just general JavaScript syntax.
>
> **[0:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-to-start?u=76281980&t=9)** You should also be comfortable with HTML5, custom element tags, and basic CSS syntax.
>
> **[0:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-to-start?u=76281980&t=15)** If you aren't familiar with all these topics, don't let that stop you.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-to-start?u=76281980&t=17)** Try a few lessons, and if you need to brush up, try these other great courses first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Env Vars:** html5 (1), css (1)
> **Speakers:** - [instructor] (1)


### 1. Key DOM Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [The Node interface](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=0)** - [Instructor] Have you ever wondered how your lovingly crafted [[HTML]] source code is transformed from a bunch of characters in a file to a fully rendered webpage in your browser?
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=8)** The truth is it's not a direct route.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=10)** before the browser can figure out where and how to display everything on your webpage, it needs to construct a document tree.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=16)** This process of converting your HTML to this object tree or [[Document Object Model (DOM)|document object model]] is called parsing.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=22)** Every tag, fragment of text, every comma, is parsed by the browser and stored and the resulting document tree in a node.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=28)** These nodes are arranged in a tree through the use of references.
>
> **[0:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=31)** The node interface defines common attributes that refer from a parent node to its child nodes from a node to its next sibling and from child nodes back to their parent.
>
> **[0:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=40)** These five core attributes allow your code to navigate from any node in your document to almost any other node.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=45)** By following the parent node references, you can get to the top level document node.
>
> **[0:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=49)** By following the next sibling references, you can find all other nodes located at the same level of the document hierarchy.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=54)** By following first child, you can navigate to nodes farther down the tree and using the owner document reference.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=59)** You can get to the top level document object from any node in the tree, but why the almost above why can't we follow references from any node to any other node of the document?
>
> **[1:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=68)** Because even though the node interface is the common base class for all the objects and a dom document, not all those objects are the same.
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=75)** In fact, although the dom level three core standard defines 12 node types and practice, these five types are the only ones you'll encounter when doing normal things in normal HTML documents.
>
> **[1:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=86)** The [[Representational State Transfer (REST)|rest]] of the node types are mostly used in XML document processing.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=89)** Four of these types of part of the primary dom tree, but attribute nodes are special.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=93)** And the only way we can access them through the node interface is by using the attributes property.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=98)** Now beside the node type, there are a few other useful node properties that are worth understanding.
>
> **[1:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=103)** The node name attribute returns to descriptive string for the node based on its type.
>
> **[1:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=107)** This is super handy when debugging dom code another useful property is the node value property for things like element attributes, comments, and texts, it provides an easy way to get the contents of the node as a string, but for more complex node types like elements of documents, it simply returns null.
>
> **[2:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=122)** Ana although we've covered the most important parts of the node interface, there are other useful features that you can discover for yourself.
>
> **[2:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=128)** Take a look at the W3C recommendation.
>
> **[2:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/the-node-interface?u=76281980&t=129)** It's not very long and you might be surprised what you find.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Document Object Model (DOM)|Document object model]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (23), find (2)
> **Env Vars:** html (3), xml (1), w3c (1)
> **Documentation:** w3c (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** source code (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [DOM-specific maps and lists](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=0)** - [Instructor] One of the more frustrating aspects of working directly with the DOM is the use of some DOM-specific collections for certain Node properties within the DOM tree.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=8)** So to illustrate that, we're going to build a little application today.
>
> **[0:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=11)** So let's show you my development environment that I've set up here.
>
> **[0:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=15)** Is pretty simple, I'm running the built-in [[Python (Programming Language)|Python]] web server.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=18)** So I'm just going to the project folder and running python-m http.server.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=22)** So if you're running Python 3+, then this should work fine.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=25)** And I've got my text editor with my code loaded up here, and I'm running Chrome to view my web page.
>
> **[0:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=32)** So as you can see, here's the webpage, I've gone ahead and created this basic webpage that has [[JavaScript]] file being loaded and it's executing my DOMcontentLoaded event handler.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=45)** So the DOMcontentLoaded event handler is called as soon as your page is parsed and the DOM tree is built, but all the external resources may not have been loaded yet.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=53)** So some of your external images or style sheets and things like that may still be loading.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=57)** This is a good event in an intercept if you have a complicated application, you want to get some code running before everything else has pulled in.
>
> **[1:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=63)** Otherwise if used a load event, then you have to wait for everything to be downloaded.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=67)** Anyway, just to verify, it did actually get executed because when I refresh, hello cookies.
>
> **[1:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=72)** So, my code's being called.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=74)** So what I want to do in this application, I have a bunch of ingredients in my recipe, and I want to add up all of the weight, which are in this right-hand column in grams.
>
> **[1:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=82)** And if we look at the underlying [[HTML]], you'll see that I have a table, and inside tbody, I have a bunch of table rows.
>
> **[1:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=90)** So to get access to the table rows, I'm going to use this ingredients ID.
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=95)** And that will allow me to get a hold of this tbody element in my code and then iterate through these table rows.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=100)** So let's go to our JavaScript, and let's go ahead and create a new variable ingredients.
>
> **[1:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=107)** And we're going to use document.getElementById.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=114)** It's pretty old school, but it works well.
>
> **[1:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=115)** And it works on almost every browser in the world, so you don't have to be concerned about that.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=121)** Now we're going to iterate through, let's iterate through the child Nodes first.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=125)** So ingredients.childNodes returns all of the Nodes that are a part of the sub tree that belongs to this table body.
>
> **[2:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=134)** So forEach and say tr, there.
>
> **[2:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=140)** And we're going to loop through, and just log into the console for now.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=145)** So we'll save this off.
>
> **[2:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=148)** Now let's go back to our browser, refresh, and let's take a look at our developer tools.
>
> **[2:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=155)** And we'll see over here that we are in fact viewing all of the table rows, we're also seeing these Nodes here, which are text Nodes.
>
> **[2:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=163)** So the reason for that is when you do childNodes, every piece of text in your original HTML is actually translated into a Node in the DOM tree.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=171)** So this white space is actually being inserted into the DOM as a text Node.
>
> **[2:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=175)** So there are a couple of approaches we could use, we could filter out the ones we care about by looking at the Node and looking at the Node type of things.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=182)** But I would prefer to just, let's use the children property, which is actually only the elements for that, that only the child elements for that element.
>
> **[3:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=191)** So let's go ahead back to the browser, we refresh, and then now we're going to run into this.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=196)** And what you're going to see is, okay, ingredients.childrenforEach is not a function, that's because if you look at ingredients.children, let's look at the constructor.
>
> **[3:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=205)** And the constructor is an HTML collection not an array.
>
> **[3:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=209)** So if you look at the constructor of a regular array, that's a built in JavaScript array.
>
> **[3:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=214)** So HTML collection does not implement forEach.
>
> **[3:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=217)** So long story short, there are various ways we can iterate over this collection, but I tend to like to use forEach because it's kind of the new way of doing things in JavaScript and it's pretty fast.
>
> **[3:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=226)** So what we're going to do is we're going to invoke that method directly.
>
> **[3:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=230)** So we're going to go to the array prototype forEach, and we're going to use call.
>
> **[3:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=238)** See best methods in JavaScript actually are objects themselves, and it has a call method that I can execute to actually loop over any variable that I want.
>
> **[4:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=246)** So I'm going to take ingredients.children, and I'm going to loop over every row.
>
> **[4:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=253)** Let's save that back in here, and now you'll see, I do have all the rows.
>
> **[4:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=260)** Now that I have access to these rows, I want to get access to the right most column for each of these, including the blank one at the end.
>
> **[4:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=266)** If you'll look at my HTML page again here, each of these rows has a quantity in the second td element.
>
> **[4:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=273)** And then the very last row actually has a blank td element, which I want to put the total of all those weights into, and is identified by this totals ID.
>
> **[4:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=282)** So let's go back into here to JavaScript, and let's go ahead and create a variable to hold our total.
>
> **[4:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=290)** start it off at zero.
>
> **[4:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=291)** And then inside here, what we need to do is we need to differentiate between rows that are the total row and rows that aren't, so, the clearest way to do that is look for that ID.
>
> **[5:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=300)** So let's say if tr, let's look at the attributes collection for a second.
>
> **[5:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=304)** Attributes ID equals totals, then we're in the total row, right?
>
> **[5:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=315)** Otherwise, we'll just continue to do what we're doing now.
>
> **[5:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=322)** All right, save that off, connect to browser, refresh, and you'll notice that it never said we were in the totals row, that's because if you look at that element, totals.attributes.collection, what is the attributes collection?
>
> **[5:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=338)** The constructor of that is it in fact, a named Node map, it is not a normal JavaScript diction, even though it kind of behaves like one.
>
> **[5:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=349)** So when you actually get access to that ID attribute, it's not returning a string, it's returning an object.
>
> **[5:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=359)** An adder object.
>
> **[6:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=360)** So, there are a couple of ways we could go about that, and it gets kind of evolved because, if we wanted to get the value, we could technically do this, we could say Node value.
>
> **[6:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=368)** But the problem is all the other rows will have no attributes.
>
> **[6:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=372)** So then we'll be trying to invoke the property Node value, property on a null reference, undefined reference and that won't work.
>
> **[6:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=378)** So, this was mainly just to illustrate that, attributes looks like a dictionary, but it's not, and so you need to be aware of that when you're writing some code that references attributes.
>
> **[6:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=385)** And what we're going to do instead is we're going to use the built-in ID properties.
>
> **[6:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=388)** So let's go ahead here and just use the property that's built in to every element that has its own ID property, which can be edified if it doesn't have one.
>
> **[6:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=396)** Save it off, refresh, now we're in the totals row, so that's good.
>
> **[6:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=401)** So now all we have to do down here is, let's get our weight.
>
> **[6:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=406)** And the weight we're going to get by, let's see.
>
> **[6:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=409)** Let's go ahead and get a reference to that second td cell for everything.
>
> **[6:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=413)** So let's do const td equals table row children.
>
> **[6:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=418)** So this is going to be a child element again, sub one, because that's zero-based, we're going to get the second to td for every row, right?
>
> **[7:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=425)** So we're going to get the weight, and we're going to have to, it's going to be a string, so we're going to parse float of the inner text to that element, right?
>
> **[7:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=438)** And then we will add that to the weight.
>
> **[7:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=446)** Let's go ahead and log without it, liberal logging never hurts, it's easy to see what you're doing if something goes wrong.
>
> **[7:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=452)** Total, let's save that off, refresh, okay?
>
> **[7:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=458)** So it looks like we're getting our total here.
>
> **[7:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=459)** Now, all we have to do is update our totals rows.
>
> **[7:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=462)** So once again, we add that and our text equals total.
>
> **[7:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=467)** Clean it back, clean it back, save it off, and, you see, now we have our total right down here at the bottom.
>
> **[7:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=477)** The major takeaway is that DOM and JavaScript collections are not identical.
>
> **[8:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/dom-specific-maps-and-lists?u=76281980&t=481)** Keeping this in mind will make your coding and debugging life much easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (8), [[HTML]] (5), [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** node (8), python (3), make (1)
> **Env Vars:** dom (7), html (5)
> **Code Identifiers:** foreach (4), childnodes (2), getelementbyid (1), childrenforeach (1)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **UI Navigation:** go to (2)
> **Versions:** python 3 (1)
> **Cross-References:** go back to (1)

#### [Random access with querySelector()](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=0)** - [Instructor] Being able to efficiently locate specific elements in a complex DOM tree is one of the most frequent tasks you'll encounter when writing a [[Vanilla]] [[JavaScript]] DOM application.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=8)** Thanks to the W3C selectors recommendation, we can quickly sift through our DOM tree to access the elements we need.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=14)** To make it easier to experiment with selectors, we'll build a simple query selector application that'll let us load some [[HTML]], and then run querySelectorAll against it.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=21)** We'll be starting from a base application that can load HTML into our page.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=25)** So to demonstrate, I'm going to go ahead and grab some HTML from Donald Knuth's biography over here on Wikipedia.
>
> **[0:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=31)** You'll see I'm using the developers tools to come in here to the tree, and grab basically the body of this article.
>
> **[0:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=37)** I'm going to copy it.
>
> **[0:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=38)** I'm going to come back over to the app.
>
> **[0:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=40)** And I'm going to paste this into this text area, and you'll see it's being parsed and inserted into our page.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=45)** So we have a nice chunk of kind of complicated DOM here that we can use to do a querySelectorAll against.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=51)** And if we go back to the source code for this, you'll see that it's a pretty basic HTML5 page that has a text area element, and also a section called output.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=59)** It's got an ID of output.
>
> **[1:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=61)** So in the source code, I'm intercepting the DOMContentLoaded event, which, again, is called when your page is fully parsed and the DOM tree is ready, but before all of your external resources have been loaded.
>
> **[1:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=70)** So it's a good event to catch if you want to start coding and having your code execute before your page is fully loaded.
>
> **[1:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=77)** It's kind of faster than the pageload event, if you wanted, especially in a more complicated page.
>
> **[1:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=83)** And then I'm going to find that text area, and then I'm going to add an event listener for input.
>
> **[1:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=88)** So whenever that text area changes, I will refresh that output section.
>
> **[1:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=92)** So refreshOutput is called with the HTML from that input, and all I do is assign it to the innerHTML of that output element.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=99)** And then that's how we end up with this.
>
> **[1:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=103)** So now that we have a way to insert some DOM content into our page, I want to be able to type in a selector and pass it directly to querySelectorAll, so I'm going to go back to my HTML, and I'm going to create a form that will allow me to type in a selector and then execute it.
>
> **[1:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=119)** And I tend to use [[Forms]] a lot, because the browser has really great support for forms.
>
> **[2:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=123)** It gives you a lot of behaviors for free, kind of.
>
> **[2:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=126)** So, we're going to call this section, the new section, query.
>
> **[2:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=131)** And in this section, we're going to create a form.
>
> **[2:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=133)** And the form's name is queryall.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=138)** And then inside that I'm going to create, let's do something a little fancy, we'll use a pre tag so we can use preformatted text, monospace, make it look more code like.
>
> **[2:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=148)** And let's go ahead and call a querySelectorAll so it looks like we're typing into the function call itself.
>
> **[2:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=154)** So, and then we'll create an input, and its name will be selector.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=159)** And then after that, we will go here, and we'll create a submit button.
>
> **[2:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=164)** So the button type="submit".
>
> **[2:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=168)** And let's call that button "run."
>
> **[2:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=174)** And it all goes on one line like this, because I want to use this pre tag for formatting, and whitespace is significant, so if I started wrapping it, it would actually wrap on the screen.
>
> **[3:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=183)** So, now we should have our form.
>
> **[3:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=186)** I'll just save that.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=187)** Now that I've created this form, let's go ahead and take a quick look at it, how that behaves in our application.
>
> **[3:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=192)** I'm going to refresh the page, and I want to show you something.
>
> **[3:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=195)** So if I put something in here, and just say div, whatever, and if I add a selector here and I hit run, you'll notice the page refreshed, and it actually added that form field as a query parameter.
>
> **[3:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=206)** If I don't have a method or an action attribute on my form, it'll just do a GET request.
>
> **[3:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=210)** So the first thing we need to do is go back into our code, and let's add an event handler for that form to prevent it from submitting like that.
>
> **[3:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=217)** So, inside our DOMContentLoaded event, we're going to come in here, we're going to add a new event handler.
>
> **[3:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=222)** And the great thing about using forms is we can use document.forms.queryall, and that's our form, and we can add an event listener directly here.
>
> **[3:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=231)** And we'll add one for submit.
>
> **[3:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=232)** And do another arrow function.
>
> **[3:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=237)** And then all we need to do is in our event, we're going to prevent default, which prevents the browser from doing the normal thing, which would be to submit the page.
>
> **[4:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=246)** And then we're going to return false.
>
> **[4:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=250)** And if we go back into the browser and refresh, now this time if I type something in here, you'll notice I hit Enter, and nothing's happening, and if I hit run, nothing's happening.
>
> **[4:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=261)** That's because it's actually being intercepted in that function.
>
> **[4:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=263)** So to prove it, let's come back into our code, and I'm going to create a function called refresh query to actually run the query itself.
>
> **[4:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=272)** And I'll have access to that form field, because in the event, the target in this case is the form, and I can reference the field by name.
>
> **[4:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=278)** So selector, and then grab the value.
>
> **[4:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=281)** So, now I can write my refresh query function down here.
>
> **[4:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=289)** Okay.
>
> **[4:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=291)** And let's just log it to the console.
>
> **[4:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=295)** And go back into our browser, refresh.
>
> **[4:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=299)** And now if I type something here, I'll open up my developer tools to see what's going on with that, let's say a div, whatever.
>
> **[5:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=307)** Now you'll see that I'm actually getting output over there, so then I can run querySelectorAll next.
>
> **[5:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=311)** Let's go back into the code again.
>
> **[5:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=313)** Now I want to run querySelectorAll, and then I need a place to put my results.
>
> **[5:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=316)** So what I would like to do is I'm going to put them in an unordered list.
>
> **[5:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=320)** So let's go back into the HTML page, and create a place to put these results.
>
> **[5:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=324)** So I'm going to call this Matches, and then I'm going to create an unordered list, and let's call the id matches.
>
> **[5:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=335)** And then I can save this way.
>
> **[5:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=339)** Now let's go back into our code, and we'll write the actual loop that will populate that list.
>
> **[5:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=344)** So, the first thing I'm going to need to do is get access to the output div itself.
>
> **[5:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=349)** So, the easiest way to do that is output=document.querySelector.
>
> **[5:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=355)** The only difference between querySelector and querySelectorAll is that querySelector only returns one result, even if multiples would match, and querySelectorAll returns a list.
>
> **[6:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=363)** So we know that there should only be one output div, because it's using an id, which are supposed to be unique.
>
> **[6:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=370)** So, then we'll also get access to the matches using the same mechanism.
>
> **[6:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=377)** querySelector of #matches.
>
> **[6:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=380)** And we'll save that.
>
> **[6:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=383)** Okay, so now let's go ahead and let's clear out the old matches.
>
> **[6:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=387)** This normally is something you'd end up doing on the second pass when you realize you didn't clear the element out, but I've done this so many times that, by now, I know the next thing I need to do is clear out this element.
>
> **[6:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=396)** So the way to do it in this case is I'm going to set innerHTML to nothing.
>
> **[6:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=399)** And believe me, there are many ways to clear out an element in vanilla JavaScript, and I went down the rabbit hole of various stack overflow posts and performance numbers, and innerHTML is a perfectly acceptable way to do it.
>
> **[6:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=412)** It will clear the element, and it's pretty easy to understand, so I tend to use that.
>
> **[6:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=416)** So let's go ahead and get ahold of the output element's querySelectorAll function.
>
> **[7:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=424)** And the selector was passed in as an argument to this function, so let's go ahead and do a forEach.
>
> **[7:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=430)** So for each match, and in this case, the match will be an element.
>
> **[7:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=435)** We'll do an arrow function here.
>
> **[7:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=438)** Now, what I need to do is, that's an unordered list, and I'm going to add a list item with the text of the element that matched.
>
> **[7:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=445)** So first I need to create a new list item, so let's create a list item using document.createElement, li.
>
> **[7:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=453)** So we've got a new list item element, and then we're going to set the innerText of that, the text, you notice, because I don't want to actually insert the match as HTML into my list, I want to see the source code of it.
>
> **[7:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=464)** So I'm going to say the text of this list item is equal to the HTML, the outerHTML of my match.
>
> **[7:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=472)** And then I'm going to append it to the matches.
>
> **[7:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=478)** And then let's save that off.
>
> **[8:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=481)** Now let's go back and see what is happening in our code.
>
> **[8:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=487)** So first of all, let's get some interesting source code.
>
> **[8:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=489)** I'm going to go back to Donald Knuth here and copy his bio again.
>
> **[8:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=495)** And we'll grab that.
>
> **[8:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=496)** Let's go back into our page, and let's paste this in here.
>
> **[8:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=501)** So now we have some DOM content to select, and let's get ahold of all of the image tags.
>
> **[8:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=507)** And, oh, there they are.
>
> **[8:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=508)** So now I can see the source code for all the images in that DOM snippet.
>
> **[8:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=512)** I'm going to do one more little bit of formatting, I'd like to see this look more like code.
>
> **[8:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=518)** I'm going to go back into my editor here, into queryall.html.
>
> **[8:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=521)** Let's go up into the style sheet, and let's do, all the items here could be formatted with font-family: monospace; Let's say.
>
> **[8:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=533)** Now let's go back.
>
> **[8:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=534)** Refresh.
>
> **[8:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=536)** Paste this in.
>
> **[9:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=540)** Now that looks a little nicer.
>
> **[9:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=541)** I like it.
>
> **[9:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=542)** So yeah, now we can do a querySelectorAll all day long.
>
> **[9:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=545)** There are a lot of interesting things we could find.
>
> **[9:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=547)** You could find all the paragraph tags.
>
> **[9:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=549)** You could find all the a tags that have a title for example, all the hyperlinks that have a title.
>
> **[9:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=556)** There they all are.
>
> **[9:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=558)** We can also find all the a tags that don't have a title.
>
> **[9:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=563)** Which is interesting.
>
> **[9:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=565)** And there they are.
>
> **[9:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=566)** Mastering selectors will make your front end development life much easier.
>
> **[9:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/random-access-with-queryselector?u=76281980&t=570)** Check out the W3C selectors recommendation, and I guarantee you'll find at least one selector you haven't seen before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (9), [[Forms]] (4), [[Vanilla]] (2), [[JavaScript]] (2)
> **Code Identifiers:** queryselectorall (10), queryselector (4), innerhtml (3), refreshoutput (1), foreach (1)
> **Env Vars:** dom (8), html (8), w3c (2), html5 (1)
> **CLI Commands:** find (6), make (3)
> **Exercise Files:** source code (5)
> **Cross-References:** go back to (3)
> **Documentation:** w3c (2), stack overflow (1)
> **Definitions:** is called (2), is a  (1)

#### [CRUD in the DOM](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=0)** - [Instructor] CRUD is one of those acronyms that make you laugh the first time you hear it, but you remember it for the [[Representational State Transfer (REST)|rest]] of your career.
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=5)** Create, read, update, and delete are the four basic operations for almost every UI-driven application.
>
> **[0:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=12)** We'll base our credit application on the querySelector testbed application we built in the previous video.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=17)** That allowed us to type or paste arbitrary [[HTML]] source code into this webpage, have it be parsed, and then run querySelectorAll on it.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=25)** And to demonstrate again, I'm going to use Donald Knuth's biography from Wikipedia.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=28)** It's got a lot of interesting content in it.
>
> **[0:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=30)** And I'm going to copy this using the developer tools.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=34)** I'm going to copy the source code, back, and paste it into my page.
>
> **[0:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=38)** And so now, like I said, I can [[Fetch]] all the image tags or all the P tags.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=43)** And so now that I can do that, the first operation I want to implement is delete.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=48)** So let's go back into our source code.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=51)** And I'm going to find the form where I'm actually allowing the user to type in the selector that they're matching against.
>
> **[0:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=58)** And I'm going to add a normal button.
>
> **[1:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=60)** Not an actual submit button, but a normal button for various reasons.
>
> **[1:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=64)** If you do a submit button, it's kind of hard to find out what button was clicked.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=67)** So better off just doing a regular HTML button.
>
> **[1:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=70)** So we're going to do type=button.
>
> **[1:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=72)** The label is delete, okay? And we're going to save this off.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=79)** And we're going to go back to our browser and refresh.
>
> **[1:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=83)** And now, we have a delete button and it doesn't do anything.
>
> **[1:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=86)** So the next thing we need to do is actually intercept the event when the user clicks on delete.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=93)** So to do that, we're going to go back into our [[JavaScript]] file here, queryall.js.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=97)** And similarly, to the way we handled these other events, we're going to add a new event handler here in our content loaded processing logic.
>
> **[1:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=106)** And we're going to once again, grab a hold of that form, document.[[Forms]].queryall.
>
> **[1:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=113)** And we're going to add an event listener on the form itself.
>
> **[1:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=116)** And this is a useful technique, especially if you're manipulating the DOM manually.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=121)** Putting a listener on a higher up element, like the form element, like the parent.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=125)** Allows you to manipulate lower-level DOM elements without having to worry about whether you've accidentally disconnected a listener.
>
> **[2:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=132)** Or you've corrupted your listening tree.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=135)** And just listening at a higher level allows you to process things more centrally.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=138)** It makes your code generally cleaner.
>
> **[2:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=141)** So now, we're going to add a click event with an error function.
>
> **[2:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=149)** And inside that event handler, what I'm going to do is I'm going to, first of all, make sure that a button was clicked.
>
> **[2:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=154)** Because this will be called anytime anything inside the form is clicked.
>
> **[2:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=157)** So the easiest way to do that is look at the event target.
>
> **[2:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=161)** And let's look at the tag name, which would be the element tag of that particular element that was clicked.
>
> **[2:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=167)** And it was not equal to button.
>
> **[2:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=168)** And notice it as upper case. It has always upper case.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=171)** I'm not sure why that is the case, but you will have to always compare against an uppercase string.
>
> **[2:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=176)** If it's not a button, we're just going to return.
>
> **[2:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=178)** Now, assuming it was a button, I'm going to do a switch statement.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=182)** And for literary types, that's what we call foreshadowing because we're going to have some other handlers later.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=187)** So I'm going to switch off of the target, which is once again the button, innerText.
>
> **[3:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=192)** And I'm just going to use the text of the button to tell me what operation is being performed.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=196)** In this case, it's going to be delete.
>
> **[3:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=200)** And I'm going to call a new function that doesn't exist yet called deleteMatches.
>
> **[3:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=205)** And with breaks, don't ever forget your break when you're using the case statement.
>
> **[3:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=209)** You'll only do that a few times before you realized that those bugs are very hard to find.
>
> **[3:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=213)** So we're going to go ahead and create that new deleteMatches function.
>
> **[3:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=218)** And just for kicks, we'll say console.log deleteMatches called.
>
> **[3:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=223)** And make sure it is being called. Let's save that off.
>
> **[3:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=227)** Now, we'll switch back to our browser, refresh, bring up our developer tools.
>
> **[3:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=235)** Yeah, and deleteMatches is being called.
>
> **[3:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=238)** So now, we can go back and actually implement the deleteMatches function.
>
> **[4:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=241)** So let's go ahead back to our code.
>
> **[4:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=243)** And what this is going to do is it wants to grab the output element where all the target DOM stuff lives.
>
> **[4:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=250)** We're going to get the selector from the form and we're going to do a querySelectorAll.
>
> **[4:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=254)** And then we'll remove each matched element.
>
> **[4:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=256)** So the first thing I need to do is get a reference to the output section.
>
> **[4:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=260)** I'm going to use the same code as I used for refreshQuery because it's the same thing.
>
> **[4:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=264)** The next thing I need is a copy of a selector.
>
> **[4:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=266)** So let's get the selector text, which is available.
>
> **[4:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=271)** Just use document.forms.queryall.selector.value.
>
> **[4:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=279)** And that'll be the string.
>
> **[4:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=281)** Now, let's do output.querySelectorAll for the selector.
>
> **[4:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=290)** And for each matching element, we'll do an error function.
>
> **[4:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=297)** And all we need to do is remove the element.
>
> **[4:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=299)** And we're going to use removeChild.
>
> **[5:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=301)** So that's called on the parentElement.
>
> **[5:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=303)** So we have the element, we get the parentElement, which is another property that's available.
>
> **[5:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=308)** RemoveChild of the element itself.
>
> **[5:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=312)** Now, we save that off.
>
> **[5:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=313)** Let's go back into our page, refresh.
>
> **[5:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=318)** Let's grab Donald's information again, come back in here, and copy this, and paste it in here.
>
> **[5:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=330)** And let's go ahead and match all the image tags.
>
> **[5:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=332)** So we'll do IMG, we got all the images.
>
> **[5:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=335)** And let's delete them.
>
> **[5:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=337)** Now, if we scroll down, oh, this article no longer has any images.
>
> **[5:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=342)** And we didn't update our match list.
>
> **[5:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=345)** So you can see that that's kind of unfortunate.
>
> **[5:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=347)** So let's go ahead back and fix that.
>
> **[5:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=349)** That's kind of a fit to finish things.
>
> **[5:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=350)** Let's go in here. And all we have to do is refreshQuery.
>
> **[5:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=354)** And I think we need to pass in the selector, right?
>
> **[5:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=356)** So that will automatically clean that up.
>
> **[6:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=361)** Let's go back into our page, refresh, paste our code in again, find our images, and delete.
>
> **[6:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=371)** Now, that's cleaned up. Nice!
>
> **[6:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=373)** So now, we have the create, read, and delete.
>
> **[6:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=376)** So the C, R, and D of our CRUD acronym.
>
> **[6:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=378)** Let's go ahead and add the update function.
>
> **[6:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=380)** So the U of that. And then we'll have a complete set.
>
> **[6:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=383)** So the operation I want to implement is not too complex.
>
> **[6:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=387)** What I want to do is I want to flatten any elements that are matched by querySelectorAll.
>
> **[6:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=392)** So instead of having an element with nested text nodes or nested comment notes, I'm going to take all the texts of a given matched element and I'm going to flatten it into a single text node.
>
> **[6:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=404)** So it sounds complicated, but in operation, it'll be pretty clear.
>
> **[6:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=407)** So let's go ahead in.
>
> **[6:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=408)** Remember, I told you that switch statement was foreshadowing because we're going to add another function here.
>
> **[6:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=412)** Let's do a case textify.
>
> **[6:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=416)** And we're going to call textifyMatches.
>
> **[7:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=422)** And let's go ahead, back in here.
>
> **[7:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=423)** And we'll write our textifyMatches function.
>
> **[7:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=427)** And you'll find that it very closely resemble deleteMatches.
>
> **[7:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=432)** In fact, it differs in only one line.
>
> **[7:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=434)** So I'm going to go ahead and copy the body of deleteMatches.
>
> **[7:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=437)** I'm going to paste it down here to textifyMatches.
>
> **[7:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=441)** And the only thing that changes is the body of this loop.
>
> **[7:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=444)** So instead of removing this child, what we're going to do is we're going to create a new text node.
>
> **[7:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=448)** So const text = document.createTextNode.
>
> **[7:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=455)** And we're going to grab the innerText of our element.
>
> **[7:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=458)** So innerText, and that will essentially flatten that element.
>
> **[7:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=462)** And then all we're going to do is replaceChild.
>
> **[7:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=465)** You can replace a child.
>
> **[7:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=466)** And the ones again, you need to get the parentElement, replaceChild.
>
> **[7:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=472)** And it's kind of an odd syntax.
>
> **[7:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=474)** You give the new node that you want to put in there, the new element that you have in there.
>
> **[7:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=478)** So we're going to give it the text node we just created.
>
> **[8:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=481)** And then you give the reference node, which is the one will be replaced.
>
> **[8:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=484)** So essentially, this is going to swap out our current element with this new text note.
>
> **[8:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=488)** So we're going to save this off.
>
> **[8:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=490)** Now, let's go back into our HTML file and add that button so we can actually call our new function.
>
> **[8:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=495)** So once again, it's going to be button typebutton.
>
> **[8:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=499)** And the name on this one is textify.
>
> **[8:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=504)** So we'll save this off.
>
> **[8:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=506)** Now, let's go back in here and refresh our page.
>
> **[8:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=509)** And let's just go ahead and copy Donald's information one more time, paste it in here.
>
> **[8:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=518)** Let's match all the hyperlinks, let's match the A tags.
>
> **[8:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=521)** So let's go and run that.
>
> **[8:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=522)** And you can see there are quite a few of them down here.
>
> **[8:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=525)** And I'm going to textify them. So textify.
>
> **[8:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=529)** Now, you see that there are no more A tags in this DOM at all.
>
> **[8:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=533)** And in fact, they've all been flattened into plain text.
>
> **[8:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=536)** So that basically covers all of the CRUD.
>
> **[9:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=540)** The create, read, update, and delete functions that you can do with a DOM.
>
> **[9:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/crud-in-the-dom?u=76281980&t=543)** Now, thanks to CRUD, we have all the building blocks we need to tackle some more ambitious applications using [[Vanilla]] JavaScript and the DOM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2), [[Forms]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Fetch]] (1)
> **Code Identifiers:** deletematches (7), queryselectorall (4), innertext (3), parentelement (3), textifymatches (3)
> **Env Vars:** dom (6), crud (4), html (3), img (1)
> **CLI Commands:** find (5), node (5), make (3)
> **Exercise Files:** source code (3)
> **Cross-References:** previous video (1), go back to (1)
> **Definitions:** is a  (2)
> **File Paths:** queryall.js (1)

#### [Challenge: queryAll++](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=0)** - So the querySelector demo we built is nice, but it could be even nicer.
>
> **[0:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=9)** So I've added a feature to highlight the selected elements in the output DOM tree.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=14)** So if I search for, let's say image tags, you'll see there's a little yellow border around this image here.
>
> **[0:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=19)** If I search for, let's say hyperlinks.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=22)** I'll search for that.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=23)** You can see now all the hyperlinks are selected with that yellow background.
>
> **[0:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=27)** So your challenge, should you choose to accept it, is to add that feature to the QueryAll code you'll find in chapter one, 0105 folder of the project files.
>
> **[0:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=36)** And I also used one of the less known HTML5 elements to hide the match list.
>
> **[0:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=41)** So I didn't have to scroll past it every time when I wanted to see my results.
>
> **[0:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=44)** So if you want some extra credit, you can do that too.
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=47)** And don't feel that your solution has to look exactly like mine.
>
> **[0:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=50)** If you have a different, better way to differentiate the selected elements, I'd love to see it.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-queryall-plus-plus?u=76281980&t=54)** So good luck.

> [!info]- Semantic Content
>
> **Env Vars:** dom (1), html5 (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** queryselector (1)
> **Speakers:** - so (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: queryAll++](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=0)** - [Tutor] Were you able to add the element of highlighting feature?
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=7)** How did you do it?
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=8)** Did you use inline styles, CSS, or did you come up with some other answer?
>
> **[0:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=13)** Now let's look at my solution.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=14)** My solution was to add a new CSS class to every matching element, so I added my code to the refresh query function.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=21)** So let's go back to the source code and find refreshed query.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=26)** And here it is, and basically for every matching element, I added a new class called match.
>
> **[0:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=33)** So, you know, that class list that's the CSS class list add match, so I added a match.
>
> **[0:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=42)** And then to make it visible, let's go back into our [[HTML]] inline style sheet here.
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=47)** And I added any new rule and it is match, and I made background gold and I added a small bit of padding because some elements the background's not visible at all, so I made a one point pad around that so we can see it.
>
> **[1:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=63)** So let's go into the application, let's refresh it.
>
> **[1:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=66)** Let's go grab our sample, back to Donald Knuth.
>
> **[1:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=71)** And once again, his content is kind of interesting, so let's go ahead and copy that, paste it back in here.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=79)** Now you can see, we have something to look at.
>
> **[1:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=82)** And let's just match the image tag, I see an image tag there, so image, and you'll see the matches are shown in this list here, and it's kind of irritating I have to scroll a lot and that's why the extra credit was given in the challenge question part, and so I'll show you that next because I'm tired of scrolling.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=96)** But as you can see, there is a golden border around the image, right?
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=99)** So that's working, what if I select, let's say all the links and now there's going to be a lot of those.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=105)** So I grabbed this and scroll down.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=108)** And as you can see, when we get there, there are a lot of links selected, but also the image is still selected as well.
>
> **[1:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=113)** So there's a bug, we got to go back in and clear our old matches.
>
> **[1:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=116)** And then that way the new matches would be the only ones with a golden border.
>
> **[1:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=119)** So let's go back into the editor, and here in query all, first of all, actually, I'm going to do the extra credit because I don't want to have to scroll anywhere.
>
> **[2:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=127)** I'm going to use the, one of the lesser known HTML five tags, the details tag, and I'm going to move all this into the details.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=135)** It gives you a collapsible element for free, essentially.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=138)** So details, and the use summary inside that to the summary is what's going to be displayed all the time, so we'll just show our label all the time and save that.
>
> **[2:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=150)** Now let's go back into our [[JavaScript]] code and to refresh query.
>
> **[2:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=153)** And what we're going to do, is essentially we're going to find all of the elements that have the match class.
>
> **[2:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=157)** So we're going to use document.querySelector all again, and the selector we're going to want to match against is dot match.
>
> **[2:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=166)** So we're going to find that, and we're going to do it for each element, we're going to do an error function.
>
> **[2:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=173)** And for that element, we're going to get the class list and we're going to remove the match class, so that will moved that class.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=182)** And what's interesting is of course, this is mutating this Dom list, as we iterate through it, that list is getting shorter, but luckily the browser deals with that for us we don't have to think about it too much.
>
> **[3:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=190)** So let's save this off, and let's go back to our code and refreshed to make sure we got the new stuff.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=196)** And you'll see that we have the matches are now inside this detail's home, which is nice.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=201)** Let's go ahead and grab our sample HTML content from Donald Knuth here.
>
> **[3:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=206)** So we'll copy as HTML, paste it in here, all right?
>
> **[3:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=212)** And let's go ahead and search for the image tag again.
>
> **[3:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=214)** So when we search for image and there it is, it's selected.
>
> **[3:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=218)** Now let's search for A tags, now the image is no longer highlighted, but the A tags are.
>
> **[3:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=223)** So that fixed that issue.
>
> **[3:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=224)** And also you'll notice that my matches are in here, they're just collapsed, which is nice, you don't want to see all that.
>
> **[3:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-queryall-plus-plus?u=76281980&t=230)** So, that's it, and so if you had a different solution or had questions about my answer, you can ask questions through the [[LinkedIn]] learning website and I'd love to hear what you think and what you did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[JavaScript]] (1), [[LinkedIn]] (1)
> **Env Vars:** html (4), css (3)
> **CLI Commands:** find (3), make (2)
> **Cross-References:** go back to (2)
> **Code Identifiers:** queryselector (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)


### 2. HTML to DOM

[↑ Back to Table of Contents](#table-of-contents)

#### [Where does the DOM come from?](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=0)** - [Instructor] As software has become more complex with layers on top of frameworks, on top of other frameworks, we sometimes start to treat the lower level functionality like a magic box.
>
> **[0:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=9)** It does what we want, but who knows how it does it.
>
> **[0:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=12)** Having a good working knowledge of how lower-level systems work will always make your high-level code better.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=16)** To really get acquainted with the relationship between [[HTML]] and the DOM, we're going to build an HTML pretty printer.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=22)** So I've already developed a basic skeleton application here.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=24)** You can see there's a text area where we can type or paste HTML source code.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=28)** And then I'm going to have an output element down here, where I'll show the resulting pretty print eventually.
>
> **[0:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=33)** And let's go take a quick look at the source code for this.
>
> **[0:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=35)** It's a basic HTML5 page, and you can see that I have that text area in here.
>
> **[0:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=39)** I have a custom element that I'm using for the output.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=43)** And if we look at this [[JavaScript]] file, pretty parsed JS, I'm intercepting the DOMContentLoaded event, and I'm adding an input listener to that text area.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=51)** So when it changes, then I call this refreshOutput function and it is parsing the HTML that I got from the text area through the value property.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=59)** And if we look at the parsing function down here, it's using a very common pattern.
>
> **[1:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=64)** You'll see when you need to parse HTML in JavaScript, a lot of times you just create a div or some other element using create element for the document object.
>
> **[1:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=71)** And then you set the inner HTML to the HTML you want to parse.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=74)** And then I look through the child nodes and I add them to a document fragment.
>
> **[1:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=78)** It can contain child nodes, but it doesn't have any markup of its own.
>
> **[1:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=81)** And so let's go ahead and go back over to our app.
>
> **[1:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=85)** And actually, first I'm going to show you, I'm using the standard set up I've been using for the [[Representational State Transfer (REST)|rest]] of this course where I'm using the [[Python (Programming Language)|Python]] built-in web server to host this, so nothing fancy.
>
> **[1:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=94)** And we're going to go back in here and let's go ahead and type in something.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=97)** So let's say: hello, pretty printer.
>
> **[1:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=101)** And as you can see, I have some markup appearing down here.
>
> **[1:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=104)** Now let's get a slightly more complex HTML example to work with.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=108)** So I'll come over here for an HTML5 cheat sheet that gives some examples of semantic tags and how they can be used.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=114)** So let's copy this and let's go back into our application and I'm going to paste it in and nothing.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=121)** So that's kind of interesting.
>
> **[2:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=123)** Let's go ahead and open our developer tools and see why.
>
> **[2:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=126)** So we'll come over here and I'm going to find my output element, which is in the body here somewhere.
>
> **[2:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=132)** There's our output section, here's our output tag.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=135)** And you'll see, I have exactly one node.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=137)** I have this comment node.
>
> **[2:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=139)** This is the only thing that came through and that's really peculiar.
>
> **[2:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=142)** So let's do this.
>
> **[2:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=144)** Let's add a character turn.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=145)** Oh! And now I have all the rest of my content.
>
> **[2:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=148)** So when I was developing this application, I actually found a bug in the HTML5 parser in Chrome.
>
> **[2:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=153)** And whenever you get rid of that character turn, all I get is the comment node, when I put the character turn back, it shows up.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=159)** So it looks like we have two possible paths we can take now.
>
> **[2:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=164)** We can either: one, leave the character turn in and continue with the pretty printer as as we were planning to, right?
>
> **[2:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=170)** Or two, we can write our own HTML parser in JavaScript.
>
> **[2:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=174)** And you know, while we could do number one, where's the fun in that?
>
> **[2:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/where-does-the-dom-come-from?u=76281980&t=178)** So let's stay tuned as we enter the fascinating world of recursive descent parsers and lexical analyzers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (9), [[JavaScript]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** html (9), html5 (3), dom (1)
> **CLI Commands:** node (3), make (1), python (1), find (1)
> **Exercise Files:** source code (2)
> **Code Identifiers:** refreshoutput (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [DIY HTML parsing](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=0)** - [Instructor] Writing the code to convert human readable [[HTML]] source code into a browser friendly DOM tree structure, can seem overwhelming at first.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=7)** There are many different approaches that can be taken, but one of the simplest to understand is a recursive descent parser.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=14)** Recursive descent parser is a top-down parser, meaning that you start by writing a function that will consume the entire text to be parsed.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=21)** Let's call this function ParseContent.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=24)** It will be able to parse any sequence of HTML syntax we give it.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=28)** While our parser could technically be built to read the input text one character at a time like a file, most real-world parsers use what is called a lexical analyzer or a lexer to make things simpler.
>
> **[0:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=38)** A lexer is like a smart file interface, but instead of just returning single characters, it can recognize and return groups of characters called [[Tokens]].
>
> **[0:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=46)** So our parseContent function will be able to peek at the next content to be read from our source file and delegate parsing to a more specific parsing function, which in turn may recursively call another parsing function.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=57)** For example, elements can contain arbitrary HTML content; so parse element we'll call parse content as needed to consume nested HTML.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=65)** So our plan is to write a top level parsing function called prettyParse, which will use a lexer object to read our HTML source code, and then return a completed DOM tree structure.
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=75)** To do that, we'll be making use of [[JavaScript]] classes, lambdas and regular expressions.
>
> **[1:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/diy-html-parsing?u=76281980&t=78)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Tokens]] (1), [[JavaScript]] (1)
> **Env Vars:** html (5), dom (2)
> **Definitions:** is a  (2), is called (1)
> **Code Identifiers:** parsecontent (1), prettyparse (1)
> **Exercise Files:** source code (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Building a firm foundation: The lexer](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=0)** - [Instructor] Having a flexible, reliable lexical analyzer can make the difference between a nice clean performant parser and a mass of unmaintainable spaghetti.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=8)** So before we start coding the parser, we're going to write a lexer class to support it.
>
> **[0:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=12)** And we're going to be working from the pretty parser code base that was introduced in an earlier video, for the most part.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=17)** So once again, it's just a simple [[HTML]] page.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=20)** It's got a text area on it that allows us to type in or paste HTML.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=24)** I'm actually pre-filling it with a bunch of HTML so we don't have to keep cutting and pasting that in here.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=28)** And whenever you modify that text area, it calls this refresh output function.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=34)** And for the moment, I'm going to remove this pretty parse function, because this is the old pretty parse function that used the built-in browser parsing function.
>
> **[0:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=42)** We're going to rewrite that completely.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=43)** So for my purposes, I'm going to get rid of it.
>
> **[0:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=46)** And here we're going to implement our new class.
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=47)** We're going to call this class lexer.
>
> **[0:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=52)** And so this class is going to be a file like class.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=56)** So when we construct it, so we're going to have a constructor that accepts source code.
>
> **[1:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=61)** And what it does is it's going to store that in a property.
>
> **[1:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=64)** So this.source equals source, and it's going to have a file pointer.
>
> **[1:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=70)** And in this case, the file pointer is going to be initialized to zero.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=74)** So let's see, let's save that off.
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=75)** Also, it's going to implement initially only one method, which is a read.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=79)** So just like a file, you can read a character at a time.
>
> **[1:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=81)** So what read will do is if this file pointer is less than zero, or this file pointer is greater than or equal to the source length, then we'll return undefined.
>
> **[1:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=104)** I can easily try to read before the beginning of the file or after the end of the file.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=108)** Otherwise we'll just return this, the character at this.source, position file pointer, plus plus.
>
> **[1:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=119)** (indistinct) all right.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=121)** So that will enable us to read it character by character.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=125)** So in order to exercise this, I'm going to create a temporary test bed.
>
> **[2:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=130)** I'm going to create a test lexer method, which will accept the source code that we typed in here in our text area, so.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=138)** And it's going to be basically a unit test.
>
> **[2:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=140)** So we'll go down here, we'll create a new function called test lexer, which accepts source code.
>
> **[2:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=147)** And then, inside here, mostly what we're going to be doing is just asserting that things work.
>
> **[2:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=152)** So for now let's create a new lexer.
>
> **[2:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=153)** So we're going to use the constructor, right?
>
> **[2:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=156)** So we're going to say new lexer with our HTML.
>
> **[2:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=160)** And I'm going to create a temporary variable, a string.
>
> **[2:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=165)** And I'm just going to read the entire source from the lexer and confirm that it does match because it should be exactly the same thing.
>
> **[2:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=172)** So while, while there are more characters to read.
>
> **[2:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=175)** So in order to know when I'm at the end of file, I'm going to add a new called EOF.
>
> **[3:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=181)** So EOF, end of file is going to tell me false if there are more characters to read, or true, if there aren't, so we're going to return this file pointer.
>
> **[3:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=192)** If it's greater than or equal to this source length, then we're at the end of file.
>
> **[3:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=200)** So now I have an EOF property.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=201)** I can go down here while, but not lexer EOF output.
>
> **[3:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=208)** I will append the next character lexer read.
>
> **[3:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=211)** So we'll read a character.
>
> **[3:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=213)** And to confirm all of this works, I can just do a console.assert that my new string or that my old string equals my new string.
>
> **[3:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=223)** So let's save all this off, go back to the browser, and look in the console.
>
> **[3:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=231)** Now, obviously there's no output.
>
> **[3:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=232)** Does that mean that it worked or it didn't work?
>
> **[3:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=234)** Just to be sure.
>
> **[3:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=235)** Let's go ahead in here and we'll add another assertion.
>
> **[4:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=243)** To make sure that our code is actually being executed.
>
> **[4:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=245)** That's always a good rule.
>
> **[4:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=247)** Yep. So you'll see our code is being run.
>
> **[4:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=253)** So get rid of that.
>
> **[4:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=255)** Now let's start adding some more useful methods to support parsing, but before we do that, we need to create a function to reset our file pointer, right now at the end of file here, we just read the entire thing.
>
> **[4:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=264)** So I'm going to create a new method up here in our lexer called rewind.
>
> **[4:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=270)** And its only job is to reset the file pointer to zero.
>
> **[4:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=273)** So this.filepointer equals zero.
>
> **[4:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=276)** Now we can start reading again from the beginning.
>
> **[4:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=279)** So let's save that off.
>
> **[4:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=280)** Now one of the most common operations you need to do while parsing is to match the text that's currently under the file pointers.
>
> **[4:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=286)** So if you can picture it, the [[Representational State Transfer (REST)|rest]] of the text that you haven't parsed yet against a sequence of characters or a regular expression.
>
> **[4:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=291)** So we're going to write a new method called match.
>
> **[4:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=295)** So let's go ahead and write a method here after rewind, we'll call it match.
>
> **[5:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=300)** And it's going to accept a token to match against.
>
> **[5:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=303)** It's a very simple function, but what it needs to do is look at the remaining text.
>
> **[5:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=307)** And in order to support that, I'm going to create a new property called remainder.
>
> **[5:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=311)** So let's go ahead and write that down here below EOF, we're going to create a new property called remainder.
>
> **[5:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=315)** And what it does is it returns the text that remains to be read from our file.
>
> **[5:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=320)** So it's pretty simple, return this.source, and we're going to return a sub string, starting at this.filepointer.
>
> **[5:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=330)** And that will return the text that remains to be read from our source code.
>
> **[5:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=333)** So we're going to use that remainder and we're going to search it for the token.
>
> **[5:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=338)** And if it strictly equals zero, then we've matched.
>
> **[5:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=342)** Okay? So we'll save that off.
>
> **[5:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=344)** And let's test our new function.
>
> **[5:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=346)** So first we're going to have to rewind our lexer.
>
> **[5:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=350)** So we're not at the beginning of file or not the end of file anymore.
>
> **[5:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=353)** And let's do a console.assert.
>
> **[5:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=356)** Now if you look at our browser, you can see over here that the very first token to be read is the beginning of this comment.
>
> **[6:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=363)** So we're going to go ahead and look for that.
>
> **[6:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=365)** So we go back into our source code.
>
> **[6:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=368)** And we're going to assert flexor match, that it matches that token, which is the beginning of an HTML comment.
>
> **[6:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=378)** All right, let's go ahead and save that.
>
> **[6:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=380)** Go back into our browser, refresh.
>
> **[6:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=382)** Now you'll notice that no assertions were thrown, which is good because we shouldn't be getting any output here.
>
> **[6:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=388)** Just to be sure that our lexer match logic is right, let's go ahead and add another assertion here, a negative case.
>
> **[6:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=396)** We're going to assert match random text.
>
> **[6:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=403)** Let me go back here, refresh.
>
> **[6:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=404)** Oh.
>
> **[6:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=405)** So if you see, back in our code, yep that didn't work.
>
> **[6:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=409)** And just to make sure we don't break match in the future, we'll leave that in there and say it should match that, it shouldn't match random text.
>
> **[6:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=416)** Before we move on an important detail to notice here in the match function is we're using the string search method and the search method is great because it can accept either a string or a regular expression.
>
> **[7:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=425)** And pretty soon we're going to be taking advantage of that regular expression functionality.
>
> **[7:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=429)** So that was not an accident.
>
> **[7:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=431)** Just want to be able to come back to that later.
>
> **[7:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=434)** Now although we've matched that initial string, that comment opening sequence, it didn't consume it.
>
> **[7:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=440)** So we're still, the file pointer hasn't moved and we're still looking at the beginning of that token.
>
> **[7:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=445)** So another very common operation is to consume the thing that you've matched.
>
> **[7:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=448)** So in order to support that, we're going to write another new method called consume match.
>
> **[7:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=453)** So let's go back into our lexer class, right after match here.
>
> **[7:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=457)** And we're going to call this one consume match, it excepts a token as well, which could be once again, a string or a regular expression.
>
> **[7:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=463)** And this is important because consume match is a little more complex than you would think it should be.
>
> **[7:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=469)** But what we're going to do is we're going to say the match equals the result of the remaining text, so remainder match token.
>
> **[7:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=479)** Now if matches truthy, so, say match and match length, so match is an array of matches and that if it's a string, it's going to be a length of one.
>
> **[8:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=491)** But if it's a regular expression, it could be more than one.
>
> **[8:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=494)** So we're going to say if the length is truthy as well, and match index, if it matches the entire expression, so a lot of this doesn't make sense unless you dig into regular expressions and matching capturing groups, which unfortunately we don't have time to show all of in this course, but there's a course on [[LinkedIn]] I believe about regular expressions and matching.
>
> **[8:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=514)** So if you're not familiar with regular expressions, it's definitely worth checking out.
>
> **[8:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=517)** So now that we have the match logic in here, we'll say this file pointer, we need to add the size of the thing that was matched to the file pointer.
>
> **[8:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=525)** And so that's available in the match group at location zero length.
>
> **[8:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=530)** So now we'll be skipping the thing that we found and returning true if we matched it.
>
> **[8:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=536)** And now if we didn't match it, return false.
>
> **[9:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=540)** And let's test that logic.
>
> **[9:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=541)** Let's go back into our unit test function.
>
> **[9:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=546)** And let's consume the match.
>
> **[9:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=547)** So console assert lexer.consume the beginning token for the HTML comment.
>
> **[9:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=556)** And we'll save this off, we'll go back to our browser and refresh.
>
> **[9:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=561)** And no assertions, so we are consuming it successfully.
>
> **[9:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=564)** So now that we have this matching logic in place, the next thing that we're going to implement is a function that allows us to read a stream until a particular condition is met.
>
> **[9:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=574)** And this happens all the time.
>
> **[9:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=575)** For example, in this case, if we look at our source code again, now that I'm sitting here, I want to read everything until I get to the closing tag.
>
> **[9:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=584)** So I'm going to create a new method in our lexer called read until.
>
> **[9:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=588)** So let's go back up into the lexer, so right below consume match here, read until, and read until is going to accept a call back.
>
> **[9:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=598)** So I'm going to call this call back condition, and all read until will do is get the start pointer.
>
> **[10:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=606)** So we're going to save our file pointer.
>
> **[10:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=607)** So start pointer equals this.filepointer.
>
> **[10:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=613)** Now, while we're not at end of file, and condition, so we're going to call back the function that was passed into us.
>
> **[10:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=623)** And we're going to pass in this as the argument, it's going to send the lexer to the callback function.
>
> **[10:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=628)** So while not condition, so while we're not at end of file and our condition isn't met, this.filepointer plus plus.
>
> **[10:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=639)** So we're going to continue skipping through the file.
>
> **[10:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=641)** And then what we're going to do is return the sub string that was read.
>
> **[10:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=647)** So return this.source, .substring and the start index is going to be the start pointer.
>
> **[10:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=655)** And the end index is going to be the file pointer.
>
> **[11:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=660)** And to see this in action, let's come down to our test right here.
>
> **[11:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=663)** And now what we need to do is get our comment text, and we're going to do that by reading until we see the closing part of the comment tag.
>
> **[11:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=670)** So lexer.readuntil, and our condition is going to be an arrow function.
>
> **[11:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=676)** It accepts a lexer.
>
> **[11:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=678)** Lexer.match, and we're going to match the end of the comment.
>
> **[11:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=684)** So let's save that off.
>
> **[11:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=685)** Actually, let's go ahead and print it out.
>
> **[11:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=688)** Console dot log comment, and we'll see what we got.
>
> **[11:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=695)** oops All right, let's go and check our code.
>
> **[11:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=698)** Refresh.
>
> **[11:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=700)** And now you can see, we have our comment.
>
> **[11:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=703)** So now that we have our comment, let's go ahead and consume that ending markup.
>
> **[11:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=708)** So consume match, the end of the comment, just we don't have to deal with that, because the next thing we're going to do is we're going to parse that header tag.
>
> **[11:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=717)** So let's go back and look at our source code again.
>
> **[12:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=720)** So we want to parse this tag next.
>
> **[12:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=722)** So the first thing we're going to do is we're going to consume that angle bracket there.
>
> **[12:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=726)** So let's assert console.assert, lexer.consume match.
>
> **[12:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=735)** And we're going to consume that, so that we'll skip over that.
>
> **[12:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=738)** Now we're going to add a new method that doesn't exist yet, but we're going to call this one, let's say tag equals lexer.readidentifier and read identifier is just going to read the characters that comprise an identifier.
>
> **[12:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=750)** So from here, it'll stop reading when it gets to the end, because this is not part of an identifier.
>
> **[12:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=755)** So that's going to be just a convenience method.
>
> **[12:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=758)** We're going to wrap around read until.
>
> **[12:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=760)** So let's go back into here, and let's say read identifier, and it's going to use a regular expression, but we're going to return this.readuntil, and we'll use once again, we get the lexer in here and an arrow function.
>
> **[12:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=775)** We're going to read until we don't match a regular expression.
>
> **[12:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=778)** And the regular expression we want is [[Microsoft Word|word]] character.
>
> **[13:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=781)** So we're going to use w, so basically until we match a non-word character, we will keep reading.
>
> **[13:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=786)** So this will read an entire identifier.
>
> **[13:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=789)** And then just to be sure that everything is copacetic over here, we're going to do an assertion.
>
> **[13:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=794)** So down here let's well, let's just print it out first.
>
> **[13:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=796)** Let's console log our tag, and see what we get.
>
> **[13:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=800)** So let's save this, go back to the code, refresh and our tag is header.
>
> **[13:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=805)** So that's good.
>
> **[13:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=806)** And the next thing we need to do is, I want to show you something, let's go back in here.
>
> **[13:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=810)** Remember from the previous video, possibly my gripe was, if you hit character turn things break, you'll see down here, it broke.
>
> **[13:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=817)** So the last convenience function we're going to introduce actually skips over white space.
>
> **[13:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=822)** And it looks almost exactly like the one you've seen before, the read identifier function.
>
> **[13:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=826)** In fact, it's so similar, I will probably end up copying and pasting this, so.
>
> **[13:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=831)** We're going to skip white space.
>
> **[13:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=832)** So we're going to read until going to call us when skip white space.
>
> **[14:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=841)** All right.
>
> **[14:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=842)** And what it returns, this part of the arrow function, all we got to do is change this regular expression.
>
> **[14:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=846)** So we're going to read as long as it's a space character, which is backslash S, so now we'll come down here, and right after the comment, we're going to add some code to right here.
>
> **[14:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=856)** Lexer skip white space.
>
> **[14:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=860)** Let's go back in here and refresh.
>
> **[14:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=863)** And everything is good to go.
>
> **[14:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=865)** So that concludes the lexer class.
>
> **[14:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=868)** This is the entire thing.
>
> **[14:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=869)** And with these methods, we will be able to write our complete HTML parser.
>
> **[14:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=873)** So stay tuned for the rest of that.
>
> **[14:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-firm-foundation-the-lexer?u=76281980&t=874)** And we will start parsing HTML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (8), [[Representational State Transfer (REST)|Rest]] (2), [[Microsoft Word|Word]] (2), [[LinkedIn]] (1)
> **Env Vars:** html (8), eof (5)
> **Exercise Files:** source code (7)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (3), previous video (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** just like (1), picture (1), for example (1)
> **Prerequisites:** before we start (1)

#### [Parsing text](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=0)** - [Instructor] Now that we have a complete, tested Lexer class, we're ready to begin work on the parser itself.
>
> **[0:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=4)** So the first thing we're going to do, I'm going to go back into my editor and I have the same setup as before, I have my text editor here.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=10)** I'm running the [[Python (Programming Language)|Python]] built-in web server in my Chapter 2\02_04 project folder.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=16)** And I am using Chrome here to browse.
>
> **[0:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=19)** So let's go back to the editor.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=20)** The first thing I'm going to do is I'm going to get rid of this test code that I had to exercise the lexer when we were building that.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=26)** It's no longer necessary, so we can get rid of this, this lexer function.
>
> **[0:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=32)** And I'm going to write my prettyParse function.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=34)** So function prettyParse, and it's going to accept [[HTML]].
>
> **[0:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=37)** And in the end it will be returning a DOM.
>
> **[0:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=41)** Now we'll append the response from prettyParse to our output elements, so output appendChild(prettyParse) and it accepts our HTML source code.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=51)** Now, with that housekeeping out of the way, we can focus on our parser function.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=54)** So inside prettyParse, we're going to write a scope function called parseContent.
>
> **[1:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=61)** Now parseContent's job is to parse any and all HTML content that is passed into prettyParse.
>
> **[1:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=66)** So the way we're going to handle that is we're going to create a lexer at the top level here that will be part of the syntax scope of this prettyParse function.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=74)** There's going to be a new lexer object which has our HTML source code.
>
> **[1:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=78)** Now inside of parseContent, we're going to have an accumulator that's going to accumulate the text that we parsed as we parse it.
>
> **[1:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=86)** So text is just going to be a string.
>
> **[1:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=88)** There we have it.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=89)** And parseContent will also, it'll return a document fragment because its job is to parse any sequence of HTML we're given, so it could be a series of text nodes and comment nodes and elements, we're not sure.
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=102)** So we're going to create a fragment, document.createDocumentFragment.
>
> **[1:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=109)** And that's what it will be cumulating its parsed elements into a parsed node.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=114)** So let's do a while loop.
>
> **[1:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=116)** While we're not at the end of file, we will read the next thing we need to look at.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=121)** So inside this loop, we're going to accumulate texts.
>
> **[2:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=123)** So right now it's going to parse the entire thing as if it were one big block of text.
>
> **[2:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=127)** So we're going to do that.
>
> **[2:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=129)** - And now, instead of blindly using this accumulator at the end of this while loop, we're going to write ourselves another inner function here called flushText.
>
> **[2:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=139)** And this is because it'll become apparent later, why we need to call this code in various different places.
>
> **[2:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=143)** So flushText's job is to say, if there is text in the accumulator, then we're going to create a new text node and we're going to append it to our fragment.
>
> **[2:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=154)** So fragment appendChild(document.createTextNode()) with our text and we reset the text to blank.
>
> **[2:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=166)** And now let's see.
>
> **[2:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=168)** So now we have that in place and at the end of this, we're going to flush our text and we're going to return our fragment.
>
> **[2:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=177)** We'll save this off.
>
> **[2:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=178)** Now, all we to do for prettyParse itself at the end is return parseContent.
>
> **[3:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=185)** In the end, we'll parse any sequence of HTML content we come across.
>
> **[3:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=188)** So let's go ahead and save this off and let's go back to our browser and refresh.
>
> **[3:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=193)** Now, you'll see if we look in here in the developer tools that we have one big text node that has all the texts from our HTML source.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=201)** And that was the goal at this point.
>
> **[3:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=202)** So from now on, we're going to start differentiating between the markup inside of our source code and start returning more sophisticated DOM content.
>
> **[3:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-text?u=76281980&t=209)** So let's do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** prettyparse (8), parsecontent (5), appendchild (2), flushtext (2), createdocumentfragment (1)
> **Env Vars:** html (7), dom (2)
> **CLI Commands:** node (3), python (1)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** source code (3)
> **Speakers:** - [instructor] (1), - and (1)
> **Prerequisites:** setup (1)

#### [Parsing comments](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=0)** - Now that we have a basic parsing loop implemented, we need to start recognizing different types of [[HTML]] markup.
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=5)** And the simplest type of markup to recognize is the HTML comments. So let's start there.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=10)** Let's go back to our browser briefly.
>
> **[0:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=12)** And in our HTML sample, you can see we have a comment right here at the very beginning, and it consists of this opening tag syntax here, which is a less than bang dash dash.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=21)** And it's ended with dash dash greater than 10.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=24)** And there are some more complicated rules about comments, but we're not going to mess with them.
>
> **[0:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=27)** We're just going to stick with this.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=28)** So let's go back to our code and in our parsing loop here, we're going to just add an if statement.
>
> **[0:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=33)** So what we can do is if we find this opening token, so we're going to use the lexer consume a match so remember consume match looks for a token, and then it will actually discard that token if it finds it, but it'll return true.
>
> **[0:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=46)** So we will know we've consumed at the beginning of a comment. So the first thing we need to do, the reason we've wrapped this flushed text code.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=53)** You notice up here, if we've accumulated any texts, we need to append that to our document fragment.
>
> **[0:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=58)** We need to add flush text here to flush any texts we've accumulated so far.
>
> **[1:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=63)** And then all we have to do is parse that comment and appended it to our fragment. So fragment append a child, and we're going to write a new rabbit function called parse comment, and it will use the lecture we already have.
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=75)** So it doesn't have any context.
>
> **[1:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=77)** And that's kind of the way we do the recursive descent parsing is everybody has a shared context, like a shared lexer that way we don't have to keep passing things through in arguments. It gets kind of tedious.
>
> **[1:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=87)** So we're going to write this new private function up here called option parse comment and parse comment will first we'll get the comment text.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=97)** So the comment text is going to be everything between those two [[Tokens]], right?
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=102)** So we're going to use lexer read until again, and it accepts the lexer as an argument on the callback.
>
> **[1:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=109)** And we're going to match. The closing syntax that's dash dash greater than sign, right?
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=114)** So that will give us everything between, if you look back at our example here, that will give us all this text between this opening syntax and the closing syntax.
>
> **[2:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=124)** So we have that stored in comment text.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=125)** Now we need to consume this token. Otherwise, when we resume parsing, we'll get this stuff and we'll show up as text in our Dom tree, and we don't want that.
>
> **[2:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=134)** So we need to actually consume the match.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=135)** So lexer consume match our closed syntax there.
>
> **[2:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=140)** And then all we have to do is return a new comment node.
>
> **[2:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=144)** And so we do that using document dot create comment.
>
> **[2:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=146)** So return document, create comment, put that comment text. Okay.
>
> **[2:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=153)** Let's go back down into our loop and double check something.
>
> **[2:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=156)** Okay. So the logic down here is if we consume this match, if we actually find the beginning of a comment, we do this or else.
>
> **[2:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=162)** We're going to accumulate more texts.
>
> **[2:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=164)** So let's move this into our else branch here.
>
> **[2:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=167)** So if we don't recognize the opening of a new comment, we're just going to keep accumulating texts.
>
> **[2:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=172)** So let's go ahead and save this off.
>
> **[2:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=174)** And let's go back into our browser and refresh and make sure I've started up my server.
>
> **[3:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=181)** So it's going to do that. Sorry.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=182)** So I'm in my project folder, [[Python (Programming Language)|Python]] dash M HTTP dot server and there it goes.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=187)** So let's go back into the browser.
>
> **[3:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=190)** And now we can look in here and we'll see, there is my comment node.
>
> **[3:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=195)** And then there is a big old text node with the [[Representational State Transfer (REST)|rest]] of my source code, just as a simple text right now.
>
> **[3:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=199)** So now we can recognize texts and comments. That's great.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=201)** So now we need to do is add support for elements and attributes, and we will have our very own bare-bone HTML parser.
>
> **[3:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=207)** Before you watch the following videos, take a minute to think about how you would implement the element parsing logic, which lexer calls would you need what Dom calls, we would use.
>
> **[3:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=214)** Take a little time to think about it.
>
> **[3:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-comments?u=76281980&t=216)** This will do wonders for your code sense and your problem solving skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Tokens]] (1), [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (3), find (2), make (1), python (1)
> **Env Vars:** html (4), http (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Exercise Files:** source code (1)
> **Speakers:** - now (1)

#### [Parsing elements](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=0)** - [Instructor] Now, parsing element content is the most complex task we need to do to complete our [[HTML]] parser.
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=5)** This is because some elements have no closed tag, some attributes have no values, and many elements have nested element content.
>
> **[0:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=12)** It's this nesting that the recursive part of our recursive descent parser will handle.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=16)** So once again, our development environment is very simplistic.
>
> **[0:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=19)** We're going to be using the [[Python (Programming Language)|Python]] built-in web server.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=21)** So Python dash M http server that's comes with Python three in our project folder, and we're going to be using Chrome as our browser.
>
> **[0:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=30)** So you can see over here, this is the current version of the code, and I'll be using my text editor, which at the moment I'm using Atom, which I still kind of like.
>
> **[0:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=37)** So in order to support element parsing, we're going to be modifying the parse loop, which is located here in the parse content function and as you can see, we're currently parsing comment because we know comments begin with this open comment tags syntax.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=51)** So how do we know that we're parsing an element?
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=53)** We basically just need to match a less than sign.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=56)** So, we're going to do it else, if lexar.consumeMatch less than time.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=67)** Then we're parsing an element, and we can get rid of that.
>
> **[1:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=71)** So logically at this point, all we really need to do.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=73)** It looks very similar to what we did for comments.
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=75)** We're going to flush text in case we parsed any texts, and accumulated it up to this point.
>
> **[1:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=80)** And we're going to append the element that we're going to parse.
>
> **[1:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=83)** So fragment.appendChild, and we're going to write a new function called parse element.
>
> **[1:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=92)** and it will behave very similarly to parse comments.
>
> **[1:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=94)** So let's go back up here.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=97)** Above comment, I guess, and we will write parse element.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=100)** Actually we'll do it right after parse comment.
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=102)** So function parse element.
>
> **[1:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=106)** Now the parse element function.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=108)** If you think about where we're at, let's go take a quick look at the source code.
>
> **[1:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=111)** We just consumed this character.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=114)** So the next thing we're going to do is we're going to get the tag name.
>
> **[1:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=118)** And so we've already added.
>
> **[2:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=120)** If we look back into our lexer, we added a read identifier method to that.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=125)** So that'll be pretty easy.
>
> **[2:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=127)** We can grab our tag name here by doing const tag name equals lexer.read identifier. So there's our identifier.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=135)** Now that we have the identifier, we can go ahead and create our element.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=138)** So we're going to create an element node using element, and we're going to use document.create element for that tag name, there we have it.
>
> **[2:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=149)** So now we have a place to put the stuff that we're going to start parsing.
>
> **[2:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=152)** So let's save early. Save often, make sure we're not losing anything here.
>
> **[2:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=156)** We're going to come back in here and we have our element, and we're going to, there are a couple of different cases we need to deal with.
>
> **[2:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=162)** First of all, let's go back and look here.
>
> **[2:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=164)** I mean, our header tag is pretty simple because there is no attribute content or anything here, but that's not the case everywhere. You'll see, for example, there's a link here is going to have attributes stuff.
>
> **[2:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=174)** So the first thing we need to do is deal with attributes, and for the purpose of making this somewhat more concise and easier to understand we're going to just skip attributes for now.
>
> **[3:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=183)** So we're going to put in a nice, big TBD comment here, and we're going to say parse attributes, but that's going to happen later, for now we're just going to skip them.
>
> **[3:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=193)** So all we need to do to skip them is Lexar read until There are couple different cases we need to look for.
>
> **[3:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=202)** So we're going to use as a regular expression to know when we've reached the end of the tag. So lexer match, and we're going to use a regular expression.
>
> **[3:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=209)** It's going to look a little complicated, but I'll walk through it with you.
>
> **[3:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=212)** So first we're looking for an optional slash character because of the tag has a trailing slash that means it's empty.
>
> **[3:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=219)** It has no content.
>
> **[3:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=220)** Then most definitely followed by a greater than sign, which means with the end of the open tag, and these two slashes basically delimit this whole thing as a regular expression in [[JavaScript]].
>
> **[3:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=229)** So now we've got all of our closing parentheses there.
>
> **[3:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=231)** So lets go and save that off.
>
> **[3:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=233)** Now at this point, we know we're looking at either one of two possible strings.
>
> **[3:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=236)** We're either looking at a greater than time by itself or a slash greater than sign.
>
> **[4:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=240)** So what we're going to do is we're first going to deal with a case where there's nested content.
>
> **[4:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=244)** So lexer.consumeMatch greater than time.
>
> **[4:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=247)** That means we are at the end of an open tag.
>
> **[4:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=249)** That's going to have nested content for our purposes.
>
> **[4:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=252)** So element.appendChild, and we get to call parse content again.
>
> **[4:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=258)** So this is the recursive part of the recursive descent parser because elements can contain arbitrary sequences of nodes.
>
> **[4:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=265)** So we're going to call parse content to get the contained HTML.
>
> **[4:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=269)** Then down here, we're going to consume our close tags.
>
> **[4:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=273)** So consume match.
>
> **[4:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=274)** We know clothes tags start with less than 10 and a slash, and all we're going to do for our purposes now is we're not validating this or anything.
>
> **[4:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=281)** We're just going to dump everything until we get to the close greater than sign.
>
> **[4:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=285)** So now we're going to read until lexer, and our condition in this case is until we see a greater than sign. So Luxor dot consume match.
>
> **[4:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=294)** And that means we're not only going to read to that greater than sign, but we're going to discard it as well.
>
> **[5:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=300)** So when we're done, if you picture what happened, the parser in this case, let's say we were parsing something that had nested element content.
>
> **[5:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=306)** So we parsed this thing.
>
> **[5:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=308)** Let's parse that definition list, arc parse content, call parsed all of this stuff, and then we read this token.
>
> **[5:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=316)** If you look back at the code.
>
> **[5:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=318)** That was consumed by this, right?
>
> **[5:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=320)** And then we're going to basically consume everything up until this character, as well as that character.
>
> **[5:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=327)** So we end up here.
>
> **[5:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=329)** And so as soon as this sequence of code is complete, our lexer is sitting parked right here at the end of that close tag.
>
> **[5:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=337)** And that completes the case where we have an open tag that has nested content. So there's one more case we care about, which is a empty tag or has no close tag. So in this case, we're just going to consume match this token which means there was nothing inside that element.
>
> **[5:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=353)** It has no nested content.
>
> **[5:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=355)** And now there's nothing left to do except return the element so let's return the element.
>
> **[6:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=361)** So now let's go back to our loop here and it's going to basically, we're going to step through let's just go ahead and run this really quickly, and see what happens.
>
> **[6:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=368)** So we're going to refresh this page, and we see we've got nothing. Let's take a look at why.
>
> **[6:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=373)** Okay. Now this is interesting.
>
> **[6:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=376)** We ended up here with a tag name of blank.
>
> **[6:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=380)** And the reason for that is we don't know when to stop parsing If you look at our parcel loop inside the inner loop here, it reads until the end of the file.
>
> **[6:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=389)** But when we're parsing nested content, for example, we've parsed this header tag, let's say, and we want to look at everything within the header.
>
> **[6:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=397)** We actually want to stop parsing when we get to the beginning of the close tag.
>
> **[6:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=400)** So we need to modify our loop here slightly.
>
> **[6:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=402)** We're going to actually look for one more condition.
>
> **[6:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=404)** So it'll either get to the end of the file, or in this case we're going to match the beginning of a close tag.
>
> **[6:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=414)** Now let's save that off let's refresh, and voilà, while we have HTML content, so we now have nested element content.
>
> **[7:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-elements?u=76281980&t=424)** And once we remove this pesky TBD comment in our code, up in here where we're parsing or failing to parse attributes, we will have ourselves a fully functional if pretty simple HTML, parser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Python (Programming Language)|Python]] (3), [[JavaScript]] (1)
> **Env Vars:** html (4), tbd (2)
> **CLI Commands:** python (3), node (1), make (1)
> **Analogies:** for example (2), kind of like (1), similar to (1), picture (1)
> **Code Identifiers:** consumematch (2), appendchild (2)
> **Cross-References:** go back to (1)
> **Tools:** atom (1)
> **Exercise Files:** source code (1)

#### [Parsing attributes](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=0)** - [Instructor] So we're on the home stretch with our home grown [[HTML]] parser now.
>
> **[0:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=3)** The last thing we need to implement is attribute parsing, So let's go back to our source code again, and once again, I'm running the [[Python (Programming Language)|Python]] web server here, that's included with Python 3, so I'm running it in my Project folder.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=16)** So back here in the editor, you'll see that we previously left a TBD comment in here somewhere.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=22)** So, yep. Right there.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=23)** So we wanted to parse our attributes later.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=25)** We just skipped over them for now.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=26)** So now it's time for us to actually implement that for real.
>
> **[0:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=30)** So there are a couple of interesting cases that we have to think about.
>
> **[0:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=33)** If you look over here, our HTML is not super complicated, but you'll see that we have an attribute here, an HREF attribute, which has a value and has equal sign and then has a quoted string, but the quotes are actually optional.
>
> **[0:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=44)** You can have unquoted values, and you can also have attributes that have no values.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=48)** For example, you could say, you know, disabled, although that isn't honored on the A tag.
>
> **[0:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=52)** You can have attributes like that.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=53)** So we need to accommodate all of those cases of attributes and do the right thing.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=57)** So let's go back into our code.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=59)** The first thing we're going to do is create a attribute parsing loop here.
>
> **[1:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=63)** So it'll resemble our parsing loop we have down in parseContent, but let's do, first we need to skip the initial whitespace, if there is any.
>
> **[1:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=72)** Skip whitespace is completely innocuous.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=74)** If there's no whitespace, it won't do anything, so- So now while we're not at the end of file, and we haven't matched the end of the tag, so that's going to to be the lexer match.
>
> **[1:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=88)** And we're going to do a regular expression here, but we're going to look for, optionally, a forward slash, because it could be an empty, no content tag.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=96)** And so we're going to use the question mark attribute there, so that basically says an optional forward slash followed by a greater than sign.
>
> **[1:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=103)** And that will terminate the open tag.
>
> **[1:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=107)** So while we have not reached the end of the open tag, now, all we're going to do is we're going to take our element and we're going to set an attribute.
>
> **[1:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=115)** So we can use this setAttributeNode method, which will accept an attributeNode type, remember we talked about node types in another video.
>
> **[2:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=124)** So we're going to write a parseAttribute function, which will return the attribute in the form of a node.
>
> **[2:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=132)** So that will include both its name and its value.
>
> **[2:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=134)** And that's a very compact way for us to parse that attribute and send it back.
>
> **[2:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=139)** And then all we need to do here is skip whitespace again, because there might be trailing whitespace, or it would be considered preceding the next attribute possibly.
>
> **[2:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=148)** So now all we have to do is write the parseAttribute function.
>
> **[2:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=153)** So let's go ahead up here, and we will create this parseAtribute function right above our parseElement function.
>
> **[2:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=160)** So parseAttribute.
>
> **[2:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=162)** Now it's important to keep context and know where we are in the stream.
>
> **[2:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=166)** And if you look at the sample code we have here, let's pretend we were parsing this A tag.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=171)** So you can see down here in our loop, we've gotten the identifier.
>
> **[2:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=174)** So right now in our stream, we are sitting right at the end of this identifier.
>
> **[2:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=178)** And then our initial skip whitespace code is run.
>
> **[3:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=181)** So we're going to skip over that.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=182)** And now we're sitting right in front of the attribute name, no matter what, even if it was an attribute that had no value, the next identifier we could read is the attribute name.
>
> **[3:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=190)** So let's go back up to attribute, parseAttribute here, and we're going to get the attribute name.
>
> **[3:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=198)** And we're just going to use, lexer.readIdentifier.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=201)** And so now we have the attribute name.
>
> **[3:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=203)** We can use the browser's createAttribute.
>
> **[3:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=206)** So we're going to use, we're going to call it attribute equals document createAttribute with our attribute name.
>
> **[3:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=218)** Now, so now we have a node.
>
> **[3:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=220)** Now this attribute node at the moment has no value.
>
> **[3:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=223)** So the next thing we need to do is look and see if there is, in fact, a value.
>
> **[3:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=227)** The way we're going to do that is we're going to look for the equal sign, possibly preceded and followed by spaces.
>
> **[3:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=233)** So we're going to use once again, regular expressions are your friend, especially if you're writing parsers.
>
> **[3:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=236)** So in this case, we're going to consume a match.
>
> **[3:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=238)** We're going to consume a match.
>
> **[4:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=240)** You remember consume match will attempt to match either a regular expression or a string, and then swallow that string and not allow it to be parsed any further.
>
> **[4:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=249)** So we're going to look for zero or more spaces, followed by an equals sign, followed by zero or more spaces again.
>
> **[4:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=258)** And that's the end of our expression here.
>
> **[4:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=260)** So let's go ahead and do that.
>
> **[4:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=262)** And if this matches, if it's true, then that means this attribute has value.
>
> **[4:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=266)** And then save this off.
>
> **[4:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=267)** Now this is going to look a little weird, but I'm going to go ahead and create a value variable, but I'm not going to initialize it.
>
> **[4:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=272)** So it's going to be deliberately undefined at this point, because there are two possible cases.
>
> **[4:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=276)** If this value has quotes around it, so let's look for that.
>
> **[4:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=280)** Lexer.match, we're going to look for one of two possible quote characters.
>
> **[4:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=286)** So we're going to use a regular expression, again, we're going to use a character class.
>
> **[4:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=289)** And in this case, we're going to use single quotes or double quotes.
>
> **[4:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=292)** And my editor's being really smart, but I'm looking for either a single quote or a double quote.
>
> **[4:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=297)** So if this matches, and you notice it did not consume, but it matched, right?
>
> **[5:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=302)** So if this value begins with a single quote or a double quote, we can get the closing character.
>
> **[5:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=308)** So we're going to read the initial character and that will be the character we're looking for to close.
>
> **[5:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=312)** So closing char equals lexer.read.
>
> **[5:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=315)** We'll read the next single character.
>
> **[5:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=316)** And now we know what we're looking for at the end of this.
>
> **[5:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=319)** So we're going to say value equals lexer.readUntil, and we're going to to read until we see that closing character.
>
> **[5:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=326)** So I'll just add a lexer match, closingChar.
>
> **[5:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=332)** And notice that we are not consuming this because then it will become part of the value and then we'd have to pull it out and everything, so- Now we have our value lexer.consumeMatch.
>
> **[5:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=341)** We need to consume that closing character so it doesn't get left in the stream to be parsed later.
>
> **[5:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=345)** That's good, and save that off.
>
> **[5:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=347)** Now, there's just one more little case here.
>
> **[5:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=349)** So if there was no quote, we have an equals sign followed by something.
>
> **[5:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=354)** So we're going to take everything up until the first whitespace or the end of the opening tag.
>
> **[5:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=358)** So in order to do that, we're going to say the value will equal lexer.readUntil again, and we're going to use a regular expression again with a character class.
>
> **[6:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=369)** Match, and this case our regular expression is going to consist of either a space character or a forward slash or the end of the open tag with a greater than sign.
>
> **[6:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=382)** And we'll end our regular expression there.
>
> **[6:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=384)** And we'll save this off, make sure I actually wrote my regular expression correctly.
>
> **[6:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=388)** So we got that there, that's better.
>
> **[6:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=391)** So now, either one of these branches, either we've gotten a quoted string as our value for the attribute, or we have the unquoted value.
>
> **[6:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=398)** Let's set the attribute value.
>
> **[6:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=399)** So attribute.value equals value.
>
> **[6:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=404)** And all we have to do now is return our attribute.
>
> **[6:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=408)** We should have, if we go back to the browser, we refresh, and we scroll down, we have a working hyperlink because our attribute was, in fact, parsed.
>
> **[6:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/parsing-attributes?u=76281980&t=418)** So obviously this parser is not fully compliant with the HTML5 spec and it will not deal well with badly behaved HTML source code, but it should give you a good idea of what goes on under the covers of your favorite browser and give you some ideas for your own language parsing adventures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** parseattribute (4), createattribute (2), readuntil (2), parsecontent (1), setattributenode (1)
> **CLI Commands:** node (4), python (2), make (1)
> **Env Vars:** html (3), tbd (1), href (1), html5 (1)
> **Cross-References:** go back to (2), we talked about (1)
> **Exercise Files:** source code (2), sample code (1)
> **Versions:** python 3 (1)
> **Documentation:** spec (1)

#### [Challenge: Void elements](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=0)** (upbeat techno music)
>
> **[0:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=6)** - [Instructor] I have a confession to make.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=7)** We didn't really build an [[HTML]] parser.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=10)** It's really more of an XHTML parser and the reason is that it doesn't recognize void elements.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=17)** Now in normal HTML, these tags in this list don't require and shouldn't have closing tags.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=23)** Your challenge today is to modify the pretty parse code to honor this list of void elements.
>
> **[0:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=27)** And I'll show you quickly in the application what that means.
>
> **[0:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=31)** So if we come into the browser here that's running our code and we add an hr tag, let's say, to the footer.
>
> **[0:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=38)** You'll notice I didn't use the self-closing syntax and all of the contents of the footer were included inside the hr, which made it look a border sort of.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=45)** So if I use the self-closing XHTML syntax, you'll see I now have a normal hr.
>
> **[0:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=49)** So the challenge is to make our parser recognize that list of void elements which don't require closing.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=56)** So I got my list from the W3C and you can too.
>
> **[1:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-void-elements?u=76281980&t=60)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** html (2), xhtml (2), w3c (1)
> **CLI Commands:** make (2)
> **Documentation:** w3c (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat techno music) (1)

#### [Solution: Void elements](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=0)** (happy techno music plays)
>
> **[0:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=6)** - So, the challenge was to add support for void elements to "prettyparse".
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=10)** So we were given a link to the W3C site where a list of valid void elements can be found, so.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=16)** We're going to start by getting that list and we're going to turn it into a [[JavaScript]] array.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=21)** Now, this is a very common task you'll run into a lot.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=24)** You'll have to pull some reference material and manipulate it.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=26)** This is once again a good use of regular expression.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=29)** So if you'll find, I'm in my editor here, I'm going to look for words or [[Tokens]], you know, by looking for any one or more [[Microsoft Word|word]] characters, and I'm just going to replace it with a single quoted version of that.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=43)** So now you'll see, I have a good list of void element names.
>
> **[0:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=46)** So copy that.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=48)** Now I need to go to the code.
>
> **[0:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=49)** The place we need to modify this, is in our "parseElement" function.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=54)** Let's go to "parseElement".
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=57)** And what you'll see is in here, this particular "If" branch, First of all, let's create our array of void element names.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=65)** So "voidElements" equals an array with these strings.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=73)** And we can argue style all day long, so we're not going to do it.
>
> **[1:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=76)** I mean, I'll just show you how I would tend to format this for readability as best I could.
>
> **[1:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=80)** I tend to do a double indent here, just so I know that it's not part of another brand new statement or something, and I'm just going to wrap it because I don't want to pick up however many lines that would be like 12, 13 lines in my code.
>
> **[1:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=92)** And I'm going to go ahead and do this, just to make it clear that that's what we're saving here.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=97)** This is our "voidElement" array.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=98)** So, now we have that "voidElement" array.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=100)** The next thing we need to do is if we look down here, this "If" statement, if we consume that closing greater-than sign, that means we had a tag with no self-closing slash included.
>
> **[1:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=111)** So what we're going to do, is inside this "If" statement, if we're looking at a void element, so we're going to use the "voidElements.includes" that will tell us if the tag name is inside that array.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=125)** If it's not in the array, we're going to process the contained markup.
>
> **[2:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=132)** So, and save this off.
>
> **[2:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=134)** Now, let's go back into our browser, refresh.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=138)** Make sure I'm running my actual web server, so.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=145)** And now it's running.
>
> **[2:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=147)** Now, let's go back here and let's add an HR tag to our footer.
>
> **[2:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=151)** So here we have added horizontal rule and you'll see it's an actual horizontal rule instead of the bizarre kind of border effect we were getting before.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=159)** And we didn't break our self-closing syntax either.
>
> **[2:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=162)** It still works.
>
> **[2:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=163)** And actually this is going to kind of work, I think, but I wouldn't rely on this being the case.
>
> **[2:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=167)** It's not, you're not supposed to be able to have a closing tag for one of these, but yeah.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=171)** So now we actually have support for void elements. That's great.
>
> **[2:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=174)** And that concludes our work on the parser.
>
> **[2:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-void-elements?u=76281980&t=176)** And so in the next chapter, we're going to use this parser to build an [[HTML]] Pretty Printer that will create attractive output from our HTML source code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[JavaScript]] (1), [[Tokens]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** parseelement (2), voidelements (2), voidelement (2)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** html (2), w3c (1)
> **UI Navigation:** go to (2)
> **Cross-References:** in the next (1)
> **Documentation:** w3c (1)
> **Exercise Files:** source code (1)


### 3. Transforming the DOM

[↑ Back to Table of Contents](#table-of-contents)

#### [Traversing the tree](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=0)** - [Instructor] Before starting work on our [[HTML]] pretty printer, let's do a quick review of tree traversal [[Algorithms]].
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=5)** We'll be using this odd, but perfectly valid, HTML snippet, which is parsed into this DOM tree.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=10)** Note that I've eliminated all the text nodes for clarity.
>
> **[0:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=13)** A tree traversal is just an algorithm that visits each node of the tree in turn.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=17)** The order in which we visit the elements is determined by the traversal method we choose.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=20)** The most useful ones for dealing with the HTML DOM are preorder, postorder, and breadth-first.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=25)** The first and most common order is preorder, or document order.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=29)** In a preordered traversal, the elements are visited in the same order that they appear in the source HTML.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=34)** Preorder can also be thought of as document order.
>
> **[0:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=37)** If you want to manually copy a DOM tree, you should traverse it in preorder to make sure that the parent elements exist before their children are processed.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=43)** The basic traversal algorithm is to visit the current, or root, node first, then visit its children.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=48)** A much less common, but still useful traversal method, is postorder.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=51)** In postorder traversal, the children are visited before their parents.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=56)** Postorder traversal can be considered bottom up.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=59)** Since children are processed before their parents, it is possible to delete a DOM tree using postorder traversal.
>
> **[1:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=64)** The traversal function should visit the current, or root node's, children then process the root itself.
>
> **[1:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=69)** The last traversal type we will cover is breadth-first, sometimes called level order.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=73)** This traversal visits every node at a given depth, or level of the tree before moving to the next.
>
> **[1:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=78)** Level order can also be thought of as back to front.
>
> **[1:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=81)** In the case of the DOM, this traversal is useful when rendering the nodes on the screen, The first nodes visited are rendered under the later nodes.
>
> **[1:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=87)** The algorithm is more complex than those for pre and postorder, requiring a level to be calculated for each node.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=93)** And it generally requires multiple traversals of the tree to visit every level.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=96)** While these are the most common traversal methods, there are definitely others.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=99)** Take a minute to think of other ways to visit every node in a tree.
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/traversing-the-tree?u=76281980&t=102)** What might they be useful for?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Algorithms]] (1)
> **Env Vars:** dom (5), html (4)
> **CLI Commands:** node (6), make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Building a pretty printer](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=0)** - [Instructor] So as a quick refresher, the goal of our pretty printer application is to transform boring [[HTML]] source code like this into attractive, colorful source code like this.
>
> **[0:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=9)** The way we'll accomplish this is by doing a recursive transformation of our input DOM tree into a fully annotated output tree.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=17)** This is a little overwhelming so let's [[Zoom]] in for a closer look.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=21)** Take this comment markup.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=23)** When parsed, it yields a DOM tree with a single comment node.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=26)** Comment nodes aren't visible on screen so we need to transform them into element nodes that can then be displayed and styled.
>
> **[0:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=33)** Now, let's look at transforming element content.
>
> **[0:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=35)** Elements are potentially more complex than comments. Yeah.
>
> **[0:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=40)** One reason is that besides the normal DOM content nodes, elements may also include attribute nodes.
>
> **[0:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=46)** So to transform this single a element, we'll need to omit the opening tag element, including all the associated attributes, the closing tag element, and all the nested content in between.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=56)** No problem.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/building-a-pretty-printer?u=76281980&t=57)** We'll just write a function called prettyPrint that accepts a DOM node, and we'll return the transformed output, style it with CSS, and we're a business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Zoom]] (1)
> **Env Vars:** dom (4), html (1), css (1)
> **CLI Commands:** node (2)
> **Exercise Files:** source code (2)
> **Code Identifiers:** prettyprint (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Processing document fragments](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=0)** - [Instructor] Sometimes getting started with a new project is the hardest part.
>
> **[0:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=3)** Writing an entire [[HTML]] Pretty Printer sounds complex but each step in the process is actually pretty simple.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=10)** So let's go ahead and get started.
>
> **[0:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=11)** My development environment, once again is very basic.
>
> **[0:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=13)** It's a [[Python (Programming Language)|Python]] web server running in the project folder.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=17)** You can find that in the [[GitHub]] repo for this course.
>
> **[0:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=19)** I'm using Chrome as my browser and I'm using Atom as my editor and you can obviously use whatever tools you like better.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=25)** But the thing we're going to do is write our prettyPrint function, which will be called here from refreshOutput.
>
> **[0:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=31)** You'll see this is the DOM tree that come out of our parser and prettyPrint essentially transforms that DOM tree into another DOM tree that has HTML markup and CSS styling to make it attractive.
>
> **[0:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=41)** So let's call our function prettyPrint.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=45)** And it accepts a node as an argument.
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=47)** And for now, all it's going to do is return a copy of that node.
>
> **[0:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=50)** So node.cloneNode, recursive.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=54)** So when you say true, that means deep.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=56)** So it's recursively going to clone all of the children to that node as well.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=59)** Let's go back to our refreshOutput function and we will do a prettyPrint of our output from our parser.
>
> **[1:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=68)** So I'm going to save this off and if we go back into the browser, nothing should change, and nothing did change.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=73)** That's good.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=74)** And now we need to differentiate between node types.
>
> **[1:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=76)** So let's go back into our prettyPrint function and we're going to use a switch statement.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=79)** So stich based on node.nodeType and nodeType values, they're integers but there actually are constants available in the built-in Node class so we can do case Node dot, the first one we're going to process is a DOCUMENT_FRAGMENT_NODE.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=93)** DOCUMENT_FRAGMENT_NODE.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=96)** And it is a special type of node that can contain children but doesn't have any external wrapping.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=100)** Like an element can contain children but then there's the element itself.
>
> **[1:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=104)** A DOCUMENT_FRAGMENT_NODE is like an element that doesn't have any tags or anything associated with it.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=108)** And now we're going to create a function called, let's see, we're going to return the output of this function and we'll call this function printChildNodes and it's going to accept node as its argument.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=121)** We'll write it as a scoped function so we don't pollute the global namespace anymore than we already have.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=125)** So we'll call this printChildNodes.
>
> **[2:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=128)** And it is going to first create a new document fragment.
>
> **[2:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=131)** So fragment, and it's going to be created by calling document.createDocumentFragment.
>
> **[2:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=139)** Next, we need to loop through all of the child nodes of our node parameter.
>
> **[2:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=142)** So we're going to do node.childNodes.forEach.
>
> **[2:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=146)** And we're going to pass in, we're going to use an arrow function and the name of the parameter will be child.
>
> **[2:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=151)** And for each child, what we're going to do is we're going to recursively call prettyPrint on that child node and we're going to append it to our fragment.
>
> **[2:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=158)** So fragment.appendChild prettyPrint our child there.
>
> **[2:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=165)** So we will do this and that will essentially call the prettyPrint function on each child of our fragment recursively.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=171)** And so this is part of the whole scheme, which is to continually traverse our DOM tree to the bottom and append the necessary markup around it.
>
> **[2:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=179)** So let's go ahead and save that, run it in our browser.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=182)** Nothing should change.
>
> **[3:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=184)** Oh, but something did change.
>
> **[3:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=185)** That's because we forgot one crucial step.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=187)** Let's go back into the editor here.
>
> **[3:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=189)** Forgot to return the fragment.
>
> **[3:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=192)** We'll save that off.
>
> **[3:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=194)** Now, when we refresh.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=196)** All right, everything looks exactly the same.
>
> **[3:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=199)** That's good, that's just like the Hippocratic Oath.
>
> **[3:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=200)** The programmer's oath should be first do no harm.
>
> **[3:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-document-fragments?u=76281980&t=203)** So now we have the infrastructure we need to start implementing the node-specific formatting logic and the CSS styling around it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Python (Programming Language)|Python]] (1), [[GitHub]] (1)
> **Code Identifiers:** prettyprint (8), refreshoutput (2), nodetype (2), printchildnodes (2), clonenode (1)
> **CLI Commands:** node (14), python (1), find (1), make (1)
> **Env Vars:** dom (4), document_fragment_node (3), html (2), css (2)
> **Tools:** github (1), atom (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** github repo (1)

#### [Processing comments](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=0)** - One of the simplest node types for us to format is the common node.
>
> **[0:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=4)** You'll see, we have a comment note in our source code here.
>
> **[0:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=6)** So let's start by adding a comment note handler to the pretty print function.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=10)** We'll go back into our editor and go to the pretty print function.
>
> **[0:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=15)** And you'll see here that we have our switch statement down here that lets us choose based on the node type to have different handling.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=22)** So let's do a case node, comment node.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=26)** So when we receive a comment node, we're going to create a new element.
>
> **[0:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=31)** And this element is um going to be called a PP comment element.
>
> **[0:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=35)** So comment equals document dot, create element.
>
> **[0:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=40)** You know, we have to create elements so we can display them on the screen.
>
> **[0:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=42)** So PP comment.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=45)** And so this is once again a custom tag.
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=47)** And we're going to make the inner text of this comment.
>
> **[0:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=52)** The node value of our node. So node node value.
>
> **[0:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=55)** So that's the comment text. So the node value.
>
> **[0:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=58)** Now we're going to return that comment node.
>
> **[1:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=61)** I'll save that off.
>
> **[1:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=63)** Now, let's go back into our browser and we'll refresh.
>
> **[1:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=66)** And you'll see now that our comment, which was previously invisible, is visible in our DOM tree, but it doesn't look a lot like a comment.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=73)** So let's add some styling to make it look more like a comment.
>
> **[1:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=77)** To add that styling, we're going to use CSS.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=79)** So we're actually going to create a new CSS file and let's see the rule we're going to add is for our PP comment, custom element, let's just set the color of the text to a medium kind of gray.
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=91)** So that would be hex 8, 8, 8. We'll save that off.
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=95)** We'll call it, pretty parsed dot CSS.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=98)** Now we have to add a reference to that CSS file to our [[HTML]] file, and I'll be honest, I have to look the syntax up every single time.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=105)** It's been 20 years and it's so hard to remember, but REL equals a style sheet and then type equals text CSS.
>
> **[1:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=115)** And H ref is our CSS file name, pretty parse dot CSS.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=121)** And it's avoid tag if you remember from our last chapter.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=125)** So we'll save all that off and let's go back and refresh your browser.
>
> **[2:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=128)** And you'll notice that our comment now is um kind of a light gray.
>
> **[2:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=131)** So it looks more like a comment, but you notice it's missing the markup.
>
> **[2:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=134)** It's missing this opening and closing mark up here.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=137)** There are a few ways we can handle this and they have their pros and cons.
>
> **[2:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=140)** But for the purpose of this course, I'm going to use CSS to do this because we can actually insert content into our tree using CSS.
>
> **[2:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=148)** So let's go back into our CSS file and we're going to use a couple of pseudo selected rules.
>
> **[2:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=152)** We're going to use the before and after a pseudo selector.
>
> **[2:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=155)** So comment before hand, we're going to insert content of this markup here.
>
> **[2:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=161)** So this is the opening tag for comment, and let's do a comment after.
>
> **[2:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=168)** Once again, it's going to be the closing markup.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=171)** So we'll save that off, go back into our browser and refresh.
>
> **[2:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=176)** And it looks like a comment.
>
> **[2:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=177)** You'll notice that you can't select those because they're not technically part of the DOM, but they're there.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-comments?u=76281980&t=182)** Now that we have a working approach to formatting, let's tackle our most complex task, which is processing elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** node (12), make (2)
> **Env Vars:** css (10), dom (2), html (1), rel (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** source code (1)
> **Speakers:** - one (1)

#### [Processing elements](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=0)** - [Instructor] Now it's time to process element Nodes.
>
> **[0:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=3)** Now element Nodes are complex because they can not only contain other Nodes, but they may also have attribute Nodes that need formatting.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=10)** This is a typical [[HTML]] element in a element, it has an open tag which contains an attribute, it has some nested content, in this case, a text node, `and a close tag.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=22)** to represent all this in our pretty printer, we'll use some custom tags that will allow us to format the different parts of the element on the screen.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=28)** The entire element will be contained in a pp-element element, which will contain a pp-opentag element, the element name will be nested in a pp-tagname element.
>
> **[0:38](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=38)** Now for now, we're going to ignore the attributes, but this is where they would be appended to the element.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=43)** Then all of the nested content will be appended followed by the close tag, which will produce output markup that looks like this.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=51)** Now that we understand what we want to accomplish, let's start coding.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=54)** So first of all, let's go back into our pretty print function, so we can go to the bottom here somewhere and this is pretty much pretty print.
>
> **[1:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=60)** And we're going to add a new case to our switch statement to process elements.
>
> **[1:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=64)** So we're going to process element Nodes here, so we'll do Node.ELEMENT_NODE.
>
> **[1:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=70)** And inside here, we're going to create an element that will contain everything about that element.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=74)** So that element is going to be called variable elements, and we decided before, we're going to use a custom tag called pp-elements.
>
> **[1:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=81)** So document.createElement, pp-element, and that will contain everything related to this element, including the open tags.
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=91)** So we're going to create our open tag element, which is going to be document.createElement, pp-opentag.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=100)** So that will give us some structure.
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=102)** And now within the open tag, we need to put the tag name.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=105)** So we're going to create another one called tag name.
>
> **[1:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=107)** And once again, it's going to be create element pp-tagname.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=114)** The tag name will contain the element tag name, so we'll get that from the Node.
>
> **[1:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=117)** So we'll say tagName.Innertext equals node.nodeName.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=125)** The nodeName is the tag name.
>
> **[2:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=127)** And we're going to append this to our open tags.
>
> **[2:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=128)** So openTag.appendChild tagName.
>
> **[2:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=133)** Now at this point, we would want to append all of the element attributes to our open tag, but we're not going to do that right now, it's a little too complex to tackle, so we're going to do this later.
>
> **[2:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=141)** So we'll put in a nice TBD comment, process element attributes here.
>
> **[2:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=148)** Next we're going to append our open tag to our elements.
>
> **[2:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=152)** So element.appendchild openTag.
>
> **[2:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=157)** And let's go ahead and return the element from our function, and let's go into the browser, and let's see what we have.
>
> **[2:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=163)** So when we refresh, you'll see, now we only have three tags here, we have our header, main and footer.
>
> **[2:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=170)** And if you look over here, those are the three top level elements we have.
>
> **[2:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=173)** We aren't processing any of the nested content.
>
> **[2:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=175)** Plus all the tags are uppercase and I really kind of hate that.
>
> **[2:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=177)** So let's go ahead back in here, and first all, let's fix the uppercase problem.
>
> **[3:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=180)** So ToLowerCase that tag name.
>
> **[3:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=183)** And that we need to start processing the contents of this element.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=187)** Right after we append the open tag, we're going to see if that node has any children.
>
> **[3:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=190)** So node.hasChildNodes, and that's a really old function as well, but it tells you if it has any child Nodes.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=196)** If it does, then we're going to append the return from printChildNodes, which we've already written to handle document fragment.
>
> **[3:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=204)** So we're going to pass in our Node, and so this will recursively process all of the Nodes within our element.
>
> **[3:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=209)** So let's go and save that off and go back in the browser, see how that looks.
>
> **[3:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=213)** Okay.
>
> **[3:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=214)** So now we have more stuff, we have some texts Nodes, and we have our nested element open tags.
>
> **[3:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=219)** Now let's go ahead and add our close tags because once again, we need to have an open tag element and a close tag element so we can display them both on screen.
>
> **[3:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=226)** So close tag is going to be document.createElement, we're going to use pp-closetag for our element name.
>
> **[3:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=234)** And down here, we need to put in a tag name.
>
> **[3:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=238)** We already have our tag name element, but we can't just append it.
>
> **[4:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=241)** So we'll do closeTag.appendChild.
>
> **[4:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=244)** We can't just say tag name, because if we did this, it would move it from the open tag to the close tag, but we can clone it.
>
> **[4:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=250)** So let's do cloneNode true, so that will give us a deep clone of that.
>
> **[4:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=256)** And then let's append this whole thing to the element.
>
> **[4:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=262)** Now we should have, if go back to the browser, let's refresh.
>
> **[4:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=266)** So you see we have an H1 here, we have an H1 there.
>
> **[4:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=269)** Now it's time to start doing some more formatting so this looks a little bit better.
>
> **[4:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=272)** So we're going to go back to our CSS.
>
> **[4:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=274)** So back in the CSS file, we'll create a new top level rule for our output elements.
>
> **[4:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=279)** So we have pp-output, which currently has no styling, so it's being displayed inline.
>
> **[4:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=284)** So first of all, let's display block.
>
> **[4:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=285)** The next thing we're going to want to do for that is let's change the font family to fix size font.
>
> **[4:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=290)** So, family monospace.
>
> **[4:52](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=292)** And the next thing, the way we handle white space, if you look in the browser right now, the white spaces are collapsed out.
>
> **[4:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=298)** Let's go ahead and use a different white space option.
>
> **[5:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=300)** So we use white-space pre-wrap, which is kind of a hybrid between pre-formatting, pre where white space is honored, but it also allows wrapping when things would bust out of their containers.
>
> **[5:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=310)** And we're going to change the overall color of all of our characters to Oa6ab6, which is something I picked out of the web and I kind of like it, it's a dark blue, I believe.
>
> **[5:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=320)** So let's go back to the browser.
>
> **[5:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=322)** Now, you'll see that our code is starting to show some white space and structure.
>
> **[5:26](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=326)** So the next thing we want to do is let's differentiate our tag names.
>
> **[5:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=329)** So we're going to go back into the CSS file, and let's add a rule for our pp-tagname, and let's make the color for that 0c98ea, choose that light blue.
>
> **[5:42](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=342)** So let's refresh.
>
> **[5:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=343)** Okay, so now you can see that the tags are there, they're a little different.
>
> **[5:47](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=347)** The next thing we need to do is add the markup around the tags, because we need to show the less than sign at the beginning of the open and closed tags, and we need to show the greater than sign at the end.
>
> **[5:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=356)** So, we're going to use the same scheme we used before, we're going to use our before and after pseudo selectors.
>
> **[6:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=361)** So, let's do open tag before, and the content here will be a less than sign.
>
> **[6:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=372)** And for our close tag, it's a little different, it's going to be a less than sign, followed by a slash.
>
> **[6:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=383)** So let's save that off, go back and refresh.
>
> **[6:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=387)** Okay, starting to look more like HTML.
>
> **[6:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=389)** Now, what we need to do is we need to put our greater than sign at the end of both of them.
>
> **[6:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=393)** So we'll do pp-opentag after, and pp-closetag after, and the content there will be the same for both, it'll be a greater than sign.
>
> **[6:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=403)** So we'll save this off.
>
> **[6:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=405)** Now we'll go back to our browser, and refresh, it's starting to look like our original source code, but prettier.
>
> **[6:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-elements?u=76281980&t=411)** So the next thing we're going to do is we're going to get rid of this pesky TBD comment here and start admitting attributes in our element open tags.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Code Identifiers:** createelement (3), tagname (2), nodename (2), opentag (2), appendchild (2)
> **CLI Commands:** node (7), make (1)
> **Env Vars:** css (3), html (2), tbd (2), element_node (1)
> **Cross-References:** go back to (4)
> **UI Navigation:** go to (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### [Processing element attributes](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=0)** - [Instructor] Our pretty printer is looking pretty good, but it would look even better if it displayed element attributes.
>
> **[0:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=6)** As you can see this a tag here has an href and in our output, it has nothing.
>
> **[0:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=11)** So let's go back into the code and let's finally get rid of that pesky TBD comment we left in there.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=17)** So here's our TBD process element attributes.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=20)** And what we're going to do is we're going to look at the node attributes collection.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=24)** Now, attributes collection, we can't just do a forEach directly because it's not an actual array.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=28)** So what we're going to do for our purposes, we're going to say: Array.from node.attributes.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=34)** I'd be curious as to why it's addressed in a different video in the series, but let's go ahead, in our arrow function, we have an attribute node now, and what we're going to do is we're going to recursively call pretty print.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=45)** So we're going to append to our openTag.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=48)** We're going to append the output from pretty print for that attr node Let's go ahead and put our semi there and save that off.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=57)** So that means that we need to add support for attribute nodes to our case statement, to our switch statement.
>
> **[1:03](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=63)** So down here, we're going to do case Node.ATTRIBUTE_NODE.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=67)** (keyboard typing) Now this pattern is going to look very similar to what we did for the element itself, but we're going to have an outer attribute element that will contain everything related to that attribute.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=79)** So document.createElement 'pp-attribute', and then within that, we're going to create an element to contain the attribute name.
>
> **[1:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=90)** So const attrName = document.createElement 'pp-attrname'
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=100)** and as we did with the element tag name, the inner text of the attrName will contain the node name of our nodes, so node.nodeName, and we're going to make it lowercase as well, because it's just more attractive that way.
>
> **[1:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=111)** So that will set the attribute name into there and we will append this to the attribute element itself.
>
> **[1:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=117)** So we'll appendChild attrName; save that up.
>
> **[2:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=122)** Now let's return the attribute and go back to the browser and see what we've got.
>
> **[2:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=128)** We'll refresh and now you'll see in our A tag, especially if we inspect it, we have an attribute and attrName element within our A tag.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=138)** So that's good.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=138)** Now all we need to do is process the attribute value.
>
> **[2:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=141)** So let's go back to our code and here's our attribute where we append the attribute name to the attribute.
>
> **[2:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=147)** Let's go ahead and look and see if the node has a value.
>
> **[2:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=150)** So some nodes don't have values and in that case, we don't necessarily want to add a node value element because things like disable to read only, they don't necessarily have a value.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=159)** So node.nodeValue if the node value is not equal to an empty string, then that means we have something there.
>
> **[2:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=166)** So we'll create an attrValue node.
>
> **[2:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=169)** So createElement 'pp-attrValue' and within that attrValue element, we will set the inner text equal to the value of that node, so node.nodeValue, and that would be the actual text of the attribute and we'll append it to our attribute.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=187)** (keyboard typing) So we'll append attrValue to the attribute itself.
>
> **[3:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=193)** And we will save this off, go back to the browser, refresh.
>
> **[3:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=198)** And now we can see that we have elements for the attribute name, attrName and attrValue.
>
> **[3:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=202)** And we have basically all of the markup we need now to display everything, we just need to go style it.
>
> **[3:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=207)** So let's go back to the CSS file and start styling these new elements.
>
> **[3:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=211)** So back into our source code and let's open up our CSS file.
>
> **[3:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=215)** We'll go to the end.
>
> **[3:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=217)** And a lot of this is going to look similar to what we did for the elements earlier, but we're going to go ahead and give the attribute name a different color.
>
> **[3:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=223)** So attrName is going to be color.
>
> **[3:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=228)** In this case, it's CA6836, I honestly forgot what color that is.
>
> **[3:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=234)** Let's save it, go refresh the browser.
>
> **[3:56](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=236)** And it's kind of a orange, light orange. I like it.
>
> **[4:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=240)** Now, we're going to start using pseudo selectors again, to put some white space.
>
> **[4:04](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=244)** If you look in the output here, we want a space before the attribute, we want the equal sign and a quote here, and a quote at the end of that.
>
> **[4:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=250)** So we're going to use the before and after pseudo selectors again, to give ourselves some white space.
>
> **[4:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=254)** So pp-attribute::before content, there's going to be a space.
>
> **[4:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=261)** So that'll put a space for all of our attributes.
>
> **[4:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=263)** Now, pp-attrValue, so the value itself, before that, we will place a equal sign and a double quote.
>
> **[4:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=275)** So actually since we're going to do a double quote, we're going to use single quotes around this.
>
> **[4:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=277)** So single quote all that, save that.
>
> **[4:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=281)** And now we're going to do one more for pp-attrValue::after, and we need to put another closing double quote.
>
> **[4:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=289)** So content equals a double quote.
>
> **[4:55](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=295)** And let's get rid of that, there we go.
>
> **[4:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=297)** Save all that off, go back into the browser and refresh.
>
> **[5:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=301)** And now it looks like we have full support for elements and attributes.
>
> **[5:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=305)** We have our attribute being displayed.
>
> **[5:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=307)** We have quotes around it.
>
> **[5:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/processing-element-attributes?u=76281980&t=308)** So all we have to do now is process our text nodes, do a little bit of cleanup, and our pretty printer is ready to ship.

> [!info]- Semantic Content
>
> **Code Identifiers:** attrvalue (7), attrname (6), createelement (3), nodevalue (2), foreach (1)
> **CLI Commands:** node (14), make (1)
> **Env Vars:** tbd (2), css (2), attribute_node (1), ca6836 (1)
> **Cross-References:** go back to (4)
> **Non-Speech:** (keyboard typing) (2)
> **UI Navigation:** go to (1)
> **Exercise Files:** source code (1)
> **Definitions:** means that (1)

#### [Handling text and cleanup](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=0)** - [Narrator] There was a saying I heard when I was working in the OS division of [[Microsoft]] a long time ago, it was the first 90% of the work only takes 10% of the time.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=8)** Unfortunately, the last 10% takes 90% of the time.
>
> **[0:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=11)** So doing that last little bit of fit and finish, it isn't glamorous, but good programmers know it's worth it.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=16)** So if we look right now at our output, you'll see that we have these text nodes in our page.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=23)** Let's take a look at them in the browser here.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=25)** So if I look at this, our text is just included as basic text node you see right here.
>
> **[0:31](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=31)** So we don't have any styling on it, so let's fix that.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=34)** So we're going to go back into our editor and we're going to update our pretty print function.
>
> **[0:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=39)** You know, this function right here.
>
> **[0:41](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=41)** We're going to go into our switch statement here, and we're going to add support for text nodes.
>
> **[0:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=44)** So case, node, dot, text node.
>
> **[0:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=49)** And it's going to be pretty straightforward.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=51)** So we're going to create a new text elements and that's going to be PP texts.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=54)** So document, dot, create element, PP-text.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=59)** And all we need to do is set the inner text of that to the content of our node.
>
> **[1:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=66)** So node, dot, node value and return text.
>
> **[1:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=71)** So we'll save that off.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=73)** Let's go back into the browser and refresh.
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=75)** And now if we look at this in our develop tools.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=79)** You'll see that we have wrapped that text inside this element.
>
> **[1:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=82)** Which means we can style it.
>
> **[1:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=83)** So let's go back into the editor again, and let's go into our CSS file.
>
> **[1:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=88)** And let's add a styling rule.
>
> **[1:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=90)** And for now I'm just going to make the text black.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=93)** So the color zero, zero, zero.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=96)** Save that off, go back to the browser and refresh.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=99)** And now all of our text is black, but our attribute text is still that blue color.
>
> **[1:44](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=104)** And we basically have formatted source code.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=108)** That's great.
>
> **[1:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=109)** So let's actually try and make this pretty printer live up to its name.
>
> **[1:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=113)** Let's try and print.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=114)** So, if we go into the print dialogue, what's it going to look like?
>
> **[1:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=118)** Well, doesn't look that great.
>
> **[2:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=120)** So the last thing we're going to do.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=121)** Is we're going to use some media queries to clean that up.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=125)** So let's go back into the editor.
>
> **[2:08](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=128)** And we're going to put this media query.
>
> **[2:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=129)** We're not going to put it in pretty parse CSS because this is all pretty much related to the pretty printer itself.
>
> **[2:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=134)** We're going to put it in the [[HTML]] file.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=135)** We have this inline style here already.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=137)** So at the very tippy top.
>
> **[2:19](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=139)** We're going to say media print.
>
> **[2:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=141)** So whenever we're actually printing this thing, the header, the inputs, the output.
>
> **[2:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=147)** Now that's interesting, input, the output label.
>
> **[2:34](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=154)** We're all going to display none.
>
> **[2:36](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=156)** So let's save that off, space there.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=159)** Go back into the browser, refresh.
>
> **[2:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=163)** Now, when we go to print.
>
> **[2:46](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=166)** Now we have nothing but clean, colorful source code.
>
> **[2:48](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=168)** Nice.
>
> **[2:49](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=169)** That wraps it up for our pretty printer project.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/handling-text-and-cleanup?u=76281980&t=171)** Don't forget to try the challenge at the end of the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[HTML]] (1)
> **CLI Commands:** node (6), make (2)
> **Env Vars:** css (2), html (1)
> **Exercise Files:** source code (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Empty tags](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-empty-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-empty-tags?u=76281980&t=0)** (upbeat techno music) For this challenge, we'll be looking at the mirror image of the challenge from chapter two where we were parsing void elements.
>
> **[0:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-empty-tags?u=76281980&t=11)** To see the issue, let's add a horizontal rule to our pretty printed source code, so do an hr tag.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-empty-tags?u=76281980&t=18)** That open and close empty tag isn't very pretty at all.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-empty-tags?u=76281980&t=22)** So your challenge is to modify the pretty printer so instead of displaying empty elements like this, display them like this.
>
> **[0:30](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/challenge-empty-tags?u=76281980&t=30)** Good luck.

> [!info]- Semantic Content
>
> **Exercise Files:** source code (1)
> **Non-Speech:** (upbeat techno music) (1)

#### [Solution: Empty tags](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=0)** - [Instructor] To recap.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=7)** The challenge is to modify the pretty printer to display empty elements in syntax for elements that have no content.
>
> **[0:12](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=12)** So to solve this, let's look at our current output dom.
>
> **[0:15](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=15)** So first thing I'm going to do is I'm going to add an HR void element here, and let's take a look at what got generated from that.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=23)** I use my developer tools.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=24)** I come in here to look at the element.
>
> **[0:27](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=27)** This is the HR element.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=28)** So it has an open tag and it has a close tag.
>
> **[0:32](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=32)** So the first thing I want to do is get rid of the close tag.
>
> **[0:35](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=35)** That's not necessary anymore since it's empty.
>
> **[0:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=37)** So let's go back to our editor and let's go down to where we're processing our element node.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=45)** And inside this block, you'll see right here, we have an if statement, if there are any children.
>
> **[0:50](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=50)** So we're going to move this close tag logic up inside the if statement.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=53)** So now we'll only admit a close tag if there actually is content,.
>
> **[0:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=58)** We'll go back to the browser, refresh again, we'll put in our HR, our HR element is now being displayed as a void element, which is fine, but I actually want to use the empty elements in syntax at all time. So the next thing we need to do is we need to format our open tag differently if it has no content.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=74)** So the way we're going to handle that is right here in this if statement, we can also add not a promise, a new class, we're going to add a class to the open tag.
>
> **[1:23](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=83)** So open tag class list, add empty.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=89)** So basically we're going to add a CSS class, to empty open tags, and that will enable us to go into the CSS here and change how it's formatted.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=97)** So right here, we have our rule for displaying the end of the open tag.
>
> **[1:43](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=103)** So we're going to do this pp-opentag when it's empty, we're actually going to display the empty elements into XO contact intent equals slash greater than sign.
>
> **[1:57](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=117)** And we'll save that off.
>
> **[1:58](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=118)** Go back to the browser, refresh.
>
> **[2:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=120)** Now we put it in a horizontal rule and we have our empty element syntax.
>
> **[2:06](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=126)** So voila, it's fixed.
>
> **[2:07](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=127)** And how was your solution similar to mine?
>
> **[2:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=129)** How was it different?
>
> **[2:10](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=130)** Let me know.
>
> **[2:11](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/solution-empty-tags?u=76281980&t=131)** I'd love to hear from you and see your work.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (3)
> **Env Vars:** css (2)
> **CLI Commands:** node (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Level up your DOM skills](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/level-up-your-dom-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/level-up-your-dom-skills?u=76281980&t=0)** - [Instructor] I want to thank you for taking my course.
>
> **[0:02](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/level-up-your-dom-skills?u=76281980&t=2)** And also, I love hearing your feedback and questions.
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/level-up-your-dom-skills?u=76281980&t=5)** So be sure to follow me on [[LinkedIn]] and ask questions in the QA tab if you have them.
>
> **[0:09](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/level-up-your-dom-skills?u=76281980&t=9)** At this point, I could direct you to some more courses you could take, but the best advice I can give you if you really want to improve at coding is go build something just for fun, like this app I wrote to visualize the DOM in 3D.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/level-up-your-dom-skills?u=76281980&t=21)** Your project doesn't have to be big or complicated.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/level-up-your-dom-skills?u=76281980&t=24)** A tiny JSFiddle will do, but build something using what you've just learned.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-building-on-the-document-object-model-dom/level-up-your-dom-skills?u=76281980&t=28)** Good luck and keep coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** go build (1)
> **Env Vars:** dom (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[W. Scott Means]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/vanilla-js-DOM-2876283)

## Skills Covered

- Document Object Model (DOM)
- JavaScript

## Path Context

### In [[Explore Web Development with Vanilla JavaScript]]
← [[Vanilla JavaScript- Web Performance Optimization APIs]] | **8 of 8**

## Appears In

- [[Explore Web Development with Vanilla JavaScript]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)