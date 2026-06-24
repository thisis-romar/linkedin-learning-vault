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
  - '[Improve Your JavaScript Language Skills](../../Paths/Software%20Development/Learning%20Paths/Improve%20Your%20JavaScript%20Language%20Skills.md)'
prev_courses:
  - '[JavaScript- Arrays](JavaScript-%20Arrays.md)'
next_courses:
  - '[JavaScript- Patterns](JavaScript-%20Patterns.md)'
path_nav: '[{"path":"Improve Your JavaScript Language Skills","position":6,"total":8,"prev":"JavaScript- Arrays","next":"JavaScript- Patterns"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Maps%20and%20Sets.md)

![JavaScript: Maps and Sets](https://media.licdn.com/dms/image/v2/D4D0DAQGGYpT_Je55Fw/learning-public-crop_675_1200/B4DZVN0co5HAAY-/0/1740767350005?e=2147483647&amp;v=beta&amp;t=iitExLdnQbMxEXHpK0_WOHQBRUKsSEcCYSH3p-vyemk)

# JavaScript: Maps and Sets

> Programming languages are always evolving and changing, and JavaScript is no exception. Over time, JavaScript has grown, and many new aspects have been added, including maps and sets. JavaScript maps and sets may sound simple, but they aren't quite the same as their counterparts in other programming languages. In this course, software engineer Jamie Pittman covers the ins and outs of JavaScript ma

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-maps-and-sets) | 1h 10m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Get to know JavaScript maps and sets](#get-to-know-javascript-maps-and-sets)
  - [What you should know](#what-you-should-know)
- [**1. Maps**](#1-maps) (12 videos)
  - [The Map object defined](#the-map-object-defined)
  - [Build your Map object with the set method](#build-your-map-object-with-the-set-method)
  - [Access a value with get](#access-a-value-with-get)
  - [Does the map have your key?](#does-the-map-have-your-key)
  - [Determine map size](#determine-map-size)
  - [Remove key-value pairs with clear and delete](#remove-key-value-pairs-with-clear-and-delete)
  - [Map: Keys and values methods](#map-keys-and-values-methods)
  - [Map contents with the entries method](#map-contents-with-the-entries-method)
  - [Loop over a map with forEach](#loop-over-a-map-with-foreach)
  - [Group entries with groupBy](#group-entries-with-groupby)
  - [Solution: Maps 1](#solution-maps-1)
  - [Solution: Maps 2](#solution-maps-2)
- [**2. WeakMaps**](#2-weakmaps) (2 videos)
  - [What is the WeakMap object?](#what-is-the-weakmap-object)
  - [Same methods, different map](#same-methods-different-map)
- [**3. Sets**](#3-sets) (10 videos)
  - [The Set object defined](#the-set-object-defined)
  - [Add values to your set](#add-values-to-your-set)
  - [Does Set have your value?](#does-set-have-your-value)
  - [Get your set size](#get-your-set-size)
  - [Delete and clear values in your set](#delete-and-clear-values-in-your-set)
  - [Iterate over values in a set](#iterate-over-values-in-a-set)
  - [Iterate over a set with entries](#iterate-over-a-set-with-entries)
  - [Iterate over your set with forEach](#iterate-over-your-set-with-foreach)
  - [Solution: Sets 1](#solution-sets-1)
  - [Solution: Sets 2](#solution-sets-2)
- [**4. WeakSets**](#4-weaksets) (2 videos)
  - [What is the WeakSet object?](#what-is-the-weakset-object)
  - [Same methods, different set](#same-methods-different-set)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get to know JavaScript maps and sets](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/get-to-know-javascript-maps-and-sets?u=76281980&t=0)** - [Jamie] One of the beautiful things about programming is how it is constantly evolving. [JavaScript](../../Skills/Software%20Development/JavaScript.md) is no exception. Over time, JavaScript has grown and many aspects have been added including maps and sets. This course was created to help you step up your JavaScript skills and learn the ins and outs of maps and sets. Hi, I'm Jamie Pittman and I'm a front end software engineer. Join me and let's learn more about JavaScript maps and sets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4)
> **Speakers:** - [jamie] (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=0)** - [Instructor] This course provides a beginner to intermediate level overview of [JavaScript](../../Skills/Software%20Development/JavaScript.md) maps and sets. You absolutely do not need to be an expert or senior level developer, but this course does require a basic understanding of JavaScript. Advanced knowledge is not required for this course. If you're just starting out, this will be a great way to further your knowledge of JavaScript, specifically with maps and sets. If you have a few years of development experience under your belt, this will help you sharpen your skills. You should be comfortable using and understanding arrays, objects and functions. Additionally, you should be familiar with how to use your favorite text editor and your terminal. For this course, I'll be using VS Code and it's built-in terminal. Please use whatever text editor and terminal that you feel most comfortable using. It does not have to be VS Code. In order to run the code, we will be writing. You will need to install Node on your machine if it is not already. For more information on how to get set up with Node JS, please go to [nodejs.org/en/download](https://nodejs.org/en/download). We will be using Node to run our exercise files and see maps and sets at work. In order to run the files in Node, you'll need to navigate to the directory that the files are stored in and then type node, the name of the file. Make sure the file extension JavaScript, or JS, for all of these is included when you type in the file name.
>
> **[1:37](https://www.linkedin.com/learning/javascript-maps-and-sets/what-you-should-know?u=76281980&t=97)** That's all you'll need for this course. Now let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4)
> **CLI Commands:** node (5), make (1)
> **Tools:** terminal (3), vs code (2)
> **Prerequisites:** you'll need (2), install (1), set up (1)
> **UI Navigation:** go to (1), navigate to (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. Maps

[↑ Back to Table of Contents](#table-of-contents)

#### [The Map object defined](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/the-map-object-defined?u=76281980&t=0)** - [Instructor] Maps are an object type that was fairly recently introduced into [JavaScript](../../Skills/Software%20Development/JavaScript.md) with ES2015. Object and Map are very similar, but they also have some key differences. Let's take a look at some of the ways that they're alike, and different to help you have a better understanding of how Map might fit into your code. Similar to Object, a Map contains key-value pairs. You can set the key-value pairs, get them, delete them, and check to see if a value is associated with a specific key. The Map object has slight differences that can make them extremely powerful and useful. Unlike an Object, a Map does not contain default keys. You have to set the keys in your Map. Additionally, a Map's keys are not limited to just a string or a symbol, they can be any value. Map also has a size property that allows you to easily determine the number of items your Map contains. One other important thing to keep in mind about Maps, is that you can not have duplicate keys in your key-value pairs. When you're ready to start using Map, you will use the constructor new Map to create a new Map object. Now that you have an idea of what makes Maps special, let's discuss how to create one and start utilizing the various methods and properties available on the Map object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** es2015 (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Build your Map object with the set method](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=0)** - [Instructor] As mentioned in the previous lesson, a map does not contain keys by default. In this lesson, we're going to discuss how to properly store data in a map using the method set. The set method is what you will use to create key value pairs in your map. The syntax is straightforward, mapObject.set(key, value). Unlike a regular object, our key can be anything, which is a pretty powerful thing. Let's work through an example. I have some emojis that I want to associate with different meals throughout my day. The apple represents breakfast, a slice of pizza for lunch, a hamburger for dinner, and a cookie represents dessert. How might we construct a map using this information? First, we decide that the emojis are going to be our keys since we can use anything as our key, then whatever meal the emoji is associated with will be the value. To start building the map, we will need to use set to add the key value pairs. We will create a new variable named meals and set that equal to new Map. From here, we will then set each individual key value pair. First, meals.set with apple as the key and breakfast as the value, meals.set with pizza as the key and lunch as the value, meals.set with the hamburger as the key and dinner as the value,
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=93)** and then meals.set with the cookie emoji as the key and dessert as the value. And there you have it, we have a map with our emojis and associated meals. Now let's go to the code and try another example together. Before we get started, I want to point out that I'm running my terminal within VS Code. I'll be running the code in the terminal so you can see what is being logged out for each exercise. In order to emulate what I'm doing, you'll need to make sure that you navigate to the folder or directory where your file is stored and you can type node and your filename and you'll be able to see everything that we're logging out within each exercise file. So here I have a list of things to do this Saturday. At 8 a.m., I will walk my dogs. At 12 p.m., I will have lunch. And at 3 p.m., I will watch a movie. How can I take this to-do list and make it into a map? There are a couple of ways that you can set your map up, but first and foremost, we need to create a new variable that we will call Saturday and we will initialize a new map. Great. Next, we need to take each of the items on the to-do list and set them in the map. Remember, your key can be anything, a string, number, even a function. You just can't have it duplicated. For this example, I am going to use the number value that corresponds to the activity times
>
> **[3:06](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=186)** since we only have three items. If we had things to do at 8 a.m. and 8 p.m. on this list for example, we would probably choose to use the strings eight a.m. eight p.m. instead of using the number 8. But for this example, I am going to use numbers. All right, so now we have our new map set up and now I'm going to set each of our key value pairs within our Saturday map. So I will take our Saturday variable, apply the set method, and then our first key is 8 and the value is walk the dogs. All right, and then we'll do this for each of the other items in the to-do list. So Saturday, apply that set method, the number 12, and then the value lunch. And then Saturday, apply set, the number 3, and then the value watch a movie. Cool. All right, so we have that set up. Let's log our new map in the console and see what that looks like.
>
> **[4:21](https://www.linkedin.com/learning/javascript-maps-and-sets/build-your-map-object-with-the-set-method?u=76281980&t=261)** All right, so if we look at our console, we see map three, so three representing the number of key value pairs that we have, and you can see each of our items is there. We have our key value pair, 8, walk the dogs, 12 and lunch, 3 and watch a movie.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (1)
> **Tools:** terminal (2), vs code (1)
> **Prerequisites:** set up (2), you'll need (1)
> **UI Navigation:** go to (1), navigate to (1)
> **Code Identifiers:** mapobject (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Access a value with get](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=0)** - [Instructor] In our previous lesson, we learned how to construct a map using the method set. In this lesson, we're going to discuss how to retrieve values from our map using the get method. One of the really helpful things about the methods associated with map is that they're all very straightforward. Here we have the syntax forget map object dot get passing in the key. We retrieve the value from our key value pair by passing in a key as an argument to our get method. If the key exists, the value associated with that key is returned. If the key does not exist in the map, undefined is returned. Let's return to our previous meals example and use the get method. At this point, we've already built our map using set. And we want to get a value based on a specific key. We know that get will return a value. So let's go ahead and set that to a new variable that we will call cookie. Then I'll apply get to my existing meals map. Because the cookie emoji exists as a key in my map, it will return the value dessert. Now, I'm going to create a new variable named doughnut and try to get the value associated with the doughnut emoji. Unfortunately, there is no key that matches the doughnut in our map, and undefined is return. Now let's go to the code and try another example using get together. We are going to continue to build on our to-do list example. And since the utilization of our map
>
> **[1:32](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=92)** is dependent on the key value pairs being set, you'll see this block from our very first example in each of these exercise files. Just to ensure that we have our map ready to go and we don't have to continue to set it every single time with each new method that we're learning. So the first key that we're going to get is 12. We're going to get the value associated with the key 12 from our Saturday map. So the first thing that we'll do is create a new variable and we'll call this noon. Then we'll set noon equal to our Saturday map with the get method applied, passing in 12, which is our key. All right. I'm going to log this out and then we'll run these at the end of this exercise. All right. So what am I doing at 12:00 p.m. on Saturday? All right. And then we'll pass in our variable that we just created. All right. For our next one, we're going to try to get the key nine from our map. Now, here we have the map that we've constructed right in front of us. And we can see that there is no nine. But we're going to humor ourselves. And we're still going to try to get that nine, just so we can see the value that's going to be passed back when a key does not exist in a map. So we'll do basically the same thing that we just did in the previous task. And we'll create a new variable that we'll call nine. And we'll set that equal to our Saturday map, apply the get method, and then pass in the key nine.
>
> **[3:08](https://www.linkedin.com/learning/javascript-maps-and-sets/access-a-value-with-get?u=76281980&t=188)** So here, if I say, and I log out, what am I doing at nine on Saturday? And then I pass in our nine variable. When I go down to the terminal and log this out, we'll see that on Saturday at 12:00 p.m., we have lunch. So we were able to get the value associated with our 12 key, and that is lunch. But then when we tried to get the value associated with a key of nine, we see that undefined is returned, because nine is not a key that exists within our Saturday map.

> [!info]- Semantic Content
>
> **Ports:** :00 (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Does the map have your key?](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=0)** - [Instructor] The next Map method that we're going to discuss is the has method. This method returns a Boolean value, true or false, if a value associated with the provided key exists. The syntax as we have seen already is clear. We apply the has method to a Map and pass the key of the value that we're looking for in the Map. The Map methods has and get are very similar. The key distinction is that get returns a value associated with the key and has returns a Boolean indicating whether or not a value is associated with the provided key. Returning to our meals Map, we have a very similar example from the last lesson. We have replaced get with has, and we see that now we're getting Boolean values. Does our meals Map have a value associated with the key cookie emoji? True. Does our meals Map have a value associated with the key donut emoji? False. Let's go to the code and try an example together. Keeping with our to-do list Map example, we want to determine if our Map has some specific values. The first one that we're checking for is associated with the key, four. First, we'll create a new value to store our value that'll be returned by the has method, and we'll call this has four. Then we'll set this variable equal to our Saturday Map with the has method applied, and we're going to pass in four, which is the key that we're looking for.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/does-the-map-have-your-key?u=76281980&t=93)** So below here, I'm just going to console log out the return value that we get, so I'll say does our Map have four? And then we'll log out the value. All right, and we'll run this at the end. So our second one here, does our Map have a value associated with eight? So we're going to do the exact same thing. We'll create a new variable and we'll call this one has eight, and we'll set it equal to our Saturday Map and apply the has method, and then here we'll pass in eight. All right, and then we'll log this out. We'll say, does our Map have eight? All right, and remember, the value that you're passing to the has method is the key you're checking to see if it exists within the Map that you have created. All right, so now we have that, and we'll run this. All right, so does our Map have four? So does our Map have a key four within it? And we get the answer false. So it does not have four. Then does our Map have eight? True, which we can see above. We have a key value pair of eight in walk the dogs. So has is really great just to simply check and see if a key exists within your Map.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Determine map size](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=0)** - [Instructor] Unlike objects, Map comes with a built-in property to determine the size of your map. The size is the number of elements or key value pairs that are present in the map because it is a property you would simply apply size to your map without parentheses. We'll only use those parentheses when we're accessing maps methods. When we apply size to our map, a number will be returned indicating the number of key value pairs in our map. In our meals example, we can see just how easy it is to apply size and get the count of each of our elements. We know that this property is going to return a numerical value so we can set that to a variable and reuse it if we want. Now let's head over to the code and work on using the size property with our to-do list. First let's start by creating a new variable that we will call saturday size, const saturdaySize. All right. And then we're going to set this equal to our map saturday and then apply the size property. And that's all we have to do in order to get the size. So let's log this out so we can see this in action. And we'll actually use a template literals here just for fun to mix it up. And we'll say my map contains and then we'll pass in our variable here saturdaySize. So hopefully this is something that you've learned before.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/determine-map-size?u=76281980&t=93)** If not, it's a fun little trick template literals that you can use and will use all over the place in [JavaScript](../../Skills/Software%20Development/JavaScript.md). And we'll say my map contains and we'll get our size, which is a number. And then we'll say elements. All right, so if I run this in the console we can see that my map contains three elements. And of course we can double-check our work because we have it set here at the beginning of our exercise file, but really super handy property to use when you're working with map.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Exercise Files:** template (2), exercise file (1)
> **Code Identifiers:** saturdaysize (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Remove key-value pairs with clear and delete](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=0)** - [Instructor] In this lesson, we're going to cover two map methods that remove key value pairs from your map, delete and clear. The first method we will discuss is delete. The delete method will remove a specified key value pair from your existing map. Like many other methods, this is straightforward and you'll pass a key in order to execute the operation. If the key value pair is successfully deleted it will return the Boolean value true. If the key pass does not match any key value pairs in the map, it will return false. Next, we have the clear method. The clear method removes all elements or key value pairs from a map. This method returns a value of undefined. However, you could confirm that your map was successfully cleared by logging its size which we learned about that property in the previous lesson. Looking at our meals example, we will first delete the dessert key because we have a cookie emoji as a key in our map, it will return true. Next, we will try to delete the candy emoji key, and because it does not exist in our map, it will return a value of false. And last but not least, we've decided we wanted to start all over and clear our map and start from scratch. So we apply the clear method to our meals map. When we check it size, we see it as now zero and successfully cleared.
>
> **[1:34](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=94)** So now that you've learned about delete and clear let's try some examples in our code. As we've done in previous exercises, we're going to stay with our same Saturday map object and delete and clear some keys. First, we're going to delete the key value pair with a key of three, for these delete examples, I'm just going to wrap them in a console log. So here I'll start with console log and I'm going to pose the question, did my key value pair successfully delete? And then I'll just put three here. So then what we're going to log out is we're going to take our Saturday map, we're going to apply the delete method and since we want to delete the key value pair associated with three, we'll just pass in a three. All right, so all I'm going to do for the second example here, our second task, we want to delete the element associated with the key 10. So I'm just going to simply copy and paste, and then I'm going to replace my three with a 10. All right, now I'm going to go ahead and log these out simply because we're going to clear in the next task and I just want you to be able to see these logged out. All right, so for our first one,
>
> **[3:07](https://www.linkedin.com/learning/javascript-maps-and-sets/remove-key-value-pairs-with-clear-and-delete?u=76281980&t=187)** did my key value pair of successfully delete three? And it returned true because three was successfully deleted, this means it existed within our map and it was successfully deleted. For the second one we asked did it successfully delete 10? And it returned the value false because 10 did not exist within our map. So for our third task we want to clear the entire Saturday map object. So here we need to just apply the clear method to our Saturday map, so we'll take Saturday and apply clear. And that's really all you have to do in order to clear out the map completely. Let's verify that it was clear, so here all console log the size remember we talked about that in the last lesson, so I'll just put here a message map size and then we'll pass in Saturday dot size, okay, so we're applying that size property to see and we can see that after we cleared that our map size is now zero so we successfully deleted and cleared key value pairs from our map.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1), we talked about (1), in the last (1)
> **Speakers:** - [instructor] (1)

#### [Map: Keys and values methods](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=0)** - [Instructor] Before we discuss our next two methods, keys and values, we're going to quickly review what an iterator is and how it relates to our Map. In [JavaScript](../../Skills/Software%20Development/JavaScript.md), we iterate over collections frequently using array methods like Map or for each. An iterator is defined by the MDN documentation as an object which defines a sequence, and potentially returns a value upon its termination. The next method is applied to the iterator and it has two properties, value and done. With our Map, some of its methods return iterators which allow us to cycle through keys and values in the order that they were inserted within our Map. Let's start with the keys method. It returns an iterator object that allows us to cycle through all of the keys found in our Map. It's likely that you would utilize this method by creating a new variable and setting it equal to your Map and then apply the keys method. Then, when you wanted to iterate over the keys, you would apply the next method to your keys variable and access its value. Depending on which key you're interested in, you'd continue to apply the next method until you're ready to access the value. Now let's look at the values method. This returns an iterator object with all of Maps values in their insertion order. The syntax is identical to the keys method and it is also returning an iterator. Just like we did with the keys,
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=93)** we can create a variable to store the iterator and then apply the next method to that variable. When we want the value, we can get that value of the iterator with the next method applied. Referencing our meals example, let's utilize the keys and values methods. You'll see, we created a variable called meal keys and set it to our meals Map object with the keys method applied. Then we created a new variable for the first key and set it equal to the meals key with the next method applied and then grabbed its value. We see that it returns an apple emoji, which is the first key within our meals Map. Then for values, we do almost the exact same thing, except we apply the values method. We see that we get the breakfast string, our first value in our Map. Now let's try an example on our own. Our first task is to figure out the first key in our Saturday Map object. Let's create a new variable that we'll call Saturday keys. We're going to set this equal to our Saturday Map object and apply the method keys. We're interested in the first key, so let's create another variable and we'll call this first key. Then we'll set this equal to our Saturday keys iterator that we just created above,
>
> **[3:06](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=186)** and we will apply the next method, and then value. So if we log this out, we can say the first key in our Saturday Map is, and then log out that first key. All right, so we'll run this at the end. For our second task, we want to determine the second value in our Saturday Map object. We'll start by doing almost exactly what we did in the previous task, except instead of keys, we will apply the values method. So create a new variable, and I'll call this Saturday values and I'll set it equal to our Saturday Map with values applied. So here we're going to get our second value, so we can go ahead and take the variable that we just created, Saturday values, apply next. All right, so this will give us the first value within our Map. We're interested in the second value, so right below this, we're going to create a new variable called second value, and we're going to take our Saturday values variable again, apply next, and then value because we're interested in this second value. So we log this out, and we'll say the second value in our Saturday Map is,
>
> **[4:46](https://www.linkedin.com/learning/javascript-maps-and-sets/map-keys-and-values-methods?u=76281980&t=286)** and then log out second value. All right, so then when we run this in the console, we see that the first key in our Saturday Map is eight, which we can double-check that just by looking at the Map that we created above, we see eight is our first. So we know that this is returning keys and values in their insertion order, so hopefully you can kind of see how these things are matching up. And for our second task, we see that the second value in our Saturday Map is lunch. And this matches directly with what we know that we created with our Saturday Map because this is going in insertion order. The second key value pair is 12 in lunch, and since we got the value, we know that lunch matches up with the second value that is in our Saturday Map.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** mdn (1)
> **Documentation:** mdn (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Map contents with the entries method](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=0)** - [Instructor] The entries method for Map works in a similar fashion to the keys and values methods that we just discussed. It also returns an Iterator and as you might expect it returns key-value pairs in an array. The syntax is also the same even down to applying the next method and accessing the value. Since this should be pretty familiar to you at this point, let's go ahead and look at our meals Map example. We first create a variable meal entries and set that equal to our meals Map with the entries method applied. To grab the first entry, we apply next and then grab the value. We can see here that this returns an array with our apple key and breakfast value. Now let's head to the code and try an example together. For this task, we want to determine the third set of entries in your Saturday Map. Let's start recreating a new variable that we'll call saturdayEntries. We set this equal to our Saturday Map with the entries method applied. We want to get the third entry so we need to iterate over the entries Iterator three times. We'll take our saturdayEntries variable and apply the next method. So this will give us our first entry. Then, to get our second entry,
>
> **[1:32](https://www.linkedin.com/learning/javascript-maps-and-sets/map-contents-with-the-entries-method?u=76281980&t=92)** we do the exact same thing, apply next, so that's entry number two. Now, we want to get the third entry, we're going to set this to a variable and log it out and we'll call this third entry, very creative, all right? And then we'll set this equal to saturdayEntries.next, we'll apply this method and then we want to get the value here, all right? So this will give us our third entry. If we log this out, what is our third entry in our map? All right, if we log this out, we'll go down here to the console and run this and we see that our third entry is a key of three with a value of, watch a movie and this is returned in an array. And we see if we look up above our Map that we set, yes, in fact, three matches.

> [!info]- Semantic Content
>
> **Code Identifiers:** saturdayentries (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Loop over a map with forEach](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=0)** - [Instructor] The last method that we will discuss is ForEach. This method should look pretty familiar to you as it is also a [JavaScript](../../Skills/Software%20Development/JavaScript.md) array method and it operates in the same manner. The ForEach method executes a function for each key value pair in the map. The ForEach method accepts four optional parameters. For the sake of this course, I'm only going to focus on three of them: value, key, and map. Each of these parameters are pretty explicit as to what they represent. Value is the value of each iteration. Key is the key of each iteration, and map is the map being iterated over. Let's go to our meals map one last time and see how we can use this ForEach method. In this example, we are just going to focus on using the parameters value and key. We take our meals map and apply ForEach, passing in value and key as parameters. Each time it iterates, we will log out I am having a key for value. Pretty cool, right? So here we see it returns, I am having an apple for breakfast. I am having a slice of pizza for lunch. I'm having a hamburger for dinner. I'm having a cookie for dessert. Now let's go to the code and use ForEach. All right, our last example using our Saturday map. For this task, we want to log out a value if the key is equal to 12. First, we will start by taking our Saturday variable, our Saturday map that is, and applying ForEach.
>
> **[1:39](https://www.linkedin.com/learning/javascript-maps-and-sets/loop-over-a-map-with-foreach?u=76281980&t=99)** We're going to pass the parameters value and key. All right and then we'll set our function up. And if our key is equal to 12, so if key equals 12, then we're going to log out, actually I'm going to use a template literal here, It's time for, and then we'll put in our value here. Okay, so now if we run this, we'll see that It's time for lunch is logged out. So using ForEach with our map, we looped over it and we used the value and the key and then we set up an if statement, so if the key was equal to 12, then we logged out the value that was associated with that key. Great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** template (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Group entries with groupBy](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=0)** - [Instructor] The groupBy method is a static map method that organizes elements of an iterable into groups based on values returned by a specific callback function. This is a really great enhancement for the map object and those of you that have been around [JavaScript](../../Skills/Software%20Development/JavaScript.md) for a bit, you've probably seen something similar in libraries like Lodash and the Object Constructor also now utilizes groupBy as well. So it's a really wonderful and powerful method that can help you organize your data the way that you need it. And I'll show you an example of one particular way that you could potentially use groupBy in your own development. In this example, we have an array called inventory. In our inventory, we have effectively baking supplies. And let's say I own a bakery and I want to determine a very quick and easy way to know what things that I need to order. Usually for me and my bakery, if anything gets below a quantity of six, perhaps that's the time for me to restock. So if we think about how we would structure this code, we start by instantiating our map and setting that to the variable name result. Then we'll apply the groupBy method and pass it the inventory. So the inventory was our array that had our flour, our bananas, et cetera. The second argument is quantity.
>
> **[1:36](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=96)** So we're going to pass the quantity and that is what we want to look at per se, that is the value within the object that we're going to base our keys off of, how we're going to actually group the elements of the array. So then we're going to have this function implicitly return, and based on the quantity, we're either going to return that item as a restock or sufficient. So if quantity is less than six, then that particular item will be set in the map with a key of restock. Otherwise, it will get the key of sufficient. So we would iterate over that inventory and it would set our map up appropriately. And then we're going to call back to the get method. So we talked about the get method and that is when we can pass a key and it will return all of the values associated with that key. So if we logged out result.get restock, we should only have one item returned, which is an array of our bananas because it had a quantity of five, so it was less than the six. All of the other items in the array were given the key of sufficient. So you can see how this can be really powerful in maybe splitting up an array and displaying some things or not,
>
> **[3:13](https://www.linkedin.com/learning/javascript-maps-and-sets/group-entries-with-groupby?u=76281980&t=193)** or there's a lot of really interesting things that you can do with this, and it's a really powerful method when it comes to using maps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** groupby (4)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Maps 1](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=0)** - [Instructor] Welcome to your first CoderPad challenge for maps. For this particular challenge, we're going to set up a map and then we're going to determine the map size. So below in our test code, you can see that we already have a new map of fruit inventory set up for us. So now we just need to add individual items to that map. And then we're going to return the size of a map to test our solution. So the first thing that I'll do is start with our fruit inventory and then we're going to use the map method set to add each item in the inventory. So our first value here is going to be the key, which will be apples, and then the value of 10. So we'll just go right down the line with each of these items and add it to our map. So oranges 15 value, and then bananas right after. And that has a value of 20. Excellent. So we have all our items added to the map. Now we need to determine the size. So we're going to use the size property to do so. So fruit inventory, spell that correctly, dot size, but it's important here and this will be the case with all of our challenges
>
> **[1:32](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-1?u=76281980&t=92)** to make sure that we return the value that we want to check against the solution 'cause that will be the only way to do so. If we try to return this now, you'll see that our code returns undefined. So it's really important that we put our return statement here in front of the value that we want to test. So let's run it again and check and excellent. You can see that our code return three, which is the correct answer. Great work.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Maps 2](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-maps-2?u=76281980&t=5)** - [Instructor] In this next challenge, we want to determine if a map has the key of Brandon. So if we look in our test code, we can see that the map has actually been set up for us. So that step has been removed. We just need to see at this point, does that map contain a specific key? So let's go ahead and write out our return statement. And then we need to reference the allUsers map. And we're going to be using the method has to determine if that key exists. And the key that we're looking for is Brandon. I'll mention this in several different videos and lessons, but when it comes to strings in [JavaScript](../../Skills/Software%20Development/JavaScript.md), it's really important that the case matches. So it's going to be looking for an exact match for Brandon. If we were looking for Alice, if we passed a lowercase A instead of capital A, it would return false for us. So it's really important to make sure that the casing matches. So here we have, we're returning allUsers, which is our map, and we're checking to see, does it have the key, Brandon? So let's go ahead and run that test code. And we can see that, false, it does not have the key of Brandon. Marvelous work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** allusers (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)


### 2. WeakMaps

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the WeakMap object?](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=0)** - [Instructor] Now that we have learned about Map, how it works and its various methods, understanding the concept of WeakMaps should be fairly easy. WeakMaps are very similar to Maps with the biggest difference being that its keys are weak and can be garbage collected. What is garbage collection? As far as what you need to know for this course, garbage collection is a way of freeing up memory that has been allocated to objects that are no longer in use. The process of garbage collection is performed automatically in [JavaScript](../../Skills/Software%20Development/JavaScript.md). Now let's explore what sets WeakMap apart from Map. As mentioned, the most significant difference between WeakMap and Map is related to keys. When using a WeakMap, your keys must be objects. If you'll recall from the previous section, Map accepts any value as a key. With WeakMaps you cannot use primitive data types as keys. As a quick reminder, primitive data types include strings, numbers, booleans and more. Another major difference is the available methods on the WeakMap. The only methods that are available on a WeakMap are: set, get, has and delete. Because there are no iterator methods, in order to know if a key exists in your WeakMap, you'll have to know what the key is to access the value. When you're ready to start using WeakMap, you'll use the constructor new WeakMap to create a new WeakMap. Now that we have the foundations,
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakmap-object?u=76281980&t=93)** let's review the methods that you'll be able to utilize with WeakMap.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Same methods, different map](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-map?u=76281980&t=0)** - [Instructor] As we briefly touched on in our last lesson WeakMap has four methods that we can utilize when working with them in our code. These four methods are set, get, has and delete. These methods work in the exact same manner that they did with map. In this lesson, we're going to review how these methods work before diving into a challenge in the next video. The first method we will review is set. Just like map you'll use set to build your WeakMap. Remember your key cannot be a primitive value and it must be an object. The next method is get. We use get to retrieve the value associated with the specific key that we pass. We pass the key and the value is returned. If the value does not exist in the WeakMap the value undefined is returned. The WeakMap also utilizes the has method. We pass a key to the has method and it returns true or false based on whether or not the key exists in the WeakMap. And finally, the WeakMap also has the delete method available to delete individual keys. You simply pass the key of the key value pair you want to delete, and it will remove it from your WeakMap. Now that we've reviewed each of these methods let's try putting it all together in a challenge activity.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 3. Sets

[↑ Back to Table of Contents](#table-of-contents)

#### [The Set object defined](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/the-set-object-defined?u=76281980&t=0)** - [Instructor] Like Map, sets were introduced with ES6, otherwise known as ES2015. The key feature of Set is that it is a collection of unique values, meaning you can not have duplicates of values in the set and those values can be anything. Sets can be a really powerful tool in your [JavaScript](../../Skills/Software%20Development/JavaScript.md) programming. I'm sure you can think of some everyday examples where limiting a collection to unique values would be really helpful. Set comes with several methods as well as the size property. Many of these methods and their execution will be very similar to you after having learned about Map and WeakMap. You even initialize in the same manner. A set is initiated using new Set. Throughout this section, we will work through some examples together and give you a chance to try some things on your own. In the next lesson we'll get started with adding values to our set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** es6 (1), es2015 (1)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Add values to your set](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=0)** - [Instructor] In order to construct your new set, you will need to reach for the method, add. The add method adds a new value to your set upending the specified value to the end of your object. In order to add values, we simply apply the set method to our existing set and pass in the value. This method can also be changed which will save you some room in your code. Let's move on to an example and see add in action. As we did with maps, we will revisit the same example with sets as we learn each of its methods in property. For our sets example, let's imagine that we're planning a surprise birthday party for our friend. We're going to utilize a set because we want to make sure we don't have any duplicate email addresses when we send out our invitations. Let's start by creating a new set, invites. Once created, let's add our emails to the set using the add method. We're going to save ourselves some typing and chain together our adds. We take each of the emails we've been provided and add them to our set. If we were to log it out, we would see the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) set displayed with the size and the set that we created. Remember, sets do not allow for duplicate values, so even though we have added [john](../../Glossary/Tool/John%20the%20Ripper.md)@[mail.com](https://mail.com) twice, we will only have it appear in our set once. Let's head over to our code and try a new example together. For our set example, we are going to the grocery store and we've asked our family for ice cream flavors that they'd want.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=93)** We're going to try to get all the flavors, but we want to make sure we simplify the list. The first thing that we'll do is create a new set, and we'll call this ice cream, and we'll set this equal to new set. Then I'm going to take the flavor requests listed above and add them to my ice cream set. We will use chaining here to save us some typing. So I'll take ice cream dot add and then the first one is chocolate. And then I can keep going as such chaining add with each of the values here. So this saves us a little bit of typing. So we have chocolate, [Vanilla](../../Skills/Web%20Development/Vanilla.md), coffee. We have another request for coffee, and then strawberry, and then one final request for vanilla again. Alright, so then, if we log this out, alright, and then we run it down here, we'll see that we have a set and it has four items in it, chocolate, vanilla, coffee and strawberry. As you can see, even though we had a couple duplicate requests, we had two people who wanted coffee and two people who wanted vanilla, because set only allows for unique values, it only counts them once. So vanilla, we only see vanilla once,
>
> **[3:06](https://www.linkedin.com/learning/javascript-maps-and-sets/add-values-to-your-set?u=76281980&t=186)** we only see coffee once. So it's really great when you have a list of items or a collection of items and you don't want any duplicates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (6), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [John](../../Glossary/Tool/John%20the%20Ripper.md) (1)
> **CLI Commands:** make (2)
> **URLs:** [mail.com](https://mail.com) (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Does Set have your value?](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=0)** - [Instructor] Depending on what you're working on, you may simply need to check whether or not a value exists in your Set. This is where the Has Method can be very helpful. It's usage is identical to that in Maps and WeakMap. The Has Method is applied to your existing Set, passing the value that you're checking for in the Set. If the Set has the value, true will be returned, if not, false will be returned, pretty straightforward, right. Now let's move to our birthday invitations example and see how this might work in a real world example. In this example, we want to see if Sue and Sally are included in our invite Set. First, we will check to see if Sue exists in our Set. She does, so the return value is true. In the second example we want to see if Sally exists in the set and she does not, so false is returned. All right, let's head to our editor and try an example together. Similar to how we did with Map, we're going to keep with our ice cream Set throughout the course of this particular section with Sets, just so we don't have to initialize the Set over and over again with add. So we're going to keep our ice cream Set, we know we have our flavors added, all that good stuff. So for this particular exercise we're going to be using the Has Method, and we want to know does our Set contain the following flavors, the first being mint chocolate chip and the second being coffee. So we will start by creating a new variable, and you don't have to do this, but just for sake of example,
>
> **[1:35](https://www.linkedin.com/learning/javascript-maps-and-sets/does-set-have-your-value?u=76281980&t=95)** here, I'm going to and we'll call this hasMintChocChip. All right, and then we'll take our ice cream Set and apply the Has Method, and then pass in the value 'mint chocolate chip'. All right, and then below I'll log out "Does our set have mint choc chip?" and then pass in the value that we have that set to. All right, and remember this is going to return true or false. All right, the next is coffee. So does our Set have coffee? So we will do pretty much the exact same thing, except I'm going to call this one hasCoffee, and we'll take our ice cream Set and apply the Has Method and then pass in coffee. And then below I'm going to, actually, just copy this and we'll swap out mint chocolate chip and coffee and then hasCoffee. All right, so now when we run this in the console we see, Does our set have mint choc chip? false. And we can see that if we look at the Set that we created and the values that we added, but, you know, when we're working with this in the real world we may not have that right easily available. And then for our second one, Does our set have coffee? and the answer there is true.

> [!info]- Semantic Content
>
> **Code Identifiers:** hascoffee (2), hasmintchocchip (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Get your set size](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=0)** - [Instructor] One of the wonderful things about learning about maps and sets in tandem is that there are so many overlapping concepts, including the size property. Sets have a single property as well, size, to let us know how many elements are contained within the set. The syntax is really simple. You apply the property directly on your set and it will return a number indicating how many values are in your set. Remember, this is a property, not a method, so we don't need parentheses to execute it as we do with methods. Let's revisit our birthday invites example. We create a new variable, inviteSize, and set that equal to invites.size. If we log that out, we'd see that it returns 4. Remember, sets do not contain duplicate values. All right, now let's head to the code and try an example together. In keeping with our ice cream set example, we want to find out how many items are in our set. For this example, let's just simply log the answer out, instead of setting it to a variable. I'll set up my console log and then we will use template literals, and I'll say "Our set is" and then I'll use my dollar sign and curly braces. And within this I'll use our iceCream set and apply the size property. So I'm going to say, "Our set is" and then whatever the number elements, or we'll say, "Our set contains" X elements.
>
> **[1:37](https://www.linkedin.com/learning/javascript-maps-and-sets/get-your-set-size?u=76281980&t=97)** All right, and then if I run this down here, I'll see that our set contains four elements. All right, and remember, if we didn't have the knowledge that we have about sets and the duplicate values, we may look at our set up above, where we've added each of the values, and think, "Why does that only return four elements?" But remember no duplicate values in a set.

> [!info]- Semantic Content
>
> **Code Identifiers:** invitesize (1), icecream (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Delete and clear values in your set](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=0)** - [Instructor] In order to delete and clear values from a set, we can reach for methods of the same name. The first method is delete. This will remove a single value from a set. In order to delete a value from a set, you will simply apply the delete method to your set and pass in the value that you'd like to delete. It's that simple and almost identical to what we did with maps. Moving onto the clear method, this method will remove all of the values from a set. You may remember this from our maps discussion as well. To clear your set, you simply apply the clear method to your existing set. It does not take any arguments. If you want to check that your set was cleared successfully, you could use the size property to make sure it's back to zero. Let's take a look at our invites example and see these methods in action. We decided that we no longer want to invite Jane to our party, so we decide to delete her invite. We applied the delete method to the invite set and pass in jane@[mail.com](https://mail.com). Next, we want to clear the set out completely. In order to clear the set, we apply the method clear to our invite set and that's it. If we wanted to confirm that it had been cleared, we could get its size, which would return zero. Now let's take our delete and clear knowledge to our editors and try another example together. Here, we have our ongoing ice cream flavor set, and the first thing that we want to do is delete [Vanilla](../../Skills/Web%20Development/Vanilla.md) from the set. We will take our ice cream set and apply to delete, passing in vanilla.
>
> **[1:34](https://www.linkedin.com/learning/javascript-maps-and-sets/delete-and-clear-values-in-your-set?u=76281980&t=94)** So icecream.delete, and then we're going to pass in vanilla to remove that from the set. So then, if we log our set out, we'll say does vanilla still exist? And then we'll log out our ice cream set. Alright, and then we want to clear the set entirely. All we have to do is apply the clear method and that's it. So we do icecream.clear. And then, remember, if we want to confirm that it's been cleared, we can get the size. So I'm just going to log out here, did our set clear? And then get its size. Alright, so let's run this in the console, and after we delete the first test that we did when we deleted vanilla from the set, we can confirm that it was no longer in the set after we did that. And then when we cleared it, which remember, means that we removed everything from the set, we can confirm that it was cleared because the size is now zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (5)
> **CLI Commands:** make (1)
> **URLs:** [mail.com](https://mail.com) (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Iterate over values in a set](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=0)** - [Instructor] Before we move into the next two set methods, let's take a quick review on iterators. We've learned about what an iterator is earlier in this course, and we know that it is an object that defines a sequence. We will use the property next to iterate over the iterator that is returned by the set methods, values and entries. In this lesson, we're going to talk about the values method. Just like the values method on map, the values method for set also returns an iterator object with the values in their insertion order. To utilize this method, we will simply apply the method to an existing set. This method does not take any arguments and is best utilized being set to a variable that you can access as needed. If we want to access any of the values of the iterator, that have been returned by the values method, we will apply the next method to that variable and then a value property. Let's take a look at our invites example and see how the values method is used. Using our existing invite set, we will create a new variable called invite values. We will set this equal to invites, referencing our existing set and apply the values method. Then to obtain our first value, we will take our new variable, invite values, and apply the next method and value property. This will return [john](../../Glossary/Tool/John%20the%20Ripper.md)@[mail.com](https://mail.com). Let's head over to our editor and try another example together. Using our ice cream flavor set,
>
> **[1:32](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-values-in-a-set?u=76281980&t=92)** we want to determine what the second value is in the set. First, we'll create a new variable called ice cream values. Ice cream values. And we're going to set this equal to our set ice cream, with the values method applied. And remember this doesn't take any arguments. Next, we know that we need the second value. So we're going to apply next to our newly created variable. So we'll take ice cream values and apply next. This will give us the first value in our set. We need the second. And we're going to go ahead and create another variable and we'll just call this second value. And then we'll set this equal to ice cream values dot next. And this time we want the value. All right. So if you log this out. What is the second value in my set? And then we'll pass in this variable that we created. And then we'll log it down here. And we see that the second value in my set is [Vanilla](../../Skills/Web%20Development/Vanilla.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [John](../../Glossary/Tool/John%20the%20Ripper.md) (1), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1)
> **URLs:** [mail.com](https://mail.com) (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Iterate over a set with entries](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=0)** - [Instructor] The next method we will discuss is entries. And it's another set method that returns an iterator. As we have learned, our set just contains values unlike map, which contains keys and values. And this entries method will return an array that contains the value twice. You may be wondering why the value is returned twice? And the reason is that it was done in order to keep the API similar to map. This is an interesting value to work with and you may find that it's not something you'll reach for very often, but it's still important to learn about how this method works. Just like the values method we will iterate over the available entries by using the next method, and then applying value. If we take a look at our invites example, we can see that this follows a very similar pattern and usage to the values method. We start by creating a new variable invite entries and set that equal to the invites with the entries method applied. Then if we want to determine the first set of entries, we apply the next method and get the value. The value that will be returned is an array with [john](../../Glossary/Tool/John%20the%20Ripper.md)@[mail.com](https://mail.com) twice. Let's head to the code and try this on our own. Here, we want to determine the first entry in our ice cream set. We'll start by creating a new variable that we'll call ice cream entries, and we'll set this equal to our ice cream set with the entries method applied. Next, we're going to create another variable to store our first entry.
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-a-set-with-entries?u=76281980&t=93)** So for this particular example we're going for our first entry. We'll call this shockingly first entry and we'll set this equal to our ice cream entries variable that we just created, we'll apply the next method and we'll get that value. And then if we log this out, my first entry in my set is, all right and let's log this out. All right, my first entry in my set is chocolate and remember, because the API was kept similar to that of map, we get the value twice. So remember map it returned the key and the value in an array here with set when we use the entries method it returns the value twice in an array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [John](../../Glossary/Tool/John%20the%20Ripper.md) (1)
> **Env Vars:** api (2)
> **Definitions:** is an  (2)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** find (1)
> **URLs:** [mail.com](https://mail.com) (1)
> **Speakers:** - [instructor] (1)

#### [Iterate over your set with forEach](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=0)** - [Instructor] Our final lesson on sets will cover the ForEach method. At this point, you should be an expert on ForEach. This method will work as expected with a few minor differences in the callback function. The ForEach method provides a callback function for each value in the set. Just like map, the ForEach method with set accepts four optional parameters. For the sake of this course, I'll only be focusing on three: value1, value2, and set. As we mentioned in the last lesson, the APIs for map and set are the same. Because sets only contains values, both value1 and value2 will be the same. The set parameter represents the entire set that is being looped over. If we take a look at our invite set, we're looping over our set with ForEach. And if the value starts with the letter J, we're going to log it out. Starts with is a [JavaScript](../../Skills/Software%20Development/JavaScript.md) string method that comes in handy in this particular example. Now let's head to our code and try some exercises together. For this exercise, we're going to loop through our ice cream set. And if the value does not equal [Vanilla](../../Skills/Web%20Development/Vanilla.md), then we're going to log it out in the console. We'll start by taking our ice cream set and applying the ForEach method. For this particular example, and I'll go ahead and set up our function here, we know that both values are going to be the same. So we have value1, value2, and then set. We really are just concerned with one value. We don't need the same thing twice.
>
> **[1:34](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=94)** So we're just going to pass in value to our callback function. Then we want to log out if the value does not equal vanilla. So we say, "If value does not equal vanilla," then we'll log it out. We'll say, "Flavor," and then we'll pass in that value.
>
> **[1:59](https://www.linkedin.com/learning/javascript-maps-and-sets/iterate-over-your-set-with-foreach?u=76281980&t=119)** Alright, so if we run this, we see that all of our non-vanilla flavors are logged out. We have chocolate, coffee, and strawberry. So this can be really handy again with kind of similar to the entries method, where you're getting the value twice. You know, this is still useful. You just don't need to use all of the parameters that are available to you, but a great way to loop over your set when you're using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Cross-References:** we mentioned (1), in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Sets 1](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=0)** - [Instructor] In this challenge, we're given an array of pet names and we need to create a new set based on this array. So the first thing that we'll need to do is actually establish our new set. So I want to point out from the beginning that there could be a couple different ways that you achieve the correct solution in this particular challenge. My way is not the only way. So keep that in mind when you are working through this. So the first thing that I'm going to do is I'm going to create a new variable and I'm going to call it petSet, and I'm going to set that equal to a new Set. Then I know I want to add each item that's in this namesForFamilyPet array. I want to add it to this new set. So what I'm going to do is actually iterate over this array, and, for each name, I'm going to add it to the set. So we will actually utilize our array methods here. So namesForFamilyPet and we're going to to use forEach here. And I'm going to say forEach(name) and I'm going to implicitly return the petSet. So we're going to add, that's how we add items to our set. So petSet.add(name).
>
> **[1:33](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-1?u=76281980&t=93)** So each time it loops over a name in the array, it's going to add it to the set. All right, and then now in order to check our solution, we want to return the set that we created. Whoops, and make sure that that's correct and check it. All right, let's go ahead and do that. Excellent, so you can see that our set has five names. It's removed all of the duplicates and it's whittled it down to those five names. Awesome job.

> [!info]- Semantic Content
>
> **Code Identifiers:** petset (3), namesforfamilypet (2), foreach (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Sets 2](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=0)** - [Instructor] For this challenge, we're given an array of guesses. We're also given a winning number, and we need to determine, is that winning number in our guesses set that we're going to create? So the first thing that we want to do is set up our set. So very similar to the challenge that you just completed. We're going to go ahead and create a new variable, and I'll call that guessesSet, and we'll instantiate a new set here. Then, very similar to last time, I'm going to loop over this guesses array, and for each value, I'm going to add it to our set. As I mentioned before, there could be a number of different ways that you decide to do this. I'm going to show you one way that's going to give you some practice with array methods as well. If you choose to do it another way, that's totally fine, as long as you get the correct answer or solution and using a set, then you've done what you're supposed to do. So let's go ahead and we'll reference our array of guesses, and we're going to loop over it with four each. And I'm just going to call it for brevity's sake x and implicitly return it. And then reference our guessesSet and use the method add.
>
> **[1:34](https://www.linkedin.com/learning/javascript-maps-and-sets/solution-sets-2?u=76281980&t=94)** And for each value that comes through, we're going to add that to our set. Awesome. Now, we want to determine if this set has the winning number. So we can either create a new variable, so I could create a new variable and call it hasNumber and set that equal to guessesSet. And we're going to use the method has and see if it has the winning number. Okay. Another way you could do this, I believe in the previous challenge is the way that I did it, but you could remove the variable and you could just return this to get your solution and check it. So let's do it that way. Let's try it and go ahead and test our code. Excellent, we can see that true, our guesses has the winning number in it. Very good work.

> [!info]- Semantic Content
>
> **Code Identifiers:** guessesset (3), hasnumber (1)
> **Analogies:** similar to (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. WeakSets

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the WeakSet object?](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/what-is-the-weakset-object?u=76281980&t=0)** - [Instructor] The last lesson in this course is on WeakSet. The WeakSet is very closely related to Set, with some key differences. You can think about this relationship in the same manner that you did regarding Maps and WeakMaps. Just like Sets, WeakSets are a collection of objects that may occur only once within the given object, making them unique values. The main difference is that the reference to objects, here, are weak, as you might infer from the name. When we discussed WeakMaps, we briefly touched on the concept of garbage collection, which is a way of freeing up memory that has been allocated to objects no longer in use. With WeakSets, the same holds true. Because of its weak reference, the WeakSet can be garbage collected if there's no other reference to it. In terms of similarities, WeakSets and Sets both hold only unique values, and both have methods that allow you to add values, delete values, and check whether or not the WeakSet has a specific value. In addition to having a weak reference, WeakSet's values must be objects. Sets could hold any primitive values. Additionally, WeakSets do not provide all of the same methods, it only has add, has, and delete, nor does it have the size property. Now that we have the foundations of WeakSet, let's review the methods that you'll be able to utilize with WeakSet.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Same methods, different set](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/same-methods-different-set?u=76281980&t=0)** - [Instructor] As we learned in the previous lesson a WeakSet has a few of the same methods as Set. These are add, has, and delete. At this point in the course, these methods and how they operate should be very familiar to you. We're going to review each method and then conclude this lesson by implementing each of them with WeakSet. The first method is add. We will use this method to construct our WeakSet. Remember with WeakSets, our values must be objects. You simply apply the add method to your WeakSet and pass in your value. Next is the has method. This method returns a boolean depending on whether or not your WeakSet has a specific value. You apply the method to your WeakSet and pass in the value that you're checking for. And last but not least, the delete method. This method will remove a value from your WeakSet based on the value you pass to the method when applied to your WeakSet. That was a quick review but I think you're quite proficient with these methods at this point since they have been so similar across the objects that we've learned about. Now, let's try a few challenge questions with WeakSet.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-maps-and-sets/next-steps?u=76281980&t=0)** - [Jamie] Thank you so much for joining me for this course on [JavaScript](../../Skills/Software%20Development/JavaScript.md): Maps and Sets. I hope that you've reinforced your understanding of maps and sets and how you can incorporate them into your code more often. I strongly encourage you to keep coding. Keep working on your JavaScript. If you're learning on your own, the best way to learn is to build something. If you're working as a developer or software engineer on the job, see if there are ways that you can incorporate maps and sets into your current projects. Check out other [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses on JavaScript, as well as JavaScript frameworks like [Angular](../../Skills/Web%20Development/Angular.md), [React](../../Skills/Web%20Development/React.js.md) and View. I hope that you found this course to be valuable. Please feel free to connect me here on LinkedIn or you can visit my blog at [jamiepittman.com](https://jamiepittman.com). Keep up the great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Angular](../../Skills/Web%20Development/Angular.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **URLs:** [jamiepittman.com](https://jamiepittman.com) (1)
> **Speakers:** - [jamie] (1)


## Instructor

- [Jamie Pittman](../../Instructors/Software%20Development/Jamie%20Pittman.md)

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [Improve Your JavaScript Language Skills](../../Paths/Software%20Development/Learning%20Paths/Improve%20Your%20JavaScript%20Language%20Skills.md)
← [JavaScript- Arrays](JavaScript-%20Arrays.md) | **6 of 8** | [JavaScript- Patterns](JavaScript-%20Patterns.md) →

## Appears In

- [Improve Your JavaScript Language Skills](../../Paths/Software%20Development/Learning%20Paths/Improve%20Your%20JavaScript%20Language%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)