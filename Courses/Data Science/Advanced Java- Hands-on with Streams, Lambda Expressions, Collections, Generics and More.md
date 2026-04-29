---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more
url: "https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more"
duration_minutes: 50
duration: 50m
level: Advanced
updated: 9/14/2023
learners: 120252
skills:
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/advance-your-skills-in-java-4452104"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEn_cL1ZTUQCA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902444081?e=2147483647&amp;v=beta&amp;t=z7aBpUH2DA95t1E3AsbrRH02DfLPDdbR-u3GsoWONV0"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Java Skills]]'
prev_courses:
  - '[[Data Science for Java Developers]]'
path_nav: '[{"path":"Advance Your Java Skills","position":4,"total":4,"prev":"Data Science for Java Developers","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/java
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20Java-%20Hands-on%20with%20Streams%2C%20Lambda%20Expressions%2C%20Collections%2C%20Generics%20and%20More.md)

![Advanced Java: Hands-on with Streams, Lambda Expressions, Collections, Generics and More](https://media.licdn.com/dms/image/v2/D560DAQEn_cL1ZTUQCA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902444081?e=2147483647&amp;v=beta&amp;t=z7aBpUH2DA95t1E3AsbrRH02DfLPDdbR-u3GsoWONV0)

# Advanced Java: Hands-on with Streams, Lambda Expressions, Collections, Generics and More

> Are you experienced in Java, but looking to get your skills to the next level? Join Maaike van Putten in this course and take your Java programming from good to great. Maaike covers a series of advanced Java topics, including streams and lambda expressions, collections and generics, and custom annotation. She also shows you how to deal with concurrency and work with the singleton design pattern. J

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more) | 50m | Advanced | 120K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Streams and Lambda Expressions]]** (4 videos)
- **[[#2. Collections and Generics]]** (4 videos)
- **[[#3. Annotations and Reflection]]** (4 videos)
- **[[#4. Concurrency and Multithreading]]** (3 videos)
- **[[#5. Working with the Singleton Design Pattern]]** (3 videos)
- **[[#6. Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Advance your Java Skills
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980&t=0)** - [Maaike] If you're quite good with Java, but you feel like there's something missing to push your skills from okay to great, you're in the right place.
>
> **[0:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980&t=8)** My name is Maaike and Java is my jam.
>
> **[0:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980&t=10)** I've got a bit of a soft spot for this programming language, possibly because it's the first one I learned.
>
> **[0:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980&t=16)** So what's on the agenda to get you to love Java that much too?
>
> **[0:20](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980&t=20)** Well, some of my favorite topics.
>
> **[0:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980&t=22)** We'll tangle with Lambda expressions and the Stream API and take some time to get to know your collections and generics better, and that's not even all.
>
> **[0:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980&t=30)** We're going to annotate our code with our very own annotation, deal with concurrency, and work with the singleton design pattern, which you'll of course implement yourself because this is a hands-on course.
>
> **[0:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/advance-your-java-skills?u=76281980&t=40)** So it's time to roll up your sleeves and join me to take your Java expertise to the next level with this hands-on advanced Java course.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [maaike] (1)

#### CoderPad challenge environment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=14)** These challenges are hosted by CoderPad and they appear in the same area of the course where you watch the course's videos.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=21)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=29)** Code Challenge has four areas, Instructions in the top left, a code editor for your answers in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left.
>
> **[0:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=42)** You can use these direct handles to allocate space as you like.
>
> **[0:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=48)** To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left.
>
> **[0:55](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=55)** Each challenge has instructions that include the description of the challenge and the challenge's parameters and desired result.
>
> **[1:01](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=61)** Parameters are values that will be passed into your code, and they have to be of a particular data type.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=67)** Return value also has to be of a particular data type, and you also see that noted in the instructions.
>
> **[1:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=73)** It's possible that some questions don't require any input or won't return the results.
>
> **[1:18](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=78)** The Constraints section has useful information about parameters that will be passed in.
>
> **[1:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=83)** The examples show different parameter values and what result will be returned for each of those test cases.
>
> **[1:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=89)** Create your answer.
>
> **[1:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=90)** In the top-right code editor, there are comments in the starting code showing where to put your solution.
>
> **[1:34](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=94)** When you click Test My Code, you'll see a message indicating whether your code returned a correct result.
>
> **[1:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=101)** If your code isn't successful, you can ask for help.
>
> **[1:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=106)** To showExpectedResult and showHint's variables, determine whether you see the expected result and any hints.
>
> **[1:53](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=113)** Change them to a value of true to control the outputs.
>
> **[1:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=117)** The code editor in the lower right shows how your solution is used.
>
> **[2:02](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=122)** You can change that code to experiment with different test cases.
>
> **[2:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=126)** Regardless of whether your answer's successful, you'll see messages in the console output in the lower left.
>
> **[2:12](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=132)** If any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[2:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/coderpad-challenge-environment?u=76281980&t=137)** When you finished each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), type, (1), require (1)
> **Code Identifiers:** showexpectedresult (1), showhint (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Streams and Lambda Expressions

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Functional programming
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=0)** - [Instructor] Let's talk about a programming paradigm you've probably heard of, Functional Programming.
>
> **[0:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=6)** This programming paradigm is becoming increasingly popular.
>
> **[0:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=10)** Let's use Java and explore how it can improve our code.
>
> **[0:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=14)** Functional Programming is a programming paradigm that treats computations as the evaluation of mathematical functions.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=21)** It focuses on the use of immutable data, whilst avoiding changing state immutable data.
>
> **[0:28](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=28)** In functional programming, functions are first-class citizens.
>
> **[0:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=32)** This means that it can be assigned to variables, passed as arguments, and returned from other functions.
>
> **[0:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=38)** There are a number of benefits to functional programming that make it worth incorporating this programming style to your toolbox.
>
> **[0:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=45)** First of all, it's easier to understand and therefore easier to debug.
>
> **[0:50](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=50)** Functional programming aims on working with immutable data and not changing state.
>
> **[0:55](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=55)** With no shared state and side effects, the code becomes more predictable.
>
> **[0:59](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=59)** It's easy to understand what's going on and that helps for debugging.
>
> **[1:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=63)** The next point is that functional programming enhances modularity.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=67)** It promotes composing smaller functions into more complex ones, making the code more modular and easier to maintain.
>
> **[1:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=75)** And lastly, it leads to improved concurrency.
>
> **[1:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=77)** In case you're not familiar with a concept, concurrency means that multiple things can be going on at the same time, as functional programming avoids multiple state.
>
> **[1:26](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=86)** It makes it simpler to write concurrent and parallel code, so there aren't going to be any funky side effects in other threats.
>
> **[1:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=93)** Java 8 introduced several features that enable functional programming, including Lambda Expressions, method references, and the stream API.
>
> **[1:43](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=103)** We're going to discuss these concept next.
>
> **[1:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/functional-programming?u=76281980&t=105)** Let's dive into Lambda expressions in the next video to see how we can start implementing functional programming in our Java projects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), lambda (2)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Versions:** java 8 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Lambda expressions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=0)** - [Instructor] Now that we understand the concept of functional programming, let's dive into lambda expressions.
>
> **[0:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=6)** They're one of the main building blocks of functional programming.
>
> **[0:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=9)** A lambda expression is a short anonymous function that can be used to implement functional interfaces.
>
> **[0:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=15)** What are functional interfaces, you may wonder?
>
> **[0:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=17)** Well, these are interfaces with only one abstract method.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=21)** The syntax for lambda expressions consists of three parts.
>
> **[0:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=25)** We have the parameter list.
>
> **[0:26](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=26)** These are the input parameters for the lambda function and closed in parentheses.
>
> **[0:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=30)** These parentheses can be omitted if there's only one parameter.
>
> **[0:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=33)** Then we have the arrow token.
>
> **[0:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=35)** It's the hyphen symbol followed by a bigger than symbol, which separates the parameter list from the body.
>
> **[0:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=41)** And the body is the third part.
>
> **[0:43](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=43)** The lambda function body can be a single expression or a block of code enclosed in curly braces.
>
> **[0:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=48)** If it's a single statement, the curly braces can be omitted.
>
> **[0:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=52)** This is an example of a lambda expression that takes two integers and returns their sum.
>
> **[0:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=57)** This means there needs to be a functional interface with an abstract method with a corresponding signature.
>
> **[1:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=63)** So two input arguments and returning something of that same type.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=67)** For example, the one that you can see on the slide it returns an int and takes two ints as input.
>
> **[1:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=73)** This might sound somewhat vague.
>
> **[1:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=75)** So let's have a look at an example in IntelliJ.
>
> **[1:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=77)** On line seven, you can see a predicate.
>
> **[1:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=79)** A predicate is a built-in functional interface that takes an argument and returns a Boolean.
>
> **[1:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=84)** So for example, here we create a predicate to determine whether a string is larger than five characters.
>
> **[1:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=90)** The predicate is an interface with one abstract method.
>
> **[1:34](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=94)** Let me show you the predicate here.
>
> **[1:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=97)** As you can see, it is one abstract method called Test that returns Boolean.
>
> **[1:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=101)** That's why we can use our newly created implementation like this largerThan5.test the name of the method and then insert the input, in this case, Hello.
>
> **[1:51](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=111)** And if I'm going to catch this result and print it it's going to be false, because Hello has five characters exactly, and that's why the length is not longer than five.
>
> **[2:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=128)** Lambda expressions can be assigned to variables or passed as arguments to methods.
>
> **[2:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=133)** Let's create an example of using a lambda expression with a build-in functional interface called Consumer.
>
> **[2:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=139)** The building Consumer takes a parameter and returns nothing.
>
> **[2:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=143)** So in this case, lambda expression is having some parameters that are then being used to print something.
>
> **[2:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=149)** No value is being returned.
>
> **[2:34](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=154)** In this case, I can omit parentheses, 'cause I only have one input parameter.
>
> **[2:39](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=159)** And I'm just going to say that it's going to print it in uppercase.
>
> **[2:43](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=163)** The abstract method is called Accept, and that's why I can call it like this.
>
> **[2:55](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=175)** And I can run this.
>
> **[3:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=180)** So you can see I have assigned two lambda expressions, two variables.
>
> **[3:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=184)** I have a variable LargerThan5 calling it Predicate and I have a printUpperCase variable calling it Consumer.
>
> **[3:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=189)** I could even go ahead and create another method called doSomething, and this method is going to accept a predicate.
>
> **[3:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=204)** In order to call this method, I need to pass in a predicate.
>
> **[3:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=207)** And inside this method, I'm then going to just call the test method on the predicate and return the result.
>
> **[3:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=218)** So this could be testing for anything and in this case it's testing for larger than five, because that's the one I'm having.
>
> **[3:43](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=223)** So let's go ahead and call the method.
>
> **[3:50](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=230)** And this is now going to print through at the variant, because doSomething is larger than five characters.
>
> **[3:58](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=238)** I could also call my doSomething with a different lambda expression.
>
> **[4:01](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=241)** And I don't need to sort this in a variable first.
>
> **[4:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=243)** I can also just go ahead and implement a lambda expression on the spot here.
>
> **[4:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=247)** So right now I'm going to check for whether it starts with an A or not.
>
> **[4:12](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=252)** And this is going to return false, because doSomething does not start with an uppercase A.
>
> **[4:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=261)** As you can see, this is making my code very dynamic.
>
> **[4:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=265)** So there's one more thing I need to tell you about lambda expressions.
>
> **[4:28](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=268)** There's a shorthand syntax called Method Reference.
>
> **[4:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=271)** When we use a lambda expression to trigger another existing method we can write this in a shorter way namely with a Method Reference.
>
> **[4:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=278)** This can only be used for existing methods.
>
> **[4:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=281)** It has a different syntax with double colon and there are some variations on how to do it, but we could write our previous example of the consumer with two uppercase instead.
>
> **[4:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=292)** If we had a lambda expression that would be s becomes s.ToUppercase.
>
> **[4:58](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=298)** We could write this like String::toUpperCase.
>
> **[5:01](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=301)** We don't need to specify the input parameters.
>
> **[5:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=303)** It knows and it takes a string as input and returns the string as output.
>
> **[5:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=308)** So far, this might not seem too useful.
>
> **[5:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=310)** We use lambda expressions a lot combined with the Stream API.
>
> **[5:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=313)** In the next video we'll explore the Stream API.
>
> **[5:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/lambda-expressions?u=76281980&t=316)** This will help us better handle and process data sets in a functional programming style.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (16), let (5), abstract (5), interface (4), function (3)
> **Code Identifiers:** dosomething (4), largerthan5 (1), printuppercase (1), touppercase (1)
> **Definitions:** is a  (2), is an  (2), is called (1)
> **Env Vars:** api (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### Streams API and handling data sets
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=0)** - The Stream API allows us to process and manipulate datasets using a functional programming approach and it can simplify our code when handling datasets.
>
> **[0:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=10)** Let's start with Streams.
>
> **[0:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=11)** What are these?
>
> **[0:12](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=12)** A Stream is a sequence of elements that can be processed sequentially or in parallel.
>
> **[0:18](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=18)** Streams have a source.
>
> **[0:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=19)** They can be created in various ways using a Stream API.
>
> **[0:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=24)** You can create a Stream from various sources such as collections, arrays, or I/O channels.
>
> **[0:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=30)** Here are some examples.
>
> **[0:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=31)** On line 12, I created a Stream using the list I created on line 11.
>
> **[0:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=35)** I can simply do this with the .stream() method.
>
> **[0:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=38)** I can also create a Stream from an array.
>
> **[0:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=40)** This is a slightly different approach.
>
> **[0:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=42)** You can see in line 15, I'm creating an array and then on line 16, I'm using the .stream() method on the arrays helper class to actually turn this into a Stream.
>
> **[0:53](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=53)** And I can also create a Stream with the Stream.of method that I'm using online 19.
>
> **[0:58](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=58)** There's actually quite a few more ways to create a Stream but these are some common source operations that we can use.
>
> **[1:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=64)** After we have created the Stream, we could do multiple things with it.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=67)** There's distinction between intermediate and terminal operations.
>
> **[1:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=71)** The intermediate operations can be chained and all of these return a new Stream.
>
> **[1:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=75)** When you perform a terminal operation, the Stream ends and no other operation can be performed on it anymore.
>
> **[1:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=81)** Intermediate operations are lazy.
>
> **[1:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=83)** They don't execute until a terminal operation is called.
>
> **[1:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=87)** Let's explore some common intermediate and terminal operations.
>
> **[1:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=91)** First, intermediate operations.
>
> **[1:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=93)** A very common one is the filter.
>
> **[1:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=95)** This filters element is based on a predicate.
>
> **[1:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=97)** We also have the map and this transforms elements using a given function and a function is a type of build-in functional interface here.
>
> **[1:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=105)** Then we also have the flatMap.
>
> **[1:47](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=107)** This transforms each element into a Stream and then flattens the resulting Streams into a single Stream.
>
> **[1:53](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=113)** There are quite a few more, but this video doesn't intend to cover all of them.
>
> **[1:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=117)** I just want to give you a quick introduction or recap.
>
> **[2:01](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=121)** So let's see, some terminal operations.
>
> **[2:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=123)** We have the forEach operation, and that's going to apply an action to each element in the Stream, literally for each.
>
> **[2:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=130)** Then we also have to collect.
>
> **[2:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=131)** This is going to get all the elements of the Stream and collect some into a collection such as a list or a set.
>
> **[2:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=137)** And then we also have reduce.
>
> **[2:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=139)** This reduces the Stream to a single value using an accumulator function.
>
> **[2:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=143)** Again, there are a lot more options and you'll find them when you need them.
>
> **[2:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=147)** This is just a quick introduction or recap, depending on where you are currently standing.
>
> **[2:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=152)** Let's look at some examples in IntelliJ In this example, I filtered the names starting with "A", transform them to uppercase and then go ahead and put them in a list.
>
> **[2:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=161)** I stored these in the variable filterdNames and then I'm printing them.
>
> **[2:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=165)** Let's see the results, and as you can see this is printing results, Ali and Adam.
>
> **[2:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=172)** And yes, this could have been done differently with loops and if statements as well.
>
> **[2:56](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=176)** We have now achieved our goal in a functional programming style that is typically preferred.
>
> **[3:01](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/streams-api-and-handling-data-sets?u=76281980&t=181)** Great. Now you have the background knowledge to start writing code in the functional programming style.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3), interface (1)
> **Tools:** terminal (5), intellij (1)
> **Definitions:** is a  (3), is called (1)
> **Code Identifiers:** flatmap (1), foreach (1), filterdnames (1)
> **Env Vars:** api (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Speakers:** - the (1)

#### Solution: Java streams and lambda expressions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=0)** - [Instructor] All right, let's have a look at our solution.
>
> **[0:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=3)** So, we needed to find the highest grade for students with a specific major.
>
> **[0:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=7)** Here's how to implement the defined answer, to do exactly that.
>
> **[0:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=11)** You can see the answer on line 17 'till 20.
>
> **[0:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=14)** Defined answer receives a list of students and we start by turning this list into a stream.
>
> **[0:20](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=20)** Then, we filter based on the major that was passed in.
>
> **[0:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=24)** Next, we flatten the streams of grades to one single stream, and then we find the max integer.
>
> **[0:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=30)** If no value is being found, we return zero.
>
> **[0:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=33)** And we do so by implementing the supplier that simply says, return zero.
>
> **[0:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=37)** And then as you can see, when we run this code, it says, "Correct: Marvelous work."
>
> **[0:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=42)** So, let's demonstrate this again.
>
> **[0:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=46)** Another one solved.
>
> **[0:47](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=47)** Well, if we were to update a major to, for example mathematics, we'll get a different result, or at least we could get a different result.
>
> **[0:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=54)** So let's run this code and you'll see the answer.
>
> **[0:56](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=56)** And you can see the highest grade is now 89.
>
> **[0:59](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-use-java-streams-and-lambda-expressions?u=76281980&t=59)** There are no other majors to try, but if we try something that doesn't exist, for example biology, it's just going to return zero.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), try, (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 2. Collections and Generics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Java collection framework
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=0)** - [Instructor] Let's talk about the Java collection framework.
>
> **[0:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=3)** It provides a wide range of data structures for handling collections of objects.
>
> **[0:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=8)** We'll discuss the main interfaces and some of their implementations.
>
> **[0:12](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=12)** The Java collection framework consists of several interfaces and classes that represent different types of collections.
>
> **[0:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=19)** The main interfaces are list, set, queue and map.
>
> **[0:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=23)** These interfaces define common operations such as adding, removing, or iterating over elements.
>
> **[0:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=30)** The interfaces list, set and queue extend to collection interface.
>
> **[0:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=35)** Map is a bit of an odd one.
>
> **[0:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=37)** It doesn't extend to collection interface.
>
> **[0:39](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=39)** This is because it's quite different from the others.
>
> **[0:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=42)** It worked with key value pairs instead of single values.
>
> **[0:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=46)** There are also implementation classes.
>
> **[0:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=48)** These classes have implementations that provide specific behaviors and performance characteristics for the data structure.
>
> **[0:55](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=55)** We're going to focus on the most used interfaces and leave out a queue interface for that reason.
>
> **[1:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=60)** Here are the most commonly used interfaces; list, which is an ordered collection that allows duplicates, set, which is a collection that doesn't allow duplicates and map, which is a collection that maps keys to values.
>
> **[1:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=74)** There are many implementations.
>
> **[1:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=76)** I just want to talk you through a few of the most common ones.
>
> **[1:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=79)** So for example, we have ArrayList, which is a resizable array-based implementation of the list interface.
>
> **[1:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=85)** There's also a LinkList, which is a doubly linked list implementation of the list interface.
>
> **[1:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=90)** And we have HashSet, a hash table-based implementation of the set interface.
>
> **[1:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=95)** And there are more.
>
> **[1:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=97)** We have the TreeSet, which is a balanced binary tree-based implementation of the set interface.
>
> **[1:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=102)** The HashMap, which is a hash table-based implementation of the map interface.
>
> **[1:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=108)** And the last one I'm going to mention is the TreeMap, which is a balanced binary tree-based implementation of the map interface.
>
> **[1:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=114)** No worries, I'm not going to walk you through all of these examples.
>
> **[1:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=117)** I just want to show you a basic one.
>
> **[2:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=120)** Here's an ArrayList, and I'm performing some basic operations on it.
>
> **[2:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=124)** So I create the array list on line eight and as you can see, it's the convention to make it of the type of the interface, list, in this case.
>
> **[2:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=133)** On line nine, 10, and 11, I'm adding names to the ArrayList with the add method.
>
> **[2:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=139)** On line 12, I'm removing.
>
> **[2:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=141)** In line 13, I'm just printing the list.
>
> **[2:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=143)** You can see that I set it would be a list of strings on line eight.
>
> **[2:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=147)** In this way, the compiler can check whether I'm only adding the right type to our list.
>
> **[2:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=151)** And this prevents a lot of problems.
>
> **[2:34](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=154)** That I can specify the type is achieved with use of generics.
>
> **[2:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-collection-framework?u=76281980&t=158)** In the next video, we're going to have a look at generics in more detail.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (10), let (1), case. (1)
> **Definitions:** is a  (8), is an  (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Role of generics
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=0)** - [Instructor] It's time to take a step back and explore what generics are by looking at the role of generics and their advantages.
>
> **[0:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=7)** Let's start with a little history.
>
> **[0:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=9)** Before generics were introduced in Java, collections would only store objects of type Object.
>
> **[0:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=15)** This meant that you had to cast objects to the correct type when retrieving them from a collection.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=21)** And if you try to cast something that couldn't be done, you'd get a lovely runtime exception to inform you.
>
> **[0:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=27)** Generics address this issue by allowing us to specify the type of objects a collection can hold at compile time.
>
> **[0:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=33)** And this brings us the some advantages of generics.
>
> **[0:36](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=36)** Collections with generics eliminate the need for casting and improves type safety.
>
> **[0:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=42)** Here are some advantages of working with generics.
>
> **[0:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=45)** First of all, type safety.
>
> **[0:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=46)** Generics help to catch type-related errors at compile time rather than at runtime.
>
> **[0:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=52)** And it also has a reusability component.
>
> **[0:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=54)** Generic classes and interfaces can be reused with different types, reducing duplicate code.
>
> **[1:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=60)** Let's have a look at another example.
>
> **[1:02](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=62)** This time, a list of integers.
>
> **[1:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=64)** As you can see, I'm adding numbers to the list.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=67)** What I cannot do, is add a non-number to the list or a non-integer to be more specific.
>
> **[1:12](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=72)** For example, I cannot say 'hello'.
>
> **[1:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=75)** Why not?
>
> **[1:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=76)** Because hello is not an integer and the compiler knows this.
>
> **[1:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=79)** The required type is an integer, but provided, is a string.
>
> **[1:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=82)** What we can also not do, is for example, add a long, like this.
>
> **[1:26](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=86)** Because again, the required type is an integer.
>
> **[1:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=89)** But this time, we provided a long.
>
> **[1:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=92)** And in the same way, when we take a value off our list, it knows it's an integer and that's why we can use it for summing, as we're doing on line 13, 14, and 15.
>
> **[1:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=102)** We're done printing outputs, and when we add all these numbers, we get the output: Sum 6.
>
> **[1:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=108)** Generics play an essential role in Java, providing type safety and code reusability.
>
> **[1:53](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/role-of-generics?u=76281980&t=113)** Let's have a look at how to obtain this code reusability by writing our own classes with the use of generics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Creating and using classes with parameterized types
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=0)** - [Instructor] Classes that use generics are called classes with parameterized types.
>
> **[0:05](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=5)** In this video, we'll learn how to create and use classes with parameterized types.
>
> **[0:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=10)** This way we can benefit from generics if we need to for our own classes and interfaces.
>
> **[0:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=14)** Besides, it will help us to understand built-in codes that uses it even better.
>
> **[0:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=19)** To create a generic class, you need to define one or more type parameters within angle brackets.
>
> **[0:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=25)** This goes in a class declaration.
>
> **[0:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=27)** These type parameters can be used within the class as placeholders for the actual types that will be used when creating instances of the class.
>
> **[0:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=35)** Let's see how we can benefit from generics in IntelliJ.
>
> **[0:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=38)** So here I have a special class String pair with two properties, both have type String.
>
> **[0:44](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=44)** They're called first and second and actually, I also want to have an Integer pair.
>
> **[0:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=48)** But in order to have an Integer pair without generics I need to have two classes.
>
> **[0:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=52)** One called String pair, one called Integer pair.
>
> **[0:55](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=55)** Alternatively, I could make one class with type object but that would not be type safe.
>
> **[1:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=60)** That's where generics come into play.
>
> **[1:02](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=62)** Here is a simple generic pair class that can hold two objects of the same type.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=67)** T is the parameterized type.
>
> **[1:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=70)** As you can see, I'm using it as a type throughout this class.
>
> **[1:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=73)** On line four and five, I'm saying I have two properties, first and second of type T.
>
> **[1:18](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=78)** And for example, my getFirst on line 12 is returning T.
>
> **[1:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=83)** After creating the generic class we can use it upon creation.
>
> **[1:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=87)** We need to provide the actual type arguments.
>
> **[1:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=90)** This specifies the type that the type parameter represents allowing the compiler to enforce type safety.
>
> **[1:36](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=96)** Let's move back to IntelliJ and see it as an action for our example.
>
> **[1:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=100)** So, here's a main class and it has a main method.
>
> **[1:43](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=103)** On line five and six, I'm creating two objects of type pair.
>
> **[1:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=108)** First one on line five, is having String, for the parametrized type and the second one is having Integer.
>
> **[1:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=114)** You can see that I can use the getFirst on both the namePair and agePair variable and I don't need any casting there because it already knows that this is going to be of type String on line eight and of Integer on line nine.
>
> **[2:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=128)** At this point, you should have a good enough understanding of the Java collection framework, draw of generics and how to create and use classes with parameterized types.
>
> **[2:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-and-using-classes-with-parameterized-types?u=76281980&t=137)** In the hands-on practice, you'll have the opportunity to apply this knowledge.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), let (2), type. (2), class, (1)
> **Code Identifiers:** getfirst (2), namepair (1), agepair (1)
> **Tools:** intellij (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: Refactor to parameterized type
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=0)** - [Instructor] All right, let's have a look at a possible solution.
>
> **[0:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=3)** First, we had to refactor our data container class.
>
> **[0:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=6)** And as you can see, I've replaced all the objects by Ts.
>
> **[0:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=9)** And then on line 21, you can see it also specifies the parameterized type, right after the class.
>
> **[0:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=15)** Then we need to modify the create string data container method on line 13.
>
> **[0:20](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=20)** We give it a type.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=21)** This one is creating a string data container, so we specify the type string.
>
> **[0:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=25)** And then, we return a new data container, containing the string hello.
>
> **[0:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=29)** Let's run this code and see the result.
>
> **[0:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=31)** And as you can see, this is the correct answer because we successfully modified the data container class to now have a generic, and then we used this to create one with the type string for the generic and put in the word hello.
>
> **[0:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-refactor-to-parameterized-type?u=76281980&t=45)** That's why our test is now succeeding.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class. (2), type, (1), type. (1)
> **Speakers:** - [instructor] (1)


### 3. Annotations and Reflection

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding annotations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=0)** - [Instructor] How do you use annotations?
>
> **[0:02](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=2)** You can share your uses for annotations in the Q&A below.
>
> **[0:05](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=5)** I'd love to see all the creative ways you utilize them.
>
> **[0:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=9)** Annotations allow us to add metadata to our code.
>
> **[0:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=13)** This metadata can be used at compile time or run time to provide additional information or behavior to the Java classes, methods or fields.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=21)** Let's look at them in more detail.
>
> **[0:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=24)** They are a way to associate additional information with classes, methods, or fields, without unintentionally changing their behavior.
>
> **[0:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=32)** We can use them for different things, such as generating code, enforcing coding standards, and providing additional context for tools, frameworks and other developers.
>
> **[0:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=42)** There are quite a few built-in annotations that we can use in Java.
>
> **[0:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=46)** They're quite easy to recognize by the @ sign.
>
> **[0:49](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=49)** Some of the common built-in annotations are the @Override, which indicates that a method is intended to override a method in a superclass.
>
> **[0:58](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=58)** We also have @Deprecated, which marks a method, class, or field as deprecated, indicating that it should not be used anymore.
>
> **[1:05](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=65)** And then there's also @SuppressWarnings.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=67)** That tells the compiler to suppress specific warnings for a piece of code.
>
> **[1:12](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=72)** Here's an example of them.
>
> **[1:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=73)** You can see we have the class 'Student', and I omitted any fields, I just wanted to show you the annotations.
>
> **[1:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=79)** Use the @Override on the toString, overriding the toString in the object class.
>
> **[1:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=84)** Then we have some sort of method that we mark @Deprecated, and then we have a useUncheckedType method that we use with the @SuppressWarnings annotation.
>
> **[1:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=93)** These are examples of annotations or methods, but there's also annotations possible on classes, fields, parameters, etcetera.
>
> **[1:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=101)** Frameworks such as Spring Boot and Quarkus rely heavily on annotations as well.
>
> **[1:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=106)** They have created a set of annotations that can be used to configure and use the framework.
>
> **[1:51](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=111)** Long story short, annotations are powerful for adding metadata and influencing the behavior of your code at compile time or run time.
>
> **[1:59](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/understanding-annotations?u=76281980&t=119)** The built-in annotations are very helpful, but we can also create our own annotations.

> [!info]- Semantic Content
>
> **Code Keywords:** override (3), let (1), class, (1), class. (1)
> **Code Identifiers:** tostring (2), useuncheckedtype (1)
> **Analogies:** such as (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Creating custom annotations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=0)** - [Instructor] Let's define and use custom annotations in our code.
>
> **[0:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=4)** It helps to understand how frameworks like Spring Brute in Java's own annotations are implemented.
>
> **[0:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=10)** To create a custom annotation, you'll need to define an annotation type using the @interface keyword.
>
> **[0:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=16)** You can then specify the elements' attributes that your annotation will have.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=21)** That might sound a bit abstract, so here's an example.
>
> **[0:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=24)** We defined a custom annotation with two elements here: priority and tags.
>
> **[0:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=30)** They both have default value.
>
> **[0:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=32)** Default priority is one, and default detect is an empty array.
>
> **[0:36](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=36)** Once we've defined a custom annotation, we can use it in our own code by adding it to classes, methods, fields, just like any built-in annotations.
>
> **[0:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=45)** So here we use our custom annotation, and as you can see, we put it on top of the class and on top of the method.
>
> **[0:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=52)** Both is possible.
>
> **[0:53](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=53)** On top of the class, we say add my custom annotation, which is the name of our annotation, and we specify a value for the priority and the tags.
>
> **[1:01](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=61)** The one on the method only specifies one for the tags, meaning that it will get the default priority.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=67)** Creating custom annotations is a whole new tool in our Java Toolbox.
>
> **[1:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=71)** Here's another example.
>
> **[1:12](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=72)** We could create custom annotation for data validation such as this one, which is giving a method about whether the email is valid or not.
>
> **[1:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=81)** And we could also create one for logging in auditing purposes.
>
> **[1:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=85)** You can see this one can only be used on methods because we specified the target of this annotation as a method.
>
> **[1:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=91)** Where is the valid email one?
>
> **[1:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=93)** It's targeting fields.
>
> **[1:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=95)** The annotations become even more useful when you combine them with the Java Reflection API.
>
> **[1:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/creating-custom-annotations?u=76281980&t=100)** I'll show you the Reflection API next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), interface (1), abstract (1), class, (1)
> **Env Vars:** api (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1), such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Reflection API for dynamic code manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=0)** - Now that we created custom annotations let's discuss the reflection, API in Java.
>
> **[0:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=6)** The reflection API is a built-in Java functionality that allows us to inspect and manipulate our code at run time.
>
> **[0:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=13)** The dynamic code manipulation can be used in combination with annotations to achieve interesting results.
>
> **[0:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=19)** What do you think I mean by interesting?
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=21)** Reflection is a feature in Java that allows to inspect and interact with the metadata of classes, methods and fields at runtime.
>
> **[0:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=29)** With reflection API we can do things like inspect the structure of a class, its methods, fields and annotations.
>
> **[0:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=35)** Create new instances of a class, invoke methods and access fields.
>
> **[0:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=40)** And even modify the behavior of a class, method or field at runtime.
>
> **[0:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=45)** This definitely asks for some examples.
>
> **[0:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=48)** So let's see how we can use the reflection API to inspect our custom annotation my custom annotation.
>
> **[0:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=54)** So let's go over the steps.
>
> **[0:56](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=56)** On line nine I'm grabbing info.class's data.
>
> **[0:59](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=59)** I'm storing this in a special class object.
>
> **[1:02](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=62)** Just a quick refresher, that's this class info which is having the adds my custom annotation twice, once in the class and once on a method.
>
> **[1:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=71)** And yet another refresher, the my custom annotation has a priority and a tax value.
>
> **[1:18](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=78)** So on line 12, we're going to check if the class has our custom annotation.
>
> **[1:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=82)** And if that custom annotation is present we are going to go ahead and grab it and then print the priority and print the tags.
>
> **[1:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=92)** We're also going to iterate over all the methods in info and then we're going to check for every method whether it's annotated within my custom annotation class.
>
> **[1:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=100)** And if that's the case we're going to go ahead, print a method name and also print a value for priority and tags.
>
> **[1:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=106)** So let me run this code and show you how this is working.
>
> **[1:50](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=110)** And as you can see, the priority of the class is two and a priority of the method is one, the default value.
>
> **[1:56](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=116)** The value of the tags on the annotation that's on the class are important and feature.
>
> **[2:01](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=121)** On a method the tags are details.
>
> **[2:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=123)** So here we used the reflection API to inspect the custom annotation that was applied to the info class and its method.
>
> **[2:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=130)** We were able to retrieve the values of the annotations elements and print them.
>
> **[2:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=134)** This is why the reflection API is very powerful combined with custom annotations.
>
> **[2:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=139)** It's an amazing tool for dynamic code manipulation and it's quite next level Java, and it's going to enable interesting use cases like code generation, dependency injection and runtime configuration.
>
> **[2:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=151)** Here's another example of reflection.
>
> **[2:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=153)** Here we're actually invoking a method with reflection API.
>
> **[2:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=157)** So we're not using annotations here at all.
>
> **[2:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=160)** On line seven, we're getting the info class.
>
> **[2:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=162)** And then on line eight, we're using reflection API to create an instance of our info class.
>
> **[2:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=168)** Then we're going to getting methods on line nine with the getMethod method.
>
> **[2:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=172)** And then on line 10, we're using the method object which is part of the reflection API to actually invoke this method on the instance of the info class.
>
> **[3:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=183)** As you can imagine, this is also used for testing purposes.
>
> **[3:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=187)** Leveraging the combination of annotations and a reflection API is definitely going to improve your Java skills but there's a catch as always.
>
> **[3:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=196)** Magic has its price and it's important to use reflection with caution.
>
> **[3:20](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/reflection-api-for-dynamic-code-manipulation?u=76281980&t=200)** It can easily lead to performance overhead and potential security risks if not used carefully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (4), class, (3)
> **Env Vars:** api (10)
> **Definitions:** is a  (2)
> **Code Identifiers:** getmethod (1)
> **Analogies:** imagine (1)
> **Warnings:** caution (1)
> **Speakers:** - now (1)

#### Solution: Custom annotation
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=0)** - [Narrator] Alright, let's see the solution for our annotation.
>
> **[0:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=3)** So we need to start by implementing the annotation.
>
> **[0:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=6)** You can see I'm doing this on line 24 to 28.
>
> **[0:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=9)** We create the annotation with the at interface keyword, and then we need to make sure that the element type is method because we need to put this on top of the method and we need it to be maintained during run time.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=21)** And on line 18, we have a refined answer, and we annotate this with at method description, and then the text finding the answer.
>
> **[0:28](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=28)** So let's go ahead and run this.
>
> **[0:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=31)** And as you can see, this is the right solution.
>
> **[0:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=33)** You can forget something small though and then it won't work.
>
> **[0:36](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=36)** For example, if I remove the finding the answer, even though the implementation is correct this is not going to work, 'cause we need to specify the value.
>
> **[0:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=46)** But also if you are a bit sloppy and you made a typo with the value there, it has to be finding the answer.
>
> **[0:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=52)** Otherwise it won't be considered correct.
>
> **[0:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=54)** So you can see that when I change it back to finding the answer, our test is going to succeed again.
>
> **[1:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-and-process-a-custom-annotation?u=76281980&t=60)** Beneath the surface, it's actually using a reflection API to make sure that the description of the annotation is matching the description that's in the exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), this. (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 4. Concurrency and Multithreading

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Concurrency and multithreading explained
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=0)** - [Instructor] Concurrency and multithreading are essential concepts in programming.
>
> **[0:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=4)** Concurrency enables you to write more efficient and responsive applications.
>
> **[0:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=9)** Let's start with explaining what concurrency and multithreading are and why they're so important.
>
> **[0:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=15)** Concurrency refers to the ability of a program to manage multiple tasks simultaneously.
>
> **[0:20](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=20)** This can be achieved in various ways, for example, through multithreading.
>
> **[0:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=25)** This brings us to the next key concept, multithreading.
>
> **[0:28](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=28)** Multithreading is a specific form of concurrency that involves executing multiple threads.
>
> **[0:34](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=34)** This happens simultaneously within a single process.
>
> **[0:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=37)** Threads are lightweight, independent units of execution that can run concurrently, sharing the same memory space.
>
> **[0:44](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=44)** Concurrency allows us to utilize system resources more effectively, leading to improved application performance and responsiveness.
>
> **[0:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=52)** Running tasks concurrently will lead to better resource utilization and reduce the time it takes to complete tasks.
>
> **[1:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=60)** I always like to explain this with a non code example.
>
> **[1:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=63)** Let's say you come home from work after a really busy work week on Friday.
>
> **[1:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=67)** You're a bit behind with the household and the kids are hungry.
>
> **[1:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=70)** If you are not capable of doing multiple things at the same time, we would do all our tasks sequentially.
>
> **[1:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=76)** So first our laundry.
>
> **[1:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=77)** When that is done and we've put it out to dry, we would put the pizza in the oven, wait for it to be done, feed the kids, tidy the house and vacuum the floor.
>
> **[1:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=87)** This would take a long time.
>
> **[1:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=89)** First we have to do laundry which would be one and a half hours.
>
> **[1:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=92)** Then wait for the pizza, which is around 20 minutes, feed the kids, again, 20 minutes, tidy the house, also 20 minutes and vacuum the floor, 20 minutes.
>
> **[1:43](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=103)** And that would add up to be two hours and 50 minutes.
>
> **[1:47](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=107)** If we could do it concurrently, we could combine the tasks.
>
> **[1:50](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=110)** We could turn on the laundry machine, put the pizza in the oven, given the electricity can deal with this combination, tidy the house while the pizza is in the oven, feed the kids, vacuum the floor, relax for half an hour and then put the laundry out to dry, and that way, it'll be done in one and a half hour and manage to relax for 30 minutes of the time.
>
> **[2:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=129)** This is what Java does too.
>
> **[2:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=131)** While waiting for external resources to take care of something, it doesn't sit around and wait, but it does something in the meantime.
>
> **[2:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=139)** Java provides built-in support for multithreading to the Java lang thread class and the Java util concurrent package.
>
> **[2:26](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=146)** These classes and interfaces can be used to create and manage threads in our Java applications.
>
> **[2:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=151)** Here's an example of how we can actually create a thread.
>
> **[2:36](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=156)** So here we have the MyRunnable class and it implements Runnable, which can be used to start a thread, and we implement the run method.
>
> **[2:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=162)** And in the run method, we just print a message and also the thread ID.
>
> **[2:47](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=167)** Then here's our class, MultithreadingExample.
>
> **[2:50](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=170)** And what we're doing right here is that we create a new instance of Runnable and then we start a new thread and pass in the Runnable.
>
> **[2:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=177)** Next, we start the thread.
>
> **[2:58](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=178)** Well, let's run this, and as you can see, we get Hello multithreading from thread 15.
>
> **[3:05](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=185)** And just to prove you that this is a different thread, let's start by printing the thread that our main method is using.
>
> **[3:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=191)** And I'm going to say Thread.currentThread.getId, like this and I'm going to run it again.
>
> **[3:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=199)** And as you can see, the first one is in thread one and then we say hello multithreading from thread number 15.
>
> **[3:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=205)** We can go ahead and create a second thread here as well using our Runnable.
>
> **[3:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=209)** And then we can start t2 as well.
>
> **[3:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=213)** And then let's see if they get different thread numbers.
>
> **[3:36](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=216)** And as you can see, they do.
>
> **[3:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=218)** We get hello multithreading from thread number 16 and 15.
>
> **[3:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=222)** Which one is which?
>
> **[3:43](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=223)** At this point, there is no real way to tell because it happens simultaneously and we are less sure about the order.
>
> **[3:50](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=230)** So concurrency and multithreading are essential concepts for efficient and responsive Java applications.
>
> **[3:56](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/concurrency-and-multithreading-explained?u=76281980&t=236)** By understanding these concepts and using Java's built-in support for concurrency can improve the performance and responsiveness of our applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), implements (1), class, (1), pass (1), this, (1)
> **Definitions:** is a  (2), refers to (1)
> **Code Identifiers:** currentthread (1), getid (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Java concepts for concurrency
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=0)** - [Instructor] Java provides a lot of tools and APIs for working with concurrency and multithreading.
>
> **[0:05](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=5)** We'll explore some of the Java key concepts that you'll need to understand when working with concurrency.
>
> **[0:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=10)** Just know that this is going to be a rather high-level overview.
>
> **[0:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=14)** First of all, we have the thread class and the runnable interface.
>
> **[0:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=17)** These are used for creating a managing threads.
>
> **[0:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=19)** The thread class extends the object class and implements the runnable interface, providing methods for starting, stopping, and managing threads.
>
> **[0:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=27)** Let's look at an example in IntelliJ.
>
> **[0:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=29)** I have created a class MyThread here that extends the thread, and I've overwritten the run methods saying, Hello from thread.
>
> **[0:36](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=36)** And then, I actually print the thread ID.
>
> **[0:39](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=39)** Then, in thread example, I'm using this MyThread twice to create a new thread, and I'm starting this thread as well.
>
> **[0:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=45)** So let's go ahead and run this.
>
> **[0:47](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=47)** And you'll probably see two different threads.
>
> **[0:50](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=50)** Now, you can see it says Hello from thread 15 and 16.
>
> **[0:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=54)** Please note that, again, these are different threads from my main method.
>
> **[0:58](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=58)** Next, Java provides synchronization and locks to ensure that shared resources are accessed safely and consistently by multiple threads.
>
> **[1:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=66)** Without this, we could not be sure that only one thread is using a resource at a given time.
>
> **[1:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=71)** The synchronized keyword can be used to create synchronized methods or blocks that allow only one thread at a time to access a shared resource.
>
> **[1:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=79)** Here's a simple example of how to do just that.
>
> **[1:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=82)** You can see that the method increment on line six has the synchronized keyword in front of it.
>
> **[1:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=87)** That means that if multiple threads call the increment method, only one of them is allowed access at the same time.
>
> **[1:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=93)** The others will be queued up, waiting for the increment method to become available again.
>
> **[1:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=98)** The java.util.concurrent package provides the executor framework, which simplifies the creation and management of threads.
>
> **[1:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=105)** Executors are used to create thread pools that can manage the execution of multiple tasks concurrently while reusing the threads in the pool.
>
> **[1:55](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=115)** Again, this might sound a bit fake, so let's have a look at an example.
>
> **[1:58](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=118)** On line eight, I'm using the executor's class to create a fixed thread pool with five threads in it.
>
> **[2:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=124)** This creates an object of type ExecutorService.
>
> **[2:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=126)** Then we create a runnable task on line nine, and in this task we'll simply print, Hello from Executor on threads, and then print the thread ID again.
>
> **[2:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=135)** Then we call the execute method 10 times providing a task, and that's going to execute a task 10 times utilizing the five threads in the thread pool.
>
> **[2:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=144)** After that, we close the ExecutorService with the shutdown method.
>
> **[2:28](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=148)** So I'll run this, and you can see what it does.
>
> **[2:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=151)** It has different thread IDs.
>
> **[2:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=152)** It's 15, 17, 18, 16, and 19 in there.
>
> **[2:36](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=156)** You can see some of them are used multiple times, and some of them are used only once.
>
> **[2:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=160)** So let me run this again.
>
> **[2:42](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=162)** You can see it uses different thread IDs this time.
>
> **[2:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=165)** The result can be different every time you run this.
>
> **[2:47](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=167)** That's actually most likely because there's different threads and Java manages the task using the five threads from the thread pool.
>
> **[2:55](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=175)** Working with collections and multiple threads can be problematic.
>
> **[2:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=177)** Therefore, Java provides a set of concurrent collections in the java.util.concurrent package that are designed for concurrent access and manipulation by multiple threads.
>
> **[3:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=186)** These collections include ConcurrentHashMap, ConcurrentLinkedQueue, ConcurrentSkipListSet, and quite a few more.
>
> **[3:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=193)** Here's an example of ConcurrentHashMap.
>
> **[3:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=195)** As you can see, it looks a lot like a normal map, and that's indeed the case.
>
> **[3:20](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=200)** The main difference here is that it can now be safely manipulated and accessed by multiple threads.
>
> **[3:26](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=206)** Another important concept is how to deal with responses that you don't get right away.
>
> **[3:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=211)** The future and callable interfaces provide a way to do exactly this.
>
> **[3:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=215)** They represent a managed result of a computation that might not be available immediately.
>
> **[3:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=220)** Callable is similar to runnable, but it can return the value.
>
> **[3:44](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=224)** And future represents the result of a computation that might not be available yet.
>
> **[3:49](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=229)** Here's an example.
>
> **[3:50](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=230)** We use an ExecutorService with two threads, and we have a task, and the task involves sleeping for a second.
>
> **[3:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=237)** Then we go ahead and submit our task to the ExecutorService, and we store the result in a future with generic type integer.
>
> **[4:05](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=245)** And the next part needs to happen in a try catch block.
>
> **[4:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=248)** We do future.get to get the result out, but this may throw an interrupted exception or an execution exception, and that's why we need to do it in a try catch block.
>
> **[4:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=256)** We then show the result.
>
> **[4:18](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=258)** In the finally block, we shut down the ExecutorService.
>
> **[4:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=261)** Okay, let's run this so you can see how this works.
>
> **[4:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=265)** And as you can see, it pauses for a bit, and then prints the result.
>
> **[4:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=269)** Let me show this to you again.
>
> **[4:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=270)** Pauses, prints the result, and that's because the sleep 1000 isn't there.
>
> **[4:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=275)** The gets wait until the future has its result in, and then it prints it.
>
> **[4:39](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=279)** There's multiple ways to get the result.
>
> **[4:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=281)** We can also specify how long it can take.
>
> **[4:44](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=284)** So, for example, let's specify for 100 milliseconds, and that's not going to be long enough since we specify that it has to wait for a second in there before it's going to return the result with the Thread.sleep.
>
> **[4:56](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=296)** However, this is a problem because now we also need to catch the timeout exception so let's add it to our list of exceptions here, and let's import the timeout exception, and if we'll run it now, it will timeout, and we'll get in the catch.
>
> **[5:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=310)** As you can see, the TimeoutException is now thrown, and as you can also see, it still waits for a little bit until it shuts down, and that's because the ExecutorService that's shut down is going to wait for the task to be done first.
>
> **[5:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/java-concepts-for-concurrency?u=76281980&t=323)** There are so many more classes, methods and interfaces and concepts that are great for working with concurrency and multithreading in Java, but this is just a high overview and should be enough to get you started to create applications that can handle multiple tasks simultaneously.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (3), interface (2), extends (2), this, (2)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **Tools:** intellij (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Implement a concurrent algorithm
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=0)** - [Instructor] Alright, so this one was a little bit more complex 'cause you had to do a lot of things to get to the answer.
>
> **[0:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=6)** Let's start with implementing the factorial task.
>
> **[0:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=10)** So here's what you had to do to implement the factorial task class.
>
> **[0:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=13)** So I gave it a private final integer number that was going to be used to create a task, so I had to adjust the constructor as well.
>
> **[0:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=22)** Then you had to change the implementation of the COLE Method.
>
> **[0:26](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=26)** And in this case the COLE Method's implemented to calculate the factorial, and as you can see, in line 53 we had to return a implementation of the map entry and I went with the abstract map, simple entry.
>
> **[0:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=37)** Then we're going to use this callable to actually implement the algorithm.
>
> **[0:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=41)** So let's scroll up to the find answer method.
>
> **[0:44](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=44)** You can see it right here.
>
> **[0:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=46)** And here's where I'm performing all the logic.
>
> **[0:49](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=49)** So I start by creating an executor service and I give it a fixed thread pool of five.
>
> **[0:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=54)** Then I'm working with a list and on this list we have a future and this future consists of a map entry and the map entry is of type integer and big integer.
>
> **[1:06](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=66)** Then we're going to loop over all the numbers in our number array list and we're going to submit them to our execute service by creating a new factorial task.
>
> **[1:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=76)** Then afterwards we're going to create the actual map with the results.
>
> **[1:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=79)** And in order to populate this map with results we're going to loop over all the futures and get the value out of them and add them to the map.
>
> **[1:27](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=87)** After that, it's very important to shut down your executor, otherwise your code won't stop.
>
> **[1:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=92)** And then you return results and then they're ready to be verified.
>
> **[1:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=95)** So let's test this code and see the results.
>
> **[1:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=98)** And as you can see, these are the expected results.
>
> **[1:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=100)** You can now probably tell why we need to use big integers, because these numbers get really, really big.
>
> **[1:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=106)** And this calculations like this can be a bit heavy which really benefit from using a concurrent algorithm.
>
> **[1:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=112)** So this is just one possible solution.
>
> **[1:53](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-implement-a-concurrent-algorithm?u=76281980&t=113)** Of course, there is variations possible as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class. (1), private (1), abstract (1)
> **Env Vars:** cole (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)


### 5. Working with the Singleton Design Pattern

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Singleton design pattern and its use cases
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=0)** - [Instructor] The singleton design pattern is a widely-used creational design pattern, and it ensures that a class has only one instance.
>
> **[0:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=8)** Via the singleton class, there will be a global point of access to that instance.
>
> **[0:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=14)** The singleton pattern is useful when you need to maintain a shared state or resource throughout your application.
>
> **[0:20](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=20)** It's a very popular design pattern.
>
> **[0:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=22)** It's used a lot by frameworks such as Spring Boot.
>
> **[0:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=25)** Let's check out the use cases and benefits of the singleton pattern.
>
> **[0:29](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=29)** Here are some typical use cases.
>
> **[0:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=30)** First of all, database connections.
>
> **[0:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=33)** The singleton pattern can be used to manage a single database connection shared by different parts of an application.
>
> **[0:39](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=39)** Another great one is logger.
>
> **[0:41](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=41)** A global logger that can be accessed and used by multiple components of an application can be created with the singleton pattern.
>
> **[0:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=48)** Another very common one is configuration settings.
>
> **[0:51](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=51)** When you want to have a single point of access to application settings, a singleton can be the solution.
>
> **[0:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=57)** And there's quite a few benefits that come with using a singleton.
>
> **[1:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=60)** First of all, controlled access.
>
> **[1:02](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=62)** The singleton pattern provides controlled access to the single instance, ensuring that no other part of the application can create additional instances.
>
> **[1:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=71)** And then there's lazy instantiation.
>
> **[1:13](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=73)** It's not obligated, but a singleton allows for lazy instantiation if you set it up right, which means that the instance is only created when it's needed.
>
> **[1:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=82)** And the last major benefit is shared resource management.
>
> **[1:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=85)** The singleton pattern ensures that a shared resource or state is managed efficiently and consistently.
>
> **[1:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/singleton-design-pattern-and-its-use-cases?u=76281980&t=91)** The singleton design pattern is a popular design pattern that can be used when a class is only allowed to have one instance.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** class, (1), let (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Implementing the Singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=0)** - Now that we've discussed use cases and benefits of the singleton design pattern, let's see how to implement it.
>
> **[0:07](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=7)** There are several strategies for implementing the singleton pattern and we'll go over two common approaches, eager initialization and lazy initialization.
>
> **[0:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=17)** Eager initialization creates the instance of the singleton class when the class is loaded.
>
> **[0:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=23)** This approach is simple and works well when the single instance is not resource intensive or when it's guaranteed to be used during the application's lifetime.
>
> **[0:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=33)** And I'm very eager to show you how to do just that.
>
> **[0:35](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=35)** So, here's a eager singleton.
>
> **[0:38](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=38)** As you can see, the class is final, meaning that it's not allowed to have child classes and the constructor is also private, meaning it's not allowed to have child classes.
>
> **[0:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=46)** This is an eager singleton because we give a static instance of itself that will recreate at that spot.
>
> **[0:53](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=53)** So, we made the class final to make sure that it cannot be extended.
>
> **[0:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=57)** This way, we avoid it having multiple instances.
>
> **[1:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=60)** We also have a private constructor to avoid the constructor from being called from the outside.
>
> **[1:05](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=65)** That actually also makes it impossible to extend to class.
>
> **[1:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=68)** But to make something else impossible, something that's maybe even more important.
>
> **[1:12](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=72)** And that's because the constructor is private, we cannot call the constructor from outside the class.
>
> **[1:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=79)** Again, ensuring that no extra instances of the singleton can be made.
>
> **[1:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=84)** We also have lazy initialization.
>
> **[1:26](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=86)** This creates the instance of the singleton class only when it's needed.
>
> **[1:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=91)** This approach is more efficient when the singleton instance is resource intensive or when it might not be used during the application's lifetime.
>
> **[1:39](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=99)** And here's how to do it.
>
> **[1:40](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=100)** You can see it's a bit more code.
>
> **[1:43](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=103)** You can see that, in the constructor, we go ahead and check whether the instance is not null.
>
> **[1:48](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=108)** If the instance is not null, yet we are in the constructor, we call the illegal state exception.
>
> **[1:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=114)** The get instance method is a little bit more extended right now.
>
> **[1:57](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=117)** If the instance is still no, we go ahead and we create an instance of the singleton lazy class.
>
> **[2:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=124)** As you can see, we use the synchronized keyword here to make sure that only one thread at a time can be accessing this.
>
> **[2:10](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=130)** You may wonder why I added the double instance is null check.
>
> **[2:14](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=134)** Well technically, it's possible that two thread are going to both, conclude that it's null and then be queued up for the synchronized block.
>
> **[2:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=142)** If that's the case, only the first thread gets to create the instance due to the second's check.
>
> **[2:28](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=148)** This really ensures there's only going to be one instance of the singleton available.
>
> **[2:33](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=153)** There's actually quite some other approaches, but these are the two common ones for implementing the singleton pattern.
>
> **[2:39](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=159)** One of the common critiques to some of the patterns is that when it's used in a multi-threaded environment, it's possible that the instance gets created twice.
>
> **[2:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=166)** Even though there's always only one instance available, when two thread called the getInstance at the same time, if this getInstance is not a synchronized method, for example, it's possible that both of them create a new instance when they both conclude the instance is null still.
>
> **[3:02](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=182)** However, at a given time, there will be not more than one value for instance.
>
> **[3:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=188)** A synchronized getInstance method can avoid this.
>
> **[3:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=191)** And a disadvantage of a synchronized getInstance is that only one thread can access the method and that might be problematic when it's requested by a lot of threads.
>
> **[3:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=199)** So, we used a nested double null check combined with synchronized.
>
> **[3:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=203)** It's ugly, but it does the trick.
>
> **[3:26](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=206)** Understanding the benefits and drawbacks of each approach can help us choose the best implementation for a specific use case.
>
> **[3:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/implementing-the-singleton-pattern?u=76281980&t=212)** It's time to get some practice with them now.

> [!info]- Semantic Content
>
> **Code Keywords:** private (3), class. (3), this. (2), let (1), static (1)
> **Code Identifiers:** getinstance (4)
> **Prerequisites:** initialization (4)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), for instance (1)
> **Speakers:** - now (1)

#### Solution: Create a singleton
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=0)** - [Instructor] Alright, let's see how to solve this exercise.
>
> **[0:03](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=3)** So we had to implement Singleton.
>
> **[0:05](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=5)** We don't need to change anything in the answer class, so I'm going to scroll down a bit 'cause we had to modify the database connection.
>
> **[0:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=11)** So what I've done I've given it an instance of its own type on line 15.
>
> **[0:16](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=16)** And then in the constructor, I'm checking if this instance has been set already.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=21)** If I somehow end up in the constructor and the instance is not null, I'm throwing an illegal state exception, this should not be possible.
>
> **[0:28](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=28)** Also in the constructor I'm setting my database URL.
>
> **[0:31](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=31)** And then probably the heaviest lifting was to get instance method, 'cause here we have to do some checks and there's multiple ways to get the correct answer because this implementation doesn't require that it also works in a multi-thread environments, but this one should work.
>
> **[0:45](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=45)** So what I'm doing here, I'm first checking if the instance is null, and if that's the case I'm going to synchronize database connection class.
>
> **[0:53](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=53)** So if two threads somehow happen to get in this if statement at the same time, they won't get further both of them, because we're going to synchronize it and then we check again if the instance is null.
>
> **[1:02](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=62)** So the first one to come in there, we'll see that the instance is still null and it will then set the instance.
>
> **[1:08](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=68)** The second one has to wait until the synchronized block is released.
>
> **[1:11](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=71)** And then once it gets in there the instance would no longer be null and it would not create a new instance.
>
> **[1:17](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=77)** At the end, we'll return the instance.
>
> **[1:19](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=79)** So this get instance has been implemented to work in a multi thread environment.
>
> **[1:23](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=83)** So let's see if it works.
>
> **[1:25](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=85)** So we're going to test the code and as you can see, it's the correct answer.
>
> **[1:30](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/solution-create-a-singleton?u=76281980&t=90)** When we call the get instance twice, we'll get the same instance because it should only be one instance created over Singleton no matter how often we call the get instance.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class, (1), require (1), class. (1)
> **Env Vars:** url (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### 6. Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Keep going with Java
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=0)** - [Instructor] Congratulations.
>
> **[0:01](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=1)** We've come a long way together, haven't we?
>
> **[0:04](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=4)** You have successfully completed the advanced Java course and leveled up your Java.
>
> **[0:09](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=9)** In this course, we explored various advanced topics, and had the opportunity to get some practice with them right away.
>
> **[0:15](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=15)** My advice to you now is to apply these concepts in real world coding scenarios as much as possible.
>
> **[0:21](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=21)** And yes, this can be hard.
>
> **[0:22](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=22)** But please think of it this way.
>
> **[0:24](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=24)** Every error, every bug, is an opportunity to learn.
>
> **[0:28](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=28)** I also have some suggestions for great next topics you can dive into.
>
> **[0:32](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=32)** For example, Java frameworks and libraries, such as Spring Boot and JUnit.
>
> **[0:37](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=37)** Also, advanced topics such as design patterns like the Singleton we discussed, or diving into the Java memory can be a great way to proceed.
>
> **[0:46](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=46)** If you have any doubts about these topics still, I encourage you to engage with me in the course Q&A section.
>
> **[0:52](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=52)** I'd love to clear up these doubts for you.
>
> **[0:54](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=54)** And I also like to get in touch.
>
> **[0:55](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=55)** You can connect or follow me on LinkedIn.
>
> **[0:58](https://www.linkedin.com/learning/advanced-java-hands-on-with-streams-lambda-expressions-collections-generics-and-more/keep-going-with-java?u=76281980&t=58)** Thank you so much for taking this course, and I wish you a lot of happy coding.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Maaike van Putten]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advance-your-skills-in-java-4452104)

## Skills Covered

- Java

## Path Context

### In [[Advance Your Java Skills]]
← [[Data Science for Java Developers]] | **4 of 4**

## Appears In

- [[Advance Your Java Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Data Science for Java Developers]] — Java

---

[↑ Back to top](#)