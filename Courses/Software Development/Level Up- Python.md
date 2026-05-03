---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: level-up-python
url: "https://www.linkedin.com/learning/level-up-python"
duration_minutes: 57
duration: 57m
level: Intermediate
updated: 11/9/2022
learners: 393016
skills:
  - Python (Programming Language)
exercise_files: false
github: "https://github.com/LinkedInLearning/level-up-python-3210418/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGnwvqIftQDEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668016084325?e=2147483647&amp;v=beta&amp;t=dFt6FEqbWzFRhssfqXg6vrZFm7aXoRpl1993YJS__RY"
linkedin_topic: Software Development
learning_paths:
  - '[[A Quick Start Guide to Programming in Python]]'
  - '[[OpenEDG Python Institute- Programming with Python Professional Certificate]]'
  - '[[Getting Started with Python]]'
prev_courses:
  - '[[Hands-On Introduction- Python]]'
  - '[[Python Object-Oriented Programming]]'
  - '[[Programming Foundations- Data Structures]]'
next_courses:
  - null
  - null
  - '[[8 Things You Must Know in Python]]'
path_nav: '[{"path":"A Quick Start Guide to Programming in Python","position":6,"total":6,"prev":"Hands-On Introduction- Python","next":null},{"path":"OpenEDG Python Institute- Programming with Python Professional Certificate","position":3,"total":3,"prev":"Python Object-Oriented Programming","next":null},{"path":"Getting Started with Python","position":6,"total":8,"prev":"Programming Foundations- Data Structures","next":"8 Things You Must Know in Python"}]'
path_count: 3
tags:
  - course
  - topic/software-development
  - topic/data-science
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Level%20Up-%20Python.md)

![Level Up: Python](https://media.licdn.com/dms/image/v2/C4E0DAQGnwvqIftQDEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668016084325?e=2147483647&amp;v=beta&amp;t=dFt6FEqbWzFRhssfqXg6vrZFm7aXoRpl1993YJS__RY)

# Level Up: Python

> Want to test your Python skills? These concise challenges let you stretch your brain and test your talents. Instructor Barron Stone shares over a dozen Python challenges, as well as his own solutions to each problem—the majority of which are less than two dozen lines of code. The challenges include finding prime factors, sorting strings, scheduling a function, solving a sudoku, and more. You can t

> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-python) | 57m | Intermediate | 393K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Put your Python skills to the test!](#put-your-python-skills-to-the-test)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Challenges**](#1-challenges) (15 videos)
  - [Find prime factors](#find-prime-factors)
  - [Identify a palindrome](#identify-a-palindrome)
  - [Sort a string](#sort-a-string)
  - [Find all list items](#find-all-list-items)
  - [Play the waiting game](#play-the-waiting-game)
  - [Save a dictionary](#save-a-dictionary)
  - [Schedule a function](#schedule-a-function)
  - [Send an email](#send-an-email)
  - [Simulate dice](#simulate-dice)
  - [Count unique words](#count-unique-words)
  - [Generate a password](#generate-a-password)
  - [Merge CSV files](#merge-csv-files)
  - [Solve a sudoku](#solve-a-sudoku)
  - [Build a zip archive](#build-a-zip-archive)
  - [Download sequential files](#download-sequential-files)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Put your Python skills to the test!](https://www.linkedin.com/learning/level-up-python/put-your-python-skills-to-the-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/put-your-python-skills-to-the-test?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/level-up-python/put-your-python-skills-to-the-test?u=76281980&t=6)** - How do you get better at programming? Practice. I'm Barron Stone, and this is a collection of bite-size challenges you can use to practice [[Python (Programming Language)|Python]] programming. Each video in this course is self-contained with an explanation of a challenge along with my solution to it. They're all independent, so you can skip around and watch the videos in any order. These challenges are intended to be fairly short something you can work on when you have a few free minutes and most of my solutions are less than two dozen lines of code. They can all be solved using just the tools in the standard Python library and I limited myself to only using those but feel free to use any other modules or libraries in your own solution. There are multiple ways to solve every problem. Whether you're a new programmer looking for practice or an experienced developer who likes fun little challenges, you've come to the right place. Happy programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - how (1)
> **Non-Speech:** (bright music) (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/level-up-python/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] [[Codespaces]]. Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [[Software Development]] in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a getting started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/level-up-python/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a codespace is directly from one of our course's GitHub repositories. From here, click code and then create codespace on main. You can also restart a previous codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi branch repository looks like which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/level-up-python/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[[HTML]] file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes like say, 07_03e, I may see a dialogue box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace. To create your own fork, you can click on the fork button on the repository. I'm going to hit create fork. I'll have my own copy of this repository, and if I want to, I can start a new codespace on that fork. This forked version is almost exactly
>
> **[4:41](https://www.linkedin.com/learning/level-up-python/using-github-codespaces-with-this-course?u=76281980&t=281)** like the original repository but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/level-up-python/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button and I'll ask it to go ahead and stage the changes. And then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run [[Git]] [[Fetch]]. That way, it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Codespaces will also ask you if you want to create a fork automatically. Look for additional course specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (9), [[GitHub]] (8), [[LinkedIn]] (2), [[Software Development]] (1), [[HTML]] (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Find prime factors](https://www.linkedin.com/learning/level-up-python/find-prime-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/find-prime-factors?u=76281980&t=0)** (video game blips),
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/find-prime-factors?u=76281980&t=3)** - Public key encryption relies on certain, really large numbers being computationally hard to factor to keep data secure. For this challenge, we'll factor some numbers, that are easier to deal with. Your goal is to write a [[Python (Programming Language)|Python]] function to find the prime factorization of a given number. It should take an integer value as the input and then return a list containing all of its prime factors. For example, calling the function with an input of 630 should return a list containing the values 2, 3, 3, 5, 7. Those are all prime numbers and if you multiply them together, their product is 630. Calling your function on a prime number like 13, should return a list with just a single value, that prime number. Pause the video now to create your own solution, then I'll show you how I solved this challenge. (video game blips) For my solution. I decided to search for factors by dividing the given number by sequentially larger values, starting from two. To see which ones divide evenly into it without leaving a remainder behind. For example, if the input to my function is the number 60, I'll first try dividing that by two. The quotient is an even 30 with no remainder, so I'll add two to a list of factors I found. Next I'll try dividing that result of 30 by two again, and the quotient is 15, no remainder left over. So I'll add two to my list of found factors again. Trying to divide 15 by two leaves a remainder or fractional value. So I'll increment the divisor and try again.
>
> **[1:37](https://www.linkedin.com/learning/level-up-python/find-prime-factors?u=76281980&t=97)** Three divides cleanly into 15, so I'll add that to my list and continue the search. This process continues until I eventually find all of the prime factors. You can see that process in the code for my get prime factors function. (video game blips) Line two instantiates a list to hold the found factors and line three sets the initial divisor value to two. After that, a while loop continues to iterate as long as the divisor is less than the input number that I'm trying to divide it by. The if statement on line five uses the modulo operator to check if the current divisor divides into that number without a remainder, and if so I append it to the factors list and set the new value of number to be the quotient for the next loop iteration. If that divisor was not a factor, then I increment the divisor variable and try again. Finally, after the while loop reaches its exit condition, the function returns the assembled list of factors. Now, down in the terminal, I've already started an interactive Python shell and imported my get prime factors function. So I'll call it on the number 630 and I get the factors 2, 3, 3, 5, 7. If I call it on a prime number, 13, as expected, I get a list with just 13. (video game blips) My solution is just one way to solve this challenge and I'm curious to see different approaches. So I encourage you to leave comments and share your own strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), find (2)
> **Analogies:** for example (2)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - public (1)

#### [Identify a palindrome](https://www.linkedin.com/learning/level-up-python/identify-a-palindrome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/identify-a-palindrome?u=76281980&t=0)** (electronic blipping)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/identify-a-palindrome?u=76281980&t=3)** - [Instructor] Identifying certain patterns within strings, or other types of [[Data Structures]], is a common programming task. For this challenge, your goal is to write a [[Python (Programming Language)|Python]] function that determines if a given string is a palindrome. A palindrome is a [[Microsoft Word|word]] or phrase that reads the same forwards as it does backwards. For example, the word level is spelled the same forwards and backwards. And race car is a combination of two words, that's the same both ways, ignoring the space between them. Your function should accept a single input of the string to evaluate and return a Boolean value indicating whether or not that string was a palindrome. Your function should only consider letters A through Z when evaluating the string. And you should ignore their case, treating uppercase and lowercase letters as being the same. For example, if you call your function on the string hello world, it should return false because that's not a palindrome. But if you call it on the phrase, go hang a salami - I'm a lasagna hog, it should return true. Because, if you overlook the punctuation and white space, those letters are an entertainingly long palindrome. Pause the video now to create your own solution, then I'll show you how I solve this challenge. (electronic blipping) My solution uses the regular expressions module, which I import up top to extract letters from the input string. Within my is_palindrome function, I use the lower operator on the input string to convert all of the letters to lower case. And then I pass the result to the regular expressions find all function with a pattern that will search for a combination of one or more letters,
>
> **[1:36](https://www.linkedin.com/learning/level-up-python/identify-a-palindrome?u=76281980&t=96)** A through Z. That will produce a list with all of the matched substrings, which I merged together into a single string using the join function, which represents my forward sequence of letters. On line five, I slice through that entire string with the stride set to negative one, which will give me a copy of the original string in reverse or backwards order. Finally, I compare the forward and backwards strings and return whether or not they're equal. Now, down in the Terminal, I've already started an interactive Python shell and imported my is_palindrome function. So, I'll call it. And pass it an input string, hello world. Now, let's try that again with a longer phrase. Go hang a salami, I'm a lasagna hog.
>
> **[2:32](https://www.linkedin.com/learning/level-up-python/identify-a-palindrome?u=76281980&t=152)** And when I press enter, I get an output of true, because it is a palindrome. (electronic blipping) My solution is just one way to solve this challenge. And I'm curious to see different approaches. So I encourage you to leave comments and share your own strategy with others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Microsoft Word|Word]] (2), [[Data Structures]] (1)
> **Definitions:** is a  (5)
> **CLI Commands:** python (2), find (1)
> **Code Identifiers:** is_palindrome (2)
> **Analogies:** for example (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Sort a string](https://www.linkedin.com/learning/level-up-python/sort-a-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/sort-a-string?u=76281980&t=0)** - Manipulating strings and sorting things are common tasks in everyday programming. So this challenge will give you practice doing just that. Your goal is to write a [[Python (Programming Language)|Python]] function to sort the words in a string. It should accept a string containing one or more words separated by spaces as the input argument, and then return a string containing those words sorted alphabetically. A call to the function might look like this, taking in a string of words and then returning the string of string words. You should ignore the case of the words when sorting them. However, the output should have the same upper and lowercase letters as the corresponding input words. For example, the input string 'banana ORANGE apple' should produce the output shown here with 'apple banana ORANGE.' Notice that even though the [[Microsoft Word|word]] orange was capitalized it was still sorted to the end of the output string because that's where it belongs alphabetically and it maintained its capitalization in the output. Pause the video now to create your own solution then I'll show you how I solve this challenge. My sort words function starts by using the split method which breaks apart the input string at each of the spaces and gives me a list of the individual words. From there, it might seem like the next step should be to use the sort function on the list, but that won't work because the sort function will prioritize words beginning with capital letters ahead of words with lowercase letters.
>
> **[1:35](https://www.linkedin.com/learning/level-up-python/sort-a-string?u=76281980&t=95)** I need a way to sort these words that will ignore case while still preserving the original word. My workaround was to append a lowercase copy of each word to the front of the original word that will enable the sort method to correctly reorder the words the way I want. And then afterwards, I can simply strip off the lowercase copy and keep the original. It's possible to implement the sort words function with a single line as shown here. It starts with the split method which breaks apart the input string at each of the spaces and gives me a list of the individual words. I then pass that list of words to the sorted function along with the optional named key argument string.case fold which tells the sorted function to ignore the case of letters when comparing strings. The sorted function returns a sorted list of words which I finally assemble into a single string separated by spaces using the joint method. Now down in the terminal, I've already started an interactive Python shell and imported my sort words function. So I'll call it and I'll pass it in input.
>
> **[2:42](https://www.linkedin.com/learning/level-up-python/sort-a-string?u=76281980&t=162)** I'll press enter. So I encourage you to leave a comment and share your own strategy with others. My solution is just one way to solve this challenge and I'm curious to see different approaches. So I encourage you to leave comments and share your own strategy with others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Env Vars:** orange (2)
> **Non-Speech:** (upbeat music) (2)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - manipulating (1)

#### [Find all list items](https://www.linkedin.com/learning/level-up-python/find-all-list-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/find-all-list-items?u=76281980&t=0)** (game reward effects)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/find-all-list-items?u=76281980&t=3)** - [[Python (Programming Language)|Python]]'s index method finds the index of the first item in a list. But what if there are multiple instances of that item? Your goal for this challenge is to write a Python function to find the indices for all items in a list that are equal to a given value. It should accept two input parameters; the list to search, and the value you're searching for. The output should be a list of indices each represented by a list of numbers. Keep in mind that Python lists can also contain other lists, so your function should be able to traverse multidimensional lists to find all indices of the given value. For example, if I wanted to find all of the twos in this list, which contains several sublists, passing it to my index_all function should find this first one, which is nested three lists deep and can be indexed at 0, 0, 1. This next two, which is only two lists deep and can be indexed at 0, 1, and the third and final two, which is also two lists deep at index 1, 1. The resulting output is a list of lists containing those indices. Pause the video now to create your own solution. Then I'll show you how I solved this challenge. All right. For my index_all function, I start by initializing an empty list to hold all of the indices that I find and then I use the for loop on line three to iterate through the values and index numbers in the input search_list. I check to see if each value is equal to the item I'm searching for, and if so, I append the corresponding index to the list of indices. If that item was not the one I'm searching for, the elif statement on line six
>
> **[1:36](https://www.linkedin.com/learning/level-up-python/find-all-list-items?u=76281980&t=96)** checks to see if that item was a list. If so, I recursively call the index_all function on line seven to search that sublist for the item. That function will return a list of any indices it finds, so I use a for loop to append each of those indices it returns to my higher level list of indices. However, notice that I can concatenate the index of the sublists I just explored to the front of the index value. That way, as the recursive calls of the index_all function unwind, it will build up the multi-number indices for items that are buried deep within sublists. Now, down in the terminal, I've already started an interactive Python shell and imported my find_all function and initialized my example nested list structure with numbers one, two, and three. If I call my index_all function to search that list for the number two, I get back a list of three lists with index values, 0, 0, 1, 0, 1, and 1, 1. Now, something interesting about the way this works, if I call the index_all function again but instead of searching for a single number, I search for a list of numbers, 1, 2, 3,
>
> **[2:51](https://www.linkedin.com/learning/level-up-python/find-all-list-items?u=76281980&t=171)** now I get back the results 0, 0, and simply one, because those are the indices for sublists containing exactly 1, 2, 3 in the overall example list. (screen transition) As with any programming task, there are lots of different ways to break it down. If you took a different approach to this problem, I'd love to see it, so please leave a comment to share your strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** find (5), python (4)
> **Code Identifiers:** index_all (6), search_list (1), find_all (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - python (1)

#### [Play the waiting game](https://www.linkedin.com/learning/level-up-python/play-the-waiting-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/play-the-waiting-game?u=76281980&t=0)** (game machine chimes)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/play-the-waiting-game?u=76281980&t=3)** - Creating games is a fun way to practice programming, so that's what we'll do for this challenge. Your goal is to write a [[Python (Programming Language)|Python]] function to play a pulse-pounding game of patience I call the "Waiting Game." When the player runs your waiting game program, it should print a message for them to wait a random amount of time somewhere between two to four seconds. When the player presses enter, that starts a timer. The player's goal is to wait the specified number of seconds, and then press enter again. That displays the elapse time along with a message about whether the player was too fast, too slow or right on target. Pause the video now to create your own solution, then I'll show you how I solve this challenge. (game machine chimes) I used two modules from the Python Standard Library to implement my solution. The time module to measure the elapsed time. And the random module to generate a random number of seconds to wait each time the game is played. Online five. I used the rand int function to set the target number between two to four seconds, and then print a message so the player knows how long they're supposed to wait. The input function on line eight prompts the user to press enter to begin, and then blocks execution until they hit the enter or return key. When they do, line nine calls the time modules perf counter function, which returns a float value of the current time in fractional seconds, which comes from a high-resolution performance counter-clock for precisely measuring short durations. Line 11 prompts the user again to press enter after the target time has elapsed, and when they do, line 12 calculates the elapse time by calling the perf counter function again to compare the current time to the earlier time. After that, I print a message
>
> **[1:37](https://www.linkedin.com/learning/level-up-python/play-the-waiting-game?u=76281980&t=97)** with the elapsed number of seconds, format it out to three decimal places, and then the final if else structure prints an appropriate message depending on whether the player was too fast or too slow. (air swooshes) Now, in the terminal, I've already started an interactive Python shell, and imported my waiting game function, so I'll call it. It tells me I'll need to wait for two seconds. I'll press enter to begin. Press enter again to stop and aww, I was too fast. (game machine chimes) It's a simple game, but writing it was good practice measuring time and interacting with the user. If you've developed other simple games to practice programming, please share them in the comments for others to enjoy as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3)
> **Non-Speech:** (game machine chimes) (3)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - creating (1)

#### [Save a dictionary](https://www.linkedin.com/learning/level-up-python/save-a-dictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/save-a-dictionary?u=76281980&t=0)** (gaming music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/save-a-dictionary?u=76281980&t=3)** - [[Python (Programming Language)|Python]] dictionaries are incredibly useful for storing and retrieving information, but that data is held in memory. So when the program exits, it disappears. But what if you need that dictionary again later? Your goal for this challenge is to write a function to save a Python dictionary object to file. Your safe function should take two input arguments for the dictionary to save, and an output file path. Now, saved data's only useful if you can retrieve it later, so you should also write a second function to load the saved dictionary back into Python. That load function should take a file path to the saved dictionary as its input, and then return the retrieved dictionary object. Pause the video now to create your own solution. Then I'll show you how I solve this challenge. When you need to preserve something for later, you pickle it. So that's what I did for my solution. In Python, pickling is a process which serializes a python object converting it into a bite stream that can be saved to file. The inverse operation of unpickling can then be used to later deserialize the bite stream back into the original object structure. Python's pickle module provides the interface to pickle and unpickle objects. Looking at my save_dict function, on line four, I use a context manager to open the output file at the specified path configured to write binary data, and then use the pickle module's dump function to write the pickled representation of the dictionary to save to that file. Down in my load_dict function on line eight, I open a file object to read binary data and then use the pickle module's load function
>
> **[1:37](https://www.linkedin.com/learning/level-up-python/save-a-dictionary?u=76281980&t=97)** to extract the dictionary object with its original structure from the serialized pickle file. Now, down in the terminal, I've already started an interactive python Shell, imported my two functions, and created a test dictionary object with the keys 1, 2, 3 corresponding to the values a, b, and c. I'll save that dictionary by typing save_dict test_dict. I'll name the file test_dict.pickle
>
> **[2:11](https://www.linkedin.com/learning/level-up-python/save-a-dictionary?u=76281980&t=131)** and then press Enter. Now to recover that dictionary from the file, I'll type recovered equals load_dict, the file name test_dict.pickle,
>
> **[2:31](https://www.linkedin.com/learning/level-up-python/save-a-dictionary?u=76281980&t=151)** and then press Enter. If I print out the contents of that recovered object, I see that it's the same as the original test_dict. Pickling is useful for more than just saving data to file. It also allows you to do things like transfer python objects across a network. If you took a different approach to this challenge, perhaps you tried saving the dictionary in a text-based format such as [[JSON]] or CSV, or maybe you used Python's Shelf module. I encourage you to leave a comment and share your strategy with others. How well did it work, and was it robust enough to handle all of the different data types that can be stored in a dictionary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[JSON]] (1)
> **CLI Commands:** python (9)
> **Code Identifiers:** test_dict (4), save_dict (2), load_dict (2)
> **Env Vars:** json (1), csv (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Schedule a function](https://www.linkedin.com/learning/level-up-python/schedule-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/schedule-a-function?u=76281980&t=0)** (video game bleeps)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/schedule-a-function?u=76281980&t=3)** - It can be useful to schedule parts of a program to execute at specific times. Just like setting an alarm to wake yourself up in the morning. Your goal for this challenge is to write a [[Python (Programming Language)|Python]] function which sets an alarm by playing a sound file and printing a message at the specified time. The function should have three inputs, for the time you want to set the alarm to go off, the sound file you want to play, and the message to display. A call to your set alarm function might look like this using the current system time, plus one, to set an alarm for one second into the future. Pause the video now to create your own solution. Then I'll show you how I solved this challenge. (video game bleeps) All right, for my solution, I used two modules from the Python standard library. The sched module, which implements a general purpose event scheduler and the time module, to manipulate the time units, and delay function for the scheduler. My schedule function has three parameters named event time, function, which is the function to execute and args, which has the wild card or star operator, to accept a variable number of arguments. Within my function I instantiate a new scheduler object named s, and pass it the time modules, time and sleep functions. It will use those two functions to deal with the outside world and control when scheduled events execute. On line six, I use the schedulers enterabs function to schedule the event to execute at an absolute time. The first event time argument should be a numeric type that's compatible with the return value of the time function that I pass to the scheduler constructor on line five. The next argument configures the event
>
> **[1:36](https://www.linkedin.com/learning/level-up-python/schedule-a-function?u=76281980&t=96)** to have a high priority by setting the priority to one. For the third argument, I pass in the function to execute at the specified time, and I also pass along any given arguments for that function to execute. The next line prints a message to let me know what function was scheduled and for when, using the name variable to get the function's name and using the local time and ASC time to format the event time into a useful string. Finally, I call the schedulers run function to run the scheduled events. Now down in the terminal, I've already started an interactive Python shell and imported the time module in my scheduling function. I'll call that function as schedule function, time dot time plus one to schedule the event for one second from now. I'll pass print as the function to execute and the message will be howdy. When I press enter, I get a message that the print function was scheduled and then one second later I get the howdy message. Since my function accepts a variable number of arguments, I can add a second string to pass to that print function. How are you? And when I run that, after one second, the print function executes saying, howdy, how are you? (video game bleeps) My solution is just one way to solve this challenge. For one thing, there are tons
>
> **[3:09](https://www.linkedin.com/learning/level-up-python/schedule-a-function?u=76281980&t=189)** of other great external libraries for playing sounds in Python. I encourage you to leave comments to share how you approached this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4)
> **Env Vars:** asc (1)
> **Tools:** terminal (1)
> **Analogies:** just like (1)
> **Speakers:** - it (1)

#### [Send an email](https://www.linkedin.com/learning/level-up-python/send-an-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/send-an-email?u=76281980&t=0)** (video game noises)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/send-an-email?u=76281980&t=3)** - As an engineer, I've written analysis programs that can take hours or even days to finish running. Rather than sitting around waiting for it to finish, I have the program send an email to let me know when it's done or if it runs into problems that need my attention. Your goal for this challenge is to write a [[Python (Programming Language)|Python]] function to send a basic email notification. At a minimum, the function should have input parameters for the receiving email address, a subject line, and the message body. Don't worry about including attachments or fancy formatting for this challenge, and feel free to use any email service you want. Keep in mind though that some services may require you to configure your account's security settings to send an email from Python. Figuring that out is part of the fun. Pause the video now to create your own solution, then I'll show you how I solve this challenge. (video game noises) For my solution, I used Python's smtplib module, which provides an interface to connect to SMTP servers and send email messages. I'll be sending my messages from an [[Microsoft Outlook|Outlook]] email account and after digging down into the account settings menus, I found this page, which shows the server name, port, and encryption method I'll need to use to send emails with SMTP. Now, looking at my code, I import the smtplib module, and then create two string variables with the email address and password for the account I'll be sending the message from. Since the password is being stored in plain text here, I don't recommend using your primary email address. Create a secondary account to send these notification emails.
>
> **[1:36](https://www.linkedin.com/learning/level-up-python/send-an-email?u=76281980&t=96)** My send email function starts by formatting the subject and message body inputs into a single message string. This is the way to format the email to have a subject line and a simple text message. Next on line eight, I use the SMTP function to open a connection to the [[Microsoft Office|Office]] 365 SMTP server on port 587, and I open that with a context manager to automatically handle closing the connection when it's done. Line nine calls the starttls method to put the SMTP connection into transport layer security, or TLS mode, and then line 10 uses the login method of the server object to log in with the sender's email address and password credentials. Finally, at line 11, I use the sendmail method to send the formatted message string from the sender email address to the receiver. Now down in the terminal, I've already started an interactive Python shell and imported my send email function. So I'll call it. Passing the email address to send the message to. I'll make the subject line 'Notification', and the message 'Everything is awesome!' And then press enter to run it. Now, logged into my email account, I can see that notification that 'Everything is awesome!' My solution is just one way to solve this challenge. I encourage you to leave comments
>
> **[3:07](https://www.linkedin.com/learning/level-up-python/send-an-email?u=76281980&t=187)** and share your own thoughts and strategies for sending yourself notifications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Outlook|Outlook]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** smtp (5), tls (1)
> **CLI Commands:** python (4), make (1)
> **Non-Speech:** (video game noises) (2)
> **Ports:** port 587 (1)
> **Tools:** terminal (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)

#### [Simulate dice](https://www.linkedin.com/learning/level-up-python/simulate-dice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/simulate-dice?u=76281980&t=0)** (lively game music) (ending game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/simulate-dice?u=76281980&t=3)** - I love playing tabletop RPGs but it'd be nice if I knew the [[Probability]] of getting certain outcomes before taking a risk and rolling the dice. (dice rolling)
>
> **[0:11](https://www.linkedin.com/learning/level-up-python/simulate-dice?u=76281980&t=11)** - [Narrator] You have failed this skill check and fall into a pit.
>
> **[0:14](https://www.linkedin.com/learning/level-up-python/simulate-dice?u=76281980&t=14)** - Your goal for this challenge is to write a [[Python (Programming Language)|Python]] function to determine the probability of different outcomes when roiling an arbitrary set of dice. Now, while it's possible to use math to calculate the outcome probabilities for a handful of dice, for this challenge, we'll use a different method called Monte Carlo [[Simulation]], which uses random sampling to evaluate possible outcomes. Your program should simulate rolling dice over and over to see how many times each outcome occurs and then determine the probabilities based on that. You'll need to simulate a really large number of rolls to get a result that's statistically significant. For simplicity, let's say a million simulations. Your function should accept a variable number of input arguments, representing the number of sides on an arbitrary number of dice, and its output should print a table of the probability for each possible outcome. For example, a call to the function for one four-sided die and two six-died dice might look something like this. And the message it prints would show how often each possible outcome occurs across all simulated dice rolls. Pause the video now to create your solution, then I'll show you how I solved the challenge. For my solution, I used the random module's randint function to simulate dice rolls and a Counter from the collections module to keep track of how often each outcome occurs. My roll_dice function on line four accepts a variable number of arguments to represent the number of sides on the dice and an optional named argument for the number of simulation trials to run,
>
> **[1:46](https://www.linkedin.com/learning/level-up-python/simulate-dice?u=76281980&t=106)** which I give a default value of one million. Line five initializes a Counter to keep track of outcomes and then the for loop on line six is where the magic really happens. It simulates rolling dice for the number of trials. For each simulation, I use the randint function to simulate rolling each of the dice in the variable input parameter and then sum the individual outcomes together. The resulting value serves as the index in the counts dictionary to increment it by one. Finally, the code on lines 9 through 11 use a for loop to print out how many times each possible outcomes occurred as a percentage. (screen whooshing) Now, in the terminal, I've already started an interactive Python shell and imported my roll_dice function. So I'll call it. And pass in 4, 6, 6 as arguments. This will roll one four-sided die and two six-sided die. The output displays the simulated probabilities for all possible outcomes from 3 to 16. Now, let's try adding a fourth 20-sided die to that mix.
>
> **[3:01](https://www.linkedin.com/learning/level-up-python/simulate-dice?u=76281980&t=181)** And that gives us the probabilities for outcomes, ranging from 4 to 36. (lively music) My solution is just one way to solve this challenge, and I'm curious to see different approaches. So I encourage you to leave comments and share your own strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3), [[Simulation]] (3), [[Python (Programming Language)|Python]] (2)
> **Non-Speech:** (lively game music) (1), (ending game music) (1), (upbeat music) (1), (lively music) (1)
> **Speakers:** - i (1), - [narrator] (1), - your (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** roll_dice (2)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)

#### [Count unique words](https://www.linkedin.com/learning/level-up-python/count-unique-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/count-unique-words?u=76281980&t=0)** (game machine chimes)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/count-unique-words?u=76281980&t=3)** - Pretty much every modern [[Microsoft Word|word]] processor has a word count tool to count the total number of words in a document. For this challenge, we're going to take that tool one step further to practice both breaking down text and counting items. Your goal is to write a [[Python (Programming Language)|Python]] function that determines the number of unique words in a text file and counts how many times each word occurs. It should accept the path to a text file as the input argument, and then print the total number of words in the file, as well as the top 20 most frequently used words, and how many times each of them occurs. An example call to the function might look like this. Printing out a message with the total word count and a top 20 list. How you choose to format that output is really up to you. You should ignore case when considering if two words are the same or different, and for this challenge, we'll say that words can contain letters, numbers, apostrophes and hyphens, and they're separated by any other punctuation or white space. If you're looking for input files to test your program, I recommend downloading some classical literature from [Gutenberg.org](https://Gutenberg.org). In plain text format. I'll use the complete works of William Shakespeare for my own test case. Pause the video now to create your own solution, then I'll show you how I solve this challenge. (game machine chimes) All right. From my solution, I used two Python modules, the regular expressions module to extract the individual words from the text file, and the collections module for its counter class, which is a dictionary subclass that provides a convenient way
>
> **[1:36](https://www.linkedin.com/learning/level-up-python/count-unique-words?u=76281980&t=96)** to keep a tally of unique items. It's exactly what this challenge needed. With my count words function, I open the input file using a context manager online six and then use a regular expression to find all of the words within the text. The search pattern looks for any sequence of one or more letters, numbers, hyphens and or apostrophes. Online eight, I convert the list of words that it finds into all upper case, and then print out the length of that list, which indicates the total number of words that were found. I create a new counter from the collections module on line 11, passing in my list of words as an argument, which populates the counter's dictionary with the number of times each word occurs. Finally, in the last section of code, I use the counter's most common method to retrieve a list of the 20 most common words along with their count values to display. Now, down in the terminal, I've already started an interactive Python shell, and imported my count words function. So I'll call it as count words, and then pass Shakespeare.text as the input argument. This is a text file containing the complete works of William Shakespeare, which I downloaded from [Gutenberg.org](https://Gutenberg.org). When I execute that function, I can see that Shakespeare wrote over 900,000 words, and his favorite word was "The." Not too surprising. This is just one way to solve this challenge. If you took a different approach,
>
> **[3:08](https://www.linkedin.com/learning/level-up-python/count-unique-words?u=76281980&t=188)** I encourage you to share your strategy with others in the comment section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), find (1)
> **URLs:** [gutenberg.org](https://gutenberg.org) (2)
> **Definitions:** is a  (2)
> **Non-Speech:** (game machine chimes) (2)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)

#### [Generate a password](https://www.linkedin.com/learning/level-up-python/generate-a-password?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/generate-a-password?u=76281980&t=0)** (playful music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/generate-a-password?u=76281980&t=3)** - Security experts recommend using a different password for each of your online accounts. So this challenge will involve writing a [[Python (Programming Language)|Python]] function to generate new passwords, which is good programming practice for working with randomness. Now I have a hard time remembering passwords like this one. It's a mess of letters, numbers, and special characters. For my own passwords, I prefer to use a system called Diceware to generate easier to remember pass phrases. It involves using a list of over 7,000 different words. Each [[Microsoft Word|word]] is associated with a five digit number, where each of the digits in that number is between one through six. You roll dice to generate a sequence of five random numbers, which corresponds to one of those words. Repeat that process several more times and the sequence of random words the dice chooses is your new passphrase. As a human, it's a lot easier to remember a sequence of words than a bunch of random letters and numbers and the randomness involved in picking those words makes it secure. You can read more about using Diceware and download a list of words to use for this challenge from [Diceware.com](https://Diceware.com). Rather than rolling physical dice, your goal is to write a Python function that takes a single argument for the number of words to select, and then returns a string containing a sequence of randomly selected words from that Diceware list separated by spaces. A call to the function and the string it returns might look something like this. Pause the video now to create your solution, then I'll show you how I solve this challenge. For my solution,
>
> **[1:35](https://www.linkedin.com/learning/level-up-python/generate-a-password?u=76281980&t=95)** rather than using a random number generator to simulate rolling five die and then looking up the corresponding word, I chose to take a different route, which involved loading all of the Diceware words into a single Python list and then using the random choice function to pick random words from it. The end result will be similar. I would normally use Python's random module for this type of operation. However, there's a nice red warning label on the documentation page, which says the random module should not be used for security purposes. The reasons why are beyond the scope of this short video, but it's generally good to pay attention to warnings like that. So I followed its advice and used the secrets module instead, which conveniently has its very own version of the choice function that I needed. Looking at my code, my generate passphrase function begins by opening the Diceware word list with a context manager and then uses the readlines function to get a list containing each of the lines in the file. If we look at that Diceware file, we see that it has two extra lines before the word list actually begins. And down at the bottom there are also several extra lines for a PGP signature. So on line five, I indexed out the 7,776 lines from the middle of the file that I actually care about. Since each of those lines contains both a five digit number and the corresponding word, I used the split method to break them apart and build a list containing just the words. After that, I used the secrets choice function
>
> **[3:09](https://www.linkedin.com/learning/level-up-python/generate-a-password?u=76281980&t=189)** within another list comprehension to build a list with a desired number of random words, and finally I used the join method to combine the random words into a single string with spaces between them. Now down in the terminal, I've already started an interactive Python shell and imported the module containing my function, so I'll call it as generate passphrase. And then I'll pass it seven as the input argument and press enter. It gives me back this string with seven random words to use as a passphrase. If I press the up arrow to run that function again, I get a different sequence of seven random words. My solution is just one way to solve this challenge. I encourage you to leave comments and share your own thoughts and strategies for generating passwords.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Microsoft Word|Word]] (5)
> **CLI Commands:** python (5)
> **URLs:** [diceware.com](https://diceware.com) (1)
> **Env Vars:** pgp (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Warnings:** warning (1)
> **Speakers:** - security (1)

#### [Merge CSV files](https://www.linkedin.com/learning/level-up-python/merge-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/merge-csv-files?u=76281980&t=0)** (video game sound effects)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/merge-csv-files?u=76281980&t=3)** - [Instructor] Comma separated values, or CSV, is a common file format to store tabular data in a plain text file. The first row contains one or more field names separated by commas and each line below that is a record with comma separated values corresponding to those fields. Your goal is to write a [[Python (Programming Language)|Python]] function to merge multiple CSV files into one. It should accept a list of file paths to the input files you want to merge and a path to the output file. For example, this call to merge CSV would merge two files, "class1" and "class2", into an output file named "all_students". Your function should be robust enough to merge files, Even if the headers don't match. The fields might be in a different order, or one file could have additional fields that the other does not. It should handle both cases without losing any fields or data. Pause the video now to create your own solution then I'll show you how I solve this challenge. (video game intermission music) My strategy to merge CSV files that may have different headers is to first create a list of all unique field names from all the files which will be the fields for the output file. Then, I go through each of the input files to add their records to the output leaving blanks where they're missing fields. Lines five through nine of my merge CSV function do the first part of that, building up a list of field names. I start by creating an empty list and then use a for loop to open up all of the files in the input list of CSV files to merge. I use the CSV modules, "DictReader" on line eight to extract all of the field names from each file
>
> **[1:37](https://www.linkedin.com/learning/level-up-python/merge-csv-files?u=76281980&t=97)** and then on line nine, I add them to the field names list if they're not already in there from a previous input file. After that, lines 12 through 19 handle writing records to the output file based on those field names. I use a context manager to open the output file to write on line 12, and then create a new DictWriter object from the CSV module passing in the list of field names I created. Every record I add using this DictWriter will include all of the fields from the list. On line 14, I write the first header row to the output file and then use a for loop to iterate through all of the input CSV files again. I open each one up and create a new DictReader from it, use a for loop to iterate through each record in that input file and write it to the output file. If that row I just read is missing certain fields the DictWriter will leave them blank or empty in the output. To test my function, I'll be using these two CSV files with information about two classes of students and their grades. Notice that the class on the left only had to take a midterm and final exam whereas the other class also had a lab assignment. Now, down in the terminal I've already started an interactive Python shell and imported my merge CSV function, so I'll call it and pass in a list with those two input files. Then the output file which I'll name "all_students.csv", and then run it.
>
> **[3:10](https://www.linkedin.com/learning/level-up-python/merge-csv-files?u=76281980&t=190)** That creates a new file in the working directory. I'll double click to open it up. Notice that the students from the first class have a blank field for the lab grade. Also, notice that the lab field got moved to after the final. That was the result of the order in which my program analyzed the input files to get the field names. There are lots of other ways to go about solving this challenge so I encourage you to leave a comment and share how you approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Env Vars:** csv (11)
> **CLI Commands:** python (2)
> **Code Identifiers:** all_students (2)
> **Definitions:** is a  (2)
> **Non-Speech:** (video game sound effects) (1), (video game intermission music) (1)
> **File Paths:** all_students.csv (1)
> **Tools:** terminal (1)

#### [Solve a sudoku](https://www.linkedin.com/learning/level-up-python/solve-a-sudoku?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/solve-a-sudoku?u=76281980&t=0)** (techno gaming music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/solve-a-sudoku?u=76281980&t=3)** - Did you know that doing number puzzles and games increases neuroplasticity within the brain and helps it reorganize itself? I love a good Sudoku puzzle and I love writing [[Python (Programming Language)|Python]] code. So let's do both. Your goal for this challenge is to write a Python function to solve Sudoku puzzles. The objective of Sudoku is to fill in a 9x9 grid with numbers such that each column contains all of the numbers one through nine, as does each row, and each of the 3x3 sub-grids or boxes. The puzzle starts partially filled in. And it's the player's job to fill in the remaining spaces. A well-designed puzzle will have one unique solution. For this challenge, we'll represent the Sudoku grid as a two-dimensional list of lists. It should have nine sub-lists, representing the rows with nine elements each. And we'll use the number zero to indicate empty spaces. Your solve_sudoku function should take a new partially filled in puzzle as input and then return a two-dimensional list, representing the solution to that puzzle; with all the spaces filled in one through nine. You can use the puzzle and its solution shown here to test your own function. Pause the video now to create your solution. Then I'll show you how I solve this challenge. (techno gaming music) For my solution, I used a backtracking approach, which places numbers one at a time, checking to make sure each one is a valid move. When it hits a point where it gets stuck, it takes a step back to try another path. This type of depth-first search is different than how I'd approach the puzzle as a human. I'd use deductive reasoning to carefully figure out where to place numbers, but for a computer trial and error works fine.
>
> **[1:38](https://www.linkedin.com/learning/level-up-python/solve-a-sudoku?u=76281980&t=98)** My solve_sudoku function starts by using the product function from Python's Itertools module to iterate through every combination of row and column indices. I evaluate each grid cell by checking to see if it contains a zero, indicating it is still unassigned. If so, I use the for loop on line six to sequentially try placing the numbers one through nine in it until I find a number that's allowed. The for loop on lines eight through 10 check to make sure the number I'm trying doesn't already exist in that row or column. And then lines 11 to 13 make sure it doesn't already exist in the same 3x3 box or sub-grid. If the number passes both of those tests, it's allowed. So I place it in the cell and then recursively call the solve_sudoku function on the updated puzzle grid at line 16. I'm using Python's assignment operator here to capture and evaluate the return value on the same line. If the solve_sudoku function was able to continue searching from this state to reach the final solution, it will return the completed grid, which I return as well. Otherwise, if the continued search gets stuck and needs to backtrack, I'll reset the cell to empty so the for loop on line six can continue trying more numbers. If that for loop eventually tries all of the numbers one through nine without success, the Sudoku function returns false to indicate that we need to backtrack some more. Finally, when the outermost loop on line four has finished iterating through all of the cells, the puzzle will be complete. So it gets returned, which causes the recursion to unwind. (air whooshing)
>
> **[3:10](https://www.linkedin.com/learning/level-up-python/solve-a-sudoku?u=76281980&t=190)** In addition to the solve_sudoku function, I also created the helper function shown here to print the Sudoku grid in a nicely formatted manner. And I've included an example puzzle to use for testing. (air whooshing) Now, in the terminal, I've already started an interactive Python shell and imported the module containing my functions and the partially filled in example puzzle, which is displayed here using my print_sudoku function. To solve the puzzle, I'll type solution = solve_sudoku,
>
> **[3:41](https://www.linkedin.com/learning/level-up-python/solve-a-sudoku?u=76281980&t=221)** pass in the puzzle, and then press Enter. Then I'll type print_sudoku, pass in the solution. And that will display the solved grid completely filled in. (techno gaming music) There are lots of different ways to solve a Sudoku. So if you took a different approach, please leave a comment. I'd love to see your strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5), make (3), find (1)
> **Code Identifiers:** solve_sudoku (6), print_sudoku (2)
> **Non-Speech:** (techno gaming music) (3)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - did (1)

#### [Build a zip archive](https://www.linkedin.com/learning/level-up-python/build-a-zip-archive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/build-a-zip-archive?u=76281980&t=0)** (playful music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/build-a-zip-archive?u=76281980&t=3)** - When you need to package up a bunch of related data, ZIP files are great. Your goal for this challenge is to write a [[Python (Programming Language)|Python]] function to build a ZIP archive. It should accept a path to the top-level directory you want to include, a list of file extensions, and an output file path for the resulting archive. The function should search the input directory and all of its subdirectories for files with the specified extension and then package them together into a ZIP file. But we don't just want to throw files together all willy-nilly, so that ZIP archive should maintain the folder structure relative to the top-level path. For example, this call to my zip_all function would search the my_stuff folder for all files ending in .jpg or .txt and wrap them together in my_stuff.zip. Pause the video now to create your own solution, then I'll show you how I solved this challenge. (playful music)
>
> **[0:58](https://www.linkedin.com/learning/level-up-python/build-a-zip-archive?u=76281980&t=58)** - For my solution, I used Python's OS module to search directories and manipulate file paths and the ZIP file module to, well, build the ZIP file. My zip_all function starts by opening the output ZipFile using a context manager on line 5. On the next line, I used the OS module's walk function to explore the search directory and all of its subdirectories. As it walks through the folder tree, it yields a three element tuple. The first element, named root, will be the path to a directory. The second element is a list of all these subdirectories within that root directory, and since I don't need that for my function, I capture it with an underscore to indicate that it's an unused variable. The third element is a list of all the files in the root directory. I need to maintain the relative folder structure for the files in the output archive, but if the users call these zip_all function using an absolute path, the root path I get from the walk function will also be absolute. So on line 7, I use the OS path.relpath function to convert root into a relative path compared to the search directory, which I'll need later when building the archive. The next line uses another for loop to iterate through all the files in each directory and then split them apart using the os.path.splittext function to separate the file name from its extension. If the extension matches one of the items in the extension list parameter, I add it to the output_zip file. The write method's first argument is the path to the original file which I rebuild using the join function on the root path and file name, and the second argument, arcname, determines how
>
> **[2:33](https://www.linkedin.com/learning/level-up-python/build-a-zip-archive?u=76281980&t=153)** this file will be named within the ZIP archive. So I build that path using the relative path that I captured on line 7. To test my solution, I filled a folder named, my_stuff, with several images in different file formats along with the .txt file. And there's also a subdirectory named animals with even more images. Now, down in the terminal, I've already started an interactive Python shell and imported my zip_all function. So I'll call it and pass in the my_stuff folder as the search directory. I'll tell it to search for jpg and txt files, and I'll save everything it finds to my_stuff.zip. I'll run that command. And then in my working directory, I can see a newly created ZIP file which will contain all of my .jpg and .txt files organized into the same relative folders. (bells dinging) My solution is just one way to solve this challenge, and I'm curious to see different approaches, so I encourage you to leave comments and share your own strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **Code Identifiers:** my_stuff (5), zip_all (4), output_zip (1)
> **Env Vars:** zip (8)
> **Exercise Files:** zip file (4)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2)
> **Speakers:** - when (1), - for (1)
> **Non-Speech:** (playful music) (2)

#### [Download sequential files](https://www.linkedin.com/learning/level-up-python/download-sequential-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python/download-sequential-files?u=76281980&t=0)** (bouncy music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-python/download-sequential-files?u=76281980&t=3)** - [Instructor] Related files are often numbered sequentially, such as related images or parts of an archive file. If you need to download a lot of these from the internet, downloading them manually is cumbersome. Your goal for this challenge is to write a [[Python (Programming Language)|Python]] function to download and save a sequence of sequentially numbered files. It should accept two inputs, the URL for the first item in the sequence and a path to the output directory where you want to save them. We've hosted a series of 50 images at the URL shown here which you can use for practice. An example call to the function might look like this, taking in the path to the first image and an output folder named images to save them all. Notice that this function doesn't specify how many images to download. It should continue retrieving sequential files until it can't find anymore. The trickiest part of this challenge will be programmatically identifying and incrementing the correct part of the URL because formats can vary. The numbers could be zero padded or not. The last number in the URL will usually represent its place in the sequence, but not necessarily. You'll have to make some assumptions for your solution, and it may not work for every possible URL. That's okay. Pause the video now to create your own solution. Then I'll show you how I solve this challenge. (bouncy music) My solution uses several modules from the Python Standard Library, including the OS module for several file path operations, the regular expression module to identify numbers within the URL, and then the urllib.parse and request modules to manipulate the URL
>
> **[1:38](https://www.linkedin.com/learning/level-up-python/download-sequential-files?u=76281980&t=98)** and retrieve the file. Within my download_files function, lines 7 and 8, check to see if the requested output directory exists, and if not, create it. Line 9 uses the path.split function to break apart the input URL into the head and tail. I then use the regular expressions findall function on that tail component to identify the last group of digits in the URL, which I'll call the first_index. On line 11, I initialized the index_count and error_count variables to 0. error_count is used to track how many times I try to download a file that's not available. It's possible there could be missing files in the overall sequence, so the while loop on line 12 will keep progressing until I encounter at least five errors due to missing files or some other problem. The while loop begins by calculating the next_index value as the sum of the first_index plus the index_count value. If the first_index was zero padded, then lines 14 and 15 append the appropriate number of zeros to the front of the next_index string. Line 16 uses the urljoin function to combine the original URL head and a modified URL tail with the next_index value substituted into it. Now it's time to actually try downloading that file. Line 18 generates the file path for where to save the file, and then the URL retrieve function on line 19 downloads and saves it to to that location. If there's an error, the program will enter the except clause where it increments the error counter. After all that, the index_count is incremented and the while loop attempts to download the next file. Now, down in the terminal,
>
> **[3:12](https://www.linkedin.com/learning/level-up-python/download-sequential-files?u=76281980&t=192)** I've already started an interactive Python shell and imported my download_files function. So I'll call it. I'll pass in the URL to the first image in the test sequence and then tell it to save the files to a folder named images. When I press Enter, I get a series of messages that it's downloading the files until it gets past the 50th one. It tries five more files unsuccessfully, and then it exits. (gentle bouncy music) I'll admit my function is not a perfect solution. There are lots of URL formats that could confuse it, but for this video, I wanted to keep it short. If you created something more robust, please share it in the comments, I'd love to see how you approach this problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **Env Vars:** url (14)
> **Code Identifiers:** first_index (3), index_count (3), next_index (3), download_files (2), error_count (2)
> **CLI Commands:** python (3), find (1), make (1)
> **Non-Speech:** (bouncy music) (2), (gentle bouncy music) (1)
> **Tools:** terminal (1)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)


## Instructor

- [[Barron Stone]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/level-up-python-3210418/codespaces)

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[A Quick Start Guide to Programming in Python]]
← [[Hands-On Introduction- Python]] | **6 of 6**

### In [[OpenEDG Python Institute- Programming with Python Professional Certificate]]
← [[Python Object-Oriented Programming]] | **3 of 3**

### In [[Getting Started with Python]]
← [[Programming Foundations- Data Structures]] | **6 of 8** | [[8 Things You Must Know in Python]] →

## Part of

- [[OpenEDG Python Institute- Programming with Python Professional Certificate]]

## Appears In

- [[A Quick Start Guide to Programming in Python]]
- [[OpenEDG Python Institute- Programming with Python Professional Certificate]]
- [[Getting Started with Python]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)