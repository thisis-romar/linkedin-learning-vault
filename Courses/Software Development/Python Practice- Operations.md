---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: python-practice-operations
url: "https://www.linkedin.com/learning/python-practice-operations"
duration_minutes: 17
duration: 17m
level: Beginner
updated: 9/13/2023
learners: 62992
skills:
  - Python (Programming Language)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHs2g5pgjX9Bw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902171062?e=2147483647&amp;v=beta&amp;t=3KGQEoQehvpFIkNavn0Ka6V-0lAb5W1-IX-8_QPH6BA"
linkedin_topic: Software Development
learning_paths:
  - '[[Python Hands-On Practice]]'
prev_courses:
  - '[[Practice It- Python Data Structures]]'
next_courses:
  - '[[Python Practice- Collections]]'
path_nav: '[{"path":"Python Hands-On Practice","position":3,"total":14,"prev":"Practice It- Python Data Structures","next":"Python Practice- Collections"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Practice-%20Operations.md)

![Python Practice: Operations](https://media.licdn.com/dms/image/v2/D560DAQHs2g5pgjX9Bw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902171062?e=2147483647&amp;v=beta&amp;t=3KGQEoQehvpFIkNavn0Ka6V-0lAb5W1-IX-8_QPH6BA)

# Python Practice: Operations

> If you’re looking to practice basic operations in Python, this course was designed just for you. Join LinkedIn Learning staff instructor Scott Simpson as he leads you through a series of automated coding challenges hosted by CoderPad, the skills-first, technical assessment platform that lets you write live code in a realistic coding environment. Each challenge in the course includes a set of instr

> [LinkedIn Learning](https://www.linkedin.com/learning/python-practice-operations) | 17m | Beginner | 63K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Try your Python programming skills](#try-your-python-programming-skills)
  - [What you need to know](#what-you-need-to-know)
  - [Exploring the Lab environment](#exploring-the-lab-environment)
- [**1. Code Challenges**](#1-code-challenges) (7 videos)
  - [Solution: Are two strings equal?](#solution-are-two-strings-equal)
  - [Solution: String replacement](#solution-string-replacement)
  - [Solution: Reverse a string](#solution-reverse-a-string)
  - [Solution: Format a string](#solution-format-a-string)
  - [Solution: Insert into a string](#solution-insert-into-a-string)
  - [Solution: Does a string contain all the letters?](#solution-does-a-string-contain-all-the-letters)
  - [Solution: Anagram validator](#solution-anagram-validator)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Try your Python programming skills](https://www.linkedin.com/learning/python-practice-operations/try-your-python-programming-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/try-your-python-programming-skills?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] is one of the most popular programming languages in the world. Knowledge of Python opens the door to working with data, building applications, and solving problems, with code that can run on many types of devices. In this Code Challenge course, you can test your knowledge of Python basics to build your confidence working with the language. I've put together seven code challenges covering some of the most important basic concepts you'll use when working in Python. Build and test your solutions to these challenges in the built-in interactive coding environment, no special software required. And when you finish your solution to each challenge, take a look at my solution videos to see how I solve them. If you're ready to try out your Python skills, let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5)
> **Speakers:** - [instructor] (1)

#### [What you need to know](https://www.linkedin.com/learning/python-practice-operations/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/what-you-need-to-know?u=76281980&t=0)** - [Instructor] In this Code Challenge course, I expect you to be familiar with the basics of working with [[Python (Programming Language)|Python]]. We'll start out working with strings, and we'll use some flow control and conditional statements too. The challenges start out quite basic and become more involved as the course moves on. If you need to refresh your Python knowledge, take a look at these courses in the [[LinkedIn]] Learning Library. To work on these challenges, you don't need to install any separate software. The Coding Challenge environment is part of the LinkedIn Learning Course page. We'll explore how that works in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (2)
> **CLI Commands:** python (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the Lab environment](https://www.linkedin.com/learning/python-practice-operations/exploring-the-lab-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/exploring-the-lab-environment?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the courses' table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by Coder Pad and they appear in the same area of the course page where you watch the courses' videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The Code Challenge has four areas. Instructions are in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left. You can use these drag handles to allocate space as you like. To get even more horizontal space for the code editors, you can collapse the courses' table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenges' parameters and desired result. Parameters are values that are passed into your code, and they have to be of a particular data type. The return value also has to be of a particular type, and you'll also see that noted in the instructions. The constraints' section has useful information about the parameters that will be passed in. The examples show different parameter values and what result would be returned for each of those test cases. Create your answer in the top right code editor. There are comments in the starting code, showing where to put your solution. When you click test my code, you'll see a message indicating
>
> **[1:38](https://www.linkedin.com/learning/python-practice-operations/exploring-the-lab-environment?u=76281980&t=98)** whether your code returned a correct result. If your code isn't successful, you can ask for help.
>
> **[1:57](https://www.linkedin.com/learning/python-practice-operations/exploring-the-lab-environment?u=76281980&t=117)** The show expected result and show hints variables determine whether you see the expected output and any hints.
>
> **[2:11](https://www.linkedin.com/learning/python-practice-operations/exploring-the-lab-environment?u=76281980&t=131)** Change them to a value of true to control the output. The code editor in the lower right shows how your solution is used. You can change that code to experiment with different test cases.
>
> **[2:41](https://www.linkedin.com/learning/python-practice-operations/exploring-the-lab-environment?u=76281980&t=161)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. When you finish each code challenge, return to the courses table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Code Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Are two strings equal?](https://www.linkedin.com/learning/python-practice-operations/solution-1-are-two-strings-equal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/solution-1-are-two-strings-equal?u=76281980&t=0)** - [Instructor] The solution to this challenge requires us to do two things. First, we need to provide the parameters that our function will accept. We need to know which two strings to compare. So in the function definition, I added first_string, second_string as parameters. So this function will take two arguments when it's called. These arguments will be the strings to compare. Within the function, these values will be represented by first_string and second_string. So we can write return first_string == second_string. Double equals checks whether two values are equal, and the result is a Boolean value, true or false. In our first test case, comparing string one to string two will get back true. And in the second case, comparing string two to string three will get back false. Or at least that's the idea. Let's make sure that this solution works. I'll click Test my code, and I get what I expect. The first comparison is true and the second is false. I've solved this challenge. In many other languages, it's quite easy to make the mistake of using one equal sign, the assignment operator, where we really need two, the comparison operator. In those languages, the assignment operation will always return true. And that's led to a lot of pretty famous software bugs over the past few years. [[Python (Programming Language)|Python]] can catch this mistake for us, but it's always important to keep in mind. Comparing strings and other items and returning a true or false value as the result is something we'll find ourselves doing often in Python programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** first_string (3), second_string (3)
> **CLI Commands:** make (2), python (2), find (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Solution: String replacement](https://www.linkedin.com/learning/python-practice-operations/solution-2-string-replacement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/solution-2-string-replacement?u=76281980&t=0)** - [Instructor] To solve this challenge, we'll need to have our function accept three pieces of information. We'll need the original string we're working with, we'll need the value we want to replace, and we'll need the new value that replaces that old value. So I added three parameters here in my function definition; the original string, the old string, and the new string. Then I used the string method replace on the original string, and I give it the old string and the new string values. Replace will use this information to create a new string where any occurrence of the value of the old string is replaced by the value of the new string. This new string is what I return from the function. I'll test my code and I see that I get the correct result. String replacement comes up a lot when we're writing programs that deliver output, either to users or to other systems and processes.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Reverse a string](https://www.linkedin.com/learning/python-practice-operations/solution-3-reverse-a-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/solution-3-reverse-a-string?u=76281980&t=0)** - [Instructor] To solve this challenge, I used string slicing with a negative interval. Reversing a string can be accomplished in many different ways, though. Each character in a string has an index number starting from zero at the left side. String slicing lets us use these index numbers to refer to substrings. We can provide a number and another number and get back the substring represented by that specific range of indices in the string. The second number is where the counting stops, so the character in that position isn't returned. We'll be seeing that later in this set of challenges. String slicing has a third term, though, which is an interval, so we could put two or something like that and tell the [[Python (Programming Language)|Python]] string slicing to return every other index item. Putting a one here is the same as leaving that term off because an interval of one is just the normal counting of items, one at a time. We can also use a negative number as this interval and that tells Python to start from the end of the string rather than the beginning. And if we leave off the other two terms, that means to return the whole string, not just a substring. So if we use the full range and negative one is our interval, we'll work backwards from the end of the string, one item at a time. And if we leave off the other terms in the string slicing, we'll get the whole string, but backwards. I'll run my solution here and we can see that this works. If you used a different approach, that's fine too. The important part is that you got the right result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Format a string](https://www.linkedin.com/learning/python-practice-operations/solution-4-format-a-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/solution-4-format-a-string?u=76281980&t=0)** - [Instructor] String formatting is important when we're outputting mixed data types or when we need to control spacing or precision in our output. A common way of formatting strings in [[Python (Programming Language)|Python]] is to use f-strings to interpolate various pieces of information within a string. This lets us include things like numbers in a string without having to cast them as strings and use regular string concatenation to [[Jetpack Compose|compose]] our string. An f-stringing starts with the letter f and then has the regular string in either single or double quotes. And as I mentioned, they let us use existing variables or even whole pieces of code right within the f-stringing, and those values are evaluated when the string is rendered. For this solution, I used two parameters in my function and used three placeholders for my numeric values. I included both of the original values in the string, and I also included the calculation that was required by the challenge. Python takes care of evaluating this calculation and inserting the appropriate values into my text string. I'll run my code, and here we can see that the result is correct. f-strings also allow us to provide more formatting, like setting a specific precision for decimal values and so on, but we didn't need that here. Without f-strings, we'd need to convert variables into string types and use the plus character to concatenate string pieces together. That can get messy and becomes very hard to read. f-strings are a good choice whenever we need to incorporate non-text values into text output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Insert into a string](https://www.linkedin.com/learning/python-practice-operations/solution-5-insert-into-a-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/solution-5-insert-into-a-string?u=76281980&t=0)** - [Instructor] While it's common to want to modify strings, strings are immutable, so we need to split and reconstruct them into new strings instead of trying to edit them in place. Here, in my solution, first I use string slicing to check characters four through nine of the product ID to see if it already matches the product code we'd like to apply. If it does, we know that this product ID has already had the product code added, so we just return that and the function ends. However, if the product code isn't at positions four through nine of the product ID, we'll need to add it. And that means we'll need to construct a new string with our product code within it. I'll use string slicing to get the first three characters from the string, like the challenge mentions. I store that in a variable I'm calling first part. This gets characters zero, one and two and stops when it reaches three. Then I take the other part of the string from characters three onward and put that into another string called last part. The challenge requires that the product code have a dash on either side of it, so I'm using an F string here to make a new string with the parts of the original string and the product code with those dashes included. Using the variable names here makes this line easier to read. But I also could have put my string slicing logic right inside these bracket pairs in the F string. And when I run the test with this code, I see that I get the expected results. The first product ID needed that code to be inserted,
>
> **[1:36](https://www.linkedin.com/learning/python-practice-operations/solution-5-insert-into-a-string?u=76281980&t=96)** but the second one already had it, so that second string was just returned to us.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Does a string contain all the letters?](https://www.linkedin.com/learning/python-practice-operations/solution-6-does-a-string-contain-all-the-letters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/solution-6-does-a-string-contain-all-the-letters?u=76281980&t=0)** - [Instructor] In this challenge, we're given ascii_lowercase, a string that contains all the letters from a to z in lowercase form. That's available globally, so we don't need to pass it to our function. All our function needs is the string that we're checking to see whether it contains all the letters in the alphabet. I start out with an empty string that we'll use to record any letters that are missing from our test string. Then I use a for loop to iterate through the ascii_lowercase string and use each character in that string as l, short for letter. So the first run through this loop, that value will be a, the next time it'll be b, and so on. Each time through the loop, if that loop's letter does not appear in the lowercase version of my string, then we append that letter to the string that I defined up above. I'm using lower here because we only care about the letters, not what case they are. It would be unnecessarily complicated to check both uppercase and lowercase letters. So keeping it to one case makes things simpler. We'll use this to determine both whether a string has any missing values and to return what those missing letters are. If the letter does appear in the test string, I don't need to do anything, so this is all this loop does. Next, I check to see whether the string called missing is longer than zero characters. If it is, that means my loop has identified at least one letter missing from the test string. And if that's the case, I return a string saying that the string is missing letters. And then I use that string of missing characters to display what's missing.
>
> **[1:34](https://www.linkedin.com/learning/python-practice-operations/solution-6-does-a-string-contain-all-the-letters?u=76281980&t=94)** If the length of the missing string is not greater than zero, we return a string saying that this string contains all the letters of the alphabet because no letters are missing. Notice here that we don't have to handle cases where the length of missing is less than zero. Strings can't have negative length so there's no reason to check for that. All we care about is whether it's zero or not. So when I run this, I get the expected result. The first string is not a pangram. It's missing the letters d, f, and t. And the second string is a pangram. It has all the letters of the alphabet in it.

> [!info]- Semantic Content
>
> **Code Identifiers:** ascii_lowercase (2)
> **Definitions:** short for (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Anagram validator](https://www.linkedin.com/learning/python-practice-operations/solution-7-anagram-validator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/solution-7-anagram-validator?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge. It starts with a function called is_anagram which takes two parameters, first_string and second_string. Within that function, I define two empty strings that we'll use to collect the letters that are contained in each of the strings we want to compare. Then we loop through a lowercase version of the first string. Here we're converting the string to lowercase so we don't have to consider both upper and lowercase letters. It doesn't matter if a letter is capitalized or lowercased in an anagram, so we'll convert the whole string to one case. For each letter in the string, we'll add it to the letters1 string if it's an alphabetic character, and if not, we'll add an empty string. Because remember, when we're working with anagrams, all we care about is the letters, and we've already taken care of what case they are by treating the initial string as lowercase. So all the letters going into this letters1 string will also be lowercase. Once we reach the end of the first string, we move on into the same thing for the second string, collecting its lowercase alphabetic characters in letters2. Now, if we're working with an anagram, our two letters strings should have the same number of the same letters. But how do we compare them? There are various ways to do this, and what I've chosen to do is to sort each string into lists and then compare those sorted lists. Sorting a list means that the items within it will be arranged alphabetically in a new list. So for example, if we had "cat" in one string and "tac" in another,
>
> **[1:33](https://www.linkedin.com/learning/python-practice-operations/solution-7-anagram-validator?u=76281980&t=93)** sorting either of these strings results in the list with the items 'a', 'c', 't' and then we could tell that those are the same. Sorting a string also helps us make sure that the same number of the same letters appear. Imagine if our strings were "root" and "toro". Sorting these, we would get 'o', 'o', 'r', 't', two Os in each list. So these sorted lists are equal, including the fact that both words have two Os. If we had "rot" in a string, that would end up 'o', 'r', 't', and that isn't equal to 'o', 'o', 'r', 't', not enough Os. So while an alternative approach to this program might be looping through our strings again and counting up occurrences of letters or removing matching letters one by one, we don't have to do that if we sort our strings into lists. Finally, what I return is sorted letters1 == letters2. That creates two lists, compares them, and returns the Boolean value the challenge asks for. If you started out with letters1 and letters2 being lists and appended the letters to them, that's fine too. I'll run this, and I can see that the first two strings are anagrams and the second two aren't. We can see why if we add a few print statements in here. To my solution, I'll add print sorted letters1, print sorted letters2, and print "---" as a divider, and I'll run my my code again. If we compare these lists visually, we can see in the first case,
>
> **[3:04](https://www.linkedin.com/learning/python-practice-operations/solution-7-anagram-validator?u=76281980&t=184)** for each letter in the provided string, there's a corresponding letter in the second. And in the second set it looks the same, but ah, no, this pair doesn't match. So the two strings that went into this second comparison aren't anagrams. They have the same number of letters and they have the same set of letters, but not the same number of the same letters.

> [!info]- Semantic Content
>
> **Code Identifiers:** is_anagram (1), first_string (1), second_string (1)
> **CLI Commands:** cat (1), make (1)
> **Analogies:** for example (1), imagine (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-practice-operations/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-operations/next-steps?u=76281980&t=0)** - [Scott] If you are able to solve these challenges, congratulations. And if not, take some time to refresh your knowledge of [[Python (Programming Language)|Python]] and come back and try again. If you're ready to move on and solve more advanced challenges, take a look at our other interactive Python Code Challenge Courses here on [[LinkedIn]] Learning. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - [scott] (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[Python Hands-On Practice]]
← [[Practice It- Python Data Structures]] | **3 of 14** | [[Python Practice- Collections]] →

## Appears In

- [[Python Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)