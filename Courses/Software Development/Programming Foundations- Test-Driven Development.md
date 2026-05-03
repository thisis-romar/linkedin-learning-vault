---
type: course
cssclasses:
  - lle-course
slug: programming-foundations-test-driven-development-3
url: "https://www.linkedin.com/learning/programming-foundations-test-driven-development-3"
duration_minutes: 163
duration: 2h 43m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGG__Y-tJom5Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668482822?e=2147483647&amp;v=beta&amp;t=MNMR2eFGBuqHmwomo2hzLt28K7ww67fNv9lg38inpnw"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a Programmer- Foundations]]'
prev_courses:
  - '[[Programming Foundations- Secure Coding (2018)]]'
next_courses:
  - '[[Programming Foundations- Software Testing-QA]]'
path_nav: '[{"path":"Become a Programmer- Foundations","position":11,"total":12,"prev":"Programming Foundations- Secure Coding (2018)","next":"Programming Foundations- Software Testing-QA"}]'
path_count: 1
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20Test-Driven%20Development.md)

![Programming Foundations: Test-Driven Development](https://media.licdn.com/dms/image/v2/C4E0DAQGG__Y-tJom5Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668482822?e=2147483647&amp;v=beta&amp;t=MNMR2eFGBuqHmwomo2hzLt28K7ww67fNv9lg38inpnw)

# Programming Foundations: Test-Driven Development

> Programmers shouldn’t have to guess whether software is working correctly. They should be able to prove it, every step of the way. A formal test-driven development (TDD) process allows you to build testing into your daily routine. You can run tests many times a day, getting instant feedback on the quality of your code. This course explains how to adopt a TDD mindset and process—vital skills for al

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3) | 2h 43m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [Small steps to great things](#small-steps-to-great-things)
  - [What you should know](#what-you-should-know)
  - [What is test-driven development (TDD)?](#what-is-test-driven-development-tdd)
  - [xUnit and JUnit](#xunit-and-junit)
  - [Writing test cases](#writing-test-cases)
- [**1. TDD Methodology**](#1-tdd-methodology) (6 videos)
  - [TDD and agile](#tdd-and-agile)
  - [Where to start?](#where-to-start)
  - [Refactor to improve the design](#refactor-to-improve-the-design)
  - [The iterative red-green-refactor cycle](#the-iterative-red-green-refactor-cycle)
  - [✓ Challenge: Functionality](#challenge-functionality)
  - [✓ Solution: Functionality](#solution-functionality)
- [**2. TDD Structure and Syntax**](#2-tdd-structure-and-syntax) (5 videos)
  - [Test structure](#test-structure)
  - [Assertions](#assertions)
  - [Testing exceptions](#testing-exceptions)
  - [✓ Challenge: Performance](#challenge-performance)
  - [✓ Solution: Performance](#solution-performance)
- [**3. Scaling TDD**](#3-scaling-tdd) (6 videos)
  - [TDD tools and frameworks](#tdd-tools-and-frameworks)
  - [Assertion frameworks](#assertion-frameworks)
  - [Test doubles](#test-doubles)
  - [Mocking](#mocking)
  - [✓ Challenge: Database](#challenge-database)
  - [✓ Solution: Database](#solution-database)
- [**Glossaries**](#glossaries) (0 videos)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Small steps to great things](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=0)** - [[Software Development]] is a complex endeavor and developers often find that as their [[Microsoft Products|products]] grow in size and complexity making changes becomes more difficult and error prone. One reason is that conventional methodologies position testing as the last activity in the software development life cycle. Test driven development or TDD addresses this issue by bringing test cases in front and center of the [[Representational State Transfer (REST)|rest]] of the design and development activities. It makes development more engaging and rewarding because it provides instant feedback on the quality of code being developed. Many organizations have adopted TDD to improve their product quality and make their delivery more [[Agile Development|agile]]. It makes sure that the software functionality stays aligned with the customer requirements. I'm Neelam Dwivedi and I enjoy finding interesting solutions for complex problems. Whether you are a novice programmer or an advanced developer you will find TDD as a dynamic methodology to create software. So join me in this course and let's begin TDD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Agile Development|Agile]] (1)
> **Env Vars:** tdd (4)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - software (1)

#### [What you should know](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course you should have basic programming skills in [[Java]] or a similar language and some familiarity with any IDE, such as Eclipse or IntelliJ. In terms of the tools that we will use in this course, you can get Java from [oracle.com](https://oracle.com) and I have used Java 11. [[JUnit]] 5, which you can download from here, junit.O-R-G. I am using Eclipse IDE 2019-03, but any version which is a recent version may also work. I'm also using Maven build framework and finally the mockito mocking framework, which I'll demonstrate in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[JUnit]] (2)
> **Env Vars:** ide (2)
> **URLs:** [oracle.com](https://oracle.com) (1)
> **Versions:** java 11 (1)
> **Tools:** intellij (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What is test-driven development (TDD)?](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=0)** - This week has been crazy.
>
> **[0:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=2)** - Yeah, I know. I can't wait for the weekend.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=4)** - Hey, why don't you come over to my place this weekend?
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=7)** - That would be awesome. Now where do you live?
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=9)** - Uh, 123 Main Street, Magical Town.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=12)** - Hm, okay, I don't think I know where that is. Uh, how do you get there?
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=16)** - Well from here, you're going to drive straight for three miles, make a left on Popular Avenue, a right over the bridge, and it's the third row house on your left.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=25)** - Maybe you could show me on a map?
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=26)** - Yeah, sure. - Okay.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=27)** - All right, so, you're here, and my house is right here.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=34)** - Oh, okay, I think I got it, thanks.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=36)** - How does Thai food sound?
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=38)** - That sounds wonderful.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=39)** - Okay, I'm going to pick up take-out.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=41)** - All right .
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=44)** - To go from point A to point B, you could take turn-by-turn directions, or you could use a high-level map to guide where you want to go. These are the two options. Which option you pick depends on how well you know how to get to point B. Using turn-by-turn directions is the small-step incremental approach, or the bottom-up approach, and using a map is the big picture, top-down approach. This analogy can be used to think about when we are creating something. When we know how to make something, we start with a plan, and then follow the plan as we make it. But, if we do not know the details of how to make something, it's hard to come up with a plan. So, we take small steps while figuring out how to make what we want to make. In the software world, conventionally the planned approach has been to start with the requirements, come up with a design, write code to implement that design, and then write test cases to test that code. This is the test last development approach. In a test-driven approach, given some requirements, you come up with test cases that will drive the [[Representational State Transfer (REST)|rest]] of the development. The design emerges from the test cases. This is the pure TDD approach. Note that the testing in TDD is only [[Unit Testing]]. That is, testing your code at the smallest unit level. Other types of testing, such as system testing, [[Integration Testing]], or functional testing, test your application at a higher level and therefore not part of TDD's scope.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=137)** But, to be able to write unit test cases, there are often high-level ambiguities, especially in large and complex projects, that need to be ironed out before you can think about unit test cases. In those cases, you may come up with some parts of design to help you craft your test cases. So you do have some design drawn out before you write unit test cases. So this is not truly test-driven. But some call it as a test-first approach. Now, there is some overlap in the usage of two terms, test-driven, or test-first, but the key idea is that you first write your test case, and then write the code to pass that test case. The most fundamental aspect of the approach is the test-code-refactor cycle. Before you write any code, you first write your failing test case, then you write the code that passes that test case. As the test cases, and code, continue to grow, you keep an eye for duplicate or bad code. Every now and then, you fix such code by what is called as refactoring. Refactoring is improving the internal structure of your code without changing its external behavior. So, let us take an example to see the difference between the two approaches. First, we will see the test-last approach.
>
> **[3:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=220)** - So we've got that customer coming in this morning. Kind of talk about his needs for the new game.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=225)** - Okay. - Okay?
>
> **[3:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=226)** - Hey, how's it going?
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=227)** - Oh, hey, how are ya'?
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=229)** - I'm doing fantastic, how are you both doing?
>
> **[3:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=230)** - Really good, really good.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=232)** - Well, so, for the project that we're on, I'm looking for an app that has [[Microsoft Word|word]] games. It has hangman, crosswords, and anagrams. Is that something we can make happen?
>
> **[4:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=241)** - Definitely, definitely, okay. So, we can look at each game as a big use case, right? And, why don't we first focus on the play hangman use case?
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=251)** - Sounds great. - Okay. So, let's get started here. So why don't we think of there's the player. This is going to be our game, or our app, right?
>
> **[4:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=264)** - Right, right. - Okay. Okay, so, first we'll start with the play hangman use case, 'kay. Then we'll move on to the anagrams.
>
> **[4:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=277)** - Anagrams, yup. - Okay, great. And finally, what, the?
>
> **[4:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=282)** - Crosswords. - Crosswords!
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=283)** - Yeah, crosswords. -  Great. Okay, what do you think?
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=287)** - That sounds amazing.
>
> **[4:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=288)** - It's a good start.
>
> **[4:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=289)** - Yeah, definitely, really excited about it.
>
> **[4:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=290)** - Us, too, thank you so much.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=291)** - Thank you so much. - All right. Let's get to it!
>
> **[4:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=293)** - All right. - Okay.
>
> **[4:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=299)** - Okay, so here's our first cut of class diagram, and it looks like we're ready to start coding.
>
> **[5:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=305)** - In this scenario, the team started with understanding the requirements, and then created a detailed design. And now, the team is planning to start coding. Now, that is a big no-no in TDD. So, what should the team have done if it wanted to follow TDD? Let us see.
>
> **[5:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=325)** - So these are all word games. They all need words, I'm thinking our first functionality that we can implement would be to [[Fetch]] a word from somewhere.
>
> **[5:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=334)** - Well that seems like a good place to start, but, where are you getting the words from?
>
> **[5:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=340)** - Well, maybe we can get the words from a text file.
>
> **[5:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=349)** And we can always change the source when we have a better idea of what we want.
>
> **[5:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=353)** - Okay, well, let's test the first case, then. See that hangman is able to fetch a word of length X, so-- length X.
>
> **[6:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=367)** - Okay, sounds good.
>
> **[6:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=368)** - I think we can do it.
>
> **[6:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=370)** - Notice the difference? The team briefly talked about a high-level design decision, to get the words from an external source, but did not start drawing detailed class diagrams. They took the first requirement and then decided to write its first test case. The key idea here, is that before you write a single line of code, you first write a test case for it. And that is the golden rule of [[Test-Driven Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Fetch]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Unit Testing]] (1), [[Integration Testing]] (1)
> **Speakers:** - okay (5), - yeah (4), - well (4), - that (3), - all (3)
> **CLI Commands:** make (7)
> **Env Vars:** tdd (5)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** picture (1), such as (1)
> **Warnings:** note that (1)

#### [xUnit and JUnit](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=0)** - [Instructor] Most popular [[Unit Testing]] frameworks for various programming languages are modeled on what is called xUnit Framework. The core of xUnit was designed by Ken Beck and Eric Gamma for small talk named as sUnit. This was later ported for [[Java]] and named as [[JUnit]]. JUnit's popularity and wide acceptance led other languages to follow suit and create their own unit testing frameworks based on the xUnit architecture. A common xUnit framework makes it easy for developers to learn the basic TTD techniques and then apply them across different languages. So, if you have learned one xUnit testing framework, say JUnit, then it is very easy for you to apply the same knowledge to the testing frameworks for other languages. These xUnit frameworks have a core architecture and some of its key components are test case, test suit, test runner, test fixture, and test result. These terms have a common meaning across all xUnit platforms. While you will learn about these terms later in this course, it is helpful to know at this point that these concepts are transferable across whichever xUnit tools you plan to use. As the world of xUnit evolved, so did the JUnit framework. Junit 3 was based on Java 5 and in spite of being at the forefront of xUnit evolution it had its limitations. Developers had to take care of basic considerations.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=94)** For example, to write a test case they had to extend the library class test case and name their test methods starting with the [[Microsoft Word|word]] test. Then came Junit 4 that was developed for JUnit 8, offering the use of annotations and thereby removing many of JUnit 3 restrictions. It introduced new features such as rules and the flexibility to change the test runner. While JUnit 4 was very successful and widely adopted over 10 years, it still lacked the flexibility and extensibility that the developers desired. For this reason, Junit 5 was released in 2017 with its core architecture redesigned to be completely modular, extensible to seamlessly integrate with third-party tools. From a developer point of view JUnit 5 gives a much richer set of testing functionalities. In Java 5, the core has three modules; platform, vintage, and Jupiter. The test cases that you write interact with either the vintage module or the Jupiter module. Vintage supports legacy code in JUnit 3 and 4. And Jupiter offers the new programing and extension modules of JUnit 5. The platform has the engine to run these two modules. The platform also has the launching platform to interface with IDEs such as Intelligent Eclipse and build frameworks such as Maven and (mumbles) so that
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=187)** you can run your unit test cases from within these tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (13), [[Java]] (3), [[Unit Testing]] (2), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** xunit (10), sunit (1)
> **Analogies:** such as (2), for example (1)
> **Versions:** java 5 (2)
> **Env Vars:** ttd (1)
> **Cross-References:** later in (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Writing test cases](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=0)** - [Instructor] Writing good test cases requires a set of tools, techniques, and conventions. Let us look at some of these to write a simple test case. Let us say our requirement is to find how many times an alphabet appears in a [[Microsoft Word|word]]. So if the word is pizza, Z appears twice whereas X appears zero times. So let us start with a project, 0005. I have two packages: main and test. I'll keep my code in the main package and test cases in the test package. This is the first convention. Keep your code and test cases separate to manage your project better. When you ship your code in the final --, you don't want your test files to accidentally get tagged along. Next, I will create my first test case by right clicking and choosing [[JUnit]] Test Case option. And I name this as "TestHangman". This brings up the second convention. It is better to indicate that this is a test case class. Some programmers put the word "test" as a prefix, others as a suffix. The argument is that TestHangman sounds like a word, and HangmanTest is a noun, which is what a class name should be. However, I prefer to see the word "test" before any names so that I know it contains tests. Whichever option you choose, make sure you remain consistent. Now Eclipse tells me that JUnit library is not in the build path. I accept the suggestion to add it to my test case class, and now I have my first test case stub ready.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=97)** I want to test that Hangman returns how many times an alphabet appears in a word. So I will call my test case as test_alphabetCount. In fact, I can make alphabetCountInAWord. If you're wondering that the method name is too long, then here comes the third convention. Name your methods meaningfully to indicate what they are testing. Even if the name sounds a little too long. You will never have to retype or even remember this name because it will never be directly called by you. It will be called by the JUnit test runner. So it is okay if the name sounds a bit of a mouthful. Now in this method, I'll say "String word," and some string value, and a character variable, alphabet, as some alphabet that I want to count. Now I instantiate hangman as new hangman. Obviously, this will give a compilation error because there is no such class yet. So I accept Eclipse's suggestion to create the class. I have to make sure that I create it in the right folder. I choose Main, and Eclipse creates the class for me here. Coming back, I will now store the count from the hangman's count alphabet method,
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=192)** to which I want to pass the word and the alphabet to count. Once again, at this point, Eclipse gives a compilation error because there is no such method. So I choose Create Method option, and I accept the public int countAlphabet signature here. At this point, you will notice that I'm accepting the suggestion to create this as a public method. That is because I want my test cases from another package to be able to access the method. But sometimes you may have some methods in your code that need not or should not be public. How to you test those? Well, the idea is that your private methods will be used in some other method of your class that are public. So instead of testing your private methods directly, you test those public methods that use the private methods of your class. So let's go back to test Hangman, and here, finally I make the first assertion as assertEquals one, which is the expected value, and count, which is what I'm testing. Before we move on, let's talk about assert statements a bit. Most programming languages have an assert statement used for defensive programming to ensure that a certain condition is true at a given point of time in the program execution. If the condition is not true, the program will show an assertion error. JUnit 5 has a class called "Assertions"
>
> **[4:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=286)** that has many assertion statements as static methods. To use any of these assertion statements, you simply import the assertions class from the Jupiter API. You will learn more about these assertions later in the course. Back to our test case. Here, the test case seems complete. If I run it, I get the red bar. Now I go to Hangman and change the code to make the test case pass. For that, I say int result equals zero, which is where I'll store result. And then in a loop, for each char C and word toCharArray. If C equals the alphabet that I want to count, then result plus plus, and finally return result. I run my test again, and we are green.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (9), [[JUnit]] (4)
> **CLI Commands:** make (5), find (1)
> **Code Identifiers:** alphabetcountinaword (1), countalphabet (1), assertequals (1), tochararray (1)
> **Cross-References:** go back to (1), later in (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 1. TDD Methodology

[↑ Back to Table of Contents](#table-of-contents)

#### [TDD and agile](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=0)** - [[Test-Driven Development]] makes one think that it is all about testing and coding, but it is also test-driven design, because while you start with a test case, your goal is to design and develop your software in parallel. This aligns very well with the incremental upload of [[Agile Development|agile]] methodologies. But once you have identified your user story or use case, where do you start? Let us go back to the scenario where a team is developing the hangman game. Focus on how the team is iterating between testing, coding, designing, and understanding the requirements in a truly agile manner.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=40)** - Hey. - Hey.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=41)** - So I just met with the customer. We went over the basic rules of the game, and here they are. So when the [[Microsoft Word|word]] has X letters, the clue shows X dashes, and the player has 10 attempts to guess those letters.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=66)** So I think it's time that we write our first failing test case to grab a word from the text file of length, let's say five.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=73)** - Here I go. So I will name our first test case as test_lengthOfFetchedWord, create a hangman instance, then invoke its fetchWord method that returns a string, accept Eclipse's suggestion to create this method in hangman class, and then write the assertion as assertTrue. Word length is equal to five. So our first test case is to check whether the word is of length five. Now I run the test. And the test case throws a null pointer exception. Not really an assertion failure, but we know that the [[Fetch]] word is returning a null, which we need to fix.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=127)** - [Brunette Woman] So now I'll just make the test case pass. I will just say return the word pizza. And the test case passed, yay!
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=139)** - But aren't you just forcing the code to pass the test by returning a specific word of length five?
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=145)** - Well, your test case asked for a word of length five. My code did just that. No more, no less. Now, if your test case asked for a word of a different length, I can change that code to address that next.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=158)** - That's right. This is called faking it. In TDD, you code only to pass the test and no more. But you may say that obviously the fetch word method is supposed to do a lot more than just returning pizza, and you are right. While the idea of taking small steps may seem trivial, this fake it approach helps you start with constants and gradually replace them with variables as you gain more clarity. You don't always have to take such small and trivial steps if you feel confident, but as soon as you see an unexpected test failure, you slow down and start taking small steps again.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=200)** - Ah, in that case, let me write a test case that tests whether the word length is between five to 10. I will name it test_lengthOfFetchedWordRandom.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=217)** Create a randomizer to get a random number, and then declare an int requested length variable that gets a random number anywhere from five to 10. Create hangman instance again, get the word, this time passing the requested length to fetchWord. Now I will pass this number to fetchWord method. Eclipse prompts me to create an overloaded fetchWord method. And I will accept that suggestion. And then assertTrue that requestedLength equals word's length. Run the test, and we're back to red.
>
> **[4:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=269)** - No problem. I can code for that, too. Change the method to return strings of different lengths depending on the length. Pizza. Cheese. Chicken. Tomatoes. Pineapple. Mozzarella. I run the tests. And it's back to green.
>
> **[5:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=300)** - Oh, but this will always return the same set of words. That's not what hangman does, right?
>
> **[5:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=305)** - Well, then we need to restate the requirement. Return a unique word of a certain length every time. See, I didn't want to assume anything.
>
> **[5:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=313)** - Hmm. Looks like we're missing something. Let's go back to the drawing board.
>
> **[5:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=318)** - Well, remember, we decided we will start with an external text file for the source of words.
>
> **[5:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=323)** - Yes, but looks like we jumped too soon into the game logic without thinking of the game's external dependencies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (14), [[Agile Development|Agile]] (2), [[Fetch]] (2), [[Test-Driven Development]] (1)
> **Speakers:** - well (3), - test (1), - hey (1), - so (1), - here (1)
> **Code Identifiers:** fetchword (4), asserttrue (2), requestedlength (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Env Vars:** tdd (1)
> **Definitions:** is called (1)

#### [Where to start?](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=0)** - TDD is about starting the incremental cycle of [[Software Development]] with a failing test case. But the question is, failing test of what? Can we start from anywhere in the list of requirements? Or are there some best practices to think about when making that decision? At the start of every iteration we decide which use cases or user stores are to be implemented. We then identify their acceptance criteria and then use the acceptance criteria to determine a good starting point. For example, let us say we have these three use cases in the hangman game. We will pick the 'Play next round' use case as our first use case. Because it has the core game logic while the other two are dependent on it. Now we elaborate this use cases by writing down its flow. Let us say this is the first draft of the first basic flow of Play next round use case. When we start a new round, the game saves a previous score if any, initializes its current score to zero and the remaining trials to say 10. It fetches the next [[Microsoft Word|word]] for next round. Let us say the game fetches the word pizza. This makes the clue a string of five dashes. The game prompts the player to enter a first guess and the player enters 'a'. The game checks if the guess is right and so on. Now let us look at the acceptance criteria.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=97)** The player expects that the word never repeats, the word is not predictable, the score is saved somewhere and so on. These criteria make you think about where are the words coming from and where are we storing the score. As the word source and score database are external dependencies, they become good candidates to start out first set of test cases. Our first set of test cases can then be to test the first acceptance criteria that a word fetched by hangman in each round is not repeated or that it is unique. Let's look at the input side which is word uniqueness.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=142)** - So [[Fetch]] word should return a unique word every time.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=148)** - That means we need to store previous words somewhere in out test file to compare with. How about we use a hash set for that?
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=156)** - But how many words can we store in that?
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=158)** - Actually that would depend on how many words are available from the word source, right?
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=163)** - Right but that we won't know yet. Why don't we just start with an arbitrary number? Say one hundred.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=170)** - So I'll create the next case as test_uniquenessOfFetchedWord. We need a randomizer to get a random number. And int variable requested length. That will store the random number and a set to store used words. Since we're testing for uniqueness within 100 rounds, I will add another variable round that will count for one hundred rounds. Then a string variable to store the word and an instance of hangman, now in a loop, well round is less than one hundred. Get a random number assigned to requested length between five and ten. Fetch the word of the requested length into the word variable and then increment the round number. Finally, assert true that the word is added to the used word set. If it returns true, it means that it was not already in the set. And if I run the test now it fails.
>
> **[4:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=264)** - All right, now I'm going to go to pass the test case. I have already copied our sample word source in the project folder. And since the method should not return and duplicate, it will need its own hash set to check for duplicates. So I define the same variable here as well as used word set at the class level. Now in the fetch word method, I will have to remove this faking logic. I first create a result variable as a string then I open a try block to read the file, using buffered reader wrapping a file reader to open WordSource.txt, except the suggestion to create the catch block for exceptions. Now inside the try block, I open a while loop to result from the buffered reader inside which I read the first word from the file then check if the result's length is not equal to the required length. I continue to loop to read the next word. Else I add it to the used word set. If it returns true then I break
>
> **[5:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=359)** because it means it is unique. Still loop continues, outside the loop I return the results, run the test. Ah, the gorgeous screen again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (21), [[Fetch]] (3), [[Software Development]] (1)
> **Speakers:** - so (2), - tdd (1), - that (1), - but (1), - actually (1)
> **File Paths:** wordsource.txt (1)
> **CLI Commands:** make (1)
> **Env Vars:** tdd (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### [Refactor to improve the design](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=0)** - After writing test cases and then writing code, you begin to see the low-level design emerge, but for this design to be really a good one, you need to take the third and a very important step: refactoring. When you change your code to improve its readability or maintainability without changing its functionality, then you are refactoring it, and refactoring becomes very easy in TDD because you always have the suite of test cases to make sure you're not breaking anything when making those changes. Let us see how our hangman team goes about it.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=40)** - So it seems to me that our code is not very efficient when it comes to fetching the [[Microsoft Word|word]].
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=44)** - Why?
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=45)** - Well, first of all, every time that we invoke the fetchWord method, we're opening and closing the word source file, and we should just do that one time and load all the words somewhere.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=55)** - Yeah, you're right. We can store all the words in an array list.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=59)** - Now, I also think that this older version of fetchWord method, simply returning the word pizza, it's no longer needed. I mean, it was just faking it, and now we have a better version of fetchWord.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=69)** - Yes, that's correct. So let's make these two changes. First, let's take care of this fake fetchWord method by simply removing it.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=78)** - And that makes this first test case redundant because it was just testing the older fetchWord method, so let's remove that one, as well. And now run the tests. Great, we're still green.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=91)** - Well, the next change is a little tricky. Our fetchWord method is doing two things, loading data from the file and then finding the word to [[Fetch]]. So first, create an ArrayList wordsList in hangman,
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=108)** then create another method for reading the file, say, loadWords, and then get the logic of writing the data into an array list. Why don't you take it forward from here?
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=121)** - Yeah, sure thing. So copy the try-catch block to read the file from fetchWord to loadWords method. And in the while loop, keep adding the word to the array list instead of checking its length. Now, in the fetchWord method, slightly change the loop in the fetchWord method to iterate through the array list. Now, as before, first check its length. If the length doesn't match the requested length, then continue, else try to add it to usedWordsSet. Now, if this returns true, then that means you've found a unique word of matching length, so assign it to result and break.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=180)** - Make sure you call the loadWords method in both test cases that are fetching words right after instantiating hangman.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=187)** - [Brunette Woman] Absolutely. Let me just do that quickly. Hangman loadWords in this one, and same thing in this one, as well. I think it should work now. Let's run it.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=205)** - Awesome! We refactored and we are still green.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=209)** - The cycle from writing a failing test case to writing the code to pass the test case usually is short, often just a few minutes. It is important to make this cycle as short and fast as possible because it makes sure you take really small incremental steps at a time. However, refactoring may take longer than just a few minutes because you need to take a step back and think about how and where to improve your code. But if you have been refactoring your code frequently, your refactoring steps may also be often short and fast.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[Fetch]] (1)
> **Code Identifiers:** fetchword (9), loadwords (4), wordslist (1), usedwordsset (1)
> **Speakers:** - well (2), - yeah (2), - after (1), - so (1), - why (1)
> **CLI Commands:** make (4)
> **Env Vars:** tdd (1)
> **Definitions:** is a  (1)

#### [The iterative red-green-refactor cycle](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=0)** - [Instructor] In the red green refactor cycle, the goal of refactoring is to make your code easy to read and cheaper to modify. However, you do not refactor every time you write new test case or new code. It is an optional step whenever you notice that you are duplicating your code or your code is becoming redundant, hard to read or your code just doesn't feel right. Also there is no rule that says you should refactor after every five test cases or every 15 minutes. Developers come up with their own time rules based on the complexity of what they are making and how confident they feel about it. Some say they refactor every one hour of coding. Others say you should refactor when you find yourself repeating some code the third time. I refactor when I find myself getting confused, reading my own code or taking too long to add a new functionality. Writing test cases and making them pass should be short and quick a matter of just a few minutes. If you find yourself getting stuck, that is a good sign you should step back and refactor. In general, you should develop an instinct to detect what is called as bad smelling code. So when it stinks, refactor. One way to develop this stink detection skill is to look at each method and think about a difference between its intention that is what it is supposed to do versus its implementation that is what it is actually doing. For example, in hangman, our fetchWord method was opening the file and reading each [[Microsoft Word|word]] till it find what it was looking for.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=96)** It then close the file and then return the word. Do you see it doing more than its intention of just fetching one word? It was handling the file input output functionality. So while the intention of this method is to just find a word, its implementation includes file handling. The hangman game needs to [[Fetch]] a word in every round so this file IO activity will be done every time. It smells bad right? It stinks so we change it by splitting this method in two two. One just to read all the words from the file into an array list and second to fetch a word of certain length. This technique of moving out a certain functionality to make a method's implementation aligned with its intention is very common. It is call extract function refactoring. So now we can create a new method let us say loadWords that handles the file IO and loads all words into a new member variable words list. The advantage here is that if our data source changes in future, we need to change only this method without messing the fetch word method. Let us look at the fetch method now. The fetch method now only handles the words in the word list to find the word it is looking for. The class that uses this hangman class can now call loadWords once to load all the words and then fetch as many words as it needs without doing any file input output. When you code to pass the test, you focus on the requirements.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=190)** You try to implement a new functionality but when you code to refactor, you focus on the design. This means that you should not be adding new functionality when refactoring because that would then need adding new test cases first and that would mean that you are going beyond the refactoring step. Keep the two phases of your TDD cycle, coding and refactoring separate to make your TDD more effective. There are many simple techniques to help you identify how you can improve your code. Martin Fowler has proposed a catalog of over 60 such techniques on [refactoring.com](https://refactoring.com). The extract function refactoring that I discuss earlier is one of them. The refactoring technique in this catalog range from very simple to very complex. One of the simplest one is change functional declaration which is nothing by renaming a method to make it easier to understand what the method does. Such simple refactorings are often available as automated tools in the popular IEDs such as IntelliJ and Eclipse but some refactoring techniques are little more nuanced. for example, there is a technique called replace conditional with polymorphism. These require class level changes and our based on advanced design principles and patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (9), [[Fetch]] (6)
> **CLI Commands:** find (6), make (4)
> **Definitions:** is a  (2), is an  (1), is called (1), means that (1)
> **Code Identifiers:** loadwords (2), fetchword (1)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** tdd (2)
> **URLs:** [refactoring.com](https://refactoring.com) (1)
> **Tools:** intellij (1)

#### [✓ Challenge: Functionality](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=0)** (upbeat playful music)
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=5)** - So now that we have a method to [[Fetch]] the [[Microsoft Word|word]], the next step in the requirement is to get a clue to be shown to the player.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=12)** - Right, so let's write a test case that tests the method fetch clue that returns all characters of the word replaced by dashes when the player starts the game.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=20)** - And when the player inputs a guess, then this fetch clue will also need to return these dashes replaced by correct guess made by the player, right?
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=28)** - That's right. So let's split our requirement into three. So first, we'll write a test case for before the player enters a guess. Second, we'll write a test case for after the player enters a correct guess. And finally, for after the player enters an incorrect guess.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=57)** - So, going back to our pizza example. If the fetched word is pizza, then the fetch clue method should return five dashes. And if the player inputs a correct guess, for example A, then it should return four dashes and an A.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=83)** - Right. Now also, when the player enters an incorrect guess this method should return that old clue without making any changes to it.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=94)** - So can you help us write test cases for these requirements?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (4), [[Microsoft Word|Word]] (3)
> **Speakers:** - so (3), - right (2), - and (1), - that (1)
> **Analogies:** for example (1)
> **Non-Speech:** (upbeat playful music) (1)

#### [✓ Solution: Functionality](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=0)** - [Narrator] In this challenge you had to write test cases for the [[Fetch]] clue functionality for three scenarios, before any guess is entered, after a correct guess is entered and after an incorrect guess is entered. So I'm in test hangman.[[Java]] and I will write my next test case for the first requirement as test fetchClueBeforeAnyGuess.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=36)** As usual I'll first create a Hangman instance and invoke the new method which I will have to create as fetchClue to which I will pass the [[Microsoft Word|word]] for which the clue has to be created. And this I will store and let's say a string variable. To deal with the compilation problem, I'll create this method as suggested, save it, come back. I'll now make an assertion that this clue equals, five dashes and then run the test case. It is read as expected. Now coming back, this is the word that had come as a parameter and all I have to do is, replace all its characters with dashes. So for that I'll first create stingBuilder call as clue.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=103)** And then in a loop, that will go up to the length of the word, append as many dashes. That's it, now I'll say return, clue to string. Save and run. They are green. Let's move on. Next requirement was to fetch clue after a correct guess is entered. So I'll copy the same code and then make some changes. Fetch clue after correct guess. Now in this case, I will have clue as my first one with all dashes and I'll have to invoke fetchClue one more time with a correct guess. So for that I'll say string newClue equals hangman.fetchclue
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=165)** to which I will have to pass the same word as before but also the clue that has been created so far along with the guess character which let's say is 'a'. To deal with this compilation issue once more, I create this fetchClue with three parameteres where the first one is the word, second is the clue and third is the guess. Come back and with this guess I should get my new clue
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=204)** as this string with 'a'. Let's run it and it fails. We go back and now we write the code. So code will be somewhat similar to what we had done before. So I'll copy paste and make some changes. First let me change this to newClue because clue is already a parameter name then after entering the loop I will have to check if the guess equals the character at that position in the word so I'll say word.charAt(i)
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=248)** and the second condition is, the guess should not be something which had already been guessed before. So it should not be equal to the character in the clue. So charAt, ah, here. If these two conditions are met, then I would want to append a new clue whatever is the guessed character. Else, I will like to append a new clue, whatever is there in the clue, the original clue that came along as a parameter. So clue.CharAt(i).
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=298)** Let's run. Let's see what is the problem. That is because we are using clue here for returning. So let's change this to new clue and run one more time. And we are green. Finally the last requirement was to fetch clue after an incorrect guess is entered. So let's do that. I'll copy paste the same test, change this to after incorrect guess and change my guess to a wrong guess in which case my new clue should still remain all dashes. Let's run it. Wonderful, we are green because my fetchClue method was fulfilling that condition right here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (7), [[Fetch]] (4), [[Java]] (1)
> **Code Identifiers:** fetchclue (4), newclue (2), charat (2), fetchcluebeforeanyguess (1), stingbuilder (1)
> **CLI Commands:** make (3)
> **File Paths:** hangman.java (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. TDD Structure and Syntax

[↑ Back to Table of Contents](#table-of-contents)

#### [Test structure](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=0)** - [Instructor] When you write your first test case, you start with one test class per code class. For the Hangman game, the team created one Test Hangman class for one Hangman class. As you write more test cases, the code in the code class continues to grow. At some point, you will see that your code class is becoming bloated. In such a scenario, you will refactor and split your code class. For example, the team may decide to split the Hangman class into two, keeping the scoring logic into a class called as HangmanScores. Should you then create a new test class? You may, if it helps keep your test cases more manageable, or, you may split the code class into two, but continue to use the same test class. Similarly, you may continue to have the same code class, but decide to split the test cases into two, one focusing on the words, and the other on scoring. There's no strict rule that a test class cannot test more than one code class, or that one code class cannot be tested by more than one test class. Think in terms of the requirements you are trying to test. If your requirement for scoring tightly depends on the [[Representational State Transfer (REST)|rest]] of Hangman functionality, than you may want to keep their scoring logic tested along with rest of the Hangman functionality. That was about the external structure of test cases. Let us now look at internal patterns inside test cases. If you look closely, a test case has three things in it. Arrange the elements required to test, act on the elements,
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=94)** and then assert that the result is as expected. This is also called as a Range, Act, Assert pattern. You will also notice that the arrange code is repeated across many test cases. It creates a randomizer, generates a random number, creates a Hangman instance, and then invokes its loadWords() method. If you later decide to do any of these four things differently, you'll have to change all these test cases. That doesn't sound good right? And these repeating lines are also confusing the real intent of each of these test cases by making them so bloated. So, how can you avoid this repetition of code? You can use what are called as test fixtures. Those repeating lines of code represented a certain state of the system for the test cases to run. This fixed state ensures that the test can be repeated any number of times. So, whenever you want to run the test, you set up that fixture, run the test, and then tear it down when done, and if you have many test cases wanting the same fixture, well, you can simply share that fixture, and this is what is called as Set Up, Test, Tear Down pattern. You set up the fixture in a method, annotated with @BeforeEach, then tear down with a method annotated with @AfterEach. [[JUnit]] 4 has similar annotation as @Before and @After. So in Hangman, we can move the repeating lines of code
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=189)** into a method annotated with @BeforeEach, and give it a name, such as, setupTest(). These four lines of code will then be executed before each test case. The tear down method is annotated with @AfterEach, and is often useful when you want to destroy the older objects and reinitialize any other variables modified in the previous tests. This might be useful when you want to optimize [[Memory Management]] to make your test cases run faster. In this example, the tear down method is not really required because we are creating new objects in the setup method, and in [[Java]], the automatic garbage collection cleans up all the old objects that are no longer in use. While the Set Up, Test, Tear Down pattern is repeated for each test case, there may be a few things that you may want your test cases to do just once before and once after, all test cases. For example, in our Hangman game, we want the words from [[Microsoft Word|word]] source to be loaded into the word list, just once. Since word list is never modified by any of the test cases, there is no reason why it should be recreated every time for each test case. Same applies to the random object as well. We may want a new random number for each test case, but not a new randomizer, and for that, we can use one more pair of annotations, @BeforeAll and @AfterAll, which were called as @BeforeClass, and @AfterClass in JUnit4.
>
> **[4:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=285)** Any code in @BeforeAll method will be executed before the test class instance is created, and any code in @AfterAll method, will be executed after the test class instance is destroyed. This means that both these methods need to be static. In Hangman, we need @BeforeAll to create Random and Hangman instances, and the statement to load the words. Since the method is static, the Random and Hangman instances, also need to be changed to static. You may want to include @AfterAll for things such as writing some final output or closing any connections that you may have open during testing. Since our example did not need any such functionality, there is no need for @AfterAll method here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[JUnit]] (1), [[Memory Management]] (1), [[Java]] (1)
> **Prerequisites:** set up (4), required to (1), setup (1)
> **Analogies:** for example (2), such as (2)
> **Code Identifiers:** loadwords (1), setuptest (1)
> **Definitions:** is called (1), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Assertions](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=0)** - Most programming languages have assert statement used for defensive programming to ensure that, if a certain condition is true, at a given point of time in the program execution. If the condition is not true, the program will throw an assertion error. In [[Java]] these assertions are by default disabled, and can be enabled by passing a parameter to the JVM at the time of executing the program. For example in this class Assertor, I'm invoking a method named assertSomething on an instance of Assertor. Here, I expect the value of x to be greater than five, so I can say assert followed by, the condition x greater than five. In this example, obviously, the condition will be true, and so the program will quietly pass without any errors. To demonstrate failure, I have now changed the condition. I am now asserting that x is less than five. As this assertion will be false, the program will throw an assertion error. This error will show up only if I have configured my JVM to enable assertions by passing an argument as shown here. the xUnit frameworks uses a similar idea, but they have their own assertion API, to make those assertions. [[JUnit]] five support these assertions statements, that are static methods in the assertions class, in the Jupiter API. Many of these assertions are also supported in JUnit four; however, there is one assertion statement assertThat, that was part of JUnit four,
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=96)** but now has been deprecated in JUnit five. assertThat statement is a little more readable, than the other assert statements, So this enhanced readability is provided in JUnit five, through third-party assertion frameworks, such as AssertJ or Hamcrest, that you will learn later in this course. For now, let us look at some other assert statements, starting with assertEquals. assertEquals takes minimum two and Maximum three parameters. first one is the expected Object, second is the actual Object, and the third is an optional String, which is a message to be printed, when the expected Object is not equal to the actual Object. Let us take an example. Here, I have two variables x and y, where x is a simple int and y is a Wrapper integer. When comparing an integer data type, although assertEquals expects different data types in its parameters, it uses autoboxing to convert int into Wrapper integer. So you can write the assertion with x and y as shown here. Prior to JUnit 5.4, you had to box, or unbox one of them, but since then JUnit is able to auto box and auto unbox itself. When the values to be compared are real numbers, such as a double or a float, then there is an additional parameter that helps handle Precision problems. Since Double and Float values lack Precision, when dealing with recurring decimals,
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=190)** our Delta value can be provided, as the deviation from expected value. In this example d has a recurring decimal value, which when compared with the Wrapper d, will not compare as equal and so the assertion will fail, but when compared along with a Delta, it will pass the assertion. Since the things to be compared in assertEquals, can be any type of object, you can use any reference data type in this assertion, such as a String or any custom class. Let us say you had a string variable clue, which you expect should be equal to five dashes. So you can say assertEquals, the expected value, and then the actual clue variable, followed by an optional message, "Wrong clue". many assertion statements are interchangeable, so here I can also say assertTrue, clue equals string of five dashes. Another similar looking assert statement is assertSame; however, it is not same as the assertEquals statement. assertSame uses the equal equal conditional operator, whereas assertEquals uses the dot equals method of the object, which means it is not comparing the value of the object, but it's memory location to determine, if it is the same object, and not any other object having the same value. So in this example assertSame will fail, while assertEquals will pass, because the string class has equals method overridden
>
> **[4:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=286)** to compare value and not compare memory location. If you have two objects from a custom class to be compared, whose equals method is not overridden, then assertEquals will work same as assertSame.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (7), [[Java]] (1)
> **Code Identifiers:** assertequals (9), assertsame (4), assertthat (2), assertsomething (1), xunit (1)
> **Definitions:** is a  (4), is an  (2)
> **Env Vars:** jvm (2), api (2)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** make (1)
> **Versions:** 5.4 (1)
> **Cross-References:** later in (1)

#### [Testing exceptions](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=0)** - [Instructor] If you have a method that should throw an exception under certain conditions, then you need to test whether it does so when those conditions arise. This requires designing your test cases a little differently, this feature is available in [[JUnit]] 4 as well, but the approach is a little different between the two. Let us first see JUnit 4 approach. In JUnit 4 the @Test annotation supports an optional parameter, expected, the declares the name of the exception class that should be thrown in the test case. So if you expect IllegalArgumentException to be thrown, then you say expected= IllegalArgumentException.class. You create those conditions for the exception, and then you invoke the method that should throw the exception. If the method is behaving correctly under the given conditions, then the test case should pass. If it doesn't, that means either the expected exception did not get thrown or some other unexpected exception got thrown. In JUnit 5 the approach is slightly different, you use assertThrows assertion, and parse the expected exception and the code that throws the exception as two parameters. Let us look at some code to see what that means. In our Hangman example, there is this fetchClue method, that takes a parameter of type char. This is the character is the guess input by the player. The fetchClue method is supposed to check if the character belongs to the [[Microsoft Word|word]]
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=93)** and if yes, then return the new clue with character substituted in it. But, what if the player enters some invalid character? The valid characters are only alphabets A to Z, so what if the player enters a number or a special character? We want that this method should throw an illegal argument exception in such a case. So let us first write a test case for that. So I am in TestHangman, here I create the next test case, void test_whenInvalidGuessThenFetchClueThrowsException(),
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=135)** nice long name, now, I will have assertThrows as my assertion to which I need to parse two parameters. The first parameter is the name of the exception, which is IllegalArgumentException.class. And the second argument is the code, how do we parse code here? Well, we can us lambda expression, so here we say, hangman.fetchClue, let's say the word is our good ol' pizza, the clue is just five dashes and the character is 1, which is invalid because we expect only alphabets here. Close the statement and let's run it. And we are red, as expected. Go to Hangman, and this is where I need to now code for checking the character, guess. So let's say the user has entered a capital alphabet, so I need to convert that into small case. For that I'll say if guess is greater than, equal to capital A and guess is less than, equal to capital Z, then I just need to convert this into small case. So I say guess += 32, to shift its ASCII code. So now if guess is less than "a"
>
> **[3:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=235)** or guess is greater than "z", then that means it is an invalid character and so I say throw new IllegalArgumentException.
>
> **[4:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=252)** Run the test, and we are green. Another thing you can do here is you can actually check the message that comes in the exception. So for that I'll create one more test, whenInvalidGuessThenFetchClueThrowsExceptionWithMessage(), really long name. And I can now capture this exception and say, e, and make another assertion. assertEquals, "Invalid Character". And I compare this with getMessage of e. Run the test, it fails. I just take this message, go to Hangman and parse this
>
> **[5:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=308)** as its parameter, run it, and we are green again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (4), [[Microsoft Word|Word]] (2)
> **Code Identifiers:** fetchclue (3), assertthrows (2), wheninvalidguessthenfetchcluethrowsexceptionwithmessage (1), assertequals (1), getmessage (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** ascii (1)
> **Speakers:** - [instructor] (1)

#### [✓ Challenge: Performance](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=0)** - So we figured out how to [[Fetch]] a [[Microsoft Word|word]] from the word source and how to get the next clue based on the player's input.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=12)** - Well now we need to think about updating the number of remaining trials in each round and calculating the score after each input.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=19)** - So that means that we have two variables to be tested in each round. One, remaining trials, and two, the score. Now, testing trials should be easy because it should be reducing by one after each guess. Our max number of trials was 10, so we can define that as a constant.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=45)** - And our scoring scheme is this formula. Score equals score plus max trials divided by word length.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=63)** - So we need to update remaining trials at each input, but only update the score when the input is correct.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=70)** - I can think of these scenarios. One, before the player enters a guess. Two, after the player enters the first correct guess. Three, after the player enters a second correct guess. And finally, after the player enters an incorrect guess.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=102)** - This is a good list to start with, but I think that we should test trials and scores in separate test cases, just to keep the tests focused and coherent.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=110)** - I completely agree. Can you help us write test cases and code for these requirements?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Fetch]] (1)
> **Speakers:** - so (3), - i (2), - well (1), - and (1), - this (1)
> **Definitions:** means that (1), is a  (1)
> **Non-Speech:** (upbeat music) (1)

#### [✓ Solution: Performance](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=0)** - [Instructor] In this challenge, we are testing two variables, remaining trials and the score. When a new round is started, that is a new [[Microsoft Word|word]] is fetched, then the remaining trial count is set to a constant, say max trials. And after one guess made by the player, it should be reduced by one. For score, it should be zero in the beginning and increase only when a correct guess is made as per the formula shown here. So let us start with remaining trials. So I am in test hangman. Here I will write my next test case, as void test, remaining trials, before any guess.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=52)** At this point I would use hangman and [[Fetch]] a word. And this the indication that I am just starting a new round. And then I say, assert equals. And I expect a constant, let's say max trials in hangman. Which should be equal to hangman's remaining trials variable. Now to resolve these issues, I will first create the constant. It says public static final. I'll make this as end. And set it to ten. Then for remaining trials, I'll create a member variable. Set it to end. Come back around the test case and this is zero. So now to make this pass a test case, I go to hangman. And right where I am starting a new round that is in fetch word. I will set remaining trials to max trials.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=131)** Run the test and it passes. Move onto the next scenario where I need to make a guess and then see if the remaining trials has reduced by one. So I pick up this code. And here I'll say, after one guess. Making one guess means using the fetch clue method. So what I do here is, I invoke hangman.fetchclue to which I pass a word,
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=174)** let's say pizza, a clue, and a guess.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=184)** At this point I don't care whether the guess is right or wrong. And after this, I would expect that the remaining trials would be reduced by one. So I will make this as minus one. Run the test, and it fails. And here you can see it says, expected nine but was ten. So I go back to hangman and the place where the guess is being passed, which is this fetch clue method I will just reduce remaining trials minus minus.
>
> **[3:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=226)** Run the test and we are green. Now onto score. First thing I want to test that the score is zero to start with. So I say void test, score before any guess.
>
> **[4:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=246)** I invoke hangman, fetch word, off a certain length. And then assert that hangman score is zero.
>
> **[4:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=263)** Resolve this by creating this field as an int, which will be zero to start with.
>
> **[4:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=275)** And this should be assert equals. And run the test. The test will pass because the score will be zero. But this test will be helpful in making sure that score remains zero at the start of every round. So let's start with the next test case that I have score after correct guess.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=304)** Here I will define a word. Let's say pizza. Clue as five dashes. And guess as let's say "A." Now I will invoke fetch clue with these three values. After doing that I expect that the score should have increased because we have provided correct guess. So we will say, assert equals. And this should be equal to max trials divided by the length of the word as per the formula. And this should be the value of hangman score. To make sure that this is correctly typed, I first convert the type here and of course I need to say, hangman.maxtrials. Run the test. And it fails as expected. So I go to hangman. Go to the fetch clue method, which is where I'm testing whether the guess is right or wrong. And that is where I need to update the score value so I say score plus equals max trials divided by word length. And once again, I just need to make sure
>
> **[6:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=397)** that it is typed correctly. Run it. And it fails and it says, expected two but was four. That means score got incremented by more than what we wanted. And if you think about it, that's happening because score is being manipulated by other test cases where this fetch clue method is being called. So how do we take care of that? One option is, I can initialize score and each test case where I want to test it. But that means repetition across several test cases just to avoid that I go to my set up test method and just include hangman score to be zero. And then run it again. And we are good here. One last thing I want to test in my test cases. Is where I pass incorrect guess. So let me just copy this whole thing. And just make the guess value as "x" and make the name as score after incorrect guess. At this point, I want hangman score to be zero. Run the test. And we are green.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[Fetch]] (8)
> **CLI Commands:** make (8)
> **UI Navigation:** go to (4)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Scaling TDD

[↑ Back to Table of Contents](#table-of-contents)

#### [TDD tools and frameworks](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=0)** - [Instructor] [[Test-Driven Development]] is carried out within an ecosystem that comprises a variety of tools and frameworks. TDD focuses on unit test cases that test the most granular components of the system under test. The xUnit frameworks have test runner engines to execute these test cases. While this approach works well for small-scale applications, we need to use additional tools and frameworks to help scale TDD for large and complex systems under test. Let us look at some of these tools and frameworks. A system is developed using Integrated Development Environments, and so as the unit test suite. All mainstream IDEs such as Eclipse and IntelliJ now support xUnit framework integration. Large-scale systems are built using build frameworks such as Maven and [[Gradle]] and therefore TDD needs to be situated within these build frameworks as per the guidelines provided by them. For a richer set of testing functionalities, and to make the test cases more readable, third party assertion frameworks such as Hamcrest and Assertj extend core xUnit libraries. And finally, the system under test may have external dependencies on [[Databases]], API's, [[Microsoft Products|products]] and services. These external dependencies may not be directly accessible, or may not even be ready at the time of testing. So TDD uses mocking frameworks
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=93)** to help test external dependencies of the system under test. Understanding how to set up and use these tools and frameworks is an important step to help scale TDD for large and complex systems. We will take a deeper look into two of these frameworks next, assertion frameworks and mocking frameworks

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (1), [[Gradle]] (1), [[Databases]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** tdd (5), api (1)
> **Code Identifiers:** xunit (3)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Tools:** intellij (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)

#### [Assertion frameworks](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=0)** - [Instructor] While the assertions provided by [[JUnit]] are enough to write most of the test case scenarios, they can become somewhat tedious, hard to read, and sometimes lacking in functionalities for complex test cases. To overcome this limitation, JUnit recommends the use of third-party libraries, such as AssertJ, Hamcrest, and Truth. They not only offer a richer set of testing functionality, but also mimic the natural flow of language, making your test cases easier to read and write. Let us take a closer look into AssertJ, as an example. The core artifacts of AssertJ library are available in the Maven center repository. You need to include these artifacts in the class part of your project. Much like JUnit five, AssertJ has one class called assertions which you need to import to get started on AssertJ. Among other methods, it has assertThat method, which used to be part of JUnit four, but is now moved to third-party libraries. To use this assertion, you provide the objectUndertest as the parameter to the assertThat method, and then invoke the condition to be tested using the fluent API, such as isEqualTo, isNotNull, and so on. Eclipse requires a simple configuration step to enable auto-completion assistance to use this fluent API. One of the strengths of AssertJ is its type-specific assertions.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=92)** For example, when testing a string data type, you can use string-specific tests such as endsWith or contains. Let us now look at some examples of using this assertThat method. This example is from the hangman game where there is a [[Microsoft Word|word]], a clue, and a guess. The score is zero to start with. When the player enters a guess, the fetchClue method is invoked to update the clue if the guess is correct by putting the guessed character in its place. Using JUnit5 assertions, I would say assert equals two and hangman.score. Using AssertJ, I can say assertThat the hangman score is equal to two. Using the same, arrange, and at statements in this example, I can say assertThat newClue is equal to the clue with an i at its second place. Note that if you say assertThat newClue equals this clue, then this assertion will never fail because the equals expression will evaluate to true or false, which is just a boolean and not an assertion, and therefore, this assertion is incorrect. The type specificity of AssertJ becomes very useful for more complex data types. For example, here I'm checking that the wordsList that is populated by reading all the words from word source
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=187)** has the word pizza in it and has its size greater than x. In the next example, I'm fetching a word of length y and then asserting that the fetched word now exists in the used words list. The AssertJ library is fairly extensive in its depth and breadth of functionality, and you can find all about it at the URL shown here. The second assertion framework that has a wide adoption is Hamcrest that was born in [[Java]], but has now been adopted by many other languages, such as [[Python (Programming Language)|Python]] and Objective-C. It also integrates with other testing frameworks, such as TestNG, and mocking frameworks, such as JMock and EasyMock. Hamcrest's basic functionality is based on matcher objects that are essentially predicates to compare the expected value with the value to be tested. The library provides matcher objects, and you can also create your own custom matcher objects if required. After making the static imports as shown here, you can assertThat with the object under test and the matcher predicate. For example, the string poetry that has a poetic line by James Joyce is the object under test, and the containsString is the matcher. Let us look at some commonly used Hamcrest matchers. The following assertion is using allOf that takes a series of matchers and expects all matchers to match.
>
> **[4:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=281)** In this case, the matcher containsString and startsWith both have to be true for the test to pass. Similarly, anyOf takes a series of matchers, out of which only one matcher needs to be true for the test case to pass. For numeric data, the ordering can be tested by using the greaterThan matcher, as shown here. Other similar matchers are greater than or equal to, less than, and less than or equal to. With float or double, the precision issue can be tackled by using closeTo matcher that takes the approximate value and the delta. As long as the value under test is within the given delta, the test will pass. For an array data, this example shows how you can test an array's elements against an array of matchers. The object under test here is the array letters, and each element in this array will be matched with the respective element in the array of matchers. The first element will be checked for startsWith A, second with startsWith B, and third with startsWith G. For maps, in this example of a dictionary, the hasEntry matcher tests whether the map has the given entry as shown here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[JUnit]] (4), [[Java]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** assertthat (7), startswith (4), newclue (2), containsstring (2), objectundertest (1)
> **Analogies:** such as (6), for example (3)
> **Env Vars:** api (2), url (1)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### [Test doubles](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=0)** - [Instructor] The system or the object on the test may have external dependencies such as [[Databases]], web services or other systems but you may not have access to these external dependencies all the time or they may not even be ready at the time of testing. So the option is to create proxies for these external dependencies or what are formally called as Test Doubles. Test Doubles simulate the behavior of the objects. They are of five different types. A Test Double can be a dummy object, a stub, a fake object, a spy or a mock. Now let's take an example from our hangman game to understand each of these. Let's say there is a requirement to save the game score once the player completes a round. It is also required to keep track of which [[Microsoft Word|word]] is associated with a score. So I have a new method in hangman called saveScore that takes and instance of type WordScore. WordScore has a word and the score associated with it. If you look inside WordScore, there is nothing going on here. I use an instance of WordScore as a dummy object just to make my hangman code compile. At this point I do not care whether WordScore has any logic or not. So WordScore at this stage is a dummy object that acts as a substitute only for the code to compile. When writing my test for saveScore method, I simply use WordScore with some values that have no impact on the test but are there as placeholders.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=97)** The saveScore method is using it as a dummy parameter and doing something unrelated to the WordScore value. Next, I want to actually save the score. But save where? We may want to store this in an XML file, a [[JSON]] file, a relational DB or maybe just a text file. That is a design decision which is yet to be taken. So how about we make an assumption in a way that once the ScoreDB design is ready, we can simply plug it in. For that I create a ScoreDB class that has a writeScoreDB method. The hangman's saveScore method will invoke ScoreDB's writeScoreDB method. This will decouple my hangman class from the actual database logic. My saveScore won't have to worry about how the score gets returned into the DB. Its job is to invoke ScoreDB's writeScoreDB method and it expects writeScoreDB to return true if the write operation is successful. At this stage ScoreDB just proxies for the real DB that will come at a later date. Its writeScoreDB method simply returns true. This is called a stub. It feeds desired inputs to the tests and doesn't reflect real behavior. So with the ScoreDB as a stub, I can now write my test case that invokes saveScore and asserts that it returns true. The WordScore still remains a dummy object
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=194)** and saveScore invokes ScoreDB's writeScoreDB method. Now I want to take a step further and start working with WordScore values. So for that I store WordScore in a map in ScoreDB that has its key as a word and value as the players score for that word. So in a way, I am introducing some old functionality in ScoreDB with two methods, writeScoreDB and readScoreDB. The idea is that my hangman class which is the object on the test can start working with some score values. So in these ScoreDB's writeScoreDB method, I start storing these scores in a WordScore map. Now ScoreDB has some functionality but it is kind of fake. It cannot be taken as production ready code but it is better than having nothing. So ScoreDB here is a fake object. In the test case, I now have WordScore which I pass to saveScore method. I assert that when I read the score for word apple, I get the score as eight. My WordScore class is now fully coded and hangman's saveScore is invoking ScoreDB's writeScoreDB method as before. At this point what if I was not too keen on implementing this fake functionality but only interested in checking that saveScore method invokes ScoreDB's writeScoreDB method or in counting how many times this method gets invoked.
>
> **[4:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=294)** It is like making ScoreDB work as a spy that spies on hangman. For that purpose I create a boolean variable in ScoreDB called writeScoreDBCalled. Inside the writeScoreDB method, I simply set this boolean variable writeScoreDBCalled to be true. In such a case, ScoreDB is recording output for a component outside the object under test which can be verified. So to write a test case, I start with the boolean variable writeScoreDB as false. Create a WordScore and pass it to saveScore and then assert that writeScoreDBCalled has now turned true. [[Representational State Transfer (REST)|Rest]] of the two classes, WordScore and hangman stay the same as before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[Databases]] (1), [[JSON]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** writescoredb (12), savescore (11), writescoredbcalled (3), readscoredb (1)
> **Definitions:** is a  (4), is called (1)
> **CLI Commands:** make (2)
> **Env Vars:** xml (1), json (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Mocking](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=0)** - [Instructor] A mock object is a special kind of test double. Martin Fowler defines it as an object pre-programmed with expectations which form a specification of the calls they are expected to receive. Mock objects mock the expected behavior of an external dependency, and the emphasis here is on the behavior and not on it's state. Let us take an example. Let us say this object under test relies on an external DB to provide values for a set of keys. When the key is ABC, the expectation is that external DB will return the value nine. When it is DEF, then it will return seven and so on. To get a test double for certain external DB, I can create an external DB stub that has a meta get value. It takes the key as string and returns the appropriate value as expected. In tests, I'm testing my object under test that has a method total values that must add up all the values in the external DB. To make this happen, I use an instance of the stub in my object under test and invoke get value with different keys and add up all the values. So far this works. But what if I also want to test how many times the get value method is called or throw an exception when certain invalid values are passed, or some other such functionalities? If I keep adding such proxy code to the stub,
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=94)** then it will soon get too unwieldy to maintain. Not a good idea, especially when you know that this is not even the real object. This is where mocking comes to rescue. While a stub is a hand coded class, a mock is generated using a mocking framework. That means you never code anything in a mock. You saw that the stub was offering canned responses. If the key is X, then return Y. So all predetermined responses need to be hard coded into the stub. In mocks, you define only the expected behavior within a specific test without having to worry about what other tests may need. And in this way, stubs focus on the object state, whereas mocks focus on its behavior. Mocks are defined using mocking frameworks that complement X unit frameworks and can be integrated within the regular TDD setup. J unit is extended by mocking frameworks such as jMock, EasyMock and Mockito. [[Python (Programming Language)|Python]]'s unit test has unittest.mock. .NET has JustMock, and so on. Depending on which framework you choose the mocking API accordingly changes, but the basic idea of mocking remains the same. Let us take the same example as before and change it using mocking approach. We will use Mockito API as it is the most popular framework among [[Java]] developers. The first change will be the way you define the mock.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=188)** In a mock, since you're not going to provide any behavior, you can declare it as an interface. So here I have an interface called external DB mock that has this one meta signature, get value. Next, the test. Here I declare the mock object of type external DB mock, but instead of using a new operator to create its instance, I use a method mock which takes the name of a class to create its mock. This mock is actually a static method in Mockito class that needs to be imported. Next create an instance of object under test and pass this mock object to it. This is called ask [[Dependency Injection]]. Now you define the behavior of the mock object using the when then statement where you say that when mock objects get value method is past the string ABC, then it should return nine. When it is past DEF, then it should return seven, and when XYZ, then 10. So in these three statements you are stating that you expect the mock object to behave in this fashion. Now you can make an assertion that when the object under test is asked to get total values then it should return 26. Then in object under test, you declare a variable of the type external DB mock and initialize it and its constructor. And finally, in the get total values you simply sum up the values returned by the mock object for all these values.
>
> **[4:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=284)** So what this example shows is that while you defined only the mock object's interface, you could create its instance and define its behaviors specific to the needs of the test case. Mockito has many other very useful and simple to read features that can help you perform fairly powerful mocking. What you saw here was just a small glimpse of how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Java]] (1), [[Dependency Injection]] (1)
> **Env Vars:** abc (2), def (2), api (2), tdd (1), net (1)
> **Definitions:** is a  (2), is called (2)
> **CLI Commands:** make (2), python (1)
> **Best Practices:** the key is (2)
> **Code Identifiers:** jmock (1)
> **Documentation:** specification (1)
> **Analogies:** such as (1)

#### [✓ Challenge: Database](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=0)** - We need to figure out a way to test the score database.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=8)** - But our architect is still finalizing the design.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=11)** - Yeah but if you think about it all we need to test with the database is to save and retrieve scores for each round.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=17)** - How do you feel about a test double?
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=19)** - I mean it's interesting but how?
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=21)** - Well just create a proxy for the real database and we just need to make sure that when the real one comes in that our code doesn't break and that the tests still run.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=33)** - That's a cool idea. Let's break it down a little bit. Here's what I think should be done. So save [[Microsoft Word|word]] plus score and return true. So when a word and a score for that word is passed to the database it saves it and then it returns true. Get word and return score. So when a word is passed to the database it checks to see if it exists in the score database and if yes it returns the score and if no then it returns zero. What do you think?
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=70)** - I think it sounds like a great start. Can you help us mock the score database?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5)
> **Speakers:** - i (2), - we (1), - but (1), - yeah (1), - how (1)
> **CLI Commands:** make (1)
> **Non-Speech:** (upbeat music) (1)

#### [✓ Solution: Database](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=0)** - [Instructor] In challenge three you were to create a Mock Score DB that mocks the behavior of saving the [[Microsoft Word|word]] and the score in the DB, and return true. And get a word score which returns a score. For the solution I'm using Mockito as my mocking framework which will be within the Maven build framework. We will be looking at the solution in four steps. First step we will set up the Maven project, then set up Mockito, create MockScoreDB interface, and then write test cases and the code. So let's move on to Eclipse. So I'm in Eclipse and I'm going to create a new project. From there I will choose a Maven project here. And then we need a simple project so I choose this option. We need to give two inputs at this point. The group ID will be an inner package ID, so here I can say hangman. The artifact ID will become my project ID, so here I'm going to say 03-06-begin.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=78)** Now you can see your project has been created with a sewed in structure of folders. Maven organizes all your files nicely in different folders for the main files, the resources files, and the test files. The next step is to make sure that your [[Java]] version is aligned with what you're working with. Maven by default goes to 1.5, and we want to change that. So for that I go to build path, and configure build path. Here I have to make sure that I have my most recent Java version.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=125)** And I can see my JDK 11, I include that. Remove the older version. Then I need to make sure that my compiler is also in sync. So for that I change this to 11. And rebuild the project. Now you can see it has updated to 11. Next step, I need to set up the TDDs. So for that I will include the [[JUnit]] library. And we are all setup at this point. Now next step is to include Mockito. For that I will use a POM XML file, and declare dependencies to include my Mockito framework. I'll start with dependencies, dependency,
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=179)** and here I have to give group ID as org.mockito,
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=192)** artifact ID as Mockito core, and version of Mockito as 2.25.1.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=207)** Save your POM XML and you will see that your Maven dependencies will automatically be included in your project's build path. Now the next step is just to make sure that when you're using Mockito library classes and methods, you get extra assistance. For that, you go to window, preferences, type favorites. Then you look for a new type and search for Mockito. And you will see Mockito pops us here. Choose that and now it is included. Now you're all set to start mocking. Now we have been working with hangman so we have most of the code available in our previous folders. I'm going to pick up the files from 02_05. So open up that project and pick up the hangman file. Create a folder in 03_06 main. Here I want to create a package and I'm going to call this as main. And this where I will copy the hangman file. Similarly, in my test folder, I'll create a new package and call this as test. Copy the test hangman file into this test folder.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=304)** One last thing to copy is this WordSource.txt file. So I'll just copy this in my new project and now you're all set to start writing our mocking code. For that, I go to main folder, new interface, and I call this as MockScoreDB. This is an interface. Let's start with our first method which is to write data into the DB, which is supposed to return a boolean. So we'll say boolean writeScoreDB. There are two parameters required here: string word and double score. Alright, so our MockScoreDB is ready. Go to TestHangman and let's write the test case for this. So here we'll say test void test_saveScoreUsingMockDB.
>
> **[6:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=373)** So I need to first create an instance of MockScoreDB, which I'll call as mockScoreDB. Instead of saying new mock score, we will use Mockito framework and for that I'll just say mock and then use the name of the interface that I just now created. And this will then generate the mocking instance. Include this from Mockito.mock. Now somehow we have to pass this to our hangman. So for that, we say hangman equals new hangman and we just pass this instance to hangman. So this means I'm creating a new constructor and so I'll have to say create constructor. This has to initialize the member variables. So for that, I will just pick this up and create a member variable and initialize it here.
>
> **[7:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=439)** Now hangman has access to this MockScoreDB. Now I can specify the behavior of MockScoreDB by saying when mockScoreDB and use its right method
>
> **[7:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=456)** that we just now created is passed the word such as, let's say, apple with a score, let's say, 10, then it should return true. But prior to that, I have to now make sure that this returns the correct value and I have to pass 10 here and so I say then. Now before I can get access to then, I'll have to make sure this is included. So I say static import and try one more time and I can see that my extra assistance is working. So I say then return true. Now I can make an assertion for hangman. So I say assertTrue hangman saveWordScore to which I pass some values that I want to save should be true. Now this method does not exist yet in hangman so I say create method, make it return boolean, and make it return false to begin with. Come back and let's run the test case. And we can see that our save score using MockDB test case is failing. To make it pass, I go to hangman and instead of returning false, I will now use my MockScoreDB and invoke its writeScoreDB method to which I will pass the parameter word
>
> **[9:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=552)** and expected score in the form of double.
>
> **[9:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=561)** And this is the value that has to be returned. Notice that this MockScoreDB will actually evaluate this method and return a value, which will then be returned by this saveWordScore method. Let's run the test case again and our test case has passed. Same approach has to be applied for reading and I'm sure you can try that out yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[Java]] (2), [[JUnit]] (1)
> **CLI Commands:** make (10)
> **Code Identifiers:** writescoredb (2), mockscoredb (2), savewordscore (2), asserttrue (1)
> **Env Vars:** pom (2), xml (2), jdk (1)
> **UI Navigation:** go to (5)
> **Prerequisites:** set up (3), configure (1), setup (1)
> **Versions:** 1.5 (1), 2.25.1 (1)
> **File Paths:** wordsource.txt (1)


### Glossaries

[↑ Back to Table of Contents](#table-of-contents)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/next-steps?u=76281980&t=0)** - [Neelam] I hope you enjoyed learning TDD in this course and would try out the new techniques you learned. If you would like to go deeper into the TDD topics we covered, there are many courses in the library, such as the ones listed here. Thank you and good luck in your TDD journey.

> [!info]- Semantic Content
>
> **Env Vars:** tdd (3)
> **Cross-References:** we covered (1)
> **Analogies:** such as (1)
> **Speakers:** - [neelam] (1)


## Instructor

- [[Neelam Dwivedi]]

## Path Context

### In [[Become a Programmer- Foundations]]
← [[Programming Foundations- Secure Coding (2018)]] | **11 of 12** | [[Programming Foundations- Software Testing-QA]] →

## Appears In

- [[Become a Programmer- Foundations]]

---

[↑ Back to top](#)