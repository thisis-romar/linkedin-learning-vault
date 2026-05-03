---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: java-testing-with-junit-14267963
url: "https://www.linkedin.com/learning/java-testing-with-junit-14267963"
duration_minutes: 145
duration: 2h 25m
level: Intermediate
updated: 5/22/2024
learners: 165880
skills:
  - Software Testing
  - JUnit
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/java-testing-with-junit-revision-2021-2424511"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHciFIlwhPI0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1716233428910?e=2147483647&amp;v=beta&amp;t=JQGenIAFFeZoWTSjKt1MLIMkvphCkwABakw9VNbkcxg"
linkedin_topic: Software Development
learning_paths:
  - '[[Building Your Java Skills]]'
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - '[[Java- Generic Classes]]'
  - '[[International Software Testing Qualifications Board (ISTQB) 4.0+ Foundation Cert Prep]]'
next_courses:
  - '[[Complete Guide to Java Design Patterns- Creational, Behavioral, and Structural]]'
  - '[[SQL for Testers]]'
path_nav: '[{"path":"Building Your Java Skills","position":3,"total":6,"prev":"Java- Generic Classes","next":"Complete Guide to Java Design Patterns- Creational, Behavioral, and Structural"},{"path":"Getting Started with Software Testing","position":11,"total":12,"prev":"International Software Testing Qualifications Board (ISTQB) 4.0+ Foundation Cert Prep","next":"SQL for Testers"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/software-testing
  - skill/junit
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Java-%20Testing%20with%20JUnit.md)

![Java: Testing with JUnit](https://media.licdn.com/dms/image/v2/D560DAQHciFIlwhPI0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1716233428910?e=2147483647&amp;v=beta&amp;t=JQGenIAFFeZoWTSjKt1MLIMkvphCkwABakw9VNbkcxg)

# Java: Testing with JUnit

> Unit testing is of crucial importance in developing stable applications. Java developers need to write unit tests, and JUnit is the main unit testing framework for Java. In this course, trainer and developer Maaike van Putten helps you learn to test your Java code effectively. Maaike explains what unit testing is and the advantages that it offers. She covers JUnit and shows you how to set it up an

> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963) | 2h 25m | Intermediate | 166K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (6 videos)
  - [Create proper unit tests in Java](#create-proper-unit-tests-in-java)
  - [What should you know](#what-should-you-know)
  - [Unit testing and other types of testing](#unit-testing-and-other-types-of-testing)
  - [TDD: Test-driven development](#tdd-test-driven-development)
  - [Advantages of unit testing](#advantages-of-unit-testing)
  - [What is JUnit?](#what-is-junit)
- [**1. Getting Started with JUnit**](#1-getting-started-with-junit) (7 videos)
  - [Quick example of a basic unit test](#quick-example-of-a-basic-unit-test)
  - [Setting up JUnit for IntelliJ](#setting-up-junit-for-intellij)
  - [Setting up JUnit for VS Code](#setting-up-junit-for-vs-code)
  - [Setting up JUnit for Eclipse](#setting-up-junit-for-eclipse)
  - [Your first test: HelloJUnit](#your-first-test-hellojunit)
  - [A tour of Coderpad](#a-tour-of-coderpad)
  - [Solution: Create a test method](#solution-create-a-test-method)
- [**2. Writing Basic Tests with JUnit**](#2-writing-basic-tests-with-junit) (8 videos)
  - [Annotations](#annotations)
  - [Write and run test classes and methods](#write-and-run-test-classes-and-methods)
  - [DisplayName](#displayname)
  - [Assertions](#assertions)
  - [Assumptions](#assumptions)
  - [Test execution order](#test-execution-order)
  - [Nested tests](#nested-tests)
  - [Solution: Custom names](#solution-custom-names)
- [**3. More Advanced Usage of JUnit**](#3-more-advanced-usage-of-junit) (10 videos)
  - [Dependency injection in your tests](#dependency-injection-in-your-tests)
  - [Repeated tests](#repeated-tests)
  - [Parameterized tests](#parameterized-tests)
  - [Timeouts](#timeouts)
  - [Parallel execution](#parallel-execution)
  - [Lifecyle control: Before and after](#lifecyle-control-before-and-after)
  - [Custom messages and reports](#custom-messages-and-reports)
  - [Conditional test execution](#conditional-test-execution)
  - [Disabling unit tests](#disabling-unit-tests)
  - [Solution: Refactoring](#solution-refactoring)
- [**4. Quick Peek at Next Steps**](#4-quick-peek-at-next-steps) (3 videos)
  - [How to make code ready for unit testing](#how-to-make-code-ready-for-unit-testing)
  - [Best practices](#best-practices)
  - [Mockito](#mockito)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with JUnit](#next-steps-with-junit)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create proper unit tests in Java](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=0)** - [Instructor] Let's say you have an amazing application that's running well, but you'd like to make some changes to it. Without techniques such as [[JUnit]] this would be a very dangerous thing to do. Writing unit tests is very different from writing regular code. We'll start with the heart of JUnit, annotations. Then we'll move on to assertions. We also dive into some more advanced topics such as (indistinct) and running test parallel. We'll end this course with best practices for writing unit tests, and what would be good next steps to improve yourself even further. I'm Maaike van Putten, and I'm a software developer and trainer. JUnit and [[Unit Testing]] in general is really a must have skill for all software creators. I'd like to help you to take your [[Software Development]] knowledge to the next level. So come join me in this [[LinkedIn]] learning course on JUnits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (3), [[Unit Testing]] (1), [[Software Development]] (1), [[LinkedIn]] (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [What should you know](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980&t=0)** - [Instructor] Before we get started with [[JUnit]] right away, let's first make sure that this course is for you. In order to be able to follow along, you'll have to be familiar with using IDEs and basic [[Java]]. If you are not familiar with the basics of Java yet, these course titles can really help you fix that. First, Learning Java, and also a really good one is the Java 11+ Essential Training and another great one for beginners is the Java Essential Training for students. If you're not familiar with Java, it would be good to first take one of these, you don't need to take all of them, and then come back here so you can level up your Java testing skills with JUnit. If you have the Java basics down already, well, let's just get started, then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[JUnit]] (2)
> **CLI Commands:** make (1)
> **Versions:** java 11 (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing and other types of testing](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=0)** - [Instructor] So, this course is about [[Unit Testing]], but before we get started, it's good to be aware that there are many different kinds of testing. So let's go over a few in this video. So first of all, we have unit testing, and with unit testing we're testing small pieces of the code. The smallest pieces possible, actually. Well, this is great already, but it's not enough to get a good grasp of how the system is working and whether it's really behaving as you would expect it to behave. So therefore, we also have system testing. And with system testing we're testing a bigger part. So for example, the complete API. And we're also having [[Integration Testing]]. And with integration testing, we are testing different parts and how they work together. So to give an example of non-code failed integration testing, I was working at some place at some point and they would have automatic sliding doors that would respond to motion, and also a revolving door that would respond to motion. Well, both doors, they were working perfectly well individual. I mean, the sliding doors would open if you would walk towards them, and so would the revolving doors. But the integration testing failed here because the revolving doors and the sliding doors, they would be triggering each other constantly. So the system as a whole, it wasn't working well. And this is a non-code example of failed integration test. And you can imagine that something similar can be going on with two different systems. So integration is there to avoid these things of go into production. We also have acceptance testing. And acceptance testing is where the end-user or possible end-users come in to see whether they are capable of using the software as intended. And we also have performance testing to see whether the application's quick enough, for example.
>
> **[1:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=94)** Some more testing types. We have regression testing, and this is actually where unit testing is of great use as well because regression testing is just testing everything again, whenever you make a small change, just to see if this small change didn't throw over any of the existing functionality. So regression testing is pretty much all the automatic tests so far. Another one we're having a [[Security Testing]] or sometimes called [[Penetration Testing]]. Where we are we going to see whether we can actually spot weaknesses in the security of the system. And another testing type is [[Load Testing]] to see whether the application can deal with huge loads of traffic at the same time. And the last example I'd like to mention is [[End-to-end Testing]], where we're really testing the application as a whole. And this can often be automated with tools such as [[Selenium]] and others. There's actually a whole lot more of testing types, but just so you know, the thing that you should take away from this is that unit testing alone is definitely necessary to have for your application, but unit testing only is not going to be enough to assure the stability and performance of your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (6), [[Integration Testing]] (4), [[Security Testing]] (1), [[Penetration Testing]] (1), [[Load Testing]] (1)
> **Analogies:** for example (2), imagine (1), such as (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [TDD: Test-driven development](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=0)** - [Instructor] So let's talk about TDD for a second. TDD stands for test-driven developments, and you hear this a lot. And also it's very often in job vacancies and opportunities and recruiters might even ask you about this. And the good news is it's not too special. However, it is really good to be able to explain what [[Test-Driven Development]] is so that you can actually apply this into your day-to-day coding whenever necessary. So what's happening in TDD is the following. Instead of starting with the implementation code, we actually write the test before we write implementation code. So we started writing the unit test and this unit test, it should fail the first time, clearly because the implementation code has not been written yet, but this is really forcing the developer to think about requirements before they start on the implementation. And there's also a voice that's being skipped due to time pressure. So what you very often actually see in environments is that the implementation code is more important than the test, since the implementation is what actually provides the features. And the importance of tests are often overlooked, especially by managers because they don't really get why we would need unit tests. I mean, it's working already, and the long-term necessity to have unit tests is not always as clear. So with test-driven development, we can avoid unit tests to be not written due to time pressure. And the great thing here is also that bugs are spotted early. Well, they're spotted very early, because you thought before you started writing your code really well about, well, what should it need before it starts to pass? And this is how you write your test.
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=93)** So we start with writing a test, and this test, it must fail because if it succeeds already before you've written the implementation code, there's something wrong with your test. Then what you do is you're going to write code that's going to make the test pass. And then afterwards you're going to refactor this code a bit so that it's actually going to be good written code as well. And actually, you just go ahead, you start writing a new failing test for the new feature you're going to be implementing. So it's really reverting the process. Whereas in the earlier days, we would start with writing implementation code, then write a test for it. With TDD, this is really first, and there are some definite advantages to this. As I just already explained, it forced you to think about what you're going to be writing, and you make sure that you don't skip the test. So one last note about this is that often when they use TDD, it gets overlooked that you need more tests than just a unit test. In order to properly test your application, you'll need to have system and integration tests in place as well. And probably even some other tests are necessary for your application to be properly tested, very reliable and doing what it should be doing at all times.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (2)
> **Env Vars:** tdd (5)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Advantages of unit testing](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=0)** - [Instructor] So let's take a minute to have a look at the advantages of [[Unit Testing]] so that we can see what unit testing and [[JUnit]] in particular is going to be adding to our software. Well, first of all, when unit testing, we're going to be validating the smallest units of software. So we're going to really [[Zoom]] in and see if this tiny pieces are doing what they should be doing. And this will enable us to find bugs easy and early. And this doesn't only apply for newly written code, but maybe even more so for code that has been written already and accidentally gets influenced by new code. This way, with unit testing we can easily see whenever a new code is knocking over behavior that we are expecting. And because of this on a long-term, even though unit testing does take a lot of time, it's going to save time and money because these bugs they're going to be spotted easy and early later on, and this will avoid real trouble on production. And lastly, unit testing is really forcing the developers to write better and cleaner code, because if it's not well written code, it's actually going to be very hard to write unit tests for it. But please keep in mind and I've already mentioned is only unit testing will not catch all the bugs. So it's not enough. It's definitely a necessary first step, but it can't be only testing effort that you're doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (7), [[JUnit]] (1), [[Zoom]] (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [What is JUnit?](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=0)** - [Instructor] All right. So we have been talking about [[Unit Testing]], other types of testing, but this course is about [[JUnit]]. So you might wonder at this point, what is JUnit exactly? Well, JUnit is a unit testing framework for [[Java]], and this means that JUnit contains very many libraries and very many functions and the options for testing the smallest parts of pieces of Java code. Junit is not really a standalone kind of thing, it's part of the xUnit series for all other sorts of languages as well. So there's multiple versions of the unit series that can be used for testing the units of your code, but JUnit is for Java specifically. So what we can do at JUnit is that we can start the automated unit testing very easily and how easily we'll find out very, very soon. Also, JUnit is a must have for TDD using Java. There are other options, but with JUnit life gets so much easier that it's fair to call it a must have. So let's no longer really wait and dive into starting with JUnit in our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (10), [[Java]] (4), [[Unit Testing]] (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** xunit (1)
> **Env Vars:** tdd (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with JUnit

[↑ Back to Table of Contents](#table-of-contents)

#### [Quick example of a basic unit test](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=0)** - [Instructor] Let's start with something that should be finished halfway through this course but might looked like [[Java]] and magic now that we're just getting started. We are first going to have a look at the simple Java class with one simple method that does dividing. And then we're going to write a unit test for the happy path here. We're just going to be dividing two positive numbers for this first example. But, things are getting more interesting when we're going to be testing the unhappy path. What happens if we expect an exception joke here? Here's a very basic Java class called calculated methods and only contains three lines of code. These few lines make up a simple method that takes two integers, divides them and then returns a double. But, there's a lot of scenarios possible for these three lines, because you can insert many different types in here. You could, for example, insert two positive numbers, two negative ones. And what happens if you chose some zero or perhaps maximum values of integers in there? There are lots of possibilities. So let's see how we can write tests for some of these possibilities. I have my project and J unit set up already. Don't worry if you don't have it yet, because we're going to set it up in the next videos really soon. Right. So let's start off with adding a class in my test Java folder, and I'm going to be calling this class calculate methods test. I'm ending this class name with tests because this way, I can easily see it's a test, but later we'll see that some tools and some frameworks
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=93)** libraries are also relying on a postfix test to recognize a test. And in this test class, I'm going to create a property of type calculate methods, and I'm going to make it private. And I'm going to create an instance of it as well. And now I'm going to write a method that's going to be testing or divide methods in our calculate methods instance. So I'm going to go ahead and type public void test divide and it doesn't take any parameters. And then in here, I'm actually just going to use one special call, namely the assert equals call. I do have to make an import for this from the ORC J unit Jupiter API package. And in here, I'm going to say assert equals. And the first arguments of assert equals is going to be what I expect the result to be. And I'm going to expect the results be 10 because my actual value is going to be a hundred divided by 10. So let's go ahead and call or divide methods with hundred and then 10. Alright, so this is a test already, but it's not runnable right now. This can be solved by ending the annotation add test on top. As you can see this test, annotation is also coming from org, the chain that you observed that API. And as soon as I finished typing this add test annotation, green icons appeared indicating that this is now a runnable method.
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=186)** So if we click on this green icon, we can see the test running and this one just going to give us a positive result. As you can see in the lower left corner of the screen, we see these green ticks. But, what do you think will happen if I say the expected outcome is 11 instead? I'm good to run it again. And please have your eyes on the lower left corner to see the results. And as you can see, our test has failed and it says so in the middle or actually the right panel why. It says expected 11, but actual 10. So if the assertion is not matching with what it's expecting, the test is going to be failing. This is how the assertions pretty much work. They have an expected and an actual, and if they match, the test is passing and if they don't, the test is failing. In this case, we get an assertion failed error there. Let me change this back to 10 so our test is going to be passing again, the next time I'm running it. But, we can test for much more than just dividing two positive numbers. For example, we can also test for an exception to a cure because in some cases you would want an exception to a cure. And this is the case, for example, when you are dividing by zero. So let's go ahead and create a methods test divide by zero again, no arguments. And in here this time, I'm going to be using the assert throws method. And the first argument is going to be the exception I expected to throw, which is the arithmetic exception. And the second argument is actually an executable and I'm
>
> **[4:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=281)** going to be implementing an executable by having lumped the expression that takes no parameters, but it's doing something. And in our case, it's actually just calling the divide methods. And this time we're going to be dividing a hundred by zero. So what this call is doing, it's going to check whether an exception gets thrown. Again, in order to be able to run it, I will have to annotate it with test on top. So let me run this. And I shall see it's passing since it is throwing the arithmetic exception. There is so much more you can do in J units. Let's just clean this up a bit because right now we are initiating our calculate methods on top. I think that's a bit ugly. So instead let's do this before every test we are running. We can do so using the, before each annotation. And that goes on top of the methods. Let's go ahead and call it in a test. And then in our, init test, I'm just going to be initializing our calculate methods. And this will run before every test. So again, remove it from here. And there's actually one other thing that's nice to do. And it's also very common and that is to have a static import for this assertions class. Because these assertions you'll use them so much. That's actually a bit ugly to have it imported like this. So let me make this a static import. And then right now I can get rid of these assertions here,
>
> **[6:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=375)** since it's a static import and it will just recognize the methods, like this. All right, this looks a lot cleaner already to me. Let's run it again. And you can see it's doing the exact same thing. This time, I'm going to be running the whole class, meaning that all the tests in the class are running. All right, So this code has been cleaned up a bit and we've seen a few basic unit tests already. The [[Representational State Transfer (REST)|rest]] of the videos in this chapter are all about setting up your environment, except for the last one in which we're going to be writing our first unit tests ourselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** api (2), orc (1)
> **Analogies:** for example (3)
> **Prerequisites:** getting started (1), set up (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### [Setting up JUnit for IntelliJ](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=0)** - In this clip, we're going to set up [[JUnit]] for IntelliJ. We are assuming that you have your [[Java]] environment setup already. If that's the case, it's very easy to add JUnit to your environment. First, we're going to create a new project, we're going to add a Maven dependency to this project, and then we'll quickly test the setup. Let's move over to IntelliJ. So first we're going to create a new project and we're going to do so using Maven. I'm going to click next. And if it's prompting you for a group ID and an artifact ID, you can just fill it out. It doesn't really matter what you put in there. And I'm going to give our project a name. And I'm going to name it, set up JUnit IntelliJ. And now I'm going to click finish, and it's going to set up two projects for us. Here, we can see the bump of a project. And as I already mentioned, we'll have to adjust this bump in order to add JUnit to our project. So I'm going to be creating a dependencies list. And in here, I'm going to create the dependency I need. And it's the org.junit.jupiter. It's already completing it for me. And well I don't need to engine actually, I'll just need the junit jupiter. And the latest version right now is, I think 5.7.2. But it's not unlikely that by the time you are writing this, there's actually a later version available already.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=95)** So let me show you how to check for the latest version. We are going to go to [mvnrepository.com](https://mvnrepository.com). And in here, I'm going to be looking for JUnit Jupiter. And in this case, we need the third one, which is just the plain JUnit Jupiter. And I'm going to click on it. And as you can see, there is already a 5.8.0, but I don't want to use this version right now. I want to go for this one. I have that one ready, but if you have a later one that you'd like to use, you can just click on it and then copy the dependency here, and paste it inside your project. You can also find the latest version in the JUnit docs. So let me go to [junit.org](https://junit.org) and show you. Here we have [junit.org](https://junit.org). And in here, if we click on user guide, we actually find lots of documentation. And what I'm looking for right now is in the appendix. We want to have look at the dependency [[Metadata]], and then we want to click on this one. And here we can see on top of the screen is the latest version in the junit docs is 5.7.2. All right, enough digging into documentation. Let's go back to our IntelliJ project. I have added this dependency right now, but I did not update Mavin yet. I could just click this floating one over here. If it's not there, you can open this one, click download resources and then update your projects. But for now,
>
> **[3:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=185)** I'm just going to be clicking on this one because it's good enough. All right, let's test our set up. I'm going to go to our test folder, and I'm going to be creating a, well a test test pretty much. (chuckling) So let's go call a test, test, since we're testing a test. And in here, I'm going to be creating a very basic test. I'll just call it the like void test like this. It doesn't need any content actually. I just want to see what a JUnit is running. And I'll annotate it with tests. And please mind that you are using the test annotation from org.junit.jupiter.api like this. And now we should be able to run our tests. In the lower left corner, we'll see green checks. Yes! And that's great. We're all set to get started now. It's time to write our first test in the Hello World JUnit video at the end of this chapter. So please move on to the last video of this chapter to write our first JUnit test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (16), [[Java]] (1), [[Metadata]] (1)
> **UI Navigation:** click on (4), go to (3)
> **Prerequisites:** set up (4), setup (2)
> **Tools:** intellij (4)
> **URLs:** [junit.org](https://junit.org) (2), [mvnrepository.com](https://mvnrepository.com) (1)
> **Versions:** 5.7.2 (2), 5.8.0 (1)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1)

#### [Setting up JUnit for VS Code](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=0)** - [Instructor] If Visual Studio Code is your go-to editor, this getting started video is for you. I'm assuming you have your [[Java]] environment set up already and if that's indeed the case, it's very easy to add [[JUnit]] to your environment. Here are the steps. We'll first install some extensions or maybe you have them already. Then we'll create a new project. We'll add dependency, and we test our setup. That's all. This is how easy it is to add JUnit to Visual Studio Code. Let's move over to Visual Studio Code. In order to run tests in Visual Studio Code, we'll have to install the Java Test Runner extension. So I'm going to head over to the Extension tab, and I'm going to be looking for Java Test Runner. And as you can see, I have it installed already. If you didn't install it yet, please click on Install in this screen. And after installing, I would recommend to change the setting. So I'm going to head over to Settings, and I'm going to click on the Extensions settings here, and I'm going to select Java Test Runner. And in here, if I scroll down a little bit, we have the Show After Execution option. By default, it's on failure, so it won't show the positive test results. And for the purpose of this course, it's actually quite nice to always see the test reports, so this is why I'm advising you to select always here instead. All right, so that's that. I'm going to show a few more extensions you'll need. So this Java Test Runner, it will enable us to run JUnit for JUnit 5 and test and G test.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=95)** But we'll need more for that. In order to be able to run these tests, we'll also need the Language Support for Java by Red Hat, and the Debugger for Java as well. Here is the Debugger for Java. You can see I have it installed as well. And you also need the Language Support for Java. I would recommend that if you didn't install any of these, you just go ahead and grab the Java Extension pack. These are the most important extensions in one, and they'll enable you to follow along with this tutorial, and manage, and work your way through this course. The one that I'll be using right now is the Project Manager for Java, and I'm going to use it to create a new project. I'm going to head over to our Explorer window and I'm going to click on Create Java Project. And I want to create it from a Maven archetype. And I'll just select the Quick Start here. Grab the latest version and then I'll have to insert a group ID. I'm fine with this default group ID but I do want to have a specific name. So I'm going to be calling this setup-junit for visualstudiocode. Like this. And then I'm going to hit Enter. Now I'll have to select the destination folder. So I'm going to select the right folder where I want to place it. And I'm going to be selecting this folder. And as you can see, it's building the project now. Now it's pausing for me to define the value for the property of version, and I'm fine with this default one, so I'm just going to hit Enter. And it's going to ask me to confirm the settings,
>
> **[3:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=188)** and I'm just going to say yes and hit Enter again. And our project is done. Let's open the project. It's prompting for me now in the right lower corner, so I'm just going to select Open. If it's not prompting for you, you might as well go ahead, navigate to your folder and open it from there. So I'll just click on open here. We have the default Maven structure here already. Let me show you. We have a src folder, within there, a main and a test. And we actually have a test in there already as well. But this is not JUnit 5, this is JUnit 4 still. So let's go ahead and update our extension. So I'm going to move over to our pom, and I'm going to be deleting this alt JUnit dependency over here. And I'm going to be adding the dependency for JUnit 5. There's multiple ways to do it. You can go ahead to Maven over here, then just click on the dependencies and hit the plus icon. And in here, you can look for JUnit Jupiter because this is the one we'll need for JUnit 5. This is actually a bit deceiving because the JUnit Jupiter you're seeing as the second one here, it's from Mockito, and I want one from org.junit.jupiter, which would be this one. And I also want the scope to be test. Chances are that you'll be having a later version of JUnit 5 already but that shouldn't really matter for following along with this course. All right, let's move back to our test. And in this test, you can see
>
> **[4:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=280)** that it's not longer recognizing these imports. And what I need to do, I need to replace these imports with our new ones because the test annotation that we are using, on line 15 we are using it, it's no longer coming from this package. It's now coming from org.junit.jupiter.api.Test. There we go. So as you can see, this one is fine now but we still have a problem with our assertTrue. This one is now coming from, let me just remove this, from org.junit.jupiter.api.Assertions and then let me just grab all of them. I think that's easiest. And I'll show you this test. It's very, very basic. It's just asserting true, true. So it will always pass if your setup is correct, that is. So I'm going to be running this test. And as you can see, our test is passing. So that's great. We're all set now. And it's time to write our first real test in our Hello, World JUnit video at the end of this chapter. So please move on to the last video of this chapter to write your first JUnit test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (18), [[Java]] (12)
> **Prerequisites:** install (5), setup (3), getting started (1), assuming you have (1), set up (1)
> **UI Navigation:** click on (5), select the (3), scroll down (1), open the (1), navigate to (1)
> **Tools:** visual studio (4)
> **Code Identifiers:** asserttrue (1)
> **Speakers:** - [instructor] (1)

#### [Setting up JUnit for Eclipse](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=0)** - [Instructor] In this video, we're going to set up [[JUnit]] for Eclipse. I'm assuming that you have Eclipse and your [[Java]] SDK installed already. If that's the case, it's actually not too hard. We're just going to be creating a new Maven project, add drive dependencies and then test our setup. Let's move over to Eclipse. I'm going to go over to File and then create new project. And I'm going to choose a Maven project and I'm going to click Next. And these settings are fine for me. So I'm going to click Next again. And then in here, I actually want to use the Maven Archetype Quickstart, and I want to use the one from Apache, and then I'm going to click next again. And this default groupId is fine for me, com.example, and the artifactId is going to be set up JUnit Eclipse like this. And then I'm going to click Finish and my project's being built. Let's open it up so we can see what has happened. We have a source folder with the Maven structure in there. We have main and a test and they both actually contain our appfile and also a dummy apptest file. But this test, it's actually JUnit, but it's old version of JUnit. So let's move over to our pom and change that. Also, I want to be using Java 16, so I'm good. Change this to 16 as well.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=95)** And in here I'm going to select org.junit.jupiter as the groupId and junit-jupiter as our artifactId and currently the version I should be using is 5.7.2. So let me go ahead and change it as well. Scope test is still fine. So I'm going to save this file and I'm going to quickly update the project. And then I'm going to move over to test and you can see already something's wrong in our test file because I've removed this import, so it no longer knows this import. I'm going to change it to what it should be now. And that is junit jupiter API assertions, and then, well let's go for all of them. And the test annotation, it also needs to go from elsewhere. So let's go ahead, org.junit.jupiter.api. And as you can see, now it's fine, but this might not run yet. If you go over to Run As, and you check out the run configurations, it might just be that it has select the wrong test runner. For me, JUnit 5 is exactly what I want so that's good. I'm just going to hit Run. In that, I'm going to select, guess I'll just save all. Okay. And as you can see, you see a green bar in the left upper part of the screen, and that means our test has succeeded. So this means that our JUnit 5 is now set up correctly. So that's great. We're now all set to get started. And in the last video of this chapter,
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=190)** we're going to be writing our first JUnit test. So please move on to this last video of this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (11), [[Java]] (2)
> **Code Identifiers:** groupid (2), artifactid (2)
> **Prerequisites:** set up (3), setup (1)
> **Env Vars:** sdk (1), api (1)
> **Versions:** java 16 (1), 5.7.2 (1)
> **CLI Commands:** apache (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)

#### [Your first test: HelloJUnit](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=0)** - Great, we're all set. Let's celebrate this by writing our first test. We first need some sort coded tests. So we're going to start with that first. Then we'll add a test class, and write our test, and run it. Let's move over to IntelliJ. I prefer to use IntelliJ, but you can follow along using any setup. I'm going to add the class codes over here. And in this class, I'm going to be writing a very simple method. I'm going to be calling this public, and it's going to return a string. And then say hello as a name. And it won't do anything interesting. It will simply return, hello worlds, like this. We're now going to create a test for a super advanced code. And we're going to start by creating a code test class, in which we can write our tests. So I'm going to click on new [[Java]] class in our test Java directory. And I'm going to call this code test. And now we're going to add a test in this test class. And I can just do so by writing a method. So I'm going to call my methods public. It's not returning anything, and I'm going to call it test say hello. And in order to call the method that I've just written in the code class, I need to create an instance of codes in here. And then what I'm going to be doing, is I'm going to use an assertion. And this assertion is just going to test what are my expected value and my actual value match.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=95)** So I'm going to go ahead and say, assert equals. And this won't be recognized right now. So I will have to add an import on top. And I'm going to use the static import for this, it's the convention. And it just looks much prettier. It's org.[[JUnit]] jupiter api assertion. And I'm just going to to use all of them like this. And the first argument of the assert equals is the expected value. And I expect the value to be hello world like this. And the actual value is the results of code, say hello like this. So this test code, it looks really good, but we cannot run it yet. Let's make it a runnable test by adding @ test on top of our methods like this. Please make sure that this using the org.junit.jupiter.api.test. Because this is one you want to be using for JUnit 5. If it says anything else, then please change it, and also check your phone to see whether there are other dependencies in there as well. As you can see, the icons have appeared here. And I can just click them and run our test. And as you will see, it's going to be parsing since our actual code and or expected codes are the same. You can see in the lower left corner, that there are green ticks. And I can even click on the test class and test method, but there are no messages right now. They're simply parsed. Let's see what happens if it fails.
>
> **[3:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=187)** Let's change our expected string, by removing well, just the exclamation mark like this. By the way, this is safe to use on string because it's using the equals on the object method. And that's the double sign equals as you have, for example, to compare numbers. So if I run it again now, you'll actually see that the test will fail. And it's telling us why. It says, expected hello worlds without the exclamation mark. But the actual has one. If we chase it back to match the outcome, and we run it again, we can see that our test will pass again. All right, we're all set. And this is it for the basics. We have just written our first test. Let's level up our JUnit game with some more test ingredients in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (4), [[Java]] (2)
> **CLI Commands:** make (2)
> **Tools:** intellij (2)
> **UI Navigation:** click on (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - great (1)

#### [A tour of Coderpad](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four areas, instructions in the top left, a code editor for your answers in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left. You can use these direct handles to allocate space as you like. To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include the description of the challenge and the challenge's parameters and desired result. Parameters are values that will be passed into your code and they have to be of a particular data type. Return value also has to be of a particular data type, and you also see that noted in the instructions. It's possible that some questions don't require any input or won't return a result. The constraints section has useful information about parameters that will be passed in. The examples show different parameter values and what result will be returned
>
> **[1:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=92)** for each of those test cases. Create your answer in the top right code editor. There are comments in the starting code showing where to put your solution. When you click Test My Code, you'll see a message indicating whether your code returned a correct result. If your code isn't successful, you can ask for help.
>
> **[2:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=126)** The showExpectedResult and showHints variables determine when you see the expected result and any hints. Change them to a value of true to control the outputs.
>
> **[2:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=142)** The code editor in the lower right shows how your solution is used. You can change that code to experiment with different test cases.
>
> **[2:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=161)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. When you've finished each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Code Identifiers:** showexpectedresult (1), showhints (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a test method](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-create-a-test-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-create-a-test-method?u=76281980&t=0)** - [Instructor] Alright, for this exercise you had to turn them into tests and all we had to do was go ahead and add the annotation at test on top of this method. Now, if we run the code, you can see that this results is correct.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 2. Writing Basic Tests with JUnit

[↑ Back to Table of Contents](#table-of-contents)

#### [Annotations](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=0)** - [Instructor] In this course, you will be using annotations a lot and they might look intimidating at first, you can recognize annotations by the at symbol that's in front of them. Once you get the hang of annotations, you find out that are not too bad. And the good news is that [[JUnit]] is using a lot of annotations, so you get the hang of these soon enough. They're simply some sort of meta data that you can use for your source code. We can use them for different purposes and chances are that you have seen and even used them already in your regular code. Let's move over to Intellij and have a look at some examples. One of the use cases for annotation is for example, to make rules for an interface that your compiler will take into account. This happens when you use the annotation at functional interface on top of an interface. This will make sure that the only one abstract method is allowed in this interface. Another annotation that you might've come across already is the at override annotation. And this annotation makes sure that the method is actually an override from another method in the parent class. So with this annotation on dub, we cannot go ahead and change the name of the method or change number of parameters for example. And then one more example is the at deprecated annotation, this will warn developers that are using this code that the method they are using is actually deprecated. We have seen annotations in the previous videos already as well. We have seen the at test annotation from JUnit. This is actually telling [[Java]] that we are dealing with a test here,
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=93)** by adding the at annotation on top our method was suddenly recognized as a test, and we could run it as a result. As I said, during this course, we will be using a lot of annotations because Junit, heavily depends on the annotations for each behavior. Often, if you will need to learn something new in JUnit, and you wonder how to do it, the answer will be an annotation. Well, let's no longer talk about annotations, but let's use them in the next video to write some tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (4), [[Java]] (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Write and run test classes and methods](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=0)** - [Instructor] Let's just start writing some tests. First, we'll need to create a class that we can write tests for. Let's start with the very, very simplified BankAccount class. I'm going to create a class BankAccount. And I'm going to give it two properties: a balance and a minimumBalance. And private double minimumBalance. Like this. And then we would like to create a constructor that's going to set these two fields. So I'm going to make a public constructor, and it's going to take a double balance and a double minimumBalance. Can say this.balance equals balance and this.minimumBalance equals minimumBalance. Probably, we need to get balance and minimumBalance later, so let's also create getters for this, and I'm going to be lazy and just generate these. There we go. For now, let's just create two additional methods: withdraw and deposit. First, withdraw for when you want to take money from the account. It will return the amount you are withdrawing, and if that's not possible, it will throw an exception. So I'm just going to say if the balance minus the amount is still bigger than the minimumBalance,
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=93)** then we're good to go. We'll simply replace the balance with our new balance. And then we'll return the amount. Else, and then we'll just throw the RuntimeException. This is only just to show you what it should be doing. Clearly, this is not how you'd really implement this. Next, the deposit method. We'll now create the deposit method and then we'll return a new balance and it takes the amount deposited as a parameter. So let's go ahead, public double deposit like this.
>
> **[2:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=132)** Again, double amount. So balance just becomes the old balance plus the amount and will return it. Clearly, I should be checking for negative numbers but it's just a very simplified example for the purpose of getting to know [[JUnit]]. All right, we have two methods. We have getters and we have two properties. We're all set. Let's now create a test class to see if we can test the behavior of our class. First, I'm going to be creating the class BankAccountTest in our test folder. So I'm going to go ahead, say BankAccountTest. And for now, I'm just going to be writing two test methods. One to test withdraw, and one to test the deposit. So first, withdraw. I'm going to call it testWithdraw. And I'm going to create a new instance of BankAccount in here. The balance will be 500 and the minimum will be -1,000. Now I'm going to withdraw 300 and then I'm going to use assertEquals to see whatever it does what I would expect. So I'm going to go ahead and say bankAccount.withdraw 300 and then I'm going to use assertEquals.
>
> **[3:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=222)** Import static org.junit.jupiter.api.Assertions. All of them. Okay. And I'm going to be seeing what it is what I would expect. Well, I expect it will be 200. And the actual is the getBalance on our instance. So I'm going to call getBalance like this. And we also need to add the annotation on top of our test method so that it recognizes our method as a test. We can run this test now, and as you will see, it's going to pass. If we change something to our method, for example, use the smaller sign instead of the bigger sign, we can see that our test will fail. So I've changed our method and now I'm going to move back over to test, run it again, and you can see that our test is failing right now because it's throwing the RuntimeException instead. So let's go back to our code and change our test back. And here you see the purpose of the unit test demonstrated at the same time as well. Our test was no longer passing because our code was not doing what we would expect it to do. All right, that's fixed. Now, let's do something similar for deposit. Let's create a testDeposit. And again, we'll create a new BankAccount instance in our method. And the balance here is 400 and the minimum is 0.
>
> **[5:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=319)** So we're going to deposit 500. And I expect the balance to become 900, and to test it, I'm going to use the getBalance to get the actual balance. So again, I'm going to go for assertEqual. Expect is 900 and then I'm going to say bankaccount.getBalance. Now I still need to add @Test on top, and then we can run this test method as well. So let me run it and as you'll see, it will run successfully as well. We can also run all the tests in a class by pressing the play icon next to the class name. So this time, I'm not running an individual test but I'm actually running all the tests in this class. You can see this in the lower left corner. It is now showing the test results of both methods. Well, that's it. You should now be able to write a very basic unit test yourself. Let's see how we can make the output better structured by adding a display name to all of this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (2)
> **Code Identifiers:** minimumbalance (7), getbalance (4), assertequals (2), testwithdraw (1), bankaccount (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [DisplayName](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=0)** - So we have written our first unit tests already. That's great. Let's inspect how we can improve the report that is coming out of this test using display name. Display name is an annotation that allows us to replace a default name with a custom name. This allows us to make the report more descriptive. Let's move over to IntelliJ and first run or test again and have a good look at a default report. Let's run it again. And in the lower left corner, you can see that the tests we're running are having a name of the method. It is a good practice to have descriptive names for our test methods, but it's even nicer to have a little description with spaces and punctuation instead. Here you can see the default names in the lower left corner, but now it's time to show you how to replace that with a custom name. All I have to do is add the annotation at display name on top of our method. And in here we can simply write a prescriptive message. So I'm going to go for something very basic, like, withdraw 500 successfully. And for the other one, I'll go ahead and add deposit four hundreds successfully. There is a lot of discussion about how to best name this, and I like to be concise yet descriptive. And for now, I just want to point out what has changed if we run it again, we no longer have our method names appearing in report,
>
> **[1:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=94)** but the custom display names instead. You can see this in the lower left corner. The method names are gone and they're replaced with our display names. So we can do this for methods, but you might be not too surprised if we can do the very same thing, but then on top of the class. Right now, we have the class name in our report. Let's replace that with something that's nicer to read. So I'm going to go on top of the class and I'm going to add at display name. And then in here, I'll just say test bank account class, and let's run it again. And you can see now the default name, the name of the class. It has been replaced with a custom display name as well. All right, that's it for display name. As we have seen display name helps us to optimize the reports test. We can simply add it as an annotation. Let's see if we can get tests for some more advanced situations in the next video on assertions. Here to display names will come in handy as well, since we're going to add a lot of methods to our test class is going to make it easier to read.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Best Practices:** good practice (1)
> **Speakers:** - so (1)

#### [Assertions](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=0)** - [Instructor] Assertions are used to check a certain condition. If an assertion fails, the test fails. We can find the assertions in the assertions class in the org.[[JUnit]].jupiter.api package. We usually use a static import for this one so that we can use all the methods without having the assertions. in front of them. There are very many methods inside this class, and they're all used to perform the actual tests. We have seen one already, assertEquals. We can see it here on line 12 and line 20. This one checks whether a certain expected outcome is equal to a certain actual outcome, and if that is the case, the test will pass. If it's not the case, the test will fail. There are very many overloads available for assertEquals, and that's not only true for assertEquals. It's actually the case for all the assertion methods inside the assertions class. [[Java]] will know which one is the closest match, and that is the assertion that will be used. We're not going to be discussing all the overloads in this video. There are very many, and they all do sort of the same thing. So we'll just discuss the most high-level methods so you know what is out there and you can use what you'll need. All right, let's start writing some assertions. I have prepared a class here, BackAccountAssertionsTest, and at this point, it's actually just a copy of bank account test, but with a different name. And in here this is an assertEquals already, but I'm going to be adding now a test that will use the assertNotEquals method. And we're going to use it to see whether balance of the accounts will actually go below zero if we withdraw more than the positive balance
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=95)** that is on the account. But again, we won't go into the minimum balance here. So let me quickly write a method for this. I'm going to say public void test, and then WithdrawNotStuckAtZero. There we go. And in here, I'm going to be creating a new instance of bankAccount, and I'm going to be initializing this as a balance of 500 and a minus 1000 as a minimum balance. Then I'm going to be withdrawing 800 from it, and that should resolve in minus 300. And I just want to check whether we will go below zero and that we don't get stuck at zero. So I'm going to be asserting that it's not going to be equal to zero, so I'm going to say assertNotEquals, and in here, I'm going to say zero, 'cause this is the one that is unexpected and the expected this just bankAccount.getBalance. There we go. Now I want to run this, so let me add @Test on top. And also I'll add a sensible display name. Withdraw will become negative. Something like this. And now I can run it. And our test will pass because the result will be minus 300, which is not equal to zero. You can see it in the lower left corner, our test has passed. There's also an assertArrayEquals method.
>
> **[3:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=188)** This will check whether two arrays are equal. If they are arrays of objects, it will check whether they are deeply equal, which means that it'll also look at the objects on the object on the array. It works very much like the other assertions. It takes an expected array and compares it to the actual array. But not all assertions take two arguments for comparison. The assertTrue and the assertFalse, they'll only need one. As you might guess, it should be some sort of Boolean condition or a Boolean supplier that will return a Boolean condition. And if this condition is true, the assertTrue will pass the test and the assertFalse will fail. For false, it's the other way around. AssertTrue will fail and assertFalse will pass if the inserted parameter is false. Well, let's have a look at this one in action. First, we'll need to make sure that we have some sort of Boolean to test for. So I'm going to be modifying our bankAccount a bit. I'm actually going to add a property on top and I'm going to call it isActive. So we have a private Boolean, isActive here, and I'm going to insert a getter and setter. There we go. And let's default it to true, like this. Now we can write a test to make sure that the bank account is active after creation. So I'm going to move back to our BankAccountAssertionsTest and I'm going to be writing a new method. Public void testActive.
>
> **[4:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=282)** There we go. And in here again, I'm going to be creating a new bankAccount instance, and I'm just going to give it 500. Zero doesn't really matter for this example. And I'm going to be asserting that the bank account is active after creation. So I'm just going to say assertTrue bankAccount.isActive like this. I still need to import assertTrue. So there we go. And if I run this one now, or at least first make it runable, again, add a display name. Test activation account after creation, something like this. I'm going to be running this and this test will pass. Since the value's going to be true, and this is actually what I'm asserting, it will be true. Another pair of assertions that doesn't require two arguments for comparison is the assertNull and assertNotNull. There's just one value necessary for the conclusion, and this conclusion depends on the value being either null or not. For example, let's create a method in our bankAccount that should return the name of the bank account holder. So I'm going to move back to our bankAccount again, and I'm going to be creating a string for the bank account holder. HolderName, like this. And again, I'm going to be inserting the getter and setter as well. It has created the getter and the setter.
>
> **[6:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=378)** And then we can write a test to see whether our bankAccount holder's name is going to be null or not. So I'm going to move back to our BankAccountAssertionsTest, and in here, I'm going to be creating a method that's called public void testHolderNameSet like this. And again, I'm going to be creating a new instance of bankAccount. The values don't match too much in this case. And this time, I'm going to be setting the account holder name. I'm just going to call it to Maaika here. And then I'm going to check whether the getHolderName is not returning a null, so whether it has been set successfully. So I'm going to say assertNotNull like this, and then I'm going to call bankAccount.getHolderName like this. In a very similar fashion, we could also have used the assertNull method, which would have passed if the holder name was not said, and it would still be null. So let me make this a test as well. Add the display name to it. Test set holder name. That's two words. And then I'm going to be running this test. And as she will see, it will pass since we've set the holder name in this example. But the two variables are referring to the exact same object. This can be done with you assertSame method. If you want to check whether they don't point to the same object, you might guess this, we can use assertNotSame for this. Sometimes you will need to test to check whether a method throws an exception
>
> **[7:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=470)** in certain circumstances. We can test this with the assertThrows method. Our class is actually throwing an exception when we try to withdraw below the minimum. It is terrible that it's a runtime exception, and it's even worse if we're going to assert at will. So this is definitely not real production code. It's just for testing purposes. One of the terrible things that's happening now that we'll test on any runtime exception. So for example, a null pointer, will also make our test pass, but let's just totally ignore this part and just focus on assertThrows is working here. So I'm going to be writing a test, whether it's going to throw the exception when we try to withdraw below the minimum. So testNoWithdrawBelowMimimum like this And again, I'm going to be creating a new instance of bankAccount here, and I'm going to set this to 500 and minus 1000.
>
> **[8:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=527)** And then I'm just going to say assertThrows like this and now I have to specify what class it is throwing. I'm going to say RuntimeException.class, and now I'll have to insert an executable. So it doesn't take any parameters. And we're just going to use the withdraw method on our bankAccount, and I'm going to make sure we get below the minimum, so let's say 2000 like this. And this will throw the runtime exception, which is what we're testing for, so this test should pass the way I've written it now. So let me go test that we can't withdraw below minimum. And I'm going to be running this. And as you can see, it's passing since it is throwing the runtime exception. There's actually also a way to check whether executables don't throw an exception regardless of the [[Representational State Transfer (REST)|rest]] of the result, and that is the assertAll method. We can either send four arcs with executables or a string of executables as a parameter. Let's just show a simple example here. I'm going to see public void testWithdrawAndDepositWithoutExceptions. That's a long method name. All right, and I'm going to be creating a new BankAccount instance again, and I'm going to set it to 500 and minus 1000. And I'm going to say assertAll,
>
> **[10:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=620)** and this is not going to look at the result. It's just going to check whether it's now throwing any exceptions. So I'm going to use it for ours. For this and going to start with- We'll go ahead and say bankAccount.deposit. Let's do 200 and then let's do a withdrawal as well. BankAccount withdrawal 450 like this. And I'll add @Test on top and a display names that makes sense. This no exceptions for withdrawal and deposit, like this. And if I run this test, you'll see that it will pass since no exceptions get thrown. If we make this a bit bigger or let's say a lot bigger, it will fail because an exception will get thrown. And there we go, we can see the exception that's happening. All right, let's change this back. We also have a way of checking whether something is not taking too long. We can do this with assertTimeout and assertTimout preemptively. Let's have a look at a simple example again. So I'm going to say public void testDepositTimeout test, and again, I'm going to be creating a new instance of bankAccount here. Let's just make it 400 and zero this time. And I'm going to say assertTimeout.
>
> **[11:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=719)** And this is testing whether it can complete the operation fast enough, so I need to go for a very, very, very low duration. So let's just go for a duration of nanos, and we'll give it one nanosecond to complete this operation. I don't think my computer is going to be this fast. Let's go say bankAccount.deposit. I'm just going to withdraw anything. And if we run this and it takes longer than a nanosecond, it will actually fail. Test speed deposit, something like this. I'm going to run this. It's really, really fast. So I had this lecture problem that my computer is too fast, so I'm going to insert a little sleep in deposit just for the purpose of this exercise. I'm going to remove it right after. So let's go to deposit, and then I'm just going to say thread.sleep like this just for five milliseconds. That should definitely do the trick. And let's just add a try catch around it as well. Catch the interrupted exception. You don't need to get this. It's just to show you that if we force our execution for a bit longer our test is going to fail. So there we go. And I'm going to go back here and I'll run our timeout test again. And this time it failed,
>
> **[13:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=811)** because the execution exceeded the timeout. All right, so let's quickly change this back. And let's give this one a bit of more time here, because it might sometimes take more than a nanosecond. I already said that we're not going to have a look at all the overload methods, because as you can see, there are very many out there. Let me just show you the ones for assertEquals, and you can see there are so many of these. But there are some common overloads that I would like to say something about. The first one is the one that has a delta parameter. This can be useful when doing calculations and not knowing, or even being able to type the very exact result. For example, when it's a fraction. When a delta is being added, there's a range on the expected that will result in a match with the expected value. So for example, if you would want to test on 1/3, we can write 0.33, so let me just do that. We can say 0.33, and then the actual will be the result of dividing one by three and this like this, it will fail because, well, this is not the same, but we can insert delta here and this delta will make the difference. So if we have a delta of 0.01, this will actually result in a passed test, because using a delta, it will accept a difference and it will allow the test to pass whether it's a difference of 0.01 or less. The other overload I would like to mention is when the last parameter is a string message. So for example, oops, not the same.
>
> **[15:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=907)** Clearly want to have a bit more specific message, but this will demonstrate the behavior. And in this case, when it's failing, you have a custom message that you'll see when the test is failing. You will not see this message when a test is passing though. There is one last method I would like to mention here, and that is also part of the assertion class, and that is the method fail. This method will fail the test. And if we add it to one of our methods that was otherwise succeeding, you can see that the test will fail. So let me remove this and now instead in the middle of this one, 'cause this one is clear that it should be passing. If I run this, it's passing, but now I'm going to call fail in the middle,

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (1), [[Java]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** bankaccount (15), assertequals (5), asserttrue (4), assertfalse (3), isactive (3)
> **CLI Commands:** make (9), find (1)
> **Analogies:** for example (5)
> **Versions:** 0.33 (2), 0.01 (2)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)

#### [Assumptions](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=0)** - [Instructor] Assumptions are a way of setting conditions for executing a test. If we meet the assumption, the test will get executed. If we don't meet the assumption, the test won't be executed. Assumptions are in a class in the org.[[JUnit]].jupiter.api package. This class contains methods that will test assumptions. The main difference between assertions and assumptions is that a failed assumption does not lead to a failed test but to an aborted test instead. So if we have an assumption and the assumption is met, the test will run. If the assumption is not met, the test will be aborted. For assertions if the assertion is met, that test will succeed and if the assertion is false, the test will fail. So just to make sure that you grasp this correctly, an assumption that is met might still lead to a failed test in case the assertion that follows is false. Assumptions doesn't say anything about the outcome of a test. Just about whether the test will actually run or get aborted. Here we have the official JUnit documentation on assumptions, and we can see the methods there that are in the assumptions class. There are much less assumptions than there are assertions, but still there are quite some overloads that you can see. Again, we won't be spending too much time on all these overloads. Instead, we will be discussing the different names of the methods in the assumption class. So assertTrue, assertFalse, and assumingThat. Let's move over to IntelliJ to see these assertions in action. I have prepared a class for testing the assumptions, BankAccountAssumptionsTest, and it contains one method
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=93)** which is a copy from the test active test method that we had in BankAccountAssertionsTest. First, I'm going to try to add assumeTrue to this test. And what I would want, I don't want this assertion to be tested when BankAccount is null because if the bank account is null, there's no point in testing the assertion. So I'm going to assume that BankAccount is not null so I'm going to go ahead, so assumeTrue, and then I'll say here BankAccount doesn't equal null. There we go, I need to import it. And if I run this now, it won't change anything since BankAccount is not going to be null. I just instantiated it, so this is running fine. I could however make this assumption fail. So this assumption is not going to be met and then you'll see in the lower left corner that something new is happening. The test will get aborted. So I'm going to run this again. And as you can see, there is a different icon appearing and it's also saying test aborts the exception. Assumption field, assumption is not true. Well, we might think hmm, assumption's not true. That's not very specific. For this purpose, we have an overloaded methods. Namely we can add a message to this. So we could say for example account is null like this. And if I run this again, it's giving us a message why it's failing. Actually in this case, it would be account is not null since we're assuming that it is null. But you probably do get the point.
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=186)** I'm going to be removing this message now and I want to show you what happens if we use assumeFalse instead. So assumeFalse, it's very similar, but it does the exact opposite. It's a matter of wording and way of describing when to use which one. We could have used assumeFalse in a previous example. But when we have said == null, the result would have been the same. Let me show you. So if I changed this to false, our statement is still the opposite because we're saying that it should only run in case BankAccount is not null since it's going to be false when it is null. So if I run this, our test will actually run since the assumption is met. As you can see, it's running perfectly fine now. Though you might also agree with me that this wording is a bit of confusing and it requires a lot of thinking to see what's going on. So in this case, it actually makes more sense to use the assumeTrue because this is also the wording you would be using to explain to someone what's going on. A bit harder to grasp is probably the assumingThat method. It takes two arguments, a Boolean condition and an executable. If the condition is true, it will execute the executable. It makes sense if this executable contains the assertion. So we could write our test active method using the assumingThat assumption. So I'm just going to go ahead and remove this and I'm going to say assumingThat, and then we need a Boolean. So I'm going to say assuming that BankAccount doesn't equal null,
>
> **[4:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=280)** and then I need to insert the executable that should run when BankAccount is not null. And I'm just going to be using a lambda expression for this. Just we can say no parameters and then here the assertion will be placed, and we're going to copy this assertion up like this. And this actually does the exact same thing as our assumeTrue and assertTrue beneath each other. It'll only execute the assertTrue if the condition is true. The difference with this one and assertTrue is that it will not abort the test if the condition is false. So running this code will actually result in a fast test, so let me show you. I'm going to run this right now. I will need one more parenthesis here and I'm going to run this code now. And as you can see, it's passing. So let me show you what happens if I change it to this one and I'm going to be running the test. And as you can see this time, our test didn't get aborted when the assumption was not met but instead it's passing. So it's actually a conditional test to some extent. You're only going to be running the assertion if the assumption is met. If the assumption is not met, this one will be skipped. And if there's nothing in there, it will simply pass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (2)
> **Code Identifiers:** asserttrue (4), assumingthat (4), assumetrue (4), assumefalse (3), assertfalse (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Tools:** intellij (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Test execution order](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=0)** - [Instructor] If we don't say anything about the order of our tests, we cannot really predict what will happen. This is not a bad thing in many cases because preferably we want our tests to be independent when we're testing units with [[JUnit]], which means that the order of execution shouldn't matter. In some cases, though, you might still want to test the order of the execution. For example, when you're are executing more of integration type of test and this is where the order of execution starts to matter. As of JUnit5, we have a more advanced way of specifying the order of our tests. This might come as a huge surprise to you, but we can do so using annotations. Let's have a look at how to use this using our BankAccount class for testing. I'm going to be creating a new class, a new test class to be more precise, and I'm going to call it BankAccountOrderedExecutionTest. There we go. And it's going to contain two methods, testWithdraw and testDeposit. In a previous example, we would create a new instance in every test methods. Let's give this one a static bank account instead. So I'm going to go ahead and say static BankAccount, bankAccount equals new BankAccount and I'm just going to be initializing it with two zeros. And then I'm going to be writing a test for a withdrawal. So I'm going to go ahead and say public void testWithdraw like this. And if you remember, the code will throw an exception whenever I want to withdraw more than the minimum balance. Our minimum balance is zero right now, so if our withdrawal gets called before our deposit,
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=93)** we will get an exception. The order matters here. So let's go ahead and say that we are going to withdraw from our bank account 300 like this, and then I'm going to use assertEquals to determine the value. Well, in order to know this value, I will have to think of what I would deposit. I'm going to go ahead and go with 200 an import assertEquals as well. And then I'm going to go ahead and create public void testDeposit as well. And in here I'm going to be depositing 500. And in order for our test to succeed, the order matters here as well. So I'm going to go ahead, assertEquals, should be 500 'cause I want this one to be called first, and then we go add, say bankAccount.getBalance to determine whether that's actually correct. All right, so let's turn these two into tests and I'm going to skip the test to add discipline into it now for testing purposes. And I'm going to be running the tests in this class. And as you will see, our testWithdraw is failing, but our testDeposit is succeeding. If they would run the other way around, both would succeed. Let's now add an annotation to our test class to tell in what order to execute these tests. There are multiple options, actually. We could also go for alphabetical order or even write a custom order class, but right now I want to go for the most common way
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=186)** to order since JUnit5 and it is to use the at order annotation on each individual test. So first, I'm going to go ahead and type @TestMethodOrder into our class and I'm going to give it a value of MethodOrderer.OrderAnnotation.class. This is selling JUnit that the tests in this particular class going to be run in the order of the order annotations. So in order to do this, I will have to add order annotations. If I don't add this line on line seven with the TestMethodOrder, the at order annotations on top of the methods will become ignored. So let's at order annotations as well. And I'm going to say @Order(2) and for this one I'm going to say @Order(1). Well, if you take a good look at the lower left corner right now, you see testWithdraw in front of testDeposit, and this should be the other way around when I run it again. Let's have a look. And as you can see, it's calling testDeposit first now, and because of this order change, testWithdraw is also succeeding. No longer an exception gets thrown because now there is a balance to withdraw from.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (2)
> **Code Identifiers:** testwithdraw (5), testdeposit (5), assertequals (3), bankaccount (2), getbalance (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Nested tests](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=0)** - We have just seen test execution and how we can influence the order of our tests. With nested tests we can control the relationship between tests. This can, for example, be useful when you would want to separate a certain feature or a specific methods and organize your code around it. It is often also used to execute, in case of certain conditions, such as when you, when something is not found, when something is found, and for example, when exception gets thrown. Let's move over to Intelli J and do this for when balance is zero. We're going to group all the scenarios we want to test for the situation in our nested class. Let's first create a class for this, bank account, nested test. Alright, and we will start off by giving our class the same content as our regular bank content. We had to withdraw any depths admits in there, and it's a great place to start. So I'm just going to be coping all the content of this class and place it in our bank account Nested test. There we go. And now let's create an inner class for this class. I'm going to call it when balance equals zero. Let's see class when balance equals zero, and I'm going to give it two methods. The first one is going to be public void test withdraw. Minimum balance is zero. And the second one is testing withdrawal
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=93)** When minimum balance is a thousands, let's go ahead and create it. Withdraw minimum balance, negative a thousand. There we go. Let's give them some content and I'm going to be creating a bank account instance in each, but the first one is going to have a minimum balance of zero and also a balance of zero. And the second one is going to have a minimum balance of negative thousand. And in both cases, I'm going to be withdrawing 500 from the account. So I'm going to go ahead and say withdraw 500. And I'm going to do the same thing for negative thousand method. In the first case, I expect an exception. In the second case, I get a new balance of minus negative 500. So let's go ahead and create your assert equals for this as well. Here, I'll use assert throws since I expect the random exception to get thrown. I'm going to copy this code over to my lumped expression here in 40th assertion. There we go. The second one is going to be easier. It just going to be the assert equals minus 500 and then bank account. It gets balance. There we go. Let's empathy both with a test. And again,
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=186)** I'm not going to add the at display name right now because we'll just take up the time. It's only for testing purposes, because what I want you to demonstrate you, if a run all the meds in this class and please keep it on the lower left corner, you'll see that only the two test methods in the outer class are running. This is because we'll have to add as nested in order to, for them to get run as well. And it's important to note, there's running a test of apparent class will also execute all of the tests of her child's class, at least when we add as nested to it. So I'm going to add as nested and I need to do this on the class level. So I have to go ahead here and say, add nested. So if I run it again, you can see that it does get run and they are displayed in the output as well, but they're indented. They're a sub test. So to say it's a good practice to add display names. So let's still add some sensible display names to improve for output, I'm going to say a display name. I'll just be very descriptive withdrawing below minimum balance exception like this. And for the second one, I'm going to say, that's display name withdrawing and getting a negative balance like this. I'm going to be running it again. And as you can see, it will be a lot easier to read. Well, right? That's it for nested classes, they are added by creating an inner class,
>
> **[4:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=280)** containing some tests and we can ensure they run. When the parent class gets fired off by adding the as nested annotation to the inner class.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - we (1)

#### [Solution: Custom names](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980&t=0)** - [Instructor] Alright, let's go ahead and give our test custom names. First I'm going to scroll down to test and in here I'm going to use the annotation at display name and I'm going to give it a basic description, test addition with positive numbers. And I'm going to do the same for our other tests. Going to add the annotation at display name and I'm going to give it the description, test subtraction with negative numbers. Now I'm going to go ahead and test my code. And as you can see, this is the correct answer. Please make sure to add display name to both of the tests.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 3. More Advanced Usage of JUnit

[↑ Back to Table of Contents](#table-of-contents)

#### [Dependency injection in your tests](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=0)** - [Instructor] So we have seen the basics of [[JUnit]]. Let's tackle a slightly more complex topic: [[Dependency Injection]] in tests. Dependency injection is a way of having less tightly coupled classes, which is a good thing. Definitely for tests because it encourages separation of concerns even more, which is what we want when we're only testing units. Dependency injection occurs when we don't need to create the instance but we just get it handed to us. So inside our tests, we are no longer going to say new BankAccount. This BankAccount class will simply be given to us. Dependency injection can be done in several ways on the field of a class but also on the method and the constructor parameters. Before JUnit 5, parameters for methods and constructors were not allowed. So this restricted us heavily in the way of injecting our dependencies, but right now, we can. Here you can see an example of some pseudocode with dependency injection and without dependency injection. First, we have the without dependency injection. We have some sort of class, a car, and this car, it has an engine, and we need to instantiate this engine, either here or in the constructor or whenever we want to use it first. Then we have the [[Representational State Transfer (REST)|rest]] of the code of the class. With dependency injection, we actually have the @Inject annotation, and the framework will be giving us our Engine object. So no need to instantiate it before moving on with the rest of your code. And this is on the field level but this can also be done on the method and on the constructor level. Let's move over to IntelliJ and look at some examples of how to do this with our BankAccount case.
>
> **[1:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=94)** We would first have to specify what and how needs to get injected. We do this by adding a ParameterResolver. ParameterResolver is an interface with two methods: supportsParameter and resolveParameter. We will have to override these. Let's create a new class implementing ParameterResolver first. So I'm going to go ahead and create a new class. And I'm going to be calling this one BankAccountParameterResolver like this. And this class is going to implement the ParameterResolver interface. There we go. It's red on the line now because you need to override two methods. I'm going to implement them here in the lazy way, so I'm actually going to get some help from IntelliJ implementing these. Now let's make sure it support this type of BankAccount by changing our supportsParameter like this. Instead of having it return false, I'm going to make it return parameterContext.getParameter and then I actually want to be getting a type, and if it's of type BankAccount class, it should return true. If it's not, it should return false. There we go. So it's supported as soon as we're talking about a BankAccount instance. Great, now make sure that our resolveParameter, which is the one that is going to hand the object to us is actually not resolving it to null 'cause then we'll get all these null pointers in our code but we want this to return a new BankAccount.
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=190)** And I'm just going to use zero and zero for this one. Great, now if we go and create a new test that's going to be using this class, we don't need to create our instances of BankAccount in there. Let me show you how to do it. But first, we're going to need a new class for this. So I'm going to go ahead and create a new test class and I'm going to call it BankAccountDI, dependency injection, Test. There we go. And now I need to do something special. I need to annotate this class with the ExtendWith parameter. And it's going to be extended with the BankAccountParameterResolver.class and this is actually going to enable us to just use the BankAccount as if it were instantiated already. If we don't use this one, it won't know what it needs to inject. So let's copy the deposit method from BankAccountTest over here, so I'm going to be using this one. And I'm going to copy it to our DITest like this, and I'm going to change it a bit. So instead of creating a new instance here, I'm going to pass it in as a parameter. So in here, I'm going to say BankAccount bankAccount like this. Remember, I created one in our ParameterResolver with both balance and minimumBalance zero. This is why I will have to adjust the assertion in order to make sure that it's still going to pass. So I don't expect 500 but expect this one in here. And other than this, it should be fine. I'm going to run it,
>
> **[4:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=283)** and you'll see that this test is going to pass. This might actually seem like a lot of hassle to get to the same result but since we are working with loosely coupled classes here, this is much better already. And also, you saw in some of our previous video that we had many methods in there and many bank account instantiations, and this is just really ugly, and this is a good way to work around this, and to improve your code by a lot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (9), [[JUnit]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Code Identifiers:** supportsparameter (2), resolveparameter (2), parametercontext (1), getparameter (1), bankaccount (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (3), is an  (1)
> **Tools:** intellij (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Repeated tests](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=0)** - [Instructor] We can repeat a test a certain number of times. You might guess how, using an annotation of course. We use the @RepeatedTest annotation for this, and this is great for several reasons. For example, testing the behavior of an endpoint when you access it multiple times. It's actually very easy to use. If we go ahead and copy our [[Dependency Injection]] code to new class. I'm going to create a new class and I'm going to be calling this BankAccountRepeatedTestTest. to be calling this BankAccountRepeatedTestTest. It looks correct and I'm going to be copying the dependency injection code to it, and I need to add the ExtendWith on top as well. BankAccountParameterResolver.class, yes, and if we replace the test with @RepeatedTest, we can specify the number of times we need to run this test. For example, if I'm going to say five, this test is going to be running five times. Let me run this and show you. As you can see in the lower left panel now, there's a repetition one to five, all the way until five of five. The test results, they are in this case, saying they are all passing, but you can click on them and you can see the result for each individual test repetition. We can use a special object to get information about repetition. We do so by adding a repetition info as a parameter. I'm going to copy this method to show you, Add RepetitionInfo to the name, and I'm going
>
> **[1:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=99)** to add it as a parameter as well, like this. Then in here, for example, I can just make some output, for example, the number that we are running this. I can say number plus repetitionInfo getCurrentRepetition. I can say number plus repetitionInfo getCurrentRepetition. This is just outputting the current repetition. Yes, change this, and if I'm going to run this, you'll actually see that it's outputting the number and then the number of repetition for every repetition. Clearly, this is not very useful, but you can imagine if I could use it to do calculations with it, for example. If I would want to have a different number, I'm going to be depositing every time. So this is how easy it is to repeat a test a certain number of times. You can simply use the @RepeatedTest annotation and specify how often you'd like to use it. Repeating tests can be really great whenever you need to execute a test multiple times to verify the behavior. For example, when you want to access an endpoint multiple times. This repeating tests gets way more powerful when you can use different parameters every time you run it. In the next video, we'll see just that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (2)
> **Analogies:** for example (6), imagine (1)
> **Code Identifiers:** repetitioninfo (2), getcurrentrepetition (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Parameterized tests](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=0)** - We've just learned how to repeat a test a certain number of times. This becomes way more interesting, combining it with parameterized tests. Using the @ parameter test annotation, enables us to specify a data source for our parameters. And when we want to run the test, a certain number of times, we can do so with different parameters. There are different ways to specify a source. Let's start with the easiest one. I'm first going to be creating a new class. And I'm going to call this bank account parameterized test test. And you hit enter. And actually, I'm just going to be copying the code for repeated test to this one. So here we go. And also, I'm going to add extend with on top. And in here, I'll replace the repeated test with @ parameterized test. And whenever I do this, I will need to specify which parameters to use. The parameters come from a source. So, let's start with using the @ value source. This annotation is to specify our parameters directly. The source is always an array. And in here I'm going to use the ints. So as you can see, this is one of the array's that they can specify. And I'm just going to be adding some values in. Eight hundred, and let's say thousands, all right. Let's change our deposit methods to deposit multiple values.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=96)** And we can do so like this. So instead of having the amount specified here, I'm going to use the amount that I'm going to specify as our first parameter. And it will know that this one needs to come from the value source. Our assert equals true, to also check for amount. And as you can see, this test is going to run four times. Let me show you because we have four value specified. We have hundred, 400, 800 and thousand. Let me just change the display name because we're not depositing 500 anymore. And as you can see all the tests are passing as well. If you paid close attention, when I was typing this, we actually had an autocomplete going on. And this is only allowing a certain number of data types that TRA can be using. So we can see it can be shorts, bytes, ints, longs, floats, double, chars, booleans, and then string and class. And that's it. So let me change this back to what we had. And we're going to use a different type of parameter source for our next method. So we have just used a value source, but are actually other sources we can choose from. We can use public void test, and then just go ahead and test some sort of enum, because I want to use the enum source here. And I'm going to use the day of week enum, like this. And I'm just going to be testing what it is, actually is starting with a T.
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=190)** So I'm going to say a assert true. And then in here, I will say, day to string, start with, and then I'll use the T like this. Now I will have to specify that this is actually a parameterized test. And I will have to specify the enum source. The first argument is the value argument. And this one requires the enum that I'm using. And in here, I'm going to be using the day of week build in enum, like this. And then I can specify which values are allowed. And in this case, I'm only going to use days that start with a T, which would be Tuesday and Thursday, like this. All right, this is a silly example of course, but it can be very useful to test all the values, or some of the values of a certain enum. And see whether it's not trying an exception or returning no, for example. As you can see here, they're both passing since both Tuesday and Thursday, start with the T. All right, let's step away from enums, and also from this type of silly example, and move back to our bank account case, and look at two sources, the CSV source and CSV file source. We can use the CSV source for literal CSV like this. I'm going to write a method, and it's going to be called public voids. And then let's do deposits and name test. And it will take some sort of amounts, followed by string name and also by a bank account.
>
> **[4:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=288)** All right, I'll insert the code later. Let's now first start with our annotations that are going on. So I will start with the parameterized test, cause it's still parameterized test. But now I'm going to be adding a CSV source on top. So there we go. And in here I will have to add an array. And in this case, our array should contain amounts and also a string name. So the first value is going to be amount. And second one is the string name, and this is valid CSV. It looks a bit weird when I typed out like this, but you can see later how you can actually just refer to a CSV file, which might make more sense in many cases. And this will be 200 and Rachid. And then let's do one more. And that's 150 and Ted. All right, let's give this method the body. So I'm going to use our bank account, and deposit the amounts to it. I'm also going to be setting the account holder name to the name that we've gotten. And then I'm going to make two assertions, and I'll just write them down like this for now. So you can say assert equals amount, and then check the bank account balance for this. And also, I'm going to be using the assert equals to check the name of the account holder. So I'm going to see if it's the same as name. And there we go. So let's run this. And you will see it's repeating three times,
>
> **[6:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=381)** with the values hundred Mary, 200 Rachid, and 150 and Ted. It also says so, three tests are passing. [[JUnit]] will try to cause the source to the type of the parameter. So in our case, we have for example, a hundred and then followed by Mary. So it will try to cast a hundred to a double, and then Mary to a string, which is both possible. But if this is not compatible, it will show the exception precondition violation. Let me demonstrate this by adding some text to these numbers that can no longer cost it to a double. As you can see now it's not passing for Mary, since it's not succeeding in doing the costs from high hundreds to a double. All right, let me change this back. As you might guess, the add CSV files annotation is doing the same thing, but instead of containing the CSV the value is about pointing to the CVS file. And this enables us to use a CSV file as input for a test. Which can be very useful, especially when it's a bigger file. So let's first add a folder that would be a logical place to store a CSV file in. And in this case, I'm going to be creating a resources folder in our test. So I'm going to create a new directory and call it resources. And actually, I'm also going to mark this as default directory for test resources route. That's the right one. And then in this resources file, I'm going to be creating a CSV file. So let's just call this details.csv for now. I'm going to be inserting the same value.
>
> **[7:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=477)** So I'm fine with the text pattern. That's open this up. And in here, I'm going to say a hundred Mary, 200 Rashid, and 150 Ted. All right, so clearly this is way more interesting for massive data files. And if we use this for massive data files, we have a very elegant way of pointing to a file with a lot of content from our test. So since this is the expected place for resources, we can simply add the annotation with a path like this. So let me move back to our test. And if I were to change this one to the add CSV file source, I can only specify here the details.csv, and this will do the exact same thing. It's the resource property. It does need to know that. So let me run this. And as you can see now, it's doing the exact same thing, and it's passing as well. Last point, that is a good to know, is that you can specify with the lumped property, what does CSV delimiter is? So for example, if we would want to have a semi colonist debt, we can do so by adding a semi-colon here. And that's it. We've seen common ways to create parameterized test now. And there are more complex options such as creating custom argument converters, for example. But for now you have seen the ones that you find yourself using in most of these situations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (1)
> **Env Vars:** csv (14), tra (1), cvs (1)
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** make (2), find (1)
> **File Paths:** details.csv (2)
> **Definitions:** is a  (2)
> **Speakers:** - we (1)

#### [Timeouts](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=0)** - [Instructor] It is not uncommon that you want to specify a certain max execution time for a test. With different and older [[JUnit]] dependencies, there were multiple ways to do this. We could add timeout as an attribute to do the test and we could create a rule for all the tests in our class. Right now, there's more a elegant solution, and we're going to see two solutions actually. We're going to see the @Timeout annotation and the assertTimeout methods. I have prepared a class here that I will use to demonstrate how to use timeout in JUnit 5. So the first one is to have @Timeout on top of your Test class. And we can just say @Timeout here, and then it will take two attributes: the amount that it can wait and then the unit. So I'm going to say value and this is going to be 500. And then the time unit, which is going to be milliseconds. I wonder if that would be a bit long test. So let's go for the milliseconds. There we go. And now we can give our method a body and let's try to make it fail first. So I'm just going to put in a Thread.sleep to make this method wait a bit. I'm just going to say wait for 100 milliseconds and then catch the possible InterruptedException. And after this, I will just do something like bankAccount.deposit, which starts at zero, so we're going to deposit 300, and then I'm just going to assert whether that's actually the case. So I'm going to assertEquals 300, and then bankAccount.getBalance like this.
>
> **[1:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=97)** Import the assertion method and there we go. If you run this right now, we'll get a failed test, and the sleep InterruptedException. So let me show you it does that. There we have it. So we get sleep interrupted and our test has failed. If I lower the amount that our thread is sleeping, you will see that our test is going to pass. So let's just make it sleep for 200 milliseconds. We have 500, so this should be more than enough. And right now, this test will pass because it's going to be done before the test expires. If you would want this timeout for all the methods in our class, we could also put it on top of our class, like this. And now it's actually for all the tests in our class. We have this timeout of 500 milliseconds. So let me just comment this out. You can read it later. And I'm going to be placing this back here. So this is the first way with the @Timeout assertion. And a second way is to have the assertion timeout on assertion level. This won't take the full time of the method but only the assertion, which is more accurate in many situations because that's the level you usually want to know the execution time of. As I already said, we can do this with the assertTimeout method. So let me just copy in this code. And I'm going to make it sleep for 1,000 milliseconds again so you can see that this is really only happening on the assertion level. And I'm going to be replacing this
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=190)** with assertTimeout like this. And then in here, I'll have to specify the duration. I'm just going to give it a Duration.ofMillis and then just go for 500. And then we'll have to specify what it actually needs to do in the situation. And I'm going to make sure that it's going to fail, and I'm going to make this thread sleep for a little while. So I'm going to go ahead and say Thread.sleep. And just make it sleep for longer than we have the duration set. Oh, there we go. And import this. So I'm going to be running this, and as you will see, this test is going to fail right now because it's going to sleep for longer than the duration that we specified. It also says, so execution exceeded timeout of 500 milliseconds. So if I lower this to just say 10, for example, our test will pass because the time box won't expire. Clearly, this is a silly example and instead of sleep, you would want to have an actual task in there. To demonstrate, this is really only looking at the executable's duration. You can see that it has the Thread.sleep on top, and this is being ignored and it's still passing. Therefore, the assertTimeout can sometimes be preferred when you need to be more precise or whenever you need to do a lot of heavy work before the assert that you do not want to take an account for your timeout. So if you would need to time this,
>
> **[4:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=283)** the assertTimeout is not the method to go with but you should be using the @Timeout annotation instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (2)
> **Code Identifiers:** asserttimeout (5), bankaccount (2), assertequals (1), getbalance (1), ofmillis (1)
> **CLI Commands:** make (7)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Parallel execution](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=0)** - [Instructor] Parallel execution means that multiple tests are running at the same time. This can be done when the order, and also the order of the report, doesn't matter. In J unit five, we can easily turn it on by setting a configuration parameter. So far, we have not been touching this yet, but with configuration parameters, we can decide general rules and conditions for tests to run. So we're going to create a properties file in our resources, and we're going to be calling this J Unit platform dot properties. There we go. And in here I'm going to be adding two lines. The first one is J Unit dot Jupiter dot execution dot parallel dot enabled. And then I'm going to set to a value true. And the second one is very similar, J Unit, Jupiter, execution, parallel, and then config strategy. And it has to be dynamic. This will change properties for all or tests. However, they don't run parallel automatically. In order to achieve that, we'll have to indicate as we want this on top of her class by adding, you might not get this, but an annotation. So let's go ahead and create a new class let's call it bank account parallel execution test. And on top of this class, we have to specify the at execution annotation. And in there we have to say,
>
> **[1:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=92)** watch the execution mode should be, and we need concurrent for this. And also use the extent with on our class. And we're going to be extending it with our bank account from resolver dot class. Let's now just copy some tests in here and I'm just going to be using this deposit method that we've seen in the very beginning a few times. Going to copy it and paste it in here. And let me just copy and paste is twice more. There we go. And do clearly need to change the names of our methods. So I'm adding numbers in the back. So (indistinct) get unique, all right, if I run this, that right now, it will probably go too fast for you to see in the lower left corner, but they are running concurrently, but it went way too fast. So let's change this and add some slips in our method. And actually also going to be stealing this one more time out of test. There we go. And I'm just going to be, let me make this one a bit slower even. This one, somewhere in the middle. All right. So if I run this now, it will look very different. As you can see, they are running and the last one is done before the middle one is done. They are running concurrently, at the same time. Whereas if I turn off the execution mode, let me just comment this out for a second.
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=186)** And I run it again. You will see the difference. They are running one by one in order to specify them. As you may have noticed, this was also taking much longer since they're all waiting for one second or around one second. And they were doing it at the same time in a previous execution. So let me turn this on again so you can see how much faster this was. So in this mode, it's going to be as slow as the slowest one, but you're not going to be waiting all for it. As you can see, it's done way faster. So this is how easy it is to enable parallel execution of tests in J Unit.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Lifecyle control: Before and after](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=0)** - [Instructor] Many cases, you would want to do something before and after your tests. We can perform certain actions before and after our test methods using, well, of course, annotations. We can add the annotation @BeforeAll to a method, and then it will run before the test. Let me demonstrate this behavior, but first, I'm going to create a new class, and I'm going to be calling this, BankAccountBeforeAndAfterTest, like this. And in here, I'm just going to copy the code of our ordered execution class, but I'm going to be getting rid of the ordered part here. So I'm going to be copying this in and removing Order. And I'm just going to start the balance at 500 now, just for a second. So after the first method, it should be around 200. Adding 500 to it will give us 700. So if I run these tests, they should pass like this. And as you can see, they're passing fine. All the red in the middle is because the configuration parameters have to be specified earlier. So, okay, say I would want to be doing something before all the methods. I can do so by adding a method here and having the annotation @BeforeAll on top. I'm going to go ahead and say, public static void and then just prepTest, like this. And instead of initiating bankAccount on top, I'm just going to be initiating it here. So I'm going to copy this code down
>
> **[1:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=94)** and delete it off there. So, right now, the bank account, it will get modified by the first method, and so will it by the second. And it's the same object, but it is fine because that was the case already. So this is not going to be changing anything. So let me also insert the @AfterAll here. And I'm putting this on the bottom. It's actually not necessary. I could also put it on top. I'm just going to say @AfterAll, and in here, I'm just going to say public, has to be static again, void endTest, like this. And let's just say something like, Bye. And you can imagine this would be great to set up these values for the whole test classes with before and then close any lingering connections in the after, or make sure that the objects get destroyed in the after. So let me run this all. And as you can see, it is going to have the Bye statement when it's done. And I didn't insert anything of a print statement in the BeforeAll, but if I would've had, it would've printed it before Bye. So let me show you that as well. Let's go for Hi, run it again, and it will just say Hi and then Bye when it's done. So Hi is appearing earlier, and then we get Bye when it's done. With unit tests, you generally don't want to depend on the test, so we could reset the account before every test using the BeforeEach instead. We will have to adjust our second method though because the outcome will be different since the account balance is different
>
> **[3:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=185)** when it answers this method now because the previous one will not affect it. So let's change this one to BeforeEach, and then also change this one to AfterEach, and adjust the code before we run it again. So now, we have the bank account is 500. When we withdraw, it's 200 left. And then, if we deposit, this should become 1,000, like this. Okay, I'm going to be running this code again. And the problem right now is that it's static, and we don't need it for BeforeEach and AfterEach. Let me remove this and then run them all again. And as you can see, they're passing. We get Hi, Bye, and then, for the next test, again, we get Hi, Bye. Now, there's a way to go around these static ones for BeforeAll and AfterAll. So let me just change these back. And right now, there is a problem because these would have to be static. Let me show you. If I run it, it is going to be complaining. So I'm going to run this, and we will get a nice exception, and our tests will get ignored. But we can actually modify our class a little bit. By adding on top of our BankAccountBeforeAndAfterTest, we can add the TestInstance, and then we can change the lifecycle. And if we change this to Lifecycle.PER_CLASS, it no longer needs to be static for it to run.
>
> **[4:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=281)** So let me run it again, and you will see that, right now, we can use the BeforeAll and AfterAll without static. The reason now that our test deposit is failing is clearly because our bank account is again static and will only get created once, and it will be influenced after our first method, and it won't be changed afterwards. So this one has to go back to 700, and then it will succeed again. So let me run this again. And as you can see, it's passing now.

> [!info]- Semantic Content
>
> **Code Identifiers:** preptest (1), bankaccount (1), endtest (1)
> **CLI Commands:** make (1)
> **Env Vars:** per_class (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Custom messages and reports](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=0)** - [Instructor] All right, let's talk about options for creating custom messages and reports. First of all, we have seen display name already. Second, we saw that we could add a custom message as a third argument for assertions. And what we'll also see, and this is new, is the Surefire plugin that we can use. So first of all, we have seen display name already. With the annotation "@DisplayName", we could add a custom message to our report. And what we also saw was that we could add a third argument to assertEquals. So, for example, here, we could specify and insert a custom message, for example, "Unexpected value, expected 900". Clearly, this is not going to be very informative. This was what the test would also be saying, but in order to get this message on the screen, we have to make sure that the test is going to fit. Let me run this again. And if I scroll down a bit, you can see here, our custom message, "Unexpected value, expected 900". Let me remove this message again, because we have seen it already, anyways... So, at this point we're only getting the reports in our console, and clearly it would be nice to store this as a report. We are going to generate reports that will be stored using the Surefire plugin. This is a very easy to configure plugin, but we'll just have to update our pom a bit. So, let's go to our pom, and we're going to have to go ahead
>
> **[1:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=97)** and make some modifications. So, we're going to make sure that we are having the latest version of [[Java]]. And then, in here, I'm going to be adding a "build" section. So I'm going to create "build", here, and in the build, I'm going to specify a number of plugins that I will be using. And in this case, I want to be using the Maven Surefire plugin, so let me create that... And it has the artifactId of "maven-surefire-plugin", there it is. And I want to specify the version, as well, and I'm going to be using the version 2.22.2. And then, I want to specify one more plugin, and it's very similar, so I'll copy-paste it, but this is the Maven Failsafe plugin, and it's the same version it should be having. Yes. All right. So, this is actually all that we need to do. We don't need to go ahead and adjust our code, but you might wonder how we can get it to generate these reports, because if I'm just going to run it, it won't happen. Well, what I can do, I can move over to the terminal, here, and in here, I can just specify the command "mvn", Maven, and then, in here, I'm just going to say "surefire-report", go ahead and make a report for me. Run this in the terminal, and as you can see, it's working for us, and it's finished.
>
> **[3:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=192)** It has built the report, and it will generate these reports in the target folder, so let me show you... Here is the target folder. And in here, it will have the Surefire reports folder, and it has a couple of reports, and many of these are text files, let me show you them. So, as an example, it's showing that one of them has failed, what happened exactly, but what might be even nicer to see, is we also have a very nicely formatted one, and that's in the "site" folder in target, so it's this one, over here. And let me go ahead and open this in the browser... And here you can see the report. It is nicely formatted, and it's way more readable to non-tech people, because this has nice tables knit, instead of looking more like some sort of lock file. We can see the success rates, for example, we have three errors, two failures, and we can see the time it took. We have more information here on old tests we have done, and we have a bunch of test cases, and this report's looking much nicer already. You can go ahead and customize this even further, but for now I would say that's beyond the scope of this course, because that will just be plain formatting that you'd have to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **CLI Commands:** make (4), mvn (1)
> **Analogies:** for example (3)
> **Code Identifiers:** assertequals (1), artifactid (1)
> **Versions:** version 2 (1), 22.2 (1)
> **Tools:** terminal (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is a  (1)

#### [Conditional test execution](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=0)** - [Instructor] We can have conditions for running our tests. For example, only run a certain version of a test on a certain operating system or for a specific [[Java]] Runtime Environment. The same thing we could do for system properties. Of course we could build if statements, checking for system properties inside our test, but that would look horrible. So the J-unit answer, you might guess it, is more annotations. We're going to have a look at a few of these conditions. Before we do so, I'd like to point out that this is not generally considered a good practice. It makes tests more complicated than they probably should be. However, there can be situations in which this is unavoidable. So let's have a look at how to do this. Here's the test class that I prepared. It's called BankAccountConditionalTest. And right now, it's containing four methods, but these methods, they don't have any content and they're not tests just yet. If we look at this first test, it's called testMac. And actually, I want this test to only run on operating systems of Mac versions. So I'm on a MacBook. So this test, it should run on my machine. So I'm going to say EnabledOnOs, and in here, I can specify an array with all the OSs it should be enabled on. I'm going to be selecting MAC. And I'm going to do something very similar for [[Windows]], but this time it should be enabled on Windows only. So if I go ahead and I run this class right now, it has two tests in there and the Mac one should run and the Windows one should not.
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=93)** So let's have a look at what's happening. And as you can see, the one testMac is running. And it has Windows, it gets ignored. We can do a very similar thing for the Java Runtime Environment. I could, for example, say that it should only be allowed on Java Runtime Environment 16. So let me do that. I can say EnabledOnJre, this one. And in here, I can then specify on what Java Runtime Environment it should all be running. And for now, I'm just going to go for 16, import it. I can specify multiple ones and I'm using Java 16, so this should work. And if I run this one, you'll see that it will just run and also pass. But what I could also do is instead of enabled, I could also say, well, is disabled in this specific Java Runtime Environment. And if I run this one right now, you will see that it gets ignored. So let's see what happens if we use the DisabledOnJre. And in here, I should just specify the range that is not allowed, and I'm going to be selecting JAVA_16 here. And then I'm going to be running all the methods in the class and we'll see what's going to happen. And as you can see, the testJRE,
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=190)** testing for Java 16, it's running and so is the one for Mac. But one for Windows and not Java 16, they are not running. We can also check for system and environments variables using these annotations, The @EnabledIf system property, and you just specify the name of the property and its value, similar for DisabledIf system property and EnabledIf environment variable named and that matches something. So this is how you can check for system properties and environment variables. These are so similar to the others. They'll just check the condition, and if the condition is true, the test will run. If the condition is false, the test won't run and it will get ignored. We can even use all this annotation we have seen to create custom annotations. And that is because all these annotations actually have scope level annotation as well. So this way you could create combined annotations. Just one final note, you may run into the annotations EnabledIf and DisabledIf. These look very pretty, but don't use them because they are deprecated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[Windows]] (5)
> **Code Identifiers:** testmac (2), testjre (1)
> **Versions:** java 16 (3)
> **Analogies:** for example (2), similar to (1)
> **Env Vars:** mac (1), java_16 (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Disabling unit tests](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=0)** - [Instructor] One more thing I'd like to show you, is how to temporarily, or actually, also permanently disable a test. And we can disable tests using, this might grow old by now, but annotations. The disabled annotation, it can be used to disable a test. Let's move over to intelligent and demonstrate it using the code of one our previous classes. So I've prepared a class here and the school bank account disabled test, and I've copied the code from our bank account AI test in here. And right now, if I run this, you'll see that our test will simply pass. I'm going to add the @disabled annotation to our test and watch what will happen now. If I'm going to run this test, the test simply won't run because it is disabled. It also says so, it says public void bank account disabled test is at disabled. We could still do some improving here, though because right now we disabled it, but it would be even better to provide chain with the reason, because this reason will also appear in the test report. And we can add this as an argument or disabled annotation. So for example, temporarily disabled due to maintenance. All right, so if I run this one once more, you'll actually see sensible methods on why it is disabled right now. Drag this up a bit and you see it temporarily disabled, due to maintenance. This is how easy it is to temporarily disable a test.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=95)** You simply add the @disabled annotation to it. And this annotation is just like all the other ones we've seen from the org.[[JUnit]].jupiter.api.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (1)
> **Analogies:** for example (1), just like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Refactoring](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=0)** - [Instructor] I'm going to refactor the code so that I don't need the initialization in both the methods as the first line. The first thing I'm going to do is I'm going to add the calculator as a property of our test class.
>
> **[0:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=17)** Then I'm going to annotate the setup @BeforeEach, but please mind, in order to use BeforeEach, I have to go ahead and add an import.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=36)** Inside my for each, I'm going to initialize the calculator.
>
> **[0:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=46)** And I'm going to remove this initialization from both the methods. Now, I go ahead and test my code, and as you can see, it is correct, and I have correctly refactored this code.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (2), setup (1)
> **Speakers:** - [instructor] (1)


### 4. Quick Peek at Next Steps

[↑ Back to Table of Contents](#table-of-contents)

#### [How to make code ready for unit testing](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=0)** - [Instructor] In order to start with unit tests, the code that needs to be tested will have to be testable, so to say. So, what to do to get our code testable. Well, testable code has a few qualities. First of all, we want our unit tests to be testing what we think we are testing. And if we are testing really big chunks of code, bugs might slip between our hands or we will get a failed test. But we still have a lot of debugging to do once we get the failed tests, since we're testing such a used unit. Secondly, it's loosely coupled and has high cohesion. This is one of the famous clean code principles, and it means chunks of codes. It'd be methods, it'd be classes. They should have as few dependencies on each other as possible. Because when this is the case, changes to a certain place might break the functionality of code at other places. But what we really want to be testing is the unit that we are testing. And one of the ways to do this is to work with [[Dependency Injection]]. Another way to keep our code loosely coupled is to make sure a piece of code only has one responsibility. This is the famous single responsibility principle. By having only one piece of responsibility, it's clear what we should be testing, namely, this said responsibility. And a bit more on high cohesion, high cohesion deals with the organization of the code. It means that code that belongs together should be closely placed together. So it's all about structuring your code in a logical way. This will increase the maintainability and we can test our code in the same test class, because that will make sense based on the code structure. This way, we can also organize our tests accordingly.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=96)** Writing code this is well testable is not necessarily easy. Actually, it is the first test to our code. If a code is easy to test, this is generally an indication that we have designed and organized our code well, which also has benefits for maintainability and readability. Writing testable code will already increase the quality of the code, whereas when code is hard to test, this is an indication, I mean, both are not guarantees, mainly indications of the code. It generally is an indication that we are having bad code. So when code is easy to test, it's a good indication that we have written nicely structured, logical code, and when it's hard to test, it might actually be the case that we have written bad code. Clearly this doesn't always apply. But let's move over to IntelliJ and have a look at a bad example. So I have prepared this horrible piece of code. It's a class called TestableCode, or not so testable would have been a better name, but we're going to improve it. And it's containing two static strings and one attribute greeting. We are having one method in it and it's called greetUser, and it's quite a lengthy method. What we're doing in this method is we are grabbing the current local date time, and then we're going to see what hour it is, and depending on the hour, we're going to say good night, good morning, good afternoon, et cetera. Then in that logic, we are having a bunch of codes you can see there from line 15 to line 24, and it's been repeated for every time of the day. And it's going to look through the lists,
>
> **[3:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=188)** that static lists that are up, and it's going to see what our name is in either one of the list or in both of the lists or none of the lists, and it's going to adjust the message accordingly. And it's doing this every time again for the hour, and then it's going to check. So it's actually happening four times in our class and it's an exact copy, so we have the same code in line 28 up until the line 38, and then again at line 41 up until line 50 and so on. So this code is generating a greeting and is returning this greeting, and it can be called from somewhere to great a user, for example. Well, this looks really messy and you might already have some indication of how we could be improving this, but let's have a look at our testable code test class to see how I test this code. So here we have the test class and there are a few things happening in there. I'm testing the name on one list, on both lists and on none of the lists. And I'm also testing the dayPart. And in order to be testing this dayPart, I actually have to copy, or at least somehow copy a part of the implementation code, because I am having a problem with the local daytime now that's being generated inside the method, so I'll have to duplicate it here and hope that when I'm testing, it's not going to switch from one day part to the other just afterwards, because then my test will fail. If I would not have this in there, my test would only succeed on a certain part of the day, so that would probably be even worse.
>
> **[4:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=282)** And my assertions are actually all assert throughs, and I'm just checking whether the string is containing a certain piece to make sure that the right string is being returned to me. So let me run all these tests, and as you will see, these tests are all passing. Very good. So based on our tests, we should probably conclude that our code is doing what we would expect it to be doing. But now it's so happens to be that this code is somewhere live in production. Luckily it's not really low in production and we're getting some complaints of weird greetings and we might feel, hmm, but all our units tests are succeeding. How is that? Well from that, we can conclude that our unit tests are not testing everything and that they're letting failures through. So let's go ahead and debug this a bit so that we can see what's going on. Or actually instead of debugging, I'm just going to turn on a system.out.println before we return a greeting. So I'm going to be turning this one on and then let's just re-run the test again and see what the greeting is. And on our screen now, we already see a really weird greeting and we see that all of them have null in front of it. Why is this you may wonder? Well, this is one of the quirky things of [[Java]] that's fooling us over here, because we have a public string in our class. So this is a attribute of the TestableCode class, and we did not initialize it, which means that Java's going to default it to null. And then the funny thing with strings is if you're going to do plus equals on a null string, it's going to concatenate null with whatever you are attaching to this. And our test did not catch this,
>
> **[6:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=375)** and that is because the way we structured your class, we could not actually evaluate the full outcome, because it was too unsure and too dependent on too many things. So we could clearly fix this full problem by just adding this to our class, or let's at least do this, because this will solve the problems, since now it's not set to null between an empty string, so we won't get a null prefix to a string, but still this is not solving the problem of our bad testable code. So let's have a look at how we could improve this testable code class. So the first thing I mentioned already is that we are really having a copy of a certain code snippet, four times even. And it's the part where it's going to see whether it's in one of the lists. It makes a lot more sense to split this up in two separate methods. So I'm going to split up this method and I'm going to create two methods. One of these methods is going to say the greeting user part, and one of them is going to say the good night, good morning, et cetera, part. So let's make one here to greet the user. And in order to greet the user, we need the name of the user. And we're going to change this one to the day part, and then we no longer will need the name inside this method, so I'm going to remove it from here. I'm going to be copying this piece of code since this is looking through the list and I'm going to be moving it up to this method here. And I'm going to not use the greeting from our class, but I'm actually just going to be using a local variable here,
>
> **[7:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=468)** so I'm just going to say string greetUser equals empty string, and then I'm going to be- I could have left greeting clearly, but I don't want it to look too confusing, so I'm changing this. And then when this is done, I'm going to be returning greetUser like this. So let's clean it up a bit more. And so this logic is now inside one method, and I can remove it from this one. So this is actually just going to leave us with the dayPart. Let's get rid of this one. I can remove this one. And there we go. And then in here, I'm also going to create a local variable string. So I'm going to say string creates greetDay is fine.
>
> **[8:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=523)** And I'm going to, wait, let's call it greetDayPart, so that we don't get confused with methods. There we go. And then I'm going to return the greetDayPart as well. This can go. All right, so now we are having two parts of our string. We are having the day and we split it up with the user part. And our class actually got a whole lot shorter, so that's a great thing already. And we can remove the attributes from here. So we're just going to have the colon be responsible for calling both methods and concatenating the string. We could also have two attributes here now, so a greetUser attribute and a greetDay attribute and then set them both and even have methods returning the combination of these two, but let's not go there for now, because this is actually already allowing us to write a much better test. So let's go back to our TestableCode test, since this one is very broken right now. So we fixed a lot of problems already. So in here, right now, when we are testing the special name greetings, we can actually check whether it is containing VIP, but we could also just make the full check. So instead of the assertTrue, I'm going to go ahead and use an assertEquals here. And I could clearly do it directly in there, but I find that a bit ugly, so I'm going to be copy-pasting it to this outcome string. So the outcome, it should be this string. Let's replace the name with Noah, since that's our name.
>
> **[10:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=616)** There we go. And our assertEquals is going to check for this outcome. And then it's just going to call tc.greatUser(name), like this. And import this, and if I run this, you will see that this test is going to pass. So I'm going to do something similar for the next one. So it's, I know you Tess, you're even on our VIP list, like this and let's run it to see if this is working. Yes. And then do a similar thing for this one. So for this one, we are in a don't know option, which is simply going to be returning stranger. So let me change this back to the stranger like this, and then this should work as well. And then this one is actually more interesting and we could write even more tests for it, but I'm not going to do this. What is really bad about this piece of code is that we are copying part of the implementation logic in our test. If you have the need to do this, this is generally a code smell, something is wrong with your code, that means. And in order to improve this, we actually need to change our implementation code. And what we could do to improve it by a lot already is instead of using this one here, using it as a parameter. So instead of just grabbing current time, we're only going to be sending in a parameter. And this is really a huge improvement improvement because right now we have code that is testable. We can send the daytime in, and it will be always returning the same result
>
> **[11:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=709)** because before this, our code wasn't deterministic, so to say, and therefore our test couldn't be deterministic either. And deterministic pretty much only means that it has to be stable so that the same outcome is coming out of the code and out of the test every time you run it. So at this point, I don't need all of this anymore, which is great. And I can simply move on to changing this into, well, let's just remove this for now. And in here, I'm going to say LocalDateTime.of, and then I'm just going to be creating a local daytime. Let's just start with the year, let's grab the current year, 2021, let's grab the current month, which is eight, and grab the day, which is four. Well, let's just give it hours 13 and minutes 15. So this should be returning good afternoon, since we are in the afternoon right now. So I'm going to add our string outcome here. I'm going to just say, good afternoon comma. And then in here, I'm going to say assertEquals, like this, and then outcome is what I expect. And tc.greetDay is what I would want to call, and I'm going to send in our dateTime here. And I'm going to run this and see if this is working correctly. And yes, it is. Clearly, I could also add a test now to test the evening, the morning, et cetera, but for now I think this is demonstrating
>
> **[13:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=804)** the purpose of this exercise. So what did we do? We improved our TestableCode class by a lot. It's still not perfect, but it has been improved by a lot. And as a bonus, it became more maintainable and better readable as well. And as an extra bonus, our test became a whole lot more reliable. And this is why it's very important that before you start [[Unit Testing]], you're going to go and have a very critical look at your code to determine whether your code is actually testable in the state as is or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Dependency Injection]] (1), [[Unit Testing]] (1)
> **Code Identifiers:** greetuser (4), daypart (3), greetday (3), assertequals (3), greetdaypart (2)
> **CLI Commands:** make (5), find (1)
> **Definitions:** means that (2), is an  (2), is a  (1)
> **Env Vars:** vip (2)
> **Cross-References:** go back to (1)
> **Tools:** intellij (1)
> **Analogies:** for example (1)

#### [Best practices](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=0)** - [Instructor] You've just seen how to make sure your code's successful. Let's go over some best practices for writing the tests. The good news is that most of these best practices revolve around making things not too complicated. The first thing to do is to keep your unit tests as simple as possible. And just as for other code, don't make the unit test dependent on other tests because then when something goes wrong, you don't really know what is going wrong and what is actually the code that you're testing or some sort of the dependency that went wrong. What also really helps is to give your test clear namings and stick to a naming convention. This will make the code more predictable and easier to read. Another way to keep your tests simple is to aim for a low-cyclomatic complexity. Cyclomatic complexity are the different execution paths in the code. So for example, a simple if statement has two paths, one for a true condition and one for a false condition. So, this will give it a cyclomatic complexity of two. There are two code paths. Again, if you are having a high-cyclomatic complexity, it's going to be hard to determine why your test fails as sometimes even finding out if you're actually test is going to be hard already. Tests should be simple, and this means that they shouldn't contain copies of the actual implementation as we just saw in the previous video. Multiple good reasons for this. The first one is if there's a problem in the implementation, this won't be supported by your test since the implementation is copied over there. And the second one is that when the implementation changes and goes ahead and break stuff, this won't be reflected by the test, since this one was copying the implementation. And the next step is to make sure
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=93)** that your tests are deterministic. This means that they do the same thing every time you run them. So if they fail the first time, they'll fail the second time and the hundredth time. If they pass the first time, they'll pass the millionth time. That is if the code that's being tested didn't change in the meantime. In order to achieve this, your test should be loosely coupled. They shouldn't depend on external code that is not subject to the test, they shouldn't depend on other test cases, or for example, the environment values or global state for the application. In the next clip, we'll learn about the basics of Mockito, which is a great way to not depend on external dependencies, but use test doubles instead.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Definitions:** means that (2), is a  (1)
> **Cross-References:** previous video (1), in the next (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Mockito](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=0)** - [Instructor] Whenever you are using any framework, you'll often find yourself using common libraries that go well with it. For [[Unit Testing]], you really want to minimize the dependencies. And as we just saw, the fact is, that we often can't get around needing an external object. This is the point where it's time to meet the Mockito library. Mockito is a testing library that helps for stubbing and mocking objects. "Mocking" means that we're going to create an isolated version of the object that we can influence, rather than the real one. This will help us to keep our dependencies to a minimum, and isolate our test to be truly testing the simple unit. Let's move over to IntelliJ, and look at the simple Mockito example. Let's configure a project to be used in Mockito. You'll have to add the following dependencies to your pom. So the first one is the "org.mockito" groupId, and then the artifactId, "mockito-[[JUnit]]-jupiter". Just go ahead and use the latest version. Then the second one is the groupId, "org.mockito", and the artifactId, "mockito-core". And then again, go ahead and use the latest version. Make sure to give both the scope, "test", to them, as well. Now, let's create a class for this. We're going to use the "calculate" one from the very beginning, so I'm going to add a class to our tests, and we're going to be testing the "CalculateMethods" class. So I'm going to be calling this "CalculateMethodsMockitoTest"... There we go. And we should enable Mockito by adding the following ExtendWith to our class. In here, I'm going to be using the "MockitoExtension.class".
>
> **[1:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=97)** If you have experience with Mockito before, right now, we don't need to specify a runner, and we don't need to enter the mocks explicitly. We can simply start adding mocks to it. It's actually very easy. So, for example, in order to test or calculate methods, we need an object "CalculateMethods", and I'm not going to be initializing it, I'm just going to add "@Mock" on top. So, right now, I have created the mock for the CalculateMethods object, and we will then have to say how our mock is going to behave. It will override functionality. Therefore, we cannot use price, fields and methods just like this. This is where you would need something like Bio Mock, or write your own reflection code, if you'd like. Just know for now, that it is possible to test private methods if you must. Let's specify what needs to happen when we call our defined methods, and in order to do so, I'm going to create a method that you'd run before our tests. So I'm going to go ahead and call this "public void setupMocks", or in this case, it's actually only one mock. And I'm going to say "Mockito.when", and in here, I'll have to specify what needs to happen when I'm doing a certain action. So, I'm going to say, when I'm calling calculateMethods, divide with the following parameters, 6,3. Well, and then I'm going to say "thenReturn", so it knows what's the return when I'm calling this, I say "thenReturn", "2.0", since this is the fully end results.
>
> **[3:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=193)** I'm going to go ahead and enter this in the imports Mockito... So now I've said that whenever the five methods being called with parameters 6 and 3, we're going to return 2.0. I'll have to make sure these are run before the test, and I'll just add BeforeEach, so it does before every test, and it knows now how it should behave. We can now proceed and just use it in our tests, like this. So I'm just going to go ahead and create a simple "public void testDivide" method, like this. And, in here, I'm going to say "assertEquals", and I expect the outcome to be 2.0, whenever I'm going to call the calculateMethods.divide with the values 6 and 3, like this. And I'll import assertEquals. There we go. If I run this test, it will pass like it used to. So... Let's make it a runnable test, and I'm going to run it, and this can be very useful in many situations. For example, when you want to control what an API call should return for testing purposes. There's actually a lot more that can be done with Mockito, and that Mockito can do for you, but that's beyond the scope of this course, but it's definitely a next step worth taking, if you want to get more proficient writing unit tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (1), [[JUnit]] (1)
> **Code Identifiers:** groupid (2), artifactid (2), calculatemethods (2), thenreturn (2), assertequals (2)
> **CLI Commands:** make (3), find (1)
> **Versions:** 2.0 (3)
> **Analogies:** for example (2), just like (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** api (1)
> **Tools:** intellij (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with JUnit](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=0)** - [Maaike Van Putten] At this point, you really know the basics of [[JUnit]] and you're ready to work with JUnit in a real environment. You might wonder, what would be good next steps for you to take. Well, here are some topics that you can really benefit from. The first one is the one we ended with; Mockito. Mockito is often used, and it's very common in corporate environments. Studying Mockito a bit more can really enhance your professional career. The same goes for PowerMock. PowerMock enables you, for example, to test private methods and it's very common in corporate environments as well. So I can definitely advise you to dive a bit into PowerMock as well. And then [[Java]] Spring testing is also a bit of a different topic. We have seen testing and we have seen JUnit but working with Java Spring, it makes things a bit different. So, really knowing what to do when you are working with Java Spring, how to test the controllers, how to test the services. This is really going to help you. And lastly, TDD: [[Test-Driven Development]]. It's a very good generic job to dive into a bit more as well. Many organizations are using TDD and you knowing exactly what this is and how it's going to help you, and benefit your organization, can be of great use in acquiring a new job or just moving forward in your career. There are some grate follow-up courses, for you to take. The first one, I would recommend is Practical Test Driven Development for Java Programmers. This course is really focusing on a Java Program, as it says so in the title, and it will really help you to level up your TDD for real life cases. And then we have to Java: Automated [[API Testing]] with [[Representational State Transfer (REST)|Rest]] Assured. This is really focusing on testing the API,
>
> **[1:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=92)** which is a different skill from what we have seen in this course. This is also definitely interesting to dive into. And lastly, the [[Programming Foundations]]: Test Driven Development. This is more of a generic topic. It doesn't really focus on Java Developers per se, but it will really help you to get a better understanding of test driven development. And lastly, let's connect. Here is my [[LinkedIn]] profile and would be really good, if you would reach out to me. Good luck with your journey and have fun testing with Junit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[JUnit]] (4), [[Test-Driven Development]] (1), [[API Testing]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** tdd (3), api (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [maaike (1)


## Instructor

- [[Maaike van Putten]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/java-testing-with-junit-revision-2021-2424511)

## Skills Covered

- Software Testing
- JUnit
- Java

## Path Context

### In [[Building Your Java Skills]]
← [[Java- Generic Classes]] | **3 of 6** | [[Complete Guide to Java Design Patterns- Creational, Behavioral, and Structural]] →

### In [[Getting Started with Software Testing]]
← [[International Software Testing Qualifications Board (ISTQB) 4.0+ Foundation Cert Prep]] | **11 of 12** | [[SQL for Testers]] →

## Appears In

- [[Building Your Java Skills]]
- [[Getting Started with Software Testing]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Software Testing- Planning Tests for Mobile]] — Software Testing

---

[↑ Back to top](#)