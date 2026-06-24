---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: javascript-five-advanced-challenges-and-concepts
url: "https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts"
duration_minutes: 111
duration: 1h 51m
level: Beginner
updated: 9/13/2023
learners: 3688
skills:
  - JavaScript
exercise_files: true
github: "https://github.com/LinkedInLearning/advance-your-skills-with-javascript-4452106/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEcH-wHrMMtCg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902498364?e=2147483647&amp;v=beta&amp;t=lumdz7uYylrY_Kv13T4dR_vIZQsdvNjhGDNyP7Lrvps"
linkedin_topic: Software Development
learning_paths:
  - '[Explore a Career as a JavaScript Developer](../../Paths/Software%20Development/Learning%20Paths/Explore%20a%20Career%20as%20a%20JavaScript%20Developer.md)'
prev_courses:
  - '[JavaScript Essential Training](JavaScript%20Essential%20Training.md)'
next_courses:
  - '[JavaScript Practice- Object-Oriented Programming](JavaScript%20Practice-%20Object-Oriented%20Programming.md)'
path_nav: '[{"path":"Explore a Career as a JavaScript Developer","position":4,"total":5,"prev":"JavaScript Essential Training","next":"JavaScript Practice- Object-Oriented Programming"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Five%20Advanced%20Challenges%20and%20Concepts.md)

![JavaScript: Five Advanced Challenges and Concepts](https://media.licdn.com/dms/image/v2/D560DAQEcH-wHrMMtCg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902498364?e=2147483647&amp;v=beta&amp;t=lumdz7uYylrY_Kv13T4dR_vIZQsdvNjhGDNyP7Lrvps)

# JavaScript: Five Advanced Challenges and Concepts

> When you’re learning JavaScript, you rarely get time to really dig into the more complex aspects of the language. Until now! This hybrid course mixes learning and hands-on practice with interactive coding challenges. Instructor Morten Rand-Hendriksen guides you through five advanced topics in JavaScript development: turning flat arrays into nested arrays, extending classes, using singletons and pr

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts) | 1h 51m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Advance your skills with JavaScript](#advance-your-skills-with-javascript)
  - [How this course works](#how-this-course-works)
- [**1. Nested Relationships**](#1-nested-relationships) (5 videos)
  - [Managing nested comments](#managing-nested-comments)
  - [Using a data map to turn flat arrays into trees](#using-a-data-map-to-turn-flat-arrays-into-trees)
  - [Creating a recursive function to generate a nested array](#creating-a-recursive-function-to-generate-a-nested-array)
  - [Solution: Make a nested array](#solution-make-a-nested-array)
  - [Advanced solution: Add nested comments](#advanced-solution-add-nested-comments)
- [**2. Classes and Inheritance**](#2-classes-and-inheritance) (5 videos)
  - [Managing users and capabilities](#managing-users-and-capabilities)
  - [Creating a class with capabilities](#creating-a-class-with-capabilities)
  - [Extending a class with new capabilities](#extending-a-class-with-new-capabilities)
  - [Solution: Create a library with books](#solution-create-a-library-with-books)
  - [Advanced Solution: Users managing other users](#advanced-solution-users-managing-other-users)
- [**3. Singletons and Proxy Objects**](#3-singletons-and-proxy-objects) (5 videos)
  - [Building robust applications](#building-robust-applications)
  - [Using singletons to create unique functions](#using-singletons-to-create-unique-functions)
  - [Using proxy objects to intercept calls to an object or class](#using-proxy-objects-to-intercept-calls-to-an-object-or-class)
  - [Solution: Create a logging system](#solution-create-a-logging-system)
  - [Advanced solution: Create a data validation system](#advanced-solution-create-a-data-validation-system)
- [**4. Observer Pattern**](#4-observer-pattern) (5 videos)
  - [Push info to many nodes](#push-info-to-many-nodes)
  - [Setting up a basic Observer pattern](#setting-up-a-basic-observer-pattern)
  - [Managing observers](#managing-observers)
  - [Solution: Temperature display](#solution-temperature-display)
  - [Advanced solution: Stock information](#advanced-solution-stock-information)
- [**5. Reactive Objects and Factories**](#5-reactive-objects-and-factories) (5 videos)
  - [Keeping a shopping cart up to date](#keeping-a-shopping-cart-up-to-date)
  - [The basic Reactive pattern](#the-basic-reactive-pattern)
  - [Adding advanced functionality](#adding-advanced-functionality)
  - [Solution: Create a Reactive shopping cart](#solution-create-a-reactive-shopping-cart)
  - [Advanced solution: Create a Reactive object](#advanced-solution-create-a-reactive-object)
- [**Conclusion**](#conclusion) (1 videos)
  - [Wrapping up](#wrapping-up)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Advance your skills with JavaScript](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advance-your-skills-with-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advance-your-skills-with-javascript?u=76281980&t=0)** - Learning [JavaScript](../../Skills/Software%20Development/JavaScript.md), you rarely get time to really dig in and get your hands dirty with the more complex aspects of the language, until now. This course is a hybrid, mixing learning, hands-on practice, and interactive coding challenges. I'll walk you through five advanced topics in JavaScript development, turning flat arrays into nested arrays, extending classes using singletons and proxies, creating observable objects, and building robust applications with reactive object patterns. In each chapter, you'll get a basic introduction, two hands-on examples, and two coding challenges to solidify your learning, one intermediate and one difficult. Advancing your skills in JavaScript means pushing yourself to go beyond the basics and I'm here to show you how to get it right. Let's get crackin'.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3)
> **Definitions:** is a  (1)
> **Speakers:** - learning (1)

#### [How this course works](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/how-this-course-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/how-this-course-works?u=76281980&t=0)** - [Instructor] This course is part learning and part doing. Each chapter covers an advanced [JavaScript](../../Skills/Software%20Development/JavaScript.md) topic, starting with a real world coding problem. Next, providing examples and background on how to address this type of problem and finally presenting you with two coding challenges. A basic implementation of the coding approach and an advanced challenge tied more closely to real world use. To facilitate all of this I'm providing lots of learning materials for you. For the learning part, there's a [GitHub](../../Skills/Software%20Development/GitHub.md) repository with all the code examples. You can work with them in GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md) by going to the repository, clicking the code button, selecting Codespaces, and creating a new Codespace. This gives you an editor in the browser in the cloud that you can work with or you can clone this repository to your computer and work with the files locally in your preferred IDE. The examples are organized in folders named for the chapter and video you're watching. So chapter three, video two is folder 0302B where the B stands for the beginning state of the code as the video starts. The corresponding 0302E folder holds the completed code at the end of the video for comparison. The GitHub repository also holds standalone proposed solutions for each of the coding challenges in this course. You can run these in Codespaces or on your computer using Node. Having said that, I encourage you to try to solve the coding challenges on your own, then watch my solution videos to see how I solved the challenge, and then go look at the solutions in this repo for review.
>
> **[1:32](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/how-this-course-works?u=76281980&t=92)** Remember, these coding challenges are not graded tests. They are advanced exercises for you to enforce your learning and sharpen your JavaScript skills. So cheating here has no purpose. Speaking of, the coding challenges at the end of each chapter appear when you click on the challenge link in the courses table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solutions to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course page as when you watch the videos of the course. I recommend using a desktop browser for the best experience with coding challenges but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code Challenge has four areas. Instructions in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used and tested in the bottom right and a console for output in the bottom left. You can use the drag handles to change and allocate space as you like. To get even more horizontal space for the code editors you can collapse the course's table of contents on the left-hand side in the course view. For each challenge, the goal of the challenge is explained in the instructions, so I encourage you to read these instructions in detail before you try to solve the challenge. Create your answer in the top right hand code editor, there are comments in the starting code showing you where to put your solution, and sometimes there may be multiple locations where you're supposed to put in your own code. Once you have a solution, like for example this,
>
> **[3:06](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/how-this-course-works?u=76281980&t=186)** you can click on the test my code button in the bottom right hand corner to see if you pass the test. If you pass the test, you get a message saying such and everything is fine. If you don't pass the test, maybe you put in something incorrect, then you'll either get an error message like this, or you'll get a message telling you that there's something else wrong. In that case, you can choose to turn on show expected results to see the expected results by setting false to true here and you can also choose to turn on show hints. This will give you hints about how to solve the challenge. When you finish each coding challenge, return to the course table of contents and click on the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Tools:** github (3)
> **UI Navigation:** click on (3)
> **CLI Commands:** node (1)
> **Env Vars:** ide (1)
> **Cross-References:** next video (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)


### 1. Nested Relationships

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing nested comments](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-nested-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-nested-comments?u=76281980&t=0)** - A common challenge you'll come across when working with data sources is managing nesting of dynamic data. The classic example of this is nested comments in other conversational threads. Here's the scenario. Your data source outputs a flat array of objects with common data. Each object has an ID, a parent ID, and the comment data. Your challenge is to turn the flat array into a hierarchical presentation of the comment so that each comment is nested under the other one. This is tricky precisely because the original data is a flat array, meaning you have to somehow iterate through each item in the array, figure out if it's a parent or a child, then if it's a child, append the item to the correct parent, all the while keeping in mind a child may also be a parent for another item. There are several ways of solving this real world problem. Common to all of them is a need to create a map from the original array, use it in combination with the original array to transform it into a nested array, and then make a recursive function that calls itself when necessary to generate the final output. So in this chapter, let's look at how to work with complex arrays and create nested arrays from flat ones.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - a (1)

#### [Using a data map to turn flat arrays into trees](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-a-data-map-to-turn-flat-arrays-into-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-a-data-map-to-turn-flat-arrays-into-trees?u=76281980&t=0)** - [Instructor] Presented with a flat array like this one there's an immediate question in need of an answer. What is the most efficient way of stepping through the data in this array? Now admittedly, this array only has four items so performance isn't really an issue. But imagine if it had a hundred items or a thousand items or 10,000 items and you get the idea. To turn this flat array into a nested one we have to open each item in the array then look at its parent property, then go back and open all the other items in the array to find if there is one that has an ID that matches the parent property. This is a lot of recursive looping and extremely inefficient when we have a lot of data. Fortunately, there's a better way of doing this. We can create a data map object from the original array where each array item is turned into a key value pair, where the key is the ID for the item and the value is the item itself. Looks like this. I'll go into restructure array and create a new constant called dataMap and I'll set it equal to an empty object. Now I need to populate dataMap so I'll go down here and say data.forEach. So I loop through each of the items in our original array. I'll grab the item from each. And then in the callback function, I'll say dataMap. So that's our new object array. And I'll set the key for each item in the dataMap to item.id. So that brings up this ID here for each of the items. Then I'll set the contents of that
>
> **[1:34](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-a-data-map-to-turn-flat-arrays-into-trees?u=76281980&t=94)** the value for this entry to just ...item. So that is the entire item. And because each item may have children I'll also add children: and then an empty array.
>
> **[1:51](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-a-data-map-to-turn-flat-arrays-into-trees?u=76281980&t=111)** This code here creates a new map object for us where each item has a key that matches the ID for the item and a value that matches the entire item. So now we effectively have two entities to work with, the original data array and this new data map object. And we can use these two together to create our new nested array, and I can do that further down here. Now just let's look briefly at the code here. So we have this root array and the idea is we want to have the root array be the main array that has all the nesting. What we need to figure out is which items go in the root so which items are first level and then which items are nested under those. And if we look at the original array you'll notice some of them have parents set to zero meaning they are grandparents like they're the primary parents and others have parents set some value that is matching one of the other IDs. And those are then children. So we need to create a logic loop that says if the parent is zero then put it directly into the bottom level of our array. If not, attach it to the correct parent item. So I'll go back in and say data.forEach. So I'm still looping through the original array and I'm still grabbing item. And in the callback function we'll do something new. I'll start by creating a new constant called parent and I'll set it equal to dataMap item parent. So what happens now is for each of our original array items I go look at the parent item, grab the parent value
>
> **[3:27](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-a-data-map-to-turn-flat-arrays-into-trees?u=76281980&t=207)** from that item, so item parent, and then go into dataMap and grab the entire item that we've associated with that key. So now we have the actual parent item. Then we can set up some basic logic. If parent, meaning we have a parent, then parent children,
>
> **[3:50](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-a-data-map-to-turn-flat-arrays-into-trees?u=76281980&t=230)** that's the array that we created inside each of the parent items. Push and what we're pushing here is dataMap and item.id.
>
> **[4:03](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-a-data-map-to-turn-flat-arrays-into-trees?u=76281980&t=243)** So we're pushing the current item into the children array of the parent item. If on the other hand we don't have a parent meaning the parent ID is zero, then we'll say else root.push dataMap item id. This logic turns our flat array into a nested array. We can now save this and check it in console. So I'll say cd. Let's see what is this folder? 01_02b. And then say node script.js. And what you'll see here in the output what you see in the output here is our nested array. And that means our function works.

> [!info]- Semantic Content
>
> **Code Identifiers:** datamap (8), foreach (2)
> **CLI Commands:** find (1), cd (1), node (1)
> **File Paths:** script.js (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating a recursive function to generate a nested array](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-recursive-function-to-generate-a-nested-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-recursive-function-to-generate-a-nested-array?u=76281980&t=0)** - [Instructor] With a nested array in hand, we are faced with our next challenge. How do you output data from a nested array without having to create a convoluted function of if else statements and endless nesting of its own? Because now that we have this nested array, we'd have to go and say, if the current item has a parent of zero, then output it here. Otherwise, if it has a parent of anything else, then find a parent. Then change the [HTML](../../Skills/Web%20Development/HTML.md) output to match that this is now a child instead of a parent, and then output the content inside the child, and then go back out again unless there's another child. In which case, you see how this gets really convoluted? Well, fortunately, there's a way of getting around this problem by creating a recursive function, a function that calls itself. Now recursive functions are not to be trifled with because they can easily lead to endless loops. The good news is that's relatively easy to avoid if you pay attention to what you're doing, and it's also relatively easy to test. So let's take a look at how this would work. In the code example for this movie, you'll find the entire solution from the previous movie already built out. And at the bottom here, we capture the result of the nested array in this constant called comments. And then we just output comments in the console using this fancy call so that it's nice and nested. So the important thing here is we have this comments array that is the nested array. Below here, we have the beginnings of a new function called generate nested text. And the idea here is we are going to output sort of a prototype of HTML by saying,
>
> **[1:36](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-recursive-function-to-generate-a-nested-array?u=76281980&t=96)** for the parent items or for the main items, the root items, we have one dash and then the item text. And then for a child item, we have two dashes and then the item text. And if there's a child of that one, we have three dashes and then the item text, and so on. So here, we're going to build out that recursive function. What we have so far is just the function itself that captures comments. It also has this value called level that is defaulted to zero, and then we capture generated nested text in result, and just output the result. And right now it outputs nothing because let output is nothing, and that's what's returned. So inside this function, I'm going to create the output and eventually also the recursive loop. So we'll start out by just grabbing comments and use for each to iterate through each of the items in our nested array. I'll grab comments from each of our comments and set up a callback function. Inside the callback function. I'll set up a let called indent. Now it's a let because it may change over time. Otherwise, it would be a const. Inside indent, I'll type out dash dot repeat. So I want to repeat a certain number of times a value, and that value will be level plus one, and then plus a space. So this will give us the dashes that go in front of each of the items. Then I'll set up output. So I'll grab the existing output, which currently is nothing but could be more or less. And I'll say plus equals, meaning grab what's in output
>
> **[3:09](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-recursive-function-to-generate-a-nested-array?u=76281980&t=189)** and then add this new thing to it. And what I want to add is indent, followed by comment dot text, followed by a line break. So back slash n. Comment dot text, by the way, is the text that's in each of these items. Let's save this and run it in console. So I'll say clear and then node script. So down here, we have the output. Top level comment one and top level comment two. Cool. So that gives us top levels, but we need all the levels. That means we need a recursive function, and that recursive function happens inside this for each loop. So I'll go a couple of more lines here and then say if comment dot children, meaning there is a children array, and comment dot children dot length is bigger than zero, meaning there are children inside the children array, then output plus equals again, and then we'll go and call generate nested text, the same function we're currently inside. Only this time, instead of passing in comments, we'll pass in the current comments children. So comment dot children. Comma. And this time we'll set the level plus one. So now if we go into an item, and that item has children,
>
> **[4:49](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-recursive-function-to-generate-a-nested-array?u=76281980&t=289)** then we go back up and set up the same function again and go into that item. And then we say, does this item have children? If it does, then we go back up again and say, does this item have children? And for each item, we output the content and then make that test. So let's say this, go back into our console and run the script again. And now you'll see here at the bottom, we have top level, and then reply to top level and reply to reply to the top level. So that means the recursive function works. And because the recursive function is constantly checking to see if there are items inside the children array, we'll never have a situation where the recursive function just runs endlessly. It'll only run for as long as this particular condition here is met. So that means anytime you're making a recursive function, make sure you have a condition that can be failed. So a condition that cannot be met. And that way the recursive function will stop. But this is the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **CLI Commands:** find (2), make (2), node (1)
> **Prerequisites:** set up (4), make sure you have (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Make a nested array](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-make-a-nested-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-make-a-nested-array?u=76281980&t=0)** - [Instructor] To turn this flat array into a multidimensional array, we'll use the data map approach. So inside restructure array, the function I'll set up two constants. The first one is data map. Set it equal to an empty object. The second one is root. Set that to an empty array. At the end, we'll return the root array and then the root array will be picked up down here in the test code and output. Okay, the next step is to iterate through each of the items in the array and then place them inside the data map making the key of each of the items in the data map the same as the item ID. So I'll say data for each and then grab item and set a callback function. And here I say data map item ID equal to, and then the contents of the item itself and also the children array. Next, I'll iterate through all the items again, only this time I'll use the data map to figure out which item is the parent. So I'll say data for each again. Again, grab item. And this time let me just scroll so you can see.
>
> **[1:33](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-make-a-nested-array?u=76281980&t=93)** This time I'll say const parent equals data map, item, parent so that we get the parent ID. Then if there is a parent, then we get the parent, children, and we push those onto data map item ID. So now we're grabbing the children and adding them to the children array of the parent item inside data map. If the item does not have a parent we'll say route push data map item ID.
>
> **[2:22](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-make-a-nested-array?u=76281980&t=142)** So now we're counting both for items that have a parent and items that do not have a parent and we're creating a nice hierarchical array. Let's save that and see it rephrase. Let's see if that works. I'll click test my code and if everything works correctly, we'll get test passed and we can see this multidimensional array. Now you'll remember from earlier in the chapter that I was working with a very small array that only had four pieces. This array up here has a lot more items. It has 15 items, and you can see even with 15 items the operation is really quick and we get a nice structured multi-dimensional array out of it. That's the solution to this challenge.

> [!info]- Semantic Content
>
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Advanced solution: Add nested comments](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-add-nested-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-add-nested-comments?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-add-nested-comments?u=76281980&t=5)** - [Instructor] This challenge is similar to the second example I provided in this chapter, where we took the restructured array and then we turned it into actual output, using a recursive function. So that's what we'll do in this challenge. Looking at the answer code, you'll see I've already built out the function to turn the flat array into a multidimensional array, because you already solved that in the previous challenge. What you need to know is, in the test code here, we first call restructure comments, place the comments inside that. That outputs root comments. And then we use generate nested list and pass in root comments. So that means comments here, in generatednestedlist, is the restructured, multidimensional array we'll be working with. The document is the [document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md) we'll be working with. The real challenge here is to output the correct [HTML](../../Skills/Web%20Development/HTML.md) structure for a multidimensional array. And that's because when you put out an unordered list that may have other unordered lists inside, it has to follow this very specific structure, where you have the ul, then you have an li, that may have a sub menu with the text that goes inside. Then a ul inside that li. With another li and then maybe another ul and an li and so on. So we need to build this tree structure here. And this is where you really start to see how a recursive function will be helpful, because a recursive function can kick in and create a new, unordered list anytime you need it, and then close that unordered list out. So as we go deeper into the tree, we create more under ordered lists
>
> **[1:37](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-add-nested-comments?u=76281980&t=97)** and output all the items within them, and so on and so forth. So, let's solve this challenge. And I'll keep this up here, so I have a reference as I do this and I can explain what's going on. At the top of generatenestedlist, I'll create a new constant called ul, just so it's very clear what it's doing. And I'll say document create elements, and I'll create a ul. Then, I'll iterate through whatever comments are currently available. So I'll say comments ForEach comment.
>
> **[2:17](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-add-nested-comments?u=76281980&t=137)** I will create a new list item, so const li equals document. create element li.
>
> **[2:27](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-add-nested-comments?u=76281980&t=147)** Then li dot text content, that sets the text content inside the li. And I'll set that to comment.comment_text. That's the property in the array we're working with. So that brings us to here, the text inside the li is now created. And then we have to account for the possibility of there being a sub menu. So, I'll create the recursive function and say if comment children, meaning there is a children array in the current item, length is bigger than zero, meaning there are actual children in the current item we're looking at, then li class lists add has submenu. That adds the submenu class, to the current item we're working with. And then const nested ul equals generatenestedlist.
>
> **[3:32](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-add-nested-comments?u=76281980&t=212)** And this time we'll pass in comment.children, and again document. Then finally li appendChild, nested ul. So what happens here is, if we have children inside the current item we're working with, we'll grab the children array and pass it back up to generatenestedlist. And it'll iterate through the same process again and output all of those items, and any child items that come from it. And then it'll come back and append that to the current item. Now the last thing we need to do is grab ul, say appendChild li, and finally return ul.
>
> **[4:18](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-add-nested-comments?u=76281980&t=258)** Okay, let's test the code and see if this works. If I didn't make any spelling errors here, we should now get an output that says "Test passed: Output matches test case." And as you scroll down, you'll see we now have the correct output. So here we have a fully formed unordered list with sublists, based on the nested array we created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** appendchild (2), comment_text (1)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### 2. Classes and Inheritance

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing users and capabilities](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-users-and-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-users-and-capabilities?u=76281980&t=0)** - Using classes in [JavaScript](../../Skills/Software%20Development/JavaScript.md), you can create and extend advanced data types, and the result is code that is easier to understand and maintain. A good example of when this type of data structure is useful is a management system where a bunch of similar items with unique properties are cataloged and different users have different levels of access and capabilities. You know, like a library, in a very simple library carrying only books, the books are cataloged based on their title, author, publishing year and some other information. At a higher level, they may also be organized by book type, for example, fiction and non-fiction. And for each of these types, there may be unique categorizations, genre for fiction, subject for non-fiction. In such a data structure, it makes sense to make a primary book class, holding the title, author, and publication year info, and then extend it with specialized classes for fiction and non-fiction books each with their own dedicated properties. The users of a library also have different capabilities, a librarian can add and remove books while a library member can borrow and return books. If a library member doesn't return books in time, the librarian can even ban the user from borrowing further books. Here again, it makes sense to create a primary library user class holding the name, an array of borrowed books for each user and standard user capabilities. This class can then be extended by a librarian class with capabilities unique to the librarian. In this chapter, we'll take a closer look at how to set up this type of class structure to help manage
>
> **[1:35](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-users-and-capabilities?u=76281980&t=95)** both your code and the data it produces more efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - using (1)

#### [Creating a class with capabilities](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-class-with-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-class-with-capabilities?u=76281980&t=0)** - [Instructor] Let's set up a basic object inheritance structure using classes. In this example, I'll use Vehicle as my main class and extend it with two specific types of vehicles, Car and Bike. You'll notice in the setup code here that when I set up new Car, I have the name of the car and the number of doors, and when I set up new Bike, I have the name of the bike and the type of bike. So these two subclasses have different properties that we need to capture, and those different properties are output differently. So we have, "My car has four wheels and four doors," or, "My bike has two wheels and is an off-road type," off-road type bike. So, I need to figure out how to manage the different types and the different outputs using the same method, this getDescription method. We'll start off by creating the Vehicle class. So here I'll say constructor. Then in the constructor, I want to capture the properties that are universal throughout all the vehicles. And those properties are name and wheels, the number of wheels. So I'll say this.name equals name. And this.wheels equals wheels, just so that it's assigned. Then, in addition, we have that getDescription method. So getDescription receives nothing and returns, template literal, that says, this.name, has, this.wheels, wheels. So if we run the method right now
>
> **[1:34](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-class-with-capabilities?u=76281980&t=94)** and we had Vehicle objects, we would get the name of the vehicle, has, this number of wheels, wheels. But of course, this won't work right now because we have yet to create a Car and Bike classes. So let's do that. I'll create more space for myself here, and I'll say, class Car extends Vehicle. And then, in the constructor, I'll capture the properties for Car, which are name and doors. Those are the two properties here. And I'll set them up like this. Super, meaning we go up into the Vehicle class. And then I'll pull out whatever properties I want from that. So that would be name. And I'll set one of the properties, that would be wheels. So I'll set that to four. So instead of calling in a value from my call down here, I'm actually hard-coding it in right now. And then, I'll say, doors, this.doors equals doors. And then I can do the exact same thing with the Bike. So I'll go down, create more space for myself, copy and paste, and then say Bike extends Vehicle. Here we have type instead. And I'll just type type and type. Okay, save that. Go to console and run node script.js. And what we get as output is: My car has four wheels. My bike has four wheels. Oh, right, I need to change the bike here to two. Let's do that again.
>
> **[3:07](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-class-with-capabilities?u=76281980&t=187)** So now we get, "My car has four wheels. My bike has two wheels." All right, that's almost what we want. But if we look down here at the output, it should say four wheels and four doors, and two wheels and off-road type. And we have that information stored. So if I go in here and I console.log it out, I can say, let's see, console.log, myCar.doors.
>
> **[3:35](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-class-with-capabilities?u=76281980&t=215)** And I can, down here, say, console.log, myBike.type.
>
> **[3:43](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/creating-a-class-with-capabilities?u=76281980&t=223)** Save that, and run again. And we'll get the numbers. So you see here, "My car has four wheels and four. My bike has two wheels and off-road." But we don't yet have a way of displaying that, that comes in the next movie.

> [!info]- Semantic Content
>
> **Code Identifiers:** getdescription (3), mycar (1), mybike (1)
> **Prerequisites:** set up (3), setup (1)
> **File Paths:** script.js (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)

#### [Extending a class with new capabilities](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/extending-a-class-with-new-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/extending-a-class-with-new-capabilities?u=76281980&t=0)** - [Instructor] A cool feature of classes is we can extend methods within the classes as well by overriding the methods. In the previous example, we captured unique properties for the Car and Bike classes, but the output from the getDescription method for the Vehicle class doesn't reflect this data. We get My Car has 4 wheels, but not My Car has 4 wheels and 4 doors. We get My Bike has 2 wheels, but not My Bike has 2 wheels and is an offroad type bike. So let's extend the functionality of our subclasses to output this information as well. To do that, I'll go into the Car class first and I'll say getDescription. So that's the same method as the one we defined up here, meaning I'm now overriding this method. But because we are in a subclass, an extended class, I can say getDescription and then return, and then use my template literal to say super, meaning go up into the parent, getDescription, that gives us the full output from the parent description, and then add on and this.doors doors. Then I can copy this, go down into my Bike class, and do the same thing. getDescription, return super.getDescription, and this.type type bike, and is a. Then finally, I'll just take out these properties here
>
> **[1:36](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/extending-a-class-with-new-capabilities?u=76281980&t=96)** 'cause I don't need these outputs. Save this and go into console and run node script.js. And now it says My Car has 4 wheels and 4 doors. My Bike has 2 wheels and is an offroad type bike. So we are extending not only the class but also the method. And we could take this one step further and capture the information. Instead of hard coding it, actually capture the wheel information. So I'll go in here and say 4 wheels and 4 doors and 2 wheels and offroad. So that means we need to go up to our main class here to look. We're capturing name and wheels, that's fine. Then for the next one, we're capturing name, wheels, and doors. And then we'll say name and wheels here. And then here we're capturing in bike name, wheels, and type. And then we capture name, and wheels, and save that. Run the script again. We get the same information. So let's just see what happens if we change the value here. So I'll say the Bike has 3 wheels 'cause some bikes have 3 wheels. Run it again. And now it says Bike has 3 wheels and is an offroad type bike. So using classes, we can define a main class, then use class inheritance to bring in the properties from the main class, extend it with additional properties, and even override methods while still using the original method so that we get consistency and change only the pieces we actually need to change.

> [!info]- Semantic Content
>
> **Code Identifiers:** getdescription (6)
> **Definitions:** is an  (3)
> **File Paths:** script.js (1)
> **CLI Commands:** node (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a library with books](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-library-with-books?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-library-with-books?u=76281980&t=0)** - [Instructor] In this challenge, we'll build out a basic library system. And although there's a lot of code here, you'll notice there's a very strong pattern to it. There's a lot of the same. And everything that you need to solve this challenge was covered in the previous movies in this chapter. Before I get started, let's take a quick look at the test code here 'cause this is important. So we're passing in three different books that have title, author, publishing year, and genre. Then further down, we're adding the books to the library. And you'll notice I've wrapped this in a console log, just so that you can see that the books are being added in the output. And finally, to test the capabilities, we are finding a book, and then we are removing a book. So in the challenge, we have to make all of that stuff work. And when you look at the commentary, you'll see we start by we have to extend the class with a fiction and a nonfiction class. That goes here. And then inside the library class, we have to add three more methods. Add book, remove book, and find book. And all of these receive their own pieces of data. So let's start by building out the fiction class. I'll do that right here. I'll say class, fiction, extends book.
>
> **[1:17](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-library-with-books?u=76281980&t=77)** Inside, we'll create a constructor, and this constructor will receive all the properties of the book. Now looking down here, you'll see they are title, author, pub year, or publication year, and genre.
>
> **[1:39](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-library-with-books?u=76281980&t=99)** Then I'll say super, title, author, publication year, and I'll add this genre equals genre. Okay, with the constructor complete, I'll extend the get details method here so that we can add in the genre information. So I'll say get details, return,
>
> **[2:08](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-library-with-books?u=76281980&t=128)** and then we grab super, get details, and we add on a comma, and then genre, colon, and then this genre. That gives us a fiction class. I also need to create a nonfiction class. And the only difference between the fiction and nonfiction classes is that, for nonfiction classes, we have subject instead of genre. So what I'll do is copy the fiction class, paste it down here, and then call this one nonfiction. Also extends books. This time I'm looking for title, author, publication year, and subject. So super is still title, author, publication year. This subject equals subject. And then finally, return, super details, and then subject equals subject. All right, so that gives us two new types of books, fiction and nonfiction. And if we scroll down here, you'll see that when we're adding books, we can now add either a fiction book or a nonfiction book, and this will all match up. But there's one more thing we need to do. We need to add these three methods here. Add book, remove book, and find book. Looking at the challenge text here, you'll see the output that we want from these
>
> **[3:41](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-library-with-books?u=76281980&t=221)** is very specific. We want book titled Odyssey is in the library, book titled whatever is not found, and book titled Odyssey removed. There are now X number of books in the library. So it's important to match up the text here exactly. Now, to avoid you having to watch me type out a ton of code here, I've already pre-prepared the code, and we can walk through it. The add book method is pretty straightforward. When we get a book coming in, we grab the book and push it to the book's array that sits inside the library. So now it's added to the array. Then we return some text here, and that text is book. And then the book title added. There are now, and then the number of books that are in the library, in the library. You'll see this books array is what's important here. That's the one that holds all of our books for us up here. Then we want to remove a book, and that just means we need to go into the array, find the relevant book, and then remove it from the array. That's simple array management. Here's the code. Inside this function, we say if we grab the book, and we say find in the book's array. And if we do, then we grab the title of that book. Then we say, for the books array, we filter out the current book that we're looking at by the title, and then we can either return book title has been removed. There are now X number of books in the array. Or if the book is not found, we'll say book and this title is not found. Again, this is straightforward array management. Finally, we need a method for finding a book, to see if the book exists in the library.
>
> **[5:19](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-library-with-books?u=76281980&t=319)** This is a simpler version of the code just before. Here, we don't need to have a conditional to see if the book exists. We just simply say, if we can find the book, then return the book and return the correct text. Otherwise, return the text that it's not found. So as you can see, even though we're working with classes, and we're doing all this fancy stuff, we're basically just managing arrays here. Okay, let's test this code and see if it works. At the top, we get the output. So the book, Odyssey, was added. There's now one book in the library. And then number two, library, and number three. Then we get the outputs here. Book titled Odyssey is in the library. Book titled Silo is not found. And book titled Odyssey is removed. There are now two books in the library. So that means everything is working as expected, and we passed the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Advanced Solution: Users managing other users](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-users-managing-other-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-users-managing-other-users?u=76281980&t=0)** (electronic music intro)
>
> **[0:05](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-users-managing-other-users?u=76281980&t=5)** - [Instructor] This challenge builds on the previous one by adding some much needed features to our library. Namely, a librarian who can manage users and loan and receive books, and users who can borrow books, return books, and be suspended if they don't return their books. In the answer code, you'll find our book class fully built out, the fiction class fully built out, and the non-fiction class fully built out. You'll also find the library class that has all the pieces from the previous chapter, but there's some pieces missing here that we need to build out, including an add user method, a find user method, a set librarian method, and below that we have a new set of classes. We have a library user class that has all of the users of the library. For each library user, they have a borrowed books array that signifies what books they currently hold. And then we have a librarian class that extends the library user class, and the librarian has additional methods that they can use including return book and suspend user. Our task is to build out these methods so that everything is working properly. So note at the beginning that in our library we have a books array, we have a user's array, and we have a librarian property that is currently set to null because we can only have one librarian. So we'll assign a librarian to this property. In the test code, you'll find all of these things have been triggered to make sure that we can set a librarian, check availability, loan a book, return a book, and suspend a user and make sure that user cannot loan a book. Alright, and just so that this doesn't become
>
> **[1:41](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-users-managing-other-users?u=76281980&t=101)** very frustrating to watch throughout this movie, I'll be pasting in the solutions and then explaining how they work rather than typing out all the code. Because admittedly, there's a lot of code to write in this challenge. The add user method is by far the simplest method. We simply receive a user and then push that user onto the user's array for the library. It couldn't really be any simpler than this, and this kind of illustrates all the solutions that we'll be working with. What we're really doing throughout this challenge is managing arrays inside different classes and getting the classes to talk to one another about what items sit in what arrays and what status those items have. Speaking of, now that we have a user's array, we also need to be able to find users within that array. So we'll set up a basic find user method that grabs the name and just returns whether or not the user exists within the user's array. Now we need a set librarian method, because a librarian is a special kind of user. And the librarian is different from the other users in that we can only have one librarian for this particular library because of the library rules. So the set librarian method will receive a librarian, and then check is a librarian already set? If it is, then we say a librarian already exists and we just jump out of the method. If on the other hand there is no librarian then we grab this librarian and set it to the current librarian, the pass, the one we passed in, and then return librarian is added. That way if anyone tries to add additional librarians without the original librarian being removed first,
>
> **[3:15](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-users-managing-other-users?u=76281980&t=195)** it won't work. Now we can move on to the capabilities of the library user. A library user should be able to do two things. They should be able to check availability of a book and loan a book. And you may be wondering shouldn't they also be able to return a book? But if you think about it, the returning of a book from the library's perspective is something that is done by a librarian, not a user. So therefore, we're going to put check availability and loan book in the library user, and then return book in the librarian instead. So let's do check availability first. This method receives the library and the title of the book. And the first thing we do is go in and use the find book method for the library to say do you have this book? If the book exists, then we go in and check the book's status. If that book status is set to available then we can say the book is available and here are the book details. If the book's status is something else, then we say the book is currently on loan. And if there is no such book in the library, then we return the book is not found. Now if we have a book the user may want to borrow that book, and for that they'll use the loan book method. This method will touch the user, the book, and the library and updates statuses for all of them. So the first thing we do here is check to see if we have a librarian, because a librarian needs to loan out the book. Then we check to see if we have the book. Then we check to see, is the user currently suspended?
>
> **[4:48](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-users-managing-other-users?u=76281980&t=288)** If the user is suspended, then we just return, this user is suspended and can't borrow books, and then end the function. If the user can borrow books and the book exists, and the book's status is set to available, then we say grab the book and push it onto the borrowed books array for the current user. So the current user now holds the book. Then we change the status of the book to on loan and output, this user has borrowed the book this title from and then the librarian's name. If on the other hand, the book's status is not available, then we say the book is currently on loan and if there is no such book, then we return the book titled, whatever, is not found. So now we can add users, we can have the users look for books, and we can have the users loan books. That brings us to the librarian and their capabilities. The librarian needs to be able to return a book and also suspend a user. So let's see what that looks like. The return book method is pretty much the reverse of what we just did when we lent out a book. So again, we grab the book and we grab the user. Then we check if we have a book and a user. Then go into the user's borrowed books array and find the index for the current title we're looking at, see the title is up here. Then if the user actually has the book we go into the book index and pull out just that book. Then if the user has the book, we can go into the user's borrowed books and simply remove that book from their array. We can do that using splice,
>
> **[6:21](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-users-managing-other-users?u=76281980&t=381)** we're just pulling it out of the array. Then we change the book's status to available and output, the librarian has checked out the book title from whatever user. If the user does not have the book we say this title was not found in the user's borrowed books, and if there is no such book, then we say the book or user is not found. So again, we are managing the user's borrowed books array. We are managing the book's status and we are checking to make sure that everything is working properly. The last method we need to set up is suspend user. This is a power the librarian has, and once again, this is pretty much just array management. We receive the library and the username. So the first thing we do is go in and find the user in the library. Then if we have a user, then we can set the user's suspended property to true and say the librarian has suspended the user's name. If there is no such user, then we can say, user not found. And as I do this, I see you could also add in an unsuspend user method that would just do the exact thing, except in reverse, change the user suspended value to false. Okay, that should be all the pieces we need to get this test to pass. Let's test it. All my tests pass and down here you can now see a long list of things that have happened at the library. We have a librarian, there are books that are borrowed, a user is suspended, we find books, and borrow out books, and return books and don't find books that don't exist, et cetera. So everything is now working and that is one solution to this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** find (11), make (3)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (2)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music intro) (1)


### 3. Singletons and Proxy Objects

[↑ Back to Table of Contents](#table-of-contents)

#### [Building robust applications](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/building-robust-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/building-robust-applications?u=76281980&t=0)** - Sometimes you need to create a class, only one instance can be created from, for example, if you have a logger class to log anytime a certain event happens, you don't want to have numerous instances of that same logger. Another example would be configuration settings. Only one instance of a class should do the configuration, have several configurators and things get messy real quick. To this end, we can use the Singleton Pattern. In short, a Singleton ensures only one instance of a class can be created, and if you try to create a new instance, when one already exists, the existing one is automatically returned. In addition to Singleton classes, you can further protect the original class or intercept any interaction with the class or object using a proxy object. A proxy object sits between your function call and the actual object or class you're calling and can intercept and perform actions on the request before it's passed to the main object or class. For example, a proxy can validate data before it's sent to a class that stores that data. Combined, Singletons and proxies allow us to create secure objects and classes and put intermediaries in place to control how data flows into those objects and classes. In this chapter, we'll take a closer look at both Singletons and proxies.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Speakers:** - sometimes (1)

#### [Using singletons to create unique functions](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-singletons-to-create-unique-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-singletons-to-create-unique-functions?u=76281980&t=0)** - [Instructor] The singleton pattern is a fairly simple piece of code you can add to your class, and once you know it, you'll know how to use it for any class. In the example code for this movie, I've created a very basic class at the top here called UniqueClass. It just receives a piece of data and then returns it. So down here, I've created two instances of it, instance one and instance two, and they send in different pieces of text here. So we have data for the first instance and then data is for the second instance that shouldn't be set. Then finally, I just console.log the two instances out, and right now, if I go to my console and say node script, I get data for the first instance and the second instance should not be set, meaning we currently don't have a singleton. We're able to create multiple instances of this class. Now let's add the singleton pattern. That's done inside the constructor. We'll start by setting up an if statement. If UniqueClass.instance, meaning an instance already exists,
>
> **[1:02](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-singletons-to-create-unique-functions?u=76281980&t=62)** then return UniqueClass.instance, return the current instance. Then directly below the conditional statement, we say unique class instance equals this. So what happens now is, the first time we create an instance down here, we go to the top of UniqueClass and go into the constructor and then say, is there already in existence an instance of this constructor? If not, then set the current instance to this and then assign the data. For the second instance, we go up again and say, do we already have an instance of this class? And yes, we do. In that case, return the existing instance and set that as a unique instance and then set that to this. That means, when I save this and open it in my terminal, you'll see I get two instances of the same instance. You see, I get the output of the same instance twice. Now, looking at the code, this is interesting, because I am in fact calling two separate instances, but I'm getting the same output, only the output for the first one, and that's the whole point of singletons. It doesn't say you can't make more instances. It's saying if you choose to make more instances, they will always be the same as the first one. And you can see how that's useful. Anytime you have a class that you need to make sure will only ever be outputting the same information every time, you use a singleton. Now, there's actually one more piece to this.
>
> **[2:34](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-singletons-to-create-unique-functions?u=76281980&t=154)** Let's say I go and grab instance one. That's the instance we've created. The first one, so the singleton instance, and then set data to something else. Save this. Run it in console one more time, and now it says something else. So that means even though we created a singleton, we can still modify the contents of the singleton instance. How can I prevent that from happening? Well, we have a method for it. We can use Object.freeze and set that to instance one. When I do this, I'm saying, now that we've created the instance, the data within the instance cannot be changed. So if I run that in the console, you'll see we still get the original data. We're not getting an error message or anything like that. We're just getting the original data, and I'm unable to change the contents in it. So not only do we have a singleton, we have a singleton with frozen content.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), node (1)
> **UI Navigation:** go to (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using proxy objects to intercept calls to an object or class](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-proxy-objects-to-intercept-calls-to-an-object-or-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-proxy-objects-to-intercept-calls-to-an-object-or-class?u=76281980&t=0)** - [Instructor] Proxy objects allow us to intercept traffic during a call to an object, and then modify the object and its methods if necessary. The MDN page for proxy provides a good starting point for understanding how this works. In this very rudimentary setup, you can see a proxy object takes two parameters, target, which is the original object or class, and handler, which is an object that intercepts the operations of the original object or class. Scrolling further down, there is more built-out example that really shows what's going on here. So we have the target object that has two messages in it, then we have a handler object, and we have the proxy down here. So, proxy3 is set to a new proxy that targets the target, and then applies handler3. So if we go and say proxy3, message1, we go up to the target and output Hello. But if we output message2, you'll see that the handler modifies message2 to return world instead. So that's what we see down here in the output. That's the whole point of a proxy. You intercept the call to the original object, and then modify whatever you need to modify in the process. This will make more sense if you see it in a real world example. So in the exercise files, I've set up a basic booking system. All the system currently does is allow bookings between 9:00 AM and 4:00 PM, and reject all other bookings. Here's a quick breakdown of how it works. We have the booking class, and we create an instance of the booking class. Then we have an array of booking attempts that will be made
>
> **[1:33](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-proxy-objects-to-intercept-calls-to-an-object-or-class?u=76281980&t=93)** against the booking class. So every time we try to book something, we go to that booking class and say, "Can I do this or not?" And the booking class will return either booking made successfully at whatever time, or booking attempt failed at whatever time, along with an error message. And scrolling up, you'll see what actually happens is we're calling the time method. You can see that down here, booking.time equals the attempt. So, we're calling the time method. The time method sets the current time, and then the current time is passed through here. So we say for set the time, then grab the current time and hours, see if it's outside of the 9:00 to 4:00 window. And if it is, then throw an error. Otherwise, just return the value. This works fine. If I go to my console and I output it, you'll see the first booking is successful, and the two next ones fail. The problem right now is that the validation is sitting inside the constructor. And as I explained this, you probably noticed that that doesn't really make any sense. Why is it sitting inside a constructor? Also, it means if I ever need to set up another class using the same validation, I have to reapply the validation. So a better solution would be to move the validator out of this class, and then use a proxy to apply the validator anytime anyone is trying to make a booking. And that's exactly what we'll do. I'll despair you watching me type a bunch of code, I'm going to copy and paste the code in. I'll place it directly here under the class, and then I will remove everything inside the class except for the constructor.
>
> **[3:08](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-proxy-objects-to-intercept-calls-to-an-object-or-class?u=76281980&t=188)** So now we have a very basic booking class. Then we have this new method called validator. And if you look at it, it looks a lot like the example I showed you in MDN, because this is the prototypical example of a proxy. So what we're doing is saying when you pass something into the validator, you pick up the object in question, so that is currently our booking object, but it could be any other object as well. any properties that are passed in, and the values of those properties. Then we check, is the property we are looking for here time with an underscore first? If so, then we make the same test as we did before. We set it to the actual hours, see if it's outside of the window of 9:00 to 4:00, and if it is, throw an error. Then we set the property to a new date value so that we can pass it back in and return true if this passes. So that means if it fails, it fails up here and we just get an error. If it passes, we're passing the value back. To make this work, we can no longer say Create a new booking. Instead we'll say Let booking equals new proxy, and then we'll call in new booking. So we'll create a new instance, but we'll intercept it with the validator. There's one more thing we need to do, and that's down here. Previously we were calling the time method inside the booking class, but we no longer have the time method. So instead, I'll pass in time as the property, and the property will then be intercepted by the validator and tested to see if it works.
>
> **[4:42](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/using-proxy-objects-to-intercept-calls-to-an-object-or-class?u=76281980&t=282)** So if I save this now, go back to my console and run it again, you'll see I get the same result. But, now I have new capabilities. For example, I can create a new class here. So let's say I want to have a scheduler class in addition that can also perform the same functions. I can now create the scheduler class and set up a whole new set of functionality. So I'll say Let appointment new proxy, is a new schedule, and use the same validators. The validation will be the same on a new class with a new set of data. And then I'll try out appointment time for a specific time, and then, appointment made successfully at this time and another appointment time. Save that, go back and reload the script again. And you'll see we get a slightly different output here because now we're getting successful bookings. So the booking was successful, then the two failed bookings, then the appointments was made successfully, the first one, but the second one throws an error. And this time I actually want to not intercept the error and just see the error take place. So this appears as an error in the script, but this is actually what I want because I can see that my new class here is being intercepted with a proper error, and that error is appearing down here. Bookings can only be made between 9:00 and 4:00, and then I can further catch the error and do whatever I want with it. But you can see that the new class, the scheduler class, even though it's using the same validator, is behaving differently in my console from the booking class because they are entirely separate things. This is why you have proxy objects.

> [!info]- Semantic Content
>
> **Ports:** :00 (8)
> **CLI Commands:** make (5)
> **Prerequisites:** set up (3), setup (1)
> **Env Vars:** mdn (2)
> **Documentation:** mdn (2)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** go back to (1)

#### [Solution: Create a logging system](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-logging-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-logging-system?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-logging-system?u=76281980&t=5)** - [Instructor] In this challenge, we're creating a basic logger system using a singleton and a proxy, and looking down at the test code you'll see all we want to do is enter these log entries user Maikan was created, user Simran was created Simran was updated, and Maikan was deleted. And then for each just output information about when that happened. Looking at the code here, you'll see at the bottom we're returning this logger that is a new proxy of logger instance and we have a handler function and the bare bones of this is already built out. We have a class called Logger that currently has nothing in it. We have a logger instance for a new logger, so that would be the logger instance that's referenced down here. And we have a constant called handler for the handling object. So we need to build out all of these pieces. There are two key pieces here. One is logger needs to create a singleton instance and two is we need to build out the handler to handle everything that's normally happening inside the class so that that handler can be used for other things later in other classes. Let's start with a singleton pattern. And if you think back to earlier in this chapter I said the singleton pattern always looks the same. So here I'm just going to paste in the singleton pattern. Looks like this, constructor. If there is no instance of the logger, then this instance becomes the instance and then we return the logger instance. The only difference here is I've also added this logs array. This is where we will store all of our logs so that they can be output, because of course as you're working
>
> **[1:39](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-logging-system?u=76281980&t=99)** with a class, you can add as many properties as you want inside the construction of the class because even though it's a singleton class, you can still add as many properties as you'd like within that class. And that's what we're doing here. Next I need to create some basic methods for my logger class. I want to be able to log a message. I want to be able to get a count of how many logs there are and I want to be able to show the full log. So below here I'll create these three methods. So log, we'll just receive a message And then we'll grab this logs that's the logs array up here and we'll push the message onto it. Then for the log account all I need to do is get the length of the logs array. So I'll say return this logs length. And finally, for the show logs method I need to do a couple of things. So first I'll set up a const called log result and I'll set it to this logs and then map that gives me a full map of the entire log. And I'll put in log and index so that I get the index items for each and I'll say output index plus one, dot, and then the log. So all we're doing here is mapping through the logs array
>
> **[3:18](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-logging-system?u=76281980&t=198)** and then returning the log number, so the index number plus one, because indexes start with zero and then the log itself into a list and placing that inside the log results constant. Then I'll grab log count I'll say Const log count equals this. Get log count. And finally I'll return those two pieces. So I'll return logs, log result And log count, log count. So here I'm returning an object and then I can do stuff with that object later. That gives me the logger functionality. Now I need to build out the handler. Now the handler has a bunch of things happening in it. So once again, I'll paste in the code and then explain what is happening, for this handler. We'll use a getter to literally get information out of the log and do something with it. And the function we're returning here has the target that is the log object and the properties. Then we say if the property is log, then return the message of the log and then include in the message the new date. So we're grabbing the timestamp for the log and then adding it to the message. So in addition to having the message we'll know exactly when this message was logged. If on the other hand the property is not log, but show log then we bind the target and then output the show log property.
>
> **[4:51](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-logging-system?u=76281980&t=291)** So with this handler, we're not changing anything we're not using the set keyword. Instead we're pulling information out and doing something with that information which is why we're using the get keyword. Alright, let's see what this looks like when we run the test. Both of the tests passed and down here you can see the full output down here in the output. You get this object we created up in show log. And you can see in that object we have the number so that's the index plus one and the dot. Then we have the actual log message. And the log message has been intercepted by our getter down here so that we get the date that the log was created on. And over here, the actual log message. The reason why this happens is because we're using this proxy. So the proxy grabs a logger instance and intercepts it and adds in the timestamp so that the logger message has the timestamp. If we didn't have the proxy, we would get this same output but without this timestamp added to it. And this illustrates in a very clear way why we use proxies. Proxies allows us to intercept and add additional information without messing with the original information itself and that is one solution to this challenge.

> [!info]- Semantic Content
>
> **Cross-References:** earlier in (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Advanced solution: Create a data validation system](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-data-validation-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-data-validation-system?u=76281980&t=0)** - [Instructor] A common use of singletons and proxy objects is for system functionality like [Data Validation](../../Skills/Software%20Development/Data%20Validation.md). That's the focus of this challenge. The functionality as we get started is split between the answer code and the test code. In the test code, you'll find a bookings array of objects describing different bookings. This array is used below by a script that maps through each of the booking objects and tries to create a new booking from it. For each item in the array, a new instance of the booking class is created. A proxy is created for that booking that modifies it by some booking validation rules. And finally, the system returns messages depending on whether the validations pass, fail, or there is some other error. In the answer code, there are the beginnings of the functionality we need. At the top, you find an array of error messages that will be used for the validation. Next, there's the singleton validation manager class with methods for registering validation rules and validating those rules. And by the way, this validation manager class is similar to a reactive pattern, which we'll discuss in a later chapter. Moving on, a new validation manager instance is created from the validation manager class, and then you find the booking class which manages the booking itself. This is followed by the booking manager class, and this is where we'll do all our work
>
> **[1:32](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-data-validation-system?u=76281980&t=92)** to solve this challenge. Below a booking manager instance is created from the booking manager class. And to round things off, we have a create validation proxy method that receives the booking object and the rules we are validating against. This is a function called for each booking object. And as you can see, it generates a new proxy for each object to run the validation tests on. Below, there is a booking validation rules object listing the validations that are applied to each booking. These validations are email, data and time. And finally, are the validation rules themselves each registered to the validation manager instance using the register validation rule method in the validation manager class at the very top. This is the code that ensures the email address is valid, the booking is done on a weekday, and that it's between 9:00 AM and 4:00 PM. Okay, so there's a lot going on here and we still need to add some more code to get this all wired together. As I said before, all our work happens in the booking manager class and the first thing we need to do is add a bookings array and also make it a singleton so we don't accidentally spin up multiple instances of this class. Here we'll use the standard singleton pattern and just add in the bookings array in addition. Next comes the main method for this entire script, add booking. We'll place that code down here and I'll walk you through it. As you can see, this method is quite large and this is the method that grabs each booking,
>
> **[3:07](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-data-validation-system?u=76281980&t=187)** tests each field within the booking against the validation tests, outputs validation errors if there are any, then makes sure there are no overlapping bookings and finally returns valid, true, if everything is okay. Let me walk you through my solution line by line. At the very top, we grab the keys from the booking validation rules object, so we can call them up individually. You'll remember those keys sit down here in the booking validation rules. And we have email, date and time, so we're grabbing these keys here. Next, we set the variable valid to true as we start and also pull in the booking errors object from the very top. These are all the different error messages for different types of errors that are defined at the very top of the file. Now we'll use a for loop to iterate through each of the fields in the validation object so we can apply each validation test to the booking, one after the other. We do that by first lifting up the validation rule using the key we captured in validation fields and then grabbing the corresponding field from the booking object. You'll see I'm using field twice here so that's the key from that validation rules object. Then we use a bit of logic to run the current validation test on the current field using the validation manager instance. If this validation returns false, we use a switch command to output the appropriate error message and set valid to false. So if the field is email, we output the email message.
>
> **[4:41](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-data-validation-system?u=76281980&t=281)** If it's date, we output the date message. And if it's time, we output the time message. If on the other hand, the validations pass, we jump to the next section and check the date and time of the current booking against any other bookings in the bookings array. If there is an overlap, we add a time not available message to the errors array and set valid defaults. If there is no overlap, the booking is valid and the valid field stays as its default true. We then have a valid booking. Now there's a lot going on in this challenge and it's easy to lose track of what code is talking to what function, and how it's all wired together. So to help you out, I've added a heavily annotated solution to the solutions folder in the [GitHub](../../Skills/Software%20Development/GitHub.md) repository along with a full text explanation of how all of this works. Once I have my solution, I'll click test my code to make sure everything is working. And over here I can see I got all my tests passing and down here I got full return, showing me the different test cases that are defined in the test code. As it says, all tests pass, and this is the solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (2), is an  (1)
> **Ports:** :00 (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Observer Pattern

[↑ Back to Table of Contents](#table-of-contents)

#### [Push info to many nodes](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/push-info-to-many-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/push-info-to-many-nodes?u=76281980&t=0)** - Let's say you're building a smart home system and you want to selectively trigger multiple, different devices based on a specific event. For example, when the front door opens, the hallway light is turned on, music starts playing and the kettle is turned on. This setup requires a basic observer or published subscribe pattern. The system observes some component, in this case, the front door, and when its status changes, the subscribed dependence are updated automatically. This observer pattern is useful in advanced [JavaScript](../../Skills/Software%20Development/JavaScript.md) applications and can be set up to manage complex interactions between different parts of the application. Before we dive into this topic, it's worth noting that the basic observer pattern I'm about to show you is just that, basic. There are several JavaScript libraries out there created specifically to facilitate more advanced observer patterns. That said, understanding how this basic observer pattern works will help you recognize when it's needed and when to turn to a more powerful library. In this chapter, we'll take a closer look at observer patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Prerequisites:** setup (1), set up (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)

#### [Setting up a basic Observer pattern](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/setting-up-a-basic-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/setting-up-a-basic-observer-pattern?u=76281980&t=0)** - [Instructor] The easiest way to make sense of the observer pattern is to see one in action. So let's say we have a store that only carries a few [products](../../Skills/Software%20Development/Microsoft%20Products.md) and they rarely have any stock. To get the items from the store, customers can subscribe to the items they want for updates. When the stock of the item is replenished, they get a message letting them know it's available. I have the bare bones for this already set up in the exercise files. We can register a new backpack using the new Product class, and the backpack is called "Green Frog Pack". We can register new customers using the Customer class. Well, I've registered two, Simran and Maiken, and I want to build out the functionality so I can register these two customers as observers of the backpack, so that when the backpack is back in stock, they are notified. That notification happens in two places. Inside the Customer class, we have a method called message that receives the productMessage and outputs this.name, so the name of the current customer, comma, and then the productMessage. The productMessage is defined up here in the Product class under the backInStock method, it notifies the observers that the current product is back in stock. So the result is you'll get a message like "Simran, the Green Frog backpack is back in stock," or "Maiken the Green Frog backpack is back in stock." And if they're both subscribed as they are, we should see both of those messages in the console. All right, let's set up the observer. To do that, we first need to create our product and set up an array of observers for that product. This is where we'll store all the observers,
>
> **[1:35](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/setting-up-a-basic-observer-pattern?u=76281980&t=95)** but we're not going to store the customers. We're going to store a method inside this array. Let me show. You first, I'll go in and create a new method inside the Product class called registerObserver. This method receives the customer and inside the method, we'll say this.observers, so the current item, the current customer, push will add it to the array, and instead of adding the customer, we'll say customer.message.bind customer. What is going on here? Well, if we go down into the Customer class, you'll see there's a message method. So we are binding the message method to the current customer and putting that binding inside the array. So, what's stored in the array is a bound version of this message rather than the customer itself. Then, we need to create another method. This one is notifyObservers, that's the one that will actually fire the notification. So, we'll say notifyObservers. This one receives the product message, which is defined up here. And what we want to do now is say this.observers, whoops, this.observers, and here we'll say this.observers forEach, to iterate through all the observers, we'll grab the customer, and then we'll set the callback function to customer productMessage,
>
> **[3:10](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/setting-up-a-basic-observer-pattern?u=76281980&t=190)** and make that a curly brace instead of a parentheses so that it actually works. So what happens now is when we fire backInStock, which sits up here, backInStock says this.notifyObservers method down here, send this text here, so we're passing that text in. notifyObservers goes into the observers array, finds each of the items, each of the customers, then goes to that customer and passes on the product message because you'll remember what is sitting inside the array is the bound message method. So we are passing the product message, this text here, down into the message method down here, which receives the product message and outputs the name of the customer, comma, and then the product message. All right, let's test that. Look at that "Simran, Green Frog backpack is back in stock." "Maiken, Green Frog backpack is back in stock." This is the observer pattern, a bunch of pieces that work together to ensure we can call in one function and then that function triggers a cascade of other events to happen and we get the output we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Code Identifiers:** productmessage (4), notifyobservers (4), backinstock (3), registerobserver (1), foreach (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (2)
> **Definitions:** is called (1), is a  (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Managing observers](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-observers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-observers?u=76281980&t=0)** - [Instructor] Once you have a basic observer pattern up and running, you probably want to extend it with some additional features. Most obviously, the ability to remove an observer to unsubscribe from whatever the observer is observing. Now in the existing code, you'll remember the customers, the observers, are registered in the observer's array on the current product instance. But, in the register observer method, we're not adding the customer. Instead, we're binding the message method within the customer instance to the customer, and then placing that in the array. That means we can't simply remove that entry from the array because the message method will still be bound. Instead, we have to rethink what is happening inside this register observer method. First, let's go down to customer and bind the message method to the current customer. Looks like this, this, message equals this message, bind, this.
>
> **[1:03](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-observers?u=76281980&t=63)** Now if we reference the customer bound message, we get the bound version of this message. That's effectively the same as what we currently have up in Register Observer, except that it's now tied directly to the customer instance and not just something that exists in the array as its own entity. Next, we can go in here and change register observer. So instead of customer message bind customer, I'll say customer bound message. By binding the message function to the customer instance upon creation of the object and storing that bound function as a property of the customer object, we can now call it from the customer instance and it will always be bound to the correct customer. All of this ends up working the exact same way as before, except the binding is controlled by the customer instance and will always be associated with the correct customer. So we won't have any stray data floating around inside our application. With this in place, we can now create a remove observer method. Just like register observer, it receives the customer, and inside remove observer, we'll say this observers, so that gives us all the observers equals, and then we'll use the filter array method. Filter creates a new array with only the items that pass the callback test by iterating through each item. So if I say this observers, filter, and then make the callback method say customer, and then callback,
>
> **[2:41](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-observers?u=76281980&t=161)** customer not equal to customer bound message,
>
> **[2:49](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-observers?u=76281980&t=169)** what we're saying is return every item in the array except the item that matches the current customer. This kind of reverse logic works really well for computers. Now finally, just to notify us that we have actually added and removed customers, we can add some console logs here. So I'll say console log added customer name
>
> **[3:19](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/managing-observers?u=76281980&t=199)** as an observer of, and then the current item this name. And then we can do the same thing for remove observer down here, we'll say removed as an observer of this name. Okay, let's test this in console and see if it works. Console is not defined, right. Console, let's highlight my dyslexia even more. There we go. There we go. So now we have added Simran as an observer, added Maiken as an observer, Simran, the pack is available. And then finally, remove Simran as an observer. So that means that all of these test functions down here work as expected, and we're able to add, remove, and update.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Temperature display](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-temperature-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-temperature-display?u=76281980&t=0)** - [Instructor] In the answer code for this challenge you have the starting point for an observer pattern inside the weather station class. And the goal of this challenge is to complete this observer pattern. In the test code, weather station is registered followed by two new weather display instances. Then the weather display instances subscribe to the weather station for updates. And finally a series of temperature changes take place. The goal for the subscribed weather displays is to register the temperature changes anytime there's a change in the weather station. To solve this challenge, we need to add three missing methods to our observer pattern. Those being add observer, remove observer, and notify observer. Before we start, note that in this example, instead of using arrays I'm using a set to register the observers and a map to register the display names. Now there's no particular reason why we're using them in this example, I am doing it because I want to show you how you can use things other than arrays to do this. The distinct difference between using a set and an array is that in a set you can only have one unique instance of each thing and that gives us more clear methods to work with once we want to add or remove items, which you'll see in a second. Alright, let's complete our observer pattern by adding in the missing methods, starting with add observer. This method receives the observer and display name.
>
> **[1:37](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-temperature-display?u=76281980&t=97)** And insight, I first need to make sure that the observer isn't already added to the observers set. So I'll say if and then not this observers has observer. So here you see a benefit of using set. We can just say has, we don't need to go on search for anything. Has will return either true or false depending on whether or not that item is already in the set. And then if it doesn't have that observer then we say this observers add observer. That adds the observer into the set. We also need to add the display name into our display names map. So I'll say this display names set 'cause we use set to set a new item in the map. And here we set observer comma display name. So we're tying the observer to the display name so we can easily recall it later using the observer. Finally, I'll return some texts to notify us that something happened. So the weather station notifies us this display name subscribed to the weather station. Now we can add observers. The next step is to remove observers and here we'll just basically reverse the process.
>
> **[3:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-temperature-display?u=76281980&t=180)** Remove observer receives just the observer. We'll be able to retrieve the display name if we need it from inside this method. Then we'll do a reverse check to say this time if the observer exists in the observers set, then do something. So we'll say if observers has observer. Notice the only difference between this one and this one up here is up here we're doing a negative test. So we have a bang in front. This one we're doing a positive test. Then if the observer is already registered we'll say this observer, delete observer. Notice you would not be able to do this in an array. You would have to go find the observer in the array first and then remove that array item. But because we're working with a set we can simply say, delete this item 'cause there's only going to be one of them. Then we need to do the same with the display names. So this display names delete observer, and finally put in some text saying the display name was unsubscribed from the weather station. Now we can add observers and remove observers. The last step is to notify the observers whenever there's a change. So here we'll start off by saying notify observers. This one receives nothing. And inside this method we'll say this observers for each, 'cause we want to iterate through each of the items in the set.
>
> **[4:33](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-temperature-display?u=76281980&t=273)** Works exactly the same as for each for an array. We grab each observer then set up a callback function. And the callback we say const display name equals this display names get and we want to get the observer. So this will return to us the display name of the current observer we have. And then finally, observer update this temperature comma display name. So we're passing the temperature and display name down to the current observer. The update method I'm calling here sits down here inside the weather display instance. So each of the instances of the weather display, so each of the observers has the update method and we're passing the temperature and the display name into that object. That's how it gets output and we get the text we want. All right, that's all I need to solve this challenge. Click test my code to make sure everything works. It does and that is the solution to this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** before we start (1), set up (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Advanced solution: Stock information](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-stock-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-stock-information?u=76281980&t=0)** - [Instructor] In the answer code for this challenge, you start with a generic Observable class. This class can be extended to quickly sign up observable objects, and it's a prototype for a reactive objects pattern which we'll cover in the next chapter. To solve this challenge, we have to build out a series of new classes and objects that either observe each other or are observed, and if you want to reference to which classes we need to build, you can go down here and look in the test code and you'll see which classes are called and what methods exist within those classes. The purpose of this challenge is to create a stock monitoring system where every time a stock changes in price, we'll get information about the price change, whether the price changes within a certain threshold, and what percentage the price change was. We'll start the process by building out the Stock class. The Stock class is the Observable class, so therefore it extends Observables. Everything else will subscribe to this Stock class. At the top, we import everything from the Observable class, so we can use all the methods within. Then we set up this.name, that's the name of the stock, and this.price, which is the price of the stock. The Stock class has one method, updatePrice, which receives the price, and this is the method that fires anytime a price is updated. At the top, we make a simple test to make sure the price is actually a price and not something else. And then if it is a number, we set the current price as this.price
>
> **[1:33](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-stock-information?u=76281980&t=93)** and fire the notify message by passing in an object that contains the name of the stock and the price of the stock. Take note that this notify method is sitting up here in the Observable class, and the notify method will pass on whatever object we passed to it to a callback method. This is how the generic Observable class works. It allows us to move all that functionality out of each individual observable class up into this higher-order function so we can just call for it whenever it's needed rather than build it again and again and again. Now that we have the Stock class, we can start building out all of the entities that will subscribe to the Stock class. And here we have three entities, the first one being priceDisplay. The priceDisplay, you can think of as the monitor you look at that will show you the output of the stock price or the app that sits inside your website that shows you the current stock price. And all priceDisplay does is run the update method to push the information. So, Price Display: data.name stock price is now and data.price. This update method is what gets passed up to the notify method. So, whenever notify fires, this is what gets fired and we push this information into the reports array which is defined at the very top here. Now that you see this pattern, you'll see it repeating again and again for the other items that we want to subscribe to the stock. The next subscriber is priceThresholdNotifier. This class is set up to monitor the price
>
> **[3:06](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-stock-information?u=76281980&t=186)** and check if the price change, hits a certain threshold, then fire a message. So here we first set a threshold that is passed in from the functionality down here and then we fire update only if the price is bigger than or equal to the threshold. So for example, if the threshold is set to 150, then if the price goes over 150 or is equal to 150, then we fire this notification, otherwise not. Again, the update method is fired by the notify method anytime there's a change. The final subscriber in this example is the percentageChangeNotifier class, and this system is set up to monitor if the change in price is higher or lower than a certain percentage. This class receives percentage as a value, sets the current percentage as percentage and then sets the previous price as null. Then we have the update method. Again, this is the method that is called by notify anytime there's a change to the price. Inside the update method, we receive data, so that would be the current price. The update method receives the entire object, so that is the name of the stock and the price. Then we go in and check if the previous price is null, meaning this is the first time the stock is getting a price, then we just return. Otherwise, we go in and figure out what is the change between the current price and the previous price, and then the percentage change between the two. And if that percentage change is over the defined percentage up here, and if the percentage change is more than
>
> **[4:42](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-stock-information?u=76281980&t=282)** or equal to the defined percentage up here, meaning the percentage threshold, then we send off the message "Percentage Change Notifier", this stock has changed by a certain percentage. That completes all the pieces we built in. Now if we look down into the test code, you'll see that each of these item priceDisplay, priceThresholdNotifier, and percentageChangeNotifier are all added as observers to the Stock class. So anytime something happens to the stock and the stock is updated, all these three get notified, and each of them will push messages onto the messages array depending on what is happening. So when I now run my test code, we'll iterate through all these different price changes including prices that aren't prices like "aaa" and the quote "200", and make sure that all of those different conditions are met inside the test case. And they are, here you see the output of the entire array with all the messages, including error messages like, "The price must be a number," and so on. And that means the solution works.

> [!info]- Semantic Content
>
> **Code Identifiers:** pricedisplay (4), pricethresholdnotifier (2), percentagechangenotifier (2), updateprice (1)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (3)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 5. Reactive Objects and Factories

[↑ Back to Table of Contents](#table-of-contents)

#### [Keeping a shopping cart up to date](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/keeping-a-shopping-cart-up-to-date?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/keeping-a-shopping-cart-up-to-date?u=76281980&t=0)** - Let's expand a bit further on the observer pattern from the previous chapter. When building a shopping cart system, you need to continuously track and update the items in the user's cart. Every time the user adds or removes an item from the cart, the total number of items, the taxes, and the sum total, and the detail list of what [products](../../Skills/Software%20Development/Microsoft%20Products.md) are in the cart should automatically update. To achieve this, we can use what's called a reactive pattern in [JavaScript](../../Skills/Software%20Development/JavaScript.md). This is, in reality, an expansion of the observer pattern, and it's a popular way of creating state in JavaScript frameworks, specifically in [Vue.js](../../Skills/Web%20Development/Vue.js.md). Reactive patterns in JavaScript provide a way of efficiently managing and synchronizing multiple parts of an application, effectively letting the software keep track of what's going on within itself at all times. Understanding the fundamentals of the observer pattern gives you the necessary foundation to recognize when to utilize it and when to reach for a more comprehensive library or framework, like a reactive pattern. In this chapter, we'll explore more about reactive patterns and their applications in more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Vue.js](../../Skills/Web%20Development/Vue.js.md) (1)
> **File Paths:** vue.js (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - let (1)

#### [The basic Reactive pattern](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/the-basic-reactive-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/the-basic-reactive-pattern?u=76281980&t=0)** - [Instructor] The core of a reactive pattern in [JavaScript](../../Skills/Software%20Development/JavaScript.md) is a standalone ReactiveObject class managing and updating observers or subscribers. In the previous chapter, we bundled all the observer functionality into the main class. This time, we're extracting them to make the overall code more manageable and extensible. So this ReactiveObject class here is generic, and we use it anytime we want to create an observable class that we can then have subscribers subscribe to. You'll notice there's no real definition of any callbacks or any functions. Instead, we just have the subscribe, unsubscribe, and update functionality packaged inside the ReactiveObject. So how do this work? Well, in the exercise files, I've built out a fully functioning example so you can take a look for yourself. We start out by creating a temperature monitoring object. So this is just a regular temperature monitor. The TemperatureMonitor extends the ReactiveObject, and within it, we then pull in everything from the ReactiveObject and apply a new property, in this case, temperature, and just set it to 0. Then we create a new method called setTemperature that grabs the newTemperature that's being passed in, set the current temperature of the current object to this newTemperature, and then updateSubscribers. Notice up here we have updateSubscribers as a method inside the ReactiveObject. It grabs the current list of subscribers, iterates through it using forEach, then grabs the callback and passes it back. So this is exactly the same thing we saw
>
> **[1:33](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/the-basic-reactive-pattern?u=76281980&t=93)** in the previous chapter on observers, except it's now generic, so that there's no specified functionality. Instead, we're using the callbacks. Speaking of, what are the callbacks? Well, let's take a look at how this TemperatureMonitor is used. First we create a new monitor from TemperatureMonitor, and then we call that monitor, for example, by saying monitor.subscribe alertTemperature. This here is the callback. The alertTemperature method will grab the current monitor that we're working with, and then it does something. So in this case, it says if the temperature is above 30, then console logout, WARNING, It's, whatever the temperature is, It's uncomfortably hot. This method here is then triggered anytime we set the temperature of the monitor. So here we have monitor.setTemperature 35. Scrolling up, you'll see here in setTemperature, we're grabbing the temperature and setting it and then updating subscribers. Subscribers are updated and looking for the callback. And the callback we're subscribed to is alertTemperature. So that means anytime we change the temperature, the reactive pattern will go out and call alertTemperature to see is the temperature above 30 degrees, and if so, log something out. If not, it currently does nothing. So this reactive pattern is exactly the same as the observer pattern, except we've broken it out into a separate class so that we can call on that class anytime we need a ReactiveObject rather than define all of this functionality within the ReactiveObject. Run it in console.
>
> **[3:09](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/the-basic-reactive-pattern?u=76281980&t=189)** And you'll see, it says WARNING: It's 35 degrees Celsius. It's uncomfortably hot. If we go down here and add more of these, let's see, I'll take this, just copy it, and paste it down. So I'll say if it's 32 and then paste one down here, that's 29. Save it, run it again, and it'll say it's 35, it's 32, and then nothing when there's nothing. We can take it a step further and say, if this is above 30, then do this, otherwise we can say else and then console.log,
>
> **[3:50](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/the-basic-reactive-pattern?u=76281980&t=230)** It's, and then just the monitor.temperature.
>
> **[3:58](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/the-basic-reactive-pattern?u=76281980&t=238)** Save that, reload one last time, and now we get, it's 29. The whole purpose of the reactive pattern is you no longer have to think of setting this up at all. Instead, you just call in the reactive pattern and then set up your callbacks and your functionality and everything just automatically kicks in. All the subscriptions to unsubscriptions to updating, they're all managed automatically by the pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** alerttemperature (4), settemperature (3), newtemperature (2), updatesubscribers (2), foreach (1)
> **Env Vars:** warning (2)
> **Cross-References:** previous chapter (2)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Adding advanced functionality](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/adding-advanced-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/adding-advanced-functionality?u=76281980&t=0)** - [Instructor] To see why this reactive pattern is so popular, let's expand the example by hooking our temperature monitor to a cooling system. With the reactive pattern in place, all we have to do is extend the reactive object with the new cooling system class, add some basic on-off functionality to it, and bind the cooling system controls to the monitor, so when the temperature changes, the cooling system is triggered. Here's how we do that. I'll go down past the temperature monitor, and add in a new class here called cooling system. Extends, reactive object. Inside the cooling system, we'll set up a constructor that receives nothing. It brings in super and then this status, that's the current status of the cooling system and we'll set it to off by default because we want our cooling system to be off when it's not running. Then I need to set up a method to turn the cooling system on and off depending on the current temperature. So I'll create a new method called trigger cooling system, and it'll receive the monitor object. The monitor object is the one that holds the current temperature. Then inside we'll set up a basic conditional statement. If monitor temperature is higher than 30 degrees, then set this status. That's the status of the cooling system to on, and output some logging information. So I'll say console log cooling system activated,
>
> **[1:38](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/adding-advanced-functionality?u=76281980&t=98)** current status, and then the status. And then I'll copy this line here because I need it in one second. I'll say else. So if the temperature is below 30, we'll say this status is set to off. And console, log the same thing again on the cooling system. Cooling system is now deactivated. Alright, now that we have a cooling system class, we need to create an instance of the cooling system. So I'll do that down here. Const cooling system equals new cooling system. And then we need the cooling system to trigger whenever the temperature changes. So we want the cooling system to be notified every single time there's a temperature change and then act accordingly. But we're already monitoring temperature changes down here using monitor subscribe. So I'm going to subscribe the cooling system to monitor subscribe. So whenever there's a change in temperature and the monitor notices that, the monitor triggers the cooling system. So we'll say monitor subscribe, and then we'll send the cooling system's trigger cooling system method as the callback. So I'll say cooling system dot trigger cooling system dot bind cooling system. Now if you think back to the previous chapter, you've seen this exact code before. We are passing the bound method of the current instance as the callback method into the reactive pattern.
>
> **[3:13](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/adding-advanced-functionality?u=76281980&t=193)** So every time there's a change, that method from the current instance is fired. This is all we have to do, save this, go run the script in console, and you'll see it says warning, it's 35 degrees Celsius, it's uncomfortably hot, current cooling system activated, current status on. But then it says cooling system activated, current status on again. Why is that? Well, if we scroll a little further down in the code, you'll notice monitor, unsubscribe, alert temperature. So we are still subscribed to the cooling system, but not to alert temperature. So the reactive pattern is still working and still monitoring the change in the temperature, it's just not notifying us when that happens, because the system is still in place, the reactive pattern is still in place. It also means if I go here and add some extra temperature changes, I'll put in four of them here and then say 25 degrees, 45 degrees and 25 degrees again. Save that and run the script again, we'll get a bunch of messages. It's 35 degrees system activated, it's 25 degrees system deactivated, it's 45 degrees, system activated, and so on, and so on and so on. This is why the reactive pattern is so popular, 'cause it makes it very easy to build out reactive systems and then extend them into whatever functionality you need without having to write a ton of extra code.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (3)
> **CLI Commands:** go run (1)
> **Cross-References:** previous chapter (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a Reactive shopping cart](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-reactive-shopping-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-reactive-shopping-cart?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-reactive-shopping-cart?u=76281980&t=5)** - [Instructor] The answer code for the shopping cart challenge contains the running tally array, which is currently empty. Then a framework for a reactive object, and finally a function here at the bottom called Tally cart. This is the information that grabs all the information about the current value of the cart and pushes it to the running tally array. To solve this challenge, we need to build out a shopping cart class with methods for adding and removing items and updating the totals of those items and then notifying tally cart anytime this happens so that we enter in the new tally for the cart. To start, let's create the shopping cart class. This class extends reactive object because we want it to be reactive and we're pulling in all the features of the reactive object. Then we set up an items array and properties for the total before tax. The GST, the PST and Sum total. These will be the values that are calculated out of the shopping cart, the actual GST and PST rates. The tax rates for British Columbia where I live are defined down here in the test code. Now that we have the basic class we can extend it with methods. The first method is add item. It receives an item, then pushes that item onto the items array for the current cart, updates total and updates the subscribers. Now update subscribers is the method you see up here in reactive object but we need to create this method ourselves. Update totals and pay attention here because it has a hashtag
>
> **[1:36](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-reactive-shopping-cart?u=76281980&t=96)** in front of it, that hash tells us that update totals is a private method. This is what it looks like. Update totals goes into the items array and reduces them down by adding them to one another and then populates that inside total before tax. Then it grabs this total before tax that we just assigned and multiplies it by the GST rate and places that in the GST property, does the same for the PST rate. And finally creates some total, which is a combination of the total before tax, the GST and the PST. But I said that this was a private method. So first of all, a private method inside a class is signified by putting a hash in front of it like you see here. What happens when you create a private method is this method can only be called from inside the class. If you go outside the class, like down here and you try to call this method, you'll get an error because the method is private to the class and we place private methods inside classes. Anytime we have something we want to happen inside the class but we want it to be confined to that class. For example, updating totals you should not be able to update the totals from outside the class because that would corrupt the data. Now, since this is a shopping cart we still need one more method and that is the method to remove items. Remove item works pretty much the same as add item except because we're working with an array. We have to figure out the index number of the item, and since in this example the items that go into the shopping cart don't have names we're just going to go by the index number.
>
> **[3:09](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-reactive-shopping-cart?u=76281980&t=189)** Now in a real shopping cart application you would have to extend this out probably by adding the name of the product. I would also probably use a set instead of an array so that we would have unique items and then maybe use the item ID somehow to find them. But for our purposes, we're going to use an index. So remove item receives an index number and since there is a chance that the index number doesn't point at anything we first need to make sure that the index actually returns an item, and if it doesn't we throw an error saying invalid index. If we do have an item at the index we use splice to pull out that item. Then we run update totals and then finally we run update subscribers again and that is the complete solution to this challenge. If I run test code you'll see we update the cart five times all the test passes, and here we see the total output of every time the cart changes. You can even test this yourself by going into the array here, changing the values adding more items, subtracting items, do whatever and you'll see those update over here in the test code. Now you'll notice that this challenge is very similar to the last one from the previous chapter. The difference here is that we're now actively using a reactive pattern, and we are calling it such. And as you can see both from this example and the previous one reactive patterns are enormously effective once you've set them up properly because the reactive component, the reactive object up here handles all the reactivity, and all we have to do is extend it and send information in and out of it. So this allows us to build up vastly complex
>
> **[4:44](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/solution-create-a-reactive-shopping-cart?u=76281980&t=284)** applications very quickly.

> [!info]- Semantic Content
>
> **Env Vars:** gst (5), pst (4)
> **Definitions:** is a  (4)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** previous chapter (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Advanced solution: Create a Reactive object](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-reactive-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-reactive-object?u=76281980&t=0)** - [Instructor] For this last challenge, you've been given free reign to use everything you've learned in this course to build your own plant tracking app. And by free reign, I mean I'm providing you with almost nothing to start with. So you have to build out the entire functionality yourself. The only thing you have to start is the test code where we have a plantArray that contains information about a series of plants, including their name, sowingDate, estimatedFruitingTime, and actualFruitingTime. And at the very bottom, the functionality to loop through each of the arrays, and try to first sow the plant, and then record the actual fruiting time. Now looking at this example, you'll see right away that it's a bit contrived because we are both providing the information for when the plant is sowed and then also when it fruits. And the idea here is that in the real world if you actually built out this app, you would have an input for when you sow it and then another input from when it fruits and you would put that in. But because we're in a testing environment, we have to provide both of those pieces of information at the same time. But the functionality of the app will work even if you have it outside in an interactive way. We're just firing it like this here because that's the only way we can test to make sure everything is working properly. All right, the goal of this app is to iterate through the plant's array and capture the sowing time, fruiting time, expected fruiting time, and difference between the two for each of the plants. To solve this challenge, we'll use a ReactiveObject, a PlantTracker class, and then subscribe to that PlantTracker class. The whole thing starts
>
> **[1:34](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-reactive-object?u=76281980&t=94)** by setting up a boilerplate ReactiveObject. The good news is the ReactiveObject is always the same, so you can just copy and paste it in to get started. Next, we create the PlantTracker class. This class extends ReactiveObject, and brings in everything using super, and then adds in a new array called plants. This is the array that will hold all the information about each of the plants. Now we need to add some methods to PlantTracker. The first method is sowPlant. This method receives the name, the sowingDate, and estimatedFruitingTime for the plant, and sets up a new plant object for each plant. So the first plant will have name, sowingDate, estimatedFruitingTime, actualFruitingTime, and the difference. And then the next plant will have the same information. Once the plant object is created, we push it to the plant's array that's defined inside the PlantTracker. And finally, run updateSubscribers, where we pass in plant, the new object, and the keyword sow. Meaning this is the sowPlant method. The updateSubscribers method is sitting up here in the ReactiveObject, and this is the method that passes on the information, so the plant and the keyword sow to whatever callback function we have. That callback function will be built a little later on. This app has two features. It tracks when we sow a plant and when that plant fruits. So we need a second method for when the plant fruits. That method is called recordActualFruitingTime, and it receives the plantIndex,
>
> **[3:07](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-reactive-object?u=76281980&t=187)** and the actualFruitingTime. Here's how this method works. First, we grab the plant from the plant's array using its index. Then we assign the actualFruitingTime to that plant. Then we turn the sowingDate into a Date object, so that we can work with it using Date methods. Then we use that Date object and adds on the estimatedFruitingTime to it, so we can calculate what would be the estimatedFruitingDate for this plant. And then finally, we calculate the difference between the actualFruitingTime and the estimatedFruitingDate. This information gets stored in the difference property of the plant, and now the plant is fully built out with information for all of its properties. Finally, we use updateSubscribers again to send off the entire plant object with all its new information and the keyword fruit. This separation by the way is done so that if you want to build out this example with timers and triggers or an interface, you can subscribe the actual fruiting time separately from the objects and the original plant array. All right, now that we have the PlantTracker class in place, we can create a new instance of it. So we'll say const plantTracker equals new PlantTracker.
>
> **[4:24](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/advanced-solution-create-a-reactive-object?u=76281980&t=264)** With this new instance created, we can now create a callback function that will be triggered anytime there's an update to the plant. That callback function looks like this. plantTracker.subscribe. Then we pass in plant an action. And if the action is sow, we output New plant, and then if the action is fruit, we output Fruited plant, and then we output the plant information followed by nothing, just so we get a break in the line. That is it. That is the totality of the solution to this challenge. And if I now a click test code, you should see all the plants being output here. We see the new plant for tomato and then the fruited plant for tomato. And the difference in fruiting time was eight days. Same thing with cucumber. This is the new plant. The fruiting time difference here was 41 days and so on. I also think there's one. Yeah, this one was six days early. So everything is working. All the tests pass and we are good to go.

> [!info]- Semantic Content
>
> **Code Identifiers:** actualfruitingtime (5), sowingdate (4), estimatedfruitingtime (4), updatesubscribers (3), sowplant (2)
> **CLI Commands:** make (1)
> **Exercise Files:** boilerplate (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Wrapping up](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/wrapping-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-five-advanced-challenges-and-concepts/wrapping-up?u=76281980&t=0)** - And just like that, Our time together in this course is over and you can release some of that tension I'm sure you've built up trying to solve these challenges. Even if you didn't solve some or even all of them, I congratulate you on finishing this course because the challenges were not made to be easy. They were deliberately designed to challenge you and push you to expand your understanding of [JavaScript](../../Skills/Software%20Development/JavaScript.md) and what it can do. Finishing this course, you walk away with new foundational knowledge of five advanced aspects of JavaScript that you can take with you and use in your own projects and practice. Now that you're done, I encourage you to go check out the solutions folder in the [GitHub](../../Skills/Software%20Development/GitHub.md) repository and explore the standalone solutions to each of these challenges. This code is free and open to you to use, expand on and create your own things. Now, all that's left for me to say is look [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md), go forth and build amazing things with your JavaScript skills and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) (1)
> **Env Vars:** itil (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Analogies:** just like (1)
> **Speakers:** - and (1)


## Instructor

- [Morten Rand-Hendriksen](../../Instructors/Web%20Development/Morten%20Rand-Hendriksen.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advance-your-skills-with-javascript-4452106/codespaces)

## Skills Covered

- JavaScript

## Path Context

### In [Explore a Career as a JavaScript Developer](../../Paths/Software%20Development/Learning%20Paths/Explore%20a%20Career%20as%20a%20JavaScript%20Developer.md)
← [JavaScript Essential Training](JavaScript%20Essential%20Training.md) | **4 of 5** | [JavaScript Practice- Object-Oriented Programming](JavaScript%20Practice-%20Object-Oriented%20Programming.md) →

## Appears In

- [Explore a Career as a JavaScript Developer](../../Paths/Software%20Development/Learning%20Paths/Explore%20a%20Career%20as%20a%20JavaScript%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)