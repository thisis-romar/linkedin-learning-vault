---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-python-working-with-data
url: "https://www.linkedin.com/learning/advanced-python-working-with-data"
duration_minutes: 125
duration: 2h 5m
level: Advanced
updated: 8/15/2024
learners: 21520
skills:
  - Python (Programming Language)
  - Data Management
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-python-working-with-data-4312001/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHbBRqu7lDW8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724260657260?e=2147483647&amp;v=beta&amp;t=fFGaBqQ24gVxJcQyKxRB8rhls85NIr71EKpUrRY478k"
linkedin_topic: Software Development
learning_paths:
  - '[Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)'
  - '[Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)'
prev_courses:
  - '[Advanced Python- Classes and Functions](Advanced%20Python-%20Classes%20and%20Functions.md)'
  - '[Python Statistics Essential Training](Python%20Statistics%20Essential%20Training.md)'
next_courses:
  - '[Python Data Structures- Stacks, Deques, and Queues](Python%20Data%20Structures-%20Stacks%2C%20Deques%2C%20and%20Queues.md)'
  - '[Advanced Python- Working with Databases](Advanced%20Python-%20Working%20with%20Databases.md)'
path_nav: '[{"path":"Master Your Python Skills","position":3,"total":11,"prev":"Advanced Python- Classes and Functions","next":"Python Data Structures- Stacks, Deques, and Queues"},{"path":"Master Python for Data Science","position":2,"total":8,"prev":"Python Statistics Essential Training","next":"Advanced Python- Working with Databases"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/database-management
  - skill/python-programming-language
  - skill/data-management
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Python-%20Working%20With%20Data.md)

![Advanced Python: Working With Data](https://media.licdn.com/dms/image/v2/D4E0DAQHbBRqu7lDW8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724260657260?e=2147483647&amp;v=beta&amp;t=fFGaBqQ24gVxJcQyKxRB8rhls85NIr71EKpUrRY478k)

# Advanced Python: Working With Data

> Data science is one of the fastest-growing areas of technology today. And whether you work with large data sets or just need to process spread sheet files, Python is a great language to use when working with data-intensive applications. In this course, Joe Marini gets you started on working with data in Python, highlighting some of the most useful built-in features of the language. Using a real da

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data) | 2h 5m | Advanced | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Python and Data: Made for each other](#python-and-data-made-for-each-other)
  - [Getting Set Up](#getting-set-up)
  - [The sample data set](#the-sample-data-set)
  - [Tour of CoderPad](#tour-of-coderpad)
- [**1. Built-In Data Functions**](#1-built-in-data-functions) (7 videos)
  - [Using built-in functions](#using-built-in-functions)
  - [Finding min and max values](#finding-min-and-max-values)
  - [Data utility functions](#data-utility-functions)
  - [Sorting data](#sorting-data)
  - [Data filtering](#data-filtering)
  - [Data transformation](#data-transformation)
  - [Solution: Build a data summary](#solution-build-a-data-summary)
- [**2. Collection Classes**](#2-collection-classes) (6 videos)
  - [Overview of collection classes](#overview-of-collection-classes)
  - [Named tuples](#named-tuples)
  - [Default dictionaries](#default-dictionaries)
  - [Counters](#counters)
  - [The deque class](#the-deque-class)
  - [Solution: Classify event types](#solution-classify-event-types)
- [**3. Serializing Data in Python**](#3-serializing-data-in-python) (6 videos)
  - [Overview of serialization](#overview-of-serialization)
  - [Serializing data as CSV](#serializing-data-as-csv)
  - [Serializing data as JSON](#serializing-data-as-json)
  - [Deserialization of data](#deserialization-of-data)
  - [Challenge: Create a CSV file](#challenge-create-a-csv-file)
  - [Solution: Create a CSV file](#solution-create-a-csv-file)
- [**4. Python Logging**](#4-python-logging) (3 videos)
  - [Overview of logging](#overview-of-logging)
  - [Basic logging](#basic-logging)
  - [Custom logging](#custom-logging)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Python and Data: Made for each other](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980&t=0)** - [Joe] One of the most popular, fastest growing disciplines in the world of technology today is [Data Science](../../Topics/Data%20Science.md), and the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming language is at the center of it all. Hi, I'm Joe Marini. I've been building software professionally for some of the best known companies in Silicon Valley for more than 30 years. In this course, we're going to start learning about some of the built-in features that make Python a great language to use when working with data-intensive applications. We'll see how to perform common data operations like sorting and filtering, determining basic information like minimum and maximum values, and how to read and write data to and from other formats like CSV files used by spreadsheets and [JSON](../../Skills/Web%20Development/JSON.md) for interchange with other systems and programs. Come join me in my course and take a look at what Python can already do to help you make sense of your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Data Science](../../Topics/Data%20Science.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** python (3), make (2)
> **Env Vars:** csv (1), json (1)
> **Speakers:** - [joe] (1)

#### [Getting Set Up](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=0)** - [Instructor] This course is intended for developers who are already familiar with the basics of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and want to learn about some of the features related to working with data. You don't need to be a deep expert on the language in order to take this course, but you do need to have an understanding of the basics like how to write functions, use variables, and so on. There are a couple of different ways you can work with the example code in this course. I've set up a [GitHub](../../Skills/Software%20Development/GitHub.md) repository with the examples and you can find it at this link. The course is organized into two separate folders. The Finished folder contains all of the code examples in their finished state, so you can compare your code against them as you work through the course. The Start folder contains the code examples in their beginning state, and this is the folder I will be working in throughout the course as we build towards the Finished state for each example. If you want to download the examples and work with them locally on your computer, then that's easy enough to do. You can just go over here to the code menu in the local tab and you can clone the repository or download a ZIP file and use your favorite code editor to work on them. You'll just need to make sure that you have Python installed on your computer, at least version 3.10 in order to use the examples. But this repository has also been set up with a GitHub Codespace, so you can just work directly online with nothing to install. So all you need to do is fork a copy of the repository into your own GitHub account and then fire up a codespace here in the code menu.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=94)** There's nothing to install. You'll get a complete environment and you'll be ready to go. Now, you can see I've already done that, right? I've already got my codespace set up. What you'll do is you'll click on this plus menu here and create your own codespace. So I'm going to be using the [Codespaces](../../Skills/Software%20Development/Codespaces.md) in this course. Either way works fine, but I'm going to be using codespaces throughout the course. All right, so let me open up my codespace and show you what it looks like. And when you create your own codespace, it's going to take a few moments to spin up, okay, so just be patient. So when the codespace starts, you'll see a browser-based version of Visual Studio Code. And here in the files list are all the files that you're going to need in the course. You also have a built-in terminal, which if I go to the menu over here and the view menu, I'll bring up the terminal, and the terminal is how we'll run some of the examples. And I can check to see if Python is already installed and sure enough, there it is, all right. You're also going to want to make sure that you have the Python and Pylance extensions installed. So over here, this little four boxes is the extensions. And if I scroll down in my list, you'll see that here's Python and Pylance. Now, this is my own codespace so I have a bunch of extensions installed and you don't need to worry about these. All you need to worry about are Python and Pylance and you can find them in the marketplace if you don't already have them. Just go up to this search box, type in Python. It should be the first result that comes up. It's this one here from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). You can see it's got a ton of downloads.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=186)** And if you want to install this one, in fact, this is the only thing that you'll need to install because it will automatically install Pylance and Jupyter and a couple of other things to give you a great Python development experience. So once you've done that, you're pretty much ready to go. All you need to do is open Start menu, go into chapter one and you're ready to start coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (8), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** python (8), find (2), make (2)
> **Prerequisites:** install (5), set up (3), you'll need (1)
> **Tools:** github (3), terminal (3), visual studio (1), jupyter (1)
> **UI Navigation:** click on (1), go to (1), scroll down (1)
> **Exercise Files:** download the (1), zip file (1)
> **Env Vars:** zip (1)
> **Versions:** version 3 (1)

#### [The sample data set](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=0)** - [Narrator] I've included a sample data set to work with in this course. Now, not all of the examples are going to use it, but it's a significant set of data that represents a real world use case of working with data using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). So the data set that we'll be working with comes from the US Geological Survey, and contains information about all of the measured earthquakes around the world. And this here is the homepage for the USGS Earthquake Information Service. So I'm going to scroll down here and I'm going to click on this little [Real-Time](../../Skills/Database%20Management/Real-Time.md) notifications link. And when I do that, that takes me to the data feed page. If I scroll down a little bit, and if, by the way, you can just go right to this link if you want to. So you can see here that there are some real-time data feeds about earthquake information in different formats. So there's an ATOM data feed and we've got some spreadsheet data over here. But the one that we're going to be using is this one, the GeoJSON Summary Feed. So let's go ahead and click on that link. And that will take us to this page, which is the information page that describes the GeoJSON data format and provides several links to the actual earthquake data. And you can see that the data is available in several different feeds. So we have for the past hour, right? We have the past day, here's the past week, and the past month. And it's several subsets organized by the size of the earthquake. So we've got significant earthquakes all the way down to everything, right? So I'm going to click on one of these data feeds
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=93)** and you can see it's just raw [JSON](../../Skills/Web%20Development/JSON.md) data. Okay, so let's click back. All right, so now if we scroll down a little bit, this section right here describes the format of the data. And it starts with a description of the data in this [Metadata](../../Skills/Web%20Development/Metadata.md) field. So when it was generated, here's the URL to the data, the title of the data set, the number of earthquakes, and so on. And so we're going to skip over this B box item 'cause we're not going to be using it. And then there's an array of data, somewhat confusingly called "features", which is where the detailed earthquake data itself is contained. Now we're not going to be using all of these fields. But that's okay. You can see that there's plenty of data here for you to explore on your own. And you can click each of these links to get more information about that particular data field. All right, so let's go take a look at the actual data set that I've included with the course. And you can see here in the list, I've got this 30DayQuakes.json file. So I'm going to go ahead and click on this. And this data, I've downloaded it from the website, so we can use it locally. It represents all of the measured earthquakes for the past 30 days. And remember, if you go look at this link now, the data is obviously going to be different for you because I captured this at a specific point in time. And you can see it's a pretty large data file. It has almost 12,000 earthquakes in it. And if we look at the first item, we can see it had a magnitude of 1.54.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=189)** It was someplace in California. And let's see if we see the felt reports. Looks like nobody reported feeling it. Down here, we have the geometry of where the quake happened. So we're going to be using this data throughout the course and we'll be looking at a variety of ways to use Python to parse this data set and get some insights out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **UI Navigation:** click on (4), scroll down (3)
> **Env Vars:** usgs (1), atom (1), json (1), url (1)
> **CLI Commands:** python (2)
> **File Paths:** 30dayquakes.json (1)
> **Versions:** 1.54 (1)
> **Tools:** atom (1)
> **Speakers:** - [narrator] (1)

#### [Tour of CoderPad](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has four areas. In the top left, you'll see instructions. There's a code editor here in the top right for you to write your answer. There's another code editor down here in the bottom right where you see how your code will be used. And there's a console for output in the bottom left. You can use these drag handles to allocate space as you like as you're working with the challenge. To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenge's parameters and the desired result. Depending on the challenge, you will see some additional information in the instructions, such as an explanation of the parameters that your code will be given, along with some examples of what the expected output might look like. So create your answer in the top right code editor.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=93)** There are comments in the starting code showing where to put your solution. And when you click test my code, you'll see a message indicating whether your code returned a correct result. So let's go ahead and try that. I'll click on test my code, and you can see that I'm clearly returning the wrong answer. So I get a message saying, "Hey, something isn't working." It shows you what my code returned. Now if your code isn't successful, you can ask for help. And the way that you do that is by modifying these two variables, show expected result and show hints. So I'm going to change each of these to true. All right, and then I'll execute my code again. All right, in this case, you can see that my code is still wrong, and it shows that my code returns zero, but the expected result was 19. And then, I'm given a hint to help me along with the challenge. Now, the code editor in the lower right shows you how your code is going to be used. And in some cases, you can change that code to experiment with different cases. Let's go ahead and return the right answer. So I'm going to return max(numbers). All right, and now when I run this code, right, we can see that the answer is now correct, and 19 sure is the largest. I'll make the largest 25, and I'll change some of these other numbers. I'll make this one a six. And let's run it again. And now we can see that my code
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=185)** is, again, returning the right answer. Now, regardless of whether your answer is successful, you're going to see messages here in the console output in the lower left. And if any of the messages are too long to fit in that area, you can scroll sideways to see all of the text. When you've finished each code challenge, return to the course's table of contents and click the next video to see my solution so you can compare it with your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Built-In Data Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Using built-in functions](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=0)** - [Instructor] We are going to start off by taking a look at some of the built-in functions that [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) already has for working with data. And these are functions that you can just use out-of-the-box, without having to install any additional libraries or modules. Python provides basic functions for some very common operations related to working with data, such as the min and max functions, which identify the smallest and largest value in a given data set; the any and all functions, which can be used to determine whether any or all of the items in a data set match a certain criteria. Then there's the sum function, which as you've probably guessed, is a quick way to add up a set of data values. Then of course, there are the sorted and sort functions, which are used to sort data in a particular order. There's the filter function, which is used to selectively determine which values to remove and which ones to keep in a data set. And of course, there's the map function, which is used to transform values from a dataset into different kinds of values. So we'll take a closer look at each of these functions throughout this chapter and how they can be used to operate on data sets. And as you can see, there's quite a bit that Python can do right away just using some of the built-in functions in the language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Finding min and max values](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=0)** - [Instructor] In this example, we'll see how to use the min and max functions to find the smallest and largest data values in a given data set. And so here I am in my [GitHub](../../Skills/Software%20Development/GitHub.md) repository. And remember, you're going to want to make a fork of this in your own GitHub. And I've already got a codespace up and running so you'll need to make one of your own [Codespaces](../../Skills/Software%20Development/Codespaces.md). So I'm going to bring up my codespace. All right. Once my codespace is up and running, I'm going to go into the Start folder. And in chapter one, I'm going to open the minmax file. So here at the top of my code, I have two lists, right? One is a set of numbers and the other is a set of string. So let's use the min function to find the smallest value in each of these lists. So I'll print out the result, and I'm going to use an f-string to do this. And I'll just simply write, "The minimum value is," and I'll call the min function on the values list. And I'll do the same thing, make a copy of that line, and I'll call the min value on the strings list. Okay? And then let's do the same thing for the max function. So I'll just make a copy of these two lines and paste, and just call max in both cases. All right. And let's go ahead and run what we have. Now remember, we can do this a couple of ways. I can open up the built-in terminal here
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=94)** in Visual Studio Code, and I can go into my Start folder, and I can go into chapter one, and then I'm going to run using the [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) command, the python command, I'll call minmax.py. And there you can see the output. Of course, you can also, if you have the Python extensions installed in VS Code, you can just right click and choose Run Python File in Terminal. That also works. But here in the results, you can see that the smallest number in the list is 1.6 and the large number is 6.1. And then we got these two string results. Now, what does it mean to have a small and large string value? In this case, the min and max functions are using the alphabetic order of each [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) to determine what is small and what is large. But what if we wanted to use a different property of the strings to measure what small and large mean? To do this, both functions, let us define what's called a key function. And this function's job is to return a value that can be used in the min or max calculation. So for example, if we wanted to find the shortest and longest strings, we would specify a key function that returned the length of each string. So let's go ahead and close this terminal. And what I'm going to do is I'm going to copy these two lines, and I'll paste it down here in the key area. And I'll need to use strings on both of these.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=192)** And I want min and max for this example. All right, so then what I'm going to do is I want to key off the length of each string. So what I'm going to do is specify the key function, and I'm going to call the built-in len function in Python, so that returns the length of each string. And I'll do the same thing here. Okay, so now let's run this again, right? And now you can see that the smallest length string is 1, and the longest length string is 18. So that's different than the results we got here. These were alphabetical. These are an order of their length, okay? So now let's take what we've learned and apply it to our earthquake data set. So close this. All right, first I'm going to uncomment these two lines that open the [JSON](../../Skills/Web%20Development/JSON.md) file, and load the JSON code. Now, if we go back and look at the data, right? So remember that inside the features list, each one of these seismic events has a magnitude property, okay? So let's find the smallest and largest earthquakes as measured by magnitude. Let's go back to my code. So I'm going to do a couple of things. First, I'm going to print out the title of the data set. And so you can see here that I've loaded the JSON code into this data variable, and that gives me this dictionary, right? So inside here I'm going to operate
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=284)** on the [Metadata](../../Skills/Web%20Development/Metadata.md) and the title properties. So I have to index into that dictionary using metadata, and then title. And then I'm going to follow that up with the number of earthquakes. So I'm going to print the length of the features list, right? Because remember, this list right here contains all the earthquakes. All right. Now I'm going to define a function called getmag. And this will take a specific earthquake and return the magnitude. So I'm going to write some code that says that the magnitude is equal to the passed in data item, and I'm going to get the properties, and I'm going to look at the magnitude field of each one, right? And again, if we look here, so here in each one of these features, there's a properties, and then the first properties is magnitude. So that gives me the magnitude value. Now, that might be null, so I have to check to see if magnitude is None, because if it is, then I'm going to set magnitude equal to 0. Otherwise, I'm going to return a floating point value. Do it that way. I'm going to convert magnitude to a floating point value, okay? So now I just need to use the min and max functions
>
> **[6:22](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=382)** to find each value using getmag as the key provider. All right? So I'll print out the minimum, and I'm going to look at the data, and I'm going to look at the features list. And my key function is going to be the getmag function, right? And then I'll do the same thing for max. So this will give us the min and max seismic items. And then I'll just go back up here, and I'm going to comment out the previous examples, so that they don't get in the way. All right. So now let's run our updated code. Okay? And we can see that here, we've got the title, all right? And here we have the number of events. So that's these two lines right here. Print the title and print the length of the data set. And then we get the minimum value, right? So here we have 1, this one is the magnitude of -1.31, okay? So that's the smallest magnitude. And then we look at the next JSON output and we see here that the magnitude is 6.3, all right? So we've got our smallest and largest earthquakes. So you can see that the min and max functions are pretty flexible in that you can use them for basic data types,
>
> **[7:55](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=475)** but they can also be used with more complex [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) by using the key function to provide a value to measure them with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **CLI Commands:** find (5), python (5), make (4)
> **Tools:** terminal (3), github (2), visual studio (1), vs code (1)
> **Env Vars:** json (4)
> **Versions:** 1.6 (1), 6.1 (1), 1.31 (1), 6.3 (1)
> **UI Navigation:** open the (2)
> **Definitions:** is a  (2)
> **File Paths:** minmax.py (1)

#### [Data utility functions](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=0)** - [Instructor] Now let's take a look at some of the useful utility functions that [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) provides. Specifically the any, all and sum functions. And so here in chapter one, I'm going to open up the utility.py file. And once again, here are my sample code. I have a list of integer values already defined. The any function can be used to see if any value in a given sequence evaluates to a Boolean true value. And remember that for integers, any non-zero value evaluates to a true Boolean. The all function is similar except that it determines whether all of the values in a sequence are true. And then finally, the sum function will add up all the values in a sequence. Okay? So let's give each of these a try. I'm going to print out any and I'm just going to call it on the values array. And then I'll do the same thing. I'm just going to paste this down here and call all instead, right? And then I'll call sum on the values list. Right? Now in this particular list, it's easy to see that you know, yes, in fact there are values that are Boolean true, right? So when I run this in the terminal, right, you can see that yes, there's at least one of the values evaluates the true. Now, the second function, all returns false, right? And that's because there's a zero right here at the front of the list, right?
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=94)** So if I take this zero out and save this and then I run it again, right? Well, now you can see that the result is true because now all of these values are true, right? And then you can see the result of the sum function down here. So sum just adds them all up and we get the result of 15, right? Okay. So we can use these functions with more complex [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), but unfortunately, unlike the min and max functions that we used in a previous video, they don't let us specify a callback to easily provide a value from the data. But that's okay. We can easily improvise this using Python. So let me close this terminal. All right. So let's take a simple example. All right? Are there any earthquake reports that were felt and reported by more than 25,000 people? Okay, so let's go back to the data structure here in my 30 day quakes. And if we scroll down, you'll see that there's a felt property, okay? Which can be null, which means that nobody felt that particular earthquake. So we have to take that into account. So what I'm going to do is write an expression that will iterate over each of the events and inspect this felt property right here. All right? So what I'm going to do is first I'm going to uncomment this code to load our data, all right? And so now I'm going to write print and I'm going to call the any function. 'Cause we want to know if there were any reports that were more than 25,000.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=187)** And then my expression is going to be, I'm going to have a quake variable and that's going to represent an individual quake. So I have to look inside the properties, and use double quotes for that. So I'm going to look inside the properties and I'm going to get the felt property, right? So if that value is not none, all right? Let me just collapse this down so we have more room. So if that value is not none and the quake properties felt is greater
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=233)** than 25,000 for quake in
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=243)** and we're going to call this on the entire features list. All right? So this iterator is going to go over each one of these items inside this features array. And I'm going to get a quake variable each time, right? And I'm checking to make sure that the felt is not null and it's greater than 25,000. Okay? So behind the scenes this will create a generator that loops over each element in the list and evaluates the expression. All right? So let's go ahead and let's comment out these previous guys. All right? And now let's run our example. So let's go ahead and go into chapter one.
>
> **[4:51](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=291)** And I'm going to run the utility.py file, okay?
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=300)** And sure enough, we can see that the result is true, yes, that there was at least one quake that was reported by at least 25,000 people. Okay? All right, let's keep going. Let's answer the question, how many quakes were felt by more than 500 people? So let me some room here. All right. So in this case, I'm going to use a loop expression and I'm going to print out, in this case, I want to know how many, so I want to hear the term, how many, I think sum, right? So I'm going to sum up, and I'm going to just copy this. So quake properties felt is not none and quake properties dot felt. So I'm going to copy this, paste that in. But in this case, I'm interested in being greater than or equal to 500, okay? And I'm going to write for quake in data features. All right? So if this expression evaluates to true, right? This one right here, then that's going to come back with a Boolean value of one, right? Which has an integer value. Otherwise it will be zero, which means false. So that's how I'm going to be able to sum up each one of these, right? So I'll add a one for yes and add a zero for no. All right. And then let's try another one. How many quakes had a magnitude of six or larger? All right, so once again, we're going to use the sum function.
>
> **[6:36](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=396)** So I'm just going to copy this expression here and paste it. And in this case, okay, we want to know how many quakes had a magnitude. So I'm going to need to look at the magnitude property. So I'll change that. And then I want to know if it was six or larger. So I'm going to check to see if the magnitude was greater than or equal two six, okay? So let's go ahead and run this now. So let's go back down to our terminal and we'll run this again. Alright, now we can see that there are 12 quakes that were felt by at least 500 people. And there were five quakes that were magnitude six or larger. And here again, we can see that just by using some of the built-in Python functions we're able to build some useful queries on our data to answer some questions that we have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **CLI Commands:** python (3), make (1)
> **Tools:** terminal (3)
> **File Paths:** utility.py (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### [Sorting data](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=0)** - [Instructor] Sorting is probably one of the most common operations performed on data, and we're going to take a closer look at that in this example. So here in my code space, I'm going to click on the sorting.py file. And in my example code, I have two lists, right? One with integers and one with names. There are two functions built in for sorting in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). There's the sorted function, and then there's the sort function. So let's take a look at each one and I'm going to collapse this down to get some more room. All right, the sorted function is a top-level built-in function in Python and you can use it on any sequence of values. It returns a new list of sorted data and does not touch or change the original list. Okay? So let's try that out on our numbers. So I'm going to write result1 is equal to, and I'm going to call sorted on the numbers list and then I'll just print that out. The list object itself also has a sort function, which sorts that list in place. So it doesn't return a new list, it just changes the actual list in place. So I'm going to call on the names list. I'm going to call the sort function. And in this case, I'm going to use the reverse property, or the reverse argument, and I'm going to set that to true 'cause I wanted to go in reverse order and I'm going to print out that result. All right, so we've got two sorting operations. Let's open up the terminal.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=94)** Right control back tick, and I'm going to go into my start folder in chapter one. All right, and let's run this example. I'll run Python sorting.py and sure enough, you can see in the output we've got two sorted lists. So the numbers are now sorted in ascending order, right? Smallest number to the largest number. And then the names list is in reverse order. It goes alphabetic last, all the way down to alphabetic first. Okay? And of course, we can use the sorting functions on more complex data just like we did earlier in the min and max functions by specifying a key function. And I think you can see where this is going, we're going to try this on our earthquake data. So let's go ahead and close that terminal, and let's comment out these two previous examples. All right, so first I'm going to uncomment the code that loads our [JSON](../../Skills/Web%20Development/JSON.md) data. All right. And you can also see that I have the same function that I defined in an earlier example that retrieves the magnitude value from a given earthquake structure. Okay, now I just need to use the sort function to sort the data. And in this case, I'm going to sort on the magnitude value in descending order. So I'll write data, and I'm going to sort the features list in there, right,
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=189)** and again, just to refresh the memory, if we look at the quakes, right, the features is what contains all the earthquakes. Okay? So I'm going to have to sort this guy in place. All right? So we'll sort him by calling the sort function, in this case I'm going to specify the key is my get magnitude function. There we go, get mag. And we'll set reverse equal to true. All right? And then I'm going to print out the first 10 entries, which obviously are going to be the earthquakes that had the largest magnitudes. So I'll write for i in range to 10, and I'm going to print out, I'll print out data features and then I have to index into that list with i. And then once I have that item, I have to get the properties of that item and then I have to get the name of the place. All right, and if we look at the data again, you can see that there is a place. Where is that? There's the tight, that's not it. Right here, so the name of the place, I'm going to print out the name of the place, the top 10 largest earthquakes ordered by the place name. Okay? So let's go ahead and save this and let's go back to the terminal, and let's try this one more time.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=285)** So I'll run sorting.py and sure enough, you can see that the result lists the top 10 quakes from this data set, and a lot of them appear to be in the Pacific, right? We've got New Zealand, Indonesia, Vanuatu, and let's see, oh, yep, California makes the list. So you can see how easy it is to sort complex data just by using the built-in sort function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **File Paths:** sorting.py (3)
> **CLI Commands:** python (3)
> **Tools:** terminal (3)
> **Definitions:** is a  (2)
> **Env Vars:** json (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### [Data filtering](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=0)** - [Instructor] Sometimes when you're working with a large dataset, you want to be able to focus on a subset of the overall data. In other words, you want to be able to filter out the data that's not interesting and keep the data that is. So in this example, we're going to see how to use the filter function to achieve this. We're here in Ch_1, let's open up filtering.py. And here in my example code, I have a couple of functions, along with some predefined sequences of data, okay? I've got a couple of sequences, this one's numbers, and this one is random letters, and I'm going to use the filter function to refine each of these datasets. The filter function works by specifying two arguments. The first is a function that returns true or false, depending on whether a particular data item should be retained or dropped, and then the second argument is the dataset to operate on, right? So the filter function calls that second argument, that callback, with each item in the sequence so it can be tested against whatever logic you've specified and whether it should be retained or dropped. So, for example, if I wanted to filter all of the even numbers out of this dataset, I could use this filterEvens function right here that I've already defined, which returns false if a given number is even, and true if it is odd, okay? So let's go ahead and write that function. I'm going to write odds =, and I'm going to create a new list by using the list function
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=95)** because the filter function actually creates an iterator. So I'm going to use the list function to just exhaust that iterator and create a new list. So I'm going to call the filterEvens function on the nums list, all right? And similarly, suppose I wanted to filter out the uppercase characters from this string, right? I could then use another function like this filterUppers function, which tests to see if a given character is uppercase or not, and again it returns false if it's uppercase, and true if it's not. So I can call this lowers. And once again I'll create a list, and I'm going to call filter, and I'm going to call filterUppers on my chars list. All right, and then I'm going to print out each one. So I'll print out odds, I will print out lowers. All right, so let's go ahead and run this. So into the terminal and into Start/Ch_1. And let's see what's in here. All right, it's called filtering. So I'm going to run [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) on the filtering example. And sure enough, you can can see in the result that all the odd numbers are now remaining, the evens are gone. And sure enough, all of the uppercase letters are now gone from the characters, all right?
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=188)** So let's try using this on our massive earthquake dataset, all right? So let's close the terminal and let's comment out the previous example, and let's load our [JSON](../../Skills/Web%20Development/JSON.md), right? So this might surprise you, okay? But not all of the seismic events in the dataset are actually earthquakes. So if I click on this, right? Some of these seismic events are actually the result of explosions or other events that are picked up by the seismic recording sensors. So I'm going to use the filter function to see how many of these events are not true earthquakes. So I'm going to define a filter function, right? I'm going to call it notAQuake, all right? And it's going to take a quake as an argument. And so I'm going to check to see if the quakes, I'm going to look in the properties and I'm going to look at the type, okay? And if we look at the dataset, if I scroll down, you'll see that there's a, where is it? Type is right here, right? And type is going to usually be earthquake, but it might not be, right? It might be something else. So I'm going to check to see if "type" == "earthquake".
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=273)** And if it is equal to earthquake, I'm going to return false, otherwise, I'm going to return true. All right, now I just need to filter this dataset with the filter function. So I'll name the result events, and I'll create a new list. And I'm going to filter out, I'm going to call notAQuake, and I'm going to call that on, remember, we loaded this into the data variable, so I'll pass in the data, I'm going to pass in the features list, all right? And then I'm going to print the results. So I'm going to print out the total non-quake events. And that's going to be the length of the events list that I just created, right? And I'm going to print out the first 10. So I'll make a little loop here and I'll print out the events, and I'm indexing it to each one. And each one of those is going to be a quake, so that means that there's a properties, and I'm going to print out the type. All right, so let's save this. And let's go ahead and open up our terminal one more time. And let's go into Ch_1, and I'm going to run the filtering example.
>
> **[6:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=373)** And sure enough, we can see that there are 187 events that are not earthquakes out of the, what? Almost 12,000 total, right? And as we're printing each one, you can see we got explosion, we got quarry blast, right? Well, I guess those are different from explosions for some reason. So now we know that there are are events in here that are not necessarily earthquakes, right? They're seismic events, but they're not earthquakes. So we're going to come back to this a little later in the course, but for now, you can see just how easy it is to perform data filtering using just the built-in Python features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Code Identifiers:** filterevens (2), filteruppers (2), notaquake (2)
> **CLI Commands:** python (2), make (1)
> **Tools:** terminal (3)
> **Definitions:** in other words (1), is a  (1), means that (1)
> **UI Navigation:** click on (1), scroll down (1)
> **File Paths:** filtering.py (1)
> **Env Vars:** json (1)

#### [Data transformation](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=0)** - [Instructor] Data doesn't always come in the form that you would like it to. So you might find yourself in a situation where you need to transform the data from one format into another. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) provides a function that can help with this. It's called the map function. The map function creates an iterator that takes one or more sequences of values and produces a new sequence by applying a given function to each value in the original sequences. So let's try a couple of simple examples and I'm going to open up my transform.py file. All right, so let's imagine that I've got a couple of sample data sets here, right. So down here, if I scroll down I've got a couple of sequences, right. This one here is numbers, actually. Well, they're both numbers, okay. And so let's imagine that I wanted to convert each of the numbers in this nums sequence to the square of the original number that's in the list. All right. So I can easily do this with the map function. So I'm going to create a new sequence called squares and I'm going to use the list function to create a new list. And I'm going to use the map function to do this. So the first argument to the map function is the function that I want to be applied to each item in the list. And you can see if I scroll up I already have a function here called squarefunc and it returns the number that's given to the second power, right. So its square is the number. So I'm going to call the squarefunc and I'm going to use the nums list
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=97)** and then I'll just print out the result. So the map function's going to call that squarefunc with each item and we can go ahead and run this to see what happens. So I'll save this and I'm just going to right click and choose run in the terminal. And the output shows the resulting list, right. It contains all of the original numbers multiplied by themselves. Now that's kind of cool but map actually gets a little bit more powerful than this. So suppose I wanted to convert each of the numbers here in the grades sequence into a letter grade, right. You know, A, B, C, and so on. So I have a function here called toGrade and that takes an argument, right, a number, and you can see that it uses a series of if and elif statements to assign a letter based upon the range that the given value falls into. So more than 90, you get an A, right. Between 80 and 90 you get a B, and so on. So let's go back to the code. Make this smaller for a second. So I'm going to do something similar. In this case, I'm going to make a new sequence called grades and actually I'm going to call that lettergrades because I already have the grades. So lettergrades, actually, you know what. Here's what I'm going to do. First, I'll just sort it in place. I'll just simply assign grades the result of the sorted function. There we go. Okay. And then I'll make a new list called letters and I'm going to make a list function.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=192)** And then I'm going to call map again. And this time I'm going to call the toGrade function and I'll pass in the grades. So now I have a sorted list of letter grades and I'll just print out the result. So let's go comment out the previous example and let's go back to our terminal. All right, and let's run this again. And now you can see that I've got a list of sorted letter grades. Now the map function gets even more useful when we want to reshape a data set into a different form. So let's go back and look at the earthquake data. And let's close the terminal. All right, so if we look at the earthquake data we've been working with, there's quite a few of these properties and fields that we're not making use of, right. So we can use the map function to create a data set that doesn't contain the fields that we don't care about. So let's go back to the code and let's comment out the previous example and then let's load our data. So what we're going to do first is, let's use the filter function to reduce the data set down to just the largest magnitude events, okay, those that are larger than six. So uncomment this function. And remember we saw how to use the filter function in a previous video.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=285)** So that's this code is going to do here. It's going to filter down the list so only large seismic events are left. So now we're going to create a function that simplifies our data structure to just include a few properties, okay, the place, the magnitude, and the date of each quake. So what I'm going to do is write a function called simplify and that's going to take a quake as an argument, all right. And I'm going to return a new [JSON](../../Skills/Web%20Development/JSON.md) data structure, and that JSON data structure is going to have a place in it. And that is going to be the quake's properties. And I'll just use the existing place, okay. And then I'll have the magnitude and that is going to be the properties that's going to be the mag property. And then there's going to be the date. And what I'm going to do is if I scroll back up here you'll see that I've imported both the pretty print and the JSON modules. What I'm going to do is create a date. In order to do that I'm going to have to import the datetime module, right. Let's scroll back down. So for the date what I'm going to do is create a string representation of the date. So let's do that first, right. Then I'm going to call the datetime module.
>
> **[6:19](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=379)** I'm going to use the date class and I'm going to call fromtimestamp. And again, if you look inside the quakes, right, we have, where's the time? So this right here, this property is the number of milliseconds from the start of the Unix epoch which represents the time and date of this quake. So what I need to do is get that value. So I'm going to pass into from timestamp, I'm going to pass in the quake's properties and I'm going to call, see, get the time property. And I've got to divide that by 1000 'cause I don't want to use milliseconds. I want to use seconds. Okay. And so now I'm going to return that. I've already got my filtered results right here, right, in the results list. So I'm just going to call this again, all right.
>
> **[7:18](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=438)** So I'm going to type results and I'm going to create a new list and I'm going to map. I'm going to call the simplify function on the original results. So here's where I get all the filtered data and then I'm going to take that result and put it back in the same variable. Okay. And then I'm going to use this module here called pprint, right. This will pretty print a JSON structure for me so I don't have to do a whole lot of coding here. I'm just going to call pprint.pp and I'm going to pass it the results JSON. All right. Okay. So we've simplified the list, right. We've gotten only the big magnitude items and then we've simplified the data structure to get rid of all those fields we don't need. And then we're going to print the results out. So let's go into the terminal and this is the transform function. So I'm going to call python transform. And sure enough, here in the output you can see that the new data structure is much simpler than the original, right. All the other fields are now gone. I only have place, magnitude, and date. Right, place, magnitude, and date. And the new data set is much easier to read and it only contains the data that I care about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** make (4), python (2), find (1)
> **Env Vars:** json (5)
> **Cross-References:** go back to (3), previous video (1)
> **Tools:** terminal (4)
> **Code Identifiers:** tograde (2)
> **UI Navigation:** scroll down (1), scroll up (1)
> **Analogies:** imagine (2)

#### [Solution: Build a data summary](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=0)** - [Instructor] All right, let's take a look at my solution for this challenge. And remember, it's not important that your code be exactly the same as mine. There's usually multiple ways to solve challenges like this. And the important thing to do is just learn from other people's examples. This challenge consists of four parts. So there were four different results we needed to calculate and we'll go through each one of them. So the first part was to find the total number of earthquakes or well, seismic events. And this was a bit of a trick question because that data is contained right within the first part of the file. So I just used the count data field inside the [Metadata](../../Skills/Web%20Development/Metadata.md) to get the total number of quakes. Of course, if you wanted to use the length function to get the length of the features array itself, that's also fine. Okay, so moving on. The second part was to find out how many events were felt by at least 100 people. So this part of the solution calls for the use of the filter function and my filter, which is defined in this little utility function called feltreport, it just gets rid of any seismic events where the value of the felt property is not at least 100. So after I filtered out all of the events that don't meet that criteria, I just get the length of the resulting list and that tells me how many events were felt by at least 100 people.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=92)** All right, let's move on. So the third value we had to calculate was the name of the place that had the seismic event that was felt by the most number of people. So when you hear the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) most, that usually means the max function. And so I used the max function and I defined a key function named getfelt, which is down here. So that gets the value of the felt property and returns it or returns zero if that value is none. So that will give me the event that has the most number of feltreports, and then I just have to get the title property, which gives me the name of the place. And then the fourth value we had to calculate was related to the third, which was to find the actual number of felt reports for the most felt event. And since we already have the most felt event, so all we need to do now is get the actual value from the felt property inside the property's array. And that gives us the actual number of reports, in addition to the name of the place, which we calculated in part three. All right, well, let's go ahead and run the code to make sure it actually works. So I'm going to click on test my code, and sure enough, we have 11,745 total events. 28 of them were felt by at least 100 people. This quake here in Utah was the most felt one in this dataset, which was by a little over 33,000 people. Okay, so that's my solution.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=184)** Take a few moments, compare your code to mine and see how you did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Collection Classes

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of collection classes](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=0)** - [Instructor] [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) ships with a basic set of data types for working with collections of data and you've probably already used some or all of these in your work at some point. In this chapter, we're going to learn about some of the more specialized and useful collection types and how they build on the basic collection classes to help solve different kinds of programming problems. As a quick refresher, recall that Python has four basic collection data types. There's the list, which is a sequence of data types and is declared using square brackets with each data item separated by a comma. A close relative of lists are tuples, which are defined with parentheses and are also comma-separated. However, lists can be changed once they are created because they're mutable, whereas tuples are not. Next is the set, which is an unordered collection of distinct values defined using curly braces and like lists, sets can be changed once they're created, and then finally is the dictionary, which is a set of key value pairs. In addition to these basic collection types, Python's collection modules provide several more and these are the namedtuple, which makes it easier to work with tuple objects by giving names and meaning to each item's position in the tuple, an improved dictionary class called defaultdict, Counters, which can track the number of distinct values added to them and a somewhat interesting collection class known as a deque, which acts as a double-ended list. As we go through the chapter, we'll learn more about each of these types and see useful examples
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=92)** of how they can be applied in your Python projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### [Named tuples](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=0)** - Let's start by looking at the namedtuple. Suppose I wanted to define a data structure to represent a geometric point on a typical X and Y axis. Now, I could easily do this by defining a regular tuple, right, with two elements, the X and the Y values of the point. And to access these values, I can use positional argument indexes to get each one. Now this may seem all fine and good but as my program becomes more complex, this kind of code easily loses its meaning and becomes harder to read especially if I don't keep the names of all the point variables clear and meaningful. I could just define a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) class and give it member properties for X and Y and then write getter and setter functions for the properties. But that seems a little much for a relatively simple data structure. Namedtuple helps solve this problem by assigning meaning to each of the values along with the tuple itself. And they also provide some helpful functions for working with them. So let's go over to the Code and see how they work. All right, so here in VSCode, I'm going to open up namedtuple.py in my code space. And you can see I've already imported the collections module, which is where they are defined. So let's start with a simple example. I'll create a namedtuple by using the namedtuple factory method to create one to represent a Point structure and I'm going to call it Point. And to do this, I'm going to use the collections.namedtuple() function. So I'm going to give it a name for the tuple
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=96)** and I'm going to call it a Point. So this is kind of like a lightweight way of defining a class almost. And then inside this string, I'm going to give it the names of the fields that I want that tupple to have, right? So my point is going to have two properties, X and Y. Now to create a new Point object, I just use the name as a regular constructor almost. So I'll declare a point named p1 and I'll construct it using this new namedtuple that I've got. And we'll give that values of 10 and 20 and then we'll make another one. And this one will have 30 and 40. And then I'll print out p1 and p2. All right, so let's go ahead and run what we have. So I'm going to open the terminal and let's go into start folder into chapter two. And let's run this. And you can see that when I run the code, right we have two points and their data is printed in a nice readable style. But what's really nice about this is that now I can refer to the members of the point by name, right? So let's go back up to the code. And what I'm going to do is I'm going to print also, I'm going write p1.x and p1 dot and you'll see as I'm typing the type, right I hit the period and I'm also getting statement completion. So the Python extension is
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=190)** reading the structure of my namedtuple and it realizes that I've got these two properties. So that's another benefit of using these. So let's save, and now let's run again. And you can see now that I can access them just using the names of the properties. So this makes my code much easier to read and maintain. Namedtuple also have some interesting helper functions. So there's the replace() function that lets me create a new instance of the namedtuple while replacing specified fields with a new value, right? So let's go up to the code. What I'm going to do is for point one I'm going to assign that to value of p1 and I'm going to call the replace() method. And I'm going to replace the x property with a new value. In this case, it's going to be a hundred, right? And then I'll just print out p1 again. So now let's run. And now you can see that I've got a new point, right? With x is equal to 100 now. So namedtuple can really help make your code more readable when what you really need is the lightweight immutable class. Now keep in mind though, they do have limitations, right? Such as you can't use default argument values. There's some other limitations for working with these. But if the data that you're working with has a large number of optional properties, it might be better to go with a regular class. Otherwise, using a namedtuple is sort of like defining a lightweight class
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=282)** for those instances where a regular class would be too much and you just want to make your code more readable and easier to maintain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** make (3), python (2)
> **File Paths:** namedtuple.py (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - let (1)

#### [Default dictionaries](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=0)** - [Instructor] Just about every non-trivial [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) program uses dictionaries in some way. They are a great way to associate data values with unique keys for fast lookup. The collections module provides two interesting dictionary subclasses to help out with some common scenarios where a regular dictionary would need unnecessary code. And one such example is the default dict which we'll examine in this example. It's a fairly common scenario to use dictionaries to keep track of data such as the result of counting operations. And so here in my code you can see I have a list of different kinds of fruit and I want to be able to count the number of each kind of fruit in the list. So I have some code, right, that creates a dictionary and then iterates over the list and uses the dictionary to keep track of the count of each type of fruit. Now, the code that I have right now is going to produce an error when I try to run it. Okay? So let's see. I'm going to run this in the terminal, and sure enough there is my error, right? So why am I getting this key error? The reason this is happening is because I'm trying to modify the value of this key before it's been initially added to the dictionary. Now ordinarily, right, you would just go back and fix this problem and you would do something like this. You would say, well, if the fruit is already in the fruit counter keys, then you can increment the count
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=89)** otherwise you have to initialize it. So that would be fruit counter, right? Fruit equals one, right? And so now when I run this again, well, I don't get the error anymore, but I'm not outputting anything. But you can see that the error is gone. So everything works, but this initial condition is only going to be executed one time for each fruit and it adds unnecessary visual noise to the code. So to reduce the code and make it more readable we can just define a default dict instead. So let me close this terminal and let's go and change this code. So in order to use the default dict you have to import it from the collections module which you can see I've already done up here. And then I can create the default dict object. Now, when I create a default dictionary, it requires me to specify something called a factory function which essentially acts as the creator of whatever the default value is. So I'm going to specify that I'm going to use an integer. So this code basically says if I try to access a key that doesn't already exist just create a default value for me using this object as the constructor, which in this case is an integer. And since creating a new int object initializes the value to zero, I can now just access any key and increment it without having to check to see if it's already there. So let's go ahead and remove the checking code I put in earlier. All right, and so now I've got my original code back.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=186)** The only difference is that I'm now using a default dict instead of a regular dict. And I'm going to go ahead and run this. I'm going to print out the results while I'm at it. So I'll print out the root counter. All right, so let's go ahead and run this. And sure enough, you can see that it's working now. So here's my default dictionary, and you can see I've got counts of all the different fruits that are in the dictionary. So you can also define your own factory method too. So let me make this a little bit smaller. So if I wanted the initial value to start off at a different level, I can just use a Lambda function for that. So instead of having my default dictionary start off with just an integer, I can say I'm going to specify a Lambda function and make that a hundred. All right. And now if I run this again, right now, you can see that the count is starting off at a hundred for each of these fruit types, right? So we've got 103, 101, and so on. Now, this factory object doesn't need to be a built-in class like an int or a string, it could be any custom object you want. So default dict is really useful but you have to be careful when you use it because any key that you didn't explicitly add to the dictionary will be assigned a default value when you try to access it. So if you have a situation where the fact that a key is missing from the dictionary is an important indicator, then default dict is probably not the right collection to use. In other situations, however, it can make your code simpler and easier to read and test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (2)
> **Definitions:** is an  (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Counters](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=0)** - [Instructor] As I mentioned earlier, one of the common uses of dictionaries is to keep track of the count of individual items. The collections module supplies a counter class which is basically a dictionary subclass for counting hashable objects. Now, you might be saying, well, wait a minute. We saw how to do this earlier with the default dict class, right? And that's true but counters have some nice additional features for working with numbers of items. So let's open up the counter code here in our start folder in chapter two, and we have two lists of student names for two different classes. Now, counters can be initialized in a variety of ways, and in this case I'll create two of them using the name lists, right? So I'm going to write C1 and I'm going to create a new counter, and I'm going to initialize it with the values from class one. And then I'll do the same thing with C2 and that's going to be a counter for class two. So let's try a few operations. Now, since a counter is a dictionary I can use a key to get a value from the list. So let's see how many students named James are in class one. So to do that, I'm going to print out C1, and I'm going to use James as the key. Okay? We can also see how many students there are in the class by using the sum function to add
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=95)** up all of the values in the counter. So recall that we learned about the sum function earlier, and I'm going to sum up in class one, all of the values. All right? And so I'm going to print that, and I'm going to print that followed by students in class one.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=119)** I don't actually need that space. All right? Counters can also be combined together to have their values added to each other. So for example, if I wanted to combine these two classes I can do that by using the update function and I'll add the second, the students in the second class to the first class. So to do that, I use the update function and then I'm just going to update class one with class two. And then we can print the sum of the values again to see the newly defined totals. Let's copy this line and paste it there. So let's pause here and run what we already have. So we've got a couple of initialization statements that make new counters. Then we see how many people named James are in the first class. We count the number of students in class one. Then we combine the two classes into class one and then we check the count again. So let's go ahead and run this. So I'm going to open my terminal and let's go into start chapter two. And this is the counter example. So I'll run [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) counter, and you can see that there are two people named James in the first class. Is that right? Yeah, there's one. Oh, yep, there's two. Okay. And you can see that there's 12 people in the first class before we do the update. And then after we do the update you can see that there's now 24 people in class one. All right, let's keep on going.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=215)** So go ahead and collapse this down. All right. There's a convenience function called most common that will print out the top most common items in the counter. So for example, if I print and class one I'm going to call most common, and I'm going to look for the three most common names in the two classes. Now, if I leave the argument blank it will print all the keys in the dictionary but I can limit it here just to the top three keys. So when I run this again let's bring up this code and let's run it again. And now we can see that we have the top three most common names. So when we combine the two classes now we have three people named James, we've got two people named Frank and one person named Bob. So just like I can add two counters together I can also subtract one counter from the other. So let's change the code to use the subtract function to subtract off the class two name list. All right? So what I'm going to do here is write C1 dot subtract and I'm going to subtract off class two. Okay, there we go. And then once I do that, once again, we'll print out the most common, and this time we'll just limit it to the first most common thing, and when I run
>
> **[5:12](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=312)** the code again. All right, so now you can see that the list has changed, right? So Frank and Bob are gone. And now since we're back down just to class one again remember there were only two Jameses in there and so now we have two people named James in that class. Okay, so let's try one more operation. We're going to use the ampersand operator to calculate the intersection of the two counters. So in other words, this is going to tell us which items are present in both of the counters. So I'll do that by writing print, and then I'm going to write C1 and then ampersand, C2. This will do an intersection operation and it will print out the result. All right, so let's go ahead and run that. And we can see that when we run this, what's common between the two classes is that the names James and Frank are common to both of the classes. So if you need a dictionary to help keep track of a number of different items along with a set of operations for working on the data or multiple sets of data then the counter class just might fit the bill for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (1), in other words (1)
> **Tools:** terminal (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [The deque class](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=0)** - [Instructor] The last collection class that we will take a look at in this chapter is called a deque. Now, the name may look like it says dq, but it's actually pronounced deck, and it's a sort of a hybrid object between a stack and a queue. In fact, the name itself basically stands for double-ended queue. That's where the de comes from. And you can use them to append or pop data from either side. And they're designed to be memory efficient when accessing data from either end. Deques can be initialized to either be empty or get their initial data from any existing iterable object. In this case, I'm using a string. They can also be specified to have a maximum length. To add data to a deque, you use the append method to add items on the end or the right side and appendleft to add items to the beginning. And similarly, items can be removed using either pop or popleft. Deques also support a rotate function which can operate in either direction. The rotate function takes a parameter indicating how many items to rotate and defaults to one. Positive numbers rotate to the right. Negative numbers rotate to the left. All right, so let's exercise the deque a little bit with a few examples. Okay, so here in my codespace, I'm going to open up the deque and you can see I've already imported the collections and string modules. So let's create a new deque using all lowercase letters. And to do that, I'll just simply create a new collections.deque object and I'm going to initialize that to string.ascii_lowercase.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=95)** So that gives me all the lowercase letters. And then let's print out the number of items in the deque because it supports using the len function on it. So I'm going to print out that the Item Count is and that's going to be the length of d. Deques can also be iterated over, right? They support iteration. So you can loop over each of the items the same way you would do with any other iterable. So I can write code that looks like this. I can write for elem in d. And in this case, what I'll do is just convert each element to an uppercase. That's a couple good examples to get started. So let's go ahead and try this out. So here in my terminal, let's go into start chapter two and let's run the deque example. All right, so let's scroll back up. So sure enough, we can see that there's 26 items in the deque, which makes sense, there's 26 letters. And you can see that as we're iterating over each letter, we're converting it to uppercase. Okay, we can also pop items from either side. So let's try that. Let me clear this. Okay, so let's try popping some elements. So we'll pop from the right and then we'll also pop from the left. And, of course, we can also add items to each side, so let's append and we'll put a number on there.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=192)** And let's also append the left as well and we'll put number one on there. And then let's go ahead and print out our deque to see what's in there. So let's go ahead and run the changes. And when we run the changes, right, we can see that A and Z have been removed because of the pop and the popleft and they've been replaced with the numbers one and two because of the append and the appendleft. Okay, let's try one more thing. Let's try rotating the deque. First, we'll print the deck in its current state, so we'll print d, and then we'll rotate it and let's rotate it one position and then let's print it again. Okay, and so let's run that code. And sure enough, you can see that when we run this, now the number two is on the front of the deque after we rotate it one space towards the right because the deque wraps around and places the end value on the front. So before we do the rotation right, one is here and two is here, and then we rotate everybody to the right. So that way, two goes to the beginning and now y is at the end. So the deque object is really versatile. So if you have a use case where you need to be able to operate on both ends of a list and perform operations like this rotation for example, then this just might be what you need.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), stands for (1)
> **Code Identifiers:** ascii_lowercase (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Classify event types](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=0)** - [Instructor] All right, so for this challenge, we needed to build a classification of the different event types contained within our earthquake dataset. And for my solution, I decided to use the defaultdict collection class. And I made this decision for two reasons. First, I needed to count the number of each event, and I wanted an easy way to associate the event type with the count. Now, the dictionary class gives us an easy way to do that, and the defaultdict class makes it even easier by declaring an object that uses integers as the default type. So my code starts with declaring a new defaultdict that uses integers as the value type. And then I just process each event in a loop and use the event type as the key into the dictionary. And I increase the count for each type as I come across them. So when the loop completes, each key in the dictionary represents the event type, and the associated value is the count for that type. Then I convert the defaultdict into a regular dictionary and return the result because the challenge required that the function return a dictionary object. So now if you solved this challenge using a regular dictionary with a little bit more code,
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=93)** that's totally fine. So don't worry about that. I just decided to use the defaultdict because it makes the code a little bit easier. So, okay, let's go ahead and test the code and make sure we got the right answer. All right, and we can see that... Let's see. So the number of earthquakes was 11,558. There were 85 explosions, 81 quarry blasts. Not really sure why that's different from an explosion, but I guess it is. And then there were 17 ice quakes, which just sounds pretty cool. And then there were four other events. Not sure what they were, but they were just called other events. There were four of those that resulted in seismic readings. All right, so if you got the same result, then congratulations, you completed the challenge. Take a few moments, and review your code and compare it to mine.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Serializing Data in Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of serialization](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=0)** - [Lecturer] In order to work on a set of data, you usually first have to obtain the data from somewhere. And then of course, once you've completed your operations on the data, you usually need to save it back out again and store the results. This process is called serialization. It's the process of reading and writing data from and to a datastore. The datastore can be anything. It can be a local file, or a database, or a network stream. It doesn't really matter. In this chapter, we're going to use some of the built-in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) methods, or taking a set of data and serializing it to and from a couple of common file formats. In this case, [JSON](../../Skills/Web%20Development/JSON.md) or [JavaScript](../../Skills/Software%20Development/JavaScript.md) Object Notation, and Comma Separated Values or CSV files. There's also a third common format called xml, but that's beyond the scope of this course, so we're just going to focus on JSON and CSV. Comma Separated Value files are a popular way of storing data because it's one of the formats used by spreadsheet programs like [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md), and Apple Numbers, and [Google](../../Glossary/Service/Google.md) Sheets, and so on. JSON is also a popular [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) and interchange format, and it's the format that we've been using throughout this course. By the end of this chapter you'll be able to use Python to read and write data from both of these common file formats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** json (3), csv (2)
> **CLI Commands:** python (2)
> **Definitions:** is called (1)
> **Speakers:** - [lecturer] (1)

#### [Serializing data as CSV](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=0)** - [Instructor] For this example, we're going to take a subset of our [JSON](../../Skills/Web%20Development/JSON.md) data and save it to the comma-separated values format. You can find the documentation for the CSV module here on the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) website if you're interested in reading it on your own time. But the process is actually pretty simple and straightforward. So let's just jump over to the code and see how that works. So here in my Ch_3 start folder, I'm going to click on the serialize_csv function. And what we're going to do is create a CSV file that contains just a few columns of data out of all the properties that our massive earthquake structure holds. So first, to limit the size of this file for the purposes of this demo, we're going to filter out all of the earthquakes that are smaller than magnitude five. And you can see I'm using the filter function here that we learned about earlier in the course to reduce the size of the dataset, right? So next, we need to create the column headers and the row structure to hold the data. So I'm going to create a variable named header, and that's going to contain Place, Magnitude, Link, and Date.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=80)** And I'm also going to make a variable that's going to hold the rows for the data. Then I'm going to fill out the rows list with the data from the array that we just built that only contains the largequakes. All right, so let's go ahead and do that. So for each quake in largequakes, first I'm going to create a date. And the date, what I'm going to use is the datetime module, and I'm going to use the date class, and I'm going to call from timestamp, all right? And from timestamp accepts a seconds value, not a milliseconds value. And inside the quakes structure, we have this data. It is basically, let's see, it's quake and it's in the properties, and it's the time property. And, whoops, that's got to be in quotes, and I need to divide that by 1000. And I'm actually going to convert this to an integer. All right. And let's go ahead and put on a separate line to make it more readable. All right, so first I create the date, and then I'm going to append to the rows. I'm going to put in, it's got to be a sequence because each row is going to be a sequence of data.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=174)** So I'm going to have quake, and I'm going to have properties, and place, right? That's this column right here, okay? So properties and place, all right? Then I'm going to have quake, and that's going to be followed by the magnitude. So properties and magnitude, all right? And, oh, that's one extra thing right there. And then finally, well not finally, we have to do the link, right? So that's going to be quake, and that is going to be in the properties, and that is going to be the url property. And then finally, we have the date. All right, oh, no, it's thedate, not date, thedate. There we go. All right, so this will now add all the data in those four columns, right? To our rows, matching all of our headers. So we have the place, the magnitude, the URL link, and the date that we just calculated from the timestamp. So once the data has been put into the rows, now I can use the CSV module functions to create and write the CSV file. So what I'm going to do is write with,
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=267)** and then I'm going to open the file, and I'm going to call it largequakes.csv. And I'm going to open that in write mode. And I'm going to operate on that, I'm going to call it the csvfile variable. All right, so that will open up the file for writing, and I'm going to create a CSV writer object with my file and then specify that the delimiter is a comma. So I'll make a variable called writer, and that's going to become a csv.writer object. And that's going to take my file, and the delimiter is going to be a comma. Then I just need to use the writer object to save out the data. So on the writer object, I'm going to call writerow. And the first row I'm going to write out is this header row right here, so that we have all the headers at the top of the file. So I'll write out header. And then I'm going to use the writer object, and this time, I'm going to call writerows, multiple, and I'm going to pass in the rows structure, the list of rows that we've already created, all right? That's really all there is to it. So here I list, I filter out my data, I get my header in place, I initialize my rows to be empty. And then for each one of the pieces of data,
>
> **[6:00](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=360)** I'm going to add this sequence of values in each row. And then once I've done that for all the quakes, I just simply write out all the rows into the CSV file. So let's go ahead and run this. Let's go into Start/Ch_3. All right, and there's serialize_csv. So I'm going to run this. And when I run this, you're going to see a CSV file appear over here in the list. So python serialize_csv.py. And sure enough, there it is, right? There's the file just showed up. So let's go ahead and open that file up. And we can see, make this a little bit smaller. All right, so here's the data in the file, right? So here's our headers, right? Place, Magnitude, Link, and Date. And you can see that here's the name of the place. All of the magnitudes are at least magnitude five, so none of the smaller quakes. So that keeps the data files somewhat manageable, right? And the data is in the right format. So we have the link, right? And we have the date here at the end. And sure enough, we can just go ahead and select this guy, not including the date, obviously. So we'll copy that, and we'll paste it, and put it into a new tab. And sure enough, there we have the information about that particular quake. So now, we have the ability to work with our data
>
> **[7:32](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=452)** in a spreadsheet if we want to do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** csv (7), json (1), url (1)
> **CLI Commands:** make (4), python (2), find (1)
> **Code Identifiers:** serialize_csv (3)
> **File Paths:** largequakes.csv (1), serialize_csv.py (1)
> **UI Navigation:** click on (1), open the (1)
> **Cross-References:** earlier in (1)
> **Documentation:** the documentation (1)

#### [Serializing data as JSON](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=0)** - [Instructor] Throughout the course, we've been using the load function in the [JSON](../../Skills/Web%20Development/JSON.md) module to load our dataset from a JSON file. But you can also use the JSON module to easily save data in the JSON format, both into a string and into a file. For this example, we're going to take our earthquake dataset and simplify it by getting rid of many of the data fields that we're not using, and then serializing the data out. So let's go ahead and in the Start folder in chapter three, let's open up serialize_json. And you can see I've already got some code here. So my code starts off by loading our earthquake data from the data file, just as we've been doing so far in the course. Then to make the dataset easier to use, I'm going to filter out all of the quakes that are not larger than magnitude 6, right? So just for the purposes of this demo. This should only leave us with a handful of data points just to make the example more compact. So once I have the smaller dataset, I'm going to transform it into a reduced set of properties, right? Because again, if you look at this data file, you can see there all these properties, right? And we're not using a lot of these guys. So let's make this dataset a lot easier to use. Right, so what we're going to do is define a function. And I'm going to use the map function which we learned about earlier in the course, okay? So here's what we're going to do. I'm going to write largequakes is equal to, I'm going to make a new list,
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=95)** and I'm going to use the map function. And I'm going to map the function. I'm going to call a function called simplequake, and I'm going to operate on the largequake's dataset. So the simplequake function will take the complex JSON structure and make a more compact one. We're only going to keep the place, magnitude, and link properties, and we'll use the time property to calculate a date. So now I have to actually define that function. So I'll define the function, I'll call it simplequake. And it takes one argument, which will be an individual quake, and I'm going to return a new JSON object. And inside that object, I'm going to have a place property, and that's going to be the properties, place of the original. And then I'm going to have a magnitude. And just to make things simple, I'm going to copy this, and that's going to be the magnitude property. And then there's going to be the link, and I'll paste. And once again, that's going to be the URL property. And then I'm going to have a date property. And I'm going to calculate this. I'm going to create a string. And the string is going to convert, I'm going to use the datetime module and the date class.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=191)** And I'm going to call fromtimestamp. And fromtimestamp is going to operate on, I'm going to convert this to an integer, and I need the properties, I need the time property from the quake data. And that is going to be divided by 1,000, because that's milliseconds, right? And I don't want milliseconds, I want seconds for the fromtimestamp function. So let me go ahead and save that. So after we've modified the JSON data structure, we can now serialize it out, okay? And there's two ways to do that. First, I'm going to use the dumps function, which is the opposite of the load function. It takes an existing JSON structure and places it into a string format. So I'm going to write str. And in the JSON module, I'm going to use the dumps function. And the dumps function is going to take the data structure that I want to operate on, right? Which is largequakes. I'm going to say that I want to sort the keys, so that's going to be set to True. And then I'm going to set the indent level to be 4. And then I'm going to print out that string. So let's go ahead and run what we have. So what we have here is we filter out anything smaller than a magnitude 6. We have a function that simplifies the JSON structure down. So we filter out everything that's not big. And then we map the complex structure to the simple one.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=285)** And then we put it into a string, and print out the string. So let's bring up our terminal, and we'll go into chapter three, and we'll run the serialize_json example.
>
> **[5:05](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=305)** And sure enough, let me go ahead and make this bigger. You can see that when I run this, right? Now in the output we have the resulting JSON structure has been saved into a string. It's much simpler than the original big JSON file that we have. And it's being pretty printed out by the dumps function. Now that's putting it into a string. We can also save the data to a JSON file. So let's try that next. So let's go ahead, and I'm going to open a file, and I'm going to call the file largequakes.json. And we'll open that in write mode. And I'll call that outfile. And then I'm going to use the JSON module's dump function. So dumps dumps to a string. The dump function goes to a file or some other streamable object. So I'm going to dump out largequakes. I'm going to use the outfile as the destination. Once again, I'm going to sort the keys, and I'm going to set the indent equal to 4. All right? Okay, let's go ahead and comment out that previous example, and let's go down to our terminal, and run this code. All right, so let's run it. All right. And now you can see that this new file called largequakes.json has appeared in the folder here.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=397)** So let's go ahead and click on that, and let's shrink down the terminal. And you can see that our code has now been output, well, not the code, it's our data. So our JSON file has been created, and the content of the JSON file is now our simplified JSON structure, right? So by combining the [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) functions like filter and map with the serialization functions in the JSON module, it's pretty straightforward to modify a dataset and save it as JSON.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (21), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **Env Vars:** json (19), url (1)
> **CLI Commands:** make (7)
> **Tools:** terminal (3)
> **File Paths:** largequakes.json (2)
> **Code Identifiers:** serialize_json (2)
> **Cross-References:** earlier in (1)
> **UI Navigation:** click on (1)

#### [Deserialization of data](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=0)** - [Instructor] Now that we've seen how to save data to a csv file, in this example, we're going to do the opposite. We're going to load information from an existing csv file into a [JSON](../../Skills/Web%20Development/JSON.md) structure. And this process is sometimes called deserialization. We're going to use one of the CSV files that was created in an earlier exercise. So if you haven't already done the exercise where we save data to a csv file, go back and do it now, so you'll have the file to work on in this example. So here I have the output from the previous exercise called largequakes.csv. So let's view that file again, and inside, remember, there's four columns of data, right? There's the name of the place, the magnitude, date and the link to the event on the usgs website. So we're going to use the same csv module to read this data as we use to write the data in the first place. So let's open up the deserialize code, and what we're going to do, you can see in my start code, I've already defined a variable called result which is going to hold the results of the deserialized data. So the first thing we need to do is open the file for reading, and then store that file reference in a variable. So I'm going to write with open, and we're going to open up largequakes.csv, and we're going to open it up for reading as the csvfile. So then what we need to do is
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=92)** create a reader object that will read the data. So I'll type reader, and on the csv module, there is a reader class, and I'm going to pass in the csv file that we just opened. So now that opens the file for reading, and to actually read the data, all we have to do is iterate over each row in the reader using a regular loop because this csv reader returns an iterable. So I'm just going to write; for row in reader. And then for the moment, let's just print each row, just so we can see that it's working, right? So let's pause here and just run what we have. So let's go to the terminal, and in chapter three, we're going to run the deserialize. Okay, and you can see that when I run this, this is good news, right? We can see that the data's being printed out. So this is all the data that's inside the csv file, okay? So since things seem to be working, let's keep on going, right? So let's close this. So let's comment out this print statement, all right? So what we're going to do now is create a simple json object to represent each row, and then add it to the result list. So on my result, I'm going to append, and I'm going to create a new json object each time through.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=187)** And so my json's going to have a place, and that's going to be the data that's in row index zero, and then the magnitude. And that's going to be row index one. And then we're going to have the date, and that's in row index two. And then finally we have the link which is in row index three, all right? So pretty simple and straightforward, right? So once all of this is finished, we're going to take advantage of the pretty print module, which you can see I've imported up here. And we're going to just pretty print out the resulting data as we've read it in, okay? So let's go ahead and run this. So let's go back to the terminal, and let's run our code.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=250)** Alright, so now, we can see that all of our data is being read in, okay, here's all the json data, ah, but there's a problem, if you scroll all the way to the top, you'll notice that we processed the headers as if they were a data row. Now we don't want to do that, right? We would like to just skip over the first row, but I don't want to hard code that because some data files may not contain headers while others do. So what's the solution in this case? Well, it turns out that the csv module has an object called a sniffer that we can use to detect whether or not a file has headers as the first row, so let's go ahead and close down this terminal. So here's how it works. What we're going to do is create a sniffer, and that's going to be a csv sniffer class object, right? Then we need to give it some data to work on to figure out if the file contains headers. So we're going to read in the first 1k of the file, and we're going to call that a sample. So we're going to, well, csvfile.read, and we'll read in the first 1k of the file. And then we have to seek back to the beginning because otherwise the reader's going to start from the position where we last read to. So now I can ask the sniffer,
>
> **[5:42](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=342)** if it thinks that the file contains headers, and it uses an internal algorithm to figure this out by examining the data. So I can write if sniffer.has_header, and I'll give the sample that we just read in, okay? Now, if the file does have header information, then I just need to skip over the first row, which I can do by using the built-in [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) function called next, right, which is just reads the next value of any iterator which the reader is. So it's going to skip over the first row, so now let's go back and run this code again. All right, so let's go back to the terminal, and let's go ahead and run the code. All right, let's make the terminal bigger, and let's skip up to the top. And sure enough, this time you can see that the first row containing the header information has been skipped.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Tools:** terminal (5)
> **File Paths:** largequakes.csv (2)
> **CLI Commands:** python (1), make (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** open the (1), go to (1)
> **Code Identifiers:** has_header (1)
> **Env Vars:** csv (1)

#### [Challenge: Create a CSV file](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=0)** - Time for another programming challenge. All right, for this challenge, we are going to create a CSV file that contains the 40 most significant seismic events contained within our [JSON](../../Skills/Web%20Development/JSON.md) data file, right? So here, let me open up the starting point. So here's your challenge. You're going to create a CSV file with the following information. It's going to have the 40 most significant seismic events ordered by the most recent. There's going to be a header row that contains the Magnitude, the Place, the Felt Reports, the Date and a [Google](../../Glossary/Service/Google.md) Map link which you're going to create. And the date should be in the format of the four digit year followed by two digit month and two digit day. Okay? So I'm going to show you the resulting CSV file so you can see what the output is going to look like, right? So here in my finished chapter, I just ran this, my finished code. So if we click on this you can see that I've got my header row right? Magnitude, Place, Felt Reports, Date, and the link and it's ordered by significance, okay? And you'll see that there's a Google Map link to where the seismic event happens. Let's go ahead and bring one of these up. So we have to CTRL+click on it to get it to work. And when I do that, you can see that this one happened just near a town called Magna in Utah which apparently is near Salt Lake City.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=96)** So you can see that it has the location right there of the seismic event. Okay? So if we go back and we look at the original data, let's go back. All right? And remember, so let's open up the file. So remember that the URL property is not pointing to a Google Map link, okay? So you're going to have to figure out how to make a Google Map link as part of this challenge. And also notice that the 40 events in the result here, it's not by Magnitude, okay? It's ordered by the Date column. So you can see here's one, it goes from March, right? And you see March 18th. Then we've got, you know, March 17th and then the 14th and it's going all the way back down. And then the last one is in February of 2020. Okay? So order it by the Date column. And remember that you what you want to look at is if we go back to the code for the data that's the significance value right here, okay? So that's the data you're going to want to look at. And if you want a hint on how to do this, then stick around for a few seconds and I'll give you a hint. All right? Otherwise, just go ahead and stop the video here and give the challenge a try and I will be back in the next video to discuss my solution. Okay? All right. So do you want the hint? Hey, are you sure you really want the hint? I'm going to give it to you. Here's the hint. So in order to make the Google Map link, you're going to need to take a look at this page
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=190)** on the Google Maps documentation to figure out how to make a link to a Google Map using Longitude and Latitude, right? So now that you have the hint, go ahead, try the challenge and then we'll take a look at my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** csv (3), json (1), ctrl (1), url (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** click on (2)
> **Speakers:** - time (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a CSV file](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=0)** (upbeat techno music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=5)** - [Instructor] All right, let's examine the code for my solution. Okay, so our task in this challenge was to create a CSV file containing the 40 most significant seismic events in our data file, ordered by most recent date, along with certain columns of data. And we had to make a [Google](../../Glossary/Service/Google.md) Map link. All right, so if we look at my solution, remember we had to like find the most significant events, which is not the magnitude, right? We had to look at the sig property. So I have a function named getsig, which returns the value of the sig field in the data, or zero if that field is null. Then my code uses the sorted function to sort all of the quake data by the significance field from largest down to smallest. Now remember, I'm only interested in the top 40 events, so I'm going to use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s slicing notation here just to get the first 40 of all the almost 12,000 events in the data. So that gives me a much smaller data set to work with. And because we want the results to be sorted by the most recent, I then resort the remaining 40 items by using the time property of the data structure. Okay? So I'm defining an inline lambda function here to just return the value of the time, and then that sorts by time. So first, we sort by significance, then we sort by the time. So now I have the 40 most significant events, sorted by most recent events first.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=99)** That was first part of the challenge. Now I need to create a CSV output file, and write out all the data. So I define an array of the column header names, right? That's another part of the challenge. And then I have an array to hold the data rows. Next, I have a loop which iterates over each item in the sorted list. So first, I convert the time property into a date by using the datetime module, and calling the fromtimestamp function. And remember, I've got to divide by a thousand because the data inside the [JSON](../../Skills/Web%20Development/JSON.md) is in milliseconds, and this function expects seconds, not milliseconds. Then I need to build a Google Map link using the latitude and longitude properties stored in the geometry section of the event data. So if we go back and look at the data, you'll see that down here, outside of the actual earthquake data, there's a section called geometry, and it gives me the latitude and the longitude, and they're reversed. So this one comes first, then this one. So if we go back to the code, we'll see that what I'm doing is I'm getting the latitude and the longitude, and then I'm using this template string right here to create a Google Map link. And if you look at the documentation for the Google Maps link, if we scroll down, you'll see that there's a search operation, and this is the URL that you can use to build link with. So I do that, I plug in the latitude and the longitude,
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=197)** and I realize that was a bit challenging. So if you didn't get that part, don't worry about it. So then we built the link, and once I have those values, it's just a matter of inserting the data into the rows. So for each row, I append, you know, the magnitude of the place, so on and so forth. I do that for each one of the events. Once I've got all my data rows, I open up the file, I use the csv.writer object to write out the data, and then I'm done. All right, so, that's my code. How does that compare to yours?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** csv (2), json (1), url (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### 4. Python Logging

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of logging](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about the logging features available in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and why you'd want to use them. So logging is an important tool in the development process, and particularly when you're working with data because it enables your code to record events as the program executes for later analysis. So, you can think of logging as sort of like the black box of an airplane, right? It's always recording data about how things are functioning, and if something unexpected happens, you can use the log to go back and help diagnose the issue. It's not always possible, or feasible, to use a regular debugger to step through your program's code to help analyze and solve problems in real time. So for example, the code might be running on a remote server which makes it difficult to debug locally, particularly when you're working with large amounts of data. It can be useful to have logs of transactions that can be searched through later on in order to trace down the root causes of problems. In addition, some kinds of errors and issues only happen on occasion during the program's lifetime. So, logging makes it easy to categorize various events that occur while your program executes, which can help when you're trying to track down the origin of a problem, and even if you don't use logging for debugging, it can provide a useful audit trail of a program's execution for business analysis purposes. It's also very straightforward to customize the output format of logging data, so you can record information in as detailed or as simple form as you need.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=95)** You know, logging is a little bit like flossing, right? Like everyone knows they should do it, but not everyone does it as often as they probably should. So by the end of this chapter, you'll see how easy logging is in Python, and why you'll never again wonder why you need to use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Basic logging](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=0)** - [Instructor] To use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s logging features, you need to import the logging module into your app. To send information to the log output, there are individual functions for each kind or level of message, and there are five different methods to use for recording log messages. There's debug, info, warning, error, and critical. Each of these methods corresponds to a particular type of message, which are used to indicate different types of status of the application. Debug messages are typically used to provide diagnostic information that's useful when you're trying to track down a problem. So information messages are usually used to indicate that a particularly interesting operation was able to complete normally. Warning messages indicate something unexpected happened or that a more serious problem might be approaching, such as running out of storage space or the inability to communicate with a remote server. Error messages indicate that a particular operation was unable to successfully complete. And critical messages indicate that the program has suffered a serious error and might not be able to continue running. Now, by default, the logging module only outputs warning messages and greater, but you can configure this using the basicConfig function and setting the level argument to the minimum logging level that you require. So let's see how all of this works in real code. All right, so here are my code,
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=92)** I've opened up the basiclog_start file, and I'm going to go ahead and add the logging module. So let me go ahead and import logging. All right, so let's try out the logging functions to output some text to the log. So what I'm going to do is I'm going to do logging., I'm going to do debug first, and I'll just write, "This is debug-level message."
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=126)** And then I'll just make a few copies. So we'll try out a few more. So we'll do info, and we'll do warning, and error, and critical. And then we'll just make each of these changes. So that's info, that's warning, error.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=161)** All right, so let's go ahead and just save that and let's try this out. So let's go into our terminal and we'll go into Ch_4, right? And this is the basic log example. So let's go ahead and run basiclog. And you can see that right now, the logging messages are being put out to the terminal right here, right? And only the messages for warning, error, and critical were displayed. But remember, we can change that by using the basicConfig function to set the default logging level. So let's make that change. Right here in the code, I'm going to write logging.basicConfig, and I'm going to set the level argument equal to logging.DEBUG. Okay, so now let's run the code again. And now, you can see that the difference is that all of my messages are being put out, right? So before, I had warning, and error, and critical, and now, debug and info have also been output as well, right? It's worth pointing out, by the way, that this basicConfig function only gets executed once before logging starts. So once you start logging, then subsequent calls to basicConfig won't have an effect, all right? So you have to set it one time and then it'll just remember that setting, so on. And again, notice that the log output
>
> **[4:14](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=254)** is being sent to the standard output here on the terminal. Now, in a production environment, that's obviously not what we would want. We would want that log sent to a separate file. And again, we can control that with the basicConfig function. So what I'm going to do is add a filename parameter. And filename, I'm going to specify the file to log information to. So I'll just simply call that output.log. And it's kind of a typical convention to name your log file with .log, all right? So let's go ahead and run this a couple times and then we'll run it again. And you can see here that my little output.log file got created in the sidebar here, all right? So each time the program is run, the log output is appended onto the most recent content of the file, so it continues to grow. But again, you can control that with the basicConfig by specifying a filemode. If you don't specify the argument, then the file is opened and appended to by default. But if I go ahead and specify filemode, right? I can use filemode="w", and that means that that's going to rewrite the file each time, all right? So here's what I'm going to do, before I run this again, let me go ahead and click on output.log, and you can see it ran several times, right? It's growing each time. So let me close that. And now I've specified filemode as w. And also, let's write a formatted string to the log just to make sure that we see some changes.
>
> **[5:48](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=348)** So I'm going to write logging.info, let me put that down here. So I'm going to write logging.info and I'm going to write an f string, "Here's a variable and and integer," why not? Sure. Okay. And I'm going to put in some string. Oops, no, it's going to be in here. I'll have some variable is equals "string", and y=10.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=385)** And we'll put in x and we'll put in y. All right. Okay, so now we've got the filemode set to rewrite each time. So let's go ahead and close the terminal. And, oh, actually, I need the terminal to run it. So let's go ahead and run. Okay, so we ran it. And now you can see that the content was rewritten, right? And here's my variables inserted into the string, right? So the, the content is now going to be, each time I run this, it's going to be entirely replaced. Okay, now you might be looking at this log file and thinking that the information here is pretty basic. And you know what? It kind of is. You might want to have information, such as timestamps, and filenames, and other custom data in your log messages. Now the logging module has you covered. And we'll take a look at customizing the logging features in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** basicconfig (7), basiclog_start (1)
> **Warnings:** warning (7)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (5)
> **UI Navigation:** in the sidebar (1), click on (1)
> **Analogies:** such as (2)
> **Env Vars:** debug (1)

#### [Custom logging](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=0)** - [Instructor] The [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) logging module is very flexible, and it makes it easy to customize the message output depending on your needs and this way, you're not stuck with a single message format. So the basic config function takes two arguments. There's format and there's date format. The format argument specifies a string that controls the precise formatting of the output message that is sent to the log, and the date format argument is used in conjunction with the format argument. So if the format argument contains a date specifier, then the date format argument is used to format the date string using the same kind of date formatting strings that you would pass to say the strftime function. The table that I'm showing you here, lists some of the formatting [Tokens](../../Skills/Web%20Development/Tokens.md) you can use in the format argument. Now, this is not an exhaustive list, okay? But I've included the most common ones that you're likely to use, and they're pretty self-explanatory. So for example, the top one there, the asctime token is a human readable time format, the filename and funcName tokens are for the file, and function names where the log message originated and so on. So let's switch over to our editor, and try some of these out. Right here in my code space, I'm going to open up custom log start. And you can see I've already got some code in here that's specifying an output file, and a logging level of debug. And I've got a couple of logging calls already. So if we just run what we have right now, let's go ahead and try that.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=97)** And I'm going to run customlog, right? So when I run that, you can see, sure enough, the output log shows up. And let's go ahead and click on it. So you can see that this is the output format that we've seen so far, right? There's the logging level, and then there's this root keyword that's from the root program, and then my custom messages, okay? So let's define a custom format. So I'm going to go back to my code. So what I'm going to do is I'm going to define a format string, all right? So I'll write fmtstr is equal to, and I'm going to put in percent asctime, s, and then a colon, and then I'm going to put another one in here called percent, levelname, s, another colon;
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=155)** and then I'm going to put in percent, and then funcName followed by an S, and then Line colon, and then a percent, and then inside parenthesis I'm going to put lineno with a d, that's going to be an integer. And then finally a percent with a message and followed by an s, okay? So this is going to put out a custom format. So it's going to show the date and time, the logging level, the function where it was called from the line number, and whatever message I'm supplying. And now I need to specify this in my call to basic config. So I'll put in format equals fmtstr.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=206)** All right, so now let's run our updated code. So I'll run this again, okay? And let's go ahead and look at our log. So here's the original information that we put in the first time, but now, right? The log output has the date and time, it's got the logging level, right? It has my module, the line number in the code where the message was called from. And by the way, it says module because I don't have a function that I'm calling it from. It's just the top level code, and then the message. So let's get a little bit fancier. I'm going to add another function to my code. Let's go back and do that. So I'm going to define another function, and it's not going to really do anything except log. So I'll write logging.debug. "This is debug level log message."
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=267)** So I'm also going to define a date formatting string because I don't like this date format right here. All right, I'm going to format it a different way. So let me add that. I'm going to call it datestr, and I'm going to set that to percent month with a slash, and then percent today, and then a slash and percent capital Y for year, and then a space. And then I'm going to do percent capital I slash, percent capital M slash, percent capital S. Actually not use, let's not use slashes. Let's use colons for this one, right? And then a space, and then a percent P for AM, PM. And then I need to add this to my basic config call. So that is going to be, date format is going to be datestr. And then I need to call my new function. So I'll just simply call another function down here to make sure that it executes. All right, so now let's run this updated program, smaller, so we see it. Alright, so now we have our formatting date string, right? We're calling another function. That function is doing some logging output. Let's try this again. Let's go back to the log file. And so now you can see that the date formatting is different. Here's what it looked like before I changed it. Here's my new date format, right?
>
> **[6:00](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=360)** It's got AM and PM. It's got, you know, the month, day, and year. And it has different information, so here I'm calling it from the top level module at line 20. You can see that this debug message was called from my another function at line number seven. So now I've got much more detailed information in my output log. So there's one more thing I want to show. And that's how to embed custom data into the log message. So suppose my program had access to information such as the current username or their IP address, and I wanted that data to be part of the log message. So each one of the logging functions takes a parameter named extra. Let's close the log here. Now that extra parameter can be set to a dictionary object that contains key value pairs to be included in the output. So once again, I'll make another variable, and I'm going to call that extdata. And I'm just going to make this a dictionary, right? And I'm going to, I'm going to have user, and this could have come from anywhere, right? And I'm going to have the user be, you know me, joemorini@[example.com](https://example.com), all right? So now I'm going to modify my format string to include a placeholder for this data. I'm just going to put that right at the front here. It's going to say User colon, and then I need you to put in percent, user,
>
> **[7:32](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=452)** and so this parameter right here needs to match the key of the dictionary, right? So I can have this dictionary have a lot of different values, and then I just have to embed those values in my format string right here. And then now I need to add the extra parameter to each of my login calls. So for example, I'm going to put in comma, extdata, oh no, I'm sorry, extra equals, and that's going to be extdata. So I'll put that in here, copy that, paste that, and we'll put it into my function up here. Alright, so now I've got my extra data going in. And one more time, actually, let's delete the existing logs so that we start from scratch. So let's go ahead and run this again. Right, there's my log. And now, you can see I've got my custom data being embedded in my logging output. So that should give you a sense of how powerful and useful the python logging module is. And once you start using it, you'll start to think yourself, why have I not been using since the entire time? And it's really particularly useful when you're working with large amounts of data because you know you can log out specific parts of data at different times and dates, you can tag it certain ways, so you can easily search the log later. It's just really useful when working with data, so if you're not already using the logging feature, you should really strongly consider using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (2)
> **CLI Commands:** make (3), python (2)
> **Analogies:** for example (2), such as (1)
> **Code Identifiers:** funcname (2)
> **Cross-References:** go back to (2)
> **URLs:** [example.com](https://example.com) (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-python-working-with-data/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/next-steps?u=76281980&t=0)** - [Joe] Well, that brings us to the end of the course. Congratulations on completing the course, and I hope you enjoyed learning about [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s built-in functions and features for working with data. We've only just scratched the surface of what this great language can do when it comes to [Data Processing](../../Skills/Database%20Management/Data%20Processing.md), however, so I hope you take some time to explore some of the other great courses here in the library that cover this rapidly growing area of computing. I hope to see you again in another one of my courses soon. Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **CLI Commands:** python (1)
> **Speakers:** - [joe] (1)


## Instructor

- [Joe Marini](../../Instructors/Software%20Development/Joe%20Marini.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-working-with-data-4312001/codespaces)

## Skills Covered

- Python (Programming Language)
- Data Management

## Path Context

### In [Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)
← [Advanced Python- Classes and Functions](Advanced%20Python-%20Classes%20and%20Functions.md) | **3 of 11** | [Python Data Structures- Stacks, Deques, and Queues](Python%20Data%20Structures-%20Stacks%2C%20Deques%2C%20and%20Queues.md) →

### In [Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)
← [Python Statistics Essential Training](Python%20Statistics%20Essential%20Training.md) | **2 of 8** | [Advanced Python- Working with Databases](Advanced%20Python-%20Working%20with%20Databases.md) →

## Appears In

- [Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)
- [Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](../Data%20Science/Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — Data Management
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)

---

[↑ Back to top](#)