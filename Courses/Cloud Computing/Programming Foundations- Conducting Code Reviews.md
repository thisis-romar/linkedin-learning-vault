---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: programming-foundations-conducting-code-reviews
url: "https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews"
duration_minutes: 86
duration: 1h 26m
level: Beginner
updated: 3/18/2024
learners: 38321
skills:
  - Code Review
  - Programming
  - Programming Foundations
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFg1VRrRPHVLw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1598983087938?e=2147483647&amp;v=beta&amp;t=QSQljaqSW3I7U85GVUydXmgwRciNsPLbdDGonDk0zCA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Succeeding in Your Tech Career- Software Development](../../Paths/Cloud%20Computing/Learning%20Paths/Succeeding%20in%20Your%20Tech%20Career-%20Software%20Development.md)'
prev_courses:
  - '[Accelerate Your Developer Career](Accelerate%20Your%20Developer%20Career.md)'
next_courses:
  - '[Inclusive Tech- Conducting Humane Code Reviews](Inclusive%20Tech-%20Conducting%20Humane%20Code%20Reviews.md)'
path_nav: '[{"path":"Succeeding in Your Tech Career- Software Development","position":3,"total":6,"prev":"Accelerate Your Developer Career","next":"Inclusive Tech- Conducting Humane Code Reviews"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/data-science
  - topic/software-development
  - skill/code-review
  - skill/programming
  - skill/programming-foundations
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Programming%20Foundations-%20Conducting%20Code%20Reviews.md)

![Programming Foundations: Conducting Code Reviews](https://media.licdn.com/dms/image/v2/C4E0DAQFg1VRrRPHVLw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1598983087938?e=2147483647&amp;v=beta&amp;t=QSQljaqSW3I7U85GVUydXmgwRciNsPLbdDGonDk0zCA)

# Programming Foundations: Conducting Code Reviews

> Software is written by humans—and humans can make mistakes. Before suggested changes are integrated into a codebase, they are often reviewed and approved by other programmers. A large amount of developers' time is spent on code reviews. However, this skill is rarely taught. This course remedies that oversight, starting with the what, who, and why of code reviews. It then explores the how, showing 

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews) | 1h 26m | Beginner | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Write great code reviews to advance your career](#write-great-code-reviews-to-advance-your-career)
  - [What you need to know](#what-you-need-to-know)
- [**1. Basics of Code Reviews**](#1-basics-of-code-reviews) (4 videos)
  - [What is a code review?](#what-is-a-code-review)
  - [Code reviews in the software development life cycle](#code-reviews-in-the-software-development-life-cycle)
  - [Who should review code?](#who-should-review-code)
  - [How long should a code review really take](#how-long-should-a-code-review-really-take)
- [**2. Performing a Code Review**](#2-performing-a-code-review) (7 videos)
  - [Understand the author’s purpose](#understand-the-authors-purpose)
  - [Review implementation details](#review-implementation-details)
  - [Review maintainability and design](#review-maintainability-and-design)
  - [Review unfamiliar code](#review-unfamiliar-code)
  - [Providing constructive feedback](#providing-constructive-feedback)
  - [Common challenges](#common-challenges)
  - [Using AI in code reviews](#using-ai-in-code-reviews)
- [**3. Reviewing Code on the Cloud**](#3-reviewing-code-on-the-cloud) (6 videos)
  - [Find code to review on GitHub](#find-code-to-review-on-github)
  - [Test code on a local machine](#test-code-on-a-local-machine)
  - [Write code review comments](#write-code-review-comments)
  - [Approve code](#approve-code)
  - [Challenge: Give a code review](#challenge-give-a-code-review)
  - [Solution: Give a code review](#solution-give-a-code-review)
- [**4. Implementing a Feature**](#4-implementing-a-feature) (4 videos)
  - [Scope of a code change](#scope-of-a-code-change)
  - [Implement a code change](#implement-a-code-change)
  - [Commit a code change](#commit-a-code-change)
  - [Prepare code for review](#prepare-code-for-review)
- [**5. Submitting Code for Review**](#5-submitting-code-for-review) (6 videos)
  - [Create a pull request (PR)](#create-a-pull-request-pr)
  - [Find code reviewers](#find-code-reviewers)
  - [Handle code review comments](#handle-code-review-comments)
  - [Respond to code reviews comments](#respond-to-code-reviews-comments)
  - [Challenge: Add a feature and submit a PR](#challenge-add-a-feature-and-submit-a-pr)
  - [Solution: Add a feature and submit a PR](#solution-add-a-feature-and-submit-a-pr)
- [**Conclusion**](#conclusion) (1 videos)
  - [Add code reviews into your daily job](#add-code-reviews-into-your-daily-job)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Write great code reviews to advance your career](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/write-great-code-reviews-to-advance-your-career?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/write-great-code-reviews-to-advance-your-career?u=76281980&t=0)** - [Instructor] No software product is ever complete. It's a cycle of adding new features, fixing bugs and performing maintenance. We also have to deal with our tools being deprecated or needing to save money by switching to a new vendor. Or maybe a new lightweight framework appears that you want to implement. Software is written by humans and humans can make mistakes. Before suggested changes are integrated into the code base, they are often reviewed and approved before they reach the end user in something called a [Code Review](../../Skills/Software%20Development/Code%20Review.md). In this course, we'll talk about how code gets reviewed, how you can give a great code review and what you should look for in reviewing code written by other developers. We'll also talk about receiving a code review and how to iterate on suggested changes. Receiving feedback on your code contributions can make you a better software developer and as a great code reviewer, you can learn about components of the code base that you haven't worked on, and influence design changes. Hi, my name is Kathryn Hodge and I'm a software developer. Catching mistakes early on saves time and money. And code reviews, bring the team together and provide the opportunity for all to share knowledge and experience. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (3)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [What you need to know](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/what-you-need-to-know?u=76281980&t=0)** - [Narrator] This course is designed to introduce you to code reviews, and how they work, in a [Software Development](../../Topics/Software%20Development.md) setting. To take this course, you do not need to have any prior knowledge of code reviews, but ideally, you are familiar with programming, and at least one programming language. Whether it's [Java](../../Skills/Software%20Development/Java.md), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), or C#, understanding basic coding principles will give you a foundation to review code written by others. We'll be using [GitHub](../../Skills/Software%20Development/GitHub.md) in this course. So, it may help if you're familiar with GitHub, or another [Version Control](../../Skills/Web%20Development/Version%20Control.md) platform. We'll also be using GitHub Desktop, which is GitHub's graphical user interface for desktop. So, even if you're unfamiliar with GitHub, with an eagerness to learn, you should be able to pick it up fairly quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (5), [Software Development](../../Topics/Software%20Development.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Tools:** github (5)
> **CLI Commands:** python (1)
> **Speakers:** - [narrator] (1)


### 1. Basics of Code Reviews

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a code review?](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/what-is-a-code-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/what-is-a-code-review?u=76281980&t=0)** - [Instructor] A [Code Review](../../Skills/Software%20Development/Code%20Review.md) is a methodical review of proposed changes to a software source code. The proposed changes might consist of something as simple as changing the text on a website. It could also be more challenging, such as adding an API call to a new back-end service or adding push notifications to the product. In other cases, it could be more of a refactoring of code, changing the way something is written in the code but not changing the functionality. Let's walk through an example of how the code review process works. We'll be going through many of the things brought up here later in the course, but I find a brief overview can be useful. Let's say a software developer has been tasked to change the text in a heading shown on a website. When the developer is ready to make changes, they'll pull down a copy of the current code base and change the appropriate text. In this case, let's say the developer changes the text within an h3 tag in an [HTML](../../Skills/Web%20Development/HTML.md) file. When the developer or author is finished making their changes, they'll create a request for others on the team to review their changes. There are applications and websites that help with this process, allowing you to easily create this request and see the suggested code changes, but we'll get into that later. Once the request has been submitted, others on the team will review the code and give suggestions on how to improve it. Things that code reviewers look for can be narrowed down into a few categories. First, the reviewer must make sure that the suggested code changes match the author's
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/what-is-a-code-review?u=76281980&t=95)** or software developer's intent. In other words, did the author change the right heading and did the author change it to the right thing? The reviewer could also investigate whether there is a more efficient way to accomplish the given task. Did the author hard-code the new piece of text or was it supposed to be read from and changed in a different file? This type of reviewer is looking at implementation details, how the change was implemented or written in the code. The reviewer could also look at if the code is readable, is the code easy to understand so that if it had to be changed again, another software developer can jump in and easily figure it out. The code reviewer should also think about if this change is maintainable, as well as if it breaks any [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) previously established in the code base. Once a reviewer has finished reviewing code, they'll give suggestions to the original author about how they can iterate on their changes. The original author can use the suggested changes or discuss with the reviewer if there's confusion or disagreement. Once the author and reviewer agree on the proposed code changes, the reviewer approves the changes and the changes get integrated or merged officially with the code base. That's how code reviews work in a nutshell. Unlike many other practices, code reviews can accelerate and streamline the process of [Software Development](../../Topics/Software%20Development.md). Although automated solutions do exist, there's nothing as good as having another software developer review your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), in other words (1)
> **Env Vars:** api (1), html (1)
> **Cross-References:** later in (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Code reviews in the software development life cycle](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/code-reviews-in-the-software-development-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/code-reviews-in-the-software-development-life-cycle?u=76281980&t=0)** - [Instructor] You may not be using code reviews yet, but there is a natural place for them to fit into the [Software Development](../../Topics/Software%20Development.md) life cycle. The first step in understanding how to implement code reviews is to integrate them into your development process. Many development processes exist, but in this case we'll be looking at a basic [Agile](../../Skills/DevOps/Agile%20Development.md) process. In an [Agile Software Development](../../Skills/DevOps/Agile%20Software%20Development.md) process, there is planning, analysis, design, implementation, testing, integration, and maintenance. While we won't be diving too deep into Agile, testing and integration are great places to start practicing code reviews. Before code is integrated into your code base, having a human being look at what changes are being made can save time and money down the road in the maintenance step. Mistakes can be caught, efficiencies can be made, and code can be made more readable without a ton of uplift or effort with a good [Code Review](../../Skills/Software%20Development/Code%20Review.md) team practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Agile Software Development](../../Skills/DevOps/Agile%20Software%20Development.md) (1), [Code Review](../../Skills/Software%20Development/Code%20Review.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Who should review code?](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/who-should-review-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/who-should-review-code?u=76281980&t=0)** - [Narrator] Anyone can be a code reviewer. And in fact, it should be encouraged that everyone reviews code and everyone's code is reviewed. Just because someone is the most senior person on the team doesn't mean that their code doesn't need review. On the other hand, if you are the least senior person, it doesn't mean you can't be a code reviewer. In fact, you should be reviewing code. Reviewing code changes from other developers can help you get a better understanding of the codebase. You will not only learn more about the changes that are being made, but you'll also learn how they fit into the overall codebase. Code reviews offer mentorship, learning, and collaboration opportunities. And you should take full advantage. You shouldn't be the only one reviewing your code. This brings the question how many people should review a code change? It really depends. How big is your team? In many teams, at least one or two people must approve code changes before they get integrated into the codebase. This means at least one other reviewer besides the author. The number of reviewers depends on your bandwidth. But having multiple people review the code changes can diversify the understanding of a codebase. You also might be wondering, should all code changes be reviewed? Some teams review only intensive design changes, while others review all changes made to the codebase. Again, it's a trade-off between creating new features and maintaining code quality.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/who-should-review-code?u=76281980&t=95)** Ideally, every change is reviewed. But certain cases may arise where people approve changes without reviewing them. How visible the code is to the end user will impact how much review is needed. Code used for only internal purposes likely has less urgency for review than code that touches client-facing [products](../../Skills/Software%20Development/Microsoft%20Products.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Speakers:** - [narrator] (1)

#### [How long should a code review really take](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/how-long-should-a-code-review-really-take?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/how-long-should-a-code-review-really-take?u=76281980&t=0)** - [Instructor] A [Code Review](../../Skills/Software%20Development/Code%20Review.md) should not take hours and hours and hours. Sometimes an implementation change might be a few lines of code and the review takes 10 minutes. Other times, it can take longer. Ideally, the author has submitted a change that adds, deletes or modifies around 400 to 600 lines of code. If the author's changes are significant, meaning 1,000 plus lines of code, it's often better to break the contributions up into multiple submissions. Although sometimes, it's not possible. Ultimately, you should never spend more than 60 to 90 minutes reviewing another developer's code because there is a diminishing return. After 90 minutes, you've probably found most, if not all the defects you are able to find. If you still feel unsure, you can always ask another developer on the team to review the code changes or meet with the original author of the code. That being said, you shouldn't rush a code review. Reviewing code takes time and is important for maintaining an efficient code base, but it shouldn't take your whole day. You are responsible for managing your own time. Ideally, as a software developer, you should spend around an hour or two every day reviewing proposed changes and code contributions from other developers on your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)


### 2. Performing a Code Review

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the author’s purpose](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/understand-the-author-s-purpose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/understand-the-author-s-purpose?u=76281980&t=0)** - [Instructor] Before reviewing another developer's code, it's important to understand the overall goal of the code changes. When code is put up for review, it usually has some description associated with it that describes the purpose of the code changes. To ensure the code changes work as expected and do not cause any unintended side effects, it's essential to understand the purpose of the code changes, what the code changes are meant to do for the application. In the case of adding a new feature, you should understand what new functionality should be expected with these code changes, as well as what should remain unchanged. For example, let's say your code adds a score component to a video game. If the player hits an obstacle, should the score go down? Should the score drop to zero? Should the score stay the same and that's the score for the users turn ending the round? Understanding how the new code and the overall feature fits into your application is key. You have to understand what the author is trying to do if you want to review and test their code. If a bug is being fixed in a code change, it's important to understand what the bug is in the first place, and how to recreate it with your current application. Let's say certain letters and characters such as emojis or accented characters are not encoded properly when you name your player in an iOS game. You can test this by creating a name with accented characters, and see the fact that the name does not look as expected
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/understand-the-author-s-purpose?u=76281980&t=93)** in the application. With knowledge of this error, you can run the new version of the code and see if the error still exists. For code changes that delete code, you should understand what types of files are being deleted, and why they're being deleted. This will help you ensure the deletion does not affect anything else in your code base. If the author's intent is unclear and you're not sure what code changes are being made or why, you can always send a message or meet up with the author to discuss the intent of the code changes. As a reviewer, you have to understand what the code changes are and why they are being done, so that you can review appropriately. By understanding the author's intent, you can ensure the code changes do exactly what they're supposed to do. If you find a bug was not fixed in a certain case, or a piece of functionality was left out, you can always make suggestions to the author to cover these cases. That's your job as a reviewer, to ensure the code changes do what they are intended to do, and make suggestions when they do not modify the application as expected.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (1), such as (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### [Review implementation details](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-implementation-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-implementation-details?u=76281980&t=0)** - [Instructor] After you understand the purpose of the author's code changes, you can begin to look at what code changes are being made. As discussed before, one of the first things you can do is see if the code changes accomplish the task at hand. This requires downloading the version of the code with the code changes and running it to see if the code changes impact the application as expected. If you find an error, you could provide a general description of your findings to the author or a better way would be to look at how the change was implemented and leave a note on where the error in the code might be. For example, let's say the author was adding a feature that rolls a die for a game application in [Java](../../Skills/Software%20Development/Java.md). The output the die's roll should be any number from one to six, but when you run the program on your computer, sometimes the roll is a zero and the roll is never a six. Initially, you might think, "Weird, I must be "running it wrong," but usually, that's not the case. If you are reviewing this code and see strange functionality, you should look at the code and try to find out how an unexpected number got returned to the user. Let's take a look at some code. Don't worry, you don't have to understand JAVA but this should give you an idea of how you can review code, regardless of the language. Keep in mind, usually a code change will be changing 400 to 600 lines of code, but this is a simple example to get us started with reviewing code.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-implementation-details?u=76281980&t=93)** Looking at this implementation, the author added a Dice class and a Roll function that rolls a dice which get used in the Main function. After doing some research on the Next INT function used on rand, we find out that the output can include anything from zero to the input minus one. Here, the input is six which makes the results we are seeing as a user, make sense. Next INT will return a random number between zero and five, inclusive. To fix this, the author needs to add one in the return line of the Roll function and that's what we can suggest to the author rather than just saying the code doesn't work. However, even if the implementation of the changes work as expected, that doesn't mean you're done reviewing. You should also review how the change was done. Was it done in the most efficient way? Every line of code should have a specific purpose. You should also think about how you would have implemented the change and how the author's implementation is similar to, or different from that. For the dice roll example, the whole JAVA.Util package is imported, but only the Random class is used in this package. We could suggest to the author to only import JAVA.Util.Random instead of the whole JAVA.Util package. If there is a better or preferred way of generating a random number, that could be suggested here, as well. You should use your knowledge of the given programming language, in this case, JAVA, and the tools available in it when you review code. Reviewing code in this way makes programming
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-implementation-details?u=76281980&t=186)** more of an art than a science and it's these types of reviews, both in reviewing and being reviewed, that will make you a better software developer. Variable names and function names could be simplified here, as well. RollDice is a pretty long name, so you could suggest that the author change it to Roll, instead. The function name is also written in snake case which does not stick to the JAVA naming convention. Sticking with this idea, your team likely has a set of coding standards that describe how code should be written in your code base. What type of casing do you use for constants? Screaming snake case, or just all uppercase? Do you use tabs or spaces? Does your team like ternary operators? Are streams preferred for looping over lists? Where is extra white space wanted and where is it not? All of these questions can usually be answered by a coding standards document written by your team, and you should ask about it as a new developer joining the team. As you review code, you'll want to make sure the implementation sticks with these coding standards. Now sometimes, something in a coding implementation will seem off. There might be a better way to accomplish the task but it requires a significant amount of code to be changed and it requires more time than initially allocated. In this case, the code assumes a given die is six-sided. Is that an assumption we're okay with making? If it's not, often the team might decide to approve the code and tackle this assumption
>
> **[4:39](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-implementation-details?u=76281980&t=279)** in a different effort, if it's important enough. Code bases have thousands, if not hundreds of thousands of lines of code, and you can't refactor everything, all the time. You have to prioritize what code changes to implement and decide what your team is okay with letting go, otherwise, nothing would ever be approved and new features would never make it to the code base. Code doesn't have to be 100% perfect to be approved, but it should be in a solid state that doesn't cause severe bugs or issues down the line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (7)
> **Env Vars:** java (7), int (2)
> **CLI Commands:** make (4), find (3)
> **Definitions:** is a  (4)
> **Analogies:** for example (1), similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Review maintainability and design](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-maintainability-and-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-maintainability-and-design?u=76281980&t=0)** - [Narrator] In a [Code Review](../../Skills/Software%20Development/Code%20Review.md), you should review the maintainability of the code changes. One way to review maintainability is to see if the code changes are readable. Could another developer easily pick up this piece of code again and change it to something else? If the implementation includes [Algorithms](../../Skills/Software%20Development/Algorithms.md), are they logical and easy to follow? Was this code easy to review? It should have been. This could refer to both the formatting of the code, as well as the tools used in the implementation. In reviewing, you could suggest a better name for a class, function, or variable to make the code more readable. You should also ensure that the code changes align with the coding standards and [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) used throughout the codebase. Is there a singleton pattern, but this code creates a new instance every time? We won't go too deep into design patterns in this course, but the design of the code change should fit in with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code. If things are done a certain way throughout the file, these changes should match it. Along with the main code changes, the author should have written tests that ensure the code changes work as expected. As a reviewer, you should review these tests and ensure they are testing what they are meant to test. There are a very few cases where tests should not exist for a code change. So if there are no tests, it's definitely worth asking about. In reviewing, you should also think about how this affects the bigger picture of maintainability. Is a new dependency added?
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-maintainability-and-design?u=76281980&t=93)** If so, adding this dependency could make things harder down the line, if certain functionality becomes deprecated. It's also another tool your team has to rely on. Certain dependencies are needed but the team should be thoughtful about adding a new dependency. If this code change affects a certain configuration, it could break the code in production because a configuration is often not tested with automated testing. You should make sure there's reasoning behind a given configuration change, and that it's ready to be deployed. A code change could also remove backwards compatibility for a given feature. If this is the case, ensure that this is intentional and the team is ready to remove backwards compatibility for that feature. If you see a security issue, such as a secret in the unit tests or a vulnerability elsewhere in the code, you should absolutely bring this up in a code review. Fixing security vulnerabilities later on can be expensive and time-consuming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (3)
> **Analogies:** picture (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Review unfamiliar code](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-unfamiliar-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-unfamiliar-code?u=76281980&t=0)** - [Instructor] Whether you're a new developer on the team or an experienced developer reviewing a new part of the code base, reviewing unfamiliar code can be scary. If you don't understand a given group of code changes, you might disqualify yourself from reviewing a given piece of code before even trying. Of course, if you avoid a certain section of the code base, how will you ever learn it? How will you feel encouraged to pick up tasks in this area if you don't feel comfortable reviewing these code changes? Reviewing code is a great way to familiarize yourself with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code base. Even if you're not the most knowledgeable in that area of the code, there are things you might pick up on that others may not. For example, maybe you see a certain file that isn't deleted along with others in a [Code Review](../../Skills/Software%20Development/Code%20Review.md). You can draw attention to it, and even if your suggestion is not the right solution, you can bring up a discussion about the change. Perhaps by drawing attention to it, the author or others on the team realize a different mistake made in the implementation. By being unfamiliar with this area of the code, you provide a unique perspective that can point out things the author or those familiar with the code may not have seen. Code reviews are a learning process meant to bring your team together as well as avoid bugs in your code base. If you really don't understand the code changes you are reviewing, you can always reach out to the author or another teammate that is familiar with the code changes and make it a learning opportunity. Not only will you learn more about this area of the code,
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/review-unfamiliar-code?u=76281980&t=96)** but this process provides mentorship and mentee opportunities where you can develop better relationships with your teammates. The code review process should never be about pointing out each other's mistakes, but it should be about the team coming together to improve each other's development skills and produce the best product possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Providing constructive feedback](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/providing-constructive-feedback-23424348?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/providing-constructive-feedback-23424348?u=76281980&t=0)** - [Instructor] Code reviews are more than just a [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md) process, they're an opportunity for collaboration and learning within a development team. One of the critical elements that contribute to the success of code reviews is providing constructive feedback. It's a catalyst for improvement, it goes beyond just pointing out mistakes, and focuses on guiding developers towards better solutions. When delivered thoughtfully, constructive feedback fosters a positive and collaborative environment where team members feel empowered to grow and enhance their skills. To ensure you're providing constructive feedback, here's some tips I recommend. First, be specific and clear. You should describe in detail what you liked or disliked in the code, and avoid vague comments like, this doesn't look good. Instead, point out the exact section or line that needs attention. Clear feedback helps the developer understand the issues, and makes it easier for them to address the feedback. Instead of merely pointing out the issues, you can also provide suggestions or alternative solutions. This not only helps the developer understand what needs improvement, but also provides actionable guidance on how to address the feedback. It's an important opportunity for knowledge sharing and mutual learning. You can also acknowledge aspects of the PR that are well done or aligned with the project's goals. This sets a positive tone, and helps the developer feel appreciated for their efforts. It's important to remember that behind every line of code is a developer who invested time and effort.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/providing-constructive-feedback-23424348?u=76281980&t=95)** be empathetic in your feedback, and consider the challenges they might have faced. Instead of criticizing, seek to understand their reasoning and provide feedback that helps them improve without demotivating them. Ultimately, code reviews are a two-way street, it's not just your feedback that's important. Developers should feel comfortable asking questions, or seeking clarification on your feedback. This promotes open communication, and ensures that the developer fully comprehends the feedback provided. In fact, a collaborative discussion often leads to better solutions. In your reviews, you can use we statements to emphasize shared ownership at the code base. For instance, say, "We could improve the readability of this section by." Rather than, "You need to improve the readability." It's the team collectively rather than the author of the initial code that will lead to success. You can also frame your feedback in a way that promotes collaboration, phrases like, "Let's explore another approach for," or, "how can we collectively address this concern?" Invite developers to work together in finding solutions. It reinforces the idea that everyone's working towards a common goal, which is what code reviews are all about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md) (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Common challenges](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/common-challenges-23424347?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/common-challenges-23424347?u=76281980&t=0)** - [Instructor] Like any collaborative task, code reviews come with their own set of challenges, but there are strategies to overcome them. One of the most frustrating parts of a [Code Review](../../Skills/Software%20Development/Code%20Review.md) is dealing with unresponsive code authors. Waiting for feedback or clarification can lead to delays in the development cycle affecting project timelines. To address this, it's crucial to establish clear communication expectations from the outset. Consider setting guidelines for response times, like within 24 hours and make sure team members are aware of these expectations. Additionally, you can also utilize project management tools to automate reminders and notifications, ensuring that everyone stays on track. Discussions during code reviews can sometimes escalate into heated disagreements where team members have differing opinions on implementation details, coding styles, or architectural decisions. It's essential to foster a culture of constructive feedback within the team. To do this well, encourage developers to focus on the code rather than personal preferences and provide a platform for open discussions. If a disagreement persists, consider involving a neutral third party or team lead to mediate and guide the discussion towards a resolution that aligns with the project's goals. In a post COVID world, teams are often remote and span multiple time zones. Coordinating code reviews in situations like these can be a significant challenge, as it often leads to delays in the feedback loop. To address this issue,
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/common-challenges-23424347?u=76281980&t=94)** I suggest embracing asynchronous communication tools and practices. You should provide detailed comments to ensure clarity even when team members are not online simultaneously. You can also utilize collaboration platforms that allow for asynchronous discussions, making it easier for team members to contribute regardless of their geographic location. By establishing clear communication expectations, fostering a culture of constructive feedback, and embracing asynchronous communication tools, your team can overcome these challenges and streamline their code review workflows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2)
> **CLI Commands:** make (1)
> **Env Vars:** covid (1)
> **Speakers:** - [instructor] (1)

#### [Using AI in code reviews](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/using-ai-in-code-reviews-23435015?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/using-ai-in-code-reviews-23435015?u=76281980&t=0)** - [Tutor] As [Software Development](../../Topics/Software%20Development.md) evolves, so do the tools that are available to developers. [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) is now playing a pivotal role in optimizing various aspects of the development lifecycle, including code reviews. AI excels that understanding the semantics of code, going beyond syntactical analysis, it can understand the meaning and purpose behind code changes. For instance, it can recognize when a code change is introducing a new feature, fixing a bug, or making a performance enhancement. This level of understanding enables more context-aware reviews, where feedback can be tailored to the specific goals of each code modification. AI-powered tools can also enhance code navigation by providing context-aware suggestions for code references and dependencies. When reviewing a code change, developers often need to understand how a particular function or variable is used throughout the code base. AI-powered tools can also enhance code navigation by providing context-aware suggestions for code references and dependencies. When reviewing a code change, developers often need to understand how a particular function or variable is used throughout the code base. AI tools can offer intelligent recommendations for navigating through related code elements, saving time, and providing a more comprehensive understanding of the impact of the changes. AI models can also continuously learn from the evolution of a code base over time.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/using-ai-in-code-reviews-23435015?u=76281980&t=95)** By analyzing historic data, including past code reviews, bug fixes, and feature implementations, AI can adapt its understanding to align with the unique characteristics of a particular project. This adaptability ensures that AI-assisted code reviews become increasingly tailored and relevant to the specific context of the development team. To introduce AI into your software engineering process, here are a few tools to consider. First is [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md), which is an AI-powered code completion tool. It assists developers by suggesting entire lines or blocks of code based on the context and user input. You can also use Code Climate, which is an automated [Code Review](../../Skills/Software%20Development/Code%20Review.md) tool that uses AI and integrates with [Version Control](../../Skills/Web%20Development/Version%20Control.md) systems to offer continuous feedback. Another option is DeepCode, which uses machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) that draw insights from millions of software development repositories. Leveraging this fast data set enables the tool to offer accurate suggestions and identify potential issues that human reviewers might miss. Given all of this, AI cannot replace code reviews yet, there is still an inherent value in a human developer review due to its comprehensive understanding of the team's full context. Although, as AI continues to advance, its role in code reviews will undoubtedly expand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [Code Review](../../Skills/Software%20Development/Code%20Review.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Definitions:** is an  (2)
> **Tools:** github (1)
> **Analogies:** for instance (1)
> **Speakers:** - [tutor] (1)


### 3. Reviewing Code on the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Find code to review on GitHub](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/find-code-to-review-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/find-code-to-review-on-github?u=76281980&t=0)** - [Tutor] Another developer named Stephanie put up her code for review, and she's asked you to review it. Code reviews typically take place on an online [Version Control](../../Skills/Web%20Development/Version%20Control.md) platform, such as [GitHub](../../Skills/Software%20Development/GitHub.md). As a code reviewer, you are reviewing another developer's changes to a series of files. When you find a piece of code you would like to give a suggestion on, you leave a comment on the file, kind of like a [Facebook](../../Glossary/Service/Facebook.md) comment or comment on a [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) post. In the last chapter we talked about what feedback you might give during a [Code Review](../../Skills/Software%20Development/Code%20Review.md). But in this chapter, we'll walk through how to give that feedback through code review comments and approve a code submission. We'll say the development team uses GitHub for version control of their code base as well as code reviews. This is our team's code base or repository on GitHub. Right now, the code base is fairly small, but we'll say it will eventually consist of an application that contains a series of mini-games. To give a code review, we need to see what's available to review. When a developer wants to submit their code for review, they'll create a pull request. This is a request for other developers to download or pull down test and review the code that the author has created. Often a pull request is abbreviated PR. So another developer might say, is your PR up yet? Or can you take a look at my PR? A pull request contains code that is ready to be reviewed. If you follow the link on screen,
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/find-code-to-review-on-github?u=76281980&t=92)** you should be able to find GitHub and create a GitHub account. If you already have a GitHub account, be sure to log in. As we saw before, this page shows the teams GitHub repository or project. It's the place where the main code base lives. We can switch between different versions of the application by clicking on the branches. Since it's initially loaded on the main branch, the main branch is the primary branch with the most up to date approved version of the code base. On all GitHub repose, there's a tab called pull requests. So let's click that. This will show us all of the open pull requests or all the code that is up for review to integrate with the code base. Stephanie asked us to take a look at her code. So let's click on her pull request. On the PR, we can see the author's purpose, what this code is meant to achieve, as well as the history of commits. A commit is just a group of changes that were saved or committed to the PR. Reading through this, Stephanie's PR is meant to add dice roll functionality to the code base. It's not used in any of the games yet, but having this functionality created will help facilitate leader development. In order to integrate or merge this commit with the code base, at least one approval is required. Another developer must approve this change. Many times there also might be code checks that are run when a developer submits a PR.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/find-code-to-review-on-github?u=76281980&t=185)** These code checks will ensure the application can build and run, but it does not check that the code changes work as expected. That's why we do code reviews. When you're reviewing a PR, there also might be merged conflicts. Merge conflicts mean another PR has been integrated into the code base, and the other PR affects a file that is in this PR. Since the other PR was merged first, the author of this PR would need to change or integrate the latest version of the code base into their version of the code, fixing the files that have merged conflicts or conflicting changes. As a reviewer, this means you need to tell the author that they have merge conflicts and they'll fix them. In this case, we have no merge conflicts. Scrolling back to the top, there's a description that states, Stephanie wants to merge three commits into main from features/games-104. This means that Stephanie wants to merge or integrate her changes with the larger code base on the main branch. Her changes live on the branch feature/games-104 This has more to do with version control than coder views. So if you're interested, I highly suggest you take a look at a GitHub course on LinkedIn learning. Let's click files changed and see what code files Stephanie modified. In this case, Stephanie has created two files, dice.[Java](../../Skills/Software%20Development/Java.md) and a corresponding test file. She also modified the get ignore.
>
> **[4:39](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/find-code-to-review-on-github?u=76281980&t=279)** On the top, right, you can see how many lines of code were added, and how many lines of code were deleted. To view the code changed, we have two options, unified and split. The unified view shows all the changes, additions, and subtractions to the code in one pain. Split view splits the additions and subtractions into two separate pains. In this case, we have no subtractions. So we see all the additions on the right side. Personally, I find split view works better for me, but feel free to experiment with this toggle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (9), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (3), [Code Review](../../Skills/Software%20Development/Code%20Review.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **Tools:** github (9)
> **CLI Commands:** find (3)
> **Cross-References:** in the last (1), we talked about (1), as we saw (1)
> **UI Navigation:** click on (1), toggle (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1), kind of like (1)
> **File Paths:** dice.java (1)

#### [Test code on a local machine](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/test-code-on-a-local-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/test-code-on-a-local-machine?u=76281980&t=0)** - [Instructor] Before diving too deep into the implementation details of a PR, let's start by treating the code we want to review as a black box. In other words, let's pretend we don't know how the PR is implemented and just run the application, testing whether the changes work as expected. This means we'll need to download the PR version of the code so we can run the app to test the new changes. To download the PR, we have two options. Looking at the main page of the repo, we can click Branches and switch to the PR version of the branch, in this case, feature/games104. Once on this page, we can click Clone and Download Zip. This will download a zip file with this version of the code base. Of course you might be thinking this will get super tedious as you continue to review code. And you're right. Another way to get a version of the code base is to use the [Git](../../Skills/Software%20Development/Git.md) [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) or Git Command Line Interface. There is also a desktop application that provides similar functionality to the Git CLI. In this course, we'll be using the [GitHub](../../Skills/Software%20Development/GitHub.md) desktop application, but you are welcome to use the Git CLI instead if you're familiar with it. Both will allow you to easily pull down a given version of the code base from GitHub while saving space on your computer. To use GitHub desktop, we first need to install it. There are versions for Mac and [Windows](../../Glossary/Service/Windows.md). With GitHub desktop installed,
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/test-code-on-a-local-machine?u=76281980&t=93)** you'll need to sign in with your credentials. Once you're logged in, we can clone the repository or project from GitHub so we have access to it locally on our own computer. To do this, all you need to do is go to the main page of the repository or GitHub project, click Clone and click Open in Desktop. Here we'll choose where we want it to live on our computer. In this case it's choosing the desktop. I'm okay with that, so I'll click Clone. With the code base cloned, we'll want to make sure we're working with the PR version of the code base or the version of the code base with the changes we want to review. In other words, we'll want to make sure we're on the same branch as the PR. Right now we're on the main branch. Or we can click Current Branch, switch over to Pull Requests and click Stephanie's PR. With this selection, the PR code will automatically download onto our computer. If we navigate to this folder in the desktop, we can go to source, main, [Java](../../Skills/Software%20Development/Java.md), and there's Stephanie's code. If we switch the branch name back to main, we'll see that the new file from the PR is no longer there. And that's because we're on the main branch of the code base. Let's go back to the PR version so we can review Stephanie's code. This PR is in Java, so I'll open it up with IntelliJ, a commonly used software to develop Java applications. But you are welcome to use whatever software you'd like. To test Stephanie's PR,
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/test-code-on-a-local-machine?u=76281980&t=188)** we can run the tests associated with this application. These are automated tests that you can run to see if the behavior of the application has changed. And although they don't test everything, they are a good sanity check. For Java applications, Maven is a common tool to use to run these tests. We won't be walking through how to install and set up Maven in this lesson, but if you'd like to set up Maven to run these tests, you should check out the Maven in 5 Minutes guide at maven.[apache.org](https://apache.org). You'll also need the JDK in order to build and run this application locally. Once you have Maven installed, we can run mvn test in the Terminal window in IntelliJ. This will run the tests. Looks like they pass. Let's run this application locally on our own computer and manually test the functionality. In IntelliJ, I'll run the main method to test this out. All right, it runs. We get a dice roll result in the output. Ultimately, in testing the PR code, we are looking for two main things. First, does the functionality work as expected given the new code changes? Was the new feature actually added? Did the bug actually get fixed? Second, do the code changes affect anything unexpectedly? Is there any unexpected behavior happening whether it's with the code that is being changed or something else in the application? Let's run this code a bunch more times to test this random functionality.
>
> **[4:54](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/test-code-on-a-local-machine?u=76281980&t=294)** Hmm, it seems like a six is never outputted, and sometimes like we just saw here, zero is outputted. This is an invalid value for a dice roll. It looks like the automated tests didn't catch everything. That's why it's so important to run the application locally. Automated systems can't find every error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Git](../../Skills/Software%20Development/Git.md) (4), [Java](../../Skills/Software%20Development/Java.md) (4), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (3), [Windows](../../Glossary/Service/Windows.md) (1)
> **Tools:** github (6), intellij (3), command line (1), terminal (1)
> **CLI Commands:** git (4), make (2), apache (1), mvn (1), find (1)
> **Prerequisites:** install (2), set up (2), you'll need (1)
> **Env Vars:** cli (3), jdk (1)
> **UI Navigation:** go to (2), switch to (1), navigate to (1)
> **Definitions:** in other words (2), is a  (1), is an  (1)
> **Exercise Files:** download the (2), zip file (1)

#### [Write code review comments](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/write-code-review-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/write-code-review-comments?u=76281980&t=0)** - [Tutor] Let's add a comment on this PR to give some feedback on this code. In the last chapter, one suggestion we came up with was to change the roll dice function name to a name that is consistent with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code base. To add a comment, we'll click the line that the comment should apply to and write, can we change this function name to roll dice? We can format the function name with code styling by using back techs or the insert code setting listed in the editor. To add the comment we'll click add single comment. When writing a [Code Review](../../Skills/Software%20Development/Code%20Review.md) comment, it's very important to think about what you were writing and how you are stating your feedback. Feedback is already hard to give and receive and doing it through an online platform based on technical content, makes it even harder. As software developers, we already place so much pressure on ourselves about the code we write. In a code review, although feedback must be given, there are positive ways to give feedback. In a code review comment, you should never try to single out the developer. Maintaining code quality is a team job, and we are all bound to make coding mistakes. In fact, if a code review doesn't have at least a few comments, then the reviewers are not doing their job well. In a code review comment, instead of saying, you should do this, or you should do that, making the tone seem very accusatory, you should change your tone, Can we change X to Y? Would X ever come into play?
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/write-code-review-comments?u=76281980&t=93)** What if we did C instead of A? Changing your tone to be a curious tone, can improve the code review and feedback culture on your team significantly. Your code review comments don't always have to be questions, but if they are, the author can respond to your comments and even reach out to you, leading to a healthy discussion about what's best for the code base. It's also important to remember that if you find something that is clever or very well thought out, you can always leave a code review comment, complimenting that code. Code review comments and feedback in general, can be complimentary and not always constructive criticism. If you find you're leaving several constructive comments on a PR, it's always nice to leave a comment on something the developer did well. Keeping this in mind, let's write another code review comment. Previously, we found that the dice roll is never a six because nextInt returns zero through five. We can leave a comment that says, can we add one to the result of rand.nextInt? Six is not included in the possible values that can be returned because the nextInt input is exclusive. As a reviewer, you might also notice that this roll dice function assumes one die will always be rolled. What if a game needs to roll two dice or three? It would be nice if the function didn't assume. Let's write a comment that says, can we add an input that states the number of dice to be rolled? This function assumes only one die will always be rolled. After leaving code review comments,
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/write-code-review-comments?u=76281980&t=187)** we'll wait for Stephanie to implement our suggested changes and respond to our comments. Our comments are not only here in the change to file section, but they are also on the main page of the PR. If your settings are set up for email notifications from [GitHub](../../Skills/Software%20Development/GitHub.md), you'll get an email when new comments are posted on any PR you've reviewed, letting you know when to check back on this code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (11), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** find (2), make (1)
> **Code Identifiers:** nextint (3)
> **Cross-References:** in the last (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should never (1)
> **Prerequisites:** set up (1)

#### [Approve code](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/approve-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/approve-code?u=76281980&t=0)** - [Instructor] Let's check in on the PR we reviewed so we can approve it. It looks like Stephanie addressed some of our comments. Let's see what she changed. We can review the changes from a specific commit or the sum of all of her changes in total associated with this PR. Let's keep this to looking at all of her changes for now, but know that it can be useful to look at each commit individually. She also responded to our comments. For the first comment, she agreed to change the name of the roll dice function, and the new changes show that she's changed the name. The second comment she said, "Good catch. I'll add the plus one." Looking at the implementation, she's done that as well. For the last comment she asked whether we should give an upper limit to the number of die that can be rolled. Looking at the code, she's made the changes to add number of dice as an input and added a check to make sure it's greater than zero. However, as the comment states, she's still unsure whether we should limit the number of dice that can be rolled at once. As reviewers, it's our turn to respond to these comments. For the first comment, we'll just give the thumbs up emoji. Yes, you can leave emojis on [Code Review](../../Skills/Software%20Development/Code%20Review.md) comments. Do this for the second comment as well.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/approve-code?u=76281980&t=98)** For the last comment, we'll respond. I don't think an upper limit is needed at this time, but we can add one later if we find we need one. Since we agree with the changes made, we can go ahead and approve the PR. Ideally we would pull this code down again, test it, and make sure it works as expected. We would re-review the code with these new changes. As you re-review, you might suggest new changes for the author to add. Perhaps more tests should be added. If that's the case, you'll continue to work with the author, leaving comments and responding to them until the code is complete. Once the work is done, you'll scroll down, click Add Your Review, and approve the changes. With the approval, you can leave a comment if you'd like, but it's not necessary. On the PR page, you'll see that you're marked as an approver and since only one approval is needed for each PR for this code base, the changes can be merged or integrated into the code base. Although the changes are approved, usually the author of the PR will merge their own changes because the author should keep track of when the changes are merged into the larger code base and test them again once they're merged.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Give a code review](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/challenge-give-a-code-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/challenge-give-a-code-review?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/challenge-give-a-code-review?u=76281980&t=5)** - [Instructor] It's time to review another developer's code. At a large company, reviewed code will usually be integrated into a large codebase, but you don't have to have a gigantic codebase to review code. In this challenge, you'll be reviewing code that adds a new feature to a calculator application. There are a variety of different ways you can implement a calculator with code, but here, the code to be reviewed should match the coding styles shown in the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the codebase. You might be thinking what language is this in? We've provided two different codebases for you to choose from. One is written with [Java](../../Skills/Software%20Development/Java.md) and the other is written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). You are welcome to review code in the language you are familiar with, but I encourage you to try reviewing code in a language you are unfamiliar with. Unfamiliarity can bring new perspectives. In looking at the codebase, you might notice some areas do not have tests associated with them. This is because much of this code deals with the user interface or graphical interface, which is harder to test as a unit. Here, we've created only a few unit tests for each codebase that test pieces of functionality in the code, but you could create tests that test how the codebase works as a whole. Since the focus of this course is on code reviews and not testing, we won't be diving deeply into the testing logic. For the Java codebase, you'll review a pull request that adds a feature that allows you to clear the calculator. It has the title CALC-002 Clear Calculator Values.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/challenge-give-a-code-review?u=76281980&t=104)** For the Python codebase, you'll review a pull request that adds modulo functionality to the calculator. It has the title DIG-008 Add Modulo. For your chosen PR, you should read through the author's purpose, pull down the code, test the feature, review the code, and then leave at least one review comment. This [Code Review](../../Skills/Software%20Development/Code%20Review.md) comment could be about something the author did well or a suggestion for how to improve the technical implementation. There might be other PRs you could review here and you are welcome to review those as well. These are just the particular PRs we'll be reviewing and the solution. Practicing code reviews is one of the best ways you can become a better reviewer, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Code Review](../../Skills/Software%20Development/Code%20Review.md) (1)
> **CLI Commands:** python (2)
> **Env Vars:** calc (1), dig (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Give a code review](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-give-a-code-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-give-a-code-review?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-give-a-code-review?u=76281980&t=5)** - [Instructor] There are lots of different [Code Review](../../Skills/Software%20Development/Code%20Review.md) comments you could leave on a given PR, but in this solution, we'll walk through a few potential comments. Starting with the [Java](../../Skills/Software%20Development/Java.md) code base, let's click Pull requests and navigate to the Clear Calculator Values PR. Here, we can read through the author's purpose as well as what they changed and how we can test it. As a user, I would like to have a way to clear my calculator. So what did the developer do? They added clear calculator functionality to the calculator class and then integrated it into the main class. To test it, we need to run the application and clear the calculator. Now that we understand what the changes should be, let's clone the repo and run the tests in code locally. I'll open it in desktop, which will open [GitHub](../../Skills/Software%20Development/GitHub.md) desktop. This allows us to easily clone it. We'll switch over to the PR branch, clear calculator values, that's it. Then we'll open up this PR code in IntelliJ. Before we run the application, let's run the tests. We'll run mvn test. It looks like they passed. Now it's time to run the application testing not clear functionality. We'll run it a few times to make sure it's working as expected.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-give-a-code-review?u=76281980&t=96)** It seems to be working, so let's take a look at the implementation details on GitHub. We'll look at the calculator class first. In the calculator class, the clear calculator function returns a value. If it's clearing the calculator, the value it returns will always be zero. Let's check the main class to see if the return value is used. Scrolling down, it appears that it's not saved, so the function doesn't need to return anything. As reviewers, we can suggest that the function return void instead, and only set a new value to the total. In a code review comment, let's write, can we modify the clear function to return void? The function always returns zero and the return value is not used in the main function of the main class. You may also have certain feelings about how some code was moved into separate static functions. If you think there's a cleaner way to keep the code readable, now is the time to leave a comment and give a suggestion. Maybe it shouldn't be separated into functions at all. Some developers only refractor code if they feel like they absolutely have to. By refractor, we mean take the functionality that already exists and change the code to be cleaner or more readable. If your team continuously creates PRs that just refractor code, then your application's functionality will always stay the same. A good rule of thumb is to only refactor code
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-give-a-code-review?u=76281980&t=189)** if you happen to already be working with that code file, or with that section of the code. A PR shouldn't contain a bunch of unrelated refactoring, but ultimately, you can discuss with the author and decide on what is best for the code base. If you like the way the author separated out this functionality for readability, you can always write an encouraging message as a comment. Moving on to the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) version of the code base, let's take a look at the pull requests. We'll review the Add Modulo PR and read through the author's purpose. As a user, I would like to use modulo functionality on the calculator. How are they doing it? They're adding the modulo operation to calculator.py. To test it, we'll use the modulo operation on the calculator and make sure it works as expected. Let's go back to the main page and clone the repo. We'll switch over to the PR code on DIG-008. To test this code, I'm going to jump in the terminal. We'll cd into the calculator repo, and run the test file. We'll run python3, I'm on a Mac, and so the command for using python3 on my Mac computer is python3, but if you're on a different operating system, it may be different. We'll run the CalculatorTest.py. The test pass, so let's run the application. Hmm, there's no modulo operation. For now, we'll choose multiplication. The first number will be two,
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-give-a-code-review?u=76281980&t=283)** second number will be four, two times four is eight. That works. Let's try running it again. This time we'll use the modulo operator. We'll use three, we'll mod it by two so the results should be one, and that's what we get. So the modulo operator appears to work, but it's not shown in the welcome statement. Let's take a look at the PR implementation. Looking at the files changed, we see the modulo operation was added, but it wasn't added to the welcome message. Instead of choosing a specific line of code to apply this to, let's request changes to the PR. In the comment we'll write, can we add in modulo as an option in the print statement? Let's submit our review. And there's our comment. It's on the main page of the PR. There are so many more comments we could add, and this is just one example. I hope this gave you a quick look at what it's like to give a code review.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python3 (3), make (2), mvn (1), python (1), cd (1)
> **Tools:** github (2), intellij (1), terminal (1)
> **File Paths:** calculator.py (1), calculatortest.py (1)
> **Exercise Files:** clone the repo (2)
> **Env Vars:** dig (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** navigate to (1)


### 4. Implementing a Feature

[↑ Back to Table of Contents](#table-of-contents)

#### [Scope of a code change](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/scope-of-a-code-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/scope-of-a-code-change?u=76281980&t=0)** - [Instructor] Before implementing a code change and submitting it for approval, it's important the team agrees on the size and scope of the code change. The scope defines how much work is required and how much of the code base will be changed as a part of a given effort. Usually, individual chunks of work are groomed and refined in a meeting with the developers and sometimes others such as managers or product owners. These chunks of work are called user stories. And in this sense, they talk about the desired functionality of the application, which requires certain modifications to the code base or tech stack. Anyone on the team can come up with a user story for something to be done but user stories often come from the product group for new features to add to the product. Sometimes these user stories can be more engineering-focused and be about cleaning up the code base instead of modifying functionality that the customer sees. In this refinement meeting, the developers usually have a point system or another way to rate the work for its complexity or involvement to implement. Ideally, every user story has a narrow, well-defined, and self-contained scope that is covered completely. This helps avoid bugs later on and keeps pull requests small with less lines of code changed, making them easier to review. During this refinement, if a given user story seems too complex or too involved to implement all at once, it can be discussed whether to separate the work into smaller chunks or have it remain altogether. Keep in mind, just because you pick up a large user story
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/scope-of-a-code-change?u=76281980&t=97)** to work on doesn't mean you have to submit all the work in the same pull request. Some teams might have a strict policy on one user story equals one pull request. However, it's often encouraged to submit multiple PRs if your work can be broken up into smaller functioning pieces that are complete. A good rule of thumb is if a pull request makes significant changes to more than five files or takes longer than a week to write, it might be a good idea to split it up into separate stories or as the developer is working on it, create several self-contained pull requests rather than one large PR. The benefit of splitting it up into separate stories is other developers can pick up some of the work and implement it in parallel. Of course, if the work has to be done in the same set of files, this can lead to merge conflicts and create even more work than if it was done by one developer. No matter which option you choose for the large piece of work you are implementing, it's important to discuss it with the team so everyone's on the same page. For example, let's say a given set of code needs to be deleted because it's no longer in use and you've picked up the piece of work. Instead of deleting everything in one PR, you can separate your deletion into phases, each with their own pull request. Once a given set of work is groomed, every developer on the team should have a good idea of what work is available to pick up and work on. Now, this refinement meeting or grooming meeting
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/scope-of-a-code-change?u=76281980&t=190)** doesn't happen just once or once every few months. In an [agile](../../Skills/DevOps/Agile%20Development.md) environment, this meeting usually happens once a week or once every two weeks. It just depends on the team, as every agile environment is different. The more self-contained and shorter each PR is, the better because it makes it easier to review and helps incrementally improve the code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (2)
> **Analogies:** such as (1), for example (1)
> **Best Practices:** rule of thumb (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Implement a code change](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/implement-a-code-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/implement-a-code-change?u=76281980&t=0)** - [Instructor] Let's pretend we picked up a user story or piece of work to implement in the shared codebase. Keeping with the calculator example from the previous challenge, let's say we've been tasked to add exponentiation to the calculator. The user should be able to input two numbers with the caret symbol to take the first number to the power of the second number. We'll be working on this example in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), but you are welcome to add this feature to the [Java](../../Skills/Software%20Development/Java.md) version instead. The focus of this lesson is not on the Java or Python languages, but rather the process of getting access to the latest code and implementing a code change as a part of the code submission and [Code Review](../../Skills/Software%20Development/Code%20Review.md) process. To get access to the latest version of the code, we can use [GitHub](../../Skills/Software%20Development/GitHub.md) Desktop. As we've done before, you'll want to select the correct repo or codebase, and then pull down the primary branch that you want to merge your changes into. In this case, we'll want to merge our changes into the main branch. So let's select the main branch of this repo. To get the latest version of the branch, we can pull from GitHub by clicking [Fetch](../../Skills/Web%20Development/Fetch.md) origin. Once we have the latest version, we can make a new branch by using main as the base to implement our changes. To create a new branch, we'll select new branch from the branches menu, and create a new branch. Let's say the feature we want to add is associated with the user story, dig-009, add exponentiation. So we'll call this branch feature/dig-009. Every team has different naming conventions
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/implement-a-code-change?u=76281980&t=94)** for their feature branches, or the branches where they implement new features, but this is the one we'll stick with for now. Now that our [Version Control](../../Skills/Web%20Development/Version%20Control.md) is set up, we can begin to implement the code changes. Let's click show in finders so we can find our codebase. It's in the desktop, so it's pretty accessible. We'll click into it and open the calculator.py file. We're going to be using Sublime. To add exponentiation, the first thing we need to do is add it to our list of possible operations. In this case, we're using the caret. Then we'll add the functionality to the run operation. We'll write elif operation equals equals the caret, then we'll want to do the exponentiation. Now, the way we take one number to the power of another number in Python is with double asterix, not with the caret. While this might seem strange, in most written context, the caret is used to depict one number to the power of another number. So that's why we ask the user to enter the caret. However, on the implementation side of this, we're using double asterix. Great. The changes added. We should write a test or two to make sure this is working as expected. So let's save this file. I just did command + S to save it, and then we'll switch over to the test file to add a test. We'll copy one of the current tests and modify it with our inputs.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/implement-a-code-change?u=76281980&t=190)** We'll call this test run operation exponentiation, and we'll modify the inputs. Two to the power of four is 16. We'll use that as a test, and then we'll run one more. We'll say five to the power of zero is just one. We'll save this up and then move to the terminal to run our calculator application, and then also run the tests. All right, I'm in the terminal. We run LS. We can see the calculator application, as well as the test file. Let's run the tests first. I'm going to write Python3 because that's how I run Python3 on my machine, my Mac. And then I'm going to write the name of the file, Test.py. And it failed. That's because we forgot to change the operation. So let's change the operation to a caret, run the tests again. And the test passed. Great. Let's run the application manually to make sure it's working as expected. We'll clear this up and we'll write Python3 calculator.py. What operation? I want to do the caret. We'll do five to the power of three, which is 125. Yep, 125. We could run this a few more times, but I think it's working as expected. The test passed, and we were able to run exponentiation on our calculator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Java](../../Skills/Software%20Development/Java.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Code Review](../../Skills/Software%20Development/Code%20Review.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **CLI Commands:** python (3), make (3), python3 (3), find (1), ls (1)
> **Tools:** github (2), terminal (2), sublime (1)
> **File Paths:** calculator.py (2), test.py (1)
> **UI Navigation:** select the (2), open the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Commit a code change](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/commit-a-code-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/commit-a-code-change?u=76281980&t=0)** - [Instructor] With our feature implemented, we are ready to commit these changes. In [GitHub](../../Skills/Software%20Development/GitHub.md) desktop, we can see the changes we've made. This is an opportunity to make sure all the formatting is correct and you are modifying the code exactly the way you want to. To commit these changes, we'll need to come up with a summary commit message. This message will summarize the change succinctly. Let's summarize this commit with add exponentiation functionality to the calculator. To commit it, we'll click commit to feature. Great. Now we're almost ready to submit a poll request. The next step is to integrate any changes that have happened to the main shared code base since you started your PR. Your PR was initially based off the main code base, but sometimes another PR might get merged before yours. After committing your changes on your branch, it's important to reintegrate the changes from the main code base so you can work with the latest version of the code base with your committed changes. To do this, we'll need to switch over to the main branch and pull down the latest version of main. Then, we'll switch back to our feature branch to integrate the changes from main. To integrate the changes, we'll click branch, merge into current branch. Then, we'll click main. In this case, our branch is already up to date with main, but if there were any changes to main, we would need to merge main back into our feature branch. Depending on how long you waited to make your commit
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/commit-a-code-change?u=76281980&t=93)** or how long you've been working on a feature, there may be merge conflicts once you do that merge. This happens when another poll request gets merged into the main code base and modifies a file that your PR also modifies. Merge conflicts aren't a super big deal, you just have to decide what changes to keep and what changes to toss out. Great. With the code up to date with the main branch, our code change is almost ready to submit for review.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (2)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Prepare code for review](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/prepare-code-for-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/prepare-code-for-review?u=76281980&t=0)** - [Instructor] Before opening a pull request, pre-reviewing your code changes can be very helpful so that your reviewers can spend less time on formatting suggestions, and more time on the design and implementation of your changes. In pre-reviewing code, you should act like you didn't write the code. In other words, you should review your own code as firmly as you would review someone else's code. The code changes should do what they are meant to do for the application. In the case of our exponentiation feature, you should make sure the calculator can actually perform exponentiation. You should also look at the way you implemented your code. Is the implementation correct? Is that the simplest and most readable solution? Does the way you implemented this change adhere to the coding standards? As you review your code, you'll want to make sure you remove any extra white space or extra comments you may have added in. This especially comes into play if you had one idea for implementing the feature, started implementing it, and then took a different path. Sometimes you'll forget to delete the tests or functionality that made sense for the first route you took, but don't make sense for the current implementation. Make sure to delete any modifications that are not necessary for your code change. You should also make sure you have automated tests associated with your changes. Developers will often open pull requests without tests and the first comment on the PR is can we add tests or where are the tests?
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/prepare-code-for-review?u=76281980&t=94)** Your team has likely decided on a common testing framework and you'll need to write tests using the chosen framework for any code you add to the code base. Once you've pre-reviewed your code, you're ready to open a pull request to merge or integrate your changes to the main code base.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Prerequisites:** make sure you have (1), you'll need (1)
> **Definitions:** in other words (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 5. Submitting Code for Review

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a pull request (PR)](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/create-a-pull-request-pr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/create-a-pull-request-pr?u=76281980&t=0)** - [Instructor] We've implemented the code change, committed our changes, integrated the latest version of main, and prepared the code for review. Now we're ready to open a pull request. So far, the feature branch we've been working on has been local to our computer. The first step we need to take is push this feature branch, or this new version of the code, up to the cloud. In [GitHub](../../Skills/Software%20Development/GitHub.md) Desktop, we can do this by clicking publish branch. This will make the feature version of our code accessible on GitHub, so we can open a pull request. Going back to the main page of our repository on GitHub, we can click branch and see our branch has been uploaded. Since we just published this branch, GitHub prompts us to create a pull request. So let's follow the prompt and click compare and pull request. If this option does not show up, make sure you published the correct branch in GitHub desktop. You should also be able to create a pull request just by clicking create pull request after you published the branch. If either of these options are still giving you trouble, you can always go to the pull request page and click new pull request. Whichever option you choose, you'll eventually get to this page. Now in order to open a pull request, there are a few configurations we have to set. First, which version of the code are we trying to integrate into another version of the code. In this case, we want to merge our feature branch, feature/dig-009 with main. So we'll select main as the base
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/create-a-pull-request-pr?u=76281980&t=94)** and feature/dig-009 to compare. To create a pull request, we'll need to set a title and a description. Since this PR matches with the specific user story we are working on, we can have the title of this story be the title of the PR. In this case, it's DIG-009, that's the identifier. And then add exponentiation. Sometimes you might work on a PR that doesn't perfectly match with the story, and that's okay. The title should be descriptive of the overall change you are making to the application's functionality or codebase. Now it's time to write the description. There are lots of different ways you can write the description. But generally, I find it's useful to include why you're making the change, how you're making the change, and a test plan for how to test your changes in various environments. This may seem like a lot, but the why can often be copied from the user story, or the original speck of the work. The how just describes what code modifications you made and the test plan should be similar to what you executed locally as a part of pre-reviewing your code. Some development teams may have shorter descriptions that include less detail. But I find beefier descriptions to be helpful for reviewers. Below the description, we can see the different commits we've made, as well as the result of our code changes. We can see what lines we've added, modified, and deleted. If we're happy with this title and description,
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/create-a-pull-request-pr?u=76281980&t=190)** as well as the code changes we've made, we're ready to open the PR. Let's click create pull request. And here's our pull request. If we click pull requests, we'll see our pull request is listed in the list of open pull requests. Now we just need to get some reviewers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (5)
> **Tools:** github (5)
> **CLI Commands:** make (2), find (2)
> **UI Navigation:** go to (1), open the (1)
> **Env Vars:** dig (1)
> **Speakers:** - [instructor] (1)

#### [Find code reviewers](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/find-code-reviewers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/find-code-reviewers?u=76281980&t=0)** - [Instructor] The changes implemented in your pull request is open. Now, you wait for it to be reviewed. You could wait around passively for reviews, and it might get reviewed in a few days, but with some good strategies you can get it approved and merged in no time. On [GitHub](../../Skills/Software%20Development/GitHub.md), you can request reviewers on your PR. When you request another developer, they'll likely receive an email or notification saying that their review has been requested on your pull request. One of the reviewers you request might be the lead of the initiative you are working on. The other might be less familiar with this part of the code base, giving more perspective on the overall big picture. More than two reviewers can often be counterproductive due to conflicting ideas, and it takes too much resource from the overall team. If you use [Slack](../../Skills/Software%20Development/Slack.md), [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md), or another instant messaging platform with your team, you can ping in the appropriate channel that your code is ready for review. You could write something like, "Please review DIG-009 Add Exponentiation," and then add a link to your pull request. A message like this announces that you have some code ready for reviewers and any developers looking to review code can take a look at yours. As the author, it's your responsibility to let others know that your code is ready to be reviewed. If this is one of your first pull requests, you can always message someone on your team. Ask them if you can set up some time to go over your code together and walk through your implementation.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/find-code-reviewers?u=76281980&t=94)** Sometimes, if you're working on a part of the code base that's unfamiliar to others, you may have to meet with a few developers on the team to discuss your implementation in order to get some good [Code Review](../../Skills/Software%20Development/Code%20Review.md) comments and approvals. On another note, if you are a good code reviewer, people will want to review your code. If you leave insightful comments on the other PRs and consistently review code, others on the team will want to return the favor. If it continues to become hard to find code reviewers, I encourage you to discuss how to implement a better code review practice with your team. Maybe that means everyone does one code review a day, or it means a code review should not be left without comments for more than 24 hours. It's up to you and your team and how quickly code needs to be approved and merged. Ultimately, code cannot be merged into the main code base until a pull request is approved. So it's essential that code is reviewed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1), [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) (1)
> **Tools:** github (1), slack (1)
> **CLI Commands:** find (1)
> **Env Vars:** dig (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Handle code review comments](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/handle-code-review-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/handle-code-review-comments?u=76281980&t=0)** - [Instructor] After receiving a review, your reviewer has likely left [Code Review](../../Skills/Software%20Development/Code%20Review.md) comments, including technical feedback on your code. Depending on who reviews your code, these comments can feel very constructive and helpful and sometimes they can feel strict, uncalled for, and un-useful. No matter what code review comments are left on your PR, do not take it personally. The goal for you and your reviewer is to add new features while maintaining the quality of the code base. Sometimes, if your PR gets a ton of review comments, you might feel as though you didn't do a good job on the change. But most of the time, that's not the case. Code review comments are a great place to initiate discussion and give realization on how a given change might impact the overall design. The code review comments are about the code base and are meant to make the code base better. So while it's easy to get defensive while receiving feedback, especially technical feedback, code review comments are never a personal attack on you. While reviewing code, a developer can sometimes feel frustrated and that frustration carries through to their comments. Although the reviewer can improve on giving feedback, you should be prepared for this. The best way to look at harsh or overly negative review comments is to ask yourself, what is the reviewer trying to communicate to me? What constructive thing do they want me to do? Then make changes based off this feedback.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/handle-code-review-comments?u=76281980&t=93)** Ultimately, responding with anger to a review comment is against professional etiquette and it will live in the code review tool forever. It's worth it to take a step back, take a walk, and review what is constructive about the comments. It can sometimes seem as if you've been working forever on a pull request just to get it blocked by some reviewers. But patience is key in these situations. The reviewers can not only help you improve your code but the overall code base as well. In many fields, especially [Software Development](../../Topics/Software%20Development.md), you have to be willing to learn in order to improve. And the way we look at code reviews should be no different. If a particular reviewer continues to provide feedback in a way you find un-constructive, it might be a good idea to discuss with them the best ways you receive feedback. Make it about you. Explain the ways you like to receive feedback and the ways that make it harder to receive feedback. You could say something like, "It's easier for me "to understand code review comments "when they're phrased as questions." If the private discussion does not have the intended effect, you can always escalate to your manager as appropriate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (7), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** make (4), find (1)
> **Speakers:** - [instructor] (1)

#### [Respond to code reviews comments](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/respond-to-code-reviews-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/respond-to-code-reviews-comments?u=76281980&t=0)** - [Instructor] Once you have a few comments on your pull request, it's time to read through them and respond appropriately. You should respond to every review comment, even if it's a simple, "Done." If you disagree with the review comment, you can explain why you made certain design decisions or separated various functionalities. Let's take a look at a few examples. This is our ad exponentiation PR and we have a few comments. This [Code Review](../../Skills/Software%20Development/Code%20Review.md) comment is about the design. In this case, it says, "Can we state "the new operation first?" In our code changes, we put the caret operation last. This reviewer wants us to put that caret operation first. In the story or piece of work we picked up, it might've stated the order for what operations should be listed first. If in the requirements for the work, it stated the exponentiation symbol should be last, you could leave a comment linking to the documentation stating the spec for the feature. If not, and you agree with the comment, you could always write, "Will do," or, "Done," if you've already made the changes and recommitted to this PR. Once you've opened a pull request, you do not need to open it again. You just make the changes to the same branch and they will appear in the PR once committed. Let's make that quick change and then we'll write, "Done," in response to the comment. First, we'll open [GitHub](../../Skills/Software%20Development/GitHub.md) desktop and make sure we're on the right branch, our PR branch, which is dig-009. Then we'll open up our Calculator.py file
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/respond-to-code-reviews-comments?u=76281980&t=96)** and make the suggested change. We'll add the caret to the beginning and move the or statement. We'll save the file and recommit the changes. We'll summarize this commit with, "Addressing Review Comments." We'll commit the change and then push it up to GitHub. We'll refresh the PR. It says this change is outdated. So we'll write down in the comment. And if we go to files changed, we see the changes from all the commits. We see the caret is at the beginning of this welcome message. Let's look at the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of our comments. Scrolling down on the main page, we see a comment again from Stephanie. It says, "Can we add a few tests that use decimal numbers "and negative numbers?" While it's definitely possible to add those cases, as the author, you may feel like adding these additional test cases is unnecessary because they really test the built-in functionality of exponentiation rather than how the code is using exponentiation. You could also agree and just add the additional tests. In this case, let's say we disagree with the code review comment. In response we'll write, "I'm not sure if we need additional "test cases as the current tests cover "how our code uses exponentiation. "I believe adding additional test cases would test "the built-in functionality of exponentiation "rather than how our application uses it. "However, if we think they are still necessary,
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/respond-to-code-reviews-comments?u=76281980&t=189)** "I can add them." This code review comment demonstrates the view of the author, explains why the code was written a certain way, and provides the option of continuing with the requested change given the additional information. From here, the code reviewer would respond and encourage the author to add more tests or leave it as is. Ultimately, if you can't come to an agreement with the reviewer via code review comments, you can always set up an in-person meeting or ask another developer on your team for insight. We've looked at a few code review comments here but sometimes another developer might leave a confusing code review comment on your PR. In this situation, the best thing to do is to reach out to the reviewer through instant message or in person and try to get more context on the feedback the reviewer is giving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (6), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (4)
> **Documentation:** the documentation (1), spec (1)
> **Tools:** github (2)
> **File Paths:** calculator.py (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add a feature and submit a PR](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/challenge-add-a-feature-and-submit-a-pr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/challenge-add-a-feature-and-submit-a-pr?u=76281980&t=0)** - [Instructor] To bring this course full circle, it's your turn to submit code for review. In the previous challenge, you reviewed a code change to a calculator application. This time around, you will submit a pull request to one or both of these code bases. In this poll request you submit, you have two options. You can add another feature to the calculator, or refractor a piece of code, it's up to you. The main purpose of this challenge is to help you get more familiar with the process of submitting code for review. It's also meant to help you understand how to scope out a code change for a single poll request. Don't try to add, delete or modify thousands of lines of code. This challenge is not meant to test how good you are at a given programming language or your implementation skills of the change itself. And who knows, you might get some review comments on your code yourself. Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add a feature and submit a PR](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-add-a-feature-and-submit-a-pr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-add-a-feature-and-submit-a-pr?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-add-a-feature-and-submit-a-pr?u=76281980&t=5)** - [Instructor] There are many different solutions to this challenge, as there are an infinite amount of different features you could add to this calculator application. But here we'll add the modulo operation to the [Java](../../Skills/Software%20Development/Java.md) code base. First we'll pull down the main branch, which is where the consolidated version of the calculator application lives. With the latest version of main, we'll click Current Branch, Create a New Branch, and we'll call this branch Feature Add Modulo. Now that we're on the right branch, we'll add in our code changes. The first thing we'll do is add the modulo to the welcome statement in the main.java file. We'll denote that with the percent sign. Then we'll go into the calculator.java file and add it to our run operation. We'll right case, and then the modulo symbol. And if that's the operation the user enters, we'll set the total to modulo X Y. Now, we have not defined modulo as a function, so we'll go to the bottom and add it in. We'll write private, double modulo. We'll add in our two inputs, X and Y, and we'll have it returned the modulo of X mod Y. All right, the implementation is done, but we still need to add some tests. Let's go over to the calculator.test file. And we'll add in a test, right under divide. We'll write Test.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-add-a-feature-and-submit-a-pr?u=76281980&t=99)** @Test denotes that this is a function that we want to run as part of our tests. It will either pass or fail. This annotation also makes it so when we run NVN test in the terminal, this test gets run. To create the test function, we'll write public void runOperation_modulo. We'll use an assert test. We'll write assert equals, we'll say two is the expected value we want to get from the output of under test run operation. We'll say two mod four, that should be, and that should be two, and we'll give it the operation mod. It should look pretty similar to the other tests that are in this class. We'll save it up and let's run the tests. There are a bunch of ways you could do this, but I'll just run this calculator test file, as it's the only test file in this code base. Looks like the tests pass. Let's run the calculator application and try using the modulo function. We'll run main.main. We'll say three mod four. We'll use the mod. We'll say no. The total is three, three mod four is three. Let's try it again. Let's say for mod two, this should be zero. It's the remainder of four divided by two. That's two with no remainder. Since the remainder is zero, four mod two is zero,
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/solution-add-a-feature-and-submit-a-pr?u=76281980&t=193)** which is what we get in the final total. Great. It looks like our application's working as expected. Let's commit our changes. We'll write Add Modulo. Then we'll publish the branch and open the pull request. Let's set the details of this PR. We'll want to merge from our feature Add Modulo branch to the main branch, and scrolling down below, the code looks correct. We like the title Add Modulo. Now we just have to write a description. Great. Let's create the PR. Here's our PR. And if we go to the pull request page, there it is ready for review.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3)
> **UI Navigation:** go to (2), open the (1)
> **File Paths:** main.java (1), calculator.java (1)
> **Env Vars:** nvn (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Add code reviews into your daily job](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/add-code-reviews-into-your-daily-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-conducting-code-reviews/add-code-reviews-into-your-daily-job?u=76281980&t=0)** - [Kathryn] Congratulations on finishing the course. From learning how to open a pull request, to giving a comprehensive [Code Review](../../Skills/Software%20Development/Code%20Review.md), you've learned a lot. With the world of software always changing, adding code reviews to your team's practices can ensure a working in readable codebase. As a developer, you may try to procrastinate giving code reviews, as they aren't part of an initiative you're leading, and they're not part of the tickets or work directly assigned to you. However, code reviews are proven to improve the quality of the codebase. Plus, you need others to review your code too. I encourage you to make a goal for yourself, to do at least one code review a day, and I think it might surprise you, at how much of a better developer you become. If you want to dive deeper and continue practicing code reviews, the open source community on [GitHub](../../Skills/Software%20Development/GitHub.md) is a great place to start. Thank you so much for watching this course, I really enjoyed creating it, to help you discover how code reviews can help improve your team's codebase, as well as your own technical and leadership skills. Good luck, and I hope this inspires you to start or keep up with your code review practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [Kathryn Hodge](../../Instructors/Software%20Development/Kathryn%20Hodge.md)

## Skills Covered

- Code Review
- Programming
- Programming Foundations

## Path Context

### In [Succeeding in Your Tech Career- Software Development](../../Paths/Cloud%20Computing/Learning%20Paths/Succeeding%20in%20Your%20Tech%20Career-%20Software%20Development.md)
← [Accelerate Your Developer Career](Accelerate%20Your%20Developer%20Career.md) | **3 of 6** | [Inclusive Tech- Conducting Humane Code Reviews](Inclusive%20Tech-%20Conducting%20Humane%20Code%20Reviews.md) →

## Appears In

- [Succeeding in Your Tech Career- Software Development](../../Paths/Cloud%20Computing/Learning%20Paths/Succeeding%20in%20Your%20Tech%20Career-%20Software%20Development.md)

## Related Courses

_Courses sharing skills:_

- [Complete Guide to C Programming Foundations](../Hardware/Complete%20Guide%20to%20C%20Programming%20Foundations.md) — Programming Foundations
- [Computer Science Principles- Programming](../Software%20Development/Computer%20Science%20Principles-%20Programming.md) — Programming
- [Programming Foundations- Web Security](../Software%20Development/Programming%20Foundations-%20Web%20Security.md) — Programming Foundations
- [Complete Guide To C Plus Plus Programming Foundations](../Software%20Development/Complete%20Guide%20To%20C%20Plus%20Plus%20Programming%20Foundations.md) — Programming Foundations
- [Learning Functional Programming with JavaScript ES6+](../Software%20Development/Learning%20Functional%20Programming%20with%20JavaScript%20ES6%2B.md) — Programming

---

[↑ Back to top](#)