---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-c-sharp-language-features
url: "https://www.linkedin.com/learning/advanced-c-sharp-language-features"
duration_minutes: 103
duration: 1h 43m
level: Advanced
updated: 8/29/2022
learners: 45099
skills:
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-c-sharp-language-features-2491189"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGZRKLVLjW08A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661448132171?e=2147483647&amp;v=beta&amp;t=ohKgw-T9t0eODNybZqySudQaC5NRnE207Di0-UpJqdw"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Excellence- Architecting High-Performance Solutions]]'
prev_courses:
  - '[[C- Applied Data Structures]]'
next_courses:
  - '[[Advanced C- Object-Oriented Programming]]'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":3,"total":6,"prev":"C- Applied Data Structures","next":"Advanced C- Object-Oriented Programming"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20C-%20Language%20Features.md)

![Advanced C#: Language Features](https://media.licdn.com/dms/image/v2/C4E0DAQGZRKLVLjW08A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661448132171?e=2147483647&amp;v=beta&amp;t=ohKgw-T9t0eODNybZqySudQaC5NRnE207Di0-UpJqdw)

# Advanced C#: Language Features

> Projects Use what you learn about structural pattern matching to build a sales commission calculator tool for a securities trade consisting of stocks or bonds. In this advanced C# course, instructor Joe Marini dives deep into language features. Joe has worked in the web and software industries for more than 30 years, speaks regularly at industry conferences, and has authored or co-authored several

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features) | 1h 43m | Advanced | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [C# language features](#c-language-features)
  - [What you should know](#what-you-should-know)
  - [Setting up the environment](#setting-up-the-environment)
- [**1. Language Constructs**](#1-language-constructs) (5 videos)
  - [Indexes and ranges](#indexes-and-ranges)
  - [Literal number improvements](#literal-number-improvements)
  - [The null-coalescing operator](#the-null-coalescing-operator)
  - [Deconstruction with tuples](#deconstruction-with-tuples)
  - [Deconstruction with classes](#deconstruction-with-classes)
- [**2. Structural Pattern Matching**](#2-structural-pattern-matching) (7 videos)
  - [Overview of pattern matching](#overview-of-pattern-matching)
  - [Basic patterns](#basic-patterns)
  - [Enhanced switch statements](#enhanced-switch-statements)
  - [Position patterns](#position-patterns)
  - [Relational patterns](#relational-patterns)
  - [Pattern challenge](#pattern-challenge)
  - [Pattern solution](#pattern-solution)
- [**3. Object-Oriented Programming Features**](#3-object-oriented-programming-features) (4 videos)
  - [Working with indexers](#working-with-indexers)
  - [Overriding ToString()](#overriding-tostring)
  - [Equality testing](#equality-testing)
  - [Using records](#using-records)
- [**Conclusion**](#conclusion) (1 videos)
  - [Conclusion](#conclusion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [C# language features](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=0)** - [Joe] One of the things I've always loved about the C# language is that there's always more to learn about it. Somehow, C# manages to be both a language that is easy to learn and be proficient with, while at the same time having some really great advanced features that enable developer productivity for a wide variety of programming scenarios. Hi, I'm Joe Marini. And throughout my career, I've been developing software for some of the biggest and best known companies in Silicon Valley for more than 30 years. In this course, we're going to investigate some of the more advanced features of C#. We'll start off by learning about some of the language features that make it easier to write more concise, easier to understand code. Then we'll take a look at structural pattern matching, a feature that dramatically simplifies writing program logic that would otherwise require complex switch and if-else structures. We'll wrap up by working with some of the newer object-oriented features that make building custom class types easier to create, compare, and manipulate. C# has come a long way and improved immeasurably from its humble beginnings as a [[Windows]]-only programming language into the world class cross-platform language that it is today. Let's get started learning about some of these advanced topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [joe] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is intended for C# developers who want to learn about some of the more advanced features of the language. If you're just starting out with C# programming, then this probably isn't the right course to start off with. A better place to start might be Learning C# or [[C- and .NET Essential Training]] before taking this course. So before we begin, make sure you're comfortable with the following topics. First, you should already have a firm grasp of the basics of the C# language, such as how to work with statements and functions and classes and so on. Now, you don't need to be an expert, but I'm going to assume that you already have enough familiarity with C# that I don't need to explain these concepts. You should also be familiar with using the .NET command-line interface. We're not going to be using it very much, but you should at least be aware of the tool and what it does. Finally, you should be familiar with using either Visual Studio or Visual Studio Code. In this course, I'm going to use Visual Studio Code but all of the examples in the course should work in regular Visual Studio as well. That's pretty much all the foundational knowledge you'll need for this course. So if you're okay with these concepts, then you are ready to get started.

> [!info]- Semantic Content
>
> **Tools:** visual studio (4)
> **Env Vars:** net (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the environment](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=0)** - [Instructor] To complete the exercises in this course, you're going to need to make sure that your development environment is set up to work with .NET. The examples in this course are built using .NET Six, so you'll need to either have .NET Six on your machine or you can use the source files to create projects for whatever version of .NET you're using. They should work as far back as .NET Five, but if you've got .NET Six on your machine, that's ideal. So let's start by opening the terminal program on your computer. And then, let's go ahead and type in dotnet, and then dash dash version. And you can see here on my computer that I've got version six already installed. Now if running this command gives you an error or you have a version earlier than six, you need to install the .NET SDK. So let's go ahead and switch over to the browser and you can download .NET Six from this link on the [[Microsoft]] website. The page should automatically select the right version for your operating system, but you can manually change it if you need to. So if you're downloading for the Mac, you click on Mac. [[Windows]] is over here and the other operating systems are here. So when you install this, make sure that you install the SDK version of .NET. You don't want just the runtime. Since we're going to be building applications, we actually need the SDK for this. So follow the instructions for your operating system and install the SDK and then go back to the terminal and run that command again to make sure that it was installed correctly. Now I mentioned earlier that I'm going to be using Visual Studio Code
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=93)** for this course and you can find that at, if we go to code.[visualstudio.com](https://visualstudio.com), this is where you can download Visual Studio Code. Now technically, you can use any editor you want because we're going to be running things from the command line, so I recommend Visual Studio Code because it's free. It runs on pretty much every operating system that there is and it's a great editor. If you've already got Visual Studio Proper, you can use that too, but if you're using an editor like Adam, for example, that should also work. It doesn't really matter. I suggest using Visual Studio Code because it's a great editor. It comes from Microsoft. It's got lots of great features for working with .NET code, so that's what I recommend people to use. So once you have .NET Six and Visual Studio Code on your computer or whatever editor you're using, make sure that you install the example files for this course, which you can find in the dedicated [[GitHub]] repository at this link, just in that popup right there. Go to that link and download or clone that repository on your computer to wherever you want and you are ready to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Windows]] (1), [[GitHub]] (1)
> **Env Vars:** net (11), sdk (4)
> **Tools:** visual studio (6), terminal (2), command line (1), github (1)
> **CLI Commands:** make (4), find (2), dotnet (1)
> **Prerequisites:** install (5), set up (1), you'll need (1)
> **UI Navigation:** go to (2), select the (1), click on (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Cross-References:** go back to (1)


### 1. Language Constructs

[↑ Back to Table of Contents](#table-of-contents)

#### [Indexes and ranges](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=0)** - [Instructor] In this chapter, we're going to take a look at some of the core language enhancements that make code easier to read and write. And we're going to start off by learning about indexes and ranges. So here in my code, in the start section under general, here in the indexes and ranges folder, we'll open up the code. So one of the most common programming operations that you'll encounter when working with arrays and other sequences of data is having to access items within the sequence. And the C# language provides some nice convenience features for working with individual items, as well as ranges of items within a sequence. So here in my example code, I have this list of strings. And you've probably already been used to seeing some code that looks like this. So there's square brackets with the integer index into the array. So before we do anything, let's go ahead and run the code that we have. And what I'm going to do is right click on indexes ranges, and choose open in integrated Terminal. And this is one of the things I like about VS Code, it has this Terminal built in. If you're not using VS code, just go into your Terminal program, go into this folder and type the commands that I type. So once we're inside this folder, here in Terminal. And we'll wait for the Terminal to come up. All right, there we go. So what I'm going to do is type, dotnet run. And then the application will compile and it'll run. And when it runs, we can see right there in the output,
>
> **[1:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=99)** that the output is quick. And sure enough, the [[Microsoft Word|word]] at index one, and remember this is a zero-based index. So the is index zero. So index one is the word quick, and sure enough that's what we're getting, okay. Now, suppose you wanted to access the words in this array relative to the end. Well, one way to do that would be to use the length of the array, and then subtract off an index, right Something like this. So for example, I could write, let's see console.WriteLine. And I'm going to write, words[words.length - 1],
>
> **[2:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=139)** so I'll save that. And now that works, but C# has a much more efficient way of writing this, using what's called the index from end operator. So rather than typing out this formula, calculating the lengths, subtracting off one, I can write something that looks like this. I can use the little up arrow character, and sometimes it's called the hat, cause it looks a little hat. like a gnome might wear, like a garden gnome. Yeah, no, I know I didn't make this up. It's just, it's called that sometimes. Anyway, so the up arrow one, and I'm going to save this and let's run this again. And when this runs, so we can see sure enough. Okay, here's the word at index one and then the word at the last part of the array. And remember this is the up arrow one. That's the last item. We're not zero based from the end of the array, only the start, okay. So we have the word at index one and then the last word in the array. All right, it's also pretty easy to define a set of range values to operate on using what's called the range operator. So what I'm going to do is define a string array and I'm going to call that word range and then I'm going to use what's called the range operator to select a range of words. So what I'm going to do is type, so words, that's the list. And then I'm going to want words two through five. So this little double period right here is the range operator. And then once again, I will go ahead and print that out. And that's going to be, well, let's go ahead and call string.join, and we're going to join using commas.
>
> **[3:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=237)** And we're going to use the word range that we just built. And to select an entire array, you can actually omit the two values. So let's go ahead and copy this code, right. And in this case, what I'm going to do is take off the five and take off the two. That basically means give me the entire array. And you can also omit either the first or last values, so I'll take off the five and then I'll take off the two. And so what this means here is give me all the words from starting from index two to the end. And this means give me all the words starting from index zero, so from the beginning up to index five. So it's pretty cool. You can use this to write more concise code. Let's go ahead and run these examples. So I'll save and then we'll run again. And now here you can see the result and the output. So here's the original examples. We just did those. Then we have two through five then we have, so starting from this is right here. So we've got index two all the way to the end, right. Then we've got starting from the beginning all the way up to index five. And that's this guy right here, okay. So we've got, let's see. Yeah, so we've got two through five. We've got, this is no indexes at all, right. This is all the words. Then we've got two to the end and then we've got the end up until index five. So using the range in index operators,
>
> **[5:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=331)** you can easily operate on sequences. There's one more thing I want to show here and that's that indexes and ranges can also be declared as variables. So let's go back up to the code and what I'm going to do is I'm going to declare a variable of type index and I'll call that idx and I'll give that a value of ^4, okay. And then I'm going to console right line. And I'm going to print out the words. Instead of using a constant value, I'll use the variable I just declared. I can also declare a range as a variable using surprise, range as the type, and I'll call that rng. And I'll set that variable to 3.., and then we'll use the ^ 1 to mean the last element in the array. And so once again, we'll call word range equals words and then I'll use my range variable. And then we'll just go ahead and copy that line rather than write it all over again. So let's go ahead and comment out the previous code. So we'll comment this out and we'll go ahead and comment that out because we don't want to initialize that. All right, so now we're going to use variables instead of hard coded values. So let's go ahead and run this and now you can see the results here. So the word at the fourth from the end index is over. And then when I declare this range three to the end we can see that that's the result right here.
>
> **[7:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=427)** So using these syntax enhancements can make your code much easier to read while working with sequences of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (10)
> **Tools:** terminal (5), vs code (2)
> **CLI Commands:** make (3), dotnet (1)
> **Definitions:** is a  (1), basically means (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Literal number improvements](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=0)** - [Instructor] In this example, we're going to take a look at a pretty simple C# enhancement that significantly helps to improve the readability of code, specifically numerical data. Let's go ahead into our NumberLiterals folder here in the General folder and open the code. So working with numbers is probably one of, if not the most, common things that a programmer has to do, and sometimes having to read numerical data can be pretty cumbersome, so let's take a look at this example, right. We have a few different types of numbers. In this case, we have an integer, a floating point number, a hex decimal and binary numbers. Now each of these numbers is valid as specified and we've also got some code that writes them out to the console here. So before we do anything else, let's just run what we already have. So I'm going to right-click, open my integrated terminal, and dotnet run this. And here, in the output, you can see the numerical data. Now starting with C# version seven, you can use the underscore character as a number separator to help make numbers more readable. So let's make a few adjustments. So for the integer, we can use the underscore as a separator between orders of magnitude. So for example, this is 123456. And so, I could put a little underscore right in there to make that easier to read and I can do the same thing with the floating point number.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=94)** So here, we've got 1234.5, and right here between the thousands separator, I can put that little underscore in there. So each of these changes makes the number easier to read. The code, as it's generated, doesn't change, like this isn't going to affect the underlying intermediate code, but the source code is much easier to read this way, right? It's pretty obvious that this is, you know, hundred thousands, this is 1000, and we can do the same thing with hex decimal numbers separating each of the bites. So for example, in this case, I can separate AB from CD and EF. It's still a valid hex number, but it's easier to read now. And it also works for binary data. I can do this between every four digits. So for example, I can put the underscore here and the underscore here and underscore here. Okay, so I haven't really made any actual code changes. They're still the same numbers, but they're much easier to read now. So let's go ahead and run our code again and you can see that I'm getting the exact same output, but the programming syntax is much easier to read. So this is a really great example of a simple enhancement to the basic C# syntax that makes code easier to read and leads to fewer mistakes that are just hard to track down.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), dotnet (1), cd (1)
> **Analogies:** for example (3)
> **UI Navigation:** open the (1), right-click (1)
> **Versions:** 1234.5 (1)
> **Tools:** terminal (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The null-coalescing operator](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=0)** - [Instructor] All right, now let's take a look at one of the C Sharp operators called the null coalescing operator. It's fairly common programming operation to test a value for null, and then do something in response to that test such as assign a value or throw an exception or do something else. And the null coalescing operator makes this much easier in C Sharp. So let's take a look at an example. So here in my start folder, in general, I'll go into the null operator and open up my program file. So here in my editor, I have a function called old school log string and this takes a string argument and checks to see if the argument is null, in which case, it writes out that no string was given. Otherwise, it just writes out the string, right? And I have two lines of code that test the function. So let's go ahead and run what we have. So let's go back to the folder here and open this up in the terminal. All right, and let's dotnet run this. And when we run this, we can see that in the output, that it's pretty straightforward. So in the first example, we passed in test strings. That's what was written out. And then in the second example, we've got null and sure enough, no string given. Yep, that's the result right there. So using the null coalescing operator,
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=94)** we can make the check for null much more concise. So let's go back to our code and let's go ahead and write the new school version of this. So I'm going to write void log string, and that's going to take a string called the string. And what I'm going to do is I'm going to call Console.WriteLine, only in this example, I'm going to write the string and then two question marks and then no string given. So the way that the null coalescing operator works is it will choose the value on the left if it is not null, and it will choose the value on the right, if it is. So we've basically condensed down these six lines of code right here, into this one single line of code. So, okay, let's go ahead and try this example. So I'm going to copy my original lines of code and in this case, I'm going to call regular log string. Okay. And just to make these little warnings go away, let's just go ahead and make these nullable values. I guess I should be proper about my C Sharp here. All right, so we'll save and actually, let's go ahead and comment out the previous example. Okay, so now let's go ahead and run this again. And when I run the code, you can see that sure enough, the result is pretty much the same
>
> **[3:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=187)** as in the first case. Now it's also possible to throw an exception as part of the right sided expression. All right. So let's go back to our code and let's create a function called ThrowableLogString, and sure enough, this will also take a string variable, called theString. All right. And what we're going to do here is we'll use the same Console.WriteLine call and I'll choose the string and then use the null coalescing operator. But in this case, if someone passes null, I want to throw an exception. So I'm going to write throw new and I'm going to use the argument to null exception. And I'm going to say that the string, which is the parameter, and then the message is going to be cannot be null. And that's pretty much it. Okay, so in this case, we'll throw an exception rather than choosing a different value. So let's go ahead and test this. So let's copy these two lines and paste them and we'll call throwable instead of the regular log string. And let's comment those guys out. All right, one more time. Let's go ahead and run our code. And when I do that,
>
> **[4:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=280)** you can see sure enough that test string, that worked and then when I pass in null, we get an exception. So the exception is being thrown for the null argument case, all right? Now there's one more version of this operator I want to demonstrate and that's the assignment version of the operator which actually performs an assignment in the case of a null value. So let's go back up to my code. So let's imagine that I have a string variable and I'll call it str and I'll set the value to null. And then later on in my code, I can write something like this. I can write str and then the two question marks followed by an equal sign. And I'll just put something like default value in there. So this version of the null coalescing operator, it performs the same check to see if the variable is null and then assigns the value on the right, if it is. Otherwise, it just keeps the current value. So let's go ahead and try this out. I'm going to Console.WriteLine. And we'll write out str, and then let's go ahead and comment out the previous examples. And let's comment out the functions as well because they're not being called and it's giving me these warnings. Okay, so now let's run our code. Let me scroll back down so we can see it.
>
> **[6:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=374)** All right, let's run our code again. And so, when I run the code, you can see that when str is null, it gets set to the right side value. That's why it's being printed out here, default value. So let me try setting this to something else. I'll set this to, you know, this is a string and save that and let's run it again. And when I run it again, now that it has a value to start with, it just simply keeps that value when it runs. So the null coalescing operator is one of those nice C Sharp language features that takes a fairly common programming operation and makes the code much more concise and easier to read.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), dotnet (1)
> **Cross-References:** go back to (3)
> **Analogies:** such as (1), imagine (1)
> **Code Identifiers:** thestring (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Deconstruction with tuples](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=0)** - [Instructor] The tuple structure was introduced back in C# 7.0, and it introduced to C# a feature that had long been available in other languages like [[Python (Programming Language)|Python]]. Essentially, a tuple is a very lightweight way of grouping multiple values into a single object. And one of the most popular uses for tuples is to return multiple values from a function. So let's go ahead and open up the DeconstructTuples example. All right. So you can see here in the example code that I have a function named GetStockValues and GetStockValues returns a tuple of three values for a given stock ticker, the high, low, and closing value for that day of stock trading. So what we're going to do in this example is take a look at using what's called deconstruction syntax to work with the values in a tuple that's returned by a function. And to understand the value of this, let's take a look at some more of our code. So working with individual values in a tuple can sometimes be a tedious process. So each item in the tuple is accessed using the item and syntax. So here in this example, I've got my result, which is returned by calling GetStockValues for the ticker ABCD. And you can see that to access each value, I've got Item1, Item2, Item3 in the returned tuple.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=96)** So before we do anything else, let's go ahead and run this, so we have a baseline understanding of what this does. So let me scroll down to that code and let's run it. And when the program runs, you can see that the program just prints out the three values for that stock ticker: the high, the low, and the close. So deconstruction makes it easy to assign the individual tuple values directly to variables. So let's go ahead and try this using our WXYZ ticker. I'm going to define a variable, and I'm going to define a tuple variable, and it's going to have high, low, and close. And then I'm going to call GetStockValues. And in this case, this ticker is going to be WXYZ. And if we scroll back up really quick, you can see that WXYZ will return these values right here. All right, and then we'll just write them out. So we will just simply Console.WriteLine, and I'll write out high, low, and close.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=178)** So let's run the example again. And you can see that I get a similar result, but this time I did it with easier to read code. Instead of this like Item1, Item2 nonsense, I actually get named variables that I can work with. So if I was going to manipulate these further, it's much better to have them in actual named variables. And, of course, you can also use explicit variable definitions. So let me add that. So let's go ahead. Okay, let's type decimal, and we'll call that cl for the close. And you can also use what's called the discard syntax to ignore values that you're not interested in using. So for example, if I only cared about the closing value that was returned by this function, I could write something like this. What I would write is underscore and then underscore, and then cl, and then I would call GetStockValues, and let's use ABCD again, and then I can just simply write out my value. In this case, it's just closing value. So the underscores are used to discard the values that won't be used. Basically, I'm saying, "Hey, compiler, I don't really care what this value is. Just go ahead and toss it. I'm not even going to give it a variable name." So let's go ahead and run this once more. And when I do that, you can see that now I'm only using the closing value right here. So if your program needs to work with tuples returned from functions,
>
> **[4:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=272)** the deconstruction syntax can simplify your code and condense several operations into just a couple of lines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** wxyz (3), abcd (2)
> **CLI Commands:** python (1)
> **Versions:** 7.0 (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Deconstruction with classes](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=0)** - [Narrator] In a previous video we saw how to use deconstruction syntax to work with data values returned in Tuples. Turns out deconstruction also works with custom classes. And it's easy to implement in your own class definitions so that they can support the deconstruct syntax. All you need to do is define one or more deconstruct methods in your class. So let's take a look at this in a real example. So let's go ahead and open up deconstruct custom and we'll open up the program code and we'll open up this file here called well, here's a program code and I've got a file here called planets. Let's go ahead and condense that down. All right. So, suppose we have a class named planet that holds some information about one of the planets in the solar system. And if we hop over to the program code, you could see we have some code that creates a couple of planet objects, right, we got one for Earth and one for Venus. So to support deconstruction of these classes we just need to add some deconstruct methods to our class definition. So let's go back to the planet's code. And so what we're going to do first is add a deconstruct method that returns the name of the planet along with the number of moons that it has. You can see here that in each planet definition we have the planet's name, it's radius, how many moons it has and its distance from the sun. So to do this, I'm going to create a function that returns a void value and it has to be named deconstruct.
>
> **[1:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=98)** And then inside the function signature we're going to add an out parameter to the function signature for each value that we want to return. So I'm going to write out and in the case of the planet name, it's going to be a string and we'll call that name and then I'll have out int moons and then we'll simply return so your name is equal to name and moons is equal to moon count. Next, let's overload the function by adding a deconstruct version to return the name, the moon count and the radius. So I'll just go ahead and copy this and paste it here. And we'll add in addition to the moons, we'll have out, int, radius and we'll return that as well, so that's going to be radius is equal to radius. So now let's go back to the main program and add some code to exercise these features, okay. So go back to the program. So first let's get the name and the moon count for the Earth. So I'll declare a Tuple variable and I'll have the name and the moons. And I'm going to just go ahead and assign that to Earth. And then I will write out name and moons and then let's get some data for Venus. So let's go ahead,
>
> **[3:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=197)** and in the case of Venus, we're going to get the moons and we're going to get the radius as well. And I'm just going to declare a variable in line here called radius. And in this case we'll just go ahead and add radius on the end. Okay, so we have two examples, one for the Earth and one for Venus. And in the first case we're getting the name and the moons and then we're getting the name, the moons and the radius. So let's go ahead and run this. We'll bring up our integrated terminal. All right. And let's run this code. All right, sure enough, we've got Earth and it's got one moon and Venus doesn't have any moons, and it's 6,052, I guess that's the radius of the planet. Okay. So, one of the things you need to be careful about when using the deconstruct method is that you can't define more than one version of the function with the same number of parameters because the compiler can't distinguish between functions with the same number of parameters during overload resolution. So for example, if I go back to the planets and what I'm going to try to do now is add another deconstruct method, right? So I'll call that deconstruct, and this time with parameters for the name and distance
>
> **[4:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=292)** from the sun. So I'll have out string name and out int distance
>
> **[5:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=303)** and I'll assign name to name and distance is distance. There we go. All right. So, when I try to run this when I try to compile this, right, you can see it's already giving me an error right here but let's just go ahead and try to run this. And you'll see, it says I've got an error, right? It says type planet already defines a member called deconstruct with the same parameter types. And that's because it's looking here, it says, all right, I've got two parameters and this one here's got two parameters and I really can't tell them apart. So you have to make sure that you're defining different versions of the deconstruct method each with a different number of parameters. But as you can see, it's pretty easy to support the deconstruct syntax in your own custom defined classes as it is for regular Tuples that are built into C Sharp.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (4), previous video (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [narrator] (1)


### 2. Structural Pattern Matching

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of pattern matching](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=0)** - [Instructor] In this chapter, we're going to take a look at the pattern matching feature of C#, which was first introduced to the language back in C# Seven and has had several enhancements since then. So first, let's understand what pattern matching is, and to be clear, I'm not referring to regular expression patterns here. Alright, those are separate from C# itself. Pattern matching is the process of examining an expression to see if it has certain characteristics and then taking specific actions based on the result. These checks are performed using the is operator and an enhanced version of the switch statement. And we'll get into that in a little bit. Pattern matching doesn't technically add new functionality to the C# language in the sense that you could already accomplish the same results by using existing C# language constructs. However, it makes certain kinds of logical operations a lot easier to write and more concise than a large block of if else statements or complex switch statements. So there are a number of different types of patterns supported and we're going to take a look at several of them, starting with basic patterns like constant and declaration patterns and then moving on to some of the more advanced patterns. Pattern matching is one of those language features that once you start using it, you'll begin to wonder why it wasn't part of the language all along.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Basic patterns](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=0)** - [Instructor] The first type of pattern matching we'll try out is called the constant pattern, in which we compare an expression to a known constant. So one of the most popular uses for this type of pattern is to perform a null value check. So here in our start folder, let's open up the basic patterns folder, and we'll open up the code and condense that down. All right, so let's suppose we have a nullable string value and it's set to this value to begin with. So we can use the is operator to check for null, and starting with C# 9, you can use the not operator to negate that check. So for example, I can write if and then str is not null, then I can take some action. So for example, I can write out, the value of str is,
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=54)** and then we'll put the value in there, and then I can write else... I'll write str is null. So let's go ahead and try this out. And we'll open up our integrated terminal and we'll dotnet run this. And so sure enough, because the string is currently not null, we can see that we print out the value, and if I change this to be a null and run this again, and you can see that when I run it, okay, now we see that str is null. So that's a very simple demonstration of the constant pattern. So here we have the variable, we have the is operator, and then we've got the constant where comparing it to, but the is expression can also be used with what's called a declaration pattern, where you declare a variable in line and then use it if the expression evaluates to true. So to demonstrate this, let's go back to the code, and let's close that, let's comment this out. So let's assume we have a function called dashedLine, and this function prints a number of dashes based upon the value of the argument, and the argument in this case is a generic object, and it can either be an integer or a string that represents an integer.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=148)** Now, the old way of doing this might look something like this, where we first have to determine whether the argument holds an integer or a string, and then perform the appropriate conversion, and then finally use the value to print the dashed line. So let's go ahead and run this. Let's run it back up and let me go down here and uncomment these lines that call. And so you can see we have 25, and then we have a value of 50 inside of a string, And then we've got this floating point number, which is neither a integer or string, okay, so we'll run this. And sure enough, it works. So here we have 25 dashes, then we have 50 dashes, and because the floating point value is not an integer or a string, nothing happens. But by using the is operator, we can do both the test and the declaration in the same statement. So let me show you what I mean. So we'll close this and we'll comment this old code out. So what I'm going to write is if, and then I'm going to write o is, and then I'm going to declare the variable in line, I'm going to write int l, okay. So in this case, what's going to happen is, if the object is an integer, it's going to be assigned into this local variable L. Then I could write or o is string s. So in this case, if the o is a string,
>
> **[4:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=247)** then the string will be put into the s variable here, and then I'll write and int.TryParse, and I'm going to write s and then out l, and that's an if statement, so I'll have to put some brackets around here. So what this statement is basically saying is, hey, first try to convert this to an integer, and if it is, put it in l. Now, I've already declared l, so I can use it again. Hey, if it's not an integer, well, is it a string? If it's a string, put that string in s here and then call the TryParse function on that string to convert it to the integer that I've already declared. Now, this is much more concise than the code that I already have, and then assuming one of these works, what I'm going to do is write string str equals new string, and I'm going to create a string of dashes, and it's going to be l characters long, and then I'll just simply Console.WriteLine that string. Okay, now look, you've got, what is this, four lines of code versus all these lines of code here. This is much more concise and it's much more obvious what's going on. It's either an integer or it's a string, and if a string, I parse it. So when I run it, let's go back to the terminal, and we'll run it again. And sure enough, the output is the same. Okay, one more thing to look at. Let's look at something called the property pattern. So the property pattern,
>
> **[5:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=341)** let me go ahead and comment this out here, the property pattern examines the individual properties of an object and then returns true or false, depending on whether they match a set of given values. So let me go ahead and uncomment this code right here. Let me comment that line. So let's imagine that I'm Julius Caesar, and I want to know whether a particular date corresponds to the Ides of March, because obviously, if you're Julius Caesar, that's a pretty important date, right? If you don't know what I'm talking about, go ahead and look it up. All right, so I've written a function that takes a DateTime as a parameter and I need to determine if that date is March 15th. So I can do that by using a property pattern like this. I'm going to replace this false, I'm going to return, whoops, I'm going to return date is, right, using the is keyword, and then in these brackets, I'm going to write Month: 3 and then Day: 15. So I'm examining the month and day properties of this date object. So let's go ahead and uncomment some of this code here, show you what that code does. Basically, I'm calling IsTheIdesOfMarch with a couple of test dates, so we have January 13th, and then we have March 14th, 15th, and 16th. So let's go ahead and run this and see what happens. So we'll open up the integrated terminal... And then let's run this.
>
> **[7:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=438)** And when I run this code, you can see that it returns true for the March 15th date, but not for the others. So it seems to be working, but let's suppose that, you know, I'm Julius Caesar and I'm really paranoid, right? And I want to know if it's really the Ides of March, or maybe it's the day before, so I can prepare. So what I'm going to do instead is, I'm going to modify this code to write day, and it's going to write 14 or 15. So here, now I'm comparing this property using this logical statement to test to see if the day property is equal to 14 or 15, so now I should get true for both of these dates right here. So let's save that, and now let's run again. And now sure enough, I'm getting true for both the 14th and the 15th. So as you can see, pattern matching makes writing certain kinds of logical statements much easier to read in fewer lines of code.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Tools:** terminal (3)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** dotnet (1)
> **Code Identifiers:** dashedline (1)
> **Speakers:** - [instructor] (1)

#### [Enhanced switch statements](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=0)** - [Instructor] So far we've seen how to use the is operator to perform pattern matching. But very often the expressions that we need to evaluate are more complex than just a simple Boolean true or false with only one value to test. And just about every programming language has something like the switch statement, which makes it easy to compare a given value against multiple cases. So let's open up our switch expression example and we're going to open the Program file. And so you've probably seen something like this before. I've got my function here called NumToString, that takes a number and returns a string. And if we run this, so before we do anything, let's go ahead and run it. And you can see I'm calling the function with the integers 2 and 4. And sure enough, when the application runs, we see Two and then unknown because four is not handled. So starting back in C# seven, the switch statement became a lot more powerful. You're no longer limited to just using constant values like integers and strings as the switch value. You can now switch on just about any type. So to demonstrate this, let's open up the Shapes file. First, I'll close the terminal there. So here in my Shapes file, you can see I have a few classes defined that represent different shapes that will use for the next few examples. So I've got a circle, a rectangle, and a triangle. Let's go back to the program code
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=94)** and let's condense this down. So I can now create a ShapeToString function that takes a shape as an argument. So I'm going to write string and I'll call this ShapeToString and it'll take an object named, oops, named shape. And what this is going to do is return a string based upon the type of shape it's given. So what I'm going to do here is switch on the object, the argument itself. So I'll write switch and then shape. And then I can use actual types as my cases so I can write case Circle and that will return a Circle string. And then we can copy and paste this. I'll do Triangle and that'll return a Triangle, and then a Rectangle and we'll return Rectangle in that case. Copy, paste. All right. And then we'll have a default case which will return Unknown. So let's go ahead and try this out. What I'm going to do is write some code to try a couple of these. So what I'm going to be doing is writing Console.WrileLine, and I'm going to call ShapeToString with a new Circle.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=194)** And in that new Circle, I'm going to give it a radius of 10 and I'll also call it with a new rectangle and I'll give that a length of 5 and a width of 10. Don't want to close off the brackets there. I'm going to close it off there. All right. So let's go ahead and comment out our previous example. All right. Now let's run what we have. So open up the terminal once again. All right, and let's run this. And when I do that, you can see that sure enough we get the output that we would expect. So when I call ShapeToString with a Circle and a Rectangle, I get the strings Circle and Rectangle back. So this is pretty powerful because now we can switch on types. And this opens up a lot of new ways of writing more concise code. So this particular language feature, the enhanced switch statement got even better in C# eight with the introduction of something called switch expressions. So what we're going to do is rewrite this example as a switch expression. So I'll write this again and I'll call it ShapeToString2.
>
> **[4:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=288)** And once again, it will take an object. And in this case, I'm going to write a Lambda expression so I'll write shape and then I'm going to use the [[Microsoft Word|word]] switch. So what this expression does is, it tells the switch statement that we're going to switch on this particular value right here. And then I'm going to specify each case but I don't need to use the case keyword. What I'm going to do is write Circle and then an arrow operator and that's going to return Circle, just like we did before. And then I'll copy each of these. And then, so we'll do Rectangle like we did previously. And then we'll do triangle. Actually, let me just copy this whole line right here and that's going to be Triangle. And then I can use the underscore operator which we saw previously as the discard. So this is the case I don't really care about and this will be unknown. And then we need to have a semicolon 'cause it's a statement. So this is a lot more compact and easier to read than this much more verbose example up here. So let's go ahead and run this with the same code as above. So I'll copy these lines and paste it down here. Oh, actually, you know what? I've already got these lines. Let's just use these lines instead. So we've got circles and rectangles with different values.
>
> **[6:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=382)** So I'll save that. And let's comment out the previous example here so we don't see some output that's confusing. So let's go ahead and run this again. And sure enough, you can see that the output is basically the same. So I've got two circles and two rectangles, and sure enough, that's exactly what happens but where this feature gets really interesting is when you make use of a switch feature called case guards. So sometimes these individual case statements aren't expressive enough to handle conditions by themselves. So you can add additional conditions to the case by using the when keyword. So let's update our code to use case guards. What I'm going to do here is I'm going to write circle. And then in brackets, I'm going to write Radius: var r, and then outside the brackets I'm going to write when r is greater than 10, that's going to return the value Big Circle. And then I'll copy that and paste it. And so when r is less than a equal to 10, that's going to return Little Circle. So what's happening here is I'm using one of the properties of the circle object declaring a local variable, and then saying, "Hey, when that variable meets this condition, this is the case value that you should return." So let's keep on going with rectangle. So in this case, I'm going to have rectangle.
>
> **[7:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=476)** Let's go ahead and copy this. Copy that, and paste it there. So I'm going to have rectangle, and rectangles have length. So I'll call that var l. And then they have a width, and I'll call that var w. And then my when case is going to be when l is the same as w, that's going to return the word Square. So these case guards, let me create even more specific conditions to test each match. So you can see that here in the code, I've got property values for each of these objects. And what I'm going to do is save. And I'll run this again now. All right. And now you can see that when I run this code, right now we have actually different case triggers being run when the values are different settings. So here we have Big Circle, Little Circle and we have a Square and a Rectangle. So now the different cases are being met for the different when clauses. So one of the things you need to make sure of though is that each of your cases can be reached. And what I mean by that is this. If I take this generic Rectangle case right here and I put it above this case here, you can see that I'm already getting an error. And the error says that the pattern is unreachable. It has already been handled by a previous arm of the switch expression or it is impossible to match. And that's because this case right here is going to match every single rectangle that comes through. And then this one, which is more specific, is never going to trigger.
>
> **[9:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=568)** So I'm going to undo that change. Now, the good news is that the compiler obviously helps identify these cases in your code to catch the problems before they happen. But by using these switch expressions along with these case guards, you can create some pretty complex logic handling cases in some pretty concise code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (2)
> **Tools:** terminal (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Position patterns](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=0)** - [Instructor] Now we're going to look at the positional pattern which was introduced in C# 8. The positional pattern lets us take advantage of something that we learned about earlier in the course when we looked at using the deconstruction feature to return tuples of values. Let's go ahead and open up the PositionalPattern folder and open the code. So this pattern enables us to deconstruct an expression result and then match the resulting values against the corresponding nested patterns. So let's try this out. Let's imagine that we have a program that calculates the amount of a group discount available when purchasing tickets to an event. I have a function here named GetGroupTicketPriceDiscount. This is going to return the discount percentage based upon some criteria which are the size of the group and the date that the visit is happening. So the first technique I want to show is that you can switch on a tuple of values directly, which you can see here as a part of the switch expressions. And remember, we learned about switch expressions earlier in the chapter. So then I can start filling in some of the pattern cases. So if the day of the week is either a Saturday or a Sunday, then there's no discount given regardless of the group size. So when I hear the [[Microsoft Word|word]] regardless, that means that I've used the discard operator, 'cause I don't care about the group size. And I'm going to test for DayOfWeek dot Saturday or DayOfWeek dot Sunday,
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=96)** in which case, there's no discount at all. And you can see that what I'm doing here is switching on a tuple pattern. In this case, I don't care what the first value is, so I discard it. But the pattern lets me use the position of each value in this switch expression up here. And the first position is groupSize. Second is the day of the week. So let's keep on going. If the groupSize is between five and 10 on a Monday. So if it's greater than a week equal to five, and it's less than 10, and DayOfWeek is a Monday, then we'll give a 20% discount. If it's a Monday, and there are 10 or more people. So if we've got greater than 10, and DayOfWeek is a Monday then we will give a 30% discount. If the group is between five and 10, so we've got greater than equal to five and less than 10, and we don't care what day of the week it is otherwise, then that will be a 12% discount. And if the group is 10 or more, so we'll have greater than or equal to 10. And once again, we don't care what the date is. So if it's 10 or more, and it's not a Monday, because that condition's already taken care of right here, then we will give a discount of 15%.
>
> **[3:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=193)** Otherwise, the discount is zero. And also, let's make sure that the groupSize is greater than zero. Otherwise, we will raise an exception. So if the group is less than or equal to zero, and we don't care about the day of the week, then we are going to throw a new ArgumentException. And we're going to say that Group size must be positive number.
>
> **[3:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=226)** All right. And then down here, we have some test data with different group sizes and dates. So now let's write some code to test each of the conditions. So I'm going to write a foreach loop. And I'm going to loop over. So I'm going to have a var size and var date. And that's going to be in the TestDiscountData. So I'm going to get each one of these tuples in this array right here. And I'm going to write decimal discount is equal to GetGroupTicketPriceDiscount. And I'm going to pass in the size and the date. And then I will simply write out the results. So I'll write out The discount for a size dash person group on. And then we'll format the date. So we'll have date formatted as a day, a month and a single day name is. And then we'll put in discount. So now we have our test code. We're going to loop over each one of these tuples and write the output. So let's go ahead and open up our integrated terminal. Oh, looks like I got an error in there somewhere. Where's my error? Oops.
>
> **[5:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=319)** Oh, okay. Looks like, oh yeah, no, that's a, not a semicolon, that should be a comma. Here we go. All right. Do catch their compiler. Okay, let's go ahead and run this.
>
> **[5:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=336)** And let's make this a little bit larger. All right. And so sure enough, here we have our output. So for four person, that's zero. Seven people on a Monday, that's 20%. 20 people on a Monday, that's 30%. 15 on a Tuesday, that's 15%. And nine people on a Wednesday, that's 12%, right? Looks like the data is correct. So what's cool about this pattern is that we can use it on our custom types that support deconstruction. So I've used it in tuple in this case. But remember, custom types can also support deconstruction. We saw that earlier in the course. So let's go ahead and try it with our next example. So here in the next example, I have a structure down here, and it defines a 2D point with X and Y coordinates. And there's also a deconstruct method that returns the two coordinates as a tuple. And of course, we've got some test data. We've got these four points here. And this test data creates points within different quadrants of a graph. So what I'm going to do is create a function that is going to determine which quadrant a point is in and then return that value as a string. So I'm going to write a string expression called Classify. And that's going to take a point. And remember, that's going to be a switch, so I'm going to call point switch. And if both points are greater than zero, that's going to be the upper right quadrant.
>
> **[7:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=438)** And I'll just copy these. So if we've got less than zero on the X, that's going to be the upper left quadrant. If the Y is less than zero, and X is greater than zero, that is going to be the lower right quadrant. And then finally, we'll have the lower left quadrant if these guys are both less than zero. All right. Otherwise, it's just a point. And semicolon there, 'cause it's statement. So when the switch expression is evaluated on the point, that's going to call the deconstruct method here. That's going to return the tuple of two values which I then use as positional patterns. So let's uncomment the code that runs these tests right here. And we'll save that. And then we'll comment out our code that does the previous example. All right, so let's save. Let's go ahead and run. And when I run, you can see that each of the points is classified into which quadrant it falls into. So by using positional patterns, I can operate on multiple values that are either explicitly supplied to the switch expression or are obtained by using the deconstruct method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Cross-References:** earlier in (3), in the next (1)
> **Code Identifiers:** groupsize (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (2)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Analogies:** imagine (1)

#### [Relational patterns](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=0)** - The last pattern that we're going to look at is the relational pattern. You can use the relational pattern construct to compare the result of an expression to a constant value using the less than greater than or less than or equal to or greater than or equal to operators. So, let's look at our example. Here in the relational patterns folder, let's open up our code. (computer mouse clicking) So, suppose I need to figure out which quarter a given date falls within. And, I've got my switch expression here that I need to fill in to do so. So, this switch expression takes a date and then it's switches on the date month. Since I know that dates that fall within the first three months of the year are within Q1. And then the next three months are in Q2, and so on. I can build a switch expression that looks like this. So, I'm going to write greater than or equal to one (computer keyboard clicking) and less than or equal to three. (computer keyboard clicking) That's going to be Q1, outside the quotes there. All right and I can copy and paste these (computer mouse clicking) (computer keyboard clicking) and this will be Q2, Q3 and Q4. And so let's see, this is going to be greater than four and then less than equal to six and then seven and nine. (computer keyboard clicking) And then finally 10 and 12. And then I have my default handler that throws an argument out of range exception if a badly formed date is given.
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=97)** So, by using these logical operators I can easily categorize a given date into a quarter number. So, let's go ahead and try this out. And I've got some sample data right here. So let's un-comment these lines and you can see them calling get quarter from date with a couple of different date options that fall within different quarters within the year. So, let's go ahead and open up our integrated terminal. (computer mouse clicking) All right and then let's run this (computer keyboard clicking) and we can see that the dates are being categorized into the corresponding quarter numbers. Now, this type of logical expression also works with the regular is statement. You don't need to use a switch expression if it's too much for your purpose. So, let's take a look at another example. Let me make this smaller for a second. So, in this case, I want to see if a given date falls in the first half or the second half of the year. So, now I have a function called first or second half. And what I'm going to do is write a simple expression using the is expression. So, I'm going to write if, and then I have my argument which is the date right here. (computer mouse clicking) So, if DT is... (computer keyboard clicking) a date time, (computer keyboard clicking) where the month and I'm using the property pattern here remember. So, if month is greater than six, then I know that, that has to be within the second half. (computer keyboard clicking)
>
> **[3:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=191)** So, I'll write date is in second half. (computer keyboard clicking) Otherwise, else if... (computer keyboard clicking) DT is, (computer keyboard clicking) date time, where the month (computer keyboard clicking) is less than or equal to six, (computer keyboard clicking) then I'm going to write, (computer keyboard clicking) date is in the first half. (computer keyboard clicking) And you can see down here for my test data I've got a couple of sample dates. So, let's go ahead and comment out the first example. All right. And let's make this a little bit larger. Okay. And now let's run this. (computer keyboard clicking) All right and so the result shows that the first date is in the second half of the year and the other date is in the first half. So, this syntax might take a little getting used to but I'm sure that you can see how this is a lot more powerful than having to write out all of this logic without using patterns.

> [!info]- Semantic Content
>
> **Non-Speech:** (computer keyboard clicking) (16), (computer mouse clicking) (4)
> **CLI Commands:** make (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### [Pattern challenge](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=5)** - [Instructor] All right, it's time for a programming challenge. So for this challenge, we are going to use what we learned about pattern matching in this chapter to calculate the sales commission of a certain type of securities trade, consisting of either stocks or bonds. And so for this challenge, let's go into the PatternChallenge folder here in Start. So for this challenge, assume that you have the following classes defined. And you can do more than assume because I've given you the source code. And each of these represents a trade involving either a stock or a bond. So the base class defines the quantity and unit price for the trade. And then each subclass has properties for either the stock symbol or the bond name and bond duration. So for this challenge, you are going to create a class named CommissionCalculator with a method named PrintTradeCommission. This method will output the amount of the sales commission for a given stock or bond trade according to the following rules. And if we look in the Program file, we can see that we have some sample data here that creates new stock and bond trades. And then loops over each one and calls PrintTradeCommission. So here are the rules: A stock trade of zero shares should be caught and flagged as invalid. A stock trade less than $5,000 is a 0.1% commission. A stock trade that is more or equal to $5,000 is a 0.05% commission.
>
> **[1:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=100)** Any stock trade of 1,000 shares or more is a flat fee of $10. Any stock trade of 1,000 shares or more with a value of $10,000 or more is a flat fee of, let's scroll over, $5. Any bond trade, and we get to the bond trades now, so any bond trade of five years duration is $20, or $15 if the total trade value is $10,000 or more. Any bond trade of 10 years duration is $12. A bond trade of 20 years duration is $10, or $5 if the total is $5,000 or more. And a bond trade of any other duration, other than 5, 10, or 20 years, should be caught and flagged as invalid. So your program is going to take this data here, these example trades, as input. There's five stock trades and five bond trades. And you're going to write this function right here. And you can use it whatever method you want using what we've learned in this chapter. And you should throw exceptions for the exceptions we've talked about. Duration here and zero shares or so. And so, you're going to output the value in dollars of the trade commission. So, let's go ahead and run my finished version of the application. So we'll close this. And in the the Finished folder. Under PatternMatching. Let's go ahead and open our terminal. All right. And we'll collapse that down. And what I'm going to do is call dotnet run.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=194)** Let's wait a moment while the application runs. And once the application runs, we can see here in the output. Okay. So here are the results. And you can compare the results to your own. So you can see the results of the stock trade. And here's one that was caught because it was invalid. And here we can see that the bond trade was invalid. And it looks like we've calculated the commission of each one of these. So these all match up to the rules that I've specified, and this is what your output should look like, okay? So go ahead and spend some time on this challenge. And then I'll be back in the next video to explain my solution.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Versions:** 0.1 (1), 0.05 (1)
> **CLI Commands:** dotnet (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)

#### [Pattern solution](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=0)** - [Instructor] All right, let's take a look at how I solved this challenge. And remember, we had to use patterns to calculate the commission of a securities trade based on a set of rules. So let's go into the finished code, and we'll open up my program file. So here is the code that we had to run, and here are the rules that we had to follow, and these are the base classes that we had to work with. So let me open up my code and I'll show you how it works, and I'll collapse this down so we can see more of the code. So here in my commission calculator class, I have a method named CalculateTradeCommission, and remember that's called here from the PrintTradeCommission function. And so this CalculateTradeCommission takes a securities trade object as the argument. And I used a switch expression on that argument, along with various case guards, which we learned about earlier, to figure out the commission value based on each rule. And so what made this a little bit tricky was that you had to make sure that each of the rules were evaluated in order from the more specific to the more general, otherwise the more general ones would never be reached. So the first five lines of code handle the stock trades, and you can see that they progress from being very specific, so for example, in this case, we have when the quantity is zero for stocks, we throw in the exception,
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=94)** and the exception is that this is an invalid trade, it can't be zero shares. And then we go to the next case where, okay, the quantity is more than 1,000 and the value is more than 10,000. And that comes before checking for just the quantity more than 1,000, right? Because this one is more specific. And so if this one came first, then this condition would never be reached. So those are the stock conditions. And then the bond ones come next. So these five conditions handle the bond trades. And again, they follow a similar path of more specific to more general, which is followed by the argument exception here for an unknown trade type. So if the duration is not five, 10 or 20 years, obviously that's a problem. So the PrintTradeCommission method attains the result of the calculation, which is right here, and then prints the correct output string based upon the type of the actual trade. So if the trade is a stock trade, and remember we learned about the is operator earlier, then it uses this line of code to print out the value for the stock trade. Otherwise, if the trade is a bond trade, then we print out the corresponding line for the bond trade. And in the cases where the argument exception is thrown, if we go back to the main code, we can see that that's handled here. And so the exceptions for the zero shares and the bad duration, that's where this message gets printed out. All right, so how did you solve this problem?
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=188)** Were you able to build the switch expression to handle all the cases? Take a few moments to compare your code to mine. And remember it's not important that your solution matches mine. There are almost always multiple ways to solve any programming problem. What's important here is to see how others have solved a problem and then compare it to your own and then learn from it.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Object-Oriented Programming Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with indexers](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=0)** - [Instructor] In this chapter, we're going to look at some of the advanced support that C Sharp provides for working with object oriented programming constructs. And we're going to start off with a relatively simple feature called a class indexer. Let's go ahead and open up the indexers folder here in our start area. So a class indexer gives your class the ability to access its content as if it were an array. And you can use this feature to retrieve as well as set content. This kind of convenience feature is useful when your class is used to encapsulate an internal collection of data that you don't want to directly expose to the class consumers. So let's take a look at a simple example and it should help illustrate how this feature can be used to simplify your code. So let's imagine that we had a class named stock record and the purpose of this class is to represent a week's worth of stock trading data, the average closing price for the week, the highs and low values and so on. The data is represented internally by an array of decimal values. But we want to encapsulate this implementation detail inside the class. For convenience, we want to let consumers of this class access the individual stock values for the week, but we don't want to expose the way that that list is implemented. So we can do this by using a class indexer. So first, what I'm going to do
>
> **[1:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=92)** is define a length property which is a good practice so that consuming classes can check to see how much data is in the class. So I'm going to define a public integer named length and that's going to just simply return the length of the prices array. Because again, if we scroll up, prices is where all the stock prices are kept. Next, I'm going to declare the indexer and the indexer is very similar to a property. What I'm going to do is declare this as a decimal value and then I use the this keyword and then inside brackets, I'm going to declare an integer index type. And the indexer is basically going to just simply return the value of the prices array at that index. So now notice, this indexer only has a getter. There's no setter so the values inside the list can't be changed. Now I could add a setter if I wanted to to make the values settable, but for this example, I'm not going to do that. Okay, now let's open the code for the main program. Now there's already some code here to create a new stock record and exercise some of the properties. So let's add some code to access the new indexer that we just added. What I'm going to do is write Console.WriteLine. And, and I'm going to write out that the number of days of trading data is going to be stock1.Length.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=190)** And now, let's access the stock data using the indexer method. So I'm going to write a for loop and I will loop starting at zero, over the length of the array.
>
> **[3:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=210)** And I will get the value at that index. And I'm going to access this object. This is the actual class object and notice I'm accessing it as if it were an array itself. And then I will just simply write out the value there and I'll write value and that's going to be the whoops. I have to declare the variable, sorry, decimal, call that val. There we go. And we'll wrap the value and we'll format that as currency. And then after all that, we'll just write out a blank line. So now let's run what we have. Okay, so I'm going to, oh, looks like I have a little bit of an error here. Let me just fix this really quick. Oh, forgot to put the variable declaration in there. All right. There we go, and okay. Looks like that's all fixed. All right, so let's go ahead and run this. I'm going to open this up in my terminal and let's make this a little bit bigger, and I'll call dotnet run. So, when the program runs, you can see in the output of the class properties, so here are the average, the high and the low, and then here is the length property right here that's being accessed. And then we have all the values that are being accessed by the indexer.
>
> **[5:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=303)** So we're looping over all the values and printing them all out. So that's pretty straightforward, but what's great about class indexers is that you can override them just like any other method in your class. In fact, indexers don't even have to use integers. So let's go back to our class and what I'm going to do, go back here. Let's make this a little bit smaller. All right. So I'm going to overload the indexer and I'm going to let the consumer of this class pass an index value that is the name of the particular trading day from Monday to Friday. So once again, I'm going to create a public decimal property named this but instead of an integer index, I'm going to have a string and it's going to be called the day argument and there's going to be a getter for this. And so if the day is equal to Monday, then we're going to return prices at zero. And I'll just copy and paste this just for simplicity. So it's Monday, Tuesday, Wednesday, Thursday, Friday. So let's go ahead and fill these in. Monday, Tuesday, Wednesday, Thursday, and Friday. And that's going to be the prices at zero, one, two, three and four. And if none of those work, then we'll just simply return zero. So in this case, I'm using a string to access the index
>
> **[6:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=397)** into my list of stock prices for the week. So now let's go back to our test code and let's update our test code to use these new string values. So let's go ahead and access Monday's value and that is going to be stock one and we're going to index it using the string Monday and we will format that as currency and I'll copy and paste. And then we'll do the same thing on Wednesday.
>
> **[7:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=437)** Okay, and then let's comment out the previous example. All right. Okay, now let's run this again. Make this a little bit larger. And now you can see the results of indexing the class content using a string. Now of course, in real world code, you would want to make sure that you're checking the index value to make sure it's not out of range and maybe raising an exception if that happens. So for example, if the consumer of this class passed a string that didn't correspond to a real day name, I could throw an exception. So for example, if you go back here, rather than returning zero, what I would do is I would throw a new index out of range exception. And what I would do is I would have a string that said that the day given is not a valid index to stock record.
>
> **[8:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=503)** And now, let me collapse that down. So now I have an exception that says, hey, the day that you gave me is not valid. Let's go back to our program code and now let's try to access a non-existent day. So we'll access blurg day. All right. Okay, and then let's try the code one more time. And sure enough, you can see that we're getting the blurg is not a valid index to stock record exception. So by using a class indexer, you can provide easy access to the values of your encapsulated collection without having to expose the actual collection itself.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), dotnet (1)
> **Analogies:** for example (2), imagine (1), similar to (1), just like (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll up (1), open the (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Overriding ToString()](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=0)** - [Instructor] You're probably already familiar with the fact that just about everything in .NET is an object and that all objects are descendants of the object base class. As a result, all objects in .NET inherit the methods of the base class, some of which I've listed here. Now, this isn't all of the methods that are provided by the base object class. I've only listed some of the main ones. And in this particular example, we're going to specifically take a look at the ToString method. The main purpose of the ToString method is to return a string representation of that object. So let's take a look at some code to see how that works. So here in VS Code, let's go ahead and open up in our ToString folder, the program code. So built in .NET types like numbers, for example, implement the ToString method, which enables them to return their content as a string. So you can see here, I have a floating point number named X and then I call x.ToString on that number and then I'm going to write out the string. So let's go ahead and run this code. And I'll bring this up in the terminal and we'll run this using dotnet run. And sure enough, you can see that when I run this, here's the output right here. So the number 42.0 is represented as the string 42. So custom class type definitions can override this method to provide similar information
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=93)** about their classes. Basically, the guideline here is to provide enough information about your object for it to be useful and meaningful in a situation such as debugging. If you don't override the method, then .NET will provide a default implementation of it for you but it's a bare bones result that only contains the name of the class. So let's take a look at an example. So here I have a custom type defined that represents information about a person, including the first and last name, along with an age value. So I'll add some code that creates a new person object. And we'll provide a first name and a last name and an age, whoops. So now, what I'm going to do is use the WriteLine function which will automatically cast my method. It will call the ToString method on my class. So let's go ahead and write this out. And we'll call it on the P object. And let's go ahead and run this. So back, oh, after I got the terminal open. So let's run this again. And you can see that when I run this, it just shows the name of the class.
>
> **[3:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=185)** Now that's not particularly useful. So let's override the function to make it a little bit better. So let's go back to the code. And what I'm going to do is write my own function. I'm going to call that public override and it returns a string and the ToString function, it fills in this template for me, but I'm just going to make a little bit of a Lambda function here. So I'm going to return a formatted string and that is going to contain the text person and then first name, which is going to be, not surprisingly, the first name and then the last name, and then the age. So now we have our ToString function and it returns a nicely formatted string using all of the available properties. So let's go ahead and save this and let's run it again. And actually, let's go ahead and comment out the first example. No reason to see that. There we go. And now in the result, you can see that we've provided a lot more detail about this instance of the class. In general, whenever you define a custom class, you should always override the ToString method because it will be used in all kinds of troubleshooting and debugging scenarios.

> [!info]- Semantic Content
>
> **Env Vars:** net (4)
> **CLI Commands:** make (2), dotnet (1)
> **Tools:** terminal (2), vs code (1)
> **Analogies:** for example (1), such as (1)
> **Versions:** 42.0 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)

#### [Equality testing](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=0)** - [Instructor] Sometimes when you define a custom class, you're going to need to be able to compare instances of that class to other instances to see if they have what's called value equality. In other words, you want to see if the values of all the properties of the two instances are the same. And in this example, we'll see how to do that. So let's open the program code in the Comparing folder. Now, by default, .NET doesn't support comparing two custom types to each other in this way. In this example, I have a class named Point2D, which contains X and Y properties along with some code that creates two points and then compares them using the equals function and the double equal and not equal operators. Now let's go ahead and just run the code as it is. So I'm going to right click and open up the integrated terminal. Alright, and let's run this. And if I run the code as is, you can see that the result indicates that they are not equal to each other even though they clearly have the same values, because .NET is comparing the object references. It's not comparing the properties. So if I want to compare two classes to each other based on values, then I need to override some of the base object class methods. So let's go ahead and do that. So let's go ahead and minimize this. First, what I'm going to do is scroll down here,
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=93)** and I'm going to implement the IEquatable interface on my Point2D class. And that is going to give me a type specific version of the equals method. So I'll go ahead and put my type definition in there. Okay, now I need to override some methods. First, let's go ahead and override the base class version of the equals method in the object class. So I'm going to override. And this is the Equals function. And I don't want the default version. There we go. So I'm just going to simply return my type specific version of Equals. So I'm going to cast my object as a Point2D. So now let's write that function. So the public bool Equals function, which is going to take a Point2D. And this function here, this Equals function is what is required by this interface. So I'm going to check to see that the argument is not equal to null, because obviously that's bad. And then, I'll check to see if my X property is the same as the argument's X property, and Y is equal to p.Y. So I make sure the argument's not null, and then I compare X and Y to the X and Y properties of the argument
>
> **[3:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=187)** to make sure that they're the same. Finally, I need to override the GetHashCode function. So I'm going to override int GetHashCode. And once again, I'm going to implement this as a Lambda. Now to make things simple, I'm going to just get a hash code, a tuple of the two properties, rather than calculate my own hash. So I'm going to have X and Y, and I'm going to call GetHashCode on that. And .NET requires you to override this function whenever you override the Equals function. Now, you could calculate your own hash code. I find it easier just to simply put the properties into a tuple and call .GetHashCode on that. So, next I'm going to override the double equals and not equal operators. So those are static bool operator, and that's going to be the double equal operator. And that's going to take two arguments. It's going to be p1 and p2.
>
> **[4:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=261)** So first, let's check to see if p1 is null. And if p1 is null, let's check to see if p2 is null. Because if they're both null, well, then clearly they're equal to each other because two nulls are equal. If only one of them is null, well, then clearly they're not equal. So that's going to return a false. And then finally, let's call return p1.Equals(p2). Now I need to implement the not equals operator.
>
> **[5:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=301)** And that is also going to take two Point2D objects. And that is simply going to return p1 is equal to p2, but the negation of that, right? To see if they're not equal. All right, so let's recap. I've got my two Equals functions. I've got my GetHashCode, which is required. And then I've got the two operators, double equal and not equal. So now, when I run this code on these two points which clearly have the same property values, this should be true. This should be true. And this should be false. So let's try this again. And just to refresh your memory, we have false, false, and true. So now let's run this. Oh, Oops! I've got a little bit of an error there. And it looks like it's on line 27. Oh! That should be a return true. Sorry about that. Let's try it again. And now we have true, true, and false, right? Because if we scroll back up, we can see that clearly p1 is equal to p2 value-wise. And the operator equals should be the same. And clearly they're not different, so that returns false. And let's see. Let's add an example just to make sure that we're doing this correctly. Let's add an example of two null points.
>
> **[6:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=396)** So I'll declare p3 equals null, and p4 is equal to null. And then let's go ahead and write out the result of p3 is equal to p4. And let's run this again, because two nulls should be equal to each other. And yep, sure enough they are. That situation equally as well. Now this might seem like a lot of work. And for custom classes, it kind of is, right? I mean, you have to override these methods and the GetHashCode... What is that? Starting with C# 9, there's actually a new reference type called a record, which alleviates you from having to write all this code. And we'll take a look at how records work in a separate video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Env Vars:** net (3)
> **UI Navigation:** open the (1), scroll down (1)
> **Tools:** terminal (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Using records](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=0)** - [Instructor] Starting with C# version nine, a new reference type was introduced called a record. And records have multiple benefits. A record defines a reference type that is intended to be used to represent data. Specifically, they are mainly used to hold data that is intended to be immutable. In other words, data whose values in the record won't be changed by the code. It's possible to create record types that immutable. But that's not really their intended purpose. Records provide default implementations for the Equals, ToString and GetHashCode functions, which I'm sure you remember from the example where we saw how to compare two classes to each other. Records handle all of that for you. And they also provide default implementations of the double equal and not equal operators as well. Records also support an operation called non-destructive mutation, using the with keyword. And we'll see how that works in a moment. By using records, you can avoid having to write all that code that handles string representation and comparing equality and all that stuff and just focus on your program logic. So let's go ahead and open up the records example. Right, so here in the code, let's go to the Start folder and Records. Now, suppose I want to define a record that holds temperature information for a given day. So what I'm going to do is scroll here to the bottom, because top level statements have to come before all the class definitions.
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=93)** And I'm going to declare a record like this. I'm going to declare it as if it was a class. But instead of the [[Microsoft Word|word]] class, I'm going to use the word record. So I'll declare a public record named DayTemperature. And it's going to have a decimal value for the high and a decimal value for the low. And that's it. I mean, that's literally all I need to do. That one line of code creates a new type with properties for the high and low values. It implements the default methods I talked about earlier. It implements Equals, ToString, GetHashCode. It provides default string representation. It does all of that for you. Just that one line of code right there. So now let's create some instances of this record. So I'm going to scroll back up. And let's create some day temperatures. So we'll make a new DayTemperature, and we'll give, let's see, 29.6 and 24.1. And let's make a couple of copies of these. Oh, I should give these names actually. So we'll call that temp1. And that'll be temp2 and temp3. So now we have some instances of our day temperature record. And again, yeah, it's just that one line of code. I didn't have to declare any properties. I didn't have to declare a constructor. It's just that one line of code.
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=186)** So now let's see what we get from this. Let's try out the default ToString implementation. So I'll go ahead and write this out, and that's going to be, let's use temp1 for this. So let's pause here and run what we have. So I'm going to open this up in my terminal. All right. And let's run this. And when I run this, you can see that these string output automatically includes the generated property names and the values along with the record type. Now remember, we had to do this by ourselves in the overriding ToString example. So now let's add some code to try out some of the builtin equality testing. So let's see if, let me make this a little bit smaller. Let's see if temp1 is equal to temp2. And if we look, we can see that, yeah, they are the same. And in fact, actually, let me change some of these values, because I want to make some variety here. So we'll make that 30.1. And we'll just choose some other values. And then we'll make temp3 the same as temp1. So temp2 and temp1 are not equal to each other. So that should be false. And then let's try comparing temp1 and temp3. And those are the same according to their values. So now let's run that. And when we run that, yep, sure enough,
>
> **[4:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=281)** temp1 is not equal to temp2, but temp1 and temp3 are equal to each other. So now we have default equality without having to write any additional code. Now, of course, just like with classes, you can add your own properties and methods. So let's go ahead down here. And let's add, inside of the record, definition. Let's add public decimal. Let's have an Average. And I'll just have a getter for this. And it's going to return high plus low divided by two. Now let's add some code to output that value. And we'll simply write out temp1 dot Average. Okay, now let's run this again. All right. And when I run this, so notice that, yeah, we output the Average. But also notice that the existing code that outputs the string representation now has the average property included by default automatically. I didn't have to change anything. The compiler just generated the updated ToString function for me. Okay. Let's try one more thing. Let's take a look at the immutability feature. So if I try to change a property value, I'm going to try to change temp1, the high property, to a new value. So let's go ahead and try to run this. And that little red squiggle kind of gives you a hint I'm going to get an error here. But if I run this, you can see it says, Init-only property or indexer can only be assigned in an object initializer or on this or base or blah, blah, blah.
>
> **[6:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=377)** In other words, it's read only. I can't mutate the data that's in the class, because the record is immutable. Now, I can use what's called the with keyword to create a new record with some change data like this. So I can make a new DayTemperature, and I'll call it temp4. What I can do is I can copy over all the existing values from temp1. So I'll say temp1 with. And then I'll just simply change the properties I want to change. So I'll say high is equal to 32.0m. So this automatically gives me all the existing property values and just the ones that I want to change. So then let's go ahead and write that out and make sure that it worked. And let's comment that back out, because that's clearly an error. And now let's run this again. And now you can see here, this is my new temp4 variable. And sure enough, the high value has been replaced with the 32 that I entered into the code. So records are a really great addition to the C# language, because they make working with data-centric classes so much easier. Defining them is more concise. Common operations like equality testing and string formatting are automatic. And they prevent accidental changes to the data by being immutable by default.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (9)
> **Versions:** 29.6 (1), 24.1 (1), 30.1 (1)
> **Definitions:** in other words (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Conclusion](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=0)** - [Instructor] Alright, that brings us to the end of the course. I really hope you enjoyed learning along with me about some of the more advanced features of the C# programming language and maybe you've already thought of some ways that you can apply what you've learned here to some of the projects that you're working on. I have a few suggestions on where to go next to learn more about using C# with .NET. So if you're interested in learning more about using C# with the .NET framework, then check out [[C- and .NET Essential Training]]. To learn more about some of the key features of C#, take a look at C#: Events, Delegates and Lambdas and [[C- Interfaces and Generics]]. And if you're interested in using C# to work with data, then have a look at C#: Collections. The C# language continues to improve and evolve, so it's a good idea to stay up-to-date with the language by visiting the C# documentation at the [[Microsoft]] website. You can find that website right here at this link and this website contains all you could ever want to know about the C# language from the documentation to samples and all kinds of educational materials. Thanks again for watching and I hope to see you again soon in another one of my courses. Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Env Vars:** net (3)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-c-sharp-language-features-2491189)

## Skills Covered

- C#

## Path Context

### In [[C- Excellence- Architecting High-Performance Solutions]]
← [[C- Applied Data Structures]] | **3 of 6** | [[Advanced C- Object-Oriented Programming]] →

## Appears In

- [[C- Excellence- Architecting High-Performance Solutions]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#

---

[↑ Back to top](#)