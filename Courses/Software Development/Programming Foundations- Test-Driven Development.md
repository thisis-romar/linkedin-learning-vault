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
created: 2026-04-21
---

![Programming Foundations: Test-Driven Development](https://media.licdn.com/dms/image/v2/C4E0DAQGG__Y-tJom5Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668482822?e=2147483647&amp;v=beta&amp;t=MNMR2eFGBuqHmwomo2hzLt28K7ww67fNv9lg38inpnw)

# Programming Foundations: Test-Driven Development

> Programmers shouldn’t have to guess whether software is working correctly. They should be able to prove it, every step of the way. A formal test-driven development (TDD) process allows you to build testing into your daily routine. You can run tests many times a day, getting instant feedback on the quality of your code. This course explains how to adopt a TDD mindset and process—vital skills for al

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3) | 2h 43m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Neelam Dwivedi]]

## Table of Contents

### Introduction

#### Small steps to great things
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=0)** - Software development is a complex endeavor and developers often find that as their products grow in size and complexity making changes becomes more difficult and error prone.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=13)** One reason is that conventional methodologies position testing as the last activity in the software development life cycle.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=22)** Test driven development or TDD addresses this issue by bringing test cases in front and center of the rest of the design and development activities.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=32)** It makes development more engaging and rewarding because it provides instant feedback on the quality of code being developed.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=41)** Many organizations have adopted TDD to improve their product quality and make their delivery more agile.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=49)** It makes sure that the software functionality stays aligned with the customer requirements.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=55)** I'm Neelam Dwivedi and I enjoy finding interesting solutions for complex problems.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=60)** Whether you are a novice programmer or an advanced developer you will find TDD as a dynamic methodology to create software.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/small-steps-to-great-things?u=76281980&t=70)** So join me in this course and let's begin TDD.

> [!info]- Semantic Content
>
> **Env Vars:** tdd (4)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - software (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course you should have basic programming skills in Java or a similar language and some familiarity with any IDE, such as Eclipse or IntelliJ.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-you-should-know?u=76281980&t=12)** In terms of the tools that we will use in this course, you can get Java from [oracle.com](https://oracle.com) and I have used Java 11.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-you-should-know?u=76281980&t=22)** JUnit 5, which you can download from here, junit.O-R-G.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-you-should-know?u=76281980&t=27)** I am using Eclipse IDE 2019-03, but any version which is a recent version may also work.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-you-should-know?u=76281980&t=35)** I'm also using Maven build framework and finally the mockito mocking framework, which I'll demonstrate in the course.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2)
> **URLs:** [oracle.com](https://oracle.com) (1)
> **Versions:** java 11 (1)
> **Tools:** intellij (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### What is test-driven development (TDD)?
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=0)** - This week has been crazy.
>
> **[0:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=2)** - Yeah, I know.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=3)** I can't wait for the weekend.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=4)** - Hey, why don't you come over to my place this weekend?
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=7)** - That would be awesome.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=8)** Now where do you live?
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=9)** - Uh, 123 Main Street, Magical Town.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=12)** - Hm, okay, I don't think I know where that is.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=14)** Uh, how do you get there?
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
> **[0:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=44)** - To go from point A to point B, you could take turn-by-turn directions, or you could use a high-level map to guide where you want to go.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=52)** These are the two options.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=54)** Which option you pick depends on how well you know how to get to point B.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=59)** Using turn-by-turn directions is the small-step incremental approach, or the bottom-up approach, and using a map is the big picture, top-down approach.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=69)** This analogy can be used to think about when we are creating something.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=73)** When we know how to make something, we start with a plan, and then follow the plan as we make it.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=79)** But, if we do not know the details of how to make something, it's hard to come up with a plan.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=84)** So, we take small steps while figuring out how to make what we want to make.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=89)** In the software world, conventionally the planned approach has been to start with the requirements, come up with a design, write code to implement that design, and then write test cases to test that code.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=102)** This is the test last development approach.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=106)** In a test-driven approach, given some requirements, you come up with test cases that will drive the rest of the development.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=113)** The design emerges from the test cases.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=117)** This is the pure TDD approach.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=120)** Note that the testing in TDD is only unit testing.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=124)** That is, testing your code at the smallest unit level.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=128)** Other types of testing, such as system testing, integration testing, or functional testing, test your application at a higher level and therefore not part of TDD's scope.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=137)** But, to be able to write unit test cases, there are often high-level ambiguities, especially in large and complex projects, that need to be ironed out before you can think about unit test cases.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=151)** In those cases, you may come up with some parts of design to help you craft your test cases.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=157)** So you do have some design drawn out before you write unit test cases.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=162)** So this is not truly test-driven.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=164)** But some call it as a test-first approach.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=167)** Now, there is some overlap in the usage of two terms, test-driven, or test-first, but the key idea is that you first write your test case, and then write the code to pass that test case.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=180)** The most fundamental aspect of the approach is the test-code-refactor cycle.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=186)** Before you write any code, you first write your failing test case, then you write the code that passes that test case.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=195)** As the test cases, and code, continue to grow, you keep an eye for duplicate or bad code.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=202)** Every now and then, you fix such code by what is called as refactoring.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=206)** Refactoring is improving the internal structure of your code without changing its external behavior.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=212)** So, let us take an example to see the difference between the two approaches.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=217)** First, we will see the test-last approach.
>
> **[3:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=220)** - So we've got that customer coming in this morning.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=223)** Kind of talk about his needs for the new game.
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
> **[3:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=232)** - Well, so, for the project that we're on, I'm looking for an app that has word games.
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=236)** It has hangman, crosswords, and anagrams.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=240)** Is that something we can make happen?
>
> **[4:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=241)** - Definitely, definitely, okay.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=243)** So, we can look at each game as a big use case, right?
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=247)** And, why don't we first focus on the play hangman use case?
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=251)** - Sounds great. - Okay.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=253)** So, let's get started here.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=255)** So why don't we think of there's the player.
>
> **[4:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=261)** This is going to be our game, or our app, right?
>
> **[4:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=264)** - Right, right. - Okay.
>
> **[4:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=266)** Okay, so, first we'll start with the play hangman use case, 'kay.
>
> **[4:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=275)** Then we'll move on to the anagrams.
>
> **[4:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=277)** - Anagrams, yup. - Okay, great.
>
> **[4:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=279)** And finally, what, the?
>
> **[4:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=282)** - Crosswords. - Crosswords!
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=283)** - Yeah, crosswords. -  Great.
>
> **[4:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=285)** Okay, what do you think?
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=287)** - That sounds amazing.
>
> **[4:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=288)** - It's a good start.
>
> **[4:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=289)** - Yeah, definitely, really excited about it.
>
> **[4:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=290)** - Us, too, thank you so much.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=291)** - Thank you so much. - All right.
>
> **[4:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=292)** Let's get to it!
>
> **[4:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=293)** - All right. - Okay.
>
> **[4:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=299)** - Okay, so here's our first cut of class diagram, and it looks like we're ready to start coding.
>
> **[5:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=305)** - In this scenario, the team started with understanding the requirements, and then created a detailed design.
>
> **[5:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=312)** And now, the team is planning to start coding.
>
> **[5:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=315)** Now, that is a big no-no in TDD.
>
> **[5:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=318)** So, what should the team have done if it wanted to follow TDD?
>
> **[5:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=323)** Let us see.
>
> **[5:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=325)** - So these are all word games.
>
> **[5:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=327)** They all need words, I'm thinking our first functionality that we can implement would be to fetch a word from somewhere.
>
> **[5:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=334)** - Well that seems like a good place to start, but, where are you getting the words from?
>
> **[5:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=340)** - Well, maybe we can get the words from a text file.
>
> **[5:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=349)** And we can always change the source when we have a better idea of what we want.
>
> **[5:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=353)** - Okay, well, let's test the first case, then.
>
> **[5:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=357)** See that hangman is able to fetch a word of length X, so-- length X.
>
> **[6:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=367)** - Okay, sounds good.
>
> **[6:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=368)** - I think we can do it.
>
> **[6:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=370)** - Notice the difference?
>
> **[6:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=372)** The team briefly talked about a high-level design decision, to get the words from an external source, but did not start drawing detailed class diagrams.
>
> **[6:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=380)** They took the first requirement and then decided to write its first test case.
>
> **[6:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=386)** The key idea here, is that before you write a single line of code, you first write a test case for it.
>
> **[6:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/what-is-test-driven-development-tdd?u=76281980&t=391)** And that is the golden rule of test-driven development.

> [!info]- Semantic Content
>
> **Speakers:** - okay (5), - yeah (4), - well (4), - that (3), - all (3)
> **Code Keywords:** case, (5), let (5), case. (3), pass (1), continue (1)
> **CLI Commands:** make (7)
> **Env Vars:** tdd (5)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** picture (1), such as (1)
> **Warnings:** note that (1)

#### xUnit and JUnit
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=0)** - [Instructor] Most popular unit testing frameworks for various programming languages are modeled on what is called xUnit Framework.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=8)** The core of xUnit was designed by Ken Beck and Eric Gamma for small talk named as sUnit.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=16)** This was later ported for Java and named as JUnit.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=20)** JUnit's popularity and wide acceptance led other languages to follow suit and create their own unit testing frameworks based on the xUnit architecture.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=31)** A common xUnit framework makes it easy for developers to learn the basic TTD techniques and then apply them across different languages.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=40)** So, if you have learned one xUnit testing framework, say JUnit, then it is very easy for you to apply the same knowledge to the testing frameworks for other languages.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=52)** These xUnit frameworks have a core architecture and some of its key components are test case, test suit, test runner, test fixture, and test result.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=63)** These terms have a common meaning across all xUnit platforms.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=67)** While you will learn about these terms later in this course, it is helpful to know at this point that these concepts are transferable across whichever xUnit tools you plan to use.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=79)** As the world of xUnit evolved, so did the JUnit framework.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=83)** Junit 3 was based on Java 5 and in spite of being at the forefront of xUnit evolution it had its limitations.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=91)** Developers had to take care of basic considerations.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=94)** For example, to write a test case they had to extend the library class test case and name their test methods starting with the word test.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=104)** Then came Junit 4 that was developed for JUnit 8, offering the use of annotations and thereby removing many of JUnit 3 restrictions.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=114)** It introduced new features such as rules and the flexibility to change the test runner.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=120)** While JUnit 4 was very successful and widely adopted over 10 years, it still lacked the flexibility and extensibility that the developers desired.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=131)** For this reason, Junit 5 was released in 2017 with its core architecture redesigned to be completely modular, extensible to seamlessly integrate with third-party tools.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=145)** From a developer point of view JUnit 5 gives a much richer set of testing functionalities.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=152)** In Java 5, the core has three modules; platform, vintage, and Jupiter.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=158)** The test cases that you write interact with either the vintage module or the Jupiter module.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=164)** Vintage supports legacy code in JUnit 3 and 4.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=168)** And Jupiter offers the new programing and extension modules of JUnit 5.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=174)** The platform has the engine to run these two modules.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/xunit-and-junit?u=76281980&t=177)** The platform also has the launching platform to interface with IDEs such as Intelligent Eclipse and build frameworks such as Maven and (mumbles) so that you can run your unit test cases from within these tools.

> [!info]- Semantic Content
>
> **Code Identifiers:** xunit (10), sunit (1)
> **Code Keywords:** module (2), case, (1), interface (1)
> **Analogies:** such as (2), for example (1)
> **Versions:** java 5 (2)
> **Env Vars:** ttd (1)
> **Cross-References:** later in (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Writing test cases
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=0)** - [Instructor] Writing good test cases requires a set of tools, techniques, and conventions.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=6)** Let us look at some of these to write a simple test case.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=9)** Let us say our requirement is to find how many times an alphabet appears in a word.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=14)** So if the word is pizza, Z appears twice whereas X appears zero times.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=21)** So let us start with a project, 0005.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=24)** I have two packages: main and test.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=28)** I'll keep my code in the main package and test cases in the test package.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=32)** This is the first convention.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=34)** Keep your code and test cases separate to manage your project better.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=39)** When you ship your code in the final --, you don't want your test files to accidentally get tagged along.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=44)** Next, I will create my first test case by right clicking and choosing JUnit Test Case option.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=51)** And I name this as "TestHangman".
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=55)** This brings up the second convention.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=58)** It is better to indicate that this is a test case class.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=61)** Some programmers put the word "test" as a prefix, others as a suffix.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=66)** The argument is that TestHangman sounds like a word, and HangmanTest is a noun, which is what a class name should be.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=74)** However, I prefer to see the word "test" before any names so that I know it contains tests.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=79)** Whichever option you choose, make sure you remain consistent.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=84)** Now Eclipse tells me that JUnit library is not in the build path.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=88)** I accept the suggestion to add it to my test case class, and now I have my first test case stub ready.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=97)** I want to test that Hangman returns how many times an alphabet appears in a word.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=102)** So I will call my test case as test_alphabetCount.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=110)** In fact, I can make alphabetCountInAWord.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=115)** If you're wondering that the method name is too long, then here comes the third convention.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=120)** Name your methods meaningfully to indicate what they are testing.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=124)** Even if the name sounds a little too long.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=126)** You will never have to retype or even remember this name because it will never be directly called by you.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=132)** It will be called by the JUnit test runner.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=135)** So it is okay if the name sounds a bit of a mouthful.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=138)** Now in this method, I'll say "String word," and some string value, and a character variable, alphabet, as some alphabet that I want to count.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=156)** Now I instantiate hangman as new hangman.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=163)** Obviously, this will give a compilation error because there is no such class yet.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=168)** So I accept Eclipse's suggestion to create the class.
>
> **[2:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=172)** I have to make sure that I create it in the right folder.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=176)** I choose Main, and Eclipse creates the class for me here.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=182)** Coming back, I will now store the count from the hangman's count alphabet method, to which I want to pass the word and the alphabet to count.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=199)** Once again, at this point, Eclipse gives a compilation error because there is no such method.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=207)** So I choose Create Method option, and I accept the public int countAlphabet signature here.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=216)** At this point, you will notice that I'm accepting the suggestion to create this as a public method.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=221)** That is because I want my test cases from another package to be able to access the method.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=227)** But sometimes you may have some methods in your code that need not or should not be public.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=232)** How to you test those?
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=234)** Well, the idea is that your private methods will be used in some other method of your class that are public.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=240)** So instead of testing your private methods directly, you test those public methods that use the private methods of your class.
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=248)** So let's go back to test Hangman, and here, finally I make the first assertion as assertEquals one, which is the expected value, and count, which is what I'm testing.
>
> **[4:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=263)** Before we move on, let's talk about assert statements a bit.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=268)** Most programming languages have an assert statement used for defensive programming to ensure that a certain condition is true at a given point of time in the program execution.
>
> **[4:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=278)** If the condition is not true, the program will show an assertion error.
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=283)** JUnit 5 has a class called "Assertions" that has many assertion statements as static methods.
>
> **[4:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=289)** To use any of these assertion statements, you simply import the assertions class from the Jupiter API.
>
> **[4:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=296)** You will learn more about these assertions later in the course.
>
> **[5:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=300)** Back to our test case.
>
> **[5:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=302)** Here, the test case seems complete.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=304)** If I run it, I get the red bar.
>
> **[5:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=307)** Now I go to Hangman and change the code to make the test case pass.
>
> **[5:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=313)** For that, I say int result equals zero, which is where I'll store result.
>
> **[5:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=319)** And then in a loop, for each char C and word toCharArray.
>
> **[5:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=329)** If C equals the alphabet that I want to count, then result plus plus, and finally return result.
>
> **[5:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/writing-test-cases?u=76281980&t=345)** I run my test again, and we are green.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), public (5), class. (3), private (3), case. (2)
> **CLI Commands:** make (5), find (1)
> **Code Identifiers:** alphabetcountinaword (1), countalphabet (1), assertequals (1), tochararray (1)
> **Cross-References:** go back to (1), later in (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 1. TDD Methodology

#### TDD and agile
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=0)** - Test-driven development makes one think that it is all about testing and coding, but it is also test-driven design, because while you start with a test case, your goal is to design and develop your software in parallel.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=16)** This aligns very well with the incremental upload of agile methodologies.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=21)** But once you have identified your user story or use case, where do you start?
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=26)** Let us go back to the scenario where a team is developing the hangman game.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=31)** Focus on how the team is iterating between testing, coding, designing, and understanding the requirements in a truly agile manner.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=40)** - Hey. - Hey.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=41)** - So I just met with the customer.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=43)** We went over the basic rules of the game, and here they are.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=48)** So when the word has X letters, the clue shows X dashes, and the player has 10 attempts to guess those letters.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=66)** So I think it's time that we write our first failing test case to grab a word from the text file of length, let's say five.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=73)** - Here I go.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=75)** So I will name our first test case as test_lengthOfFetchedWord, create a hangman instance, then invoke its fetchWord method that returns a string, accept Eclipse's suggestion to create this method in hangman class, and then write the assertion as assertTrue.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=104)** Word length is equal to five.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=106)** So our first test case is to check whether the word is of length five.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=112)** Now I run the test.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=117)** And the test case throws a null pointer exception.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=120)** Not really an assertion failure, but we know that the fetch word is returning a null, which we need to fix.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=127)** - [Brunette Woman] So now I'll just make the test case pass.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=130)** I will just say return the word pizza.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=137)** And the test case passed, yay!
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=139)** - But aren't you just forcing the code to pass the test by returning a specific word of length five?
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=145)** - Well, your test case asked for a word of length five.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=148)** My code did just that.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=149)** No more, no less.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=150)** Now, if your test case asked for a word of a different length, I can change that code to address that next.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=158)** - That's right.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=159)** This is called faking it.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=161)** In TDD, you code only to pass the test and no more.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=165)** But you may say that obviously the fetch word method is supposed to do a lot more than just returning pizza, and you are right.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=174)** While the idea of taking small steps may seem trivial, this fake it approach helps you start with constants and gradually replace them with variables as you gain more clarity.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=186)** You don't always have to take such small and trivial steps if you feel confident, but as soon as you see an unexpected test failure, you slow down and start taking small steps again.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=200)** - Ah, in that case, let me write a test case that tests whether the word length is between five to 10.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=208)** I will name it test_lengthOfFetchedWordRandom.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=217)** Create a randomizer to get a random number, and then declare an int requested length variable that gets a random number anywhere from five to 10.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=232)** Create hangman instance again, get the word, this time passing the requested length to fetchWord.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=242)** Now I will pass this number to fetchWord method.
>
> **[4:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=246)** Eclipse prompts me to create an overloaded fetchWord method.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=251)** And I will accept that suggestion.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=255)** And then assertTrue that requestedLength equals word's length.
>
> **[4:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=266)** Run the test, and we're back to red.
>
> **[4:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=269)** - No problem.
>
> **[4:30](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=270)** I can code for that, too.
>
> **[4:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=273)** Change the method to return strings of different lengths depending on the length.
>
> **[4:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=278)** Pizza.
>
> **[4:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=281)** Cheese.
>
> **[4:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=284)** Chicken.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=287)** Tomatoes.
>
> **[4:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=290)** Pineapple.
>
> **[4:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=293)** Mozzarella.
>
> **[4:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=296)** I run the tests.
>
> **[4:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=299)** And it's back to green.
>
> **[5:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=300)** - Oh, but this will always return the same set of words.
>
> **[5:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=303)** That's not what hangman does, right?
>
> **[5:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=305)** - Well, then we need to restate the requirement.
>
> **[5:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=308)** Return a unique word of a certain length every time.
>
> **[5:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=311)** See, I didn't want to assume anything.
>
> **[5:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=313)** - Hmm.
>
> **[5:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=314)** Looks like we're missing something.
>
> **[5:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=316)** Let's go back to the drawing board.
>
> **[5:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=318)** - Well, remember, we decided we will start with an external text file for the source of words.
>
> **[5:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-and-agile?u=76281980&t=323)** - Yes, but looks like we jumped too soon into the game logic without thinking of the game's external dependencies.

> [!info]- Semantic Content
>
> **Speakers:** - well (3), - test (1), - hey (1), - so (1), - here (1)
> **Code Keywords:** let (4), pass (4), case, (3), class, (1)
> **Code Identifiers:** fetchword (4), asserttrue (2), requestedlength (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Env Vars:** tdd (1)
> **Definitions:** is called (1)

#### Where to start?
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=0)** - TDD is about starting the incremental cycle of software development with a failing test case.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=6)** But the question is, failing test of what?
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=9)** Can we start from anywhere in the list of requirements?
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=12)** Or are there some best practices to think about when making that decision?
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=18)** At the start of every iteration we decide which use cases or user stores are to be implemented.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=24)** We then identify their acceptance criteria and then use the acceptance criteria to determine a good starting point.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=33)** For example, let us say we have these three use cases in the hangman game.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=39)** We will pick the 'Play next round' use case as our first use case.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=43)** Because it has the core game logic while the other two are dependent on it.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=49)** Now we elaborate this use cases by writing down its flow.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=54)** Let us say this is the first draft of the first basic flow of Play next round use case.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=60)** When we start a new round, the game saves a previous score if any, initializes its current score to zero and the remaining trials to say 10.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=71)** It fetches the next word for next round.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=75)** Let us say the game fetches the word pizza.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=78)** This makes the clue a string of five dashes.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=82)** The game prompts the player to enter a first guess and the player enters 'a'.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=89)** The game checks if the guess is right and so on.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=93)** Now let us look at the acceptance criteria.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=97)** The player expects that the word never repeats, the word is not predictable, the score is saved somewhere and so on.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=107)** These criteria make you think about where are the words coming from and where are we storing the score.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=115)** As the word source and score database are external dependencies, they become good candidates to start out first set of test cases.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=124)** Our first set of test cases can then be to test the first acceptance criteria that a word fetched by hangman in each round is not repeated or that it is unique.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=138)** Let's look at the input side which is word uniqueness.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=142)** - So fetch word should return a unique word every time.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=148)** - That means we need to store previous words somewhere in out test file to compare with.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=153)** How about we use a hash set for that?
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=156)** - But how many words can we store in that?
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=158)** - Actually that would depend on how many words are available from the word source, right?
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=163)** - Right but that we won't know yet.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=165)** Why don't we just start with an arbitrary number?
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=168)** Say one hundred.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=170)** - So I'll create the next case as test_uniquenessOfFetchedWord.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=181)** We need a randomizer to get a random number.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=184)** And int variable requested length.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=190)** That will store the random number and a set to store used words.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=196)** Since we're testing for uniqueness within 100 rounds, I will add another variable round that will count for one hundred rounds.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=209)** Then a string variable to store the word and an instance of hangman, now in a loop, well round is less than one hundred.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=221)** Get a random number assigned to requested length between five and ten.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=231)** Fetch the word of the requested length into the word variable and then increment the round number.
>
> **[4:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=244)** Finally, assert true that the word is added to the used word set.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=253)** If it returns true, it means that it was not already in the set.
>
> **[4:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=258)** And if I run the test now it fails.
>
> **[4:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=264)** - All right, now I'm going to go to pass the test case.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=268)** I have already copied our sample word source in the project folder.
>
> **[4:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=274)** And since the method should not return and duplicate, it will need its own hash set to check for duplicates.
>
> **[4:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=282)** So I define the same variable here as well as used word set at the class level.
>
> **[4:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=293)** Now in the fetch word method, I will have to remove this faking logic.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=298)** I first create a result variable as a string then I open a try block to read the file, using buffered reader wrapping a file reader to open WordSource.txt, except the suggestion to create the catch block for exceptions.
>
> **[5:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=325)** Now inside the try block, I open a while loop to result from the buffered reader inside which I read the first word from the file then check if the result's length is not equal to the required length.
>
> **[5:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=345)** I continue to loop to read the next word.
>
> **[5:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=350)** Else I add it to the used word set.
>
> **[5:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=355)** If it returns true then I break because it means it is unique.
>
> **[6:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=363)** Still loop continues, outside the loop I return the results, run the test.
>
> **[6:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/where-to-start?u=76281980&t=372)** Ah, the gorgeous screen again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case. (4), finally, (1), assert (1), pass (1)
> **Speakers:** - so (2), - tdd (1), - that (1), - but (1), - actually (1)
> **File Paths:** wordsource.txt (1)
> **CLI Commands:** make (1)
> **Env Vars:** tdd (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### Refactor to improve the design
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=0)** - After writing test cases and then writing code, you begin to see the low-level design emerge, but for this design to be really a good one, you need to take the third and a very important step: refactoring.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=16)** When you change your code to improve its readability or maintainability without changing its functionality, then you are refactoring it, and refactoring becomes very easy in TDD because you always have the suite of test cases to make sure you're not breaking anything when making those changes.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=36)** Let us see how our hangman team goes about it.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=40)** - So it seems to me that our code is not very efficient when it comes to fetching the word.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=44)** - Why?
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=45)** - Well, first of all, every time that we invoke the fetchWord method, we're opening and closing the word source file, and we should just do that one time and load all the words somewhere.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=55)** - Yeah, you're right.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=57)** We can store all the words in an array list.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=59)** - Now, I also think that this older version of fetchWord method, simply returning the word pizza, it's no longer needed.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=66)** I mean, it was just faking it, and now we have a better version of fetchWord.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=69)** - Yes, that's correct.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=71)** So let's make these two changes.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=74)** First, let's take care of this fake fetchWord method by simply removing it.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=78)** - And that makes this first test case redundant because it was just testing the older fetchWord method, so let's remove that one, as well.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=86)** And now run the tests.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=88)** Great, we're still green.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=91)** - Well, the next change is a little tricky.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=94)** Our fetchWord method is doing two things, loading data from the file and then finding the word to fetch.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=100)** So first, create an ArrayList wordsList in hangman,
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=108)** then create another method for reading the file, say, loadWords, and then get the logic of writing the data into an array list.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=118)** Why don't you take it forward from here?
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=121)** - Yeah, sure thing.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=124)** So copy the try-catch block to read the file from fetchWord to loadWords method.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=134)** And in the while loop, keep adding the word to the array list instead of checking its length.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=143)** Now, in the fetchWord method, slightly change the loop in the fetchWord method to iterate through the array list.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=152)** Now, as before, first check its length.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=157)** If the length doesn't match the requested length, then continue, else try to add it to usedWordsSet.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=167)** Now, if this returns true, then that means you've found a unique word of matching length, so assign it to result and break.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=180)** - Make sure you call the loadWords method in both test cases that are fetching words right after instantiating hangman.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=187)** - [Brunette Woman] Absolutely.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=188)** Let me just do that quickly.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=192)** Hangman loadWords in this one, and same thing in this one, as well.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=200)** I think it should work now.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=202)** Let's run it.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=205)** - Awesome!
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=206)** We refactored and we are still green.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=209)** - The cycle from writing a failing test case to writing the code to pass the test case usually is short, often just a few minutes.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=218)** It is important to make this cycle as short and fast as possible because it makes sure you take really small incremental steps at a time.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=228)** However, refactoring may take longer than just a few minutes because you need to take a step back and think about how and where to improve your code.
>
> **[3:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/the-iterative-red-green-refactor-cycle?u=76281980&t=238)** But if you have been refactoring your code frequently, your refactoring steps may also be often short and fast.

> [!info]- Semantic Content
>
> **Code Identifiers:** fetchword (9), loadwords (4), wordslist (1), usedwordsset (1)
> **Speakers:** - well (2), - yeah (2), - after (1), - so (1), - why (1)
> **Code Keywords:** let (6), continue (1), break. (1), pass (1)
> **CLI Commands:** make (4)
> **Env Vars:** tdd (1)
> **Definitions:** is a  (1)

#### The iterative red-green-refactor cycle
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=0)** - [Instructor] In the red green refactor cycle, the goal of refactoring is to make your code easy to read and cheaper to modify.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=8)** However, you do not refactor every time you write new test case or new code.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=14)** It is an optional step whenever you notice that you are duplicating your code or your code is becoming redundant, hard to read or your code just doesn't feel right.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=24)** Also there is no rule that says you should refactor after every five test cases or every 15 minutes.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=31)** Developers come up with their own time rules based on the complexity of what they are making and how confident they feel about it.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=38)** Some say they refactor every one hour of coding.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=41)** Others say you should refactor when you find yourself repeating some code the third time.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=46)** I refactor when I find myself getting confused, reading my own code or taking too long to add a new functionality.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=52)** Writing test cases and making them pass should be short and quick a matter of just a few minutes.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=58)** If you find yourself getting stuck, that is a good sign you should step back and refactor.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=63)** In general, you should develop an instinct to detect what is called as bad smelling code.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=69)** So when it stinks, refactor.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=72)** One way to develop this stink detection skill is to look at each method and think about a difference between its intention that is what it is supposed to do versus its implementation that is what it is actually doing.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=87)** For example, in hangman, our fetchWord method was opening the file and reading each word till it find what it was looking for.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=96)** It then close the file and then return the word.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=99)** Do you see it doing more than its intention of just fetching one word?
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=103)** It was handling the file input output functionality.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=106)** So while the intention of this method is to just find a word, its implementation includes file handling.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=114)** The hangman game needs to fetch a word in every round so this file IO activity will be done every time.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=121)** It smells bad right?
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=122)** It stinks so we change it by splitting this method in two two.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=126)** One just to read all the words from the file into an array list and second to fetch a word of certain length.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=134)** This technique of moving out a certain functionality to make a method's implementation aligned with its intention is very common.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=142)** It is call extract function refactoring.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=145)** So now we can create a new method let us say loadWords that handles the file IO and loads all words into a new member variable words list.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=155)** The advantage here is that if our data source changes in future, we need to change only this method without messing the fetch word method.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=164)** Let us look at the fetch method now.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=167)** The fetch method now only handles the words in the word list to find the word it is looking for.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=173)** The class that uses this hangman class can now call loadWords once to load all the words and then fetch as many words as it needs without doing any file input output.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=185)** When you code to pass the test, you focus on the requirements.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=190)** You try to implement a new functionality but when you code to refactor, you focus on the design.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=197)** This means that you should not be adding new functionality when refactoring because that would then need adding new test cases first and that would mean that you are going beyond the refactoring step.
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=211)** Keep the two phases of your TDD cycle, coding and refactoring separate to make your TDD more effective.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=217)** There are many simple techniques to help you identify how you can improve your code.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=222)** Martin Fowler has proposed a catalog of over 60 such techniques on [refactoring.com](https://refactoring.com).
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=228)** The extract function refactoring that I discuss earlier is one of them.
>
> **[3:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=233)** The refactoring technique in this catalog range from very simple to very complex.
>
> **[3:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=239)** One of the simplest one is change functional declaration which is nothing by renaming a method to make it easier to understand what the method does.
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=248)** Such simple refactorings are often available as automated tools in the popular IEDs such as IntelliJ and Eclipse but some refactoring techniques are little more nuanced.
>
> **[4:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=260)** for example, there is a technique called replace conditional with polymorphism.
>
> **[4:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/refactor-to-improve-the-design?u=76281980&t=265)** These require class level changes and our based on advanced design principles and patterns.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), make (4)
> **Code Keywords:** pass (2), for. (2), function (2), let (2), require (1)
> **Definitions:** is a  (2), is an  (1), is called (1), means that (1)
> **Code Identifiers:** loadwords (2), fetchword (1)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** tdd (2)
> **URLs:** [refactoring.com](https://refactoring.com) (1)
> **Tools:** intellij (1)

#### ✓ Challenge: Functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=0)** (upbeat playful music)
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=5)** - So now that we have a method to fetch the word, the next step in the requirement is to get a clue to be shown to the player.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=12)** - Right, so let's write a test case that tests the method fetch clue that returns all characters of the word replaced by dashes when the player starts the game.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=20)** - And when the player inputs a guess, then this fetch clue will also need to return these dashes replaced by correct guess made by the player, right?
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=28)** - That's right.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=29)** So let's split our requirement into three.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=34)** So first, we'll write a test case for before the player enters a guess.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=41)** Second, we'll write a test case for after the player enters a correct guess.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=49)** And finally, for after the player enters an incorrect guess.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=57)** - So, going back to our pizza example.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=60)** If the fetched word is pizza, then the fetch clue method should return five dashes.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=71)** And if the player inputs a correct guess, for example A, then it should return four dashes and an A.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=83)** - Right.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=84)** Now also, when the player enters an incorrect guess this method should return that old clue without making any changes to it.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915490?u=76281980&t=94)** - So can you help us write test cases for these requirements?

> [!info]- Semantic Content
>
> **Speakers:** - so (3), - right (2), - and (1), - that (1)
> **Code Keywords:** let (2), finally, (1)
> **Analogies:** for example (1)
> **Non-Speech:** (upbeat playful music) (1)

#### ✓ Solution: Functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=0)** - [Narrator] In this challenge you had to write test cases for the fetch clue functionality for three scenarios, before any guess is entered, after a correct guess is entered and after an incorrect guess is entered.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=19)** So I'm in test hangman.java and I will write my next test case for the first requirement as test fetchClueBeforeAnyGuess.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=36)** As usual I'll first create a Hangman instance and invoke the new method which I will have to create as fetchClue to which I will pass the word for which the clue has to be created.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=54)** And this I will store and let's say a string variable.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=59)** To deal with the compilation problem, I'll create this method as suggested, save it, come back.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=68)** I'll now make an assertion that this clue equals, five dashes and then run the test case.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=83)** It is read as expected.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=85)** Now coming back, this is the word that had come as a parameter and all I have to do is, replace all its characters with dashes.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=95)** So for that I'll first create stingBuilder call as clue.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=103)** And then in a loop, that will go up to the length of the word, append as many dashes.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=117)** That's it, now I'll say return, clue to string.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=124)** Save and run.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=127)** They are green.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=128)** Let's move on.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=130)** Next requirement was to fetch clue after a correct guess is entered.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=134)** So I'll copy the same code and then make some changes.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=139)** Fetch clue after correct guess.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=146)** Now in this case, I will have clue as my first one with all dashes and I'll have to invoke fetchClue one more time with a correct guess.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=156)** So for that I'll say string newClue equals hangman.fetchclue
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=165)** to which I will have to pass the same word as before but also the clue that has been created so far along with the guess character which let's say is 'a'.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=181)** To deal with this compilation issue once more, I create this fetchClue with three parameteres where the first one is the word, second is the clue and third is the guess.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=196)** Come back and with this guess I should get my new clue
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=204)** as this string with 'a'.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=208)** Let's run it and it fails.
>
> **[3:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=213)** We go back and now we write the code.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=216)** So code will be somewhat similar to what we had done before.
>
> **[3:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=219)** So I'll copy paste and make some changes.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=223)** First let me change this to newClue because clue is already a parameter name then after entering the loop I will have to check if the guess equals the character at that position in the word so I'll say word.charAt(i)
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=248)** and the second condition is, the guess should not be something which had already been guessed before.
>
> **[4:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=254)** So it should not be equal to the character in the clue.
>
> **[4:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=261)** So charAt, ah, here.
>
> **[4:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=267)** If these two conditions are met, then I would want to append a new clue whatever is the guessed character.
>
> **[4:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=280)** Else, I will like to append a new clue, whatever is there in the clue, the original clue that came along as a parameter.
>
> **[4:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=290)** So clue.CharAt(i).
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=298)** Let's run.
>
> **[5:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=301)** Let's see what is the problem.
>
> **[5:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=303)** That is because we are using clue here for returning.
>
> **[5:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=307)** So let's change this to new clue and run one more time.
>
> **[5:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=313)** And we are green.
>
> **[5:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=314)** Finally the last requirement was to fetch clue after an incorrect guess is entered.
>
> **[5:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=320)** So let's do that.
>
> **[5:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=321)** I'll copy paste the same test, change this to after incorrect guess and change my guess to a wrong guess in which case my new clue should still remain all dashes.
>
> **[5:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=340)** Let's run it.
>
> **[5:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915491?u=76281980&t=342)** Wonderful, we are green because my fetchClue method was fulfilling that condition right here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (2), case. (1), return, (1), case, (1)
> **Code Identifiers:** fetchclue (4), newclue (2), charat (2), fetchcluebeforeanyguess (1), stingbuilder (1)
> **CLI Commands:** make (3)
> **File Paths:** hangman.java (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. TDD Structure and Syntax

#### Test structure
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=0)** - [Instructor] When you write your first test case, you start with one test class per code class.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=6)** For the Hangman game, the team created one Test Hangman class for one Hangman class.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=11)** As you write more test cases, the code in the code class continues to grow.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=16)** At some point, you will see that your code class is becoming bloated.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=21)** In such a scenario, you will refactor and split your code class.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=25)** For example, the team may decide to split the Hangman class into two, keeping the scoring logic into a class called as HangmanScores.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=34)** Should you then create a new test class?
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=36)** You may, if it helps keep your test cases more manageable, or, you may split the code class into two, but continue to use the same test class.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=46)** Similarly, you may continue to have the same code class, but decide to split the test cases into two, one focusing on the words, and the other on scoring.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=56)** There's no strict rule that a test class cannot test more than one code class, or that one code class cannot be tested by more than one test class.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=64)** Think in terms of the requirements you are trying to test.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=67)** If your requirement for scoring tightly depends on the rest of Hangman functionality, than you may want to keep their scoring logic tested along with rest of the Hangman functionality.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=78)** That was about the external structure of test cases.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=82)** Let us now look at internal patterns inside test cases.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=86)** If you look closely, a test case has three things in it.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=90)** Arrange the elements required to test, act on the elements, and then assert that the result is as expected.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=98)** This is also called as a Range, Act, Assert pattern.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=102)** You will also notice that the arrange code is repeated across many test cases.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=108)** It creates a randomizer, generates a random number, creates a Hangman instance, and then invokes its loadWords() method.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=117)** If you later decide to do any of these four things differently, you'll have to change all these test cases.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=123)** That doesn't sound good right?
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=126)** And these repeating lines are also confusing the real intent of each of these test cases by making them so bloated.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=134)** So, how can you avoid this repetition of code?
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=138)** You can use what are called as test fixtures.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=141)** Those repeating lines of code represented a certain state of the system for the test cases to run.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=147)** This fixed state ensures that the test can be repeated any number of times.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=153)** So, whenever you want to run the test, you set up that fixture, run the test, and then tear it down when done, and if you have many test cases wanting the same fixture, well, you can simply share that fixture, and this is what is called as Set Up, Test, Tear Down pattern.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=171)** You set up the fixture in a method, annotated with @BeforeEach, then tear down with a method annotated with @AfterEach.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=180)** Junit 4 has similar annotation as @Before and @After.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=185)** So in Hangman, we can move the repeating lines of code into a method annotated with @BeforeEach, and give it a name, such as, setupTest().
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=195)** These four lines of code will then be executed before each test case.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=200)** The tear down method is annotated with @AfterEach, and is often useful when you want to destroy the older objects and reinitialize any other variables modified in the previous tests.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=212)** This might be useful when you want to optimize memory management to make your test cases run faster.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=218)** In this example, the tear down method is not really required because we are creating new objects in the setup method, and in Java, the automatic garbage collection cleans up all the old objects that are no longer in use.
>
> **[3:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=233)** While the Set Up, Test, Tear Down pattern is repeated for each test case, there may be a few things that you may want your test cases to do just once before and once after, all test cases.
>
> **[4:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=246)** For example, in our Hangman game, we want the words from word source to be loaded into the word list, just once.
>
> **[4:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=254)** Since word list is never modified by any of the test cases, there is no reason why it should be recreated every time for each test case.
>
> **[4:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=263)** Same applies to the random object as well.
>
> **[4:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=267)** We may want a new random number for each test case, but not a new randomizer, and for that, we can use one more pair of annotations, @BeforeAll and @AfterAll, which were called as @BeforeClass, and @AfterClass in JUnit4.
>
> **[4:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=285)** Any code in @BeforeAll method will be executed before the test class instance is created, and any code in @AfterAll method, will be executed after the test class instance is destroyed.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=298)** This means that both these methods need to be static.
>
> **[5:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=302)** In Hangman, we need @BeforeAll to create Random and Hangman instances, and the statement to load the words.
>
> **[5:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=310)** Since the method is static, the Random and Hangman instances, also need to be changed to static.
>
> **[5:17](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=317)** You may want to include @AfterAll for things such as writing some final output or closing any connections that you may have open during testing.
>
> **[5:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-structure?u=76281980&t=325)** Since our example did not need any such functionality, there is no need for @AfterAll method here.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (5), case, (3), static (3), continue (2), class, (2)
> **Prerequisites:** set up (4), required to (1), setup (1)
> **Analogies:** for example (2), such as (2)
> **Code Identifiers:** loadwords (1), setuptest (1)
> **Definitions:** is called (1), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=0)** - Most programming languages have assert statement used for defensive programming to ensure that, if a certain condition is true, at a given point of time in the program execution.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=11)** If the condition is not true, the program will throw an assertion error.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=15)** In Java these assertions are by default disabled, and can be enabled by passing a parameter to the JVM at the time of executing the program.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=24)** For example in this class Assertor, I'm invoking a method named assertSomething on an instance of Assertor.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=33)** Here, I expect the value of x to be greater than five, so I can say assert followed by, the condition x greater than five.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=43)** In this example, obviously, the condition will be true, and so the program will quietly pass without any errors.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=50)** To demonstrate failure, I have now changed the condition.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=54)** I am now asserting that x is less than five.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=57)** As this assertion will be false, the program will throw an assertion error.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=62)** This error will show up only if I have configured my JVM to enable assertions by passing an argument as shown here.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=70)** the xUnit frameworks uses a similar idea, but they have their own assertion API, to make those assertions.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=78)** JUnit five support these assertions statements, that are static methods in the assertions class, in the Jupiter API.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=86)** Many of these assertions are also supported in JUnit four; however, there is one assertion statement assertThat, that was part of JUnit four, but now has been deprecated in JUnit five.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=99)** assertThat statement is a little more readable, than the other assert statements, So this enhanced readability is provided in JUnit five, through third-party assertion frameworks, such as AssertJ or Hamcrest, that you will learn later in this course.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=117)** For now, let us look at some other assert statements, starting with assertEquals.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=123)** assertEquals takes minimum two and Maximum three parameters.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=127)** first one is the expected Object, second is the actual Object, and the third is an optional String, which is a message to be printed, when the expected Object is not equal to the actual Object.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=139)** Let us take an example.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=141)** Here, I have two variables x and y, where x is a simple int and y is a Wrapper integer.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=147)** When comparing an integer data type, although assertEquals expects different data types in its parameters, it uses autoboxing to convert int into Wrapper integer.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=160)** So you can write the assertion with x and y as shown here.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=164)** Prior to JUnit 5.4, you had to box, or unbox one of them, but since then JUnit is able to auto box and auto unbox itself.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=175)** When the values to be compared are real numbers, such as a double or a float, then there is an additional parameter that helps handle Precision problems.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=185)** Since Double and Float values lack Precision, when dealing with recurring decimals, our Delta value can be provided, as the deviation from expected value.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=195)** In this example d has a recurring decimal value, which when compared with the Wrapper d, will not compare as equal and so the assertion will fail, but when compared along with a Delta, it will pass the assertion.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=212)** Since the things to be compared in assertEquals, can be any type of object, you can use any reference data type in this assertion, such as a String or any custom class.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=223)** Let us say you had a string variable clue, which you expect should be equal to five dashes.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=228)** So you can say assertEquals, the expected value, and then the actual clue variable, followed by an optional message, "Wrong clue".
>
> **[3:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=238)** many assertion statements are interchangeable, so here I can also say assertTrue, clue equals string of five dashes.
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=247)** Another similar looking assert statement is assertSame; however, it is not same as the assertEquals statement.
>
> **[4:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=256)** assertSame uses the equal equal conditional operator, whereas assertEquals uses the dot equals method of the object, which means it is not comparing the value of the object, but it's memory location to determine, if it is the same object, and not any other object having the same value.
>
> **[4:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=277)** So in this example assertSame will fail, while assertEquals will pass, because the string class has equals method overridden to compare value and not compare memory location.
>
> **[4:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertions?u=76281980&t=290)** If you have two objects from a custom class to be compared, whose equals method is not overridden, then assertEquals will work same as assertSame.

> [!info]- Semantic Content
>
> **Code Identifiers:** assertequals (9), assertsame (4), assertthat (2), assertsomething (1), xunit (1)
> **Code Keywords:** assert (5), pass (3), let (3), throw (2), static (1)
> **Definitions:** is a  (4), is an  (2)
> **Env Vars:** jvm (2), api (2)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** make (1)
> **Versions:** 5.4 (1)
> **Cross-References:** later in (1)

#### Testing exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=0)** - [Instructor] If you have a method that should throw an exception under certain conditions, then you need to test whether it does so when those conditions arise.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=9)** This requires designing your test cases a little differently, this feature is available in JUnit 4 as well, but the approach is a little different between the two.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=19)** Let us first see JUnit 4 approach.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=22)** In JUnit 4 the @Test annotation supports an optional parameter, expected, the declares the name of the exception class that should be thrown in the test case.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=33)** So if you expect IllegalArgumentException to be thrown, then you say expected= IllegalArgumentException.class.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=42)** You create those conditions for the exception, and then you invoke the method that should throw the exception.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=48)** If the method is behaving correctly under the given conditions, then the test case should pass.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=53)** If it doesn't, that means either the expected exception did not get thrown or some other unexpected exception got thrown.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=61)** In JUnit 5 the approach is slightly different, you use assertThrows assertion, and parse the expected exception and the code that throws the exception as two parameters.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=74)** Let us look at some code to see what that means.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=78)** In our Hangman example, there is this fetchClue method, that takes a parameter of type char.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=85)** This is the character is the guess input by the player.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=89)** The fetchClue method is supposed to check if the character belongs to the word and if yes, then return the new clue with character substituted in it.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=97)** But, what if the player enters some invalid character?
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=101)** The valid characters are only alphabets A to Z, so what if the player enters a number or a special character?
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=108)** We want that this method should throw an illegal argument exception in such a case.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=113)** So let us first write a test case for that.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=117)** So I am in TestHangman, here I create the next test case, void test_whenInvalidGuessThenFetchClueThrowsException(),
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=135)** nice long name, now, I will have assertThrows as my assertion to which I need to parse two parameters.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=145)** The first parameter is the name of the exception, which is IllegalArgumentException.class.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=154)** And the second argument is the code, how do we parse code here?
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=160)** Well, we can us lambda expression, so here we say, hangman.fetchClue, let's say the word is our good ol' pizza, the clue is just five dashes and the character is 1, which is invalid because we expect only alphabets here.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=182)** Close the statement and let's run it.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=187)** And we are red, as expected.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=189)** Go to Hangman, and this is where I need to now code for checking the character, guess.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=196)** So let's say the user has entered a capital alphabet, so I need to convert that into small case.
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=203)** For that I'll say if guess is greater than, equal to capital A and guess is less than, equal to capital Z, then I just need to convert this into small case.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=221)** So I say guess += 32, to shift its ASCII code.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=228)** So now if guess is less than "a" or guess is greater than "z", then that means it is an invalid character and so I say throw new IllegalArgumentException.
>
> **[4:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=252)** Run the test, and we are green.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=255)** Another thing you can do here is you can actually check the message that comes in the exception.
>
> **[4:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=262)** So for that I'll create one more test, whenInvalidGuessThenFetchClueThrowsExceptionWithMessage(), really long name.
>
> **[4:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=275)** And I can now capture this exception and say, e, and make another assertion.
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=283)** assertEquals, "Invalid Character".
>
> **[4:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=290)** And I compare this with getMessage of e.
>
> **[4:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=297)** Run the test, it fails.
>
> **[5:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=300)** I just take this message, go to Hangman and parse this
>
> **[5:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/testing-exceptions?u=76281980&t=308)** as its parameter, run it, and we are green again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), throw (4), case. (4), class. (2), pass (1)
> **Code Identifiers:** fetchclue (3), assertthrows (2), wheninvalidguessthenfetchcluethrowsexceptionwithmessage (1), assertequals (1), getmessage (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** ascii (1)
> **Speakers:** - [instructor] (1)

#### ✓ Challenge: Performance
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=0)** - So we figured out how to fetch a word from the word source and how to get the next clue based on the player's input.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=12)** - Well now we need to think about updating the number of remaining trials in each round and calculating the score after each input.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=19)** - So that means that we have two variables to be tested in each round.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=25)** One, remaining trials, and two, the score.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=35)** Now, testing trials should be easy because it should be reducing by one after each guess.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=40)** Our max number of trials was 10, so we can define that as a constant.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=45)** - And our scoring scheme is this formula.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=50)** Score equals score plus max trials divided by word length.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=63)** - So we need to update remaining trials at each input, but only update the score when the input is correct.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=70)** - I can think of these scenarios.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=72)** One, before the player enters a guess.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=78)** Two, after the player enters the first correct guess.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=85)** Three, after the player enters a second correct guess.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=92)** And finally, after the player enters an incorrect guess.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=102)** - This is a good list to start with, but I think that we should test trials and scores in separate test cases, just to keep the tests focused and coherent.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=110)** - I completely agree.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915493?u=76281980&t=113)** Can you help us write test cases and code for these requirements?

> [!info]- Semantic Content
>
> **Speakers:** - so (3), - i (2), - well (1), - and (1), - this (1)
> **Definitions:** means that (1), is a  (1)
> **Code Keywords:** finally, (1)
> **Non-Speech:** (upbeat music) (1)

#### ✓ Solution: Performance
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=0)** - [Instructor] In this challenge, we are testing two variables, remaining trials and the score.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=11)** When a new round is started, that is a new word is fetched, then the remaining trial count is set to a constant, say max trials.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=19)** And after one guess made by the player, it should be reduced by one.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=24)** For score, it should be zero in the beginning and increase only when a correct guess is made as per the formula shown here.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=32)** So let us start with remaining trials.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=35)** So I am in test hangman.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=37)** Here I will write my next test case, as void test, remaining trials, before any guess.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=52)** At this point I would use hangman and fetch a word.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=58)** And this the indication that I am just starting a new round.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=62)** And then I say, assert equals.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=68)** And I expect a constant, let's say max trials in hangman.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=74)** Which should be equal to hangman's remaining trials variable.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=82)** Now to resolve these issues, I will first create the constant.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=86)** It says public static final.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=90)** I'll make this as end.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=91)** And set it to ten.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=96)** Then for remaining trials, I'll create a member variable.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=100)** Set it to end.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=103)** Come back around the test case and this is zero.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=110)** So now to make this pass a test case, I go to hangman.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=115)** And right where I am starting a new round that is in fetch word.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=120)** I will set remaining trials to max trials.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=131)** Run the test and it passes.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=135)** Move onto the next scenario where I need to make a guess and then see if the remaining trials has reduced by one.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=146)** So I pick up this code.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=153)** And here I'll say, after one guess.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=157)** Making one guess means using the fetch clue method.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=161)** So what I do here is, I invoke hangman.fetchclue to which I pass a word,
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=174)** let's say pizza, a clue, and a guess.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=184)** At this point I don't care whether the guess is right or wrong.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=188)** And after this, I would expect that the remaining trials would be reduced by one.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=194)** So I will make this as minus one.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=199)** Run the test, and it fails.
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=203)** And here you can see it says, expected nine but was ten.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=206)** So I go back to hangman and the place where the guess is being passed, which is this fetch clue method I will just reduce remaining trials minus minus.
>
> **[3:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=226)** Run the test and we are green.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=229)** Now onto score.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=231)** First thing I want to test that the score is zero to start with.
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=236)** So I say void test, score before any guess.
>
> **[4:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=246)** I invoke hangman, fetch word, off a certain length.
>
> **[4:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=254)** And then assert that hangman score is zero.
>
> **[4:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=263)** Resolve this by creating this field as an int, which will be zero to start with.
>
> **[4:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=275)** And this should be assert equals.
>
> **[4:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=281)** And run the test.
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=283)** The test will pass because the score will be zero.
>
> **[4:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=286)** But this test will be helpful in making sure that score remains zero at the start of every round.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=291)** So let's start with the next test case that I have score after correct guess.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=304)** Here I will define a word.
>
> **[5:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=308)** Let's say pizza.
>
> **[5:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=312)** Clue as five dashes.
>
> **[5:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=316)** And guess as let's say "A."
>
> **[5:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=324)** Now I will invoke fetch clue with these three values.
>
> **[5:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=331)** After doing that I expect that the score should have increased because we have provided correct guess.
>
> **[5:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=339)** So we will say, assert equals.
>
> **[5:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=342)** And this should be equal to max trials divided by the length of the word as per the formula.
>
> **[5:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=352)** And this should be the value of hangman score.
>
> **[5:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=359)** To make sure that this is correctly typed, I first convert the type here and of course I need to say, hangman.maxtrials.
>
> **[6:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=372)** Run the test.
>
> **[6:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=373)** And it fails as expected.
>
> **[6:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=375)** So I go to hangman.
>
> **[6:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=376)** Go to the fetch clue method, which is where I'm testing whether the guess is right or wrong.
>
> **[6:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=383)** And that is where I need to update the score value so I say score plus equals max trials divided by word length.
>
> **[6:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=394)** And once again, I just need to make sure that it is typed correctly.
>
> **[6:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=402)** Run it.
>
> **[6:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=404)** And it fails and it says, expected two but was four.
>
> **[6:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=408)** That means score got incremented by more than what we wanted.
>
> **[6:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=411)** And if you think about it, that's happening because score is being manipulated by other test cases where this fetch clue method is being called.
>
> **[7:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=420)** So how do we take care of that?
>
> **[7:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=423)** One option is, I can initialize score and each test case where I want to test it.
>
> **[7:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=431)** But that means repetition across several test cases just to avoid that I go to my set up test method and just include hangman score to be zero.
>
> **[7:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=446)** And then run it again.
>
> **[7:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=449)** And we are good here.
>
> **[7:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=451)** One last thing I want to test in my test cases.
>
> **[7:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=455)** Is where I pass incorrect guess.
>
> **[7:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=459)** So let me just copy this whole thing.
>
> **[7:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=463)** And just make the guess value as "x" and make the name as score after incorrect guess.
>
> **[7:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=473)** At this point, I want hangman score to be zero.
>
> **[7:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=479)** Run the test.
>
> **[8:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2915494?u=76281980&t=483)** And we are green.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), assert (4), pass (4), case, (2), public (1)
> **CLI Commands:** make (8)
> **UI Navigation:** go to (4)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Scaling TDD

#### TDD tools and frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=0)** - [Instructor] Test-Driven Development is carried out within an ecosystem that comprises a variety of tools and frameworks.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=7)** TDD focuses on unit test cases that test the most granular components of the system under test.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=14)** The xUnit frameworks have test runner engines to execute these test cases.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=19)** While this approach works well for small-scale applications, we need to use additional tools and frameworks to help scale TDD for large and complex systems under test.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=30)** Let us look at some of these tools and frameworks.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=33)** A system is developed using Integrated Development Environments, and so as the unit test suite.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=40)** All mainstream IDEs such as Eclipse and IntelliJ now support xUnit framework integration.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=47)** Large-scale systems are built using build frameworks such as Maven and Gradle and therefore TDD needs to be situated within these build frameworks as per the guidelines provided by them.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=60)** For a richer set of testing functionalities, and to make the test cases more readable, third party assertion frameworks such as Hamcrest and Assertj extend core xUnit libraries.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=73)** And finally, the system under test may have external dependencies on databases, API's, products and services.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=83)** These external dependencies may not be directly accessible, or may not even be ready at the time of testing.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=91)** So TDD uses mocking frameworks to help test external dependencies of the system under test.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=98)** Understanding how to set up and use these tools and frameworks is an important step to help scale TDD for large and complex systems.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/tdd-tools-and-frameworks?u=76281980&t=107)** We will take a deeper look into two of these frameworks next, assertion frameworks and mocking frameworks

> [!info]- Semantic Content
>
> **Env Vars:** tdd (5), api (1)
> **Code Identifiers:** xunit (3)
> **Analogies:** such as (3)
> **Code Keywords:** let (1), finally, (1)
> **CLI Commands:** make (1)
> **Tools:** intellij (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)

#### Assertion frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=0)** - [Instructor] While the assertions provided by JUnit are enough to write most of the test case scenarios, they can become somewhat tedious, hard to read, and sometimes lacking in functionalities for complex test cases.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=14)** To overcome this limitation, JUnit recommends the use of third-party libraries, such as AssertJ, Hamcrest, and Truth.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=22)** They not only offer a richer set of testing functionality, but also mimic the natural flow of language, making your test cases easier to read and write.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=32)** Let us take a closer look into AssertJ, as an example.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=36)** The core artifacts of AssertJ library are available in the Maven center repository.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=42)** You need to include these artifacts in the class part of your project.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=47)** Much like JUnit five, AssertJ has one class called assertions which you need to import to get started on AssertJ.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=55)** Among other methods, it has assertThat method, which used to be part of JUnit four, but is now moved to third-party libraries.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=65)** To use this assertion, you provide the objectUndertest as the parameter to the assertThat method, and then invoke the condition to be tested using the fluent API, such as isEqualTo, isNotNull, and so on.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=81)** Eclipse requires a simple configuration step to enable auto-completion assistance to use this fluent API.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=88)** One of the strengths of AssertJ is its type-specific assertions.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=92)** For example, when testing a string data type, you can use string-specific tests such as endsWith or contains.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=101)** Let us now look at some examples of using this assertThat method.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=106)** This example is from the hangman game where there is a word, a clue, and a guess.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=113)** The score is zero to start with.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=116)** When the player enters a guess, the fetchClue method is invoked to update the clue if the guess is correct by putting the guessed character in its place.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=127)** Using JUnit5 assertions, I would say assert equals two and hangman.score.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=134)** Using AssertJ, I can say assertThat the hangman score is equal to two.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=141)** Using the same, arrange, and at statements in this example, I can say assertThat newClue is equal to the clue with an i at its second place.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=154)** Note that if you say assertThat newClue equals this clue, then this assertion will never fail because the equals expression will evaluate to true or false, which is just a boolean and not an assertion, and therefore, this assertion is incorrect.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=173)** The type specificity of AssertJ becomes very useful for more complex data types.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=179)** For example, here I'm checking that the wordsList that is populated by reading all the words from word source has the word pizza in it and has its size greater than x.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=192)** In the next example, I'm fetching a word of length y and then asserting that the fetched word now exists in the used words list.
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=203)** The AssertJ library is fairly extensive in its depth and breadth of functionality, and you can find all about it at the URL shown here.
>
> **[3:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=213)** The second assertion framework that has a wide adoption is Hamcrest that was born in Java, but has now been adopted by many other languages, such as Python and Objective-C.
>
> **[3:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=224)** It also integrates with other testing frameworks, such as TestNG, and mocking frameworks, such as JMock and EasyMock.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=231)** Hamcrest's basic functionality is based on matcher objects that are essentially predicates to compare the expected value with the value to be tested.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=242)** The library provides matcher objects, and you can also create your own custom matcher objects if required.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=251)** After making the static imports as shown here, you can assertThat with the object under test and the matcher predicate.
>
> **[4:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=259)** For example, the string poetry that has a poetic line by James Joyce is the object under test, and the containsString is the matcher.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=268)** Let us look at some commonly used Hamcrest matchers.
>
> **[4:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=272)** The following assertion is using allOf that takes a series of matchers and expects all matchers to match.
>
> **[4:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=281)** In this case, the matcher containsString and startsWith both have to be true for the test to pass.
>
> **[4:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=289)** Similarly, anyOf takes a series of matchers, out of which only one matcher needs to be true for the test case to pass.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=298)** For numeric data, the ordering can be tested by using the greaterThan matcher, as shown here.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=304)** Other similar matchers are greater than or equal to, less than, and less than or equal to.
>
> **[5:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=311)** With float or double, the precision issue can be tackled by using closeTo matcher that takes the approximate value and the delta.
>
> **[5:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=320)** As long as the value under test is within the given delta, the test will pass.
>
> **[5:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=326)** For an array data, this example shows how you can test an array's elements against an array of matchers.
>
> **[5:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=334)** The object under test here is the array letters, and each element in this array will be matched with the respective element in the array of matchers.
>
> **[5:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=345)** The first element will be checked for startsWith A, second with startsWith B, and third with startsWith G.
>
> **[5:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/assertion-frameworks?u=76281980&t=356)** For maps, in this example of a dictionary, the hasEntry matcher tests whether the map has the given entry as shown here.

> [!info]- Semantic Content
>
> **Code Identifiers:** assertthat (7), startswith (4), newclue (2), containsstring (2), objectundertest (1)
> **Code Keywords:** let (3), pass (3), type, (1), assert (1), static (1)
> **Analogies:** such as (6), for example (3)
> **Env Vars:** api (2), url (1)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### Test doubles
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=0)** - [Instructor] The system or the object on the test may have external dependencies such as databases, web services or other systems but you may not have access to these external dependencies all the time or they may not even be ready at the time of testing.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=16)** So the option is to create proxies for these external dependencies or what are formally called as Test Doubles.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=24)** Test Doubles simulate the behavior of the objects.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=27)** They are of five different types.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=30)** A Test Double can be a dummy object, a stub, a fake object, a spy or a mock.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=37)** Now let's take an example from our hangman game to understand each of these.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=42)** Let's say there is a requirement to save the game score once the player completes a round.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=47)** It is also required to keep track of which word is associated with a score.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=53)** So I have a new method in hangman called saveScore that takes and instance of type WordScore.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=60)** WordScore has a word and the score associated with it.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=64)** If you look inside WordScore, there is nothing going on here.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=68)** I use an instance of WordScore as a dummy object just to make my hangman code compile.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=74)** At this point I do not care whether WordScore has any logic or not.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=79)** So WordScore at this stage is a dummy object that acts as a substitute only for the code to compile.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=86)** When writing my test for saveScore method, I simply use WordScore with some values that have no impact on the test but are there as placeholders.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=97)** The saveScore method is using it as a dummy parameter and doing something unrelated to the WordScore value.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=105)** Next, I want to actually save the score.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=107)** But save where?
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=109)** We may want to store this in an XML file, a JSON file, a relational DB or maybe just a text file.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=117)** That is a design decision which is yet to be taken.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=120)** So how about we make an assumption in a way that once the ScoreDB design is ready, we can simply plug it in.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=130)** For that I create a ScoreDB class that has a writeScoreDB method.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=135)** The hangman's saveScore method will invoke ScoreDB's writeScoreDB method.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=142)** This will decouple my hangman class from the actual database logic.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=147)** My saveScore won't have to worry about how the score gets returned into the DB.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=152)** Its job is to invoke ScoreDB's writeScoreDB method and it expects writeScoreDB to return true if the write operation is successful.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=162)** At this stage ScoreDB just proxies for the real DB that will come at a later date.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=169)** Its writeScoreDB method simply returns true.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=173)** This is called a stub.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=175)** It feeds desired inputs to the tests and doesn't reflect real behavior.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=181)** So with the ScoreDB as a stub, I can now write my test case that invokes saveScore and asserts that it returns true.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=191)** The WordScore still remains a dummy object and saveScore invokes ScoreDB's writeScoreDB method.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=199)** Now I want to take a step further and start working with WordScore values.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=205)** So for that I store WordScore in a map in ScoreDB that has its key as a word and value as the players score for that word.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=216)** So in a way, I am introducing some old functionality in ScoreDB with two methods, writeScoreDB and readScoreDB.
>
> **[3:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=224)** The idea is that my hangman class which is the object on the test can start working with some score values.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=231)** So in these ScoreDB's writeScoreDB method, I start storing these scores in a WordScore map.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=240)** Now ScoreDB has some functionality but it is kind of fake.
>
> **[4:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=244)** It cannot be taken as production ready code but it is better than having nothing.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=250)** So ScoreDB here is a fake object.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=253)** In the test case, I now have WordScore which I pass to saveScore method.
>
> **[4:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=259)** I assert that when I read the score for word apple, I get the score as eight.
>
> **[4:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=266)** My WordScore class is now fully coded and hangman's saveScore is invoking ScoreDB's writeScoreDB method as before.
>
> **[4:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=276)** At this point what if I was not too keen on implementing this fake functionality but only interested in checking that saveScore method invokes ScoreDB's writeScoreDB method or in counting how many times this method gets invoked.
>
> **[4:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=294)** It is like making ScoreDB work as a spy that spies on hangman.
>
> **[4:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=299)** For that purpose I create a boolean variable in ScoreDB called writeScoreDBCalled.
>
> **[5:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=306)** Inside the writeScoreDB method, I simply set this boolean variable writeScoreDBCalled to be true.
>
> **[5:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=314)** In such a case, ScoreDB is recording output for a component outside the object under test which can be verified.
>
> **[5:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=322)** So to write a test case, I start with the boolean variable writeScoreDB as false.
>
> **[5:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=329)** Create a WordScore and pass it to saveScore and then assert that writeScoreDBCalled has now turned true.
>
> **[5:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/test-doubles?u=76281980&t=339)** Rest of the two classes, WordScore and hangman stay the same as before.

> [!info]- Semantic Content
>
> **Code Identifiers:** writescoredb (12), savescore (11), writescoredbcalled (3), readscoredb (1)
> **Code Keywords:** case, (3), let (2), pass (2), assert (2)
> **Definitions:** is a  (4), is called (1)
> **CLI Commands:** make (2)
> **Env Vars:** xml (1), json (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Mocking
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=0)** - [Instructor] A mock object is a special kind of test double.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=3)** Martin Fowler defines it as an object pre-programmed with expectations which form a specification of the calls they are expected to receive.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=12)** Mock objects mock the expected behavior of an external dependency, and the emphasis here is on the behavior and not on it's state.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=22)** Let us take an example.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=23)** Let us say this object under test relies on an external DB to provide values for a set of keys.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=31)** When the key is ABC, the expectation is that external DB will return the value nine.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=38)** When it is DEF, then it will return seven and so on.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=43)** To get a test double for certain external DB, I can create an external DB stub that has a meta get value.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=51)** It takes the key as string and returns the appropriate value as expected.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=56)** In tests, I'm testing my object under test that has a method total values that must add up all the values in the external DB.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=65)** To make this happen, I use an instance of the stub in my object under test and invoke get value with different keys and add up all the values.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=76)** So far this works.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=78)** But what if I also want to test how many times the get value method is called or throw an exception when certain invalid values are passed, or some other such functionalities?
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=91)** If I keep adding such proxy code to the stub, then it will soon get too unwieldy to maintain.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=98)** Not a good idea, especially when you know that this is not even the real object.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=103)** This is where mocking comes to rescue.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=106)** While a stub is a hand coded class, a mock is generated using a mocking framework.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=113)** That means you never code anything in a mock.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=116)** You saw that the stub was offering canned responses.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=119)** If the key is X, then return Y.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=122)** So all predetermined responses need to be hard coded into the stub.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=127)** In mocks, you define only the expected behavior within a specific test without having to worry about what other tests may need.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=136)** And in this way, stubs focus on the object state, whereas mocks focus on its behavior.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=143)** Mocks are defined using mocking frameworks that complement X unit frameworks and can be integrated within the regular TDD setup.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=152)** J unit is extended by mocking frameworks such as jMock, EasyMock and Mockito.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=157)** Python's unit test has unittest.mock.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=161)** .NET has JustMock, and so on.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=165)** Depending on which framework you choose the mocking API accordingly changes, but the basic idea of mocking remains the same.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=173)** Let us take the same example as before and change it using mocking approach.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=178)** We will use Mockito API as it is the most popular framework among Java developers.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=185)** The first change will be the way you define the mock.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=188)** In a mock, since you're not going to provide any behavior, you can declare it as an interface.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=194)** So here I have an interface called external DB mock that has this one meta signature, get value.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=202)** Next, the test.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=204)** Here I declare the mock object of type external DB mock, but instead of using a new operator to create its instance, I use a method mock which takes the name of a class to create its mock.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=217)** This mock is actually a static method in Mockito class that needs to be imported.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=223)** Next create an instance of object under test and pass this mock object to it.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=229)** This is called ask dependency injection.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=232)** Now you define the behavior of the mock object using the when then statement where you say that when mock objects get value method is past the string ABC, then it should return nine.
>
> **[4:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=245)** When it is past DEF, then it should return seven, and when XYZ, then 10.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=251)** So in these three statements you are stating that you expect the mock object to behave in this fashion.
>
> **[4:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=258)** Now you can make an assertion that when the object under test is asked to get total values then it should return 26.
>
> **[4:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=267)** Then in object under test, you declare a variable of the type external DB mock and initialize it and its constructor.
>
> **[4:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=276)** And finally, in the get total values you simply sum up the values returned by the mock object for all these values.
>
> **[4:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=284)** So what this example shows is that while you defined only the mock object's interface, you could create its instance and define its behaviors specific to the needs of the test case.
>
> **[4:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=296)** Mockito has many other very useful and simple to read features that can help you perform fairly powerful mocking.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/mocking?u=76281980&t=304)** What you saw here was just a small glimpse of how it works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3), def, (2), throw (1), class, (1)
> **Env Vars:** abc (2), def (2), api (2), tdd (1), net (1)
> **Definitions:** is a  (2), is called (2)
> **CLI Commands:** make (2), python (1)
> **Best Practices:** the key is (2)
> **Code Identifiers:** jmock (1)
> **Documentation:** specification (1)
> **Analogies:** such as (1)

#### ✓ Challenge: Database
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980)

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
> **[0:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=33)** - That's a cool idea.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=34)** Let's break it down a little bit.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=35)** Here's what I think should be done.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=37)** So save word plus score and return true.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=45)** So when a word and a score for that word is passed to the database it saves it and then it returns true.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=52)** Get word and return score.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=57)** So when a word is passed to the database it checks to see if it exists in the score database and if yes it returns the score and if no then it returns zero.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=69)** What do you think?
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=70)** - I think it sounds like a great start.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2917605?u=76281980&t=73)** Can you help us mock the score database?

> [!info]- Semantic Content
>
> **Speakers:** - i (2), - we (1), - but (1), - yeah (1), - how (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Non-Speech:** (upbeat music) (1)

#### ✓ Solution: Database
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=0)** - [Instructor] In challenge three you were to create a Mock Score DB that mocks the behavior of saving the word and the score in the DB, and return true.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=15)** And get a word score which returns a score.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=20)** For the solution I'm using Mockito as my mocking framework which will be within the Maven build framework.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=28)** We will be looking at the solution in four steps.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=31)** First step we will set up the Maven project, then set up Mockito, create MockScoreDB interface, and then write test cases and the code.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=41)** So let's move on to Eclipse.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=44)** So I'm in Eclipse and I'm going to create a new project.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=48)** From there I will choose a Maven project here.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=51)** And then we need a simple project so I choose this option.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=56)** We need to give two inputs at this point.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=59)** The group ID will be an inner package ID, so here I can say hangman.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=66)** The artifact ID will become my project ID, so here I'm going to say 03-06-begin.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=78)** Now you can see your project has been created with a sewed in structure of folders.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=84)** Maven organizes all your files nicely in different folders for the main files, the resources files, and the test files.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=95)** The next step is to make sure that your Java version is aligned with what you're working with.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=103)** Maven by default goes to 1.5, and we want to change that.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=108)** So for that I go to build path, and configure build path.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=114)** Here I have to make sure that I have my most recent Java version.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=125)** And I can see my JDK 11, I include that.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=129)** Remove the older version.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=132)** Then I need to make sure that my compiler is also in sync.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=136)** So for that I change this to 11.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=142)** And rebuild the project.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=144)** Now you can see it has updated to 11.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=147)** Next step, I need to set up the TDDs.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=150)** So for that I will include the JUnit library.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=156)** And we are all setup at this point.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=159)** Now next step is to include Mockito.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=161)** For that I will use a POM XML file, and declare dependencies to include my Mockito framework.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=170)** I'll start with dependencies, dependency,
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=179)** and here I have to give group ID as org.mockito,
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=192)** artifact ID as Mockito core, and version of Mockito as 2.25.1.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=207)** Save your POM XML and you will see that your Maven dependencies will automatically be included in your project's build path.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=221)** Now the next step is just to make sure that when you're using Mockito library classes and methods, you get extra assistance.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=231)** For that, you go to window, preferences, type favorites.
>
> **[3:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=239)** Then you look for a new type and search for Mockito.
>
> **[4:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=246)** And you will see Mockito pops us here.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=249)** Choose that and now it is included.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=253)** Now you're all set to start mocking.
>
> **[4:16](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=256)** Now we have been working with hangman so we have most of the code available in our previous folders.
>
> **[4:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=261)** I'm going to pick up the files from 02_05.
>
> **[4:26](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=266)** So open up that project and pick up the hangman file.
>
> **[4:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=273)** Create a folder in 03_06 main.
>
> **[4:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=278)** Here I want to create a package and I'm going to call this as main.
>
> **[4:45](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=285)** And this where I will copy the hangman file.
>
> **[4:49](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=289)** Similarly, in my test folder, I'll create a new package and call this as test.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=298)** Copy the test hangman file into this test folder.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=304)** One last thing to copy is this WordSource.txt file.
>
> **[5:08](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=308)** So I'll just copy this in my new project and now you're all set to start writing our mocking code.
>
> **[5:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=318)** For that, I go to main folder, new interface, and I call this as MockScoreDB.
>
> **[5:28](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=328)** This is an interface.
>
> **[5:29](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=329)** Let's start with our first method which is to write data into the DB, which is supposed to return a boolean.
>
> **[5:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=336)** So we'll say boolean writeScoreDB.
>
> **[5:43](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=343)** There are two parameters required here: string word and double score.
>
> **[5:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=351)** Alright, so our MockScoreDB is ready.
>
> **[5:54](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=354)** Go to TestHangman and let's write the test case for this.
>
> **[5:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=359)** So here we'll say test void test_saveScoreUsingMockDB.
>
> **[6:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=373)** So I need to first create an instance of MockScoreDB, which I'll call as mockScoreDB.
>
> **[6:22](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=382)** Instead of saying new mock score, we will use Mockito framework and for that I'll just say mock and then use the name of the interface that I just now created.
>
> **[6:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=393)** And this will then generate the mocking instance.
>
> **[6:40](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=400)** Include this from Mockito.mock.
>
> **[6:44](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=404)** Now somehow we have to pass this to our hangman.
>
> **[6:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=407)** So for that, we say hangman equals new hangman and we just pass this instance to hangman.
>
> **[6:57](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=417)** So this means I'm creating a new constructor and so I'll have to say create constructor.
>
> **[7:05](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=425)** This has to initialize the member variables.
>
> **[7:07](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=427)** So for that, I will just pick this up and create a member variable and initialize it here.
>
> **[7:19](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=439)** Now hangman has access to this MockScoreDB.
>
> **[7:24](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=444)** Now I can specify the behavior of MockScoreDB by saying when mockScoreDB and use its right method
>
> **[7:36](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=456)** that we just now created is passed the word such as, let's say, apple with a score, let's say, 10, then it should return true.
>
> **[7:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=467)** But prior to that, I have to now make sure that this returns the correct value and I have to pass 10 here and so I say then.
>
> **[7:59](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=479)** Now before I can get access to then, I'll have to make sure this is included.
>
> **[8:04](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=484)** So I say static import and try one more time and I can see that my extra assistance is working.
>
> **[8:13](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=493)** So I say then return true.
>
> **[8:18](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=498)** Now I can make an assertion for hangman.
>
> **[8:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=501)** So I say assertTrue hangman saveWordScore to which I pass some values that I want to save should be true.
>
> **[8:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=513)** Now this method does not exist yet in hangman so I say create method, make it return boolean, and make it return false to begin with.
>
> **[8:47](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=527)** Come back and let's run the test case.
>
> **[8:51](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=531)** And we can see that our save score using MockDB test case is failing.
>
> **[8:56](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=536)** To make it pass, I go to hangman and instead of returning false, I will now use my MockScoreDB and invoke its writeScoreDB method to which I will pass the parameter word and expected score in the form of double.
>
> **[9:21](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=561)** And this is the value that has to be returned.
>
> **[9:23](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=563)** Notice that this MockScoreDB will actually evaluate this method and return a value, which will then be returned by this saveWordScore method.
>
> **[9:33](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=573)** Let's run the test case again and our test case has passed.
>
> **[9:38](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/2916558?u=76281980&t=578)** Same approach has to be applied for reading and I'm sure you can try that out yourself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (6), interface (4), this. (1), static (1)
> **CLI Commands:** make (10)
> **Code Identifiers:** writescoredb (2), mockscoredb (2), savewordscore (2), asserttrue (1)
> **Env Vars:** pom (2), xml (2), jdk (1)
> **UI Navigation:** go to (5)
> **Prerequisites:** set up (3), configure (1), setup (1)
> **Versions:** 1.5 (1), 2.25.1 (1)
> **File Paths:** wordsource.txt (1)


### Glossaries


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/next-steps?u=76281980&t=0)** - [Neelam] I hope you enjoyed learning TDD in this course and would try out the new techniques you learned.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/next-steps?u=76281980&t=6)** If you would like to go deeper into the TDD topics we covered, there are many courses in the library, such as the ones listed here.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3/next-steps?u=76281980&t=15)** Thank you and good luck in your TDD journey.

> [!info]- Semantic Content
>
> **Env Vars:** tdd (3)
> **Cross-References:** we covered (1)
> **Analogies:** such as (1)
> **Speakers:** - [neelam] (1)


## Path Context

### In [[Become a Programmer- Foundations]]
← [[Programming Foundations- Secure Coding (2018)]] | **11 of 12** | [[Programming Foundations- Software Testing-QA]] →

## Appears In

- [[Become a Programmer- Foundations]]

---

[↑ Back to top](#)