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
  - Building Your Java Skills
  - Getting Started with Software Testing
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/software-testing
  - skill/junit
  - skill/java
status: not-started
created: 2026-04-20
---

![Java: Testing with JUnit](https://media.licdn.com/dms/image/v2/D560DAQHciFIlwhPI0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1716233428910?e=2147483647&amp;v=beta&amp;t=JQGenIAFFeZoWTSjKt1MLIMkvphCkwABakw9VNbkcxg)

# Java: Testing with JUnit

> Unit testing is of crucial importance in developing stable applications. Java developers need to write unit tests, and JUnit is the main unit testing framework for Java. In this course, trainer and developer Maaike van Putten helps you learn to test your Java code effectively. Maaike explains what unit testing is and the advantages that it offers. She covers JUnit and shows you how to set it up an

> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963) | 2h 25m | Intermediate | 166K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Maaike van Putten]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/java-testing-with-junit-revision-2021-2424511)

## Skills Covered

- Software Testing
- JUnit
- Java

## Table of Contents

### Introduction

#### Create proper unit tests in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=0)** - [Instructor] Let's say you have an amazing application that's running well, but you'd like to make some changes to it.
>
> **[0:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=6)** Without techniques such as JUnit this would be a very dangerous thing to do.
>
> **[0:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=11)** Writing unit tests is very different from writing regular code.
>
> **[0:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=14)** We'll start with the heart of JUnit, annotations.
>
> **[0:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=17)** Then we'll move on to assertions.
>
> **[0:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=20)** We also dive into some more advanced topics such as (indistinct) and running test parallel.
>
> **[0:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=26)** We'll end this course with best practices for writing unit tests, and what would be good next steps to improve yourself even further.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=33)** I'm Maaike van Putten, and I'm a software developer and trainer.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=36)** JUnit and unit testing in general is really a must have skill for all software creators.
>
> **[0:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=42)** I'd like to help you to take your software development knowledge to the next level.
>
> **[0:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/create-proper-unit-tests-in-java?u=76281980&t=46)** So come join me in this LinkedIn learning course on JUnits.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### What should you know
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980&t=0)** - [Instructor] Before we get started with JUnit right away, let's first make sure that this course is for you.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980&t=5)** In order to be able to follow along, you'll have to be familiar with using IDEs and basic Java.
>
> **[0:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980&t=12)** If you are not familiar with the basics of Java yet, these course titles can really help you fix that.
>
> **[0:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980&t=17)** First, Learning Java, and also a really good one is the Java 11+ Essential Training and another great one for beginners is the Java Essential Training for students.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980&t=28)** If you're not familiar with Java, it would be good to first take one of these, you don't need to take all of them, and then come back here so you can level up your Java testing skills with JUnit.
>
> **[0:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-should-you-know?u=76281980&t=38)** If you have the Java basics down already, well, let's just get started, then.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Versions:** java 11 (1)
> **Speakers:** - [instructor] (1)

#### Unit testing and other types of testing
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=0)** - [Instructor] So, this course is about unit testing, but before we get started, it's good to be aware that there are many different kinds of testing.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=7)** So let's go over a few in this video.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=10)** So first of all, we have unit testing, and with unit testing we're testing small pieces of the code.
>
> **[0:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=16)** The smallest pieces possible, actually.
>
> **[0:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=18)** Well, this is great already, but it's not enough to get a good grasp of how the system is working and whether it's really behaving as you would expect it to behave.
>
> **[0:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=26)** So therefore, we also have system testing.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=28)** And with system testing we're testing a bigger part.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=31)** So for example, the complete API.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=33)** And we're also having integration testing.
>
> **[0:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=35)** And with integration testing, we are testing different parts and how they work together.
>
> **[0:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=39)** So to give an example of non-code failed integration testing, I was working at some place at some point and they would have automatic sliding doors that would respond to motion, and also a revolving door that would respond to motion.
>
> **[0:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=51)** Well, both doors, they were working perfectly well individual.
>
> **[0:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=54)** I mean, the sliding doors would open if you would walk towards them, and so would the revolving doors.
>
> **[0:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=59)** But the integration testing failed here because the revolving doors and the sliding doors, they would be triggering each other constantly.
>
> **[1:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=65)** So the system as a whole, it wasn't working well.
>
> **[1:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=68)** And this is a non-code example of failed integration test.
>
> **[1:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=71)** And you can imagine that something similar can be going on with two different systems.
>
> **[1:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=75)** So integration is there to avoid these things of go into production.
>
> **[1:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=79)** We also have acceptance testing.
>
> **[1:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=81)** And acceptance testing is where the end-user or possible end-users come in to see whether they are capable of using the software as intended.
>
> **[1:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=88)** And we also have performance testing to see whether the application's quick enough, for example.
>
> **[1:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=94)** Some more testing types.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=96)** We have regression testing, and this is actually where unit testing is of great use as well because regression testing is just testing everything again, whenever you make a small change, just to see if this small change didn't throw over any of the existing functionality.
>
> **[1:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=109)** So regression testing is pretty much all the automatic tests so far.
>
> **[1:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=113)** Another one we're having a security testing or sometimes called penetration testing.
>
> **[1:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=117)** Where we are we going to see whether we can actually spot weaknesses in the security of the system.
>
> **[2:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=122)** And another testing type is load testing to see whether the application can deal with huge loads of traffic at the same time.
>
> **[2:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=128)** And the last example I'd like to mention is end-to-end testing, where we're really testing the application as a whole.
>
> **[2:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=134)** And this can often be automated with tools such as Selenium and others.
>
> **[2:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/unit-testing-and-other-types-of-testing?u=76281980&t=139)** There's actually a whole lot more of testing types, but just so you know, the thing that you should take away from this is that unit testing alone is definitely necessary to have for your application, but unit testing only is not going to be enough to assure the stability and performance of your system.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), imagine (1), such as (1)
> **Code Keywords:** let (1), throw (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### TDD: Test-driven development
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=0)** - [Instructor] So let's talk about TDD for a second.
>
> **[0:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=4)** TDD stands for test-driven developments, and you hear this a lot.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=10)** And also it's very often in job vacancies and opportunities and recruiters might even ask you about this.
>
> **[0:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=16)** And the good news is it's not too special.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=19)** However, it is really good to be able to explain what test-driven development is so that you can actually apply this into your day-to-day coding whenever necessary.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=28)** So what's happening in TDD is the following.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=31)** Instead of starting with the implementation code, we actually write the test before we write implementation code.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=36)** So we started writing the unit test and this unit test, it should fail the first time, clearly because the implementation code has not been written yet, but this is really forcing the developer to think about requirements before they start on the implementation.
>
> **[0:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=49)** And there's also a voice that's being skipped due to time pressure.
>
> **[0:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=53)** So what you very often actually see in environments is that the implementation code is more important than the test, since the implementation is what actually provides the features.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=63)** And the importance of tests are often overlooked, especially by managers because they don't really get why we would need unit tests.
>
> **[1:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=69)** I mean, it's working already, and the long-term necessity to have unit tests is not always as clear.
>
> **[1:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=74)** So with test-driven development, we can avoid unit tests to be not written due to time pressure.
>
> **[1:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=79)** And the great thing here is also that bugs are spotted early.
>
> **[1:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=83)** Well, they're spotted very early, because you thought before you started writing your code really well about, well, what should it need before it starts to pass?
>
> **[1:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=91)** And this is how you write your test.
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=93)** So we start with writing a test, and this test, it must fail because if it succeeds already before you've written the implementation code, there's something wrong with your test.
>
> **[1:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=102)** Then what you do is you're going to write code that's going to make the test pass.
>
> **[1:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=106)** And then afterwards you're going to refactor this code a bit so that it's actually going to be good written code as well.
>
> **[1:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=113)** And actually, you just go ahead, you start writing a new failing test for the new feature you're going to be implementing.
>
> **[1:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=118)** So it's really reverting the process.
>
> **[2:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=120)** Whereas in the earlier days, we would start with writing implementation code, then write a test for it.
>
> **[2:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=124)** With TDD, this is really first, and there are some definite advantages to this.
>
> **[2:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=129)** As I just already explained, it forced you to think about what you're going to be writing, and you make sure that you don't skip the test.
>
> **[2:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=136)** So one last note about this is that often when they use TDD, it gets overlooked that you need more tests than just a unit test.
>
> **[2:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=143)** In order to properly test your application, you'll need to have system and integration tests in place as well.
>
> **[2:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/tdd-test-driven-development?u=76281980&t=149)** And probably even some other tests are necessary for your application to be properly tested, very reliable and doing what it should be doing at all times.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), pass (2), let (1)
> **Env Vars:** tdd (5)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Advantages of unit testing
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=0)** - [Instructor] So let's take a minute to have a look at the advantages of unit testing so that we can see what unit testing and JUnit in particular is going to be adding to our software.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=10)** Well, first of all, when unit testing, we're going to be validating the smallest units of software.
>
> **[0:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=15)** So we're going to really zoom in and see if this tiny pieces are doing what they should be doing.
>
> **[0:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=20)** And this will enable us to find bugs easy and early.
>
> **[0:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=23)** And this doesn't only apply for newly written code, but maybe even more so for code that has been written already and accidentally gets influenced by new code.
>
> **[0:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=32)** This way, with unit testing we can easily see whenever a new code is knocking over behavior that we are expecting.
>
> **[0:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=38)** And because of this on a long-term, even though unit testing does take a lot of time, it's going to save time and money because these bugs they're going to be spotted easy and early later on, and this will avoid real trouble on production.
>
> **[0:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=50)** And lastly, unit testing is really forcing the developers to write better and cleaner code, because if it's not well written code, it's actually going to be very hard to write unit tests for it.
>
> **[1:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=61)** But please keep in mind and I've already mentioned is only unit testing will not catch all the bugs.
>
> **[1:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=66)** So it's not enough.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/advantages-of-unit-testing?u=76281980&t=67)** It's definitely a necessary first step, but it can't be only testing effort that you're doing.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### What is JUnit?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=1)** So we have been talking about unit testing, other types of testing, but this course is about JUnit.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=7)** So you might wonder at this point, what is JUnit exactly?
>
> **[0:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=11)** Well, JUnit is a unit testing framework for Java, and this means that JUnit contains very many libraries and very many functions and the options for testing the smallest parts of pieces of Java code.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=24)** Junit is not really a standalone kind of thing, it's part of the xUnit series for all other sorts of languages as well.
>
> **[0:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=30)** So there's multiple versions of the unit series that can be used for testing the units of your code, but JUnit is for Java specifically.
>
> **[0:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=39)** So what we can do at JUnit is that we can start the automated unit testing very easily and how easily we'll find out very, very soon.
>
> **[0:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=47)** Also, JUnit is a must have for TDD using Java.
>
> **[0:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=51)** There are other options, but with JUnit life gets so much easier that it's fair to call it a must have.
>
> **[0:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/what-is-junit?u=76281980&t=57)** So let's no longer really wait and dive into starting with JUnit in our next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** xunit (1)
> **Env Vars:** tdd (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with JUnit

#### Quick example of a basic unit test
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=0)** - [Instructor] Let's start with something that should be finished halfway through this course but might looked like Java and magic now that we're just getting started.
>
> **[0:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=8)** We are first going to have a look at the simple Java class with one simple method that does dividing.
>
> **[0:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=14)** And then we're going to write a unit test for the happy path here.
>
> **[0:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=18)** We're just going to be dividing two positive numbers for this first example.
>
> **[0:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=22)** But, things are getting more interesting when we're going to be testing the unhappy path.
>
> **[0:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=27)** What happens if we expect an exception joke here?
>
> **[0:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=30)** Here's a very basic Java class called calculated methods and only contains three lines of code.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=36)** These few lines make up a simple method that takes two integers, divides them and then returns a double.
>
> **[0:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=43)** But, there's a lot of scenarios possible for these three lines, because you can insert many different types in here.
>
> **[0:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=49)** You could, for example, insert two positive numbers, two negative ones.
>
> **[0:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=53)** And what happens if you chose some zero or perhaps maximum values of integers in there?
>
> **[0:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=58)** There are lots of possibilities.
>
> **[1:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=60)** So let's see how we can write tests for some of these possibilities.
>
> **[1:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=64)** I have my project and J unit set up already.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=67)** Don't worry if you don't have it yet, because we're going to set it up in the next videos really soon.
>
> **[1:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=72)** Right.
>
> **[1:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=73)** So let's start off with adding a class in my test Java folder, and I'm going to be calling this class calculate methods test.
>
> **[1:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=82)** I'm ending this class name with tests because this way, I can easily see it's a test, but later we'll see that some tools and some frameworks libraries are also relying on a postfix test to recognize a test.
>
> **[1:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=97)** And in this test class, I'm going to create a property of type calculate methods, and I'm going to make it private.
>
> **[1:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=104)** And I'm going to create an instance of it as well.
>
> **[1:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=110)** And now I'm going to write a method that's going to be testing or divide methods in our calculate methods instance.
>
> **[1:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=116)** So I'm going to go ahead and type public void test divide and it doesn't take any parameters.
>
> **[2:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=123)** And then in here, I'm actually just going to use one special call, namely the assert equals call.
>
> **[2:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=131)** I do have to make an import for this from the ORC J unit Jupiter API package.
>
> **[2:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=139)** And in here, I'm going to say assert equals.
>
> **[2:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=142)** And the first arguments of assert equals is going to be what I expect the result to be.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=147)** And I'm going to expect the results be 10 because my actual value is going to be a hundred divided by 10.
>
> **[2:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=154)** So let's go ahead and call or divide methods with hundred and then 10.
>
> **[2:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=160)** Alright, so this is a test already, but it's not runnable right now.
>
> **[2:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=164)** This can be solved by ending the annotation add test on top.
>
> **[2:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=170)** As you can see this test, annotation is also coming from org, the chain that you observed that API.
>
> **[2:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=176)** And as soon as I finished typing this add test annotation, green icons appeared indicating that this is now a runnable method.
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=186)** So if we click on this green icon, we can see the test running and this one just going to give us a positive result.
>
> **[3:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=193)** As you can see in the lower left corner of the screen, we see these green ticks.
>
> **[3:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=198)** But, what do you think will happen if I say the expected outcome is 11 instead?
>
> **[3:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=204)** I'm good to run it again.
>
> **[3:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=205)** And please have your eyes on the lower left corner to see the results.
>
> **[3:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=210)** And as you can see, our test has failed and it says so in the middle or actually the right panel why.
>
> **[3:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=216)** It says expected 11, but actual 10.
>
> **[3:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=219)** So if the assertion is not matching with what it's expecting, the test is going to be failing.
>
> **[3:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=225)** This is how the assertions pretty much work.
>
> **[3:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=227)** They have an expected and an actual, and if they match, the test is passing and if they don't, the test is failing.
>
> **[3:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=233)** In this case, we get an assertion failed error there.
>
> **[3:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=236)** Let me change this back to 10 so our test is going to be passing again, the next time I'm running it.
>
> **[4:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=242)** But, we can test for much more than just dividing two positive numbers.
>
> **[4:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=246)** For example, we can also test for an exception to a cure because in some cases you would want an exception to a cure.
>
> **[4:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=252)** And this is the case, for example, when you are dividing by zero.
>
> **[4:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=255)** So let's go ahead and create a methods test divide by zero again, no arguments.
>
> **[4:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=264)** And in here this time, I'm going to be using the assert throws method.
>
> **[4:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=271)** And the first argument is going to be the exception I expected to throw, which is the arithmetic exception.
>
> **[4:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=278)** And the second argument is actually an executable and I'm going to be implementing an executable by having lumped the expression that takes no parameters, but it's doing something.
>
> **[4:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=288)** And in our case, it's actually just calling the divide methods.
>
> **[4:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=293)** And this time we're going to be dividing a hundred by zero.
>
> **[4:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=298)** So what this call is doing, it's going to check whether an exception gets thrown.
>
> **[5:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=302)** Again, in order to be able to run it, I will have to annotate it with test on top.
>
> **[5:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=308)** So let me run this.
>
> **[5:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=309)** And I shall see it's passing since it is throwing the arithmetic exception.
>
> **[5:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=315)** There is so much more you can do in J units.
>
> **[5:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=317)** Let's just clean this up a bit because right now we are initiating our calculate methods on top.
>
> **[5:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=322)** I think that's a bit ugly.
>
> **[5:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=324)** So instead let's do this before every test we are running.
>
> **[5:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=328)** We can do so using the, before each annotation.
>
> **[5:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=332)** And that goes on top of the methods.
>
> **[5:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=334)** Let's go ahead and call it in a test.
>
> **[5:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=337)** And then in our, init test, I'm just going to be initializing our calculate methods.
>
> **[5:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=343)** And this will run before every test.
>
> **[5:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=346)** So again, remove it from here.
>
> **[5:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=349)** And there's actually one other thing that's nice to do.
>
> **[5:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=352)** And it's also very common and that is to have a static import for this assertions class.
>
> **[6:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=361)** Because these assertions you'll use them so much.
>
> **[6:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=364)** That's actually a bit ugly to have it imported like this.
>
> **[6:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=366)** So let me make this a static import.
>
> **[6:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=371)** And then right now I can get rid of these assertions here, since it's a static import and it will just recognize the methods, like this.
>
> **[6:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=380)** All right, this looks a lot cleaner already to me.
>
> **[6:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=383)** Let's run it again.
>
> **[6:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=384)** And you can see it's doing the exact same thing.
>
> **[6:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=386)** This time, I'm going to be running the whole class, meaning that all the tests in the class are running.
>
> **[6:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=392)** All right, So this code has been cleaned up a bit and we've seen a few basic unit tests already.
>
> **[6:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/quick-example-of-a-basic-unit-test?u=76281980&t=398)** The rest of the videos in this chapter are all about setting up your environment, except for the last one in which we're going to be writing our first unit tests ourselves.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), assert (4), case, (3), this. (3), static (3)
> **CLI Commands:** make (4)
> **Env Vars:** api (2), orc (1)
> **Analogies:** for example (3)
> **Prerequisites:** getting started (1), set up (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Setting up JUnit for IntelliJ
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=0)** - In this clip, we're going to set up JUnit for IntelliJ.
>
> **[0:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=4)** We are assuming that you have your Java environment setup already.
>
> **[0:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=8)** If that's the case, it's very easy to add JUnit to your environment.
>
> **[0:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=12)** First, we're going to create a new project, we're going to add a Maven dependency to this project, and then we'll quickly test the setup.
>
> **[0:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=21)** Let's move over to IntelliJ.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=24)** So first we're going to create a new project and we're going to do so using Maven.
>
> **[0:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=29)** I'm going to click next.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=31)** And if it's prompting you for a group ID and an artifact ID, you can just fill it out.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=36)** It doesn't really matter what you put in there.
>
> **[0:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=38)** And I'm going to give our project a name.
>
> **[0:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=41)** And I'm going to name it, set up JUnit IntelliJ.
>
> **[0:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=48)** And now I'm going to click finish, and it's going to set up two projects for us.
>
> **[0:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=52)** Here, we can see the bump of a project.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=55)** And as I already mentioned, we'll have to adjust this bump in order to add JUnit to our project.
>
> **[1:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=62)** So I'm going to be creating a dependencies list.
>
> **[1:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=65)** And in here, I'm going to create the dependency I need.
>
> **[1:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=70)** And it's the org.junit.jupiter.
>
> **[1:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=73)** It's already completing it for me.
>
> **[1:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=75)** And well I don't need to engine actually, I'll just need the junit jupiter.
>
> **[1:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=82)** And the latest version right now is, I think 5.7.2.
>
> **[1:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=88)** But it's not unlikely that by the time you are writing this, there's actually a later version available already.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=95)** So let me show you how to check for the latest version.
>
> **[1:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=98)** We are going to go to [mvnrepository.com](https://mvnrepository.com).
>
> **[1:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=102)** And in here, I'm going to be looking for JUnit Jupiter.
>
> **[1:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=108)** And in this case, we need the third one, which is just the plain JUnit Jupiter.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=112)** And I'm going to click on it.
>
> **[1:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=114)** And as you can see, there is already a 5.8.0, but I don't want to use this version right now.
>
> **[2:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=120)** I want to go for this one.
>
> **[2:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=122)** I have that one ready, but if you have a later one that you'd like to use, you can just click on it and then copy the dependency here, and paste it inside your project.
>
> **[2:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=131)** You can also find the latest version in the JUnit docs.
>
> **[2:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=135)** So let me go to [junit.org](https://junit.org) and show you.
>
> **[2:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=138)** Here we have [junit.org](https://junit.org).
>
> **[2:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=140)** And in here, if we click on user guide, we actually find lots of documentation.
>
> **[2:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=145)** And what I'm looking for right now is in the appendix.
>
> **[2:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=150)** We want to have look at the dependency metadata, and then we want to click on this one.
>
> **[2:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=157)** And here we can see on top of the screen is the latest version in the junit docs is 5.7.2.
>
> **[2:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=164)** All right, enough digging into documentation.
>
> **[2:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=166)** Let's go back to our IntelliJ project.
>
> **[2:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=170)** I have added this dependency right now, but I did not update Mavin yet.
>
> **[2:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=174)** I could just click this floating one over here.
>
> **[2:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=177)** If it's not there, you can open this one, click download resources and then update your projects.
>
> **[3:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=185)** But for now, I'm just going to be clicking on this one because it's good enough.
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=190)** All right, let's test our set up.
>
> **[3:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=193)** I'm going to go to our test folder, and I'm going to be creating a, well a test test pretty much. (chuckling) So let's go call a test, test, since we're testing a test.
>
> **[3:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=203)** And in here, I'm going to be creating a very basic test.
>
> **[3:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=206)** I'll just call it the like void test like this.
>
> **[3:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=210)** It doesn't need any content actually.
>
> **[3:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=212)** I just want to see what a JUnit is running.
>
> **[3:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=214)** And I'll annotate it with tests.
>
> **[3:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=216)** And please mind that you are using the test annotation from org.junit.jupiter.api like this.
>
> **[3:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=222)** And now we should be able to run our tests.
>
> **[3:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=224)** In the lower left corner, we'll see green checks.
>
> **[3:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=228)** Yes!
>
> **[3:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=230)** And that's great.
>
> **[3:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=231)** We're all set to get started now.
>
> **[3:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=233)** It's time to write our first test in the Hello World JUnit video at the end of this chapter.
>
> **[3:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-intellij?u=76281980&t=239)** So please move on to the last video of this chapter to write our first JUnit test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (2), this. (2), this, (1)
> **UI Navigation:** click on (4), go to (3)
> **Prerequisites:** set up (4), setup (2)
> **Tools:** intellij (4)
> **URLs:** [junit.org](https://junit.org) (2), [mvnrepository.com](https://mvnrepository.com) (1)
> **Versions:** 5.7.2 (2), 5.8.0 (1)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1)

#### Setting up JUnit for VS Code
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=0)** - [Instructor] If Visual Studio Code is your go-to editor, this getting started video is for you.
>
> **[0:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=6)** I'm assuming you have your Java environment set up already and if that's indeed the case, it's very easy to add JUnit to your environment.
>
> **[0:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=13)** Here are the steps.
>
> **[0:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=14)** We'll first install some extensions or maybe you have them already.
>
> **[0:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=18)** Then we'll create a new project.
>
> **[0:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=21)** We'll add dependency, and we test our setup.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=24)** That's all.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=24)** This is how easy it is to add JUnit to Visual Studio Code.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=28)** Let's move over to Visual Studio Code.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=31)** In order to run tests in Visual Studio Code, we'll have to install the Java Test Runner extension.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=36)** So I'm going to head over to the Extension tab, and I'm going to be looking for Java Test Runner.
>
> **[0:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=43)** And as you can see, I have it installed already.
>
> **[0:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=47)** If you didn't install it yet, please click on Install in this screen.
>
> **[0:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=51)** And after installing, I would recommend to change the setting.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=55)** So I'm going to head over to Settings, and I'm going to click on the Extensions settings here, and I'm going to select Java Test Runner.
>
> **[1:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=65)** And in here, if I scroll down a little bit, we have the Show After Execution option.
>
> **[1:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=71)** By default, it's on failure, so it won't show the positive test results.
>
> **[1:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=76)** And for the purpose of this course, it's actually quite nice to always see the test reports, so this is why I'm advising you to select always here instead.
>
> **[1:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=84)** All right, so that's that.
>
> **[1:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=86)** I'm going to show a few more extensions you'll need.
>
> **[1:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=89)** So this Java Test Runner, it will enable us to run JUnit for JUnit 5 and test and G test.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=95)** But we'll need more for that.
>
> **[1:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=97)** In order to be able to run these tests, we'll also need the Language Support for Java by Red Hat, and the Debugger for Java as well.
>
> **[1:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=105)** Here is the Debugger for Java.
>
> **[1:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=107)** You can see I have it installed as well.
>
> **[1:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=109)** And you also need the Language Support for Java.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=112)** I would recommend that if you didn't install any of these, you just go ahead and grab the Java Extension pack.
>
> **[1:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=118)** These are the most important extensions in one, and they'll enable you to follow along with this tutorial, and manage, and work your way through this course.
>
> **[2:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=126)** The one that I'll be using right now is the Project Manager for Java, and I'm going to use it to create a new project.
>
> **[2:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=133)** I'm going to head over to our Explorer window and I'm going to click on Create Java Project.
>
> **[2:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=140)** And I want to create it from a Maven archetype.
>
> **[2:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=144)** And I'll just select the Quick Start here.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=147)** Grab the latest version and then I'll have to insert a group ID.
>
> **[2:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=150)** I'm fine with this default group ID but I do want to have a specific name.
>
> **[2:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=156)** So I'm going to be calling this setup-junit for visualstudiocode.
>
> **[2:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=162)** Like this.
>
> **[2:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=163)** And then I'm going to hit Enter.
>
> **[2:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=166)** Now I'll have to select the destination folder.
>
> **[2:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=168)** So I'm going to select the right folder where I want to place it.
>
> **[2:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=171)** And I'm going to be selecting this folder.
>
> **[2:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=175)** And as you can see, it's building the project now.
>
> **[2:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=179)** Now it's pausing for me to define the value for the property of version, and I'm fine with this default one, so I'm just going to hit Enter.
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=186)** And it's going to ask me to confirm the settings, and I'm just going to say yes and hit Enter again.
>
> **[3:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=192)** And our project is done.
>
> **[3:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=194)** Let's open the project.
>
> **[3:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=195)** It's prompting for me now in the right lower corner, so I'm just going to select Open.
>
> **[3:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=200)** If it's not prompting for you, you might as well go ahead, navigate to your folder and open it from there.
>
> **[3:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=204)** So I'll just click on open here.
>
> **[3:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=207)** We have the default Maven structure here already.
>
> **[3:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=210)** Let me show you.
>
> **[3:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=211)** We have a src folder, within there, a main and a test.
>
> **[3:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=214)** And we actually have a test in there already as well.
>
> **[3:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=218)** But this is not JUnit 5, this is JUnit 4 still.
>
> **[3:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=222)** So let's go ahead and update our extension.
>
> **[3:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=224)** So I'm going to move over to our pom, and I'm going to be deleting this alt JUnit dependency over here.
>
> **[3:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=231)** And I'm going to be adding the dependency for JUnit 5.
>
> **[3:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=235)** There's multiple ways to do it.
>
> **[3:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=236)** You can go ahead to Maven over here, then just click on the dependencies and hit the plus icon.
>
> **[4:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=244)** And in here, you can look for JUnit Jupiter because this is the one we'll need for JUnit 5.
>
> **[4:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=250)** This is actually a bit deceiving because the JUnit Jupiter you're seeing as the second one here, it's from Mockito, and I want one from org.junit.jupiter, which would be this one.
>
> **[4:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=260)** And I also want the scope to be test.
>
> **[4:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=267)** Chances are that you'll be having a later version of JUnit 5 already but that shouldn't really matter for following along with this course.
>
> **[4:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=276)** All right, let's move back to our test.
>
> **[4:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=278)** And in this test, you can see that it's not longer recognizing these imports.
>
> **[4:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=284)** And what I need to do, I need to replace these imports with our new ones because the test annotation that we are using, on line 15 we are using it, it's no longer coming from this package.
>
> **[4:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=295)** It's now coming from org.junit.jupiter.api.Test.
>
> **[5:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=303)** There we go.
>
> **[5:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=303)** So as you can see, this one is fine now but we still have a problem with our assertTrue.
>
> **[5:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=308)** This one is now coming from, let me just remove this, from org.junit.jupiter.api.Assertions and then let me just grab all of them.
>
> **[5:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=321)** I think that's easiest.
>
> **[5:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=323)** And I'll show you this test.
>
> **[5:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=324)** It's very, very basic.
>
> **[5:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=326)** It's just asserting true, true.
>
> **[5:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=328)** So it will always pass if your setup is correct, that is.
>
> **[5:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=331)** So I'm going to be running this test.
>
> **[5:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=334)** And as you can see, our test is passing.
>
> **[5:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=339)** So that's great.
>
> **[5:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=340)** We're all set now.
>
> **[5:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=341)** And it's time to write our first real test in our Hello, World JUnit video at the end of this chapter.
>
> **[5:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-vs-code?u=76281980&t=348)** So please move on to the last video of this chapter to write your first JUnit test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (1), default, (1), this. (1), from, (1)
> **Prerequisites:** install (5), setup (3), getting started (1), assuming you have (1), set up (1)
> **UI Navigation:** click on (5), select the (3), scroll down (1), open the (1), navigate to (1)
> **Tools:** visual studio (4)
> **Code Identifiers:** asserttrue (1)
> **Speakers:** - [instructor] (1)

#### Setting up JUnit for Eclipse
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=0)** - [Instructor] In this video, we're going to set up JUnit for Eclipse.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=5)** I'm assuming that you have Eclipse and your Java SDK installed already.
>
> **[0:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=9)** If that's the case, it's actually not too hard.
>
> **[0:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=11)** We're just going to be creating a new Maven project, add drive dependencies and then test our setup.
>
> **[0:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=18)** Let's move over to Eclipse.
>
> **[0:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=21)** I'm going to go over to File and then create new project.
>
> **[0:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=27)** And I'm going to choose a Maven project and I'm going to click Next.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=33)** And these settings are fine for me.
>
> **[0:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=34)** So I'm going to click Next again.
>
> **[0:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=37)** And then in here, I actually want to use the Maven Archetype Quickstart, and I want to use the one from Apache, and then I'm going to click next again.
>
> **[0:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=48)** And this default groupId is fine for me, com.example, and the artifactId is going to be set up JUnit Eclipse like this.
>
> **[0:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=58)** And then I'm going to click Finish and my project's being built.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=63)** Let's open it up so we can see what has happened.
>
> **[1:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=66)** We have a source folder with the Maven structure in there.
>
> **[1:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=70)** We have main and a test and they both actually contain our appfile and also a dummy apptest file.
>
> **[1:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=79)** But this test, it's actually JUnit, but it's old version of JUnit.
>
> **[1:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=84)** So let's move over to our pom and change that.
>
> **[1:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=89)** Also, I want to be using Java 16, so I'm good.
>
> **[1:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=92)** Change this to 16 as well.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=95)** And in here I'm going to select org.junit.jupiter as the groupId and junit-jupiter as our artifactId and currently the version I should be using is 5.7.2.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=112)** So let me go ahead and change it as well.
>
> **[1:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=114)** Scope test is still fine.
>
> **[1:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=117)** So I'm going to save this file and I'm going to quickly update the project.
>
> **[2:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=126)** And then I'm going to move over to test and you can see already something's wrong in our test file because I've removed this import, so it no longer knows this import.
>
> **[2:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=135)** I'm going to change it to what it should be now.
>
> **[2:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=137)** And that is junit jupiter API assertions, and then, well let's go for all of them.
>
> **[2:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=144)** And the test annotation, it also needs to go from elsewhere.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=147)** So let's go ahead, org.junit.jupiter.api.
>
> **[2:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=152)** And as you can see, now it's fine, but this might not run yet.
>
> **[2:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=156)** If you go over to Run As, and you check out the run configurations, it might just be that it has select the wrong test runner.
>
> **[2:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=164)** For me, JUnit 5 is exactly what I want so that's good.
>
> **[2:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=167)** I'm just going to hit Run.
>
> **[2:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=169)** In that, I'm going to select, guess I'll just save all.
>
> **[2:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=173)** Okay.
>
> **[2:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=174)** And as you can see, you see a green bar in the left upper part of the screen, and that means our test has succeeded.
>
> **[2:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=179)** So this means that our JUnit 5 is now set up correctly.
>
> **[3:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=184)** So that's great.
>
> **[3:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=185)** We're now all set to get started.
>
> **[3:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=188)** And in the last video of this chapter, we're going to be writing our first JUnit test.
>
> **[3:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/setting-up-junit-for-eclipse?u=76281980&t=193)** So please move on to this last video of this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), this. (1), import, (1), import. (1)
> **Code Identifiers:** groupid (2), artifactid (2)
> **Prerequisites:** set up (3), setup (1)
> **Env Vars:** sdk (1), api (1)
> **Versions:** java 16 (1), 5.7.2 (1)
> **CLI Commands:** apache (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)

#### Your first test: HelloJUnit
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=0)** - Great, we're all set.
>
> **[0:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=2)** Let's celebrate this by writing our first test.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=5)** We first need some sort coded tests.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=7)** So we're going to start with that first.
>
> **[0:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=9)** Then we'll add a test class, and write our test, and run it.
>
> **[0:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=14)** Let's move over to IntelliJ.
>
> **[0:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=16)** I prefer to use IntelliJ, but you can follow along using any setup.
>
> **[0:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=21)** I'm going to add the class codes over here.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=24)** And in this class, I'm going to be writing a very simple method.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=28)** I'm going to be calling this public, and it's going to return a string.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=31)** And then say hello as a name.
>
> **[0:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=34)** And it won't do anything interesting.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=36)** It will simply return, hello worlds, like this.
>
> **[0:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=43)** We're now going to create a test for a super advanced code.
>
> **[0:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=46)** And we're going to start by creating a code test class, in which we can write our tests.
>
> **[0:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=51)** So I'm going to click on new Java class in our test Java directory.
>
> **[0:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=56)** And I'm going to call this code test.
>
> **[1:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=60)** And now we're going to add a test in this test class.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=63)** And I can just do so by writing a method.
>
> **[1:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=66)** So I'm going to call my methods public.
>
> **[1:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=69)** It's not returning anything, and I'm going to call it test say hello.
>
> **[1:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=76)** And in order to call the method that I've just written in the code class, I need to create an instance of codes in here.
>
> **[1:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=84)** And then what I'm going to be doing, is I'm going to use an assertion.
>
> **[1:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=88)** And this assertion is just going to test what are my expected value and my actual value match.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=95)** So I'm going to go ahead and say, assert equals.
>
> **[1:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=101)** And this won't be recognized right now.
>
> **[1:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=103)** So I will have to add an import on top.
>
> **[1:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=106)** And I'm going to use the static import for this, it's the convention.
>
> **[1:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=110)** And it just looks much prettier.
>
> **[1:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=113)** It's org.junit jupiter api assertion.
>
> **[1:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=117)** And I'm just going to to use all of them like this.
>
> **[2:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=121)** And the first argument of the assert equals is the expected value.
>
> **[2:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=125)** And I expect the value to be hello world like this.
>
> **[2:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=130)** And the actual value is the results of code, say hello like this.
>
> **[2:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=136)** So this test code, it looks really good, but we cannot run it yet.
>
> **[2:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=140)** Let's make it a runnable test by adding @ test on top of our methods like this.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=147)** Please make sure that this using the org.junit.jupiter.api.test.
>
> **[2:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=152)** Because this is one you want to be using for JUnit 5.
>
> **[2:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=156)** If it says anything else, then please change it, and also check your phone to see whether there are other dependencies in there as well.
>
> **[2:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=162)** As you can see, the icons have appeared here.
>
> **[2:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=165)** And I can just click them and run our test.
>
> **[2:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=169)** And as you will see, it's going to be parsing since our actual code and or expected codes are the same.
>
> **[2:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=175)** You can see in the lower left corner, that there are green ticks.
>
> **[2:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=178)** And I can even click on the test class and test method, but there are no messages right now.
>
> **[3:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=183)** They're simply parsed.
>
> **[3:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=185)** Let's see what happens if it fails.
>
> **[3:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=187)** Let's change our expected string, by removing well, just the exclamation mark like this.
>
> **[3:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=193)** By the way, this is safe to use on string because it's using the equals on the object method.
>
> **[3:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=198)** And that's the double sign equals as you have, for example, to compare numbers.
>
> **[3:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=203)** So if I run it again now, you'll actually see that the test will fail.
>
> **[3:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=209)** And it's telling us why.
>
> **[3:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=210)** It says, expected hello worlds without the exclamation mark.
>
> **[3:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=214)** But the actual has one.
>
> **[3:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=217)** If we chase it back to match the outcome, and we run it again, we can see that our test will pass again.
>
> **[3:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=226)** All right, we're all set.
>
> **[3:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=227)** And this is it for the basics.
>
> **[3:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=229)** We have just written our first test.
>
> **[3:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/your-first-test-hellojunit?u=76281980&t=231)** Let's level up our JUnit game with some more test ingredients in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (6), class, (4), public (2), assert (2)
> **CLI Commands:** make (2)
> **Tools:** intellij (2)
> **UI Navigation:** click on (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - great (1)

#### A tour of Coderpad
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=15)** These challenges are hosted by CoderPad and they appear in the same area of the course where you watch the course's videos.
>
> **[0:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=21)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=31)** The code challenge has four areas, instructions in the top left, a code editor for your answers in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left.
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=45)** You can use these direct handles to allocate space as you like.
>
> **[0:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=51)** To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left.
>
> **[0:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=57)** Each challenge has instructions that include the description of the challenge and the challenge's parameters and desired result.
>
> **[1:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=66)** Parameters are values that will be passed into your code and they have to be of a particular data type.
>
> **[1:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=71)** Return value also has to be of a particular data type, and you also see that noted in the instructions.
>
> **[1:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=78)** It's possible that some questions don't require any input or won't return a result.
>
> **[1:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=83)** The constraints section has useful information about parameters that will be passed in.
>
> **[1:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=88)** The examples show different parameter values and what result will be returned for each of those test cases.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=96)** Create your answer in the top right code editor.
>
> **[1:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=100)** There are comments in the starting code showing where to put your solution.
>
> **[1:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=104)** When you click Test My Code, you'll see a message indicating whether your code returned a correct result.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=112)** If your code isn't successful, you can ask for help.
>
> **[2:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=126)** The showExpectedResult and showHints variables determine when you see the expected result and any hints.
>
> **[2:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=132)** Change them to a value of true to control the outputs.
>
> **[2:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=142)** The code editor in the lower right shows how your solution is used.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=147)** You can change that code to experiment with different test cases.
>
> **[2:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=161)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left.
>
> **[2:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=168)** If any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[2:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/a-tour-of-coderpad?u=76281980&t=173)** When you've finished each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), type, (1), require (1)
> **Code Identifiers:** showexpectedresult (1), showhints (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create a test method
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-create-a-test-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-create-a-test-method?u=76281980&t=0)** - [Instructor] Alright, for this exercise you had to turn them into tests and all we had to do was go ahead and add the annotation at test on top of this method.
>
> **[0:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-create-a-test-method?u=76281980&t=13)** Now, if we run the code, you can see that this results is correct.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 2. Writing Basic Tests with JUnit

#### Annotations
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=0)** - [Instructor] In this course, you will be using annotations a lot and they might look intimidating at first, you can recognize annotations by the at symbol that's in front of them.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=10)** Once you get the hang of annotations, you find out that are not too bad.
>
> **[0:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=14)** And the good news is that JUnit is using a lot of annotations, so you get the hang of these soon enough.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=19)** They're simply some sort of meta data that you can use for your source code.
>
> **[0:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=22)** We can use them for different purposes and chances are that you have seen and even used them already in your regular code.
>
> **[0:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=29)** Let's move over to Intellij and have a look at some examples.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=33)** One of the use cases for annotation is for example, to make rules for an interface that your compiler will take into account.
>
> **[0:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=40)** This happens when you use the annotation at functional interface on top of an interface.
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=45)** This will make sure that the only one abstract method is allowed in this interface.
>
> **[0:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=50)** Another annotation that you might've come across already is the at override annotation.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=55)** And this annotation makes sure that the method is actually an override from another method in the parent class.
>
> **[1:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=62)** So with this annotation on dub, we cannot go ahead and change the name of the method or change number of parameters for example.
>
> **[1:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=70)** And then one more example is the at deprecated annotation, this will warn developers that are using this code that the method they are using is actually deprecated.
>
> **[1:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=81)** We have seen annotations in the previous videos already as well.
>
> **[1:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=85)** We have seen the at test annotation from JUnit.
>
> **[1:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=88)** This is actually telling Java that we are dealing with a test here, by adding the at annotation on top our method was suddenly recognized as a test, and we could run it as a result.
>
> **[1:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=100)** As I said, during this course, we will be using a lot of annotations because Junit, heavily depends on the annotations for each behavior.
>
> **[1:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=109)** Often, if you will need to learn something new in JUnit, and you wonder how to do it, the answer will be an annotation.
>
> **[1:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/annotations?u=76281980&t=115)** Well, let's no longer talk about annotations, but let's use them in the next video to write some tests.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (3), override (2), abstract (1), class. (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Write and run test classes and methods
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=0)** - [Instructor] Let's just start writing some tests.
>
> **[0:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=2)** First, we'll need to create a class that we can write tests for.
>
> **[0:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=6)** Let's start with the very, very simplified BankAccount class.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=10)** I'm going to create a class BankAccount.
>
> **[0:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=16)** And I'm going to give it two properties: a balance and a minimumBalance.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=24)** And private double minimumBalance.
>
> **[0:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=29)** Like this.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=31)** And then we would like to create a constructor that's going to set these two fields.
>
> **[0:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=35)** So I'm going to make a public constructor, and it's going to take a double balance and a double minimumBalance.
>
> **[0:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=46)** Can say this.balance equals balance and this.minimumBalance equals minimumBalance.
>
> **[0:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=54)** Probably, we need to get balance and minimumBalance later, so let's also create getters for this, and I'm going to be lazy and just generate these.
>
> **[1:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=65)** There we go.
>
> **[1:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=66)** For now, let's just create two additional methods: withdraw and deposit.
>
> **[1:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=72)** First, withdraw for when you want to take money from the account.
>
> **[1:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=76)** It will return the amount you are withdrawing, and if that's not possible, it will throw an exception.
>
> **[1:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=85)** So I'm just going to say if the balance minus the amount is still bigger than the minimumBalance, then we're good to go.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=95)** We'll simply replace the balance with our new balance.
>
> **[1:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=100)** And then we'll return the amount.
>
> **[1:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=104)** Else, and then we'll just throw the RuntimeException.
>
> **[1:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=109)** This is only just to show you what it should be doing.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=112)** Clearly, this is not how you'd really implement this.
>
> **[1:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=115)** Next, the deposit method.
>
> **[1:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=117)** We'll now create the deposit method and then we'll return a new balance and it takes the amount deposited as a parameter.
>
> **[2:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=123)** So let's go ahead, public double deposit like this.
>
> **[2:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=132)** Again, double amount.
>
> **[2:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=134)** So balance just becomes the old balance plus the amount and will return it.
>
> **[2:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=141)** Clearly, I should be checking for negative numbers but it's just a very simplified example for the purpose of getting to know JUnit.
>
> **[2:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=149)** All right, we have two methods.
>
> **[2:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=150)** We have getters and we have two properties.
>
> **[2:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=153)** We're all set.
>
> **[2:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=154)** Let's now create a test class to see if we can test the behavior of our class.
>
> **[2:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=158)** First, I'm going to be creating the class BankAccountTest in our test folder.
>
> **[2:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=164)** So I'm going to go ahead, say BankAccountTest.
>
> **[2:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=169)** And for now, I'm just going to be writing two test methods.
>
> **[2:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=173)** One to test withdraw, and one to test the deposit.
>
> **[2:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=176)** So first, withdraw.
>
> **[2:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=178)** I'm going to call it testWithdraw.
>
> **[3:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=184)** And I'm going to create a new instance of BankAccount in here.
>
> **[3:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=192)** The balance will be 500 and the minimum will be -1,000.
>
> **[3:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=199)** Now I'm going to withdraw 300 and then I'm going to use assertEquals to see whatever it does what I would expect.
>
> **[3:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=206)** So I'm going to go ahead and say bankAccount.withdraw 300 and then I'm going to use assertEquals.
>
> **[3:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=222)** Import static org.junit.jupiter.api.Assertions.
>
> **[3:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=229)** All of them.
>
> **[3:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=231)** Okay.
>
> **[3:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=232)** And I'm going to be seeing what it is what I would expect.
>
> **[3:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=235)** Well, I expect it will be 200.
>
> **[3:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=238)** And the actual is the getBalance on our instance.
>
> **[4:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=241)** So I'm going to call getBalance like this.
>
> **[4:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=245)** And we also need to add the annotation on top of our test method so that it recognizes our method as a test.
>
> **[4:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=252)** We can run this test now, and as you will see, it's going to pass.
>
> **[4:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=259)** If we change something to our method, for example, use the smaller sign instead of the bigger sign, we can see that our test will fail.
>
> **[4:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=270)** So I've changed our method and now I'm going to move back over to test, run it again, and you can see that our test is failing right now because it's throwing the RuntimeException instead.
>
> **[4:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=284)** So let's go back to our code and change our test back.
>
> **[4:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=287)** And here you see the purpose of the unit test demonstrated at the same time as well.
>
> **[4:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=292)** Our test was no longer passing because our code was not doing what we would expect it to do.
>
> **[4:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=297)** All right, that's fixed.
>
> **[5:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=300)** Now, let's do something similar for deposit.
>
> **[5:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=302)** Let's create a testDeposit.
>
> **[5:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=306)** And again, we'll create a new BankAccount instance in our method.
>
> **[5:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=313)** And the balance here is 400 and the minimum is 0.
>
> **[5:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=319)** So we're going to deposit 500.
>
> **[5:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=324)** And I expect the balance to become 900, and to test it, I'm going to use the getBalance to get the actual balance.
>
> **[5:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=330)** So again, I'm going to go for assertEqual.
>
> **[5:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=334)** Expect is 900 and then I'm going to say bankaccount.getBalance.
>
> **[5:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=342)** Now I still need to add @Test on top, and then we can run this test method as well.
>
> **[5:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=347)** So let me run it and as you'll see, it will run successfully as well.
>
> **[5:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=353)** We can also run all the tests in a class by pressing the play icon next to the class name.
>
> **[5:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=358)** So this time, I'm not running an individual test but I'm actually running all the tests in this class.
>
> **[6:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=363)** You can see this in the lower left corner.
>
> **[6:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=365)** It is now showing the test results of both methods.
>
> **[6:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=369)** Well, that's it.
>
> **[6:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=370)** You should now be able to write a very basic unit test yourself.
>
> **[6:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/write-and-run-test-classes-and-methods?u=76281980&t=374)** Let's see how we can make the output better structured by adding a display name to all of this in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (6), class. (3), public (2), throw (2)
> **Code Identifiers:** minimumbalance (7), getbalance (4), assertequals (2), testwithdraw (1), bankaccount (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### DisplayName
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=0)** - So we have written our first unit tests already.
>
> **[0:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=3)** That's great.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=5)** Let's inspect how we can improve the report that is coming out of this test using display name.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=10)** Display name is an annotation that allows us to replace a default name with a custom name.
>
> **[0:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=16)** This allows us to make the report more descriptive.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=19)** Let's move over to IntelliJ and first run or test again and have a good look at a default report.
>
> **[0:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=26)** Let's run it again.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=28)** And in the lower left corner, you can see that the tests we're running are having a name of the method.
>
> **[0:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=34)** It is a good practice to have descriptive names for our test methods, but it's even nicer to have a little description with spaces and punctuation instead.
>
> **[0:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=43)** Here you can see the default names in the lower left corner, but now it's time to show you how to replace that with a custom name.
>
> **[0:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=50)** All I have to do is add the annotation at display name on top of our method.
>
> **[0:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=56)** And in here we can simply write a prescriptive message.
>
> **[1:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=60)** So I'm going to go for something very basic, like, withdraw 500 successfully.
>
> **[1:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=69)** And for the other one, I'll go ahead and add deposit four hundreds successfully.
>
> **[1:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=78)** There is a lot of discussion about how to best name this, and I like to be concise yet descriptive.
>
> **[1:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=83)** And for now, I just want to point out what has changed if we run it again, we no longer have our method names appearing in report, but the custom display names instead.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=96)** You can see this in the lower left corner.
>
> **[1:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=98)** The method names are gone and they're replaced with our display names.
>
> **[1:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=102)** So we can do this for methods, but you might be not too surprised if we can do the very same thing, but then on top of the class.
>
> **[1:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=108)** Right now, we have the class name in our report.
>
> **[1:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=111)** Let's replace that with something that's nicer to read.
>
> **[1:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=114)** So I'm going to go on top of the class and I'm going to add at display name.
>
> **[2:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=121)** And then in here, I'll just say test bank account class, and let's run it again.
>
> **[2:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=131)** And you can see now the default name, the name of the class.
>
> **[2:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=135)** It has been replaced with a custom display name as well.
>
> **[2:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=138)** All right, that's it for display name.
>
> **[2:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=141)** As we have seen display name helps us to optimize the reports test.
>
> **[2:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=145)** We can simply add it as an annotation.
>
> **[2:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=148)** Let's see if we can get tests for some more advanced situations in the next video on assertions.
>
> **[2:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/displayname?u=76281980&t=153)** Here to display names will come in handy as well, since we're going to add a lot of methods to our test class is going to make it easier to read.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class. (2), this, (1), class, (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Tools:** intellij (1)
> **Best Practices:** good practice (1)
> **Speakers:** - so (1)

#### Assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=0)** - [Instructor] Assertions are used to check a certain condition.
>
> **[0:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=3)** If an assertion fails, the test fails.
>
> **[0:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=6)** We can find the assertions in the assertions class in the org.junit.jupiter.api package.
>
> **[0:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=12)** We usually use a static import for this one so that we can use all the methods without having the assertions. in front of them.
>
> **[0:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=18)** There are very many methods inside this class, and they're all used to perform the actual tests.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=24)** We have seen one already, assertEquals.
>
> **[0:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=27)** We can see it here on line 12 and line 20.
>
> **[0:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=30)** This one checks whether a certain expected outcome is equal to a certain actual outcome, and if that is the case, the test will pass.
>
> **[0:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=38)** If it's not the case, the test will fail.
>
> **[0:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=40)** There are very many overloads available for assertEquals, and that's not only true for assertEquals.
>
> **[0:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=46)** It's actually the case for all the assertion methods inside the assertions class.
>
> **[0:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=50)** Java will know which one is the closest match, and that is the assertion that will be used.
>
> **[0:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=56)** We're not going to be discussing all the overloads in this video.
>
> **[0:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=59)** There are very many, and they all do sort of the same thing.
>
> **[1:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=62)** So we'll just discuss the most high-level methods so you know what is out there and you can use what you'll need.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=67)** All right, let's start writing some assertions.
>
> **[1:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=70)** I have prepared a class here, BackAccountAssertionsTest, and at this point, it's actually just a copy of bank account test, but with a different name.
>
> **[1:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=78)** And in here this is an assertEquals already, but I'm going to be adding now a test that will use the assertNotEquals method.
>
> **[1:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=86)** And we're going to use it to see whether balance of the accounts will actually go below zero if we withdraw more than the positive balance that is on the account.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=96)** But again, we won't go into the minimum balance here.
>
> **[1:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=99)** So let me quickly write a method for this.
>
> **[1:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=102)** I'm going to say public void test, and then WithdrawNotStuckAtZero.
>
> **[1:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=110)** There we go.
>
> **[1:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=113)** And in here, I'm going to be creating a new instance of bankAccount, and I'm going to be initializing this as a balance of 500 and a minus 1000 as a minimum balance.
>
> **[2:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=126)** Then I'm going to be withdrawing 800 from it, and that should resolve in minus 300.
>
> **[2:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=133)** And I just want to check whether we will go below zero and that we don't get stuck at zero.
>
> **[2:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=137)** So I'm going to be asserting that it's not going to be equal to zero, so I'm going to say assertNotEquals, and in here, I'm going to say zero, 'cause this is the one that is unexpected and the expected this just bankAccount.getBalance.
>
> **[2:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=156)** There we go.
>
> **[2:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=159)** Now I want to run this, so let me add @Test on top.
>
> **[2:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=163)** And also I'll add a sensible display name.
>
> **[2:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=168)** Withdraw will become negative.
>
> **[2:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=172)** Something like this.
>
> **[2:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=174)** And now I can run it.
>
> **[2:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=176)** And our test will pass because the result will be minus 300, which is not equal to zero.
>
> **[3:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=181)** You can see it in the lower left corner, our test has passed.
>
> **[3:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=185)** There's also an assertArrayEquals method.
>
> **[3:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=188)** This will check whether two arrays are equal.
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=190)** If they are arrays of objects, it will check whether they are deeply equal, which means that it'll also look at the objects on the object on the array.
>
> **[3:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=199)** It works very much like the other assertions.
>
> **[3:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=201)** It takes an expected array and compares it to the actual array.
>
> **[3:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=205)** But not all assertions take two arguments for comparison.
>
> **[3:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=208)** The assertTrue and the assertFalse, they'll only need one.
>
> **[3:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=212)** As you might guess, it should be some sort of Boolean condition or a Boolean supplier that will return a Boolean condition.
>
> **[3:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=219)** And if this condition is true, the assertTrue will pass the test and the assertFalse will fail.
>
> **[3:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=225)** For false, it's the other way around.
>
> **[3:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=227)** AssertTrue will fail and assertFalse will pass if the inserted parameter is false.
>
> **[3:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=233)** Well, let's have a look at this one in action.
>
> **[3:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=236)** First, we'll need to make sure that we have some sort of Boolean to test for.
>
> **[3:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=239)** So I'm going to be modifying our bankAccount a bit.
>
> **[4:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=244)** I'm actually going to add a property on top and I'm going to call it isActive.
>
> **[4:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=249)** So we have a private Boolean, isActive here, and I'm going to insert a getter and setter.
>
> **[4:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=261)** There we go.
>
> **[4:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=263)** And let's default it to true, like this.
>
> **[4:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=267)** Now we can write a test to make sure that the bank account is active after creation.
>
> **[4:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=272)** So I'm going to move back to our BankAccountAssertionsTest and I'm going to be writing a new method.
>
> **[4:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=279)** Public void testActive.
>
> **[4:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=282)** There we go.
>
> **[4:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=285)** And in here again, I'm going to be creating a new bankAccount instance, and I'm just going to give it 500.
>
> **[4:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=292)** Zero doesn't really matter for this example.
>
> **[4:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=295)** And I'm going to be asserting that the bank account is active after creation.
>
> **[5:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=301)** So I'm just going to say assertTrue bankAccount.isActive like this.
>
> **[5:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=307)** I still need to import assertTrue.
>
> **[5:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=309)** So there we go.
>
> **[5:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=311)** And if I run this one now, or at least first make it runable, again, add a display name.
>
> **[5:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=318)** Test activation account after creation, something like this.
>
> **[5:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=325)** I'm going to be running this and this test will pass.
>
> **[5:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=328)** Since the value's going to be true, and this is actually what I'm asserting, it will be true.
>
> **[5:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=336)** Another pair of assertions that doesn't require two arguments for comparison is the assertNull and assertNotNull.
>
> **[5:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=342)** There's just one value necessary for the conclusion, and this conclusion depends on the value being either null or not.
>
> **[5:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=349)** For example, let's create a method in our bankAccount that should return the name of the bank account holder.
>
> **[5:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=355)** So I'm going to move back to our bankAccount again, and I'm going to be creating a string for the bank account holder.
>
> **[6:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=363)** HolderName, like this.
>
> **[6:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=367)** And again, I'm going to be inserting the getter and setter as well.
>
> **[6:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=375)** It has created the getter and the setter.
>
> **[6:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=378)** And then we can write a test to see whether our bankAccount holder's name is going to be null or not.
>
> **[6:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=383)** So I'm going to move back to our BankAccountAssertionsTest, and in here, I'm going to be creating a method that's called public void testHolderNameSet like this.
>
> **[6:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=397)** And again, I'm going to be creating a new instance of bankAccount.
>
> **[6:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=401)** The values don't match too much in this case.
>
> **[6:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=405)** And this time, I'm going to be setting the account holder name.
>
> **[6:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=410)** I'm just going to call it to Maaika here.
>
> **[6:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=413)** And then I'm going to check whether the getHolderName is not returning a null, so whether it has been set successfully.
>
> **[6:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=419)** So I'm going to say assertNotNull like this, and then I'm going to call bankAccount.getHolderName like this.
>
> **[7:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=430)** In a very similar fashion, we could also have used the assertNull method, which would have passed if the holder name was not said, and it would still be null.
>
> **[7:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=436)** So let me make this a test as well.
>
> **[7:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=441)** Add the display name to it.
>
> **[7:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=443)** Test set holder name.
>
> **[7:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=446)** That's two words.
>
> **[7:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=447)** And then I'm going to be running this test.
>
> **[7:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=449)** And as she will see, it will pass since we've set the holder name in this example.
>
> **[7:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=453)** But the two variables are referring to the exact same object.
>
> **[7:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=457)** This can be done with you assertSame method.
>
> **[7:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=459)** If you want to check whether they don't point to the same object, you might guess this, we can use assertNotSame for this.
>
> **[7:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=466)** Sometimes you will need to test to check whether a method throws an exception in certain circumstances.
>
> **[7:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=472)** We can test this with the assertThrows method.
>
> **[7:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=475)** Our class is actually throwing an exception when we try to withdraw below the minimum.
>
> **[8:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=480)** It is terrible that it's a runtime exception, and it's even worse if we're going to assert at will.
>
> **[8:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=484)** So this is definitely not real production code.
>
> **[8:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=486)** It's just for testing purposes.
>
> **[8:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=488)** One of the terrible things that's happening now that we'll test on any runtime exception.
>
> **[8:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=492)** So for example, a null pointer, will also make our test pass, but let's just totally ignore this part and just focus on assertThrows is working here.
>
> **[8:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=500)** So I'm going to be writing a test, whether it's going to throw the exception when we try to withdraw below the minimum.
>
> **[8:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=506)** So testNoWithdrawBelowMimimum like this And again, I'm going to be creating a new instance of bankAccount here, and I'm going to set this to 500 and minus 1000.
>
> **[8:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=527)** And then I'm just going to say assertThrows like this and now I have to specify what class it is throwing.
>
> **[8:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=535)** I'm going to say RuntimeException.class, and now I'll have to insert an executable.
>
> **[9:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=541)** So it doesn't take any parameters.
>
> **[9:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=543)** And we're just going to use the withdraw method on our bankAccount, and I'm going to make sure we get below the minimum, so let's say 2000 like this.
>
> **[9:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=555)** And this will throw the runtime exception, which is what we're testing for, so this test should pass the way I've written it now.
>
> **[9:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=561)** So let me go test that we can't withdraw below minimum.
>
> **[9:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=570)** And I'm going to be running this.
>
> **[9:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=574)** And as you can see, it's passing since it is throwing the runtime exception.
>
> **[9:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=578)** There's actually also a way to check whether executables don't throw an exception regardless of the rest of the result, and that is the assertAll method.
>
> **[9:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=586)** We can either send four arcs with executables or a string of executables as a parameter.
>
> **[9:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=591)** Let's just show a simple example here.
>
> **[9:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=594)** I'm going to see public void testWithdrawAndDepositWithoutExceptions.
>
> **[10:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=605)** That's a long method name.
>
> **[10:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=607)** All right, and I'm going to be creating a new BankAccount instance again, and I'm going to set it to 500 and minus 1000.
>
> **[10:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=618)** And I'm going to say assertAll, and this is not going to look at the result.
>
> **[10:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=622)** It's just going to check whether it's now throwing any exceptions.
>
> **[10:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=625)** So I'm going to use it for ours.
>
> **[10:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=627)** For this and going to start with- We'll go ahead and say bankAccount.deposit.
>
> **[10:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=636)** Let's do 200 and then let's do a withdrawal as well.
>
> **[10:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=642)** BankAccount withdrawal 450 like this.
>
> **[10:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=647)** And I'll add @Test on top and a display names that makes sense.
>
> **[10:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=654)** This no exceptions for withdrawal and deposit, like this.
>
> **[11:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=661)** And if I run this test, you'll see that it will pass since no exceptions get thrown.
>
> **[11:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=669)** If we make this a bit bigger or let's say a lot bigger, it will fail because an exception will get thrown.
>
> **[11:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=679)** And there we go, we can see the exception that's happening.
>
> **[11:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=681)** All right, let's change this back.
>
> **[11:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=685)** We also have a way of checking whether something is not taking too long.
>
> **[11:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=689)** We can do this with assertTimeout and assertTimout preemptively.
>
> **[11:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=693)** Let's have a look at a simple example again.
>
> **[11:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=695)** So I'm going to say public void testDepositTimeout test, and again, I'm going to be creating a new instance of bankAccount here.
>
> **[11:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=708)** Let's just make it 400 and zero this time.
>
> **[11:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=714)** And I'm going to say assertTimeout.
>
> **[11:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=719)** And this is testing whether it can complete the operation fast enough, so I need to go for a very, very, very low duration.
>
> **[12:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=727)** So let's just go for a duration of nanos, and we'll give it one nanosecond to complete this operation.
>
> **[12:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=733)** I don't think my computer is going to be this fast.
>
> **[12:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=736)** Let's go say bankAccount.deposit.
>
> **[12:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=739)** I'm just going to withdraw anything.
>
> **[12:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=744)** And if we run this and it takes longer than a nanosecond, it will actually fail.
>
> **[12:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=753)** Test speed deposit, something like this.
>
> **[12:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=758)** I'm going to run this.
>
> **[12:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=760)** It's really, really fast.
>
> **[12:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=762)** So I had this lecture problem that my computer is too fast, so I'm going to insert a little sleep in deposit just for the purpose of this exercise.
>
> **[12:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=770)** I'm going to remove it right after.
>
> **[12:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=772)** So let's go to deposit, and then I'm just going to say thread.sleep like this just for five milliseconds.
>
> **[13:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=783)** That should definitely do the trick.
>
> **[13:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=785)** And let's just add a try catch around it as well.
>
> **[13:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=792)** Catch the interrupted exception.
>
> **[13:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=794)** You don't need to get this.
>
> **[13:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=795)** It's just to show you that if we force our execution for a bit longer our test is going to fail.
>
> **[13:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=802)** So there we go.
>
> **[13:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=805)** And I'm going to go back here and I'll run our timeout test again.
>
> **[13:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=810)** And this time it failed, because the execution exceeded the timeout.
>
> **[13:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=814)** All right, so let's quickly change this back.
>
> **[13:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=821)** And let's give this one a bit of more time here, because it might sometimes take more than a nanosecond.
>
> **[13:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=830)** I already said that we're not going to have a look at all the overload methods, because as you can see, there are very many out there.
>
> **[13:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=837)** Let me just show you the ones for assertEquals, and you can see there are so many of these.
>
> **[14:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=841)** But there are some common overloads that I would like to say something about.
>
> **[14:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=845)** The first one is the one that has a delta parameter.
>
> **[14:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=849)** This can be useful when doing calculations and not knowing, or even being able to type the very exact result.
>
> **[14:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=855)** For example, when it's a fraction.
>
> **[14:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=857)** When a delta is being added, there's a range on the expected that will result in a match with the expected value.
>
> **[14:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=862)** So for example, if you would want to test on 1/3, we can write 0.33, so let me just do that.
>
> **[14:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=869)** We can say 0.33, and then the actual will be the result of dividing one by three and this like this, it will fail because, well, this is not the same, but we can insert delta here and this delta will make the difference.
>
> **[14:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=884)** So if we have a delta of 0.01, this will actually result in a passed test, because using a delta, it will accept a difference and it will allow the test to pass whether it's a difference of 0.01 or less.
>
> **[14:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=898)** The other overload I would like to mention is when the last parameter is a string message.
>
> **[15:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=903)** So for example, oops, not the same.
>
> **[15:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=907)** Clearly want to have a bit more specific message, but this will demonstrate the behavior.
>
> **[15:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=912)** And in this case, when it's failing, you have a custom message that you'll see when the test is failing.
>
> **[15:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=918)** You will not see this message when a test is passing though.
>
> **[15:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=922)** There is one last method I would like to mention here, and that is also part of the assertion class, and that is the method fail.
>
> **[15:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=929)** This method will fail the test.
>
> **[15:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=931)** And if we add it to one of our methods that was otherwise succeeding, you can see that the test will fail.
>
> **[15:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=936)** So let me remove this and now instead in the middle of this one, 'cause this one is clear that it should be passing.
>
> **[15:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assertions?u=76281980&t=943)** If I run this, it's passing, but now I'm going to call fail in the middle,

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), this. (16), pass (10), public (5), this, (5)
> **Code Identifiers:** bankaccount (15), assertequals (5), asserttrue (4), assertfalse (3), isactive (3)
> **CLI Commands:** make (9), find (1)
> **Analogies:** for example (5)
> **Versions:** 0.33 (2), 0.01 (2)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)

#### Assumptions
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=0)** - [Instructor] Assumptions are a way of setting conditions for executing a test.
>
> **[0:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=4)** If we meet the assumption, the test will get executed.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=7)** If we don't meet the assumption, the test won't be executed.
>
> **[0:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=11)** Assumptions are in a class in the org.junit.jupiter.api package.
>
> **[0:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=16)** This class contains methods that will test assumptions.
>
> **[0:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=20)** The main difference between assertions and assumptions is that a failed assumption does not lead to a failed test but to an aborted test instead.
>
> **[0:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=27)** So if we have an assumption and the assumption is met, the test will run.
>
> **[0:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=32)** If the assumption is not met, the test will be aborted.
>
> **[0:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=35)** For assertions if the assertion is met, that test will succeed and if the assertion is false, the test will fail.
>
> **[0:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=43)** So just to make sure that you grasp this correctly, an assumption that is met might still lead to a failed test in case the assertion that follows is false.
>
> **[0:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=52)** Assumptions doesn't say anything about the outcome of a test.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=55)** Just about whether the test will actually run or get aborted.
>
> **[0:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=59)** Here we have the official JUnit documentation on assumptions, and we can see the methods there that are in the assumptions class.
>
> **[1:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=66)** There are much less assumptions than there are assertions, but still there are quite some overloads that you can see.
>
> **[1:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=72)** Again, we won't be spending too much time on all these overloads.
>
> **[1:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=75)** Instead, we will be discussing the different names of the methods in the assumption class.
>
> **[1:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=79)** So assertTrue, assertFalse, and assumingThat.
>
> **[1:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=83)** Let's move over to IntelliJ to see these assertions in action.
>
> **[1:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=86)** I have prepared a class for testing the assumptions, BankAccountAssumptionsTest, and it contains one method which is a copy from the test active test method that we had in BankAccountAssertionsTest.
>
> **[1:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=99)** First, I'm going to try to add assumeTrue to this test.
>
> **[1:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=103)** And what I would want, I don't want this assertion to be tested when BankAccount is null because if the bank account is null, there's no point in testing the assertion.
>
> **[1:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=115)** So I'm going to assume that BankAccount is not null so I'm going to go ahead, so assumeTrue, and then I'll say here BankAccount doesn't equal null.
>
> **[2:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=126)** There we go, I need to import it.
>
> **[2:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=129)** And if I run this now, it won't change anything since BankAccount is not going to be null.
>
> **[2:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=134)** I just instantiated it, so this is running fine.
>
> **[2:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=139)** I could however make this assumption fail.
>
> **[2:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=142)** So this assumption is not going to be met and then you'll see in the lower left corner that something new is happening.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=147)** The test will get aborted.
>
> **[2:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=149)** So I'm going to run this again.
>
> **[2:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=151)** And as you can see, there is a different icon appearing and it's also saying test aborts the exception.
>
> **[2:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=156)** Assumption field, assumption is not true.
>
> **[2:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=159)** Well, we might think hmm, assumption's not true.
>
> **[2:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=161)** That's not very specific.
>
> **[2:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=162)** For this purpose, we have an overloaded methods.
>
> **[2:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=165)** Namely we can add a message to this.
>
> **[2:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=168)** So we could say for example account is null like this.
>
> **[2:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=171)** And if I run this again, it's giving us a message why it's failing.
>
> **[2:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=178)** Actually in this case, it would be account is not null since we're assuming that it is null.
>
> **[3:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=184)** But you probably do get the point.
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=186)** I'm going to be removing this message now and I want to show you what happens if we use assumeFalse instead.
>
> **[3:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=193)** So assumeFalse, it's very similar, but it does the exact opposite.
>
> **[3:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=197)** It's a matter of wording and way of describing when to use which one.
>
> **[3:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=200)** We could have used assumeFalse in a previous example.
>
> **[3:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=203)** But when we have said == null, the result would have been the same.
>
> **[3:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=207)** Let me show you.
>
> **[3:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=208)** So if I changed this to false, our statement is still the opposite because we're saying that it should only run in case BankAccount is not null since it's going to be false when it is null.
>
> **[3:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=222)** So if I run this, our test will actually run since the assumption is met.
>
> **[3:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=228)** As you can see, it's running perfectly fine now.
>
> **[3:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=231)** Though you might also agree with me that this wording is a bit of confusing and it requires a lot of thinking to see what's going on.
>
> **[3:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=236)** So in this case, it actually makes more sense to use the assumeTrue because this is also the wording you would be using to explain to someone what's going on.
>
> **[4:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=243)** A bit harder to grasp is probably the assumingThat method.
>
> **[4:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=247)** It takes two arguments, a Boolean condition and an executable.
>
> **[4:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=251)** If the condition is true, it will execute the executable.
>
> **[4:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=255)** It makes sense if this executable contains the assertion.
>
> **[4:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=258)** So we could write our test active method using the assumingThat assumption.
>
> **[4:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=264)** So I'm just going to go ahead and remove this and I'm going to say assumingThat, and then we need a Boolean.
>
> **[4:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=275)** So I'm going to say assuming that BankAccount doesn't equal null, and then I need to insert the executable that should run when BankAccount is not null.
>
> **[4:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=285)** And I'm just going to be using a lambda expression for this.
>
> **[4:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=289)** Just we can say no parameters and then here the assertion will be placed, and we're going to copy this assertion up like this.
>
> **[5:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=300)** And this actually does the exact same thing as our assumeTrue and assertTrue beneath each other.
>
> **[5:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=307)** It'll only execute the assertTrue if the condition is true.
>
> **[5:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=310)** The difference with this one and assertTrue is that it will not abort the test if the condition is false.
>
> **[5:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=316)** So running this code will actually result in a fast test, so let me show you.
>
> **[5:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=321)** I'm going to run this right now.
>
> **[5:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=327)** I will need one more parenthesis here and I'm going to run this code now.
>
> **[5:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=335)** And as you can see, it's passing.
>
> **[5:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=339)** So let me show you what happens if I change it to this one and I'm going to be running the test.
>
> **[5:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=347)** And as you can see this time, our test didn't get aborted when the assumption was not met but instead it's passing.
>
> **[5:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=354)** So it's actually a conditional test to some extent.
>
> **[5:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=357)** You're only going to be running the assertion if the assumption is met.
>
> **[6:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=361)** If the assumption is not met, this one will be skipped.
>
> **[6:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/assumptions?u=76281980&t=364)** And if there's nothing in there, it will simply pass.

> [!info]- Semantic Content
>
> **Code Identifiers:** asserttrue (4), assumingthat (4), assumetrue (4), assumefalse (3), assertfalse (1)
> **Code Keywords:** let (4), this. (4), class. (2), case, (2), this, (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Tools:** intellij (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Test execution order
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=0)** - [Instructor] If we don't say anything about the order of our tests, we cannot really predict what will happen.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=5)** This is not a bad thing in many cases because preferably we want our tests to be independent when we're testing units with JUnit, which means that the order of execution shouldn't matter.
>
> **[0:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=15)** In some cases, though, you might still want to test the order of the execution.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=19)** For example, when you're are executing more of integration type of test and this is where the order of execution starts to matter.
>
> **[0:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=25)** As of JUnit5, we have a more advanced way of specifying the order of our tests.
>
> **[0:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=30)** This might come as a huge surprise to you, but we can do so using annotations.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=36)** Let's have a look at how to use this using our BankAccount class for testing.
>
> **[0:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=40)** I'm going to be creating a new class, a new test class to be more precise, and I'm going to call it BankAccountOrderedExecutionTest.
>
> **[0:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=49)** There we go.
>
> **[0:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=51)** And it's going to contain two methods, testWithdraw and testDeposit.
>
> **[0:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=54)** In a previous example, we would create a new instance in every test methods.
>
> **[1:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=60)** Let's give this one a static bank account instead.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=63)** So I'm going to go ahead and say static BankAccount, bankAccount equals new BankAccount and I'm just going to be initializing it with two zeros.
>
> **[1:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=72)** And then I'm going to be writing a test for a withdrawal.
>
> **[1:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=75)** So I'm going to go ahead and say public void testWithdraw like this.
>
> **[1:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=83)** And if you remember, the code will throw an exception whenever I want to withdraw more than the minimum balance.
>
> **[1:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=89)** Our minimum balance is zero right now, so if our withdrawal gets called before our deposit, we will get an exception.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=95)** The order matters here.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=96)** So let's go ahead and say that we are going to withdraw from our bank account 300 like this, and then I'm going to use assertEquals to determine the value.
>
> **[1:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=109)** Well, in order to know this value, I will have to think of what I would deposit.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=112)** I'm going to go ahead and go with 200 an import assertEquals as well.
>
> **[2:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=120)** And then I'm going to go ahead and create public void testDeposit as well.
>
> **[2:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=129)** And in here I'm going to be depositing 500.
>
> **[2:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=135)** And in order for our test to succeed, the order matters here as well.
>
> **[2:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=139)** So I'm going to go ahead, assertEquals, should be 500 'cause I want this one to be called first, and then we go add, say bankAccount.getBalance to determine whether that's actually correct.
>
> **[2:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=150)** All right, so let's turn these two into tests and I'm going to skip the test to add discipline into it now for testing purposes.
>
> **[2:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=158)** And I'm going to be running the tests in this class.
>
> **[2:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=163)** And as you will see, our testWithdraw is failing, but our testDeposit is succeeding.
>
> **[2:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=168)** If they would run the other way around, both would succeed.
>
> **[2:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=172)** Let's now add an annotation to our test class to tell in what order to execute these tests.
>
> **[2:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=177)** There are multiple options, actually.
>
> **[2:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=179)** We could also go for alphabetical order or even write a custom order class, but right now I want to go for the most common way to order since JUnit5 and it is to use the at order annotation on each individual test.
>
> **[3:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=192)** So first, I'm going to go ahead and type @TestMethodOrder into our class and I'm going to give it a value of MethodOrderer.OrderAnnotation.class.
>
> **[3:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=208)** This is selling JUnit that the tests in this particular class going to be run in the order of the order annotations.
>
> **[3:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=215)** So in order to do this, I will have to add order annotations.
>
> **[3:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=219)** If I don't add this line on line seven with the TestMethodOrder, the at order annotations on top of the methods will become ignored.
>
> **[3:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=227)** So let's at order annotations as well.
>
> **[3:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=230)** And I'm going to say @Order(2) and for this one I'm going to say @Order(1).
>
> **[3:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=239)** Well, if you take a good look at the lower left corner right now, you see testWithdraw in front of testDeposit, and this should be the other way around when I run it again.
>
> **[4:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=246)** Let's have a look.
>
> **[4:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=250)** And as you can see, it's calling testDeposit first now, and because of this order change, testWithdraw is also succeeding.
>
> **[4:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/test-execution-order?u=76281980&t=257)** No longer an exception gets thrown because now there is a balance to withdraw from.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class, (2), static (2), public (2), this, (2)
> **Code Identifiers:** testwithdraw (5), testdeposit (5), assertequals (3), bankaccount (2), getbalance (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Nested tests
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=0)** - We have just seen test execution and how we can influence the order of our tests.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=5)** With nested tests we can control the relationship between tests.
>
> **[0:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=9)** This can, for example, be useful when you would want to separate a certain feature or a specific methods and organize your code around it.
>
> **[0:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=17)** It is often also used to execute, in case of certain conditions, such as when you, when something is not found, when something is found, and for example, when exception gets thrown.
>
> **[0:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=27)** Let's move over to Intelli J and do this for when balance is zero.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=31)** We're going to group all the scenarios we want to test for the situation in our nested class.
>
> **[0:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=37)** Let's first create a class for this, bank account, nested test.
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=45)** Alright, and we will start off by giving our class the same content as our regular bank content.
>
> **[0:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=52)** We had to withdraw any depths admits in there, and it's a great place to start.
>
> **[0:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=57)** So I'm just going to be coping all the content of this class and place it in our bank account Nested test.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=63)** There we go.
>
> **[1:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=65)** And now let's create an inner class for this class.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=67)** I'm going to call it when balance equals zero.
>
> **[1:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=70)** Let's see class when balance equals zero, and I'm going to give it two methods.
>
> **[1:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=80)** The first one is going to be public void test withdraw.
>
> **[1:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=86)** Minimum balance is zero.
>
> **[1:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=90)** And the second one is testing withdrawal When minimum balance is a thousands, let's go ahead and create it.
>
> **[1:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=100)** Withdraw minimum balance, negative a thousand.
>
> **[1:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=105)** There we go.
>
> **[1:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=107)** Let's give them some content and I'm going to be creating a bank account instance in each, but the first one is going to have a minimum balance of zero and also a balance of zero.
>
> **[1:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=118)** And the second one is going to have a minimum balance of negative thousand.
>
> **[2:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=125)** And in both cases, I'm going to be withdrawing 500 from the account.
>
> **[2:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=130)** So I'm going to go ahead and say withdraw 500.
>
> **[2:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=134)** And I'm going to do the same thing for negative thousand method.
>
> **[2:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=141)** In the first case, I expect an exception.
>
> **[2:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=143)** In the second case, I get a new balance of minus negative 500.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=147)** So let's go ahead and create your assert equals for this as well. Here, I'll use assert throws since I expect the random exception to get thrown.
>
> **[2:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=157)** I'm going to copy this code over to my lumped expression here in 40th assertion.
>
> **[2:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=168)** There we go.
>
> **[2:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=172)** The second one is going to be easier.
>
> **[2:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=173)** It just going to be the assert equals minus 500 and then bank account. It gets balance.
>
> **[3:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=181)** There we go.
>
> **[3:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=183)** Let's empathy both with a test. And again, I'm not going to add the at display name right now because we'll just take up the time. It's only for testing purposes, because what I want you to demonstrate you, if a run all the meds in this class and please keep it on the lower left corner, you'll see that only the two test methods in the outer class are running.
>
> **[3:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=205)** This is because we'll have to add as nested in order to, for them to get run as well.
>
> **[3:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=210)** And it's important to note, there's running a test of apparent class will also execute all of the tests of her child's class, at least when we add as nested to it.
>
> **[3:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=217)** So I'm going to add as nested and I need to do this on the class level. So I have to go ahead here and say, add nested.
>
> **[3:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=226)** So if I run it again, you can see that it does get run and they are displayed in the output as well, but they're indented.
>
> **[3:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=233)** They're a sub test.
>
> **[3:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=235)** So to say it's a good practice to add display names.
>
> **[3:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=238)** So let's still add some sensible display names to improve for output, I'm going to say a display name.
>
> **[4:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=243)** I'll just be very descriptive withdrawing below minimum balance exception like this.
>
> **[4:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=256)** And for the second one, I'm going to say, that's display name withdrawing and getting a negative balance like this.
>
> **[4:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=267)** I'm going to be running it again. And as you can see, it will be a lot easier to read.
>
> **[4:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=274)** Well, right?
>
> **[4:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=276)** That's it for nested classes, they are added by creating an inner class, containing some tests and we can ensure they run.
>
> **[4:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/nested-tests?u=76281980&t=282)** When the parent class gets fired off by adding the as nested annotation to the inner class.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), class. (3), assert (3), case, (2), class, (2)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - we (1)

#### Solution: Custom names
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980&t=0)** - [Instructor] Alright, let's go ahead and give our test custom names.
>
> **[0:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980&t=4)** First I'm going to scroll down to test and in here I'm going to use the annotation at display name and I'm going to give it a basic description, test addition with positive numbers.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980&t=19)** And I'm going to do the same for our other tests.
>
> **[0:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980&t=22)** Going to add the annotation at display name and I'm going to give it the description, test subtraction with negative numbers.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980&t=36)** Now I'm going to go ahead and test my code.
>
> **[0:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980&t=40)** And as you can see, this is the correct answer.
>
> **[0:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-custom-names?u=76281980&t=42)** Please make sure to add display name to both of the tests.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 3. More Advanced Usage of JUnit

#### Dependency injection in your tests
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=0)** - [Instructor] So we have seen the basics of JUnit.
>
> **[0:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=3)** Let's tackle a slightly more complex topic: dependency injection in tests.
>
> **[0:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=8)** Dependency injection is a way of having less tightly coupled classes, which is a good thing.
>
> **[0:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=13)** Definitely for tests because it encourages separation of concerns even more, which is what we want when we're only testing units.
>
> **[0:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=20)** Dependency injection occurs when we don't need to create the instance but we just get it handed to us.
>
> **[0:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=26)** So inside our tests, we are no longer going to say new BankAccount.
>
> **[0:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=30)** This BankAccount class will simply be given to us.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=33)** Dependency injection can be done in several ways on the field of a class but also on the method and the constructor parameters.
>
> **[0:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=39)** Before JUnit 5, parameters for methods and constructors were not allowed.
>
> **[0:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=44)** So this restricted us heavily in the way of injecting our dependencies, but right now, we can.
>
> **[0:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=50)** Here you can see an example of some pseudocode with dependency injection and without dependency injection.
>
> **[0:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=56)** First, we have the without dependency injection.
>
> **[0:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=59)** We have some sort of class, a car, and this car, it has an engine, and we need to instantiate this engine, either here or in the constructor or whenever we want to use it first.
>
> **[1:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=68)** Then we have the rest of the code of the class.
>
> **[1:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=71)** With dependency injection, we actually have the @Inject annotation, and the framework will be giving us our Engine object.
>
> **[1:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=79)** So no need to instantiate it before moving on with the rest of your code.
>
> **[1:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=83)** And this is on the field level but this can also be done on the method and on the constructor level.
>
> **[1:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=88)** Let's move over to IntelliJ and look at some examples of how to do this with our BankAccount case.
>
> **[1:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=94)** We would first have to specify what and how needs to get injected.
>
> **[1:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=99)** We do this by adding a ParameterResolver.
>
> **[1:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=102)** ParameterResolver is an interface with two methods: supportsParameter and resolveParameter.
>
> **[1:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=108)** We will have to override these.
>
> **[1:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=110)** Let's create a new class implementing ParameterResolver first.
>
> **[1:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=114)** So I'm going to go ahead and create a new class.
>
> **[1:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=118)** And I'm going to be calling this one BankAccountParameterResolver like this.
>
> **[2:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=126)** And this class is going to implement the ParameterResolver interface.
>
> **[2:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=133)** There we go.
>
> **[2:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=134)** It's red on the line now because you need to override two methods.
>
> **[2:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=138)** I'm going to implement them here in the lazy way, so I'm actually going to get some help from IntelliJ implementing these.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=147)** Now let's make sure it support this type of BankAccount by changing our supportsParameter like this.
>
> **[2:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=153)** Instead of having it return false, I'm going to make it return parameterContext.getParameter and then I actually want to be getting a type, and if it's of type BankAccount class, it should return true.
>
> **[2:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=169)** If it's not, it should return false.
>
> **[2:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=171)** There we go.
>
> **[2:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=172)** So it's supported as soon as we're talking about a BankAccount instance.
>
> **[2:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=177)** Great, now make sure that our resolveParameter, which is the one that is going to hand the object to us is actually not resolving it to null 'cause then we'll get all these null pointers in our code but we want this to return a new BankAccount.
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=190)** And I'm just going to use zero and zero for this one.
>
> **[3:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=194)** Great, now if we go and create a new test that's going to be using this class, we don't need to create our instances of BankAccount in there.
>
> **[3:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=201)** Let me show you how to do it.
>
> **[3:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=202)** But first, we're going to need a new class for this.
>
> **[3:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=205)** So I'm going to go ahead and create a new test class and I'm going to call it BankAccountDI, dependency injection, Test.
>
> **[3:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=213)** There we go.
>
> **[3:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=214)** And now I need to do something special.
>
> **[3:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=216)** I need to annotate this class with the ExtendWith parameter.
>
> **[3:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=222)** And it's going to be extended with the BankAccountParameterResolver.class and this is actually going to enable us to just use the BankAccount as if it were instantiated already.
>
> **[3:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=233)** If we don't use this one, it won't know what it needs to inject.
>
> **[3:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=237)** So let's copy the deposit method from BankAccountTest over here, so I'm going to be using this one.
>
> **[4:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=245)** And I'm going to copy it to our DITest like this, and I'm going to change it a bit.
>
> **[4:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=250)** So instead of creating a new instance here, I'm going to pass it in as a parameter.
>
> **[4:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=257)** So in here, I'm going to say BankAccount bankAccount like this.
>
> **[4:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=262)** Remember, I created one in our ParameterResolver with both balance and minimumBalance zero.
>
> **[4:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=268)** This is why I will have to adjust the assertion in order to make sure that it's still going to pass.
>
> **[4:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=273)** So I don't expect 500 but expect this one in here.
>
> **[4:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=280)** And other than this, it should be fine.
>
> **[4:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=282)** I'm going to run it, and you'll see that this test is going to pass.
>
> **[4:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=286)** This might actually seem like a lot of hassle to get to the same result but since we are working with loosely coupled classes here, this is much better already.
>
> **[4:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/dependency-injection-in-your-tests?u=76281980&t=295)** And also, you saw in some of our previous video that we had many methods in there and many bank account instantiations, and this is just really ugly, and this is a good way to work around this, and to improve your code by a lot.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (4), class, (3), this, (3), pass (3)
> **Code Identifiers:** supportsparameter (2), resolveparameter (2), parametercontext (1), getparameter (1), bankaccount (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (3), is an  (1)
> **Tools:** intellij (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Repeated tests
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=0)** - [Instructor] We can repeat a test a certain number of times.
>
> **[0:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=4)** You might guess how, using an annotation of course.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=7)** We use the @RepeatedTest annotation for this, and this is great for several reasons.
>
> **[0:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=12)** For example, testing the behavior of an endpoint when you access it multiple times.
>
> **[0:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=17)** It's actually very easy to use.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=19)** If we go ahead and copy our dependency injection code to new class.
>
> **[0:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=23)** I'm going to create a new class and I'm going to be calling this BankAccountRepeatedTestTest.
>
> **[0:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=27)** to be calling this BankAccountRepeatedTestTest.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=31)** It looks correct and I'm going to be copying the dependency injection code to it, and I need to add the ExtendWith on top as well.
>
> **[0:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=44)** BankAccountParameterResolver.class, yes, and if we replace the test with @RepeatedTest, we can specify the number of times we need to run this test.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=55)** For example, if I'm going to say five, this test is going to be running five times.
>
> **[1:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=60)** Let me run this and show you.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=63)** As you can see in the lower left panel now, there's a repetition one to five, all the way until five of five.
>
> **[1:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=72)** The test results, they are in this case, saying they are all passing, but you can click on them and you can see the result for each individual test repetition.
>
> **[1:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=81)** We can use a special object to get information about repetition.
>
> **[1:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=85)** We do so by adding a repetition info as a parameter.
>
> **[1:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=89)** I'm going to copy this method to show you, Add RepetitionInfo to the name, and I'm going to add it as a parameter as well, like this.
>
> **[1:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=103)** Then in here, for example, I can just make some output, for example, the number that we are running this.
>
> **[1:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=110)** I can say number plus repetitionInfo getCurrentRepetition.
>
> **[1:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=111)** I can say number plus repetitionInfo getCurrentRepetition.
>
> **[1:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=116)** This is just outputting the current repetition.
>
> **[2:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=123)** Yes, change this, and if I'm going to run this, you'll actually see that it's outputting the number and then the number of repetition for every repetition.
>
> **[2:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=136)** Clearly, this is not very useful, but you can imagine if I could use it to do calculations with it, for example.
>
> **[2:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=141)** If I would want to have a different number, I'm going to be depositing every time.
>
> **[2:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=146)** So this is how easy it is to repeat a test a certain number of times.
>
> **[2:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=150)** You can simply use the @RepeatedTest annotation and specify how often you'd like to use it.
>
> **[2:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=156)** Repeating tests can be really great whenever you need to execute a test multiple times to verify the behavior.
>
> **[2:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=162)** For example, when you want to access an endpoint multiple times.
>
> **[2:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=166)** This repeating tests gets way more powerful when you can use different parameters every time you run it.
>
> **[2:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/repeated-tests?u=76281980&t=172)** In the next video, we'll see just that.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), this. (2), class. (1), class, (1), let (1)
> **Analogies:** for example (6), imagine (1)
> **Code Identifiers:** repetitioninfo (2), getcurrentrepetition (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Parameterized tests
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=0)** - We've just learned how to repeat a test a certain number of times.
>
> **[0:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=4)** This becomes way more interesting, combining it with parameterized tests.
>
> **[0:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=8)** Using the @ parameter test annotation, enables us to specify a data source for our parameters.
>
> **[0:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=14)** And when we want to run the test, a certain number of times, we can do so with different parameters.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=19)** There are different ways to specify a source.
>
> **[0:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=22)** Let's start with the easiest one.
>
> **[0:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=25)** I'm first going to be creating a new class.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=28)** And I'm going to call this bank account parameterized test test.
>
> **[0:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=35)** And you hit enter.
>
> **[0:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=37)** And actually, I'm just going to be copying the code for repeated test to this one.
>
> **[0:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=43)** So here we go.
>
> **[0:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=47)** And also, I'm going to add extend with on top.
>
> **[0:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=53)** And in here, I'll replace the repeated test with @ parameterized test.
>
> **[0:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=59)** And whenever I do this, I will need to specify which parameters to use.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=63)** The parameters come from a source.
>
> **[1:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=66)** So, let's start with using the @ value source.
>
> **[1:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=68)** This annotation is to specify our parameters directly.
>
> **[1:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=71)** The source is always an array.
>
> **[1:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=77)** And in here I'm going to use the ints.
>
> **[1:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=80)** So as you can see, this is one of the array's that they can specify.
>
> **[1:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=85)** And I'm just going to be adding some values in.
>
> **[1:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=89)** Eight hundred, and let's say thousands, all right.
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=93)** Let's change our deposit methods to deposit multiple values.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=96)** And we can do so like this.
>
> **[1:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=99)** So instead of having the amount specified here, I'm going to use the amount that I'm going to specify as our first parameter.
>
> **[1:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=111)** And it will know that this one needs to come from the value source.
>
> **[1:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=115)** Our assert equals true, to also check for amount.
>
> **[1:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=119)** And as you can see, this test is going to run four times.
>
> **[2:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=122)** Let me show you because we have four value specified.
>
> **[2:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=126)** We have hundred, 400, 800 and thousand.
>
> **[2:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=130)** Let me just change the display name because we're not depositing 500 anymore.
>
> **[2:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=137)** And as you can see all the tests are passing as well.
>
> **[2:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=141)** If you paid close attention, when I was typing this, we actually had an autocomplete going on.
>
> **[2:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=148)** And this is only allowing a certain number of data types that TRA can be using.
>
> **[2:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=154)** So we can see it can be shorts, bytes, ints, longs, floats, double, chars, booleans, and then string and class.
>
> **[2:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=161)** And that's it.
>
> **[2:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=162)** So let me change this back to what we had.
>
> **[2:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=165)** And we're going to use a different type of parameter source for our next method.
>
> **[2:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=169)** So we have just used a value source, but are actually other sources we can choose from.
>
> **[2:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=174)** We can use public void test, and then just go ahead and test some sort of enum, because I want to use the enum source here.
>
> **[3:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=181)** And I'm going to use the day of week enum, like this.
>
> **[3:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=185)** And I'm just going to be testing what it is, actually is starting with a T.
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=190)** So I'm going to say a assert true.
>
> **[3:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=193)** And then in here, I will say, day to string, start with, and then I'll use the T like this.
>
> **[3:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=202)** Now I will have to specify that this is actually a parameterized test.
>
> **[3:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=206)** And I will have to specify the enum source.
>
> **[3:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=209)** The first argument is the value argument.
>
> **[3:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=212)** And this one requires the enum that I'm using.
>
> **[3:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=215)** And in here, I'm going to be using the day of week build in enum, like this.
>
> **[3:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=220)** And then I can specify which values are allowed.
>
> **[3:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=223)** And in this case, I'm only going to use days that start with a T, which would be Tuesday and Thursday, like this.
>
> **[3:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=234)** All right, this is a silly example of course, but it can be very useful to test all the values, or some of the values of a certain enum.
>
> **[4:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=242)** And see whether it's not trying an exception or returning no, for example.
>
> **[4:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=246)** As you can see here, they're both passing since both Tuesday and Thursday, start with the T.
>
> **[4:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=252)** All right, let's step away from enums, and also from this type of silly example, and move back to our bank account case, and look at two sources, the CSV source and CSV file source.
>
> **[4:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=263)** We can use the CSV source for literal CSV like this.
>
> **[4:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=267)** I'm going to write a method, and it's going to be called public voids.
>
> **[4:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=271)** And then let's do deposits and name test.
>
> **[4:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=276)** And it will take some sort of amounts, followed by string name and also by a bank account.
>
> **[4:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=288)** All right, I'll insert the code later.
>
> **[4:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=289)** Let's now first start with our annotations that are going on.
>
> **[4:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=292)** So I will start with the parameterized test, cause it's still parameterized test.
>
> **[4:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=297)** But now I'm going to be adding a CSV source on top.
>
> **[5:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=301)** So there we go.
>
> **[5:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=302)** And in here I will have to add an array.
>
> **[5:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=306)** And in this case, our array should contain amounts and also a string name.
>
> **[5:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=310)** So the first value is going to be amount.
>
> **[5:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=313)** And second one is the string name, and this is valid CSV.
>
> **[5:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=318)** It looks a bit weird when I typed out like this, but you can see later how you can actually just refer to a CSV file, which might make more sense in many cases.
>
> **[5:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=325)** And this will be 200 and Rachid.
>
> **[5:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=329)** And then let's do one more.
>
> **[5:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=331)** And that's 150 and Ted.
>
> **[5:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=337)** All right, let's give this method the body.
>
> **[5:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=339)** So I'm going to use our bank account, and deposit the amounts to it.
>
> **[5:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=344)** I'm also going to be setting the account holder name to the name that we've gotten.
>
> **[5:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=351)** And then I'm going to make two assertions, and I'll just write them down like this for now.
>
> **[5:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=356)** So you can say assert equals amount, and then check the bank account balance for this.
>
> **[6:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=364)** And also, I'm going to be using the assert equals to check the name of the account holder.
>
> **[6:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=369)** So I'm going to see if it's the same as name.
>
> **[6:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=374)** And there we go.
>
> **[6:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=376)** So let's run this.
>
> **[6:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=379)** And you will see it's repeating three times, with the values hundred Mary, 200 Rachid, and 150 and Ted.
>
> **[6:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=386)** It also says so, three tests are passing.
>
> **[6:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=389)** JUnit will try to cause the source to the type of the parameter.
>
> **[6:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=392)** So in our case, we have for example, a hundred and then followed by Mary.
>
> **[6:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=397)** So it will try to cast a hundred to a double, and then Mary to a string, which is both possible.
>
> **[6:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=402)** But if this is not compatible, it will show the exception precondition violation.
>
> **[6:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=408)** Let me demonstrate this by adding some text to these numbers that can no longer cost it to a double.
>
> **[6:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=416)** As you can see now it's not passing for Mary, since it's not succeeding in doing the costs from high hundreds to a double.
>
> **[7:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=423)** All right, let me change this back.
>
> **[7:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=425)** As you might guess, the add CSV files annotation is doing the same thing, but instead of containing the CSV the value is about pointing to the CVS file.
>
> **[7:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=435)** And this enables us to use a CSV file as input for a test.
>
> **[7:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=438)** Which can be very useful, especially when it's a bigger file.
>
> **[7:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=441)** So let's first add a folder that would be a logical place to store a CSV file in.
>
> **[7:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=447)** And in this case, I'm going to be creating a resources folder in our test.
>
> **[7:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=452)** So I'm going to create a new directory and call it resources.
>
> **[7:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=457)** And actually, I'm also going to mark this as default directory for test resources route.
>
> **[7:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=463)** That's the right one.
>
> **[7:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=464)** And then in this resources file, I'm going to be creating a CSV file.
>
> **[7:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=469)** So let's just call this details.csv for now.
>
> **[7:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=474)** I'm going to be inserting the same value.
>
> **[7:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=477)** So I'm fine with the text pattern.
>
> **[7:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=479)** That's open this up.
>
> **[8:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=480)** And in here, I'm going to say a hundred Mary, 200 Rashid, and 150 Ted.
>
> **[8:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=490)** All right, so clearly this is way more interesting for massive data files.
>
> **[8:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=495)** And if we use this for massive data files, we have a very elegant way of pointing to a file with a lot of content from our test.
>
> **[8:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=503)** So since this is the expected place for resources, we can simply add the annotation with a path like this.
>
> **[8:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=511)** So let me move back to our test.
>
> **[8:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=514)** And if I were to change this one to the add CSV file source, I can only specify here the details.csv, and this will do the exact same thing.
>
> **[8:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=532)** It's the resource property.
>
> **[8:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=533)** It does need to know that.
>
> **[8:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=534)** So let me run this.
>
> **[8:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=536)** And as you can see now, it's doing the exact same thing, and it's passing as well.
>
> **[9:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=541)** Last point, that is a good to know, is that you can specify with the lumped property, what does CSV delimiter is?
>
> **[9:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=547)** So for example, if we would want to have a semi colonist debt, we can do so by adding a semi-colon here.
>
> **[9:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=555)** And that's it.
>
> **[9:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=556)** We've seen common ways to create parameterized test now.
>
> **[9:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=559)** And there are more complex options such as creating custom argument converters, for example.
>
> **[9:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parameterized-tests?u=76281980&t=564)** But for now you have seen the ones that you find yourself using in most of these situations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), this. (10), enum (7), case, (5), assert (4)
> **Env Vars:** csv (14), tra (1), cvs (1)
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** make (2), find (1)
> **File Paths:** details.csv (2)
> **Definitions:** is a  (2)
> **Speakers:** - we (1)

#### Timeouts
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=0)** - [Instructor] It is not uncommon that you want to specify a certain max execution time for a test.
>
> **[0:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=6)** With different and older JUnit dependencies, there were multiple ways to do this.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=10)** We could add timeout as an attribute to do the test and we could create a rule for all the tests in our class.
>
> **[0:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=17)** Right now, there's more a elegant solution, and we're going to see two solutions actually.
>
> **[0:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=22)** We're going to see the @Timeout annotation and the assertTimeout methods.
>
> **[0:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=27)** I have prepared a class here that I will use to demonstrate how to use timeout in JUnit 5.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=33)** So the first one is to have @Timeout on top of your Test class.
>
> **[0:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=37)** And we can just say @Timeout here, and then it will take two attributes: the amount that it can wait and then the unit.
>
> **[0:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=44)** So I'm going to say value and this is going to be 500.
>
> **[0:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=49)** And then the time unit, which is going to be milliseconds.
>
> **[0:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=54)** I wonder if that would be a bit long test.
>
> **[0:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=56)** So let's go for the milliseconds.
>
> **[0:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=58)** There we go.
>
> **[0:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=59)** And now we can give our method a body and let's try to make it fail first.
>
> **[1:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=64)** So I'm just going to put in a Thread.sleep to make this method wait a bit.
>
> **[1:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=70)** I'm just going to say wait for 100 milliseconds and then catch the possible InterruptedException.
>
> **[1:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=78)** And after this, I will just do something like bankAccount.deposit, which starts at zero, so we're going to deposit 300, and then I'm just going to assert whether that's actually the case.
>
> **[1:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=90)** So I'm going to assertEquals 300, and then bankAccount.getBalance like this.
>
> **[1:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=97)** Import the assertion method and there we go.
>
> **[1:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=100)** If you run this right now, we'll get a failed test, and the sleep InterruptedException.
>
> **[1:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=105)** So let me show you it does that.
>
> **[1:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=108)** There we have it.
>
> **[1:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=109)** So we get sleep interrupted and our test has failed.
>
> **[1:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=113)** If I lower the amount that our thread is sleeping, you will see that our test is going to pass.
>
> **[1:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=118)** So let's just make it sleep for 200 milliseconds.
>
> **[2:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=121)** We have 500, so this should be more than enough.
>
> **[2:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=125)** And right now, this test will pass because it's going to be done before the test expires.
>
> **[2:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=130)** If you would want this timeout for all the methods in our class, we could also put it on top of our class, like this.
>
> **[2:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=136)** And now it's actually for all the tests in our class.
>
> **[2:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=139)** We have this timeout of 500 milliseconds.
>
> **[2:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=142)** So let me just comment this out.
>
> **[2:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=146)** You can read it later.
>
> **[2:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=149)** And I'm going to be placing this back here.
>
> **[2:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=153)** So this is the first way with the @Timeout assertion.
>
> **[2:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=157)** And a second way is to have the assertion timeout on assertion level.
>
> **[2:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=162)** This won't take the full time of the method but only the assertion, which is more accurate in many situations because that's the level you usually want to know the execution time of.
>
> **[2:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=171)** As I already said, we can do this with the assertTimeout method.
>
> **[2:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=175)** So let me just copy in this code.
>
> **[3:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=182)** And I'm going to make it sleep for 1,000 milliseconds again so you can see that this is really only happening on the assertion level.
>
> **[3:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=188)** And I'm going to be replacing this with assertTimeout like this.
>
> **[3:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=195)** And then in here, I'll have to specify the duration.
>
> **[3:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=200)** I'm just going to give it a Duration.ofMillis and then just go for 500.
>
> **[3:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=208)** And then we'll have to specify what it actually needs to do in the situation.
>
> **[3:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=211)** And I'm going to make sure that it's going to fail, and I'm going to make this thread sleep for a little while.
>
> **[3:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=218)** So I'm going to go ahead and say Thread.sleep.
>
> **[3:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=224)** And just make it sleep for longer than we have the duration set.
>
> **[3:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=230)** Oh, there we go.
>
> **[3:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=231)** And import this.
>
> **[3:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=234)** So I'm going to be running this, and as you will see, this test is going to fail right now because it's going to sleep for longer than the duration that we specified.
>
> **[4:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=244)** It also says, so execution exceeded timeout of 500 milliseconds.
>
> **[4:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=247)** So if I lower this to just say 10, for example, our test will pass because the time box won't expire.
>
> **[4:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=256)** Clearly, this is a silly example and instead of sleep, you would want to have an actual task in there.
>
> **[4:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=261)** To demonstrate, this is really only looking at the executable's duration.
>
> **[4:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=265)** You can see that it has the Thread.sleep on top, and this is being ignored and it's still passing.
>
> **[4:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=271)** Therefore, the assertTimeout can sometimes be preferred when you need to be more precise or whenever you need to do a lot of heavy work before the assert that you do not want to take an account for your timeout.
>
> **[4:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/timeouts?u=76281980&t=281)** So if you would need to time this, the assertTimeout is not the method to go with but you should be using the @Timeout annotation instead.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (5), class. (3), this, (3), pass (3)
> **Code Identifiers:** asserttimeout (5), bankaccount (2), assertequals (1), getbalance (1), ofmillis (1)
> **CLI Commands:** make (7)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Parallel execution
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=0)** - [Instructor] Parallel execution means that multiple tests are running at the same time.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=5)** This can be done when the order, and also the order of the report, doesn't matter.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=10)** In J unit five, we can easily turn it on by setting a configuration parameter.
>
> **[0:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=15)** So far, we have not been touching this yet, but with configuration parameters, we can decide general rules and conditions for tests to run.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=24)** So we're going to create a properties file in our resources, and we're going to be calling this J Unit platform dot properties.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=31)** There we go.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=33)** And in here I'm going to be adding two lines.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=36)** The first one is J Unit dot Jupiter dot execution dot parallel dot enabled.
>
> **[0:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=44)** And then I'm going to set to a value true.
>
> **[0:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=47)** And the second one is very similar, J Unit, Jupiter, execution, parallel, and then config strategy.
>
> **[0:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=57)** And it has to be dynamic.
>
> **[1:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=60)** This will change properties for all or tests.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=63)** However, they don't run parallel automatically.
>
> **[1:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=66)** In order to achieve that, we'll have to indicate as we want this on top of her class by adding, you might not get this, but an annotation.
>
> **[1:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=74)** So let's go ahead and create a new class let's call it bank account parallel execution test.
>
> **[1:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=84)** And on top of this class, we have to specify the at execution annotation.
>
> **[1:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=90)** And in there we have to say, watch the execution mode should be, and we need concurrent for this.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=96)** And also use the extent with on our class.
>
> **[1:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=100)** And we're going to be extending it with our bank account from resolver dot class.
>
> **[1:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=106)** Let's now just copy some tests in here and I'm just going to be using this deposit method that we've seen in the very beginning a few times.
>
> **[1:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=114)** Going to copy it and paste it in here.
>
> **[1:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=118)** And let me just copy and paste is twice more.
>
> **[2:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=123)** There we go.
>
> **[2:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=124)** And do clearly need to change the names of our methods.
>
> **[2:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=127)** So I'm adding numbers in the back.
>
> **[2:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=130)** So (indistinct) get unique, all right, if I run this, that right now, it will probably go too fast for you to see in the lower left corner, but they are running concurrently, but it went way too fast.
>
> **[2:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=144)** So let's change this and add some slips in our method.
>
> **[2:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=148)** And actually also going to be stealing this one more time out of test.
>
> **[2:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=153)** There we go.
>
> **[2:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=158)** And I'm just going to be, let me make this one a bit slower even.
>
> **[2:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=168)** This one, somewhere in the middle.
>
> **[2:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=170)** All right. So if I run this now, it will look very different.
>
> **[2:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=175)** As you can see, they are running and the last one is done before the middle one is done.
>
> **[2:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=179)** They are running concurrently, at the same time.
>
> **[3:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=181)** Whereas if I turn off the execution mode, let me just comment this out for a second.
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=186)** And I run it again. You will see the difference.
>
> **[3:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=188)** They are running one by one in order to specify them.
>
> **[3:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=195)** As you may have noticed, this was also taking much longer since they're all waiting for one second or around one second.
>
> **[3:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=202)** And they were doing it at the same time in a previous execution.
>
> **[3:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=205)** So let me turn this on again so you can see how much faster this was.
>
> **[3:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=209)** So in this mode, it's going to be as slow as the slowest one, but you're not going to be waiting all for it.
>
> **[3:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=215)** As you can see, it's done way faster.
>
> **[3:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/parallel-execution?u=76281980&t=217)** So this is how easy it is to enable parallel execution of tests in J Unit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), class. (2), class, (1), this. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Lifecyle control: Before and after
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=0)** - [Instructor] Many cases, you would want to do something before and after your tests.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=5)** We can perform certain actions before and after our test methods using, well, of course, annotations.
>
> **[0:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=12)** We can add the annotation @BeforeAll to a method, and then it will run before the test.
>
> **[0:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=18)** Let me demonstrate this behavior, but first, I'm going to create a new class, and I'm going to be calling this, BankAccountBeforeAndAfterTest, like this.
>
> **[0:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=29)** And in here, I'm just going to copy the code of our ordered execution class, but I'm going to be getting rid of the ordered part here.
>
> **[0:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=39)** So I'm going to be copying this in and removing Order.
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=45)** And I'm just going to start the balance at 500 now, just for a second.
>
> **[0:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=50)** So after the first method, it should be around 200.
>
> **[0:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=54)** Adding 500 to it will give us 700.
>
> **[0:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=58)** So if I run these tests, they should pass like this.
>
> **[1:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=62)** And as you can see, they're passing fine.
>
> **[1:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=64)** All the red in the middle is because the configuration parameters have to be specified earlier.
>
> **[1:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=69)** So, okay, say I would want to be doing something before all the methods.
>
> **[1:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=74)** I can do so by adding a method here and having the annotation @BeforeAll on top.
>
> **[1:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=80)** I'm going to go ahead and say, public static void and then just prepTest, like this.
>
> **[1:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=85)** And instead of initiating bankAccount on top, I'm just going to be initiating it here.
>
> **[1:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=91)** So I'm going to copy this code down and delete it off there.
>
> **[1:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=99)** So, right now, the bank account, it will get modified by the first method, and so will it by the second.
>
> **[1:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=106)** And it's the same object, but it is fine because that was the case already.
>
> **[1:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=109)** So this is not going to be changing anything.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=112)** So let me also insert the @AfterAll here.
>
> **[1:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=115)** And I'm putting this on the bottom.
>
> **[1:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=117)** It's actually not necessary. I could also put it on top.
>
> **[2:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=121)** I'm just going to say @AfterAll, and in here, I'm just going to say public, has to be static again, void endTest, like this.
>
> **[2:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=131)** And let's just say something like, Bye.
>
> **[2:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=133)** And you can imagine this would be great to set up these values for the whole test classes with before and then close any lingering connections in the after, or make sure that the objects get destroyed in the after.
>
> **[2:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=145)** So let me run this all.
>
> **[2:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=147)** And as you can see, it is going to have the Bye statement when it's done.
>
> **[2:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=155)** And I didn't insert anything of a print statement in the BeforeAll, but if I would've had, it would've printed it before Bye.
>
> **[2:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=161)** So let me show you that as well.
>
> **[2:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=163)** Let's go for Hi, run it again, and it will just say Hi and then Bye when it's done.
>
> **[2:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=168)** So Hi is appearing earlier, and then we get Bye when it's done.
>
> **[2:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=172)** With unit tests, you generally don't want to depend on the test, so we could reset the account before every test using the BeforeEach instead.
>
> **[3:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=180)** We will have to adjust our second method though because the outcome will be different since the account balance is different when it answers this method now because the previous one will not affect it.
>
> **[3:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=190)** So let's change this one to BeforeEach, and then also change this one to AfterEach, and adjust the code before we run it again.
>
> **[3:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=205)** So now, we have the bank account is 500.
>
> **[3:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=207)** When we withdraw, it's 200 left.
>
> **[3:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=210)** And then, if we deposit, this should become 1,000, like this.
>
> **[3:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=214)** Okay, I'm going to be running this code again.
>
> **[3:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=218)** And the problem right now is that it's static, and we don't need it for BeforeEach and AfterEach.
>
> **[3:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=225)** Let me remove this and then run them all again.
>
> **[3:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=229)** And as you can see, they're passing.
>
> **[3:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=231)** We get Hi, Bye, and then, for the next test, again, we get Hi, Bye.
>
> **[3:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=236)** Now, there's a way to go around these static ones for BeforeAll and AfterAll.
>
> **[4:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=240)** So let me just change these back.
>
> **[4:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=243)** And right now, there is a problem because these would have to be static.
>
> **[4:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=246)** Let me show you.
>
> **[4:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=247)** If I run it, it is going to be complaining.
>
> **[4:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=251)** So I'm going to run this, and we will get a nice exception, and our tests will get ignored.
>
> **[4:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=259)** But we can actually modify our class a little bit.
>
> **[4:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=263)** By adding on top of our BankAccountBeforeAndAfterTest, we can add the TestInstance, and then we can change the lifecycle.
>
> **[4:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=274)** And if we change this to Lifecycle.PER_CLASS, it no longer needs to be static for it to run.
>
> **[4:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=281)** So let me run it again, and you will see that, right now, we can use the BeforeAll and AfterAll without static.
>
> **[4:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=287)** The reason now that our test deposit is failing is clearly because our bank account is again static and will only get created once, and it will be influenced after our first method, and it won't be changed afterwards.
>
> **[4:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=299)** So this one has to go back to 700, and then it will succeed again.
>
> **[5:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=304)** So let me run this again.
>
> **[5:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/lifecyle-control-before-and-after?u=76281980&t=307)** And as you can see, it's passing now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), static (8), this. (5), class, (2), this, (2)
> **Code Identifiers:** preptest (1), bankaccount (1), endtest (1)
> **CLI Commands:** make (1)
> **Env Vars:** per_class (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)

#### Custom messages and reports
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=0)** - [Instructor] All right, let's talk about options for creating custom messages and reports.
>
> **[0:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=5)** First of all, we have seen display name already.
>
> **[0:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=8)** Second, we saw that we could add a custom message as a third argument for assertions.
>
> **[0:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=14)** And what we'll also see, and this is new, is the Surefire plugin that we can use.
>
> **[0:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=20)** So first of all, we have seen display name already.
>
> **[0:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=23)** With the annotation "@DisplayName", we could add a custom message to our report.
>
> **[0:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=29)** And what we also saw was that we could add a third argument to assertEquals.
>
> **[0:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=34)** So, for example, here, we could specify and insert a custom message, for example, "Unexpected value, expected 900".
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=45)** Clearly, this is not going to be very informative.
>
> **[0:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=47)** This was what the test would also be saying, but in order to get this message on the screen, we have to make sure that the test is going to fit.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=55)** Let me run this again.
>
> **[0:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=58)** And if I scroll down a bit, you can see here, our custom message, "Unexpected value, expected 900".
>
> **[1:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=68)** Let me remove this message again, because we have seen it already, anyways... So, at this point we're only getting the reports in our console, and clearly it would be nice to store this as a report.
>
> **[1:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=82)** We are going to generate reports that will be stored using the Surefire plugin.
>
> **[1:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=86)** This is a very easy to configure plugin, but we'll just have to update our pom a bit.
>
> **[1:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=92)** So, let's go to our pom, and we're going to have to go ahead and make some modifications.
>
> **[1:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=100)** So, we're going to make sure that we are having the latest version of Java.
>
> **[1:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=105)** And then, in here, I'm going to be adding a "build" section.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=112)** So I'm going to create "build", here, and in the build, I'm going to specify a number of plugins that I will be using.
>
> **[2:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=121)** And in this case, I want to be using the Maven Surefire plugin, so let me create that... And it has the artifactId of "maven-surefire-plugin", there it is.
>
> **[2:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=134)** And I want to specify the version, as well, and I'm going to be using the version 2.22.2.
>
> **[2:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=142)** And then, I want to specify one more plugin, and it's very similar, so I'll copy-paste it, but this is the Maven Failsafe plugin, and it's the same version it should be having.
>
> **[2:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=155)** Yes. All right.
>
> **[2:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=157)** So, this is actually all that we need to do.
>
> **[2:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=161)** We don't need to go ahead and adjust our code, but you might wonder how we can get it to generate these reports, because if I'm just going to run it, it won't happen.
>
> **[2:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=170)** Well, what I can do, I can move over to the terminal, here, and in here, I can just specify the command "mvn", Maven, and then, in here, I'm just going to say "surefire-report", go ahead and make a report for me.
>
> **[3:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=184)** Run this in the terminal, and as you can see, it's working for us, and it's finished.
>
> **[3:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=192)** It has built the report, and it will generate these reports in the target folder, so let me show you... Here is the target folder.
>
> **[3:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=202)** And in here, it will have the Surefire reports folder, and it has a couple of reports, and many of these are text files, let me show you them.
>
> **[3:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=214)** So, as an example, it's showing that one of them has failed, what happened exactly, but what might be even nicer to see, is we also have a very nicely formatted one, and that's in the "site" folder in target, so it's this one, over here.
>
> **[3:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=229)** And let me go ahead and open this in the browser... And here you can see the report.
>
> **[3:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=235)** It is nicely formatted, and it's way more readable to non-tech people, because this has nice tables knit, instead of looking more like some sort of lock file.
>
> **[4:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=244)** We can see the success rates, for example, we have three errors, two failures, and we can see the time it took.
>
> **[4:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=250)** We have more information here on old tests we have done, and we have a bunch of test cases, and this report's looking much nicer already.
>
> **[4:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/custom-messages-and-reports?u=76281980&t=258)** You can go ahead and customize this even further, but for now I would say that's beyond the scope of this course, because that will just be plain formatting that you'd have to do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), new, (1), case, (1)
> **CLI Commands:** make (4), mvn (1)
> **Analogies:** for example (3)
> **Code Identifiers:** assertequals (1), artifactid (1)
> **Versions:** version 2 (1), 22.2 (1)
> **Tools:** terminal (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is a  (1)

#### Conditional test execution
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=0)** - [Instructor] We can have conditions for running our tests.
>
> **[0:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=3)** For example, only run a certain version of a test on a certain operating system or for a specific Java Runtime Environment.
>
> **[0:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=11)** The same thing we could do for system properties.
>
> **[0:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=13)** Of course we could build if statements, checking for system properties inside our test, but that would look horrible.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=19)** So the J-unit answer, you might guess it, is more annotations.
>
> **[0:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=26)** We're going to have a look at a few of these conditions.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=28)** Before we do so, I'd like to point out that this is not generally considered a good practice.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=33)** It makes tests more complicated than they probably should be.
>
> **[0:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=37)** However, there can be situations in which this is unavoidable.
>
> **[0:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=40)** So let's have a look at how to do this.
>
> **[0:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=43)** Here's the test class that I prepared.
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=45)** It's called BankAccountConditionalTest.
>
> **[0:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=48)** And right now, it's containing four methods, but these methods, they don't have any content and they're not tests just yet.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=55)** If we look at this first test, it's called testMac.
>
> **[0:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=59)** And actually, I want this test to only run on operating systems of Mac versions.
>
> **[1:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=64)** So I'm on a MacBook.
>
> **[1:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=65)** So this test, it should run on my machine.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=67)** So I'm going to say EnabledOnOs, and in here, I can specify an array with all the OSs it should be enabled on.
>
> **[1:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=74)** I'm going to be selecting MAC.
>
> **[1:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=77)** And I'm going to do something very similar for Windows, but this time it should be enabled on Windows only.
>
> **[1:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=85)** So if I go ahead and I run this class right now, it has two tests in there and the Mac one should run and the Windows one should not.
>
> **[1:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=93)** So let's have a look at what's happening.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=96)** And as you can see, the one testMac is running.
>
> **[1:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=99)** And it has Windows, it gets ignored.
>
> **[1:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=102)** We can do a very similar thing for the Java Runtime Environment.
>
> **[1:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=106)** I could, for example, say that it should only be allowed on Java Runtime Environment 16.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=112)** So let me do that.
>
> **[1:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=114)** I can say EnabledOnJre, this one.
>
> **[1:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=119)** And in here, I can then specify on what Java Runtime Environment it should all be running.
>
> **[2:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=124)** And for now, I'm just going to go for 16, import it.
>
> **[2:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=133)** I can specify multiple ones and I'm using Java 16, so this should work.
>
> **[2:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=138)** And if I run this one, you'll see that it will just run and also pass.
>
> **[2:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=143)** But what I could also do is instead of enabled, I could also say, well, is disabled in this specific Java Runtime Environment.
>
> **[2:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=153)** And if I run this one right now, you will see that it gets ignored.
>
> **[2:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=164)** So let's see what happens if we use the DisabledOnJre.
>
> **[2:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=169)** And in here, I should just specify the range that is not allowed, and I'm going to be selecting JAVA_16 here.
>
> **[2:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=179)** And then I'm going to be running all the methods in the class and we'll see what's going to happen.
>
> **[3:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=186)** And as you can see, the testJRE, testing for Java 16, it's running and so is the one for Mac.
>
> **[3:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=195)** But one for Windows and not Java 16, they are not running.
>
> **[3:20](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=200)** We can also check for system and environments variables using these annotations, The @EnabledIf system property, and you just specify the name of the property and its value, similar for DisabledIf system property and EnabledIf environment variable named and that matches something.
>
> **[3:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=219)** So this is how you can check for system properties and environment variables.
>
> **[3:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=224)** These are so similar to the others.
>
> **[3:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=226)** They'll just check the condition, and if the condition is true, the test will run.
>
> **[3:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=230)** If the condition is false, the test won't run and it will get ignored.
>
> **[3:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=235)** We can even use all this annotation we have seen to create custom annotations.
>
> **[4:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=240)** And that is because all these annotations actually have scope level annotation as well.
>
> **[4:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=245)** So this way you could create combined annotations.
>
> **[4:08](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=248)** Just one final note, you may run into the annotations EnabledIf and DisabledIf.
>
> **[4:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/conditional-test-execution?u=76281980&t=254)** These look very pretty, but don't use them because they are deprecated.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), pass (1)
> **Code Identifiers:** testmac (2), testjre (1)
> **Versions:** java 16 (3)
> **Analogies:** for example (2), similar to (1)
> **Env Vars:** mac (1), java_16 (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Disabling unit tests
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=0)** - [Instructor] One more thing I'd like to show you, is how to temporarily, or actually, also permanently disable a test.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=7)** And we can disable tests using, this might grow old by now, but annotations.
>
> **[0:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=13)** The disabled annotation, it can be used to disable a test.
>
> **[0:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=17)** Let's move over to intelligent and demonstrate it using the code of one our previous classes.
>
> **[0:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=23)** So I've prepared a class here and the school bank account disabled test, and I've copied the code from our bank account AI test in here.
>
> **[0:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=32)** And right now, if I run this, you'll see that our test will simply pass.
>
> **[0:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=37)** I'm going to add the @disabled annotation to our test and watch what will happen now.
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=45)** If I'm going to run this test, the test simply won't run because it is disabled.
>
> **[0:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=52)** It also says so, it says public void bank account disabled test is at disabled.
>
> **[0:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=57)** We could still do some improving here, though because right now we disabled it, but it would be even better to provide chain with the reason, because this reason will also appear in the test report.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=67)** And we can add this as an argument or disabled annotation.
>
> **[1:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=70)** So for example, temporarily disabled due to maintenance.
>
> **[1:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=78)** All right, so if I run this one once more, you'll actually see sensible methods on why it is disabled right now.
>
> **[1:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=87)** Drag this up a bit and you see it temporarily disabled, due to maintenance.
>
> **[1:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=91)** This is how easy it is to temporarily disable a test.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=95)** You simply add the @disabled annotation to it.
>
> **[1:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/disabling-unit-tests?u=76281980&t=99)** And this annotation is just like all the other ones we've seen from the org.junit.jupiter.api.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), pass (1), public (1)
> **Analogies:** for example (1), just like (1)
> **Speakers:** - [instructor] (1)

#### Solution: Refactoring
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=0)** - [Instructor] I'm going to refactor the code so that I don't need the initialization in both the methods as the first line.
>
> **[0:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=6)** The first thing I'm going to do is I'm going to add the calculator as a property of our test class.
>
> **[0:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=17)** Then I'm going to annotate the setup @BeforeEach, but please mind, in order to use BeforeEach, I have to go ahead and add an import.
>
> **[0:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=36)** Inside my for each, I'm going to initialize the calculator.
>
> **[0:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=46)** And I'm going to remove this initialization from both the methods.
>
> **[0:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/solution-refactoring?u=76281980&t=53)** Now, I go ahead and test my code, and as you can see, it is correct, and I have correctly refactored this code.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (2), setup (1)
> **Code Keywords:** class. (1), import. (1)
> **Speakers:** - [instructor] (1)


### 4. Quick Peek at Next Steps

#### How to make code ready for unit testing
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=0)** - [Instructor] In order to start with unit tests, the code that needs to be tested will have to be testable, so to say.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=7)** So, what to do to get our code testable.
>
> **[0:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=10)** Well, testable code has a few qualities.
>
> **[0:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=13)** First of all, we want our unit tests to be testing what we think we are testing.
>
> **[0:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=18)** And if we are testing really big chunks of code, bugs might slip between our hands or we will get a failed test.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=24)** But we still have a lot of debugging to do once we get the failed tests, since we're testing such a used unit.
>
> **[0:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=30)** Secondly, it's loosely coupled and has high cohesion.
>
> **[0:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=34)** This is one of the famous clean code principles, and it means chunks of codes.
>
> **[0:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=38)** It'd be methods, it'd be classes.
>
> **[0:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=40)** They should have as few dependencies on each other as possible.
>
> **[0:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=43)** Because when this is the case, changes to a certain place might break the functionality of code at other places.
>
> **[0:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=50)** But what we really want to be testing is the unit that we are testing.
>
> **[0:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=54)** And one of the ways to do this is to work with dependency injection.
>
> **[0:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=58)** Another way to keep our code loosely coupled is to make sure a piece of code only has one responsibility.
>
> **[1:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=64)** This is the famous single responsibility principle.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=67)** By having only one piece of responsibility, it's clear what we should be testing, namely, this said responsibility.
>
> **[1:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=74)** And a bit more on high cohesion, high cohesion deals with the organization of the code.
>
> **[1:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=79)** It means that code that belongs together should be closely placed together.
>
> **[1:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=83)** So it's all about structuring your code in a logical way.
>
> **[1:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=85)** This will increase the maintainability and we can test our code in the same test class, because that will make sense based on the code structure.
>
> **[1:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=92)** This way, we can also organize our tests accordingly.
>
> **[1:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=96)** Writing code this is well testable is not necessarily easy.
>
> **[1:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=100)** Actually, it is the first test to our code.
>
> **[1:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=103)** If a code is easy to test, this is generally an indication that we have designed and organized our code well, which also has benefits for maintainability and readability.
>
> **[1:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=112)** Writing testable code will already increase the quality of the code, whereas when code is hard to test, this is an indication, I mean, both are not guarantees, mainly indications of the code.
>
> **[2:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=124)** It generally is an indication that we are having bad code.
>
> **[2:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=127)** So when code is easy to test, it's a good indication that we have written nicely structured, logical code, and when it's hard to test, it might actually be the case that we have written bad code.
>
> **[2:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=138)** Clearly this doesn't always apply.
>
> **[2:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=141)** But let's move over to IntelliJ and have a look at a bad example.
>
> **[2:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=146)** So I have prepared this horrible piece of code.
>
> **[2:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=150)** It's a class called TestableCode, or not so testable would have been a better name, but we're going to improve it.
>
> **[2:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=156)** And it's containing two static strings and one attribute greeting.
>
> **[2:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=161)** We are having one method in it and it's called greetUser, and it's quite a lengthy method.
>
> **[2:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=166)** What we're doing in this method is we are grabbing the current local date time, and then we're going to see what hour it is, and depending on the hour, we're going to say good night, good morning, good afternoon, et cetera.
>
> **[2:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=177)** Then in that logic, we are having a bunch of codes you can see there from line 15 to line 24, and it's been repeated for every time of the day.
>
> **[3:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=187)** And it's going to look through the lists, that static lists that are up, and it's going to see what our name is in either one of the list or in both of the lists or none of the lists, and it's going to adjust the message accordingly.
>
> **[3:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=198)** And it's doing this every time again for the hour, and then it's going to check.
>
> **[3:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=203)** So it's actually happening four times in our class and it's an exact copy, so we have the same code in line 28 up until the line 38, and then again at line 41 up until line 50 and so on.
>
> **[3:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=217)** So this code is generating a greeting and is returning this greeting, and it can be called from somewhere to great a user, for example.
>
> **[3:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=225)** Well, this looks really messy and you might already have some indication of how we could be improving this, but let's have a look at our testable code test class to see how I test this code.
>
> **[3:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=237)** So here we have the test class and there are a few things happening in there.
>
> **[4:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=241)** I'm testing the name on one list, on both lists and on none of the lists.
>
> **[4:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=247)** And I'm also testing the dayPart.
>
> **[4:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=251)** And in order to be testing this dayPart, I actually have to copy, or at least somehow copy a part of the implementation code, because I am having a problem with the local daytime now that's being generated inside the method, so I'll have to duplicate it here and hope that when I'm testing, it's not going to switch from one day part to the other just afterwards, because then my test will fail.
>
> **[4:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=275)** If I would not have this in there, my test would only succeed on a certain part of the day, so that would probably be even worse.
>
> **[4:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=282)** And my assertions are actually all assert throughs, and I'm just checking whether the string is containing a certain piece to make sure that the right string is being returned to me.
>
> **[4:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=291)** So let me run all these tests, and as you will see, these tests are all passing.
>
> **[4:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=295)** Very good.
>
> **[4:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=296)** So based on our tests, we should probably conclude that our code is doing what we would expect it to be doing.
>
> **[5:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=302)** But now it's so happens to be that this code is somewhere live in production.
>
> **[5:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=306)** Luckily it's not really low in production and we're getting some complaints of weird greetings and we might feel, hmm, but all our units tests are succeeding.
>
> **[5:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=314)** How is that?
>
> **[5:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=315)** Well from that, we can conclude that our unit tests are not testing everything and that they're letting failures through.
>
> **[5:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=322)** So let's go ahead and debug this a bit so that we can see what's going on.
>
> **[5:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=326)** Or actually instead of debugging, I'm just going to turn on a system.out.println before we return a greeting.
>
> **[5:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=333)** So I'm going to be turning this one on and then let's just re-run the test again and see what the greeting is.
>
> **[5:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=341)** And on our screen now, we already see a really weird greeting and we see that all of them have null in front of it.
>
> **[5:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=347)** Why is this you may wonder?
>
> **[5:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=348)** Well, this is one of the quirky things of Java that's fooling us over here, because we have a public string in our class.
>
> **[5:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=355)** So this is a attribute of the TestableCode class, and we did not initialize it, which means that Java's going to default it to null.
>
> **[6:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=364)** And then the funny thing with strings is if you're going to do plus equals on a null string, it's going to concatenate null with whatever you are attaching to this.
>
> **[6:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=373)** And our test did not catch this, and that is because the way we structured your class, we could not actually evaluate the full outcome, because it was too unsure and too dependent on too many things.
>
> **[6:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=383)** So we could clearly fix this full problem by just adding this to our class, or let's at least do this, because this will solve the problems, since now it's not set to null between an empty string, so we won't get a null prefix to a string, but still this is not solving the problem of our bad testable code.
>
> **[6:40](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=400)** So let's have a look at how we could improve this testable code class.
>
> **[6:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=405)** So the first thing I mentioned already is that we are really having a copy of a certain code snippet, four times even.
>
> **[6:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=412)** And it's the part where it's going to see whether it's in one of the lists.
>
> **[6:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=416)** It makes a lot more sense to split this up in two separate methods.
>
> **[6:59](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=419)** So I'm going to split up this method and I'm going to create two methods.
>
> **[7:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=423)** One of these methods is going to say the greeting user part, and one of them is going to say the good night, good morning, et cetera, part.
>
> **[7:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=431)** So let's make one here to greet the user.
>
> **[7:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=437)** And in order to greet the user, we need the name of the user.
>
> **[7:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=441)** And we're going to change this one to the day part, and then we no longer will need the name inside this method, so I'm going to remove it from here.
>
> **[7:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=451)** I'm going to be copying this piece of code since this is looking through the list and I'm going to be moving it up to this method here.
>
> **[7:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=461)** And I'm going to not use the greeting from our class, but I'm actually just going to be using a local variable here, so I'm just going to say string greetUser equals empty string, and then I'm going to be- I could have left greeting clearly, but I don't want it to look too confusing, so I'm changing this.
>
> **[8:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=483)** And then when this is done, I'm going to be returning greetUser like this.
>
> **[8:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=489)** So let's clean it up a bit more.
>
> **[8:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=493)** And so this logic is now inside one method, and I can remove it from this one.
>
> **[8:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=498)** So this is actually just going to leave us with the dayPart.
>
> **[8:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=503)** Let's get rid of this one.
>
> **[8:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=506)** I can remove this one.
>
> **[8:29](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=509)** And there we go.
>
> **[8:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=511)** And then in here, I'm also going to create a local variable string.
>
> **[8:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=515)** So I'm going to say string creates greetDay is fine.
>
> **[8:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=523)** And I'm going to, wait, let's call it greetDayPart, so that we don't get confused with methods.
>
> **[8:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=535)** There we go.
>
> **[8:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=535)** And then I'm going to return the greetDayPart as well.
>
> **[9:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=541)** This can go.
>
> **[9:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=542)** All right, so now we are having two parts of our string.
>
> **[9:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=545)** We are having the day and we split it up with the user part.
>
> **[9:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=549)** And our class actually got a whole lot shorter, so that's a great thing already.
>
> **[9:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=555)** And we can remove the attributes from here.
>
> **[9:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=558)** So we're just going to have the colon be responsible for calling both methods and concatenating the string.
>
> **[9:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=563)** We could also have two attributes here now, so a greetUser attribute and a greetDay attribute and then set them both and even have methods returning the combination of these two, but let's not go there for now, because this is actually already allowing us to write a much better test.
>
> **[9:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=578)** So let's go back to our TestableCode test, since this one is very broken right now.
>
> **[9:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=583)** So we fixed a lot of problems already.
>
> **[9:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=585)** So in here, right now, when we are testing the special name greetings, we can actually check whether it is containing VIP, but we could also just make the full check.
>
> **[9:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=594)** So instead of the assertTrue, I'm going to go ahead and use an assertEquals here.
>
> **[10:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=601)** And I could clearly do it directly in there, but I find that a bit ugly, so I'm going to be copy-pasting it to this outcome string.
>
> **[10:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=609)** So the outcome, it should be this string.
>
> **[10:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=613)** Let's replace the name with Noah, since that's our name.
>
> **[10:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=616)** There we go.
>
> **[10:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=617)** And our assertEquals is going to check for this outcome.
>
> **[10:21](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=621)** And then it's just going to call tc.greatUser(name), like this.
>
> **[10:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=627)** And import this, and if I run this, you will see that this test is going to pass.
>
> **[10:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=634)** So I'm going to do something similar for the next one.
>
> **[10:36](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=636)** So it's, I know you Tess, you're even on our VIP list, like this and let's run it to see if this is working.
>
> **[10:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=647)** Yes.
>
> **[10:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=648)** And then do a similar thing for this one.
>
> **[10:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=651)** So for this one, we are in a don't know option, which is simply going to be returning stranger.
>
> **[10:56](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=656)** So let me change this back to the stranger like this, and then this should work as well.
>
> **[11:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=665)** And then this one is actually more interesting and we could write even more tests for it, but I'm not going to do this.
>
> **[11:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=671)** What is really bad about this piece of code is that we are copying part of the implementation logic in our test.
>
> **[11:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=678)** If you have the need to do this, this is generally a code smell, something is wrong with your code, that means.
>
> **[11:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=683)** And in order to improve this, we actually need to change our implementation code.
>
> **[11:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=688)** And what we could do to improve it by a lot already is instead of using this one here, using it as a parameter.
>
> **[11:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=695)** So instead of just grabbing current time, we're only going to be sending in a parameter.
>
> **[11:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=699)** And this is really a huge improvement improvement because right now we have code that is testable.
>
> **[11:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=704)** We can send the daytime in, and it will be always returning the same result because before this, our code wasn't deterministic, so to say, and therefore our test couldn't be deterministic either.
>
> **[11:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=715)** And deterministic pretty much only means that it has to be stable so that the same outcome is coming out of the code and out of the test every time you run it.
>
> **[12:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=726)** So at this point, I don't need all of this anymore, which is great.
>
> **[12:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=730)** And I can simply move on to changing this into, well, let's just remove this for now.
>
> **[12:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=737)** And in here, I'm going to say LocalDateTime.of, and then I'm just going to be creating a local daytime.
>
> **[12:25](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=745)** Let's just start with the year, let's grab the current year, 2021, let's grab the current month, which is eight, and grab the day, which is four.
>
> **[12:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=753)** Well, let's just give it hours 13 and minutes 15.
>
> **[12:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=759)** So this should be returning good afternoon, since we are in the afternoon right now.
>
> **[12:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=764)** So I'm going to add our string outcome here.
>
> **[12:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=768)** I'm going to just say, good afternoon comma.
>
> **[12:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=773)** And then in here, I'm going to say assertEquals, like this, and then outcome is what I expect.
>
> **[13:02](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=782)** And tc.greetDay is what I would want to call, and I'm going to send in our dateTime here.
>
> **[13:11](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=791)** And I'm going to run this and see if this is working correctly.
>
> **[13:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=795)** And yes, it is.
>
> **[13:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=797)** Clearly, I could also add a test now to test the evening, the morning, et cetera, but for now I think this is demonstrating the purpose of this exercise.
>
> **[13:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=806)** So what did we do?
>
> **[13:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=807)** We improved our TestableCode class by a lot.
>
> **[13:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=810)** It's still not perfect, but it has been improved by a lot.
>
> **[13:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=813)** And as a bonus, it became more maintainable and better readable as well.
>
> **[13:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=818)** And as an extra bonus, our test became a whole lot more reliable.
>
> **[13:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/how-to-make-code-ready-for-unit-testing?u=76281980&t=822)** And this is why it's very important that before you start unit testing, you're going to go and have a very critical look at your code to determine whether your code is actually testable in the state as is or not.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), this, (10), class, (5), this. (5), static (2)
> **Code Identifiers:** greetuser (4), daypart (3), greetday (3), assertequals (3), greetdaypart (2)
> **CLI Commands:** make (5), find (1)
> **Definitions:** means that (2), is an  (2), is a  (1)
> **Env Vars:** vip (2)
> **Cross-References:** go back to (1)
> **Tools:** intellij (1)
> **Analogies:** for example (1)

#### Best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=0)** - [Instructor] You've just seen how to make sure your code's successful.
>
> **[0:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=4)** Let's go over some best practices for writing the tests.
>
> **[0:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=7)** The good news is that most of these best practices revolve around making things not too complicated.
>
> **[0:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=12)** The first thing to do is to keep your unit tests as simple as possible.
>
> **[0:16](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=16)** And just as for other code, don't make the unit test dependent on other tests because then when something goes wrong, you don't really know what is going wrong and what is actually the code that you're testing or some sort of the dependency that went wrong.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=28)** What also really helps is to give your test clear namings and stick to a naming convention.
>
> **[0:33](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=33)** This will make the code more predictable and easier to read.
>
> **[0:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=37)** Another way to keep your tests simple is to aim for a low-cyclomatic complexity.
>
> **[0:41](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=41)** Cyclomatic complexity are the different execution paths in the code.
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=45)** So for example, a simple if statement has two paths, one for a true condition and one for a false condition.
>
> **[0:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=52)** So, this will give it a cyclomatic complexity of two.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=55)** There are two code paths.
>
> **[0:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=57)** Again, if you are having a high-cyclomatic complexity, it's going to be hard to determine why your test fails as sometimes even finding out if you're actually test is going to be hard already.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=67)** Tests should be simple, and this means that they shouldn't contain copies of the actual implementation as we just saw in the previous video.
>
> **[1:14](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=74)** Multiple good reasons for this.
>
> **[1:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=75)** The first one is if there's a problem in the implementation, this won't be supported by your test since the implementation is copied over there.
>
> **[1:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=82)** And the second one is that when the implementation changes and goes ahead and break stuff, this won't be reflected by the test, since this one was copying the implementation.
>
> **[1:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=92)** And the next step is to make sure that your tests are deterministic.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=95)** This means that they do the same thing every time you run them.
>
> **[1:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=98)** So if they fail the first time, they'll fail the second time and the hundredth time.
>
> **[1:43](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=103)** If they pass the first time, they'll pass the millionth time.
>
> **[1:47](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=107)** That is if the code that's being tested didn't change in the meantime.
>
> **[1:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=111)** In order to achieve this, your test should be loosely coupled.
>
> **[1:54](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=114)** They shouldn't depend on external code that is not subject to the test, they shouldn't depend on other test cases, or for example, the environment values or global state for the application.
>
> **[2:04](https://www.linkedin.com/learning/java-testing-with-junit-14267963/best-practices?u=76281980&t=124)** In the next clip, we'll learn about the basics of Mockito, which is a great way to not depend on external dependencies, but use test doubles instead.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), let (1), this. (1), this, (1)
> **CLI Commands:** make (4)
> **Definitions:** means that (2), is a  (1)
> **Cross-References:** previous video (1), in the next (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Mockito
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=0)** - [Instructor] Whenever you are using any framework, you'll often find yourself using common libraries that go well with it.
>
> **[0:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=6)** For unit testing, you really want to minimize the dependencies.
>
> **[0:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=9)** And as we just saw, the fact is, that we often can't get around needing an external object.
>
> **[0:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=15)** This is the point where it's time to meet the Mockito library. Mockito is a testing library that helps for stubbing and mocking objects.
>
> **[0:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=22)** "Mocking" means that we're going to create an isolated version of the object that we can influence, rather than the real one.
>
> **[0:28](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=28)** This will help us to keep our dependencies to a minimum, and isolate our test to be truly testing the simple unit.
>
> **[0:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=34)** Let's move over to IntelliJ, and look at the simple Mockito example.
>
> **[0:39](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=39)** Let's configure a project to be used in Mockito.
>
> **[0:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=42)** You'll have to add the following dependencies to your pom.
>
> **[0:45](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=45)** So the first one is the "org.mockito" groupId, and then the artifactId, "mockito-junit-jupiter".
>
> **[0:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=52)** Just go ahead and use the latest version.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=55)** Then the second one is the groupId, "org.mockito", and the artifactId, "mockito-core".
>
> **[1:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=61)** And then again, go ahead and use the latest version.
>
> **[1:03](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=63)** Make sure to give both the scope, "test", to them, as well.
>
> **[1:07](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=67)** Now, let's create a class for this.
>
> **[1:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=69)** We're going to use the "calculate" one from the very beginning, so I'm going to add a class to our tests, and we're going to be testing the "CalculateMethods" class.
>
> **[1:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=78)** So I'm going to be calling this "CalculateMethodsMockitoTest"... There we go.
>
> **[1:27](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=87)** And we should enable Mockito by adding the following ExtendWith to our class.
>
> **[1:32](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=92)** In here, I'm going to be using the "MockitoExtension.class".
>
> **[1:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=97)** If you have experience with Mockito before, right now, we don't need to specify a runner, and we don't need to enter the mocks explicitly.
>
> **[1:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=104)** We can simply start adding mocks to it.
>
> **[1:46](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=106)** It's actually very easy.
>
> **[1:48](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=108)** So, for example, in order to test or calculate methods, we need an object "CalculateMethods", and I'm not going to be initializing it, I'm just going to add "@Mock" on top.
>
> **[2:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=120)** So, right now, I have created the mock for the CalculateMethods object, and we will then have to say how our mock is going to behave. It will override functionality.
>
> **[2:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=129)** Therefore, we cannot use price, fields and methods just like this.
>
> **[2:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=133)** This is where you would need something like Bio Mock, or write your own reflection code, if you'd like.
>
> **[2:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=138)** Just know for now, that it is possible to test private methods if you must.
>
> **[2:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=142)** Let's specify what needs to happen when we call our defined methods, and in order to do so, I'm going to create a method that you'd run before our tests.
>
> **[2:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=151)** So I'm going to go ahead and call this "public void setupMocks", or in this case, it's actually only one mock.
>
> **[2:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=158)** And I'm going to say "Mockito.when", and in here, I'll have to specify what needs to happen when I'm doing a certain action.
>
> **[2:49](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=169)** So, I'm going to say, when I'm calling calculateMethods, divide with the following parameters, 6,3.
>
> **[3:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=180)** Well, and then I'm going to say "thenReturn", so it knows what's the return when I'm calling this, I say "thenReturn", "2.0", since this is the fully end results.
>
> **[3:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=193)** I'm going to go ahead and enter this in the imports Mockito... So now I've said that whenever the five methods being called with parameters 6 and 3, we're going to return 2.0.
>
> **[3:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=206)** I'll have to make sure these are run before the test, and I'll just add BeforeEach, so it does before every test, and it knows now how it should behave.
>
> **[3:34](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=214)** We can now proceed and just use it in our tests, like this.
>
> **[3:37](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=217)** So I'm just going to go ahead and create a simple "public void testDivide" method, like this.
>
> **[3:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=224)** And, in here, I'm going to say "assertEquals", and I expect the outcome to be 2.0, whenever I'm going to call the calculateMethods.divide with the values 6 and 3, like this.
>
> **[4:01](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=241)** And I'll import assertEquals. There we go.
>
> **[4:05](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=245)** If I run this test, it will pass like it used to. So... Let's make it a runnable test, and I'm going to run it, and this can be very useful in many situations.
>
> **[4:18](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=258)** For example, when you want to control what an API call should return for testing purposes.
>
> **[4:23](https://www.linkedin.com/learning/java-testing-with-junit-14267963/mockito?u=76281980&t=263)** There's actually a lot more that can be done with Mockito, and that Mockito can do for you, but that's beyond the scope of this course, but it's definitely a next step worth taking, if you want to get more proficient writing unit tests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (5), class. (2), public (2), override (1)
> **Code Identifiers:** groupid (2), artifactid (2), calculatemethods (2), thenreturn (2), assertequals (2)
> **CLI Commands:** make (3), find (1)
> **Versions:** 2.0 (3)
> **Analogies:** for example (2), just like (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** api (1)
> **Tools:** intellij (1)


### Conclusion

#### Next steps with JUnit
> [LinkedIn Learning](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=0)** - [Maaike Van Putten] At this point, you really know the basics of JUnit and you're ready to work with JUnit in a real environment.
>
> **[0:06](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=6)** You might wonder, what would be good next steps for you to take.
>
> **[0:09](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=9)** Well, here are some topics that you can really benefit from.
>
> **[0:12](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=12)** The first one is the one we ended with; Mockito.
>
> **[0:15](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=15)** Mockito is often used, and it's very common in corporate environments.
>
> **[0:19](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=19)** Studying Mockito a bit more can really enhance your professional career.
>
> **[0:22](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=22)** The same goes for PowerMock.
>
> **[0:24](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=24)** PowerMock enables you, for example, to test private methods and it's very common in corporate environments as well.
>
> **[0:31](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=31)** So I can definitely advise you to dive a bit into PowerMock as well.
>
> **[0:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=35)** And then Java Spring testing is also a bit of a different topic.
>
> **[0:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=38)** We have seen testing and we have seen JUnit but working with Java Spring, it makes things a bit different.
>
> **[0:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=44)** So, really knowing what to do when you are working with Java Spring, how to test the controllers, how to test the services.
>
> **[0:50](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=50)** This is really going to help you.
>
> **[0:52](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=52)** And lastly, TDD: Test-Driven Development.
>
> **[0:55](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=55)** It's a very good generic job to dive into a bit more as well.
>
> **[0:58](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=58)** Many organizations are using TDD and you knowing exactly what this is and how it's going to help you, and benefit your organization, can be of great use in acquiring a new job or just moving forward in your career.
>
> **[1:10](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=70)** There are some grate follow-up courses, for you to take.
>
> **[1:13](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=73)** The first one, I would recommend is Practical Test Driven Development for Java Programmers.
>
> **[1:17](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=77)** This course is really focusing on a Java Program, as it says so in the title, and it will really help you to level up your TDD for real life cases.
>
> **[1:26](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=86)** And then we have to Java: Automated API Testing with Rest Assured.
>
> **[1:30](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=90)** This is really focusing on testing the API, which is a different skill from what we have seen in this course.
>
> **[1:35](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=95)** This is also definitely interesting to dive into.
>
> **[1:38](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=98)** And lastly, the Programming Foundations: Test Driven Development.
>
> **[1:42](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=102)** This is more of a generic topic.
>
> **[1:44](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=104)** It doesn't really focus on Java Developers per se, but it will really help you to get a better understanding of test driven development.
>
> **[1:51](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=111)** And lastly, let's connect.
>
> **[1:53](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=113)** Here is my LinkedIn profile and would be really good, if you would reach out to me.
>
> **[1:57](https://www.linkedin.com/learning/java-testing-with-junit-14267963/next-steps-with-junit?u=76281980&t=117)** Good luck with your journey and have fun testing with Junit.

> [!info]- Semantic Content
>
> **Env Vars:** tdd (3), api (2)
> **Code Keywords:** from. (1), private (1), let (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [maaike (1)


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