---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: understanding-manual-testing
url: "https://www.linkedin.com/learning/understanding-manual-testing"
duration_minutes: 40
duration: 40m
level: Intermediate
updated: 2/6/2026
learners: 59109
skills:
  - Quality Assurance
  - Manual Testing
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQET3VMfDxDEgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1659547561066?e=2147483647&amp;v=beta&amp;t=M_5qZaMDRQaY1tqkEnxANnDkuMdEYOX1Y0DPzzcc7ew"
linkedin_topic: Software Development
learning_paths:
  - '[Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)'
prev_courses:
  - '[Programming Foundations- Software Testing-QA](Programming%20Foundations-%20Software%20Testing-QA.md)'
next_courses:
  - '[Test Automation Foundations](Test%20Automation%20Foundations.md)'
path_nav: '[{"path":"Getting Started with Software Testing","position":2,"total":12,"prev":"Programming Foundations- Software Testing-QA","next":"Test Automation Foundations"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/quality-assurance
  - skill/manual-testing
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Understanding%20Manual%20Testing.md)

![Understanding Manual Testing](https://media.licdn.com/dms/image/v2/C560DAQET3VMfDxDEgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1659547561066?e=2147483647&amp;v=beta&amp;t=M_5qZaMDRQaY1tqkEnxANnDkuMdEYOX1Y0DPzzcc7ew)

# Understanding Manual Testing

> Did you know that manual testing is not all that different from creating a piece of art? While new technology has enabled quality assurance teams to automate many processes in product testing, the best and most reliable testing tools are still wielded manually with human skills, attention to nuance, and complex, agile understanding. In this course, instructor Mike Fine gives you the foundational k

> [LinkedIn Learning](https://www.linkedin.com/learning/understanding-manual-testing) | 40m | Intermediate | 59K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Mastering manual testing](#mastering-manual-testing)
  - [What you should know](#what-you-should-know)
  - [The argument: Automated vs. manual testing](#the-argument-automated-vs-manual-testing)
- [**1. Overview**](#1-overview) (3 videos)
  - [What is manual testing?](#what-is-manual-testing)
  - [Why is manual testing done?](#why-is-manual-testing-done)
  - [Types of manual testing](#types-of-manual-testing)
- [**2. Execution**](#2-execution) (4 videos)
  - [Test plans and use cases](#test-plans-and-use-cases)
  - [It's not all black and white: Box testing](#its-not-all-black-and-white-box-testing)
  - [Bugs and the output of manual testing](#bugs-and-the-output-of-manual-testing)
  - [Make manual testing work](#make-manual-testing-work)
- [**Conclusion**](#conclusion) (2 videos)
  - [Where do you start?](#where-do-you-start)
  - [Be an exceptional manual tester](#be-an-exceptional-manual-tester)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Mastering manual testing](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/mastering-manual-testing?u=76281980&t=0)** - [Mike] Many of the most common things we do manually have been automated or improved by technology. However, we've learned over time that there are applications where a machine can't equal a human. It's like the difference between painting a room and painting a portrait. These professionals don't just find bugs. They understand the goals and objectives of the product. [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) helps development teams understand more than just a pass-fail approach to test results. I'm Mike Fine. I've been running product tests for nearly 30 years. Join me as we explore the important role manual testing plays in ensuring a great product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (2)
> **CLI Commands:** find (1)
> **Analogies:** it's like (1)
> **Speakers:** - [mike] (1)

#### [What you should know](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=0)** - [Instructor] If you are new to quality, [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) is the absolute best place to start your journey. It's where all the fundamentals of testing originate, and it's where you are going to be able to learn the entire process of how software is tested. However, before beginning this journey, there are a few things you should know. For starters, you ought to have a good basic understanding of how a product is developed. You won't need to know the details, but understanding the framework will help you learn the when, why, and how of testing software. It makes grasping the concepts a lot easier if you understand where you sit in the process. Manual testing is a simple concept to understand but has many very complicated components that are incorporated into its design. While I won't go into a lot of detail in this course on each technique used, I may introduce some concepts and vocabulary you'll want to follow up with and learn in detail. I encourage you to dig deeper into these concepts to ensure you have a full understanding of the various test techniques. To help explain and illustrate the challenges manual testers face, I'll be using a fictional software application called Explore California. This is a travel tool for out-of-state visitors who are looking to book activities, reserve accommodations, and learn about places to visit. In our example, you'll see our team working towards release and using manual testing
>
> **[1:34](https://www.linkedin.com/learning/understanding-manual-testing/what-you-should-know?u=76281980&t=94)** to deliver a great software product. Last, the most important thing to know is that manual testing is best learned when you do it yourself. This course is designed to help you embark on this journey by covering all the information you might need to know to begin working as a manual tester. Yet, even with my best efforts, I can't accommodate all the differences that exist in our industry. Your individual software, your company, your product, or even your quality team may take a different approach to manual testing than I present here. While there are industry standards, the culture and history in a workplace can alter these processes. If you are new to testing, I encourage you to keep an open mind and use this course to help you establish a great foundation for learning. If you're experienced, you'll get some great baseline data. Being a tester is a rewarding experience. Every day, you learn new things that improve your own skills as you explore your company's various applications. It can be fun being on the leading edge of a product's release. Manual testing will allow you to become an expert on the product you test. Best of all, it's excellent knowing that your hard work is helping your company and team deliver a better product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (6)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [The argument: Automated vs. manual testing](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=0)** - [Instructor] Before we dive any deeper into the details of [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md), we need to address a common argument and misconception I've encountered in my career. And you are bound to hear about. I have met many test managers who've argued for automating as much of their testing as possible. They see the speed and efficacy of an automated program as superior to a manual approach. In fact, they often argue that manual testing should be abandoned all together. There is no question that automation is a valuable and important tool in performing quality testing. In a large application, manually reviewing hundreds of thousands of lines of code, and clicking the endless elements that a user face truly test the limits of human capabilities. It's clear that these tools are needed. It's why you'll see articles and videos pitting manual versus automation and learning why one is superior to the other. The confusion in this argument is there is a belief that automated solutions are designed to replace a manual approach. In the beginning, this was probably the case. Before automation existed, everything was done manually. Naturally, as automation displaced numerous manual test cases, many people probably predicted it would replace every case eventually. However, just as automation has evolved, so has manual testing. The contemporary version of manual testing explores the process through the expertise
>
> **[1:33](https://www.linkedin.com/learning/understanding-manual-testing/the-argument-automated-vs-manual-testing?u=76281980&t=93)** and experience of the quality engineer. This is not a versus situation. Automated testing exists as one part of a variable and complete quality solution. Manual testing serves as another. The two processes are not in competition with one another, but actually compliment one another and provide very different test results. Automation delivers excellent scalable testing at a speed modern team's demand. Manual testing provides the close scrutiny and examination that your software requires. Measuring one approach versus the other is an argument that takes away from the focus of any quality program. Between the two approaches, you give the product a complete evaluation that ensures the best possible product is delivered. And in the end, that's all that matters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (6)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What is manual testing?](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=0)** - [Educator] The simple question of what is [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md)? Has an equally simple answer. It is performing tests on a product manually, meaning by hand, and more recently, without any automation or special tools. It's looking at the product from a user's perspective with a focus at identifying the pitfalls, design flaws, and issues. While this is an easy answer, it's by no means easy. Manual testing requires a lot of technical skills and a deep understanding of the product being tested. It's whole focus is to reduce or eliminate issues users might encounter. So there is a level of expertise necessary to accomplish this goal. When you perform manual testing, you will conduct complicated test cases designed to stretch the reliability and performance of a product. You need to have focus and determination. At its core, manual testing is the original method of testing. Quality professionals learn the product, review the product documentation, design a strategy to test, execute that strategy, then report the results. Each of these steps are intricate and comprehensive, requiring skills, expertise, and experience to execute effectively. As a manual tester, you'll be expected to report your findings in detail and then follow up with regression testing to verify developers fix the issues you discovered. This process will mean
>
> **[1:34](https://www.linkedin.com/learning/understanding-manual-testing/what-is-manual-testing?u=76281980&t=94)** running your test cases several times, both looking for new and eliminating old issues. Much more than clicking buttons and reviewing the automated results, you'll be examining logic patterns, assessing performance, and evaluating compatibility. In fact, manual testing focuses on using processes designed to reveal the limitations and issues, not only with the product itself, but how it is being used, it's functionality, and its flow. Don't be intimidated or concerned if you are new to manual testing. The one key element that differentiates you is that you are human. Your own experience, your approach, and product knowledge are the tools you'll use. You'll be refining your skills of observation to identify issues, not only with the software itself, but how it's used. Manual testing seeks to eliminate the gap where automation can't go. Many great manual testers learn the testing process through experience. They can follow a script, execute the test plan, and explore the use cases. They evaluate the use cases and the user stories as they evaluate the features of the product. Your technical foundation will help you to explain failures in a way automation can't. Whether it's a broken workflow or a system crash, you'll be using data to justify your issues but your expertise will help explain its impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (7)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [educator] (1)

#### [Why is manual testing done?](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=0)** - [Instructor] With daily advancements in all aspects of technology, it's good practice to ask why we continue to perform testing in what seems like an antiquated manner. As I've noted, many see [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) as an old process and unnecessary. The speed, number of defects, cost savings, and agility of automation deliver a huge value to a testing program. It also aligns well with the [agile](../../Skills/DevOps/Agile%20Development.md) processes for development. However, automation has its flaws. For starters, the whole system disconnects the tester from the actual software. It's designed to simply output results without developing an expertise in the product. Moreover, it has a much longer prep time, and requires costly software tools. Most important, it's missing the most critical element, human interaction. The fact is most [products](../../Skills/Software%20Development/Microsoft%20Products.md) are designed for people, which means people need to be looking at it. Computers don't care about usability, intuitive design, aesthetics, and some aspects of performance. Functionality isn't a straightforward concept. It has context. And whether something is considered functional is defined by your user. Manual testing delivers this context. Testers not only look at the software from the standpoint of if it works, but they also look at how it works. They measure the experience of the feature and determine if it operates as design.
>
> **[1:36](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=96)** Manual testing often reveals things that work well from a functional standpoint, but don't deliver in many other ways. Our Explore California team has noted that during their manual testing, they discovered that when entering search criteria into its built-in search engine, ads from the browser are preempting the [Algorithms](../../Skills/Software%20Development/Algorithms.md) results. Testers search for a good place for breakfast but are seeing corporate advertisements for national restaurants rather than local California-based businesses. While the automated testing of the search engine shows its functioning exactly as it's designed and the ads are the expected result, it's still impacting the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). Moreover, everyone knows a California app placing preference on a national chain is not a good look. The team reports this as a bug, and shares these manual testing results, putting context around how the app should perform. Another key benefit of manual testing is it doesn't have any lead time. If a tester is properly prepared, he or she can begin working on test cases and performing examinations of the software immediately because manual testing begins the moment the software leaves the developer's hands. It also functions exceptionally well in agile processes. Additionally, manual testing is known for its flexibility in the [Software Development](../../Topics/Software%20Development.md) life cycle. Automation often has rigid requirements for the state and quality and type of software that can be tested.
>
> **[3:12](https://www.linkedin.com/learning/understanding-manual-testing/why-is-manual-testing-done?u=76281980&t=192)** However, manual tests can be executed on anything, even narrowed to target specific limited areas of the product. This means testing can get engaged early on specific components and provide immediate value. There is also a random component of manual testing, which can help reveal issues. Automation often runs its testing in specified sequences. It's a robot. And by that nature, predictable. A manual tester can select any element of a software application to assess and begin testing in any order. This random character helps reveal potentially serious issues because many users don't follow precise patterns. Manual testing does have its limitations. But its value is immense. It's why even after decades of improvement in quality automation, manual testing remains an important and central part of the quality test process. While [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and machine learning continue to evolve, the human component of manual testing remains a valuable aspect that can't be replicated with automated tools. Well, at least not yet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (12), [Agile](../../Skills/DevOps/Agile%20Development.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Types of manual testing](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=0)** - [Instructor] [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) is a complicated system designed to assess every aspect of a product, from its concept to its ultimate release. Here we are reviewing the most typical types of manual testing. However, each of these have their own subtypes that delve into specific areas of the software. The point is, these are more tied to the product state. They are specifically aligned with the stage of the product, and at each of those stages you'll be accomplishing specific quality tests. Functional testing is the first and most foundational approach in manual testing. It's effectively inputting data into a module of the software and noting its output. You don't focus on the how or why the application operates, you just check to make sure the results are in line with what you expect. There are dozens of kinds of functional tests that a manual tester will perform, but at their core, they all exist to ensure the software is functioning as it should. [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) takes the functional testing and performs it on multiple components of the application to ensure the combined pieces haven't broken in the process of bringing it together. Integration can be on a couple components or on multiple elements, in either instance, you are testing the various functions as a group and looking to ensure that they play nicely. Once the software is combined into a complete application, you'll be performing system testing. If everything during integration testing seems to be working well,
>
> **[1:33](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=93)** developers will want to combine all the pieces together to see if the full suite is operating as design. Both systems test and integration testing are effectively functional tests, but now our scale has grown to the full application or the system. If everything seems stable, and the software is getting close to being fully functional, it moves to compatibility testing. This test is not a functional test. It's about looking outside of the product and measuring whether it works in the environment it's designed to operate. This could be the operating system, a browser, network, specific [Hardware](../../Topics/Hardware.md), or even a smart device. It's just ensuring everything is compatible. Moving past compatibility testing, things get a little trickier. In [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md), you manually attempt to simulate a real world environment to see if the application is working. It's a nuts and bolts tests of every piece assembled. You'll test the entire chain of activity, as close to the real world as possible. The connected components, data, and everything in between, or end-to-end is created to ensure the product doesn't fail. Throughout all these phases, you will also be performing regression testing. This is a manual test designed to ensure nothing is broken when new changes have been implemented. It's possibly the hardest and most mundane testing you'll perform. You spend time looking closely at old bugs, hoping nothing's gone wrong. Regression is about integrity.
>
> **[3:06](https://www.linkedin.com/learning/understanding-manual-testing/types-of-manual-testing?u=76281980&t=186)** Every new version is changed and it's your goal to ensure those changes didn't break anything. Last, and possibly the most rewarding phase of manual test, is the acceptance testing. At this point, you've been buried in the software and now you're just evaluating to see if it delivers on the specification. It's one of the most critical manual tests, but by the time you've done this testing you should be so familiar with the application, it should also be the easiest to deliver. Acceptance simply tells us whether the goals of our product team have been met. Manual testing encompasses a lot. At each stage of the product, the manual tester is evaluating a different facet of the application and assessing the quality of the software. As I've noted, these different tests map naturally to the stages of the product in its development. However, while I've presented them here in a serial order, it's very possible you may test them in a different sequence. It's essential you learn all these different [Forms](../../Skills/Web%20Development/Forms.md) of testing and treat them as objects rather than as a process. All these manual test types can be performed at any stage of development of the software. Projects and modern processes don't generally operate in a serial fashion. You may be working with teams assigned to different parts. [Agile](../../Skills/DevOps/Agile%20Development.md) processes may even have you performing a piece of all these types, in a short sprint. These are simply tools in your toolbox to help ensure the product meets your quality goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (4), [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) (3), [Hardware](../../Topics/Hardware.md) (1), [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)


### 2. Execution

[↑ Back to Table of Contents](#table-of-contents)

#### [Test plans and use cases](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=0)** - [Instructor] [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) is simply a system for approaching a test. It's a suite of skills designed to manually assess a product through its different stages of development. You and your product are unique. And which test cases you choose might differ depending on the goals, objectives, timelines, and other factors. Regardless of what you select, it should be documented in a test plan. At the core of any effective quality program is a process to create a comprehensive test plan. The plan serves as a container to document what will be tested, how it will be tested, when it will be tested, and sometimes even why it is being tested. It's a foundational document intended to guide you through the test period to ensure the product receives a detailed and complete test designed to step you through each stage of the project. The plan prevents you from going astray. A bad bug, a failed feature, new product demands or other distractions can cause test teams to lose focus. The test plan keeps you grounded. It's effectively a checklist of how you plan to execute and the plans contents help bring structure and integrity to your program. For starters, you will be documenting what features and functionality need to be assessed to effectively test the product. Using test cases, you'll correlate your time and processes to the specific area of the software you are evaluating. Each test case will take on a single element of the product, documenting what values,
>
> **[1:35](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=95)** inputs, conditions, procedures and other factors are needed to measure that function. It sounds difficult, but in fact many test cases are repetitive and can be applied across various areas of the product. For example, you might use a similar test case for every input box of the software, slightly adjusting the steps of the case to apply to the specific parameters of the field. In fact, if you find a lot of cases that can be grouped together to be executed across different parts of the product it then becomes a test suite. In our Explore California software, the team is noticing that the car reservation tool operates very similarly to the flight reservation tool. In fact, the configuration and output of these elements are almost identical with only a few small adjustments. Recognizing they can make it more efficient and move more quickly through manual testing, they group the various test cases into a test suite. The test suite now combines all the similar elements and is executed identically on both features, reducing redundancy in the test plan and even better, making the quality process move a lot smoother. They add the new test suite to the plan and throw in a couple extra brief test cases to differentiate cars and planes. They have documented their approach in the plan and refer to it for future testing. Manual testing also takes a unique approach to the user stories and use case tests. In these situations,
>
> **[3:08](https://www.linkedin.com/learning/understanding-manual-testing/test-plans-and-use-cases?u=76281980&t=188)** a feature is being assessed to determine if it meets the needs of users through a specific series of evaluations. In many cases, manual testing is the best method for seeing if it meets the user's needs. Use case and user stories are the answer to an area where automation struggles. There are very limited options when it comes to automating processes to see if a feature meets a user requirements. In fact, manual testing is often specifically called out in a test plan when it comes to this aspect of [products](../../Skills/Software%20Development/Microsoft%20Products.md). While a series of test cases may be documented loosely because of their granular approach, use case and user story testing will be specifically identified and the expected results clearly documented. Whether you are using automated or manual testing, documenting all the test cases and suites in a plan is necessary. It can be a very slow process, but without a test plan it's possible you can miss or overlook key tests. Beyond being an excellent record of your goals and objectives, it also keeps the project on track, ensuring everything is getting completed and the product thoroughly tested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (6), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [It's not all black and white: Box testing](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=0)** - [Instructor] The terms black-box and white-box testing have been around for years. And while their view of the test world is somewhat antiquated, they remain steadfast tools to approaching a quality project. Moreover, both [Forms](../../Skills/Web%20Development/Forms.md) contain key procedures for [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) in a project. While both act is a framework, there are many specific techniques where a manual approach is necessary. Sometimes these are very complicated tests that dig deep into the software's operation. Sometimes the technique evaluates trivial, superficial functionality, however, both are essential for learning the integrity of the software. In both instances, manual and automated processes are used. As noted, both forms of testing employ techniques for executing evaluation of the software. In both white box and black box, a technique is a tool designed to evaluate key components of the product and system to see if it meets the product requirements. In black-box testing, the focus of the product evaluation is on measuring the key functionality of a product without looking into the inner workings of the software. You are basically assessing whether it works or not. In most of the techniques, automation makes the most sense. The sheer number of variables and the mundane nature of this type of testing will make a manual approach prone to errors. Still, black-box testing does use manual testing
>
> **[1:34](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=94)** in some areas. For example, in the error guessing technique, testers watch the software for specific failures. Gathering the data from these tests, the manual tester will develop an idea of potential problem areas, target it, and then guess where to test. Error guessing doesn't sound very scientific, but it's in these random elements where manual testing thrives. White-box testing has a much bigger need for a manual process. In this approach, the software is evaluated from the inside, examining the code for integrity, structure, output, and flow. White-box testing requires test teams to review code line by line, unit by unit, and evaluate each piece. While there are a whole host of debuggers and software tools out there to evaluate the structure and syntax of code, many times it takes a careful eye of an expert quality professional to evaluate it effectively. While manual testing is utilized much more heavily in white-box testing, automation is still a big part. Automation, combined with a pros programming experience, often are leveraged to develop effective code. In all quality testing, the last technique that is frequently used is experience-based testing. In this case, after weeks upon weeks of evaluating the software, quality professionals develop speed, expertise, and skills in looking over everything and identifying potential issues.
>
> **[3:09](https://www.linkedin.com/learning/understanding-manual-testing/it-s-not-all-black-and-white-box-testing?u=76281980&t=189)** In these cases, there is little structure, but it's a valuable form of manual testing in both black and white-box tests. What you should take from all of this is that manual testing exists in some form throughout all approaches and techniques. You won't ever know when you'll be asked to utilize your skills in testing, however, with a keen understanding of how the product operates and how to execute the varying techniques, you'll be able to use your manual skills frequently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (6), [Forms](../../Skills/Web%20Development/Forms.md) (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Bugs and the output of manual testing](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=0)** - [Instructor] As you build a repertoire of skills, techniques and a grasp of the concept surrounding testing, you're going to be using these manual skills to make a better product. The goal of any quality test is to ensure that the product is stable, delivers on its specification and operates as designed prior to the product getting to a customer. The byproduct of this effort are bugs. During [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md), you'll be exploring every aspect of the software and as you move through this process you will encounter anomalies and behaviors that are unexpected, inconvenient, odd and often problematic. Before you decide what these behaviors are, you need to understand what it means to call something a bug. Putting it simply a bug is a function that doesn't work as designed. We could delve into a whole esoteric discussion on what makes a bug and what doesn't, but that never goes well. You see, the problem we have is that, while the definition itself is very clear, what a bug is, is not always clear. Our Explorer California team has discovered a bug in the software. When entering a numerical dollar amount of six digits or more, the software simply crashes. This happens anywhere a dollar value is entered and is impacting the commerce portion of the app.
>
> **[1:34](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=94)** The quality team is using large values to ensure transactions like that don't get created accidentally. The software team pushes back, explaining that it's not likely that anyone will ever enter six figures into a web form to order something like concert tickets, airline tickets, hotels, etcetera. More importantly, the crash effectively delivers the desired result of the software closing. They see this is a non-issue and note that the time it will take to address the issue, will cause the project schedule to slip. In our Explore California example, the discussion on a bug's merit, results and other aspects can easily create division and frustration among the teams. Quality testing can often look like an adversary to developers who are receiving pressure to deliver a product. However, this is where a manual tester has a great opportunity to help both teams benefit. For the quality team, use your skills to speak with data, take steps to document any bug you discover. Very often manual techniques are used to verify bugs, use screenshots, document steps to reproduce, share version information, and provide any other details that will help the developer reproduce the problem. For the developer team, use your manual techniques to seek a workaround, or other solution that might help reduce the friction of testing. The bug is objectively a bug, however, there's nothing that says
>
> **[3:07](https://www.linkedin.com/learning/understanding-manual-testing/bugs-and-the-output-of-manual-testing?u=76281980&t=187)** you can't help reduce or even eliminate the issue as you explore the issue in your testing. As you go through manually evaluating issues, you'll develop expertise in the software application, its features, functionality and overall operation. Your deeper experience means that you can use these skills to provide insight into the tools. Good quality pros are collaborative and they see their role as helping deliver good software to the customer. Just because something doesn't work the way you expect doesn't make it a bug. Just because you discover an issue in your testing, doesn't make it a bug. Bugs are only real when backed by solid data that can be reproduced. Use your manual testing skills to ensure you provide coherent, complete issues that your team can't argue and you'll see it be fixed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), means that (1)
> **Documentation:** specification (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Make manual testing work](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=0)** - [Educator] I know it seems late here in the course to be sharing how to perform [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md). However, I feel like you need to understand where and when it's used before you take the steps to learn how. Manual testing is a slower and more arduous process than other [Forms](../../Skills/Web%20Development/Forms.md) of testing. However, it does create the foundation of every good tester. Let's now explore how we can put it to use. Manual testing begins with a product review. Testing starts at the earliest stages of [Product Development](../../Skills/Software%20Development/Product%20Development.md), which means you might not even have a complete product to test. Therefore it's important you begin by reviewing key documents that are used to build a product. A marketing or product requirements document is a good place to start. If there is a product specification, project document, or other materials, you could review those as well. At this point, test managers and quality pros are enlisted to design a test plan. This process means creating test cases and aligning test tools to ensure you have an approach to how you anticipate testing the product. Take the time to review the test plan carefully. You'll be referring to it again during the test. Test plans use the product documents as the foundation for defining which test processes will be executed. It will include all test cases, both manual and automated, to ensure it's thoroughly evaluated. After you evaluate the test plan, you can start to build a scope of what skills you are going to need
>
> **[1:33](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=93)** to deliver your portion of the test, examine each technique, and identify where you have gaps in your knowledge. If you're completely new to testing, you may have a bit of heavy lifting over the first few weeks. Don't be intimidated, many of the skills and techniques you'll learn are leveraged off one another. Once the testing has begun, be an effective communicator, document bugs in detail, ask questions, share your issues, successes, and be part of the team. Manual testing is often slow paced so be certain to create a clear plan of your objectives and goals for each day, let everyone know your schedule, and, if possible, use tools to stay organized and on track to complete your testing. Use the time during the test to look at ways to automate. Remember, automation is an ally in accomplishing your goals. There is no competition between the two methodologies and each serves a different purpose. If you can find a way to increase efficiency while maintain equality, there is a reason to explore it. If you need help, don't be afraid to ask. Remember, your role here is to ensure the team delivers a quality product and missing a step, overlooking a portion of the product, not finishing your testing could end in disastrous results. If you can't deliver, then you need to make it clear to your partners. Last, document everything, keep voluminous notes. Some of the data may end up in a bug
>
> **[3:10](https://www.linkedin.com/learning/understanding-manual-testing/make-manual-testing-work?u=76281980&t=190)** but other parts may be used for a future test plan. Your role as a manual tester is to ensure that the steps taken are clearly documented, the missteps are noted, and the final product is delivered. If things don't go right, you'll want to have the information to support your position. If things went well, you'll want to be able to show your work. Quality testing is about learning and growing. Manual testing provides a foundational basis for all testing. And even if you start writing scripts and converting tools to automated processes, the experience of manual testing will teach you how these tools need to perform. If you invest in learning the techniques and tools of manual testing, you'll find it pays off in so many ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (7), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Product Development](../../Skills/Software%20Development/Product%20Development.md) (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** find (2), make (1)
> **Documentation:** specification (1)
> **Speakers:** - [educator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where do you start?](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=0)** - [Instructor] The overwhelming number of test techniques and skills required to become proficient at [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) can be daunting to someone new to [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md). Your mind races as you scrutinize the endless possibilities of things that need to be tested and wonder how you are going to accomplish at all. Don't worry, there are a few easy steps that will guide you along the way. First, the best place to start is with your company's product. Before you jump into testing, take the time to understand your product completely. All good quality testers know the product inside and out. Spend time learning it and exploring it. Know what you test better than anyone, and it will help you speak with data when you discover issues. Next, revisit your test plan frequently. If you are new to a company or to the quality team, it's very likely a plan has already been written, and inside, you'll find a roadmap of what needs to be accomplished. Begin by reading that plan completely and take notes of things you don't know or need to get familiar with. It's a great place to start. If you have a plan, use it like a guidebook for your testing. It will help ensure your success. If the product is brand new and you are starting from scratch, look for prior test plans that might help you get your bearings on what was tested in the past. Again, this is just a starting point to help you get oriented on what you'll be likely to encounter when you begin your manual testing.
>
> **[1:35](https://www.linkedin.com/learning/understanding-manual-testing/where-do-you-start?u=76281980&t=95)** It won't be identical because no two [products](../../Skills/Software%20Development/Microsoft%20Products.md) are the same. Even small version changes are different, and those differences mean a lot. It's rare, maybe impossible, to see a completely new product nobody has ever created previously. The internet is a great resource to build familiarity with the type of product you'll be testing. Even if it isn't identical, it can still deliver foundational knowledge to help you get a head start in your testing. Learn your techniques. Prepping your mental toolbox before you begin on a project will help reduce the friction when it comes time to test. You'll be surprised how quickly you'll pick up the testing and begin to become comfortable in your role. It's daunting it first, but soon it will become second nature. Last, always look forward, thinking about ways to increase efficiency, speed up testing, and be a more collaborative tester. Your team and company will always appreciate your effort and your desire to make things easier and better. If they see you as a partner in helping deliver a better product, you'll become an asset they trust and seek out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (2), [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### [Be an exceptional manual tester](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-manual-testing/be-an-exceptional-manual-tester?u=76281980&t=0)** - [Mike] We've come to the end of the course. However, this is just the beginning. We have learned that [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) is an important foundational approach to learning the quality process and delivering a great product. If you're a testing expert, I hope this course has helped clarify the distinct role manual testing plays in our modern automated test labs. If you are just embarking on a career in testing, it's my hope you'll see that manual testing has an important role in understanding how your work enriches the experience of the end user. Most importantly, I hope I've conveyed how critical manual testing is in delivering a great product. This isn't the end, and I encourage you to learn more by exploring one of our other courses on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning about quality testing to get more in depth knowledge. Again, my name is Mike Fine, and thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [mike] (1)


## Instructor

- [Mike Fine](../../Instructors/Software%20Development/Mike%20Fine.md)

## Skills Covered

- Quality Assurance
- Manual Testing

## Path Context

### In [Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)
← [Programming Foundations- Software Testing-QA](Programming%20Foundations-%20Software%20Testing-QA.md) | **2 of 12** | [Test Automation Foundations](Test%20Automation%20Foundations.md) →

## Appears In

- [Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)

---

[↑ Back to top](#)