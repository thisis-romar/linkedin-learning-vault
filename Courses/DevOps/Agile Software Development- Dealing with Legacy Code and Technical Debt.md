---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: agile-software-development-dealing-with-legacy-code-and-technical-debt
url: "https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt"
duration_minutes: 62
duration: 1h 2m
level: Intermediate
updated: 11/1/2019
learners: 259141
skills:
  - Agile Software Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGQ1fUouicSpg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1572474974966?e=2147483647&amp;v=beta&amp;t=L40ED0kqNMkWbIgzx7VqyITB0tEul2pBNbJmxcwaFIY"
linkedin_topic: DevOps
learning_paths:
  - Getting Started with Agile Software Development
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/agile-software-development
status: not-started
created: 2026-04-20
---

![Agile Software Development: Dealing with Legacy Code and Technical Debt](https://media.licdn.com/dms/image/v2/C4E0DAQGQ1fUouicSpg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1572474974966?e=2147483647&amp;v=beta&amp;t=L40ED0kqNMkWbIgzx7VqyITB0tEul2pBNbJmxcwaFIY)

# Agile Software Development: Dealing with Legacy Code and Technical Debt

> In nearly every organization, developers are forced to grapple with old code that gets in the way of writing new features. Is legacy code limiting your development team's agility? If so, let this course be your guide for how to embrace a legacy system and improve it while paying down technical debt. Instructor Scott Ford explains how to review legacy code and fence in the technical debt by creatin

> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt) | 1h 2m | Intermediate | 259K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[M. Scott Ford]]

## Resources

- Exercise files available

## Skills Covered

- Agile Software Development

## Table of Contents

### Introduction

#### Embrace the legacy and tackle the debt
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=0)** - [Scott] Legacy code and technical debt, two topics that go hand in hand.
>
> **[0:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=5)** Primarily because the solutions for addressing them are largely the same.
>
> **[0:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=9)** You are working with code that was likely abandoned by the people who created it, and it's now your responsibility to take ownership and transform the system into one that will be recognized as modern.
>
> **[0:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=20)** This is a significant undertaking, and will likely take you years to achieve.
>
> **[0:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=25)** This effort can seem so daunting, that many teams will advocate giving up and just building something brand new from scratch.
>
> **[0:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=32)** Building new from scratch is very tempting, but it comes with a ton of other challenges.
>
> **[0:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=38)** You can avoid these challenges by embracing the legacy system that you have and to making a commitment to pay down technical debt while making improvements to it.
>
> **[0:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=49)** Hi, I'm M. Scott Ford, co-founder of Corgibytes, an organization that works exclusively on legacy code products.
>
> **[0:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=56)** Come join me in my LinkedIn Learning course, on dealing with legacy code and technical debt.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [scott] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=1)** - [Instructor] In order to get the most out of this course, there are a few things that you need to know ahead of time.
>
> **[0:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=5)** Code editing techniques in at least one program editor.
>
> **[0:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=8)** I'll be working with Visual Studio Code and RubyMine in this course.
>
> **[0:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=12)** Experience with at least one modern programming language.
>
> **[0:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=15)** This course focuses on Ruby, but the techniques apply to any language.
>
> **[0:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=19)** You'll need to know your way around the terminal.
>
> **[0:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=21)** Nothing super advanced, but we will be using it from time to time.
>
> **[0:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=25)** Intermediate programming experience in at least one language is important, as is being comfortable writing and reading unit tests.
>
> **[0:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=32)** If you want to level up your skills in any of these areas, I encourage you to browse through the rest of the library.
>
> **[0:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=38)** There are many different courses which cover these topics in detail.
>
> **[0:42](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=42)** While not required, you might want to watch my [[Agile Software Development]]: Clean Code Practices course.
>
> **[0:47](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=47)** The material on that course pairs nicely with what is covered in this one.

> [!info]- Semantic Content
>
> **Tools:** visual studio (1), terminal (1)
> **CLI Commands:** ruby (1)
> **Code Keywords:** super (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Definitions
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=1)** - [Instructor] There are two terms that are central to this course, legacy code and technical debt.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=6)** When you mention legacy code, many people assume that you're talking about really old code that was created decades ago, but that's not always the case.
>
> **[0:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=13)** Many newer projects also have the problems that are associated with these older projects.
>
> **[0:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=19)** There are many different definitions of legacy code, with the most popular one being by Michael Feathers, which is simply that legacy code is code without tests.
>
> **[0:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=29)** I think that's an oversimplification, though.
>
> **[0:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=31)** The definition that I like best was developed by my business partner, Andrea Goulet.
>
> **[0:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=35)** She says that legacy code is code without sufficient communication artifacts to explain its intent.
>
> **[0:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=41)** And while tests are an excellent communication artifact, there are other communication artifacts, such as written documentation, and guess what?
>
> **[0:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=49)** The code itself is also a communication artifact.
>
> **[0:53](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=53)** All of these artifacts need to be nurtured to ensure that intent is preserved for the future.
>
> **[0:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=57)** The term technical debt was coined by Ward Cunningham.
>
> **[1:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=60)** He was attempting to find a metaphor which described the impact of a common practice he was noticing organizations follow.
>
> **[1:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=67)** They were cutting corners in a hope that it would help them ship new features faster, but while that may have worked in the short-term, it started to fail because the negative impact of cutting corners started to slow people down.
>
> **[1:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=80)** He likened this slowdown to having to pay interest on money that you've borrowed.
>
> **[1:24](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=84)** If you don't pay down the debt, the interest will continue to accumulate and soon, all of your efforts will be focused on making interest payments and very little will go towards paying down the principal.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=95)** This term has become extremely popular in the software industry and many organizations are coming to terms with the amount of technical debt that they need to pay down.
>
> **[1:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=103)** Every now and then, a team will decide that the only solution is to just rewrite the software system.
>
> **[1:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=109)** This is similar to having to declare bankruptcy to get out from underneath a very high debt load and it similarly does not always work.
>
> **[1:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=116)** If it is not paired with a behavior change, there's a very good chance the problem will repeat itself.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), continue (1)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started: Review the Technical Debt

#### Familiarize yourself
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=1)** - [Instructor] Suppose you've just been handed a code base that you've never worked on before.
>
> **[0:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=5)** You're probably wondering how you should get started and there is no one who can answer any questions that you might have.
>
> **[0:11](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=11)** That's a very intimidating and overwhelming situation, but you can get through it.
>
> **[0:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=15)** You just need to start hunting for the information that you need.
>
> **[0:18](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=18)** There are a few things you should look for right away.
>
> **[0:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=21)** How to build and run the application in a development environment.
>
> **[0:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=25)** You need to know how to build and run a development version of the code that you're working on.
>
> **[0:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=29)** You'll need to discover if there are any third-party applications or libraries that you need to install to get things going.
>
> **[0:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=36)** The information you'll need is most frequently found in a README file in the project's directory.
>
> **[0:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=41)** If there's no README file, or if it doesn't help, then look for other text files in the project's directory tree.
>
> **[0:47](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=47)** Sometimes there will be other text files at the root of a project or in a docs directory.
>
> **[0:53](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=53)** You might also find this information in a project wiki.
>
> **[0:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=57)** If you're not able to find any such instructions, then you'll have to figure that out later, but for now, it's best to keep looking around.
>
> **[1:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=63)** Another important thing to learn is whether or not the application has a test suite and what you need to do to run it.
>
> **[1:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=70)** You'll most likely find this in the same spot that you found the build and run instructions.
>
> **[1:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=75)** If not, then you can look for a test directory or any files with test in their name.
>
> **[1:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=80)** I find that it's pretty common to inherit a project that doesn't have any tests, so don't get too alarmed if it doesn't have one.
>
> **[1:27](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=87)** You'll also need to know how people use the project.
>
> **[1:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=90)** Any documentation that is targeted at an end user will be helpful on your journey.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=95)** Sometimes this information will be in the README, but I find that it's more commonly found in user-facing documentation, which might be located in a project wiki, a project website, or a manual that's embedded into the application itself.
>
> **[1:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=109)** The previous developers will have made a lot of small decisions along the way, and there's a good chance they've left you some notes about why they made them.
>
> **[1:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=116)** Dig around and see if you can find the source of their insights.
>
> **[2:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=120)** Some good places to look are in a project wiki, an issue tracker, and the source code repository's commit history.
>
> **[2:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=126)** Finally, and very importantly, you need to gain some insight into how and where the application is deployed.
>
> **[2:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=133)** I find this most often in a project wiki, but it can sometimes be found in a README or a deployment script.
>
> **[2:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=140)** If you weren't able to find any of that information, that's okay.
>
> **[2:24](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=144)** Now you know that you'll need to do some digging and some research to figure out the answers, but it's best to search for the obvious locations first.
>
> **[2:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=151)** Be sure to set some time aside to tackle the unknowns that you discover.
>
> **[2:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=156)** After looking for these bits of information, you're much smarter about the state of your project than you were before you started.
>
> **[2:42](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=162)** You probably found information that you weren't even looking for, but which might come in handy later.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8)
> **Env Vars:** readme (4)
> **Prerequisites:** you'll need (3), install (1)
> **Code Keywords:** finally, (1), for, (1)
> **Best Practices:** it's best to (2)
> **Documentation:** the readme (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Remember the prime directive
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=1)** - [Instructor] In the fictional Star Trek universe, the characters have one rule that is more important than all of the others.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=6)** They call it the Prime Directive.
>
> **[0:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=8)** Its details are not all that important for our discussion here, but what is important to know is that in the Star Trek universe, the Prime Directive is taking very seriously and is treated with a lot of respect.
>
> **[0:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=20)** Inspired by the idea of having one rule that's more important than all others, Norm Kerth crafted a prime directive for Agile teams to use during a retrospective.
>
> **[0:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=30)** "Regardless of what we discover, "we understand and truly believe "that everyone did the best job they could, "given what they knew at the time, "their skills and abilities, "the resources available, "and the situation at hand."
>
> **[0:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=45)** Tackling technical debt and working on legacy code is very similar to a retrospective exercise.
>
> **[0:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=51)** You're going to find yourself surrounded by the remnants of past decisions.
>
> **[0:55](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=55)** You're going to look at chunks of code and you're instantly going to think of better ways that it could have been constructed.
>
> **[1:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=61)** You're going to look at files and scratch your head, wondering why its contents were written that way.
>
> **[1:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=67)** And as you move through the historical artifacts that have been left behind for your discovery, ti's important to not judge the people who used to work on the project.
>
> **[1:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=75)** It can be extremely temping to find yourself asking disparaging questions like what idiot wrote this?
>
> **[1:23](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=83)** But your job isn't to point fingers and figure out who is to blame.
>
> **[1:27](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=87)** You're there to make the project better.
>
> **[1:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=90)** The best way to do that is to move forward, and moving forward is going to be easiest when you assume that everyone did their best.
>
> **[1:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=98)** You're going to do your best, right?
>
> **[1:39](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=99)** Of course you are.
>
> **[1:40](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=100)** No one shows up and intentionally makes poor decisions.
>
> **[1:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=104)** They make the best decisions they can, and you will, too.
>
> **[1:47](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=107)** Any time you spend thinking otherwise is a waste of time and energy.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Take ownership
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=1)** - [Narrator] When you inherit an older code base, it's important to realize that it's now yours.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=6)** Any of the bugs that are found are going to be your responsibility to fix.
>
> **[0:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=9)** And any new features that need to be added will need to be added by you.
>
> **[0:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=13)** It can be tempting to simply complain about all the decisions that were made differently than you would have made them.
>
> **[0:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=19)** Instead of doing that, it's much more productive to simply embrace your ownership of the application and take charge of it.
>
> **[0:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=26)** Let's consider a simple example.
>
> **[0:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=29)** Say you open the project and you find a bunch of files that are formatted differently than you would have formatted them.
>
> **[0:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=35)** In some cases, the difference between your preferred formatting and the one in the code is so different that you're finding it hard to read.
>
> **[0:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=43)** How should you handle that?
>
> **[0:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=45)** One way would be to force yourself to read the code the way it is.
>
> **[0:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=49)** This approach will likely slow you down and frustrate you.
>
> **[0:53](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=53)** You might even make mistakes because important, subtle details are hard to spot.
>
> **[0:58](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=58)** You could be tempted to blame these mistakes on the people who came before you and keep suffering through.
>
> **[1:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=63)** A better approach is to just reformat the code so that it's easier for you to read.
>
> **[1:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=69)** It doesn't matter that your preferences are different than the original developer's preferences, they are not working on the code anymore.
>
> **[1:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=75)** You get to make the decisions about how things should be formatted, and it makes the most sense to pick a format that works best for you.
>
> **[1:23](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=83)** This kind of approach works for more than just the simple things like how to format chunks of code.
>
> **[1:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=89)** It's important to adopt this way of thinking for other aspects of the application as well.
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=94)** You don't like the way a part of the system is architected?
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=96)** You can change it.
>
> **[1:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=98)** Don't like the version of a library that's being used?
>
> **[1:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=101)** You can upgrade it.
>
> **[1:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=103)** Don't like the testing tool that's being used?
>
> **[1:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=105)** You can switch to a different one.
>
> **[1:47](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=107)** The important thing to remember is that you are in control.
>
> **[1:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=111)** You have the power to make the code better, and you get to decide what that means to you.
>
> **[1:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=116)** The project is yours now, own it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** let (1), switch (1)
> **UI Navigation:** open the (1), switch to (1)
> **Speakers:** - [narrator] (1)

#### Set up a dev environment
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=1)** - [Instructor] In order to get any work done on your inherited project, you need to set up a development environment.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=6)** On many projects this can be particularly challenging.
>
> **[0:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=9)** Documentation can be missing.
>
> **[0:11](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=11)** Tools can be outdated or hard to install, or might not even be available for the operating system that you're running it on.
>
> **[0:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=17)** Numerous third-party libraries may be needed.
>
> **[0:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=20)** On some projects, sorting out all of these details can take days or weeks, and this time can be additionally stressful because it's nearly impossible to predict how long it's going to take to sort through it all.
>
> **[0:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=31)** This makes it very difficult to set expectations for people who are waiting for improvements to the system that you're working on.
>
> **[0:39](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=39)** Worse still, if another team member joins your project, they are likely to have all of the same problems.
>
> **[0:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=45)** So it's important to capture everything that you learn in a way that can be repeated in the future.
>
> **[0:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=51)** And when you have to replace your work station that information will come in handy even if you don't add another team member.
>
> **[0:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=57)** On many projects, Docker and Docker Compose are the perfect technologies to help address these issues.
>
> **[1:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=63)** Many teams discount using Docker for their development environment because they have no plans to use it in production.
>
> **[1:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=69)** However, these tools can yield impressive benefits, even on projects that will never use Docker in production.
>
> **[1:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=76)** Let's take a peek at what's required to use Docker and Docker Compose to work on an old Ruby project.
>
> **[1:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=82)** Here we're working with version 1.0 of the Sinatra project which was released in March of 2010.
>
> **[1:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=89)** Our goal is to be able to run the test suite without any failures and without having to change any of the library's code.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=95)** To do that we're using Docker and Docker Compose to construct a development environment that is very similar to what a developer might have used when the code was released.
>
> **[1:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=104)** This was prepared ahead of time.
>
> **[1:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=105)** But let's walk through everything that was done.
>
> **[1:48](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=108)** We'll start by looking at the Dockerfile.
>
> **[1:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=110)** The first line of this file is a FROM statement which specifies the Docker image to use as a starting point.
>
> **[1:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=116)** Here, we're using a community-provided image, which is designed to allow active development on projects that require using Ruby 1.9.3.
>
> **[2:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=126)** which was the Ruby version available at around the time the code that we're working on was released.
>
> **[2:11](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=131)** Other than specifying a Ruby version to use, the rest of this file just ensures that an app directory is created for us to work with.
>
> **[2:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=139)** Let's peek at the docker-compose.yaml file.
>
> **[2:23](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=143)** The first line specifies the version of the file format we're working with.
>
> **[2:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=149)** The services section is where we specify any services that are needed to run the app that we're working on.
>
> **[2:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=155)** Here we only have one service, but if we were working with a database, we'd add a service for launching the database engine.
>
> **[2:42](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=162)** We're specifying that the app service should be built using the Dockerfile in the same directory as the docker-compose.yaml file.
>
> **[2:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=170)** The next line down specifies a script to run each time the container starts.
>
> **[2:55](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=175)** Next is the volume configuration.
>
> **[2:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=177)** We mirror the current source directory inside the container as the app directory.
>
> **[3:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=182)** And the rest of this file configures caches which will be used to install any Ruby gems by bundler.
>
> **[3:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=188)** This will ensure that they don't need to be installed every time the app container starts.
>
> **[3:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=193)** Now let's take a peek at the docker-entrypoint.sh file which runs each time the app container is started.
>
> **[3:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=199)** This script simply checks to see if the dependencies have been installed and if not, goes ahead and installs them.
>
> **[3:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=206)** Now we can get a command line shell inside of our development environment by running docker-compose run app bash.
>
> **[3:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=217)** The very first time that this command is run it'll build a docker image using the details that we specified in the Dockerfile.
>
> **[3:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=224)** And then it'll start the container and run the entrypoint script which installs all of the gems first.
>
> **[3:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=230)** Once all the gems are installed we'll have a command shell inside of an isolated development environment for our application.
>
> **[3:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=237)** And if we want to make any changes to how the environment is built we just need to alter the Dockerfile.
>
> **[4:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=242)** This creates a form of documentation for our development environment which is executable.
>
> **[4:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=247)** And now we can run the test suite and see that everything is passing.
>
> **[4:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=252)** One final note, in order to get those tests passing, I had to add extra restrictions on the version numbers that this library is depending on.
>
> **[4:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=268)** I limited the dependencies to ones that were released at around the same time that this code was.
>
> **[4:33](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=273)** Before doing this, almost all of the tests were failing.
>
> **[4:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=276)** This exercise is pretty representative of how to use Docker and Docker Compose for creating a development environment for an older project.
>
> **[4:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=284)** And now that there's an isolated container to work within, it will be easier to make improvements to the project.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (16), ruby (5), make (2)
> **Code Keywords:** let (4), yield (1), require (1), this, (1)
> **File Paths:** docker-compose.yaml (2), docker-entrypoint.sh (1)
> **Versions:** version 1 (1), ruby 1 (1), 9.3 (1)
> **Prerequisites:** install (2), set up (1)
> **Tools:** command line (1), bash (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### Skim the code
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=1)** - [Instructor] When you start working on our project it's important to quickly build up a mental model of how the project is structured.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=6)** What's the basic purpose of the different files?
>
> **[0:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=9)** How are they organized?
>
> **[0:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=10)** Which part of the system is responsible for interacting with end users?
>
> **[0:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=14)** These are all really important questions but most projects have more code in them than one person could possibly read.
>
> **[0:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=21)** So how can you quickly gain a basic understanding of the project so that you can become more productive with it?
>
> **[0:27](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=27)** My preferred technique is to skim through files without trying to understand all of the details that I encounter.
>
> **[0:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=32)** There are many details that I come across that I won't understand.
>
> **[0:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=35)** Instead of trying to gain a complete understanding I make a note about these and then I keep reading.
>
> **[0:40](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=40)** The goal of this process is to open a bunch of different files and look at them.
>
> **[0:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=45)** Files can be selected randomly or you can just let your curiosity guide you.
>
> **[0:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=50)** You're not going to open up every file but you should try to open up at least one file from each of the different sections of the application.
>
> **[0:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=57)** Let's walk through a concrete example by looking at the source code for Sinatra version 1.0 a Ruby web application framework which was released back in 2010.
>
> **[1:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=67)** By reading through the file list we can see that there are no .rb files in the project's root directory so all of the code must live in different folders.
>
> **[1:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=76)** This project has two of them; lib and test.
>
> **[1:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=82)** From those names we can guess at what we might find.
>
> **[1:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=85)** The lib directory probably contains the library's implementation and the test directory likely contains the project's test suite.
>
> **[1:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=92)** We're making some assumptions here but that's common at this point.
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=96)** As you scan through your own project make a note of the assumptions that you're making so that you can go and validate them later.
>
> **[1:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=103)** Let's take a peek at the lib directory.
>
> **[1:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=105)** Here we see a folder and a file, sinatra and sinatra.rb.
>
> **[1:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=109)** My guess is that sinatra.rb is meant to serve as an interface for all of the files in the Sinatra directory.
>
> **[1:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=117)** Let's open that file and see if this assumption is correct.
>
> **[2:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=121)** Looks like a valid assumption.
>
> **[2:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=123)** Let's expand the sinatra folder.
>
> **[2:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=127)** Here we see a few files.
>
> **[2:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=129)** The last file that we looked at, sinatra.rb, referenced the main .rb in this folder.
>
> **[2:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=135)** So, let's start by taking a peek at it.
>
> **[2:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=139)** Skimming through it looks like this file is primarily responsible for handling command line parameters that are specified when a program using Sinatra is run.
>
> **[2:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=149)** On line one we see that it's referencing base.rb so let's take a peek at that file.
>
> **[2:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=157)** By quickly skimming through we see that base.rb contains several different classes which we can assume are working closely together.
>
> **[2:46](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=166)** This file has over one thousand lines in it so it's likely where we're going to spend the bulk of our time when we're working on this project.
>
> **[2:54](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=174)** The next thing to do would be to continue to skim through the classes in the base.rb file and try to gain an understanding of how they are all working together.
>
> **[3:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=182)** After that, a good thing to do would be to examine the different files that are being referenced at the top of base.rb.
>
> **[3:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=189)** With this technique we're not trying to gain an exhaustive understanding of the code base, that would take way too long, we're just trying to get a sense of where things are.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), interface (1), continue (1)
> **File Paths:** base.rb (4), sinatra.rb (3)
> **CLI Commands:** make (2), ruby (1), find (1)
> **Versions:** version 1 (1)
> **Tools:** command line (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)


### 2. Fence in the Technical Debt

#### Technical debt grows without tests
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=1)** - [Instructor] Automated tests are vitally important for making improvements to our code basis.
>
> **[0:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=5)** They act as a welcomed safety net, allowing us to make the changes that are needed to reduce technical debt without having to worry as much about unintended consequences.
>
> **[0:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=15)** When we get started on a project that we've inherited, before we try to make any improvements ourselves, we have to evaluate the quality of the system's test suite.
>
> **[0:24](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=24)** This evaluation is likely to uncover several different problems.
>
> **[0:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=28)** In an ideal world, every project that we inherit will have a healthy test suite which is easy to run, has only tests that pass, and has a code coverage metric that is sufficiently high for the parts of the application that need to change.
>
> **[0:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=41)** However, I frequently encounter systems that have no test suite, have a test suite with no clear way of running it, or have a test suite where some or all of the tests are failing.
>
> **[0:53](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=53)** And rarely do the systems I inherit have test suites with high coverage in the areas that I want to make improvements to.
>
> **[1:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=60)** There are a few ways to conquer this problem.
>
> **[1:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=62)** We can create test suites if we find one is missing.
>
> **[1:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=65)** We can discover how to run an undocumented test suite.
>
> **[1:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=68)** We can handle any failing test that we come across.
>
> **[1:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=72)** We can build out test coverage if we find it to be lacking.
>
> **[1:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=75)** So don't despair if the state of the test suite isn't where you want it to be.
>
> **[1:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=80)** You'll get it there.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** pass (1)
> **Speakers:** - [instructor] (1)

#### Create a test suite (if one is missing)
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=1)** - [Instructor] The first thing that we need to investigate about our project's test suite is whether or not it even has one.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=6)** If it does have one, great.
>
> **[0:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=8)** We'll cover the improvements that we can make to it in further videos.
>
> **[0:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=12)** But, if it doesn't have one, then it's important for us to create one.
>
> **[0:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=16)** Creating a test suite may sound daunting, but it really doesn't have to be.
>
> **[0:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=20)** You might be imaging creating a test suite with a high degree of test coverage, but that's not a reasonable goal when you're just getting started.
>
> **[0:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=28)** Instead, we need to focus on creating an automated test suite that contains just one test.
>
> **[0:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=34)** Why are we starting so small?
>
> **[0:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=36)** Well, there are a lot of small, but important, details that we'll sort out along the way towards creating a test suite with just a single test in it.
>
> **[0:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=44)** First, we need to decide which testing framework we're going to use.
>
> **[0:48](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=48)** The language that you're working in might have a bunch of different choices to choose from, which is how it is in the Ruby ecosystem.
>
> **[0:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=56)** Other language ecosystems may limit your choice to just one testing framework.
>
> **[1:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=60)** Regardless, we need to pick one and get it installed.
>
> **[1:04](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=64)** Second, we need to write a very simple failing test with the testing tool that we selected.
>
> **[1:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=70)** I typically make this test validate something that couldn't possibly be true, like asserting that one equals two.
>
> **[1:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=76)** That's something that we know is going to fail.
>
> **[1:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=79)** I think of this as a hello world program for a test suite, and I start with a failing test because I want to observe what failing tests look like in the testing framework that I've selected.
>
> **[1:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=89)** Finally, we can replace our failing test by writing a simple passing test that validates a tiny aspect of the program that we're working with.
>
> **[1:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=98)** This will ensure that our testing code is able to ask questions about the system we're testing.
>
> **[1:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=103)** Once we've done all of that, we'll have a test suite with just a single passing test.
>
> **[1:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=109)** But, in creating that super simple test suite, we'll have built a small foundation that we can continue to build upon as we work with the project.

> [!info]- Semantic Content
>
> **Code Keywords:** from, (1), finally, (1), super (1), continue (1)
> **CLI Commands:** make (2), ruby (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Run the test suite
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=1)** - [Instructor] After you take the time to verify that your system has a test suite, the next step is figuring out how to run it.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=6)** On some projects, you'll find documentation for how to run the test suite in the project's readme.
>
> **[0:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=12)** But if that documentation does not work, or if it's not there at all, then you'll have to do some investigation to figure out how to run the test suite.
>
> **[0:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=20)** A good first place to start if you're using an IDE is to try to run the test suite from there.
>
> **[0:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=25)** This can often be done by right-clicking on one of the test files and choosing the menu items that mentions running the test file that you've selected.
>
> **[0:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=36)** Here we see we got an error, which suggests this IDE does not integrate well with the test suite that's being used.
>
> **[0:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=43)** If you're not using an IDE or your IDE does not support running tests directly, then you'll need to find another program to run your tests.
>
> **[0:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=51)** Most modern test frameworks give you the option of running tests from the command line.
>
> **[0:55](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=55)** You'll need to find the documentation for the test framework that your project is using to find the exact details.
>
> **[1:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=60)** For this project, there's a rake file script that has been set up to run the test, and simply running that command will run the test for us.
>
> **[1:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=69)** Getting the test to run is a task that will likely require a fair bit of trial and error.
>
> **[1:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=74)** Stick with it and you'll figure it out.
>
> **[1:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=76)** And remember, the goal right now isn't to get the test passing, just running.
>
> **[1:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=81)** We'll work on getting them passing later.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Env Vars:** ide (4)
> **Prerequisites:** you'll need (2), set up (1)
> **Code Keywords:** require (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Handle failing tests
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=1)** - [Instructor] It's very common to inherit a project that has a test suite but when you run those tests you discover some of them are failing.
>
> **[0:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=8)** It's important that you get the test suite into a state where all of the tests are passing.
>
> **[0:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=12)** This will allow you to trust the test suite when you encounter a failure and you can confidently use it as a tool to help you make improvements to the system.
>
> **[0:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=20)** There are a couple of ways that you can handle the situation but before we go over them we need to talk about how we're going to treat the failing test that we encounter on the project.
>
> **[0:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=30)** It's going to be unclear how old the tests are and it's very possible the test suite has just been ignored by the previous developers.
>
> **[0:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=37)** This mean the tests have very likely gotten out of sync with the production code they are evaluating but the system is very likely still being used or else no one would ask you to work on it.
>
> **[0:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=49)** And that means the people who use the system are the ultimate authority on whether or not it's working correctly.
>
> **[0:54](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=54)** So in the event of confusion about which is correct, the test code or the production code, we are going to assume the production code is correct.
>
> **[1:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=62)** That assumption is going to inform the choices that we are going to make as we tackle cleaning up the failing tests.
>
> **[1:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=69)** So how do we go about cleaning up the failing tests?
>
> **[1:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=72)** We tackle each one at a time and for each one we follow a series of steps to determine what to do.
>
> **[1:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=79)** First, we check to see if a dependency is causing the problem.
>
> **[1:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=82)** The version that you have might be too new and is not compatible with the code that's under test.
>
> **[1:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=88)** Explore this scenario in detail, especially if the failure is caused by an exception.
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=93)** Next, make an attempt to fix the failing test.
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=96)** Sometimes the fix is as simple as changing a constant value that's specified in an assertion statement.
>
> **[1:42](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=102)** In these cases it is fairly clear which changes need to be made to get the test passing again so we make changes until the test is passing.
>
> **[1:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=111)** If there was no clarity about how to fix the test then we move onto the next step where we simply just delete the failing test.
>
> **[1:58](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=118)** This situation often comes up when working on a code base that has undergone significant architectural changes since the test was originally written.
>
> **[2:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=127)** In that case the test is simply too far out of sync with the production code to provide any meaningful value.
>
> **[2:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=133)** Deleting the test is the best thing to do in that situation.
>
> **[2:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=136)** We repeat those steps for each failing test until we're left with a test suite that contains only passing tests and then we're ready to make improvements to the application with the confidence that any future failures we see in the test suite will be the result of changes that we've made to the production code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** delete (1)
> **Speakers:** - [instructor] (1)

#### Build out test coverage
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=1)** - [Instructor] Test coverage is a measure of how much of your production code is executed when your test is run.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=6)** There is a healthy debate about how much test coverage is enough.
>
> **[0:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=10)** But in general, more is better than less or none.
>
> **[0:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=13)** While 100% is going to be impossible to reach for many projects.
>
> **[0:18](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=18)** When you go to clean up a chunk of code, it's very important to have high code coverage for that chunk of code.
>
> **[0:23](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=23)** Even if coverage is low across the rest of the code base.
>
> **[0:27](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=27)** The trouble is, not all code is easy to test, especially using traditional unit testing techniques.
>
> **[0:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=34)** That's where employing a different testing technique can be a big help.
>
> **[0:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=38)** One solution that works really well, is the Approval Tests testing library.
>
> **[0:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=43)** Approval Tests allow you to capture an artifact of the code's current behavior and then compare that artifact against one that you captured earlier and declared was correct.
>
> **[0:53](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=53)** This is sometimes referred to as the golden master technique.
>
> **[0:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=57)** Let's walk through an example of doing that with an older Ruby gem for parsing dates, called Chronic.
>
> **[1:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=63)** While this code is written in Ruby, you can find an implementation of the Approval Tests library in almost any language.
>
> **[1:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=70)** Here I have a test that I created which uses the Approval's Ruby gem.
>
> **[1:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=74)** This test loops over a large set of examples, which I copied and pasted from the Chronic README.
>
> **[1:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=81)** In then builds a hash containing the parsed date for each of those examples.
>
> **[1:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=86)** Notice that I'm not actually specifying any expected output in this test, I only specify the inputs.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=95)** So let's run this test.
>
> **[1:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=104)** Here we see that this test is failing because it's looking for an approved file which contains the expected output.
>
> **[1:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=111)** Let's look at the received file that it create for us.
>
> **[1:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=117)** Here we see all of the examples that we specified earlier in the result of running them through our test.
>
> **[2:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=123)** To make our test pass, let's do a save as and change the name to include approved instead of received.
>
> **[2:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=136)** Now we can run the test and see that it's passing.
>
> **[2:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=142)** Let's go back to the code and make a small change to the test to simulate what the output would look like if this test caught a bug.
>
> **[2:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=151)** Here we're just changing the date that's used to simulate now.
>
> **[2:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=157)** We go back and run the test suite again and here we get an error saying that the received file doesn't match the approved file.
>
> **[2:46](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=166)** If we open up both of them in the text editor, we can see that the reason that they don't match is because the contents in the received file are a year off the contents of the approved file.
>
> **[3:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=182)** Which is consistent with the change that we made to simulate the failure.
>
> **[3:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=186)** This can be a great technique for adding a lot of coverage really fast.

> [!info]- Semantic Content
>
> **CLI Commands:** ruby (3), make (2), find (1)
> **Code Keywords:** let (5), pass (1)
> **Definitions:** is a  (2)
> **Env Vars:** readme (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Build dependency behavior tests
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=1)** - [Narrator] Chances are, your project relies on a lot of external libraries to implement all of the functionality that's contained inside of it.
>
> **[0:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=7)** There are libraries for interacting with databases, reading XML documents, making HTTP, the list goes on.
>
> **[0:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=15)** These libraries reduce the amount of code that you have to write in order for your project to do its job.
>
> **[0:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=21)** And that's good because it allows your project to focus on the things that it does well.
>
> **[0:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=26)** All of these dependencies do have a shadow side though.
>
> **[0:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=30)** If you don't keep them up to date, they become their own form of technical debt.
>
> **[0:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=35)** You'll likely find yourself in a situation where you need to upgrade one of these dependencies.
>
> **[0:40](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=40)** This often happens when a security vulnerability has been patched.
>
> **[0:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=43)** Another common scenario is to have to switch to a different but similar dependency.
>
> **[0:48](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=48)** This can happen when the old dependecy is no longer supported and receiving updates.
>
> **[0:54](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=54)** Changes of this type can be stressful, because you'll find yourself wondering if the project will break when you switch the newer version of the dependecy, if your library is still supported, and it becomes even more stressful when you find yourself in a situation where you have to switch to an entirely different dependency.
>
> **[1:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=70)** In these situations, having a lot of tests that wrap your external dependencies can be very helpful.
>
> **[1:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=75)** The goal of these tests is not to exhaustively test your external dependencies, instead, these tests are used to test the parts of those dependencies that you consume.
>
> **[1:27](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=87)** And these don't need to be run all the time either.
>
> **[1:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=89)** They can be reserved for a part of your build process that only gets run when a dependecy is updated.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=95)** Once you have these tests in place, updating your dependencies will much less stressful.
>
> **[1:40](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=100)** When you find yourself needing to switch to a different dependency, you'll also have a good template for evaluating how much of your system will need to change to adopt the different dependency.
>
> **[1:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=111)** These tests could also form a template for helping you build out a facade that sits between your app and the third-party dependecy.
>
> **[1:59](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=119)** That's a good design choice when you want to insulate your application from the dependencies that it's using.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Keywords:** switch (4)
> **Env Vars:** xml (1), http (1)
> **Exercise Files:** template (2)
> **Speakers:** - [narrator] (1)


### 3. Improve Your Tools

#### Aging tools make technical debt worse
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=1)** - [Instructor] Imagine you're making improvements to a house that was built 200 years ago.
>
> **[0:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=5)** Before you get started, would you go to the store and buy a bunch of 200-year-old tools?
>
> **[0:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=10)** Hand drills and saws?
>
> **[0:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=12)** Nails fashioned by the local blacksmith from sheets of iron where you'd be lucky to have two nails that are the exact same shape and size?
>
> **[0:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=19)** No, of course not.
>
> **[0:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=21)** You would get the most modern tools that you can buy.
>
> **[0:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=25)** That likely means drills and saws that are powered by electricity and utilize electric motors that do most of the work, and all of the nails that you'd buy would be the result of mass production and high-precision and machined manufacturing, ensuring that each nail is almost exactly like all the others in the box.
>
> **[0:42](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=42)** So what does all this have to do with software?
>
> **[0:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=45)** Well, time and time again when people get started on a project that they've inherited, they hunt down all the old tools that were used by the previous team and then they just keep using them.
>
> **[0:55](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=55)** Language versions that are 10 years out of date, frameworks that are no longer maintained because the companies that created them have ceased operations, integrated develop environments that are incompatible with the latest operating system versions, no automated tests because there were no automated testing frameworks available when the original code was developed.
>
> **[1:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=74)** And too many teams just accept this as their reality when they inherit an older project.
>
> **[1:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=79)** They keep working day after day on an old code base using old tools and they resent it because they feel the rest of the industry is rapidly leaving them behind, making it incredibly hard for them to get another job if their current one gets canceled.
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=94)** Tolerating old tools is the easiest way to hate working on a project that you've inherited from someone else.
>
> **[1:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=101)** So what should you do instead when you find yourself working on a project with aging tools?
>
> **[1:46](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=106)** Go to the hardware store and grab some upgrades.
>
> **[1:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=110)** Figure out how to make them part of your workflow.
>
> **[1:52](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=112)** Find creative ways to get the older code running in a new context.
>
> **[1:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=117)** This can be an incredibly rewarding challenge and the benefits can be astounding.
>
> **[2:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=123)** Once you've modernized all of the tooling, you'll have a much easier time researching solutions to problems, you'll stop worrying about your skills becoming stagnant, and you'll be able to take advantage of newer techniques that have been developed to make your life easier.
>
> **[2:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=139)** This transition is not always easy and it is very rarely fast.
>
> **[2:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=145)** So you may have to continue working on your project in less than ideal conditions.
>
> **[2:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=150)** But you should also take the time to chart a course towards using newer tools.
>
> **[2:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=156)** The key is to never tolerate the status quo.
>
> **[2:39](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=159)** Constantly find ways to improve your tools, even after you've adopted the latest versions that are available.
>
> **[2:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=165)** That creates an opportunity for you to craft new tools that are specific to your project.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (2)
> **Code Keywords:** else. (1), continue (1)
> **UI Navigation:** go to (2)
> **Analogies:** imagine (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Introduce dependency management
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=1)** - [Instructor] On many older projects, third party dependencies are managed in a wide variety of ways.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=6)** Some projects copy these dependencies directly into the project source tree.
>
> **[0:11](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=11)** Some projects rely on manually running installation packages which might be stored in a team accessible file sharing service, such as a simple FTP server.
>
> **[0:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=21)** Other projects simply list the dependencies in a README file, and trust that the people who are working on the project will know where to access the dependencies and how to install them.
>
> **[0:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=31)** And worst of all, some projects have no documentation for what third party dependencies are used.
>
> **[0:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=37)** Regardless of what state you find the project you're working with, it's best to move towards keeping track of all of the dependencies using some form of dependency management system.
>
> **[0:48](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=48)** These systems exist for almost every programming language environment, and their most basic purpose is to allow you to specify the dependencies that you are using, including the exact version and often a range of versions that are expected to be compatible.
>
> **[1:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=63)** Since this information is then used by a script to acquire and install all of these dependencies for you, you now have your dependencies to find in an executable form that is also human readable.
>
> **[1:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=75)** Executable documentation is my favorite kind of documentation.
>
> **[1:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=79)** Dependency management systems are not just limited to being aware of your projects direct dependencies, but they are also aware of the dependencies of the packages that you're asking for.
>
> **[1:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=90)** The system will detect when there are incompatibilities between the packages that are specified and will prevent you from installing them.
>
> **[1:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=97)** For example, if your system is designed to work with packages Alpha 2.0 and Beta 1.5, and both of those packages at those versions require different incompatible versions of a package named Delta, then the package management system will detect this for you and alert you that you need to make some adjustment to the version of either package Alpha or package Beta.
>
> **[2:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=121)** Examples of these dependency management systems are Bundler for Ruby, pip for Python, Cargo for Rust, npm or Yarn for JavaScript, Composer for PHP, Buckaroo or Conan for C++, NuGet for C# or any other .NET language, and Maven or Gradle for Java and other JVM languages.
>
> **[2:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=142)** There are many, many more systems that I have not named.
>
> **[2:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=146)** If you find yourself working with a language that doesn't have such a system, I encourage you to consider building one.
>
> **[2:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=152)** The community that's working with a language will surely thank you.
>
> **[2:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=155)** Moving towards a dependency management system is something that does need to be done with care.
>
> **[2:40](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=160)** Make sure you have enough test coverage so that you feel comfortable with the effort.
>
> **[2:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=164)** Once you feel you have enough test coverage, take it slow.
>
> **[2:48](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=168)** One dependency at a time is best.
>
> **[2:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=170)** For each one, make sure the dependency manager is configured to use the exact same version of the dependency that's being used by your system already.
>
> **[2:58](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=178)** Run the test suite often and make sure that everything is still passing.
>
> **[3:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=182)** If you encounter a stumbling block with a particular dependency, just skip it and proceed with another one.
>
> **[3:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=188)** After you take care of all the easy ones, you can loop around and tackle the harder dependencies.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (3), ruby (1), pip (1), python (1)
> **Env Vars:** ftp (1), readme (1), php (1), net (1), jvm (1)
> **Prerequisites:** install (2), make sure you have (1)
> **Code Keywords:** for. (1), require (1)
> **Versions:** 2.0 (1), 1.5 (1)
> **Analogies:** such as (1), for example (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Update dependencies and tools
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=1)** - [Instructor] There is no need to tolerate working with old tools on an older project.
>
> **[0:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=5)** So don't.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=6)** There are a couple of things that you need to care of before you dive in and start upgrading though.
>
> **[0:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=12)** You need to make sure that your test suite provides enough coverage for you to be comfortable with the effort.
>
> **[0:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=16)** If you're not there yet, then you'll need to continue working with the older dependencies until you are.
>
> **[0:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=22)** Along with the test coverage, it's also a good idea to make sure that you're third party dependencies are managed by a dependency management system.
>
> **[0:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=29)** If you're not there yet, then it's best to make that transition before you start upgrading anything.
>
> **[0:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=35)** Assuming that you've got decent test coverage and all of your dependencies are managed by a dependency management system, then you're ready to start upgrading.
>
> **[0:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=43)** Probably the best place to start, is with your integrated development environment, or IDE, assuming your project is using one.
>
> **[0:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=49)** Upgrade to the newest version of the IDE that's available.
>
> **[0:52](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=52)** IDE manufacturers are constantly shipping out new features and improvements to increase developer productivity and it's very, very rare that a newer version is less capable than an older version.
>
> **[1:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=63)** So everything should work out fine.
>
> **[1:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=65)** After you've done the IDE upgrade, make sure your project builds and that the test suite is still passing.
>
> **[1:11](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=71)** If you run into a snag, chances are you are not the first person who encountered an issue when upgrading.
>
> **[1:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=77)** Do some research and hunt for a work around.
>
> **[1:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=79)** Don't just give up because you hit a small snag.
>
> **[1:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=82)** If your project isn't using an IDE, do some research to see if there are some language and tool specific integrations for the editor that you're using.
>
> **[1:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=89)** Again, these are designed to make you more productive, so it's worth spending a little more time to hunt and do a little bit of research.
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=96)** Once you've got an editing environment that you're happy with, it's time to start upgrading the dependencies that your project is working with.
>
> **[1:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=104)** Take these one at a time.
>
> **[1:46](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=106)** Pick one and bump the version number.
>
> **[1:48](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=108)** Run your test suite.
>
> **[1:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=109)** If everything passed, then awesome.
>
> **[1:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=111)** Check in your progress and move onto the next one.
>
> **[1:54](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=114)** If you hit a snag, skip it, and move on to the next one.
>
> **[1:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=117)** The goal is to just update one dependency and run the test suite.
>
> **[2:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=121)** This way, if the test suite fails, you'll have a good idea about which dependency is causing the failure.
>
> **[2:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=127)** Change too many dependencies at once, and it becomes next to impossible to determine which of your dependencies is causing the failure.
>
> **[2:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=134)** You'll typically encounter a situation where multiple dependencies have to be upgraded at the same time because one of them depends on the other.
>
> **[2:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=141)** In that situation, you will have to upgrade more than one dependency at once.
>
> **[2:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=146)** But save these situations until you've upgraded everything else first.
>
> **[2:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=150)** You're also likely to run into a situation where one of the dependencies isn't maintained anymore, and it'll block your progress to upgrade other dependencies.
>
> **[2:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=158)** In that situation, there's usually a migration path to a different dependency that performs a similar function.
>
> **[2:45](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=165)** Again, do a little bit of research to find alternatives.
>
> **[2:48](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=168)** And remember that you're probably not the first person to take on such a challenge.
>
> **[2:53](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=173)** Also, having dependency behavior tests will be really helpful if you find yourself having to switch from one dependency to another.
>
> **[3:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=180)** Eventually, you will hit the point where everything is up to date.
>
> **[3:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=183)** This effort may take months or years, and it's probably not something you're going to have enough energy to tackle all at once.
>
> **[3:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=190)** That's okay.
>
> **[3:11](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=191)** Slow and steady, you'll get it done eventually.
>
> **[3:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=194)** And once you have everything up to date, you'll be much happier.
>
> **[3:18](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=198)** You'll have less stress about security vulnerabilities.
>
> **[3:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=201)** You'll be working with the latest versions, so documentation and community help will be easier to find.
>
> **[3:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=206)** You won't feel like your skills are stagnating.
>
> **[3:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=209)** I could go on.
>
> **[3:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=210)** The short version is that it will be worth it when you're done.
>
> **[3:33](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=213)** So stick with it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (3)
> **Env Vars:** ide (5)
> **Code Keywords:** continue (1), function (1), switch (1)
> **Best Practices:** it's best to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 4. Pay Down Technical Debt

#### Remove noise and distractions
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=1)** - [Instructor] It's very hard to read a book or write an article when you're surrounded by noise and distractions.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=6)** They make it hard to concentrate, think, and focus.
>
> **[0:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=9)** They slow you down.
>
> **[0:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=10)** You can still get the task done, but it's much harder than it needs to be.
>
> **[0:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=14)** The same is true when you're working with code.
>
> **[0:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=17)** What's even worse, is when the code that you're working on, is the very source of the noise and distraction that you're fighting against.
>
> **[0:23](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=23)** There are several forms of noise and distraction that you need to remove with impunity.
>
> **[0:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=28)** Don't ask for permission, either.
>
> **[0:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=30)** Just do it.
>
> **[0:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=31)** Remember, this is your project, and you've made a commitment to take ownership of it.
>
> **[0:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=36)** Commented out code should just be deleted as soon as you see it.
>
> **[0:39](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=39)** Finding it is a sign of either a past developer who was in a hurry, or a sign of someone who was afraid that knowledge would get lost.
>
> **[0:47](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=47)** At this point, you have no way of knowing which of these two scenarios created the commented out code.
>
> **[0:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=51)** But in either case, it's perfectly safe for you to delete the comment.
>
> **[0:55](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=55)** If it was the first scenario, the developer meant to delete it, but forgot.
>
> **[1:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=60)** In the second scenario, the developer was afraid of losing the code.
>
> **[1:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=63)** But it's in the source control system, the ultimate arbiter of the code's history.
>
> **[1:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=68)** So next time you see commented out code, delete it.
>
> **[1:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=70)** Don't think about it, just delete it.
>
> **[1:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=74)** Poorly formatted code can be extremely difficult to read.
>
> **[1:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=77)** If you come across such code, just reformat it.
>
> **[1:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=80)** Chances are you IDE or text editor has the ability to reformat large chunks of code for you.
>
> **[1:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=86)** The only caution here is to try to avoid making any logic changes as part of the seem commit, which includes formatting changes.
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=94)** Doing so can make logic changes harder to read.
>
> **[1:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=97)** Instead, keep the formatting changes in their own commit.
>
> **[1:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=101)** This way, anyone who is curious about your logic changes will be able to see those in their own commit and won't have to decipher the formatting changes at the same time.
>
> **[1:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=110)** If you're working with a complied language, it's important to pay attention to compiler warnings.
>
> **[1:55](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=115)** These are designed to alert you to potential mistakes that might exist in the code.
>
> **[2:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=120)** Typically, when I start working on an older project, there are hundreds of such warnings.
>
> **[2:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=125)** If your project is in that state, sitting down to address all the compiler warnings is not very practical.
>
> **[2:11](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=131)** Instead, make a commitment to address the compiler warnings for any files that you change.
>
> **[2:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=136)** Hopefully, you'll eventually hit the point where there are none.
>
> **[2:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=140)** And if you aren't able to get there, most compilers provide the option to treat warnings as if they are errors.
>
> **[2:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=146)** This ensures that you're not able to ignore the warnings and makes it more likely that they'll be addressed in the future.
>
> **[2:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=152)** Similar to compiler warnings, runtime warnings are another source of noise.
>
> **[2:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=157)** In dynamic languages, the content of these warnings is very similar to what would be reported in a compiled language.
>
> **[2:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=164)** In both complied and dynamic languages, runtime warnings are likely to include information about features that have been deprecated and will be removed in the future.
>
> **[2:53](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=173)** Such messages often have guidance about how best to address them.
>
> **[2:58](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=178)** Since runtime warnings are only generated when your application is running, you'll need to make sure that you're paying attention to them.
>
> **[3:04](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=184)** Sometimes, that will mean storing such messages in a place that they can be read later.
>
> **[3:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=188)** Luckily, if you've accumulated significant test coverage, the test runners output will likely include warning messages.
>
> **[3:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=195)** This will make the runtime warnings easier to spot and confirm that they've been addressed.
>
> **[3:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=200)** In general, it's important to remove any noise that you come across.
>
> **[3:24](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=204)** When there's a bunch of noise, it's not feasible to remove it all at once.
>
> **[3:27](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=207)** Instead, just chip away at the noise in the files that you're working on.
>
> **[3:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=212)** This will ensure the distractions are getting removed as you're making other important improvements to the project.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** delete (4), case, (1)
> **Warnings:** caution (1), warning (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Read by refactoring
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=0)** - [Instructor] Chances are that you've encountered a chunk of code that was so difficult to understand, you didn't even know where to begin.
>
> **[0:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=7)** Situations like that are perfect candidates for the read by refactoring technique that was first created by Arlo Belshee.
>
> **[0:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=13)** As the name implies, this technique involves employing refactoring to make changes to the code as you're reading it.
>
> **[0:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=19)** More specifically, the changes that you're making are very small.
>
> **[0:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=22)** And each one is attempting to capture some understanding that you've gained from reading the code.
>
> **[0:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=28)** For example, if you encounter a variable with a name that doesn't clearly indicate how it's used, you can study the code a little bit to gain a better understanding of what that variable is doing.
>
> **[0:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=38)** And then use the renamed variable refactoring to improve the variables name.
>
> **[0:42](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=42)** Here on the screen, we have a small method from the Ruby Sinatra library.
>
> **[0:46](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=46)** We're specifically looking at version 1.0, which was released back in 2010.
>
> **[0:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=51)** This method has a variable named "op."
>
> **[0:54](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=54)** Which might cause some confusion.
>
> **[0:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=56)** Is it short for operation or operator?
>
> **[0:58](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=58)** Or is it meant to indicate that it's instance of options parser.
>
> **[1:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=62)** I think it's the latter, but I want to make that more clear by renaming the variable to parser.
>
> **[1:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=70)** There, that's better.
>
> **[1:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=73)** Here's another example.
>
> **[1:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=74)** Suppose you're looking at a very complex method and you're trying to understand what's going on.
>
> **[1:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=79)** What often happens in these cases, is that the code inside the method is chunked into lines that resemble paragraphs, because of the spacing that's used to separate them from the surrounding code.
>
> **[1:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=88)** You can use the extract method refactoring to move that chunk of code into a method.
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=93)** And when you name it method, you attempt to describe what that chunk of code does.
>
> **[1:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=97)** The invoke method on the screen is a good example of such a method.
>
> **[1:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=101)** On the first line of the method, a call is made, and the result of that call is stored in a variable named res.
>
> **[1:47](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=107)** There rest of the method focuses on how that result should be handled.
>
> **[1:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=110)** Let's extract some methods to make it more clear what's going on.
>
> **[1:55](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=115)** This first block is dealing with a scenario when res is a string.
>
> **[1:59](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=119)** So we'll extract that into a method called handle string.
>
> **[2:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=125)** This message is asking us if we want to replace similar instances in our code.
>
> **[2:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=129)** We're going to say no here, 'cause we want to just focus on this area.
>
> **[2:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=133)** This next block is handling the scenario when res is an array.
>
> **[2:18](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=138)** So we'll extract that into a method named handle array.
>
> **[2:27](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=147)** This block is dealing with the situation when res is an enumerable.
>
> **[2:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=151)** So we'll extract it into handle enumerable.
>
> **[2:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=158)** And again we're going to say no.
>
> **[2:42](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=162)** And finally, this block is for when a response is an http status code.
>
> **[2:47](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=167)** So we're going to extract it into a method called handle status code.
>
> **[2:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=176)** And again, say no.
>
> **[3:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=180)** And finally, we can go ahead and extract this whole chunk into a method.
>
> **[3:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=188)** And we'll call it handle result.
>
> **[3:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=194)** Now the invoke method is a little bit easier to understand because those chunks of code have been replaced with a simple method call.
>
> **[3:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=201)** What you're left with, is code that's not only easier to understand, but is imbued with the insights that you've gained while reading through it.
>
> **[3:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=209)** This is a fantastic technique for working with older code and I encourage you to practice it as often as you can.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (3), short for (1)
> **CLI Commands:** make (3), ruby (1)
> **Code Keywords:** finally, (2), let (1)
> **Versions:** version 1 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Isolate external services and devices
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=1)** - [Narrator] Many software systems interact with services and devices that the development team has very little control over.
>
> **[0:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=7)** These external services and devices likely contribute a very important part of the end user's overall experience.
>
> **[0:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=15)** But since they are outside of the development team's control, it's difficult to predict how the software system will react in every scenario.
>
> **[0:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=22)** This makes testing very difficult, especially because it can be a challenge to force the external system to behave in unpredictable ways.
>
> **[0:29](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=29)** External devices have other issues.
>
> **[0:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=32)** Many of them are expensive making it difficult to purchase one for every member of your team.
>
> **[0:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=37)** Some of them are very large, an industrial CNC machine is not something that you can have sitting on your desk.
>
> **[0:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=44)** Connecting them to a continuous integration environment can be a challenge, especially if your team wants to use a continuous integration service that's hosted in the cloud.
>
> **[0:52](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=52)** The cloud providers don't publish an address where you have hardware shipped and then connected to their servers.
>
> **[0:57](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=57)** Both services and devices also add difficulty when new versions are released.
>
> **[1:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=62)** The new version could have behavior changes that are not compatible with assumptions that are built into your app.
>
> **[1:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=68)** There are a few things that you can implement which will alleviate most of the problems which arise when working with external services and devices.
>
> **[1:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=75)** The first is to try to build a facade, or a part of the software system that handles all communication with the service or device.
>
> **[1:22](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=82)** And this part of your project is the only part that talks to the service or device directly.
>
> **[1:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=86)** It's one consistent interface for all of your project to use to communicate with a service or device.
>
> **[1:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=92)** Now that you have that separation built, you can start to do some interesting things with it.
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=96)** You can build a simulator for your service or device.
>
> **[1:39](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=99)** Ideally, you'll be able to set this simulator to behave in different ways, behaviors that are difficult to get the actual device to do.
>
> **[1:47](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=107)** And because this simulator is controlled by your team, you can make changes to it as needed.
>
> **[1:51](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=111)** You can also use the simulator for building out tests that run in an isolated environment without needing access to the actual service or device.
>
> **[1:59](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=119)** Now this won't cover all kinds of testing, you'll still want to be able to run some tests, both manual and operated, with an actual service or device.
>
> **[2:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=127)** Extra flexibility that you'll gain from having a simulator will be a big benefit in the long run.
>
> **[2:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=133)** Similar to simulating the service or device, you can use the interface between your project and the service or device, to simulate your app.
>
> **[2:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=141)** This could allow you to write scripts that behave similarly to how your app would behave, allowing you to write tests to verify the functionality of the service or device.
>
> **[2:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=150)** This capability will come in handy whenever you need to upgrade to a new version of the service or the next edition of a device.
>
> **[2:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=158)** By moving in the direction of these techniques, you'll be unlocking a lot of flexibility for your project.
>
> **[2:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=163)** Getting there won't happen overnight, but it will be well worth the effort once you're done.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2)
> **CLI Commands:** make (1)
> **Env Vars:** cnc (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### Code like a scientist
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=1)** - [Instructor] "I don't always test my code, "but when I do, it's in production."
>
> **[0:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=5)** I'm not sure who I should attribute this quote to, but it's always made me laugh.
>
> **[0:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=9)** I have worked with people over the years who've shared this attitude.
>
> **[0:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=12)** Heck, I was a person with that attitude long, long ago, before I discovered how much I enjoyed testing.
>
> **[0:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=17)** But what if this wasn't a joke?
>
> **[0:20](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=20)** What if you could actually test in production?
>
> **[0:23](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=23)** Turns out with the right tools, you can.
>
> **[0:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=26)** A few years ago, GitHub released a Ruby library that they aptly called Scientist.
>
> **[0:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=31)** This library lets you craft an experiment to see if a refactoring behaves exactly the same as the code that it's replacing.
>
> **[0:38](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=38)** The experiment is safely conducted in production using production computing resources and production data.
>
> **[0:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=44)** The results of running the experiment will let you know whether or not your refactored code has the same behavior as the original that it's meant to replace.
>
> **[0:52](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=52)** And if you're not working with Ruby, you're in luck, because Scientist has been ported to a long list of programming languages, and if it hasn't been ported to the language that you're using, then perhaps you could be the person who creates such a port.
>
> **[1:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=65)** The specifics of how Scientist works are pretty simple.
>
> **[1:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=68)** The original code is always run.
>
> **[1:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=70)** The experimental refactoring is sometimes run.
>
> **[1:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=73)** It's only run sometimes so that your application's performance doesn't suffer too much by doing extra work.
>
> **[1:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=79)** That's a detail that you can adjust to make the experimental code run more or less often.
>
> **[1:24](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=84)** The result of running the original code is always used, but that result is compared to the result that's returned by the experimental version.
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=93)** If the resulting values are different, then the results are logged.
>
> **[1:37](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=97)** Scientist also provides protection from exceptions being thrown in the experiment.
>
> **[1:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=101)** If an exception is detected, it's logged without halting program execution.
>
> **[1:46](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=106)** This can help protect against the accidental introduction of a divide by zero error or something similar.
>
> **[1:52](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=112)** After the experiment has run in production for a sufficient amount of time, you can safely delete the original code and leave just the replacement in its place.
>
> **[2:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=121)** Here we have a hypothetical situation.
>
> **[2:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=123)** Let's say there's a new I/O library called FAST I/O that we want to use because it's, well, faster.
>
> **[2:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=130)** But we want to make sure that it's going to work in all situations in production.
>
> **[2:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=133)** This is what such an experiment would look like.
>
> **[2:18](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=138)** The block that's passed to use is the original version and the block that's passed to try is the experimental version.
>
> **[2:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=145)** Make sure you don't skip the call to experiment.run, because that's what actually triggers the experiment to run.
>
> **[2:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=152)** Scientist is a critical tool to have in your toolbox when you encounter code that is very difficult to test but still needs to be replaced.
>
> **[2:39](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=159)** By introducing experiments that can be safely run in production, you can gain confidence that your refactorings are truly behaving exactly the same as the code they are replacing.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), ruby (2)
> **Code Keywords:** let (2), delete (1)
> **Env Vars:** fast (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Keep Technical Debt at Bay

#### Technical debt will grow like weeds
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=1)** - [Narrator] Technical debt is not something that you just address once and stays gone forever.
>
> **[0:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=5)** Instead, it's a lot like weeding a garden.
>
> **[0:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=7)** After you take the time to remove all of the weeds in your garden, they will not stay gone forever.
>
> **[0:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=12)** The weeds will come back.
>
> **[0:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=13)** Slowly at first, but then before you know it, your garden will be overrun again.
>
> **[0:18](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=18)** The best way to address this is to spend a little bit of time weeding your garden every day.
>
> **[0:23](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=23)** There are some specific practices that you can make part of your team's daily and weekly repertoire to keep technical debt to a minimum.
>
> **[0:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=31)** One of the critical practices for your team to embrace is test-driven development.
>
> **[0:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=35)** You write tests to describe the behavior you want out of your code before you write the code that passes the test, but just writing automated tests isn't enough.
>
> **[0:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=44)** A critical component of test-driven development often gets overlooked, that's the refactoring step, and it's next in the set of practices that your team needs to keep on its radar.
>
> **[0:54](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=54)** Your team needs to take the time to simplify their code, using the test as a guide to ensure that you haven't broken anything during the simplification process.
>
> **[1:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=63)** Clean coding practices will help give you a set of guidelines to follow when deciding what needs to be refactored.
>
> **[1:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=69)** And finally, your team needs to pay attention to your code's quality on a regular basis and employ the right tools to do so.
>
> **[1:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=77)** Sticking with these practices and following them on a regular basis will help the technical debt weeds from growing wild and taking over your software garden.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [narrator] (1)

#### Stay test driven
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=1)** - [Instructor] Write a test, watch it fail, make it pass, refactor, repeat.
>
> **[0:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=8)** The basics of test-driven development can be described so simply, but practicing it, especially on an existing project, can be quite a challenge.
>
> **[0:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=17)** One of the advantages of following test-driven development is that you are practically guaranteed to end up with code that is easy to test.
>
> **[0:24](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=24)** If your project already has a ton of tests, then it's important to maintain the momentum by continuing to build upon them.
>
> **[0:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=31)** The tests that are already there and the tests that you will add form a safety net that helps you ship changes faster with more confidence that no bugs have slipped through the cracks.
>
> **[0:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=41)** If you're not already familiar with test-driven development, then take some time to get familiar.
>
> **[0:46](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=46)** There are many different courses right here in the library which cover test-driven development.
>
> **[0:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=50)** One of my favorites is Neelam Dwivedi's course, [[Programming Foundations- Test-Driven Development]].
>
> **[0:56](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=56)** Another way to level up you TDD skills is to practice following TDD in a more controlled setting.
>
> **[1:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=62)** There are many different Kata that you can follow which will guide you through a series of simple exercises that are designed to increase your comfort level with test-driven development.
>
> **[1:11](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=71)** There are even some Kata that are designed to simulate working with existing codebases.
>
> **[1:16](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=76)** My favorite is the Gilded Rose Kata, which was originally created by Terry Hughes, but has since been ported to a large number of languages by Emily Bache and friends.
>
> **[1:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=85)** While the Gilded Rose Kata is primarily designed for refactoring, it's also a great example codebase for you to practice test-driven development techniques.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=95)** Apply your learnings on your own project as often as you can.

> [!info]- Semantic Content
>
> **Env Vars:** tdd (2)
> **CLI Commands:** make (1)
> **Code Keywords:** pass (1)
> **Speakers:** - [instructor] (1)

#### Practice refactoring
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=1)** - [Instructor] When you've inherited a project, you'll find yourself surrounded by things you want to change, designs that you feel could be implemented more concisely, algorithms which you feel could be more efficient, chunks of code which should be made more easier to understand.
>
> **[0:15](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=15)** These are just some of the valid reasons that you might have for wanting to make changes to the project without actually changing its behavior, a practice that's more commonly referred to as refactoring.
>
> **[0:25](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=25)** The most important thing to remember when refactoring is that the goal is to leave the behavior exactly the same as you found it.
>
> **[0:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=32)** It can be very tempting to start making structure and design changes at the same time that you are introducing new behavior, but these two practices should not be mixed.
>
> **[0:42](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=42)** Instead, either add the new behavior and then refactor or refactor and then add the new behavior.
>
> **[0:48](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=48)** Do not attempt to do both at the same time because, if you introduce a bug, you won't know what has caused it, the new behavior or something that went wrong with the refactoring.
>
> **[0:58](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=58)** By separating these two steps, you can more clearly pinpoint the cause of any failures.
>
> **[1:04](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=64)** There are many great resources for learning more about refactoring here in the library.
>
> **[1:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=68)** Richard Kasperowski's "[[Agile Software Development]]: "Refactoring" is a great place to start.
>
> **[1:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=73)** Richard's course even covers some techniques which will be useful when working with existing code bases.
>
> **[1:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=79)** Another favorite resource of mine is Martin Fowler's book "Refactoring," which has been updated in an impressive second edition.
>
> **[1:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=86)** Judiciously applied, refactoring is a technique that will allow you to slowly transform the project you have to work on into the project that you want to work on.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=95)** Stick with it and you'll be glad that you did.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Keep code clean
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=1)** - [Instructor] Code can get messy, real messy.
>
> **[0:03](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=3)** Following clean code practices can help provide some concrete guidance for identifying what needs to be cleaned up.
>
> **[0:10](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=10)** Some of the details include guidelines for how things in your code should be named, how your files should be formatted, and how your tests should be authored.
>
> **[0:19](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=19)** Following these guidelines will help ensure that your team has a consistent way of evaluating when something in your project needs to be refactored.
>
> **[0:27](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=27)** There are many different resources for practicing clean coding guidelines.
>
> **[0:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=32)** Here in the library, I've developed another course that focuses on those guidelines and covers how to transform messy code into clean code.
>
> **[0:41](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=41)** If you want more concrete practice, there are some Clean Code Kata which you can try.
>
> **[0:46](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=46)** David Losert has one that is worth checking out.
>
> **[0:50](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=50)** The clean coding practices are the closest to weeding a garden that you're going to find.
>
> **[0:55](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=55)** Each guideline is very small and is targeted at a very specific change.
>
> **[1:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=60)** Each one by itself may seem insignificant but when applied broadly, the techniques can transform a code base into a project that is a joy to work on.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** try. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Monitor code quality
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=0)** - [Instructor] When you're handed an existing project, the amount of work in front of you can be beyond overwhelming.
>
> **[0:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=6)** There was so much clean-up work that needs to be done.
>
> **[0:09](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=9)** Not only is it hard to figure out where to start, it can be very difficult to determine whether or not your efforts have made anything better.
>
> **[0:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=17)** There are many different code quality tools that can help you figure out where to direct your efforts, and there are other tools that can help you determine if you're making progress over time.
>
> **[0:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=28)** The bulk of these are static analysis tools.
>
> **[0:30](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=30)** The different ones are good at specific tasks.
>
> **[0:33](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=33)** There are linters, style cops, code coverage analyzers, tools that compute how long it's going to take to clean up technical debt, and some that alert you about security vulnerabilities in your dependencies.
>
> **[0:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=44)** Here in the library, you can take a look at my tools-focused course on code quality to learn about some of the different tools that are available and how you might be able to use them to transform your project into one that your team can be proud of.
>
> **[0:58](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=58)** You may also want to check out the Awesome Static Analysis repository on GitHub.
>
> **[1:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=62)** It's a very impressive list of tools and services for analyzing your code.
>
> **[1:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=67)** The tools are broken out by language, and at last count, there were over 35 different languages listed.
>
> **[1:12](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=72)** If you're looking for a code quality tool to use, chances are good that you'll find it there.
>
> **[1:17](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=77)** It's important to maintain your focus on your code's quality over time.
>
> **[1:21](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=81)** For most metrics, an individual value is less important than the trend over time, and focusing on slow and steady improvement over time is more important than trying to fix everything all at once.

> [!info]- Semantic Content
>
> **Code Keywords:** static (2)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=0)** - [Scott] Thanks for joining me.
>
> **[0:02](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=2)** Now that you've finished this course, here's a resource you can use to go even deeper on this topic.
>
> **[0:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=7)** Michael Feathers' book Working Effectively with Legacy Code, is a must read for anyone who is coping with technical debt.
>
> **[0:13](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=13)** Also, it's important to remember to take things slow when you're tackling legacy code and technical debt.
>
> **[0:18](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=18)** The problems that you're facing weren't built quickly, and they're not going to be solved quickly.
>
> **[0:24](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=24)** Feel free to connect with me on LinkedIn.
>
> **[0:26](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=26)** I'm happy to have conversations on different ways to tackle legacy code and technical debt.
>
> **[0:31](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=31)** I also co-host a podcast called Legacy Code Rocks.
>
> **[0:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=34)** Check it out if you find legacy code and technical debt interesting and want to learn more.
>
> **[0:39](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=39)** We also have a newsletter, a Slack workspace, and a weekly virtual meetup group.
>
> **[0:43](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=43)** Lots of different ways to engage with other people who are passionate about legacy code and paying down technical debt.
>
> **[0:49](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=49)** Thanks a bunch for following along.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [scott] (1)


## Path Context

### In [[Getting Started with Agile Software Development]]
← [[Agile Software Development- Creating an Agile Culture]] | **8 of 10** | [[Agile Software Development- Transforming Your Organization]] →

## Appears In

- [[Getting Started with Agile Software Development]]

## Related Courses

_Courses sharing skills:_

- [[Agile Software Development- Remote Teams (2019)]] — Agile Software Development
- [[Agile Software Development- Kanban for Developers (2019)]] — Agile Software Development
- [[Agile Software Development- Extreme Programming]] — Agile Software Development
- [[Agile Software Development- Scrum for Developers]] — Agile Software Development

---

[↑ Back to top](#)