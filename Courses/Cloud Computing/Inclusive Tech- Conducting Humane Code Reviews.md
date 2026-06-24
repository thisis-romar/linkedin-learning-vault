---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: inclusive-tech-conducting-humane-code-reviews
url: "https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews"
duration_minutes: 41
duration: 41m
level: Intermediate
updated: 12/21/2020
learners: 114377
skills:
  - Code Review
  - Tech Career Skills
exercise_files: true
github: "https://github.com/LinkedInLearning/inclusive-tech-conducting-humane-code-reviews-2849268"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEXt2Yqz9B8XA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1608238138221?e=2147483647&amp;v=beta&amp;t=BTj21OoXOSt-qTEiQU06d_XpOcKhoFR3SkfsN1XE-24"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Succeeding in Your Tech Career- Software Development](../../Paths/Cloud%20Computing/Learning%20Paths/Succeeding%20in%20Your%20Tech%20Career-%20Software%20Development.md)'
  - '[Managing and Leading Developers](../../Paths/Cloud%20Computing/Learning%20Paths/Managing%20and%20Leading%20Developers.md)'
  - '[Improve Your Technical Communication Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Improve%20Your%20Technical%20Communication%20Skills.md)'
prev_courses:
  - '[Programming Foundations- Conducting Code Reviews](Programming%20Foundations-%20Conducting%20Code%20Reviews.md)'
  - '[Agile Software Development- Creating an Agile Culture](../Software%20Development/Agile%20Software%20Development-%20Creating%20an%20Agile%20Culture.md)'
  - '[Tech Career Skills- Effective Technical Communication](Tech%20Career%20Skills-%20Effective%20Technical%20Communication.md)'
next_courses:
  - '[Tech Career Skills- Communication for Developers](Tech%20Career%20Skills-%20Communication%20for%20Developers.md)'
  - '[Building Trust](../../Skills/Data%20Science/Building%20Trust.md)'
  - '[Skills for Inclusive Conversations](Skills%20for%20Inclusive%20Conversations.md)'
path_nav: '[{"path":"Succeeding in Your Tech Career- Software Development","position":4,"total":6,"prev":"Programming Foundations- Conducting Code Reviews","next":"Tech Career Skills- Communication for Developers"},{"path":"Managing and Leading Developers","position":5,"total":8,"prev":"Agile Software Development- Creating an Agile Culture","next":"Building Trust"},{"path":"Improve Your Technical Communication Skills","position":2,"total":5,"prev":"Tech Career Skills- Effective Technical Communication","next":"Skills for Inclusive Conversations"}]'
path_count: 3
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/data-science
  - topic/software-development
  - skill/code-review
  - skill/tech-career-skills
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Inclusive%20Tech-%20Conducting%20Humane%20Code%20Reviews.md)

![Inclusive Tech: Conducting Humane Code Reviews](https://media.licdn.com/dms/image/v2/C4E0DAQEXt2Yqz9B8XA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1608238138221?e=2147483647&amp;v=beta&amp;t=BTj21OoXOSt-qTEiQU06d_XpOcKhoFR3SkfsN1XE-24)

# Inclusive Tech: Conducting Humane Code Reviews

> Learn how to conduct fair, objective, and productive code reviews and still like your teammates afterward! Instructor Adrienne Braganza Tacke explains why we conduct code reviews, the main pain points teams experience, and what your team needs to make code reviews successful. She explores objectivity and how to write constructive feedback, covers why your team needs a working agreement and how to 

> [LinkedIn Learning](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews) | 41m | Intermediate | 114K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Code reviews: heated, but needed](#code-reviews-heated-but-needed)
- [**1. Why Do We Perform Code Reviews?**](#1-why-do-we-perform-code-reviews) (4 videos)
  - [Goal 1: Catch design flaws](#goal-1-catch-design-flaws)
  - [Goal 2: Ensure code clarity and coherence](#goal-2-ensure-code-clarity-and-coherence)
  - [Goal 3: Validate necessity](#goal-3-validate-necessity)
  - [Goal 4: Confirm functionality](#goal-4-confirm-functionality)
- [**2. The Working Team Agreement**](#2-the-working-team-agreement) (4 videos)
  - [What's a team working agreement?](#whats-a-team-working-agreement)
  - [Why does my team need a team working agreement?](#why-does-my-team-need-a-team-working-agreement)
  - [Challenge: Create a team agreement](#challenge-create-a-team-agreement)
  - [Solution: Sample team agreement](#solution-sample-team-agreement)
- [**3. Developer Pain Points in Code Reviews (AKA, What Not to Do!)**](#3-developer-pain-points-in-code-reviews-aka-what-not-to-do) (3 videos)
  - [Subjectivity](#subjectivity)
  - [Tone of voice](#tone-of-voice)
  - [Process loopholes](#process-loopholes)
- [**4. Strategies for Better Code Reviews**](#4-strategies-for-better-code-reviews) (6 videos)
  - [Objectivity](#objectivity)
  - [Tools of objectivity](#tools-of-objectivity)
  - [TL;DR Don't be a jerk!](#tldr-dont-be-a-jerk)
  - [Team working agreement to the rescue!](#team-working-agreement-to-the-rescue)
  - [Challenge: Your code review challenge](#challenge-your-code-review-challenge)
  - [Solution: Your code review challenge](#solution-your-code-review-challenge)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your code reviews](#your-code-reviews)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Code reviews: heated, but needed](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/code-reviews-heated-but-needed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/code-reviews-heated-but-needed?u=76281980&t=0)** - [Instructor] Raise your hand if there's nothing you'd change about your [Code Review](../../Skills/Software%20Development/Code%20Review.md) process. Oh, you too. Well, you're not alone. Despite being one of the most important parts of the [Software Development](../../Topics/Software%20Development.md) process, many developers dread performing one. Why? Well, there are a few reasons. Some developers like to use this process as an opportunity to rehash old arguments. They find ways to indirectly connect some part of the code review to an existing argument they want to keep having. Others like to show their superiority during the process. From the tiniest nitpicks to a stubborn and subjective critique of their colleagues' work, doing code reviews in this way becomes inefficient and unproductive. Not to mention, feelings are unnecessarily hurt and unneeded tension built among the team. And still others go even further and try to circumvent the process altogether. Whether that's through unfairly enforcing the process for some and not others, or even worse, having no process at all. These kinds of tactics negatively affect the team and the code base overall. If any of this sounds familiar to you, then you're just like many other developers who rightfully despise doing code reviews. The good news is that we can do so much better. And for such an integral process in our industry, we should. In this course, I'll introduce you to the goals we should be striving for with every code review process.
>
> **[1:34](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/code-reviews-heated-but-needed?u=76281980&t=94)** Goals that are pretty synonymous with why we do them in the first place. I'll discuss what the most common code review complaints are among developers and see how they usually stray from those code review goals. And I'll work with you to create a team working agreement. A key document that helps your team design and enforce your code review process. And finally, I'll guide you through the preferred strategies your team can use to conduct fair and productive code reviews. I'm Adrienne Braganza Tacke, and I've been a software engineer for almost nine years. I've had my fair share of less than ideal code review processes on various teams. So I've learned what works and what doesn't work when establishing clear team processes. If you'd like to learn how to facilitate a fair code review process, one where substantiated mistakes and design flaws are caught, one where productive suggestions are made, and most importantly, one where you and your colleagues still like each other afterward, then join me for my course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, where we'll learn how to conduct humane code reviews.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (8), [Software Development](../../Topics/Software%20Development.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 1. Why Do We Perform Code Reviews?

[↑ Back to Table of Contents](#table-of-contents)

#### [Goal 1: Catch design flaws](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-1-catch-design-flaws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-1-catch-design-flaws?u=76281980&t=0)** - [Narrator] When thinking of why we do code reviews, the first and foremost reason you probably thought of is to catch design flaws, and you'd be right. These are the most important types of mistakes to catch in a [Code Review](../../Skills/Software%20Development/Code%20Review.md). Design flaws could be as obvious as unused functions in code, or they could be less obvious like bugs in the overall architecture of your code. Simply put design flaws are things that degrade the overall state of your code base. So how do you find design flaws in code? You can start by asking yourself these questions as you carefully review the code changes about to be merged. Things like does this code integrate well with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your architecture? For example, if your application uses MVC architecture that you see a controller type logic in a view you'll want to point that out in the code review. Code that goes against your existing architecture. For example, if your application uses MVC architecture but you see controller type logic in a view, you'll want to point that out in the code review. Code that goes against your existing architecture, assuming that you aren't refactoring it, should immediately be brought to the developers' attention in a code review comment. Other things like do the interactions between various portions of changed code makes sense? This tends to happen when you build upon existing code and functionality. It's even more prevalent when you do large refactors.
>
> **[1:36](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-1-catch-design-flaws?u=76281980&t=96)** These kinds of changes can disrupt the existing flows of your application and are another extremely important design flaw to look for during code reviews. Next, are there any race conditions? When you deal with [Concurrent Programming](../../Skills/Software%20Development/Concurrent%20Programming.md), keep an eye out for any potential threads or processes that may compete for the same resource. By having two threads, try to access this at the same time you can get weird, only happens in certain situations type of bugs that you don't want affecting your application. You may even get unexpected yet different results each time you try to run that part of the code. Another thing, does the logic seems sound and robust enough for edge cases? Your coach certainly handle the happy paths, AKA, the developers intended use cases and workflows for everyone that will use their application. But it's also important to anticipate other scenarios once in a blue moon scenarios, scenarios that don't assume network connectivity, a specific device size and so much more. Looking for these assurances during a code review pays off in the long run, and increases the robustness of your code base. Another thing to look for, should this code be placed in your code base or extracted out into a library? As teams grow larger and different parts of your code base are developed at different times, and by different people, it will become more and more critical to make sure your code is organized,
>
> **[3:09](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-1-catch-design-flaws?u=76281980&t=189)** in a way your team can understand. If the code you're reviewing would make more sense in one of your utilities libraries, say so. Catching these kinds of issues should be encouraged and expected during your code reviews. If you can't answer these questions confidently, then you've probably found a valid design flaw, one that's justified to bring up in a code review. As a critical category of issues to look out for, try to always keep these questions in mind when you review someone else's code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Concurrent Programming](../../Skills/Software%20Development/Concurrent%20Programming.md) (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** mvc (2), aka (1)
> **Analogies:** for example (2)
> **Speakers:** - [narrator] (1)

#### [Goal 2: Ensure code clarity and coherence](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-2-ensure-code-clarity-and-coherence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-2-ensure-code-clarity-and-coherence?u=76281980&t=0)** - [Instructor] While a code that is designed well is of the utmost importance, the clarity of such code is just as important. That's why the second [Code Review](../../Skills/Software%20Development/Code%20Review.md) goal we strive for is to ensure code clarity and coherence. I'm sure most of you have encountered this before either with a colleague's code or maybe earlier versions of your own. While going through a few files, you think, "What is happening here? What does this actually do?" And this is exactly the kind of complexity we want to avoid in our code and the likes of which we should be pointing out in code reviews. As developers, we get paid a pretty penny to solve some complex problems and design incredible things. So if something doesn't make sense right away, takes us more than a reasonable amount of time to understand or is outright confusing, then it needs to be changed. Code that isn't clear brings us many issues, poor maintainability as the code base grows or is shared with more people, the unnecessary introduction of obscure bugs, which may be hiding in overly complex code, the creation of a code base that's harder to refactor, and lots of avoidable wasted hours on relearning and understanding what's actually happening in our code. When you see code like this, it's always fair game to point it out in a code review. Hard-to-understand code is a valid issue that needs to be fixed for the betterment of your code base
>
> **[1:34](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-2-ensure-code-clarity-and-coherence?u=76281980&t=94)** and for your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Goal 3: Validate necessity](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-3-validate-necessity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-3-validate-necessity?u=76281980&t=0)** - [Instructor] One [Code Review](../../Skills/Software%20Development/Code%20Review.md) goal that's overlooked, mostly because it is implied in the process, is to validate it's necessity. When we review open poll requests, we expect that the code being analyzed is needed for something, whether that's a bug fix for that longstanding flicker issue with your dropdown, or a new API endpoint that makes it easy to retrieve all of your customer's orders. Code that reaches the code review stage implies that we shouldn't question it's presence. However, we should. There's several scenarios where the code itself is sound and appears to be working as intended, but may not be needed right now, or ever. One common example is to see additional features implemented that might be needed in the future, but are not known to be needed right now. This kind of premature optimization adds unnecessary complexity to your codebase. It's also a common cause of bloated codebases where several just in case scenarios are coded into the implementation but never used. Other scenarios involve larger teams or even open source projects. Sometimes duplicated implementations of a feature can be submitted for review. So some of that code is not needed. Alternatively, parts of the code being reviewed may use other resources that are either no longer supported, about to be deprecated,
>
> **[1:34](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-3-validate-necessity?u=76281980&t=94)** or otherwise not feasible for the main codebase. These are things like third-party libraries, external packages, or modules and plugins that may not work with your application. The main question you should ask yourself is will this code improve the overall health of your codebase? Usually if you can answer this with a resounding yes, bonus points if your team can too, then the code is probably good to go and will be merged in happily. But if you can't, always take the time to discuss the code in question, at least with the original developer, and at most with other members of your team. In this way, you can gather more information to help you answer that question with confidence and make the right decision in the code review.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (3)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)

#### [Goal 4: Confirm functionality](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-4-confirm-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-4-confirm-functionality?u=76281980&t=0)** - [Instructor] With the rise of automated processes, confirming the functionality of our code should be one of the easier [Code Review](../../Skills/Software%20Development/Code%20Review.md) goals to fulfill. However, when we don't have or don't use things like automated tests, it is part of our jobs as developers to make sure things work as they should during the code review process. To confirm the functionality of our code, we answer the question, does it do what it's supposed to? Validating this during the code review process can be as straightforward as quickly pulling down the branch, building it and doing some quick tests to make sure the code is doing what it's supposed to. Also, some great questions to ask yourself when confirming functionality can include, is the feature meeting all of the requirements vetted in your spec or ticket? If you've gone through the due diligence to document your requirements, you might as well make sure your resulting code complies with them. Depending on your application, industry or team, these requirements can be strictly enforced as well with some teams requiring a linked ticket to all code that passes through code review. Does it work on all of your supported browsers? Even though one particularly tricky browser is going away, we still need to ensure that our application works on the browsers that we've promised we'd support. Is it accessible? Will all kinds of people be able to use your application effortlessly? From those who use screen readers to navigate the web,
>
> **[1:33](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/goal-4-confirm-functionality?u=76281980&t=93)** to those requiring larger fonts, to those with other visual impairments, your application should function as closely as possible for everyone. Does it follow your style guide or design system? Do things appear where they should and when they should? Are there accompanying unit integration or any other tests? Especially when new features are being added, accompanying tests should always be part of a code review. When you see a lot of new code but not a lot of matching tests to go with it, it is absolutely fair to bring up and point out to the reviewee. And depending on what you have discussed and agreed upon with your team, you can even decide to prevent any new code from being merged that does not have any accompanying tests. And if it is a bug fix, does it truly resolve the problem? There are far more questions that can be asked and resolved by confirming the functionality of code, but these should cover your bases. Be sure to add your own specific questions that may need to be answered based on different industry requirements. When you develop a habit of due diligence during your code review processes, especially when your process does not have automated tests, you add an additional layer of protection to your code base. And since code reviews are usually the final approval stage before code gets merged, there's no better or more appropriate time to catch a non-working piece of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (6)
> **CLI Commands:** make (3)
> **Documentation:** spec (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. The Working Team Agreement

[↑ Back to Table of Contents](#table-of-contents)

#### [What's a team working agreement?](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/what-s-a-team-working-agreement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/what-s-a-team-working-agreement?u=76281980&t=0)** - [Presenter] Though the concept of a team working agreement originates from several places, it fits extremely well within the context of a development team. So what is it? Well, a team working agreement is a flexible, enforceable and co-created document that establishes your team's development processes and the guidelines that surround it. With this purpose in mind, it makes it the best place to spell out your team's detailed [Code Review](../../Skills/Software%20Development/Code%20Review.md) process. Before you consider any suggestions or strategies, even the ones I share in this course, it's a good idea to first get your team on the same page. How do you do that? Well, it can certainly be harder said than done, but there are a few steps you can take to kickstart the collaborative process. Dedicate a few set times where your team can discuss their thoughts and preferred coding conventions in a safe way. Be sure to give everyone ample time to prepare their case and encourage healthy debate that's focused on standards, not other colleagues. Map out the big steps that everyone agrees on first. This will give you more time to discuss your differences in depth. During these discussions, make sure to also get everyone's input, from juniors to seniors and everyone in between. Anyone who will be writing or reviewing code should have a fair say in what kind of process they'd like to enforce. Determine what your team argues about the most. Is it syntax, formatting, naming conventions,
>
> **[1:36](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/what-s-a-team-working-agreement?u=76281980&t=96)** process requirements? If you can come to an agreement to these things and place them in a document that's accessible to everyone, then your first iteration is complete. I say first iteration, because that's an important part of this document. It should be flexible, workable, and adaptable. So if a certain guideline or team rule has not been working out for your team, you can change it as a team. That's what makes this document so powerful. As long as your team collaborates and confirms the changes this document goes through together, you'll have an enforceable structure in place for your code review processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Why does my team need a team working agreement?](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/why-does-my-team-need-a-team-working-agreement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/why-does-my-team-need-a-team-working-agreement?u=76281980&t=0)** - [Narrator] The [Code Review](../../Skills/Software%20Development/Code%20Review.md) process itself is almost universally agreed upon among all developers. We all know its value and agree that it's essential to a resilient and useful [Software Development](../../Topics/Software%20Development.md) workflow. How that process is done and all the details that surround the process, however, is what's hotly contested. This is why a Team Working Agreement is such an important document to create with your team. It's flexible, enforceable, and when created in a collaborative manner, establishes your team's guidelines on all of your development processes in the most diplomatic way. The most important of these guidelines is your team's detailed code review process. Think about it for a sec. Each developer on your team has a different background, set of experiences, and collection of coding conventions they've learned throughout their career. When these differences are not reconciled, or at the very least, discussed among the team, it increases the likelihood to cause tension and resentment. And guess what? Most of the time, that tension and resentment surfaces in the code review process. By establishing your process as a team and formalizing them through a team working agreement, you are more likely to create a pragmatic process everyone can agree to. It does this in several ways. Since the agreement serves as the enforceable contract your team enters into with your code base and with each other, it's easy to refer back to
>
> **[1:36](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/why-does-my-team-need-a-team-working-agreement?u=76281980&t=96)** when a disagreement occurs, a valid critique in a code review needs to be made, or the enforcement of a process needs to occur. By being flexible in nature, your team can adjust and expand on their processes and guidelines to make sure it works for everyone. Most importantly, by having the entire team agree to the document and hold each other accountable to it, a sense of trust and collaboration can be built.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (4), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Create a team agreement](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/challenge-create-a-team-agreement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/challenge-create-a-team-agreement?u=76281980&t=0)** - [Instructor] How would you like to have an established set of guidelines for your [Code Review](../../Skills/Software%20Development/Code%20Review.md) process? How about an enforceable contract that your whole team has created and is willing to follow? Though it may sound like a dream, it's actually possible with the help of a team working agreement. In this challenge, I invite you to make a copy of the repository I've created to help your team get started in creating a team working agreement. In it, I've outlined some tips and suggestions on how to start the discussions and have provided a template your team can fill out as you collaborate and confirm the guidelines you'd like to formalize as your code review process. By the end of this challenge, your team should have its own first iteration of a team working agreement that can be adapted and extended as you continue working together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Sample team agreement](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/solution-sample-team-agreement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/solution-sample-team-agreement?u=76281980&t=0)** (soft music)
>
> **[0:06](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/solution-sample-team-agreement?u=76281980&t=6)** - [Narrator] After a few discussions with your team, you should have a great start to your team working agreement. Remember, as you continue to enforce and follow the team-working agreement, your team can always change it if it finds an initially established guideline is not working out. Here's the sample team-working agreement for my company, Mango Engineering. In it, our team has established the most important parts of our code contribution and [Code Review](../../Skills/Software%20Development/Code%20Review.md) process guidelines. As you can see here, we've outlined our branch guidelines, commit message guidelines and have fully outlined our code review process. Keep in mind that what works for our company may not work for yours. As an example, we have set a guideline to assign at most two to three developers to a code review. This works as we have a larger team and have enough developers to spread the code review duties around. On smaller teams, however, this may not be possible. In the end, your team working agreement should reflect the guidelines that work for your team and projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (4)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (soft music) (1)


### 3. Developer Pain Points in Code Reviews (AKA, What Not to Do!)

[↑ Back to Table of Contents](#table-of-contents)

#### [Subjectivity](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/subjectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/subjectivity?u=76281980&t=0)** - [Tutor] Have you ever received a comment like this on your [Code Review](../../Skills/Software%20Development/Code%20Review.md)? Or from the opposite perspective, have you ever left over 10 tiny comments on a colleague's code review pointing out indentation or formatting? If so, you have encountered the most common developer pain point when it comes to code reviews. And that's subjectivity. Because of the kinds of comments that start heated debates that make us sigh with despair and the kind of comments that make us dread code reviews the most. Why? Because these kinds of comments come from a place of personal preference, focus on the developer rather than the code, or don't have a single correct solution. Subjective comments are like this comment, seen in the materialized repo, an open source project. In the context of this poll requests, it can seem like a pretty straightforward and valid comment. It does look like the styles for the forum should be indented one level back. However, these kinds of subjective fixes shouldn't be happening during the code review process. We'll see why in a later video. Another subjective comment can also look like this. In this comment, the underlined sections show clear signs of personal preference and something called Premature Optimization. With no direct connections to any of the code review goals,
>
> **[1:34](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/subjectivity?u=76281980&t=94)** this feedback feels superfluous and still there are even more ways that we write subjective comments without even thinking twice about it. Comments like, you should really indent lines 23 and 27 or replace var with const. Come on, it's 2020, or I'd rather use regexes here or still total number of users is better than total users. Getting frustrated yet. These are the kinds of subjective comments that make developers roll their eyes. And we don't want to leave eye-roll inducing comments. These only stray it from the important code review goals we should be paying attention to and erode our relationships with our teammates over time. Both things we should really avoid, to always remember, steer clear of subjective comments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (5)
> **CLI Commands:** make (3)
> **Speakers:** - [tutor] (1)

#### [Tone of voice](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tone-of-voice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tone-of-voice?u=76281980&t=0)** - [Instructor] Where some [Code Review](../../Skills/Software%20Development/Code%20Review.md) comments can be annoying, others can be outright hurtful. This is why tone of voice matters, so much that it's one of the top pet peeves of developers when it comes to code reviews. Usually, we don't try to hurt each other's feelings or say something intentionally mean, but in a virtual environment, one where human emotion and expression are lost, code review comments can be easily misconstrued. And if you think about it, it kind of makes sense. When you read the comments, you read them in an isolated context. You only see the code in front of you, possibly some description in the pull request, and that's it. Take for example, this pull request. This is from an open source repo, one that has many developers using it and checking it out. Now, imagine how this person felt after reading this comment. What if they were a first-time contributor or someone new to programming in general? They're probably never going to contribute to open source again. Now, keep in mind that this is quite extreme. I don't think there's ever a place or time to write comments that explicit, but comments with a negative tone of voice don't always have to be this overt. Comments like, "This implementation is terrible," or, "Didn't we decide not to do this at our last meeting?" Or, "Why would you use this
>
> **[1:36](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tone-of-voice?u=76281980&t=96)** "when there's obviously no benefit?" Or, "Are you really using lodash, really?" These kinds of comments evoke the same negative voice we should eliminate from our code review process. They're like digital tomatoes that you're hurling in the face of your colleague. And that's not something you want to do, even if your colleague likes tomatoes. So the next time you're in a code review, keep your tone of voice in mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (4)
> **Analogies:** for example (1), imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Process loopholes](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/process-loopholes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/process-loopholes?u=76281980&t=0)** - [Instructor] Often overlooked, process loopholes in the [Code Review](../../Skills/Software%20Development/Code%20Review.md) process are another really frustrating issue that developers can't stand. Sometimes direct, most of the time indirect, these loopholes sow a large amount of distrust in the process altogether. What are those loopholes, you ask? Well, let's start with an unfortunately popular one, and that's bias. You witness bias loopholes when buddies ask each other to review their pull requests, hoping for a more lenient review, or worse, a guaranteed approval, or when the whole team only asks one person to review the PRs coming in. You feel the tension when the rockstar 10X engineer always has their pull requests approved, while other colleagues' code may be intensely scrutinized, or maybe you actually believe that you have a colleague who is an excellent developer, and approve their pull requests without really giving it a proper review. And finally, you feel the frustrations of having some people skip the process altogether, simply because they are in a management role or have a more senior status. These are all [Forms](../../Skills/Web%20Development/Forms.md) of bias loopholes that not only prove detrimental to your code base, but to the morale of the team. The next loophole is something that is not always intentional, but is still a problem nonetheless. That's having no code review process at all. Many developers directly see the impact of this loophole.
>
> **[1:35](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/process-loopholes?u=76281980&t=95)** With no process in place to do a final check and code being merged immediately, teams spend more time debugging broken applications, fixing their repositories, or worse, anxiously trying to revert their code base to a previously working state. Finally, there's a loophole I like to call the MVE. That stands for minimum viable effort. You've probably encountered this before, and you've probably encountered this on both sides of the process, as the reviewer, where you skim through a long pull request or minimally review the code in front of you, or as the reviewee, wondering how your nicely prepared yet chunky pull request was approved within the span of only five minutes. No matter which side you've been on, the disadvantage is clear. The lack of an honest effort and the lightning quick LGTM, a common acronym for looks good to me, comments, pretty much make the code review process useless. If you don't take the time to inspect the code carefully with all of the code review goals in mind, your code base will surely not be better off, and neither will your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (4), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** mve (1), lgtm (1)
> **Definitions:** is an  (1), stands for (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Strategies for Better Code Reviews

[↑ Back to Table of Contents](#table-of-contents)

#### [Objectivity](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/objectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/objectivity?u=76281980&t=0)** - [Instructor] If there's one thing that [Code Review](../../Skills/Software%20Development/Code%20Review.md) comments need to be, that's objective. Objective comments are the direct solution to and direct opposite of subjective comments, one of the top pet peeves developers have. Luckily, objective code review comments are easy to spot. They focus on the code. Rarely the developer are much easier to enforce and understand and can often be traced back to a code review goal. So what does an objective comment look like? Here are a few examples. This change should probably go into our utils library. It will be reused quite a bit. This comment directly addresses the fact that this code would be better suited in a different area of the code base. We can easily recognize that this ties concretely to our goal of catching design flaws. How about, I've run this on several browsers and this toast actually pops up on the top right, but our tickets specifies bottom right. Can we fix it, so it matches our requirements? This is another great example of an objective comment with great supporting facts. In this case, we refer back to a vetted resource, our ticket and explain how it goes against that resource. Letting the developer know that it is showing up incorrectly, especially after running it ourselves, shows some due diligence on our part and ties back to our goal of confirming functionality.
>
> **[1:34](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/objectivity?u=76281980&t=94)** What about this one? I'm having trouble keeping up with the logic on lines 457 through 464. Is there a way we can simplify it or make it clearer? At first, it may seem like a critique, but it's not. There are no direct critiques to the developer, only until the lines of code. In this case, the reviewer is bringing up a great point, that something is too confusing to follow. And if you remember, ensuring code clarity is an important code review goal to watch for. Here's one more, this method is being deprecated in two weeks. I'd suggest replacing it with the authenticate user method from our authentication library. Starting to get the hang of it now? I'm sure you can see how this comment easily traces back to our goal of validating necessity. In this example, the suggestion to replace it also makes sense since we've given our reasoning that the current code uses a method that will no longer be used. In all of these examples, the comments focused on the code offered objective facts to support any claims and easily upheld a code review goal. When you write your own code review comments, try to do the same. Your colleagues will thank you for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (6)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Tools of objectivity](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tools-of-objectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tools-of-objectivity?u=76281980&t=0)** - [Instructor] Objective [Code Review](../../Skills/Software%20Development/Code%20Review.md) comments are easier to write if you just let the robots take over. No, not like that. What I mean is, use automated tools to your advantage. Let's start with the code review comments developers despise receiving the most. Those pesky styling and formatting issues. With so many plugins, add-ons and services whose sole purpose is to fix, or at least warn you of these very issues, picking and choosing a few to integrate into your development workflow is worth considering. Robots taking over means making [ESLint](../../Skills/Software%20Development/ESLint.md), a pluggable [JavaScript](../../Skills/Software%20Development/JavaScript.md) Linter, a required dev dependency in your JavaScript projects. And setting up some lint rules that your whole team agrees with. Robots taking over means using things like Prettier, an opinionated code formatter to format your code while you're working on it way before it ever reaches a code review. Using some of these tools is a common strategy with development teams. It has helped many eliminate the need to point out these issues during a code review, saving the code reviewer a lot of time since they no longer need to write so many nitpicky comments, and it gives the author and developer peace of mind as they can catch and fix these issues before it becomes a problem. Another interesting thing to note, is that we as developers tend to listen to our machines
>
> **[1:34](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tools-of-objectivity?u=76281980&t=94)** when it comes to these kinds of errors and warnings, rather than our colleagues. If my IDE tells me there's a missing semi-colon on line 42, I think to myself, "Whoops, that's why it isn't working. "Let me fix that right away." However, if my coworker points this out, along with every other syntax error that's glaring, we might become a little annoyed, especially if they come in the form of a few hundred code review comments. Next, work with your team to develop an actual style guide for your code. A great place to start is to see which conventions your team already follows. Do you use all caps for constants and camel casing for functions? Should you strive to keep lines of code less than 80 characters long so it's easier to read? Or do you have a team convention that has a distinct indentation pattern for long functions? All of these decisions, and much more should be discussed with your team and then documented in your team-working agreement. By having them in a central place, it will be much easier to enforce, and it will be easier to reference increasing the likelihood that your team will continue to follow the style guide. If you don't know where to start with the style guide, you can consider using Prettier as a starting point. Prettier provides templates that your team can implement and adjust over time. So it's great to have some sort of standard to work with as your team learns what works for them.
>
> **[3:08](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tools-of-objectivity?u=76281980&t=188)** With these tools and strategies in place, your team will be writing objective code review comments with great ease.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [TL;DR Don't be a jerk!](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tl-dr-don-t-be-a-jerk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tl-dr-don-t-be-a-jerk?u=76281980&t=0)** - [Adrienne] Don't be a jerk is sound advice in pretty much all of life. In the context of code reviews though, it's one of the greatest practices you can follow to make your processes much better. Now, I know what you're thinking. "Adrienne, code isn't always going to be perfect or exactly what we need. What if I need to point something out? What if there's a valid critique I need to give?" And to that, I say, "Of course, there will be code that warrants some comments from you, the code reviewer." The key is to keep in mind these three habits. First, suggest with facts. If you're going to make a suggestion in your [Code Review](../../Skills/Software%20Development/Code%20Review.md), back it up. Why are you making this suggestion? What warrants this suggestion at all? If it's purely a suggestion and one that the developer can ignore, say so. If it's a suggestion based on a code review goal, also say so, and be explicit about how your suggestion may better align with that very goal. The point is when you make a suggestion with no other context on a code review, it's quite easy to take that suggestion, well, out of context. Are you simply making your preferences known or are you expecting them from this code? Do you have a valid point to bring up and need the developer to change something? Or are you trying to show
>
> **[1:32](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tl-dr-don-t-be-a-jerk?u=76281980&t=92)** that your implementation is the better one? When you add a bit of context and some supporting facts for your suggestion, you save everyone a lot of time and confusion, and may even better communicate the valid issues you do see within the code. Next, reject but with courtesy. Let's switch this around for a second. Imagine that you're the developer on the receiving end of some negative code review comments. Do you remember how that felt? Do you think to yourself, "Well, there was a much nicer way to say that."? Now, keep that viewpoint in mind and switch back to being the code reviewer. Would you want to write those same comments, one that could make the developer feel the negative feelings you just did? Probably not. That's the essence of this role, to write any valid critiques you may see in a code review with courtesy and respect. Focus on the code and explain why it won't work. Or even better, bring up a use case that may show its weaknesses. This is where having a team working agreement comes in quite nicely as well. Referring back to it and showing where the code may not align with a specific convention or team guideline will always be easier to enforce. It's also a pragmatic way to object to differences in code as, ideally, the team working agreement serves as a team-vetted, discussed, and approved set of standards
>
> **[3:08](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/tl-dr-don-t-be-a-jerk?u=76281980&t=188)** your code will adhere to. Lastly, clarify with an open mind. If something doesn't make sense to you in the code review, say so. The key is to gather information from the developer's perspective, context, and scope of requirements before making any judgment calls on the code you are reviewing. This is not the time to start a discussion with the intent of changing the developer's mind. This is a time to communicate openly with the developer to fill in any contextual gaps you may be missing and see why something may have been implemented the way it was. If you keep these three habits in mind every time you write a code review comment, you'll contribute to a fair and productive code review process for your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (8)
> **CLI Commands:** make (5)
> **Best Practices:** the key is (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [adrienne] (1)

#### [Team working agreement to the rescue!](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/team-working-agreement-to-the-rescue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/team-working-agreement-to-the-rescue?u=76281980&t=0)** - [Instructor] When it comes to process loopholes in the [Code Review](../../Skills/Software%20Development/Code%20Review.md) process, the Team Working Agreement can be an invaluable piece to eliminating them once and for all. To make sure your team tackles these loopholes, make sure to include the following in your Team Working Agreement, and to discuss these topics in-depth. What's the code review process from beginning to end? What repositories are you using? Which branching system is your team employing? What happens when an emergency fix needs to be deployed? What are the team options when a code review hasn't been attended to within a set time period? These are the important factors to discuss and formalize as a team, so that when the time occurs, you can all look towards your Team Working Agreement for guidance. Next, when policies are put into place, be sure to add them to the Team Working Agreement. Things like auto-adding reviewers to every pull request, and setting the minimum amount of reviewers, branch policies that affirm that no one, unless in an emergency situation that the team has approved, can force push to your production branch. Or, not allowing force push abilities for anyone. When you formalize these guidelines and work together as a team to enforce them, the Team Working Agreement will come to the rescue from many of the process loopholes you've encountered before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (3)
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Your code review challenge](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/challenge-your-code-review-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/challenge-your-code-review-challenge?u=76281980&t=0)** - [Announcer] Now that your team has a team working agreement, why not take some time to practice your [Code Review](../../Skills/Software%20Development/Code%20Review.md) comments? Using the same repository for your team working agreement exercise, try conducting code reviews for any changes you'd like to make to your team working agreement. As you review your colleagues' proposed changes, keep in mind the code review goals and the three habits to keep when writing code review comments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (3)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [announcer] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Your code review challenge](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/solution-your-code-review-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/solution-your-code-review-challenge?u=76281980&t=0)** - [Narrator] And how did you do? Are your comments productive, courteous and fair? More importantly, is your team responding well to each other's comments, and are the [Code Review](../../Skills/Software%20Development/Code%20Review.md) goals front and center within them? If so, great, your team has successfully put into practice some of the strategies we've discussed in this course. As with most things, the more your team engages in these pragmatic and humane code review practices, the more likely your team will begin to change its mind about the process once and for all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your code reviews](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/your-code-reviews?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/inclusive-tech-conducting-humane-code-reviews/your-code-reviews?u=76281980&t=0)** - [Adrienne] There you have it. Congratulations on making it to the end of this course. We learned about the fundamental goals of a [Code Review](../../Skills/Software%20Development/Code%20Review.md). Goals that motivate us to perform this essential process in the first place. We discussed what a team working agreement is, why it's important, and how it can be an invaluable document for your team and your code review process. We explored why subjectivity, tone of voice, and process loopholes are the biggest code review pet peeves for developers, as well as strategies to combat them, like taking advantage of automated tools, keeping objectivity in mind, and using the team-working agreement to your team's advantage. With the information you've just learned, you are now well equipped to collaboratively establish and enforce a code review process your whole team can get behind. If you have any questions about any part of this course or you just like to share how your team's code review processes have significantly improved through this course, find me on Twitter or share your story in a [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) post. I can't wait to celebrate your successes with you and your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)
> **Analogies:** just like (1)
> **Speakers:** - [adrienne] (1)


## Instructor

- [Adrienne Braganza Tacke](../../Instructors/Cloud%20Computing/Adrienne%20Braganza%20Tacke.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/inclusive-tech-conducting-humane-code-reviews-2849268)

## Skills Covered

- Code Review
- Tech Career Skills

## Path Context

### In [Succeeding in Your Tech Career- Software Development](../../Paths/Cloud%20Computing/Learning%20Paths/Succeeding%20in%20Your%20Tech%20Career-%20Software%20Development.md)
← [Programming Foundations- Conducting Code Reviews](Programming%20Foundations-%20Conducting%20Code%20Reviews.md) | **4 of 6** | [Tech Career Skills- Communication for Developers](Tech%20Career%20Skills-%20Communication%20for%20Developers.md) →

### In [Managing and Leading Developers](../../Paths/Cloud%20Computing/Learning%20Paths/Managing%20and%20Leading%20Developers.md)
← [Agile Software Development- Creating an Agile Culture](../Software%20Development/Agile%20Software%20Development-%20Creating%20an%20Agile%20Culture.md) | **5 of 8** | [Building Trust](../../Skills/Data%20Science/Building%20Trust.md) →

### In [Improve Your Technical Communication Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Improve%20Your%20Technical%20Communication%20Skills.md)
← [Tech Career Skills- Effective Technical Communication](Tech%20Career%20Skills-%20Effective%20Technical%20Communication.md) | **2 of 5** | [Skills for Inclusive Conversations](Skills%20for%20Inclusive%20Conversations.md) →

## Appears In

- [Succeeding in Your Tech Career- Software Development](../../Paths/Cloud%20Computing/Learning%20Paths/Succeeding%20in%20Your%20Tech%20Career-%20Software%20Development.md)
- [Managing and Leading Developers](../../Paths/Cloud%20Computing/Learning%20Paths/Managing%20and%20Leading%20Developers.md)
- [Improve Your Technical Communication Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Improve%20Your%20Technical%20Communication%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Lessons from Data Scientists](../Data%20Science/Lessons%20from%20Data%20Scientists.md) — Tech Career Skills
- [A Day In The Life Of A Data Scientist](../Data%20Science/A%20Day%20In%20The%20Life%20Of%20A%20Data%20Scientist.md) — Tech Career Skills
- [Future Proofing Your Data Science Career](Future%20Proofing%20Your%20Data%20Science%20Career.md) — Tech Career Skills
- [Data Science and Analytics Career Paths and Certifications- First Steps](../Data%20Science/Data%20Science%20and%20Analytics%20Career%20Paths%20and%20Certifications-%20First%20Steps.md) — Tech Career Skills
- [Developer Career Paths and Certifications](../Software%20Development/Developer%20Career%20Paths%20and%20Certifications.md) — Tech Career Skills

---

[↑ Back to top](#)