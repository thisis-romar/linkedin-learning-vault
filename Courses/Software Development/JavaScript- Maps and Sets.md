---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-maps-and-sets
url: "https://www.linkedin.com/learning/javascript-maps-and-sets"
duration_minutes: 70
duration: 1h 10m
level: Intermediate
updated: 3/7/2025
learners: 9880
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGGYpT_Je55Fw/learning-public-crop_675_1200/B4DZVN0co5HAAY-/0/1740767350005?e=2147483647&amp;v=beta&amp;t=iitExLdnQbMxEXHpK0_WOHQBRUKsSEcCYSH3p-vyemk"
linkedin_topic: Software Development
learning_paths:
  - '[[Improve Your JavaScript Language Skills]]'
prev_courses:
  - '[[JavaScript- Arrays]]'
next_courses:
  - '[[JavaScript- Patterns]]'
path_nav: '[{"path":"Improve Your JavaScript Language Skills","position":6,"total":8,"prev":"JavaScript- Arrays","next":"JavaScript- Patterns"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Maps%20and%20Sets.md)

![JavaScript: Maps and Sets](https://media.licdn.com/dms/image/v2/D4D0DAQGGYpT_Je55Fw/learning-public-crop_675_1200/B4DZVN0co5HAAY-/0/1740767350005?e=2147483647&amp;v=beta&amp;t=iitExLdnQbMxEXHpK0_WOHQBRUKsSEcCYSH3p-vyemk)

# JavaScript: Maps and Sets

> Programming languages are always evolving and changing, and JavaScript is no exception. Over time, JavaScript has grown, and many new aspects have been added, including maps and sets. JavaScript maps and sets may sound simple, but they aren't quite the same as their counterparts in other programming languages. In this course, software engineer Jamie Pittman covers the ins and outs of JavaScript ma

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets) | 1h 10m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Maps]]** (12 videos)
- **[[#2. WeakMaps]]** (2 videos)
- **[[#3. Sets]]** (10 videos)
- **[[#4. WeakSets]]** (2 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Get to know JavaScript maps and sets
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980&t=0)** - [Jamie] One of the beautiful things about programming is how it is constantly evolving.
>
> **[0:05](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980&t=5)** JavaScript is no exception.
>
> **[0:07](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980&t=7)** Over time, JavaScript has grown and many aspects have been added including maps and sets.
>
> **[0:13](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980&t=13)** This course was created to help you step up your JavaScript skills and learn the ins and outs of maps and sets.
>
> **[0:20](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980&t=20)** Hi, I'm Jamie Pittman and I'm a front end software engineer.
>
> **[0:24](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980&t=24)** Join me and let's learn more about JavaScript maps and sets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [jamie] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=0)** - [Instructor] This course provides a beginner to intermediate level overview of JavaScript maps and sets.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=6)** You absolutely do not need to be an expert or senior level developer, but this course does require a basic understanding of JavaScript.
>
> **[0:15](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=15)** Advanced knowledge is not required for this course.
>
> **[0:19](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=19)** If you're just starting out, this will be a great way to further your knowledge of JavaScript, specifically with maps and sets.
>
> **[0:25](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=25)** If you have a few years of development experience under your belt, this will help you sharpen your skills.
>
> **[0:32](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=32)** You should be comfortable using and understanding arrays, objects and functions.
>
> **[0:37](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=37)** Additionally, you should be familiar with how to use your favorite text editor and your terminal.
>
> **[0:43](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=43)** For this course, I'll be using VS Code and it's built-in terminal.
>
> **[0:48](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=48)** Please use whatever text editor and terminal that you feel most comfortable using.
>
> **[0:53](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=53)** It does not have to be VS Code.
>
> **[0:57](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=57)** In order to run the code, we will be writing.
>
> **[0:59](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=59)** You will need to install Node on your machine if it is not already.
>
> **[1:04](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=64)** For more information on how to get set up with Node JS, please go to [nodejs.org/en/download](https://nodejs.org/en/download).
>
> **[1:14](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=74)** We will be using Node to run our exercise files and see maps and sets at work.
>
> **[1:21](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=81)** In order to run the files in Node, you'll need to navigate to the directory that the files are stored in and then type node, the name of the file.
>
> **[1:29](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=89)** Make sure the file extension JavaScript, or JS, for all of these is included when you type in the file name.
>
> **[1:37](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=97)** That's all you'll need for this course.
>
> **[1:39](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=99)** Now let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), make (1)
> **Tools:** terminal (3), vs code (2)
> **Prerequisites:** you'll need (2), install (1), set up (1)
> **Code Keywords:** require (1), let (1)
> **UI Navigation:** go to (1), navigate to (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. Maps

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The Map object defined
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=0)** - [Instructor] Maps are an object type that was fairly recently introduced into JavaScript with ES2015.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=6)** Object and Map are very similar, but they also have some key differences.
>
> **[0:11](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=11)** Let's take a look at some of the ways that they're alike, and different to help you have a better understanding of how Map might fit into your code.
>
> **[0:19](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=19)** Similar to Object, a Map contains key-value pairs.
>
> **[0:23](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=23)** You can set the key-value pairs, get them, delete them, and check to see if a value is associated with a specific key.
>
> **[0:31](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=31)** The Map object has slight differences that can make them extremely powerful and useful.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=38)** Unlike an Object, a Map does not contain default keys.
>
> **[0:42](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=42)** You have to set the keys in your Map.
>
> **[0:44](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=44)** Additionally, a Map's keys are not limited to just a string or a symbol, they can be any value.
>
> **[0:51](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=51)** Map also has a size property that allows you to easily determine the number of items your Map contains.
>
> **[0:58](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=58)** One other important thing to keep in mind about Maps, is that you can not have duplicate keys in your key-value pairs.
>
> **[1:06](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=66)** When you're ready to start using Map, you will use the constructor new Map to create a new Map object.
>
> **[1:13](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=73)** Now that you have an idea of what makes Maps special, let's discuss how to create one and start utilizing the various methods and properties available on the Map object.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1)
> **CLI Commands:** make (1)
> **Env Vars:** es2015 (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Build your Map object with the set method
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=0)** - [Instructor] As mentioned in the previous lesson, a map does not contain keys by default.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=6)** In this lesson, we're going to discuss how to properly store data in a map using the method set.
>
> **[0:12](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=12)** The set method is what you will use to create key value pairs in your map.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=17)** The syntax is straightforward, mapObject.set(key, value).
>
> **[0:22](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=22)** Unlike a regular object, our key can be anything, which is a pretty powerful thing.
>
> **[0:27](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=27)** Let's work through an example.
>
> **[0:30](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=30)** I have some emojis that I want to associate with different meals throughout my day.
>
> **[0:35](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=35)** The apple represents breakfast, a slice of pizza for lunch, a hamburger for dinner, and a cookie represents dessert.
>
> **[0:44](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=44)** How might we construct a map using this information?
>
> **[0:49](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=49)** First, we decide that the emojis are going to be our keys since we can use anything as our key, then whatever meal the emoji is associated with will be the value.
>
> **[0:59](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=59)** To start building the map, we will need to use set to add the key value pairs.
>
> **[1:06](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=66)** We will create a new variable named meals and set that equal to new Map.
>
> **[1:11](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=71)** From here, we will then set each individual key value pair.
>
> **[1:16](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=76)** First, meals.set with apple as the key and breakfast as the value, meals.set with pizza as the key and lunch as the value, meals.set with the hamburger as the key and dinner as the value, and then meals.set with the cookie emoji as the key and dessert as the value.
>
> **[1:39](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=99)** And there you have it, we have a map with our emojis and associated meals.
>
> **[1:44](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=104)** Now let's go to the code and try another example together.
>
> **[1:49](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=109)** Before we get started, I want to point out that I'm running my terminal within VS Code.
>
> **[1:54](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=114)** I'll be running the code in the terminal so you can see what is being logged out for each exercise.
>
> **[1:59](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=119)** In order to emulate what I'm doing, you'll need to make sure that you navigate to the folder or directory where your file is stored and you can type node and your filename and you'll be able to see everything that we're logging out within each exercise file.
>
> **[2:14](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=134)** So here I have a list of things to do this Saturday.
>
> **[2:18](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=138)** At 8 a.m., I will walk my dogs.
>
> **[2:21](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=141)** At 12 p.m., I will have lunch.
>
> **[2:23](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=143)** And at 3 p.m., I will watch a movie.
>
> **[2:26](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=146)** How can I take this to-do list and make it into a map?
>
> **[2:31](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=151)** There are a couple of ways that you can set your map up, but first and foremost, we need to create a new variable that we will call Saturday and we will initialize a new map.
>
> **[2:45](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=165)** Great.
>
> **[2:46](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=166)** Next, we need to take each of the items on the to-do list and set them in the map.
>
> **[2:51](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=171)** Remember, your key can be anything, a string, number, even a function.
>
> **[2:57](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=177)** You just can't have it duplicated.
>
> **[2:59](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=179)** For this example, I am going to use the number value that corresponds to the activity times since we only have three items.
>
> **[3:08](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=188)** If we had things to do at 8 a.m. and 8 p.m.
>
> **[3:11](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=191)** on this list for example, we would probably choose to use the strings eight a.m. eight p.m.
>
> **[3:18](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=198)** instead of using the number 8.
>
> **[3:21](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=201)** But for this example, I am going to use numbers.
>
> **[3:24](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=204)** All right, so now we have our new map set up and now I'm going to set each of our key value pairs within our Saturday map.
>
> **[3:31](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=211)** So I will take our Saturday variable, apply the set method, and then our first key is 8 and the value is walk the dogs.
>
> **[3:43](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=223)** All right, and then we'll do this for each of the other items in the to-do list.
>
> **[3:47](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=227)** So Saturday, apply that set method, the number 12, and then the value lunch.
>
> **[3:55](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=235)** And then Saturday, apply set, the number 3, and then the value watch a movie.
>
> **[4:03](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=243)** Cool. All right, so we have that set up.
>
> **[4:06](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=246)** Let's log our new map in the console and see what that looks like.
>
> **[4:21](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=261)** All right, so if we look at our console, we see map three, so three representing the number of key value pairs that we have, and you can see each of our items is there.
>
> **[4:33](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=273)** We have our key value pair, 8, walk the dogs, 12 and lunch, 3 and watch a movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default. (1), function (1)
> **CLI Commands:** make (2), node (1)
> **Tools:** terminal (2), vs code (1)
> **Prerequisites:** set up (2), you'll need (1)
> **UI Navigation:** go to (1), navigate to (1)
> **Code Identifiers:** mapobject (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)

#### Access a value with get
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=0)** - [Instructor] In our previous lesson, we learned how to construct a map using the method set.
>
> **[0:05](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=5)** In this lesson, we're going to discuss how to retrieve values from our map using the get method.
>
> **[0:11](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=11)** One of the really helpful things about the methods associated with map is that they're all very straightforward.
>
> **[0:18](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=18)** Here we have the syntax forget map object dot get passing in the key.
>
> **[0:23](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=23)** We retrieve the value from our key value pair by passing in a key as an argument to our get method.
>
> **[0:30](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=30)** If the key exists, the value associated with that key is returned.
>
> **[0:34](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=34)** If the key does not exist in the map, undefined is returned.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=38)** Let's return to our previous meals example and use the get method.
>
> **[0:43](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=43)** At this point, we've already built our map using set.
>
> **[0:46](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=46)** And we want to get a value based on a specific key.
>
> **[0:50](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=50)** We know that get will return a value.
>
> **[0:53](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=53)** So let's go ahead and set that to a new variable that we will call cookie.
>
> **[0:58](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=58)** Then I'll apply get to my existing meals map.
>
> **[1:02](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=62)** Because the cookie emoji exists as a key in my map, it will return the value dessert.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=68)** Now, I'm going to create a new variable named doughnut and try to get the value associated with the doughnut emoji.
>
> **[1:14](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=74)** Unfortunately, there is no key that matches the doughnut in our map, and undefined is return.
>
> **[1:21](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=81)** Now let's go to the code and try another example using get together.
>
> **[1:27](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=87)** We are going to continue to build on our to-do list example.
>
> **[1:30](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=90)** And since the utilization of our map is dependent on the key value pairs being set, you'll see this block from our very first example in each of these exercise files.
>
> **[1:41](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=101)** Just to ensure that we have our map ready to go and we don't have to continue to set it every single time with each new method that we're learning.
>
> **[1:49](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=109)** So the first key that we're going to get is 12.
>
> **[1:52](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=112)** We're going to get the value associated with the key 12 from our Saturday map.
>
> **[1:57](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=117)** So the first thing that we'll do is create a new variable and we'll call this noon.
>
> **[2:03](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=123)** Then we'll set noon equal to our Saturday map with the get method applied, passing in 12, which is our key.
>
> **[2:13](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=133)** All right.
>
> **[2:14](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=134)** I'm going to log this out and then we'll run these at the end of this exercise.
>
> **[2:18](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=138)** All right.
>
> **[2:19](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=139)** So what am I doing at 12:00 p.m. on Saturday?
>
> **[2:26](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=146)** All right.
>
> **[2:27](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=147)** And then we'll pass in our variable that we just created.
>
> **[2:31](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=151)** All right.
>
> **[2:32](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=152)** For our next one, we're going to try to get the key nine from our map.
>
> **[2:36](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=156)** Now, here we have the map that we've constructed right in front of us.
>
> **[2:41](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=161)** And we can see that there is no nine.
>
> **[2:43](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=163)** But we're going to humor ourselves.
>
> **[2:45](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=165)** And we're still going to try to get that nine, just so we can see the value that's going to be passed back when a key does not exist in a map.
>
> **[2:53](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=173)** So we'll do basically the same thing that we just did in the previous task.
>
> **[2:58](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=178)** And we'll create a new variable that we'll call nine.
>
> **[3:00](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=180)** And we'll set that equal to our Saturday map, apply the get method, and then pass in the key nine.
>
> **[3:08](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=188)** So here, if I say, and I log out, what am I doing at nine on Saturday?
>
> **[3:18](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=198)** And then I pass in our nine variable.
>
> **[3:21](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=201)** When I go down to the terminal and log this out, we'll see that on Saturday at 12:00 p.m., we have lunch.
>
> **[3:32](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=212)** So we were able to get the value associated with our 12 key, and that is lunch.
>
> **[3:39](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=219)** But then when we tried to get the value associated with a key of nine, we see that undefined is returned, because nine is not a key that exists within our Saturday map.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (3), continue (2), return. (1)
> **Ports:** :00 (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Does the map have your key?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=0)** - [Instructor] The next Map method that we're going to discuss is the has method.
>
> **[0:04](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=4)** This method returns a Boolean value, true or false, if a value associated with the provided key exists.
>
> **[0:12](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=12)** The syntax as we have seen already is clear.
>
> **[0:15](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=15)** We apply the has method to a Map and pass the key of the value that we're looking for in the Map.
>
> **[0:21](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=21)** The Map methods has and get are very similar.
>
> **[0:24](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=24)** The key distinction is that get returns a value associated with the key and has returns a Boolean indicating whether or not a value is associated with the provided key.
>
> **[0:36](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=36)** Returning to our meals Map, we have a very similar example from the last lesson.
>
> **[0:41](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=41)** We have replaced get with has, and we see that now we're getting Boolean values.
>
> **[0:46](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=46)** Does our meals Map have a value associated with the key cookie emoji?
>
> **[0:51](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=51)** True.
>
> **[0:52](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=52)** Does our meals Map have a value associated with the key donut emoji?
>
> **[0:56](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=56)** False.
>
> **[0:58](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=58)** Let's go to the code and try an example together.
>
> **[1:02](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=62)** Keeping with our to-do list Map example, we want to determine if our Map has some specific values.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=68)** The first one that we're checking for is associated with the key, four.
>
> **[1:13](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=73)** First, we'll create a new value to store our value that'll be returned by the has method, and we'll call this has four.
>
> **[1:23](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=83)** Then we'll set this variable equal to our Saturday Map with the has method applied, and we're going to pass in four, which is the key that we're looking for.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=93)** So below here, I'm just going to console log out the return value that we get, so I'll say does our Map have four?
>
> **[1:44](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=104)** And then we'll log out the value.
>
> **[1:48](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=108)** All right, and we'll run this at the end.
>
> **[1:50](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=110)** So our second one here, does our Map have a value associated with eight?
>
> **[1:55](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=115)** So we're going to do the exact same thing.
>
> **[1:57](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=117)** We'll create a new variable and we'll call this one has eight, and we'll set it equal to our Saturday Map and apply the has method, and then here we'll pass in eight.
>
> **[2:09](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=129)** All right, and then we'll log this out.
>
> **[2:13](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=133)** We'll say, does our Map have eight?
>
> **[2:18](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=138)** All right, and remember, the value that you're passing to the has method is the key you're checking to see if it exists within the Map that you have created.
>
> **[2:29](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=149)** All right, so now we have that, and we'll run this.
>
> **[2:36](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=156)** All right, so does our Map have four?
>
> **[2:39](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=159)** So does our Map have a key four within it?
>
> **[2:44](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=164)** And we get the answer false.
>
> **[2:46](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=166)** So it does not have four.
>
> **[2:48](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=168)** Then does our Map have eight?
>
> **[2:50](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=170)** True, which we can see above.
>
> **[2:52](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=172)** We have a key value pair of eight in walk the dogs.
>
> **[2:56](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=176)** So has is really great just to simply check and see if a key exists within your Map.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (1), for. (1), this. (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Determine map size
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=0)** - [Instructor] Unlike objects, Map comes with a built-in property to determine the size of your map.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=6)** The size is the number of elements or key value pairs that are present in the map because it is a property you would simply apply size to your map without parentheses.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=17)** We'll only use those parentheses when we're accessing maps methods.
>
> **[0:21](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=21)** When we apply size to our map, a number will be returned indicating the number of key value pairs in our map.
>
> **[0:30](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=30)** In our meals example, we can see just how easy it is to apply size and get the count of each of our elements.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=38)** We know that this property is going to return a numerical value so we can set that to a variable and reuse it if we want.
>
> **[0:45](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=45)** Now let's head over to the code and work on using the size property with our to-do list.
>
> **[0:51](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=51)** First let's start by creating a new variable that we will call saturday size, const saturdaySize.
>
> **[1:01](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=61)** All right.
>
> **[1:02](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=62)** And then we're going to set this equal to our map saturday and then apply the size property.
>
> **[1:09](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=69)** And that's all we have to do in order to get the size.
>
> **[1:12](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=72)** So let's log this out so we can see this in action.
>
> **[1:16](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=76)** And we'll actually use a template literals here just for fun to mix it up.
>
> **[1:22](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=82)** And we'll say my map contains and then we'll pass in our variable here saturdaySize.
>
> **[1:31](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=91)** So hopefully this is something that you've learned before.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=93)** If not, it's a fun little trick template literals that you can use and will use all over the place in JavaScript.
>
> **[1:40](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=100)** And we'll say my map contains and we'll get our size, which is a number.
>
> **[1:45](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=105)** And then we'll say elements.
>
> **[1:47](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=107)** All right, so if I run this in the console we can see that my map contains three elements.
>
> **[1:56](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=116)** And of course we can double-check our work because we have it set here at the beginning of our exercise file, but really super handy property to use when you're working with map.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), const (1), pass (1), super (1)
> **Exercise Files:** template (2), exercise file (1)
> **Code Identifiers:** saturdaysize (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Remove key-value pairs with clear and delete
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=0)** - [Instructor] In this lesson, we're going to cover two map methods that remove key value pairs from your map, delete and clear.
>
> **[0:07](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=7)** The first method we will discuss is delete.
>
> **[0:10](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=10)** The delete method will remove a specified key value pair from your existing map.
>
> **[0:16](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=16)** Like many other methods, this is straightforward and you'll pass a key in order to execute the operation.
>
> **[0:24](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=24)** If the key value pair is successfully deleted it will return the Boolean value true.
>
> **[0:30](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=30)** If the key pass does not match any key value pairs in the map, it will return false.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=38)** Next, we have the clear method.
>
> **[0:40](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=40)** The clear method removes all elements or key value pairs from a map.
>
> **[0:46](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=46)** This method returns a value of undefined.
>
> **[0:49](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=49)** However, you could confirm that your map was successfully cleared by logging its size which we learned about that property in the previous lesson.
>
> **[1:00](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=60)** Looking at our meals example, we will first delete the dessert key because we have a cookie emoji as a key in our map, it will return true.
>
> **[1:09](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=69)** Next, we will try to delete the candy emoji key, and because it does not exist in our map, it will return a value of false.
>
> **[1:18](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=78)** And last but not least, we've decided we wanted to start all over and clear our map and start from scratch.
>
> **[1:25](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=85)** So we apply the clear method to our meals map.
>
> **[1:29](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=89)** When we check it size, we see it as now zero and successfully cleared.
>
> **[1:34](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=94)** So now that you've learned about delete and clear let's try some examples in our code.
>
> **[1:41](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=101)** As we've done in previous exercises, we're going to stay with our same Saturday map object and delete and clear some keys.
>
> **[1:49](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=109)** First, we're going to delete the key value pair with a key of three, for these delete examples, I'm just going to wrap them in a console log.
>
> **[1:58](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=118)** So here I'll start with console log and I'm going to pose the question, did my key value pair successfully delete?
>
> **[2:16](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=136)** And then I'll just put three here.
>
> **[2:17](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=137)** So then what we're going to log out is we're going to take our Saturday map, we're going to apply the delete method and since we want to delete the key value pair associated with three, we'll just pass in a three.
>
> **[2:33](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=153)** All right, so all I'm going to do for the second example here, our second task, we want to delete the element associated with the key 10.
>
> **[2:42](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=162)** So I'm just going to simply copy and paste, and then I'm going to replace my three with a 10.
>
> **[2:52](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=172)** All right, now I'm going to go ahead and log these out simply because we're going to clear in the next task and I just want you to be able to see these logged out.
>
> **[3:05](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=185)** All right, so for our first one, did my key value pair of successfully delete three?
>
> **[3:10](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=190)** And it returned true because three was successfully deleted, this means it existed within our map and it was successfully deleted.
>
> **[3:21](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=201)** For the second one we asked did it successfully delete 10?
>
> **[3:26](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=206)** And it returned the value false because 10 did not exist within our map.
>
> **[3:32](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=212)** So for our third task we want to clear the entire Saturday map object.
>
> **[3:37](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=217)** So here we need to just apply the clear method to our Saturday map, so we'll take Saturday and apply clear.
>
> **[3:47](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=227)** And that's really all you have to do in order to clear out the map completely.
>
> **[3:51](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=231)** Let's verify that it was clear, so here all console log the size remember we talked about that in the last lesson, so I'll just put here a message map size and then we'll pass in Saturday dot size, okay, so we're applying that size property to see and we can see that after we cleared that our map size is now zero so we successfully deleted and cleared key value pairs from our map.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (15), pass (4), let (2)
> **Cross-References:** in the next (1), we talked about (1), in the last (1)
> **Speakers:** - [instructor] (1)

#### Map: Keys and values methods
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=0)** - [Instructor] Before we discuss our next two methods, keys and values, we're going to quickly review what an iterator is and how it relates to our Map.
>
> **[0:09](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=9)** In JavaScript, we iterate over collections frequently using array methods like Map or for each.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=17)** An iterator is defined by the MDN documentation as an object which defines a sequence, and potentially returns a value upon its termination.
>
> **[0:26](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=26)** The next method is applied to the iterator and it has two properties, value and done.
>
> **[0:33](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=33)** With our Map, some of its methods return iterators which allow us to cycle through keys and values in the order that they were inserted within our Map.
>
> **[0:43](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=43)** Let's start with the keys method.
>
> **[0:45](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=45)** It returns an iterator object that allows us to cycle through all of the keys found in our Map.
>
> **[0:52](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=52)** It's likely that you would utilize this method by creating a new variable and setting it equal to your Map and then apply the keys method.
>
> **[1:01](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=61)** Then, when you wanted to iterate over the keys, you would apply the next method to your keys variable and access its value.
>
> **[1:09](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=69)** Depending on which key you're interested in, you'd continue to apply the next method until you're ready to access the value.
>
> **[1:17](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=77)** Now let's look at the values method.
>
> **[1:20](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=80)** This returns an iterator object with all of Maps values in their insertion order.
>
> **[1:26](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=86)** The syntax is identical to the keys method and it is also returning an iterator.
>
> **[1:32](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=92)** Just like we did with the keys, we can create a variable to store the iterator and then apply the next method to that variable.
>
> **[1:40](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=100)** When we want the value, we can get that value of the iterator with the next method applied.
>
> **[1:47](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=107)** Referencing our meals example, let's utilize the keys and values methods.
>
> **[1:52](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=112)** You'll see, we created a variable called meal keys and set it to our meals Map object with the keys method applied.
>
> **[2:00](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=120)** Then we created a new variable for the first key and set it equal to the meals key with the next method applied and then grabbed its value.
>
> **[2:10](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=130)** We see that it returns an apple emoji, which is the first key within our meals Map.
>
> **[2:18](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=138)** Then for values, we do almost the exact same thing, except we apply the values method.
>
> **[2:24](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=144)** We see that we get the breakfast string, our first value in our Map.
>
> **[2:29](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=149)** Now let's try an example on our own.
>
> **[2:33](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=153)** Our first task is to figure out the first key in our Saturday Map object.
>
> **[2:39](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=159)** Let's create a new variable that we'll call Saturday keys.
>
> **[2:46](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=166)** We're going to set this equal to our Saturday Map object and apply the method keys.
>
> **[2:53](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=173)** We're interested in the first key, so let's create another variable and we'll call this first key.
>
> **[3:00](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=180)** Then we'll set this equal to our Saturday keys iterator that we just created above, and we will apply the next method, and then value.
>
> **[3:12](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=192)** So if we log this out, we can say the first key in our Saturday Map is, and then log out that first key.
>
> **[3:28](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=208)** All right, so we'll run this at the end.
>
> **[3:32](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=212)** For our second task, we want to determine the second value in our Saturday Map object.
>
> **[3:38](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=218)** We'll start by doing almost exactly what we did in the previous task, except instead of keys, we will apply the values method.
>
> **[3:46](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=226)** So create a new variable, and I'll call this Saturday values and I'll set it equal to our Saturday Map with values applied.
>
> **[3:58](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=238)** So here we're going to get our second value, so we can go ahead and take the variable that we just created, Saturday values, apply next.
>
> **[4:09](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=249)** All right, so this will give us the first value within our Map.
>
> **[4:14](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=254)** We're interested in the second value, so right below this, we're going to create a new variable called second value, and we're going to take our Saturday values variable again, apply next, and then value because we're interested in this second value.
>
> **[4:35](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=275)** So we log this out, and we'll say the second value in our Saturday Map is,
>
> **[4:46](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=286)** and then log out second value.
>
> **[4:50](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=290)** All right, so then when we run this in the console, we see that the first key in our Saturday Map is eight, which we can double-check that just by looking at the Map that we created above, we see eight is our first.
>
> **[5:08](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=308)** So we know that this is returning keys and values in their insertion order, so hopefully you can kind of see how these things are matching up.
>
> **[5:17](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=317)** And for our second task, we see that the second value in our Saturday Map is lunch.
>
> **[5:24](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=324)** And this matches directly with what we know that we created with our Saturday Map because this is going in insertion order.
>
> **[5:33](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=333)** The second key value pair is 12 in lunch, and since we got the value, we know that lunch matches up with the second value that is in our Saturday Map.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), continue (1), this, (1)
> **Env Vars:** mdn (1)
> **Documentation:** mdn (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Map contents with the entries method
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=0)** - [Instructor] The entries method for Map works in a similar fashion to the keys and values methods that we just discussed.
>
> **[0:07](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=7)** It also returns an Iterator and as you might expect it returns key-value pairs in an array.
>
> **[0:15](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=15)** The syntax is also the same even down to applying the next method and accessing the value.
>
> **[0:21](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=21)** Since this should be pretty familiar to you at this point, let's go ahead and look at our meals Map example.
>
> **[0:28](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=28)** We first create a variable meal entries and set that equal to our meals Map with the entries method applied.
>
> **[0:36](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=36)** To grab the first entry, we apply next and then grab the value.
>
> **[0:41](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=41)** We can see here that this returns an array with our apple key and breakfast value.
>
> **[0:48](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=48)** Now let's head to the code and try an example together.
>
> **[0:53](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=53)** For this task, we want to determine the third set of entries in your Saturday Map.
>
> **[0:58](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=58)** Let's start recreating a new variable that we'll call saturdayEntries.
>
> **[1:07](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=67)** We set this equal to our Saturday Map with the entries method applied.
>
> **[1:13](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=73)** We want to get the third entry so we need to iterate over the entries Iterator three times.
>
> **[1:20](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=80)** We'll take our saturdayEntries variable and apply the next method.
>
> **[1:27](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=87)** So this will give us our first entry.
>
> **[1:30](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=90)** Then, to get our second entry, we do the exact same thing, apply next, so that's entry number two.
>
> **[1:37](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=97)** Now, we want to get the third entry, we're going to set this to a variable and log it out and we'll call this third entry, very creative, all right?
>
> **[1:48](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=108)** And then we'll set this equal to saturdayEntries.next, we'll apply this method and then we want to get the value here, all right?
>
> **[1:57](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=117)** So this will give us our third entry.
>
> **[1:59](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=119)** If we log this out, what is our third entry in our map?
>
> **[2:07](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=127)** All right, if we log this out, we'll go down here to the console and run this and we see that our third entry is a key of three with a value of, watch a movie and this is returned in an array.
>
> **[2:24](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=144)** And we see if we look up above our Map that we set, yes, in fact, three matches.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Code Identifiers:** saturdayentries (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Loop over a map with forEach
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=0)** - [Instructor] The last method that we will discuss is ForEach.
>
> **[0:03](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=3)** This method should look pretty familiar to you as it is also a JavaScript array method and it operates in the same manner.
>
> **[0:12](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=12)** The ForEach method executes a function for each key value pair in the map.
>
> **[0:18](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=18)** The ForEach method accepts four optional parameters.
>
> **[0:21](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=21)** For the sake of this course, I'm only going to focus on three of them: value, key, and map.
>
> **[0:27](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=27)** Each of these parameters are pretty explicit as to what they represent.
>
> **[0:31](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=31)** Value is the value of each iteration.
>
> **[0:34](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=34)** Key is the key of each iteration, and map is the map being iterated over.
>
> **[0:39](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=39)** Let's go to our meals map one last time and see how we can use this ForEach method.
>
> **[0:44](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=44)** In this example, we are just going to focus on using the parameters value and key.
>
> **[0:49](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=49)** We take our meals map and apply ForEach, passing in value and key as parameters.
>
> **[0:56](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=56)** Each time it iterates, we will log out I am having a key for value.
>
> **[1:02](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=62)** Pretty cool, right?
>
> **[1:04](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=64)** So here we see it returns, I am having an apple for breakfast.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=68)** I am having a slice of pizza for lunch.
>
> **[1:11](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=71)** I'm having a hamburger for dinner.
>
> **[1:13](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=73)** I'm having a cookie for dessert.
>
> **[1:15](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=75)** Now let's go to the code and use ForEach.
>
> **[1:19](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=79)** All right, our last example using our Saturday map.
>
> **[1:23](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=83)** For this task, we want to log out a value if the key is equal to 12.
>
> **[1:29](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=89)** First, we will start by taking our Saturday variable, our Saturday map that is, and applying ForEach.
>
> **[1:39](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=99)** We're going to pass the parameters value and key.
>
> **[1:44](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=104)** All right and then we'll set our function up.
>
> **[1:48](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=108)** And if our key is equal to 12, so if key equals 12, then we're going to log out, actually I'm going to use a template literal here, It's time for, and then we'll put in our value here.
>
> **[2:10](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=130)** Okay, so now if we run this, we'll see that It's time for lunch is logged out.
>
> **[2:19](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=139)** So using ForEach with our map, we looped over it and we used the value and the key and then we set up an if statement, so if the key was equal to 12, then we logged out the value that was associated with that key.
>
> **[2:36](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=156)** Great work.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2), pass (1), for, (1), this, (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** template (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Group entries with groupBy
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=0)** - [Instructor] The groupBy method is a static map method that organizes elements of an iterable into groups based on values returned by a specific callback function.
>
> **[0:12](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=12)** This is a really great enhancement for the map object and those of you that have been around JavaScript for a bit, you've probably seen something similar in libraries like Lodash and the Object Constructor also now utilizes groupBy as well.
>
> **[0:29](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=29)** So it's a really wonderful and powerful method that can help you organize your data the way that you need it.
>
> **[0:36](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=36)** And I'll show you an example of one particular way that you could potentially use groupBy in your own development.
>
> **[0:43](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=43)** In this example, we have an array called inventory.
>
> **[0:48](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=48)** In our inventory, we have effectively baking supplies.
>
> **[0:52](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=52)** And let's say I own a bakery and I want to determine a very quick and easy way to know what things that I need to order.
>
> **[1:03](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=63)** Usually for me and my bakery, if anything gets below a quantity of six, perhaps that's the time for me to restock.
>
> **[1:14](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=74)** So if we think about how we would structure this code, we start by instantiating our map and setting that to the variable name result.
>
> **[1:24](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=84)** Then we'll apply the groupBy method and pass it the inventory.
>
> **[1:27](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=87)** So the inventory was our array that had our flour, our bananas, et cetera.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=93)** The second argument is quantity.
>
> **[1:36](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=96)** So we're going to pass the quantity and that is what we want to look at per se, that is the value within the object that we're going to base our keys off of, how we're going to actually group the elements of the array.
>
> **[1:56](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=116)** So then we're going to have this function implicitly return, and based on the quantity, we're either going to return that item as a restock or sufficient.
>
> **[2:11](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=131)** So if quantity is less than six, then that particular item will be set in the map with a key of restock.
>
> **[2:19](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=139)** Otherwise, it will get the key of sufficient.
>
> **[2:23](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=143)** So we would iterate over that inventory and it would set our map up appropriately.
>
> **[2:29](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=149)** And then we're going to call back to the get method.
>
> **[2:33](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=153)** So we talked about the get method and that is when we can pass a key and it will return all of the values associated with that key.
>
> **[2:43](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=163)** So if we logged out result.get restock, we should only have one item returned, which is an array of our bananas because it had a quantity of five, so it was less than the six.
>
> **[2:57](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=177)** All of the other items in the array were given the key of sufficient.
>
> **[3:01](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=181)** So you can see how this can be really powerful in maybe splitting up an array and displaying some things or not, or there's a lot of really interesting things that you can do with this, and it's a really powerful method when it comes to using maps.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), function (2), static (1), let (1), return, (1)
> **Code Identifiers:** groupby (4)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### Solution: Maps 1
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=0)** - [Instructor] Welcome to your first CoderPad challenge for maps.
>
> **[0:09](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=9)** For this particular challenge, we're going to set up a map and then we're going to determine the map size.
>
> **[0:16](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=16)** So below in our test code, you can see that we already have a new map of fruit inventory set up for us.
>
> **[0:23](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=23)** So now we just need to add individual items to that map.
>
> **[0:27](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=27)** And then we're going to return the size of a map to test our solution.
>
> **[0:33](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=33)** So the first thing that I'll do is start with our fruit inventory and then we're going to use the map method set to add each item in the inventory.
>
> **[0:45](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=45)** So our first value here is going to be the key, which will be apples, and then the value of 10.
>
> **[0:54](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=54)** So we'll just go right down the line with each of these items and add it to our map.
>
> **[0:59](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=59)** So oranges 15 value, and then bananas right after.
>
> **[1:10](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=70)** And that has a value of 20.
>
> **[1:13](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=73)** Excellent.
>
> **[1:13](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=73)** So we have all our items added to the map.
>
> **[1:16](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=76)** Now we need to determine the size.
>
> **[1:19](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=79)** So we're going to use the size property to do so.
>
> **[1:23](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=83)** So fruit inventory, spell that correctly, dot size, but it's important here and this will be the case with all of our challenges to make sure that we return the value that we want to check against the solution 'cause that will be the only way to do so.
>
> **[1:40](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=100)** If we try to return this now, you'll see that our code returns undefined.
>
> **[1:46](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=106)** So it's really important that we put our return statement here in front of the value that we want to test.
>
> **[1:52](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=112)** So let's run it again and check and excellent.
>
> **[1:55](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=115)** You can see that our code return three, which is the correct answer.
>
> **[1:59](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=119)** Great work.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Maps 2
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=5)** - [Instructor] In this next challenge, we want to determine if a map has the key of Brandon.
>
> **[0:12](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=12)** So if we look in our test code, we can see that the map has actually been set up for us.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=17)** So that step has been removed.
>
> **[0:19](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=19)** We just need to see at this point, does that map contain a specific key?
>
> **[0:24](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=24)** So let's go ahead and write out our return statement.
>
> **[0:28](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=28)** And then we need to reference the allUsers map.
>
> **[0:30](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=30)** And we're going to be using the method has to determine if that key exists.
>
> **[0:36](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=36)** And the key that we're looking for is Brandon.
>
> **[0:40](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=40)** I'll mention this in several different videos and lessons, but when it comes to strings in JavaScript, it's really important that the case matches.
>
> **[0:51](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=51)** So it's going to be looking for an exact match for Brandon.
>
> **[0:56](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=56)** If we were looking for Alice, if we passed a lowercase A instead of capital A, it would return false for us.
>
> **[1:05](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=65)** So it's really important to make sure that the casing matches.
>
> **[1:10](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=70)** So here we have, we're returning allUsers, which is our map, and we're checking to see, does it have the key, Brandon?
>
> **[1:18](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=78)** So let's go ahead and run that test code.
>
> **[1:23](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=83)** And we can see that, false, it does not have the key of Brandon.
>
> **[1:30](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=90)** Marvelous work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Code Identifiers:** allusers (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)


### 2. WeakMaps

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is the WeakMap object?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=0)** - [Instructor] Now that we have learned about Map, how it works and its various methods, understanding the concept of WeakMaps should be fairly easy.
>
> **[0:09](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=9)** WeakMaps are very similar to Maps with the biggest difference being that its keys are weak and can be garbage collected.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=17)** What is garbage collection?
>
> **[0:19](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=19)** As far as what you need to know for this course, garbage collection is a way of freeing up memory that has been allocated to objects that are no longer in use.
>
> **[0:28](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=28)** The process of garbage collection is performed automatically in JavaScript.
>
> **[0:33](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=33)** Now let's explore what sets WeakMap apart from Map.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=38)** As mentioned, the most significant difference between WeakMap and Map is related to keys.
>
> **[0:44](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=44)** When using a WeakMap, your keys must be objects.
>
> **[0:47](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=47)** If you'll recall from the previous section, Map accepts any value as a key.
>
> **[0:53](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=53)** With WeakMaps you cannot use primitive data types as keys.
>
> **[0:57](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=57)** As a quick reminder, primitive data types include strings, numbers, booleans and more.
>
> **[1:03](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=63)** Another major difference is the available methods on the WeakMap.
>
> **[1:07](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=67)** The only methods that are available on a WeakMap are: set, get, has and delete.
>
> **[1:14](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=74)** Because there are no iterator methods, in order to know if a key exists in your WeakMap, you'll have to know what the key is to access the value.
>
> **[1:24](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=84)** When you're ready to start using WeakMap, you'll use the constructor new WeakMap to create a new WeakMap.
>
> **[1:32](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=92)** Now that we have the foundations, let's review the methods that you'll be able to utilize with WeakMap.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Same methods, different map
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=0)** - [Instructor] As we briefly touched on in our last lesson WeakMap has four methods that we can utilize when working with them in our code.
>
> **[0:08](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=8)** These four methods are set, get, has and delete.
>
> **[0:13](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=13)** These methods work in the exact same manner that they did with map.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=17)** In this lesson, we're going to review how these methods work before diving into a challenge in the next video.
>
> **[0:24](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=24)** The first method we will review is set.
>
> **[0:27](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=27)** Just like map you'll use set to build your WeakMap.
>
> **[0:31](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=31)** Remember your key cannot be a primitive value and it must be an object.
>
> **[0:37](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=37)** The next method is get.
>
> **[0:39](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=39)** We use get to retrieve the value associated with the specific key that we pass.
>
> **[0:44](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=44)** We pass the key and the value is returned.
>
> **[0:48](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=48)** If the value does not exist in the WeakMap the value undefined is returned.
>
> **[0:54](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=54)** The WeakMap also utilizes the has method.
>
> **[0:57](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=57)** We pass a key to the has method and it returns true or false based on whether or not the key exists in the WeakMap.
>
> **[1:05](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=65)** And finally, the WeakMap also has the delete method available to delete individual keys.
>
> **[1:12](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=72)** You simply pass the key of the key value pair you want to delete, and it will remove it from your WeakMap.
>
> **[1:19](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=79)** Now that we've reviewed each of these methods let's try putting it all together in a challenge activity.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), pass (4), finally, (1), let (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 3. Sets

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The Set object defined
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=0)** - [Instructor] Like Map, sets were introduced with ES6, otherwise known as ES2015.
>
> **[0:07](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=7)** The key feature of Set is that it is a collection of unique values, meaning you can not have duplicates of values in the set and those values can be anything.
>
> **[0:18](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=18)** Sets can be a really powerful tool in your JavaScript programming.
>
> **[0:22](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=22)** I'm sure you can think of some everyday examples where limiting a collection to unique values would be really helpful.
>
> **[0:29](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=29)** Set comes with several methods as well as the size property.
>
> **[0:33](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=33)** Many of these methods and their execution will be very similar to you after having learned about Map and WeakMap.
>
> **[0:40](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=40)** You even initialize in the same manner.
>
> **[0:43](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=43)** A set is initiated using new Set.
>
> **[0:46](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=46)** Throughout this section, we will work through some examples together and give you a chance to try some things on your own.
>
> **[0:52](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=52)** In the next lesson we'll get started with adding values to our set.

> [!info]- Semantic Content
>
> **Env Vars:** es6 (1), es2015 (1)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Add values to your set
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=0)** - [Instructor] In order to construct your new set, you will need to reach for the method, add.
>
> **[0:05](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=5)** The add method adds a new value to your set upending the specified value to the end of your object.
>
> **[0:12](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=12)** In order to add values, we simply apply the set method to our existing set and pass in the value.
>
> **[0:19](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=19)** This method can also be changed which will save you some room in your code.
>
> **[0:23](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=23)** Let's move on to an example and see add in action.
>
> **[0:27](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=27)** As we did with maps, we will revisit the same example with sets as we learn each of its methods in property.
>
> **[0:34](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=34)** For our sets example, let's imagine that we're planning a surprise birthday party for our friend.
>
> **[0:39](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=39)** We're going to utilize a set because we want to make sure we don't have any duplicate email addresses when we send out our invitations.
>
> **[0:47](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=47)** Let's start by creating a new set, invites.
>
> **[0:51](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=51)** Once created, let's add our emails to the set using the add method.
>
> **[0:55](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=55)** We're going to save ourselves some typing and chain together our adds.
>
> **[0:59](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=59)** We take each of the emails we've been provided and add them to our set.
>
> **[1:04](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=64)** If we were to log it out, we would see the word set displayed with the size and the set that we created.
>
> **[1:10](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=70)** Remember, sets do not allow for duplicate values, so even though we have added john@[mail.com](https://mail.com) twice, we will only have it appear in our set once.
>
> **[1:20](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=80)** Let's head over to our code and try a new example together.
>
> **[1:26](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=86)** For our set example, we are going to the grocery store and we've asked our family for ice cream flavors that they'd want.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=93)** We're going to try to get all the flavors, but we want to make sure we simplify the list.
>
> **[1:38](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=98)** The first thing that we'll do is create a new set, and we'll call this ice cream, and we'll set this equal to new set.
>
> **[1:48](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=108)** Then I'm going to take the flavor requests listed above and add them to my ice cream set.
>
> **[1:53](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=113)** We will use chaining here to save us some typing.
>
> **[1:57](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=117)** So I'll take ice cream dot add and then the first one is chocolate.
>
> **[2:03](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=123)** And then I can keep going as such chaining add with each of the values here.
>
> **[2:10](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=130)** So this saves us a little bit of typing.
>
> **[2:12](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=132)** So we have chocolate, vanilla, coffee.
>
> **[2:15](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=135)** We have another request for coffee, and then strawberry, and then one final request for vanilla again.
>
> **[2:30](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=150)** Alright, so then, if we log this out, alright, and then we run it down here, we'll see that we have a set and it has four items in it, chocolate, vanilla, coffee and strawberry.
>
> **[2:50](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=170)** As you can see, even though we had a couple duplicate requests, we had two people who wanted coffee and two people who wanted vanilla, because set only allows for unique values, it only counts them once.
>
> **[3:04](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=184)** So vanilla, we only see vanilla once, we only see coffee once.
>
> **[3:08](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=188)** So it's really great when you have a list of items or a collection of items and you don't want any duplicates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (1)
> **CLI Commands:** make (2)
> **URLs:** [mail.com](https://mail.com) (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Does Set have your value?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=0)** - [Instructor] Depending on what you're working on, you may simply need to check whether or not a value exists in your Set.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=6)** This is where the Has Method can be very helpful.
>
> **[0:09](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=9)** It's usage is identical to that in Maps and WeakMap.
>
> **[0:14](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=14)** The Has Method is applied to your existing Set, passing the value that you're checking for in the Set.
>
> **[0:20](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=20)** If the Set has the value, true will be returned, if not, false will be returned, pretty straightforward, right.
>
> **[0:27](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=27)** Now let's move to our birthday invitations example and see how this might work in a real world example.
>
> **[0:33](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=33)** In this example, we want to see if Sue and Sally are included in our invite Set.
>
> **[0:37](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=37)** First, we will check to see if Sue exists in our Set.
>
> **[0:40](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=40)** She does, so the return value is true.
>
> **[0:44](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=44)** In the second example we want to see if Sally exists in the set and she does not, so false is returned.
>
> **[0:51](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=51)** All right, let's head to our editor and try an example together.
>
> **[0:56](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=56)** Similar to how we did with Map, we're going to keep with our ice cream Set throughout the course of this particular section with Sets, just so we don't have to initialize the Set over and over again with add.
>
> **[1:09](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=69)** So we're going to keep our ice cream Set, we know we have our flavors added, all that good stuff.
>
> **[1:15](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=75)** So for this particular exercise we're going to be using the Has Method, and we want to know does our Set contain the following flavors, the first being mint chocolate chip and the second being coffee.
>
> **[1:28](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=88)** So we will start by creating a new variable, and you don't have to do this, but just for sake of example, here, I'm going to and we'll call this hasMintChocChip.
>
> **[1:42](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=102)** All right, and then we'll take our ice cream Set and apply the Has Method, and then pass in the value 'mint chocolate chip'.
>
> **[1:54](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=114)** All right, and then below I'll log out "Does our set have mint choc chip?"
>
> **[2:02](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=122)** and then pass in the value that we have that set to.
>
> **[2:06](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=126)** All right, and remember this is going to return true or false.
>
> **[2:10](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=130)** All right, the next is coffee.
>
> **[2:12](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=132)** So does our Set have coffee?
>
> **[2:15](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=135)** So we will do pretty much the exact same thing, except I'm going to call this one hasCoffee, and we'll take our ice cream Set and apply the Has Method and then pass in coffee.
>
> **[2:28](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=148)** And then below I'm going to, actually, just copy this and we'll swap out mint chocolate chip and coffee and then hasCoffee.
>
> **[2:45](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=165)** All right, so now when we run this in the console we see, Does our set have mint choc chip? false.
>
> **[2:53](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=173)** And we can see that if we look at the Set that we created and the values that we added, but, you know, when we're working with this in the real world we may not have that right easily available.
>
> **[3:04](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=184)** And then for our second one, Does our set have coffee?
>
> **[3:07](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=187)** and the answer there is true.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (2), this, (1)
> **Code Identifiers:** hascoffee (2), hasmintchocchip (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Get your set size
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=0)** - [Instructor] One of the wonderful things about learning about maps and sets in tandem is that there are so many overlapping concepts, including the size property.
>
> **[0:09](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=9)** Sets have a single property as well, size, to let us know how many elements are contained within the set.
>
> **[0:16](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=16)** The syntax is really simple.
>
> **[0:18](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=18)** You apply the property directly on your set and it will return a number indicating how many values are in your set.
>
> **[0:25](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=25)** Remember, this is a property, not a method, so we don't need parentheses to execute it as we do with methods.
>
> **[0:31](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=31)** Let's revisit our birthday invites example.
>
> **[0:34](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=34)** We create a new variable, inviteSize, and set that equal to invites.size.
>
> **[0:40](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=40)** If we log that out, we'd see that it returns 4.
>
> **[0:43](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=43)** Remember, sets do not contain duplicate values.
>
> **[0:47](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=47)** All right, now let's head to the code and try an example together.
>
> **[0:52](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=52)** In keeping with our ice cream set example, we want to find out how many items are in our set.
>
> **[0:57](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=57)** For this example, let's just simply log the answer out, instead of setting it to a variable.
>
> **[1:03](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=63)** I'll set up my console log and then we will use template literals, and I'll say "Our set is" and then I'll use my dollar sign and curly braces.
>
> **[1:18](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=78)** And within this I'll use our iceCream set and apply the size property.
>
> **[1:26](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=86)** So I'm going to say, "Our set is" and then whatever the number elements, or we'll say, "Our set contains" X elements.
>
> **[1:37](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=97)** All right, and then if I run this down here, I'll see that our set contains four elements.
>
> **[1:46](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=106)** All right, and remember, if we didn't have the knowledge that we have about sets and the duplicate values, we may look at our set up above, where we've added each of the values, and think, "Why does that only return four elements?"
>
> **[1:58](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=118)** But remember no duplicate values in a set.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Code Identifiers:** invitesize (1), icecream (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Delete and clear values in your set
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=0)** - [Instructor] In order to delete and clear values from a set, we can reach for methods of the same name.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=6)** The first method is delete.
>
> **[0:07](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=7)** This will remove a single value from a set.
>
> **[0:11](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=11)** In order to delete a value from a set, you will simply apply the delete method to your set and pass in the value that you'd like to delete.
>
> **[0:19](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=19)** It's that simple and almost identical to what we did with maps.
>
> **[0:23](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=23)** Moving onto the clear method, this method will remove all of the values from a set.
>
> **[0:28](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=28)** You may remember this from our maps discussion as well.
>
> **[0:32](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=32)** To clear your set, you simply apply the clear method to your existing set.
>
> **[0:36](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=36)** It does not take any arguments.
>
> **[0:39](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=39)** If you want to check that your set was cleared successfully, you could use the size property to make sure it's back to zero.
>
> **[0:46](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=46)** Let's take a look at our invites example and see these methods in action.
>
> **[0:51](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=51)** We decided that we no longer want to invite Jane to our party, so we decide to delete her invite.
>
> **[0:57](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=57)** We applied the delete method to the invite set and pass in jane@[mail.com](https://mail.com).
>
> **[1:03](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=63)** Next, we want to clear the set out completely.
>
> **[1:06](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=66)** In order to clear the set, we apply the method clear to our invite set and that's it.
>
> **[1:11](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=71)** If we wanted to confirm that it had been cleared, we could get its size, which would return zero.
>
> **[1:17](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=77)** Now let's take our delete and clear knowledge to our editors and try another example together.
>
> **[1:23](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=83)** Here, we have our ongoing ice cream flavor set, and the first thing that we want to do is delete vanilla from the set.
>
> **[1:29](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=89)** We will take our ice cream set and apply to delete, passing in vanilla.
>
> **[1:34](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=94)** So icecream.delete, and then we're going to pass in vanilla to remove that from the set.
>
> **[1:43](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=103)** So then, if we log our set out, we'll say does vanilla still exist?
>
> **[1:51](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=111)** And then we'll log out our ice cream set.
>
> **[1:54](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=114)** Alright, and then we want to clear the set entirely.
>
> **[1:59](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=119)** All we have to do is apply the clear method and that's it.
>
> **[2:03](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=123)** So we do icecream.clear.
>
> **[2:06](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=126)** And then, remember, if we want to confirm that it's been cleared, we can get the size.
>
> **[2:12](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=132)** So I'm just going to log out here, did our set clear?
>
> **[2:18](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=138)** And then get its size.
>
> **[2:21](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=141)** Alright, so let's run this in the console, and after we delete the first test that we did when we deleted vanilla from the set, we can confirm that it was no longer in the set after we did that.
>
> **[2:35](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=155)** And then when we cleared it, which remember, means that we removed everything from the set, we can confirm that it was cleared because the size is now zero.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (12), pass (3), let (3)
> **CLI Commands:** make (1)
> **URLs:** [mail.com](https://mail.com) (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Iterate over values in a set
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=0)** - [Instructor] Before we move into the next two set methods, let's take a quick review on iterators.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=6)** We've learned about what an iterator is earlier in this course, and we know that it is an object that defines a sequence.
>
> **[0:13](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=13)** We will use the property next to iterate over the iterator that is returned by the set methods, values and entries.
>
> **[0:21](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=21)** In this lesson, we're going to talk about the values method.
>
> **[0:24](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=24)** Just like the values method on map, the values method for set also returns an iterator object with the values in their insertion order.
>
> **[0:33](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=33)** To utilize this method, we will simply apply the method to an existing set.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=38)** This method does not take any arguments and is best utilized being set to a variable that you can access as needed.
>
> **[0:45](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=45)** If we want to access any of the values of the iterator, that have been returned by the values method, we will apply the next method to that variable and then a value property.
>
> **[0:57](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=57)** Let's take a look at our invites example and see how the values method is used.
>
> **[1:02](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=62)** Using our existing invite set, we will create a new variable called invite values.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=68)** We will set this equal to invites, referencing our existing set and apply the values method.
>
> **[1:14](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=74)** Then to obtain our first value, we will take our new variable, invite values, and apply the next method and value property.
>
> **[1:22](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=82)** This will return john@[mail.com](https://mail.com).
>
> **[1:25](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=85)** Let's head over to our editor and try another example together.
>
> **[1:30](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=90)** Using our ice cream flavor set, we want to determine what the second value is in the set.
>
> **[1:36](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=96)** First, we'll create a new variable called ice cream values.
>
> **[1:41](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=101)** Ice cream values.
>
> **[1:44](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=104)** And we're going to set this equal to our set ice cream, with the values method applied.
>
> **[1:50](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=110)** And remember this doesn't take any arguments.
>
> **[1:53](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=113)** Next, we know that we need the second value.
>
> **[1:55](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=115)** So we're going to apply next to our newly created variable.
>
> **[1:59](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=119)** So we'll take ice cream values and apply next.
>
> **[2:04](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=124)** This will give us the first value in our set.
>
> **[2:08](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=128)** We need the second.
>
> **[2:09](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=129)** And we're going to go ahead and create another variable and we'll just call this second value.
>
> **[2:17](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=137)** And then we'll set this equal to ice cream values dot next.
>
> **[2:22](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=142)** And this time we want the value. All right.
>
> **[2:25](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=145)** So if you log this out.
>
> **[2:28](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=148)** What is the second value in my set?
>
> **[2:34](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=154)** And then we'll pass in this variable that we created.
>
> **[2:37](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=157)** And then we'll log it down here.
>
> **[2:40](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=160)** And we see that the second value in my set is vanilla.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (1)
> **URLs:** [mail.com](https://mail.com) (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Iterate over a set with entries
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=0)** - [Instructor] The next method we will discuss is entries.
>
> **[0:03](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=3)** And it's another set method that returns an iterator.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=6)** As we have learned, our set just contains values unlike map, which contains keys and values.
>
> **[0:13](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=13)** And this entries method will return an array that contains the value twice.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=17)** You may be wondering why the value is returned twice?
>
> **[0:20](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=20)** And the reason is that it was done in order to keep the API similar to map.
>
> **[0:25](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=25)** This is an interesting value to work with and you may find that it's not something you'll reach for very often, but it's still important to learn about how this method works.
>
> **[0:35](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=35)** Just like the values method we will iterate over the available entries by using the next method, and then applying value.
>
> **[0:43](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=43)** If we take a look at our invites example, we can see that this follows a very similar pattern and usage to the values method.
>
> **[0:50](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=50)** We start by creating a new variable invite entries and set that equal to the invites with the entries method applied.
>
> **[0:57](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=57)** Then if we want to determine the first set of entries, we apply the next method and get the value.
>
> **[1:03](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=63)** The value that will be returned is an array with john@[mail.com](https://mail.com) twice.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=68)** Let's head to the code and try this on our own.
>
> **[1:12](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=72)** Here, we want to determine the first entry in our ice cream set.
>
> **[1:16](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=76)** We'll start by creating a new variable that we'll call ice cream entries, and we'll set this equal to our ice cream set with the entries method applied.
>
> **[1:29](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=89)** Next, we're going to create another variable to store our first entry.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=93)** So for this particular example we're going for our first entry.
>
> **[1:37](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=97)** We'll call this shockingly first entry and we'll set this equal to our ice cream entries variable that we just created, we'll apply the next method and we'll get that value.
>
> **[1:50](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=110)** And then if we log this out, my first entry in my set is, all right and let's log this out.
>
> **[2:04](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=124)** All right, my first entry in my set is chocolate and remember, because the API was kept similar to that of map, we get the value twice.
>
> **[2:15](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=135)** So remember map it returned the key and the value in an array here with set when we use the entries method it returns the value twice in an array.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** api (2)
> **Definitions:** is an  (2)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** find (1)
> **URLs:** [mail.com](https://mail.com) (1)
> **Speakers:** - [instructor] (1)

#### Iterate over your set with forEach
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=0)** - [Instructor] Our final lesson on sets will cover the ForEach method.
>
> **[0:03](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=3)** At this point, you should be an expert on ForEach.
>
> **[0:07](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=7)** This method will work as expected with a few minor differences in the callback function.
>
> **[0:12](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=12)** The ForEach method provides a callback function for each value in the set.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=17)** Just like map, the ForEach method with set accepts four optional parameters.
>
> **[0:22](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=22)** For the sake of this course, I'll only be focusing on three: value1, value2, and set.
>
> **[0:29](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=29)** As we mentioned in the last lesson, the APIs for map and set are the same.
>
> **[0:34](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=34)** Because sets only contains values, both value1 and value2 will be the same.
>
> **[0:40](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=40)** The set parameter represents the entire set that is being looped over.
>
> **[0:45](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=45)** If we take a look at our invite set, we're looping over our set with ForEach.
>
> **[0:50](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=50)** And if the value starts with the letter J, we're going to log it out.
>
> **[0:54](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=54)** Starts with is a JavaScript string method that comes in handy in this particular example.
>
> **[0:59](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=59)** Now let's head to our code and try some exercises together.
>
> **[1:04](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=64)** For this exercise, we're going to loop through our ice cream set.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=68)** And if the value does not equal vanilla, then we're going to log it out in the console.
>
> **[1:13](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=73)** We'll start by taking our ice cream set and applying the ForEach method.
>
> **[1:18](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=78)** For this particular example, and I'll go ahead and set up our function here, we know that both values are going to be the same.
>
> **[1:26](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=86)** So we have value1, value2, and then set.
>
> **[1:29](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=89)** We really are just concerned with one value.
>
> **[1:32](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=92)** We don't need the same thing twice.
>
> **[1:34](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=94)** So we're just going to pass in value to our callback function.
>
> **[1:37](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=97)** Then we want to log out if the value does not equal vanilla.
>
> **[1:43](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=103)** So we say, "If value does not equal vanilla," then we'll log it out.
>
> **[1:51](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=111)** We'll say, "Flavor," and then we'll pass in that value.
>
> **[1:59](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=119)** Alright, so if we run this, we see that all of our non-vanilla flavors are logged out.
>
> **[2:07](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=127)** We have chocolate, coffee, and strawberry.
>
> **[2:09](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=129)** So this can be really handy again with kind of similar to the entries method, where you're getting the value twice.
>
> **[2:18](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=138)** You know, this is still useful.
>
> **[2:20](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=140)** You just don't need to use all of the parameters that are available to you, but a great way to loop over your set when you're using it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), pass (2), let (1), this, (1)
> **Cross-References:** we mentioned (1), in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Solution: Sets 1
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=0)** - [Instructor] In this challenge, we're given an array of pet names and we need to create a new set based on this array.
>
> **[0:14](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=14)** So the first thing that we'll need to do is actually establish our new set.
>
> **[0:19](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=19)** So I want to point out from the beginning that there could be a couple different ways that you achieve the correct solution in this particular challenge.
>
> **[0:29](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=29)** My way is not the only way.
>
> **[0:31](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=31)** So keep that in mind when you are working through this.
>
> **[0:36](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=36)** So the first thing that I'm going to do is I'm going to create a new variable and I'm going to call it petSet, and I'm going to set that equal to a new Set.
>
> **[0:47](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=47)** Then I know I want to add each item that's in this namesForFamilyPet array.
>
> **[0:53](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=53)** I want to add it to this new set.
>
> **[0:56](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=56)** So what I'm going to do is actually iterate over this array, and, for each name, I'm going to add it to the set.
>
> **[1:05](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=65)** So we will actually utilize our array methods here.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=68)** So namesForFamilyPet and we're going to to use forEach here.
>
> **[1:16](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=76)** And I'm going to say forEach(name) and I'm going to implicitly return the petSet.
>
> **[1:27](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=87)** So we're going to add, that's how we add items to our set.
>
> **[1:31](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=91)** So petSet.add(name).
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=93)** So each time it loops over a name in the array, it's going to add it to the set.
>
> **[1:40](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=100)** All right, and then now in order to check our solution, we want to return the set that we created.
>
> **[1:48](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=108)** Whoops, and make sure that that's correct and check it.
>
> **[1:52](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=112)** All right, let's go ahead and do that.
>
> **[1:56](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=116)** Excellent, so you can see that our set has five names.
>
> **[2:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=120)** It's removed all of the duplicates and it's whittled it down to those five names.
>
> **[2:06](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=126)** Awesome job.

> [!info]- Semantic Content
>
> **Code Identifiers:** petset (3), namesforfamilypet (2), foreach (2)
> **Code Keywords:** this. (1), let (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Sets 2
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=0)** - [Instructor] For this challenge, we're given an array of guesses.
>
> **[0:08](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=8)** We're also given a winning number, and we need to determine, is that winning number in our guesses set that we're going to create?
>
> **[0:18](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=18)** So the first thing that we want to do is set up our set.
>
> **[0:22](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=22)** So very similar to the challenge that you just completed.
>
> **[0:26](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=26)** We're going to go ahead and create a new variable, and I'll call that guessesSet, and we'll instantiate a new set here.
>
> **[0:37](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=37)** Then, very similar to last time, I'm going to loop over this guesses array, and for each value, I'm going to add it to our set.
>
> **[0:48](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=48)** As I mentioned before, there could be a number of different ways that you decide to do this.
>
> **[0:54](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=54)** I'm going to show you one way that's going to give you some practice with array methods as well.
>
> **[1:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=60)** If you choose to do it another way, that's totally fine, as long as you get the correct answer or solution and using a set, then you've done what you're supposed to do.
>
> **[1:11](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=71)** So let's go ahead and we'll reference our array of guesses, and we're going to loop over it with four each.
>
> **[1:20](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=80)** And I'm just going to call it for brevity's sake x and implicitly return it.
>
> **[1:27](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=87)** And then reference our guessesSet and use the method add.
>
> **[1:34](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=94)** And for each value that comes through, we're going to add that to our set.
>
> **[1:40](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=100)** Awesome.
>
> **[1:41](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=101)** Now, we want to determine if this set has the winning number.
>
> **[1:48](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=108)** So we can either create a new variable, so I could create a new variable and call it hasNumber and set that equal to guessesSet.
>
> **[1:59](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=119)** And we're going to use the method has and see if it has the winning number.
>
> **[2:07](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=127)** Okay.
>
> **[2:08](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=128)** Another way you could do this, I believe in the previous challenge is the way that I did it, but you could remove the variable and you could just return this to get your solution and check it.
>
> **[2:22](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=142)** So let's do it that way.
>
> **[2:24](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=144)** Let's try it and go ahead and test our code.
>
> **[2:27](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=147)** Excellent, we can see that true, our guesses has the winning number in it.
>
> **[2:33](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=153)** Very good work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), this, (1)
> **Code Identifiers:** guessesset (3), hasnumber (1)
> **Analogies:** similar to (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. WeakSets

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is the WeakSet object?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=0)** - [Instructor] The last lesson in this course is on WeakSet.
>
> **[0:03](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=3)** The WeakSet is very closely related to Set, with some key differences.
>
> **[0:08](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=8)** You can think about this relationship in the same manner that you did regarding Maps and WeakMaps.
>
> **[0:14](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=14)** Just like Sets, WeakSets are a collection of objects that may occur only once within the given object, making them unique values.
>
> **[0:23](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=23)** The main difference is that the reference to objects, here, are weak, as you might infer from the name.
>
> **[0:28](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=28)** When we discussed WeakMaps, we briefly touched on the concept of garbage collection, which is a way of freeing up memory that has been allocated to objects no longer in use.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=38)** With WeakSets, the same holds true.
>
> **[0:41](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=41)** Because of its weak reference, the WeakSet can be garbage collected if there's no other reference to it.
>
> **[0:48](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=48)** In terms of similarities, WeakSets and Sets both hold only unique values, and both have methods that allow you to add values, delete values, and check whether or not the WeakSet has a specific value.
>
> **[1:03](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=63)** In addition to having a weak reference, WeakSet's values must be objects.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=68)** Sets could hold any primitive values.
>
> **[1:11](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=71)** Additionally, WeakSets do not provide all of the same methods, it only has add, has, and delete, nor does it have the size property.
>
> **[1:21](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=81)** Now that we have the foundations of WeakSet, let's review the methods that you'll be able to utilize with WeakSet.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), let (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Same methods, different set
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=0)** - [Instructor] As we learned in the previous lesson a WeakSet has a few of the same methods as Set.
>
> **[0:06](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=6)** These are add, has, and delete.
>
> **[0:09](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=9)** At this point in the course, these methods and how they operate should be very familiar to you.
>
> **[0:15](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=15)** We're going to review each method and then conclude this lesson by implementing each of them with WeakSet.
>
> **[0:22](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=22)** The first method is add.
>
> **[0:24](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=24)** We will use this method to construct our WeakSet.
>
> **[0:27](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=27)** Remember with WeakSets, our values must be objects.
>
> **[0:31](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=31)** You simply apply the add method to your WeakSet and pass in your value.
>
> **[0:36](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=36)** Next is the has method.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=38)** This method returns a boolean depending on whether or not your WeakSet has a specific value.
>
> **[0:44](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=44)** You apply the method to your WeakSet and pass in the value that you're checking for.
>
> **[0:49](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=49)** And last but not least, the delete method.
>
> **[0:52](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=52)** This method will remove a value from your WeakSet based on the value you pass to the method when applied to your WeakSet.
>
> **[0:59](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=59)** That was a quick review but I think you're quite proficient with these methods at this point since they have been so similar across the objects that we've learned about.
>
> **[1:08](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=68)** Now, let's try a few challenge questions with WeakSet.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), delete (2), for. (1), let (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=0)** - [Jamie] Thank you so much for joining me for this course on JavaScript: Maps and Sets.
>
> **[0:05](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=5)** I hope that you've reinforced your understanding of maps and sets and how you can incorporate them into your code more often.
>
> **[0:12](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=12)** I strongly encourage you to keep coding.
>
> **[0:14](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=14)** Keep working on your JavaScript.
>
> **[0:17](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=17)** If you're learning on your own, the best way to learn is to build something.
>
> **[0:21](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=21)** If you're working as a developer or software engineer on the job, see if there are ways that you can incorporate maps and sets into your current projects.
>
> **[0:30](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=30)** Check out other LinkedIn Learning courses on JavaScript, as well as JavaScript frameworks like Angular, React and View.
>
> **[0:38](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=38)** I hope that you found this course to be valuable.
>
> **[0:41](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=41)** Please feel free to connect me here on LinkedIn or you can visit my blog at [jamiepittman.com](https://jamiepittman.com).
>
> **[0:47](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=47)** Keep up the great work.

> [!info]- Semantic Content
>
> **URLs:** [jamiepittman.com](https://jamiepittman.com) (1)
> **Speakers:** - [jamie] (1)


## Instructor

- [[Jamie Pittman]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [[Improve Your JavaScript Language Skills]]
← [[JavaScript- Arrays]] | **6 of 8** | [[JavaScript- Patterns]] →

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