---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: devops-foundations-devsecops-2022
url: "https://www.linkedin.com/learning/devops-foundations-devsecops-2022"
level: Beginner
updated: 5/19/2022
learners: 20020
skills:
  - DevOps
  - DevSecOps
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGHNknL738WcA/learning-public-crop_675_1200/B56ZifSug4G4Ag-/0/1755019143485?e=2147483647&amp;v=beta&amp;t=q7YsCl2eSEB2H34Ug1Uz0-MYsc8WZ88UrvqcOBdfYPU"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Get Ahead in DevSecOps]]'
next_courses:
  - '[[DevSecOps- Automated Security Testing]]'
path_nav: '[{"path":"Get Ahead in DevSecOps","position":1,"total":5,"prev":null,"next":"DevSecOps- Automated Security Testing"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/devops
  - skill/devops
  - skill/devsecops
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Devops%20Foundations%20Devsecops.md)

![Devops Foundations Devsecops](https://media.licdn.com/dms/image/v2/D560DAQGHNknL738WcA/learning-public-crop_675_1200/B56ZifSug4G4Ag-/0/1755019143485?e=2147483647&amp;v=beta&amp;t=q7YsCl2eSEB2H34Ug1Uz0-MYsc8WZ88UrvqcOBdfYPU)

# Devops Foundations Devsecops

> Security is a major concern in the DevOps world. There is a constant push for companies to move more quickly, and security teams struggle to keep up with testing. This has led to the rise of a new field: DevSecOps. This course introduces the concept of DevSecOps and explains how an organization can build out a DevSecOps program that helps teams integrate security into the application development p

> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-devsecops-2022) | Beginner | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to the DevSecOps course](#introduction-to-the-devsecops-course)
  - [What you should know](#what-you-should-know)
- [**1. DevOps Basics**](#1-devops-basics) (4 videos)
  - [What is DevOps?](#what-is-devops)
  - [Security is different in a DevOps world](#security-is-different-in-a-devops-world)
  - [Introduction to DevSecOps](#introduction-to-devsecops)
  - [Shifting security to the left](#shifting-security-to-the-left)
- [**2. Getting Started with DevSecOps**](#2-getting-started-with-devsecops) (11 videos)
  - [Cloud and DevOps](#cloud-and-devops)
  - [APIs are essential](#apis-are-essential)
  - [Finding the right toolset](#finding-the-right-toolset)
  - [Continuous integration and delivery](#continuous-integration-and-delivery)
  - [Containers and DevOps](#containers-and-devops)
  - [Securing infrastructure as code in the pipeline](#securing-infrastructure-as-code-in-the-pipeline)
  - [Security as code](#security-as-code)
  - [Application security in DevSecOps](#application-security-in-devsecops)
  - [Leverage your existing processes](#leverage-your-existing-processes)
  - [The Ops in DevSecOps](#the-ops-in-devsecops)
  - [Continuous improvement and feedback](#continuous-improvement-and-feedback)
- [**3. Starting Your DevSecOps Journey**](#3-starting-your-devsecops-journey) (3 videos)
  - [Open source DevSecOps tools](#open-source-devsecops-tools)
  - [Helpful DevSecOps resources](#helpful-devsecops-resources)
  - [Real-life example](#real-life-example)
- [**Conclusion**](#conclusion) (1 videos)
  - [Grow and expand](#grow-and-expand)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the DevSecOps course](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/introduction-to-the-devsecops-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/introduction-to-the-devsecops-course?u=76281980&t=0)** - [Tim Chase] [[Data Security]] is one of the most important considerations within any organization. On a nearly continuous basis, we hear of a major data breach that has lost privileged customer data and cost companies countless numbers of dollars. So how do you safeguard your company's applications to protect against these losses? Well, this is where [[DevSecOps]] comes in. Hi, I'm Tim Chase and I've been testing [[Application Security]] and leading security teams for 20 years. In this course, I'll show you how to drive security in a [[DevOps]] process. We'll discuss DevOps and why traditional [[Security Testing]] doesn't work well within it. Then we'll examine strategies to speed up the security testing process and develop a DevSecOps approach. And finally, we'll talk about tools and methods to implement security testing automation. If you want to move your security testing to the next level, this course is for you. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (4), [[DevSecOps]] (2), [[DevOps]] (2), [[Data Security]] (1), [[Application Security]] (1)
> **Speakers:** - [tim (1)

#### [What you should know](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/what-you-should-know?u=76281980&t=0)** - [Presenter] To get the most out of this course, you should have a basic working knowledge of the security development process and some basic knowledge of [[Application Security]]. You may also find it helpful, but not necessary, to know a bit about the different types of [[Security Testing]] and different [[Software Development]] methodologies, like Waterfall and [[DevOps]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1), [[Security Testing]] (1), [[Software Development]] (1), [[DevOps]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [presenter] (1)


### 1. DevOps Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [What is DevOps?](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/what-is-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/what-is-devops?u=76281980&t=0)** - [Instructor] Before starting a discussion on [[DevSecOps]], we should start by making sure we have a good understanding of what is [[DevOps]]? Why does DevOps exist? And why does it seem like everyone is moving in the direction of implementing DevOps? Waterfall is dead. No one wants to use it anymore. It used to work in environments where quarterly or monthly releases were the norm. Weeks long development, followed by weeks long testing, followed by weeks long user testing, doesn't work. Clients expect quick turnaround. They want to wait weeks, not months, to see their needs met. They want defects fixed in days. Long development times will hurt reputations and could lose business. Technologies like cloud have raised expectations for development teams. When servers can be started in seconds via code, it becomes a hard sell that it should take months to release upgrades. With waterfall gone, [[Agile Development|agile]] comes in and fills in some of the gaps. Agile works to speed up the delivery of applications. It solves the problem of lengthy releases. Typical agile projects are organized by two to three week sprints. Multiple sprints will be organized into a product release. Having the small sprint cycles allows for quicker implementation of client feedback. Agile gives the business, or clients, the ability to say what works and what doesn't, and see that feedback loop quickly. Development teams can rearrange tasks based on bottlenecks or business priority. This gives everyone more flexibility. So agile solves a lot of the problems of waterfall,
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/what-is-devops?u=76281980&t=95)** but it still has some issues. We can't forget about areas that don't deal with the application, like building servers, patching, and networking. Consider the three major parts of an application lifecycle, development, testing, and operations. Agile solved the development and testing issues, but really didn't touch operations. Typically in the waterfall world, the three areas are kept separate and run by different groups. DevOps brings the three groups together. No more development team, testing team, and operations team. They're the same group. One team performs all the functions. One team has all the responsibility for developing the application, testing the application, releasing the applications, and keeping the application running. No more segregation of duty or function. The DevOps team does it all. Agile and DevOps are not the same, but they typically go hand in hand. Agile is a development methodology. DevOps is a culture shift. It's a way of thinking about an overall application lifecycle. Now not only can development move quickly, but the entire release can. Deployments, patches, testing. The whole process moves exponentially faster. The DevOps methodology empowers teams, developers, project managers, business, to closely define, develop, and release applications. They can all have input, and that input can be heard and acted on quickly. DevOps isn't easy. If someone says it is, they aren't doing it right. It's a huge culture change.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/what-is-devops?u=76281980&t=188)** Not only for developers, but for an organization. The business has to be more involved in the form of product managers. The technology teams have to form their teams to support a DevOps culture. DevOps requires skilled teams. You can't always take a tester and force them to be a developer. You can't always take a developer and make them be a [[Linux]] expert. You have to invest in finding the right people and making sure they have the right training. Everything needs to happen quickly and can't wait. Any process that is cumbersome or lengthy won't work, whether it's performance testing or manual server deployment. Long processes will drag down the project and won't be effective. The largest problem with most areas is the lack of automation. Without a mature automation system in place, true DevOps will struggle. It will be hard to achieve the velocity needed. Security is not immune to the effects of DevOps. That is why DevSecOps has to be achieved to make sure that security can keep up with the pace of the project. The quickest way for security to become irrelevant is to get left behind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (13), [[Agile Development|Agile]] (8), [[DevSecOps]] (2), [[Linux]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Security is different in a DevOps world](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/security-is-different-in-a-devops-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/security-is-different-in-a-devops-world?u=76281980&t=0)** - [Instructor] So security is definitely different in a [[DevOps]] world. Let's take a look at how security has changed as our methodologies have changed over time. Security is changing with DevOps. In a 2021 State of [[DevSecOps]] survey by [[GitHub]], respondents were asked how their security role was changing in their DevOps environment. Only 20% said their role wasn't changing. 52% of the respondents said that they were either more involved hands-on or part of a cross-functional team focused on security. 26% say they are compliance focused. This is a large change over the past few years. As we will see as this course goes on, shifting left eventually means moving responsibility from one team to another. Many times, the actual goal is to make the security team more like auditors, focused on compliance, rather than hands on. But whether you are hands on or audit focused, it's clear that their security role is evolving. This is what a normal security scan looks like. Code is developed. The code is sent to the security team. The security team reviews it, creates a PDF, looks for false positives, and then finally, the security defects are fixed. Typically, this takes one to two weeks, and is a very manual process. Usually, source code has to be gotten, dependencies have to be resolved, false positives have to be weeded out, and in the end, it's very cumbersome to do so. And it just won't work in a DevOps model. It's too slow.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/security-is-different-in-a-devops-world?u=76281980&t=94)** In a one to two week timeframe that it would take to do a typical static test, you're already onto the next sprint. Too many people are involved, and the security team has to run the scans. The development team has to be involved to give you the source code, and work with you to resolve any problems during the build. And there's no empowerment of the dev teams. In a DevOps world, the development teams need to have the power to be able to run the scan themselves. In the old model, the scans were run by the security team, and the results were simply handed over to the development team to review. When you're doing security in DevOps, there are two things we should think about. The first one is how can we be quick? Instead of one to two weeks to turn around the test, how can we turn around the test in a matter of hours or a matter of minutes? And who's going to be the one that's responsible for running the test? Is it the security team, the development team? Who should be the one that's actually responsible for it? Time matters in an [[Agile Development|agile]] or a DevOps world. Anything that we can do to make it quicker will really help the process succeed. So three areas that we're going to focus on in the next video are automation, education, and empowerment of dev teams. We'll dig a little bit deeper into each of these three and show how these can help speed up and educate the development teams to be able to perform their own security, and empower them to be able to be responsible for the security of their platform. Before we go on to the next video, Gene Kim, who's one of the founders of the DevOps movement,
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/security-is-different-in-a-devops-world?u=76281980&t=187)** has a great quote that I think is very appropriate to what we're talking about, which is, "The only thing more dangerous than a developer is a developer conspiring with security". In the next video, will talk a little bit more about DevSecOps and how we can create that separation, but still create the [[Accountability]] within the security team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (8), [[DevSecOps]] (2), [[GitHub]] (1), [[Agile Development|Agile]] (1), [[Accountability]] (1)
> **Cross-References:** in the next (2), next video (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Exercise Files:** source code (2)
> **Env Vars:** pdf (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to DevSecOps](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/introduction-to-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/introduction-to-devsecops?u=76281980&t=1)** - [Instructor] Now, let's talk a little bit about [[DevSecOps]] and how to integrate security into the [[DevOps]] world. The definition of DevSecOps really is how do you take security and put it into the DevOps process? How do you merge the two together and still make sure that from a security perspective you have all the checkpoints that you need implemented? When you're developing a plan of how to do this, the goal really should be, how do we make the dev teams have more ownership of the process? It's not all about automation, but it's about ownership and [[Accountability]] and how we can get the dev teams to take more of it. Integrating automation into every step of the process is going to be key. As with all of DevOps, automation is key to DevSecOps. It's how you're going to be able to be quick and [[Agile Development|agile]] and get away from all the manual processes that you had. There's a good chance that when you move over to DevSecOps, some of the tools that you've used for years with your existing process, won't work. Even if you can automate the tools the amount of false positives that come with them won't make them worthwhile in a DevOps pipeline. Everything has to happen quickly. So with static scans that used to take hours, these won't work anymore, and we really have to rethink, how do we do it? How do we automate it? And what tools can we use? The automation of security tools doesn't mean automating, pushing a button. It doesn't mean taking your dynamic scanner and automating clicking of a run scan. What automation means in the security tool world is that you put something in a script and have it run in the background
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/introduction-to-devsecops?u=76281980&t=94)** and push meaningful results to your developers. Not a PDF, not a document, but actual results to the developers. And the results should be pushed into a tool that they use, not a security tool that the security teams use, but something that's meaningful to developers like [[Jira]] or Quality Center that they're in and out of all day long, that's meaningful to them and that's real time so they can act on it. And even taking it one step further, one of the best ways that you can enable the development team is to have the results in real time through ChatOps, or instead of sending them into PDFs, send them notifications via [[Slack]] or HipChat or some immediate notification mechanism so they have to be able to act on the results quicker. And one of the more popular quotes that I've seen and that I really like is by Rod Michael. And it says, "If you automate a mess, you get an automated mess." So make sure that when you do your security automation, that you do it in a way that helps the developers and not hinders them and provides them with good results that they can act on. The second part of DevOps that I want to talk about is education. The developers need to be educated on the security basics. In the 20 years I've been doing [[Application Security]], I've seen the same security defects over and over and over again. [[SQL]] injection was a problem 20 years ago. SQL injection is still a problem today. So helping the teams understand the security basics will really help speed up the development process and the DevOps process by having them know upfront what they need to be coding for.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/introduction-to-devsecops?u=76281980&t=187)** Ensure that they have the resources to be able to fix any defects that they may find. The idea here isn't that security isn't going to play a part. But the idea is that we will give them the information that they need through training, through help and conversations so that they can fix any of the defects that come to them. And just like with all of DevOps, the key to DevSecOps is really to let developers own security and be responsible for their security. The last point to be made for DevSecOps is that we need to give the empowerment to the dev team. Give them the tools, let them hold the tools and put them in their pipeline the way that they can use them. Put them in their [[Jenkins]] build or put them in their IDE so that when they're building an application, they can see the results in real time. Ultimately they should be responsible for the security of the application, not the security team. The goal here really is to flip the security team to being an auditor and not a tester so that we make sure as a security team that testing is done but we aren't the ones actually doing the testing. That's left to the development team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (7), [[DevSecOps]] (6), [[SQL]] (2), [[Accountability]] (1), [[Agile Development|Agile]] (1)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** sql (2), pdf (1), ide (1)
> **Tools:** jira (1), slack (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Shifting security to the left](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/shifting-security-to-the-left?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/shifting-security-to-the-left?u=76281980&t=0)** - [Instructor] Let's talk about shifting security to the left. We hear a lot about that in the IT industry today, but what does that actually mean when we shift things to the left? In security, that means taking a lot of the things that we used to do in QA or in production or later in the life cycle and moving it closer to the development phase. This goes along a lot with what we talked about in the first chapter. Most of the people tend to perform testing at the end or at scattered times throughout the life cycle. When we move security to the left, we take things that we used to do in production like vulnerability scanning, or in QA like static and dynamic scanning or interactive scanning. And we move those to the development phase. Just like everything else in [[DevOps]], security has to be moved to the left. It has to be done more quickly. It has to be done by the development team and then they have to own it. The challenge is that they have to be a jack-of-all-trades. Not only do they have to be developers and server administrators, but they also have to have a fundamental understanding of security. A primary goal of DevOps is to enable development. In [[DevSecOps]], we want to enable that same trend. We want them to own their own [[Security Testing]] and own their own overall security. How do we do that? A security team has to provide a few things to the developers. Like we talked about before, we don't just want to hand security over to the developers and say, "Do it." We need to provide them with some guidance on how to do that. Security teams need to provide a framework.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/shifting-security-to-the-left?u=76281980&t=95)** What types of tests do they need to run? Do they need to be static, dynamic, interactive? What things should be fixed? What are considered critical or high? We need to be able to provide them with a framework that they can work within. And to go along with that, we need to tell them what tools they should be using. Some tools work better than others. Some work better on [[Java]] apps, some work better with different types of authentication. We should provide them with the tools that they need to be able to be successful. And finally, the security team should provide the expertise. We are still the experts and we should help them understand how to fix issues, and how they should prioritize them in a sprint plan, and how could they be exploited? The security team and the DevOps team really should be considered partners. It's their job together to jointly ensure that the application is secure. The DevOps team is responsible for the [[Application Security]] testing and ensuring that the application is secure, but the security team ultimately is accountable for it. If you remember, the security team turned themselves into auditors. So it really is a joint partnership to ensure that the application is released securely. Really in DevSecOps, we should think bigger. Shifting left is great. And that's what everybody in the industry says. But we really should think bigger when it comes to DevSecOps. We should shift everywhere, not just early and not just left. Defects can be found at any part of the application life cycle. It could be found in development. It could be found in testing.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/shifting-security-to-the-left?u=76281980&t=188)** It could be found in production. Production code does have vulnerabilities. When we're rolling out our DevSecOps process, it's important to shift everywhere, not just to the left.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (4), [[DevSecOps]] (4), [[Security Testing]] (1), [[Java]] (1), [[Application Security]] (1)
> **Cross-References:** we talked about (2), later in (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 2. Getting Started with DevSecOps

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud and DevOps](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/cloud-and-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/cloud-and-devops?u=76281980&t=0)** - [Instructor] Throughout some of the videos, we've talked about cloud. So the question becomes, how does cloud and [[DevSecOps]] relate? First, let's talk about some of the goals of going to the cloud. I think that the goals that many businesses have when they go to the cloud are the same. The first would be speed. You can launch machines faster, you can deploy faster, and you can patch faster. Everything in the cloud has the ability to go a lot faster. And kind of going hand in hand with that is that you can be more [[Agile Development|agile]] in the cloud. You can respond to business decisions quicker, or you can adapt. You can spin up more servers to handle processing that may happen sporadically. You can also be a lot more agile in the cloud than you can with on-prem. And finally, cloud can be more secure. Inherently, there are some problems with going to the cloud, but the cloud makes security a lot easier than being on-prem. Some of the problems that we face when we dealt with servers on premises for years, can be dealt with very easily in the cloud. A good example of this is network segmentation. Historically, a lot of our on-premises networks have been flat. And to be able to segregate these requires a lot of manual work from the network teams, or expensive software. In the cloud they make this very easy, and you can set up different VPCs, or different network access controls in order to segregate applications, according to business need. It can be done very quickly and easily with different APIs. So [[DevOps]] and cloud really are partners, you can do one without the other,
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/cloud-and-devops?u=76281980&t=91)** but you really have a disadvantage, and to truly capture the value of either, you need both. And when you step back and think about it, the advantages of DevOps and cloud are the same, which is why they partner so well together. You go to DevOps to be faster and more agile, and to be able to respond to your business needs quicker, and adapt. You also have the ability to be more secure in a DevOps model, and to do so quicker. The only effective way of going DevOps truly, is by going to the cloud. You could do DevOps without going to the cloud, but it would be very difficult. You'd lose a lot of the agility that's needed to do DevOps well, when you deal with physical servers, and on-premises [[Hardware]]. The location of the cloud doesn't really matter, the cloud could be internal or external, public or private, as long as it's a cloud that can be easily managed and maintained via an API, you can still get the advantages of DevOps and DevSecOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (8), [[Agile Development|Agile]] (3), [[DevSecOps]] (2), [[Hardware]] (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [APIs are essential](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/apis-are-essential?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/apis-are-essential?u=76281980&t=0)** - Let's talk a little bit about APIs and why they're so helpful to [[DevSecOps]]. Just like cloud is a good partner for [[DevOps]], APIs are a great partner for DevSecOps. What is an API? An API stands for application program interface. It really allows you to remotely connect to an application from the command line. It's an easy way for a developer or a tester to be able to get information and receive information from an application directly, without having to bring up a user interface. A good example that we can use in the security world would be with Burb. Burb is a DAST application, like a web scanner, like we learned in the previous lesson. So many people are used to starting a scan manually where you bring up the tool, enter the web address, and start the scan. You do the scan, you get your results, but really all of that can be automated on the back end. Burb has an API where you can launch a command line, call Burb, tell it what address you want to run a scan for, and then get the results put into a database, all without having to log into the application. So, an API allows you to get the data, send the data, or even start the process remotely. All of those things are really helpful when you get ready to start automating your security pipeline. The large static scanners that we use for many years really don't work in a DevSecOps world. So, we have to look for smaller tools and APIs as we roll out the tools to the developers. Looking at APIs, it allows us to do a few things. It allows you first to use remote scanners.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/apis-are-essential?u=76281980&t=94)** So, instead of having to use a scanner installed on the developer machine or the build machines, you can use them remotely. It could be your vulnerability scanners or your dynamic scanners. All of them have APIs built into them so that you can easily call them without having to launch the tools. APIs also enable you to connect to defect tracking systems or testing systems, so you can update the status or send defects or add tasks remotely without having to log into [[Jira]]. APIs really take a lot of the manual parts out of the DevSecOps pipeline. It allows you to easily script and be flexible with how you roll out your DevSecOps to developers. The easier it is to roll out security to developers and automate as much as possible, the more likely they are to adapt it and not have any issues. In previous videos, we saw that DevOps and cloud were great partners, while automation is also a partner. It really is these three things that work together that will help enable DevSecOps to function well in a DevOps environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevSecOps]] (6), [[DevOps]] (3), [[Jira]] (1)
> **Env Vars:** api (4), dast (1), jira (1)
> **Definitions:** is a  (2), is an  (1), stands for (1)
> **Tools:** command line (2), jira (1)
> **Analogies:** just like (1)
> **Speakers:** - let (1)

#### [Finding the right toolset](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/finding-the-right-toolset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/finding-the-right-toolset?u=76281980&t=0)** - [Instructor] As we roll out [[DevSecOps]], one of the most important things that we can do is find the right tool set. It's also one of the hardest things to do because sometimes we just don't know where to start. The best place to start is to look and see what you're currently doing. It's very possible that some of the tools you're currently using will work just fine in a DevSecOps pipeline. But at the same time, don't be afraid to throw out the old tool set and go with a new tool set if what you're doing doesn't work. And make sure that the tool selection is a team effort. Remember, developers and security are partners in the [[DevOps]] team. We need to work together to make a tool selection, not make one in isolation. It's important to make a tool selection that will support developers and work with the tools that they use. So when making a tool selection, what should we ask? The first one is what languages do we need to support? Some tools work better with [[Java]] or .NET. Some work better with some of the newer technologies, like [[Node.js]]. It's important to understand all of the different languages that your project will use so that you can make sure that your tools support it. The next question is what technologies do you use? Does your application use anything like Docker or Cloud? It's important to make sure that when you make your tool selection, you take these into account as well. What types of tests do you need to cover? Some tools are better than others at different types of tests. Some [[Microsoft Excel|excel]] at looking for things like buffer overflows and some do better at authentication. It's important to understand what types of testing you're looking to do and make sure that your tools cover those.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/finding-the-right-toolset?u=76281980&t=95)** How lightweight is the tool? Is it something that's portable, that you can move from environment to environment and team to team? Can you easily give it to the development team so that they can run the scans themselves? Can it be automated? Can the development teams put it in their [[Jenkins]] pipeline or run it manually on their machines as a part of their [[Unit Testing]]? And how long will it take? Will it take 30 minutes, an hour or will it take two hours? We want to make these scans as easy as possible and as quick as possible so that the developers can get the feedback they need. Open source is okay. In the past, we've been so concerned with commercial tools and ensuring that we have adequate coverage and we convinced ourselves that you had to buy commercial in order to make sure you had proper [[Security Testing]]. But what we're seeing in the open source community today is that there's a vast selection of good open source tools that do a great job of testing. So don't rule out commercial and don't rule out open source. Consider them both as you're looking for the right mix. And consider different tools for different applications. You don't have to have the same tool set for all of your applications. In the places where I've worked, we've had hundreds of applications across different areas. It would be impossible to have one tool set for all of them. So it's okay to have different tools because you're going to have different technologies across your stack. And the key really is just try to make it as easy as possible. Don't have 50 tools. Don't have tools that take a long time to scan. And try and make it as easy as possible. Make it quick and have the fewest number of tools
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/finding-the-right-toolset?u=76281980&t=187)** that you need to have appropriate coverage. Let's talk a little bit about the different types of tools that are on the market. Some of these have been around for a while, but some of them are a little bit newer. [[Static Application Security Testing]], otherwise known as SAST, really looks at the source code of the application and tries to look for security vulnerabilities before it's compiled. Most of the tools that are on the market today support multiple languages, especially the commercial ones, but the problem with these tools is that they tend to have a high false positive rate. The reason behind that is because they're not able to track the data very well as it moves through the application. Sometimes a tool is guessing at what it thinks the application is going to do or where the data is going to go or where it receives the data. So when we look to integrate these into our CICD pipeline for DevSecOps, we really need to take that into consideration and make sure that the tool that we choose has a lower false positive rate. Some of the more popular tools that are on the market in the commercial side would be Fortify, Veracode and Checkmarx. Each of these work a little bit differently and they have different advantages. On the open source side, Find Sec Bugs, Brakeman and PMD. Those are some of the common ones that you see. A lot of times, the open source ones tend to be more language specific so they may not have as broad of coverage as the commercial ones, but there are a lot of open source tools out there that cover all the different languages. The next is [[Dynamic Application Security Testing]]. These tests run automated hacks on your system. Once it understands a URL that it's targeting,
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/finding-the-right-toolset?u=76281980&t=282)** it will spider the website trying to understand all the different pages. And then it will look for all the different inputs and try and hack into the application. The scans tend to take a long time to complete depending on the size of the application. Some of the commercial tools for [[Dynamic Application Security Testing]] are Netsparker, Burp and Acunetix. And once again, they all have their ups and downs, but they're really all tried and true on the market. ZAP is a good open source alternative that many people use. It's lightweight and automatable. Interactive [[Application Security]] testing, otherwise known as IAST, is one of the newer types of tools on the market. The security tests are actually happening while the application is being used. So while the team is unit testing or QA testing or UAT testing, the IAST tool is testing in the background as well. It works using something called instrumentation. It's very similar to performance monitoring tools, like AppDynamics, in the way that it works. It works at the Java runtime or at the .NET runtime level and it looks at all of the code as it's being executed. And it can even see the sequel queries that are called. It really tends to have a low false positive rate and provides you immediate feedback because it can see the data as it flows back and forth and it can see the code as it's being executed. And so, it has the ability to do security testing on the fly. Since it's newer, there are limited commercial tools on the market. There are no open source tools yet that are available, but on the commercial side, there are two well known ones,
>
> **[6:17](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/finding-the-right-toolset?u=76281980&t=377)** Contrast and Seeker. With IAST, security testing is performed while all the testing is happening, and because of that, it can provide immediate results to the Dev team through chat ops or by pushing defects to the issue tracker so that they can act upon them quickly. This makes IAST perfect for DevOps security testing. One of the most important things to realize about finding the right tool is that change is okay. Don't be afraid to change it up or experiment to find out what works and what doesn't. That's the whole point of DevOps in general is to adapt and continually get better and use feedback loops so that when you're done with your testing and you hear from the development team that you're getting a high rate of false positives, look for another tool set. Continually try to improve and provide the best results possible in the shortest amount of time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (4), [[Application Security]] (4), [[DevSecOps]] (3), [[DevOps]] (3), [[Java]] (2)
> **CLI Commands:** make (14), find (3), node (1), docker (1)
> **Env Vars:** iast (4), net (2), sast (1), cicd (1), pmd (1)
> **Definitions:** is a  (2), known as (2)
> **File Paths:** node.js (1)
> **Exercise Files:** source code (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you need to have (1)

#### [Continuous integration and delivery](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/continuous-integration-and-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/continuous-integration-and-delivery?u=76281980&t=0)** - [Instructor] Another important concept in [[DevOps]], in [[DevSecOps]], is [[Continuous Integration (CI)|continuous integration]] and delivery. The process looks basically something like this, where you have continuous integration and deployment that is going on once a day or many times a day. And the cycle continues and continues. Continuous integration is the first step in the process. What this means is that when a developer is finished writing the code, or on a scheduled basis, several times a day, the code is automatically checked in. When the code is checked in, it is integrated into a shared environment with the other developers. At which point, integration tests will occur to ensure that the application is ready for deployment. The CD part of CI/CD usually stands for continuous deployment. It's the next step, typically, after the CI checks pass. It is an automated release to production that happens as soon as all the unit tests pass and the build is determined to be ready. Normally, this goes together with continuous integration, but it doesn't have to. CD can also mean [[Continuous Delivery (CD)|continuous delivery]], which is similar to continuous deployment, except the build may not be released every time to production. The advantages of CI/CD are similar to the advantages of DevOps. It's very fast and [[Agile Development|agile]]. And when you do one build or multiple builds a day, that really enables you to be fast and agile with changes that you're making to your application. Along the same line, CI/CD will allow you to lower cost and have shorter feedback time. Because the sooner that you can find problems, either with the application itself or with the customer requirements,
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/continuous-integration-and-delivery?u=76281980&t=93)** the lower cost it will be to fix it. The sooner you fix something in the development lifecycle, the lower the cost. One of the challenges of CI/CD is also one of the benefits. The fact that it's very fast is also a challenge. You have to be able to do your testing quicker. You have to be able to do your coding quicker, and your deployment quicker, and that really forces you into a different mindset of development and testing. That's why typical security processes here won't work. When you're doing one build or multiple builds a day, static scans that take a day or two or three to run just won't work. In the next couple of videos, we'll talk more about how you can integrate your security into the CI/CD process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (4), [[DevOps]] (2), [[Agile Development|Agile]] (2), [[DevSecOps]] (1), [[Continuous Delivery (CD)|Continuous delivery]] (1)
> **CLI Commands:** cd (7), find (1)
> **Definitions:** stands for (1), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Containers and DevOps](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/containers-and-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/containers-and-devops?u=76281980&t=0)** - One of the new and popular ways to deploy applications today is with containers. Containers are another tool that can be used in the [[DevSecOps]] process. Let's take a look and see what containers are and how they can be used in security automation. A shipping container is a pretty accurate way to depict an application container. A container takes software and puts it into a single package for deployment. So picture taking your operating system, your application server, and all of your code, putting it into one package and deploying that across environments. As opposed to having all of your automation do a build and then deploy that, everything is packaged into one place and you deploy the entire container across environments. It tries to make configuration and deployment a lot easier, which really fits in well with the [[DevOps]] process. And also from a testing point of view, it helps to ensure that environments are the same. When doing [[Security Testing]], one of the problems that's very common is that your environments are not the same. Your development environment is set up one way, your testing environment is set up another way, and your production environment is set up a different way, which makes security testing cumbersome and difficult because you can't guarantee that results in one environment are true for another. Containers help solve this problem for us by making sure that all of your deployments are the same across environments by literally moving the entire application stack from environment to environment. An example of what a normal application structure looks like is pictured here. You can see that each application or each part of the application has their own separate server. A web server will have their own server
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/containers-and-devops?u=76281980&t=93)** with the host OS, the libraries it needs, and then the Apache or whatever it happens to be running on top of that and the same thing with the application server. In a container, everything that the application needs is put into one place. You'll have the host OS with the container server like Docker or [[Kubernetes]], or a container application running on top of that and then any shared libraries they need and the applications themselves will be on the container image. We can really take advantage of this in a DevSecOps process to help make our security testing a lot quicker and easier. We can use it to organize all of our security tests and put them into one container that we can easily hand to an [[Application Development]] team. By using this method, we can really ramp up security from one application to hundreds of applications and being able to just take one container and hand it to all the different teams that we want to do our testing. We can create different containers for similar applications. You can have one container for [[Java]], you can have one container for .net and so on and so forth. So you don't have to have one container for all the different types of applications. And these containers will put all the different tools that we identified in early videos. And once we have the containers built, we can integrate it with the automation server that the development teams manage. If they're using [[Jenkins]], we can take our containers and they can integrate them with their Jenkins environment so that every time they run a build or every time they perform some automation, they can run the container as well that contains all of our security tests. One advantage of using a container is being able to use an artifactory. An artifactory is a central repository for our containers that allows us to keep our containers up to date.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/containers-and-devops?u=76281980&t=188)** So one of the principles that we talk about in DevSecOps is not to be afraid to change. If one tool doesn't work, swap it out for another tool. If one process doesn't work, swap it out for another process. By using an artifactory, we can help keep our security images up to date. And when we make changes to the tools that we use or the processes we use, we can update the artifactory with our latest container image. And the next time the development team needs to run our tools, it will update it with the latest set of tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevSecOps]] (3), [[Security Testing]] (3), [[Jenkins]] (2), [[DevOps]] (1), [[Kubernetes]] (1)
> **CLI Commands:** make (3), apache (1), docker (1)
> **Prerequisites:** set up (3)
> **Definitions:** is a  (2)
> **Analogies:** picture (1)
> **Speakers:** - one (1)

#### [Securing infrastructure as code in the pipeline](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/securing-infrastructure-as-code-in-the-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/securing-infrastructure-as-code-in-the-pipeline?u=76281980&t=0)** - [Instructor] One of the newer trends that has become popular in the [[DevOps]] world is [[Infrastructure as code (IaC)|infrastructure as code]]. As an industry, we need a way to deploy infrastructure without manual intervention, and that's where IaC came about. So what is IaC? It stands for infrastructure as code, and it's a way of managing and provisioning infrastructure by using code. Think of it just like source code for deploying your infrastructure. You can use CloudFormation or [[Terraform]] as a couple of examples, and build your infrastructure in a code viewer. It's as simple as that. And the main reason that you would do this is to get rid of any of the manual parts of deploying your infrastructure. You don't want any manual parts in your deployment. It takes too much time, and the goal of DevOps is to take less time. So you really want to get rid of deploying infrastructure manually. This is an example of infrastructure as code, and you can see here, it looks like source code. This code creates infrastructure in AWS in various regions. So why is infrastructure as code so important? One is speed. Anytime you're manually deploying something, it's going to be slow. Deploying somewhere like a console won't work, and isn't real DevOpsy or cloudy. And so we need to use IaC for speed so that we can integrate it with our pipeline. Integrating it with our DevOps process for consistency is a big deal. You want to make sure that all of the environments that you're deploying to and that you're testing in are deployed the same way. You don't want servers that are set up differently in production and then in development.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/securing-infrastructure-as-code-in-the-pipeline?u=76281980&t=92)** And the easiest way to do that is to deploy the same code every time, which is one of the advantages of infrastructure as code. And you know it's the same code that you're deploying after it's been tested in all of your different environments. It also makes your development more reliable. When your process and infrastructure is repeatable, your testing and unit test performed by the DevOps team will be quicker and have fewer errors. This will ultimately save time and money in the development process. So how do you secure IaC? You first scan for vulnerabilities before check-in. Just like anything else in security, you want to do it as soon as possible in the lifecycle, so that your developers can do it when they're building it. There are some tools out there that can do this and also integrate with your job server, so that you can break the build. Just like you want your static tools, your dynamic or your interactive tools, or whatever you're using to break the build when there are critical or high vulnerabilities, you want the same thing with infrastructure as code. You don't want it to deploy any critical or high vulnerabilities to higher environments. And as part of a good shift left strategy, we talked a lot about that in [[DevSecOps]], securing it early on. You should do the scanning right next to your static scanning and your secret scanning and all of that. That's important, and it's part of a good shift left strategy. This is what IaC looks like in the pipeline. So you have a developer or a DevOps engineer that builds the infrastructure as code, and they'll check it into the source code repo. And then from there, when the build is triggered, your job management server, like [[Jenkins]] or CircleCI, will send it to the infrastructure as code scanner. Before it's deployed, any bugs that were found
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/securing-infrastructure-as-code-in-the-pipeline?u=76281980&t=187)** will go to the bug tracking tool and back to the developer. This is kind of what it looks like when you start testing IaC correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (8), [[DevOps]] (5), [[Terraform]] (1), [[DevSecOps]] (1), [[Jenkins]] (1)
> **CLI Commands:** terraform (1), aws (1), make (1)
> **Exercise Files:** source code (3)
> **Definitions:** stands for (1), is an  (1), is a  (1)
> **Analogies:** just like (3)
> **Env Vars:** aws (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)

#### [Security as code](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/security-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/security-as-code?u=76281980&t=0)** - [Instructor] Going along with the previous chapter on infrastructure's code, when you think about it, anything that you do in [[DevOps]] should be code. So let's talk a little bit about security as code. In DevOps, the real goal is to be automated. You don't want people going in and clicking on a console or GUI. You really want it to be driven by API calls or scripts. That enables everything to be done in an automated fashion. You really don't want hands on keyboards all the time. The more hands on keyboard that you have, the longer that things take. So the ultimate goal of the [[DevSecOps]] strategy should be to really build security into the pipeline and you do that using automation. The definition of security as code is mapping out your code and infrastructure, and finding places to add automated security checks and gates. So really you can put security checks in anywhere that you can find the place to automate. They can be authorization checks or authentication checks. Any place that you have a security checkpoint in your pipeline, look to automate it. You can supplement standard tests like static and dynamic. The perfect example here would be authentication and authorization. These are things that are sometimes hard to test. Over time, if you can get a consistent pattern, you can look to do automation here and really automate some of those manual tests. And along the same line, any sort of manual steps that you have, you should look to try and put in code. I think a good example here is some of the recent work in [[Threat Modeling]].
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/security-as-code?u=76281980&t=91)** There are some automated tools out there now that allow you to have a threat model in code. So really, anytime that you can move manual steps like that over into code and use security guest code the better. Here are a few examples of security as code. One is automating your checks for legal and compliance. Maybe you have some manual checks that you need to put in there for HIPAA or for a SOX audit. You can automate those to speed up your compliance testing. Also, you can automate your control gates. You can check to make sure that certain criteria are met before going to the next environment. And then finally, automate your access control checks. So instead of depending on a manual access control check, find a way to automate those as code. Find your most common scenarios that you have and write scripts for them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[DevSecOps]] (1), [[Threat Modeling]] (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** gui (1), api (1), hipaa (1), sox (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Application security in DevSecOps](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/application-security-in-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/application-security-in-devsecops?u=76281980&t=0)** - [Instructor] We have talked about Security as Code and [[Infrastructure as code (IaC)|Infrastructure as Code]], but let's talk about [[Application Security]] and how it can work with [[DevSecOps]]. There is no one-size-fits-all for testing. So let's talk a little bit about the AppSec process. To start, let's look at how old school application security works and compare it to how it works in the [[DevOps]] world. Normally, security is thought of as a separate team just like traditionally infrastructure and testing were separate teams. Security is normally its own function. In the old process, when the development team is ready to test, they pass the code to the security team to test and send their results back. Or they may send a link to a site that's ready for a scan. However it's done, it's a manual process. To go with the manual process, the old AppSec process typically involves sending documents like PDFs and [[Microsoft Excel|Excel]] files for results. Pages and pages of results for developers to read through. Not only did it not promote an [[Agile Development|agile]] method of working, it frustrated many developers with the time needed to sort through all the results. You can see how the old waterfall type process works here. First, a developer sends the source code to the security tester. Then the security tester compiles and scans the code. The security tester then sends a large PDF back to the developer for them to review. And then security and development have a meeting where they agree on what to fix. This is long and difficult to manage. It is really the opposite of DevOps and goes against the DevSecOps principles
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/application-security-in-devsecops?u=76281980&t=93)** we have talked about previously. In the old process, security isn't integrated. It's obvious that there are a lot of back and forth between the security and the development teams. They are both separate and almost at odds with each other. Security results versus developers saying that they're false positives. Results can't be manual. Passing files back and forth won't work in DevSecOps. It's slow and cumbersome. And it won't support the quick delivery needed by teams. We need to take the DevOps principles and apply them to AppSec. The key is to make them automated, join them along with the application build process and then provide the results to the DevOps teams and their chat ops of choice, like [[Jira]] or [[Slack]]. It doesn't really matter. With application security, the key is that it's integrated with the dev process. The test kicks off with the build. It runs parallel to the other items that DevOps teams are doing and then ultimately feeds into the same system that they use to manage tasks. The results should be quick. Thresholds are set up to be able to pass and fail based on the results. And finally, they're repeatable. It doesn't matter if the security tests need to be run one time a day or five times a day. They're the same every time and they're in control of the DevOps team. For more about AppSec and DevSecOps, check out my course called Continuous Application Security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (6), [[Application Security]] (4), [[DevSecOps]] (4), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** pdf (1), jira (1)
> **Tools:** jira (1), slack (1)
> **Best Practices:** the key is (2)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)

#### [Leverage your existing processes](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/leverage-your-existing-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/leverage-your-existing-processes?u=76281980&t=0)** - [Instructor] We've talked a lot about leveraging our own processes and using what we already have in the past, so let's talk a little bit more about that topic and also try and answer the question, where do I start? The best answer that I have is start easy. Don't try and start with the most complicated application. When I first started rolling out [[DevSecOps]] at different teams, we didn't do a great job of choosing the right applications. We chose teams that maybe didn't have a strong CI/CD process in place. Or maybe they used the most leading-edge technology, and those aren't really a great place to start. So the best answer is start easy and find a team that's passionate. There's always a team that really wants to do the right thing and work with you from a security perspective. Find that team and work with them so that they can help you iron out any of the problems you may find in the process. And start with a standard language. Starting with something that's a little bit easier, like [[Java]] or .NET, maybe not some of the newer technologies that don't have great [[Security Testing]] tools out there yet. And remember, the tool set doesn't have to be right the first time. You can try and adapt to see what works. When we first started rolling out DevSecOps, we tried two to three different tools before we found the one that actually worked and we settled on. It's a matter of finding what's right for your team from a balance of technology, false positive rate, and what you're looking to test. So don't be afraid to fail and try again with a different tool. One of the things to keep in mind when rolling out DevSecOps is to get out of the way.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/leverage-your-existing-processes?u=76281980&t=94)** Make sure that you provide the team everything they need to succeed, but don't be the one holding them up from completing their sprints or completing their testing to roll out to production. So where do we come in? We turn ourselves into advisors and coaches. In the DevSecOps world, we aren't the ones actually doing the work anymore, but we're the ones helping the teams and coaching them and showing them what they need to do. At any of the security checks that we may have done in the past, like authentication checks or password complexity checks, we need to be turning those into code and working with the development team to make sure that those are automated and put into their process. And I know I've said it once, but I'll say it again, no PDFs or hard documents. They're not helpful in a DevSecOps world. We really want to get the information to the development teams in a way that they can consume it. This is an example of a process that a CI/CD team might use. They may store their code in [[Bitbucket]], or use [[Jira]] for task tracking, or [[Jenkins]] for automation, or use [[Ansible]] for [[Configuration Management]], and so on and so on. You want to make sure that the process works with theirs, and we don't want to force them to use the process that the security team uses. Not all DevSecOps teams will use the same tools, and so we need to make sure that we are flexible enough to be able to adapt to them. So maybe one team uses Jira and another team uses Quality Center. Build your processes so that it's flexible enough to adapt. So when you engage with teams, make sure that you understand what is in place.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/leverage-your-existing-processes?u=76281980&t=188)** And once you understand what's in place, take your security processes and work that into the DevSecOps process. Before we engage with the DevSecOps team, there are a few things that they should have in place to make sure that DevSecOps is successful. The first is automated builds. We need to make sure that the automation is in place so that they can automatically build and push their code to the next environment. They need to have some sort of an automation tool like Jenkins in place so that we can integrate our DevSecOps process with their automated tool. Task tracking is something else that's important to have in place. Once we get done running our tests, we want to have something to do with the results. Like I've stated, we don't want to give them a PDF, so we need someplace for the results to live. So they should have a Jira, Quality Center, something like that. And we can take our results and push them to development teams for them to be able to work. And finally, we need reliable unit tests. It's really important that the development teams do the testing on their own. And as we start to look at some of the newer technologies, like interactive [[Application Security]] testing, they really rely on good unit tests to be able to run their suite of security tests. There are some security processes that we should have in place when we engage with the DevSecOps teams as well. First, we should have some sort of security testing in place whether it's static, dynamic, or interactive. Something should already be in place so that we can integrate. Another thing to keep in mind is that if you're doing [[Mobile Application Development]], we should have some sort of mobile application testing in place as well.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/leverage-your-existing-processes?u=76281980&t=280)** And we should have vulnerability scanning in place, like Qualys or Nessus or something along those lines. The following diagram shows an example of a security testing process. I like to talk about IAST a lot because I think it works really well in the DevSecOps world. You can see that you have an application in the top, and IAST will hook into the app using instrumentation. What that means is that whenever the application is used, the IAST tool will be able to see the code and the data going back and forth between the web server and the application server. That's why I mentioned it is so important for development teams to have good unit tests in place. While the unit tests are running, the IAST application in the background will be doing the testing and automatically pushing any defects or vulnerabilities found to the task tracking tool or the ChatOps tools that the development team has in place. And always remember it's okay to have different processes for different applications. Applications can be handled differently. Java applications can have one suite of tests, and .NET can have another suite of tests. Here, I show some different examples of different processes for different apps. You can see here that maybe some applications development teams use Maven or Jenkins. You'll have Contrast or some other IAST tool and ZAP to go with it for dynamic. Another team may use TFS and Bamboo, so you may decide that SonarQube, Burp, and Nessus would go better with that process. You can be flexible with your process, and you can have multiple applications that you use depending on the type of application that you're testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevSecOps]] (12), [[Security Testing]] (3), [[Jira]] (3), [[Jenkins]] (3), [[Java]] (2)
> **CLI Commands:** make (7), find (3), cd (2), ansible (1)
> **Env Vars:** iast (5), net (2), pdf (1), zap (1), tfs (1)
> **Tools:** jira (3), bitbucket (1)
> **Warnings:** keep in mind (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [The Ops in DevSecOps](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/the-ops-in-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/the-ops-in-devsecops?u=76281980&t=0)** - [Instructor] Let's talk about the Ops side of [[DevOps]] and how [[DevSecOps]] fits in. It's easy to focus on [[Application Security]] because like traditional development teams, [[Network Security]] and application security were handled separately. With DevOps, we have to consider security across the whole platform. Remember, Cloud is built for automation. Good DevOps teams should include infrastructure automation as a part of their development process. Things like server creation and network configuration should all be automated as a part of the build. Security teams should take advantage of that and use ops checks in their DevSecOps toolkit. There are a lot of Ops automation that can be done but here are a few examples. The most common is vulnerability scanning. Tools like NESIS and Qualys can look for things like outdated operating systems and missing patches on servers. Another thing that can be automated is your network security group review. You can use automation to check and make sure that your networks are not overly permissible in the cloud and that you have them locked down appropriately by application group. Another thing that you can do is look for patching compliance. You can look and make sure that all the systems are patched and when you find non-compliance, automatically notify the development teams. And the last thing that you could look for is encryption at [[Representational State Transfer (REST)|rest]]. In the Cloud, everything should be encrypted. You can use your DevSecOps automation to look through all the data in the Cloud and share compliance to this requirement. Development and operations tools should be part of a single tool set.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/the-ops-in-devsecops?u=76281980&t=92)** They shouldn't be broken out into separate buckets. Although they're all part of the DevSecOps toolkit, they do have different focuses. The development tools focus on detecting problems before they make it to production. And the operations tools focus on detecting, protecting, and blocking applications that are already in production. As we've stated before, DevOps, Cloud and automation are all partners. The key is integrate security into each of these areas to make sure our DevSecOps rollout is successful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevSecOps]] (5), [[DevOps]] (4), [[Application Security]] (2), [[Network Security]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** nesis (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Continuous improvement and feedback](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/continuous-improvement-and-feedback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/continuous-improvement-and-feedback?u=76281980&t=0)** - [Instructor] To wrap up this section on [[DevSecOps]], I'd like to spend a few minutes talking about one of the fundamental tenants of DevSecOps, continuous improvement and feedback. We've seen this graphic a few videos ago about the [[DevOps]] process. When you really think about it, DevOps is not a waterfall methodology where you go from beginning to end and then you start planning again for the next release. DevOps is really meant to be this continuous cycle and this continuous loop, where as soon as you get done with the release and monitor, you go back to plan, code, deploy, and the whole process. One thing that you should keep in mind about this process is that each task should have a feedback loop. And what that means is that everything you do, you should have a way to feed that back to the developer right away. As an example, when you do static testing, your tool should get the results back to the developer. And not only that, the entire process should have a feedback loop. Once you get done with your DevOps process and you're getting ready to start the planning, you should really take a minute to be retrospective and understand what went right, what went wrong, and make modifications. Continuous feedback is really what makes DevSecOps work. We have to understand what went well, what didn't, and how we can improve. DevSecOps allows us to take this feedback and make changes quickly, not having to wait weeks for a new release cycle. It's meant to provide immediate feedback to the DevOps team. Having this information will allow us to improve for future sprints and releases,
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/continuous-improvement-and-feedback?u=76281980&t=94)** ensuring that we have a better product and better testing. It also makes us have a better team of making sure we always are efficient and lean, and make the security processes as seamless as possible. This diagram is an example of a feedback loop. You can see that after each part of the testing, there is feedback to the DevOps developer. After [[Unit Testing]], feedback happens. After the static testing has been completed, the defects are tracked and sent back. There's no waiting until the end before a DevOps member has the results needed to make fixes. This is a simple example, but it illustrates the point that DevSecOps is an iterative process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (7), [[DevSecOps]] (5), [[Unit Testing]] (1)
> **CLI Commands:** make (4)
> **Definitions:** is an  (2), is a  (1)
> **Cross-References:** go back to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Starting Your DevSecOps Journey

[↑ Back to Table of Contents](#table-of-contents)

#### [Open source DevSecOps tools](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/open-source-devsecops-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/open-source-devsecops-tools?u=76281980&t=0)** - [Instructor] There are a lot of free tools that we can use and add to our dev SecOps toolkit. One of the most common that I use is Find Sec Bugs or Find Security Bugs. It's strictly a [[Java]] static tool that is used to scan the source code of Java applications but it's pretty robust. It can integrate into your [[Jenkins]] environment. It has really good OWAP's top 10 coverage and CVE coverage so that you can actually map any of the defects that it finds back to known vulnerabilities. And best of all, it can actually integrate with the IDE. So you have the flexibility of giving the developer this tool and having them run it when they develop their code or you can actually include it in your automation and run it automatically. Or maybe both. There's no harm to making it run twice in making sure testing is completed. Another tool that I like to use a lot is the [[OWASP]] Zed Attack Proxy or ZAP. It's an open source dynamic scanner. So it's going to spider your site and basically try and hack it. It's going to look for any place where you can input data and try to manipulate the [[Forms]] and hack its way into the application. It's been around a long time and so it's very mature and well maintained and it actually works very well for automation, better than some of the commercial tools that I've used. It even comes with the Jenkins plugins that you can implement it in your Docker container that you have for your toolkit. A third tool is [[SQLmap]]. I use this one a lot when people want proof that their application is susceptible to [[SQL]] injection. Nothing makes them believe you more than when you hand them a copy of their own database. This tool can be run manually, or it can be included
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/open-source-devsecops-tools?u=76281980&t=95)** in your toolkit and run in an automated fashion. Switching over to the operation side OpenVAS is a vulnerability scanner. It's free and it's an alternative to some commercial tools like Qualys and Nessus. It maybe isn't quite as robust, but it does a very good job and I use it often to run routine scans on an external network. And finally, Recon-ng is not actually a security tool that you can use to find bugs, but it's more of a recon framework, meaning it's going to go out there and do a [[Google]] search or do [[GitHub]] searches and look for things you don't know that are exposed. I use this app a lot to run on our known IP ranges and look for applications that I maybe don't know exist. And once I find them I do a bit more recon and feed it into some of my other tools like SQLMAP looking for SQL injection. You can also use Recon-ng to look for source code that is on GitHub that maybe developers accidentally checked into a public repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Jenkins]] (2), [[SQLmap]] (2), [[SQL]] (2), [[GitHub]] (2)
> **Env Vars:** sqlmap (2), sql (2), owap (1), cve (1), ide (1)
> **CLI Commands:** find (4), docker (1)
> **Tools:** github (2)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Helpful DevSecOps resources](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/helpful-devsecops-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/helpful-devsecops-resources?u=76281980&t=0)** - [Instructor] Now that we know a few of my favorite tools to include in the pipeline, let's talk a little bit about some resources that we can use to help us with our process. These are three of my favorite resources that I go to often and just see the latest updates, or refresh my mind on the concepts. I think each one offers a little bit of a different perspective on [[DevSecOps]], and can help in different ways. The DevSecOps Checklist is a list on [[GitHub]] that has lots of helpful resources. It has everything from tools to talks. It would be a great resource that the community could submit updates to, but it's the perfect place for a new DevSecOps person to find starting information. The second resource is a handbook written for the DoD and unclassified for public consumption. It's called the DevSecOps Reference Design. It's a pretty long guide, describing what the standard practice for DevSecOps should be in the US Department of Defense. There are several diagrams that describe the [[DevOps]] flow in different places where security fits into it. There is also a version two that specifically deals with containers and DevOps and how to create a secure container repository. The final resource I have is Awesome DevSecOps. Kind of like the name says, it's an awesome list of DevSecOps information. It includes everything from trainings, presentations, tools, and [[Dashboards]], and so on. It's a great list, and in the spirit of DevOps, it changes as the community finds things work and don't work. Here's the list of resources. There is plenty of content to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevSecOps]] (7), [[DevOps]] (3), [[GitHub]] (1), [[Dashboards]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Real-life example](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/real-life-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/real-life-example?u=76281980&t=0)** - Now, we're going to look at an example of how we can run some of these tools from the command line and integrate them into a pipeline. We're going to install a tool called grype, which is a container security tool. But, before we do that, we need to set up a prerequisite. So, the first thing that we're going to do is set up Docker. If you don't have Docker installed, we need to go ahead and do this, because as a part of the container security scanning process, we're going to pull an image off the Docker registry. The next thing that we're going to look at is webgoat on its Docker hub page. Webgoat is an intentionally vulnerable application that is developed by O OSP. They host a version of it on the Docker repository, so you don't have to manually set it up to play around with it. We don't have to do any installation here, but I wanted to let you know where this was, and what we're going to be testing against. After you do that, you can go to the [anchor.com/opensource](https://anchor.com/opensource) page and see that they have two open source tools that you can use free of charge and play around with. Syft deals with software bill of materials, and has to do with open source components and open source security. But, we're going to look at grype, which is a vulnerability scanning tool for containers. If you click on grype to try grype, it's going to take you to its [[GitHub]] page. And, from here, you can follow the instructions on how to do the installation. I'm going to do the installation with home brew since I'm running a Mac,
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/real-life-example?u=76281980&t=91)** but if you're running [[Linux]], you can follow the instructions on the GitHub page. So, the first thing I'm going to do is type in brew, tap, anchor, forward slash, grype,
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/real-life-example?u=76281980&t=109)** and it's going to run, and get prepared to install. It's going to kind of run its pre-installation process here. So, once that done, we are going to do the install. So, we're going to type brew again, install grype, and this is going to perform the installation. And, you can see I've already got grype installed, but if you did not, it would walk you through the installation process, which is just really running a script. So, now that we've got it installed, the next thing that we're going to do is start running some commands to run a security test against webgoat. If you type in grype, you can see here that it's going to provide you a help document to understand all the different commands and options that you can run using the grype tool. We're going to walk through a few of these. And, the first thing that we're going to do is just run a vulnerability scan against the webgoat container on the Docker repository. So, we're going to type in grype, Docker, colon. And, so that is going to tell the tool that you want to go to the Docker repository to look for a container, and then we're going to specify the container, which it mentions on the webgoat page. So, webgoat, forward slash, webgoat, dash, eight, zero,
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/real-life-example?u=76281980&t=196)** and we're going to pull the latest version of that. So you can see here it is going to download updates to the vulnerability database. It's going to download the Docker image, which will take a little bit of time here, wants to make sure that it has the most up to date image. And, then it's going to run the scan, and you can see here it's going to give us a list of all the vulnerabilities that it found on the image. Their name, CVE, and severity, but it's a little bit hard to read. So, one of the things that we can do is output it to [[JSON]] so that we can see it a little bit better, and we can take that, we could always create a file from it, or export that to our pipeline tool. So, in order to do that, we're going to run the same command. But, this time, we're going to add a switch. That's a dash, O, and then say, JSON,
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/real-life-example?u=76281980&t=252)** and you can see here it's going to follow the same steps. Make sure the vulnerability database is up to date. Make sure the image is loaded. Then, it will run a scan, and then it's going to give you the same results, but it's going to do it in a JSON format. So, another advantage of grype is that it's really meant to integrate into your pipeline. And, one of the things that pipeline tools can do is that when they call a tool from the command line, they can take the output or the results from that, and then decide what they want to do with the build. For example, you could take this grype tool and you could set some parameters around it, so that you could send a failed result back to your pipeline tool, so that the build would fail. So, we're going to do that right here. We're going to run the same command again, but we're going to add another switch, which is dash, dash, fail, dash, on, high. So, what that's going to do is it's going to fail this tool, give a failed result from the tool, if any high vulnerabilities come back. So, we're going to run that again, no vulnerability updates, it's going to load the image. And, then after it loads the image, it's going to run the scan again. And, then you'll see here at the very bottom, it says one error occurred, discovered vulnerabilities at or above the severity threshold, right? So, your pipeline tool would take that and be able to fail the build if you wanted it to, based on the criteria sent back.
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/real-life-example?u=76281980&t=348)** So, we really won't go into setting up [[Jenkins]] in your pipeline, but you can really see how you could take this tool, and integrate it, and be able to control whether your bill passes or fails based on certain thresholds. You can do more with this tool, but this is an example of how you can start building your tool set to integrate into your [[DevSecOps]] process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[GitHub]] (2), [[Linux]] (1), [[Jenkins]] (1), [[DevSecOps]] (1)
> **CLI Commands:** docker (9), brew (3), make (3)
> **Prerequisites:** install (4), set up (2), prerequisite (1)
> **Env Vars:** json (3), osp (1), cve (1)
> **Tools:** command line (2), github (2)
> **Definitions:** is a  (2), is an  (2)
> **UI Navigation:** go to (2), click on (1)
> **URLs:** [anchor.com](https://anchor.com) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Grow and expand](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/grow-and-expand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/grow-and-expand?u=76281980&t=0)** - Now that we have talked about how to make the first step into [[DevSecOps]]. And we've seen a demo where we create our initial DevSecOps container. Let's talk about where we should go next to grow our security involvement with the [[DevOps]] teams. There are lots of places where we can take our DevSecOps process. We have our initial tool set, but don't be afraid to change. You can add tools, remove tools, or change tools. Always be challenging yourself to see what works well and what doesn't. Expand the process to more teams. In the previous video, we started out with one team, the team that's seen the most eager to try new things. Now that we have a tool set and process working, let's bring more people into the mix and roll DevSecOps out to many more teams. Grow your security containers. We started easy with some standard languages, but now expand to multiple languages or give some of the newer languages like [[Node.js]] a try. Increase the number of automated checks that you have in place. Automate the auditing of source code with tools like Crucible. And automate the review of [[Cloud Security]] checks for things like bad NACL policy in the cloud. And as the automation checks grow and mature, don't be afraid to automate the failing of builds. When a build has severe enough vulnerabilities, you can prevent the application from being promoted. We talk a little about integration of ChatOps in an earlier video, but this is a next great step that developers love. Work to integrate your DevSecOps tools into [[Slack]] or HipChat. Strong CICD teams have channels set up where they push their unit test results.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-devsecops-2022/grow-and-expand?u=76281980&t=94)** Use these same channels to send security vulnerabilities. For [[Continuous Monitoring]], use a tool like Contrast RASP to watch real time for threats against your application. Recon-ng can also be used as a monitoring tool to look for source code on public repositories or websites that have been deployed without security approval. Manual security tests are one of the hardest items to ensure to get tested. Tools can't test for everything. Think about password complexity or the ability of client A being able to see client B's data. These are manual test cases that many times get forgotten about when we talk about automation. Work with the development teams to create the scripts to be included in the automated [[Security Testing]]. These are just a few ideas of where to go next with DevSecOps. Different companies are at different levels of DevOps maturity. So there really is no one size fits all formula. But in the end, find what works for you and the development teams. Don't be afraid to continue to change and push security everywhere.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevSecOps]] (6), [[DevOps]] (2), [[Node.js]] (1), [[Cloud Security]] (1), [[Slack]] (1)
> **CLI Commands:** make (1), node (1), find (1)
> **Env Vars:** nacl (1), cicd (1), rasp (1)
> **Exercise Files:** source code (2)
> **File Paths:** node.js (1)
> **Cross-References:** previous video (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)


## Resources

- Exercise files available

## Skills Covered

- DevOps
- DevSecOps

## Path Context

### In [[Get Ahead in DevSecOps]]
**1 of 5** | [[DevSecOps- Automated Security Testing]] →

## Appears In

- [[Get Ahead in DevSecOps]]

## Related Courses

_Courses sharing skills:_

- [[Leveraging Google Cloud Developer and DevOps Tools]] — DevOps
- [[DevOps Foundations- Your First Project]] — DevOps
- [[DevOps Foundations- Monitoring and Observability]] — DevOps
- [[Advanced Data Engineering with Snowflake]] — DevOps
- [[Automated Data Governance in Practice]] — DevOps

---

[↑ Back to top](#)