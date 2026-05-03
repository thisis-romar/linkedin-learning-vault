---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: c-sharp-algorithms
url: "https://www.linkedin.com/learning/c-sharp-algorithms"
level: Advanced
updated: 12/8/2023
learners: 31696
skills:
  - Algorithms
  - C#
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHZokrKJL6ULg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702603208967?e=2147483647&amp;v=beta&amp;t=qrRiP3Zr6KY9yBSihnpoJKwirgkPaBp1r93ksUAtNb0"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Excellence- Architecting High-Performance Solutions]]'
  - '[[Getting Started as a C- Developer]]'
  - '[[Software Development Fundamentals]]'
prev_courses:
  - null
  - '[[C- and .NET Essential Training]]'
  - '[[Learning C-]]'
next_courses:
  - '[[C- Applied Data Structures]]'
  - '[[C- Delegates, Events, and Lambdas]]'
  - '[[Learning Git and GitHub]]'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":1,"total":6,"prev":null,"next":"C- Applied Data Structures"},{"path":"Getting Started as a C- Developer","position":4,"total":9,"prev":"C- and .NET Essential Training","next":"C- Delegates, Events, and Lambdas"},{"path":"Software Development Fundamentals","position":7,"total":10,"prev":"Learning C-","next":"Learning Git and GitHub"}]'
path_count: 3
tags:
  - course
  - topic/software-development
  - skill/algorithms
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C%20Sharp%20Algorithms.md)

![C Sharp Algorithms](https://media.licdn.com/dms/image/v2/D4D0DAQHZokrKJL6ULg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702603208967?e=2147483647&amp;v=beta&amp;t=qrRiP3Zr6KY9yBSihnpoJKwirgkPaBp1r93ksUAtNb0)

# C Sharp Algorithms

> Algorithms are one of the fundamental pillars in every software application, and once you understand them, you can create more efficient and maintainable programs. In this course, instructor Kathryn Hodge uses instruction and hands-on practice to show you how to create better C# programs by using efficient algorithms. Kathryn discusses what makes an algorithm effective, as well as how to make info

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-algorithms) | Advanced | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (6 videos)
  - [Improve your C# applications with efficient algorithms](#improve-your-c-applications-with-efficient-algorithms)
  - [Introducing CoderPad challenges](#introducing-coderpad-challenges)
  - [What is an algorithm?](#what-is-an-algorithm)
  - [How to optimize an algorithm](#how-to-optimize-an-algorithm)
  - [Optimize an algorithm in C#](#optimize-an-algorithm-in-c)
  - [How to describe the time complexity of an algorithm](#how-to-describe-the-time-complexity-of-an-algorithm)
- [**1. String Algorithms**](#1-string-algorithms) (5 videos)
  - [Validate strings in C#](#validate-strings-in-c)
  - [Normalize strings in C#](#normalize-strings-in-c)
  - [Parse and search strings in C#](#parse-and-search-strings-in-c)
  - [Create algorithm-driven strings in C#](#create-algorithm-driven-strings-in-c)
  - [Solution: reverse each word](#solution-reverse-each-word)
- [**2. Array Algorithms**](#2-array-algorithms) (5 videos)
  - [Linear search arrays in C#](#linear-search-arrays-in-c)
  - [Binary search arrays in C#](#binary-search-arrays-in-c)
  - [Aggregate and filter arrays in C#](#aggregate-and-filter-arrays-in-c)
  - [Reverse an array in C#](#reverse-an-array-in-c)
  - [Solution: rotate an array](#solution-rotate-an-array)
- [**3. Linked List Algorithms**](#3-linked-list-algorithms) (4 videos)
  - [What is a linked list?](#what-is-a-linked-list)
  - [Common linked list operations in C#](#common-linked-list-operations-in-c)
  - [Linked list algorithms](#linked-list-algorithms)
  - [Solution: Sum contents of a linked list](#solution-sum-contents-of-a-linked-list)
- [**4. Queue and Stack Algorithms**](#4-queue-and-stack-algorithms) (9 videos)
  - [What is a queue?](#what-is-a-queue)
  - [Standard queue operations in C#](#standard-queue-operations-in-c)
  - [Queue algorithms: Generate binary numbers](#queue-algorithms-generate-binary-numbers)
  - [What is a stack?](#what-is-a-stack)
  - [Basic stack operations in C#](#basic-stack-operations-in-c)
  - [Stack algorithms: Theorizing an algorithm](#stack-algorithms-theorizing-an-algorithm)
  - [Stack algorithms: Implementing next greater element](#stack-algorithms-implementing-next-greater-element)
  - [Stack algorithms: Matching parentheses](#stack-algorithms-matching-parentheses)
  - [Solution: evaluate reverse polish notation](#solution-evaluate-reverse-polish-notation)
- [**5. Algorithms for Hash-Based Structures**](#5-algorithms-for-hash-based-structures) (5 videos)
  - [Hash-based structures in C#](#hash-based-structures-in-c)
  - [Dictionary and HashSet operations in C#](#dictionary-and-hashset-operations-in-c)
  - [Leverage the HashSet type in C# algorithms](#leverage-the-hashset-type-in-c-algorithms)
  - [Use the Dictionary type in C# algorithms](#use-the-dictionary-type-in-c-algorithms)
  - [Solution: detect a cyclic linkedlist](#solution-detect-a-cyclic-linkedlist)
- [**6. Tree Algorithms**](#6-tree-algorithms) (5 videos)
  - [What is a tree?](#what-is-a-tree)
  - [Create a binary search tree in C#](#create-a-binary-search-tree-in-c)
  - [What are tree traversals?](#what-are-tree-traversals)
  - [Using recursion to implement tree traversals in C#](#using-recursion-to-implement-tree-traversals-in-c)
  - [Solution: find height of binary tree](#solution-find-height-of-binary-tree)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue optimizing algorithms](#continue-optimizing-algorithms)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Improve your C# applications with efficient algorithms](https://www.linkedin.com/learning/c-sharp-algorithms/improve-your-c-sharp-applications-with-efficient-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/improve-your-c-sharp-applications-with-efficient-algorithms?u=76281980&t=0)** - [Kathryn] [[Algorithms]] are one of the fundamental pillars in every software application. In order to create more advanced and sophisticated applications, it's important to hone in on the algorithms your software is using. Some are more efficient than others in terms of time and space complexity. And it's essential to understand the speed implications of the software you're creating. It's also important to understand the assumptions you're making about the data you're working with. Otherwise, your algorithm might not work as expected. Hi, I'm Kathryn Hodge and I'm a software engineer. In this course, we'll look at how to create more efficient programs by exploring different types of algorithms. Many of these algorithms are built right into the C# language and they can be a great choice. However, most of the time you'll need to create a custom algorithm in order to work with your data in exactly the way you want. In this course, we'll explore what makes a given algorithm effective as well as how to make informed assumptions about your data in order to speed up that processing time. We'll also discover how to leverage different [[Data Structures]] in order to make your algorithms more efficient. Without any further delay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Data Structures]] (1)
> **CLI Commands:** make (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [kathryn] (1)

#### [Introducing CoderPad challenges](https://www.linkedin.com/learning/c-sharp-algorithms/introducing-coderpad-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/introducing-coderpad-challenges?u=76281980&t=0)** This course includes interactive code challenges that appear when you clicked on the challenge links in the course's Table of Contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four main areas: Instructions, a console for output. A code editor for your answer, and another code editor to see how your code is used. You can use these drag candles to allocate space as you'd like. Let's complete this coding challenge. There are comments in the starting code showing you where to put your solution. Let's implement it. When you click the "Test My Code" button, you'll see a message indicating whether your code returned to correct results. It looks like our implementation is correct. Let's change the code to something that fails. In the output, we get a failure message. Now, if you're stuck,
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-algorithms/introducing-coderpad-challenges?u=76281980&t=92)** there are ways you can ask for help. The ShowExpectedResult and ShowHints variables determine whether you can see the expected results in any hints. You can change them to true to control the output.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-algorithms/introducing-coderpad-challenges?u=76281980&t=112)** In the console, we now see the expected results and a hint on how to implement the solution. The code editor in the lower right shows how your solution is used. You can change this code to experiment with different test cases. Let's make the largest number 30. In the console, the new expected result is 30. When you finish each code challenge, return to the course and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)

#### [What is an algorithm?](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-an-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-an-algorithm?u=76281980&t=0)** - [Instructor] An algorithm is a series of defined instructions that perform some task. For example, we can break apart the task of making a sandwich into an algorithm. The first instruction would be to retrieve the ingredients as well as any tools, such as a knife. Then you might slice the bread and spread mustard or mayo on the sandwich. Next, you would place ham and cheese on the sandwich. Then combine the pieces of bread together, making your sandwich complete. Most of us have made many sandwiches in our lifetime so we don't think about each individual step that needs to occur in order to perform the task of making a sandwich. However, a computer is different. Every step must be laid out in order to complete a software-based task. Given this, in C#, almost everything you create is a part of some algorithm. Every line of code you write is an instruction that is a step in achieving some task. It might be to find the even numbers in an array or to validate whether a string has certain properties. There are also many different sets of instructions that complete the same task. Some sets are more efficient than others, but they all have defined instructions that set out to complete a task. That's what makes an algorithm an algorithm.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [How to optimize an algorithm](https://www.linkedin.com/learning/c-sharp-algorithms/how-to-optimize-an-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/how-to-optimize-an-algorithm?u=76281980&t=0)** - [Instructor] There are many different ways to complete a given task. As such, there are many different [[Algorithms]] to solve a problem. Some algorithms are more efficient and others are less efficient. For example, with our sandwich algorithm, one way to make a sandwich is to go to the store for each ingredient. You make multiple trips to the store and you start making the sandwich after gathering all the ingredients. Before, we assumed we had all the proper ingredients and required tools in the kitchen. By making this assumption, we were able to save time by not running to the store. The same is true for algorithms. To make an algorithm more efficient, you have to make an assumption about your data. You might assume your data is sorted or that it will only contain integers or strings. Maybe it will only contain positive integers or strings with only alphabetical characters. With these assumptions, we can skip steps, normalizing the string or for the sandwich analogy, running to the grocery store. This makes our algorithms more efficient. However, it's very important to understand what assumptions your algorithm is making. If you make a wrong assumption about your data, the algorithm will likely not perform the task as expected. A slow working algorithm is always preferred to a fast algorithm that isn't trustworthy and can spit out a wrong response.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-algorithms/how-to-optimize-an-algorithm?u=76281980&t=94)** That's why it's essential to make informed assumptions about your data, and you can leverage these assumptions to optimize your algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5)
> **CLI Commands:** make (6)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Optimize an algorithm in C#](https://www.linkedin.com/learning/c-sharp-algorithms/optimize-an-algorithm-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/optimize-an-algorithm-in-c-sharp?u=76281980&t=0)** - [Instructor] While studying algorithmic theory is important, it's vital to apply the theory to practice. Let's modify a C# algorithm and make it more efficient. In this sample code, we have an algorithm called findMaximum. This finds the largest of three numbers. If there are duplicate entries, we still return whatever the maximum is. You can find it in the exercise files of this course. Now inside the algorithm, we do several comparisons in order to find that maximum. We can actually eliminate some of these comparisons and make our algorithm more efficient using assumptions. On the first line of the algorithm, we check if A is greater than B. Then later on, we check the opposite, is B greater than A. Instead of doing multiple checks with each input, what if we kept track of the maximum using a variable? Let's create a new function with our refactor. Static int, we'll call it findMaximum2 and it will take in those three numbers. The value of the max will start off at A. Then we'll compare B to the max. If B is greater than the max, then we'll set the max to B. In the previous implementation, we had to add checks for if A and B or A and C were equal. With this implementation, it doesn't matter
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-algorithms/optimize-an-algorithm-in-c-sharp?u=76281980&t=93)** because the value is already stored in the max variable. At this point in the execution, the max variable contains whatever the maximum of A and B is. To check whether C is greater, we just need to add one more comparison. If C is greater than the max, then we'll set the max to C. Now the maximum variable contains the maximum of A, B, and C, and we can return it from the function. Let's test our new algorithm's implementation. To run the code, we have a few different options. We can run it in the terminal with dotnet run. In the output, we get the maximum for each function call. Another option is to set up a run configuration with your IDE. I'm using VS Code and this is the configuration that will run your application as a console application with the output to the integrated terminal. Using a run configuration allows you to add break points to your code. Let's put a break point on line 25. To run it, we'll use the play button. The program's execution stops on line 25. We can see the values for each of our variables at this point in the execution. Then we can walk through the algorithm
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-algorithms/optimize-an-algorithm-in-c-sharp?u=76281980&t=188)** using the step over function. The max is reset to B and the max is set to C. Then we return it. In the terminal, we see three. We'll stop it for now. No matter how you run your code, you'll get the maximum for each set of values in the output. With the new implementation, we did only two comparisons per call. The code is also more readable with the defined variable and less comparisons. With this algorithm, we use the assumption that the max variable will contain the maximum for that point in the program's execution. When we check the max with C, we assume that the max variable holds the maximum of A and B. This allows us to do less comparisons and optimize the algorithm.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2), dotnet (1)
> **Tools:** terminal (3), vs code (1)
> **Code Identifiers:** findmaximum (1), findmaximum2 (1)
> **Exercise Files:** sample code (1), exercise files (1)
> **Env Vars:** ide (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [How to describe the time complexity of an algorithm](https://www.linkedin.com/learning/c-sharp-algorithms/how-to-describe-the-time-complexity-of-an-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/how-to-describe-the-time-complexity-of-an-algorithm?u=76281980&t=0)** - [Instructor] Some [[Algorithms]] are more efficient than others and we often describe an algorithm sufficiency using Big-O notation. Big-O notation allows us to compare algorithms independent of input size. For example, let's say, we wanted to compare search algorithms. If the item we're searching for will always be the first or the last element of the list, we can say it takes constant time or O of one time. No matter what the input size is, we just have to check the first and last element to find our answer. If the item we're searching for is somewhere in the list but we don't know where, we might have to check every single element. In the best case, the item we're looking for would be the first item we check. In the worst case, the element would not exist in the list and we'd have to check every single item. Most algorithms have a best case and worst case performance time and they're often not the same. For this search algorithm, the best case would be constant time. The first item we check is the item we're searching for. The worst case would be linear time. As the input size increases, the search time increases. With Big-O notation, the worst case would be O of N where N is the input size. In deciding which algorithm to use, we often use the worst case time complexity
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-algorithms/how-to-describe-the-time-complexity-of-an-algorithm?u=76281980&t=94)** as a deciding factor. However, if the worst case happens only 5% of the time, then it might be useful to consider the best case as well. The more informed assumptions we're able to make about our data, the more efficient we can make our algorithms. With the first search algorithm, we assume that the item we're searching for will be the first or last element. This cuts the best case and the worst case down to constant time. With the other algorithm, we do not make this assumption which lengthens the algorithms worst time to O event. Some other common time complexities and algorithm can have are logarithmic or O of log n, an exponential, or O of N squared. Constant time is the most efficient out of all of these with N squared being the least efficient. With N as a generic input size, we're able to compare these notations in terms of efficiency. We also use this notation to describe space complexity. Does the algorithm use constant space or as much space as the size of the input? This can be another factor in deciding which algorithm to use to complete a task. However, no matter how efficient your algorithms are, Big-O notation allows you to compare them, regardless of input size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (7)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. String Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [Validate strings in C#](https://www.linkedin.com/learning/c-sharp-algorithms/validate-strings-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/validate-strings-in-c-sharp?u=76281980&t=0)** - [Instructor] One type of algorithm is a validation algorithm. You can validate whether a given input string has certain properties or attributes. For example, you can create an algorithm that checks if a string has all uppercase or all lowercase letters. You can also create an algorithm that validates whether or not the string has all alphabetical characters, or if it has at least one number. For a validation algorithm, the output is a Boolean, either true or false. The string either has the given properties, or it does not. Let's try creating some validation [[Algorithms]] in C#. Now there are several tools in the standard library that can help us out. We can check whether a string is all uppercase using the characters Upper function. Let's create a function called isUppercase. This is a validation algorithm, so it will return a Boolean, and we need a string to validate, so it will take in a string. In the C# standard library, there's a tool called [[Language Integrated Query (LINQ)|Linq]]. Linq is a uniform query syntax that makes it easy for us to work with data in C#, it can also make your code more compact and readable, in fact, to validate whether a string is all uppercase takes only one line of Linq code.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-algorithms/validate-strings-in-c-sharp?u=76281980&t=95)** We can access the all function on the input string, and this will return a Boolean based on whether or not all the characters in the string meet a given condition. The condition we want to check is whether the characters are all uppercase. We can input that condition with the static isUpper method from the char struct. And that's it! If all the characters are uppercase, then this function will return true, otherwise it will be false. Many beginner programmers will wrap the statement in an if else. They'll say, if this is true, then return true, otherwise return false. This if statement is actually not needed because input All returns a Boolean and it returns the Boolean we want our function to return, so if you see something like this, you can refactor it into a single liner with just that. We can also do the same for lowercase. Static Boolean isLowercase, and pass in that string. We'll use the all function, and instead of IsUpper, we'll use IsLower. In fact, there are lots of different checks we can make. With IsLetter, we can check that the string only contains letters, and with IsDigit, we can check it only contains digits.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-algorithms/validate-strings-in-c-sharp?u=76281980&t=191)** These are some other examples of validations you can perform to determine whether a string has a set of properties or not. Let's try out these two validation algorithms.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-algorithms/validate-strings-in-c-sharp?u=76281980&t=220)** We do two calls to IsUppercase and two calls to IsLowercase. Let's run it. False, True, True, False, and this is what we expect. The string with all uppercase letters is validated as IsUppercase, and the string with all lowercase letters is validated as IsLowercase. With these algorithms we were able to validate an all or nothing property. We can also validate more specific properties, such as if the string has at least one digit or at least one uppercase letter. This can be especially useful if you need to create an algorithm to validate password complexity. Let's create a password complexity validator that validates whether a string has at least one number, one uppercase letter, and one lowercase letter. We'll call it IsPasswordComplex. Instead of using the All method, we can use the Any method. The Any method will return true, as long as any character in the string meets the inputted requirement. Our requirements are one uppercase, one lower case, and one number, let's add those in now. Here, we call Any with each requirement,
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-algorithms/validate-strings-in-c-sharp?u=76281980&t=314)** then we use the and operator to link them into a single expression. Let's try it out.
>
> **[5:43](https://www.linkedin.com/learning/c-sharp-algorithms/validate-strings-in-c-sharp?u=76281980&t=343)** Given our requirements, only the first input, or the first password should pass. We'll also comment out these other lines.
>
> **[6:01](https://www.linkedin.com/learning/c-sharp-algorithms/validate-strings-in-c-sharp?u=76281980&t=361)** And we get what we expect. All of the other passwords have only some of the requirements or none at all. Validation algorithms like these can be very useful because once they're run, certain properties can be guaranteed about your input data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Language Integrated Query (LINQ)|Linq]] (3)
> **Definitions:** is a  (4)
> **Code Identifiers:** isuppercase (1), isupper (1), islowercase (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Normalize strings in C#](https://www.linkedin.com/learning/c-sharp-algorithms/normalize-strings-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/normalize-strings-in-c-sharp?u=76281980&t=0)** - [Instructor] Before processing a string, it can be helpful to normalize it to a common form in order to make your algorithm more efficient. Let's say you're searching for a particular letter within a string. You could search for that letter once in the lowercase form and once in the uppercase form. This means you would have to run two different searches to find out if the letter exists. Now, another way to go about this is to convert the string to all lowercase. With this approach, you could search for the letter in the lowercase form and only have to search for one form of the letter. With two different [[Forms]], you're still iterating through the string twice. But if the number of different forms the letter can appear as increases, the amount you have to search stays the same. It also makes your code less complex by searching for one form or one type of the data. This is one way to normalize your string data, converting all the characters to a certain case, either uppercase or lowercase or some other form. Instead of normalizing your input, another option is to limit your input to only a certain type. For example, your processing algorithm would only take in strings with all lowercase letters and it could use a validation algorithm to deny any other type of input. However, we want our [[Algorithms]] to be flexible
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-algorithms/normalize-strings-in-c-sharp?u=76281980&t=97)** so we can reuse them for strings with many different contents. Normalizing your input to a common form can help you accomplish this. Let's look at how we can normalize data in C#. To start, we'll create a function called NormalizeString.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-algorithms/normalize-strings-in-c-sharp?u=76281980&t=122)** Previously, we validated the contents of the string. Here, we'll actually be creating a new string, a normalized string. It will have all the characters of the old string, but in the lowercase form. To do this, we'll access the string input and use the ToLower method. Now this will return a new string, so we need to save it out to a variable. We'll call it lowercased. Now ToLower follows a pattern that's actually pretty common for many algorithms. Instead of modifying the input data, a new piece of data is returned based on the input. We also get some other operations to make our data uniform with the C# standard library. If we take our lowercase string, we can use the Trim method. This will remove the white spaces from each end of the input data. Again, this will return a new string, so we'll save it as trimmed. Now for our processing algorithm, let's say there are certain characters we don't want to use or don't want to consider. We want to remove them from the string. We can do this using the Replace function. We can replace the character we don't care about with the empty string. In order to replace something with the empty string, both inputs will need to be strings,
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-algorithms/normalize-strings-in-c-sharp?u=76281980&t=217)** and so we've wrapped this comma character in a string. Let's combine this into a single line. We'll use the input.ToLower, then we'll trim the output of that, then we'll replace that comma character with the empty string. Step-by-step, we'll normalize the string. Let's test it out. We'll say Hello There, BUDDY. With this input, the algorithm will convert the string to lowercase, trim off the spaces and then remove the comma. Let's run it. The output is normalized. It's all lowercase with no commas and there are no extra spaces on the ends. When we normalize our data to a common form, we make our algorithms more flexible, more efficient, and easier to read and maintain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Forms]] (2)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** buddy (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Parse and search strings in C#](https://www.linkedin.com/learning/c-sharp-algorithms/parse-and-search-strings-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/parse-and-search-strings-in-c-sharp?u=76281980&t=0)** - [Instructor] A common programming task is to search for a piece of data within a string. Depending on the assumptions you make about a strings data, you can make an algorithm more or less efficient. If you know nothing about the string, you'll have to check every piece of data within the string, in order to find the data you're searching for. If you know the string has its characters and assorted alphabetical order, then you can optimize the algorithm, by starting your search in the front, back or middle of the string. In all of these cases, you'll need to parse the data within the string in order to find the character or sub string you're looking for. Let's take a look at how to do that in C#. The least complex, but also the least efficient way to search for a subset of characters within a string is to use the built-in contains method. We can use the contains method with dot contains. We'll see if it contains LL. Now this will return true or false, depending on whether this input string, hello world, has the double L sub string or two Ls in a row. If hello world had two Ls, but they weren't back-to-back, then the contains method would return false. The contains method is also case sensitive. So we'd want to normalize our input,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-algorithms/parse-and-search-strings-in-c-sharp?u=76281980&t=93)** if the casing between the string and the sub string did not match. We can do this using the two lower function that we've used previously. Let's run it. In the output we get true because hello world contains two Ls back-to-back. This algorithm works, but it doesn't do any efficiencies behind the scenes. It checks every character until the sub string is found within the string. If we wanted to work with each character individually, we would need to iterate through the string. To iterate through the string, we have a few options. One option is to use the for each loop.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-algorithms/parse-and-search-strings-in-c-sharp?u=76281980&t=150)** For each character in the input string we'll perform a certain operation. In this case, we'll just print it to the console. Another option is to use a regular for loop. For, int, I, equals zero up to the input's length. We'll increment I, and for each I value, we'll do a certain operation. First, we'll grab the character which will be index I of S, then we can print it out to the console. With the second option, we get access to the characters location, as well as the character itself. We get a little more data. Now, if we called this function, the characters would be printed out twice. Once in the first loop, and again, in the second loop. Let's try it.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-algorithms/parse-and-search-strings-in-c-sharp?u=76281980&t=229)** We have the option 1 letters and the option 2 letters. So which type of loop is better? Well, it depends on what you're searching for or what you need to parse from the string. Let's say we wanted to find out if a certain character exists at an even index or an even location within the string. In this case, we'll need access to the location of the character, as well as the character in the string itself. This means we'll use a regular for loop. Instead of I plus, plus, we can actually do I plus two. We only need to check the even indices, since we're checking if the item exists at an even index. We can skip over the odd indices, cutting the time complexity in half. With this new incrementation, we'll also need to change our condition. We don't want to access a character at an invalid location. Since we're skipping every other indice, we'll change the condition to divided by two, plus one. Now let's add some code to the for loop. Given the incrementation, the index I is an even location in the string. This means we just need to check if the character matches our item.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-algorithms/parse-and-search-strings-in-c-sharp?u=76281980&t=321)** The location is already guaranteed. To access the character, we use S at index I, and we'll check if it's equal to the item. If it is, we'll return true. Otherwise we'll keep iterating until we find that item. If we've exited the for loop, and still have not found the item, we'll return false. It must not exist at an even index within the string. And we'll change this to a lowercase S. Now, if our string is no, this will give us an error because we'll try to access a string that doesn't have any contents. To handle this, we can add a base case to catch these types of data. At the beginning of the function, we'll add an if statement, that checks if the string is empty or null. If it is, will automatically return false. Let's call our function.
>
> **[6:58](https://www.linkedin.com/learning/c-sharp-algorithms/parse-and-search-strings-in-c-sharp?u=76281980&t=418)** All right, we're testing a few different cases here. Let's run it. And the output is as expected. It's important to remember that the algorithm is case sensitive. This means if we put a lowercase L, instead of an upper case L, the first call will be false. To handle this, we could add in normalizations, but let's keep it like this for now. If we save, run it again, the first line will be false. With built-in functions and for loops, we can easily parse a string and search for specific contents.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), ls (3), make (2)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Create algorithm-driven strings in C#](https://www.linkedin.com/learning/c-sharp-algorithms/create-algorithm-driven-strings-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/create-algorithm-driven-strings-in-c-sharp?u=76281980&t=0)** - [Instructor] Another standard programming task is to create a new string based on input data. We've seen this a bit previously with toLower and replace where a string is inputted into a function, and a new string is created using the data from the input string. These two functions are built into the standard library, but let's try creating our own functions that dynamically build a string using input data. The algorithm we'll create will build the reverse of whatever string is inputted. It will reverse the string. We'll want to cover our base cases where the string is null or empty. We can use the built-in string function to do that. If either of these cases are true, we'll just return the input. That covers our base cases. When starting your [[Software Development]] journey, sometimes it can feel like you're cheating by using the functions built into the language or the standard library. This is not cheating. Software engineering is about using the best tools for the job to create the most accurate output through the most efficient process. If that happens to be using a standard library function, great. If it happens to be something custom that you have to build, that's also great.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-algorithms/create-algorithm-driven-strings-in-c-sharp?u=76281980&t=94)** Typically if there's something already built to do the job and it does the job well, it's better to use that than create your own algorithm from scratch that does the exact same thing. The function that's already built is likely well tested and used by many other systems and programs. So if it does what you need, use it. Now let's reverse the string. When performing operations on strings, it can be very easy to create a bunch of unnecessary strings as you're trying to build your output. This happens because strings are immutable. You can't change them once they're created. To make our algorithm more efficient so that it doesn't create this unnecessary extra data, we'll use a string builder. The string builder is from the system.text library. So we'll need to add an import at the top.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-algorithms/create-algorithm-driven-strings-in-c-sharp?u=76281980&t=160)** Now string builder works differently than a string in memory. When the string builder is modified, it doesn't create a new string builder. Instead, it dynamically expands memory to accommodate the modified string. This is what makes it more efficient than a regular string. To reverse the string, we'll use a for loop. However, instead of iterating through the string starting at the first index, we'll start at the last index. That's input.Length - 1. On each iteration, we'll decrement I by one. And we'll continue to decrement until we get to the end of the string at index zero. Using a for loop in this way, allows us to iterate through the string backwards, which can be good for many [[Algorithms]], including this one. Since we are going through the string backwards, all we have to do is append the character we're at to the string builder. We'll access the character in the string at index I and append it to reversed. At the end of the loops execution, the reverse string will be built and we can return the new string. Since reverse is a string builder, we can use ToString to convert it to a string.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-algorithms/create-algorithm-driven-strings-in-c-sharp?u=76281980&t=254)** And that's our algorithm. Let's try it out.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-algorithms/create-algorithm-driven-strings-in-c-sharp?u=76281980&t=277)** Here we have a few test cases, including those base cases. Let's run it. In the output, we get nothing for the base cases, which is expected. We also get the other inputs reversed. The reverse algorithm uses each character exactly. So the casing remains the same. It also works regardless of what type of character is used, including punctuation. Now reversing a string is a pretty common operation in programming, and there are several ways to do it in C#. With this algorithm, we did it with a more bare bones approach where we iterated through each character and built the new string one character at a time. Another way we can reverse a string is by converting our data into a data type that already has a built-in reverse method. We'll look at arrays more in the next chapter, but array has a reverse function. If we can convert the string into an array, we can use this function and put that array as input. With the string, we get access to the ToChar array method. This converts the string into a character array. Let's pass the array into the reverse function. This will modify the array
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-algorithms/create-algorithm-driven-strings-in-c-sharp?u=76281980&t=370)** so that the contents are reversed. It does not create a new array. This means we can convert the character array back into a string. This new string will have the characters reversed. Now we aren't done yet. We need to make sure that the string is not null. Otherwise, we'll get an error when we try to convert it to a character array. Let's use the same base condition as before. There's the function. Let's call it. Instead of reverse, we'll use Reverse2 and we'll run it again. The output is the same. Even with a common programming task, there's never just one way to write an algorithm. Each have their pros and cons, depending on the amount of complexity you want to introduce to the code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Algorithms]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** tolower (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Solution: reverse each word](https://www.linkedin.com/learning/c-sharp-algorithms/solution-reverse-each-word-19866902?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/solution-reverse-each-word-19866902?u=76281980&t=0)** Let's create an algorithm that reverses each [[Microsoft Word|word]] in a sentence. First, we'll split up the sentence into words. The constraints say that a word is separated by spaces. This means we can use the split method on the sentence and pass in the space character as a delimiter. This will give us an array of strings where each string is a word. To reverse each word, we can use our reverse helper method. We'll use link to select each word. And then reverse it with our helper method. Then we'll turn this into an array so we can have an array of reversed words. Now all we have to do is join the words back together into a sentence. We can do this using the string.Join() method. Here we separate each reversed word with the space to create the reversedSentence string. We now have a string with each word reversed. Let's return it. That's our implementation. Let's run the program. In the output, we get, "Sally is a great worker", but each word within the string is reversed. The casing also remains the same.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-algorithms/solution-reverse-each-word-19866902?u=76281980&t=94)** Let's try another example. We'll do racecar madam. The program says were correct, but racecar and madden looked the same. This is because racecar and madam are palindromes, so they read the same when reversed. So our algorithm works. If you want to continue to add on to the solution, start by removing assumptions about your input. What would happen if there was punctuation? What if there were extra spaces on the ends or in between the words? How would you want your algorithm to handle that? Asking questions about your data and improving your algorithm based on your findings is a great way to improve your skills as a software engineer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8)
> **Definitions:** is a  (3)
> **Code Identifiers:** reversedsentence (1)


### 2. Array Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [Linear search arrays in C#](https://www.linkedin.com/learning/c-sharp-algorithms/linear-search-arrays-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/linear-search-arrays-in-c-sharp?u=76281980&t=0)** - [Narrator] As a software engineer, you'll need to search through [[Data Structures]], using [[Algorithms]] in order to retrieve relevant data. With a search algorithm, you often input the data you need to search and the item you're trying to find. Sometimes the algorithm will return true or false depending on whether the item exists or it will return the item itself with more data, let's take a look at how we can search for data in the array data structure. One option is to do a linear search, also called a sequential search, where we look at each item in the array. One at a time, in order, we'll do this using a for each loop.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-algorithms/linear-search-arrays-in-c-sharp?u=76281980&t=55)** For each integer in the array, we check if it matches the thing we're looking for, N. If so, we return true. If we search through the entire array and still cannot find N then it must not exist in the array and we can return false. Another option is to return the data itself, instead of a Boolean. If we find the data we'll return N, if we don't find the data, we can return a Sentinel value. This is a value that will never be the value of N and it can serve as a not found value. Both of these will be ENTs. So we'll need to change the return type to ENT. Instead of returning a Sentinel value, we could also return null, but we need to add a question mark to the return type. This lets null be a proper value to return from the function. Let's try running it. Four does exist in the array and eight does not exist.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-algorithms/linear-search-arrays-in-c-sharp?u=76281980&t=127)** Let's execute our program. In the first case, we get the item back. In the second case, eight is not in the array, so we just get nothing. If we change this back to a Boolean,
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-algorithms/linear-search-arrays-in-c-sharp?u=76281980&t=150)** execute the program again, we'll see true and false in the output. Now this type of linear search is actually pretty common. There are a few built-in functions that we can use for this behavior. One is called find and it lives in the array class. The find function takes in an array and a predicate or a function that returns true or false. That's what it'll use to find the appropriate data. So we'll pass in the array and we'll have it find the number equal to three. The function will take in an element and it will return true for elements equal to three. Since it's finding the data, it will actually return the value three. So we'll create a variable called item. If three exists in the array, item will get the value three. If three does not exist in the array, the item variable will get the value zero. Now this works for more than just a quality. We can check whether the array has an item greater than five or any type of conditional where we want to find an element that meets a certain condition. The find function returns only the first item that meets this condition, but we can use, find all, to return all the data that meets the condition. It lives in array,
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-algorithms/linear-search-arrays-in-c-sharp?u=76281980&t=247)** we'll pass in the array and then the condition, whether the element is greater than or equal to five. With find all, we gather all the elements in the array that are greater than or equal to five. They're returned to us in an array. If no items meet the condition, the array will be empty, to display the items or print the contents of the items array, we can use the built-in for each function. For each item, we'll print it to the console.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-algorithms/linear-search-arrays-in-c-sharp?u=76281980&t=290)** Let's comment out these lines. And we'll also display whether we find the item three, let's run it. In the output, we get three because it does exist in the array. Then we see all the items that are greater than or equal to five. There are some alternatives to find and find all that work with array indices. However, I find these two functions to be most useful when searching for data within arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1), [[Algorithms]] (1)
> **CLI Commands:** find (16)
> **Definitions:** is a  (1), is called (1)
> **Env Vars:** ent (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Binary search arrays in C#](https://www.linkedin.com/learning/c-sharp-algorithms/binary-search-arrays-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/binary-search-arrays-in-c-sharp?u=76281980&t=0)** - [Instructor] Searching data is a common task in [[Software Development]]. In order to optimize our search algorithm, we'll need to make assumptions about the data. For example, if you know the array will be sorted, you can start at the middle and then work your way towards the beginning or the end of the array, depending on where the items should be located. If this happens to be the case, one algorithm we can use is binary search. Binary search is a divide and conquer algorithm where in each step it halves the number of elements it has to search through. For example, if we had an array of sorted numbers, the algorithm would start at the middle. Then depending on whether the item we're searching for is greater than or less than the item we're looking at, it would continue its search in that portion of the array. Let's say we were looking for the number 45. The algorithm would start its search at index three, or item 19. Since 19 is less than 45, it would continue its search in the second half of the array with 23, 45 and 79. The mid point of this array is 45. And that happens to be the element we're looking for. This means, instead of doing six comparisons, we only had to do two to find the element. If we had to look at each element,
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-algorithms/binary-search-arrays-in-c-sharp?u=76281980&t=97)** the algorithm would run an O(n) time or linear time. However, since we have the number of elements with each comparison, this algorithm runs and (log(n)) time. We were only able to do this because we assumed the array was sorted. If it was not sorted, then this algorithm would not work as expected. Let's try implementing binary search in C Sharp. This algorithm will input an array and the item we're searching for. There are lots of different things that this function could return. Whether that's if the item exists, a bullion or even the index where the element was found. To keep things simple, we'll return a bullion, true or false, depending on whether the item exists. Now for the implementation. The first step is to create variables for the min and max indices. This will help us bucket the inner array we're searching through. To start, that's the full array. So the min will start at zero and the max will start at the end of the array. Or inputArray.Length - 1. We'll want to continue to search through the array until the min is greater than or equal to the max. This makes the inner array length zero. If we get to that case,
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-algorithms/binary-search-arrays-in-c-sharp?u=76281980&t=188)** then the item must not be in the array. Let's create a while loop. And while the min is less than or equal to the max, we'll continue to search for the item. If we don't find the item in the loop, we'll return false, because again, it must not exist in the array. In the while loop, we'll create a midpoint using the min and max to start our search. The midpoint can be calculated with the min plus the max divided by two. Then we'll check whether this item is equal to the item we're searching for. If they match, we'll return true. We found the item in the array. Otherwise we need to search through the sub array of this array. We'll need to determine whether to search through the front half or the back half of the inner array. We can do this by checking whether the item is greater than or less than the item at the midpoint. If the item is less than the item at the mid point, then we need to search through the front half of the array. We can do that by setting the max equal to the mid minus one. We're closing in that inner array. If the first two conditions are false, then the item must be greater than the item at the midpoint.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-algorithms/binary-search-arrays-in-c-sharp?u=76281980&t=283)** We need to search through the back half of the array. We can do that by setting the min equal to the midpoint plus one. This makes that inner array smaller, and that's it. Let's try it out. BinarySearch and we'll input the array with the item five.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-algorithms/binary-search-arrays-in-c-sharp?u=76281980&t=314)** And it works as expected. It's important to note that we are making some serious assumptions here. We're assuming that the array is sorted. And we're also assuming that the array is sorted in ascending order. If these were not true for the input array, our implementation would not work as expected. Instead, we'd have to normalize our array by sorting it in ascending order. This would add to the time complexity of the algorithm. If we had to sort it, how long would it take? Depending on which sorting algorithm you're using, it could take longer to sort the array than just to do a linear search. At that point, it depends on how useful it is to have your data sorted. Will you be running multiple searches on the data making it optimal to do the sorting, or do you just need to do one search? In that case, a linear search would be more useful. Either way, it's important to consider your assumptions and how you're using your data in the context of your code base. Now C Sharp does have a built-in function for binary search. You pass in the array and the item you're looking for. While this can be useful, it's important to know how it works before applying it to your data. That's why we spent the time here
>
> **[6:46](https://www.linkedin.com/learning/c-sharp-algorithms/binary-search-arrays-in-c-sharp?u=76281980&t=406)** exploring the binary search algorithm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Code Identifiers:** inputarray (1)
> **Speakers:** - [instructor] (1)

#### [Aggregate and filter arrays in C#](https://www.linkedin.com/learning/c-sharp-algorithms/aggregate-and-filter-arrays-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/aggregate-and-filter-arrays-in-c-sharp?u=76281980&t=0)** - [Instructor] Aggregating and filtering data, are standard programming operations. When aggregating data, you combine two or more datasets into a single dataset. Sometimes, when combining these datasets, you'll want to filter out data that does not meet your requirements. Imagine we have two arrays and we want to create a new array that contains all the even numbers from each array. There are a few different ways we could accomplish this. One way is to merge the arrays and then remove the invalid items. Another is to check each item to see if it meets the requirements before adding it to the combined array. We can also sort each array. Then take only the contents that are even for the combined array. However, sorting wouldn't be much help here since even items could be very large or very small values. Given this, each of these [[Algorithms]] will have different time complexities, depending on what type of data is inputted. To keep things simple, we're going to take the second approach where we check each item before adding it to the new array. Let's try it in C Sharp. Here we have a function that takes in two arrays. It will return a new array with only the even values. To keep track of these even numbers, we'll create an array list called result.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-algorithms/aggregate-and-filter-arrays-in-c-sharp?u=76281980&t=98)** We could create a new array instead, but we don't know how many even numbers will be in each array. With the array list, we can add as many even numbers as we need to without worrying about an index out of bounds error. Or creating an array with too much space. Let's iterate through each array and add the even numbers to the array list. We'll start with the for each loop because it doesn't matter where these even numbers are located. To check if the number is even, we can use the modulo operator. If the number divided by two has a zero remainder, then the number must be even. And we'll add it to our result ArrayList. This for each loop adds the even numbers from the first array. We'll do the same for the second array.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-algorithms/aggregate-and-filter-arrays-in-c-sharp?u=76281980&t=164)** We could separate out this iteration into a private function and then reuse the functionality for both arrays. But we'll leave this as is for now. At this point, the result ArrayList has all the even numbers from each individual array. Now, we just need to convert the result into an int array and then return it from the function.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-algorithms/aggregate-and-filter-arrays-in-c-sharp?u=76281980&t=198)** We do some casting here because the two array function returns an object array when we need an int array. Let's try out our function. We're already calling it in our main method. So we'll print the arrays contents to the console. For each item, we'll Console.WriteLine. In the output, we see only the even numbers. In this case, there were no duplicate numbers in each list. But if you wanted to add onto this algorithm, you could consider adding that feature. Another option to extend this algorithm is to modify the first array instead of returning a new array. The input data that the algorithm is likely to process can impact in the implementation as well. If you think that most of your data will have even numbers, then a different approach might be taken. Modifying the assumptions about your data and extending the functionality of your methods are great ways to practice algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Reverse an array in C#](https://www.linkedin.com/learning/c-sharp-algorithms/reverse-an-array-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/reverse-an-array-in-c-sharp?u=76281980&t=0)** - [Instructor] As a software engineer, requirements can change, and sometimes, you'll need to change the ordering of your data. For example, you may need to swap elements or reverse your dataset entirely. Let's look at how to reverse an array in C-sharp. One way is to copy all the contents into a new array, but in reverse order. To start, we'd create a new array to hold the reversed contents. It would have the same length as the input array since no new contents are being added or removed, just rearranged. Then, we'd iterate through the reversed array and add the contents from the input array in reverse order. We'd start at index i, going up to the reverse.length, incrementing i each time while i is less than the length. Then, we'll set the value at index i equal to input at input.length minus i minus one. This will take whatever's at the back of the input array and put it to the front of the reversed array. It will also take whatever's at the front of the input array and put it at the end of the reversed array. Once the iteration is complete, we can return the reversed array,
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-algorithms/reverse-an-array-in-c-sharp?u=76281980&t=92)** which will have the input contents in reverse order. Let's run it. And the output is as expected. We get six all the way down to one. The contents in reversed order. Now since no new contents are being added or removed, we can actually do this algorithm in place, modifying the contents of the input array without creating a new reversed array. We would swap the items around in place and put them in reverse order. This reverse in place function will return void because we'll modify the input array instead of creating a new value. With this algorithm, we'll be swapping elements, so we only need to iterate half as many times or the size of the array divided by two. If we happen to get an array that has an odd number of elements, the middle element does not need to be moved. It stays in the same place in the reversed array. For each iteration, we'll want to swap the item at index i with the item at index input.length minus i minus one.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-algorithms/reverse-an-array-in-c-sharp?u=76281980&t=175)** This will take the items at the back of the array and put them at the front of the array. It will also take the items at the front of the array and put them at the back of the array. We can bring the items from the back of the array to the front with input i equals input input.length minus i minus one. However, we do run into a problem. We overwrite the values at the front of the array. We can fix this by saving the item at index i before we do the assignment. We'll create a temp variable and save the item at index i. With the temp variable, we can take this item at the smaller index and put it at the larger index. We'll set the item at input.length minus i minus one equal to temp. And that's it. That's the algorithm. Let's try it with our array.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-algorithms/reverse-an-array-in-c-sharp?u=76281980&t=246)** We'll use the reverse in place algorithm and then print out that same arrays contents. The array should be modified so the contents should be in reverse order. The output is as expected. Now what if we ran the algorithm again? The reverse of a reverse is the original content and we get the original ordering in the console. Understanding how to work with data in place and move it around in memory using variables is essential to creating efficient [[Algorithms]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: rotate an array](https://www.linkedin.com/learning/c-sharp-algorithms/solution-rotate-an-array-19866903?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/solution-rotate-an-array-19866903?u=76281980&t=0)** Let's create an algorithm that rotates the contents of an array to the left by one. We start off with an input array. After the rotation, the new array should contain 2 through 6 and then 1. Let's implement it. The first step is to create a new array with the same size as the input array. This will create a new array, the same size as numbers, but with each item set to 0. Next, we'll copy the elements from the numbers array to the rotated array, but at one index to the left. This means we'll want to set the item at index 0 of the rotated array to be the item at index 1 of the numbers array. We'll also want to set the item at index 1 of the rotated array to be the item at index 2 of the numbers array. And this pattern continues on with the next set until the end of the array. Seeing this pattern, we can set the item at index i-1 of the rotated array to be the item at index i of the numbers array. This shifts all the contents to the left and it'll work for most of our array elements. Unfortunately, we will run into an issue with the first item of the rotated array.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-algorithms/solution-rotate-an-array-19866903?u=76281980&t=95)** If we followed the same pattern, we'd get an index out-of-bounds exception, since the index -1 is invalid. We can accommodate this by setting the last item in the rotated array to be the first item in the numbers array. Now all we have to do is modify our loop so it only iterates through 1 to the length of the array. That's our algorithm. Let's try it. The output is as we expect, we get 2 through 6 and then 1.


### 3. Linked List Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a linked list?](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-linked-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-linked-list?u=76281980&t=0)** - [Instructor] Linked list is another common data structure that you can use to store and retrieve useful data. Similar to an array, t's a linear data structure where elements are ordered one after the other. However, with a linked list, elements are not stored at contiguous locations. Instead they're linked to using pointers. The idea of an index does not exist for linked lists. We call each element in a linked list, a node. Each node contains a piece of data and a pointer to the location of the next piece of data. Several nodes can be linked together through these next pointers. In this example, the node containing five is the first node. Through its next pointer, it's linked to the node eight, making the node containing eight the second element in the link to list. The last element, 13 is linked through the eight nodes next pointer. This last element of the list also contains the next pointer, but it points to null because there is no next element in the list. It's the end of the list. The first node in the list is often referred to as the head of the list. And the last node is called the tail. Now, since the data is not stored contiguously, the size of a linked list can vary over time. With an array, it's size must be set
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-linked-list?u=76281980&t=94)** as soon as it's created and the size can not change. In order to store more elements in a given array, a bigger array must be created and the current items can be copied over to this larger array, along with the new items. With the linked list, this is not needed because elements are linked by pointers, which can be changed or removed at any time. For example, if you need to delete half of the data set, you can simply find the middle pointer and set it to null. This would unlink the back half of the dataset, removing it from the list. In other languages, there might be more memory cleanup required, but in C# we have a garbage collector and this memory manager will handle it for us. Operations, like these were major data modifications can be made with just a few lines of code make link lists a useful tool when creating [[Algorithms]] that manipulate your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** node (8), find (1), make (1)
> **Analogies:** similar to (1), for example (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Common linked list operations in C#](https://www.linkedin.com/learning/c-sharp-algorithms/common-linked-list-operations-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/common-linked-list-operations-in-c-sharp?u=76281980&t=0)** - [Instructor] With an understanding of the Linked List Data Structure we can begin to work with linked lists and C#. In fact, we can use the built-in linked list type defined in the system.collections.generic namespace.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-algorithms/common-linked-list-operations-in-c-sharp?u=76281980&t=21)** The linked list type is generic because it can hold many different types of data, including custom object data. All we have to do is specify it upon list creation. To create a linked list we use the linked list data type. This linked list will contain strings, so we'll put string in the arrow brackets. We could specify integer or double or accustomed type, but for this example, we'll be using strings. Let's add some data to this linked list. We can add data to the back with add last. We can also add data to the front with add first. Let's see, use add last and add a few strings to the list.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-algorithms/common-linked-list-operations-in-c-sharp?u=76281980&t=86)** Now that we have some data, we can look at some of the built-in operations. We can use the contains method to see if a certain piece of data is in the list. Let's print it out to the console.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-algorithms/common-linked-list-operations-in-c-sharp?u=76281980&t=108)** We can also access how many items are in the list, using the count attribute. Just like we added items in a certain place, We can remove items as well. We can remove the first item, the last item, or even a specific item from the list. Let's remove the first item, Sarah.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-algorithms/common-linked-list-operations-in-c-sharp?u=76281980&t=137)** To print out the contents of the list we can use a for each loop. For each string, we'll say item in our linked list. We'll print it out to the console, console.write. We'll write the item with an arrow, this will place the output on the same line. Then we'll display a fresh new line. Let's run it. If we scroll to the top here we add Sarah, Polly, Rebecca, Jess, and Jackie. We check whether the list contains Polly and it does, so we get true in the output. There are five items in the list, so that's what we get as the count. After removing the first item, Sarah, we get Polly, Rebecca, Jess, and Jackie, in the console. Previously, we talked about how linked lists are built on the idea of nodes, but there are no nodes here. The idea of nodes in the next pointer are actually abstracted from us through this built in linked list class. If we click into the linked list class, I'm using command click on Mac. We can see more details about how this structure works in C#. If we scroll down to the add after method, we can see the inputs are two linked list nodes.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-algorithms/common-linked-list-operations-in-c-sharp?u=76281980&t=233)** This is a method available to us in the linked list class. If we click into the node class, we can see even more details. To create a node, we give it a value. We can also retrieve its next pointer and the value that the node holds. Understanding the implementation of C# built-in [[Data Structures]] can help you make better choices about what tools you use in your [[Algorithms]], which is why we've explored it here. Since the state of structure is built in, we don't have to worry about the maintenance of modifying next pointers or the implementation of a list every time we add data. It provides an interface, so you can just worry about the data you want to add and when, rather than the intricacies of how that data is stored and retrieved in the list. Simplifying complex operations through interfaces is a great principle to follow when creating data structures and developing algorithms. It's also what makes the linked list a great addition to your [[Software Development]] toolkit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2), [[Algorithms]] (2), [[Software Development]] (1)
> **CLI Commands:** node (3), make (1)
> **Cross-References:** we talked about (1), in the next (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Linked list algorithms](https://www.linkedin.com/learning/c-sharp-algorithms/linked-list-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/linked-list-algorithms?u=76281980&t=0)** - [Instructor] Although there is a linked list data structure available in C#, not every algorithm you'll ever need will be built into the standard library. Instead, you may need to create your own data structure with your own [[Algorithms]] to manipulate your data more efficiently. For example, let's say we want to delete the back half of a linked list. It would be nice to have access to those next pointers, because all we would have to do is set the appropriate next pointer equal to null. In fact, we can actually create our own linked list using classes, specifically, a linked list class and a node class. In the code, we have a linked list class that has an attribute called head. This represents the first item in the list, or the head of the list. We also have an inner class called node. This is used by the linked list. Each node has two attributes: data and a reference to the next node in the list. Let's create a linked list from our custom linked list class. We'll use the built-in constructor, customLinkedList. We'll call it linkedList. And there it is. Next, we can create some nodes to add to the list. We'll use our Node constructor.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-algorithms/linked-list-algorithms?u=76281980&t=113)** To add the first node to the list, we can set the head node equal to the first node. We'll access the list, its head attribute, and assign it to be the value of firstNode. To put the [[Representational State Transfer (REST)|rest]] of the nodes in the list, we'll need to link the next pointers. firstNode.next. We'll have the second node be the second node in the list. We'll do the same for the others. The last node in the list is the fourth node. We don't need to set its next pointer because it's already null. With this sample data in place, let's create an algorithm that deletes the back half of the linked list. This will modify the linked list so its return value will be void. And the implementation will need to iterate through the linked list. When we reach the middle node, we'll need to set its next reference to null. Let's start with iterating through the list. Since this custom linked list is not a part of the collections interface, we'll need to iterate through it using next pointers. With every type of loop, we need a variable that keeps track of where we are in the loop. Let's create a current variable that keeps track of what node we're looking at. We'll start it at the head node.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-algorithms/linked-list-algorithms?u=76281980&t=206)** Then, while the current node is not equal to null, we'll iterate through the list. To start off, we'll just print the node's data, Console.Write, current.data. Then we'll increment current by setting current equal to current.next. This puts us at the next element in the list. It's important to check whether the current element is null before accessing the data or next attributes. If a given node is null, and we try to access its attributes, we'll get a null pointer exception, because you can't access an attribute of null. Let's try running the function as it is now. We'll access the linked list and call deleteBackHalf. It won't delete any data yet, because we're only iterating through the list. However, we will be able to see the contents in the console. And there's our data. Now, this functionality is actually pretty useful for displaying the data in our linked list. So let's copy the implementation and put it in a new function called displayContents. Back to our deleteBackHalf function, we need a way to determine whether we're in the middle of the list. One common strategy is to use two pointers,
>
> **[5:02](https://www.linkedin.com/learning/c-sharp-algorithms/linked-list-algorithms?u=76281980&t=302)** a slow pointer and a fast pointer. Instead of having current as our tracker for where we are in the list, we'll have two trackers, slow and fast. Both of these will start at the head, but the fast pointer will move twice as fast as the slow pointer. When the fast pointer reaches the end of the list, the slow pointer will be at the middle element of the list. This means, on the iteration, we'll have slow = slow.next; and fast = fast.next.next;
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-algorithms/linked-list-algorithms?u=76281980&t=346)** Now, since we're accessing fast.next and fast.next.next, we'll need to make sure these variables are not null before entering the while loop. We don't need to check whether the slow node is null, because it will be behind the fast node. If either of these conditions become false, the fast pointer is either at the end of the list, or at the last element of the list. This puts our slow pointer at the middle node. In order to delete the back half, we'll want to access the node just before the slow node, so we can set its next pointer equal to null. This will delete the middle node, as well as everything after it. We can do this using a previous variable. The previous node will run just behind the slow node. At the end of the while loop's execution, all we have to do is set the previous node's next reference to null. This deletes the middle node, and everything after it. We're almost done. We just need to set up our base cases. If the while loop condition is true the first time it's executed, then previous will still be null, and we'll get an error because we're setting an attribute of a null object. To fix this, we can check whether the head is null
>
> **[7:21](https://www.linkedin.com/learning/c-sharp-algorithms/linked-list-algorithms?u=76281980&t=441)** or the head.next is null, before entering the while loop. In both of these cases, the list must have zero elements or only one element. Regardless, we'll want to set the head equal to null. This will keep the list empty, or it will delete the single item in the list. Let's try out our function. We'll display the contents of the list, delete the back half, and then display the contents again. We'll also write a new line, so they're displayed on separate lines. Let's run it. The output is as expected. By using different variables and creating custom [[Data Structures]], we can develop algorithms that let us manipulate our data in exactly the way we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Data Structures]] (1)
> **CLI Commands:** node (28), make (1)
> **Code Identifiers:** firstnode (2), deletebackhalf (2), customlinkedlist (1), linkedlist (1), displaycontents (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Sum contents of a linked list](https://www.linkedin.com/learning/c-sharp-algorithms/solution-sum-contents-of-a-linked-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/solution-sum-contents-of-a-linked-list?u=76281980&t=0)** Let's implement the sum function. We'll start off by creating a variable called sum to keep track of the sum of our items in the linked list. We'll also want a variable for keeping track of where we are in the list. We'll create a variable called current and set it to the beginning of the list. With our variables set up, now it's time to iterate through the list, adding each item's value to the sum. We can do this with a while loop. While the current item in the linked list is not equal to null, we'll want to retrieve its data, add it to the sum, and go to the next item in the list. We can access an item's data with the val field. Then we'll add it to the list. Let's increment the current variable. We'll set current = current.next, moving us along in the list. Once we've iterated through the list, we can return the sum. That's our implementation. Let's run it. In the console, we get 20. That's the result of 7 + 5 + 3 + 4 + 1 Our solution works as expected.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)


### 4. Queue and Stack Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a queue?](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-queue?u=76281980&t=0)** - [Instructor] The queue is another data structure that can be particularly useful in [[Algorithms]] where you need to process data in order. Like an array or list, a queue represents a series of objects, but the way we access, add, and remove items is slightly different. A queue contains the elements in the order they were added. It's designed to have elements inserted at the end of the queue, and elements removed from the beginning of the queue. You cannot remove elements from the middle or end. You must remove items from the front first. Similarly, you cannot add items to the middle or front. You must add items to the back. For this reason, we say queues, follow a FIFO, or first in, first out policy. The first item in the queue must be the first item out of the queue. Now, when we talk about adding and removing items, we refer to it as enqueuing and dequeuing. When we add an item, we enqueue it to the back of the queue. When we remove an item, we dequeue it from the front of the queue. We can not add an element to a certain index, because indices do not exist for queues. There's simply enqueuing to the back and dequeuing from the front. As for accessing items, we can only access the item at the front of the queue.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-queue?u=76281980&t=93)** If we want to access an item towards the back of the queue, we'll need to remove each item in front of it. While this FIFO policy might seem like a restriction, it actually becomes quite useful in algorithms because we're adding on a guaranteed assumption. We can leverage the queue's first in, first out policy to make our algorithms more efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3)
> **Env Vars:** fifo (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Standard queue operations in C#](https://www.linkedin.com/learning/c-sharp-algorithms/standard-queue-operations-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/standard-queue-operations-in-c-sharp?u=76281980&t=0)** - [Instructor] In C-sharp, we can use the built-in queue data structure in the System.Collections.Generic namespace. To create a queue, we can use the queue constructor. This queue will contain integers. Just like the built-in linked list class, the queue class is generic, so it can contain elements of any type you specify. To add elements to the queue, we can use the enqueue method. We'll enqueue one, eight and a few other numbers.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-algorithms/standard-queue-operations-in-c-sharp?u=76281980&t=46)** Now to follow the FI/FO policy, the first item in the queue must be the first item out of the queue. This means the number one will be removed first since it was added first. To remove this number, we can use the dequeue method. This removes the first item from the queue. We can save the removed item with the variable because that's what dequeue returns. Let's display this item in the console.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-algorithms/standard-queue-operations-in-c-sharp?u=76281980&t=83)** We'll run the program and the result is one. Let's continue to dequeue our items. The next item to be removed will be eight.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-algorithms/standard-queue-operations-in-c-sharp?u=76281980&t=101)** We'll run the code again and the output is one and eight. For both of these cases, we removed the item in order to display it. We can also just peek at the top to see what the next item to be removed is. This will not remove the item. We'll run the code again and we'll get 20 in the output as well. If we want to iterate through a queue, we can use a while loop. We'll want to iterate until the queue is empty. C-sharp has a built-in method called TryDequeue. This will try to dequeue an item. If the item can be dequeued, it will dequeue the item and return true. If the queue is empty and it cannot dequeue the item, it will return false. It's important to use this method because if we try to dequeue or even peek at a queue that is empty, we'll get an invalid operation exception. Now since TryDequeue will actually dequeue the item, we'll need to pass in a variable to save the dequeued item. We'll call it current. Then, we'll pass it in with the out keyword. Each time the while loop condition is executed, the queue will attempt to dequeue an item.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-algorithms/standard-queue-operations-in-c-sharp?u=76281980&t=197)** If it can, it'll save it into current. In the body of the while loop, we'll have access to the most recently removed item through this current variable. Let's display it with a printout. With this program, we add four items to the queue, remove two of them, then peek at one of them. The while loop will display and remove the last two items in the queue, 20 and 23. This happens because the peek call does not remove 20 from the queue. Let's run it. We should see 20 twice in the output, once for the peek and once for the dequeue. And that's exactly what we see. If you need to process data in the order it's received, the queue data structure is a great tool to add to your [[Algorithms]]. Queues reduce complexity by removing the index and applying the constraint of first in, first out, making your data easy to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Queue algorithms: Generate binary numbers](https://www.linkedin.com/learning/c-sharp-algorithms/queue-algorithms-generate-binary-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/queue-algorithms-generate-binary-numbers?u=76281980&t=0)** - [Instructor] While the C# standard library has a built-in queue data structure with a few basic operations, you need to know how to leverage this functionality in order to work with your data efficiently. Let's say we want to create an algorithm that takes in a number N as input. Then it would print out the first N binary numbers in numerical order. A binary number is a number that consists of ones and zeros, and is on the base-2 numeral system. These are some examples of binary numbers. We start off with 1, which maps to 1 in the binary system. 2 maps to one zero. 3 maps to one one; 4 maps to one zero zero, and so on. The algorithm we create should generate as many of these numbers as we specify. For example, if the input was 5, the algorithm would print out one, one zero, one one, one zero zero, and one O one. If the input is less than or equal to 0, the algorithm shouldn't do anything; nothing should be printed out. Now you might notice a pattern to these binary numbers. We print an item, in this case, 1, and then print that same item with a 0 appended to it. Then we print that item with a 1 appended to it. After the items associated with the first number have been printed,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-algorithms/queue-algorithms-generate-binary-numbers?u=76281980&t=93)** we print the next item with a 0 appended to it, and then a 1 appended to it. We process the first item, and then the second item, in a FIFO fashion. This pattern follows throughout the [[Representational State Transfer (REST)|rest]] of the binary numbers. We can leverage this pattern with the queue data structure to create an efficient algorithm that generates binary numbers. Let's try it. We'll create a function called print binary. It will take in the number of binary numbers we should print out. In the implementation, we first need to check that the input is valid. If the input is valid, N is greater than 0. So if N is less than or equal to 0, we'll just return. Now if the input is valid, we'll create a queue that will help us generate the next item to be printed. It will hold integers. We could use strings instead, but integers will turn out to be more efficient, due to the fact that strings are immutable. The first binary number is 1, so we'll enqueue one to the queue. Then we'll get into the iteration, where we can start displaying the binary numbers. We'll want to display N numbers, so we'll go up to N for the iteration. In the binary number pattern,
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-algorithms/queue-algorithms-generate-binary-numbers?u=76281980&t=185)** we print an item, and then print the item with a 0, and then a 1. We don't want to print all three numbers at once, because the number of items we want to print might be less than three. We want to print exactly N numbers. Instead of printing them now, we can save these numbers in the queue. So to start, we'll take the item off the top of the queue and display it. We'll dequeue it and write it to the console. Then we'll save the two items that should follow later in the queue. We'll enqueue the current item with a 0 appended to it. To append a 0, we can multiply current by 10. Next, we'll enqueue current times 10 plus 1. This will append the current number with a 1 appended to it. That follows the pattern. Once we've printed out all of the binary numbers, we'll print out a new line. And that's the end of the implementation. Let's test it out. We'll try it with 5, some base cases, negative 2, 0, and then two other numbers, 2 and 8.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-algorithms/queue-algorithms-generate-binary-numbers?u=76281980&t=279)** Let's run it. We'll pull up the console, dotnet run. Let's take a look. In the console, we get the first five binary numbers. Then we get nothing, because negative 2 and 0 are invalid inputs. After that, we get the first two binary numbers; then the first eight binary numbers. This is as expected. Whenever there's a first in, first out pattern with your data, queues can be a very useful tool in your algorithm tool kit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** dotnet (1)
> **Env Vars:** fifo (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [What is a stack?](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-stack?u=76281980&t=0)** - [Instructor] The stack data structure can be useful for [[Algorithms]] where you need to keep track of state. A stack is a series of ordered objects, just like a list, but similar to a queue, the way we add access and remove items is a little different. When we work with the stack, we push objects on the top of the stack and pop objects off the stack. Items are added and removed from the same end. We add to the top and remove from the top. Stacks follow a last in, first out, policy or a LIFO policy. If we add and remove from the same location, the last item pushed onto the stack will be the first item removed from the stack. Another way to think about this is that the first item pushed onto the stack will be the last item popped off. We can push as many items as we want onto the stack, but in order to retrieve a specific item, we must pop off each item in front of it to get it. Once all the items have been popped off the stack, the stack is empty. One example of a stack is the runtime stack, which keeps track of the execution of the program and processing nested functions. First, the main function is called. Then a builder function might be used. Then a util function might be called. The runtime stack also stores information
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-stack?u=76281980&t=94)** about each sub-routine as they're used. Whenever you get an error from the runtime stack, the error messages help you retrace your steps from where the error occurred. It keeps track of the state of your program, and you can create your own algorithms that leverage the stack data structure as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** just like (1), similar to (1)
> **Env Vars:** lifo (1)
> **Speakers:** - [instructor] (1)

#### [Basic stack operations in C#](https://www.linkedin.com/learning/c-sharp-algorithms/basic-stack-operations-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/basic-stack-operations-in-c-sharp?u=76281980&t=0)** - [Instructor] C# has a built-in stack data structure that we can use in our custom [[Algorithms]]. It lives in the System.Collections.Generic namespace. We can create a stack using the constructor. Like the other C# [[Data Structures]], it's generic and this stack will hold strings. To add items to the stack, we'll use the push method. We'll use function names to roughly emulate the runtime stack. The runtime stack uses objects with lots of information in them, but we'll just be pushing on strings. It all starts with the main method. Then we'll call the ResponseBuilder function. Next, an external service might be called. Once we get a response back from the external service, the execution of this function will be finished. So we'll pop it off the stack with stack.Pop. Then we'll parse the response. So we'll push on another ParseExternalData method. Once that's finished, we'll return it to the response builder. Then we'll pass it off to the main method. Finally, we'll conclude our execution with stack.Pop, popping off the main method from the stack.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-algorithms/basic-stack-operations-in-c-sharp?u=76281980&t=95)** The stack helps us keep track of where each function was called. Each pop statement returns the item on the top of the stack. To help us visualize this more, we'll print out those items that are popped off. We'll also add the [[Microsoft Word|word]] END so it shows it's the end of this method's execution. We'll do this for the others as well. We'll also add print statements when we push items on top of the stack. This will give us the full picture of what's going on with our stack. We'll write Start and then the method that's starting.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-algorithms/basic-stack-operations-in-c-sharp?u=76281980&t=158)** Let's run it. We'll pull up the console, dotnet run. We see the main function start its execution. Then the response builder is called. The external service is called. And once its execution is finished, the response is parsed by ParseExternalData. Once that finishes, the response is returned through the response builder to the main function. This ends the execution of the program. If an error ever popped up in our program, the stack would help us find exactly where that error occurred since it's keeping track of the state of our program. In addition to these two methods, push and pop, we also have a few others, stack.Peek and stack.TryPeek. These are similar to the queue data structure where we'll peek on top of the stack without removing the item. TryPeek in particular can help us find out if the stack is empty without raising an error since peeking at an empty stack raises an exception. Since the stack is empty, TryPeek should return false because there's no item to peek at. Running the program, we get false in the console. If you need to keep track of state in your algorithm, the stack data structure is a great tool.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-algorithms/basic-stack-operations-in-c-sharp?u=76281980&t=253)** Like queues, they reduce complexity by removing the index and applying the constraint of last in first out, making your data easy to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Data Structures]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (2), dotnet (1)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** picture (1), similar to (1)
> **Env Vars:** end (1)
> **Speakers:** - [instructor] (1)

#### [Stack algorithms: Theorizing an algorithm](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980&t=0)** - [Instructor] As a software engineer, you'll need to know how to leverage the built-in stack functionality when working with [[Algorithms]] that keep track of state. In this lesson, we'll look at how to use the stack data structure to solve software problems. Let's say we want to print the next greater element for every element in the array. The next greater element for a given element is the first greater element on the right side of the array. If no greater elements exist, then the next greater element is a sentinel value, negative one. For example, if we were given an array with 5, 6, 3, and 50, the next greater element for 5 would be 6. The next greater element for 6 would be 50 and the same for 3. 50 does not have a next greater element to the right, so its value would be negative one. In another example, let's say we have 15, 8, 4, and 10. 15 does not have a next greater element, so it would be negative one. Eight's next greater element to the right is 10 and the same for 4. 15 is not to the right of 10 so it cannot be counted. 10 is at the end of the array so it does not have a next greater element. It's negative one. Given this, there is a pattern to how we're working with the data.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980&t=92)** We continue to look to the right of the array. And if a given item does not have a match, we give it negative one. We can use a stack to keep track of each element we've seen and see if the current array element is the next greater element. In the algorithm, we'll push the first item in the array onto the stack. Let's say it's from our last example, 15, then we'll iterate through the array and one by one, try to print out the next greater element for the item on top of the stack. If the item we find is not greater, we'll push it on top of the stack. In this case, 8 is not greater than 15 so we push 18 onto the stack. The number on top of the stack will always be lesser than the ones below it. This means any items that remain on the stack after the iteration will have the next greater element of negative one. Now the stack contains 8 and 15 and the current is 4. We'll continue with our algorithm for trying to find the next greater element for the item on top of the stack. If we peak at 8 on the stack, 4 is not the next greater element. 4 is less than 8 so we'll push 4 onto the stack. Now the current is 10 and the stack contains 4, 8, and 15. 10 is the next greater element of 4
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980&t=185)** so we'll pop it off the stack and print out the pair 4, 10. 10 is also the next greater element of 8 so we'll print out 8, 10. This is where the benefit of the stack comes in. We didn't have to reiterate through the list in order to match 8 to 10. We used the stack to keep track of the items we've already seen. And as we iterate through the array, we match the stack items with their next greater element. Continuing on, 10 is not greater than 15 so we'll push 10 onto the stock. Now we've reached the end of the array and the stack contains 10 and 15. Both of these do not have a next greater element so we'll pop each off and point their next greater element to negative one. With that, we've printed each item of the array with their next greater element. With this implementation, we iterate through the array trying to find the next greater element for the item on top of the stack. If the array item we see is not the next greater element, we put it on top of the stack. If the array item is the next greater element, then we continue to use the pop and peek operations to iterate through the stack. We check if the array item matches as the next greater element for these stack elements. If we run into a case where the stack is empty or the array item is not the next greater element,
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980&t=281)** then we continue to iterate through the array. When we've reached the end of the array, each item that's still in the stack must have a next greater element of negative one. Using the stack data structure allowed us to iterate through the array only once rather than multiple times or even n times. This gives us a linear time complexity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Stack algorithms: Implementing next greater element](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-implementing-next-greater-element?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-implementing-next-greater-element?u=76281980&t=0)** - [Instructor] Let's translate the next greater element algorithm into C# code. The first step is to create the function. We have printNextGreaterElement that takes in an integer array arr. In order to print the next greater element for each item in the array, the array must have items. If it does not have items, then there's nothing to print out. We'll just write a new line and return. If the array has items, we need to find those next greater elements. We'll set up a stack to keep track of the elements we've already seen. Since it's an integer array, the stack will also hold int. We'll also push on that first element of the array. Then we'll iterate through the array to find that next greater element. In each iteration, we're checking whether or not a given item in the array is the next greatest element for the item on top of the stack. However, this only works if the stack has items. If the stack does not have items, then we simply push the next item onto the stack. If the stack does have items, we'll pop off the top element and check if the current array element is its next greater match.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-implementing-next-greater-element?u=76281980&t=96)** If the item we've popped off is less than next or that item in the array, then next is the next grader element for popped. We'll write it out to the console. Now this next item could be the next greater element for multiple items in the stack. So let's change this if statement to a while loop. While we continue to pop off items, if next is less than popped, then next is that next greater element and we'll write it out to the console. To increment popped, we'll do stack.Pop. Of course, we'll want to check that the stack has items before we try popping things off. If the stack is empty, we'll want to break out of these loops. Now after the while loop, the popped item is either equal to or greater than the next element. If popped is greater than the next element, then we still need to find its next greater element, so we'll push it on top of the stack. At this point in the implementation, we've printed out all the items that have a next greater element. The current items in the stack are the items that do not have the next greater element. We can display these by emptying the stack and printing out each element's next as negative one.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-implementing-next-greater-element?u=76281980&t=191)** While the count is greater than zero, we'll pop off each item and display its next greatest at negative one. In the main method, we have some test cases. Let's run it. And it works as expected. Four's next greater element is 10. Same with eight. For 10, 15, those do not have a next greater element, so it's negative one. For two, it's the only item in the array, so it's negative one. Two and three, two has the next greater element of three and three does not have a next greater element so it's negative one. For the last array, there are no items and so we get an empty line. It's important to note that the assumption of the next greater element always being to the right played a significant role in the implementation. With the stack, we were able to keep track of the items we still needed to find a next greater match for as we continue to iterate through the array. If we got to the end of the array and still had some items where we did not find a match, we were able to retrieve those and give them the next greater element of negative one. Understanding how to leverage stacks in [[Algorithms]] where you need to keep track of state is key to creating efficient solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** find (5)
> **Code Identifiers:** printnextgreaterelement (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Stack algorithms: Matching parentheses](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-matching-parentheses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=0)** - [Instructor] The stack data structure can be a very useful tool when solving software problems that require keeping track of state. Let's say we need to determine whether a given piece of text has matching parentheses. Below are some examples where the parentheses are matching. For each of these, the opening symbol comes before the closing symbol and every open symbol has an associated close symbol. These are some examples where the parentheses are not matching. These do not start with the opening symbol or do not have a closing symbol for each opening. We can use the stack data structure to keep track of whether we've seen an opening symbol. Let's take a look. Here we have a function that returns true or false, depending on whether the parentheses are matching. We also have some test cases written out for us. The first four should return true because they have matching parentheses. The others should return false because they do not have matching parentheses. For this algorithm, we're testing whether each opening parentheses has an associated closing parentheses. We can keep track of this using a stack. This will be a stack of characters. Now this will keep track of the opening characters we've seen. And if we ever run into a closing character,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=95)** we'll pop the stack. The opening character matches the closing character. If the stack is not empty by the end of the execution, then there must be more opening symbols than closing symbols. In order to determine if the parentheses in the string are matching, we'll need to iterate through the string. We'll set the current character equal to S at I. Now, if the current character equals an opening parentheses, we'll push it onto the stack. In order to return true, there'll need to be a closing symbol to match this opening symbol. Instead of being the open character, the current character could also be the closing symbol. If this is the case, we'll want to pop the stack. Of course, we'll only want to pop it if the count is greater than zero. If the stack is empty, this means we have not seen an opening character to match the closing symbol. In this case, the parentheses are not matching. So we'll return false from the function if the stack is empty at this point. That's the implementation. Let's run the function. The output is as expected.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=192)** The first four are true and the [[Representational State Transfer (REST)|rest]] are false. Now since we're only dealing with one symbol type, parentheses, we can actually keep track of whether we've seen that opening symbol with just an integer. Let's copy our implementation and modify it so that it removes the stack and uses the integer variable instead.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=225)** We'll delete the stack constructor and create an integer, matchingSymbolTracker. It'll start at zero. Then in the places where we push an item to the stack, we'll add one to the tracker. In the places where we pop the stack, we'll subtract one from the tracker. In the places where we check if the stack is empty or check the size of the stack in any way, we can use the tracker instead. We'll check if the tracker is equal to zero and whether the tracker is greater than zero. Let's use this implementation.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=288)** And we get the same output in the console. Now, if we had more types of opening and closing symbols, such as brackets or arrows, we would need to use the stack. We would need to check that the open bracket matches the closing bracket rather than a closing parentheses or a closing arrow. Now, if we had more types of opening and closing symbols, such as brackets or arrows, we would need to use the stack. We would need to check that the open bracket matches the closing bracket rather than a closing parentheses or closing arrow. Since we only have one type of symbol, the parentheses, we just need an integer for tracking. This helps our solution run in linear time, but now it only takes up constant space or O of one space. This makes it more efficient. The modified algorithm is also less complex and easier to read because it uses simpler tools to achieve the same output. While adding a data structure can often make your [[Algorithms]] more efficient, they're not always the solution to every problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Algorithms]] (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** matchingsymboltracker (1)
> **Speakers:** - [instructor] (1)

#### [Solution: evaluate reverse polish notation](https://www.linkedin.com/learning/c-sharp-algorithms/challenge-evaluate-reverse-polish-notation-19868187?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/challenge-evaluate-reverse-polish-notation-19868187?u=76281980&t=0)** Before going into the implementation, let's talk about these helper methods given to us to use. The first is IsNumber. This one takes in a token that's a string and returns true or false, based on whether it can be parsed into a double. The second is IsOperator. It takes in a string and returns whether or not it matches one of our basic operators. That's + for addition, - for subtraction, and so on. The last function we're given is PerformOperation. Given the operator in both operands, it will perform the operation. Whether that's addition, subtraction, multiplication, or division. If the operator is invalid, it'll throw an exception. We can use these helper methods in our implementation in order to keep our code more concise. Let's implement EvaluateRPN. We know that each operand comes before its operator. This means we need to keep track of each number until we see its operator. We can do this with a stack. Since we're using a stack, we'll need to add the appropriate import at the top. That's using System.Collections.Generic. We know that each operand and operator is separated by spaces.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-algorithms/challenge-evaluate-reverse-polish-notation-19868187?u=76281980&t=97)** Given this, we can split the string into [[Tokens]] using the split method, with the space as a delimiter. This will return an array containing only the operands and operators. To run the calculations, we can iterate through this array, handling the operands and operators accordingly. This is where our helper methods are going to come into play. If the token is the number, we'll push it onto the stack, saving it until we see the operator, otherwise, if it's an operator,
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-algorithms/challenge-evaluate-reverse-polish-notation-19868187?u=76281980&t=152)** we'll pop the operands from the stack and perform the operation.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-algorithms/challenge-evaluate-reverse-polish-notation-19868187?u=76281980&t=160)** If there is only one operator and two operands in the expression, this would work and we could return the results. However, there can be multiple operations within a single expression. To account for this, we can push the intermediate result from the operation onto the stack. Then when the next operator is found, the intermediate result is already on the stack and ready to be pulled for the operation. Once we've iterated through the entire string, we can return the final result, which is sitting at the top of the stack. That's our implementation. Let's run it. In our test code, we add three and four. The result is seven. Our solution works as expected. To improve our code, we could add more error checking. Currently, we assume the input is a valid RPN expression, but what if it wasn't? How could we account for that? We also know that a given operation can only have two operands or two inputs. This means instead of a stack, we could have used variables to keep track of the intermediate data and operands.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-algorithms/challenge-evaluate-reverse-polish-notation-19868187?u=76281980&t=255)** This would take less space, but it would likely be harder to read and understand the code. It's important to understand the tradeoffs when deciding how to implement a solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1)
> **Env Vars:** rpn (1)
> **Definitions:** is a  (1)


### 5. Algorithms for Hash-Based Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Hash-based structures in C#](https://www.linkedin.com/learning/c-sharp-algorithms/hash-based-structures-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/hash-based-structures-in-c-sharp?u=76281980&t=0)** - [Instructor] Hash structures are great when working with collections, sets, and data formatted as key-value pairs. In C-sharp, there are a few different options we can use. First, there's the HashSet. The HashSet is a collection of unique items. It cannot contain duplicates, and unlike many of the tools we've used previously, the order of the items is not relevant. It's great if you need to keep track of a unique list of items. For example, let's say you're processing some purchases and you need to validate whether the vendor code is valid using a list of vendor codes. You could store the vendor codes with the HashSet. Then, quickly check if the code is valid in 01 time. C-sharp also has a dictionary type. This is especially useful if you need to work with key-value pairs. Let's say you have a series of employees and you need to look up information about a given employee using their ID. With a dictionary, you can store each employee value using the ID. Then, you can quickly look up an employee by their ID in constant time. If there's an identifier you can use to navigate your data, like an ID or a code, the dictionary type proves to be a very helpful tool in creating your [[Algorithms]]. There is also the Hashtable type.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-algorithms/hash-based-structures-in-c-sharp?u=76281980&t=95)** This type is very similar to the dictionary type in that it stores key-value pairs, but there are a few differences in their implementations. The dictionary type is a generic collection while the Hashtable structure is not. With the Hashtable, there's no need to specify the type of key or value, but with the dictionary, those types are required. If you try to access a key that isn't present, the dictionary will give an error, but the Hashtable will just return null. The dictionary maintains the order of stored values while the Hashtable does not. The Hashtable is also thread safe while the dictionary is only thread safe for public static members. There are other differences between these types as well. Ultimately, the dictionary is often recommended because it adds type safety, eliminating the unboxing and reboxing of your data. Understanding the tools available to you is essential so you can choose the right one for your algorithm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Dictionary and HashSet operations in C#](https://www.linkedin.com/learning/c-sharp-algorithms/dictionary-and-hashset-operations-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/dictionary-and-hashset-operations-in-c-sharp?u=76281980&t=0)** - [Instructor] Let's look at how to use hash structures so we can build [[Algorithms]] that work with key-value pairs. We start off with an employee class. Each employee has a name, ID and department, but eventually, this class could include quite a bit of data. In the main function, we create three employees, giving them values for each piece of data. In order to access each employee efficiently, we can choose a unique key out of these three attributes as an identifier for each employee. Then, we can use the key to quickly retrieve a given employees data. Two employees might have the same name and they might have the same department, but no two employees should have the same ID, so we'll use that as our key. The value in the key-value pair will be the associated employee data. Let's use the dictionary type to store our employees by ID. The ID is an integer. So int employee. We'll call it employeesById and create a new dictionary. Now to add an employee to the dictionary, we can use the add method. It will take two entries. First, the key, the employee's ID, then the value, the employee itself. Let's do this for the other employees too.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-algorithms/dictionary-and-hashset-operations-in-c-sharp?u=76281980&t=108)** Now that our data is stored in an organized way, we can easily retrieve it using a given employee's ID. We'll use the TryGet value method. It takes in a key which will be used to retrieve the value. We'll retrieve 9415, or Bobby. It also takes in another input. If the key exists in the dictionary and it has an employee value, it will be stored in our second input, e. It's a side-effect of the function. The TryGet value expression will return true or false depending on whether the key exists in the dictionary. We can use this functionality with an if statement to display the information about the employee if the employee is in the dictionary. If TryGet value, meaning there is a value in the dictionary, will display the data.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-algorithms/dictionary-and-hashset-operations-in-c-sharp?u=76281980&t=181)** That data is in our e variable. It gets saved out if this returns true. Let's try it. In the output, we see the second employee's name and department. It was quickly retrieved using the ID. We also have other functions with the dictionary. We have ContainsKey and ContainsValue. These help us see if the dictionary contains certain data. Now, for working with data where each item is unique and order doesn't matter, the HashSet is a great tool to use. Let's say we have a group of product codes that identify which items can be purchased using the company card. We can add a product code with the add method.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-algorithms/dictionary-and-hashset-operations-in-c-sharp?u=76281980&t=248)** Then, we can check whether a given code is valid using the contains function. The first statement would return false because 48BD9 is not in the set, but the second statement would return true because J2H762 is a valid and known product code. In general, the HashSet type is good if you need to create an algorithm that checks if a given item is a member of a certain group. In this case, that's whether a given code is in the product code group. The dictionary and HashSet types optimize the retrieval of items using the assumption of unique items. For the dictionary, the keys are unique. For the HashSet, each value is unique. Storing your data in a way where you can make assumptions about it can help you speed up your algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** employeesbyid (1)
> **Env Vars:** j2h762 (1)
> **Speakers:** - [instructor] (1)

#### [Leverage the HashSet type in C# algorithms](https://www.linkedin.com/learning/c-sharp-algorithms/leverage-the-hashset-type-in-c-sharp-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/leverage-the-hashset-type-in-c-sharp-algorithms?u=76281980&t=0)** - [Instructor] The C# standard library provides a few data types for working with unique items, but you'll need to leverage these types in order to manipulate data in exactly the way you want. For example, let's say we have two arrays and we want to find out what elements are present in the first array, but not the second, given both arrays are unsorted. With this example, three, two, and five are present in both arrays, but only four and eight are present in the first array. This question we're asking, what elements are present in one array, but not the other, is really a question of membership. We're asking what elements are a member of the first array, but not a member of the second array. The HashSet is a great tool when working with questions of membership and we'll use it in our algorithm to find the answer to this problem. Let's create an algorithm that finds what elements are present in the first array, but not the second. This will take in two inputs, the first array and the second array. In the implementation, we'll create a list to store the missing elements in the second array. In order to determine whether an element is missing, we'll need to know what items are in the second array. Then we can cross-check them with the first array.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-algorithms/leverage-the-hashset-type-in-c-sharp-algorithms?u=76281980&t=94)** We'll do this using a HashSet.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-algorithms/leverage-the-hashset-type-in-c-sharp-algorithms?u=76281980&t=103)** Then we'll put all the items in the second array inside the HashMap. We can do this by iterating through the array. We use a for-each loop because we don't care about the location or the ordering of the elements. We just want to add them into the HashSet. With these items added to the HashSet, we can iterate through the first array. On each iteration, we'll check whether or not each element from the first array exists in the second. Again, this is a question of membership. Location and ordering do not matter so we'll use a for-each loop. To check whether the item exists, we'll use the HashSet.contains and check for that item in the first array. If it does exist, then we're all good. We don't need to add anything to the missing elements list and we'll make that list plural. However, if the item does not exist in the second array items, we've found a missing element and we'll want to add it to that missing elements list. We can do that using the add method. Once we've done this for every item in the first array, we can return the list of missing elements. We found all the items that are in the first array, but not the second. They're missing from that second array.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-algorithms/leverage-the-hashset-type-in-c-sharp-algorithms?u=76281980&t=197)** Let's test it out. We'll call it in the main function.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-algorithms/leverage-the-hashset-type-in-c-sharp-algorithms?u=76281980&t=237)** Let's run it. For the first call, three and one are not included in the second array. For the second call, four and eight are not included. This output is as expected. With the HashSet, we were able to retrieve and search our data in constant time because each item stored in the HashSet is unique. We leveraged this uniqueness to create an efficient algorithm that uses the principle of membership.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Use the Dictionary type in C# algorithms](https://www.linkedin.com/learning/c-sharp-algorithms/use-the-dictionary-type-in-c-sharp-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/use-the-dictionary-type-in-c-sharp-algorithms?u=76281980&t=0)** - [Instructor] We can also leverage the dictionary type in our own [[Algorithms]]. For example, let's say we want to display the count of each element in an unsorted array. We can do this using a key value pair where the key is the element in the array, and the value is the number of times the item appears in the array. Then we can iterate through the dictionary, displaying each element with its associated frequency. Let's write the code for this algorithm. We'll start off with the function signature. It will be static return void, and it will display the frequency of each element inside of an integer array. To keep track of each elements count, we'll create a dictionary. The input array holds ints so the key will be of type int. The value will also be an int for the elements count. Then we'll iterate through the array. Upon each iteration, we'll increment the given elements count in the dictionary, or if the item is not a key, we'll add it. To see if an item is in the dictionary, we can use the contains key method. If the key is in the dictionary we'll increment its value. We can access the value using the square brackets.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-algorithms/use-the-dictionary-type-in-c-sharp-algorithms?u=76281980&t=99)** Then we'll increment it. If the item is not in the dictionary, we'll add it. We can access it like an array. We'll put the key in the dictionary and give it the value one. We've collected the data. The dictionary has each element along with how many times it appears in the array. We've collected the data. The dictionary has each element along with how many times it appears in the array. We just need to display this information to the user. We can iterate through the dictionary using a for each loop.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-algorithms/use-the-dictionary-type-in-c-sharp-algorithms?u=76281980&t=144)** For each key value pair in the dictionary will display the key and then the value. Let's try out the algorithm.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-algorithms/use-the-dictionary-type-in-c-sharp-algorithms?u=76281980&t=167)** .netrun And let's add an arrow bracket, so it looks a little cleaner. In the console we get the expected count value for each element in the array. With this algorithm, we had two pieces of data to track what elements were in the array and how many times they appeared. These two pieces of data were connected as a key value pair, making the dictionary type, a useful tool for us to solve this problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Best Practices:** the key is (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: detect a cyclic linkedlist](https://www.linkedin.com/learning/c-sharp-algorithms/solution-detect-a-cyclic-linkedlist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/solution-detect-a-cyclic-linkedlist?u=76281980&t=0)** Let's create an algorithm that detects if a linked list has a cycle. In order to determine if there's a cycle, we need to use the next pointers of the linked list. We need to check that a given next pointer is not pointing to a node we've already seen in the list. This is a question of membership, which makes the HashSet a great tool for this algorithm. In our code, we'll iterate through the linked list, and every time we see a new node, we'll check if it's in the HashSet. If it's not, we'll add it to the set. If it is in the HashSet, this means we've seen the node before and there is a cycle in the list. If we're able to get through the entire list without seeing the same node twice, then there's not a cycle in the list. Let's implement this idea in code. To start, we'll create a new HashSet that will store the nodes we've already seen in the list. Then we'll create a current reference that will keep track of where we are in the list. While the current is not equal to null, there are still elements in the list we need to check. We need to check that the current node is not a node we've previously seen in the list. We'll check if nodes contains our current element. If it does, we'll return true because there is a cycle
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-algorithms/solution-detect-a-cyclic-linkedlist?u=76281980&t=98)** in the list. We've seen the node before. If this is not a node we've seen before, we can keep track of it by adding it to our HashSet. Then we'll increment the current node by pointing it to current.Next. If we make it through the entire list without returning true, the list does not have a cycle and we can return false. Let's try it out. In the test code, we have a ListNode(1), a ListNode(2), and a ListNode(3). Then we set ListNode(3)'s next pointer to the head. This creates a cycle in the list. Let's run it. And we get the correct answer. Our code returns true. This list does have a cycle. Now let's talk about time complexity. With the HashSet, we were able to check in constant time whether a given node was one we had seen before. This means our algorithm runs in linear time and linear space, since we need to check every node if the list does not have a cycle.

> [!info]- Semantic Content
>
> **CLI Commands:** node (11), make (1)
> **Definitions:** is a  (3)


### 6. Tree Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a tree?](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-tree?u=76281980&t=0)** - [Instructor] If you're working with nonlinear data in an algorithm, the tree data structure can be a useful tool. A tree is a collection of nodes where each node might be linked to one, two, or even more nodes. Now, the last time we talked about nodes, we talked about them in the context of a linked list, where each node was connected in a linear order, node by node. The tree data structure presents a similar idea, but it applies to nonlinear data. Just like a linked list, there is always a specific starting node in the tree data structure. Instead of the head, we call it the root node. The root node contains data as well as links to other nodes. The linked nodes are called child nodes. Since a given node in the tree can have many different nodes, this is where the data becomes non-linear. Levels with multiple nodes start to form, and there are many different paths in the tree to take. We also refer to the root node as the parent of these child nodes. The root node itself has no parent. The second level of nodes are both parent nodes and children nodes. Their children to the root, but the parents of the nodes they're connected to. For a tree to be a tree, it needs to have a collection of nodes that are connected in some way by links. Some nodes might have zero children
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-tree?u=76281980&t=93)** and others might have 15 children. It's a very broad data structure, and we can apply constraints in order to access the data in an efficient manner. We can actually think of a linked list as a very specialized type of tree structure. It consists of a collection of nodes where each node has only one link and that link is a child node. This is one example where we put a constraint on the exact structure of the tree. Then we take those constraints to optimize certain operations. Another example of this idea is a binary tree. With a binary tree, each node can have a maximum of two direct child nodes. This limits, how many elements can appear on each level of the tree. At most, it would be two to the power of the number of levels in the tree. This means if you're going down a path in the tree, it limits your decision to at most two options. You can take the left path or the right path. We can take this a step further with something called a binary search tree. With the binary tree, we could have our elements in any order, as long as they were organized where each node had no more than two child nodes. With the binary search tree, we add the constraint of order. Items are stored in a particular order so they're easy to retrieve and find.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-algorithms/what-is-a-tree?u=76281980&t=187)** One constraint that the binary search tree adds, is that the value to the left child node must be less than its parent. This means if you're searching for an element in the tree, you can check whether the element you're looking for is less than the node you're looking at. If it is, you can continue your search down the left side of the tree confidently, knowing that it won't be on the right side of the tree. The other side of this constraint, is that the right child node must have a greater value than its parent. These constraints make the tree data structure more than just a collection of stuff strung together. With the binary search tree, we have a data structure that naturally stays sorted without immense amounts of reshuffling. This gives us a fairly efficient way to search for a given piece of data. In fact, it cuts the best case search time down to log event. Although the worst case is still linear since all the elements might be on one side of the tree. By adding constraints to basic data structure ideas, we can create tools that help make our [[Algorithms]] more efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** node (17), make (2), find (1)
> **Definitions:** is a  (3)
> **Cross-References:** we talked about (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Create a binary search tree in C#](https://www.linkedin.com/learning/c-sharp-algorithms/create-a-binary-search-tree-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/create-a-binary-search-tree-in-c-sharp?u=76281980&t=0)** - In C#, we can use nodes in a binary search tree manner to work with our non-linear data efficiently. The fundamental concepts of a binary search tree are very similar to a linked list. We'll use a node class, but instead of a next reference, we'll have references to the left and right notes. Again, we can do this because we assume that a node will have at most two direct child nodes. Let's try it. We'll write class node and give it three attributes. We'll give it a left node, a right node, and some data. Then we'll also give each of these, get and set access, so they're easy to use in our [[Algorithms]]. Now this node class itself is a tree. It contains left and right trees, as well as a piece of data. It only becomes a binary search tree, when we use algorithms to constrain how we insert, remove and manipulate our data. This means the binary search tree class will only contain algorithms for working with node data. When we use these algorithms, we'll assume that the data is stored in a binary search tree way. Similar to how we followed a given nodes next references with the linked list structure,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-algorithms/create-a-binary-search-tree-in-c-sharp?u=76281980&t=93)** we can follow the left and right node references to access and manipulate all the data and the tree. We just need the root node. Let's create an algorithm to add data to a node in a binary search tree manner. It will return the node we inserted and take in a value that we want to insert in the tree. It will also take in the root node, which is the node we want to insert the value into. Now, if the root node is null, then the inputted value should be turned into the root node. We can create a new node with roots equals new node root.data equals value. Then we can return the root. since it's the only element in the tree, no left or right reference changes are needed. They're both still null. Now, if the root is not null, then we need to insert the value on either the left side of the tree or the right side of the tree. With the constraint of the binary search tree, if the value is less than the root, then we insert it on the left.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-algorithms/create-a-binary-search-tree-in-c-sharp?u=76281980&t=173)** If the value is greater than the root, then we insert it on the right. If the value is equal to the root, then we don't need to insert anything. We'll just return the root, which is already implemented here. We'll move this outside the if statement and return. Now, in order to insert an item on the left side of the tree, we can leverage this algorithm we're working on right now. We can set the root dot left equal to whatever is returned by the insert algorithm, when we insert the item on the left of the tree. We'll reuse the function we're creating right now, but instead of inputting the root we'll input, the root dot left. We can do this for the right side of the tree as well. Here, we're calling a function within a function with different inputs. This is called recursion. We defined a core base case with the root null check, and by calling the same function with different inputs, we can find the right place in the tree where this value should be inserted. When we find that place, we'll create the node and set it accordingly. Since this function returns the node, we immediately set it to the left or right, and return it up the tree. For example, let's say we had a node four
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-algorithms/create-a-binary-search-tree-in-c-sharp?u=76281980&t=268)** with no left and right references. If we wanted to insert the value two, we would insert it on the left side of the tree, since two is less than four. The insert function would be called again, but now the value for the root would be null. This means that a node with the value two would be created and returned from the insert call. Then the execution would go back to the initial call setting two as the left node for the root four. Now, there are other ways to implement this algorithm, but this option leverages recursion to encourage code reusability. Another option would be to use recursion with the four loop or a while loop as tools within this algorithm. Recursion is just another tool in your algorithm toolkit. Let's test out this function. We'll create a root node and insert data using the static binary search tree function.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-algorithms/create-a-binary-search-tree-in-c-sharp?u=76281980&t=348)** Let's run it. Now, we won't see anything in the output just yet because we're only inserting data not displaying it. However it is stored in memory efficiently, and we can continue to develop more algorithms to better visualize and manipulate our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5)
> **CLI Commands:** node (23), find (2)
> **Definitions:** is a  (1), is called (1), means that (1)
> **Analogies:** similar to (2), for example (1)
> **Cross-References:** go back to (1)
> **Speakers:** - in (1)

#### [What are tree traversals?](https://www.linkedin.com/learning/c-sharp-algorithms/what-are-tree-traversals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/what-are-tree-traversals?u=76281980&t=0)** - [Instructor] With the binary search tree, data is not stored with any ordering constraints. Data is simply stored and retrieved, and each node is placed in the next available slot. This means in order to search for an element or manipulate data in the tree, one must iterate through the tree. We call this traversing a tree or visiting each node to display or manipulate its data. When traversing a tree, we have a few different options, depending on which nodes we visit first and which nodes we visit last. For example, one way we could traverse the tree, is to recursively traverse the left subtree, visit the root node, and then recursively traverse the rights of tree. The left most subtree is nine with no children nodes, so that would be displayed first, then it's root is seven. That has a right subtree of 10, so that would be next. Continuing up the tree, the root is six and its right subtree has eight. These nodes are visited in order from left to right, nine, seven, 10, six, eight, so we call this an inorder traversal. Another option is to do a pre-order traversal. In a pre-order traversal, the root is visited first, then the left and right subtrees are recursively traversed. This means route six would be visited first,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-algorithms/what-are-tree-traversals?u=76281980&t=94)** then we would recursively go down the left most subtree, visiting each node along the way. This means seven would be visited next and then nine. Once all the left nodes have been visited, then we would begin to visit the right nodes working our way back up the tree. 10 is the right note of seven, so that would be visited next. Then eight is the right note of six and that would be visited last. With this traversal, six, seven, nine, 10, eight, the root is visited first, then its subtrees are visited recursively. The last type of traversal we'll look at is the post order traversal where the root is visited last. First, the left subtrees visited, then the right subtree and finally the root. Thinking about this algorithm with our own tree, this means that the left most node would be visited first, nine. Then the next right node would be visited 10. The root of this subtree is seven, so that would be next followed by eight, which is to the right of six. Then it would be finished up with six, the root of the tree. With this path, nine, 10, seven, eight, six, the root is visited last after each subtree has been recursively traversed. Now these are three common options for traversing the data in a binary tree. Again, these work because we're making the assumption
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-algorithms/what-are-tree-traversals?u=76281980&t=188)** that each node will have at most two child nodes, which traversal algorithm you choose depends on your use case. If you know you'll need to explore the roots of the trees before inspecting the leaves, the pre-order algorithm is a good option because he visit the roots before the leaves. If the opposite is true, meaning you want to explore the leaves before the roots, the post order algorithm might be better suited. If your tree is a binary search tree or has a sequence with its nodes, then the in order traversal might be best. It will visit the nodes in order and flatten the tree back to its original order. Each type of traversal can be a useful tool when working with trees, they each have their pros and cons. It just depends on how you want to manipulate your data.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7)
> **Definitions:** we call this (2), is a  (2), means that (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Using recursion to implement tree traversals in C#](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980&t=0)** - [Instructor] And a tree traversal algorithm each node in a tree is accessed in a particular order. With the pre-order traversal, we visit the root first. With the in order traversal, we recursively visit the left tree and then the root. With the post order traversal, we visit the root last. With each traversal, we apply the same pattern to parts of the tree. Then we continue that pattern throughout the tree. The concept of recursion can be a useful tool in this type of algorithm, because we're doing the same operation with a slight modification to the input. Let's look at how we can apply this to tree traversal [[Algorithms]]. We have some sample code here that we've carried over from the previous videos, with a few modifications. There is a node class, as well as a binary tree class. The binary tree class will hold our traversal. In the main function we create a small binary tree. Note it's not a binary search tree because it does not meet the ordering constraint. Let's traverse our tree. We'll start by creating a pre-order traversal algorithm. It will display the data from our tree.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980&t=88)** If the root is null, then there's nothing to display, so return from the function. If there is data, we need to do a pre-order traversal. We'll start by displaying the root. Then we can recursively traverse the left and right trees. We'll do this by calling the pre-order traversal algorithm again. However, it will pass in the left and right trees.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980&t=126)** And that's it. That's our pre-ordered traversal. We visit the root and then recursively visit all the nodes in the left tree and the right tree. Let's try it out using the debugger. We'll walk through the algorithm, as each node is being printed. We'll place a break point at the first pre-order traversal line. In order to access it we'll need to make sure this is public.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980&t=158)** Binary tree, pre-order traversal, and we'll pass in that root node. To run it using the debugger, we have this configuration.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980&t=193)** On the first call the root is four. The left and right nodes are one and three. If we look in the terminal, four has been displayed. The left node is about to be traversed. If we click continue, this pre-order function will be called again. But now with the root one. Since the root is one, we display it in the console. Then it will recursively display the eight and nine nodes. These don't have any children, so we'll hit that base case. We see eight and we'll see nine. Once the left subtree has been recursively traversed, the right subtree must be traversed. This makes the route three pressing continue again. We see that on the side. Six is on the left, so then that will be displayed. Then there are no more nodes, so the function will end its execution. In the console, we see the full pre-order output. The root is displayed first and then the left and right subtree contents are displayed. The in order and post ordered traversals will follow a similar pattern. All we have to do is change where the root is displayed. Let's copy and paste the implementation and change out the names.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980&t=288)** For the in order traversal, the root is printed out after recursing the left subtree. This means we'll move the console dot write statement to in-between the in order traversals. We'll traverse the left subtree, display the root and then traverse the right sub tree. We can do a similar thing for the post order traversal. We'll copy this, change the names
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980&t=329)** and move the printout to the last statement. We traverse the left, the right, and then display the root. Let's test this out.
>
> **[6:04](https://www.linkedin.com/learning/c-sharp-algorithms/using-recursion-to-implement-tree-traversals-in-c-sharp?u=76281980&t=364)** We'll run it with .netrun. With the in order traversal, we get the items back in sequential order. With the post order traversal, we get the leaves and then the root for each sub tree. With the tree structure, we have flexibility on how we iterate through our data. This gives us more options so we can work with our data in the most efficient manner possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** node (5), make (1)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: find height of binary tree](https://www.linkedin.com/learning/c-sharp-algorithms/solution-find-height-of-binary-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/solution-find-height-of-binary-tree?u=76281980&t=0)** Let's calculate the height of a tree. We'll start off with the base case where the root of the tree is null. If the root is null, then the height of the tree is zero because there are no nodes in the tree. If the root is not null, then we need to account for it in our height. The tree must be at least 1 in height. Now this works if the height of the tree is 0 or 1, but a given root can have left and right subtrees. In order to calculate the full height of the tree, we'll need to take these subtrees into account. We can do that by using our function recursively. We'll calculate the height of the left subtree by calling this same FindHeight function, but we'll pass in root.Left. Then we'll do the same for the right. Now we have the height of the right and left subtrees. The total height will be this level plus the maximum of the left and right subtrees. That's our implementation. Let's take a look at the test code. Here we have a root, so the height of the tree
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-algorithms/solution-find-height-of-binary-tree?u=76281980&t=96)** is at least 1. Then we have left and right subtrees. This makes the height 2. The left subtree also has its own subtrees, left and right. This makes the height 3. Let's run it. And we get what we expect in the output. Thinking of time complexity, this function takes O(n) time because we need to visit every node of the tree in order to calculate the height.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue optimizing algorithms](https://www.linkedin.com/learning/c-sharp-algorithms/continue-optimizing-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-algorithms/continue-optimizing-algorithms?u=76281980&t=0)** - [Kathryn] Congrats on finishing the course. Now you know how to create more efficient programs by optimizing your [[Algorithms]]. As part of this course, we discovered what makes a given algorithm effective, as well as how to make informed assumptions in order to speed up the processing time. We also learned how to describe algorithms using Big O notation, so we could compare one algorithm to another independent of input size. C# has many built-in tools to work with your data. And we discovered how to leverage different [[Data Structures]] in order to make your algorithms more efficient. Creating more efficient algorithms is all about understanding the assumptions you can make about your data and leveraging the tools in your toolkit. To continue optimizing your programs in C#, I encourage you to learn more about what C# has to offer in terms of built-in tools. The more specific [[LinkedIn]] Learning courses, such as C# Collections, are great for building your knowledge of a specific set of tools in C#. Then using the knowledge we've built here, you can decide whether a given tool fits your needs for a particular algorithm. Another path is to learn more about the theory of algorithms and data structures. The programming foundation courses are a great place to start because they provide a more abstract approach when discussing the different ways
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-algorithms/continue-optimizing-algorithms?u=76281980&t=92)** we can work with our data. Thank you for watching the course. I really enjoyed creating it to help you create more efficient C# programs. Good luck and I hope the knowledge you've gained in this course comes in handy whenever you're building programs with C#.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Data Structures]] (2), [[LinkedIn]] (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available

## Skills Covered

- Algorithms
- C#

## Path Context

### In [[C- Excellence- Architecting High-Performance Solutions]]
**1 of 6** | [[C- Applied Data Structures]] →

### In [[Getting Started as a C- Developer]]
← [[C- and .NET Essential Training]] | **4 of 9** | [[C- Delegates, Events, and Lambdas]] →

### In [[Software Development Fundamentals]]
← [[Learning C-]] | **7 of 10** | [[Learning Git and GitHub]] →

## Appears In

- [[C- Excellence- Architecting High-Performance Solutions]]
- [[Getting Started as a C- Developer]]
- [[Software Development Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Structures and Algorithms]] — Algorithms
- [[Learning C-]] — C#
- [[Java Algorithms]] — Algorithms
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#

---

[↑ Back to top](#)