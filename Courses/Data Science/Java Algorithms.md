---
type: course
cssclasses:
  - lle-course
slug: java-algorithms
url: "https://www.linkedin.com/learning/java-algorithms"
duration_minutes: 157
duration: 2h 37m
updated: 12/18/2023
learners: 346150
skills:
  - Algorithms
  - Java
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHIBQUJ2bLBXQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702927839806?e=2147483647&amp;v=beta&amp;t=mj2w570_ktC82avVy24WsyFjrpCC-dxHXaqhuWFoqcU"
linkedin_topic: Data Science
learning_paths:
  - '[[Getting Started as a Java Developer]]'
prev_courses:
  - '[[Java Exception Handling]]'
next_courses:
  - '[[Java- Data Structures]]'
path_nav: '[{"path":"Getting Started as a Java Developer","position":9,"total":10,"prev":"Java Exception Handling","next":"Java- Data Structures"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/algorithms
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Algorithms.md)

![Java Algorithms](https://media.licdn.com/dms/image/v2/D560DAQHIBQUJ2bLBXQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702927839806?e=2147483647&amp;v=beta&amp;t=mj2w570_ktC82avVy24WsyFjrpCC-dxHXaqhuWFoqcU)

# Java Algorithms

> Algorithms are one of the fundamental pillars in any software application, as they give programs a set of instructions to perform a task. In this course, Kathryn Hodge aims to help you create better Java programs by using efficient algorithms. She starts with explaining the basics, detailing what makes a given algorithm effective as well as how to make informed assumptions about their data to crea

> [LinkedIn Learning](https://www.linkedin.com/learning/java-algorithms) | 2h 37m | 346K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (6 videos)
  - [Improve your Java applications with effective algorithms](#improve-your-java-applications-with-effective-algorithms)
  - [Introducing CoderPad challenges](#introducing-coderpad-challenges)
  - [What is an algorithm?](#what-is-an-algorithm)
  - [How to optimize an algorithm](#how-to-optimize-an-algorithm)
  - [Optimize an algorithm in Java](#optimize-an-algorithm-in-java)
  - [How to describe the time complexity of an algorithm](#how-to-describe-the-time-complexity-of-an-algorithm)
- [**1. String Algorithms**](#1-string-algorithms) (8 videos)
  - [Validate Strings in Java: All-or-nothing properties](#validate-strings-in-java-all-or-nothing-properties)
  - [Validate strings in Java: Specific properties](#validate-strings-in-java-specific-properties)
  - [Normalize strings in Java](#normalize-strings-in-java)
  - [Basic parsing and searching strings in Java](#basic-parsing-and-searching-strings-in-java)
  - [Apply custom parsing to search algorithms](#apply-custom-parsing-to-search-algorithms)
  - [Create algorithm-driven strings in Java](#create-algorithm-driven-strings-in-java)
  - [Leverage built-in tools to generate custom data](#leverage-built-in-tools-to-generate-custom-data)
  - [Solution: Reverse each word](#solution-reverse-each-word)
- [**2. Array Algorithms**](#2-array-algorithms) (6 videos)
  - [Linear search arrays in Java](#linear-search-arrays-in-java)
  - [Linear search arrays with Java streams](#linear-search-arrays-with-java-streams)
  - [Binary search arrays in Java](#binary-search-arrays-in-java)
  - [Aggregate and filter arrays in Java](#aggregate-and-filter-arrays-in-java)
  - [Reverse an array in Java](#reverse-an-array-in-java)
  - [Solution: Rotate an array](#solution-rotate-an-array)
- [**3. Linked List Algorithms**](#3-linked-list-algorithms) (5 videos)
  - [What is a linked list?](#what-is-a-linked-list)
  - [Using the built-in linked list data structure in Java](#using-the-built-in-linked-list-data-structure-in-java)
  - [Create a custom data structure for linked list algorithms](#create-a-custom-data-structure-for-linked-list-algorithms)
  - [Linked list algorithms: Delete back half of a linked list](#linked-list-algorithms-delete-back-half-of-a-linked-list)
  - [Solution: Sum contents of a linked list](#solution-sum-contents-of-a-linked-list)
- [**4. Queue and Stack Algorithms**](#4-queue-and-stack-algorithms) (9 videos)
  - [What is a queue?](#what-is-a-queue)
  - [Standard queue operations in Java](#standard-queue-operations-in-java)
  - [Queue algorithms: Generate binary numbers](#queue-algorithms-generate-binary-numbers)
  - [What is a stack?](#what-is-a-stack)
  - [Basic stack operations in Java](#basic-stack-operations-in-java)
  - [Stack algorithms: Theorizing an algorithm](#stack-algorithms-theorizing-an-algorithm)
  - [Stack algorithms: Next greater element](#stack-algorithms-next-greater-element)
  - [Stack algorithms: Matching parentheses](#stack-algorithms-matching-parentheses)
  - [Solution: Evaluate reverse polish notation](#solution-evaluate-reverse-polish-notation)
- [**5. Algorithms for Hash-Based Structures**](#5-algorithms-for-hash-based-structures) (5 videos)
  - [Hash-based structures in Java](#hash-based-structures-in-java)
  - [HashMap and HashSet operations in Java](#hashmap-and-hashset-operations-in-java)
  - [Leverage the HashSet type in Java algorithms](#leverage-the-hashset-type-in-java-algorithms)
  - [Use the HashMap type in Java algorithms](#use-the-hashmap-type-in-java-algorithms)
  - [Solution: Detect a cylic linkedlist](#solution-detect-a-cylic-linkedlist)
- [**6. Tree Algorithms**](#6-tree-algorithms) (5 videos)
  - [What is a tree?](#what-is-a-tree)
  - [Binary trees in Java](#binary-trees-in-java)
  - [What are tree traversals?](#what-are-tree-traversals)
  - [Implement tree traversals in Java](#implement-tree-traversals-in-java)
  - [Solution: Find height of binary tree](#solution-find-height-of-binary-tree)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue optimizing algorithms](#continue-optimizing-algorithms)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Improve your Java applications with effective algorithms](https://www.linkedin.com/learning/java-algorithms/improve-your-java-applications-with-effective-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/improve-your-java-applications-with-effective-algorithms?u=76281980&t=0)** - [Kathryn] [[Algorithms]] are one of the fundamental pillars in every software application. They give programs a set of instructions to perform a task. That task might be validating datum, searching for datum, or even creating new data. It could also be just displaying Hello, World in the console. In order to create more advanced and sophisticated applications, it's important to hone in on the algorithms your software is using. Some are more efficient than others in terms of time and space complexity and it's essential to understand the speed implications of the software you're creating. It's also important to understand the assumptions you're making about the data you're working with, otherwise your algorithm might not work as expected. Hi, I'm Kathryn Hodge and I'm a software engineer. In this course, we'll look at how to create more efficient programs by exploring different types of algorithms. Many of these algorithms are built right into the [[Java]] language and they can be a great choice. However, most of the time, you'll need to create a custom algorithm in order to work with your data in exactly the way you want. In this course, we'll explore what makes a given algorithm effective as well as how to make informed assumptions about your datum in order to speed up that processing time. We'll also discover how to leverage different [[Data Structures]] to make your algorithms more efficient. Without any further delay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Java]] (1), [[Data Structures]] (1)
> **CLI Commands:** make (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [kathryn] (1)

#### [Introducing CoderPad challenges](https://www.linkedin.com/learning/java-algorithms/introducing-coderpad-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/introducing-coderpad-challenges?u=76281980&t=0)** - [Instructor] This course includes interactive code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad. And they appear in the same area of the course page when you watch the course's videos. We recommend using a desktop browser for the best experience. But you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four main areas. Instructions, a console for output, a code editor for your answer, and another code editor where you can see how your code is used. You can use these drag handles to allocate space as you'd like. Let's complete this coding challenge. There are comments in the starting code showing you where to implement your solution. Let's add one. When you click the Test My Code button, you'll see a message indicating whether your code returned a successful results. If your code isn't successful, you can ask for help. Let's change this to return zero. It's not the expected result. Luckily, we can get some hints. The Show Expected Results and Show Hints variables
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/introducing-coderpad-challenges?u=76281980&t=94)** determine whether you see the expected results and any hints. Let's change these to true. In the output, we can now see the expected results and a hint on how to implement the solution. The code editor in the lower right shows how your solution is used. You can change this code to experiment with different test cases. Let's change five to 30. Now 30 is the largest number in the array. And that's our new expected result. When you've finished each code challenge, return to the course and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [What is an algorithm?](https://www.linkedin.com/learning/java-algorithms/what-is-an-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/what-is-an-algorithm?u=76281980&t=0)** - [Instructor] An algorithm is a series of defined instructions that perform some task. For example, we can break apart the task of making a sandwich into an algorithm. The first instruction would be to retrieve the ingredients as well as any tools such as a knife. Then, you might slice the bread and spread mayo or mustard onto the sandwich. Next, you would place ham and cheese on the bread. Then, you'd combine the pieces of bread together, making your sandwich complete. Most of us have made many sandwiches in our lifetime, so we don't think about each individual step that has to happen in order to make a sandwich. However, a computer is different, every step must be laid out in order to complete a software-based task. Given this, in [[Java]], almost everything you create is part of some algorithm. Every line of code you write is an instruction that's a step in achieving some task. It might be to find the even numbers in an array or to validate whether a string has certain components. There are many different sets of instructions that complete the same task. Some sets are more efficient than others, but they all have defined instructions that set out to complete a given task. That's what makes an algorithm an algorithm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [How to optimize an algorithm](https://www.linkedin.com/learning/java-algorithms/how-to-optimize-an-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/how-to-optimize-an-algorithm?u=76281980&t=0)** - [Instructor] There are many different ways to complete a given task. This means there are also many different [[Algorithms]] to solve a problem. Some algorithms are more efficient and others are less efficient. With the sandwich algorithm, one way to make a sandwich is to go to the store for each ingredient. You make multiple trips to the store and you start making the sandwich after gathering all the ingredients. Before we assumed we had all the proper ingredients and required tools in the kitchen. By making this assumption, we were able to save time by not running to the store. The same is true for algorithms. To make an algorithm more efficient, you have to make an assumption about your data. You might assume that your data is sorted or that it will only contain integers or strings. Maybe it will only contain positive integers or strings with only alphabetical characters. With these assumptions, we can skip steps, such as normalizing the string, or for the sandwich analogy, running to the grocery store. However, it's very important to understand what assumptions your algorithm is making. If you make a wrong assumption about your data, the algorithm will likely not perform the task as expected. A slow working algorithm is always preferred to a fast algorithm that isn't trustworthy and can spit out a wrong response. That's why it's essential to make informed assumptions
>
> **[1:33](https://www.linkedin.com/learning/java-algorithms/how-to-optimize-an-algorithm?u=76281980&t=93)** about your data, and you can leverage these assumptions to optimize your algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4)
> **CLI Commands:** make (6)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Optimize an algorithm in Java](https://www.linkedin.com/learning/java-algorithms/optimize-an-algorithm-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/optimize-an-algorithm-in-java?u=76281980&t=0)** - [Instructor] While studying algorithmic theory is important, it's vital to apply theory to practice. Let's modify a [[Java]] algorithm and make it more efficient. I've opened up this sample code in IntelliJ, a Java IDE, but feel free to use the IDE of your choice. You can find the sample code in the exercise files of this course. In this file, we have an algorithm called Find Maximum. It finds the largest of three numbers. If there are duplicate entries, we still return whatever the maximum is. Now inside this algorithm, we do several comparisons in order to find the maximum of the three numbers. We can actually eliminate some of these comparisons and make our algorithm more efficient by using assumptions. Now inside this algorithm, we do several comparisons to find the maximum of the three numbers. We can actually eliminate some of these comparisons and make our algorithm more efficient by using assumptions. Instead of doing multiple checks with each input, we can keep track of the maximum so far using a variable. Let's create a new function with our refactor. We'll call it findMaximum2. Inside the function, we'll create a variable called max and start it off at a. Then we'll compare the max to b. If b is greater than the max,
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/optimize-an-algorithm-in-java?u=76281980&t=94)** then we'll set the max equal to b. Before, we had to add checks for if a and c were equal. With this implementation, it doesn't matter whether they're equal because the value is already stored in the max. At this point, the max variable contains the maximum of a and b. To check whether c is greater, we just need one more comparison. If c is greater than the max, then we'll set the max equal to c. Now the max variable contains the maximum of a, b and c. This is exactly what we're looking for so we'll return it from the function. Let's use the new [[Algorithms]] implementation.
>
> **[2:25](https://www.linkedin.com/learning/java-algorithms/optimize-an-algorithm-in-java?u=76281980&t=145)** To run it, I'll click the Play button. In the output, we get the maximum of each set of values. The new implementation only does two comparisons per call. The code is also more readable with the defined variable and less comparisons. We use the assumption that the max variable will contain the maximum for each point in the program's execution. When we check the max with c, we assume the max variable holds the maximum of a and b. This allows us to do less comparisons and optimize the algorithm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Algorithms]] (1)
> **CLI Commands:** find (4), make (3)
> **Exercise Files:** sample code (2), exercise files (1)
> **Env Vars:** ide (2)
> **Code Identifiers:** findmaximum2 (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [How to describe the time complexity of an algorithm](https://www.linkedin.com/learning/java-algorithms/how-to-describe-the-time-complexity-of-an-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/how-to-describe-the-time-complexity-of-an-algorithm?u=76281980&t=0)** - [Instructor] Some [[Algorithms]] are more efficient than others. And we often describe an algorithm's efficiency using Big-O notation. Big-O notation allows us to compare algorithms independent of input size. Let's say we wanted to compare search algorithms for a list. If the item we're searching for will always be the first or last element of a list, we can say it takes constant time or O(1) time. No matter what the input sizes, we just have to check the first and last element to find our answer. If the item we're searching for is somewhere in the list but we don't know where, we might have to check every single element. In the best case, the item we're looking for would be the first element we check. In the worst case, the item would not exist in the list and we would have to check every single element. Most algorithms have the best case and worst case performance time. And they're often not the same. For this search algorithm, the best case would be constant time. The first item we check is the item we're searching for. The worst case would be linear time. As the input size increases, the search time increases. With Big-O notation, the worst case would be O(n) where n is the input size. In deciding which algorithm to use, we often use the worst case time complexity as a deciding factor.
>
> **[1:35](https://www.linkedin.com/learning/java-algorithms/how-to-describe-the-time-complexity-of-an-algorithm?u=76281980&t=95)** However, if the worst case happens only 5% of the time, then it might be useful to consider the average case or the best case as well. The more informed assumptions we're able to make about our data, the more efficient we can make our algorithms. With the first search algorithm, we assume that the item we're searching for will be the first or last element. This cuts the best and worst case down to just constant time. With the other algorithm, we do not make this assumption. This lengthens the algorithm's worst time to O(n). Some other common time complexities an algorithm can have are logarithmic or O(log(n)), an exponential, O of N squared. Constant time is the most efficient out of these, with n factorial being the least efficient. With n as a generic input size, we're able to compare these notations in terms of efficiency. We also use this notation to describe space complexity. Does the algorithm use constant space or as much space as the size of the input? This can be another factor in deciding which algorithm to use to complete a task. No matter how efficient your algorithms are, Big-O notation allows you to compare them regardless of input size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (6)
> **CLI Commands:** make (3), find (1)
> **Speakers:** - [instructor] (1)


### 1. String Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [Validate Strings in Java: All-or-nothing properties](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-all-or-nothing-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-all-or-nothing-properties?u=76281980&t=0)** - [Instructor] One type of algorithm you can create is a validation algorithm. You can validate whether a given input string has certain properties or attributes. For example, you can create an algorithm that checks if a string has all uppercase or all lowercase letters. You can also create an algorithm that validates whether or not the string has all alphabetical characters, or if it has at least one number. For a validation algorithm, the output is a Boolean, either true or false. The string either has the given properties or it does not. Let's try creating some validation [[Algorithms]] in [[Java]]. The first validation algorithm we'll create is a function that checks whether a string has all uppercase letters. We'll call it isUppercase, and it will take in a string. There are several helpful tools in the standard library that can help us out with the implementation. First, we'll need to iterate through the string in order to access each character. If each character is uppercase, then the whole string must be uppercase. We can do this using the Java Streams API. We'll create a character stream that streams through the characters and checks that every character is uppercase. To create a character stream, we'll use the chars method. To check the validity of each character,
>
> **[1:33](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-all-or-nothing-properties?u=76281980&t=93)** we'll use the allMatch function. This will check that every character meets the condition within the parentheses. For the condition, we'll check if the character is uppercase. To do that, we can use the character's isUppercase function. We cannot use this function directly on the string because it only works with characters. However, we can iterate through the string and use this function as a helper. If all the characters are uppercase, then this function will return true. Otherwise, it will return false. So we'll just return it. Many beginner programmers might wrap this statement as an if/else statement. However, this if statement is not needed, because the allMatch function will return a Boolean, true or false, and it's the correct Boolean that we want our function to return. This means we can keep it as a one-liner. Return s.chars allMatch Character isUppercase. We can also create a similar function, but for lowercase strings. All we have to do is switch the condition. Instead of isUppercase, we'll use isLowercase. Another option is to use noneMatch. This checks that no characters have a given property.
>
> **[3:11](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-all-or-nothing-properties?u=76281980&t=191)** In this case, that property is that there are no uppercase letters. In fact, there are lots of different properties we can check that are built into the character class. With isLetter, we can check that the string only contains letters. With isDigit, we can check that the string only contains digits. These are other examples of validations you can perform to determine whether a string has a set of properties or not. Let's try out our validation algorithms.
>
> **[3:51](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-all-or-nothing-properties?u=76281980&t=231)** We'll run the main function, and in the output, we should get false true true false. And that's exactly what we see. The all uppercase and all lowercase strings are validated as expected. With these algorithms, we're able to validate an all-or-nothing property, whether or not the entire string was uppercase or lowercase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Java]] (2)
> **Code Identifiers:** isuppercase (4), allmatch (3), islowercase (1), nonematch (1), isletter (1)
> **Definitions:** is a  (3)
> **Env Vars:** api (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Validate strings in Java: Specific properties](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-specific-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-specific-properties?u=76281980&t=0)** - [Instructor] Sometimes, we need to validate more specific properties on a given piece of data. For example, we might want to check if a string has at least one digit or at least one upper case letter. Validating specific properties can come in handy if we need to verify password complexity. Let's create an algorithm that validates this complexity. In other words, whether a string has at least one number, one uppercase letter, and one lowercase letter. We'll call it, is password complex. For the implementation, will iterate through the characters, s dot chars, but instead of using all match, we'll use the any match method. This will return true as long as any character in the string meets the inputted requirement. Our requirements are one upper case, one lower case and one number, let's add in those. We'll call any match with each requirement and then use the and operator to link them into a single expression. We'll return that from the function, we'll check is uppercase then at least one lowercase letter and one number with is digit. Now you might be wondering why can't we put all of these conditions in a single, any match call. Instead of using the method reference,
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-specific-properties?u=76281980&t=94)** we could create a function and check each condition. It would take in the character and we'd call each validation.
>
> **[1:51](https://www.linkedin.com/learning/java-algorithms/validate-strings-in-java-specific-properties?u=76281980&t=111)** Well, with this implementation, only one of the conditions has to be true for one character in the string. If the string has at least one upper case letter, it returns true. The string could have no digits or no lowercase letters, and it would still return true because only one character has to meet the condition in the parentheses. This means we need to iterate through the string and check each condition individually. This is what we did with the previous implementation. Let's test our algorithm. With these inputs, we should expect only the first password to pass. The others only have some requirements or none at all. Let's run it. Only the first input returns true, which is what we expect. Validation [[Algorithms]] like these can be very useful because once they're run, certain properties can be guaranteed about your input data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Normalize strings in Java](https://www.linkedin.com/learning/java-algorithms/normalize-strings-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/normalize-strings-in-java?u=76281980&t=0)** - [Instructor] Before processing a string, it can be helpful to normalize it to a common form in order to make your algorithm more efficient. Let's say you're searching for a particular letter within a string. You could search for that letter once in the lowercase form, and once in the uppercase form, this means you would have to run two different searches to find out if the letter exists. Another way to go about this is to convert the string to all lower case. With this approach, you could search for the letter in the lowercase form and only have to search for one form of the letter. With two [[Forms]], you're still iterating through the string twice, but if the number of forms the letter can appear increases, the amount you have to search stays the same. It also makes your code less complex by searching for one form of the data. This is one way to normalize your string data, converting all the characters to a certain case, uppercase or lowercase. Instead of normalizing your input, another option is to limit your input to only a certain type. For example, your processing algorithm would only take in strings with all lowercase letters and it could use a validation algorithm to deny any other type of input. However, we want our [[Algorithms]] to be flexible so we can reuse them for strings with many different contents.
>
> **[1:33](https://www.linkedin.com/learning/java-algorithms/normalize-strings-in-java?u=76281980&t=93)** Normalizing your input to a common form can help you accomplish this. Let's take a look at how we can normalize our data in [[Java]]. To start, we'll create a function called normalized string. It will return a string and take in a string, the string to normalize. Previously, we validated the contents of the input string. In this case, we'll actually be creating a new string, a normalized string. It will have all the characters of the old string, but in the lowercase form. To do this, we'll access the string and use the two lowercase method. Since the original string will not be modified, we'll need to save the outputted string to a variable. We'll call it lower cased. Two lowercase follows a pattern that's actually common for many algorithms. Instead of modifying the input data, anew piece of data is returned based on the input. We also get some other operations to make our data uniform with the Java standard library. We can remove the white spaces from the end of the input data with the trim function, we'll access our lowercase string and use trim. Again, this will not modify the original string lower cased. Instead, it will output a new string,
>
> **[3:06](https://www.linkedin.com/learning/java-algorithms/normalize-strings-in-java?u=76281980&t=186)** which we'll call trimmed. Now, if there are certain characters we don't want to consider, we can easily remove them using the replace function. We'll continue to iterate on the string and use replace to replace the commas with the empty string.
>
> **[3:29](https://www.linkedin.com/learning/java-algorithms/normalize-strings-in-java?u=76281980&t=209)** Let's put this together all in one line. We'll return S to lower case, then we'll trim the string and replace the commas with the empty string. Since each call returns a new string, we simplify the algorithm to call one normalization after another. Let's try it out. We'll add some spaces, some capital letters, a comma, and some more spaces. With this input, the algorithm will convert the string to lowercase, trim off the spaces and remove the comma. Let's run it. The output is normalized, it's all lower case with no commas and no extra spaces on the ends. When we normalize our data to a common form, we make our algorithms more flexible, more efficient, and easier to read and maintain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Forms]] (2), [[Java]] (2)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Basic parsing and searching strings in Java](https://www.linkedin.com/learning/java-algorithms/basic-parsing-and-searching-strings-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/basic-parsing-and-searching-strings-in-java?u=76281980&t=0)** - [Instructor] A common programming task is to search for a piece of data within a string. Depending on the assumptions you make about a string's data, you can make an algorithm more or less efficient. If you know nothing about the string, you have to check every piece of data within the string in order to find the data you're searching for. If you know the string has its characters in a sorted alphabetical order, then you can optimize the algorithm by starting your search in the front, back, or middle of the string. In all of these cases, you need to parse the data within the string in order to find the character or substring you're looking for. Let's take a look at how to do that in [[Java]]. The least complex and least efficient way to search for a subset of characters within a string is to use the built-in contains method. We can use the contains method by accessing the string, in this case s, and we can say s.contains LL. We'll print this out to the console. The contains method will return true or false depending on whether the input string has this double L or two L's in a row. If the input string has two L's but they're not back to back, then contains will return false. This is also case sensitive, so we need to normalize our input if the casing
>
> **[1:35](https://www.linkedin.com/learning/java-algorithms/basic-parsing-and-searching-strings-in-java?u=76281980&t=95)** between the string and the substring did not match. We could do this using the two uppercase or two lowercase function that we've seen previously. Let's run it. In the output, we get true because hello does contain two uppercase L's back to back. Now this built-in algorithm works, but it doesn't do any efficiencies behind the scenes. It checks every character until the substring is found within the string. If we wanted to work with each character individually, we need to iterate through the string. One option is to use a forEach loop and convert the string into a character array. For each character in the strings character array, we'll do the following in the curly brackets. In this case, we'll just print the character. Another option is to use a regular for loop. We'll iterate through the string starting at zero up to the string's length. Along the way, we'll increment i by one. On each iteration, we'll access each character using the string's charAt method. We'll pass in the index and save the character in a variable called c, then we'll print the character.
>
> **[3:11](https://www.linkedin.com/learning/java-algorithms/basic-parsing-and-searching-strings-in-java?u=76281980&t=191)** With this version, we get access to the character's location in the input, the index i, as well as the character itself. If we run the code, we'll see the characters printed out twice, once for the first loop and again in the second loop, Let's run it. Now, both types of loops are useful. It just depends on what you're searching for or what you need to parse out of the string.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **CLI Commands:** make (2), find (2)
> **Code Identifiers:** foreach (1), charat (1)
> **Speakers:** - [instructor] (1)

#### [Apply custom parsing to search algorithms](https://www.linkedin.com/learning/java-algorithms/apply-custom-parsing-to-search-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/apply-custom-parsing-to-search-algorithms?u=76281980&t=0)** - [Instructor] Sometimes you'll need to parse the string yourself in order to retrieve the data you're looking for. Let's say we wanted to find out if a certain character exists at an even index or an even location within the string. In this case, we'll need to access the location of the character as well as the character in the string itself. This means we'll use a for loop. Now, instead of incrementing, I by one, we could actually increment I by two. We only need to check the even indices of the string, since we're checking whether the item is at an even index, we can skip over the odd indices, cutting our time complexity in half. With this new incrementation, we'll need to change our conditions so we don't get a null pointer exception in the body of the for loop. We don't want to try to access a character at an invalid location. Since we're skipping every other indices in the string, we can change our condition to s.length divided by two plus one. Now let's add some code to the for loop, the I index is an even location in the string. This means we just need to check if the character at that location matches our item. If it does, we'll return true and end the function early. To retrieve the character, we'll use charAt,
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/apply-custom-parsing-to-search-algorithms?u=76281980&t=94)** if the charAt(i), which is an even location equals our item, then it will return true. If the character does not exist at an even index in the string, then the for loop will exit without returning true. Instead we'll want to return false because the item, while it may exist in the string, is not at an even index. Now, if our string is empty or null, this function will give us an error because we'll try to access a string that doesn't have any contents or doesn't exist at all. To handle this, we can add a base case to catch these types of data. If the string is null, or the string is empty, we'll return false. We do the null check first because we cannot access a property of null. If we swapped these conditions, we would get a null pointer exception on the is empty call when S is null. Let's test out this function. It's important to remember that our algorithm is case sensitive. This means if we put a lower case L, instead of an upper case L, the first call would return false. To handle this, we can add some normalizations, but let's keep it like this for now. The only ones that return true are the first and the third.
>
> **[3:10](https://www.linkedin.com/learning/java-algorithms/apply-custom-parsing-to-search-algorithms?u=76281980&t=190)** The first L is at index two. And H is at index zero, both of which are even. With built-in functions and for loops, we can easily parse through a string and search for specific contents.

> [!info]- Semantic Content
>
> **Code Identifiers:** charat (2)
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Create algorithm-driven strings in Java](https://www.linkedin.com/learning/java-algorithms/create-algorithm-driven-strings-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/create-algorithm-driven-strings-in-java?u=76281980&t=0)** - [Instructor] Another standard programming task is to create a new string based on input data. We've seen this a bit previously with toLowerCase and replace. For each of these, a string is inputted in the function and a new string is created using the data from this input string. These are built into the standard library but let's try creating our own functions that build a string dynamically using input data. The algorithm we'll create will build the reverse of whatever string is inputted. It will reverse the string. We'll start by covering our base cases. This is when the string is null or the string is empty. In these cases, we'll just return the input string. Now, let's reverse the string. When performing operations on strings, it can be very easy to create a bunch of unnecessary strings as you try to build this output string. This happens because string are immutable. You can't change them once they're created. To make our algorithm more efficient so that it doesn't create this unnecessary data, we'll use a StringBuilder. The StringBuilder object works differently than a string in memory. When the StringBuilder object is modified,
>
> **[1:33](https://www.linkedin.com/learning/java-algorithms/create-algorithm-driven-strings-in-java?u=76281980&t=93)** it doesn't create a new StringBuilder. Instead, it dynamically expands memory to accommodate the modified string. The way a StringBuilder works in memory is what makes it more efficient than a regular string if you need to process it and run mutable operations. To reverse the string, we'll use a for loop. However, instead of iterating through the string starting at the first index, we'll start at the last index. The last index for a character to live at is s.length - 1. So that's where our iteration begins. On each iteration, we'll decrement i by one and we'll continue to decrement until we get to the start of the string. That's where the ii equals zero. Using a for loop will allow us to iterate through the string backwards, which can be a good strategy for many [[Algorithms]], including this one. Since we're going through the string backwards, all we have to do is append the character we're at to the StringBuilder. We'll use our StringBuilder .append and access that character in the string. At the end of the loop's execution, the reversed string will be built and we can return it from the function. All we have to do is convert it into a string. Let's test our algorithm. We'll start with our base cases.
>
> **[3:13](https://www.linkedin.com/learning/java-algorithms/create-algorithm-driven-strings-in-java?u=76281980&t=193)** Then we'll reverse some strings.
>
> **[3:22](https://www.linkedin.com/learning/java-algorithms/create-algorithm-driven-strings-in-java?u=76281980&t=202)** Let's run it. In the output, we get the original strings for our base cases and we get the other three strings reversed. Our algorithm uses each character exactly, so the casing remains the same. It also works regardless of what type of characters is used, including punctuation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** tolowercase (1)
> **Speakers:** - [instructor] (1)

#### [Leverage built-in tools to generate custom data](https://www.linkedin.com/learning/java-algorithms/leverage-built-in-tools-to-generate-custom-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/leverage-built-in-tools-to-generate-custom-data?u=76281980&t=0)** - [Instructor] Reversing a string is a pretty common operation in programming and there are several ways to do it in [[Java]]. With the previous algorithm, we did it with a more bare bones approach where we iterated through each character and built our new string one character at a time. Another way we can reverse the string is by converting our data into a data type that has a built-in reverse method. In fact, the string builder class has a built-in reverse function. Let's create a string builder with the input string. To reverse the string, we can use the reverse function. This reverses the string. Now we can convert the string builder back into a string and return it from the function. When starting your [[Software Development]] journey, sometimes it can feel like you're cheating by using the functions built into the language or into the standard library. This is not cheating. Software engineering is all about using the best tools for the job to create the most accurate output through the most efficient process. If that happens to be through a standard library function, great. If it happens to be through something custom that you have to build, that's also great. Typically, if there's something already built to do the job and it does the job well, it's better to use that than to create your own thing from scratch.
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/leverage-built-in-tools-to-generate-custom-data?u=76281980&t=94)** The function that's already built is likely well tested and used by many other systems and programs, so if it does what you need, use it. Now let's go back to our reverse function. Just like our previous implementation, we'll need to make sure that the string is not null, otherwise we'll get a null pointer exception. We can use that same base case from before. Let's try out this implementation. Instead of reverse, we'll use reverse two.
>
> **[2:12](https://www.linkedin.com/learning/java-algorithms/leverage-built-in-tools-to-generate-custom-data?u=76281980&t=132)** The output is as expected. It remains the same. Even with a common programming task, there's never just one way to write an algorithm. Each has their pros and cons depending on the amount of complexity you want to introduce into your code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Software Development]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Reverse each word](https://www.linkedin.com/learning/java-algorithms/solution-reverse-each-word-19873070?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/solution-reverse-each-word-19873070?u=76281980&t=0)** - [Instructor] Let's create an algorithm that reverses each [[Microsoft Word|word]] in a sentence. The first step is to check if the input falls into a base case category. This is where the sentence is null or the sentence is empty. If that's the case, we'll return the empty string. Now we're ready to implement the core of the function. Let's create a result variable to hold our end result. This'll be a StringBuilder because we'll slowly build up our result with each reversed word before we return it from the function. For this challenge, we're reversing each individual word, not the entire input string itself. In order to reverse, we'll need to pluck out each word so we can individually reverse it. We can use the split function on the input to create an array of words. Each word is separated by spaces. The split function separates the input string into separate strings, splitting on the space, which is the delimiter character we've added here. With these words, we can iterate through the array and reverse each word individually. Then we can add them to our results StringBuilder. In the body of the for loop, we'll use a reverse function to reverse the word.
>
> **[1:38](https://www.linkedin.com/learning/java-algorithms/solution-reverse-each-word-19873070?u=76281980&t=98)** Then we'll append it to our result StringBuilder. With the split function, we separated our string into words based on the location of the spaces. However, the spaces were removed, so we'll need to add them back in. This works except for the last word, which doesn't have a space at the end. We can account for this by adding a trimToSize call, which will trim the spaces off the ends. With that, we're ready to return the new string. With each word reversed. We'll use our result variable and call toString and return it from the function. Let's try it out. In the output, we get Sally is a great worker, but each word within the string is reversed. The casing also remains the same. Let's try another input. Racecar madam. The program says we're correct, but racecar and madam look the same. This is because racecar and madam are palindromes, so they read the same when they're reversed. So our algorithm works. If you want to continue to add on to this solution, start by removing assumptions about your input.
>
> **[3:12](https://www.linkedin.com/learning/java-algorithms/solution-reverse-each-word-19873070?u=76281980&t=192)** What would happen if there was punctuation? What if there were extra spaces between the words? How would you want your algorithm to handle that? Asking questions about your data and improving your algorithm based on your findings is a great way to improve your skills as a software engineer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (10)
> **Code Identifiers:** trimtosize (1), tostring (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 2. Array Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [Linear search arrays in Java](https://www.linkedin.com/learning/java-algorithms/linear-search-arrays-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/linear-search-arrays-in-java?u=76281980&t=0)** - [Instructor] As a software engineer, you'll need to search through [[Data Structures]] using [[Algorithms]] in order to retrieve relevant data. With a search algorithm, you often need to input the data you need to search and the item you're trying to find. Sometimes the algorithm will return a Boolean, true or false depending on whether the item exists. It can also return the item itself with more data. Let's look at how we can search for data in the array data structure. One option is to do a linear search, also called a sequential search where we look at each item in the array one at a time in order. We can do this using a for each loop. For each integer in the array, if it's equal to the item, we'll return true, we found the item. If we search through the entire array and still cannot find in, then it must not exist in the array and we return false. Another option is to return the data instead of returning true or false. If we find the data, we can return the item. And if we don't find the data, we can return a sentinel value. This is a value we know will never be the value of the item. And it can serve as a not found value. Our sentinel value will be -1. Now our function returns an int.
>
> **[1:36](https://www.linkedin.com/learning/java-algorithms/linear-search-arrays-in-java?u=76281980&t=96)** Yet another option instead of returning a sentinel value, we can also return null. However, we need to make the return type integer with a capital I. An int is a primitive data type and cannot be null. Integer is an object so it can have the value null, so that's why it becomes our new return type. Let's try running the function. We get back the data for the first execution and null for the second. This is what we expect. With algorithms, we have many different options for the data we return.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Data Structures]] (1)
> **CLI Commands:** find (4), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Linear search arrays with Java streams](https://www.linkedin.com/learning/java-algorithms/linear-search-arrays-with-java-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/linear-search-arrays-with-java-streams?u=76281980&t=0)** - [Instructor] While we can search for data in arrays, using for loops, we can simplify our implementation quite a bit using [[Java]] streams. We can turn the array into a stream and filter out data based on a condition to find the data we're searching for. To turn an array into a stream, we can use the stream function from the arrays class. Then we'll pass in our array, we'll also import the array class at the top. As we stream through each element or go through each element, we'll want to filter based on a condition. In this case, that's whether a given element equals the element we're searching for. Then we can see if at least one item meets the condition using find first. Now this find first call will return an optional, specifically an OptionalInt. This is also something we'll need to import. An optional acts as a container object to help prevent null exceptions. In our case, if the array contains the number, then the optional will contain the item. If the array does not contain the item, the optional will be empty. Previously we had an algorithm that returned null. If you have plain null values scattered throughout your program, you might forget to do a null check and end up with a null pointer exception. This new implementation prevents this
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/linear-search-arrays-with-java-streams?u=76281980&t=94)** because you have to unbox the value before using it. Let's try it out. In the main method, we'll call our linear search algorithm. We'll call it with the array and one. If the optional is present, meaning the item does exist in the array, it was found, we'll print it out. For this call, one will be printed out because one does exist in the array. If we call this function again with eight, eight will not be printed out because eight does not exist in the array. Let's run it. In the output, we get the number one because it exists in the array. It was found with our search algorithm. By using Java streams, we were able to simplify our search implementation to just a single line of code and prevent those null pointer exceptions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **CLI Commands:** find (3)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### [Binary search arrays in Java](https://www.linkedin.com/learning/java-algorithms/binary-search-arrays-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/binary-search-arrays-in-java?u=76281980&t=0)** - [Instructor] Searching data is a common task in [[Software Development]]. In order to optimize a search algorithm, you'll need to make assumptions about your data. For example, if you know your data is sorted, you can start at the middle and then work your way towards the beginning or end of the array, depending on where the items should be located. If the array's data is sorted, one algorithm we can use is binary search. Binary search is a divide-and-conquer algorithm wherein each step, it halves the number of elements it has to search through. For example, if we had an array of sorted numbers, the algorithm would start at the middle. Depending on whether the item we're searching for is greater than or less than the item we're looking at, it would continue its search in that portion of the array. Let's say the number we're looking for is 50. The algorithm would start at search index three, or item 20. That's the middle of the array. Since 20 is less than 50, it would continue its search into the second half of the array, with 39, 50, and 92. The midpoint of this array is 50, and that happens to be the item we're looking for. This means instead of doing six comparisons, we only had to do two to find our element. If we had to look at each element, the algorithm would run in O event time.
>
> **[1:33](https://www.linkedin.com/learning/java-algorithms/binary-search-arrays-in-java?u=76281980&t=93)** However, since we have the number of elements with each comparison, this algorithm runs in O of log n time. We were only able to do this because we assumed the array was sorted. If it was not sorted, then this algorithm would not work as expected. Let's try implementing binary search in [[Java]]. We'll have this algorithm input an array and the item we're searching for. There are lots of different things this function could return, whether that's if the item exists, a boolean, or even the index of where the item was found. To, keep things simple, we'll return a boolean that's true or false depending on whether the item exists. Now for the implementation. The first step is to create variables for our min and max indices. This will help us bucket the inner array we're searching through. To start, that's the full array, so we'll start the min at zero and the max will be the length of the array minus one, the last index. We'll want to continue searching through the array until the min is greater than the max. If the min is greater than the max, then the inner array we're searching through is empty and the item must not exist in the array. Let's create a while loop, and while the min is less than or equal to the max, we'll continue to search for the item. If we don't find the item in the loop, we'll return false,
>
> **[3:12](https://www.linkedin.com/learning/java-algorithms/binary-search-arrays-in-java?u=76281980&t=192)** because the item must not exist in the array. In the while loop, we'll create a midpoint using the min and max so we can start our search. We can calculate the midpoint by adding the min and max and then dividing by two. Then we'll check whether the item is at the midpoint of the array, this inner array. If it is, we've found the items, so we can just return true. Otherwise, we'll need to search through a sub-array of this inner array. We can determine where to continue our search by checking whether the item we're searching for is less than the item at the midpoint. If this happens to be the case, we need to search through the front half of the array. We can do this by setting max equal to the midpoint minis one. if the item we're searching for is greater than the item at the midpoint, then we need to search through the back half of the inner array. This means we'll need to bump up the minimum to the midpoint plus one. And that's our implementation, we're done! Let's test it out. We'll try it with a few different inputs. The first two items exist in the array and the last does not. Let's run it. It works as expected. It's important to note that we're making some serious assumptions here.
>
> **[4:47](https://www.linkedin.com/learning/java-algorithms/binary-search-arrays-in-java?u=76281980&t=287)** We're assuming the array is sorted, and that it's sorted in ascending order. If these were not true for the input array, the implementation would not work as expected. Instead, we'd have to normalize our array by sorting it in ascending order, which would add some time complexity to the algorithm. This is another thing to consider. How long will it take to sort the array? Depending on what sorting algorithm you're using, it could take longer to sort the array than to just do a linear search. At that point, it depends on how useful it is to have the data sorted. Will you be running multiple searches on the data, making it optimal to do the sorting? Either way, it's important to consider your assumptions in how you're using your data in the context of your code base. Now, Java does have a built-in function for binary search. It lives in the arrays class. While this can be useful, it's important to know how it works before applying it to your data. That's why we spent time here, exploring the binary search algorithm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Software Development]] (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Aggregate and filter arrays in Java](https://www.linkedin.com/learning/java-algorithms/aggregate-and-filter-arrays-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/aggregate-and-filter-arrays-in-java?u=76281980&t=0)** - [Narrator] Aggregating and filtering data are standard programming operations. When aggregating data, you combine two or more data sets into a single data set. Sometimes when combining these data sets, you'll want to filter out data that does not meet your requirements. Imagine we have two arrays and we want to create a new array that contains all the even numbers from each array. There are a few different ways we could accomplish this. One way is to merge the arrays and then remove the invalid items. Another way is to check each item to see if it meets the requirements before adding it to the combined array. We can also sort each array then take only the contents that are even for the combined array. However, sorting wouldn't help much here since the even items could be very large or very small. Given this, each of these [[Algorithms]] will have different time complexities. To keep things simple, we're going to take the second approach where we check each item before adding it to the new array. Let's try it in [[Java]]. Here, we have a function that takes in two arrays and returns a new array with the even numbers. To keep track of the even numbers, we'll create an ArrayList. It will contain integers, and we'll call it Result. We could create a new array instead
>
> **[1:38](https://www.linkedin.com/learning/java-algorithms/aggregate-and-filter-arrays-in-java?u=76281980&t=98)** but we don't know how many even numbers will be in each array. With the ArrayList, we can add as many even numbers as we need to without worrying about an index out of bounds exception or creating an array with too much space. This ArrayList class also lives in the Java.util package so we have it imported at the top. Now we can iterate through each array and add the even numbers to the Result ArrayList. We'll use a for-each loop since the index doesn't matter for the comparison. We want the even numbers, not the numbers at even indices. We'll also do the same for the other array.
>
> **[2:30](https://www.linkedin.com/learning/java-algorithms/aggregate-and-filter-arrays-in-java?u=76281980&t=150)** We could separate out this iteration into a private function and reuse the functionality for both arrays. But we'll leave this as is for now. At this point, the Result ArrayList has all the even numbers from each individual array. All we have to do is convert the Result ArrayList into an array. We can do this using the Java Stream's API. We'll create a stream and map each value to an int. Then we'll turn it into an array. Now, this series of methods can be quite a lot for just a simple data conversion. Instead of using loops, we can actually use Java Streams to make this implementation simpler. To start, we'll create an IntPredicate with our condition, whether or not an int is even. It will take at a number and check whether it's even, whether the number divided by two has a zero remainder. Then we can create a stream with both arrays using Stream.of. We'll stream through each individual array and then filter based on our predicate.
>
> **[3:59](https://www.linkedin.com/learning/java-algorithms/aggregate-and-filter-arrays-in-java?u=76281980&t=239)** At the end, we'll convert it to an array. And that's it. That's our implementation. Let's test our functions.
>
> **[4:19](https://www.linkedin.com/learning/java-algorithms/aggregate-and-filter-arrays-in-java?u=76281980&t=259)** Let's run it. In the output, we see only the even numbers. With this example, there were no duplicate numbers in each array. But if you wanted to add onto this algorithm, you could add a feature that considers this. Another option is to modify the first array instead of returning a new array. Whatever input data the algorithm is likely to process can impact the implementation as well. If you think that most of your data will have even numbers then a different approach might be taken. Modifying the assumptions about your data and extending the functionality of your methods are great ways to practice algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Algorithms]] (2)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Reverse an array in Java](https://www.linkedin.com/learning/java-algorithms/reverse-an-array-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/reverse-an-array-in-java?u=76281980&t=0)** - [Instructor] As a software developer, requirements can change and sometimes you'll need to change the ordering of your data. For example, you may need to swap elements or reverse your dataset entirely. Let's look at how to reverse an array in [[Java]]. One way is to copy all the contents into a new array but in reverse order. To start, we'd create a new array to hold the reversed contents. It would have the same length as the input array since no new contents are being added or removed, just rearranged. Then we'd iterate through the result and input array, and add the contents in reverse order. We'd start at zero and go to the input's length. This could also be the results length since both arrays are the same size. Then we'd set the value of result at index i equal to our input array at array.length - 1 - i. When i is zero, the first entry of the result array will be set to the last entry of the input array. When i is one, the second entry of the result array will be set to the second-to-last entry of the input array and so on. Once the iteration is complete, we can return the result array. This will have the input array's contents in reverse order.
>
> **[1:35](https://www.linkedin.com/learning/java-algorithms/reverse-an-array-in-java?u=76281980&t=95)** Let's run it. The output is as expected. We get six all the way down to one. Since there are no new contents being added or removed, we can actually do this algorithm in place, modifying the contents of the input array without creating a new result array. We would swap the items around in place and put them in reverse order. This function would return void because the input array would be modified. There's no new array to return. Since we'll because swapping elements, we'll only need to iterate through the array half as many times or the size of the array divided by two. If we happen to get an array with an odd number of elements, the middle element doesn't need to be moved. It stays at the same index, regardless of if the array is reversed or not. For each iteration, we'll want to swap the item at index i with the item at index array.length - i - 1.
>
> **[2:50](https://www.linkedin.com/learning/java-algorithms/reverse-an-array-in-java?u=76281980&t=170)** We can do this by setting the item at index i equal to the item at the length - i - 1. However, we do run into a problem. If we set the item at the smaller index to be the value of the item at the larger index, we'll overwrite the value at the smaller index. Before we do this assignment, we should save the item at index i in a temp variable. We can do this with int temp equals the item at index i. With this code, we've saved the item at index i. We've also copied the item at the larger index to the smaller index. All that's left to do now is assign the item at the larger index to be the temp. And that's it, that's the algorithm. Let's try it out. We'll add a new line, call a reverseInPlace algorithm.
>
> **[4:02](https://www.linkedin.com/learning/java-algorithms/reverse-an-array-in-java?u=76281980&t=242)** And then print out the same array's contents.
>
> **[4:13](https://www.linkedin.com/learning/java-algorithms/reverse-an-array-in-java?u=76281980&t=253)** Let's run it. And we get the same output. Now, what if we run the reverse algorithm twice? In this case, we should get the original contents of the array since the reverse of a reversal is the original format. That's exactly what we get in the console. Understanding how to work with data in place and move it around in memory using variables is essential to creating efficient [[Algorithms]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Algorithms]] (1)
> **Code Identifiers:** reverseinplace (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Rotate an array](https://www.linkedin.com/learning/java-algorithms/solution-rotate-an-array-19867360?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/solution-rotate-an-array-19867360?u=76281980&t=0)** - [Instructor] Let's create an algorithm that rotates the contents of an array to the left by one. We start off with an input array. After the rotation, the new array should have two through six and then one. Let's implement the algorithm. The first step is to create a new array with the same size as the input array. This'll be the array we return. Here, we create a new array, the same size as numbers, but with each item in the array set to zero. Next, we'll copy the elements from the numbers array to the rotated array, but at one index to the left. This means we'll want to set the item at index zero of the rotated array to be the item at index one of the numbers array. We'll also want to set the item at index one of the rotated array to be the item at index two of the numbers array. The pattern continues with the next set until the end of the array is reached. Seeing this pattern, we can set the item at index I minus one of the rotated array to be the item at index I of the numbers array. This shifts all the contents to the left and works for most of our array elements,
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/solution-rotate-an-array-19867360?u=76281980&t=94)** but we'll run into an issue with the first item of the rotated array. If we followed the same pattern, we'd get an index out of bounds exception since index negative one is invalid. We can accommodate this by setting the last item of the rotated array to be the first item of the numbers array. Then we'll modify our loop to only set the elements at index one through the length of the array. Then we'll return our rotated array. That's our algorithm. Let's test it. The output is as expected. We get two through six and then one.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 3. Linked List Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a linked list?](https://www.linkedin.com/learning/java-algorithms/what-is-a-linked-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/what-is-a-linked-list?u=76281980&t=0)** - [Instructor] Linked list is another common data structure that you can use to store and retrieve useful data. Similar to an array, it's a linear data structure where elements are ordered one after the other. However, with a linked list, elements are not stored at contiguous locations. Instead, they're linked using pointers. The idea of an index does not exist for linked lists. We call each element in a linked list a node. Each node contains a piece of data and a pointer to the location of the next piece of data. Several nodes can be linked together through these next pointers. In this example, the node containing 6 is the first node. It's linked to the 9 node through the next pointer, making the node containing 9 the second element of the list. The last element, 15, is linked through the 9 nodes next pointer. The last element of the list also contains a next pointer, but it points to null since there is no next element in the list. The first node in the list is often referred to as the head of the list. The last node is called the tail. Now, since the data in the linked list is not stored contiguously, the size of a linked list can vary over time. With an array, it's size must be set as soon as it's created and the size can not change. In order to store more elements in a given array, a bigger array must be created and the current items can be copied over
>
> **[1:33](https://www.linkedin.com/learning/java-algorithms/what-is-a-linked-list?u=76281980&t=93)** to the larger array, along with the new items. With a linked list, this is not needed because elements are linked by pointers, which can be changed or removed at any time. For example, if you need to delete half of the data set, you can simply find the middle pointer and set it to null. This would unlink the back half of the dataset, removing it from the list. In other languages, there might be more memory cleanup required, but in [[Java]], we have a garbage collector and this memory manager will handle it for us. Operations like these, where major data modifications can be made with just a few lines of code, make linked lists a useful tool when creating [[Algorithms]] that manipulate your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Algorithms]] (1)
> **CLI Commands:** node (8), find (1), make (1)
> **Analogies:** similar to (1), for example (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Using the built-in linked list data structure in Java](https://www.linkedin.com/learning/java-algorithms/using-the-built-in-linked-list-data-structure-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/using-the-built-in-linked-list-data-structure-in-java?u=76281980&t=0)** - [Instructor] With an understanding of the LinkedList data structure, we can begin to work with LinkedLists in [[Java]]. In fact, we can use the built-in LinkedList type defined in the util package. We'll import java.util and the LinkedList class. To create a LinkedList, we'll write LinkedList and this will contain strings, so we'll put String in the arrow brackets. The LinkedList type is generic and it can hold many different types of data, including custom object data. All we have to do is specify it upon the list creation. We could specify integer, double or custom type but for this example, we're using strings. Let's add some data to the LinkedList. We can add data at the front or the back of the link using addFirst or addLast. We also have the option to add data before or after specific nodes in the list. Let's use add and add a few strings to the list. These will be appended to the back of the list. Now that we have some data, we can look at some of the other built-in operations. We can use contains to see if a certain piece of data is in the list. We'll check if Becky's in the list. This will return true or false. In this case, true because Becky is in the list.
>
> **[1:36](https://www.linkedin.com/learning/java-algorithms/using-the-built-in-linked-list-data-structure-in-java?u=76281980&t=96)** We can also access how many items are in the list using the size function. We can remove items from the list. We can remove the first item, the last item or a specific item from the list. Let's remove the first item, Sally. To print out the contents of a list, we can use a for each loop. For each item in the list, we'll print it out. We'll print the item and then a separator. Another option is to use the forEach method. For each item in the list, we'll print it out. Let's run it. In the output, we get true because Becky is in the list. We also get the list's contents after removing Sally, just as expected. Previously, we talked about how LinkedLists are built on the idea of nodes but there are no nodes here. The idea of nodes in the next pointer are abstracted to us through the built-in LinkedList class. If we click into the LinkedList class, we can see more details about how the LinkedList data structure works in Java. If we scroll down to the add method, we can see it calls linkLast.
>
> **[3:11](https://www.linkedin.com/learning/java-algorithms/using-the-built-in-linked-list-data-structure-in-java?u=76281980&t=191)** If we click into that, we can see the use of next pointers. Understanding the implementation of built-in Java [[Data Structures]] can help you make better choices about what tools you use in your [[Algorithms]]. That's why we've briefly explored it here. I encourage you to spend some time clicking through the source code to better understand how Java works under the hood. Now, when using this structure, we don't have to worry about the maintenance of modifying the next pointers or the implementation of a list every time we add data. It's built into Java and it provides an interface. This allows us to just worry about the data we want to add and remove, rather than the intricacies of how the data is stored and retrieved from the list. Simplifying complex operations through interfaces is a great principle to follow when creating data structures and developing algorithms. It also what makes the LinkedList a great addition to your [[Software Development]] toolkit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Data Structures]] (2), [[Algorithms]] (2), [[Software Development]] (1)
> **Code Identifiers:** addfirst (1), addlast (1), foreach (1), linklast (1)
> **Cross-References:** we talked about (1), in the next (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create a custom data structure for linked list algorithms](https://www.linkedin.com/learning/java-algorithms/create-a-custom-data-structure-for-linked-list-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/create-a-custom-data-structure-for-linked-list-algorithms?u=76281980&t=0)** - [Instructor] Although there's a linked list data structure available in [[Java]], not every algorithm you'll ever need will be built into the standard library. Instead, you may need to create your own data structure with your own [[Algorithms]] to manipulate your data more effectively. In fact, we can create our own linked list in Java using classes, specifically a LinkedList class and a node class. Here we have a custom LinkedList class that has a Node attribute called head. This represents the first item or the head of the list. We also have a class called Node, which is used by the LinkedList. Each node has an int data and a reference to the next node in the list. Let's create a LinkedList from the CustomLinkedList class. We'll use the built-in constructor. Then we can create some nodes to put in the list.
>
> **[1:16](https://www.linkedin.com/learning/java-algorithms/create-a-custom-data-structure-for-linked-list-algorithms?u=76281980&t=76)** To put the firstNode in the list, we can set the head node equal to the firstNode. We'll access the list, .head and we'll give it the firstNode. To add the [[Representational State Transfer (REST)|rest]] of the nodes, we'll need to link the next pointers. We'll set the firstNode's next reference equal to the SecondNode. Then we'll set the secondNode's next reference equal to the thirdNode, and so on. The fourthNode is the last element in the list. This means we don't need to set its next pointer to anything, it's already null. With this sample data in place, let's create an algorithm that iterates through our custom data structure. We'll add this to the CustomLinkedList class. Our CustomLinkedList is not a part of the collections interface, so we'll need to iterate using the next pointers in a for loop. With a loop, we often need a variable that keeps track of where we are in the loop. Let's create a current variable that keeps track of what node we're looking at. We'll start it at the head. Then while the current node is not equal to null, we'll print out the node's contents and increment current. We can increment current by setting current to the next node in the list.
>
> **[2:50](https://www.linkedin.com/learning/java-algorithms/create-a-custom-data-structure-for-linked-list-algorithms?u=76281980&t=170)** At the end, we'll print out a new line. It's important to note that we check whether the current node is null before accessing the data or the next attributes. If a given node is null and we try to access its attributes, we'll get a null pointer exception because you can't access an attribute of null. Let's try using the function. It's an instance method, so we'll access our linkedList and run it. And there's our data. By using classes, we can create custom [[Data Structures]] with more flexible algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Algorithms]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Data Structures]] (1)
> **CLI Commands:** node (12)
> **Code Identifiers:** firstnode (4), secondnode (1), thirdnode (1), fourthnode (1), linkedlist (1)
> **Speakers:** - [instructor] (1)

#### [Linked list algorithms: Delete back half of a linked list](https://www.linkedin.com/learning/java-algorithms/linked-list-algorithms-delete-back-half-of-a-linked-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/linked-list-algorithms-delete-back-half-of-a-linked-list?u=76281980&t=0)** - [Instructor] With [[Data Structures]] built from scratch, we can create more complex [[Algorithms]]. With data structures built from scratch, we can create more complicated algorithms that manipulate how our data is stored. For example, let's say we want to delete the back half of a linked list. It would be nice to have access to those next pointers because all we would have to do is set the appropriate next pointer, equal to null. We can do this using our custom linked list structure. Inside the class, we have a head node and the node contains a next pointer and some data. In the main method of our algorithms class, we create a linked list and display its contents. With this sample data in place, let's create an algorithm that deletes the back half of this list. We'll put this in the custom linked list class. This will modify the linked list, so it's return value is equal to void. For this algorithm, we'll need to iterate through the linked list. And if we reach the middle node, we'll set its next reference equal to null. One common strategy for finding the middle of a linked list is to use two pointers, a slow pointer and a fast pointer. Instead of having current as our tracker, we'll have two trackers, slow and fast. Both of these will start at the head,
>
> **[1:33](https://www.linkedin.com/learning/java-algorithms/linked-list-algorithms-delete-back-half-of-a-linked-list?u=76281980&t=93)** but the fast pointer will move twice as fast as the slow pointer. When the fast pointer reaches the end of the list, the slow pointer will be at the middle element. We'll increment the fast pointer twice by setting fast, equal to fast.next.next for slow, we'll just increment it one time. Now since we're accessing attributes, we'll need to make sure these variables are not null before entering the while loop. We'll check that the fast is not equal to null. And the fast.next is not equal to null. We don't need to check whether the slow node is null, because it will be behind the fast node. Now, if either of these conditions become false, then the fast pointer is either at the end of the list or at the last item of the list. This puts our slow pointer at the middle node. In order to delete the back half, we'll want to access the node just before the slow node. So we can set its next pointer equal to null. This will delete the middle node as well as everything after it, we can do this using a previous variable. The previous node will run just behind the slow node. At the end of the while loops execution, all we have to do is set the previous node's next reference to null. This will delete the middle node and everything after it. If the while loop condition is true,
>
> **[3:08](https://www.linkedin.com/learning/java-algorithms/linked-list-algorithms-delete-back-half-of-a-linked-list?u=76281980&t=188)** the first time it's executed then previous will still be null. And we'll get an error because we're setting an attribute of a null object. To fix this, we can add a base case that exits the function if the list has no elements or only one element. In both of these cases, we'll want to set the head equal to null, this will keep the list empty or remove the single element. It just depends on which base case is hit. Let's try out our function. Back in the main method, we'll display the contents of the list, delete the back half and then display the contents again. The output is as expected, by using different variables and creating custom data structures, we can develop algorithms that let us manipulate our data in exactly the way we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Data Structures]] (3)
> **CLI Commands:** node (13), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Sum contents of a linked list](https://www.linkedin.com/learning/java-algorithms/solution-sum-contents-of-a-linked-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/solution-sum-contents-of-a-linked-list?u=76281980&t=0)** - [Instructor] Let's implement the sum function. We'll start off by creating a variable called sum to keep track of the sum of our items in the linked list. We'll also want a variable for keeping track of where we are in the list. We'll create a variable called current and set it to the beginning of the list. With our variables set up, now it's time to iterate through the list, adding each item's value to the sum. We can do this with a while loop. While the current item is not equal to null, we'll want to retrieve its data, add it to the sum, and then go to the next item in the list. We can access the nodes data with the val field. Then we'll add it to the sum. To increment the current variable, we can set current equal to current.next. That'll set us to the next element in the list. After iterating through the entire list, we can return the sum. That's the implementation. Looking at our test code, the sum would be seven plus five plus three, plus four plus one. That's 20. Let's test our code. And we get 20 in the output.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Queue and Stack Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a queue?](https://www.linkedin.com/learning/java-algorithms/what-is-a-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/what-is-a-queue?u=76281980&t=0)** - [Instructor] The queue is another data structure that can be particularly useful in [[Algorithms]] where you need to process data in order. Like an array or list, a queue represents a series of objects, but the way we access, add and remove items is slightly different. A queue contains the elements in the order they were added. It's designed to have elements inserted at the end of the queue and elements removed from the beginning of the queue. You cannot remove items from the middle or end. You must remove from the front. Similarly, you cannot add items to the middle or front. You must add to the back. For this reason, we say queues follow a FIFO, or first in, first out policy. The first item in the queue must be the first item out of the queue. Now when we talk about adding and removing items, we refer to it as enqueueing and dequeueing. When we add an item, we enqueue it to the back of the queue. When we remove an item, we dequeue it from the front of the queue. We cannot add an element to a certain index because indices do not exist for queues. There's simply enqueueing to the back and dequeueing from the front. As for accessing items, we can only access the item at the front of the queue. If we want to access an item towards the back of the queue, we'll need to remove each item in front of it since items in a queue are first in, first out.
>
> **[1:36](https://www.linkedin.com/learning/java-algorithms/what-is-a-queue?u=76281980&t=96)** While this FIFO policy might seem like a restriction, it actually becomes quite useful in algorithms because you're adding on a guaranteed assumption. We can leverage the queues first in, first out policy to make our algorithms more efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3)
> **Env Vars:** fifo (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Standard queue operations in Java](https://www.linkedin.com/learning/java-algorithms/standard-queue-operations-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/standard-queue-operations-in-java?u=76281980&t=0)** - [Instructor] To use queues in [[Java]], we have the java.util.Queue interface. We'll import it at the top. Since an interface is not concrete, we'll need to instantiate an implementation of the interface in order to use it. In Java, we can choose between a LinkedList and a priority queue. LinkedList is a pretty standard queue implementation, so we're going to use it for our implementation of the queue interface. To create a queue, we'll create a new queue object from a LinkedList. It will contain integers. Like LinkedList, the queue interface is generic so it can contain elements of any type you specify. To add elements to the queue, we'll use the add method. We'll add two, three and a few other numbers.
>
> **[1:04](https://www.linkedin.com/learning/java-algorithms/standard-queue-operations-in-java?u=76281980&t=64)** Now, to follow the FIFO policy, the first item in the queue must be the first item out of the queue. This means the number two will be removed first since it was added first. To remove this number, we can use the remove method. Let's save it in a variable called removedItem and we'll display it in the console.
>
> **[1:35](https://www.linkedin.com/learning/java-algorithms/standard-queue-operations-in-java?u=76281980&t=95)** If we run the program, the result is two. Let's continue to de-queue our items. The next item to be removed will be three. We'll remove it with queue.remove. And we see it removed in the console. For both of these cases, we removed the item in order to display it. Another option is to just peek at the top of the queue to see what the next item to be removed it without removing it. After removing two and three, the item at the top of the queue is 19. So that's what we'll see in the console. If we want to iterate through a queue, we can use a while loop. We'll want to iterate until the queue is empty. Java has a built-in method called isEmpty. We can use this to test if the queue is empty. While it's not empty, we'll iterate through the queue. It's important we check if the queue is empty before removing an item because otherwise, we'll get a no such element exception. On each iteration, we'll de-queue an item and print it to the console. With our program, we add four items to the queue, remove two of them and then peek at one of them. The while loop will display and remove the last two items in the queue, 19 and 20
>
> **[3:10](https://www.linkedin.com/learning/java-algorithms/standard-queue-operations-in-java?u=76281980&t=190)** since the peek call does not remove 19 from the queue. Let's run it. The output is as expected. If you need to process your data in the order it's received, the queue data structure is a great tool to add to your [[Algorithms]]. Queues reduce complexity by removing the index and applying the constraint of first in, first out, making your data easy to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Algorithms]] (1)
> **Code Identifiers:** removeditem (1), isempty (1)
> **Definitions:** is a  (2)
> **Env Vars:** fifo (1)
> **Speakers:** - [instructor] (1)

#### [Queue algorithms: Generate binary numbers](https://www.linkedin.com/learning/java-algorithms/queue-algorithms-generate-binary-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/queue-algorithms-generate-binary-numbers?u=76281980&t=0)** - [Instructor] While the [[Java]] standard library has a built-in queue data structure with a few basic operations, you'll need to know how to leverage this functionality in order to work with your data efficiently. Let's say we want to create an algorithm that takes in a number N and prints out the first N binary numbers in numerical order. A binary number is a number that consists of ones and zeros and it's on the base-2 numeral system. These are some examples of binary numbers. We start off with one which maps to one in the binary system. Two maps to one zero. Three maps to one one and so on. The algorithm we create should generate as many of these numbers as we specify. If the input was five, the algorithm should print out one, one zero, one one, one zero zero and one zero one. If the input is less than or equal to zero, the algorithm should print out nothing. Now you might notice a pattern to these binary numbers. We print an item, in this case one, and then print the same item with the zero appended to it. Then a one appended to it. Take a look at the second item. After the items associated with the first item have been printed, we print the second item with the zero and then a one. We process the first item
>
> **[1:32](https://www.linkedin.com/learning/java-algorithms/queue-algorithms-generate-binary-numbers?u=76281980&t=92)** and then the second item in a FIFO fashion, and this pattern follows for the [[Representational State Transfer (REST)|rest]] of the binary numbers. We can leverage this pattern with the queue data structure to create an efficient algorithm that generates binary numbers. Let's try it. We'll create a function called print binary. It will take in how many binary numbers we should print out. Since we're printing numbers, we don't need to return anything. So the return type is void. In the implementation, we first need to check if the input is valid. If N is less than or equal to zero, we'll just print out a new line and then return. If the input is greater than zero, then we have some binary numbers to print. Let's create a queue that will help us generate the next item to be printed. Our queue will hold integers. We could use strings instead, but integers will turn out to be more efficient due to the fact that strings are immutable. Now the first binary number is one. So we'll add one to the queue. Then we'll get into the iteration where we can start displaying binary numbers. We'll iterate an N number of times. Now in the binary pattern, we print an item and then print the item with the zero and then a one. We don't want to print all three items at once
>
> **[3:09](https://www.linkedin.com/learning/java-algorithms/queue-algorithms-generate-binary-numbers?u=76281980&t=189)** because the number of items we want to print might be less than three. Instead we can save these future items with the queue. So to start, we'll take the item off the top of the queue and display it. Then we'll save the two items that should follow later with the queue. We'll enqueue the current item with the zero and then a one. To append a zero to a number, we can multiply it by 10. To append a one to a number, we can multiply it by 10, but then add one. Once we've printed out all the binary numbers requested, we'll print out a new line. And that's the end of our implementation. Let's test it out. We'll try it with three, negative five, zero, two, and nine.
>
> **[4:12](https://www.linkedin.com/learning/java-algorithms/queue-algorithms-generate-binary-numbers?u=76281980&t=252)** In the console, we get the first three binary numbers. Then we get some white space because negative five and zero are invalid inputs. After that we get the first two binary numbers. Then the first nine binary numbers. This is as expected. Whenever there's a first in, first out pattern with your data queues can be a very useful tool in your algorithm toolkit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** fifo (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [What is a stack?](https://www.linkedin.com/learning/java-algorithms/what-is-a-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/what-is-a-stack?u=76281980&t=0)** - [Instructor] The stack data structure can be useful for [[Algorithms]] where you need to keep track of state. A stack is an ordered series of objects, just like a list, but like a queue, the way we access, add, and remove items is a little different. When we work with the stack, we push objects on the top of the stack and pop objects off the stack. Items are added and removed from the same end. We add to the top and remove from the top. We say stacks follow a last-in, first-out policy, or a LIFO policy. If we add and remove from the same location, the last item pushed onto the stack will be the first item removed from the stack. Another way to think about this is that the first item pushed onto the stack will be the last item popped off. We can push as many items as we want onto a stack, but in order to retrieve a specific item further down the stack, we must pop off each item to get to it. Once all items have been popped off the stack, the stack is empty. One example of a stack is the runtime stack. This keeps track of the execution of the program and processing of nested functions. First, the main function is called, then a builder function might be used, then a util function might be called.
>
> **[1:33](https://www.linkedin.com/learning/java-algorithms/what-is-a-stack?u=76281980&t=93)** The runtime stack also stores information about each subroutine as they're used. Whenever you get an error from the runtime stack, the error messages help you retrace your steps from where the error occurred. With the stack, we can keep track of the state of the program. You can create your own algorithms that leverage this data structure as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **Env Vars:** lifo (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Basic stack operations in Java](https://www.linkedin.com/learning/java-algorithms/basic-stack-operations-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/basic-stack-operations-in-java?u=76281980&t=0)** - [Instructor] [[Java]] has a built-in stack data structure that we can use in our custom [[Algorithms]]. It lives in the java.util package. We can create a stack using the constructor. Like the other [[Data Structures]], it's generic and this stack will hold strings. To add items to the stack, we'll use the push method. We'll also use function names to roughly emulate the run time stack. The run time stack uses objects with lots of information in them, but we'll just be pushing on strings. It all starts with the main method, then let's say a builder function is used, an external service might be called and once we get the response back, the execution for external service will be finished. So we'll pop that off the stack, then maybe we parse the response. That's another function call. Once that's finished, we'll pop it off. This will also conclude the builder's execution, so we'll pop off the builder and then finally the main method. With the stack, we can keep track of where each function was called. Each pop statement returns the item on the top of the stack. So let's print those values with the [[Microsoft Word|word]] end
>
> **[1:35](https://www.linkedin.com/learning/java-algorithms/basic-stack-operations-in-java?u=76281980&t=95)** to help visualize our mini run time stack. Put system.out.println , end with whatever function is ending its execution. We'll do these for the other pops as well. Let's also visualize when we start a function. Right before we push something on, we'll print it out with the keyword start. We start main then builder,
>
> **[2:18](https://www.linkedin.com/learning/java-algorithms/basic-stack-operations-in-java?u=76281980&t=138)** the external service, and then the parsing. Let's run it. We see main start its execution, then builder is called, the external service is called and once it's execution finishes, the response is parsed by parse external data. Once that finishes, the response is returned to the builder, then to the main function, ending the execution of the program. If an error ever popped up in the program, the stack would help us find out exactly where the error occurred, since it's keeping track of the state of the program. In addition to these two methods, push and pop, we also have a peek method. The peek method will peek at the top of the stack without removing the item. If you need to keep track of state and your algorithm, the stack data structure is a great tool. Like cues, they reduce complexity by removing the index and applying the constraint of last-in-first-out, making your data easy to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Algorithms]] (1), [[Data Structures]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Stack algorithms: Theorizing an algorithm](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980&t=0)** - [Instructor] As a software engineer, you'll need to know how to leverage the built-in stack functionality when working with [[Algorithms]] that keep track of state. In this lesson, we'll look at how we can use the stack data structure to solve software problems. Let's say we want to print out the next greater element for every element in the array. The next greater element for a given element is the first greater element on the right side of the array. If no greater element exists, then the next greater element is a sentinel value, -1. For example, if we were given an array with 4, 5, 2 and 35, the next greater element for 4 would be 5. The next greater element for 5 would be 35 and the same for two. 35 does not have a next greater element to the right, so it's value would be -1. In another example, let's say we have 16, 7, 2 and 15. 16 does not have a next greater element, so it would be -1. 7's next greater element to the right is 15 and the same for 2. 16 is not to the right of 7 and 2, so it cannot be counted. 15 does not have a next greater element since it's at the end of the array. This makes it -1. Now there is a bit of a pattern to the data.
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980&t=94)** We continue looking to the right of the array. And if an item does not have a match, we give it -1. We can use a stack to keep track of each element we've seen and see if the current array element is the next greater element for the item on top of the stack. In our algorithm, we'll push the first item in the array onto the stack. Let's say it's from our last example, 16, then we'll iterate through the array and one by one try to find the next greater element for the item on top of the stack. If the item we find is not greater, we'll push it onto the stack. In this case, 7 is not greater than 16, so we'll push seven onto the stack. The number on top of the stack will always be lesser than the ones below it. This means any items that remain on the stack after we've iterated through the entire array, will have the next greater element of -1. Now the stack contains 7 and 16 and the current is 2. We'll continue with our algorithm for trying to find the next greater element for the item on top of the stack. If we peek at 7 on the stack, 2 is not the next greater element of 7. So we'll push two onto the stack. This makes the current 15 and the stack contains 2, 7 and 16. 15 is the next greater element of 2.
>
> **[3:11](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980&t=191)** It's greater than two. This means we'll pop two off the stack and print out that pair, 2 to 15. 15 is also the next greater element of 7. So we'll print out 7-15. This is where the benefit of the stack comes in. We didn't have to reiterate through the list in order to match 7 to 15. We use the stack to keep track of the items we've already seen, and as we iterate through the array, we match the stack items with their next greater element. Continuing on, the next element in the array is 15 and it's not greater than 16, so we'll push 15 onto the stack. Now we've reached the end of the array and the stack contains 15 and 16. Both of these do not have a next greater element. So we'll pop each off and point their next greater element to -1. With that, we've printed each element of the array with their next greater element. With this implementation, we iterate through the array, trying to find the next greater element for the item on top of the stack. If the array item we see is not the next greater element, we put it on top of the stack. If the array item is the next greater element, we continue to use the peek and pop operations to iterate through the stack.
>
> **[4:44](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-theorizing-an-algorithm?u=76281980&t=284)** Then, we check if the array item matches for these stack elements. If we've run into a case where the stack is empty, or the array item is not the next greater element, we continue to iterate through the array. When we've reached the end of the array, each item that's still on the stack must have the next greater element of negative one. Using the stack data structure allows us to iterate through our array input only once rather than multiple times or even n times. This gives us a linear time complexity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** find (4)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Stack algorithms: Next greater element](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-next-greater-element?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-next-greater-element?u=76281980&t=0)** - [Instructor] Let's translate the next greater element algorithm into [[Java]] code. The first step is to create a function.
>
> **[0:13](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-next-greater-element?u=76281980&t=13)** Then we'll check our base case. If the array is empty, we'll print out an empty line and return. If the array has items, we'll initialize our stack and push the first element of the array onto the stack. In this algorithm, we're going to iterate through the array, trying to find the next greater element for each item. In each iteration, we're checking whether the current item in the array is the next greater element for the item at the top of the stack. If it is, we'll display it to the console but no matter what, we'll want to push this next element onto the stack. If it is, we'll display it to the console but no matter what, we'll want to push the next element onto the stack so we can find its next greater element. To check if the next variable is the next greater element for the item on top of the stack, we need to make sure the stack is not empty. If it does have items, we'll pop the top element and check if the current array element is its next greater match. If it is a match, we'll print it out. Now, this next variable could hold the next greater element for multiple items in the stack.
>
> **[1:44](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-next-greater-element?u=76281980&t=104)** So let's change this if statement to a while loop. While the next variable holds the popped item's next greater element, we'll print it out and increment the popped item. We'll modify pop to be stack.pop. This gives us access to the next item in the stack. Now, we don't want to risk popping an item off an empty stack, so we'll also add an if clause here that will break us out of the loop if the stack is empty. If the popped item is greater than the next element, we'll push it back onto the stack. At this point in the implementation, we've printed out all the items that have a next greater element. The current items in the stack are the items that do not have a next greater element. We can display these by emptying the stack and printing out each element's next as -1. While the stack is not empty, we'll pop off an item, and give it the next greater element of -1. Let's test our implementation. We'll give it the array 16, 7, 2 and 15.
>
> **[3:15](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-next-greater-element?u=76281980&t=195)** And it works as expected. It's important to note that the assumption of the next greater element always being to the right played a significant role in our implementation. With the stack, we were able to keep track of the items we still needed to find a next greater match for as we continue to iterate through the array. If we got to the end of the array, and had some items where we did not find the match, we were able to retrieve those and give them the next greater element of -1. Understanding how to leverage stacks in [[Algorithms]] where you need to keep track of state is key to creating efficient solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Algorithms]] (1)
> **CLI Commands:** find (4), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Stack algorithms: Matching parentheses](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-matching-parentheses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=0)** - [Instructor] The stack data structure can be a very useful tool when solving software problems that require keeping track of state. Let's say we need to determine whether a given piece of text has matching parentheses. These are some examples where the parentheses are matching. For each of these, the opening symbol comes before the closing symbol and every open symbol has an associated closed symbol. These are some examples where the parentheses are not matching. These do not start with the opening block symbol, or do not have a closing symbol for each opening. We can use the stack data structure to keep track of whether we've seen an opening symbol or not. Let's take a look. Here, we have a function that returns true or false, depending on whether the parentheses are matching. We also have some test cases written for us. The first four should return true, because they have matching parentheses. The others should return false, because they do not have matching parentheses. For the algorithm, we're testing whether each opening parentheses has an associated closing parentheses, and we can keep track of this using a stack, a stack of characters. The stack will keep track of the opening characters we've seen, and if we ever run into a closing character, we'll pop the stack. If the stack is not empty by the end of the execution,
>
> **[1:35](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=95)** then there must have been more opening symbols than closing symbols, so that's what we'll return, whether or not the stack was empty. Now, in order to determine if the parentheses are matching, we'll need to iterate through the string.
>
> **[1:57](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=117)** If the current character is equal to an open parentheses, we'll push it onto the stack. If the current character is equal to the closing character, we'll need to make sure there's an opening symbol associated with it. We can do this by checking the stack. If the stack has elements, there's an associated opening symbol for the closing symbol. We'll pop the stack. Of course, before popping, we should make sure the stack is not empty. If the stack is empty, this means we have not seen an opening character to match the closing symbol. In this case, the parentheses are not matching and we should return false from the function. That's the implementation. Let's run it. The output is as expected. The first four are true and the [[Representational State Transfer (REST)|rest]] are false. Now, since we're only dealing with symbol type, parentheses, we can keep track of whether we've seen an opening or not by just using an integer. Let's modify our implementation so it uses an integer instead of a stack. Instead of constructing a stack, we'll create an integer. We'll call it matchingSymbolTracker. In the places where we push an item to the stack, we'll just add one to the tracker.
>
> **[3:31](https://www.linkedin.com/learning/java-algorithms/stack-algorithms-matching-parentheses?u=76281980&t=211)** In the places where we pop the stack, we'll subtract one from the tracker. In the places where we check if the stack is empty, we'll check if the tracker is equal to zero. For not empty, we'll check that the tracker is greater than zero. Let's run it again. And we get the same output. If we have more types of opening and closing symbols, such as brackets or arrows, we would need to use the stack. We would need to check that the opening bracket matches with a closing bracket rather than a closing parenthesis or a closing arrow. Since we only had one type of opening and closing symbol, we just needed to use an integer for tracking. This keeps our solution running on O(n) time, but now it only takes up O(1) space, making it more efficient. This modified algorithm is also less complex and easier to read, because it uses simpler tools to achieve the same output. While adding [[Data Structures]] can often help make your [[Algorithms]] more efficient, they're not always the solution to every problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Data Structures]] (1), [[Algorithms]] (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** matchingsymboltracker (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Evaluate reverse polish notation](https://www.linkedin.com/learning/java-algorithms/solution-evaluate-reverse-polish-notation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/solution-evaluate-reverse-polish-notation?u=76281980&t=0)** - [Instructor] Before going into the implementation, let's talk about these helper methods given to us to use. The first is isNumber. This one takes in a token that is a string and returns true or false based on whether it can be parsed into a double. The second is isOperator. It takes in a string and returns whether or not it matches one of the basic operations. That's plus for addition, minus for subtraction and et cetera. The last function we're given is performOperation. Given the operator and both operands, it will perform the operation. If the operator is invalid, it'll throw an exception. We can use these helper methods in our implementation in order to keep our function code more concise. Let's implement evaluateRPN. We know that each operand comes before its operator. This means we'll need to keep track of each number until we see the operator. We can do this with a stack. We also know that each operand and operator is separated by spaces. Given this, we can split the string into [[Tokens]], using the split method. Our delimiter will be a space. This will return an array containing
>
> **[1:38](https://www.linkedin.com/learning/java-algorithms/solution-evaluate-reverse-polish-notation?u=76281980&t=98)** only operators and operands. To run the calculations, we can iterate through this array, handling the operations and operands accordingly. This is where our helper methods will come into play. If the token is a number, we can push it onto the stack.
>
> **[2:10](https://www.linkedin.com/learning/java-algorithms/solution-evaluate-reverse-polish-notation?u=76281980&t=130)** Otherwise, if it's an operator, we'll pop off the operations from the stack and perform the operation.
>
> **[2:31](https://www.linkedin.com/learning/java-algorithms/solution-evaluate-reverse-polish-notation?u=76281980&t=151)** If there was only one operator and two operands in the expression, this would work, and we could return the result. However, there can be multiple operations in a given expression. To account for this, we can push the intermediate result onto the stack. It becomes a new operand. Then when the next operator is found, the intermediate result is already on the stack and ready to be pulled for the operation. Once we've iterated through the entire string, we can return the final result, which is sitting at the top of the stack. That's our implementation. Let's run it. In our expression, we add three and four. We get seven in the output. Our test case passes. Now, how could we improve the solution? Well, we could add more error checking. Currently, we assume the input is a valid RPN expression, but what if it wasn't? How could we account for that? We also know that a given operation can only have two operands or two inputs. This means instead of a stack, we could have used variables to keep track of the intermediate data and operands.
>
> **[4:05](https://www.linkedin.com/learning/java-algorithms/solution-evaluate-reverse-polish-notation?u=76281980&t=245)** This would take less space, but it would likely be harder to read and understand. It's important to understand the trade-offs when deciding how to implement a solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1)
> **Code Identifiers:** isnumber (1), isoperator (1), performoperation (1), evaluaterpn (1)
> **Definitions:** is a  (3)
> **Env Vars:** rpn (1)
> **Speakers:** - [instructor] (1)


### 5. Algorithms for Hash-Based Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Hash-based structures in Java](https://www.linkedin.com/learning/java-algorithms/hash-based-structures-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/hash-based-structures-in-java?u=76281980&t=0)** - [Instructor] Hash structures are great tools when working with collections, sets, and data formatted as key-value pairs. In [[Java]], there are a few different options we can use. Their differences lie in synchronization, usages of null, and whether or not duplicate values are allowed. First, there's the HashSet. The HashSet is a collection of unique items. It cannot contain duplicates, and unlike many of the other tools we've looked at previously, the order of the items is not relevant. It's great if you need to keep track of a unique set of elements. For example, let's say you're processing some purchases and you need to validate whether a vendor code is valid given a list of vendor codes. You could store the vendor codes with the HashSet and quickly check if the code is valid in 01 time. Java also has a HashMap type. This is especially useful if you need to work with key-value pairs. Let's say you have a series of employees and you need to look up information about a given employee using their ID. You can store each employee value using the ID as the key and quickly look up employee data by their ID in constant time. If there's an identifier you can use to navigate your data, like an ID or a code, the HashMap type proves to be a very helpful tool in creating your [[Algorithms]].
>
> **[1:35](https://www.linkedin.com/learning/java-algorithms/hash-based-structures-in-java?u=76281980&t=95)** There is also the Hashtable type. This type is very similar to the HashMap in that it stores key-value pairs, but there are a few differences in their implementations. Ultimately, the HashMap type is often recommended because it provides the most flexibility by allowing duplicate values in a null value. The HashMap is also not synchronized so it tends to have better performance than the synchronized Hashtable. Understanding the tools available to you is essential so you can choose the right one for your algorithm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Algorithms]] (1)
> **Analogies:** for example (1), similar to (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [HashMap and HashSet operations in Java](https://www.linkedin.com/learning/java-algorithms/hashmap-and-hashset-operations-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/hashmap-and-hashset-operations-in-java?u=76281980&t=0)** - [Instructor] Let's take a look at how to use hash structures so we can build [[Algorithms]] that work with key value pairs. We start off with an employee class. Each employee has a name, ID, and department. But eventually, this could include quite a bit of data. In the main function, we create three employees, giving them values for each piece of data. In order to organize and access each employee efficiently, we can choose a unique key out of these three attributes. It will serve as an identifier for each employee. Then, we can use the key to quickly retrieve a given employee's data. Two employees might have the same name and they might have the same department, but no two employees should have the same ID. So we'll use that as our key. The value in the key value pair will be the associated employee data. Let's use the HashMap type to store our employees by ID. The key is an integer. That's our ID data type, and we're storing employees as the value. We'll call it employees by ID. And we have HashMap imported at the top. To add an employee to our HashMap, we can use the put method. It will take in two entries. First, the key, which is the employee ID, and a value, which is the [[Representational State Transfer (REST)|rest]] of the employee data.
>
> **[1:37](https://www.linkedin.com/learning/java-algorithms/hashmap-and-hashset-operations-in-java?u=76281980&t=97)** Here, we insert the first employee into the HashMap. Let's add the other employees too.
>
> **[1:51](https://www.linkedin.com/learning/java-algorithms/hashmap-and-hashset-operations-in-java?u=76281980&t=111)** Now that our data is stored in an organized way, we can easily retrieve it using a given employee's ID. We can use the get method. This takes in a key which can be used to retrieve the value. We'll insert the key 9612, which is Bobby's employee ID. This will retrieve employee two. If there's an item in the map that has this key, it's value will be returned. That value is an employee. Otherwise, the call will return null. If the employee is not null, let's display its information. We'll print out the name and the department.
>
> **[2:48](https://www.linkedin.com/learning/java-algorithms/hashmap-and-hashset-operations-in-java?u=76281980&t=168)** In this case, there is an employee with this ID. It's the second employee. Let's run it. The second employee's name and department is displayed. It was quickly retrieved using the employee's ID. We also have containsKey and containsValue functions to see if the HashMap contains certain data. Now for working with the dataset where each item is unique, the HashSet type is a great tool to use. We also have it imported at the top. Let's say we have a group of product codes that identify which items can be purchased using the company card. We can add the valid product codes using the add method. Then, we can check whether a given code is valid using the contains function. We access the HashSet .contains, and let's check for H5J781. We'll also check for a code that does not exist in the set. Let's print these out. This first call will return true because this product code is in the HashSet. The other call will return false.
>
> **[4:23](https://www.linkedin.com/learning/java-algorithms/hashmap-and-hashset-operations-in-java?u=76281980&t=263)** Let's run it. And that's exactly what we get in the output. In general, the HashSet type is good if you need to create an algorithm that checks if a given item is a member of a certain group. In this case, that's whether a given code is in the product code group. The HashMap and HashSet types optimize the retrieval of items using the assumption of uniqueness. For the HashMap, the keys are unique. For the HashSet, each value is unique. Storing your data in a way that you can make assumptions about it can help you speed up your algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is an  (3), is a  (2)
> **Code Identifiers:** containskey (1), containsvalue (1)
> **CLI Commands:** make (1)
> **Env Vars:** h5j781 (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Leverage the HashSet type in Java algorithms](https://www.linkedin.com/learning/java-algorithms/leverage-the-hashset-type-in-java-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/leverage-the-hashset-type-in-java-algorithms?u=76281980&t=0)** - [Instructor] The [[Java]] standard library provides a few data types for working with unique items, but you'll need to leverage these types in order to manipulate data in exactly the way you want. For example, let's say we have two arrays, and we want to find what elements are present in the first array, but not the second, given both arrays are unsorted. With this example, eight, zero, and seven are present in both the arrays, but one and three are only present in the first array. This question we're asking, what elements are present in one array, but not the other is really a question of membership. We're asking, what elements are a member of the first array, but not a member of the second array? The hashSet is a great tool when working with questions of membership and we'll use it in our algorithm to find this answer. Let's create an algorithm that finds what elements are present in the first array, but not the second.
>
> **[1:13](https://www.linkedin.com/learning/java-algorithms/leverage-the-hashset-type-in-java-algorithms?u=76281980&t=73)** This'll take into inputs, first and second. It will also return a list containing the missing elements. To start the implementation, we'll create a list. This will be a list that will keep track of the missing elements. Now, in order to find out whether an element is missing from the second array, we'll need to know what items are in the second array, then we can cross check them with the first array. Let's do this using a hashSet. We'll put all the items from the second array in the hash map. With these items added, we can iterate through the first array. On each iteration, we can check whether a given item from the first array exists in the second array. All we have to do is cross check it with the hashSet. If a given item is in the first array, but not the second, it's not in the hashSet, we'll add it to our missing elements. At the end, we'll return the missing elements list. Let's try it out. For the first call, two and four are in the first array, but not the second. That's what we'll see printed out.
>
> **[2:53](https://www.linkedin.com/learning/java-algorithms/leverage-the-hashset-type-in-java-algorithms?u=76281980&t=173)** For the second call, one and three are not included in the second array.
>
> **[3:09](https://www.linkedin.com/learning/java-algorithms/leverage-the-hashset-type-in-java-algorithms?u=76281980&t=189)** Let's run it. The output is what we expect. With the hashSet, we were able to retrieve and search our data in constant time, because each item stored in the hashSet was unique. We leveraged this uniqueness to create an efficient algorithm that uses the principles of membership.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** hashset (6)
> **CLI Commands:** find (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Use the HashMap type in Java algorithms](https://www.linkedin.com/learning/java-algorithms/use-the-hashmap-type-in-java-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/use-the-hashmap-type-in-java-algorithms?u=76281980&t=0)** - [Instructor] We can also leverage the hash map type in our [[Algorithms]]. For example, let's say we want to display the count of each element in an unsorted array. We can do this using a key value pair where the key is the element in the array and the value is the number of times the item appears. Then we can iterate through the hash map, displaying each element with its associated frequency. Let's write the code for this algorithm. We'll start off with the function signature. It will return void and be called displayFrequencyOfEachElement. It will take in an array. To keep track of each elements count, we'll create a hash map. This array holds ints, so the key will be of type integer. The value will also be integer for the elements count. Then we'll iterate through the array. With each iteration, we'll increment the given elements count in the hash map, or if the item is not a key in the hash map yet, we'll add it. To see if the item is in the hash map, we can use the containsKey method. If the item is not in the hash map, we'll add it. The key will be the element of the array and its value will be one.
>
> **[1:32](https://www.linkedin.com/learning/java-algorithms/use-the-hashmap-type-in-java-algorithms?u=76281980&t=92)** It's the first time we've seen the element. If the item is already in the hash map, we'll overwrite its current value. We'll retrieve the current value for that key for that element in the hash map and increment it by one, then we'll overwrite the old key value pair with this pair, the element of the array with the incremented value. We've collected the data. The hash map has each element along with how many times it appears in the array. We just need to display this information to the user. We can do this by using the forEach method on the hash map. For each key value pair, we'll print out the key with the value. This is a Lambda function. It takes an each key with its associated value and displays it to the user. Let's try out our algorithm. We'll feed it an array with a bunch of elements.
>
> **[2:57](https://www.linkedin.com/learning/java-algorithms/use-the-hashmap-type-in-java-algorithms?u=76281980&t=177)** In the console, we get the expected count value for each element in the array. There's one 1, two 3's, six 4's, two 5's, one 5, and one 8. With this algorithm, we had two pieces of data to track, what elements were in the array and how many times they appeared. These two pieces of data were connected as a key value pair, making the hash map type a useful tool for us to solve this problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Code Identifiers:** displayfrequencyofeachelement (1), containskey (1), foreach (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Detect a cylic linkedlist](https://www.linkedin.com/learning/java-algorithms/solution-detect-a-cylic-linkedlist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/solution-detect-a-cylic-linkedlist?u=76281980&t=0)** - [Instructor] Let's create an algorithm that detects if a linked list has a cycle. Here we're given the ListNode class where each instance contains a piece of data and a next reference. In order to determine if a list has a cycle, we'll need to use these next pointers. We'll need to check that a given next pointer is not pointing to a node we've already seen in the list. This is a question of membership, which makes the hash set a great tool for this algorithm. In our function, we'll iterate through the linked list, and every time we see a new node, we'll check if it's in the hash set. If it's not, we'll add it to the set. If it is in the hash set, this means we've seen the node before and the list has a cycle. If we can get through the whole list without seeing the same node twice, we can be confident that the list does not have a cycle. Let's implement this idea in code. To start, we'll create a new hash set that'll store the nodes we've already seen in the list.
>
> **[1:20](https://www.linkedin.com/learning/java-algorithms/solution-detect-a-cylic-linkedlist?u=76281980&t=80)** Then we'll create a current reference that'll keep track of where we are in the list as we iterate through it. While the current is not null, there are still elements in the list will need to check. We need to check that the current node is not a node we've seen previously in the list. To do that, we'll check if the hash contains the current node. If it does, we'll return true, because there is a cycle in the list. If we have not seen the node before, we'll keep track of it by adding it to our hash set. Then we'll increment the current node by pointing it to current.next. If we can make it through the entire list without returning true, the list does not have a cycle, and we can return false. That's our implementation. Let's try it out. And we get the correct answer. Now let's talk about time complexity. With the hash set, we were able to check in constant time whether a given node was one we'd seen before. This means our algorithm runs
>
> **[2:53](https://www.linkedin.com/learning/java-algorithms/solution-detect-a-cylic-linkedlist?u=76281980&t=173)** in linear time and linear space, as we'll need to check every node if the list does not have a cycle.

> [!info]- Semantic Content
>
> **CLI Commands:** node (11), make (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 6. Tree Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a tree?](https://www.linkedin.com/learning/java-algorithms/what-is-a-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/what-is-a-tree?u=76281980&t=0)** - [Instructor] If you're working with nonlinear data in an algorithm, the tree data structure can be a useful tool. A tree is a collection of nodes, where each node might be linked to one, two, or even more nodes. Now the last time we talked about nodes, we talked about them in the context of a linked list, where each node was connected in a linear order, node by node. The tree data structure presents a similar idea, but it applies to nonlinear data. Just like a linked list, there's always a specific starting node in a tree data structure. Instead of the head, we call it the root node. The root node can contain data, in this case 3. It can also contain links to other nodes. The linked nodes are called child nodes. Since a node in a tree can have many different nodes, that's where the data becomes nonlinear. Levels with multiple nodes start to form, and there are many different paths in the tree to take. We also refer to the root node as the parent of these child nodes. The root itself has no parent. The second level of nodes are both parents and children. They are children to the root, but parents of the nodes they're connected to. Now for a tree to be a tree, it needs to be a collection of nodes that are connected in some way by links. Some nodes might have zero children
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/what-is-a-tree?u=76281980&t=94)** and others might have 15. It's a very broad data structure, and we can apply constraints in order to access our data in an efficient manner. We can actually think of a linked list as a very specialized type of tree. It consists of a collection of nodes where each node has only one link, and that link is a child node. This is one example where we put a constraint on the exact structure of the tree and take those constraints to optimize certain operations. Another example of this idea is a binary tree. With a binary tree, each node can only have a maximum of two direct child nodes. This limits how many elements can appear on each level of the tree. At most, it would have two to the power of the number of levels in the tree. This means if you're going down a path in the tree, it limits your decision to at most two options. You can take the left path or the right path. We can take this a step further with something called a binary search tree. With the binary tree, we could have our elements in any order, as long as they were organized in a way where each node has no more than two child nodes. With a binary search tree, we add the constraint of order. items are stored in a particular order, so they're easy to find and retrieve. One constraint that the binary search tree adds
>
> **[3:09](https://www.linkedin.com/learning/java-algorithms/what-is-a-tree?u=76281980&t=189)** is that the value of a left child node must be less than the parent. This means if you're searching for an element in the tree, you can check whether the element you're looking for is less than the node you're looking at. If it is, you can continue your search down the left side of the tree confidently, knowing that it won't be on the right side of the tree. The other side of this constraint is that the right child node must have a greater value than its parent. These constraints make the tree data structure more than just a collection of stuff strung together with some links. With the binary search tree, we have a data structure that naturally stays sorted without immense amounts of reshuffling. This gives us a fairly efficient way to search for a given piece of data. It also cuts the best-case search time down to log n. Although the worst-case is still O of n, since all the elements might be on one side of the tree. By adding constraints to basic data structure ideas, we can create tools that help make our [[Algorithms]] more efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** node (16), make (2), find (1)
> **Definitions:** is a  (3)
> **Cross-References:** we talked about (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Binary trees in Java](https://www.linkedin.com/learning/java-algorithms/binary-trees-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/binary-trees-in-java?u=76281980&t=0)** - [Instructor] In [[Java]], we can use nodes in a binary search tree manner to work with our non-linear data efficiently. The fundamental components of a binary search tree are very similar to a linked list. We'll use a node class, but instead of a next reference, we'll have preferences to the left and right nodes. Again, we can do this because we assume that a given node will have at most two direct child nodes. Let's try it. We'll create a new class and call it node. Inside, we'll give it three attributes. A node left, a node right and a piece of data, an integer. Now this node class itself is a tree. It contains left and right trees, as well as a piece of data, it only becomes a binary search tree when we use [[Algorithms]] to constrain how we insert, remove and manipulate our data. This means we'll create another class called binary search tree. We'll give it one attribute, a root node, similar to how we followed a nodes next references with the linked list structure, we can follow left and right node references to access and manipulate all the data in a tree. We just need the root node. Let's create an algorithm to add data to a tree in a binary search tree manner. It will return void and taken a value
>
> **[1:35](https://www.linkedin.com/learning/java-algorithms/binary-trees-in-java?u=76281980&t=95)** that we want to insert into the tree. Now, this function we'll actually call a helper function. This insert function will do the meat of the work. It will also be private because we only want the binary search tree class to access it. Now it might seem strange to design our code in this way, but it'll let us use something called recursion, which we'll discuss later in this video. Ultimately, recursion allows us to iterate through the tree in a unique way. And this helper function will contain the core of our implementation. If we want to insert a new value and the root is null, then the inputted value should turn into the root node. We'll do this by creating a new root node and then assigning the value as the data of that node. Then we can return the root from the function. Since it's the only element in the tree, no left or right reference changes are needed. They are both still null. Now, if the root is not null then we need to insert the value on either the left or the right side of the tree. With the constraint of the binary search tree, if the value is less than the root, then we insert it on the left. Let's make that comparison. If the value is greater than the root,
>
> **[3:11](https://www.linkedin.com/learning/java-algorithms/binary-trees-in-java?u=76281980&t=191)** then we'll want to insert it on the right. If the value is equal to the root, we don't need to insert anything. We can just return the root and that's already implemented here. Now, in order to insert the item on the left side of the tree, we can leverage this algorithm we're working on right now. We can set the value of root.left equal to whatever's returned by the insert algorithm when we insert the item on the left side of the tree. We can actually reuse the function we're working on right now, but instead of putting in the root, we'll input root.left, we can do this for the right side of the tree as well. This concept of calling a function within a function with different inputs is called recursion. We defined a core base case with the root node check and by calling the same function with different inputs, we can find the right place in the tree where this value should be inserted. When we find that place, we create the node and set it accordingly. Since the function returns the node, we immediately set it to the left or right, and return it up the tree. For example, let's say we had a node four with no left and right references. If we wanted to insert the value two, we would insert it on the left side of the tree,
>
> **[4:45](https://www.linkedin.com/learning/java-algorithms/binary-trees-in-java?u=76281980&t=285)** since two is less than four. The insert function would be called again, and now the value for the root would be null. This means that a node with the value two would be created and that is what would be returned from the insert call, setting root.left equal to two. Now there are other ways to implement this algorithm, but this option leverages recursion to encourage code reusability. Another option would be to use iteration with a four loop or a wild loop as tools within this algorithm. Recursion is just another tool in your algorithm toolkit. Let's test our function. We create a root node, create a binary search tree,
>
> **[5:42](https://www.linkedin.com/learning/java-algorithms/binary-trees-in-java?u=76281980&t=342)** and then insert a few values into the tree.
>
> **[5:51](https://www.linkedin.com/learning/java-algorithms/binary-trees-in-java?u=76281980&t=351)** Let's run it. Now, we won't see anything in the output just yet because we're only inserting data not displaying it. However, it is stored in memory efficiently, and we can continue to develop more algorithms to better visualize and manipulate our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Java]] (1)
> **CLI Commands:** node (18), find (2), make (1)
> **Definitions:** is a  (1), is called (1), means that (1)
> **Analogies:** similar to (2), for example (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [What are tree traversals?](https://www.linkedin.com/learning/java-algorithms/what-are-tree-traversals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/what-are-tree-traversals?u=76281980&t=0)** - [Instructor] With a binary tree, data is stored without any ordering constraints. Data is simply placed in the next available slot. This means, that in order to search for an element or manipulate data in the tree, one must iterate through the tree. We call this traversing a tree, or visiting each node in the tree to display or manipulate its data. When traversing a tree, we have a few different options, depending on which nodes we visit first, and which nodes we visit last. For example, one way we could traverse the tree is to recursively traverse the left subtree, then visit the root node, and then recursively traverse the right subtree. The leftmost subtree is eight, with no children nodes. So that would be displayed first. Then it's root, two, and then the right subtree, 11. Continuing up the tree, the root is five, and its right subtree has seven. These nodes are visited in an order from left to right, eight, two, 11, five, and seven. So we call this an in-order traversal. Another option is to do a pre-order traversal. In a pre-order traversal, the root is visited first, then the left and right subtrees are recursively traversed. This means root five would be the first node. Then, we would recursively go down to find the leftmost subtree,
>
> **[1:34](https://www.linkedin.com/learning/java-algorithms/what-are-tree-traversals?u=76281980&t=94)** visiting each node along the way. This means two would be visited next, and then eight. Once all the left nodes have been visited, we would begin to visit the right nodes, working our way back up the tree. 11 is the right node of two, so that would be visited next. Then, seven is the right node of five. That would be visited last. With this traversal, five, two, eight, 11, and seven, the root is visited first, and then its subtrees are visited recursively. The last type of traversal we'll look at is the post-order traversal, where the root is visited last. First, the left subtree is visited, then the right subtree, and, finally, the root. Thinking about this algorithm with our own tree, this means the leftmost node would be visited first, that's eight. Then, the next right node would be visited, 11. The root of the subtree is two, so that would be next, followed by seven, and finished off by five, the root of the tree. With this path, eight, 11, two, seven, and five, the root is visited last, after each subtree has been recursively traversed. Now these are three common options for traversing the data in a binary tree. Again, these work because we're making the assumption that each node will have, at most, two child nodes. Which traversal algorithm you choose
>
> **[3:09](https://www.linkedin.com/learning/java-algorithms/what-are-tree-traversals?u=76281980&t=189)** depends on your use case. If you know that you'll want to explore the roots of the trees before inspecting the leaves, the pre-order algorithm is a good option, because you visit the roots before the leaves. If the opposite is true, meaning you'd need to explore the leaves before the roots, the post-order algorithm might be better suited. If your tree is a binary search tree or has a sequence within its nodes, then the in-order traversal might be best. It will visit the nodes in order and flatten the tree back to its original order. Each type of traversal can be a useful tool when working with trees. They each have their pros and cons. It just depends on how you want to manipulate your data.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), find (1)
> **Definitions:** we call this (2), is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Implement tree traversals in Java](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=0)** - [Instructor] In a tree traversal algorithm, each node in a tree is accessed in a particular order. In a pre-order traversal, we visit the root first. With the in-order traversal, we recursively visit the left tree, and then the root. With the postorder, we visit the root last. With each traversal, we apply the same pattern to parts of the tree, and then continue that pattern throughout the tree. The concept of recursion can become a very useful tool in this type of algorithm because we're doing the same operation with slight modifications to the inputs. Let's look at how we can apply it to tree traversal [[Algorithms]]. We have some sample code here that we've carried over from previous videos with a few modifications. There is the node class, as well as the binary tree class. The binary tree class will hold our traversal. In the main function, we create a small binary tree. It's important to note that this is not a binary search tree, it does not meet the ordering constraint. It's only a binary tree. Let's traverse it. We'll start with the pre-order traversal algorithm. It will display the data from each node in the tree. Since we're using recursion, a helper function will turn out to be quite handy.
>
> **[1:36](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=96)** We'll pass in the root.
>
> **[1:46](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=106)** Now, to the core implementation. If the root is null, there's nothing to display. We'll only want to print things out if there's data in the tree. If there is data, we need to do a pre-order traversal. We'll start by displaying the root. Then, we'll recursively traverse the left and right trees. We can do this by calling pre-order traversal, that algorithm we're working on right now. We'll pass in the left subtree. We'll also do the same for the right subtree, root.right. And that's it. That's the pre-order traversal. We visit the root, and then recursively visit all the nodes in the left subtree and the right subtree. Let's test it out using our debugger. We'll walk through the algorithm as each node is being printed. We'll place a break point at the if statement. Let's call it.
>
> **[3:01](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=181)** All right, we've hit our first break point. The value in the root node is five. If we look at the left and right, the left has a root of two, the right has a root of four. If we hit step over, and hit step over again, we'll see five has been printed out in the console. Now, the left node is about to be recursively traversed. If we step into this, we'll see that the root node is two. That's the root on the left. This is not null, so we'll go and print this out. This gives us two in the console. Let's step into this again. Now, the root is nine.
>
> **[3:58](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=238)** And we display that in the console. Stepping into root.left, again, the root is now null. So we'll continue on to the right subtree with the root five.
>
> **[4:21](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=261)** And we continue on until the [[Representational State Transfer (REST)|rest]] of the tree is printed. In the console, we see the full pre-order output. The root is displayed first, and then the left and right subtree contents are displayed. The inorder and postorder traversals will follow a similar pattern. We'll copy this, and change the names. Inorder, inorder, and inorder. Now for the inorder traversal, we visit the left, the root, and then the right. We can implement this by moving the print statement. We'll recurse the left, print the root, and then recurse the right. That's it. For the last algorithm, we'll print the root last. This'll be the postorder traversal.
>
> **[5:31](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=331)** We'll move the print statement to the end. Let's test out these algorithms.
>
> **[5:43](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=343)** We'll call the inorder traversal, and then the postorder traversal.
>
> **[5:55](https://www.linkedin.com/learning/java-algorithms/implement-tree-traversals-in-java?u=76281980&t=355)** In the inorder traversal, we get the items back in sequential order. With the postorder traversal, we get the leaves and then the root for each subtree. The tree structure gives us flexibility on how we iterate through our data, providing us more options so we can work with our data in the most efficient manner possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (7)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Find height of binary tree](https://www.linkedin.com/learning/java-algorithms/solution-find-height-of-binary-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/solution-find-height-of-binary-tree?u=76281980&t=0)** - [Instructor] Let's calculate the height of a tree. We'll start with the base case where the root of the tree is null. If the root is null, then the height of the tree is zero because there are no nodes in the tree. If the root is not null, then we'll need to account for it in our height. The tree must be at least one in height. Now this works if the height is actually one, but a given root can have left and right subtrees. In order to calculate the full height of the tree, we need to take these subtrees into account. We can do that by using our function recursively. We'll calculate the height of the left subtree by calling the same findHeight function with root.left. This will calculate the height of the left subtree. Now we can do the same thing for the right.
>
> **[1:18](https://www.linkedin.com/learning/java-algorithms/solution-find-height-of-binary-tree?u=76281980&t=78)** So we have the height of the right and left subtrees. The total height of the tree will be this level plus the maximum of the subtree levels.
>
> **[1:36](https://www.linkedin.com/learning/java-algorithms/solution-find-height-of-binary-tree?u=76281980&t=96)** That's our implementation. Let's take a look at the test code. Here we have a root node and a left and a right subtree. This means the height is at least two. The root's left subtree also has left and right subtrees. This makes the total height of the tree three. Let's run it. We get the result we expect. Your code returned three. Thinking of time, complexity, this function takes O of N time, because we need to visit every node of the tree in order to calculate the height.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2)
> **Code Identifiers:** findheight (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue optimizing algorithms](https://www.linkedin.com/learning/java-algorithms/continue-optimizing-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-algorithms/continue-optimizing-algorithms?u=76281980&t=0)** - [Kathryn] Congrats on finishing the course. Now you know how to create more efficient programs in [[Java]] by optimizing your [[Algorithms]]. As a part of this course, we discovered what makes a given algorithm effective and how to make informed assumptions to speed up that processing time. We also learned how to describe algorithms using big O notation to compare one algorithm to another, independent of input size. Java has many built-in tools to work with your data, and we discovered how to leverage different [[Data Structures]] to make our algorithms more efficient. Creating more efficient algorithms is all about understanding the assumptions you can make about your data and leveraging the tools in your toolkit. To continue optimizing your programs in Java, I encourage you to learn more about what Java has to offer in terms of built-in tools. The more specific [[LinkedIn]] Learning courses, such as "[[Functional Programming]] in Java", are great for building your knowledge of a specific set of tools in Java. Then, using the knowledge we've built here, you can decide whether a given tool fits your needs for a particular algorithm. Another path is to learn more about the theory of algorithms and data structures. The programming foundation courses are a great place to start because they provide a more abstract approach when discussing the different ways we can work with our data. Thank you for watching this course.
>
> **[1:32](https://www.linkedin.com/learning/java-algorithms/continue-optimizing-algorithms?u=76281980&t=92)** I really enjoyed creating it to help you develop more efficient Java programs. Good luck, and I hope the knowledge you've gained in this course comes in handy whenever you're building programs with Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[Algorithms]] (5), [[Data Structures]] (2), [[LinkedIn]] (1), [[Functional Programming]] (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available

## Skills Covered

- Algorithms
- Java

## Path Context

### In [[Getting Started as a Java Developer]]
← [[Java Exception Handling]] | **9 of 10** | [[Java- Data Structures]] →

## Appears In

- [[Getting Started as a Java Developer]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)