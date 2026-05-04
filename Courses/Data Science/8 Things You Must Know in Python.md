---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: 8-things-you-must-know-in-python
url: "https://www.linkedin.com/learning/8-things-you-must-know-in-python"
duration_minutes: 50
duration: 50m
level: Intermediate
updated: 12/13/2024
learners: 20379
skills:
  - Python (Programming Language)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEuGjrSsMFT2g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733774083145?e=2147483647&amp;v=beta&amp;t=ezQ6YUN41b0qQcZt2EGP_7aJjzj0pq6QNuwACNk__EQ"
linkedin_topic: Data Science
learning_paths:
  - '[Getting Started with Python](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20with%20Python.md)'
prev_courses:
  - '[Level Up- Python](../Software%20Development/Level%20Up-%20Python.md)'
next_courses:
  - '[Python Practice- Real-World Coding Challenges](../Software%20Development/Python%20Practice-%20Real-World%20Coding%20Challenges.md)'
path_nav: '[{"path":"Getting Started with Python","position":7,"total":8,"prev":"Level Up- Python","next":"Python Practice- Real-World Coding Challenges"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/8%20Things%20You%20Must%20Know%20in%20Python.md)

![8 Things You Must Know in Python](https://media.licdn.com/dms/image/v2/D560DAQEuGjrSsMFT2g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733774083145?e=2147483647&amp;v=beta&amp;t=ezQ6YUN41b0qQcZt2EGP_7aJjzj0pq6QNuwACNk__EQ)

# 8 Things You Must Know in Python

> There are many beginner Python tutorials, but to build useful applications, you need to move beyond the basics. This course helps you on the journey to writing intermediate-level Python code. Instructor Jonathan Fernandes presents eight things that you should know how to do in Python. Topics include the Python any() and all() methods, using enumerate() and zip() methods, min() and max(), and more.

> [LinkedIn Learning](https://www.linkedin.com/learning/8-things-you-must-know-in-python) | 50m | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Eight things to know in Python](#eight-things-to-know-in-python)
  - [CoderPad tour](#coderpad-tour)
- [**1. Understanding the Python any() and all() Methods**](#1-understanding-the-python-any-and-all-methods) (3 videos)
  - [Python all() function](#python-all-function)
  - [Python any() function](#python-any-function)
  - [Solution: any() and all()](#solution-any-and-all)
- [**2. Using the Python enumerate() and zip() Method**](#2-using-the-python-enumerate-and-zip-method) (3 videos)
  - [Python enumerate() function](#python-enumerate-function)
  - [Python zip() function](#python-zip-function)
  - [Solution: enumerate() and zip()](#solution-enumerate-and-zip)
- [**3. Understanding the Python reversed() Method**](#3-understanding-the-python-reversed-method) (2 videos)
  - [Python reversed() function](#python-reversed-function)
  - [Solution: reversed()](#solution-reversed)
- [**4. Working with Python min() and max()**](#4-working-with-python-min-and-max) (2 videos)
  - [Python min() and max() function](#python-min-and-max-function)
  - [Solution: min() and max()](#solution-min-and-max)
- [**5. Understanding and Using the Python sorted() Method**](#5-understanding-and-using-the-python-sorted-method) (2 videos)
  - [Python sorted() function](#python-sorted-function)
  - [Solution: sorted()](#solution-sorted)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Eight things to know in Python](https://www.linkedin.com/learning/8-things-you-must-know-in-python/eight-things-to-know-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/eight-things-to-know-in-python?u=76281980&t=0)** - [Jonathan] Many people are either new to programming in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or they've learned how to code in other languages, like [Java](../../Skills/Software%20Development/Java.md) and C, and so they use constructs from these languages in Python. Now, that's usually because they aren't aware of some key features that are available in Python right out of the box. This course is designed in layers. So if you have a good basic knowledge of Python, you'll learn a lot. So apart from learning how to use several of Python's built-in functions, you'll learn how topple ordering works, how to work with iterables, and sequences, and classes, and how to refactor code so it's more pythonic. Now, even if you're an intermediate or advanced Python programmer, you'll probably pick up a couple of tips and tricks. Hi, I'm Jonathan Fernandes and I work for a consultancy in machine learning and AI, and use Python every day. Now I really like the Python programming language and I hope you'll join me because there's loads to learn in Python and it's a lot of fun. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (9), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** python (9)
> **Speakers:** - [jonathan] (1)

#### [CoderPad tour](https://www.linkedin.com/learning/8-things-you-must-know-in-python/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/coderpad-tour?u=76281980&t=0)** - [Instructor] For the challenges in this course, we'll be using CoderPad, which is integrated into the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course website. Now all you have to do is to click on the challenge, and this makes it really easy to watch videos and write some code and go back and forth and to test your solutions all on one site. Now, I recommend that you use CoderPad on a desktop browser. You can also use the LinkedIn Learning mobile app if you prefer. Now, as you can see, there are four screens in CoderPad, and you can enlarge them and shrink them as you need by using these handles. Now the first screen over on the top left is where you'll find the instructions. Now I wrote them for each challenge, so they're really important and please read them carefully. This will tell you about the coding challenge and what the expected output is with examples and where to go for more hints and practice if you need them. The Answer screen on the right is where you're going to actually enter your code. Now, I've tried to make this as easy as possible for each challenge. So in general, you'll get an empty function and it has the function name written there. And then all you have to do is just fill in this bit over here with your code. And just below the Answer panel is the test code. And here you can see that you've got multiple tests that need to be passed for your specific coding sample. Now in this example, you have to try and determine if an input string contains a punctuation. And so you can see that there are going to be five tests to test your code out. So if I go ahead and select the Test My Code button without entering any code, you can see that
>
> **[1:37](https://www.linkedin.com/learning/8-things-you-must-know-in-python/coderpad-tour?u=76281980&t=97)** it fails all my five tests. And each of these numbers here correspond to the test case. So one here corresponds to the first test case and so on. Now, because I know that the output for this contains_punctuation function needs to be either true or false, as in whether that string contains a punctuation, true, or doesn't, false, I can try and just enter one of those. So I can go ahead and try and return true, for example, and then select Test My Code. And you can see that this passes the first three tests. So that passes these three tests. And if you look at test four and five, the answer should be false because both of these sentences don't contain any punctuations. Now, on the other hand, I can try and return false, and you can see that that's not going to work either because it fails the first three tests. So you can see that these three actually contain punctuations. So what I need to do is I actually need to enter the correct code over here to pass all the five tests. Now, if you get stuck and you need some help, what you could also do is to head over to the show_expected_result and show_hints and change those to true. And then when I go ahead and make changes to my code
>
> **[3:12](https://www.linkedin.com/learning/8-things-you-must-know-in-python/coderpad-tour?u=76281980&t=192)** and select Test My Code, you can see that I get a couple of hints that might help me out. So things like, are you working your way through each character of the string? Are you checking to see if each character is a punctuation and so on? Now, regardless of whether your answer's successful, you'll see these messages over in the console output here. And when you finished each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** contains_punctuation (1), show_expected_result (1), show_hints (1)
> **UI Navigation:** click on (1), select the (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding the Python any() and all() Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Python all() function](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-all-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-all-function?u=76281980&t=0)** - [Instructor] [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) has a built-in function called all that returns true if all the items are true or truthy. This means they are non-empty or nonzero. Le's head over to the exercise folder. So I just head over into the Python REPL. Let me just give myself a little bit more space. So if I have a list with strings, and I use the all function, you can see that this returns a true. If I change any of those strings to an empty string, this returns a false. So go ahead and grab the all.py file from your exercise folder. So the valid_rgb function will receive an RGB tuple, so that's red, green and blue, and if you have worked with colors before, you'll know that they have to be integers between 0 and 255 inclusive. If they are, the function returns true, otherwise it returns a false. Now, we'll keep things simple and only work with integer values here. So if we wanted to use all in the valid RGB function, we'll need an iterable to pass to all. Now, an iterable is anything you can loop over using a for loop. Examples include lists, tuples, strings, sets and dictionaries. So we could transform our for loop into a list comprehension and let's call that valid. So I'm going to keep a copy of the valid RGB at the top just so that you have that for comparison. And let's create our list comprehension. So valid equals, and let's think a little bit about the condition.
>
> **[1:34](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-all-function?u=76281980&t=94)** We want to check if all of the RGB values are between 0 and 255 inclusive and accordingly, either return a true or a false. So let's just grab the condition here.
>
> **[1:51](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-all-function?u=76281980&t=111)** And you'll notice we don't need the if statement, the no condition or the colon. And we can reuse the for loop. And I can get rid of everything else. And we return all and the valid list. Now, let's just make sure this works in our REPL. And I'm going to just run a couple of tests on this. So this passed all of the tests. Now, it seems odd to create the list valid only to loop over it once. We could also use a generate instead. Now, all returns a true if all of the elements of the iterable are true and all you need to do to change the list comprehension to a generator is to swap out the square brackets for parentheses.
>
> **[2:53](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-all-function?u=76281980&t=173)** Now, if you look at our code, you'll see that we don't even reference valid anywhere else, so let's get rid of that and let's just rewrite this as, removing the valid, so we'll return all of this. The entire generator and let's just make sure this passes all of our tests. So I'm just going to clear my screen and the REPL. And let's just paste this into the REPL and let's run our tests on this. So here's one way to think about using the all function. You have the all function call. You have the condition for the items in the iterable. And finally, using a for loop, you loop through the iterables and that is Python's all function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **Env Vars:** repl (4), rgb (4)
> **CLI Commands:** python (3), make (2)
> **File Paths:** all.py (1)
> **Code Identifiers:** valid_rgb (1)
> **Speakers:** - [instructor] (1)

#### [Python any() function](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-any-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-any-function?u=76281980&t=0)** - [Instructor] [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) has a built in function, any, that returns true if any of the items are true or truthy. This means they are non-empty or non-zero. Let's take a look at a couple of examples in the repo. Now, I need to pass in an iterable to the any function. So let's use a tuple. So we have any and our tuple, now let me use a string and an empty string, and we get a true as one of the strings are non-empty or non-zero. Now, if we replace the string with a zero, we get a false and this is because now we don't have any true or truthy items in our tuple. Now, go ahead and grab the any.py file. And this function will check to see if the input string contains a digit, and we've got a couple of tests below the function. So let's check this works in our repo. So I'm just going to copy across the function and the tests, and I'm going to paste them across in my repo. And you can see that it's passed all of the tests. So let's see how we could use the any function. Like with the all syntax we covered in the previous video, you have the any function, you have the condition for the items in the iterable, and finally, a for loop that you loop through the iterable. So let's head back to our code. Now, let me make a copy of the code below so that you can compare the two. And now, let's refactor this using the any function. So the first thing we want to do is we want to return the condition,
>
> **[1:34](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-any-function?u=76281980&t=94)** so return any and let's grab the condition from here. And we don't want the colon. The next thing we want is the for loop, and I get rid of the colon at the end and we're done. So let's copy this across to the repo and let's test our new function, and you can see that it's passed all of the test. So that looks good and that is Python's any function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2), make (1)
> **Cross-References:** we covered (1), previous video (1)
> **File Paths:** any.py (1)
> **Speakers:** - [instructor] (1)

#### [Solution: any() and all()](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-any-and-all-24961883?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-any-and-all-24961883?u=76281980&t=0)** - [Instructor] We're going to be using the string module. So for this problem, a punctuation is defined as anything that is in string.punctuation. So let's go ahead and update the contains_ punctuation function. Now, in this case, because we're looking to see if we can find punctuations in the input string, we'll want to use the any function. So let me go ahead and replace this line. So let me go ahead and type return any, (keyboard clacking) and let's work our way through the input string. So for char in input_str, and let's think a little bit about what the condition needs to be. We want to check if char is in string.punctuation.
>
> **[0:54](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-any-and-all-24961883?u=76281980&t=54)** So char in, (keyboard clacking)
>
> **[1:04](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-any-and-all-24961883?u=76281980&t=64)** and that should be it. So let's go ahead and test our code. So this passes the test, so we know we're done.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Identifiers:** input_str (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Using the Python enumerate() and zip() Method

[↑ Back to Table of Contents](#table-of-contents)

#### [Python enumerate() function](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-enumerate-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-enumerate-function?u=76281980&t=3)** - [Instructor] Let's head over to our enumerate.py file. Now, we've got a list of country names that are in decreasing order of the number of characters. That means the first country name in our list is the longest and so on, but you also want to print out a number at the start of each line. So, number one means it's the longest, number two the second longest, and so on. The expected output is shown in the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) file. Now, if you're new to Python, you might go for something as shown in the enumerate.py file. So let's run it in our repo to make sure it works. So I'm going to just copy the countries list and the for loop. Let's head over to our repo, and let me give myself a little bit more space. And you can see that we get the expected output. Now, you can also use Python's built-in enumerate function, which allows you to loop over a list and retrieve both the index and the value of each item in the list. Instead of having to start with an index of zero, which is the default, we can also start with one. So for item in enumerate we provide a list, which is countries, start equals one, and we print our item. Now, the enumerate function gives us an iterable where each element is a tuple that contains the index of the item and the original item value. So instead of using item, we can split it out into index and country. So for index, country in enumerate
>
> **[1:41](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-enumerate-function?u=76281980&t=101)** we provide our countries list, and start equals one, and use the F string. So F, and then curly braces, index, and then the country name. Now, of course, if you didn't need the numbers at the start of each line, we could easily have just gone with a regular for loop. So for country in countries, print country. So in conclusion, if you need to loop over an iterable and you need an item's index, use enumerate. If you only need to loop over an iterable and don't need the indices, then just a regular Python for loop will do the trick. And that is Python's enumerate function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5)
> **CLI Commands:** python (5), make (1)
> **File Paths:** enumerate.py (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Python zip() function](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-zip-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-zip-function?u=76281980&t=1)** - [Instructor] Let's head over to our zip.py file. Here we've got a list of country names called countries. We also have a list of capital cities for each of the countries that corresponds to the countries' list. So the first item of the capitals list is the capital city of the first item in the countries list, and so on. Let's create the expected output, as shown in the zip.py file using these two lists. Now, whenever you want to loop over multiple lists or iterables at the same time, you'll want to use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s zip function. So I'm going to copy across the two lists and let's head over to the Python REPL. For country, and capital in zip, and we use the two lists here, so countries, capitals, and let's use f print. So the capital city of the country in curly braces is capital in curly braces. And you see we get the expected output. So the zip function makes an iterator that aggregates elements from each of the iterables. So for each of the iterables we've been working with, so that's the countries and the capitals lists, we've had equal number of elements. If one of them had a fewer number of elements, then zip would stop after the shortest list runs out of items. Let's go ahead and demonstrate that. I'm going to remove Niamey and Tokyo from the capitals list.
>
> **[1:34](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-zip-function?u=76281980&t=94)** Now I've already got a version of this in my zip.py file, so I'm just going to copy that across. And if you go ahead and rerun the for loop,
>
> **[1:49](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-zip-function?u=76281980&t=109)** you can see that it stops with Nepal for the countries and Kathmandu for the capitals. Now, what if we wanted to do something different from the standard zip functionality? So the countries list has more items than the capitals list. So if we wanted to work with all of the items in the countries, we'd need something for the missing values for the capitals so that we can use these when we've run out of items from the capitals list. Now, zip_longest from the itertools modules does exactly that. So let's import zip_longest from itertools.
>
> **[2:27](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-zip-function?u=76281980&t=147)** Now, because capitals has fewer items than countries, we're going to need a fill value when we run out of items in the capitals list. So let's call this unknown. So I'm just going to modify our previous zip function. And use that for zip_longest. And we'll need to include a fillvalue. So fillvalue and let's use unknown here.
>
> **[2:56](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-zip-function?u=76281980&t=176)** And I can reuse the print statement. And you can see that we have unknown values for the capitals of Niger and Japan. Now, let me go ahead and copy across the complete capitals and countries list. And let me clear my REPL. And finally, let's look at unzipping a sequence. The first question you might have is if there's a zip function, how come there's no unzip function? And the reason is we don't need it. Let's take a look at an example. Now, if we grab our countries and capitals list, let's create a list of tuples. So pairs is a list of zipping together the countries and capitals. Now, if we want to separate the elements of each tuple into independent sequences, let's call these country and capital. So country and capital equals zip. Now, when calling the zip function, the asterisk or the star operator can be used to unpack an iterable into the arguments in the function call. So we can unpack pairs. Now, the line zip star pairs is passing all of the items in the pairs list into the zip function call as separate arguments. So country then is a tuple with all of the country names. And capital is a tuple with all of the capital cities. And that is Python's zip function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3), unzip (1)
> **File Paths:** zip.py (3)
> **Code Identifiers:** zip_longest (3)
> **Definitions:** is a  (3)
> **Env Vars:** repl (2)
> **Speakers:** - [instructor] (1)

#### [Solution: enumerate() and zip()](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-enumerate-and-zip-24964724?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-enumerate-and-zip-24964724?u=76281980&t=0)** - [Instructor] Let's go ahead and update the function annual_births_average. And first a couple of initializations. So let's use a result to store our list of tuples, and this is going to be a list. And to calculate the average, we will first need to sum the values and then store them somewhere. And so let's use the running_sum variable for that and let's initialize that to zero. Now we already have the years and the number of births lists, so we can zip them together. And then all we need to then do is to calculate the running average. And so we can do this by summing up all of the births in the relevant years by the number of years, but we need some way to track or count the number of years. Now, anytime we require a count in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), when iterating over an iterable, think of the enumerate function. So let's loop our way through enumerate. So we want to zip the lists and the births, and we want to loop our way through the enumerate. So enumerate, and we want to have a start value of one. So when we loop our way through enumerate, we're going to get two objects, we're going to have the index, and we are also going to have the list and the birth. So that should not be lists, that should be years,
>
> **[1:43](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-enumerate-and-zip-24964724?u=76281980&t=103)** year and birth. Now, what we want to do is to go ahead and add up the births for each year, and so that's going to be our running_sum.
>
> **[2:03](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-enumerate-and-zip-24964724?u=76281980&t=123)** And this way we can calculate the running average as the sum of the births divided by the number of years. So our running average is going to be,
>
> **[2:23](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-enumerate-and-zip-24964724?u=76281980&t=143)** now if you look at the dock string, it tells us that the running average needs to be an integer. And so we can use the round function here. Now we're almost there, so let's create our tuple. So we've got the year, the birth, and the running average, and we can add that to our list. And our list is called result. So result.append, and we are going to add our tuple.
>
> **[3:07](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-enumerate-and-zip-24964724?u=76281980&t=187)** And at the end, we want to go ahead and return our result. Let's go ahead and test out our code, and you can see that it's passed the test. And so we're done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** running_sum (2), annual_births_average (1)
> **CLI Commands:** python (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Understanding the Python reversed() Method

[↑ Back to Table of Contents](#table-of-contents)

#### [Python reversed() function](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-reversed-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-reversed-function?u=76281980&t=3)** - [Instructor] Just so you know, an iterable is anything you can loop over with a for loop, and a sequence is a subset of iterables, but they have a length, an index, and you can slice them. Examples of sequences are strings, lists, and tuples, and examples of things that are iterables, but not sequences are dictionaries and sets. So when reversing things in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), we're normally referring to reversing sequences. Every list in Python has a built-in reverse method. So you can reverse the contents of the list objects in place. Now, what we mean by in place is that it will directly modify the original list object. Let's copy the countries list from the reversed.py file and let's take a look at the repo.
>
> **[0:52](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-reversed-function?u=76281980&t=52)** Now I can reverse this using the reverse function.
>
> **[1:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-reversed-function?u=76281980&t=60)** Now you can see that the countries have been modified in place. The potential downside is that reversing a list in this way is that you've lost your original ordering. Of course, you could always reverse again to get the original order. Another way to reverse Python's list objects is to use slicing. So, I'll take the reversed countries and put them back in the original order. This isn't a reference to alphabetical ordering, it's just the order of the objects were in in the list. So just as a reminder, we have them as countries there and I'm just going to reverse slice them in this way. Just so you know, reversing the list this way takes up more memory compared to an in place reversal because it creates a copy of the list. The biggest problem with the slicing notation is that it isn't very intuitive. If you are new to Python, you could probably guess what the reverse method does. The slicing notation isn't as obvious. So, reversed doesn't reverse a list in place, nor does it create a copy. It returns an iterator of the reversed items instead. So this isn't new. We've seen iterators before in zip and enumerate. They both return an iterate object. So if I wanted to loop through the countries using a for loop, I could do the following. So this is my countries list. And so, for country in reversed countries, and I can just print out the country. And what if I wanted to create a reversed copy of this list? Well, I could create-- So let's see what countries first looks like and now let's create a reversed copy of this,
>
> **[2:34](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-reversed-function?u=76281980&t=154)** and let me call that reversed_countries. So reversed_countries is a list of reversed countries.
>
> **[2:46](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-reversed-function?u=76281980&t=166)** And so, we can take a look at what reversed_countries has and you can see that it's reversed the items in that list. Now, I think the final solution is the best. It doesn't modify the original list and it's a solution that scales well. So if you're writing code for a solution where you're dealing with millions of items of data, then reversed allows you to access the items only when they're need it, because you're using an iterator. The other solutions are not as memory efficient. Now let me clear my screen. We've spoken a lot about lists that are mutable sequences. So how do we reverse immutable sequences, such as tuples and strings? So just so you know, an immutable object is one that after you create the object and assign some values to it, you can't modify those values. So since strings and tuples are immutable, they don't have a reverse method. This is because the reverse method updates the original object. So let me show you an example in the Python repo. So if we take the string, Japan, as an example and I try and reverse it using the reverse method, you can see that no attribute reverse exists. Now if we create a tuple from the countries list, and let me just copy the countries across, so now if I go ahead and reverse the tuples list, so tuple countries and try and reverse this, you can see that no reverse attribute exists.
>
> **[4:22](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-reversed-function?u=76281980&t=262)** So if you want to reverse strings or tuples, use reversed or slices. So I can easily reverse one of the country names. So let's use Japan again, using slices, and let me demonstrate reversing a tuple using reversed. So we have tuple of countries. And so, for country in reversed and I use the tuple and the countries, I can print this out in reverse order. Now, before we end, let me review the three ways to reverse a sequence in Python. So, reverse changes a mutable sequence, so that's things like lists in place, but they're not available for immutable sequences, so that's things like strings and tuples. Slicing creates a reversed copy of a sequence, so it's the fastest of the three, but it makes a copy of the sequence, so there might be some memory considerations if you need to reverse millions of items, and it works on both mutable and immutable sequences And finally, reversed returns a reverse iterator. The good news is it scales well to millions of items and it works for both mutable and immutable sequences, and that is Python's reversed function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (7)
> **CLI Commands:** python (7)
> **Code Identifiers:** reversed_countries (3)
> **Definitions:** is a  (2)
> **File Paths:** reversed.py (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Solution: reversed()](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-reversed-24961885?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-reversed-24961885?u=76281980&t=0)** - [Instructor] Now, what I'm looking to do here is to compare words with a reversed version of words. And if they match, then they're palindromes. I'll also need to make sure that they're both the same case and remove any punctuations that might exist. So basically what I'm looking for is something like this.
>
> **[0:29](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-reversed-24961885?u=76281980&t=29)** Now let's go ahead and define what reversed words is, right? And so what we have over here is I take the words, I use the reversed function, and so I'm going to end up with reversed objects, and then I can just collect them up by using the join function. And this gives me reversed words. Now, the next thing I want to do is to pass this to the remove punctuation function. So this means that if the words and the reverse words are equal after removing punctuation, then we're almost there.
>
> **[1:31](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-reversed-24961885?u=76281980&t=91)** So I call remove punctuation using words, and I do exactly the same thing with reversed words. And now all we need to do is to make sure that all the characters are either upper or lowercase. This is because the two strings of words could be the reverse of each other, except one of them has a mix of lower and uppercase characters. So let's just go ahead with both of them being lower. And so I can change them by adding a dot lower to the end of both.
>
> **[2:11](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-reversed-24961885?u=76281980&t=131)** And we're done. So let's go ahead and test our code. And you can see this has passed all our tests, and so we're done with this coding challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Working with Python min() and max()

[↑ Back to Table of Contents](#table-of-contents)

#### [Python min() and max() function](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-min-and-max-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-min-and-max-function?u=76281980&t=1)** - [Instructor] Min and max work in the way we would expect. So max returns the largest item in an iterable or the largest of two or more arguments. Let's take a look at an example in the rappel. So I can enter a whole load of random numbers and max will give me the largest number. So five, six, three, four and we get the expected output of six. I can enter an iterable such as the list. So now I'm going to copy the countries and the associated populations from the min-max file in the exercises folder, and just paste it into the ripple. Now, the populations use underscore as a visual separator for numbers. In [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), we couldn't use commas because 1 million with commas in Python would be a tuple. The largest population we have here is 198 million. So if I do a max of the population, we see we get 198 million. And as you can imagine the main function does exactly what it says on the tin. It returns the smallest item in an iterable or the smallest of two or more arguments. If you applied min to the countries list, as all the items are string it would return the smallest item based on alphabetical order. So for the countries list, Japan is returned because if you look at all of the items in alphabetical ordering, Japan is the lowest. Now with these two lists, if we wanted to determine which country has the lowest population, we need to first find the lowest population
>
> **[1:33](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-min-and-max-function?u=76281980&t=93)** in the population list and then visually find the corresponding country. Is there a better way of finding the country with the lowest population using min? Well, the first thing we can do is to zip the countries and the population. This means we're now working with the tuples. So I could do a list of my zipping of the countries and the population. Now tuple comparison works the same way as string comparison. We have two tuples as an example, one with the string Nepal and the other Niger and their associated populations. So we start from the left. Compare the corresponding items of each tuple and if they're the same move on to the next item. Both have the same letter uppercase N, so we move on to the next character. Now you can see that the letter E from Nepal is alphabetically lower than the letter I from Niger. If one of the corresponding items of a tuple is less than the other, then the entire tuple is less than the other. So we would say that the tuple with the string Nepal is less than the tuple with the string Niger. Let's take another example, this time with Niger and Nigeria. If the corresponding items of one tuple are the same as another tuple but there are no further items, then the shorter tuple is less than the other. In this case, Niger is a sub string of Nigeria and so the tuple with a string of Niger is less than the tuple with the string Nigeria. And finally, let's look at an example where we compare the tuple of the Nepal with another top of Nepal, with the same population details. If all the corresponding items of a tuple are equal
>
> **[3:09](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-min-and-max-function?u=76281980&t=189)** then the tuples are equal. You might've noticed that in all of the examples where we've done tuple comparison between two countries, we've only compared the names of the countries alphabetically and decided that one is less than the other. We haven't even got as far as comparing the populations which is what people are trying to do in the first place. This means that if I do the min and I zip together the countries and the populations, this returns to Japan because Japan has the lowest string alphabetically starting with Ja. So to get the min function to compare the populations, we'll need to use min's keyword key. Now, one way we can do that is to define a function called get_population that when we provide it with a tuple, it will return the population. So define get_population and it takes in as an argument a pair, it then splits that out into the population and the country and then we just want to return the population. So now when we use min, but this time using the key keyword document, and we provide the get_population function, as our argument. I now include get_population. And we see that Jordan has the lowest population with 10 million. Now, another way to achieve this is by using a Lambda function instead of the get_population function. Now, if you look at get_population all we're doing is returning the second part of the tuple, so we can rewrite that using a Lambda function.
>
> **[4:46](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-min-and-max-function?u=76281980&t=286)** So my Lambda function is defined here. So Lambda X, and I just want to return the second item. And because Python is zero indexed, X1 will return the second item and we get the same result. Now, another way to solve this problem would have been knowing that how tuple comparison works, we use the zip function and provide the population first and then the country name. This way, the tuple is created that has the population as the first item and now that the populations are compared first, we get the country with the lowest population. And that is Python's min and max function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4), find (2)
> **Code Identifiers:** get_population (6)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [Solution: min() and max()](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-min-and-max-24961884?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-min-and-max-24961884?u=76281980&t=0)** - [Instructor] Let's make sure we understand what the helper functions are doing. So let's look at the first function, which is get_scrabble_dictionary. Now, what get_scrabble_dictionary does is it loads all the words that are defined as Scrabble words or acceptable Scrabble words from a text file. Next, we have the score_word function. And this function returns the Scrabble score for any [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) if it exists in the Scrabble dictionary. And if the word doesn't exist in the Scrabble dictionary, it just returns a score of zero. And then, finally, we have the remove_punctuation function. And this will remove any punctuation from a word. Now, let's think a little bit about how you want to go about finding the largest scoring word in a sentence. We've already got the function score_word that determines the score for a word. So if we can somehow chunk our sentence into words, we can reuse the score_word function. So let me go ahead and start to replace this line. And so, we can get the largest scoring word by using the max function. So let me go ahead and return the max function. And now we want to chunk our sentence into words. And to do that, we can use a split function. And so in this way,
>
> **[1:33](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-min-and-max-24961884?u=76281980&t=93)** the white spaces between each word is a separator, and this will return a list of words. So let's put this into a list comprehension. So we've got, "word for word in sentence," and we split this. Now, we've already got a function that calculates the score for a word, and so we can reuse our score_word function.
>
> **[2:11](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-min-and-max-24961884?u=76281980&t=131)** And we're almost done. Now, there's one more thing we need to think about. The split function will only separate out words by white spaces. So if a word is immediately followed by a punctuation, so say you have a word and then a comma or an exclamation mark, then you won't be able to find that word in the dictionary, and you'll get a score of zero. So we want to go ahead and remove all punctuations. And so we can use the remove_punctuation helper function to do that.
>
> **[2:46](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-min-and-max-24961884?u=76281980&t=166)** And so we can apply that to every word in sentence. Now, this means that if we have a sentence where every word in that sentence is a non-Scrabble word, it should only return the first word. So let's go ahead and test this out.
>
> **[3:08](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-min-and-max-24961884?u=76281980&t=188)** And since this has passed all the tests, this is the end of this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (17)
> **Code Identifiers:** score_word (4), get_scrabble_dictionary (2), remove_punctuation (2)
> **Definitions:** is a  (2), defined as (1), means that (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Understanding and Using the Python sorted() Method

[↑ Back to Table of Contents](#table-of-contents)

#### [Python sorted() function](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-sorted-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-sorted-function?u=76281980&t=0)** - [Instructor] Like the min and max, all of the values that you give to sorted need to be orderable. This time, let's use classes for the countries and population. So I'm just going to grab the code from sorted.py.
>
> **[0:19](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-sorted-function?u=76281980&t=19)** Just going to make a little bit more space for my REPL. So we define a name and population in our __init__ method, and a __repr__ method so that we can display the details. We'll then define a country_list that has all the countries with their associated populations. I've had the two new countries, Taiwan, which has the same population figures as Niger, and Portugal, which has the same population numbers as Jordan. And like min and max, we have the key parameter that we can use. And if I want to sort the country_list by the population, I could write a short function to get the details. Since it's relatively straightforward, let's just use a lambda function instead. So sorted, I use the country_list, and use the key keyword parameter with the lambda function, so lambda x, and I just want to get the details back of the population. So that's x.population. Now, if you want to sort in decreasing order of population, we have two options. You can use the reverse keyword. So I just add reverse=True. Alternatively, you can append a minus sign to the population in the sorted function. So I remove reverse, and I just add a minus sign beside x.population. And we get the same result. Now, what if we wanted to sort by decreasing order of population, but we wanted the names of the countries to be sorted in increasing alphabetical order.
>
> **[1:52](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-sorted-function?u=76281980&t=112)** Here, you can see that Taiwan and Niger have the same population figures, but Taiwan appears before Niger. And Jordan and Portugal have the same figures, but Portugal appears before Jordan. So let's sort in decreasing order of population, but increasing alphabetical order. So you can use a tuple. So -x.population and x.name. You can see that both Taiwan and Niger have the same population, but this time Niger is before Taiwan. And similarly, Jordan and Portugal have the same figures, but now Jordan appears before Portugal. You can't sort in decreasing alphabetical order using a minus. Instead, you want to use the reverse keyword, sorting in decreasing order of the population, and in decreasing alphabetical order. And so we say reverse=True. Now let's take a look at another example. Let me go ahead and clear the REPL. And let me grab the iso details from the sorted.py file.
>
> **[3:07](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-sorted-function?u=76281980&t=187)** Many times, the data you have might be mangled or not quite in the format you need it. Here, the string iso is appended to each of the populations. So how can we still sort by population? One way to go about this is to try and find some way to ignore the iso and then pass it to the sorted function. Let's write a function, get_population, to return just the population from each tuple, so def get_population. We take in as an input a pair. We split that out into the country and population. And we then want to return the population to the sorted function, but we need to ignore the first three characters. So population, and since [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) string indexes start from zero, we want to return from index number three onwards. So let's go ahead and do a sorted. We provide as input the iso, and key equals get_population. And we don't get the results we expect. We have Nepal having the largest population, which we know isn't true. The reason we have this problem is that the sorted function treats the populations as strings. This means all of the ones come before the twos and so on. So we need to modify our get_population function, so that the population is returned as an integer. So let's just do this by casting the population as an integer. So let me modify my get_population. And this time I'm going to cast it with an integer.
>
> **[4:50](https://www.linkedin.com/learning/8-things-you-must-know-in-python/python-sorted-function?u=76281980&t=290)** And let's pass this through to the sorted function again. And we get the expected results. And that is Python's sorted function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Code Identifiers:** get_population (5), country_list (3)
> **CLI Commands:** python (2), make (1), find (1)
> **File Paths:** sorted.py (2)
> **Env Vars:** repl (2)
> **Speakers:** - [instructor] (1)

#### [Solution: sorted()](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=0)** - [Instructor] Let's break this problem down into a couple of steps. In order to sort by the population and then the country name, we'll need to first sort by the country name, which is the secondary requirement, and then go ahead and sort by the population. Now, we do this because if we have two countries with the same population, then they'll already be sorted by the country name when it comes to us then sorting by the population. So let's go ahead and modify our sort_country function.
>
> **[0:37](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=37)** So let's say our (country)list, I'm going to pass that to the sorted function
>
> **[0:49](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=49)** and we're going to use the key parameter, and we're going to use a lambda function. And I'm going to say lambda x where x is the name of the country, and let's store that in a variable country_list.
>
> **[1:11](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=71)** Now, if you look at the list of countries, you can see that some of them have the first letter as the country name as a capital letter, and others where it's a lowercase letter. Now, Unicode code points are used to represent the characters, and these Unicode code points have a lower value for uppercase letters than lowercase letters. So this means if we sort by letters, the uppercase letters will always be displayed before the lowercase letters. So if you want to sort by the country name, let's ignore the cast of the letter, and we can do that by comparing them all based on say, their lowercase value. So let's go ahead and update this so that for our lambda function, we're just going to be using the lowercase value. Now let's go ahead and work on sorting by population, and let's create a helper function to return the population. I'm going to define get-population,
>
> **[2:12](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=132)** and it's going to get a pair in as input.
>
> **[2:20](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=140)** We want to be able to split out the pair.name and the pair.population. And so we can call the first with the country and the second part is going to be the population. And then we want to go ahead and return just the population.
>
> **[2:51](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=171)** Now, we know that a random three-character string is appended to the end of each of the population figures. So we can't just the first eight digits of the number because both Japan and Nigeria's population is over 100 million. And so that's nine digits. We can still go ahead and do slicing though, but this time ignore the last three characters of the population. And so we can do that by adding a minus three at the end of this.
>
> **[3:28](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=208)** And because we want to return an integer value, we can cast this as an integer.
>
> **[3:42](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=222)** And so this ensures that if we do any sorting, it's going to be sorting based on the integer values rather than string values. So let's head back to our sort_country function.
>
> **[3:57](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=237)** And now let's return the list sorted again. So we have the country list, which is this time sorted. And the key we're going to be using this time is the function that we've just created.
>
> **[4:20](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=260)** And we're done. So let's go ahead and test the code, and you can see that it's passed the test and so we are done. Now, there's another way we can go ahead with this solution, and that's using a tuple. Now, the reason we use a tuple is to ensure that we have a stable sort order. So when sorting on multiple keys, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) will use a lexical graphical comparison, which means it compares the first element and then the second and then the third, and so on. So what we could do is do a return. So let's reuse some of this code.
>
> **[5:19](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=319)** And I'm going to comment out these two lines. And this time, I'm going to use a tuple. So we're going to first sort by the population so I can get the population from here.
>
> **[5:47](https://www.linkedin.com/learning/8-things-you-must-know-in-python/solution-sorted-24967346?u=76281980&t=347)** And because the results are going to be stored in the population, I can do an x.population. And then the next thing I want to do is I want to sort by the name and I've got that by x.name.lower. And let's go ahead and close the tuple and close our sorted function. And let's go ahead and test our code out again. And you can see that this one-liner is another solution to this problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** sort_country (2), country_list (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/8-things-you-must-know-in-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/8-things-you-must-know-in-python/next-steps?u=76281980&t=1)** - [Instructor] Well I hope you found this course helpful. Now I work primarily on machine learning and AI projects, and almost exclusively in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), so if you like this course, you might like some of my other courses online, including Python courses like decorators, the [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) library and Apache [PySpark](../../Skills/Data%20Science/PySpark.md), or other ones with more of an AI and machine learning-focus like [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) in [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) in OpenCV, Docker, and how to introduce AI into your organization. I'd love to hear back from you and to connect via [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). Thanks again for watching and (speaking foreign language).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [PySpark](../../Skills/Data%20Science/PySpark.md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) (1)
> **CLI Commands:** python (2), apache (1), docker (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Jonathan Fernandes](../../Instructors/Artificial%20Intelligence%20(AI)/Jonathan%20Fernandes.md)

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)

## Path Context

### In [Getting Started with Python](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20with%20Python.md)
← [Level Up- Python](../Software%20Development/Level%20Up-%20Python.md) | **7 of 8** | [Python Practice- Real-World Coding Challenges](../Software%20Development/Python%20Practice-%20Real-World%20Coding%20Challenges.md) →

## Appears In

- [Getting Started with Python](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20with%20Python.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](../Software%20Development/Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)